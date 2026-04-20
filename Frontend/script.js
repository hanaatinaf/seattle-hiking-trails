
// SEATTLE HIKING TRAILS - JAVASCRIPT

// WEATHER: Real weather based on user location

const weatherCodeMap = {
  0: "Clear Sky", 1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
  45: "Foggy", 48: "Icy Fog",
  51: "Light Drizzle", 53: "Drizzle", 55: "Heavy Drizzle",
  61: "Light Rain", 63: "Rain", 65: "Heavy Rain",
  71: "Light Snow", 73: "Snow", 75: "Heavy Snow",
  80: "Rain Showers", 81: "Heavy Showers", 82: "Violent Showers",
  95: "Thunderstorm", 96: "Thunderstorm with Hail"
};

async function fetchWeather(lat, lon) {
  try {
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code&temperature_unit=fahrenheit`;
    const geoUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    const [weatherRes, geoRes] = await Promise.all([fetch(weatherUrl), fetch(geoUrl)]);
    const weatherData = await weatherRes.json();
    const geoData = await geoRes.json();

    const city = geoData.address.city || geoData.address.town || geoData.address.village || "Your Location";
    const temp = Math.round(weatherData.current.temperature_2m);
    const humidity = weatherData.current.relative_humidity_2m;
    const condition = weatherCodeMap[weatherData.current.weather_code] || "Unknown";

    document.getElementById("weatherTitle").textContent = `${city} Weather Today`;
    document.getElementById("temp").textContent = `${temp}°F`;
    document.getElementById("humidity").textContent = `${humidity}%`;
    document.getElementById("conditions").textContent = condition;

  } catch (error) {
    document.getElementById("weatherTitle").textContent = "Weather (failed to load)";
    console.log("Weather error:", error);
  }
}

function loadWeather() {
  if (!navigator.geolocation) {
    fetchWeather(47.6062, -122.3321); // fallback: Seattle
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
    () => {
      // User denied location — fall back to Seattle
      document.getElementById("weatherTitle").textContent = "Seattle Weather Today (location denied)";
      fetchWeather(47.6062, -122.3321);
    }
  );
}

// ============================================
// FAVORITES
// ============================================
let favorites = JSON.parse(localStorage.getItem("hikingFavorites")) || [];

function saveFavorites() {
  localStorage.setItem("hikingFavorites", JSON.stringify(favorites));
}

function updateFavCount() {
  document.getElementById("favCount").textContent = favorites.length;
}

function loadFavorites() {
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    const trailName = btn.closest(".card").querySelector(".card-title").textContent;
    if (favorites.includes(trailName)) {
      btn.textContent = "❤️";
      btn.classList.add("favorited");
    }
  });
  updateFavCount();
}

function setupFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      const trailName = card.querySelector(".card-title").textContent;

      if (favorites.includes(trailName)) {
        favorites = favorites.filter((fav) => fav !== trailName);
        btn.textContent = "♡";
        btn.classList.remove("favorited");
      } else {
        favorites.push(trailName);
        btn.textContent = "❤️";
        btn.classList.add("favorited");
      }

      saveFavorites();
      updateFavCount();
    });
  });
}

// ============================================
// FILTER BUTTONS
// ============================================
function checkNoResults() {
  const anyVisible = Array.from(document.querySelectorAll(".card")).some(c => c.style.display !== "none");
  document.getElementById("noResults").style.display = anyVisible ? "none" : "block";
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        card.style.display = (filter === "all" || card.dataset.difficulty === filter) ? "" : "none";
      });
      checkNoResults();
    });
  });
}

// ============================================
// SEARCH BAR
// ============================================
function setupSearch() {
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "" : "none";
    });
    checkNoResults();
  });
}

// ============================================
// SORT DROPDOWN
// ============================================
function setupSort() {
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    const value = e.target.value;
    const grid = document.querySelector(".destinations-grid");
    const cardArray = Array.from(document.querySelectorAll(".card"));
    const difficultyOrder = { easy: 1, moderate: 2, hard: 3 };

    cardArray.sort((a, b) => {
      if (value === "difficulty") {
        return difficultyOrder[a.dataset.difficulty] - difficultyOrder[b.dataset.difficulty];
      }
      if (value === "rating") {
        const rA = parseFloat(a.querySelector(".rating").textContent.match(/[\d.]+/)[0]);
        const rB = parseFloat(b.querySelector(".rating").textContent.match(/[\d.]+/)[0]);
        return rB - rA;
      }
      if (value === "distance") {
        const dA = parseFloat(a.querySelector(".card-stats").textContent.match(/[\d.]+/)[0]);
        const dB = parseFloat(b.querySelector(".card-stats").textContent.match(/[\d.]+/)[0]);
        return dA - dB;
      }
      if (value === "duration") {
        const durationOrder = { "1-hour": 1, "2-hours": 2, "3-hours": 3, "4-hours": 4, "5-hours": 5, "6-hours": 6 };
        return (durationOrder[a.dataset.duration] || 99) - (durationOrder[b.dataset.duration] || 99);
      }
      return 0;
    });

    cardArray.forEach((card) => grid.appendChild(card));
  });
}

// ============================================
// INIT: Run everything when page loads
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  loadWeather();
  loadFavorites();
  setupFavoriteButtons();
  setupFilters();
  setupSearch();
  setupSort();
});
