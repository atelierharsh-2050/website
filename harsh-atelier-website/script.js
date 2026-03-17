// POPUP (for "See more")
const readMoreBtns = document.querySelectorAll(".read-more");

readMoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Popup will come here"); // later replace
    });
});


// HORIZONTAL SCROLL (vertical scroll → horizontal move)
window.addEventListener("wheel", function(e) {
  e.preventDefault();

  window.scrollBy({
    left: e.deltaY,
    behavior: "smooth"
  });

}, { passive: false });