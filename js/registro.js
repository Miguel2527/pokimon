function regis(){
    let nombre=document.getElementById("name").value
    let edad=document.getElementById("age").value
    let n_identificacion=document.getElementById("iden").value
    let correo=document.getElementById("email").value
 
    let registro = [nombre,edad, n_identificacion, correo]

    console.log(registro)

}