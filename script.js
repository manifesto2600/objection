// List of objections and rebuttals
const objections = [
    { 
        objection: "I'm not interested", 
        rebuttal: "If you can just hear us out, My manager can discuss something very beneficial for your business."
    },
    { 
        objection: "Are you selling me something?", 
        rebuttal: "I'd prefer to call this a business partnership call. We ensure you have a constant flow of customers."
    },
    { 
        objection: "I'm fully booked at the moment.", 
        rebuttal: "How far are you booked? Not a problem, we’re planning for your slow season as well."
    },
    { 
        objection: "I am busy", 
        rebuttal: "I understand, but this will help put you in front of people looking for your services."
    },
    { 
        objection: "How much is your service?", 
        rebuttal: "We have multiple pricing options. My manager can discuss confidential details with you."
    },
    { 
        objection: "Why does your number look like a scam?", 
        rebuttal: "We use VOIP to avoid charging you for the call. This allows us to reach many local businesses."
    },
    { 
        objection: "What are you selling?", 
        rebuttal: "We help small to medium businesses maximize their online presence to attract customers."
    }
];

// Populate the objections list
const objectionList = document.getElementById("objection-list");
const searchInput = document.getElementById("search");

function displayObjections(filter = "") {
    objectionList.innerHTML = "";
    objections
        .filter(item => item.objection.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.objection}</strong>`;
            li.addEventListener("click", () => toggleRebuttal(index, item.rebuttal));
            objectionList.appendChild(li);

            const rebuttalDiv = document.createElement("div");
            rebuttalDiv.className = "rebuttal";
            rebuttalDiv.id = `rebuttal-${index}`;
            rebuttalDiv.innerText = item.rebuttal;
            objectionList.appendChild(rebuttalDiv);
        });
}

// Toggle rebuttal display
function toggleRebuttal(index, rebuttalText) {
    const rebuttal = document.getElementById(`rebuttal-${index}`);
    rebuttal.style.display = rebuttal.style.display === "block" ? "none" : "block";
}

// Search function
searchInput.addEventListener("input", (e) => displayObjections(e.target.value));

// Load objections on page load
displayObjections();
