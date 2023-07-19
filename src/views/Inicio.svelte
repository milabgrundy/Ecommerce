<h1>Inicio</h1>

<script>
     
  
     let productos = [
      { id: 1, nombre: "Martillo", precio: 15 },
      { id: 2, nombre: "Sierra", cantidad: 10, precio: 20 },
      { id: 3, nombre: "Lija", cantidad: 10, precio: 10 },
      { id: 4, nombre: "Clavos", cantidad: 10, precio: 3 },
    ];

    
  
  </script>
  
  <h2>Bienvenido a nuestra tienda de artículos de ferretería</h2>
  
  <p>Explora nuestra selección de productos y encuentra las herramientas que necesitas.</p>
  
  <h3>Productos Destacados</h3>
  
  <div class="productos-destacados">
    {#each productos as producto }
    <div class="producto">
      <img src="ruta-de-la-imagen" alt={producto.nombre} />
      <h4>{producto.nombre}</h4>
       
      <p>Precio: € {producto.precio}</p>
       
    </div>
    {/each}
  </div>
  
  <style>
    .productos-destacados {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  
    .producto {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      border: 1px solid #ccc;
      padding: 10px;
    }
  
    img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      margin-bottom: 10px;
    }
  </style>
  