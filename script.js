// script.js
function showDescription(id, element) {
    const description = document.getElementById(id);
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        element.textContent = "Ocultar Descrição";
    } else {
        description.style.display = "none";
        element.textContent = "Ver Descrição";
    }
}

function showHearts(element) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    element.parentElement.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}
