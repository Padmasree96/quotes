const quotes = [
  "Believe in yourself!",
  "Every day is a second chance.",
  "Dream big and dare to fail.",
  "You are stronger than you think.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is not final; failure is not fatal: It is the courage to continue that counts.",
  "Push yourself, because no one else is going to do it for you.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones."
];

let currentIndex = 0;
const quoteElement = document.getElementById("quote");
const favoritesDiv = document.getElementById("favorites");

// Initial display
displayQuote();

function displayQuote() {
  quoteElement.textContent = quotes[currentIndex];
}

function nextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  displayQuote();
}

function shareQuote() {
  const text = quoteElement.textContent;
  navigator.clipboard.writeText(text);
  alert("Quote copied to clipboard!");
}

function addFavorite() {
  const quote = quoteElement.textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (!favorites.includes(quote)) {
    favorites.push(quote);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Added to favorites!");
  } else {
    alert("Already in favorites!");
  }
}

function viewFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favorites.length === 0) {
    favoritesDiv.innerHTML = "<p>No favorites yet.</p>";
  } else {
    favoritesDiv.innerHTML = "<h3>Your Favorite Quotes</h3><ul>" +
      favorites.map(q => `<li>${q}</li>`).join("") +
      "</ul>";
  }
  favoritesDiv.classList.toggle("hidden");
}
