<script>

    let email
    let password

    $: nuevoRegistro = {
        email: email,
        password: password,
        id: Date.now()
    }

    function envioFormulario(evento) {
        evento.preventDefault()
        console.log("Enviando...")

        
    }

    function manejadorRegistro () {
        const registro = fetch("http://localhost:8000/usuario/",
        {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(nuevoRegistro)
        })
    }
</script>


<h2>Regístrate</h2>

<form class="sesion" on:submit={envioFormulario}>
    <label>
        Email: <input type="email" placeholder="email" bind:value={email}>
    </label>
    
    <label>
        Contraseña: <input type="password" placeholder="contraseña" bind:value={password}>
    </label>
    
    </form>

    <button on:click={manejadorRegistro}>Registrate</button>



