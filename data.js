import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: 'Tammy',
      email: 'tammy@plants.com',
      password: bcrypt.hashSync('password', 8),
      isAdmin: true,
    },
    {
      name: 'Adam',
      email: 'adam@plants.com',
      password: bcrypt.hashSync('password', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      id: "1",
      name: "ZZ plant",
      category: "Home plants",
      image: "/images/zz.png",
      price: 57,
      countInStock: 20,
      rating: 4.5,
      numReviews: 1000,
      description:
        "Zamioculcas zamiifolia, commonly called ZZ plant or aroid palm, is an aroid family member that is native to dry grassland and forest in Eastern Africa. It is a stemless evergreen plant that typically grows to 3ft tall with attractive, pinnately compound leaves rising up from its rhizomes.",
    },
    {
      id: "2",
      name: "Money Tree",
      category: "Home plants",
      image: "/images/moneytree.png",
      price: 45,
      countInStock: 0,
      rating: 4,
      numReviews: 208,
      description:
        "The money tree plant (Pachira aquatica) is a large tree. Also called the Malabar chestnut, it is often grown indoors in containers. The container keeps it at a manageable size. Native to Central and South America, the plant is traditionally thought to bring good fortune to its owner.",
    },
    {
      id: "3",
      name: "Aloe Vera",
      category: "Home plants",
      image: "/images/aloe.png",
      price: 28,
      countInStock: 27,
      rating: 3.5,
      numReviews: 453,
      description:
        "Aloe vera, sometimes described as a “wonder plant,” is a short-stemmed shrub. Aloe is a genus that contains more than 500 species of flowering succulent plants. ... The leaves of Aloe vera are succulent, erect, and form a dense rosette. Many uses are made of the gel obtained from the plant's leaves.",
    },
    {
      id: "4",
      name: "Pothos",
      category: "Plants",
      image: "/images/pothos.png",
      price: 58,
      countInStock: 0,
      rating: 4.5,
      numReviews: 1020,
      description:
        "Pothos is an evergreen plant with thick, waxy, green, heart-shaped leaves with splashes of yellow. As a houseplant, it is commonly grown as a hanging plant. Pothos can climb by means of aerial roots, and wild or cultivated plants grown outdoors can reach enormous heights using tall trees as support.",
    },
    {
      id: "5",
      name: "Snake Plant",
      category: "Plants",
      image: "/images/snakeplant.png",
      price: 68,
      countInStock: 20,
      rating: 5,
      numReviews: 2560,
      description:
        "Sansevieria trifasciata, commonly called snake plant or mother-in-laws tongue, is native to tropical western Africa. It is a stemless evergreen perennial that, with proper care, will last for many years. ... Small, fragrant, greenish white flowers bloom on mature plants in spring, followed by orange berries.",
    },
    {
      id: "6",
      name: "Fatsia Spider's Web",
      category: "Plants",
      image: "/images/fatsiaspidersweb.png",
      price: 15,
      countInStock: 20,
      rating: 5,
      numReviews: 782,
      description:
        "The Fatsia Spiders Web is known for its lush foliage of broad, palmate, dark-green leaves heavily-speckled with white. This easy care plant is also pet-friendly and is the perfect plant to add to your collection.",
    },
    {
      id: "7",
      name: "Monstera",
      category: "Plants",
      image: "/images/monstera.png",
      price: 20,
      countInStock: 12,
      rating: 4,
      numReviews: 699,
      description:
        "Nicknamed the “swiss cheese plant”, the Monstera deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. Depending on the season and maturity of the plant, your Monstera could arrive with no holes just yet, and be sized to grow alongside you.",
    },
    {
      id: "9",
      name: "Ficus",
      category: "Plants",
      image: "/images/ficus.png",
      price: 65,
      countInStock: 10,
      rating: 3.7,
      numReviews: 603,
      description:
        "The Ficus elastica ’Tineke’ – or variegated rubber tree – is a popular variety of ficus known for its beautiful pink, green, and yellow leaves. The Tineke’s striking variegation and easy-going nature make it the perfect new plant to add to your sill this year.",
    },
    {
      id: "10",
      name: "White Orchid",
      category: "Plants",
      image: "/images/whiteorchid.png",
      price: 98,
      countInStock: 15,
      rating: 4.2,
      numReviews: 870,
      description:
        "With its elegant stems and vibrant white flowers, this Phalaenopsis orchid makes any space feel more chic. You may notice a small amount of blooms on your orchid upon delivery. These blooms will open quicker in a warm indoor setting. The Phalaenopsis will typically bloom about once a year, for up to three months. After a blooming cycle, the flowers will wilt and fall off. This is the orchid’s way to store up energy to re-bloom again next season.",
    },
    {
      id: "11",
      name: "Philodendron Birkin",
      category: "Plants",
      image: "/images/philo.png",
      price: 48,
      countInStock: 20,
      rating: 4.9,
      numReviews: 2811,
      description:
        "The Philodendron Birkin is characterized by its lush green leaves with white or yellow pinstripes. A unique hybrid, you won't find this plant in the wild. It is a slow growing plant that can reach up to 3 feet tall indoors if well cared for.",
    },
    {
      id: "12",
      name: "Parlor Palm",
      category: "Plants",
      image: "/images/parlorpalm.png",
      price: 67,
      countInStock: 20,
      rating: 4.2,
      numReviews: 1921,
      description:
        "The Parlor Palm is a favorite easy-care palm with tropical fronds known for its air purifying qualities.",
    },
  ],
};

export default data;
