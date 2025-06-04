document.addEventListener("DOMContentLoaded", function() {
    const aboutTab = document.getElementById("about-tab");
    const aboutToggle = document.getElementById("about-toggle");
    const graphicTab = document.getElementById("graphic-design-tab");
    const graphicToggle = document.getElementById("graphic-design-toggle");

    const baseZIndex = 9999;
    function bringToFront(tabToBring) {
        aboutTab.style.zIndex = baseZIndex;
        graphicTab.style.zIndex = baseZIndex;

        tabToBring.style.zIndex = baseZIndex + 1;
    }

    aboutToggle.addEventListener("click", () => {
        aboutTab.classList.toggle("show");
        if (aboutTab.classList.contains("show")) {
            bringToFront(aboutTab);
        }
    });
    graphicToggle.addEventListener("click", () => {
        graphicTab.classList.toggle("show");
        if (graphicTab.classList.contains("show")) {
            bringToFront(graphicTab);
        }
    });

    function makeDraggable(tab) {
        let newX = 0, newY = 0, startX = 0, startY = 0;

        tab.addEventListener('mousedown', mouseDown)
        function mouseDown(e) {
            bringToFront(tab);
            startX = e.clientX
            startY = e.clientY

            document.addEventListener('mousemove', mouseMove)
            document.addEventListener('mouseup', mouseUp)
        }

        function mouseMove(e) {
            newX = e.clientX - startX
            newY = e.clientY - startY

            startX = e.clientX
            startY = e.clientY

            const tabRect = tab.getBoundingClientRect();
            const parent = document.documentElement;

            let newLeft = tab.offsetLeft + newX;
            let newTop = tab.offsetTop + newY;

            const tabWidth = tab.offsetWidth;
            const tabHeight = tab.offsetHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            newLeft = Math.max(0, Math.min(newLeft, windowWidth - tabWidth));
            newTop = Math.max(0, Math.min(newTop, windowHeight - tabHeight));

            tab.style.left = newLeft + 'px';
            tab.style.top = newTop + 'px';
        }

        function mouseUp() {
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseup', mouseUp)
        }
    }

    makeDraggable(aboutTab);
    makeDraggable(graphicTab);

});

document.getElementById("date").textContent = new Date().toLocaleDateString();

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});