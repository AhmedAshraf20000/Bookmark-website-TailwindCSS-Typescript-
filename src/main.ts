const menu = <HTMLUListElement>document.querySelector(".menu");
const icon = <HTMLDivElement>document.querySelector(".hamburger");
const tabsHeader: HTMLElement[] = Array.from(document.querySelectorAll("#tabs-header li"));
const tabsArray: HTMLElement[] = Array.from(document.querySelectorAll("#tabs-container>div"));
const arrowDiv: HTMLElement[] = Array.from(document.querySelectorAll(".tabs li>div:first-child div"));
const arrow: HTMLElement[] = Array.from(document.querySelectorAll(".tabs li>div:first-child"));
const tabText: HTMLElement[] = Array.from(document.querySelectorAll(".tabs li>div:last-child"))

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

arrow.forEach(((e, i) => {
    let div = arrowDiv[i];
    let tab = tabText[i];
    e.onclick = () => {
        arrowDiv.forEach(e => e.classList.remove("active"));
        tabText.forEach(e => e.classList.remove("active"));
        div.classList.add("active");
        tab.classList.add("active");
    }
}))
