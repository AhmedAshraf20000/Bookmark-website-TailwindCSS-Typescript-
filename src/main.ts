const menu = <HTMLUListElement>document.querySelector(".menu");
const icon = <HTMLDivElement>document.querySelector(".hamburger");
const tabsHeader: HTMLElement[] = Array.from(document.querySelectorAll("#tabs-header li"));
const tabsArray: HTMLElement[] = Array.from(document.querySelectorAll("#tabs-container>div"));

icon.onclick = () => {
    menu.classList.toggle('block');
    menu.classList.toggle('hidden');
    icon.classList.toggle('clicked');
}

tabsHeader.forEach((e, i) => e.onclick = () => {
    tabsHeader.forEach((e) => e.classList.remove("visited"));
    e.classList.add("visited");
    let tab: HTMLElement = tabsArray[i];
    tabsArray.forEach((e) => e.classList.add("hidden"));
    tab.classList.remove("hidden");
    tab.classList.add("flex");
})