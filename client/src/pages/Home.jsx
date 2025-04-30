
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";


// import image1 from "../assets/image1.png";
// import FictionImg from "../assets/fictionimage.png";
// import NonFictionImg from "../assets/image2.png";
// import ScienceImg from "../assets/scienceimage.png";
// import FantasyImg from "../assets/fantasyimage1.png";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import BounceCards from "../pages/BounceCards";

// const Home = () => {

//   const navigate = useNavigate();

//   const [bookOffers, setBookOffers] = useState([]);
//   const [timeLeft, setTimeLeft] = useState(3600);
//   const [searchQuery, setSearchQuery] = useState("");
//   const textLines = [
//     "Welcome to Our Bookstore!",
//     "Find Your Next Great Read!",
//     "Discover Amazing Books!",
//     "Sell Your Books Easily!",
//     "Join Our Reading Community!",
//   ];
//   const [currentText, setCurrentText] = useState(textLines[0]);

//   useEffect(() => {
//     fetchBookOffers();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       index = (index + 1) % textLines.length;
//       setCurrentText(textLines[index]);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const fetchBookOffers = () => {
//     setBookOffers([
//       { title: "The Alchemist", discount: "20% Off" },
//       { title: "Harry Potter", discount: "15% Off" },
//       { title: "The Great Gatsby", discount: "30% Off" },
//       { title: "1984", discount: "25% Off" },
//     ]);
//   };

//   const specialDeals = [
//     {
//       title: "Atomic Habits",
//       discount: "30%",
//       image: "https://gyaanstore.com/cdn/shop/files/230_2581bdfc-eb21-4ecd-b310-4f79a6f8de88.png?v=1701690380&width=360",
//       originalPrice: 599, // Original price
//     },
//     {
//       title: "The Psychology of Money",
//       discount: "25%",
//       image: "https://gyaanstore.com/cdn/shop/files/46_74876b1f-04fc-46b9-84c7-b53670e65295.png?v=1702379503&width=360",
//       originalPrice: 499,
//     },
//     {
//       title: "Ikigai",
//       discount: "35%",
//       image: "https://gyaanstore.com/cdn/shop/files/234_aaa800ec-5535-4c1e-856a-e003ddf332e5.png?v=1701690414&width=713",
//       originalPrice: 799,
//     },
//     {
//       title: "Rich Dad Poor Dad",
//       discount: "40%",
//       image: "https://gyaanstore.com/cdn/shop/files/240_110f4f1b-4f70-40a6-8bab-343e71b4832f.png?v=1701690950&width=360",
//       originalPrice: 450,
//     },
//     {
//       title: "Do It Today",
//       discount: "30%",
//       image: "https://gyaanstore.com/cdn/shop/files/291.png?v=1702565263&width=360",
//       originalPrice: 399,
//     },
//     {
//       title: "Think Like a Monk",
//       discount: "28%",
//       image: "https://gyaanstore.com/cdn/shop/files/242_1cc3f062-7c86-42e5-aff5-1272f1885126.png?v=1701690930&width=360",
//       originalPrice: 399,
//     },
//     {
//       title: "India, that is Bharat",
//       discount: "20%",
//       image: "https://gyaanstore.com/cdn/shop/files/11_2c616bf8-d4a1-4aca-b92c-c24ac6b6f7a4.png?v=1701862073&width=360",
//       originalPrice: 599,
//     },
//     {
//       title: "Immediate Action",
//       discount: "32%",
//       image: "https://gyaanstore.com/cdn/shop/files/books_photos.png?v=1722283460&width=713",
//       originalPrice: 699,
//     },
//     {
//       title: "The 5 AM Club",
//       discount: "35%",
//       image: "https://gyaanstore.com/cdn/shop/files/36_ce5e3d2f-e721-4633-8f1d-82ba3fc6a385.png?v=1701863889&width=360",
//       originalPrice: 650,
//     },
//     {
//       title: "Deep Work",
//       discount: "27%",
//       image: "https://gyaanstore.com/cdn/shop/files/45_2e2a7539-497a-45e2-9eed-f8d248340b91.png?v=1702738062&width=360",
//       originalPrice: 799,
//     },
//   ];
  
//   const calculateDiscountedPrice = (originalPrice, discount) => {
//     const discountAmount = (parseFloat(discount) / 100) * originalPrice;
//     return originalPrice - discountAmount;
//   };


//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   const bounceImages = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsoQOL2R-Mc1qRdbZioGiOGXesFp-5kVFjay59TJu_XbriDX0QA_ZPcp53lurD_v07GA&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD5fIjZ0xLV-7YLD8igqMPzPmAZJ0dwhbJA&s",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrt93SQMOaRy1c0xv_ldtjs9IMe6XxnJS9FQ&s",
//     "https://mpd-biblio-covers.imgix.net/9781250074478.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD790lTBwfvUYUQPqpp7ddq8hW8pznzXuoGVMy-2ks7WM9StYPnYNjVFjAI1E4HYF8sWc&usqp=CAU",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//       <header className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center filter blur-[3px] scale-105"
//           style={{ backgroundImage: `url(${image1})`, zIndex: 0 }}
//         ></div>

//         {/* foreign containt */}
//         <div className="relative z-10 text-center px-4">
//           <h1
//             className="text-4xl md:text-7xl font-bold transition-all duration-500"
//             style={{ fontFamily: "'Poiret One', cursive" }}
//           >
//             {currentText}
//           </h1>
//         </div>
//       </header>

//       <section className="py-10 w-full bg-amber-50">
//         <h2 className="text-3xl font-bold text-center mb-10">Popular Books for You</h2>
//         <div className="flex justify-center">
//           <BounceCards
//             images={bounceImages}
//             containerWidth={280}
//             containerHeight={400}
//             enableHover={true}
//           />
//         </div>
//       </section>

// <section className="p-10 bg-amber-100 animate-fade-in-down">
//   <h2 className="text-4xl font-extrabold text-center text-black mb-4 tracking-tight">
//     Limited-Time Offers on Books
//   </h2>

//   <div className="text-center mb-12">
//   <div className="inline-block px-6 py-2 bg-rose-600 shadow-md" style={{ borderRadius: "50px" }}>
//     <p className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
//       ⏳ Hurry! Time Left: <span className="font-bold text-green-300">{formatTime(timeLeft)}</span>
//     </p>
//     <p className="text-lg text-white mt-2">
//       <span className="font-medium">Offer Expiry Date:</span> {new Date().toLocaleDateString()}
//     </p>
//   </div>
// </div>


//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-17 mt-6">
//     {specialDeals.map((deal, index) => {
//       const discountedPrice = calculateDiscountedPrice(deal.originalPrice, deal.discount);
//       return (
//         <div
//           key={index}
//           className="relative bg-stone-100 shadow-lg rounded-xl p-3 text-center border border-rose-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:ring-3 hover:ring-green-600"
//           style={{ width: "250px", height: "390px" }} // Adjusted width and height for a book-like size
//         >
//           <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-2 rounded-full">
//             {deal.discount} OFF
//           </span>

//           <img
//             src={deal.image}
//             alt={`Cover of ${deal.title}`}
//             className="object-cover rounded-md mb-4 mx-auto"
//             style={{ width: "240px", height: "213px" }} // Adjusted image size to look more realistic
//           />

//           <h3 className="text-xl font-bold text-gray-800 mb-1">{deal.title}</h3>

//           <p className="text-sm text-gray-500 mb-1">by {deal.author || "Unknown"}</p>
//           <p className="text-lg text-gray-700 font-medium mb-2">
//             ₹{discountedPrice.toFixed(2)}
//             <span className="line-through text-sm text-gray-500 ml-2">₹{deal.originalPrice}</span>
//           </p>

//           <button className="mt-0 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow hover:from-blue-600 hover:to-green-600 transition-colors duration-200">
//             Buy Now 🚀
//           </button>
//         </div>
//       );
//     })}
//   </div>
// </section>





//       {/* categories */}
//       <section className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 bg-amber-50">
//         {[{ name: "Fiction", img: FictionImg }, { name: "Non-Fiction", img: NonFictionImg }, { name: "Science", img: ScienceImg }, { name: "Fantasy", img: FantasyImg }].map(
//           (category, index) => (
//             <div
//               key={index}
//               className="relative shadow-md rounded-lg text-center overflow-hidden cursor-pointer group"
//               style={{ height: "120px" }}
//               onClick={() => navigate(`/shop?category=${category.name}`)}
//             >
//               <div
//                 className="absolute inset-0 bg-cover bg-center filter blur-[0.6px] scale-110 transition-all duration-300 group-hover:scale-125"
//                 style={{ backgroundImage: `url(${category.img})` }}
//               ></div>
//               <div className="relative z-10 flex items-center justify-center h-full">
//                 <h3 className="text-3xl text-white font-bold">{category.name}</h3>
//               </div>
//             </div>
//           )
//         )}
//       </section>



//        {/* Featured Books Carousel */}
//        <section className="p-6 bg-amber-50">
//   <h2 className="text-3xl font-bold text-center mb-10">Featured Books</h2>
//   <Slider
//     dots={true}
//     infinite={true}
//     speed={500}
//     slidesToShow={5}
//     slidesToScroll={2}
//     autoplay={true}
//     autoplaySpeed={3000}
//     responsive={[
//       { breakpoint: 1024, settings: { slidesToShow: 4 } },
//       { breakpoint: 768, settings: { slidesToShow: 3 } },
//       { breakpoint: 480, settings: { slidesToShow: 2 } },
//     ]}
//   >
//     {[
//       {
//         title: "The Alchemist",
//         author: "Paulo Coelho",
//         img: "https://gyaanstore.com/cdn/shop/files/79_d65ac26c-c257-4756-9b57-41b7d00dacd4.png?v=1701858054&width=360",
//         rating: 4,
//         description: "A mystical story about following your dreams.",
//       },
//       {
//         title: "Harry Potter",
//         author: "J.K. Rowling",
//         img: "https://gyaanstore.com/cdn/shop/files/46_07caa0a2-c762-4f66-ac44-c22d04a4e580.png?v=1702907968&width=360",
//         rating: 5,
//         description: "A young wizard discovers his magical destiny.",
//       },
//       {
//         title: "The Lord of the Rings",
//         author: "J.R.R. Tolkien",
//         img: "https://gyaanstore.com/cdn/shop/files/94_9b6e0c03-1479-4afd-a519-44d04d9f00ff.png?v=1699265883&width=360",
//         rating: 5,
//         description: "An epic journey to destroy a powerful ring.",
//       },
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         img: "https://gyaanstore.com/cdn/shop/files/214_9132581e-602b-4b7a-b7f8-e51dd8c11462.png?v=1742736088&width=360",
//         rating: 4,
//         description: "A tale of wealth, love, and the American dream.",
//       },
//       {
//         title: "1984",
//         author: "George Orwell",
//         img: "https://gyaanstore.com/cdn/shop/files/1_c00ffa39-4614-43f6-bd1f-4d04b096fcdc.png?v=1742117275&width=360",
//         rating: 4,
//         description: "A dystopian world under constant surveillance.",
//       },
//       {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         img: "https://gyaanstore.com/cdn/shop/files/159_ecfcc64f-1d39-4e12-b8a8-4caf213c7d61.png?v=1742545309&width=360",
//         rating: 4,
//         description: "A classic love story with social commentary.",
//       },
//       {
//         title: "The Book Thief",
//         author: "Markus Zusak",
//         img: "https://gyaanstore.com/cdn/shop/files/144_70fb03b3-2587-4702-b89a-6641153653ac.png?v=1701767156&width=360",
//         rating: 5,
//         description: "A story of courage and books in Nazi Germany.",
//       },
//       {
//         title: "Sapiens",
//         author: "Yuval Noah Harari",
//         img: "https://gyaanstore.com/cdn/shop/files/223_6f5f1366-21a9-49a7-9c76-a834d90d28a9.png?v=1701687997&width=360",
//         rating: 4,
//         description: "A brief history of humankind.",
//       },
//       {
//         title: "ASURA: Tale of the Vanquished ",
//         author: "Anand Neelakantan",
//         img: "https://gyaanstore.com/cdn/shop/files/asurabook.png?v=1742200468&width=360",
//         rating: 3,
//         description: "A teenager’s struggles with society.",
//       },
//       {
//         title: "The Psychology of Money",
//         author: "Morgan Housel",
//         img: "https://gyaanstore.com/cdn/shop/files/46_74876b1f-04fc-46b9-84c7-b53670e65295.png?v=1702379503&width=713g",
//         rating: 4,
//         description: "A love story between two cancer patients.",
//       },
//       {
//         title: "Atomic Habits",
//         author: "James Clear",
//         img: "https://gyaanstore.com/cdn/shop/files/230_2581bdfc-eb21-4ecd-b310-4f79a6f8de88.png?v=1701690380&width=360",
//         rating: 5,
//         description: "Tiny changes, remarkable results.",
//       },
//     ].map((book, index) => (
//       <div key={index} className="px-4">
//         <div className="relative bg-rose-100 rounded-lg shadow-md text-center hover:shadow-lg transition w-full max-w-[250px] mx-auto group">
//           <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-rose-100 text-sm">
//             ❤️
//           </button>
//           <img
//             src={book.img}
//             alt={book.title}
//             className="h-60 sm:h-70 md:h-75 object-cover rounded-t-lg w-full"
//           />
//           <div className="p-2">
//             <h3 className="text-sm font-semibold truncate">{book.title}</h3>
//             <p className="text-gray-600 text-xs truncate">{book.author}</p>
//             <div className="flex justify-center items-center text-yellow-500 text-xs mt-1">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <span key={i}>{i < book.rating ? "★" : "☆"}</span>
//               ))}
//             </div>
//             <p className="text-xs text-gray-500 mt-1 hidden group-hover:block">
//               {book.description}
//             </p>
//             <button className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-full text-xs hover:bg-rose-600 transition">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </Slider>
// </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RotatingText from "./RotatingText";
import { motion } from "framer-motion";

import image1 from "../assets/image1.png";
import FictionImg from "../assets/fictionimage.png";
import NonFictionImg from "../assets/image2.png";
import ScienceImg from "../assets/scienceimage.png";
import FantasyImg from "../assets/fantasyimage1.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BounceCards from "../pages/BounceCards";

const Home = () => {
  const navigate = useNavigate();

  const [bookOffers, setBookOffers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [searchQuery, setSearchQuery] = useState("");
  
  const textLines = [
    "Welcome to Our Bookstore!",
    "Find Your Next Great Read!",
    "Discover Amazing Books!",
    "Sell Your Books Easily!",
    "Join Our Reading Community!",
  ];

  useEffect(() => {
    fetchBookOffers();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchBookOffers = () => {
    setBookOffers([
      { title: "The Alchemist", discount: "20% Off" },
      { title: "Harry Potter", discount: "15% Off" },
      { title: "The Great Gatsby", discount: "30% Off" },
      { title: "1984", discount: "25% Off" },
    ]);
  };

  const specialDeals = [
    {
      title: "Atomic Habits",
      discount: "30%",
      image: "https://gyaanstore.com/cdn/shop/files/230_2581bdfc-eb21-4ecd-b310-4f79a6f8de88.png?v=1701690380&width=360",
      originalPrice: 599,
    },
    {
      title: "The Psychology of Money",
      discount: "25%",
      image: "https://gyaanstore.com/cdn/shop/files/46_74876b1f-04fc-46b9-84c7-b53670e65295.png?v=1702379503&width=360",
      originalPrice: 499,
    },
    {
      title: "Ikigai",
      discount: "35%",
      image: "https://gyaanstore.com/cdn/shop/files/234_aaa800ec-5535-4c1e-856a-e003ddf332e5.png?v=1701690414&width=713",
      originalPrice: 799,
    },
    {
      title: "Rich Dad Poor Dad",
      discount: "40%",
      image: "https://gyaanstore.com/cdn/shop/files/240_110f4f1b-4f70-40a6-8bab-343e71b4832f.png?v=1701690950&width=360",
      originalPrice: 450,
    },
    {
      title: "Do It Today",
      discount: "30%",
      image: "https://gyaanstore.com/cdn/shop/files/291.png?v=1702565263&width=360",
      originalPrice: 399,
    },
    {
      title: "Think Like a Monk",
      discount: "28%",
      image: "https://gyaanstore.com/cdn/shop/files/242_1cc3f062-7c86-42e5-aff5-1272f1885126.png?v=1701690930&width=360",
      originalPrice: 399,
    },
    {
      title: "India, that is Bharat",
      discount: "20%",
      image: "https://gyaanstore.com/cdn/shop/files/11_2c616bf8-d4a1-4aca-b92c-c24ac6b6f7a4.png?v=1701862073&width=360",
      originalPrice: 599,
    },
    {
      title: "Immediate Action",
      discount: "32%",
      image: "https://gyaanstore.com/cdn/shop/files/books_photos.png?v=1722283460&width=713",
      originalPrice: 699,
    },
    {
      title: "The 5 AM Club",
      discount: "35%",
      image: "https://gyaanstore.com/cdn/shop/files/36_ce5e3d2f-e721-4633-8f1d-82ba3fc6a385.png?v=1701863889&width=360",
      originalPrice: 650,
    },
    {
      title: "Deep Work",
      discount: "27%",
      image: "https://gyaanstore.com/cdn/shop/files/45_2e2a7539-497a-45e2-9eed-f8d248340b91.png?v=1702738062&width=360",
      originalPrice: 799,
    },
  ];
  
  const calculateDiscountedPrice = (originalPrice, discount) => {
    const discountAmount = (parseFloat(discount) / 100) * originalPrice;
    return originalPrice - discountAmount;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const bounceImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsoQOL2R-Mc1qRdbZioGiOGXesFp-5kVFjay59TJu_XbriDX0QA_ZPcp53lurD_v07GA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhD5fIjZ0xLV-7YLD8igqMPzPmAZJ0dwhbJA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrt93SQMOaRy1c0xv_ldtjs9IMe6XxnJS9FQ&s",
    "https://mpd-biblio-covers.imgix.net/9781250074478.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD790lTBwfvUYUQPqpp7ddq8hW8pznzXuoGVMy-2ks7WM9StYPnYNjVFjAI1E4HYF8sWc&usqp=CAU",
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <header className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-[3px] scale-105"
          style={{ backgroundImage: `url(${image1})`, zIndex: 0 }}
        ></div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-4xl md:text-7xl font-bold"
            style={{ fontFamily: "'Poiret One', cursive" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RotatingText
              texts={textLines}
              // mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300/30 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              mainClassName="px-4 sm:px-2 md:px-3 bg- text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </motion.h1>
        </div>
      </header>

      <section className="py-10 w-full bg-amber-50">
      
        <h2 className="text-3xl font-bold text-center mb-10">Popular Books for You</h2>
        <div className="flex justify-center">
          <BounceCards
            images={bounceImages}
            containerWidth={280}
            containerHeight={400}
            enableHover={true}
          />
        </div>
      </section>

      <section className="p-10 bg-amber-50 animate-fade-in-down">
        <h2 className="text-4xl font-extrabold text-center text-black mb-4 tracking-tight">
          Limited-Time Offers on Books
        </h2>

        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-rose-600 shadow-md" style={{ borderRadius: "50px" }}>
            <p className="text-2xl sm:text-3xl font-semibold text-white tracking-wide">
              ⏳ Hurry! Time Left: <span className="font-bold text-green-300">{formatTime(timeLeft)}</span>
            </p>
            <p className="text-lg text-white mt-2">
              <span className="font-medium">Offer Expiry Date:</span> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-17 mt-6">
          {specialDeals.map((deal, index) => {
            const discountedPrice = calculateDiscountedPrice(deal.originalPrice, deal.discount);
            return (
              <div
                key={index}
                className="relative bg-stone-100 shadow-lg rounded-xl p-3 text-center border border-rose-200 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:ring-3 hover:ring-green-600"
                style={{ width: "250px", height: "390px" }}
              >
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-2 rounded-full">
                  {deal.discount} OFF
                </span>

                <img
                  src={deal.image}
                  alt={`Cover of ${deal.title}`}
                  className="object-cover rounded-md mb-4 mx-auto"
                  style={{ width: "240px", height: "213px" }}
                />

                <h3 className="text-xl font-bold text-gray-800 mb-1">{deal.title}</h3>

                <p className="text-sm text-gray-500 mb-1">by {deal.author || "Unknown"}</p>
                <p className="text-lg text-gray-700 font-medium mb-2">
                  ₹{discountedPrice.toFixed(2)}
                  <span className="line-through text-sm text-gray-500 ml-2">₹{deal.originalPrice}</span>
                </p>

                <button className="mt-0 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow hover:from-blue-600 hover:to-green-600 transition-colors duration-200">
                  Buy Now 🚀
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 bg-amber-50">
        {[{ name: "Fiction", img: FictionImg }, { name: "Non-Fiction", img: NonFictionImg }, { name: "Science", img: ScienceImg }, { name: "Fantasy", img: FantasyImg }].map(
          (category, index) => (
            <div
              key={index}
              className="relative shadow-md rounded-lg text-center overflow-hidden cursor-pointer group"
              style={{ height: "120px" }}
              onClick={() => navigate(`/shop?category=${category.name}`)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-[0.6px] scale-110 transition-all duration-300 group-hover:scale-125"
                style={{ backgroundImage: `url(${category.img})` }}
              ></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <h3 className="text-3xl text-white font-bold">{category.name}</h3>
              </div>
            </div>
          )
        )}
      </section>

      <section className="p-6 bg-amber-50">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Books</h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={5}
          slidesToScroll={2}
          autoplay={true}
          autoplaySpeed={3000}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
          ]}
        >
          {[
            {
              title: "The Alchemist",
              author: "Paulo Coelho",
              img: "https://gyaanstore.com/cdn/shop/files/79_d65ac26c-c257-4756-9b57-41b7d00dacd4.png?v=1701858054&width=360",
              rating: 4,
              description: "A mystical story about following your dreams.",
            },
            {
              title: "Harry Potter",
              author: "J.K. Rowling",
              img: "https://gyaanstore.com/cdn/shop/files/46_07caa0a2-c762-4f66-ac44-c22d04a4e580.png?v=1702907968&width=360",
              rating: 5,
              description: "A young wizard discovers his magical destiny.",
            },
            {
              title: "The Lord of the Rings",
              author: "J.R.R. Tolkien",
              img: "https://gyaanstore.com/cdn/shop/files/94_9b6e0c03-1479-4afd-a519-44d04d9f00ff.png?v=1699265883&width=360",
              rating: 5,
              description: "An epic journey to destroy a powerful ring.",
            },
            {
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              img: "https://gyaanstore.com/cdn/shop/files/214_9132581e-602b-4b7a-b7f8-e51dd8c11462.png?v=1742736088&width=360",
              rating: 4,
              description: "A tale of wealth, love, and the American dream.",
            },
            {
              title: "1984",
              author: "George Orwell",
              img: "https://gyaanstore.com/cdn/shop/files/1_c00ffa39-4614-43f6-bd1f-4d04b096fcdc.png?v=1742117275&width=360",
              rating: 4,
              description: "A dystopian world under constant surveillance.",
            },
            {
              title: "Pride and Prejudice",
              author: "Jane Austen",
              img: "https://gyaanstore.com/cdn/shop/files/159_ecfcc64f-1d39-4e12-b8a8-4caf213c7d61.png?v=1742545309&width=360",
              rating: 4,
              description: "A classic love story with social commentary.",
            },
            {
              title: "The Book Thief",
              author: "Markus Zusak",
              img: "https://gyaanstore.com/cdn/shop/files/144_70fb03b3-2587-4702-b89a-6641153653ac.png?v=1701767156&width=360",
              rating: 5,
              description: "A story of courage and books in Nazi Germany.",
            },
            {
              title: "Sapiens",
              author: "Yuval Noah Harari",
              img: "https://gyaanstore.com/cdn/shop/files/223_6f5f1366-21a9-49a7-9c76-a834d90d28a9.png?v=1701687997&width=360",
              rating: 4,
              description: "A brief history of humankind.",
            },
            {
              title: "ASURA: Tale of the Vanquished ",
              author: "Anand Neelakantan",
              img: "https://gyaanstore.com/cdn/shop/files/asurabook.png?v=1742200468&width=360",
              rating: 3,
              description: "A teenager's struggles with society.",
            },
            {
              title: "The Psychology of Money",
              author: "Morgan Housel",
              img: "https://gyaanstore.com/cdn/shop/files/46_74876b1f-04fc-46b9-84c7-b53670e65295.png?v=1702379503&width=713g",
              rating: 4,
              description: "A love story between two cancer patients.",
            },
            {
              title: "Atomic Habits",
              author: "James Clear",
              img: "https://gyaanstore.com/cdn/shop/files/230_2581bdfc-eb21-4ecd-b310-4f79a6f8de88.png?v=1701690380&width=360",
              rating: 5,
              description: "Tiny changes, remarkable results.",
            },
          ].map((book, index) => (
            <div key={index} className="px-4">
              <div className="relative bg-rose-100 rounded-lg shadow-md text-center hover:shadow-lg transition w-full max-w-[250px] mx-auto group">
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-rose-100 text-sm">
                  ❤️
                </button>
                <img
                  src={book.img}
                  alt={book.title}
                  className="h-60 sm:h-70 md:h-75 object-cover rounded-t-lg w-full"
                />
                <div className="p-2">
                  <h3 className="text-sm font-semibold truncate">{book.title}</h3>
                  <p className="text-gray-600 text-xs truncate">{book.author}</p>
                  <div className="flex justify-center items-center text-yellow-500 text-xs mt-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>{i < book.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1 hidden group-hover:block">
                    {book.description}
                  </p>
                  <button className="mt-2 bg-rose-500 text-white px-4 py-2 rounded-full text-xs hover:bg-rose-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <Footer />
    </div>
  );
};

export default Home;