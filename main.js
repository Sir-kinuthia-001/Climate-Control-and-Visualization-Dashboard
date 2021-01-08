function loadcontent(){
  var contentDiv = document.getElementById("app");
  contentDiv.innerHTML = location.hash;
}

window.addEventListener("hashchange",loadcontent);
  loadcontent();
