(() => {
    const header = document.getElementById("dynamic-header")

    const getTabLabel = (e) => {
        const el = e.target
        if (!el.classList.contains("landing-tab")){
            if(header.innerText.toLowerCase() !== "home"){
                header.innerText = "Home"
            }
            return
        }
        const tabLabel = el.getAttribute("data-label")
        
        header.innerText = tabLabel
    }
    window.addEventListener("mousemove", getTabLabel)
})()