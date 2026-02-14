const form = document.getElementById("eventForm");
const container = document.getElementById("eventsContainer");
const clearBtn = document.getElementById("clearEvents");
const sampleBtn = document.getElementById("addSample");
const titleInput = document.getElementById("title");


function createEventCard(title, date, category, description) {

    const categoryColor= {
        Workshop: "#3498db",
        Meeting: "#f39c12",
        Party: "#e74c3c",
        Sports: "#2ecc71",
        Fitness: "#9b59b6"
    };

    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
        <h3>${title}</h3>
        <p>Date: ${date}</p>
        <p>Category: 
            <span class="badge" style="background: ${categoryColor[category]}">
                ${category}
            </span>
        </p>
        <p>${description}</p>
        <button class="highlight">Highlight</button>
        <button class="delete">Delete</button>
    `;

    container.appendChild(card);
}

// Form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (title === "") {
        alert("Event title is required");
        return;
    }

    createEventCard(title, date, category, description);

    form.reset();

});

// Event delegation (highlight/delete)
container.addEventListener("click", function (event) {

    // DELETE BUTTON
    if (event.target.classList.contains("delete")) {
        const card = event.target.parentElement;
        card.classList.add("fade-out");
        setTimeout(() => {
            card.remove();
        }, 300);
    }

    // HIGHLIGHT BUTTON
    if (event.target.classList.contains("highlight")) {
        event.target.parentElement.classList.toggle("active");
    }
});

// CLEAR ALL EVENTS
clearBtn.addEventListener("click", function () {
    const cards = container.children;
    [...cards].forEach(card => {
        card.classList.add("fade-out");
        
        setTimeout(() => {
            card.remove();
        }, 300);
    });
});

// ADD SAMPLE EVENTS
sampleBtn.addEventListener("click", function () {

    const samples = [
        { title: "Birthday Party", date: "2026-02-25", category: "Party", desc: "Celebration night" }
    ];

    samples.forEach(event => {
        createEventCard(event.title, event.date, event.category, event.desc);
    });
});


// KEYBOARD SUPPORT (ENTER)
titleInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        form.requestSubmit();
    }
});