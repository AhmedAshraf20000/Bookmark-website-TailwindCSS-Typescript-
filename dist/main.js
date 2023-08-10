"use strict";
const menu = document.querySelector(".menu");
const icon = document.querySelector(".hamburger");
const tabsHeader = Array.from(document.querySelectorAll("#tabs-header li"));
const tabsArray = Array.from(document.querySelectorAll("#tabs-container>div"));
icon.onclick = () => {
    menu.classList.toggle('block');
    menu.classList.toggle('hidden');
    icon.classList.toggle('clicked');
};
tabsHeader.forEach((e, i) => e.onclick = () => {
    tabsHeader.forEach((e) => e.classList.remove("visited"));
    e.classList.add("visited");
    let tab = tabsArray[i];
    tabsArray.forEach((e) => e.classList.add("hidden"));
    tab.classList.remove("hidden");
    tab.classList.add("flex");
});
