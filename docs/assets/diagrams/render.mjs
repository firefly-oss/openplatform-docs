// Source-native manual diagrams. Run from a configured brand-kit workspace.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
const out=path.dirname(fileURLToPath(import.meta.url));
const brand=path.resolve(process.env.BRAND_KIT_ROOT || path.join(out,'../../../../brand-kit'));
process.chdir(brand);
const load=(name)=>import(pathToFileURL(path.join(brand,'scripts/lib/diagrams',name)).href);
const {Scene,layoutText}=await load('scene.mjs');
const {stage,piece,flush,SOURCE}=await load('pieces.mjs');
const {connect}=await load('parts.mjs');
const {toSvg}=await load('render.mjs');
const rows=[
 ['Channels','neutral',[['Customer','Self-service intent'],['Staff','Assisted operations'],['Partner','Authorized distribution']]],
 ['Experience and domain','firefly',[['Banking','Accounts · cards · payments'],['Lending','Origination · servicing'],['Insurance','Policies · claims · premium']]],
 ['Authoritative cores','institution',[['Accounts and ledger','Records · balanced postings'],['Loans and schedules','Agreements · installments'],['Policies and claims','Coverage records · reserves']]],
 ['Selected integrations','thirdparty',[['Rails and processors','External payment outcomes'],['Bureaus and specialists','Evidence and decisions'],['Signature and delivery','Provider-owned outcomes']]],
 ['Shared foundations','process',[['Identity and authority','Subject · tenant · permission'],['Products and contracts','Terms · documents · evidence'],['Data and control','Audit · accounting · reporting']]]
];
const metadata=[];
for(const theme of ['light','dark'])for(const narrow of [false,true]) {
 const id='platform-landscape'+(narrow?'-narrow':'')+'-'+theme;
 const s=new Scene({id,theme,locale:'en'});s.width=narrow?320:1104;s.height=narrow?1120:800;
 const st=stage(s,{view:'front',pitch:32});
 s.text('How OpenPlatform fits together',{x:32,y:32,w:s.width-64,style:{base:'title',size:narrow?24:32,leading:36}});
 s.text('Business intent. Decisions. Durable effects.',{x:32,y:narrow?112:88,w:s.width-64,style:{base:'secondary',size:narrow?18:16,leading:24}});
 for(let i=0;i<rows.length;i++) {
  const [title,kind,items]=rows[i]; const y=(narrow?192:144)+i*(narrow?168:120);
  s.text(title,{x:32,y,w:s.width-64,style:{base:'secondary',size:narrow?18:14,weight:600,leading:24},fill:s.t.secondary});
  if(narrow) {
   piece(s,{stage:st,id:`r${i}`,kind,size:[2,2],at:[16,y+40]});
   const labels=[['Customer · staff · partner','Self-service and assisted work'],['Banking · lending · insurance','Experience composes domain actions'],['Records · money · history','Each core owns its durable effects'],['Rails · bureaus · signing','Adapters reach external authorities'],['Identity · terms · evidence','Shared controls span every journey']][i];
   s.text(labels[0],{x:96,y:y+40,w:208,style:{base:'label',size:18,leading:24}});
   s.text(labels[1],{x:96,y:y+96,w:208,style:{base:'secondary',size:narrow?18:14,leading:24},fill:s.t.secondary});
  } else for(let j=0;j<3;j++) {
   const x=32+j*360;piece(s,{stage:st,id:`r${i}c${j}`,kind,size:[2,2],at:[x,y+40]});
   s.text(items[j][0],{x:x+80,y:y+40,w:264,style:{base:'label',size:19,leading:25}});
   s.text(items[j][1],{x:x+80,y:y+72,w:264,style:{base:'secondary',size:narrow?18:14,leading:24},fill:s.t.secondary});
  }
  if(i<rows.length-1) connect(s,'data',[[64,y+96],[64,y+(narrow?136:112)]],{corner:0});
 }
 flush(s,st);
 s.text(narrow?'Ownership map. Readiness varies.':'Conceptual ownership map · service and provider readiness vary',{x:32,y:s.height-(narrow?64:48),w:s.width-64,style:{base:'secondary',size:narrow?18:13,leading:24},fill:s.t.secondary});
 fs.writeFileSync(`${out}/${id}.svg`,toSvg(s,{title:'OpenPlatform landscape: channels, domain journeys, owning cores, external integrations, and shared foundations'}));
 metadata.push({file:id+'.svg',width:s.width,height:s.height,pieceSource:SOURCE,minimumType:narrow?18:13,theme,narrow,labels:s.items.filter(i=>i.type==='text').map(i=>({text:i.lines.join(' '),x:i.x,y:i.y,w:i.w,h:i.h,size:i.size}))});
}
const specs=[
 {id:'money-and-evidence',title:'One payment, several authorities',caption:'Read each owner before deciding what happened.',steps:[
 ['neutral','Customer intent','Amount, currency and destination'],['process','Authority and decision','Permission, terms and prerequisites'],['institution','Local financial effect','Balanced aggregate and history'],['thirdparty','External outcome','Accepted, rejected or uncertain'],['datastore','Reconciliation','Compare independent records'],['neutral','Customer and operator result','Explain facts and next action']]},
 {id:'signature-evidence',title:'Signature evidence stays with its owner',caption:'Current managed synthetic lifecycle. No live signing implied.',steps:[
 ['firefly','Contract request','Tenant, document, signer and key'],['institution','Validate and retain binding','Owned document and active provider'],['institution','Pending provider request','Durable identity and provenance'],['process','Explicit synthetic outcome','Simulator action; never auto-complete'],['firefly','Verify bound outcome','Same tenant and contract scope'],['datastore','Retain evidence','Restart and deletion guards']]},
 {id:'insurance-cover-to-cash',title:'From coverage to reconciled obligations',caption:'Business dependency model. Each integration needs qualification.',steps:[
 ['firefly','Submission and offered terms','Risk, product and effective period'],['process','Underwriting and acceptance','Decision, authority and conditions'],['institution','Policy and coverage','Retained terms and effective version'],['institution','Premium and claim obligations','Billing, assessment and settlement'],['thirdparty','Cash and external outcomes','Collection, payment and recoveries'],['datastore','Insurance financial close','Reserve, reinsurance and accounting']]}
];
const inventory={brandSource:'brand-kit canonical diagram library and data/design-system/tokens.json',diagrams:metadata};
for(const spec of specs)for(const theme of ['light','dark'])for(const narrow of [false,true]){
 const id=spec.id+(narrow?'-narrow':'')+'-'+theme;
 const s=new Scene({id,theme,locale:'en'});s.width=narrow?320:1104;s.height=narrow?1264:848;
 const st=stage(s,{view:'front',pitch:32});
 s.text(narrow?({"money-and-evidence":"One payment, several owners","signature-evidence":"Signature evidence and ownership","insurance-cover-to-cash":"Coverage to financial close"}[spec.id]):spec.title,{x:32,y:32,w:s.width-64,style:{base:'title',size:narrow?24:32,leading:36}});
 s.text(narrow?'Follow each authority in order.':'Read in sequence across each row, then follow the connecting line.',{x:32,y:112,w:s.width-64,style:{base:'secondary',size:narrow?18:14,leading:24}});
 const positions=narrow?spec.steps.map((_,i)=>[16,192+i*168]):[[32,192],[576,192],[576,384],[32,384],[32,576],[576,576]];
 for(let i=0;i<spec.steps.length;i++){
  const [kind,label,sub]=spec.steps[i];const [x,y]=positions[i];
  piece(s,{stage:st,id:'step'+i,kind,size:[2,2],at:[x,y]});
  s.text(label,{x:x+80,y,w:narrow?208:416,style:{base:'label',size:19,leading:26}});
  s.text(sub,{x:x+80,y:y+64,w:narrow?208:416,style:{base:'secondary',size:narrow?18:15,leading:24},fill:s.t.secondary});
  if(i<5){
   let pts;
   if(narrow)pts=[[64,y+72],[64,y+128]];
   else if(i===0||i===4)pts=[[528,y+24],[560,y+24]];
   else if(i===1)pts=[[608,y+112],[608,y+168]];
   else if(i===2)pts=[[560,y+24],[528,y+24]];
   else pts=[[64,y+112],[64,y+168]];
   connect(s,'data',pts,{corner:0});
  }
 }
 flush(s,st);
 s.text(narrow?({"money-and-evidence":"Read each authority before repair.","signature-evidence":"Durable synthetic lifecycle.","insurance-cover-to-cash":"Business dependencies, not live proof."}[spec.id]):spec.caption,{x:32,y:s.height-64,w:s.width-64,style:{base:'secondary',size:narrow?18:14,leading:24},fill:s.t.secondary});
 fs.writeFileSync(`${out}/${id}.svg`,toSvg(s,{title:spec.title+'. '+spec.caption}));
 inventory.diagrams.push({file:id+'.svg',width:s.width,height:s.height,pieceSource:SOURCE,minimumType:narrow?18:14,theme,narrow,labels:s.items.filter(i=>i.type==='text').map(i=>({text:i.lines.join(' '),x:i.x,y:i.y,w:i.w,h:i.h,size:i.size}))});
}

// Each phase retains its original message IDs, participants, returns and branches.
// The compact composition changes geometry only; it never drops an interaction.
const models=JSON.parse(fs.readFileSync(path.join(out,'sequences.json'),'utf8')).models;
const type={base:'label',size:18,leading:24};
function textBlock(s,value,x,y,w,overrides={}) {
 const style={...type,...overrides};
 const layout=layoutText(value,w,style,'en',Infinity);
 for(let i=0;i<layout.lines.length;i+=2) {
  s.text(layout.lines.slice(i,i+2).join('\n'),{x,y:y+i*style.leading,w,style});
 }
 return Math.ceil(layout.lines.length*style.leading/8)*8;
}
const modelTitles={
 'introduction-execution-model':'An instruction across owners',
 'introduction-data-and-money':'Ledger state transitions',
 'journeys-shared':'Managed signature sequence',
 'journeys-lending':'Lending dependencies',
 'journeys-payments':'Payment coordination sequence',
 'journeys-accounts':'Space creation and funding',
 'journeys-banking':'Banking ownership dependencies',
 'journeys-cards':'Card authorization sequence',
 'journeys-insurance':'Insurance dependencies',
 'managed-payments-ownership':'Internal payment authorities',
 'managed-payments-effects':'A durable payment effect'
};
for(const model of models)for(const phase of model.phases)for(const theme of ['light','dark'])for(const narrow of [false,true]) {
 const id=phase.id+(narrow?'-narrow':'')+'-'+theme;
 const s=new Scene({id,theme,locale:'en'});s.width=narrow?320:960;
 const st=stage(s,{view:'front',pitch:32});
 let y=24;
 y+=textBlock(s,modelTitles[model.id],16,y,s.width-32,{base:'title',size:24,leading:32})+16;
 const sequence=model.kind==='sequenceDiagram';
 y+=textBlock(s,`${phase.title.replace(/–/g,' to ')}. ${sequence?'Messages':'Connections'} ${phase.steps[0].number} to ${phase.steps.at(-1).number}.`,16,y,s.width-32)+24;
 if(!sequence)y+=textBlock(s,'Read each connection independently.',16,y,s.width-32)+24;
 for(const step of phase.steps){
  y+=textBlock(s,`${String(step.number).padStart(2,'0')}  ${step.kind.toUpperCase()}`,16,y,s.width-32,{weight:700})+8;
  if(step.condition&&!model.labelsDescribeConnections)y+=textBlock(s,'When: '+step.condition,16,y,s.width-32)+16;
  const from=model.actors[step.from],to=model.actors[step.to];
  if(narrow){
   y+=textBlock(s,sequence?'FROM':'SOURCE',16,y,288,{weight:600})+8;
   piece(s,{stage:st,id:`${step.id}-from`,kind:from.family,size:[2,2],at:[16,y]});
   y+=Math.max(64,textBlock(s,from.name,96,y,208))+16;
   y+=textBlock(s,step.action,16,y,288)+8;
   connect(s,'data',[[48,y],[48,y+24]],{corner:0});y+=40;
   y+=textBlock(s,sequence?'TO':'TARGET',16,y,288,{weight:600})+8;
   piece(s,{stage:st,id:`${step.id}-to`,kind:to.family,size:[2,2],at:[16,y]});
   y+=Math.max(64,textBlock(s,to.name,96,y,208))+24;
  }else{
   textBlock(s,sequence?'FROM':'SOURCE',16,y,288,{weight:600});
   textBlock(s,sequence?'TO':'TARGET',656,y,288,{weight:600});y+=32;
   piece(s,{stage:st,id:`${step.id}-from`,kind:from.family,size:[2,2],at:[16,y]});
   piece(s,{stage:st,id:`${step.id}-to`,kind:to.family,size:[2,2],at:[656,y]});
   const a=textBlock(s,from.name,96,y,224),b=textBlock(s,to.name,736,y,208);
   const h=textBlock(s,step.action,344,y,288);
   connect(s,'data',[[344,y+h+16],[624,y+h+16]],{corner:0});
   y+=Math.max(64,a,b,h+24)+24;
  }
  for(const note of (model.notes||[]).filter(n=>n.after===step.number))y+=textBlock(s,'Note: '+note.text,16,y,s.width-32)+16;
  s.polyline({points:[[16,y],[s.width-16,y]],stroke:s.t.secondary||'#62645B',strokeWidth:1});y+=24;
 }
 s.height=y+8;flush(s,st);
 fs.writeFileSync(path.join(out,id+'.svg'),toSvg(s,{title:`${modelTitles[model.id]}. ${phase.title}. ${sequence?'Numbered messages and returns; conditional branches are labeled.':'Dependencies and state connections; numbering does not imply execution order.'}`}));
 inventory.diagrams.push({file:id+'.svg',width:s.width,height:s.height,pieceSource:SOURCE,minimumType:18,theme,narrow,model:model.id,phase:phase.id,stepIds:phase.steps.map(x=>x.id),labels:s.items.filter(i=>i.type==='text').map(i=>({text:i.lines.join(' '),x:i.x,y:i.y,w:i.w,h:i.h,size:i.size}))});
}

fs.writeFileSync(out+'/diagram-inventory.json',JSON.stringify(inventory,null,2)+'\n');console.log(`Generated ${inventory.diagrams.length} manual diagram variants`);

// Record the exact source bytes and font packages that produced this export.
const {createHash}=await import('node:crypto');
const {execFileSync}=await import('node:child_process');
const digest=(p)=>createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const walk=(dir)=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(dir,entry.name)):[path.join(dir,entry.name)]);
let revision=process.env.BRAND_KIT_REVISION || null;
if(!revision){try{revision=execFileSync('git',['-C',brand,'rev-parse','HEAD'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim();}catch{}}
const inputs=[...walk(path.join(brand,'scripts')),...walk(path.join(brand,'data')),path.join(brand,'package.json')].filter(p=>/\.(mjs|json)$/.test(p)).sort();
const manifest={
 brand_revision:revision,
 brand_root:'../brand-kit',
 source_note:'Current checkout bytes, which can differ from the base revision. Extra source files are hashed conservatively; not all are imported by every composition.',
 inputs:Object.fromEntries(inputs.map(p=>[path.relative(brand,p),digest(p)])),
 renderer_sha256:digest(fileURLToPath(import.meta.url)),
 semantic_source_sha256:digest(path.join(out,'sequences.json')),
 qualification_dependencies:Object.fromEntries(['fontkit','@fontsource/manrope'].map(name=>[name,JSON.parse(fs.readFileSync(path.join(brand,'node_modules',name,'package.json'))).version])),
 svg_sha256:Object.fromEntries(fs.readdirSync(out).filter(n=>n.endsWith('.svg')).sort().map(n=>[n,digest(path.join(out,n))]))
};
fs.writeFileSync(path.join(out,'source-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(`Recorded ${inputs.length} brand inputs and ${Object.keys(manifest.svg_sha256).length} SVG hashes`);
