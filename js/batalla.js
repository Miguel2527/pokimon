class entrenador{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}


class Pokimon{
    constructor(nombre, tipo, ataque, defensa, habilidad, evolucion) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
        this.evolucion = evolucion;

    }
    mostrarInfo() {
        console.log(`🐉 ${this.nombre} - Tipo: ${this.tipo}`);
        console.log(`⚔️ Ataque: ${this.ataque} | 🛡️ Defensa: ${this.defensa}`);
        console.log(`⭐ Habilidad: ${this.habilidad} | 🔄 Evolución: ${this.evolucion}`);
    }
}

const pokimons = [
    new Pokimon("Pikachu", "Eléctrico", 55, 40, "Electricidad Estática", "Raichu"),
    new Pokimon("Charmander", "Fuego", 52, 43, "Mar de Llamas", "Charizard"),
    new Pokimon("Bulbasaur", "Planta/Veneno", 49, 49, "Espesura", "Venusaur"),
    new Pokimon("Squirtle", "Agua", 48, 65, "Torrente", "Blastoise"),
    new Pokimon("Eevee", "Normal", 55, 50, "Adaptabilidad", "Varias Evoluciones")
];

pokimons.forEach(pokemon => pokemon.mostrarInfo());


class Batalla {
    static ataque(pokimon1, pokimon2) {
        console.log(`🔥 ${pokimon1.nombre} ataca a ${pokimon2.nombre}`);
        let daño = pokimon1.ataque - pokimon2.defensa;
        if (daño > 0) {
            console.log(`💥 ${pokimon2.nombre} recibió ${daño} de daño!`);
        } else {
            console.log(`🛡️ ${pokimon2.nombre} bloqueó el ataque!`);
        }
    }

    static defensa(pokimon) {
        console.log(`🛡️ ${pokimon.nombre} se está defendiendo, aumenta su defensa en 5!`);
        pokimon.defensa += 5;
    }
}
function iniciarBatalla() {
    alert("¡Comienza la batalla!");
    Batalla.ataque(pokimons[3], pokimons[4]); 
    Batalla.defensa(pokimons[4]); 
} 
