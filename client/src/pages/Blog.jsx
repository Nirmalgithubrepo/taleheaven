// import React, { useState } from "react";

// const Blog = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: "The Importance of Reading",
//       author: "John Doe",
//       date: "March 10, 2025",
//       content: "Reading helps improve cognitive function, enhances vocabulary, and provides a great escape into different worlds."
//     },
//     {
//       id: 2,
//       title: "Top 5 Fiction Books to Read in 2025",
//       author: "Jane Smith",
//       date: "March 12, 2025",
//       content: "Discover the best fiction books of the year that will captivate your imagination and keep you hooked until the last page."
//     },
//     {
//       id: 3,
//       title: "How to Develop a Daily Reading Habit",
//       author: "Emily Johnson",
//       date: "March 15, 2025",
//       content: "Learn simple and effective strategies to make reading a daily habit and enhance your knowledge effortlessly."
//     }
//   ]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 flex items-center justify-center p-6">
//       <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-8">
//         <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6">Blog</h1>
//         <p className="text-gray-700 text-lg text-center mb-8">
//           Explore our latest blog posts on books, reading habits, and literary trends.
//         </p>
//         <div className="space-y-6">
//           {posts.map((post) => (
//             <div key={post.id} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border-l-8 border-blue-500">
//               <h2 className="text-2xl font-bold text-blue-700">{post.title}</h2>
//               <p className="text-gray-600 text-sm italic mb-2">By {post.author} - {post.date}</p>
//               <p className="text-gray-800 leading-relaxed">{post.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;









// import React, { useState } from "react";
// import Header from "../components/Header";

// const Blog = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       category: "CHILDREN & TEENS",
//       title: "Short Stories for Children that Help Shape up Child’s Cognitive Mind",
//       image: "https://plus.unsplash.com/premium_photo-1707816501120-756d17e82b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0hJTERSRU4lMjAlMjYlMjBURUVOU3xlbnwwfHwwfHx8MA%3D%3D",
//       content: "Stories are a great way to connect with children and teens. Books like Panchatantra and Diary of a Wimpy Kid help children develop empathy, compassion, and honesty."
//     },
//     {
//       id: 2,
//       category: "PARENTING, FAMILY & HEALTH",
//       title: "All about Parenting, Family and Health Books!",
//       image: "https://media.istockphoto.com/id/1473468366/photo/mother-teaching-son-to-ride-bicycle.jpg?s=612x612&w=0&k=20&c=R4iana5Iap3Mz19e3mqyQDCSXLJlO2MIOrAUQW1nDcE=",
//       content: "Parenting books help new parents understand and adapt to their roles. They offer valuable advice to build strong family values and emotional intelligence in children."
//     },
//     {
//       id: 3,
//       category: "SELF HELP & PERSONAL DEVELOPMENT",
//       title: "What is self? How is it comprehended?",
//       image: "https://images.unsplash.com/photo-1727060591686-54444c494c46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNFTEYlMjBIRUxQJTIwJTI2JTIwUEVSU09OQUwlMjBERVZFTE9QTUVOVHxlbnwwfHwwfHx8MA%3D%3D",
//       content: "Self-help books guide you through personal growth. From emotional healing to goal-setting, they help develop a conscious and confident 'self'."
//     },
//     {
//       id: 4,
//       category: "ENTRANCE EXAM PREPARATION",
//       title: "Most Recommended Books for Clearing Global Entrance Exams",
//       image: "https://media.istockphoto.com/id/1904135649/photo/woman-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=bHD4YpnIf3A9qef1rQZpivo5w1t4EVaPuwJJ2zus5KU=",
//       content: "Crack exams like GRE, GMAT, IELTS, and SAT with these trusted books. Get complete preparation kits that include mock tests and concept builders."
//     },
//     {
//       id: 5,
//       category: "RELIGIOUS & SPIRITUAL",
//       title: "Best Pope Francis Books on Mercy, Love, and Hope",
//       image: "https://plus.unsplash.com/premium_photo-1677532344857-0ada62210245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVzdCUyMFBvcGUlMjBGcmFuY2lzJTIwQm9va3MlMjBvbiUyME1lcmN5JTJDJTIwTG92ZSUyQyUyMGFuZCUyMEhvcGV8ZW58MHx8MHx8fDA%3D",
//       content: "Explore writings by Pope Francis that reflect on humanity, kindness, and spirituality. These books inspire hope and faith in tough times."
//     },
//     {
//       id: 7,
//       category: "LITERARY CLASSICS",
//       title: "Rediscover Timeless Classics That Never Fade",
//       image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
//       content: "From ‘Pride and Prejudice’ to ‘1984’, literary classics are rich in themes and timeless lessons. These books continue to influence modern writing."
//     },
//     {
//       id: 8,
//       category: "MOTIVATION & SUCCESS",
//       title: "Top Motivational Books that Fuel Success",
//       image: "https://media.istockphoto.com/id/499257721/photo/bold.jpg?s=612x612&w=0&k=20&c=hiksMKnblx4IsEc2mewMjh-Ifx88IkcsMrRk1XJ19LA=",
//       content: "Explore books like 'Atomic Habits' and 'The 7 Habits of Highly Effective People' to boost productivity, resilience, and personal success."
//     },
//     {
//       id: 9,
//       category: "SCIENCE & TECHNOLOGY",
//       title: "Must-Read Books for Science Enthusiasts",
//       image: "https://media.istockphoto.com/id/1281835402/photo/fingerprint-scan-illustration-personal-data-protection-concept-3d-rendering.jpg?s=612x612&w=0&k=20&c=tpnTWWrbQYiyIQdkoD1CrcVx1X493tsS_byfGri-Iyw=",
//       content: "Dive into the wonders of space, physics, and modern innovations. Books like ‘Brief History of Time’ ignite curiosity in science lovers."
//     },
//     {
//       id: 10,
//       category: "MENTAL HEALTH & WELLBEING",
//       title: "Books to Help You Deal with Anxiety and Stress",
//       image: "https://media.istockphoto.com/id/1222262930/photo/group-of-diverse-people-meditating-visualizing-during-yoga-session.jpg?s=612x612&w=0&k=20&c=S1EiA6KTggXfMac03dwJQUxwAv_AL9mzhkwSVwXANQY=",
//       content: "Mental health books guide you through coping strategies for anxiety, burnout, and overthinking, promoting mindfulness and emotional clarity."
//     },
//     {
//       id: 11,
//       category: "INDIAN AUTHORS",
//       title: "Best Books by Indian Authors You Shouldn’t Miss",
//       image: "https://media.istockphoto.com/id/1914004195/photo/elderly-man-writing-in-diary-on-park-bench.webp?a=1&b=1&s=612x612&w=0&k=20&c=K0n65US5NHmIkfaEbh15-66JpAb8qz6qCFvz13Ax5zc=",
//       content: "Discover the world of Indian fiction and non-fiction with authors like Chetan Bhagat, Arundhati Roy, and Rujuta Diwekar offering diverse narratives."
//     },
//     {
//       id: 12,
//       category: "FICTION & NOVELS",
//       title: "Top Fiction Books to Read in 2025",
//       image: "https://media.istockphoto.com/id/830259928/photo/child-flying-on-the-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=iHCQBuUV-x1Y8FX5lx0a8wvdgab7tmmDOxO9huwJJFU=",
//       content: "Get lost in new fiction titles of 2025 that are already winning hearts. From thrillers to romance, there's something for every reader."
//     }
//   ]);

//   return (
//     <div className="py-10 px-4 md:px-10 bg-gray-800">

//       <h2 className="text-3xl font-bold text-center mb-10 text-amber-50">Book Blogs</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {posts.map(post => (
//           <div key={post.id} className="bg-amber-50 rounded shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
//             <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
//             <div className="p-5">
//               <p className="text-sm text-gray-500 font-semibold uppercase">{post.category}</p>
//               <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{post.title}</h3>
//               <p className="text-gray-600 text-sm">{post.content}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;













import React, { useState } from "react";
import Header from "../components/Header";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState(""); // <-- Add this line
  const [posts, setPosts] = useState([
    {
      id: 1,
      category: "CHILDREN & TEENS",
      title: "Short Stories for Children that Help Shape up Child’s Cognitive Mind",
      image: "https://plus.unsplash.com/premium_photo-1707816501120-756d17e82b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q0hJTERSRU4lMjAlMjYlMjBURUVOU3xlbnwwfHwwfHx8MA%3D%3D",
      content: "Stories are a great way to connect with children and teens. Books like Panchatantra and Diary of a Wimpy Kid help children develop empathy, compassion, and honesty."
    },
    {
      id: 2,
      category: "PARENTING, FAMILY & HEALTH",
      title: "All about Parenting, Family and Health Books!",
      image: "https://media.istockphoto.com/id/1473468366/photo/mother-teaching-son-to-ride-bicycle.jpg?s=612x612&w=0&k=20&c=R4iana5Iap3Mz19e3mqyQDCSXLJlO2MIOrAUQW1nDcE=",
      content: "Parenting books help new parents understand and adapt to their roles. They offer valuable advice to build strong family values and emotional intelligence in children."
    },
    {
      id: 3,
      category: "SELF HELP & PERSONAL DEVELOPMENT",
      title: "What is self? How is it comprehended?",
      image: "https://images.unsplash.com/photo-1727060591686-54444c494c46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNFTEYlMjBIRUxQJTIwJTI2JTIwUEVSU09OQUwlMjBERVZFTE9QTUVOVHxlbnwwfHwwfHx8MA%3D%3D",
      content: "Self-help books guide you through personal growth. From emotional healing to goal-setting, they help develop a conscious and confident 'self'."
    },
    {
      id: 4,
      category: "ENTRANCE EXAM PREPARATION",
      title: "Most Recommended Books for Clearing Global Entrance Exams",
      image: "https://media.istockphoto.com/id/1904135649/photo/woman-using-laptop-at-home.jpg?s=612x612&w=0&k=20&c=bHD4YpnIf3A9qef1rQZpivo5w1t4EVaPuwJJ2zus5KU=",
      content: "Crack exams like GRE, GMAT, IELTS, and SAT with these trusted books. Get complete preparation kits that include mock tests and concept builders."
    },
    {
      id: 5,
      category: "RELIGIOUS & SPIRITUAL",
      title: "Best Pope Francis Books on Mercy, Love, and Hope",
      image: "https://plus.unsplash.com/premium_photo-1677532344857-0ada62210245?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVzdCUyMFBvcGUlMjBGcmFuY2lzJTIwQm9va3MlMjBvbiUyME1lcmN5JTJDJTIwTG92ZSUyQyUyMGFuZCUyMEhvcGV8ZW58MHx8MHx8fDA%3D",
      content: "Explore writings by Pope Francis that reflect on humanity, kindness, and spirituality. These books inspire hope and faith in tough times."
    },
    {
      id: 7,
      category: "LITERARY CLASSICS",
      title: "Rediscover Timeless Classics That Never Fade",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      content: "From ‘Pride and Prejudice’ to ‘1984’, literary classics are rich in themes and timeless lessons. These books continue to influence modern writing."
    },
    {
      id: 8,
      category: "MOTIVATION & SUCCESS",
      title: "Top Motivational Books that Fuel Success",
      image: "https://media.istockphoto.com/id/499257721/photo/bold.jpg?s=612x612&w=0&k=20&c=hiksMKnblx4IsEc2mewMjh-Ifx88IkcsMrRk1XJ19LA=",
      content: "Explore books like 'Atomic Habits' and 'The 7 Habits of Highly Effective People' to boost productivity, resilience, and personal success."
    },
    {
      id: 9,
      category: "SCIENCE & TECHNOLOGY",
      title: "Must-Read Books for Science Enthusiasts",
      image: "https://media.istockphoto.com/id/1281835402/photo/fingerprint-scan-illustration-personal-data-protection-concept-3d-rendering.jpg?s=612x612&w=0&k=20&c=tpnTWWrbQYiyIQdkoD1CrcVx1X493tsS_byfGri-Iyw=",
      content: "Dive into the wonders of space, physics, and modern innovations. Books like ‘Brief History of Time’ ignite curiosity in science lovers."
    },
    {
      id: 10,
      category: "MENTAL HEALTH & WELLBEING",
      title: "Books to Help You Deal with Anxiety and Stress",
      image: "https://media.istockphoto.com/id/1222262930/photo/group-of-diverse-people-meditating-visualizing-during-yoga-session.jpg?s=612x612&w=0&k=20&c=S1EiA6KTggXfMac03dwJQUxwAv_AL9mzhkwSVwXANQY=",
      content: "Mental health books guide you through coping strategies for anxiety, burnout, and overthinking, promoting mindfulness and emotional clarity."
    },
    {
      id: 11,
      category: "INDIAN AUTHORS",
      title: "Best Books by Indian Authors You Shouldn’t Miss",
      image: "https://media.istockphoto.com/id/1914004195/photo/elderly-man-writing-in-diary-on-park-bench.webp?a=1&b=1&s=612x612&w=0&k=20&c=K0n65US5NHmIkfaEbh15-66JpAb8qz6qCFvz13Ax5zc=",
      content: "Discover the world of Indian fiction and non-fiction with authors like Chetan Bhagat, Arundhati Roy, and Rujuta Diwekar offering diverse narratives."
    },
    {
      id: 12,
      category: "FICTION & NOVELS",
      title: "Top Fiction Books to Read in 2025",
      image: "https://media.istockphoto.com/id/830259928/photo/child-flying-on-the-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=iHCQBuUV-x1Y8FX5lx0a8wvdgab7tmmDOxO9huwJJFU=",
      content: "Get lost in new fiction titles of 2025 that are already winning hearts. From thrillers to romance, there's something for every reader."
    }
  ]);

  return (
    <div className="py-20 px-4 md:px-10 bg-gray-800">
      {/* Added Header here */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <h2 className="text-3xl font-bold text-center mb-10 text-amber-50">Book Blogs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <div key={post.id} className="bg-amber-50 rounded shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out">
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            <div className="p-5">
              <p className="text-sm text-gray-500 font-semibold uppercase">{post.category}</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
