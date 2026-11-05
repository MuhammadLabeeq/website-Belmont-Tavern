export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'signatures' | 'pasta' | 'seafood' | 'meats' | 'appetizers' | 'salads' | 'espresso';
  description?: string;
  isPopular?: boolean;
  notes?: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'Complete Menu' },
  { id: 'signatures', label: 'House Signatures' },
  { id: 'pasta', label: 'Pasta & Chef Specials' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'meats', label: 'Meats' },
  { id: 'appetizers', label: 'Appetizers & Salads' },
  { id: 'espresso', label: 'Espresso Pots' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // House Signatures
  {
    id: 'chicken-savoy',
    name: 'Stretch’s Famous "Chicken Savoy"',
    price: '$24',
    category: 'signatures',
    description: 'The legendary North Jersey original created by Chef Stretch. Bone-in roasted chicken seasoned with red wine vinegar, garlic, spices, and fresh herbs baked to a sizzling crisp.',
    isPopular: true,
    notes: 'The Original Dish Created Here',
  },
  {
    id: 'shrimp-beeps',
    name: 'Belmont’s Famous Shrimp "Beeps"',
    price: '$19',
    category: 'signatures',
    description: 'Jumbo succulent shrimp simmered in Belmont’s signature spicy marinara pepper reduction with garlic and olive oil. Perfect for dipping Italian bread.',
    isPopular: true,
    notes: 'Original Recipe',
  },
  {
    id: 'cavatelli-pot-cheese',
    name: 'Cavatelli with Pot Cheese',
    price: '$21',
    category: 'signatures',
    description: 'Handcrafted ricotta cavatelli tossed with creamy fresh pot cheese and sweet, slow-simmered homemade marinara sauce.',
    isPopular: true,
    notes: 'Chef Special',
  },

  // Appetizers & Salads
  {
    id: 'clams-oreganata',
    name: 'Clams Oreganata',
    price: '$10',
    category: 'appetizers',
    description: 'Fresh baked clams on the half shell with seasoned Italian breadcrumbs, oregano, garlic, and white wine broth.',
    isPopular: true,
  },
  {
    id: 'clam-cocktail',
    name: 'Clam Cocktail Half Shell',
    price: '$10',
    category: 'appetizers',
    description: 'Chilled freshly shucked clams served with lemon wedges and house cocktail sauce.',
  },
  {
    id: 'marco-scungilli',
    name: '"Marco" Scungilli',
    price: '$17',
    category: 'appetizers',
    description: 'Tender scungilli prepared with garlic, parsley, lemon, and extra virgin olive oil.',
  },
  {
    id: 'hot-peppers',
    name: 'Hot Peppers',
    price: '$16',
    category: 'appetizers',
    description: 'Classic tavern-style sauteed spicy Italian long hot peppers with olive oil and sea salt.',
  },
  {
    id: 'lettuce-tomato-salad',
    name: 'Lettuce, Tomato & Onion Salad',
    price: '$5 per person',
    category: 'salads',
    description: 'Crisp lettuce, ripe tomatoes, and sweet sliced onions with house Italian vinaigrette.',
  },
  {
    id: 'escarole-salad',
    name: 'Escarole Salad',
    price: 'Complimentary',
    category: 'salads',
    description: 'Belmont tradition: Escarole Salad served complimentary with all dinners.',
    notes: 'Included with All Dinners',
  },

  // Chef Specials
  {
    id: 'eggplant-parm',
    name: 'Eggplant Parmigiana',
    price: '$16',
    category: 'pasta',
    description: 'Delicately layered fried eggplant slices baked with mozzarella, marinara, and pecorino Romano.',
  },
  {
    id: 'ziti-pot-cheese',
    name: 'Ziti with Pot Cheese',
    price: '$21',
    category: 'pasta',
    description: 'Tubular ziti folded with fluffy fresh pot cheese and rich marinara sauce.',
  },
  {
    id: 'spaghetti-marinara',
    name: 'Spaghetti Marinara',
    price: '$19',
    category: 'pasta',
    description: 'Al dente spaghetti tossed in Belmont’s signature simmered tomato marinara sauce.',
  },
  {
    id: 'spaghetti-oil-garlic',
    name: 'Spaghetti Oil & Garlic',
    price: '$20',
    category: 'pasta',
    description: 'Classic Aglio e Olio with extra virgin olive oil, golden toasted sliced garlic, and parsley.',
  },
  {
    id: 'spaghetti-oil-garlic-peppers',
    name: 'Spaghetti Oil & Garlic with Hot Peppers',
    price: '$25',
    category: 'pasta',
    description: 'Our classic oil and garlic spaghetti elevated with fiery sauteed Italian hot peppers.',
  },
  {
    id: 'spaghetti-clams',
    name: 'Spaghetti White or Red Clam',
    price: '$25',
    category: 'pasta',
    description: 'Fresh clams simmered in your choice of fragrant garlic white wine broth or sweet plum marinara sauce.',
  },
  {
    id: 'spaghetti-beeps',
    name: 'Spaghetti "Beeps"',
    price: '$25',
    category: 'pasta',
    description: 'Belmont’s famous spicy pepper marinara sauce tossed over a generous platter of spaghetti.',
  },
  {
    id: 'spaghetti-guliano',
    name: 'Spaghetti Guliano',
    price: '$28',
    category: 'pasta',
    description: 'Hearty fisherman platter featuring hot shrimp, tender scungilli, and fresh clams in savory red sauce.',
  },

  // Seafood
  {
    id: 'shrimp-oreganata',
    name: 'Shrimp Oreganata',
    price: '$17',
    category: 'seafood',
    description: 'Jumbo shrimp baked golden with seasoned breadcrumbs, garlic, oregano, and lemon butter.',
  },
  {
    id: 'shrimp-scampi',
    name: 'Shrimp Scampi',
    price: '$17',
    category: 'seafood',
    description: 'Sauteed shrimp in a rich white wine, garlic, lemon, and butter sauce.',
  },
  {
    id: 'shrimp-marinara',
    name: 'Shrimp Marinara',
    price: '$17',
    category: 'seafood',
    description: 'Tender jumbo shrimp gently poached in our house tomato marinara.',
  },
  {
    id: 'shrimp-marsala',
    name: 'Shrimp Marsala',
    price: '$19',
    category: 'seafood',
    description: 'Shrimp pan-seared with savory mushrooms in a sweet Sicilian Marsala wine reduction.',
  },
  {
    id: 'scrod-oreganata',
    name: 'Scrod "Di Giacomo" Oreganata',
    price: '$29',
    category: 'seafood',
    description: 'Fresh tender scrod filet baked with Chef Di Giacomo’s seasoned herb breadcrumb crust and white wine broth.',
  },

  // Meats
  {
    id: 'chicken-murphy',
    name: 'Chicken Murphy',
    price: '$30',
    category: 'meats',
    description: 'Tender chicken sauteed with sweet & hot peppers, sliced potatoes, onions, and garlic.',
    isPopular: true,
  },
  {
    id: 'mad-chicken-arragiato',
    name: 'Mad Chicken Arragiato',
    price: '$24',
    category: 'meats',
    description: 'Spicy angry-style chicken roasted with crushed red peppers, garlic, and fresh herbs.',
  },
  {
    id: 'pork-chops-vinegar',
    name: 'Pork Chops Vinegar Peppers',
    price: '$41',
    category: 'meats',
    description: 'Thick-cut center bone pork chops pan-seared with tangy pickled Italian vinegar peppers.',
  },
  {
    id: 'pork-chops-hot-peppers',
    name: 'Pork Chops Hot Peppers',
    price: '$41',
    category: 'meats',
    description: 'Thick-cut juicy pork chops prepared with spicy sauteed Italian hot peppers.',
  },
  {
    id: 'pork-chops-pizzaiola',
    name: 'Pork Chops Pizzaiola',
    price: '$41',
    category: 'meats',
    description: 'Hearty pork chops simmered in a robust garlic, oregano, and plum tomato pizzaiola sauce.',
  },

  // Espresso
  {
    id: 'espresso-medium',
    name: 'Family Style Espresso Pot (Medium)',
    price: '$20',
    category: 'espresso',
    description: 'Traditional Italian stovetop moka pot brought steaming hot to the table to share.',
  },
  {
    id: 'espresso-large',
    name: 'Family Style Espresso Pot (Large)',
    price: '$25',
    category: 'espresso',
    description: 'Large family-size moka pot of rich dark Italian espresso served with lemon twists.',
  },
];
