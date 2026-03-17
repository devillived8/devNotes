export class Burger {
  constructor(selector, cover, mobileMenu, activeClass = "--active") {
    this.burgerSelector = document.querySelector(selector);
    this.burgerCover = document.querySelector(cover);
    this.mobileMenu = document.querySelector(mobileMenu);
    this.activeClass = activeClass;
    this.isOpen = false;
    this.burgerBaseClass = selector.replace(".", "");
    this.menuBaseClass = mobileMenu.replace(".", "");
  }



  init() {
    this.burgerState();
    this.closeByOverlay();
    this.closeByKey();
  }

  checkState() {
    this.burgerSelector?.classList.toggle(
      `${this.burgerBaseClass}${this.activeClass}`,
      this.isOpen,
    );
    this.mobileMenu?.classList.toggle(
      `${this.menuBaseClass}${this.activeClass}`,
      this.isOpen,
    );
    this.burgerCover.style.display = this.isOpen ? "block" : "none";
    document.body.style.overflow = this.isOpen ? "hidden" : "";
  }

  burgerState() {
    this.burgerSelector?.addEventListener("click", () => {
      this.isOpen = !this.isOpen;
      this.checkState();
    });
  }

  closeBurger() {
    this.isOpen = !this.isOpen;
    this.checkState();
  }

  closeByOverlay() {
    this.burgerCover?.addEventListener("click", (e) => {
      if (e.target === this.burgerCover) {
        this.closeBurger();
      }
    });
  }

  closeByKey() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeBurger();
      }
    });
  }
}
