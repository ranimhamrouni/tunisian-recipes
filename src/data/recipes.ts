export type Recipe = {
  id: number;
  name: string;
  category: string;
  time: string;
  difficulty: string;
  image: string;
  ingredients: string[];
  steps: string[];
  culture: string;
};

export const recipes: Recipe[] = [
  {
    id: 1,
    name: "Harissa",
    category: "Condiment",
    time: "20 min",
    difficulty: "Easy",
    image: "/src/assets/harissa.webp",
    ingredients: ["Red chili peppers", "Garlic cloves", "Caraway seeds", "Coriander seeds", "Extra virgin olive oil", "Sea salt"],
    steps: [
      "Dry roast caraway and coriander seeds for 1 minute in a hot pan",
      "Grind roasted seeds with garlic and red peppers until fine",
      "Mix in high-quality olive oil gradually",
      "Add salt and stir until creamy consistency is reached",
      "Store in glass jar with olive oil layer on top"
    ],
    culture: "The soul of Tunisian cooking. Harissa represents the bold, fiery spirit of Tunisia—a vibrant red paste that transforms any dish. Passed down through generations, every family has their secret blend."
  },
  {
    id: 2,
    name: "Brik",
    category: "Street Food",
    time: "25 min",
    difficulty: "Medium",
    image: "/src/assets/brik.webp",
    ingredients: ["Thin pastry sheets (malsouka)", "Eggs", "Canned tuna or ground meat", "Fresh parsley", "Onion", "Harissa", "Salt & pepper"],
    steps: [
      "Heat oil in large pan to frying temperature (350°F)",
      "Fill pastry sheet with tuna mixture and herbs",
      "Create triangle and leave a small opening at the corner",
      "Crack a whole egg into the opening",
      "Gently fold edges to partially seal",
      "Fry until golden on both sides (2-3 minutes total)"
    ],
    culture: "A beloved street food that pops with flavor! Brik represents Tunisian entrepreneurship—sold by vendors on every corner, this crispy pastry with its runny center is pure street food poetry. Perfect with a squeeze of lemon."
  },
  {
    id: 3,
    name: "Lablabi",
    category: "Soup",
    time: "45 min",
    difficulty: "Easy",
    image: "/src/assets/lablabi.webp",
    ingredients: ["Chickpeas (canned or cooked)", "Garlic", "Cumin", "Harissa", "Caraway seeds", "Crusty bread", "Olive oil", "Salt & water"],
    steps: [
      "Toast caraway seeds and grind with salt",
      "Sauté garlic with harissa until fragrant",
      "Add chickpeas with 2 cups water",
      "Simmer for 15 minutes",
      "Toast bread slices until crispy",
      "Serve soup in bowl with bread, drizzle of olive oil, and spice blend"
    ],
    culture: "A warming winter embrace in a bowl. Lablabi is comfort food at its finest—a humble chickpea soup that warms souls during cold months. You'll find it being served in the medinas of Tunis from steaming cauldrons."
  },
  {
    id: 4,
    name: "Couscous Royal",
    category: "Main Dish",
    time: "90 min",
    difficulty: "Hard",
    image: "/src/assets/couscous.webp",
    ingredients: ["Couscous", "Lamb or chicken", "Chickpeas", "Raisins", "Carrots", "Zucchini", "Turnips", "Onions", "Harissa", "Broth"],
    steps: [
      "Brown meat in tagine with onions and spices",
      "Add broth and simmer vegetables separately",
      "Prepare couscous in traditional steamer (couscoussière)",
      "Steam couscous 3 times, moistening between steaming",
      "Arrange couscous on platter in pyramid",
      "Top with vegetables and meat, pour broth around"
    ],
    culture: "The crown jewel of Tunisian cuisine! Couscous represents celebration and family gatherings. Served on Fridays and special occasions, this aromatic dish showcases the bounty of Tunisian farms and the skill of Tunisian cooks."
  },
  {
    id: 5,
    name: "Makroudh",
    category: "Dessert",
    time: "40 min",
    difficulty: "Medium",
    image: "/src/assets/makroudh.png",
    ingredients: ["Semolina", "Butter", "Powdered sugar", "Dates", "Sesame seeds", "Baking powder", "Salt", "Orange blossom water"],
    steps: [
      "Mix semolina, sugar, and baking powder",
      "Add softened butter and knead until breadcrumb texture",
      "Stuff with date paste and sesame seeds",
      "Shape into cookies with traditional ridged pattern",
      "Bake at 350°F for 15-20 minutes until golden",
      "Cool and brush with honey and orange blossom water"
    ],
    culture: "Sweet, delicate, and utterly addictive. Makroudh cookies are given as gifts during holidays and celebrations. These golden morsels represent the Tunisian love of dates and the sweetness of hospitality."
  },
  {
    id: 6,
    name: "Mloukhia",
    category: "Traditional Stew",
    time: "60 min",
    difficulty: "Easy",
    image: "/src/assets/mloukhia.jpg",
    ingredients: ["Mloukhia leaves (fresh or dried)", "Rabbit or chicken", "Garlic", "Coriander", "Caraway", "Harissa", "Olive oil", "Broth"],
    steps: [
      "Cook meat with garlic and spices until tender",
      "Add mloukhia leaves to simmering broth",
      "Stir continuously until soup becomes thick and green",
      "Season with harissa to taste",
      "Serve in wide bowls with crusty bread"
    ],
    culture: "An ancient dish with roots in Tunisia's agricultural heritage. Mloukhia was traditionally served on special occasions and represents the resourcefulness of Tunisian cooks who transform simple leaves into pure comfort."
  }
];
