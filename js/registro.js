function regis(){
    let nombre=document.getElementById("name").value
    let edad=document.getElementById("age").value
    let n_identificacion=document.getElementById("iden").value
    let correo=document.getElementById("email").value
    let usuario=document.getElementById("usuario").value
    let clave=document.getElementById("clave").value
    let clave2=document.getElementById("clave2").value

    let registro = [nombre, edad, n_identificacion, correo, usuario, clave, clave2]

    if(clave == clave2){
        localStorage.setItem("username", JSON.stringify(registro))

        window.location.href = "../vistas/login.html"

        alert("tas bien")

        console.log(registro) 
    }else{
        alert("tas mal")
    }

localStorage.setItem("username", JSON.stringify(registro))

console.log(registro)


window.location.href = "../vistas/login.html"



}