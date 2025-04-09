
function Loguear(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value


    let User = JSON.parse (localStorage.getItem("username"))

    console.log(User)

    if(username==null){
        alert("no has iniciado")
        window.location.href = "../vistas/index.html"    

    }else if(User[4] == username && User[5] == password){
        localStorage.setItem("username",username)
        window.location.href = "../vistas/entrenador.html"    
        alert("Usuario valido")
    }else{
        print("No existe")
    }
}
