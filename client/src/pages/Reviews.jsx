// import React from "react";
// import { Star, StarHalf, Star as StarOutline } from "lucide-react";

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     date: "March 5, 2025",
//     rating: 5,
//     feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout. Would definitely recommend it to others."
//   },
//   {
//     id: 2,
//     name: "Sneha Kulkarni",
//     date: "March 9, 2025",
//     rating: 4,
//     feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content."
//   },
//   {
//     id: 3,
//     name: "Rohit Patil",
//     date: "March 14, 2025",
//     rating: 5,
//     feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips. Helped me get back into books again."
//   },
//   {
//     id: 4,
//     name: "Meera Joshi",
//     date: "March 18, 2025",
//     rating: 3,
//     feedback: "The concept is nice, but it needs more variety in blog topics. Looking forward to updates!"
//   },
//   {
//     id: 5,
//     name: "Kabir Nair",
//     date: "March 20, 2025",
//     rating: 4,
//     feedback: "I appreciated the clean UI and fast loading. It’s rare to see such good UX these days. Keep it up!"
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     date: "March 22, 2025",
//     rating: 5,
//     feedback: "A gem for book enthusiasts! I’ve bookmarked it and shared it with my book club."
//   }
// ];

// // ⭐ Render star icons dynamically
// const renderStars = (count) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= count) {
//       stars.push(<Star key={i} size={18} className="text-yellow-500 inline" fill="currentColor" />);
//     } else {
//       stars.push(<StarOutline key={i} size={18} className="text-gray-300 inline" />);
//     }
//   }
//   return stars;
// };

// // 🎴 Reusable Review Card component
// const ReviewCard = ({ name, date, rating, feedback }) => (
//   <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border-l-8 border-green-500">
//     <div className="flex justify-between items-center mb-2">
//       <h2 className="text-xl font-semibold text-green-800">{name}</h2>
//       <span className="text-sm text-gray-500">{date}</span>
//     </div>
//     <div className="mb-2">{renderStars(rating)}</div>
//     <p className="text-gray-800 leading-relaxed">{feedback}</p>
//   </div>
// );

// const Reviews = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center p-6">
//       <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Customer Reviews</h1>
//         <p className="text-gray-700 text-lg text-center mb-8">
//           Hear what our readers say about their experience with us.
//         </p>
//         <div className="space-y-6">
//           {reviews.map((review) => (
//             <ReviewCard key={review.id} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;









// import React from "react";

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     date: "March 5, 2025",
//     rating: 5,
//     book: "Atomic Habits by James Clear",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout."
//   },
//   {
//     id: 2,
//     name: "Sneha Kulkarni",
//     date: "March 9, 2025",
//     rating: 4,
//     book: "The Alchemist by Paulo Coelho",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content."
//   },
//   {
//     id: 3,
//     name: "Rohit Patil",
//     date: "March 14, 2025",
//     rating: 5,
//     book: "Deep Work by Cal Newport",
//     image: "https://randomuser.me/api/portraits/men/13.jpg",
//     feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips."
//   },
//   {
//     id: 4,
//     name: "Meera Joshi",
//     date: "March 18, 2025",
//     rating: 3,
//     book: "Ikigai by Francesc Miralles",
//     image: "https://randomuser.me/api/portraits/women/14.jpg",
//     feedback: "Nice concept but needs more variety in blog topics. Looking forward to updates!"
//   },
//   {
//     id: 5,
//     name: "Kabir Nair",
//     date: "March 20, 2025",
//     rating: 4,
//     book: "Sapiens by Yuval Noah Harari",
//     image: "https://randomuser.me/api/portraits/men/15.jpg",
//     feedback: "Appreciated the clean UI and fast loading. Great UX!"
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     date: "March 22, 2025",
//     rating: 5,
//     book: "The Power of Now by Eckhart Tolle",
//     image: "https://randomuser.me/api/portraits/women/16.jpg",
//     feedback: "A gem for book lovers! I’ve shared it with my book club."
//   }
// ];

// const renderStars = (count) => "⭐️".repeat(count) + "☆".repeat(5 - count);

// const ReviewCard = ({ name, date, rating, feedback, book, image }) => (
//   <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border-l-8 border-green-500">
//     <div className="flex items-center gap-4 mb-4">
//       <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-green-400" />
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-green-800">{name}</h2>
//           <span className="text-sm text-gray-500">{date}</span>
//         </div>
//         <div className="text-yellow-500 text-lg">{renderStars(rating)}</div>
//         <p className="text-sm text-gray-600">Purchased: <span className="italic font-medium">{book}</span></p>
//       </div>
//     </div>
//     <p className="text-gray-800 leading-relaxed">{feedback}</p>
//   </div>
// );

// const Reviews = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-200 to-yellow-200 flex items-center justify-center p-6">
//       <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Customer Reviews</h1>
//         <p className="text-gray-700 text-lg text-center mb-8">
//           Hear what our readers say about their experience and favorite books!
//         </p>
//         <div className="space-y-6">
//           {reviews.map((review) => (
//             <ReviewCard key={review.id} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;






// import React from "react";

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     date: "March 5, 2025",
//     rating: 5,
//     book: "Atomic Habits",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout."
//   },
//   {
//     id: 2,
//     name: "Sneha Kulkarni",
//     date: "March 9, 2025",
//     rating: 4,
//     book: "The Alchemist",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content."
//   },
//   {
//     id: 3,
//     name: "Rohit Patil",
//     date: "March 14, 2025",
//     rating: 5,
//     book: "Deep Work",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/41HXi7Jz5LL._SX329_BO1,204,203,200_.jpg",
//     image: "https://randomuser.me/api/portraits/men/13.jpg",
//     feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips."
//   },
//   {
//     id: 4,
//     name: "Meera Joshi",
//     date: "March 18, 2025",
//     rating: 3,
//     book: "Ikigai",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
//     image: "https://randomuser.me/api/portraits/women/14.jpg",
//     feedback: "Nice concept but needs more variety in blog topics. Looking forward to updates!"
//   },
//   {
//     id: 5,
//     name: "Kabir Nair",
//     date: "March 20, 2025",
//     rating: 4,
//     book: "Sapiens",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
//     image: "https://randomuser.me/api/portraits/men/15.jpg",
//     feedback: "Appreciated the clean UI and fast loading. Great UX!"
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     date: "March 22, 2025",
//     rating: 5,
//     book: "The Power of Now",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Zj47s2DUL.jpg",
//     image: "https://randomuser.me/api/portraits/women/16.jpg",
//     feedback: "A gem for book lovers! I’ve shared it with my book club."
//   }
// ];

// const renderStars = (count) => "⭐️".repeat(count) + "☆".repeat(5 - count);

// const ReviewCard = ({ name, date, rating, feedback, book, image, bookImage }) => (
//   <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 border-l-8 border-green-500">
//     <div className="flex items-start gap-6">
//       {/* Profile Image */}
//       <img src={image} alt={name} className="w-16 h-16 rounded-full border-2 border-green-400 object-cover mt-1" />
      
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold text-green-800">{name}</h2>
//           <span className="text-sm text-gray-500">{date}</span>
//         </div>
//         <div className="text-yellow-500 text-lg">{renderStars(rating)}</div>
//         <p className="text-sm text-gray-600 mb-2">
//           Purchased: <span className="italic font-medium">{book}</span>
//         </p>
//         <p className="text-gray-800 leading-relaxed">{feedback}</p>
//       </div>

//       {/* Book Image */}
//       <img
//         src={bookImage}
//         alt={book}
//         className="w-20 h-28 rounded-md object-cover shadow-md border border-gray-300"
//       />
//     </div>
//   </div>
// );

// const Reviews = () => {
//   return (
//     <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6 ">
//       <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl p-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Customer Reviews</h1>
//         <p className="text-gray-700 text-lg text-center mb-8">
//           Hear what our readers say about their experience and the books they loved!
//         </p>
//         <div className="space-y-6">
//           {reviews.map((review) => (
//             <ReviewCard key={review.id} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;




// import React, { useState } from "react";

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     location: "Mumbai, India",
//     date: "March 5, 2025",
//     rating: 5,
//     book: "Atomic Habits",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout.",
//     genre: "Self-Help",
//     helpfulCount: 12
//   },
//   {
//     id: 2,
//     name: "Sneha Kulkarni",
//     location: "Pune, India",
//     date: "March 9, 2025",
//     rating: 4,
//     book: "The Alchemist",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content.",
//     genre: "Fiction",
//     helpfulCount: 8
//   },
//   {
//     id: 3,
//     name: "Rohit Patil",
//     location: "Delhi, India",
//     date: "March 14, 2025",
//     rating: 5,
//     book: "Deep Work",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/41HXi7Jz5LL._SX329_BO1,204,203,200_.jpg",
//     image: "https://randomuser.me/api/portraits/men/13.jpg",
//     feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips.",
//     genre: "Productivity",
//     helpfulCount: 15
//   },
//   {
//     id: 4,
//     name: "Meera Joshi",
//     location: "Bangalore, India",
//     date: "March 18, 2025",
//     rating: 3,
//     book: "Ikigai",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
//     image: "https://randomuser.me/api/portraits/women/14.jpg",
//     feedback: "Nice concept but needs more variety in blog topics. Looking forward to updates!",
//     genre: "Philosophy",
//     helpfulCount: 5
//   },
//   {
//     id: 5,
//     name: "Kabir Nair",
//     location: "Chennai, India",
//     date: "March 20, 2025",
//     rating: 4,
//     book: "Sapiens",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
//     image: "https://randomuser.me/api/portraits/men/15.jpg",
//     feedback: "Appreciated the clean UI and fast loading. Great UX!",
//     genre: "History",
//     helpfulCount: 10
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     location: "Kolkata, India",
//     date: "March 22, 2025",
//     rating: 5,
//     book: "The Power of Now",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Zj47s2DUL.jpg",
//     image: "https://randomuser.me/api/portraits/women/16.jpg",
//     feedback: "A gem for book lovers! I’ve shared it with my book club.",
//     genre: "Spirituality",
//     helpfulCount: 20
//   },
//   {
//     id: 7,
//     name: "John Doe",
//     location: "New York, USA",
//     date: "March 25, 2025",
//     rating: 5,
//     book: "Becoming",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
//     image: "https://randomuser.me/api/portraits/men/17.jpg",
//     feedback: "This book truly inspired me. The writing is captivating.",
//     genre: "Biography",
//     helpfulCount: 18
//   },
//   {
//     id: 8,
//     name: "Emily Watson",
//     location: "London, UK",
//     date: "March 30, 2025",
//     rating: 4,
//     book: "Educated",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81CVwFBxHqL.jpg",
//     image: "https://randomuser.me/api/portraits/women/18.jpg",
//     feedback: "A powerful story, but the pacing was a bit slow at times.",
//     genre: "Memoir",
//     helpfulCount: 9
//   },
//   {
//     id: 9,
//     name: "Lucas Martin",
//     location: "Sydney, Australia",
//     date: "April 2, 2025",
//     rating: 3,
//     book: "The Subtle Art of Not Giving a F*ck",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
//     image: "https://randomuser.me/api/portraits/men/19.jpg",
//     feedback: "It was an okay read. Some parts were a bit repetitive.",
//     genre: "Self-Help",
//     helpfulCount: 6
//   },
//   {
//     id: 10,
//     name: "Sophia Lee",
//     location: "Toronto, Canada",
//     date: "April 5, 2025",
//     rating: 5,
//     book: "Atomic Habits",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//     image: "https://randomuser.me/api/portraits/women/20.jpg",
//     feedback: "A transformative book that truly helps with habit building!",
//     genre: "Self-Help",
//     helpfulCount: 25
//   },
//   {
//     id: 11,
//     name: "Daniel White",
//     location: "Los Angeles, USA",
//     date: "April 8, 2025",
//     rating: 4,
//     book: "The Catcher in the Rye",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
//     image: "https://randomuser.me/api/portraits/men/21.jpg",
//     feedback: "A classic, but the writing style was a bit hard to follow.",
//     genre: "Fiction",
//     helpfulCount: 11
//   },
//   {
//     id: 12,
//     name: "Olivia Adams",
//     location: "Paris, France",
//     date: "April 12, 2025",
//     rating: 5,
//     book: "The Great Gatsby",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATyL.jpg",
//     image: "https://randomuser.me/api/portraits/women/22.jpg",
//     feedback: "One of the greatest novels of all time, beautifully written.",
//     genre: "Classics",
//     helpfulCount: 22
//   },
//   {
//     id: 13,
//     name: "Mia Davis",
//     location: "Berlin, Germany",
//     date: "April 15, 2025",
//     rating: 5,
//     book: "1984",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/71kzCGYNhUL.jpg",
//     image: "https://randomuser.me/api/portraits/women/23.jpg",
//     feedback: "A dystopian masterpiece that everyone should read.",
//     genre: "Dystopia",
//     helpfulCount: 30
//   },
//   {
//     id: 14,
//     name: "William Brown",
//     location: "Boston, USA",
//     date: "April 17, 2025",
//     rating: 4,
//     book: "The Road",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81pX9IQkp3L.jpg",
//     image: "https://randomuser.me/api/portraits/men/24.jpg",
//     feedback: "A haunting read, but the plot felt too bleak for my taste.",
//     genre: "Fiction",
//     helpfulCount: 14
//   },
//   {
//     id: 15,
//     name: "Isabella Garcia",
//     location: "Madrid, Spain",
//     date: "April 20, 2025",
//     rating: 5,
//     book: "The Book Thief",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg",
//     image: "https://randomuser.me/api/portraits/women/25.jpg",
//     feedback: "An emotionally gripping story, beautifully written.",
//     genre: "Historical Fiction",
//     helpfulCount: 28
//   }
// ];

// const renderStars = (count) => "⭐️".repeat(count) + "☆".repeat(5 - count);

// const ReviewCard = ({
//   name,
//   location,
//   date,
//   rating,
//   feedback,
//   book,
//   image,
//   bookImage,
//   genre,
//   helpfulCount
// }) => {
//   const [isHelpful, setIsHelpful] = useState(false);

//   const handleHelpfulClick = () => {
//     setIsHelpful((prev) => !prev);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-300 p-6 max-w-sm mx-auto">
//       <div className="flex flex-col items-center">
//         {/* Profile Image */}
//         <img
//           src={image}
//           alt={name}
//           className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover mb-4"
//         />
        
//         <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
//         <p className="text-sm text-gray-500">{location} | {date}</p>

//         <div className="text-yellow-500 text-lg mt-2">{renderStars(rating)}</div>
//         <p className="text-sm text-gray-600 mt-2">
//           <strong>Book: </strong><span className="italic font-medium">{book}</span>
//         </p>
//         <p className="text-sm text-gray-600 mb-2">
//           <strong>Genre: </strong><span className="italic font-medium text-blue-500">{genre}</span>
//         </p>
//         <p className="text-gray-800 leading-relaxed mt-2">{feedback}</p>

//         <div className="flex items-center gap-3 mt-4">
//           <button
//             onClick={handleHelpfulClick}
//             className={`px-4 py-2 rounded-md text-white ${isHelpful ? 'bg-green-500' : 'bg-gray-400'}`}
//           >
//             {isHelpful ? "Marked as Helpful" : "Mark as Helpful"}
//           </button>
//           <span className="text-sm text-gray-600">{helpfulCount} people found this helpful</span>
//         </div>
//       </div>

//       {/* Book Image */}
//       <div className="mt-4">
//         <img
//           src={bookImage}
//           alt={book}
//           className="w-full h-56 object-cover rounded-lg shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// const Reviews = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-100 via-yellow-200 to-pink-200 flex items-center justify-center p-6">
//       <div className="w-full max-w-6xl bg-white shadow-xl rounded-3xl p-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Customer Reviews</h1>
//         <p className="text-gray-700 text-lg text-center mb-8">
//           Hear what our readers say about their experience and the books they loved!
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {reviews.map((review) => (
//             <ReviewCard key={review.id} {...review} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;













// import React, { useState } from "react";
// import Header from "../components/Header";

// const reviews = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     location: "Mumbai, India",
//     date: "March 5, 2025",
//     rating: 5,
//     book: "Atomic Habits",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
//     image: "https://randomuser.me/api/portraits/men/11.jpg",
//     feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout.",
//     genre: "Self-Help",
//     helpfulCount: 12,
//     whatIGained: "Learned how to build and break habits, which has helped me become more productive."
//   },
//   {
//     id: 2,
//     name: "Sneha Kulkarni",
//     location: "Pune, India",
//     date: "March 9, 2025",
//     rating: 4,
//     book: "The Alchemist",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
//     image: "https://randomuser.me/api/portraits/women/12.jpg",
//     feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content.",
//     genre: "Fiction",
//     helpfulCount: 8,
//     whatIGained: "The story gave me a renewed sense of hope and reminded me of the importance of following one's dreams."
//   },
//   {
//     id: 3,
//     name: "Rohit Patil",
//     location: "Delhi, India",
//     date: "March 14, 2025",
//     rating: 5,
//     book: "Deep Work",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/41HXi7Jz5LL._SX329_BO1,204,203,200_.jpg",
//     image: "https://randomuser.me/api/portraits/men/13.jpg",
//     feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips.",
//     genre: "Productivity",
//     helpfulCount: 15,
//     whatIGained: "Helped me to focus better on my work and eliminate distractions, significantly increasing my productivity."
//   },
//   {
//     id: 4,
//     name: "Meera Joshi",
//     location: "Bangalore, India",
//     date: "March 18, 2025",
//     rating: 3,
//     book: "Ikigai",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
//     image: "https://randomuser.me/api/portraits/women/14.jpg",
//     feedback: "Nice concept but needs more variety in blog topics. Looking forward to updates!",
//     genre: "Philosophy",
//     helpfulCount: 6,
//     whatIGained: "Helped me understand the importance of finding purpose in life and the balance between work and personal happiness."
//   },
//   {
//     id: 5,
//     name: "Kabir Nair",
//     location: "Chennai, India",
//     date: "March 20, 2025",
//     rating: 4,
//     book: "Sapiens",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
//     image: "https://randomuser.me/api/portraits/men/15.jpg",
//     feedback: "Appreciated the clean UI and fast loading. Great UX!",
//     genre: "Non-Fiction",
//     helpfulCount: 10,
//     whatIGained: "Gave me a deeper understanding of human history and how our species has evolved over time."
//   },
//   {
//     id: 6,
//     name: "Priya Sharma",
//     location: "Hyderabad, India",
//     date: "March 22, 2025",
//     rating: 5,
//     book: "The Power of Now",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Zj47s2DUL.jpg",
//     image: "https://randomuser.me/api/portraits/women/16.jpg",
//     feedback: "A gem for book lovers! I’ve shared it with my book club.",
//     genre: "Spirituality",
//     helpfulCount: 18,
//     whatIGained: "Taught me the importance of living in the present moment, which has significantly reduced my stress and anxiety."
//   },
//   {
//     id: 7,
//     name: "Aditi Reddy",
//     location: "Kolkata, India",
//     date: "March 25, 2025",
//     rating: 5,
//     book: "The Subtle Art of Not Giving a F*ck",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/91dklsh+frL.jpg",
//     image: "https://randomuser.me/api/portraits/women/17.jpg",
//     feedback: "A refreshing read! Loved the candid approach to life's challenges.",
//     genre: "Self-Help",
//     helpfulCount: 20,
//     whatIGained: "Helped me realize that not everything in life needs to be perfect, and it's okay to prioritize what truly matters."
//   },
//   {
//     id: 8,
//     name: "Vikas Singh",
//     location: "Noida, India",
//     date: "March 28, 2025",
//     rating: 4,
//     book: "The Four Agreements",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81bsJqb%2BtsL.jpg",
//     image: "https://randomuser.me/api/portraits/men/18.jpg",
//     feedback: "A wonderful guide to life. I need more time to incorporate the principles.",
//     genre: "Philosophy",
//     helpfulCount: 12,
//     whatIGained: "Helped me understand the importance of living with integrity, being impeccable with my word, and not taking things personally."
//   },
//   {
//     id: 9,
//     name: "Neha Verma",
//     location: "Lucknow, India",
//     date: "March 30, 2025",
//     rating: 5,
//     book: "Becoming",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81J-MbyA1yL.jpg",
//     image: "https://randomuser.me/api/portraits/women/19.jpg",
//     feedback: "Michelle Obama's life story was so inspiring. It motivated me to work towards my goals with confidence.",
//     genre: "Biography",
//     helpfulCount: 14,
//     whatIGained: "Taught me about resilience, hard work, and how important it is to believe in myself, no matter the challenges."
//   },
//   {
//     id: 10,
//     name: "Sahil Deshmukh",
//     location: "Mumbai, India",
//     date: "April 1, 2025",
//     rating: 4,
//     book: "The Psychology of Money",
//     bookImage: "https://images-na.ssl-images-amazon.com/images/I/81n9XpyI67L.jpg",
//     image: "https://randomuser.me/api/portraits/men/20.jpg",
//     feedback: "A practical approach to understanding personal finance. Will definitely reread this.",
//     genre: "Finance",
//     helpfulCount: 17,
//     whatIGained: "Helped me shift my mindset towards money, teaching me the importance of saving and investing for the future."
//   },
//   // Additional reviews...
// ];

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(i <= rating ? "★" : "☆");
//   }
//   return stars.join("");
// };

// const BookReviewCard = ({ review }) => {
//   return (
//     <div className="bg-amber-50 shadow-md rounded-md p-9 mb-6 flex flex-col md:flex-row items-start">
//       {/* Left Side - Review Details */}
     
//       <div className="flex flex-col md:w-3/5 mb-9 md:mb-0">
//         <div className="flex items-center mb-4">
//           <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
//           <div>
//             <h3 className="font-semibold">{review.name}</h3>
//             <p className="text-gray-500 text-sm">{review.location} - {review.date}</p>
//           </div>
//         </div>
//         <div className="flex items-center mb-4">
//           <div className="text-yellow-500">{renderStars(review.rating)}</div>
//           <span className="ml-2 text-sm">{review.helpfulCount} found this helpful</span>
//         </div>
//         <p className="text-gray-700">{review.feedback}</p>
//         <p className="text-gray-600 mt-2 italic">What I gained: {review.whatIGained}</p>
//       </div>

//       {/* Right Side - Book Cover */}
//       <div className="flex items-center justify-center md:w-2/5">
//         <img
//           src={review.bookImage}
//           alt={review.book}
//           className="w-40 h-60 object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// const BookReviewSection = () => {
//   const [isShowingAll, setIsShowingAll] = useState(false);

//   return (
//     <div className="container mx-auto p-6 bg-gray-800 min-h-screen">
//        {/* <div><Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} /></div> */}
//       <h2 className="text-3xl text-white font-semibold mb-6">Book Reviews</h2>
//       <div>
//         {reviews.slice(0, isShowingAll ? reviews.length : 5).map((review) => (
//           <BookReviewCard key={review.id} review={review} />
//         ))}
//       </div>
//       {!isShowingAll && (
//         <button
//           onClick={() => setIsShowingAll(true)}
//           className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
//         >
//           Show All Reviews
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookReviewSection;




















import React, { useState } from "react";
import Header from "../components/Header";

const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    location: "Mumbai, India",
    date: "March 5, 2025",
    rating: 5,
    book: "Atomic Habits",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    feedback: "Absolutely loved the experience! The interface was smooth, and the team was super helpful throughout.",
    genre: "Self-Help",
    helpfulCount: 12,
    whatIGained: "Learned how to build and break habits, which has helped me become more productive."
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    location: "Pune, India",
    date: "March 9, 2025",
    rating: 4,
    book: "The Alchemist",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    feedback: "Great platform for readers and book lovers. The only suggestion would be to add more regional content.",
    genre: "Fiction",
    helpfulCount: 8,
    whatIGained: "The story gave me a renewed sense of hope and reminded me of the importance of following one's dreams."
  },
  {
    id: 3,
    name: "Rohit Patil",
    location: "Delhi, India",
    date: "March 14, 2025",
    rating: 5,
    book: "Deep Work",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/41HXi7Jz5LL._SX329_BO1,204,203,200_.jpg",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    feedback: "Amazing! I really enjoyed the recommendations and the reading habit tips.",
    genre: "Productivity",
    helpfulCount: 15,
    whatIGained: "Helped me to focus better on my work and eliminate distractions, significantly increasing my productivity."
  },
  {
    id: 4,
    name: "Meera Joshi",
    location: "Bangalore, India",
    date: "March 18, 2025",
    rating: 3,
    book: "Ikigai",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    feedback: "Nice concept but needs more variety in blog topics. Looking forward to updates!",
    genre: "Philosophy",
    helpfulCount: 6,
    whatIGained: "Helped me understand the importance of finding purpose in life and the balance between work and personal happiness."
  },
  {
    id: 5,
    name: "Kabir Nair",
    location: "Chennai, India",
    date: "March 20, 2025",
    rating: 4,
    book: "Sapiens",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    feedback: "Appreciated the clean UI and fast loading. Great UX!",
    genre: "Non-Fiction",
    helpfulCount: 10,
    whatIGained: "Gave me a deeper understanding of human history and how our species has evolved over time."
  },
  {
    id: 6,
    name: "Priya Sharma",
    location: "Hyderabad, India",
    date: "March 22, 2025",
    rating: 5,
    book: "The Power of Now",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/61Zj47s2DUL.jpg",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    feedback: "A gem for book lovers! I’ve shared it with my book club.",
    genre: "Spirituality",
    helpfulCount: 18,
    whatIGained: "Taught me the importance of living in the present moment, which has significantly reduced my stress and anxiety."
  },
  {
    id: 7,
    name: "Aditi Reddy",
    location: "Kolkata, India",
    date: "March 25, 2025",
    rating: 5,
    book: "The Subtle Art of Not Giving a F*ck",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/91dklsh+frL.jpg",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    feedback: "A refreshing read! Loved the candid approach to life's challenges.",
    genre: "Self-Help",
    helpfulCount: 20,
    whatIGained: "Helped me realize that not everything in life needs to be perfect, and it's okay to prioritize what truly matters."
  },
  {
    id: 8,
    name: "Vikas Singh",
    location: "Noida, India",
    date: "March 28, 2025",
    rating: 4,
    book: "The Four Agreements",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/81bsJqb%2BtsL.jpg",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    feedback: "A wonderful guide to life. I need more time to incorporate the principles.",
    genre: "Philosophy",
    helpfulCount: 12,
    whatIGained: "Helped me understand the importance of living with integrity, being impeccable with my word, and not taking things personally."
  },
  {
    id: 9,
    name: "Neha Verma",
    location: "Lucknow, India",
    date: "March 30, 2025",
    rating: 5,
    book: "Becoming",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/81J-MbyA1yL.jpg",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    feedback: "Michelle Obama's life story was so inspiring. It motivated me to work towards my goals with confidence.",
    genre: "Biography",
    helpfulCount: 14,
    whatIGained: "Taught me about resilience, hard work, and how important it is to believe in myself, no matter the challenges."
  },
  {
    id: 10,
    name: "Sahil Deshmukh",
    location: "Mumbai, India",
    date: "April 1, 2025",
    rating: 4,
    book: "The Psychology of Money",
    bookImage: "https://images-na.ssl-images-amazon.com/images/I/81n9XpyI67L.jpg",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
    feedback: "A practical approach to understanding personal finance. Will definitely reread this.",
    genre: "Finance",
    helpfulCount: 17,
    whatIGained: "Helped me shift my mindset towards money, teaching me the importance of saving and investing for the future."
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(i <= rating ? "★" : "☆");
  }
  return stars.join("");
};

const BookReviewCard = ({ review }) => {
  return (
    <div className="bg-amber-50 shadow-md rounded-md p-9 mb-6 flex flex-col md:flex-row items-start">
      {/* Left Side - Review Details */}
      <div className="flex flex-col md:w-3/5 mb-9 md:mb-0">
        <div className="flex items-center mb-4">
          <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-gray-500 text-sm">{review.location} - {review.date}</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <div className="text-yellow-500">{renderStars(review.rating)}</div>
          <span className="ml-2 text-sm">{review.helpfulCount} found this helpful</span>
        </div>
        <p className="text-gray-700">{review.feedback}</p>
        <p className="text-gray-600 mt-2 italic">What I gained: {review.whatIGained}</p>
      </div>

      {/* Right Side - Book Cover */}
      <div className="flex items-center justify-center md:w-2/5">
        <img
          src={review.bookImage}
          alt={review.book}
          className="w-40 h-60 object-cover"
        />
      </div>
    </div>
  );
};

const BookReviewSection = () => {
  const [isShowingAll, setIsShowingAll] = useState(false);

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Header added here */}
      <Header />

      <div className="container mx-auto p-9">
        <h2 className="text-3xl text-white font-semibold mb-6">Book Reviews</h2>

        <div>
          {reviews.slice(0, isShowingAll ? reviews.length : 5).map((review) => (
            <BookReviewCard key={review.id} review={review} />
          ))}
        </div>

        {!isShowingAll && (
          <div className="flex justify-center">
            <button
              onClick={() => setIsShowingAll(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Show All Reviews
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookReviewSection;
