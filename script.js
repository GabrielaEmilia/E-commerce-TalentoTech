// document.addEventListener("DOMContentLoaded", () => {
//   const productos = [
//       {
//         id: 1,
//         nombre: "Shampoo Profesional",
//         precio: 1200,
//         imagen: "./Imagenes/5.png",
//       },
//       {
//         id: 2,
//         nombre: "Acondicionador Nutritivo",
//         precio: 1500,
//         imagen: "./Imagenes/2.png",
//       },
//       {
//         id: 3,
//         nombre: "Mascarilla Reparadora",
//         precio: 2000,
//         imagen: "./Imagenes/3.png",
//       },
//       {
//        id: 1,
//         nombre: "Shampoo Profesional",
//         precio: 1200,
//         imagen: "./Imagenes/1.png",
//       },
//       {
//         id: 2,
//         nombre: "Acondicionador Nutritivo",
//         precio: 1500,
//         imagen: "/Imagenes/2.png",
//       },
//       {
//         id: 3,
//         nombre: "Mascarilla Reparadora",
//         precio: 2000,
//         imagen: "./Imagenes/3.png",
//       },
//       {
//         id: 1,
//         nombre: "Shampoo Profesional",
//         precio: 1200,
//         imagen: "./Imagenes/1.png",
//       },
//       {
//         id: 2,
//         nombre: "Acondicionador Nutritivo",
//         precio: 1500,
//         imagen: "/Imagenes/2.png",
//       },
//       {
//         id: 3,
//         nombre: "Mascarilla Reparadora",
//         precio: 2000,
//         imagen: "./Imagenes/3.png",
//       },
//     ];

//     let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//     if (!Array.isArray(carrito)) carrito = [];
//     const productosContainer = document.querySelector("#productos");
//     const carritoContainer = document.querySelector("#carrito");
//     const totalContainer = document.querySelector("#total");
//     function mostrarProductos() {
//       productosContainer.addEventListener("click", (e) => {
//         if (e.target.classList.contains("btn-add")) {
//           const id = parseInt(e.target.getAttribute("data-id"));
//           agregarAlCarrito(id);
//       }
//     });
//       // productosContainer.innerHTML = productos
//       //   .map(
//       //     (producto) => `
//       //       <div class="card">
//       //         <img src="${producto.imagen}" alt="${producto.nombre}">
//       //         <h3>${producto.nombre}</h3>
//       //         <p>Precio: $${producto.precio}</p>
//       //         <button class="btn-add" data-id="${producto.id}">Agregar al carrito</button>
//       //       </div>
//       //     `
//       //   )
//       //   .join("");
//     document.querySelectorAll(".btn-add").forEach((btn) =>
//       btn.addEventListener("click", (e) => {
//         const id = parseInt(e.target.getAttribute("data-id"));
//         agregarAlCarrito(id);
//       })
//     );
//   }
//   function agregarAlCarrito(id) {
//       const producto = productos.find((p) => p.id === id);
//       const existe = carrito.find((p) => p.id === id);
      
//       if (existe) {
//           existe.cantidad++;
//       } else {
//         carrito.push({ ...producto, cantidad: 1 });
//       }
//     }
//   guardararrito();
//   mostrarCarrito();
// },
      

// function eliminarDelCarrito(id) {
//     carrito = carrito.filter((p) => p.id !== id);
//     guardarCarrito();
//     mostrarCarrito();
//   },

// function guardarCarrito() {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   },

// function mostrarCarrito() {
//   if (carrito.length === 0) {
//     carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
//   } else {
//     carritoContainer.innerHTML = carrito
//     .map(item); () => (`
//       <div class="carrito-item">
//         <img src="${item.imagen}" alt="${item.nombre}" width="50">
//         <h4>${item.nombre}</h4>
//         <p>Precio: $${item.precio}</p>
//         <p>Cantidad: ${item.cantidad}</p>
//         <button class="btn-remove" data-id="${item.id})">Eliminar</button>
//       </div>
//     `).join("");
//   }

// document.querySelectorAll(".btn-remove").forEach((btn) =>
//   btn.addEventListener("click", (e) => {
//     const id = parseInt (e.target.getAttribute("data-id"));
//     eliminarDelCarrito(id);
//     })
//   );
//   },
//   totalContainer.textContent = `Total:  $${carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)}`,
//   document.querySelector("#finalizar-compra"). addEventListener("click", () => {
//     if (carrito.length === 0){
//       alert("El carrito está vacío");
//     } else {
//       alert("¡Gracias por su compra!");
//       carrito = [];
//       guardarCarrito();
//       mostrarCarrito();
//     }
//   }));

//   mostrarProductos();
//   mostrarCarrito();

// console.log(carrito);

document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { id: 1, nombre: "Shampoo Profesional", precio: 1200, imagen: "./Imagenes/1.png" },
    { id: 2, nombre: "Acondicionador Nutritivo", precio: 1500, imagen: "./Imagenes/2.png" },
    { id: 3, nombre: "Mascarilla Reparadora", precio: 2000, imagen: "./Imagenes/3.png" },
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if (!Array.isArray(carrito)) carrito = [];

  const productosContainer = document.querySelector("#productos");
  const carritoContainer = document.querySelector("#carrito");
  const totalContainer = document.querySelector("#total");

  function mostrarProductos() {
    productosContainer.innerHTML = productos
      .map(
        (producto) => `
        <div class="card">
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio}</p>
          <button class="btn-add" data-id="${producto.id}">Agregar al carrito</button>
        </div>
      `
      )
      .join("");

    document.querySelectorAll(".btn-add").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("data-id"));
        agregarAlCarrito(id);
      })
    );
  }

  function agregarAlCarrito(id) {
    const producto = productos.find((p) => p.id === id);
    const existe = carrito.find((p) => p.id === id);

    if (existe) {
      existe.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }

    guardarCarrito();
    mostrarCarrito();
  }

  function eliminarDelCarrito(id) {
    carrito = carrito.filter((p) => p.id !== id);
    guardarCarrito();
    mostrarCarrito();
  }

  function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  function mostrarCarrito() {
    if (carrito.length === 0) {
      carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
      carritoContainer.innerHTML = carrito
        .map(
          (item) => `
        <div class="carrito-item">
          <img src="${item.imagen}" alt="${item.nombre}" width="50">
          <h4>${item.nombre}</h4>
          <p>Precio: $${item.precio}</p>
          <p>Cantidad: ${item.cantidad}</p>
          <button class="btn-remove" data-id="${item.id}">Eliminar</button>
        </div>
      `
        )
        .join("");

      document.querySelectorAll(".btn-remove").forEach((btn) =>
        btn.addEventListener("click", (e) => {
          const id = parseInt(e.target.getAttribute("data-id"));
          eliminarDelCarrito(id);
        })
      );
    }

    totalContainer.textContent = `Total: $${carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    )}`;
  }

  document.querySelector("#finalizar-compra").addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío");
    } else {
      alert("¡Gracias por su compra!");
      carrito = [];
      guardarCarrito();
      mostrarCarrito();
    }
  });

  mostrarProductos();
  mostrarCarrito();
});