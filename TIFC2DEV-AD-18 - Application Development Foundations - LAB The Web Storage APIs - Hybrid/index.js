const itemsContainer = document.querySelector("#list-items");

function addItem(item) {
const colourCard = document.createElement("section");
colourCard.className = "card w-75";
itemsContainer.append(colourCard);

const colourCardBody = document.createElement("article");
colourCardBody.className = "card-body";
colourCard.append(colourCardBody);

const colourCardTitle = document.createElement("h5");
colourCardTitle.className = "card-title";
colourCardTitle.innerText = item.name;
colourCardBody.append(colourCardTitle);

const colourCardText = document.createElement("p");
colourCardText.className = "card-text";
colourCardText.innerText = item.pantone_value;
colourCardBody.append(colourCardText);

const colourCardColour = document.createElement("figure");
colourCardColour.style = "background-color: " + item.color + ";";
colourCardColour.innerText = item.color;
colourCardBody.append(colourCardColour);

const colourCardBreak = document.createElement("br");
itemsContainer.append(colourCardBreak);
}
const API_URL = "https://reqres.in/api/unknown";
const COLORS_KEY = "colorsList";
const colorList = document.getElementById("color-list"); // <ul id="color-list">
const loadBtn = document.getElementById("load-btn"); // botón para recargar
const clearBtn = document.getElementById("clear-btn"); // botón para borrar

// Tarea 1: Obtener colores de la API
async function fetchColorsList() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const colors = data.data;
    localStorage.setItem(COLORS_KEY, JSON.stringify(colors)); // Tarea 3
    renderColorList(colors); // Tarea 2
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
}

// Tarea 2: Mostrar lista de colores
function renderColorList(colors) {
  colorList.innerHTML = ""; // limpiar
  colors.forEach(addItem);
}

function addItem(color) {
  const li = document.createElement("li");
  li.textContent = `${color.name} (${color.year})`;
  li.style.color = color.color; // muestra el color real como texto
  colorList.appendChild(li);
}

// Tarea 4: Cargar desde localStorage
function loadColorsFromStorage() {
  const stored = localStorage.getItem(COLORS_KEY);
  if (stored) {
    const colors = JSON.parse(stored);
    renderColorList(colors);
  }
}

// Tarea 5: Borrar lista
function clearList() {
  localStorage.removeItem(COLORS_KEY);
  colorList.innerHTML = "";
}

// Tarea 6: Recargar colores desde API
function reloadColors() {
  fetchColorsList();
}

// Eventos
document.addEventListener("DOMContentLoaded", loadColorsFromStorage);
clearBtn.addEventListener("click", clearList);
loadBtn.addEventListener("click", reloadColors);
