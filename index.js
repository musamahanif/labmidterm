//const box = document.getElementsByTagName("i");
//box.addEventListener("click", (event) => {
//  event.target.remove();
//});

function c_click() {
  const box = document.getElementById("bob");
  box.addEventListener("click", (event) => {
    event.target.remove();
    box.remove("bob");
  });
}

function myFunction() {
  // Check browser support
  if (typeof Storage !== "undefined") {
    // Retrieve
    document.getElementById("qname").value = localStorage.getItem("qname");
    document.getElementById("aname").value = localStorage.getItem("aname");
    console.log("Retrieved successfully");
  }
}
