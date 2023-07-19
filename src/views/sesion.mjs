

function guardarToken(token) {
    const json = JSON.stringify(token)
    localStorage.setItem("token", json)
}

function recuperarToken() {
    const json = localStorage.getItem("token")
    const token = JSON.parse(json)
    return token
}

function cerrarSesion () {
    localStorage.removeItem("token")
}

function existeToken () {
    return Boolean(recuperarToken())
}


export {
    guardarToken,
    recuperarToken,
    cerrarSesion,
    existeToken
}

