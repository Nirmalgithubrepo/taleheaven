

// import React, { useState } from "react";

// const FlipCard = ({ frontContent, backContent }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div
//       className="flip-card w-full h-80 cursor-pointer"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div
//         className={`flip-card-inner w-full h-full relative transition-transform duration-500 ${
//           flipped ? "rotate-y-180" : ""
//         }`}
//       >
//         <div className="flip-card-front absolute w-full h-full">
//           {frontContent}
//         </div>
//         <div className="flip-card-back absolute w-full h-full transform rotate-y-180">
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Shop = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const books = [
//     // Fiction (25 books)
//     {
//       id: 1,
//       title: "The Great Gatsby",
//       author: "F. Scott Fitzgerald",
//       price: "₹299",
//       category: "Fiction",
//       rating: 4.2,
//       pages: 180,
//       year: 1925,
//       description: "A story of wealth, love, and the American Dream in the Jazz Age.",
//       image: "https://gyaanstore.com/cdn/shop/files/214_9132581e-602b-4b7a-b7f8-e51dd8c11462.png?v=1742736088&width=600",
//     },
//     {
//       id: 2,
//       title: "The Book Thief",
//       author: "Markus Zusak",
//       price: "₹399",
//       category: "Fiction",
//       rating: 4.4,
//       pages: 552,
//       year: 2005,
//       description: "A story of a young girl living with her foster family in Nazi Germany.",
//       image: "https://gyaanstore.com/cdn/shop/files/144_70fb03b3-2587-4702-b89a-6641153653ac.png?v=1701767156&width=600",
//     },
//     {
//       id: 3,
//       title: "Dune",
//       author: "Frank Herbert",
//       price: "₹480",
//       category: "Fiction",
//       rating: 4.6,
//       pages: 412,
//       year: 1965,
//       description: "A science fiction masterpiece about politics, religion, and ecology.",
//       image: "https://gyaanstore.com/cdn/shop/files/50_d75d166e-26cf-4ee9-a305-08427552b099.png?v=1702895378&width=600",
//     },
//     {
//       id: 4,
//       title: "The Midnight Library",
//       author: "Matt Haig",
//       price: "₹389",
//       category: "Fiction",
//       rating: 4.1,
//       pages: 304,
//       year: 2020,
//       description: "A novel about all the choices that go into a life well lived.",
//       image: "https://gyaanstore.com/cdn/shop/files/44_fd6f439d-6332-4ed7-8baf-dbf356150eab.png?v=1702556846&width=600",
//     },
//     {
//       id: 5,
//       title: "A Man Called Ove",
//       author: "Fredrik Backman",
//       price: "₹359",
//       category: "Fiction",
//       rating: 4.4,
//       pages: 337,
//       year: 2012,
//       description: "A grumpy yet loveable man finds his solitary world turned on its head.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 6,
//       title: "Harry Potter and the Prisoner of Azkaban",
//       author: "J.K. Rowling",
//       price: "₹599",
//       category: "Fantasy",
//       rating: 4.8,
//       pages: 435,
//       year: 1999,
//       description: "Harry's third year at Hogwarts where he learns about his past.",
//       image: "https://gyaanstore.com/cdn/shop/files/157_3aedbaa6-1aa0-4f84-8de6-c23f88dd8e5c.png?v=1713789111&width=600",
//     },
//     {
//       id: 7,
//       title: "The Hobbit and the Lord of the Rings",
//       author: "J.R.R. Tolkien",
//       price: "₹798",
//       category: "Fantasy",
//       rating: 4.9,
//       pages: 1216,
//       year: 1954,
//       description: "The epic fantasy adventure that defined the genre.",
//       image: "https://gyaanstore.com/cdn/shop/files/94_9b6e0c03-1479-4afd-a519-44d04d9f00ff.png?v=1699265883&width=600",
//     },
//     {
//       id: 8,
//       title: "The Fault in Our Stars",
//       author: "John Green",
//       price: "₹299",
//       category: "Fiction",
//       rating: 4.3,
//       pages: 313,
//       year: 2012,
//       description: "A heartbreaking yet beautiful story of two teens with cancer.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 9,
//       title: "1984",
//       author: "George Orwell",
//       price: "₹349",
//       category: "Fiction",
//       rating: 4.5,
//       pages: 328,
//       year: 1949,
//       description: "A dystopian novel about totalitarianism and surveillance.",
//       image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
//     },
//     {
//       id: 10,
//       title: "The Kite Runner",
//       author: "Khaled Hosseini",
//       price: "₹329",
//       category: "Fiction",
//       rating: 4.3,
//       pages: 371,
//       year: 2003,
//       description: "A powerful story of friendship, betrayal, and redemption in Afghanistan.",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
//     },
//     {
//       id: 11,
//       title: "The Alchemist",
//       author: "Paulo Coelho",
//       price: "₹249",
//       category: "Fiction",
//       rating: 3.9,
//       pages: 208,
//       year: 1988,
//       description: "A mystical story about following your dreams and listening to your heart.",
//       image: "https://gyaanstore.com/cdn/shop/files/79_d65ac26c-c257-4756-9b57-41b7d00dacd4.png?v=1701858054&width=600",
//     },
//     {
//       id: 12,
//       title: "To Kill a Mockingbird",
//       author: "Harper Lee",
//       price: "₹399",
//       category: "Fiction",
//       rating: 4.7,
//       pages: 324,
//       year: 1960,
//       description: "A powerful story of racial injustice and moral growth in the American South.",
//       image: "https://gyaanstore.com/cdn/shop/products/mocking-bird-bookstech.in.jpg?v=1683613943&width=600",
//     },
//     {
//       id: 13,
//       title: "The Catcher in the Rye",
//       author: "J.D. Salinger",
//       price: "₹279",
//       category: "Fiction",
//       rating: 3.8,
//       pages: 234,
//       year: 1951,
//       description: "A novel about teenage alienation and loss of innocence.",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
//     },
//     {
//       id: 14,
//       title: "The Handmaid's Tale",
//       author: "Margaret Atwood",
//       price: "₹349",
//       category: "Fiction",
//       rating: 4.1,
//       pages: 311,
//       year: 1985,
//       description: "A dystopian novel about a woman's struggle in a totalitarian society.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 15,
//       title: "The Road",
//       author: "Cormac McCarthy",
//       price: "₹319",
//       category: "Fiction",
//       rating: 4.0,
//       pages: 241,
//       year: 2006,
//       description: "A post-apocalyptic tale of a father and son's journey to survive.",
//       image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
//     },
//     {
//       id: 16,
//       title: "Life of Pi",
//       author: "Yann Martel",
//       price: "₹289",
//       category: "Fiction",
//       rating: 3.9,
//       pages: 326,
//       year: 2001,
//       description: "A fantasy adventure novel about a boy stranded on a boat with a tiger.",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
//     },
//     {
//       id: 17,
//       title: "The Goldfinch",
//       author: "Donna Tartt",
//       price: "₹379",
//       category: "Fiction",
//       rating: 3.9,
//       pages: 771,
//       year: 2013,
//       description: "A coming-of-age novel about a boy who survives an accident and steals a painting.",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
//     },
//     {
//       id: 18,
//       title: "The Secret History",
//       author: "Donna Tartt",
//       price: "₹359",
//       category: "Fiction",
//       rating: 4.2,
//       pages: 559,
//       year: 1992,
//       description: "A novel about a group of classics students at an elite college.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 19,
//       title: "The Night Circus",
//       author: "Erin Morgenstern",
//       price: "₹329",
//       category: "Fantasy",
//       rating: 4.0,
//       pages: 387,
//       year: 2011,
//       description: "A magical story about a mysterious circus that appears without warning.",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
//     },
//     {
//       id: 20,
//       title: "The Name of the Wind",
//       author: "Patrick Rothfuss",
//       price: "₹419",
//       category: "Fantasy",
//       rating: 4.5,
//       pages: 662,
//       year: 2007,
//       description: "The first book in the Kingkiller Chronicle fantasy series.",
//       image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
//     },
//     {
//       id: 21,
//       title: "The Martian",
//       author: "Andy Weir",
//       price: "₹389",
//       category: "Scientific",
//       rating: 4.4,
//       pages: 369,
//       year: 2011,
//       description: "A science fiction novel about an astronaut stranded on Mars.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 22,
//       title: "Project Hail Mary",
//       author: "Andy Weir",
//       price: "₹449",
//       category: "Scientific",
//       rating: 4.5,
//       pages: 476,
//       year: 2021,
//       description: "A lone astronaut must save the earth from disaster in this sci-fi adventure.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 23,
//       title: "The Three-Body Problem",
//       author: "Liu Cixin",
//       price: "₹399",
//       category: "Scientific",
//       rating: 4.1,
//       pages: 400,
//       year: 2008,
//       description: "A science fiction novel about humanity's first contact with an alien civilization.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 24,
//       title: "The Left Hand of Darkness",
//       author: "Ursula K. Le Guin",
//       price: "₹349",
//       category: "Scientific",
//       rating: 4.1,
//       pages: 304,
//       year: 1969,
//       description: "A groundbreaking work of science fiction exploring gender and society.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 25,
//       title: "Neuromancer",
//       author: "William Gibson",
//       price: "₹329",
//       category: "Scientific",
//       rating: 3.9,
//       pages: 271,
//       year: 1984,
//       description: "The novel that defined the cyberpunk genre of science fiction.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },

//     // Non-Fiction (25 books)
//     {
//       id: 26,
//       title: "Sapiens",
//       author: "Yuval Noah Harari",
//       price: "₹499",
//       category: "Non-Fiction",
//       rating: 4.6,
//       pages: 443,
//       year: 2011,
//       description: "A brief history of humankind, exploring the evolution of our species.",
//       image: "https://gyaanstore.com/cdn/shop/files/223_6f5f1366-21a9-49a7-9c76-a834d90d28a9.png?v=1701687997&width=600",
//     },
//     {
//       id: 27,
//       title: "Becoming",
//       author: "Michelle Obama",
//       price: "₹450",
//       category: "Non-Fiction",
//       rating: 4.8,
//       pages: 426,
//       year: 2018,
//       description: "A deeply personal memoir by the former First Lady of the United States.",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
//     },
//     {
//       id: 28,
//       title: "Steve Jobs",
//       author: "Walter Isaacson",
//       price: "₹499",
//       category: "Non-Fiction",
//       rating: 4.3,
//       pages: 656,
//       year: 2011,
//       description: "The exclusive biography of Apple's visionary co-founder.",
//       image: "https://gyaanstore.com/cdn/shop/files/stevejobs.png?v=1702833351&width=600",
//     },
//     {
//       id: 29,
//       title: "Wings of Fire",
//       author: "A.P.J. Abdul Kalam",
//       price: "₹250",
//       category: "Non-Fiction",
//       rating: 4.4,
//       pages: 180,
//       year: 1999,
//       description: "An autobiography of India's missile man and former President.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 30,
//       title: "The Diary of a Young Girl",
//       author: "Anne Frank",
//       price: "₹279",
//       category: "Non-Fiction",
//       rating: 4.5,
//       pages: 283,
//       year: 1947,
//       description: "The diary of a Jewish girl hiding from the Nazis during WWII.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 31,
//       title: "Into the Wild",
//       author: "Jon Krakauer",
//       price: "₹320",
//       category: "Non-Fiction",
//       rating: 4.0,
//       pages: 207,
//       year: 1996,
//       description: "The true story of Christopher McCandless who gave up everything to live in the wilderness.",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
//     },
//     {
//       id: 32,
//       title: "The Immortal Life of Henrietta Lacks",
//       author: "Rebecca Skloot",
//       price: "₹375",
//       category: "Non-Fiction",
//       rating: 4.1,
//       pages: 381,
//       year: 2010,
//       description: "The story of the woman whose cells were used for countless medical breakthroughs.",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
//     },
//     {
//       id: 33,
//       title: "Quiet: The Power of Introverts",
//       author: "Susan Cain",
//       price: "₹350",
//       category: "Non-Fiction",
//       rating: 4.2,
//       pages: 333,
//       year: 2012,
//       description: "A book about the power of introverts in a world that can't stop talking.",
//       image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
//     },
//     {
//       id: 34,
//       title: "The Sixth Extinction",
//       author: "Elizabeth Kolbert",
//       price: "₹420",
//       category: "Non-Fiction",
//       rating: 4.2,
//       pages: 319,
//       year: 2014,
//       description: "An exploration of the current mass extinction caused by human activity.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 35,
//       title: "Born a Crime",
//       author: "Trevor Noah",
//       price: "₹389",
//       category: "Non-Fiction",
//       rating: 4.7,
//       pages: 304,
//       year: 2016,
//       description: "Trevor Noah's remarkable journey from apartheid South Africa to the Daily Show.",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
//     },
//     {
//       id: 36,
//       title: "The Emperor of All Maladies",
//       author: "Siddhartha Mukherjee",
//       price: "₹450",
//       category: "Non-Fiction",
//       rating: 4.4,
//       pages: 592,
//       year: 2010,
//       description: "A biography of cancer that won the Pulitzer Prize for General Nonfiction.",
//       image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
//     },
//     {
//       id: 37,
//       title: "Guns, Germs, and Steel",
//       author: "Jared Diamond",
//       price: "₹499",
//       category: "Non-Fiction",
//       rating: 4.0,
//       pages: 425,
//       year: 1997,
//       description: "A book about why some societies prospered while others did not.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 38,
//       title: "Cosmos",
//       author: "Carl Sagan",
//       price: "₹425",
//       category: "Non-Fiction",
//       rating: 4.5,
//       pages: 365,
//       year: 1980,
//       description: "A personal voyage through the universe by the famous astronomer.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 39,
//       title: "A Brief History of Time",
//       author: "Stephen Hawking",
//       price: "₹399",
//       category: "Non-Fiction",
//       rating: 4.2,
//       pages: 212,
//       year: 1988,
//       description: "A popular-science book on cosmology by the renowned physicist.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 40,
//       title: "The Gene: An Intimate History",
//       author: "Siddhartha Mukherjee",
//       price: "₹459",
//       category: "Non-Fiction",
//       rating: 4.3,
//       pages: 592,
//       year: 2016,
//       description: "A story of the gene and the science of heredity.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 41,
//       title: "The Body: A Guide for Occupants",
//       author: "Bill Bryson",
//       price: "₹429",
//       category: "Non-Fiction",
//       rating: 4.4,
//       pages: 450,
//       year: 2019,
//       description: "A fascinating exploration of the human body and how it works.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 42,
//       title: "Educated",
//       author: "Tara Westover",
//       price: "₹379",
//       category: "Non-Fiction",
//       rating: 4.7,
//       pages: 334,
//       year: 2018,
//       description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 43,
//       title: "Thinking, Fast and Slow",
//       author: "Daniel Kahneman",
//       price: "₹449",
//       category: "Non-Fiction",
//       rating: 4.2,
//       pages: 499,
//       year: 2011,
//       description: "A book about the two systems that drive the way we think.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 44,
//       title: "The Power of Habit",
//       author: "Charles Duhigg",
//       price: "₹359",
//       category: "Non-Fiction",
//       rating: 4.1,
//       pages: 371,
//       year: 2012,
//       description: "Why we do what we do in life and business, and how to change habits.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 45,
//       title: "The Wright Brothers",
//       author: "David McCullough",
//       price: "₹329",
//       category: "Non-Fiction",
//       rating: 4.3,
//       pages: 320,
//       year: 2015,
//       description: "The dramatic story of the brothers who taught the world how to fly.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 46,
//       title: "The Soul of a New Machine",
//       author: "Tracy Kidder",
//       price: "₹299",
//       category: "Non-Fiction",
//       rating: 4.1,
//       pages: 293,
//       year: 1981,
//       description: "A story of the computer revolution and the team that built a new machine.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 47,
//       title: "The Innovators",
//       author: "Walter Isaacson",
//       price: "₹399",
//       category: "Non-Fiction",
//       rating: 4.1,
//       pages: 542,
//       year: 2014,
//       description: "How a group of hackers, geniuses, and geeks created the digital revolution.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 48,
//       title: "The Code Book",
//       author: "Simon Singh",
//       price: "₹349",
//       category: "Non-Fiction",
//       rating: 4.2,
//       pages: 412,
//       year: 1999,
//       description: "The science of secrecy from ancient Egypt to quantum cryptography.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 49,
//       title: "The Man Who Knew Infinity",
//       author: "Robert Kanigel",
//       price: "₹319",
//       category: "Non-Fiction",
//       rating: 4.3,
//       pages: 438,
//       year: 1991,
//       description: "A biography of the mathematical genius Srinivasa Ramanujan.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 50,
//       title: "The Emperor's New Mind",
//       author: "Roger Penrose",
//       price: "₹459",
//       category: "Non-Fiction",
//       rating: 4.1,
//       pages: 602,
//       year: 1989,
//       description: "A book about computers, minds, and the laws of physics.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },

//     // Self-Help (25 books)
//     {
//       id: 51,
//       title: "Atomic Habits",
//       author: "James Clear",
//       price: "₹420",
//       category: "Self-Help",
//       rating: 4.7,
//       pages: 306,
//       year: 2018,
//       description: "Tiny changes, remarkable results - build good habits and break bad ones.",
//       image: "https://gyaanstore.com/cdn/shop/files/230_2581bdfc-eb21-4ecd-b310-4f79a6f8de88.png?v=1701690380&width=600",
//     },
//     {
//       id: 52,
//       title: "The Power of Now",
//       author: "Eckhart Tolle",
//       price: "₹350",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 236,
//       year: 1997,
//       description: "A guide to spiritual enlightenment through living in the present moment.",
//       image: "https://gyaanstore.com/cdn/shop/files/294.png?v=1702565291&width=600",
//     },
//     {
//       id: 53,
//       title: "Ikigai",
//       author: "Héctor García",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 4.0,
//       pages: 208,
//       year: 2016,
//       description: "The Japanese secret to a long and happy life.",
//       image: "https://gyaanstore.com/cdn/shop/files/234_aaa800ec-5535-4c1e-856a-e003ddf332e5.png?v=1701690414&width=600",
//     },
//     {
//       id: 54,
//       title: "Think Like a Monk",
//       author: "Jay Shetty",
//       price: "₹379",
//       category: "Self-Help",
//       rating: 4.3,
//       pages: 352,
//       year: 2020,
//       description: "Train your mind for peace and purpose every day.",
//       image: "https://gyaanstore.com/cdn/shop/files/242_1cc3f062-7c86-42e5-aff5-1272f1885126.png?v=1701690930&width=600",
//     },
//     {
//       id: 55,
//       title: "The Secret",
//       author: "Rhonda Byrne",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 3.9,
//       pages: 198,
//       year: 2006,
//       description: "The law of attraction and how thoughts can change your life.",
//       image: "https://gyaanstore.com/cdn/shop/files/26_61c60eee-2671-42fa-8cc5-dfdf2b27841d.png?v=1701918046&width=600",
//     },
//     {
//       id: 56,
//       title: "Rich Dad Poor Dad",
//       author: "Robert T. Kiyosaki",
//       price: "₹320",
//       category: "Self-Help",
//       rating: 4.1,
//       pages: 207,
//       year: 1997,
//       description: "What the rich teach their kids about money that the poor do not.",
//       image: "https://gyaanstore.com/cdn/shop/files/240_110f4f1b-4f70-40a6-8bab-343e71b4832f.png?v=1701690950&width=600",
//     },
//     {
//       id: 57,
//       title: "The 7 Habits of Highly Effective People",
//       author: "Stephen R. Covey",
//       price: "₹399",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 381,
//       year: 1989,
//       description: "Powerful lessons in personal change and effectiveness.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 58,
//       title: "How to Win Friends and Influence People",
//       author: "Dale Carnegie",
//       price: "₹249",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 288,
//       year: 1936,
//       description: "Timeless advice for successful interpersonal relationships.",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
//     },
//     {
//       id: 59,
//       title: "The Subtle Art of Not Giving a F*ck",
//       author: "Mark Manson",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 3.9,
//       pages: 224,
//       year: 2016,
//       description: "A counterintuitive approach to living a good life.",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
//     },
//     {
//       id: 60,
//       title: "Deep Work",
//       author: "Cal Newport",
//       price: "₹340",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 296,
//       year: 2016,
//       description: "Rules for focused success in a distracted world.",
//       image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
//     },
//     {
//       id: 61,
//       title: "Can't Hurt Me",
//       author: "David Goggins",
//       price: "₹450",
//       category: "Self-Help",
//       rating: 4.8,
//       pages: 364,
//       year: 2018,
//       description: "Master your mind and defy the odds with this powerful memoir.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 62,
//       title: "The Psychology of Money",
//       author: "Morgan Housel",
//       price: "₹399",
//       category: "Self-Help",
//       rating: 4.5,
//       pages: 242,
//       year: 2020,
//       description: "Timeless lessons on wealth, greed, and happiness.",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
//     },
//     {
//       id: 63,
//       title: "The 5 AM Club",
//       author: "Robin Sharma",
//       price: "₹349",
//       category: "Self-Help",
//       rating: 3.9,
//       pages: 336,
//       year: 2018,
//       description: "Own your morning, elevate your life.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 64,
//       title: "Mindset: The New Psychology of Success",
//       author: "Carol S. Dweck",
//       price: "₹329",
//       category: "Self-Help",
//       rating: 4.1,
//       pages: 288,
//       year: 2006,
//       description: "How we can learn to fulfill our potential through growth mindset.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 65,
//       title: "The Four Agreements",
//       author: "Don Miguel Ruiz",
//       price: "₹279",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 160,
//       year: 1997,
//       description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 66,
//       title: "You Are a Badass",
//       author: "Jen Sincero",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 4.0,
//       pages: 256,
//       year: 2013,
//       description: "How to stop doubting your greatness and start living an awesome life.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 67,
//       title: "The Happiness Project",
//       author: "Gretchen Rubin",
//       price: "₹319",
//       category: "Self-Help",
//       rating: 3.9,
//       pages: 320,
//       year: 2009,
//       description: "A year-long experiment in living happier.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 68,
//       title: "Essentialism",
//       author: "Greg McKeown",
//       price: "₹359",
//       category: "Self-Help",
//       rating: 4.1,
//       pages: 260,
//       year: 2014,
//       description: "The disciplined pursuit of less but better.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 69,
//       title: "The Miracle Morning",
//       author: "Hal Elrod",
//       price: "₹289",
//       category: "Self-Help",
//       rating: 4.0,
//       pages: 208,
//       year: 2012,
//       description: "Transform your life before 8AM with this morning routine.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 70,
//       title: "Grit: The Power of Passion and Perseverance",
//       author: "Angela Duckworth",
//       price: "₹379",
//       category: "Self-Help",
//       rating: 4.1,
//       pages: 333,
//       year: 2016,
//       description: "Why passion and resilience are the keys to success.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 71,
//       title: "The Compound Effect",
//       author: "Darren Hardy",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 4.3,
//       pages: 162,
//       year: 2010,
//       description: "How small, consistent actions lead to massive success.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 72,
//       title: "The 10X Rule",
//       author: "Grant Cardone",
//       price: "₹349",
//       category: "Self-Help",
//       rating: 4.3,
//       pages: 272,
//       year: 2010,
//       description: "The only difference between success and failure is effort.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 73,
//       title: "The One Thing",
//       author: "Gary Keller",
//       price: "₹329",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 240,
//       year: 2012,
//       description: "Focus on what matters most for extraordinary results.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 74,
//       title: "The Art of Happiness",
//       author: "Dalai Lama",
//       price: "₹299",
//       category: "Self-Help",
//       rating: 4.2,
//       pages: 336,
//       year: 1998,
//       description: "A handbook for living from the spiritual leader of Tibet.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 75,
//       title: "The 5 Love Languages",
//       author: "Gary Chapman",
//       price: "₹279",
//       category: "Self-Help",
//       rating: 4.3,
//       pages: 208,
//       year: 1992,
//       description: "The secret to love that lasts by understanding how people express love.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },

//     // Classics (25 books)
//     {
//       id: 76,
//       title: "Pride and Prejudice",
//       author: "Jane Austen",
//       price: "₹199",
//       category: "Classics",
//       rating: 4.3,
//       pages: 279,
//       year: 1813,
//       description: "A romantic novel about the spirited Elizabeth Bennet and proud Mr. Darcy.",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
//     },
//     {
//       id: 77,
//       title: "Moby Dick",
//       author: "Herman Melville",
//       price: "₹279",
//       category: "Classics",
//       rating: 3.8,
//       pages: 585,
//       year: 1851,
//       description: "The epic tale of Captain Ahab's obsessive quest for the white whale.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 78,
//       title: "War and Peace",
//       author: "Leo Tolstoy",
//       price: "₹349",
//       category: "Classics",
//       rating: 4.1,
//       pages: 1225,
//       year: 1869,
//       description: "A vast epic centered on Napoleon's invasion of Russia in 1812.",
//       image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
//     },
//     {
//       id: 79,
//       title: "Jane Eyre",
//       author: "Charlotte Brontë",
//       price: "₹229",
//       category: "Classics",
//       rating: 4.2,
//       pages: 532,
//       year: 1847,
//       description: "The story of an orphan girl's journey from hardship to love.",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646",
//     },
//     {
//       id: 80,
//       title: "Crime and Punishment",
//       author: "Fyodor Dostoevsky",
//       price: "₹299",
//       category: "Classics",
//       rating: 4.2,
//       pages: 430,
//       year: 1866,
//       description: "A psychological novel about a poor ex-student's murder of a pawnbroker.",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
//     },
//     {
//       id: 81,
//       title: "Wuthering Heights",
//       author: "Emily Brontë",
//       price: "₹249",
//       category: "Classics",
//       rating: 3.9,
//       pages: 342,
//       year: 1847,
//       description: "A passionate and tragic story of love and revenge on the Yorkshire moors.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 82,
//       title: "The Picture of Dorian Gray",
//       author: "Oscar Wilde",
//       price: "₹199",
//       category: "Classics",
//       rating: 4.1,
//       pages: 254,
//       year: 1890,
//       description: "A novel about a beautiful young man who remains young while his portrait ages.",
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
//     },
//     {
//       id: 83,
//       title: "Anna Karenina",
//       author: "Leo Tolstoy",
//       price: "₹329",
//       category: "Classics",
//       rating: 4.1,
//       pages: 864,
//       year: 1877,
//       description: "A tragic novel about a married aristocrat's affair with a cavalry officer.",
//       image: "https://images.unsplash.com/photo-1544717305-996b815c338c",
//     },
//     {
//       id: 84,
//       title: "Don Quixote",
//       author: "Miguel de Cervantes",
//       price: "₹279",
//       category: "Classics",
//       rating: 3.9,
//       pages: 1072,
//       year: 1605,
//       description: "The adventures of a nobleman who reads too many chivalric romances.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 85,
//       title: "Frankenstein",
//       author: "Mary Shelley",
//       price: "₹199",
//       category: "Classics",
//       rating: 3.8,
//       pages: 280,
//       year: 1818,
//       description: "A scientist's monstrous creation in this pioneering work of science fiction.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 86,
//       title: "Gitanjali",
//       author: "Rabindranath Tagore",
//       price: "₹95",
//       category: "Classics",
//       rating: 4.3,
//       pages: 104,
//       year: 1910,
//       description: "A collection of poems by the Nobel Prize-winning Bengali poet.",
//       image: "https://gyaanstore.com/cdn/shop/files/65_024d0122-fc03-439d-bc4a-87883619a4cf.png?v=1743683318&width=600",
//     },
//     {
//       id: 87,
//       title: "The Odyssey",
//       author: "Homer",
//       price: "₹249",
//       category: "Classics",
//       rating: 3.8,
//       pages: 541,
//       year: -800,
//       description: "The epic poem about Odysseus's long journey home after the Trojan War.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 88,
//       title: "Great Expectations",
//       author: "Charles Dickens",
//       price: "₹229",
//       category: "Classics",
//       rating: 3.8,
//       pages: 505,
//       year: 1861,
//       description: "The story of Pip, an orphan who dreams of becoming a gentleman.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 89,
//       title: "Little Women",
//       author: "Louisa May Alcott",
//       price: "₹199",
//       category: "Classics",
//       rating: 4.1,
//       pages: 449,
//       year: 1868,
//       description: "The story of the four March sisters growing up in Civil War-era America.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 90,
//       title: "Dracula",
//       author: "Bram Stoker",
//       price: "₹259",
//       category: "Classics",
//       rating: 4.0,
//       pages: 418,
//       year: 1897,
//       description: "The classic vampire tale that introduced Count Dracula to the world.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 91,
//       title: "The Count of Monte Cristo",
//       author: "Alexandre Dumas",
//       price: "₹299",
//       category: "Classics",
//       rating: 4.3,
//       pages: 1276,
//       year: 1844,
//       description: "A tale of betrayal, revenge, and redemption set in post-Napoleonic France.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 92,
//       title: "Les Misérables",
//       author: "Victor Hugo",
//       price: "₹349",
//       category: "Classics",
//       rating: 4.2,
//       pages: 1463,
//       year: 1862,
//       description: "The story of ex-convict Jean Valjean and his quest for redemption.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 93,
//       title: "The Brothers Karamazov",
//       author: "Fyodor Dostoevsky",
//       price: "₹379",
//       category: "Classics",
//       rating: 4.3,
//       pages: 796,
//       year: 1880,
//       description: "A passionate philosophical novel about faith, doubt, and morality.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 94,
//       title: "Madame Bovary",
//       author: "Gustave Flaubert",
//       price: "₹249",
//       category: "Classics",
//       rating: 3.7,
//       pages: 329,
//       year: 1856,
//       description: "The story of a doctor's wife whose romantic illusions lead to tragedy.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 95,
//       title: "The Scarlet Letter",
//       author: "Nathaniel Hawthorne",
//       price: "₹219",
//       category: "Classics",
//       rating: 3.4,
//       pages: 238,
//       year: 1850,
//       description: "A woman bears an illegitimate child in Puritan New England.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//     {
//       id: 96,
//       title: "The Divine Comedy",
//       author: "Dante Alighieri",
//       price: "₹279",
//       category: "Classics",
//       rating: 4.0,
//       pages: 432,
//       year: 1320,
//       description: "An epic poem describing a journey through Hell, Purgatory, and Paradise.",
//       image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
//     },
//     {
//       id: 97,
//       title: "The Iliad",
//       author: "Homer",
//       price: "₹269",
//       category: "Classics",
//       rating: 3.9,
//       pages: 683,
//       year: -800,
//       description: "The epic poem about the Trojan War and the rage of Achilles.",
//       image: "https://images.unsplash.com/photo-1573164574511-73c773193279",
//     },
//     {
//       id: 98,
//       title: "The Adventures of Huckleberry Finn",
//       author: "Mark Twain",
//       price: "₹199",
//       category: "Classics",
//       rating: 3.8,
//       pages: 366,
//       year: 1884,
//       description: "A boy's journey down the Mississippi River with a runaway slave.",
//       image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b",
//     },
//     {
//       id: 99,
//       title: "The Canterbury Tales",
//       author: "Geoffrey Chaucer",
//       price: "₹239",
//       category: "Classics",
//       rating: 3.5,
//       pages: 504,
//       year: 1400,
//       description: "A collection of stories told by pilgrims traveling to Canterbury.",
//       image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
//     },
//     {
//       id: 100,
//       title: "The Stranger",
//       author: "Albert Camus",
//       price: "₹189",
//       category: "Classics",
//       rating: 3.9,
//       pages: 123,
//       year: 1942,
//       description: "A philosophical novel about alienation and the absurdity of life.",
//       image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
//     },
//   ];

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.category}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="text-center py-6 bg-amber-200 text-black">
//         <h2 className="text-4xl font-bold mb-4">Browse Our Collection</h2>
//         <p className="text-lg">Find your next favorite book from our wide collection.</p>
//       </header>

//       <div className="flex justify-center my-6">
//         <input
//           type="text"
//           placeholder="Search by title, author, or category..."
//           className="w-11/12 max-w-xl px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="container mx-auto p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Available Books</h2>

//         {filteredBooks.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">No books found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
//             {filteredBooks.map((book) => (
//               <FlipCard
//                 key={book.id}
//                 frontContent={
//                   <div className="bg-gray-800 p-1 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
//                     <img
//                       src={book.image}
//                       alt={book.title}
//                       className="w-full h-52 object-contain rounded-md mb-0"
//                     />
//                     <div className="text-center">
//                       <h3 className="text-lg text-white font-semibold line-clamp-2">{book.title}</h3>
//                       <p className="text-white text-sm">{book.author}</p>
//                       <p className="text-lime-300 font-bold mt-1">{book.price}</p>
//                       <span className="inline-block text-xs bg-amber-100 px-2 py-1 rounded-full mt-1">
//                         {book.category}
//                       </span>
//                     </div>
//                   </div>
//                 }
//                 backContent={
//                   <div className="bg-amber-50 p-4 rounded-lg shadow-lg flex flex-col h-full">
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-semibold mb-2 line-clamp-2">{book.title}</h3>
//                       <p className="text-gray-600 mb-1">
//                         {book.category} by {book.author}
//                       </p>
//                       <div className="flex items-center mb-2">
//                         <span className="text-yellow-500">★ {book.rating}</span>
//                         <span className="text-gray-500 text-sm ml-2">({book.pages} pages)</span>
//                       </div>
//                       <p className="text-blue-600 font-bold mb-2">{book.price}</p>
//                       <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.description}</p>
//                       <div className="flex justify-between text-xs text-gray-500 mb-3">
//                         <span>Published: {book.year}</span>
//                         <span>{book.category}</span>
//                       </div>
//                     </div>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors w-full">
//                       Add to Cart
//                     </button>
//                   </div>
//                 }
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .flip-card {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           text-align: center;
//           transition: transform 0.6s;
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//           border-radius: 0.5rem;
//           overflow: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Shop;















// import React, { useState } from "react";
// import { books } from "./booksData";

// const FlipCard = ({ frontContent, backContent }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div
//       className="flip-card w-full h-80 cursor-pointer"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div
//         className={`flip-card-inner w-full h-full relative transition-transform duration-500 ${
//           flipped ? "rotate-y-180" : ""
//         }`}
//       >
//         <div className="flip-card-front absolute w-full h-full">
//           {frontContent}
//         </div>
//         <div className="flip-card-back absolute w-full h-full transform rotate-y-180">
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Shop = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.category}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-amber-50">
//       <header className="text-center py-6 bg-amber-200 text-black">
//         <h2 className="text-4xl font-bold mb-4">Browse Our Collection</h2>
//         <p className="text-lg">Find your next favorite book from our wide collection.</p>
//       </header>

//       <div className="flex justify-center my-6">
//         <input
//           type="text"
//           placeholder="Search by title, author, or category..."
//           className="w-11/12 max-w-xl px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="container mx-auto p-8">
//         <h2 className="text-3xl font-bold text-center mb-8">Available Books</h2>

//         {filteredBooks.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">No books found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
//             {filteredBooks.map((book) => (
//               <FlipCard
//                 key={book.id}
//                 frontContent={
//                   <div className="bg-gray-800 p-1 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
//                     <img
//                       src={book.image}
//                       alt={book.title}
//                       className="w-full h-52 object-contain rounded-md mb-0"
//                     />
//                     <div className="text-center">
//                       <h3 className="text-lg text-white font-semibold line-clamp-2">{book.title}</h3>
//                       <p className="text-white text-sm">{book.author}</p>
//                       <p className="text-lime-300 font-bold mt-1">{book.price}</p>
//                       <span className="inline-block text-xs bg-amber-100 px-2 py-1 rounded-full mt-1">
//                         {book.category}
//                       </span>
//                     </div>
//                   </div>
//                 }
//                 backContent={
//                   <div className="bg-amber-50 p-4 rounded-lg shadow-lg flex flex-col h-full">
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-semibold mb-2 line-clamp-2">{book.title}</h3>
//                       <p className="text-gray-600 mb-1">
//                         {book.category} by {book.author}
//                       </p>
//                       <div className="flex items-center mb-2">
//                         <span className="text-yellow-500">★ {book.rating}</span>
//                         <span className="text-gray-500 text-sm ml-2">({book.pages} pages)</span>
//                       </div>
//                       <p className="text-blue-600 font-bold mb-2">{book.price}</p>
//                       <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.description}</p>
//                       <div className="flex justify-between text-xs text-gray-500 mb-3">
//                         <span>Published: {book.year}</span>
//                         <span>{book.category}</span>
//                       </div>
//                     </div>
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors w-full">
//                       Add to Cart
//                     </button>
//                   </div>
//                 }
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .flip-card {
//           perspective: 1000px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           text-align: center;
//           transition: transform 0.6s;
//           transform-style: preserve-3d;
//         }
//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           -webkit-backface-visibility: hidden;
//           backface-visibility: hidden;
//           border-radius: 0.5rem;
//           overflow: hidden;
//         }
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Shop;












import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { books } from "./booksData";
import Header from "../components/Header";

const TiltedCard = ({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });
  const rotateY = useSpring(useMotionValue(0), {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });
  const scale = useSpring(1, {
    damping: 30,
    stiffness: 100,
    mass: 2,
  });
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;
  
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;
  
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
  
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  
    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }
  

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute bottom-49 right-2 object-cover rounded-[6px] will-change-transform [transform:translateZ(0)] bg-red-500"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
};

const FlipCard = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-80 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`flip-card-inner w-full h-full relative transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="flip-card-front absolute w-full h-full">
          {frontContent}
        </div>
        <div className="flip-card-back absolute w-full h-full transform rotate-y-180">
          {backContent}
        </div>
      </div>
    </div>
  );
};

const Shop = () => {




  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("flip"); // 'flip' or 'tilt'

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.category}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    // <div className="min-h-screen bg-amber-400">
    <div className="min-h-screen bg-gray-800">
      <div><Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div>
      <h2 className="mb-12"></h2>
      <header className="text-center py-9 bg-amber-600 text-black">
        <h2 className="text-4xl font-bold text-white mb-6">Browse Our Collection</h2>
        <p className="text-lg">Find your next favorite book from our wide collection.</p>
      </header>

      <div className=" flex justify-center my-6 ">
        <input
          type="text"
          placeholder="Search by title, author, or category..."
          className="w-11/12 max-w-xl px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3 bg-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex justify-center mb-16">
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode("flip")}
            className={`px-4 py-2 rounded-md ${viewMode === "flip" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Flip Cards
          </button>
          <button
            onClick={() => setViewMode("tilt")}
            className={`px-4 py-2 rounded-md ${viewMode === "tilt" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            Tilt Cards
          </button>
        </div>
      </div>

      <div className="container mx-auto p-20">
        <h2 className="text-2xl font-bold text-center mb-8">Available Books</h2>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No books found.</p>
        ) : viewMode === "flip" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
            {filteredBooks.map((book) => (
              <FlipCard
                key={book.id}
                frontContent={
                  <div className="bg-gray-800 p-1 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-52 object-contain rounded-md mb-0"
                    />
                    <div className="text-center">
                      <h3 className="text-lg text-white font-semibold line-clamp-2">{book.title}</h3>
                      <p className="text-white text-sm">{book.author}</p>
                      <p className="text-lime-300 font-bold mt-1">{book.price}</p>
                      <span className="inline-block text-xs bg-amber-100 px-2 py-1 rounded-full mt-1">
                        {book.category}
                      </span>
                    </div>
                  </div>
                }
                backContent={
                  <div className="bg-amber-50 p-4 rounded-lg shadow-lg flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">{book.title}</h3>
                      <p className="text-gray-black mb-1">
                        {book.category} by {book.author}
                      </p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-500">★ {book.rating}</span>
                        <span className="text-gray-500 text-sm ml-2">({book.pages} pages)</span>
                      </div>
                      <p className="text-blue-600 font-bold mb-2">{book.price}</p>
                      <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.description}</p>
                      <div className="flex justify-between text-xs text-gray-500 mb-3">
                        <span>Published: {book.year}</span>
                        <span>{book.category}</span>
                      </div>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors w-full">
                      Add to Cart
                    </button>
                  </div>
                }
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-25">
            {filteredBooks.map((book) => (
              <TiltedCard
                key={book.id}
                imageSrc={book.image}
                altText={book.title}
                captionText={`${book.title} by ${book.author}`}
                containerHeight="300px"
                containerWidth="110%"
                imageHeight="300px"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="p-4 text-amber-50 bg-gray-900 bg-opacity-20 w-full h-full rounded-[40px] flex flex-col justify-end">
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="text-sm">{book.author}</p>
                    <p className="text-red-600 font-bold">{book.price}</p>
                    <button className="mt-2 bg-black hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out">
                      ADD TO CART
                    </button>
                  </div>
                }
              />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Shop;













// import React, { useState, useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";
// import { books } from "./booksData"; // Your booksData.js file
// import Header from "../components/Header"; // Your Header component

// // TiltedCard Component
// const TiltedCard = ({
//   imageSrc,
//   altText = "Tilted card image",
//   captionText = "",
//   containerHeight = "300px",
//   containerWidth = "100%",
//   imageHeight = "300px",
//   imageWidth = "300px",
//   scaleOnHover = 1.1,
//   rotateAmplitude = 14,
//   showMobileWarning = true,
//   showTooltip = true,
//   overlayContent = null,
//   displayOverlayContent = false,
// }) => {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const rotateX = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });
//   const rotateY = useSpring(useMotionValue(0), { damping: 30, stiffness: 100, mass: 2 });
//   const scale = useSpring(1, { damping: 30, stiffness: 100, mass: 2 });
//   const opacity = useSpring(0);
//   const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
//   const [lastY, setLastY] = useState(0);

//   function handleMouse(e) {
//     if (!ref.current) return;
//     const rect = ref.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const offsetX = e.clientX - centerX;
//     const offsetY = e.clientY - centerY;

//     const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
//     const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

//     rotateX.set(rotationX);
//     rotateY.set(rotationY);

//     x.set(e.clientX - centerX);
//     y.set(e.clientY - centerY);

//     const velocityY = offsetY - lastY;
//     rotateFigcaption.set(-velocityY * 0.6);
//     setLastY(offsetY);
//   }

//   function handleMouseEnter() {
//     scale.set(scaleOnHover);
//     opacity.set(1);
//   }

//   function handleMouseLeave() {
//     opacity.set(0);
//     scale.set(1);
//     rotateX.set(0);
//     rotateY.set(0);
//     rotateFigcaption.set(0);
//   }

//   return (
//     <figure
//       ref={ref}
//       className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
//       style={{ height: containerHeight, width: containerWidth }}
//       onMouseMove={handleMouse}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {showMobileWarning && (
//         <div className="absolute top-4 text-center text-sm block sm:hidden">
//           This effect is not optimized for mobile. Check on desktop.
//         </div>
//       )}
//       <motion.div
//         className="relative [transform-style:preserve-3d]"
//         style={{ width: imageWidth, height: imageHeight, rotateX, rotateY, scale }}
//       >
//         <motion.img
//           src={imageSrc}
//           alt={altText}
//           className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
//           style={{ width: imageWidth, height: imageHeight }}
//         />
//         {displayOverlayContent && overlayContent && (
//           <motion.div className="absolute top-60 left-20 z-[2] will-change-transform [transform:translateZ(2px)]">
//             {overlayContent}
//           </motion.div>
//         )}
//       </motion.div>

//       {showTooltip && (
//         <motion.figcaption
//           className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[14px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
//           style={{ x, y, opacity, rotate: rotateFigcaption }}
//         >
//           {captionText}
//         </motion.figcaption>
//       )}
//     </figure>
//   );
// };

// // FlipCard Component
// const FlipCard = ({ frontContent, backContent }) => {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div
//       className="flip-card w-full h-80 cursor-pointer"
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div
//         className={`flip-card-inner w-full h-full relative transition-transform duration-500 ${
//           flipped ? "rotate-y-180" : ""
//         }`}
//       >
//         <div className="flip-card-front absolute w-full h-full backface-hidden">
//           {frontContent}
//         </div>
//         <div className="flip-card-back absolute w-full h-full transform rotate-y-180 backface-hidden">
//           {backContent}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Shop Component
// const Shop = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [viewMode, setViewMode] = useState("flip"); // 'flip' or 'tilt'

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.category}`
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-amber-400">
//       <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//       <header className="text-center py-10 bg-amber-600 text-black">
//         <h2 className="text-4xl font-bold text-white mb-4">Browse Our Collection</h2>
//         <p className="text-lg">Find your next favorite book from our wide collection.</p>
//       </header>

//       <div className="flex justify-center my-6">
//         <input
//           type="text"
//           placeholder="Search by title, author, or category..."
//           className="w-11/12 max-w-xl px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       <div className="flex justify-center mb-6">
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setViewMode("flip")}
//             className={`px-4 py-2 rounded-md ${
//               viewMode === "flip" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             Flip Cards
//           </button>
//           <button
//             onClick={() => setViewMode("tilt")}
//             className={`px-4 py-2 rounded-md ${
//               viewMode === "tilt" ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//           >
//             Tilt Cards
//           </button>
//         </div>
//       </div>

//       <div className="container mx-auto p-8">
//         <h2 className="text-2xl font-bold text-center mb-8">Available Books</h2>

//         {filteredBooks.length === 0 ? (
//           <p className="text-center text-gray-600 text-lg">No books found.</p>
//         ) : viewMode === "flip" ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
//             {filteredBooks.map((book) => (
//               <FlipCard
//                 key={book.id}
//                 frontContent={
//                   <div className="bg-gray-800 p-2 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
//                     <img
//                       src={book.image}
//                       alt={book.title}
//                       className="w-full h-52 object-contain rounded-md"
//                     />
//                     <div className="text-center mt-2">
//                       <h3 className="text-lg text-white font-semibold line-clamp-2">{book.title}</h3>
//                       <p className="text-white text-sm">{book.author}</p>
//                       <p className="text-lime-300 font-bold mt-1">{book.price}</p>
//                       <span className="inline-block text-xs bg-amber-100 px-2 py-1 rounded-full mt-1">
//                         {book.category}
//                       </span>
//                     </div>
//                   </div>
//                 }
//                 backContent={
//                   <div className="bg-amber-50 p-4 rounded-lg shadow-lg flex flex-col h-full">
//                     <div className="flex-grow">
//                       <h3 className="text-lg font-semibold mb-2 line-clamp-2">{book.title}</h3>
//                       <p className="text-gray-600 mb-1">
//                         {book.category} by {book.author}
//                       </p>
//                       <div className="flex items-center mb-2">
//                         <span className="text-yellow-500">★ {book.rating}</span>
//                         <span className="text-gray-500 text-sm ml-2">({book.pages} pages)</span>
//                       </div>
//                       <p className="text-blue-600 font-bold mb-2">{book.price}</p>
//                       <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.description}</p>
//                       <div className="flex justify-between text-xs text-gray-500">
//                         <span>Published: {book.year}</span>
//                       </div>
//                     </div>
//                   </div>
//                 }
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-17">
            
//             {filteredBooks.map((book) => (
              
//               <TiltedCard
//                 key={book.id}
//                 imageSrc={book.image}
//                 altText={book.title}
//                 captionText={book.title}
//                 overlayContent={
//                   <div className="text-white p-2">
//                     <h3 className="font-bold">{book.title}</h3>
//                     <p className="text-sm">{book.author}</p>
//                   </div>
//                 }
//                 displayOverlayContent={true}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;









