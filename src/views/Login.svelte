<script>

    

    import Registro from "./Registro.svelte"

    let mostrarRegistro = false

    let email
    let password

    let sesionIniciada = false

    $: nuevoLogin = {
        email: email,
        password: password
       
    }

    function envioFormulario(evento) {
        evento.preventDefault()
        console.log("Enviando...")
       
    }

     async function manejadorLogIn () {
        const response = await fetch("http://localhost:8000/usuario/login/",
        {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(nuevoLogin)
        })
        const token = await response.text()
        localStorage.setItem("token", token) 
        sesionIniciada = true

         
    }

    


    import {  existeToken, recuperarToken, guardarToken } from "./sesion.mjs"
     
    guardarToken({id:1})

    console.log ("Existe el token?", existeToken() )

    console.log("Este es el token: ", recuperarToken())
    
    function cerrarSesion() {
        localStorage.removeItem("token");
         sesionIniciada = false; 
    }

    console.log ("xiste el token?", existeToken() )

    console.log("Este es el token: ", recuperarToken ())
    
    
 


</script>

<h2>Iniciar sesión</h2>

<form class="sesion" on:submit={envioFormulario}>
<label>
    Email: <input type="email" placeholder="email" bind:value={email}> 
</label>

<label>
    Contraseña: <input type="password" placeholder="contraseña" bind:value={password} >
</label>

</form>

<button on:click={manejadorLogIn}>Iniciar sesión</button>
 
<br>
{#if sesionIniciada}
<button on:click={cerrarSesion} >Cerrar sesión</button>
{/if}


<br>
<button on:click={ () => mostrarRegistro = true}>Registrate</button>
{#if mostrarRegistro}
<Registro/>

{/if}