// Verify semantic parity and geometry without requiring a browser or font runtime.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const {models}=JSON.parse(fs.readFileSync(path.join(root,'sequences.json')));
const {diagrams}=JSON.parse(fs.readFileSync(path.join(root,'diagram-inventory.json')));
let checks=0;
function same(actual,expected,label){assert.deepEqual(actual,expected,label);checks++;}
for(const m of models){
 same(m.phases.flatMap(p=>p.steps),m.steps,m.id+': phase partition retains every interaction');
 const steps=[];const conditions=[];const notes=[];
 for(const [,id,name] of m.original_source.matchAll(/participant (\w+) as ([^\n]+)/g))same(m.actors[id].name,name,m.id+': participant name');
 for(const [,id,name] of m.original_source.matchAll(/(\w+)\["([^"]+)"\]/g))same(m.actors[id].name,name,m.id+': dependency owner name');
 for(const [,name,id] of m.original_source.matchAll(/state "([^"]+)" as (\w+)/g))same(m.actors[id].name,name.replace(/\s+/g,' '),m.id+': named state identity');
 for(const raw of m.original_source.split('\n')){
  const line=raw.trim();
  if(m.kind==='sequenceDiagram'){
   if(/^(opt|alt) /.test(line))conditions.push(line.replace(/^(opt|alt) /,''));
   else if(line.startsWith('else '))conditions[conditions.length-1]=line.slice(5);
   else if(line==='end')conditions.pop();
   const message=line.match(/^(\w+)(--?>>)(\w+): (.+)$/);
   if(message)steps.push({from:message[1],to:message[3],action:message[4],kind:message[2]==='-->>'?'return':'message',condition:conditions.join(' / ')});
   const note=line.match(/^Note over [^:]+: (.+)$/);
   if(note)notes.push({after:steps.length,text:note[1]});
  }else if(m.kind.startsWith('flowchart')){
   const clean=line.replace(/(\w+)\["[^"]+"\]/g,'$1');
   if(!clean.includes('-->')&&!clean.includes('-.'))continue;
   const edge=clean.match(/^(\w+)\s.*?(\w+)$/);assert(edge,clean);
   const condition=clean.match(/"([^"]+)"/)?.[1]||'';
   steps.push({from:edge[1],to:edge[2],action:condition||'Business dependency',kind:clean.includes('-.')?'control':'dependency',condition});
  }else{
   const edge=line.match(/^(\[\*\]|\w+) --> (\w+): (.+)$/);
   if(edge)steps.push({from:edge[1]==='[*]'?'START':edge[1],to:edge[2],action:edge[3],kind:edge[2]==='R'?'new aggregate':'state change',condition:''});
  }
 }
 same(steps,m.steps.map(({id,number,...rest})=>rest),m.id+': exact source interactions and branches');
 same(notes,m.notes||[],m.id+': explanatory notes');
 const page=fs.readFileSync(path.join(root,'../..',m.page),'utf8');
 same(/overflow-x\s*:|Scroll diagram horizontally|min-width:\s*(840|1400)/i.test(page),false,m.id+': no fixed scroll wrapper');
 for(const phase of m.phases){
  const variants=diagrams.filter(d=>d.phase===phase.id);
  same(variants.length,4,phase.id+': light/dark and wide/narrow');
  for(const d of variants){same(d.stepIds,phase.steps.map(s=>s.id),d.file+': semantic identity');same(page.includes(d.file),true,d.file+': linked layout');}
 }
}
for(const d of diagrams){
 same(fs.existsSync(path.join(root,d.file)),true,d.file+': exists');
 same(d.pieceSource,'canonical',d.file+': brand pieces');
 for(let i=0;i<d.labels.length;i++){
  const a=d.labels[i];
  same(a.size>=d.minimumType&&d.minimumType>=12,true,d.file+': minimum label size');
  same(a.x>=0&&a.y>=0&&a.x+a.w<=d.width&&a.y+a.h<=d.height,true,d.file+': bounded text');
  for(const b of d.labels.slice(i+1))same(Math.min(a.x+a.w,b.x+b.w)>Math.max(a.x,b.x)&&Math.min(a.y+a.h,b.y+b.h)>Math.max(a.y,b.y),false,d.file+': overlapping labels');
 }
}
console.log(JSON.stringify({models:models.length,interactions:models.reduce((n,m)=>n+m.steps.length,0),variants:diagrams.length,checks}));
