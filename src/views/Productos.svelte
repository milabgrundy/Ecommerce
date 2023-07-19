

<script>

    import CarritoDeCompra from "./CarritoDeCompra.svelte";
    import {carritoCompra} from "../stores/store.js"

    export let productos = [
        {id: 1, nombre: "Martillo", cantidad: 10, precio: 15},
        {id: 2, nombre: "Sierra", cantidad: 10, precio: 20},
        {id: 3, nombre: "Lija", cantidad: 10, precio: 10},
        {id: 4, nombre: "Clavos", cantidad: 10, precio: 3},
    ]

     export function agregarAlCarrito () {
        const producto = productos.find( item => item.id === Number(this.dataset.id)) 
        $carritoCompra = [...$carritoCompra, producto]

    }
</script>

<h2>Productos</h2>

<ul>
    {#each productos as producto }
    <li>
        <span>{producto.nombre} : </span>
        <span>Cantidad:{producto.cantidad}</span>
        <span>Precio:{producto.precio}</span>
        <button data-id = {producto.id} on:click={agregarAlCarrito}>Agregar al carrito</button>
    </li>
        
    {/each}
</ul>



<style>
    li {
        list-style: none;
    }
</style>