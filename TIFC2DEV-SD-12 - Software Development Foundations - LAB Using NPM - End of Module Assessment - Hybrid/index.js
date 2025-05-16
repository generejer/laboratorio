
import { getServerURL, listUsers, addUser, delUser } from 'api.js';

// Llamadas de prueba
console.log("URL del servidor:", getServerURL());

listUsers();

addUser("Fernanda", "Ramos", "fer@example.com");

delUser(2); // Elimina al usuario con ID 2 (ejemplo)
