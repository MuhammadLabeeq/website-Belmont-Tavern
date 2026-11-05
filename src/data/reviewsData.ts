export interface ReviewItem {
  id: string;
  author: string;
  badge: string;
  rating: number;
  timeAgo: string;
  quote: string;
  highlightTag?: string;
}

export const VERBATIM_REVIEWS: ReviewItem[] = [
  {
    id: 'ally',
    author: "Ally's Traveling Eats",
    badge: 'Local Guide · 54 reviews',
    rating: 5,
    timeAgo: '5 months ago',
    quote: "My absolute favorite old school Italian restaurant in New Jersey. Food is absolutely incredible and fresh, portions are huge, staff is great. The chicken savoy dish is incredible, a MUST! Cash only, so don't forget! Also, good luck getting into the restaurant, it's a gold mine!",
    highlightTag: 'Must-Order Chicken Savoy',
  },
  {
    id: 'ryan',
    author: 'Ryan',
    badge: 'Local Guide · 297 reviews · 1,703 photos',
    rating: 5,
    timeAgo: '7 months ago',
    quote: 'One of, if not the most famous Authentic Old School Italian restaurants in all of Jersey (possibly the northeast).',
    highlightTag: 'Legendary Jersey Institution',
  },
  {
    id: 'noelle',
    author: 'Noelle Leeman',
    badge: 'Local Guide · 188 reviews · 99 photos',
    rating: 5,
    timeAgo: '2 months ago',
    quote: 'Old School Family Style Eating. Great food, simple ingredients and the Soprano Feel. Nothing has changed since 1967 and we like it like that!',
    highlightTag: 'Soprano Feel Since 1967',
  },
  {
    id: 'visitor',
    author: 'Visitor Update',
    badge: 'Google Maps Verified Diner',
    rating: 5,
    timeAgo: 'Belleville, NJ',
    quote: 'Classic NJ Italian joint. Like going in a Time Machine!!',
    highlightTag: 'Time Machine Atmosphere',
  },
];
