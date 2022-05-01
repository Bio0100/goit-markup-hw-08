
(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        // document.body.classList.toggle("overflow-hidden");

        menuBtnRef.classList.toggle("header__bt-menu--active");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("header__mobile--active");        
    });
})();