const recipes = [
  {
    id: 1,
    title: "Brewing the Perfect Ice Tea: An Introduction",
    slug: "brewing-perfect-ice-tea-introduction",
    authorId: 1,
    category: "Beverage Crafting"
  },
  {
    id: 2,
    title: "The Art of Tea Infusion: Flavors and Techniques",
    slug: "art-tea-infusion-flavors-techniques",
    authorId: 2,
    category: "Culinary Skills"
  },
  {
    id: 3,
    title: "From Leaf to Cup: The Journey of Tea",
    slug: "leaf-to-cup-journey-of-tea",
    authorId: 3,
    category: "Product Knowledge"
  },
  {
    id: 4,
    title: "Innovating Tea: Exploring Modern Tea Beverages",
    slug: "innovating-tea-modern-beverages",
    authorId: 1,
    category: "Innovation"
  },
  {
    id: 5,
    title: "Sustainable Tea Brewing: Eco-friendly Practices",
    slug: "sustainable-tea-brewing-eco-friendly",
    authorId: 1,
    category: "Sustainability"
  },
  {
    id: 6,
    title: "Tea in Digital Marketing: Building Your Brand",
    slug: "tea-digital-marketing-branding",
    authorId: 1,
    category: "Marketing"
  },
  {
    id: 7,
    title: "Designing Tea Packaging that Sells",
    slug: "designing-tea-packaging",
    authorId: 1,
    category: "Design and Packaging"
  },
  {
    id: 8,
    title: "The Science of Tea: Health Benefits Explored",
    slug: "science-of-tea-health-benefits",
    authorId: 1,
    category: "Health"
  },
  {
    id: 9,
    title: "Tea Tasting Techniques: Developing Your Palate",
    slug: "tea-tasting-techniques",
    authorId: 1,
    category: "Culinary Arts"
  },
  {
    id: 10,
    title: "Launching Your Tea Brand: A Startup Guide",
    slug: "launching-tea-brand-startup-guide",
    authorId: 1,
    category: "Entrepreneurship"
  }
];

const authors = [
  { id: 1, name: "Jasmine Green" },
  { id: 2, name: "Earl Grey" },
  { id: 3, name: "Oolong Wu" }
];


const newRecipe = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

module.exports = {
  newRecipe,
  recipes,
  authors
};
