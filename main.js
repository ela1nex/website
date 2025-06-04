document.addEventListener("DOMContentLoaded", function() {
    const tab = document.getElementById("about-tab");
    document.getElementById("about-toggle").addEventListener("click", function() {
        tab.classList.toggle("show");
    });

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
    

});

document.getElementById("date").textContent = new Date().toLocaleDateString();

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});