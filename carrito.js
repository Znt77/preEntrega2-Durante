let carrito = [];

const productos = [
    { id: 1, name: 'Mouse', precio: 10000 },
    { id: 2, name: 'Auriculares', precio: 15000 },
    { id: 3, name: 'Teclado', precio: 20000 },
    { id: 4, name: 'Gráfica', precio: 300000}
];

function agregarAlCarrito(productID) {
    const producto = productos.find(p => p.id === productID);
    if (producto) {
        carrito.push(producto);
        alert(`"${producto.name}" agregado al carrito.`);
    } else {
        alert('Producto no encontrado.');
    }
}

function calcularTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    return total;
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
    } else {
        let contenidoCarrito = 'Contenido del carrito:\n';
        carrito.forEach(producto => {
            contenidoCarrito += `- ${producto.name} - Precio: $${producto.precio}\n`;
        });
        const totalCompra = `Total de la compra: $${calcularTotal()}`;
        alert(contenidoCarrito + totalCompra);
    }
}

function iniciarPrograma() {
    let userInput;
    do {
        userInput = prompt('Ingrese el ID del producto que desea agregar al carrito (o "salir" para finalizar):\n 1- Mouse \n 2- Auriculares \n 3- Teclado \n 4- Gráfica');
        if (userInput !== 'salir') {
            const productID = parseInt(userInput);
            if (!isNaN(productID)) {
                agregarAlCarrito(productID);
            } else {
                alert('Producto inválido, por favor, ingrese un número válido o "salir".');
            }
        }
    } while (userInput !== 'salir');

    mostrarCarrito();
}

iniciarPrograma();
