const { createElement } = require("react");

const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addEvent");
const container = document.getElementById("eventsContainer");

addBtn.addEventListener("click", function () {
    if (titleInput.value === ""){
        alert("Event title required");
        return;
    }

    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
    <h3>${titleInput.value}</h3>
    <p>Date: ${dateInput.value}</p>
    <p>Category: ${categoryInput.value}</p>
    <button class="highlight">Highlight</button>
    <button class="delete">Delete</button>
`;
    container.appendChild(card);

    titleInput.value = "";
    dateInput.value = "";
});

container.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }

    if (event.target.classList.contains("highlight")) {
        event.target.parentElement.classList.toggle("active");
    }
});