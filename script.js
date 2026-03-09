// SIMULADOR DE STOCK - VERDULERÍA "POLLOS HERMANOS"
// Constante para el nombre del negocio (no cambiará)
const NOMBRE_NEGOCIO = "Verdulería Pollos Hermanos";

// Arrays principales para almacenar productos por categoría
let verduras = ["Zanahoria", "Lechuga", "Tomate", "Papa", "Cebolla"];
let frutas = ["Manzana", "Banana", "Naranja", "Frutilla", "Pera"];
let limpieza = ["Jabón", "Lavandina", "Esponja", "Detergente"];

// Variables para controlar el programa
let opcionSeleccionada = 0;
let continuarPrograma = true;

 // Función para mostrar el menú principal
function mostrarMenu() {
    let mensaje = `\n=== ${NOMBRE_NEGOCIO} ===
1. Ver Verduras 
2. Ver Frutas 
3. Ver Productos de Limpieza 
4. Buscar producto específico 
5. Agregar nuevo producto 
6. Salir 
Selecciona una opción:`;

    // Prompt muestra el mensaje y guarda lo que el usuario escribe
    return prompt(mensaje);
}

/**
 * Función para mostrar productos de una categoría
 * @param {Array} lista - El array de productos a mostrar
 * @param {string} categoria - El nombre de la categoría
 */
function mostrarProductos(lista, categoria) {
    if (lista.length === 0) {
        alert(`No hay productos en ${categoria} actualmente.`);
        return;
    }
    // Construimos un mensaje con todos los productos
    let mensaje = `${categoria} (${lista.length} productos):\n\n`;
    // Para recorrer el array
    for (let i = 0; i < lista.length; i++) {
        mensaje = mensaje + (i + 1) + ". " + lista[i] + "\n";
        // i+1 es para mostrar 1,2,3 en lugar de 0,1,2
    }
    
    alert(mensaje);
    
    // PREGUNTA ADICIONAL: 
    let verDetalle = confirm("¿Quieres ver el detalle de algún producto específico?");
    
    if (verDetalle) {
        let indice = prompt("¿Qué número de producto te interesa? (1-" + lista.length + ")");
        indice = parseInt(indice) - 1; // Convertimos a número y restamos 1 porque el array empieza en 0
        
        // Validamos que el índice sea válido
        if (indice >= 0 && indice < lista.length) {
            alert(`Detalle del producto #${indice + 1}: ${lista[indice]}\nPrecio: $${Math.floor(Math.random() * 500) + 100} por kg`);
            // Math.random genera un precio aleatorio para el ejemplo
        } else {
            alert("Número inválido");
        }
    }
}

// Función para buscar un producto en todas las categorías
function buscarProducto() {
    let busqueda = prompt("¿Qué producto estás buscando?").toLowerCase();
    let encontrado = false;
    let mensaje = `Resultados para "${busqueda}":\n\n`;
    
    // Buscar en verduras
    for (let i = 0; i < verduras.length; i++) {
        if (verduras[i].toLowerCase().includes(busqueda)) {
            mensaje = mensaje + "Verduras: " + verduras[i] + "\n";
            encontrado = true;
        }
    }
    // Buscar en frutas
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].toLowerCase().includes(busqueda)) {
            mensaje = mensaje + "Frutas: " + frutas[i] + "\n";
            encontrado = true;
        }
    }
    // Buscar en limpieza
    for (let i = 0; i < limpieza.length; i++) {
        if (limpieza[i].toLowerCase().includes(busqueda)) {
            mensaje = mensaje + "Limpieza: " + limpieza[i] + "\n";
            encontrado = true;
        }
    }

    if (encontrado) {
        alert(mensaje);
    } else {
        alert("No se encontró ningún producto con ese nombre.");
    }
}

// Función para agregar un nuevo producto
function agregarProducto() {
    let mensaje = "En qué categoría quieres agregar el producto?\n\n";
    mensaje = mensaje + "1. Verduras\n2. Frutas\n3. Limpieza";
    
    let categoria = prompt(mensaje);
    let nuevoProducto = prompt("¿Qué producto quieres agregar?");
    
    // Validar que no esté vacío
    if (nuevoProducto === null || nuevoProducto.trim() === "") {
        alert("Nombre inválido");
        return;
    }
    //switch para manejar múltiples opciones
    switch(categoria) {
        case "1":
            verduras.push(nuevoProducto); // push agrega al final del array
            alert(`Ok "${nuevoProducto}" agregado a Verduras. Ahora hay ${verduras.length} productos.`);
            break;
        case "2":
            frutas.push(nuevoProducto);
            alert(`OK "${nuevoProducto}" agregado a Frutas. Ahora hay ${frutas.length} productos.`);
            break;
        case "3":
            limpieza.push(nuevoProducto);
            alert(`Ok "${nuevoProducto}" agregado a Limpieza. Ahora hay ${limpieza.length} productos.`);
            break;
        default:
            alert("NO, Categoría inválida");
    }
}

alert("¡Bienvenido a " + NOMBRE_NEGOCIO + "!");

// while que mantiene el programa corriendo
while (continuarPrograma) {
    
    opcionSeleccionada = mostrarMenu();
    
    // if/else if para manejar las opciones
    if (opcionSeleccionada === null) {
        // Si el usuario presiona Cancelar en el prompt
        continuarPrograma = false;
        alert("¡Gracias por visitarnos amigo! Vuelva pronto");
        
    } else if (opcionSeleccionada === "1") {
        mostrarProductos(verduras, "VERDURAS");
        
    } else if (opcionSeleccionada === "2") {
        mostrarProductos(frutas, "FRUTAS");
        
    } else if (opcionSeleccionada === "3") {
        mostrarProductos(limpieza, "LIMPIEZA");
        
    } else if (opcionSeleccionada === "4") {
        buscarProducto();
        
    } else if (opcionSeleccionada === "5") {
        agregarProducto();
        
    } else if (opcionSeleccionada === "6") {
        continuarPrograma = false;
        alert("¡Gracias por visitar " + NOMBRE_NEGOCIO + "! Vuelva pronto");
        
    } else {
        alert(" Opción no válida. Por favor, selecciona una opcion del 1-6.");
    }
}