const header = document.getElementById("header");
const tabs = document.querySelectorAll(".square-navbar img");
const defaultText = header.textContent;

const headerText = {
    about: "ABOUT ME",
    cat: "CATALOGUE",
    projects: "PROJECTS",
    gallery: "GALLERY",
    extra: "EXTRAS"
};

tabs.forEach(tab => {
    tab.addEventListener("mouseenter", () => {
        const id = tab.id;
        header.textContent = headerText[id] || defaultText;
    });

    tab.addEventListener("mouseleave", () => {
        header.textContent = defaultText;
    });
});