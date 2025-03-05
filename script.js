// List of objections and rebuttals
const objections = [
    { objection: "I'm not interested", rebuttal: "If you can just hear us out, my manager can discuss something very beneficial for your business.", optional: "I understand, most of the people that we talked to say the same thing; however, when they hear what my manager is going to discuss, they find it most beneficial." },
    { objection: "Are you selling me something? Is this a sales call? Is this a telemarketing call? Is this a solicitation call?", rebuttal: "I'd prefer to call this a business partnership call.", optional: "Yes, but you know what? This is very favorable for the business. We will be making sure that you can have a constant flow of customers." },
    { objection: "I'm fully booked at the moment.", rebuttal: "How far are you booked? (Customer answers) Not a problem because we're not gonna ask you to take the customer right away. I just wanna make sure that during your slow season, you still have customers.", optional: "Don't worry, we're not gonna overwhelm your business with a bunch of customers that you can't handle. /// OR /// Excellent! – But I have one question for you: If I were to send you a few customers who are ready to buy right now (need your service/s right now), I know you wouldn’t turn them away? Our program is designed to save you time and increase your profits." },
    { objection: "I am busy", rebuttal: "I understand you are busy since we have called you during your business hours; however, my manager asked me to find a reliable business to work with since we are seeing a high volume of searches for your service.", optional: "I understand that you are busy; however, if we can put you in front of those people looking for your services, this is something you would like to hear about, right?" },
    { objection: "How much is your service? Am I gonna pay for this? Is this something I need to pay?", rebuttal: "Great question! We have a lot of pricing options available.", optional: "Well, about the pricing options, I'll have you talk to my manager right away. That is something that you need to discuss between the two of you since it includes confidential information." },
    { objection: "Why does your number come off as scam?", rebuttal: "We are using VOIP to call you so that you will not be charged any amount from your service provider.", optional: "This is not a scam, I am using VOIP so we can reach every local area because we are calling small to midsize businesses all over the United States." },
    { objection: "What are you selling?", rebuttal: "What we do is provide our expertise to help small to medium-sized businesses like yours have full brand exposure online and connect them to people who are searching for your services.", optional: "We monitor the online traffic search of each type of service online. We will be helping you maximize your online presence so that potential customers will directly contact you rather than you chasing after them." },
    { objection: "I only do word of mouth", rebuttal: "Word of mouth is a very powerful tool, and that will continue. We are simply complementing by doing it online.", optional: "The reality is, being online now is the new word of mouth." },
    { objection: "Do you personally need my service?", rebuttal: "No, it's not for me. It's for the customers in the local area (city) looking for your service online right now, and we need someone reliable who can take more customers.", optional: "I am not the customer here... I don't want to mislead you here.. proceed to ROTC..." },
    { objection: "Can you just give my phone number to the customers?", rebuttal: "That is not the way we do business. We make sure you are visible online so that customers will directly contact you and not you who will be chasing after them.", optional: "We can place your number on Google, websites, and online directories, but my manager needs to know more about your business first." },
    { objection: "Are you selling me customers? Are you selling me leads?", rebuttal: "No worries, we are not selling you leads or customers for you to handle and for you to pay.", optional: "F" },
    { objection: "Wrong number", rebuttal: "Oh okay. What type of business are you in? / What type of business do you provide?", optional: "(Continue with ROTC)" },
    { objection: "Where did you get my number?", rebuttal: "We have a dedicated marketing team that provides us with phone numbers of reliable businesses in the area.", optional: "When you registered your business, your information was stored in the national database. That’s how our marketing team gathered your information." },
    { objection: "What is this all about?", rebuttal: "We are trying to look for a reliable business that we can partner with. We study the number of people going online and searching for your type of service and connect them to businesses like yours." },
    { objection: "Are you from HOMEADVISOR?", rebuttal: "No, I am not from HOMEADVISOR. I AM WITH 411LOCALS." },
    { objection: "Callback", rebuttal: "Calling you back is not a problem, but my manager asked me to find a reliable business that we can work with." }
];

// Populate the objections list
const objectionList = document.getElementById("objection-list");
const searchInput = document.getElementById("search");

function displayObjections(filter = "") {
    objectionList.innerHTML = ""; // Clear previous list

    objections
        .filter(item => item.objection.toLowerCase().includes(filter.toLowerCase()))
        .forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${item.objection}</strong>`;
            li.addEventListener("click", () => toggleRebuttal(index));

            // Create rebuttal div inside the li
            const rebuttalDiv = document.createElement("div");
            rebuttalDiv.className = "rebuttal";
            rebuttalDiv.id = `rebuttal-${index}`;
            rebuttalDiv.style.display = "none"; // Hide by default
            rebuttalDiv.innerHTML = `<p>${item.rebuttal}</p>` + (item.optional ? `<p class="optional">${item.optional}</p>` : "");

            li.appendChild(rebuttalDiv); // Append rebuttal inside li
            objectionList.appendChild(li);
        });
}

// Toggle rebuttal display
function toggleRebuttal(index) {
    const rebuttal = document.getElementById(`rebuttal-${index}`);
    if (rebuttal) {
        rebuttal.style.display = rebuttal.style.display === "block" ? "none" : "block";
    }
}

// Search function
searchInput.addEventListener("input", (e) => displayObjections(e.target.value));

// Load objections on page load
displayObjections();
