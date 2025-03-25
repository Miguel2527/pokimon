function regis(){
    let nombre=document.getElementById("name").value
    let edad=document.getElementById("age").value
    let n_identificacion=document.getElementById("iden").value
    let correo=document.getElementById("email").value
    let usuario=document.getElementById("usuario").value
    let clave=document.getElementById("clave").value
    let clave2=document.getElementById("clave2").value

    if(clave == clave2){

        alert("tas bien")
        let registro = [nombre, edad, n_identificacion, correo, usuario, clave]

        console.log(registro) 
    }else{
        alert("tas mal")
    }



}