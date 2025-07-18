// Datos completos de los juegos

// Nivel 1: Exploradores Pequeños (4-6 años)
const level1Questions = [
  {
    emoji: "🐢",
    question: "¿Qué animal colombiano tiene caparazón y vive cerca del río?",
    answers: ["🐢 Tortuga morrocoy", "🐯 Tigre", "🐶 Perro"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌳",
    question: "¿Cuál de estos es un árbol que crece en la selva tropical?",
    answers: ["🌳 Ceiba", "🌵 Cactus", "🌲 Pino"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐆",
    question: "¿Qué animal tiene manchas negras y vive en la selva?",
    answers: ["🐆 Jaguar", "🐴 Caballo", "🐐 Cabra"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "💐",
    question: "¿Qué flor es símbolo nacional de Colombia?",
    answers: ["💐 Orquídea", "🌻 Girasol", "🌹 Rosa"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🦅",
    question: "¿Qué animal vuela y vive en las montañas?",
    answers: ["🦅 Cóndor de los Andes", "🐘 Elefante", "🦢 Cisne"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐟",
    question: "¿Cuál de estos animales vive en el Amazonas y tiene dientes afilados?",
    answers: ["🐟 Piraña", "🐢 Tortuga", "🐠 Pez payaso"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌳",
    question: "¿Qué árbol tiene hojas grandes y da sombra en la selva?",
    answers: ["🌴 Palma de cera", "🌳 Yarumo", "🌲 Ciprés"],
    correct: 1,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐬",
    question: "¿Qué animal es famoso por su color rosa y nada en ríos?",
    answers: ["🐬 Delfín del Amazonas", "🐳 Ballena", "🐙 Pulpo"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🦉",
    question: "¿Qué animal hace 'huu-huu' en la noche y vive en los bosques?",
    answers: ["🦉 Búho", "🐓 Gallo", "🐤 Pollito"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🦋",
    question: "¿Qué insecto tiene alas y colores brillantes?",
    answers: ["🦋 Mariposa", "🐜 Hormiga", "🐞 Escarabajo"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐸",
    question: "¿Cuál de estos vive en un charco o laguna?",
    answers: ["🐸 Rana", "🐈 Gato", "🐎 Caballo"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🦥",
    question: "¿Qué animal camina lento y vive en árboles?",
    answers: ["🦥 Perezoso", "🐕 Perro", "🦓 Cebra"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌴",
    question: "¿Qué árbol se ve mucho en las montañas de Colombia y es alto?",
    answers: ["🌴 Palma de cera", "🌳 Roble", "🌲 Pino"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐇",
    question: "¿Qué animal vive en la sabana y tiene orejas largas?",
    answers: ["🐇 Conejo del páramo", "🐘 Elefante", "🦒 Jirafa"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐒",
    question: "¿Cuál de estos animales puede trepar árboles y comer frutas?",
    answers: ["🐒 Mono titi", "🐓 Gallina", "🐖 Cerdo"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const level1Classification = [
  { emoji: "🦥", name: "Perezoso", type: "fauna" },
  { emoji: "🌸", name: "Orquídea", type: "flora" },
  { emoji: "🐢", name: "Tortuga morrocoy", type: "fauna" },
  { emoji: "🌴", name: "Palma de cera", type: "flora" },
  { emoji: "🐒", name: "Mono titi", type: "fauna" },
  { emoji: "🌿", name: "Helecho", type: "flora" },
  { emoji: "🐦", name: "Tucán", type: "fauna" },
  { emoji: "🌻", name: "Girasol", type: "flora" },
  { emoji: "🐍", name: "Serpiente boa", type: "fauna" },
  { emoji: "🌳", name: "Ceiba", type: "flora" },
  { emoji: "🐆", name: "Jaguar", type: "fauna" },
  { emoji: "🌱", name: "Frailejón", type: "flora" },
  { emoji: "🐬", name: "Delfín rosado", type: "fauna" },
  { emoji: "🍂", name: "Hoja de yarumo", type: "flora" },
  { emoji: "🐝", name: "Abeja melífera", type: "fauna" },
  { emoji: "🍌", name: "Planta de plátano", type: "flora" },
]

// Nivel 2: Guardianes del Bosque (7-10 años)
const level2Questions = [
  {
    emoji: "🦅",
    question: "¿Cuál es la función del guácharo en los ecosistemas?",
    answers: ["Dispersa semillas", "Caza insectos", "Hace nidos para otros"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐸",
    question: "¿Qué especie de rana es altamente venenosa y endémica del Chocó?",
    answers: ["Rana dardo dorada", "Rana toro", "Rana arborícola"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌴",
    question: "¿Qué ecosistema es hogar de la palma de cera?",
    answers: ["Bosque andino húmedo", "Desierto de la Guajira", "Llanuras del Orinoco"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌱",
    question: "¿Cuál es una especie endémica de flora colombiana en peligro?",
    answers: ["Frailejón", "Cactus", "Acacia"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🦏",
    question: "¿Cuál es el mamífero terrestre más grande de Colombia?",
    answers: ["Tapir amazónico", "Jaguar", "Armadillo"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐋",
    question: "¿Qué problema ambiental amenaza al manatí del Caribe colombiano?",
    answers: ["Contaminación de ríos", "Depredadores naturales", "Inviernos prolongados"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐦",
    question: "¿Qué tipo de polinización realiza el colibrí en los Andes?",
    answers: ["Polinización cruzada", "Polinización por viento", "Polinización por agua"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌿",
    question: "¿Qué árbol andino es clave para captar agua y proteger los páramos?",
    answers: ["Frailejón", "Roble", "Eucalipto"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🐒",
    question: "¿Cuál de estas especies vive solo en Colombia y está en peligro crítico?",
    answers: ["Mono churuco", "Puma", "Loro común"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    emoji: "🌍",
    question: "¿Qué significa que una especie sea 'endémica'?",
    answers: ["Vive solo en una región del mundo", "Es migratoria", "Puede adaptarse a cualquier hábitat"],
    correct: 0,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const level2Matching = [
  {
    animal: "🐆 Jaguar",
    habitat: "Selva húmeda del Chocó",
  },
  {
    animal: "🦜 Loro orejiamarillo",
    habitat: "Bosques altos de los Andes",
  },
  {
    animal: "🐊 Caimán aguja",
    habitat: "Ciénegas y ríos del Caribe",
  },
  {
    animal: "🦥 Perezoso de dos dedos",
    habitat: "Selvas tropicales bajas",
  },
  {
    animal: "🦋 Mariposa morpho",
    habitat: "Amazonía colombiana",
  },
  {
    animal: "🐬 Delfín rosado",
    habitat: "Ríos del Amazonas",
  },
  {
    animal: "🦅 Cóndor de los Andes",
    habitat: "Cumbres frías de los Andes",
  },
  {
    animal: "🐒 Mono aullador rojo",
    habitat: "Bosque tropical húmedo",
  },
  {
    animal: "🐢 Tortuga charapa",
    habitat: "Playas de los ríos del Amazonas",
  },
  {
    animal: "🐸 Rana dardo venenosa",
    habitat: "Suelo húmedo del Chocó",
  },
  {
    animal: "🦇 Murciélago frugívoro",
    habitat: "Cuevas y selvas frutales",
  },
  {
    animal: "🐍 Boa constrictor",
    habitat: "Selvas cálidas y zonas pantanosas",
  },
]

// Configuración de niveles
const gameConfig = {
  1: {
    name: "Exploradores Pequeños",
    emojis: "🧒🐢🌳🦋",
    games: [
      { id: "quiz", name: "🧠 Preguntas sobre Fauna y Flora", description: "15 preguntas divertidas", class: "quiz" },
      { id: "classification", name: "🌿 ¿Fauna o Flora?", description: "Clasifica 16 elementos", class: "classify" },
    ],
  },
  2: {
    name: "Guardianes del Bosque",
    emojis: "🌿🐆🦜🏞️",
    games: [
      { id: "quiz", name: "🧠 Preguntas Avanzadas", description: "10 preguntas desafiantes", class: "quiz" },
      {
        id: "matching",
        name: "🎯 Empareja Animal con Hábitat",
        description: "12 parejas por descubrir",
        class: "match",
      },
    ],
  },
}
