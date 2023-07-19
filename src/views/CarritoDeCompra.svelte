<script>

    import  {carritoCompra}  from "../stores/store.js";
  
</script>

<h2>Carrito</h2>

<ul>
    {#each $carritoCompra as producto }
    <li>
        <span>{producto.nombre}</span>
        
        <span>Precio: {producto.precio}</span>
    </li>
        
    {/each}
</ul>

