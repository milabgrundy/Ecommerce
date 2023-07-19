<h1>Contacto</h1>

<script>

    let mensaje
    let email
    let nombre


    $: nuevoContacto = {
        nombre: nombre,
        email: email,
        mensaje: mensaje,
         
    }

    function enviarFormulario (evento)   {
        evento.preventDefault()
        console.log("Enviando...")

        
    }

    function enviarMensaje () {
        const contacto = fetch("http://localhost:8000/contacto/",
        {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(nuevoContacto)
        })
    }

</script>

<h2>Formulario de contacto</h2>

<form on:submit={enviarFormulario}>

<label>Nombre:<input bind:value={nombre} type="text">
</label>
<br>
<label>Email: 
    <input bind:value={email} type="email">
</label>
<br>
<label>Mensaje:
    <textarea bind:value={mensaje}></textarea>
 </label>
<br>
<button on:click={enviarMensaje}>Enviar</button>

</form>