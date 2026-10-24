(function () {
  var iconBase = new URL("../assets/nav/", document.currentScript.src);
  var icons = {
    "Overview": "spark.svg",
    "Introduction": "module.svg",
    "Get started": "light-trail.svg",
    "Business journeys": "bank.svg",
    "Architecture": "backbone.svg",
    "Integrations": "module.svg",
    "Operate": "rules-decide.svg",
    "Reference": "catalogue.svg"
  };

  function topItems() {
    return document.querySelectorAll(
      ".md-sidebar--primary nav.md-nav--primary > .md-nav__list > .md-nav__item"
    );
  }

  function labelOf(item) {
    var link = item.querySelector(
      ":scope > a.md-nav__link, :scope > label.md-nav__link, :scope > .md-nav__container > a.md-nav__link"
    );
    if (!link) return "";
    var ellipsis = link.querySelector(".md-ellipsis");
    return (ellipsis ? ellipsis.textContent : link.textContent).replace(/\s+/g, " ").trim();
  }

  var svgText = {};

  function visibleControl(item) {
    var anchor = item.querySelector(
      ":scope > a.md-nav__link, :scope > .md-nav__container > a.md-nav__link"
    );
    if (anchor) return anchor;
    var label = item.querySelector(":scope > label.md-nav__link");
    if (!label || label.getAttribute("for") === "__toc") return null;
    return label;
  }

  function mountIcon(link, markup) {
    if (link.querySelector(".ff-nav-icon")) return;
    var svg = new DOMParser().parseFromString(markup, "image/svg+xml").querySelector("svg");
    if (!svg) return;
    svg.classList.add("ff-nav-icon");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    link.insertBefore(svg, link.firstChild);
  }

  function decorate() {
    var missing = [];
    topItems().forEach(function (item) {
      var name = labelOf(item);
      var src = icons[name];
      var link = visibleControl(item);
      if (!src || !link || link.querySelector(".ff-nav-icon")) return;
      if (svgText[src]) {
        mountIcon(link, svgText[src]);
      } else {
        missing.push({ link: link, src: src });
      }
    });
    missing.forEach(function (job) {
      fetch(new URL(job.src, iconBase))
        .then(function (response) { return response.text(); })
        .then(function (markup) {
          svgText[job.src] = markup;
          if (job.link.isConnected) mountIcon(job.link, markup);
          else decorate();
        }).catch(function () { /* Navigation remains usable without decoration. */ });
    });
  }

  function topToggles() {
    return document.querySelectorAll(
      ".md-sidebar--primary nav.md-nav--primary > .md-nav__list > .md-nav__item > input.md-nav__toggle"
    );
  }

  function sectionLabels() {
    return document.querySelectorAll(
      ".md-sidebar--primary .md-nav__item--section > label.md-nav__link, .md-sidebar--primary .md-nav__item--nested > label.md-nav__link"
    );
  }

  function accordion() {
    var toggles = topToggles();
    toggles.forEach(function (toggle) {
      if (toggle.dataset.ffAccordion) return;
      toggle.dataset.ffAccordion = "1";
      toggle.addEventListener("change", function () {
        if (!toggle.checked) return;
        toggles.forEach(function (other) {
          if (other !== toggle && other.checked) {
            other.checked = false;
            other.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      });
    });
    sectionLabels().forEach(function (label) {
      if (label.dataset.ffKey) return;
      label.dataset.ffKey = "1";
      label.tabIndex = 0;
      label.setAttribute("role", "button");
      var controlled = document.getElementById(label.htmlFor);
      if (controlled) {
        label.setAttribute("aria-expanded", String(controlled.checked));
        controlled.addEventListener("change", function () {
          label.setAttribute("aria-expanded", String(controlled.checked));
        });
      }
      label.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        if (event.repeat) return;
        event.preventDefault();
        label.dataset.ffFromKey = "1";
        var input = document.getElementById(label.htmlFor);
        if (!input) return;
        input.checked = !input.checked;
        input.dispatchEvent(new Event("change", { bubbles: true }));
      });
      label.addEventListener("click", function (event) {
        if (label.dataset.ffFromKey !== "1") return;
        label.dataset.ffFromKey = "";
        event.preventDefault();
      });
    });
  }

  function syncDiagramTheme() {
    var dark = document.body.getAttribute("data-md-color-scheme") === "slate";
    document.querySelectorAll('picture source[media*="prefers-color-scheme"], picture source[data-ff-media]').forEach(function (source) {
      var original = source.dataset.ffMedia || source.media;
      source.dataset.ffMedia = original;
      var wantsDark = /prefers-color-scheme:\s*dark/.test(original);
      source.media = dark !== wantsDark ? "not all" :
        original.replace(/\s*and\s*\(prefers-color-scheme:[^)]+\)/, "")
          .replace(/\(prefers-color-scheme:[^)]+\)/, "all");
    });
  }

  function boot() {
    var drawer = document.getElementById("__drawer");
    var navigation = document.querySelector(".md-sidebar--primary");
    var menu = document.querySelector('header label[for="__drawer"]');
    if (drawer && navigation && menu) {
      navigation.id = "ff-navigation";
      menu.setAttribute("aria-controls", navigation.id);
      menu.setAttribute("aria-expanded", String(drawer.checked));
      if (!drawer.dataset.ffDismiss) {
        drawer.dataset.ffDismiss = "1";
        drawer.addEventListener("change", function () {
          menu.setAttribute("aria-expanded", String(drawer.checked));
        });
      }
    }
    document.querySelectorAll('header label[role="button"]').forEach(function (label) {
      if (label.dataset.ffHeaderKey) return;
      label.dataset.ffHeaderKey = "1";
      label.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        event.stopPropagation();
        if (event.repeat) return;
        label.click();
      });
    });
    syncDiagramTheme();
    decorate();
    accordion();
  }

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape") return;
    var search = document.getElementById("__search");
    if (search && search.checked) return;
    var drawer = document.getElementById("__drawer");
    if (!drawer || !drawer.checked) return;
    drawer.checked = false;
    drawer.dispatchEvent(new Event("change", { bubbles: true }));
    var menu = document.querySelector('header label[for="__drawer"]');
    if (menu) menu.focus();
    event.preventDefault();
  });

  new MutationObserver(syncDiagramTheme).observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

  if (typeof document$ !== "undefined") {
    document$.subscribe(boot);
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
