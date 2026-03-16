export class Burger {
  constructor(selector, cover, mobileMenu) {
    this.burgerSelector = document.querySelector(selector);
    this.burgerCover = document.querySelector(cover);
    this.mobileMenu = document.querySelector(mobileMenu);
  }

  init() {
    console.log(this.burgerSelector + " Создан!");
    this.burgerSelector.addEventListener("click", () => {
      if (this.burgerSelector.classList.contains("burger--active")) {
        this.burgerSelector.classList.remove("burger--active");
        this.burgerCover.style.display = "none";
        this.mobileMenu.classList.remove("mobile-menu--active");
        document.body.style.overflow = "";
      } else {
        this.burgerSelector.classList.add("burger--active");
        this.burgerCover.style.display = "block";
        this.mobileMenu.classList.add("mobile-menu--active");
        document.body.style.overflow = "hidden";
      }
    });
  }
}
