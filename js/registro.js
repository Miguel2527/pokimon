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

    let texto=document.getElementById("texto").value;
        texto.textContent = registro [0];

}