<script>
  import {Router, Link, Route } from "svelte-routing";
  import Inicio from "./views/Inicio.svelte"
  import Contacto from "./views/Contacto.svelte"
  import Blog from "./views/Blog.svelte"
  import Productos from "./views/Productos.svelte"
  import Login from "./views/Login.svelte"
  import CarritoDeCompra from "./views/CarritoDeCompra.svelte";
  import { carritoCompra } from "./stores/store";
  import {onMount} from "svelte";

  export let url = "/"
  
  
  let mostrarCarrito = false;

function toggleCarrito() {
  mostrarCarrito = !mostrarCarrito;
}

onMount(() => {
  carritoCompra.set([]); // Limpia el carrito en cada montaje del componente
});
  
</script>

<div>
<Router {url}>
  <h1>Tienda</h1>

  <nav>
    <Link to="/">Inicio</Link>
    <Link to="/productos">Productos</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contacto">Contacto</Link>
    <Link to="/login">Login</Link>
   
    <button class="carrito-button" on:click={toggleCarrito}>
      <span><i class="fa-solid fa-cart-shopping"></i>Carrito de Compras</span>
      {#if mostrarCarrito}
        <div class="carrito-container">
          <CarritoDeCompra/>
        </div>
      {/if}
    </button>
   
  </nav>

  <Route path="/">
    <Inicio/>
  </Route>

  <Route path="/productos">
    <Productos/>
  </Route>

  <Route path="/blog">
    <Blog/>
  </Route>

  <Route path="/contacto">
    <Contacto/>
  </Route>

  <Route path="/login">
    <Login/>
  </Route>

 

</Router>


</div>
 
 
  

<style>
  h1 {
    color: lightblue
  }
</style>
