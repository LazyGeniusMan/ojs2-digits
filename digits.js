// Add style to TinyMCE iframe
window.onload = function () {
  let tmces = document.getElementsByClassName("mceIframeContainer");
  for (var i = 0; i < tmces.length; i++) {
    let doc = tmces[i].getElementsByTagName("iframe")[0].contentDocument;
    doc.body.innerHTML =
      doc.body.innerHTML + "<style>body{font-size:1em;}</style>";
  }
};

// Remove whitespace between login and PAus buttin
var el = document.querySelector("#sidebarUser");
el.innerHTML = el.innerHTML.replace(/&nbsp;/g, "");
