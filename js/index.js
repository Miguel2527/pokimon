
function Loguear(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if(username=='rodolfo' && password=='123456'){
        window.location.href = "adentro.html"
    }else{
        alert('usuario invalido')
    }
}
