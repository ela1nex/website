document.addEventListener("DOMContentLoaded", function() {
    const aboutTab = document.getElementById("about-tab");
    const aboutToggle = document.getElementById("about-toggle");
    const graphicTab = document.getElementById("graphic-design-tab");
    const graphicToggle = document.getElementById("graphic-design-toggle");

    aboutToggle.addEventListener("click", () => {
        aboutTab.classList.toggle("show");
    });
    graphicToggle.addEventListener("click", () => {
        graphicTab.classList.toggle("show");
    });

    function makeDraggable(tab) {
        let newX = 0, newY = 0, startX = 0, startY = 0;

        tab.addEventListener('mousedown', mouseDown)
        function mouseDown(e) {
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

            tab.style.left = (tab.offsetLeft + newX) + 'px'
            tab.style.top = (tab.offsetTop + newY) + 'px'

            console.log({newX, newY});
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