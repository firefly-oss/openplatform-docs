(function () {
  var icons = {
    "Presentation": "/assets/nav/spark.svg",
    "Start here": "/assets/nav/light-trail.svg",
    "Jafly": "/assets/nav/rules-decide.svg",
    "Architecture": "/assets/nav/backbone.svg",
    "Banking": "/assets/nav/bank.svg",
    "Insurance": "/assets/nav/cover.svg",
    "Shared": "/assets/nav/module.svg",
    "API": "/assets/nav/api.svg",
    "Catalog": "/assets/nav/catalogue.svg"
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
      fetch(job.src)
        .then(function (response) { return response.text(); })
        .then(function (markup) {
          svgText[job.src] = markup;
          if (job.link.isConnected) mountIcon(job.link, markup);
          else decorate();
        });
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
          if (other !== toggle) other.checked = false;
        });
      });
    });
    sectionLabels().forEach(function (label) {
      if (label.dataset.ffKey) return;
      label.dataset.ffKey = "1";
      label.tabIndex = 0;
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

  function boot() {
    decorate();
    accordion();
  }

  if (typeof document$ !== "undefined") {
    document$.subscribe(boot);
  } else {
    document.addEventListener("DOMContentLoaded", boot);
  }
})();
