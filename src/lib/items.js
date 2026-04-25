let items = [
  {
    id: 1,
    title: "Summer Music Festival",
    shortDescription: "Three days of amazing music and entertainment",
    fullDescription: "Join us for an unforgettable weekend of live music from top artists. Multiple stages, food vendors, and camping available.",
    price: "$199",
    date: "2024-07-15",
    location: "Central Park, NY",
    category: "Festival",
    capacity: "5000"
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    shortDescription: "Future of technology and innovation",
    fullDescription: "Industry leaders share insights on AI, blockchain, and emerging technologies. Networking opportunities included.",
    price: "$299",
    date: "2024-08-20",
    location: "Convention Center, SF",
    category: "Conference",
    capacity: "1000"
  },
  {
    id: 3,
    title: "Jazz Night",
    shortDescription: "An evening of smooth jazz",
    fullDescription: "Enjoy performances by renowned jazz artists in an intimate setting. Dinner and drinks available.",
    price: "$75",
    date: "2024-06-10",
    location: "Blue Note, NYC",
    category: "Concert",
    capacity: "200"
  },
  {
    id: 4,
    title: "Art Workshop",
    shortDescription: "Learn painting techniques",
    fullDescription: "Beginner-friendly workshop teaching acrylic and watercolor painting. All materials provided.",
    price: "$50",
    date: "2024-06-25",
    location: "Art Studio, Chicago",
    category: "Workshop",
    capacity: "30"
  },
  {
    id: 5,
    title: "Food & Wine Expo",
    shortDescription: "Culinary delights and wine tasting",
    fullDescription: "Sample dishes from top chefs and wines from around the world. Cooking demonstrations included.",
    price: "$120",
    date: "2024-07-05",
    location: "Expo Center, Miami",
    category: "Festival",
    capacity: "2000"
  },
  {
    id: 6,
    title: "Marathon 2024",
    shortDescription: "Annual city marathon",
    fullDescription: "Run through the city's most scenic routes. Categories for all skill levels. Medals for all finishers.",
    price: "$85",
    date: "2024-09-01",
    location: "Downtown, Boston",
    category: "Sports",
    capacity: "10000"
  }
];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find(item => item.id === parseInt(id));
}

export function addItem(item) {
  const newItem = {
    ...item,
    id: items.length + 1,
  };
  items.push(newItem);
  return newItem;
}

export function updateItem(id, updatedItem) {
  const index = items.findIndex(item => item.id === parseInt(id));
  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    return items[index];
  }
  return null;
}

export function deleteItem(id) {
  items = items.filter(item => item.id !== parseInt(id));
  return true;
}