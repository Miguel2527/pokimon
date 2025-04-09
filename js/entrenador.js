function GetDataUser(){

    let dataUser = localStorage.getItem("user")

    if (dataUser== null)
        alert("no has inciado")
    window.location.href = "../vistas/entrenador.html"
}
function mostrarDetalle() {
    const detalle = document.getElementById("detalle-pikachu");
    if (detalle.style.display === "none") {
      detalle.style.display = "block";
    } else {
      detalle.style.display = "none";
    }
  }
  function mostrarDetalleC() {
    const detalle = document.getElementById("detalle-charmander");
    if (detalle.style.display === "none") {
      detalle.style.display = "block";
    } else {
      detalle.style.display = "none";
    }
  }

  function mostrarDetalleB() {
    const detalle = document.getElementById("detalle-Bulbasaur");
    if (detalle.style.display === "none") {
      detalle.style.display = "block";
    } else {
      detalle.style.display = "none";
    }
  }

  function mostrarDetalleS() {
    const detalle = document.getElementById("detalle-Squirtle");
    if (detalle.style.display === "none") {
      detalle.style.display = "block";
    } else {
      detalle.style.display = "none";
    }
  }
  function mostrarDetalleE() {
    const detalle = document.getElementById("detalle-Eevee");
    if (detalle.style.display === "none") {
      detalle.style.display = "block";
    } else {
      detalle.style.display = "none";
    }
  }
    let entrenadorSeleccionado = null;

    function seleccionarEntrenador(nombre) {
        entrenadorSeleccionado = nombre;
        console.log("Entrenador seleccionado:", entrenadorSeleccionado);
    }
    
    let PokemonSeleccionado = null;
    
    function seleccionarPokemon(nombre) {
        PokemonSeleccionado = nombre;
        console.log("Pokemon seleccionado:", PokemonSeleccionado);
    }
    
    function batalla() {
        if (entrenadorSeleccionado && PokemonSeleccionado) {
            localStorage.setItem("entrenador", JSON.stringify(entrenadorSeleccionado));
            localStorage.setItem("pokemon", JSON.stringify(PokemonSeleccionado));
    
            alert("INICIANDO BATALLA");
    
            window.location.href = "../vistas/batalla.html";
        } else {
            alert("¡Selecciona un entrenador y un Pokémon primero!");
        }
    }