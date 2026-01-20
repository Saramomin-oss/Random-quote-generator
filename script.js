const fallbackQuotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "Stay hungry. Stay foolish.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const container = document.querySelector(".container");

function randomBackground() {
    const colors = ["#1abc9c", "#3498db", "#9b59b6", "#e67e22", "#e74c3c"];
    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
}

async function generateQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        quoteEl.innerText = `"${data.content}"`;
        authorEl.innerText = `— ${data.author}`;
    } catch (error) {
        const random =
            fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
        quoteEl.innerText = `"${random.text}"`;
        authorEl.innerText = `— ${random.author}`;
    }

    randomBackground();

    container.classList.remove("fade");
    void container.offsetWidth;
    container.classList.add("fade");
}

function copyQuote() {
    const text = `${quoteEl.innerText} ${authorEl.innerText}`;
    navigator.clipboard.writeText(text);
    alert("Quote copied!");
}

generateQuote();
