const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafio 1: pegar só nome e cidade do primeiro usuário
const { nome, cidade } = usuarios[0];
console.log(`Nome: ${nome}, Cidade: ${cidade}`);

// Desafio 2: criar novo array com mais um usuário (Ana)
const usuariosDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    idade: 25,
    email: "ana@exemplo.com",
    cidade: "Manaus",
    interesses: ["Natureza", "Cultura"]
  }
];
console.log(usuariosDoNorte);

// Desafio 3: criar Beatriz atualizada com novo email
const beatrizAtualizada = {
  ...usuarios[1],
  email: "bia.dev@exemplo.com"
};
console.log(beatrizAtualizada);

// Desafio 4: função que mostra interesses de um usuário
function mostrarInteresses({ nome, interesses }) {
  console.log(`${nome} gosta de: ${interesses.join(", ")}`);
}

// Testando a função
mostrarInteresses(usuarios[0]); // Carlos
mostrarInteresses(beatrizAtualizada); // Beatriz
