// Tarea 1: Cambiar el estilo del párrafo
function changeStyle() {
    const p = document.getElementById("my-paragraph");
    p.style.fontFamily = "Arial";
    p.style.fontSize = "20px";
    p.style.color = "blue";
}

  // Tarea 2: Obtener valores del formulario
function getNames() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
}

  // Tarea 3: Información sobre enlaces
function showLinksInfo() {
    const links = document.getElementsByTagName("a");
    alert(`Total links: ${links.length}
First link: ${links[0]?.href}
Last link: ${links[links.length - 1]?.href}`);
}

  // Tarea 4: Extra

function extraTasks() {
    // 1. Seleccionar el section con id "container"
    const container = document.getElementById("container");

    // 2. Seleccionar todos los elementos con clase "second"
    const seconds = document.querySelectorAll(".second");

    // 3. Seleccionar .third solo si está dentro de un <ol>
    const thirdInOl = document.querySelector("ol .third");

    // 4. Dar texto "Hello!" al section con id "container"
    container.textContent = "Hello!";

    // 5. Agregar clase "main" al div con clase "footer"
    const footer = document.querySelector("div.footer");
    footer.classList.add("main");

    // 6. Quitar clase "main" del div con clase "footer"
    footer.classList.remove("main");

    // 7. Crear nuevo li con texto "four"
    const newLi = document.createElement("li");
    newLi.textContent = "four";

    // 8. Agregarlo al <ul>
    const ul = document.querySelector("ul");
    ul.appendChild(newLi);
}
