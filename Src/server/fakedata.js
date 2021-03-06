const rooms = [
    {
      id: 1,
      type: "Presidential suite",
      slug: "Presidential-suite", 
      charge: 1500,
      availability: 7,
    },
    {
      id: 2,
      type: "Junior suite",
      slug: "Junior-suite",
      charge: 800,
      availability: 11,
    },
    {
      id: 3,
      type: "Executive",
      slug: "Executive", 
      charge: 1200,
      availability: 6,
    },
    {
      id: 4,
      type: "Deluxe",
      slug: "Deluxe", 
      charge: 2500,
      availability: 4,
    },
    {
      id: 5,
      type: "Super deluxe",
      slug: "Super-deluxe", 
      charge: 4000,
      availability: 2,
    }
  ];
  
  
  const newRoom = {
    id: null,
    type: "",
    charge: null,
    availability: null,
  };
  
  module.exports = {
    rooms,
    newRoom
  };
  