class Pokimon {
    constructor(nombre, tipo, vida, ataque, defensa, habilidad, evolucion) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.vida = vida;
      this.ataque = ataque;
      this.defensa = defensa;
      this.habilidad = habilidad;
      this.evolucion = evolucion;
    }
  }
  
  const pokimons = [
    new Pokimon("Pikachu", "Eléctrico", 200, 55, 40, "Electricidad Estática", "Raichu"),
    new Pokimon("Charmander", "Fuego", 100 , 52, 43, "Mar de Llamas", "Charizard"),
    new Pokimon("Bulbasaur", "Planta/Veneno", 150, 49, 49, "Espesura", "Venusaur"),
    new Pokimon("Squirtle", "Agua", 180, 48, 65, "Torrente", "Blastoise"),
    new Pokimon("Eevee", "Normal", 220, 55, 50, "Adaptabilidad", "Varias Evoluciones")
  ];
  
  let pokemonJugador = null;
  let pokemonEnemigo = null;
  
  window.onload = () => {

    const nombrePokemon = JSON.parse(localStorage.getItem("pokemon"));
    pokemonJugador = pokimons.find(p => p.nombre === nombrePokemon);
  

    const posiblesEnemigos = pokimons.filter(p => p.nombre !== pokemonJugador.nombre);
    const index = Math.floor(Math.random() * posiblesEnemigos.length);
    pokemonEnemigo = posiblesEnemigos[index];
  
    mostrarPokemon("tu-pokemon", pokemonJugador);
    mostrarPokemon("enemigo-pokemon", pokemonEnemigo);
  };
  
  function mostrarPokemon(elementId, pokemon) {
    const contenedor = document.getElementById(elementId);
    contenedor.innerHTML = `
      <img style="     width: 270px; height: 200px; " src="../img/${pokemon.nombre.toLowerCase()}.png" alt="${pokemon.nombre}">
      <h3>${pokemon.nombre}</h3>
      <p><strong>Tipo:</strong> ${pokemon.tipo}</p>
      <p><strong>Vida:</strong> ${pokemon.vida}</p>
      <p><strong>Ataque:</strong> ${pokemon.ataque}</p>
      <p><strong>Defensa:</strong> ${pokemon.defensa}</p>
      <p><strong>Habilidad:</strong> ${pokemon.habilidad}</p>
    `;
  }
  
  

  function iniciarBatalla() {
    const dañoJugador =  pokemonJugador.ataque - pokemonEnemigo.defensa ;
    const dañoEnemigo =  pokemonEnemigo.ataque - pokemonJugador.defensa ;

  
    let resultado = "";
  
    if (dañoJugador>0) {
      resultado = `¡! ${pokemonJugador.nombre} le quito la defenza a  ${pokemonEnemigo.nombre} `;

            if (dañoEnemigo>0){
              resultado = `¡! ${pokemonEnemigo.nombre} le quito la defenza a  ${pokemonJugador.nombre} `;
            }else if (dañoEnemigo<0) {
              resultado = `Aun no le haz quitado la defenza a ${pokemonJugador.nombre}, tiene ${Math.abs(dañoEnemigo)} de defenza`;
            }
    } else if (dañoJugador < 0) {
      resultado = `Aun no le haz quitado la defenza a ${pokemonEnemigo.nombre}, tiene ${Math.abs(dañoJugador)} de defenza`;
      pokemonEnemigo.defensa = Math.abs(dañoJugador)
      console.log(pokemonEnemigo.defensa)
    } else {
      resultado = `le quitaste la defenza a ${pokemonEnemigo.nombre}`;
    }
  
    alert(resultado);
  }