// Show the asidebar when click product
document.querySelectorAll(".product-link").addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "250px") {
    sidebar.style.left = "0px";
  } else {
    sidebar.style.left = "0px";
  }
});

// Hide the sidebar when a link inside it is clicked
var sidebarLinks = document.querySelectorAll(".main");

sidebarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("sidebar").style.left = "-250px";
  });
});
