(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelectorAll(".mobile-menu__link"),i=document.querySelector(".js-close-menu"),c=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),t.classList.toggle("is-active"),e.classList.toggle("is-open")};t.addEventListener("click",c),n.forEach((e=>e.addEventListener("click",c))),i.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})();
//# sourceMappingURL=index.266e5748.js.map