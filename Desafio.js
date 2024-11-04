// Definindo as variáveis para o nome do herói e a quantidade de XP
let nomeHeroina = "Mosquita"; // Exemplo de nome
let experiencia = 9002; // Exemplo de XP

// Variável para armazenar o nível do herói
let nivel;

// Estrutura de decisão para definir o nível do herói com base na experiência (XP)
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome e o nível do herói
console.log(`A Heróina de nome ${nomeHeroina} está no nível de ${nivel}`);
