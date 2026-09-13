const SCORE_SMOOTHIE = 500;
const SCORE_WASTED_FRUIT = -100;
const SCORE_LOST_CUSTOMER = -300;

const FRENZY_MAX = 100;

const FRENZY_PER_FRUIT = 5;
const FRENZY_PER_SMOOTHIE = 10;

const FRENZY_WASTE_PENALTY = 10;
const FRENZY_CUSTOMER_LOST_PENALTY = 20;

const FRENZY_DURATION_MS = 10000;

const FRENZY_BLEND_MULTIPLIER = 0.5;
const FRENZY_SCORE_MULTIPLIER = 1.5;

const SOUNDS = {
  harvest: new Audio("sounds/harvest.wav"),
  error: new Audio("sounds/error.wav"),
  discard: new Audio("sounds/discard.wav"),

  blenderRunning: new Audio(
    "sounds/blender-start.wav"
  ),

  blenderFinish: new Audio(
    "sounds/blender-finish.wav"
  ),

  serve: new Audio("sounds/serve.wav"),

  customerArrive: new Audio(
    "sounds/customer-arrive.wav"
  ),

  lowPatience: new Audio(
    "sounds/low-patience.wav"
  ),

  customerLeave: new Audio(
    "sounds/customer-leave.wav"
  ),

  frenzyStart: new Audio(
    "sounds/frenzy-start.wav"
  ),

  frenzyEnd: new Audio(
    "sounds/frenzy-end.wav"
  ),

  reshuffle: new Audio(
    "sounds/reshuffle.wav"
  ),

  levelComplete: new Audio(
    "sounds/level-complete.wav"
  )
};

const CUSTOMER_TYPES = {
  normal: {
    id: "normal",
    name: "Normal",
    patienceMultiplier: 1
  },

  impatient: {
    id: "impatient",
    name: "Impatient",
    patienceMultiplier: 0.7
  },

  relaxed: {
    id: "relaxed",
    name: "Relaxed",
    patienceMultiplier: 1.25
  }
};

const FRUIT_LIBRARY = {
  strawberry: {
    id: "strawberry",
    icon: "🍓"
  },

  banana: {
    id: "banana",
    icon: "🍌"
  },

  blueberry: {
    id: "blueberry",
    icon: "🫐"
  },

  orange: {
    id: "orange",
    icon: "🍊"
  },

  pineapple: {
    id: "pineapple",
    icon: "🍍"
  },

  mango: {
    id: "mango",
    icon: "🥭"
  },

  kiwi: {
    id: "kiwi",
    icon: "🥝"
  },

  coconut: {
    id: "coconut",
    icon: "🥥"
  },

  peach: {
    id: "peach",
    icon: "🍑"
  },

  redApple: {
    id: "redApple",
    icon: "🍎"
  }
};

const RECIPE_LIBRARY = {
  strawberryBanana: {
    id: "strawberryBanana",
    name: "Strawberry Banana",

    ingredients: {
      strawberry: 2,
      banana: 2
    },

    blendTime: 3000
  },

  berryBanana: {
    id: "berryBanana",
    name: "Berry Banana",

    ingredients: {
      blueberry: 2,
      banana: 2
    },

    blendTime: 3000
  },

  veryBerry: {
    id: "veryBerry",
    name: "Very Berry",

    ingredients: {
      strawberry: 2,
      blueberry: 2
    },

    blendTime: 3000
  },

  tripleFruit: {
    id: "tripleFruit",
    name: "Triple Fruit",

    ingredients: {
      strawberry: 2,
      banana: 2,
      blueberry: 2
    },

    blendTime: 4000
  },

  orangeBerry: {
    id: "orangeBerry",
    name: "Orange Berry",

    ingredients: {
      orange: 2,
      blueberry: 2
    },

    blendTime: 3000
  },

  orangeBanana: {
    id: "orangeBanana",
    name: "Orange Banana",

    ingredients: {
      orange: 2,
      banana: 2
    },

    blendTime: 3000
  },

 tropicalTwist: {
    id: "tropicalTwist",
    name: "Tropical Twist",

    ingredients: {
      pineapple: 2,
      mango: 2
    },

    blendTime: 3000
  },

  kiwiKick: {
    id: "kiwiKick",
    name: "Kiwi Kick",

    ingredients: {
      kiwi: 2,
      banana: 2
    },

    blendTime: 3000
  },

  mangoTango: {
    id: "mangoTango",
    name: "Mango Tango",

    ingredients: {
      mango: 2,
      orange: 2
    },

    blendTime: 3000
  },

  sunsetSplash: {
    id: "sunsetSplash",
    name: "Sunset Splash",

    ingredients: {
      strawberry: 2,
      orange: 2
    },

    blendTime: 3000
  },

  blueTropic: {
    id: "blueTropic",
    name: "Blue Tropic",

    ingredients: {
      blueberry: 2,
      pineapple: 2
    },

    blendTime: 3000
  },

  beachBum: {
    id: "beachBum",
    name: "Beach Bum",

    ingredients: {
      banana: 2,
      pineapple: 2
    },

    blendTime: 3000
  },

  mangonana: {
    id: "mangonana",
    name: "Mangonana",

    ingredients: {
      mango: 2,
      banana: 2
    },

    blendTime: 3000
  },

  strawberryKiwi: {
    id: "strawberryKiwi",
    name: "Strawberry Kiwi",

    ingredients: {
      strawberry: 2,
      kiwi: 2
    },

    blendTime: 3000
  },

  islandZing: {
    id: "islandZing",
    name: "Island Zing",

    ingredients: {
      kiwi: 2,
      mango: 2
    },

    blendTime: 3000
  },

  pinaColada: {
    id: "pinaColada",
    name: "Piña Colada",

    ingredients: {
      pineapple: 3,
      coconut: 1
    },

    blendTime: 3000
  },

  cocoStrawberry: {
    id: "cocoStrawberry",
    name: "Coco Strawberry",

    ingredients: {
      coconut: 3,
      strawberry: 1
    },

    blendTime: 3000
  },

  peachyKeen: {
    id: "peachyKeen",
    name: "Peachy Keen",

    ingredients: {
      peach: 3,
      banana: 1
    },

    blendTime: 3000
  },

  peachberry: {
    id: "peachberry",
    name: "Peachberry",

    ingredients: {
      peach: 2,
      strawberry: 2
    },

    blendTime: 3000
  },

  sunsetPeach: {
    id: "sunsetPeach",
    name: "Sunset Peach",

    ingredients: {
      peach: 2,
      orange: 2
    },

    blendTime: 3000
  },

  sunriseRefresher: {
    id: "sunriseRefresher",
    name: "Sunrise Refresher",

    ingredients: {
      orange: 3,
      coconut: 1
    },

    blendTime: 3000
  },

  kiwiColada: {
    id: "kiwiColada",
    name: "Kiwi Colada",

    ingredients: {
      kiwi: 2,
      coconut: 2
    },

    blendTime: 3000
  },

  appleIsle: {
    id: "appleIsle",
    name: "Apple Isle",

    ingredients: {
      redApple: 2,
      pineapple: 2
    },

    blendTime: 3000
  },

  applesToOranges: {
    id: "applesToOranges",
    name: "Apples To Oranges",

    ingredients: {
      redApple: 3,
      orange: 3
    },

    blendTime: 4000
  },

  goldenGlow: {
    id: "goldenGlow",
    name: "Golden Glow",

    ingredients: {
      banana: 2,
      pineapple: 2,
      mango: 2
    },

    blendTime: 4000
  },

  islandBerry: {
    id: "islandBerry",
    name: "Island Berry",

    ingredients: {
      strawberry: 2,
      blueberry: 2,
      mango: 2
    },

    blendTime: 4000
  },

  citrusBreeze: {
    id: "citrusBreeze",
    name: "Citrus Breeze",

    ingredients: {
      orange: 2,
      kiwi: 2,
      pineapple: 2
    },

    blendTime: 4000
  },

  beachBliss: {
    id: "beachBliss",
    name: "Beach Bliss",

    ingredients: {
      strawberry: 2,
      banana: 2,
      pineapple: 2
    },

    blendTime: 4000
  },

  tropicalBerry: {
    id: "tropicalBerry",
    name: "Tropical Berry",

    ingredients: {
      blueberry: 2,
      mango: 2,
      pineapple: 2
    },

    blendTime: 4000
  },

  sunriseBlend: {
    id: "sunriseBlend",
    name: "Sunrise Blend",

    ingredients: {
      strawberry: 2,
      orange: 2,
      mango: 2
    },

    blendTime: 4000
  },

  greenMachine: {
    id: "greenMachine",
    name: "Green Machine",

    ingredients: {
      kiwi: 3,
      banana: 2,
      mango: 1
    },

    blendTime: 4000
  },

  pinaBerry: {
    id: "pinaBerry",
    name: "Piña Berry",

    ingredients: {
      pineapple: 3,
      coconut: 2,
      strawberry: 1
    },

    blendTime: 4000
  },

  fuzzyFruits: {
    id: "fuzzyFruits",
    name: "Fuzzy Fruits",

    ingredients: {
      peach: 4,
      kiwi: 2
    },

    blendTime: 4000
  },

  berryOrchard: {
    id: "berryOrchard",
    name: "Berry Orchard",

    ingredients: {
      peach: 2,
      strawberry: 2,
      blueberry: 2
    },

    blendTime: 4000
  },

  orangeYouGlad: {
    id: "orangeYouGlad",
    name: "Orange You Glad",

    ingredients: {
      orange: 3,
      coconut: 2,
      mango: 1
    },

    blendTime: 4000
  },

  citrusGrove: {
    id: "citrusGrove",
    name: "Citrus Grove",

    ingredients: {
      orange: 3,
      peach: 2,
      kiwi: 1
    },

    blendTime: 4000
  },

  bigKahuna: {
    id: "bigKahuna",
    name: "Big Kahuna",

    ingredients: {
      pineapple: 2,
      mango: 2,
      coconut: 1,
      banana: 1
    },

    blendTime: 4000
  },

  peachBeach: {
    id: "peachBeach",
    name: "Peach Beach",

    ingredients: {
      peach: 2,
      mango: 2,
      banana: 2
    },

    blendTime: 4000
  },

  tropicalOrchard: {
    id: "tropicalOrchard",
    name: "Tropical Orchard",

    ingredients: {
      redApple: 4,
      orange: 2,
      pineapple: 2
    },

    blendTime: 5000
  }
};

const LEVELS = {
  "1-1": {
    name: "First Blend",

    rows: 6,
    cols: 6,

    trayCapacity: 6,
    blenderCount: 1,

    maxOrders: 1,

    smoothieGoal: 5,

    stars: {
      one: 1500,
      two: 2000,
      three: 2500
    },

    customerPatience: 60000,

    customerTypes: {
      normal: 1
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "strawberry",
      "banana",
      "blueberry"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry"
    ]
  },

  "1-2": {
    name: "Pick Precisely",

    rows: 6,
    cols: 6,

    trayCapacity: 6,
    blenderCount: 1,

    maxOrders: 1,

    smoothieGoal: 6,

    stars: {
      one: 1800,
      two: 2400,
      three: 3000
    },

    customerPatience: 45000,

    customerTypes: {
      normal: 1
    },

    customerArrivalDelay: 5000,

    fruit: [
      "strawberry",
      "banana",
      "blueberry"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry",
      "tripleFruit"
    ]
  },

  "1-3": {
    name: "Double Trouble",

    rows: 6,
    cols: 6,

    trayCapacity: 6,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 7,

    stars: {
      one: 2100,
      two: 2700,
      three: 3500
    },

    customerPatience: 45000,

    customerTypes: {
      normal: 1
    },

    customerArrivalDelay: 5000,

    fruit: [
      "strawberry",
      "banana",
      "blueberry",
      "orange"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry",
      "sunsetSplash",
      "orangeBerry",
      "orangeBanana",
      "tripleFruit"
    ]
  },

  "1-4": {
    name: "Blend Ahead",

    rows: 6,
    cols: 6,

    trayCapacity: 6,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 8,

    stars: {
      one: 2500,
      two: 3000,
      three: 4000
    },

    customerPatience: 40000,

    customerTypes: {
      normal: 0.75,
      impatient: 0.25
    },

    customerArrivalDelay: 5000,

    fruit: [
      "banana",
      "orange",
      "pineapple",
      "mango"
    ],

    recipes: [
      "orangeBanana",
      "tropicalTwist",
      "mangoTango",
      "mangonana",
      "goldenGlow"
    ]
  },

  "1-5": {
    name: "Beach Rush",

    rows: 6,
    cols: 6,

    trayCapacity: 6,
    blenderCount: 1,

    maxOrders: 3,

    smoothieGoal: 9,

    stars: {
      one: 3100,
      two: 3800,
      three: 4500
    },

    customerPatience: 40000,

    customerTypes: {
      normal: 0.6,
      impatient: 0.4
    },

    customerArrivalDelay: 5000,

    fruit: [
      "strawberry",
      "blueberry",
      "kiwi",
      "mango"
    ],

    recipes: [
      "veryBerry",
      "strawberryKiwi",
      "islandZing",
      "islandBerry",
    ]
  },

  "1-6": {
    name: "Bigger Basket",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 9,

    stars: {
      one: 3300,
      two: 3900,
      three: 4600
    },

    customerPatience: 39000,

    customerTypes: {
      normal: 0.7,
      impatient: 0.3
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "strawberry",
      "banana",
      "blueberry",
      "pineapple"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry",
      "tripleFruit",
      "beachBum",
      "blueTropic",
      "beachBliss"
    ]
  },

  "1-7": {
    name: "Smooth Operator",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 10,

    stars: {
      one: 3600,
      two: 4200,
      three: 5000
    },

    customerPatience: 38000,

    customerTypes: {
      normal: 0.8,
      impatient: 0.2
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "banana",
      "strawberry",
      "orange"
    ],

    recipes: [
      "strawberryBanana",
      "strawberryKiwi",
      "orangeBanana",
      "kiwiKick",
      "sunsetSplash"
    ]
  },

  "1-8": {
    name: "Surf, Sun, and Smoothies",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 10,

    stars: {
      one: 4100,
      two: 4700,
      three: 5200
    },

    customerPatience: 37000,

    customerTypes: {
      normal: 0.7,
      impatient: 0.3
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "blueberry",
      "mango",
      "pineapple",
      "banana"
    ],

    recipes: [
      "berryBanana",
      "beachBum",
      "goldenGlow",
      "tropicalBerry"
    ]
  },

  "1-9": {
    name: "Sunset Service",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 11,

    stars: {
      one: 4600,
      two: 5200,
      three: 5800
    },

    customerPatience: 36000,

    customerTypes: {
      normal: 0.75,
      impatient: 0.25
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "strawberry",
      "mango",
      "orange",
      "banana"
    ],

    recipes: [
      "mangonana",
      "orangeBanana",
      "mangoTango",
      "sunsetSplash",
      "sunriseBlend"
    ]
  },

  "1-10": {
    name: "Nighttime Beach Party",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 3,

    smoothieGoal: 12,

     stars: {
      one: 5000,
      two: 5700,
      three: 6400
    },

    customerPatience: 35000,

    customerTypes: {
      normal: 0.55,
      impatient: 0.45
    },

    customerArrivalDelay: 4000,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "mango",
      "orange",
      "pineapple"
    ],

    recipes: [
      "tropicalTwist",
      "mangoTango",
      "islandZing",
      "citrusBreeze"
    ]
  },

  "2-1": {
    name: "Odd Orders",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 8,

    stars: {
      one: 2600,
      two: 3300,
      three: 4000
    },

    customerPatience: 40000,

    customerTypes: {
      normal: 0.5,
      relaxed: 0.5
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "strawberry",
      "banana",
      "coconut",
      "pineapple"
    ],

    recipes: [
      "strawberryBanana",
      "beachBum",
      "pinaColada",
      "cocoStrawberry",
      "beachBliss",
      "pinaBerry"
    ]
  },

  "2-2": {
    name: "Mix It Up",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 1,

    maxOrders: 2,

    smoothieGoal: 8,

    stars: {
      one: 2800,
      two: 3500,
      three: 4200
    },

    customerPatience: 38000,

    customerTypes: {
      normal: 0.5,
      relaxed: 0.25,
      impatient: 0.25
    },

    customerArrivalDelay: 4500,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "banana",
      "mango",
      "peach"
    ],

    recipes: [
      "kiwiKick",
      "mangonana",
      "islandZing",
      "greenMachine",
      "peachyKeen",
      "fuzzyFruits"
    ]
  },

  "2-3": {
    name: "Double Blend",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 10,

    stars: {
      one: 3300,
      two: 4200,
      three: 5100
    },

    customerPatience: 42000,

    customerTypes: {
      normal: 0.40,
      relaxed: 0.30,
      impatient: 0.30
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "strawberry",
      "peach",
      "blueberry",
      "orange"
    ],

    recipes: [
      "orangeBerry",
      "veryBerry",
      "sunsetSplash",
      "peachberry",
      "sunsetPeach",
      "berryOrchard"
    ]
  },

  "2-4": {
    name: "Blender Rush",

    rows: 6,
    cols: 6,

    trayCapacity: 8,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 10,

    stars: {
      one: 3700,
      two: 4500,
      three: 5400
    },

    customerPatience: 39000,

    customerTypes: {
      normal: 0.45,
      relaxed: 0.20,
      impatient: 0.35
    },

    customerArrivalDelay: 4500,

    reshuffleTime: 3000,

    fruit: [
      "coconut",
      "mango",
      "pineapple",
      "orange"
    ],

    recipes: [
      "tropicalTwist",
      "pinaColada",
      "sunriseRefresher",
      "orangeYouGlad"
    ]
  },

  "2-5": {
    name: "Bigger Board",

    rows: 7,
    cols: 7,

    trayCapacity: 8,
    blenderCount: 2,

    maxOrders: 4,

    smoothieGoal: 12,

    stars: {
      one: 4300,
      two: 5200,
      three: 6500
    },

    customerPatience: 42000,

    customerTypes: {
      normal: 0.55,
      relaxed: 0.30,
      impatient: 0.15
    },

    customerArrivalDelay: 6000,

    reshuffleTime: 3000,

    fruit: [
      "coconut",
      "peach",
      "kiwi",
      "orange"
    ],

    recipes: [
      "sunsetPeach",
      "fuzzyFruits",
      "sunriseRefresher",
      "kiwiColada",
      "citrusGrove"
    ]
  },

  "2-6": {
    name: "Five Alive",

    rows: 7,
    cols: 7,

    trayCapacity: 8,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 10,

    stars: {
      one: 3300,
      two: 4400,
      three: 5500
    },

    customerPatience: 39000,

    customerTypes: {
      normal: 0.55,
      relaxed: 0.20,
      impatient: 0.25
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "coconut",
      "strawberry",
      "kiwi",
      "mango",
      "pineapple"
    ],

    recipes: [
      "tropicalTwist",
      "strawberryKiwi",
      "islandZing",
      "pinaColada",
      "cocoStrawberry",
      "kiwiColada",
      "pinaBerry"
    ]
  },

  "2-7": {
    name: "Pick Your Fruit",

    rows: 7,
    cols: 7,

    trayCapacity: 8,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 11,

    stars: {
      one: 4300,
      two: 5000,
      three: 6100
    },

    customerPatience: 36000,

    customerTypes: {
      normal: 0.60,
      relaxed: 0.20,
      impatient: 0.20
    },

    customerArrivalDelay: 4500,

    reshuffleTime: 3000,

    fruit: [
      "blueberry",
      "strawberry",
      "peach",
      "mango",
      "banana"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry",
      "mangonana",
      "peachyKeen",
      "peachberry",
      "islandBerry",
      "berryOrchard"
    ]
  },

  "2-8": {
    name: "Smoothie Multitasking",

    rows: 7,
    cols: 7,

    trayCapacity: 10,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 12,

    stars: {
      one: 5000,
      two: 5700,
      three: 6500
    },

    customerPatience: 34000,

    customerTypes: {
      normal: 0.70,
      relaxed: 0.10,
      impatient: 0.20
    },

    customerArrivalDelay: 4200,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "strawberry",
      "peach",
      "mango",
      "banana"
    ],

    recipes: [
      "strawberryBanana",
      "mangonana",
      "kiwiKick",
      "strawberryKiwi",
      "islandZing",
      "peachyKeen",
      "peachberry",
      "greenMachine",
      "fuzzyFruits",
      "peachBeach"
    ]
  },

  "2-9": {
    name: "Happy Hour",

    rows: 7,
    cols: 7,

    trayCapacity: 10,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 13,

    stars: {
      one: 5300,
      two: 6200,
      three: 7100
    },

    customerPatience: 37000,

    customerTypes: {
      normal: 0.40,
      relaxed: 0.60,
    },

    customerArrivalDelay: 3500,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "orange",
      "peach",
      "mango",
      "banana"
    ],

    recipes: [
      "orangeBanana",
      "mangonana",
      "kiwiKick",
      "mangoTango",
      "islandZing",
      "peachyKeen",
      "sunsetPeach",
      "greenMachine",
      "fuzzyFruits",
      "citrusGrove",
      "peachBeach"
    ]
  },

  "2-10": {
    name: "Block Party",

    rows: 7,
    cols: 7,

    trayCapacity: 10,
    blenderCount: 2,

    maxOrders: 4,

    smoothieGoal: 14,

    stars: {
      one: 4800,
      two: 6250,
      three: 7150
    },

    customerPatience: 35000,

    customerTypes: {
      normal: 0.55,
      relaxed: 0.05,
      impatient: 0.40
    },

    customerArrivalDelay: 4000,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "pineapple",
      "coconut",
      "mango",
      "banana"
    ],

    recipes: [
      "beachBum",
      "mangonana",
      "tropicalTwist",
      "kiwiKick",
      "islandZing",
      "pinaColada",
      "kiwiColada",
      "greenMachine",
      "bigKahuna"
    ]
  },

  "3-1": {
    name: "A Tall Order",

    rows: 7,
    cols: 7,

    trayCapacity: 10,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 12,

    stars: {
      one: 4100,
      two: 5350,
      three: 6600
    },

    customerPatience: 37500,

    customerTypes: {
      normal: 0.60,
      relaxed: 0.25,
      impatient: 0.15
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "orange",
      "redApple",
      "strawberry",
      "pineapple",
      "peach"
    ],

    recipes: [
      "sunsetSplash",
      "peachberry",
      "sunsetPeach",
      "applesToOranges",
      "appleIsle",
      "tropicalOrchard",
    ]
  },

  "3-2": {
    name: "All Smalls",

    rows: 7,
    cols: 7,

    trayCapacity: 10,
    blenderCount: 2,

    maxOrders: 3,

    smoothieGoal: 13,

    stars: {
      one: 5000,
      two: 6000,
      three: 7000
    },

    customerPatience: 33000,

    customerTypes: {
      normal: 0.70,
      relaxed: 0.10,
      impatient: 0.20
    },

    customerArrivalDelay: 5000,

    reshuffleTime: 3000,

    fruit: [
      "kiwi",
      "orange",
      "blueberry",
      "strawberry",
      "banana"
    ],

    recipes: [
      "strawberryBanana",
      "berryBanana",
      "veryBerry",
      "orangeBanana",
      "orangeBerry",
      "kiwiKick",
      "sunsetSplash",
      "strawberryKiwi"
    ]
  }
};



const LEVEL_ORDER = [
  "1-1",
  "1-2",
  "1-3",
  "1-4",
  "1-5",
  "1-6",
  "1-7",
  "1-8",
  "1-9",
  "1-10",
  "2-1",
  "2-2",
  "2-3",
  "2-4",
  "2-5",
  "2-6",
  "2-7",
  "2-8",
  "2-9",
  "2-10",
  "3-1",
  "3-2"
];

const SAVE_KEY =
  "smoothieFrenzySave";

let currentLevelId = null;
let currentLevel = null;

let debugMode = false;

let unlockedLevels = [
  "1-1"
];

let levelStars = {};

let highScores = {};

let ROWS = 6;
let COLS = 6;

let TRAY_CAPACITY = 6;
let BLENDER_COUNT = 1;
let MAX_ORDERS = 2;
let CUSTOMER_PATIENCE_MS = 30000;
let LEVEL_GOAL = 5;

let reshuffling = false;
let reshuffleTimeRemaining = 0;

let RESHUFFLE_TIME = 3000;

let activeFruits = [];
let activeRecipes = [];

let board = [];
let tray = [];

let gamePaused = false;

let levelIntroActive = false;

let boardAnimating = false;

let orders = [];
let selectedOrderId = null;
let nextOrderId = 1;

let isDragging = false;
let dragFruit = null;
let selectedTiles = [];

let blenders = [];
let blenderSounds = [];

let smoothiesServed = 0;
let customersLost = 0;
let fruitWasted = 0;

let score = 0;
let levelComplete = false;

let frenzy = 0;
let frenzyActive = false;
let frenzyTimeRemaining = 0;

let CUSTOMER_ARRIVAL_DELAY = 5000;
let customerArrivalTimer = 0;

let soundEnabled = true;

const soundToggleButton =
  document.getElementById("sound-toggle");

soundToggleButton.addEventListener(
  "click",
  () => {
    soundEnabled = !soundEnabled;

    soundToggleButton.textContent =
      soundEnabled
        ? "🔊 Sound On"
        : "🔇 Sound Off";

    if (!soundEnabled) {
      stopAllBlenderSounds();
    }
    else if (!gamePaused) {
      resumeActiveBlenderSounds();
    }
  }
);

function playSound(soundName) {
  if (!soundEnabled) {
    return;
  }

  const sound =
    SOUNDS[soundName];

  if (!sound) {
    return;
  }

  /*
   * Short sound effects use clones so repeated
   * cues can overlap. Continuous blender audio
   * is handled separately per blender.
   */
  const soundInstance =
    sound.cloneNode();

  soundInstance.volume =
    sound.volume;

  soundInstance.play().catch(() => {});
}

function stopSound(soundName) {
  const sound = SOUNDS[soundName];

  if (!sound) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
}

function createBlenderSounds() {
  stopAllBlenderSounds();

  blenderSounds = Array.from(
    { length: BLENDER_COUNT },
    () => new Audio(SOUNDS.blenderRunning.src)
  );
}

function playBlenderSound(blenderId) {
  if (!soundEnabled) {
    return;
  }

  const sound = blenderSounds[blenderId];

  if (!sound) {
    return;
  }

  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function stopBlenderSound(blenderId) {
  const sound = blenderSounds[blenderId];

  if (!sound) {
    return;
  }

  sound.pause();
  sound.currentTime = 0;
}

function stopAllBlenderSounds() {
  for (const sound of blenderSounds) {
    sound.pause();
    sound.currentTime = 0;
  }
}

function resumeActiveBlenderSounds() {
  for (const blender of blenders) {
    if (blender.state === "blending") {
      playBlenderSound(blender.id);
    }
  }
}

function createBlenders() {
  blenders = Array.from(
    { length: BLENDER_COUNT },
    (_, id) => ({
      id,
      state: "empty",
      ingredients: [],
      orderId: null,
      timeRemaining: 0,
      totalTime: 0
    })
  );

  createBlenderSounds();
}

let lastUpdateTime = performance.now();

const boardElement =
  document.getElementById("board");

const trayElement =
  document.getElementById("tray");

const trayCountElement =
  document.getElementById("tray-count");

const messageElement =
  document.getElementById("message");

const ordersElement =
  document.getElementById("orders");

const blenderStatusElement =
  document.getElementById("blender-status");

const blenderContentsElement =
  document.getElementById("blender-contents");

const introStarGoals =
  document.getElementById(
    "intro-star-goals"
  );

const blendProgressBarElement =
  document.getElementById(
    "blend-progress-bar"
  );

const loadButton =
  document.getElementById("load-button");

const serveButton =
  document.getElementById("serve-button");

const servedCountElement =
  document.getElementById("served-count");

const scoreDisplayElement =
  document.getElementById("score-display");

const resultsScreenElement =
  document.getElementById("results-screen");

const resultsServedElement =
  document.getElementById("results-served");

const resultsLostElement =
  document.getElementById("results-lost");

const resultsWastedElement =
  document.getElementById("results-wasted");

const resultsScoreElement =
  document.getElementById("results-score");

const resultsStarsElement =
  document.getElementById(
    "results-stars"
  );

const resultsClearStatusElement =
  document.getElementById(
    "results-clear-status"
  );

const restartButton =
  document.getElementById("restart-button");

const frenzyBarElement =
  document.getElementById("frenzy-bar");

const frenzyTextElement =
  document.getElementById("frenzy-text");

const frenzyStatusElement =
  document.getElementById("frenzy-status");

const nextLevelButton =
  document.getElementById("next-level-button");

const levelNumberElement =
  document.getElementById("level-number");

const levelNameElement =
  document.getElementById("level-name");

const levelSelectElement =
  document.getElementById(
    "level-select"
  );

const pauseButton =
  document.getElementById("pause-button");

const pauseScreen =
  document.getElementById("pause-screen");

const levelIntroScreen =
  document.getElementById(
    "level-intro-screen"
  );

const introLevelNumber =
  document.getElementById(
    "intro-level-number"
  );

const introLevelName =
  document.getElementById(
    "intro-level-name"
  );

const introGoal =
  document.getElementById(
    "intro-goal"
  );

const introFruits =
  document.getElementById(
    "intro-fruits"
  );

const introDetails =
  document.getElementById(
    "intro-details"
  );

const introHighScore =
  document.getElementById(
    "intro-high-score"
  );

const startLevelButton =
  document.getElementById(
    "start-level-button"
  );

const resumeButton =
  document.getElementById("resume-button");

const restartLevelButton =
  document.getElementById("restart-level-button");

const reshuffleButton =
  document.getElementById(
    "reshuffle-button"
  );


  function randomFruit() {
    const index =
      Math.floor(
        Math.random() *
        activeFruits.length
      );
  
    return activeFruits[index].id;
  }


  function getFruitIcon(fruitId) {
    const fruit =
      FRUIT_LIBRARY[fruitId];
  
    return fruit
      ? fruit.icon
      : "";
  }


function createBoard() {
  lastUpdateTime = performance.now();

  board = [];

  for (let row = 0; row < ROWS; row++) {
    const newRow = [];

    for (let col = 0; col < COLS; col++) {
      newRow.push(randomFruit());
    }

    board.push(newRow);
  }

  if (orders.length === 0) {
    addNewOrder(false);
  }
  
  selectedOrderId =
    orders[0].id;
  
  customerArrivalTimer =
    CUSTOMER_ARRIVAL_DELAY;

  selectedOrderId = orders[0].id;

  renderAll();

  if (!hasValidMove()) {
    shuffleUntilPlayable();
    renderBoard();
  }

  showLevelIntro();
}

function chooseCustomerType() {
  const typeWeights =
    currentLevel.customerTypes || {
      normal: 1
    };

  const entries =
    Object.entries(typeWeights);

  const totalWeight =
    entries.reduce(
      (sum, [, weight]) =>
        sum + weight,
      0
    );

  let roll =
    Math.random() *
    totalWeight;

  for (
    const [typeId, weight]
    of entries
  ) {
    roll -= weight;

    if (roll <= 0) {
      return CUSTOMER_TYPES[typeId];
    }
  }

  return CUSTOMER_TYPES.normal;
}

function updateCustomerArrivals(
  deltaTime
) {
  /*
   * Safety rule:
   * never allow the queue to be empty.
   */
  if (orders.length === 0) {
    addNewOrder(true);

    selectedOrderId =
      orders[0].id;

    customerArrivalTimer =
      CUSTOMER_ARRIVAL_DELAY;

    return;
  }

  /*
   * Don't count down if we've
   * already reached the level max.
   */
  if (
    orders.length >= MAX_ORDERS
  ) {
    customerArrivalTimer =
      CUSTOMER_ARRIVAL_DELAY;

    return;
  }

  customerArrivalTimer -=
    deltaTime;

  if (
    customerArrivalTimer <= 0
  ) {
    addNewOrder(true);

    customerArrivalTimer =
      CUSTOMER_ARRIVAL_DELAY;
  }
}

function createRandomOrder() {
  const activeNames =
    orders
      .filter(order => order.status === "waiting")
      .map(order => order.recipe.name);

  let possibleRecipes =
    activeRecipes.filter(
      recipe =>
        !activeNames.includes(recipe.name)
    );

  if (possibleRecipes.length === 0) {
    possibleRecipes = activeRecipes;
  }

  const index =
    Math.floor(
      Math.random() *
      possibleRecipes.length
    );

  const customerType =
    chooseCustomerType();
  
  const maxPatience =
    CUSTOMER_PATIENCE_MS *
    customerType.patienceMultiplier;

    return {
      id: nextOrderId++,
    
      recipe:
        possibleRecipes[index],
    
      customerType:
        customerType.id,
    
      status:
        "waiting",
    
      patience:
        maxPatience,
    
      maxPatience:
        maxPatience,

      lowPatienceWarningPlayed:
        false
    };
}

function addNewOrder(
  playArrivalSound = true
) {
  orders.push(
    createRandomOrder()
  );

  if (playArrivalSound) {
    playSound(
      "customerArrive"
    );
  }
}


function getSelectedOrder() {
  return orders.find(
    order =>
      order.id === selectedOrderId
  );
}


function getOrderForBlender(blender) {
  if (!blender) {
    return null;
  }

  return orders.find(
    order => order.id === blender.orderId
  ) || null;
}

function getEmptyBlender() {
  return blenders.find(
    blender => blender.state === "empty"
  ) || null;
}

function getBlenderForOrder(orderId) {
  return blenders.find(
    blender => blender.orderId === orderId
  ) || null;
}


function renderAll() {
  renderLevelInfo();
  renderBoard();
  renderTray();
  renderOrders();
  renderBlender();
  updateScoreDisplay();
  renderFrenzy();
}


function renderBoard() {
  boardElement.innerHTML = "";

  boardElement.style.gridTemplateColumns =
    `repeat(${COLS}, 64px)`;

  boardElement.style.gridTemplateRows =
    `repeat(${ROWS}, 64px)`;

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {

      const tile =
        document.createElement("button");

      tile.classList.add("tile");

      tile.textContent =
        getFruitIcon(board[row][col]);

      tile.dataset.row = row;
      tile.dataset.col = col;

      tile.addEventListener(
        "pointerdown",
        event => {
          startSelection(
            event,
            row,
            col
          );
        }
      );

      tile.addEventListener(
        "pointerenter",
        event => {
          continueSelection(
            event,
            row,
            col
          );
        }
      );

      boardElement.appendChild(tile);
    }
  }
}

function renderBoardWithFall(
  fallDistances
) {
  boardElement.innerHTML = "";

  boardElement.style.gridTemplateColumns =
    `repeat(${COLS}, 64px)`;

  boardElement.style.gridTemplateRows =
    `repeat(${ROWS}, 64px)`;

  for (
    let row = 0;
    row < ROWS;
    row++
  ) {
    for (
      let col = 0;
      col < COLS;
      col++
    ) {
      const tile =
        document.createElement(
          "button"
        );

      tile.classList.add(
        "tile"
      );

      tile.textContent =
        getFruitIcon(
          board[row][col]
        );

      tile.dataset.row = row;
      tile.dataset.col = col;

      const distance =
        fallDistances[row][col];

      if (distance > 0) {
        tile.classList.add(
          "falling"
        );

        tile.style.setProperty(
          "--fall-distance",
          distance
        );
      }

      tile.addEventListener(
        "pointerdown",
        event => {
          startSelection(
            event,
            row,
            col
          );
        }
      );

      tile.addEventListener(
        "pointerenter",
        event => {
          continueSelection(
            event,
            row,
            col
          );
        }
      );

      boardElement.appendChild(
        tile
      );
    }
  }
}

function renderTray() {
    trayElement.innerHTML = "";
  
    const trayColumns =
      TRAY_CAPACITY <= 8
      ? TRAY_CAPACITY
      : Math.ceil(
        TRAY_CAPACITY / 2
      );

    trayElement.style.gridTemplateColumns =
      `repeat(${trayColumns}, 58px)`;

    for (
      let i = 0;
      i < TRAY_CAPACITY;
      i++
    ) {
      const slot =
        document.createElement("div");
  
      slot.classList.add("tray-slot");
  
      if (tray[i]) {
        slot.textContent =
          getFruitIcon(tray[i]);
  
        slot.classList.add("filled");
  
        slot.title = "Click to discard";
  
        slot.addEventListener(
          "pointerdown",
          event => {
            event.preventDefault();
            discardFruit(i);
          }
        );
      }
  
      trayElement.appendChild(slot);
    }
  
    trayCountElement.textContent =
      `${tray.length} / ${TRAY_CAPACITY}`;
  }


function renderOrders() {
  ordersElement.innerHTML = "";

  for (const order of orders) {
    const card =
      document.createElement("div");

    card.classList.add(
      "order-card"
    );

    if (
      order.customerType ===
      "impatient"
    ) {
      card.classList.add(
        "impatient"
      );
    }
    
    else if (
      order.customerType ===
      "relaxed"
    ) {
      card.classList.add(
        "relaxed"
      );
    }
    
    if (
      order.customerType !==
      "normal"
    ) {
      const customerLabel =
        document.createElement("p");
    
      customerLabel.classList.add(
        "customer-type"
      );
    
      if (
        order.customerType ===
        "impatient"
      ) {
        customerLabel.textContent =
          "⚡ In a hurry!";
      }
    
      else if (
        order.customerType ===
        "relaxed"
      ) {
        customerLabel.textContent =
          "😌 Taking it easy";
      }
    
      card.appendChild(
        customerLabel
      );
    }

    if (
      order.id ===
      selectedOrderId
    ) {
      card.classList.add(
        "selected"
      );
    }

    if (
      order.status === "waiting" &&
      hasIngredientsForRecipe(
        order.recipe
      )
    ) {
      card.classList.add(
        "ready"
      );
    }

    const name =
      document.createElement("h3");

    name.textContent =
      order.recipe.name;

    const recipeDisplay =
      document.createElement("div");

    recipeDisplay.classList.add(
      "recipe"
    );

    for (
      const [fruit, amount]
      of Object.entries(
        order.recipe.ingredients
      )
    ) {
      const ingredient =
        document.createElement("span");

      ingredient.textContent =
        `${getFruitIcon(fruit)} ×${amount}`;

      recipeDisplay.appendChild(
        ingredient
      );
    }

    const status =
      document.createElement("p");

    status.classList.add(
      "order-status"
    );

    if (
      order.status ===
      "preparing"
    ) {
      status.textContent =
        "Being prepared...";
    }

    else if (
      order.status ===
      "ready"
    ) {
      status.textContent =
        "Ready to serve!";
    }

    else if (
      hasIngredientsForRecipe(
        order.recipe
      )
    ) {
      status.textContent =
        "Ready to load!";
    }

    else {
      status.textContent =
        "Waiting for ingredients...";
    }

    const patienceContainer =
      document.createElement("div");

    patienceContainer.classList.add(
      "patience-container"
    );

    const patienceBar =
      document.createElement("div");

    patienceBar.classList.add(
      "patience-bar"
    );

    const patiencePercent =
      Math.max(
        0,
        order.patience /
        order.maxPatience *
        100
      );

    patienceBar.style.width =
      `${patiencePercent}%`;

      if (patiencePercent > 60) {
        patienceBar.style.background =
          "#78c850";
      }
      
      else if (patiencePercent > 35) {
        patienceBar.style.background =
          "#e5c94d";
      }
      
      else if (patiencePercent > 15) {
        patienceBar.style.background =
          "#e79038";
      }
      
      else {
        patienceBar.style.background =
          "#d64545";
      }

    patienceContainer.appendChild(
      patienceBar
    );

    card.appendChild(name);
    card.appendChild(recipeDisplay);
    card.appendChild(status);
    card.appendChild(
      patienceContainer
    );

    if (
        order.status === "waiting" ||
        order.status === "ready"
      ) {
        card.addEventListener(
          "pointerdown",
          event => {
            event.preventDefault();
            selectOrder(order.id);
          }
        );
      }

    ordersElement.appendChild(card);
  }
}


function selectOrder(orderId) {
  if (gamePaused || levelIntroActive) {
    return;
  }
  const order =
    orders.find(
      order =>
        order.id === orderId
    );

  if (
    !order ||
    order.status === "preparing"
  ) {
    return;
  }

  selectedOrderId =
    orderId;

  messageElement.textContent =
    `${order.recipe.name} selected.`;

  renderOrders();
  renderBlender();
}


function renderBlender() {
  const selectedOrder = getSelectedOrder();
  const emptyBlender = getEmptyBlender();
  const selectedBlender = selectedOrder
    ? getBlenderForOrder(selectedOrder.id)
    : null;

  blenderContentsElement.className = "";
  blenderContentsElement.innerHTML = "";

  blenderStatusElement.textContent =
    selectedOrder
      ? `Selected: ${selectedOrder.recipe.name}`
      : `${BLENDER_COUNT} blender${BLENDER_COUNT === 1 ? "" : "s"}`;

  for (const blender of blenders) {
    const order =
      getOrderForBlender(blender);

    const blenderUnit =
      document.createElement("div");

    blenderUnit.classList.add(
      "blender-unit"
    );

    if (
      blender.state === "blending"
    ) {
      blenderUnit.classList.add(
        "blending"
      );
    }

    if (
      blender.state === "ready"
    ) {
      blenderUnit.classList.add(
        "ready"
      );
    }

    const title =
      document.createElement("div");

    title.classList.add(
      "blender-unit-title"
    );

    title.textContent =
      `Blender ${blender.id + 1}`;

    const machine =
      document.createElement("div");

    machine.classList.add(
      "blender-machine"
    );

    const glass =
      document.createElement("div");

    glass.classList.add(
      "blender-glass"
    );

    const glassContents =
      document.createElement("div");

    glassContents.classList.add(
      "blender-glass-contents"
    );

    if (
      blender.state === "empty"
    ) {
      const emptyText =
        document.createElement("span");

      emptyText.classList.add(
        "blender-empty-text"
      );

      emptyText.textContent =
        "Empty";

      glassContents.appendChild(
        emptyText
      );
    }

    else if (
      blender.state === "blending" &&
      order
    ) {
      for (
        let i = 0;
        i < blender.ingredients.length;
        i++
      ) {
        const fruit =
          document.createElement("span");

        fruit.classList.add(
          "blender-fruit"
        );

        fruit.textContent =
          getFruitIcon(
            blender.ingredients[i]
          );

        fruit.style.setProperty(
          "--fruit-index",
          i
        );

        glassContents.appendChild(
          fruit
        );
      }
    }

    else if (
      blender.state === "ready" &&
      order
    ) {
      const smoothie =
        document.createElement("span");

      smoothie.classList.add(
        "blender-smoothie"
      );

      smoothie.textContent =
        "🥤";

      glassContents.appendChild(
        smoothie
      );
    }

    glass.appendChild(
      glassContents
    );

    const base =
      document.createElement("div");

    base.classList.add(
      "blender-base"
    );

    base.textContent =
      "SMOOTHIE FRENZY";

    machine.appendChild(glass);
    machine.appendChild(base);

    const status =
      document.createElement("div");

    status.classList.add(
      "blender-unit-status"
    );

    const progressContainer =
      document.createElement("div");

    progressContainer.classList.add(
      "blend-progress-container"
    );

    const progressBar =
      document.createElement("div");

    progressBar.classList.add(
      "blend-progress-bar"
    );

    if (
      blender.state === "empty"
    ) {
      status.textContent =
        "Ready";

      progressBar.style.width =
        "0%";
    }

    else if (
      blender.state === "blending" &&
      order
    ) {
      status.textContent =
        `Blending ${order.recipe.name}...`;

      const progress =
        1 -
        blender.timeRemaining /
        blender.totalTime;

      const progressPercent =
        Math.max(
          0,
          Math.min(
            100,
            progress * 100
          )
        );

      progressBar.style.width =
        `${progressPercent}%`;
    }

    else if (
      blender.state === "ready" &&
      order
    ) {
      status.textContent =
        `${order.recipe.name} ready!`;

      progressBar.style.width =
        "100%";
    }

    progressContainer.appendChild(
      progressBar
    );

    blenderUnit.appendChild(title);
    blenderUnit.appendChild(machine);
    blenderUnit.appendChild(status);
    blenderUnit.appendChild(
      progressContainer
    );

    blenderContentsElement.appendChild(
      blenderUnit
    );
  }

  if (blendProgressBarElement) {
    if (
      selectedBlender &&
      selectedBlender.totalTime > 0
    ) {
      const selectedProgress =
        selectedBlender.state === "ready"
          ? 100
          : Math.max(
              0,
              Math.min(
                100,
                (
                  1 -
                  selectedBlender.timeRemaining /
                  selectedBlender.totalTime
                ) * 100
              )
            );

      blendProgressBarElement.style.width =
        `${selectedProgress}%`;
    }

    else {
      blendProgressBarElement.style.width =
        "0%";
    }
  }

  loadButton.disabled =
    gamePaused ||
    levelIntroActive ||
    !emptyBlender ||
    !selectedOrder ||
    selectedOrder.status !== "waiting" ||
    !hasIngredientsForRecipe(
      selectedOrder.recipe
    );

  serveButton.disabled =
    gamePaused ||
    levelIntroActive ||
    !selectedOrder ||
    selectedOrder.status !== "ready" ||
    !selectedBlender ||
    selectedBlender.state !== "ready";

  servedCountElement.textContent =
    `Smoothies Served: ${smoothiesServed} | Customers Lost: ${customersLost} | Fruit Wasted: ${fruitWasted}`;
}

function updateBlenderProgressUI() {
  const blenderUnits =
    blenderContentsElement.querySelectorAll(
      ".blender-unit"
    );

  blenderUnits.forEach(
    (unit, index) => {
      const blender =
        blenders[index];

      if (!blender) {
        return;
      }

      const progressBar =
        unit.querySelector(
          ".blend-progress-bar"
        );

      if (!progressBar) {
        return;
      }

      if (
        blender.state === "empty"
      ) {
        progressBar.style.width =
          "0%";

        return;
      }

      if (
        blender.state === "ready"
      ) {
        progressBar.style.width =
          "100%";

        return;
      }

      if (
        blender.state === "blending" &&
        blender.totalTime > 0
      ) {
        const progress =
          1 -
          blender.timeRemaining /
          blender.totalTime;

        const progressPercent =
          Math.max(
            0,
            Math.min(
              100,
              progress * 100
            )
          );

        progressBar.style.width =
          `${progressPercent}%`;
      }
    }
  );
}


function getRemainingTraySpace() {
  return TRAY_CAPACITY - tray.length;
}


function canHarvest(amount) {
  return amount <= getRemainingTraySpace();
}


function countFruitInTray(fruitId) {
  return tray.filter(
    fruit => fruit === fruitId
  ).length;
}

function discardFruit(index) {
    if (gamePaused || levelIntroActive) {
      return;
    }
    if (
      index < 0 ||
      index >= tray.length
    ) {
      return;
    }
  
    const discardedFruit =
      tray[index];
  
    tray.splice(index, 1);

    playSound("discard");
  
    fruitWasted++;

    removeFrenzy(
      FRENZY_WASTE_PENALTY
    );

    score += SCORE_WASTED_FRUIT;

    showScorePopup(
        SCORE_WASTED_FRUIT
      );
      
      updateScoreDisplay();
  
    messageElement.textContent =
      `Discarded 1 ${discardedFruit}.`;
  
    renderAll();
  }


function hasIngredientsForRecipe(recipe) {
  for (
    const [fruit, amount]
    of Object.entries(
      recipe.ingredients
    )
  ) {
    if (
      countFruitInTray(fruit)
      < amount
    ) {
      return false;
    }
  }

  return true;
}


function startSelection(
  event,
  row,
  col
) {
  if (
    boardAnimating ||
    reshuffling ||
    gamePaused ||
    levelIntroActive
  ) {
    return;
  }

  event.preventDefault();

  isDragging = true;
  dragFruit = board[row][col];

  selectedTiles = [
    { row, col }
  ];

  updateSelectionDisplay();
}


function continueSelection(
  event,
  row,
  col
) {
  if (!isDragging) {
    return;
  }

  if (
    board[row][col]
    !== dragFruit
  ) {
    return;
  }

  const currentPosition =
    { row, col };

  if (
    selectedTiles.length >= 2
  ) {
    const secondToLast =
      selectedTiles[
        selectedTiles.length - 2
      ];

    if (
      secondToLast.row === row &&
      secondToLast.col === col
    ) {
      selectedTiles.pop();

      updateSelectionDisplay();

      return;
    }
  }

  const alreadySelected =
    selectedTiles.some(
      position =>
        position.row === row &&
        position.col === col
    );

  if (alreadySelected) {
    return;
  }

  const lastTile =
    selectedTiles[
      selectedTiles.length - 1
    ];

  if (
    !areAdjacent(
      lastTile,
      currentPosition
    )
  ) {
    return;
  }

  selectedTiles.push(
    currentPosition
  );

  updateSelectionDisplay();
}


document.addEventListener(
  "pointerup",
  finishSelection
);


function finishSelection() {
  if (!isDragging) {
    return;
  }

  isDragging = false;

  if (
    selectedTiles.length >= 2
  ) {
    const amount =
      selectedTiles.length;

    const fruitName =
      dragFruit;

    if (!canHarvest(amount)) {
      playSound("error");

      messageElement.textContent =
        `Not enough tray space! You only have ${getRemainingTraySpace()} slot(s) left.`;

      resetSelection();

      return;
    }

    harvestGroup(
      selectedTiles,
      fruitName
    );

    messageElement.textContent =
      `Harvested ${amount} ${fruitName}!`;

    resetSelection();

    return;
  }

  if (
    selectedTiles.length === 1
  ) {
    const { row, col } =
      selectedTiles[0];

    const group =
      findConnectedGroup(
        row,
        col
      );

    if (group.length < 2) {
      playSound("error");

      messageElement.textContent =
        "You need at least 2 connected matching fruits!";

      resetSelection();

      return;
    }

    if (!canHarvest(group.length)) {
      playSound("error");

      messageElement.textContent =
        `That group is too large! You only have ${getRemainingTraySpace()} slot(s) left. Try selecting fewer fruit.`;

      resetSelection();

      return;
    }

    const fruitName =
      board[row][col];

    harvestGroup(
      group,
      fruitName
    );

    messageElement.textContent =
      `Harvested ${group.length} ${fruitName}!`;
  }

  resetSelection();
}


function areAdjacent(a, b) {
  const rowDifference =
    Math.abs(a.row - b.row);

  const colDifference =
    Math.abs(a.col - b.col);

  return (
    rowDifference +
    colDifference
    === 1
  );
}

function hasValidMove() {
  for (
    let row = 0;
    row < ROWS;
    row++
  ) {
    for (
      let col = 0;
      col < COLS;
      col++
    ) {
      const fruit =
        board[row][col];

      /*
       * Check the fruit to the right.
       */
      if (
        col + 1 < COLS &&
        board[row][col + 1]
          === fruit
      ) {
        return true;
      }

      /*
       * Check the fruit below.
       */
      if (
        row + 1 < ROWS &&
        board[row + 1][col]
          === fruit
      ) {
        return true;
      }
    }
  }

  return false;
}

function shuffleBoardFruit() {
  const fruits = [];

  /*
   * Flatten the board.
   */
  for (
    let row = 0;
    row < ROWS;
    row++
  ) {
    for (
      let col = 0;
      col < COLS;
      col++
    ) {
      fruits.push(
        board[row][col]
      );
    }
  }

  /*
   * Fisher-Yates shuffle.
   */
  for (
    let i = fruits.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
        (i + 1)
      );

    [
      fruits[i],
      fruits[j]
    ] = [
      fruits[j],
      fruits[i]
    ];
  }

  /*
   * Put the shuffled fruit back.
   */
  let index = 0;

  for (
    let row = 0;
    row < ROWS;
    row++
  ) {
    for (
      let col = 0;
      col < COLS;
      col++
    ) {
      board[row][col] =
        fruits[index];

      index++;
    }
  }
}

function shuffleUntilPlayable() {
  const MAX_ATTEMPTS = 100;

  for (
    let attempt = 0;
    attempt < MAX_ATTEMPTS;
    attempt++
  ) {
    shuffleBoardFruit();

    if (hasValidMove()) {
      return true;
    }
  }

  /*
   * Extremely unlikely fallback.
   *
   * If rearranging the existing board
   * can't produce a match, generate
   * a fresh board instead.
   */
  console.warn(
    "Could not create a playable reshuffle. Generating new fruit."
  );

  for (
    let row = 0;
    row < ROWS;
    row++
  ) {
    for (
      let col = 0;
      col < COLS;
      col++
    ) {
      board[row][col] =
        randomFruit();
    }
  }

  return hasValidMove();
}

function startManualReshuffle() {
  if (gamePaused || levelIntroActive) {
    return;
  }
  if (
    reshuffling ||
    boardAnimating ||
    levelComplete
  ) {
    return;
  }

  playSound("reshuffle");

  reshuffling = true;

  reshuffleTimeRemaining =
    RESHUFFLE_TIME;

  boardElement.classList.add(
    "reshuffling"
  );

  reshuffleButton.disabled =
    true;

  messageElement.textContent =
    "Reshuffling...";

  resetSelection();
}

function finishManualReshuffle() {
  shuffleUntilPlayable();

  reshuffling = false;

  reshuffleTimeRemaining = 0;

  reshuffleButton.textContent =
  "Reshuffle";

  boardElement.classList.remove(
    "reshuffling"
  );

  reshuffleButton.disabled =
    false;

  messageElement.textContent =
    "Board reshuffled!";

  renderBoard();
}



function updateSelectionDisplay() {
  const tiles =
    boardElement.querySelectorAll(
      ".tile"
    );

  tiles.forEach(tile => {
    const row =
      Number(tile.dataset.row);

    const col =
      Number(tile.dataset.col);

    const isSelected =
      selectedTiles.some(
        position =>
          position.row === row &&
          position.col === col
      );

    tile.classList.toggle(
      "selected",
      isSelected
    );
  });
}


function resetSelection() {
  isDragging = false;
  dragFruit = null;
  selectedTiles = [];

  updateSelectionDisplay();
}


function findConnectedGroup(
  startRow,
  startCol
) {
  const targetFruit =
    board[startRow][startCol];

  const visited =
    new Set();

  const group = [];

  const stack = [
    {
      row: startRow,
      col: startCol
    }
  ];

  while (
    stack.length > 0
  ) {
    const current =
      stack.pop();

    const key =
      `${current.row},${current.col}`;

    if (
      current.row < 0 ||
      current.row >= ROWS ||
      current.col < 0 ||
      current.col >= COLS
    ) {
      continue;
    }

    if (visited.has(key)) {
      continue;
    }

    visited.add(key);

    if (
      board[current.row][current.col]
      !== targetFruit
    ) {
      continue;
    }

    group.push(current);

    stack.push(
      {
        row: current.row - 1,
        col: current.col
      },
      {
        row: current.row + 1,
        col: current.col
      },
      {
        row: current.row,
        col: current.col - 1
      },
      {
        row: current.row,
        col: current.col + 1
      }
    );
  }

  return group;
}


function harvestGroup(
  group,
  fruitName
) {
  
  playSound("harvest");

  boardAnimating = true;

  /*
   * First add the harvested fruit
   * to the player's tray.
   */
  for (
    let i = 0;
    i < group.length;
    i++
  ) {
    tray.push(fruitName);
  }

  addFrenzy(
    group.length *
    FRENZY_PER_FRUIT
  );

  renderTray();
  renderOrders();
  renderBlender();

  /*
   * Animate the harvested tiles
   * disappearing first.
   */
  animateHarvest(group);

  setTimeout(() => {

    /*
     * Remove fruit from the board
     * after the pop animation.
     */
    for (
      const position
      of group
    ) {
      board[position.row]
           [position.col] = null;
    }

    /*
     * Collapse + refill now return
     * information about how far
     * each new tile should fall.
     */
    const fallDistances =
      collapseAndRefillBoard();

    renderBoardWithFall(
      fallDistances
    );

    /*
     * Re-enable player input once
     * the falling animation ends.
     */
    setTimeout(() => {
      boardAnimating = false;
    
      checkForDeadBoard();
    }, 300);

  }, 180);
}

function animateHarvest(group) {
  const tiles =
    boardElement.querySelectorAll(
      ".tile"
    );

  for (
    const position
    of group
  ) {
    const tile =
      Array.from(tiles).find(
        element =>
          Number(
            element.dataset.row
          ) === position.row &&
          Number(
            element.dataset.col
          ) === position.col
      );

    if (tile) {
      tile.classList.add(
        "harvesting"
      );
    }
  }
}

function checkForDeadBoard() {
  if (hasValidMove()) {
    return;
  }

  playSound("reshuffle");

  messageElement.textContent =
    "No moves! Automatic reshuffle!";

  boardAnimating = true;

  boardElement.classList.add(
    "reshuffling"
  );

  /*
   * Short visual delay so the player
   * can see what happened.
   */
  setTimeout(() => {
    shuffleUntilPlayable();

    boardElement.classList.remove(
      "reshuffling"
    );

    renderBoard();

    boardAnimating = false;

  }, 700);
}

function collapseAndRefillBoard() {
  /*
   * Each entry stores how many rows
   * the fruit should visually fall.
   */
  const fallDistances =
    Array.from(
      { length: ROWS },
      () =>
        Array(COLS).fill(0)
    );

  for (
    let col = 0;
    col < COLS;
    col++
  ) {
    const remainingFruits = [];

    /*
     * Record every surviving fruit
     * and its original row.
     */
    for (
      let row = ROWS - 1;
      row >= 0;
      row--
    ) {
      if (
        board[row][col]
        !== null
      ) {
        remainingFruits.push({
          fruit:
            board[row][col],

          originalRow:
            row
        });
      }
    }

    /*
     * Clear the column.
     */
    for (
      let row = 0;
      row < ROWS;
      row++
    ) {
      board[row][col] = null;
    }

    /*
     * Drop existing fruit downward.
     */
    let targetRow =
      ROWS - 1;

    for (
      const item
      of remainingFruits
    ) {
      board[targetRow][col] =
        item.fruit;

      fallDistances[targetRow][col] =
        targetRow -
        item.originalRow;

      targetRow--;
    }

    /*
     * Any empty positions above
     * receive brand-new fruit.
     *
     * Pretend those fruits started
     * above the board.
     */
    let refillOffset = 1;

    while (
      targetRow >= 0
    ) {
      board[targetRow][col] =
        randomFruit();

      fallDistances[targetRow][col] =
        targetRow +
        refillOffset;

      refillOffset++;

      targetRow--;
    }
  }

  return fallDistances;
}


function removeIngredientsFromTray(recipe) {
  const removedIngredients = [];

  for (
    const [fruit, amount]
    of Object.entries(recipe.ingredients)
  ) {
    for (let i = 0; i < amount; i++) {
      const index = tray.indexOf(fruit);

      if (index !== -1) {
        const removedFruit = tray.splice(index, 1)[0];
        removedIngredients.push(removedFruit);
      }
    }
  }

  return removedIngredients;
}

function loadBlender() {
  if (gamePaused || levelIntroActive) {
    return;
  }

  const order = getSelectedOrder();
  const blender = getEmptyBlender();

  if (!blender) {
    playSound("error");
    messageElement.textContent =
      "All blenders are busy!";
    return;
  }

  if (
    !order ||
    order.status !== "waiting"
  ) {
    return;
  }

  if (!hasIngredientsForRecipe(order.recipe)) {
    playSound("error");
    messageElement.textContent =
      "You don't have enough ingredients for that order yet!";
    return;
  }

  blender.orderId = order.id;
  blender.ingredients = removeIngredientsFromTray(order.recipe);
  order.status = "preparing";

  const nextWaitingOrder = orders.find(
    otherOrder => otherOrder.status === "waiting"
  );

  selectedOrderId = nextWaitingOrder
    ? nextWaitingOrder.id
    : null;

  messageElement.textContent =
    `${order.recipe.name} is being prepared in Blender ${blender.id + 1}!`;

  startBlending(blender);
  renderAll();
}

function startBlending(blender) {
  const order = getOrderForBlender(blender);

  if (!order) {
    return;
  }

  blender.state = "blending";
  blender.totalTime = order.recipe.blendTime;
  blender.timeRemaining = blender.totalTime;

  playBlenderSound(blender.id);
}

function updateBlenders(deltaTime) {
  for (const blender of blenders) {
    if (blender.state !== "blending") {
      continue;
    }

    const speedMultiplier = frenzyActive ? 2 : 1;

    blender.timeRemaining -=
      deltaTime * speedMultiplier;

    if (blender.timeRemaining <= 0) {
      blender.timeRemaining = 0;
      finishBlending(blender);
    }
  }
}

function finishBlending(blender) {
  const order = getOrderForBlender(blender);

  if (!order) {
    return;
  }

  stopBlenderSound(blender.id);
  playSound("blenderFinish");

  blender.state = "ready";
  order.status = "ready";

  if (!selectedOrderId) {
    selectedOrderId = order.id;
  }

  messageElement.textContent =
    `${order.recipe.name} is ready to serve from Blender ${blender.id + 1}!`;

  renderOrders();
  renderBlender();
}

function serveSmoothie() {
  if (gamePaused || levelIntroActive) {
    return;
  }

  const order = getSelectedOrder();

  if (!order || order.status !== "ready") {
    return;
  }

  const blender = getBlenderForOrder(order.id);

  if (!blender || blender.state !== "ready") {
    return;
  }

  playSound("serve");

  const servedName = order.recipe.name;
  smoothiesServed++;

  let smoothieScore = SCORE_SMOOTHIE;

  if (frenzyActive) {
    smoothieScore = Math.round(
      SCORE_SMOOTHIE * FRENZY_SCORE_MULTIPLIER
    );
  }

  score += smoothieScore;
  showScorePopup(smoothieScore);
  updateScoreDisplay();
  addFrenzy(FRENZY_PER_SMOOTHIE);

  orders = orders.filter(
    activeOrder => activeOrder.id !== order.id
  );

  blender.state = "empty";
  blender.ingredients = [];
  blender.orderId = null;
  blender.timeRemaining = 0;
  blender.totalTime = 0;

  selectedOrderId = null;

  if (smoothiesServed >= LEVEL_GOAL) {
    messageElement.textContent =
      "Level complete!";

    renderAll();
    completeLevel();
    return;
  }

  if (orders.length === 0) {
    addNewOrder(true);
  }

  const nextSelectableOrder =
    orders.find(order => order.status === "ready") ||
    orders.find(order => order.status === "waiting");

  selectedOrderId = nextSelectableOrder
    ? nextSelectableOrder.id
    : null;

  messageElement.textContent =
    `${servedName} served!`;

  renderAll();
}


function updatePatience(deltaTime) {
  let customerLeft = false;

  for (const order of orders) {
    /*
     * Patience only decreases
     * while waiting for ingredients.
     */
    if (
      order.status !== "waiting"
    ) {
      continue;
    }

    order.patience -=
      deltaTime;

    const patiencePercent =
      order.patience /
      order.maxPatience *
      100;

    if (
      patiencePercent <= 20 &&
      !order.lowPatienceWarningPlayed
    ) {
      playSound(
        "lowPatience"
      );

      order.lowPatienceWarningPlayed =
        true;
    }

    if (
      order.patience <= 0
    ) {
      order.patience = 0;
    }
  }

  const expiredOrders =
    orders.filter(
      order =>
        order.status === "waiting" &&
        order.patience <= 0
    );

  for (
    const expiredOrder
    of expiredOrders
  ) {
    orders =
      orders.filter(
        order =>
          order.id !== expiredOrder.id
      );

    customersLost++;
    playSound("customerLeave");

    removeFrenzy(
      FRENZY_CUSTOMER_LOST_PENALTY
    );

    score += SCORE_LOST_CUSTOMER;

    showScorePopup(
        SCORE_LOST_CUSTOMER
    );

    updateScoreDisplay();

    customerLeft = true;

    if (
      selectedOrderId ===
      expiredOrder.id
    ) {
      selectedOrderId = null;
    }
  }

  if (
    orders.length === 0
  ) {
    addNewOrder(true);
  }

  if (!selectedOrderId) {
    const waitingOrder =
      orders.find(
        order =>
          order.status === "waiting"
      );

    selectedOrderId =
      waitingOrder
        ? waitingOrder.id
        : null;
  }

  if (customerLeft) {
    messageElement.textContent =
      "A customer got tired of waiting and left!";
  }
}

function updateScoreDisplay() {
    scoreDisplayElement.textContent =
      `Score: ${score}`;
  }

  function showScorePopup(amount) {
    const popup =
      document.createElement("div");
  
    popup.classList.add(
      "score-popup"
    );
  
    if (amount >= 0) {
      popup.classList.add(
        "positive"
      );
  
      popup.textContent =
        `+${amount}`;
    }
    else {
      popup.classList.add(
        "negative"
      );
  
      popup.textContent =
        `${amount}`;
    }
  
    /*
     * Position the popup near
     * the score display.
     */
    const scoreRect =
      scoreDisplayElement
        .getBoundingClientRect();
  
    popup.style.left =
      `${scoreRect.left +
         scoreRect.width / 2}px`;
  
    popup.style.top =
      `${scoreRect.top}px`;
  
    document.body.appendChild(
      popup
    );
  
    setTimeout(() => {
      popup.remove();
    }, 900);
  }

  function addFrenzy(amount) {
    if (frenzyActive) {
      return;
    }
  
    frenzy += amount;
  
    if (frenzy >= FRENZY_MAX) {
      frenzy = FRENZY_MAX;
      activateFrenzy();
    }
  
    renderFrenzy();
  }
  
  
  function removeFrenzy(amount) {
    if (frenzyActive) {
      return;
    }
  
    frenzy -= amount;
  
    if (frenzy < 0) {
      frenzy = 0;
    }
  
    renderFrenzy();
  }
  
  
  function activateFrenzy() {
    playSound("frenzyStart");

    frenzyActive = true;
  
    frenzyTimeRemaining =
      FRENZY_DURATION_MS;
  
    document.body.classList.add(
      "frenzy-active"
    );
  
    messageElement.textContent =
      "SMOOTHIE FRENZY!";
  
    renderFrenzy();
  }
  
  
  function endFrenzy() {
    playSound("frenzyEnd");

    frenzyActive = false;
    frenzy = 0;
    frenzyTimeRemaining = 0;
  
    document.body.classList.remove(
      "frenzy-active"
    );
  
    messageElement.textContent =
      "Frenzy ended!";
  
    renderFrenzy();
  }
  
  
  function renderFrenzy() {
    if (frenzyActive) {
      const seconds =
        Math.ceil(
          frenzyTimeRemaining / 1000
        );
  
      frenzyBarElement.style.width =
        "100%";
  
      frenzyTextElement.textContent =
        `${seconds}s`;
  
      frenzyStatusElement.textContent =
        "SMOOTHIE FRENZY!";
    }
    else {
      const percent =
        frenzy / FRENZY_MAX * 100;
  
      frenzyBarElement.style.width =
        `${percent}%`;
  
      frenzyTextElement.textContent =
        `${frenzy} / ${FRENZY_MAX}`;
  
      frenzyStatusElement.textContent =
        "";
    }
  }

  function pauseGame() {
    if (
      gamePaused ||
      levelIntroActive ||
      levelComplete
    ) {
      return;
    }
  
    gamePaused = true;
  
    pauseScreen.classList.remove(
      "hidden"
    );
  
    pauseButton.disabled = true;
  
    /*
     * Stop all active blender sounds.
     */
    stopAllBlenderSounds();
  }
  
  
  function resumeGame() {
    if (!gamePaused) {
      return;
    }
  
    gamePaused = false;
  
    pauseScreen.classList.add(
      "hidden"
    );
  
    pauseButton.disabled = false;
  
    /*
     * Reset this so the time spent paused
     * is not counted as gameplay time.
     */
    lastUpdateTime =
      performance.now();
  
    /*
     * Resume any blenders that were running.
     */
    resumeActiveBlenderSounds();
  
    requestAnimationFrame(
      gameLoop
    );
  }

  function getNextLevelId() {
    const currentIndex =
      LEVEL_ORDER.indexOf(currentLevelId);
  
    if (
      currentIndex === -1 ||
      currentIndex === LEVEL_ORDER.length - 1
    ) {
      return null;
    }
  
    return LEVEL_ORDER[currentIndex + 1];
  }

  function loadLevel(levelId) {
    const level =
      LEVELS[levelId];
  
    if (!level) {
      console.error(
        `Level ${levelId} does not exist.`
      );
  
      return;
    }
  
    currentLevelId =
      levelId;
  
    currentLevel =
      level;
  
    ROWS =
      level.rows;
  
    COLS =
      level.cols;
  
    TRAY_CAPACITY =
      level.trayCapacity;

    BLENDER_COUNT =
      level.blenderCount ?? 1;

    RESHUFFLE_TIME =
      level.reshuffleTime ?? 3000;
  
    MAX_ORDERS =
      level.maxOrders;
  
    CUSTOMER_PATIENCE_MS =
      level.customerPatience;

    CUSTOMER_ARRIVAL_DELAY =
      level.customerArrivalDelay;
  
    LEVEL_GOAL =
      level.smoothieGoal;
  
    activeFruits =
      level.fruit.map(
        fruitId =>
          FRUIT_LIBRARY[fruitId]
      );
  
    activeRecipes =
      level.recipes.map(
        recipeId =>
          RECIPE_LIBRARY[recipeId]
      );
  
    restartGame();

    renderLevelSelector();
  }

  function getStarRating(scoreValue) {
  const stars =
    currentLevel.stars;

  if (scoreValue >= stars.three) {
    return 3;
  }

  if (scoreValue >= stars.two) {
    return 2;
  }

  if (scoreValue >= stars.one) {
    return 1;
  }

  return 0;
}
  
  function completeLevel() {
    stopAllBlenderSounds();
    playSound("levelComplete");

    const starsEarned =
      getStarRating(score);

    levelStars[currentLevelId] =
      Math.max(
        levelStars[currentLevelId] || 0,
        starsEarned
      );

    highScores[currentLevelId] =
      Math.max(
      highScores[currentLevelId] || 0,
      score
    );

    resultsStarsElement.textContent =
      "⭐".repeat(starsEarned) +
      "☆".repeat(3 - starsEarned);

    if (starsEarned >= 1) {
      unlockNextLevel();

      resultsClearStatusElement.textContent =
        "Level Cleared!";

      nextLevelButton.style.display =
        "inline-block";
    }
    else {
      resultsClearStatusElement.textContent =
        "Not enough points to clear the level.";

      nextLevelButton.style.display =
        "none";
    }

    saveProgress();

    renderLevelSelector();

    levelComplete = true;

    if (starsEarned >= 1) {
      unlockNextLevel();
    }

    renderLevelSelector();
  
    resultsServedElement.textContent =
      `Smoothies Served: ${smoothiesServed}`;
  
    resultsLostElement.textContent =
      `Customers Lost: ${customersLost}`;
  
    resultsWastedElement.textContent =
      `Fruit Wasted: ${fruitWasted}`;
  
    resultsScoreElement.textContent =
      `Final Score: ${score}`;
  
    resultsScreenElement.classList.remove(
      "hidden"
    );
  }

  function unlockNextLevel() {
  const nextLevelId =
    getNextLevelId();

  if (
    nextLevelId &&
    !unlockedLevels.includes(
      nextLevelId
    )
  ) {
    unlockedLevels.push(
      nextLevelId
    );

    saveProgress();
  }

  renderLevelSelector();
}

function getAvailableLevels() {
  if (debugMode) {
    return LEVEL_ORDER;
  }

  return unlockedLevels;
}

  function renderLevelInfo() {
    if (!currentLevel) {
      return;
    }
  
    levelNumberElement.textContent =
      `Level ${currentLevelId}`;
  
    levelNameElement.textContent =
      currentLevel.name;
  }

function renderLevelSelector() {
  if (!levelSelectElement) {
    return;
  }

  levelSelectElement.innerHTML = "";

  const availableLevels =
    debugMode
      ? LEVEL_ORDER
      : unlockedLevels;

  for (
    const levelId
    of availableLevels
  ) {
    const level =
      LEVELS[levelId];

    if (!level) {
      continue;
    }

    const option =
      document.createElement(
        "option"
      );

    const stars =
      levelStars[levelId] || 0;

    const starDisplay =
      stars > 0
        ? " " +
          "⭐".repeat(stars)
        : "";

    option.value =
      levelId;

    option.textContent =
      `${levelId} - ${level.name}${starDisplay}`;

    levelSelectElement.appendChild(
      option
    );
  }

  levelSelectElement.value =
    currentLevelId;
}

function startLevelFromIntro() {
  levelIntroActive = false;

  levelIntroScreen.classList.add(
    "hidden"
  );

  lastUpdateTime =
    performance.now();

  requestAnimationFrame(
    gameLoop
  );
}

function showLevelIntro() {
  levelIntroActive = true;

  introLevelNumber.textContent =
    `Level ${currentLevelId}`;

  introLevelName.textContent =
    currentLevel.name;

  introGoal.textContent =
    `Serve ${LEVEL_GOAL} smoothies`;

  introStarGoals.innerHTML = "";

const starGoals = [
  {
    stars: "⭐",
    score: currentLevel.stars.one
  },
  {
    stars: "⭐⭐",
    score: currentLevel.stars.two
  },
  {
    stars: "⭐⭐⭐",
    score: currentLevel.stars.three
  }
];

for (const goal of starGoals) {
  const row =
    document.createElement("p");

  row.textContent =
    `${goal.stars} ${goal.score} points`;

  introStarGoals.appendChild(row);
}

  introFruits.innerHTML = "";

  for (
    const fruit of activeFruits
  ) {
    const fruitIcon =
      document.createElement("span");

    fruitIcon.textContent =
      fruit.icon;

    introFruits.appendChild(
      fruitIcon
    );
  }

  introDetails.innerHTML = "";

  introHighScore.textContent =
  `Best Score: ${
    highScores[currentLevelId] || 0
  }`;

  const trayInfo =
    document.createElement("p");

  trayInfo.textContent =
    `Tray: ${TRAY_CAPACITY} slots`;

  const blenderInfo =
    document.createElement("p");

  blenderInfo.textContent =
    `${BLENDER_COUNT} Blender${
      BLENDER_COUNT === 1
        ? ""
        : "s"
    }`;

  const customerInfo =
    document.createElement("p");

  customerInfo.textContent =
    `Up to ${MAX_ORDERS} customer${
      MAX_ORDERS === 1
        ? ""
        : "s"
    }`;

  introDetails.appendChild(
    trayInfo
  );

  introDetails.appendChild(
    blenderInfo
  );

  introDetails.appendChild(
    customerInfo
  );

  levelIntroScreen.classList.remove(
    "hidden"
  );
}

function saveProgress() {
  const saveData = {
    unlockedLevels,
    levelStars,
    highScores
  };

  localStorage.setItem(
    SAVE_KEY,
    JSON.stringify(saveData)
  );
}

function loadProgress() {
  const savedData =
    localStorage.getItem(
      SAVE_KEY
    );

  if (!savedData) {
    return;
  }

  try {
    const parsedData =
      JSON.parse(savedData);

    if (
      Array.isArray(
        parsedData.unlockedLevels
      )
    ) {
      unlockedLevels =
        parsedData.unlockedLevels;
    }

    if (
      parsedData.levelStars &&
      typeof parsedData.levelStars ===
        "object"
    ) {
      levelStars =
        parsedData.levelStars;
    }

    if (
      parsedData.highScores &&
      typeof parsedData.highScores ===
        "object"
    ) {
      highScores =
        parsedData.highScores;
    }
  }
  catch (error) {
    console.error(
      "Could not load save data:",
      error
    );
  }
}

function resetSaveData() {
  localStorage.removeItem(
    SAVE_KEY
  );

  unlockedLevels = [
    "1-1"
  ];

  levelStars = {};
  highScores = {};

  console.log(
    "Save data reset."
  );
}

  function restartGame() {
    board = [];
    tray = [];
  
    orders = [];
    selectedOrderId = null;
    nextOrderId = 1;
  
    stopAllBlenderSounds();
    createBlenders();
  
    smoothiesServed = 0;
    customersLost = 0;
    fruitWasted = 0;

    frenzy = 0;
    frenzyActive = false;
    frenzyTimeRemaining = 0;

    document.body.classList.remove(
      "frenzy-active"
    );
  
    score = 0;
    levelComplete = false;
  
    resultsScreenElement.classList.add(
      "hidden"
    );

    gamePaused = false;

    pauseScreen.classList.add(
      "hidden"
    );
  
    createBoard();
  }

function gameLoop(currentTime) {
    if (levelComplete || gamePaused || levelIntroActive) {
        return;
      }
  
    const deltaTime =
    currentTime -
    lastUpdateTime;

  lastUpdateTime =
    currentTime;

    if (frenzyActive) {
      frenzyTimeRemaining -=
        deltaTime;
    
      if (
        frenzyTimeRemaining <= 0
      ) {
        endFrenzy();
      }
    }

    if (reshuffling) {
      reshuffleTimeRemaining -=
        deltaTime;

        const seconds =
        Math.ceil(
          reshuffleTimeRemaining /
          1000
        );
      
      reshuffleButton.textContent =
        `Reshuffling... ${seconds}`;
    
      if (
        reshuffleTimeRemaining <= 0
      ) {
        finishManualReshuffle();
      }
    }

    updateCustomerArrivals(
      deltaTime
    );

  updatePatience(
    deltaTime
  );

  updateBlenders(deltaTime);

  /*
   * Only redraw the changing parts
   * every frame.
   */
  renderOrders();
  updateBlenderProgressUI();
  updateScoreDisplay();

  // Keep Frenzy timer visually updated.
  renderFrenzy();

  requestAnimationFrame(
    gameLoop
  );
}

document
  .querySelectorAll(
    "#level-selector button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {
        loadLevel(
          button.dataset.level
        );
      }
    );

  });

nextLevelButton.addEventListener(
  "click",
  () => {
    const nextLevelId =
      getNextLevelId();

    if (nextLevelId) {
      resultsScreenElement.classList.add(
        "hidden"
      );

      loadLevel(nextLevelId);
    }
  }
);


loadButton.addEventListener(
  "click",
  loadBlender
);


serveButton.addEventListener(
  "click",
  serveSmoothie
);

restartButton.addEventListener(
    "click",
    restartGame
  );

  reshuffleButton.addEventListener(
    "click",
    startManualReshuffle
  );

  pauseButton.addEventListener(
    "click",
    pauseGame
  );
  
  resumeButton.addEventListener(
    "click",
    resumeGame
  );

  startLevelButton.addEventListener(
  "click",
  startLevelFromIntro
);

  levelSelectElement.addEventListener(
  "change",
  () => {
    loadLevel(
      levelSelectElement.value
    );
  }
);
  
  restartLevelButton.addEventListener(
    "click",
    () => {
      gamePaused = false;
  
      pauseScreen.classList.add(
        "hidden"
      );
  
      pauseButton.disabled = false;
  
      restartGame();
    }
  );

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key !== "Escape"
      ) {
        return;
      }
  
      if (levelComplete) {
        return;
      }
  
      if (gamePaused) {
        resumeGame();
      }
      else {
        pauseGame();
      }
    }
  );

loadProgress();

loadLevel("1-1");