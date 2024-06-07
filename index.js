class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = "";
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "fez um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);


    }
}

const herois = [
    new Heroi("Thiago", 23, "guerreiro"),
    new Heroi("Mikaeli", 200, "mago"),
    new Heroi("Alan", 18, "monge"),
    new Heroi("Naruto", 17, "ninja")
];


herois.forEach(heroi => heroi.atacar());