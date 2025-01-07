document.addEventListener("DOMContentLoaded", () => {

  const gridProductos = document.querySelector(".grid-productos");
  const carritoContainer = document.querySelector(".carrito-items");
  const totalContainer = document.querySelector(".total");
  const botonFinalizar = document.querySelector("#finalizar-compra");
  let productos = [];
  let carrito = JSON.parse(localStorage.getItem("carrito")) || []; 

  function cargarProductos() {
    fetch("productos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        return response.json();
      })
      .then((data) => {
        productos = data;
        mostrarProductos(productos);
        mostrarCarrito();
      })
      .catch((error) => console.error(error));
  }

  function mostrarProductos(productos) {
    gridProductos.innerHTML = "";
    productos.forEach ((producto) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <button class="btn-add" data-id="${producto.id}">Agregar al carrito</button>
    `;

    gridProductos.appendChild(card);
  });

  document.querySelectorAll(".btn-add").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      agregarAlCarrito(id);
    })
  );
}
botonFinalizar.addEventListener("click", () => {
  alert("¡Gracias por tu compra!");
  carrito = [];
  guardarCarrito();
  mostrarCarrito();
});

function agregarAlCarrito(productoId) {
  const producto = productos.find((p) => p.id === productoId); 
  const productoEnCarrito = carrito.find((p) => p.id === productoId); 

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  guardarCarrito();
  mostrarCarrito();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
  carritoContainer.innerHTML = "";

  if (carrito.length === 0) {
    carritoContainer.innerHTML = "<p>El carrito está vacío</p>";
    totalContainer.textContent = "Total: $0";
    return;
  }

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.classList.add("carrito-item");

    item.innerHTML = `
      <p>${producto.nombre}</p>
      <p>Precio: $${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad}</p>
      <button class="btn-remove" data-id="${producto.id}">Eliminar</button>
      <button class="btn-minus" data-id="${producto.id}">-</button>
      <button class="btn-plus" data-id="${producto.id}">+</button>
    `;

    carritoContainer.appendChild(item);
    document.querySelectorAll(".btn-plus").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        agregarAlCarrito(id);
      })
    );
    
    document.querySelectorAll(".btn-minus").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        disminuirCantidad(id);
      })
    );
    
    function disminuirCantidad(productoId) {
      const productoEnCarrito = carrito.find((p) => p.id === productoId);
      if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
        productoEnCarrito.cantidad--;
      } else {
        carrito = carrito.filter((p) => p.id !== productoId);
      }
      guardarCarrito();
      mostrarCarrito();
    }
  });
  const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
  totalContainer.textContent = `Total: $${total}`;

 
  document.querySelectorAll(".btn-remove").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      eliminarDelCarrito(id);
    })
  );
}
function eliminarDelCarrito(productoId) {
  carrito = carrito.filter((producto) => producto.id !== productoId);
  guardarCarrito();
  mostrarCarrito();
}
cargarProductos();
});