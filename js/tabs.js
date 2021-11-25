
// destination tabs 

const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')
const btns = document.querySelectorAll("#dest-btns")

let tabFocus = 0;

tabList.addEventListener("keydown", changeFocus);

tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
})

function changeTabPanel(e) {
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls");
    const targetImage = targetTab.getAttribute("data-image");
    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer
        .querySelector("[aria-selected='true']")
        .setAttribute("aria-selected", false);

    targetTab.setAttribute("aria-selected", true);

    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel) => panel.setAttribute("hidden", true));
    
    mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

    mainContainer
    .querySelectorAll('picture')
    .forEach((img) => img.classList.add("hidden"));

    mainContainer.querySelector([`#${targetImage}`]).classList.remove("hidden")
}

function changeFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);

        if (e.keyCode === keydownRight) {
            tabFocus++;
           if (tabFocus >= tabs.length) {
               tabFocus = 0;
           }
       } else {
           tabFocus--;
           if (tabFocus < 0)  {
               tabFocus = tabs.length - 1;
           }
       }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
}