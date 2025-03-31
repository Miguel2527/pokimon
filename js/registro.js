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

        alert("tas bien")

        console.log(registro) 
    }else{
        alert("tas mal")
    }

    let nombrep=document.getElementById("nombrep").textContent = registro[0]
    let edadp=document.getElementById("edadp").textContent = registro[1]
    let correop=document.getElementById("correop").textContent = registro[3]
    let usuariop=document.getElementById("usuariop").textContent = registro[4]
}