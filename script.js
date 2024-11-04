const d = document;

d.addEventListener("click", (e) => {
  let $btnClose = d.querySelector(".btn__menu--close");
  let $btnOpen = d.querySelector(".btn__menu--open");
  let $navMenu = d.querySelector("nav")

  if (e.target.matches(".btn__menu--open")) {
    $btnOpen.classList.toggle("btn__menu--active");
    $btnClose.classList.toggle("btn__menu--active");
    $navMenu.classList.add("nav--active")
  } else if (e.target.matches(".btn__menu--close")) {
    $btnOpen.classList.toggle("btn__menu--active");
    $btnClose.classList.toggle("btn__menu--active");
    $navMenu.classList.remove("nav--active")

  } else if(!e.target.matches(".btn__menu")){
    $btnOpen.classList.add("btn__menu--active");
    $btnClose.classList.remove("btn__menu--active");
    $navMenu.classList.remove("nav--active")

  };

  function setActive(button) {
    let $btnLink = d.querySelectorAll(".link")
    $btnLink.forEach(el => {
      el.classList.remove("link--active")
      button.classList.add('link--active');
    })
  }


  if(e.target.matches(".link")){
    setActive(e.target)
  }


});



