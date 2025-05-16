

// Tarea 1: URL del servidor
export function getServerURL() {
    return "http://localhost:3000/users"; // Ajusta el puerto si usas uno distinto
}

  // Tarea 2: Listar usuarios
export async function listUsers() {
    const response = await fetch(getServerURL());
    const users = await response.json();
    console.log(users);
}

  // Tarea 3: Agregar usuario
export async function addUser(firstName, lastName, email) {
    const response = await fetch(getServerURL(), {
    method: "POST",
    body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email
    }),
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
    });
    const newUser = await response.json();
    console.log("Usuario agregado:", newUser);
}

  // Tarea 4: Eliminar usuario
export async function delUser(id) {
    const response = await fetch(`${getServerURL()}/${id}`, {
    method: "DELETE"
    });

    if (response.ok) {
    console.log(`Usuario con ID ${id} eliminado`);
    } else {
    console.error("Error al eliminar el usuario");
    }
}
