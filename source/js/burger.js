const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


window.addEventListener("resize", (e) => {
  const width = e.target.innerWidth;

  if (width > 769) {
    burgerMenu.classList.remove("close");
  }
})
