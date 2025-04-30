
// import React from "react";
// import { motion } from "framer-motion";
// import { BookOpen, ShoppingCart, Lock, Search, Settings, Users } from "lucide-react";

// const features = [
//   { icon: <BookOpen size={20} />, text: "Efficient book inventory management" },
//   { icon: <Users size={20} />, text: "User-friendly interface for customers" },
//   { icon: <ShoppingCart size={20} />, text: "Order tracking and management" },
//   { icon: <Lock size={20} />, text: "Secure payment processing" },
//   { icon: <Search size={20} />, text: "Advanced search and filtering options" },
//   { icon: <Settings size={20} />, text: "Admin panel for managing stock and orders" },
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-sky-300 flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl bg-white/40 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-white/20"
//       >
//         <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-8 drop-shadow-md">
//           📚 Bookstore Management System
//         </h1>

//         <p className="text-gray-800 text-lg text-center leading-relaxed mb-8">
//           Welcome to our powerful Bookstore Management System, crafted to streamline inventory, orders, and customer interactions with style and ease.
//         </p>

//         <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Key Features</h2>
//         <ul className="space-y-4">
//           {features.map((item, index) => (
//             <li key={index} className="flex items-center gap-3 text-gray-800 text-lg hover:text-blue-700 transition-colors duration-300">
//               <span className="text-blue-600">{item.icon}</span>
//               {item.text}
//             </li>
//           ))}
//         </ul>

//         <p className="text-gray-800 text-center text-lg mt-10">
//           Built for independent stores and large retailers alike — our system adapts to your needs, keeping everything efficient and smooth.
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default About;



// export default () => {
//   const features = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 12.75L11.25 15 15 9.75"
//           />
//         </svg>
//       ),
//       title: "Secure Biometric Authentication",
//       desc: "Utilizing advanced fingerprint scanning technology to ensure every attendance record is authentic. This eliminates the risk of proxy attendance and ensures that the data collected is trustworthy.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 3h18v4H3zM3 9h18v12H3z"
//           />
//         </svg>
//       ),
//       title: "User-Friendly Dashboard",
//       desc: "Our dashboard is designed for both teachers and students, featuring real-time updates, analytics, and attendance summaries. It simplifies the overall management process with clear, actionable insights.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 4.5v15m7.5-7.5h-15"
//           />
//         </svg>
//       ),
//       title: "Modern Tech Stack",
//       desc: "Built with the MERN stack — MongoDB, Express.js, React.js, and Node.js — our system ensures scalability, fast performance, and seamless integration with other tools and APIs.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6v6l4 2"
//           />
//         </svg>
//       ),
//       title: "Real-Time Notifications",
//       desc: "Whether it's low attendance alerts or admin messages, our notification system ensures users are always informed and connected with the latest updates.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6.75 12L10.5 15.75 17.25 9"
//           />
//         </svg>
//       ),
//       title: "Role-Based Access",
//       desc: "Students, faculty, and admins each have specific access permissions, ensuring data privacy and preventing unauthorized modifications.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>
//       ),
//       title: "Data Security & Privacy",
//       desc: "We prioritize user data protection with encrypted authentication, secure API calls, and cloud-hosted databases that follow best practices.",
//       href: "#",
//     },
//   ];

//   return (
//     <section className="py-14 bg-rose-50">
//       <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//         <div className="max-w-3xl space-y-6">
//           <h3 className="text-gray-800 text-4xl font-bold sm:text-5xl">
//             About Our Attendance Management System
//           </h3>
//           <p className="text-lg leading-relaxed">
//             Our platform is a next-generation attendance management system designed to replace outdated and manual methods
//             with a smart, secure, and automated solution. Whether you're an educational institute or a training center, 
//             managing attendance should be quick, transparent, and reliable — and that’s exactly what we deliver.
//             <br /><br />
//             From biometric fingerprint authentication to real-time reporting, our solution empowers institutions
//             to track and manage attendance effortlessly. Built using the latest web technologies and secured through
//             modern authentication methods, we ensure the platform runs smoothly and adapts to the needs of any scale.
//             <br /><br />
//             Our mission is to enhance accountability, eliminate proxy attendance, and make attendance data accessible to the right people at the right time. With a responsive UI and thoughtful design, it provides a user-friendly experience for both admins and students alike.
//           </p>
//         </div>

//         <div className="mt-16">
//           <ul className="grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((item, idx) => (
//               <li key={idx} className="flex gap-x-4">
//                 <div className="flex-none w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-xl text-gray-800 font-semibold">
//                     {item.title}
//                   </h4>
//                   <p>{item.desc}</p>
//                   <a
//                     href={item.href}
//                     className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
//                   >
//                     Learn more
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };







// export default () => {
//   const features = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 5h12M9 3v2m6 4H3m6-2v2m6 4H3m6-2v2m12 0v6m0 0h-6m6 0l-2.5-2.5"
//           />
//         </svg>
//       ),
//       title: "Seamless Book Browsing",
//       desc: "Users can explore a rich catalog of books with search and filter options to easily find what they need — from fiction to academic textbooks.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6v6h4.5M21 12A9 9 0 113 12a9 9 0 0118 0z"
//           />
//         </svg>
//       ),
//       title: "Real-Time Inventory Management",
//       desc: "Admins can manage stock levels, add or remove books, and view purchase histories, all in real-time. This prevents stockouts and keeps everything up to date.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 4.5v15m7.5-7.5h-15"
//           />
//         </svg>
//       ),
//       title: "Built with MERN Stack",
//       desc: "Developed using MongoDB, Express.js, React.js, and Node.js, the system delivers powerful performance, maintainability, and scalability.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 6v6l4 2"
//           />
//         </svg>
//       ),
//       title: "Instant Notifications",
//       desc: "Users receive updates on new arrivals, offers, and order status changes via real-time notifications integrated directly into the platform.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6.75 12L10.5 15.75 17.25 9"
//           />
//         </svg>
//       ),
//       title: "Role-Based Access",
//       desc: "Admins manage inventory and orders, while customers enjoy personalized browsing, purchase tracking, and secure transactions.",
//       href: "#",
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//           />
//         </svg>
//       ),
//       title: "Secure Payments & Privacy",
//       desc: "All payment and user data are encrypted. We follow industry-standard security practices to ensure complete privacy and protection for users.",
//       href: "#",
//     },
//   ];

//   return (
//     <section className="py-14 bg-blue-50">
//       <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
//         <div className="max-w-3xl space-y-6">
//           <h3 className="text-gray-800 text-4xl font-bold sm:text-5xl">
//             About Our Bookstore Management System
//           </h3>
//           <p className="text-lg leading-relaxed">
//             Our Bookstore Management System is a modern web application designed to streamline how books are browsed,
//             purchased, and managed. Whether you're a small independent seller or a campus bookstore, our system simplifies every step of the process.
//             <br /><br />
//             From intuitive user dashboards to advanced stock control, the platform provides a full-featured experience for both customers and administrators.
//             Integrated with powerful tools and modern design, it supports real-time updates and analytics for smarter decision-making.
//             <br /><br />
//             Our mission is to make book buying and management effortless, secure, and scalable. With mobile responsiveness and role-based access,
//             it offers a smooth experience to users across all devices.
//           </p>
//         </div>

//         <div className="mt-16">
//           <ul className="grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((item, idx) => (
//               <li key={idx} className="flex gap-x-4">
//                 <div className="flex-none w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-xl text-gray-800 font-semibold">
//                     {item.title}
//                   </h4>
//                   <p>{item.desc}</p>
//                   <a
//                     href={item.href}
//                     className="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
//                   >
//                     Learn more
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       className="w-5 h-5"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </a>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };









// const AboutSection = () => {
//   return (
//     <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
//       <div className="max-w-4xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4 text-rose-700">Your Happy Reading Journey Starts Here</h2>
//           <p className="text-xl text-gray-600">
//             We make finding and buying books as easy as turning a page
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Feature 1 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">🔍</div>
//             <h3 className="text-xl font-semibold mb-2">Find Books in Seconds</h3>
//             <p className="text-gray-600">
//               Search by title, author, or just what you're in the mood for. Our smart search understands what you're looking for.
//             </p>
//           </div>

//           {/* Feature 2 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">📦</div>
//             <h3 className="text-xl font-semibold mb-2">Know What's Available</h3>
//             <p className="text-gray-600">
//               No more guessing - we show exactly what's in stock and ready to ship to your doorstep.
//             </p>
//           </div>

//           {/* Feature 3 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">🔔</div>
//             <h3 className="text-xl font-semibold mb-2">Helpful Updates</h3>
//             <p className="text-gray-600">
//               We'll notify you about your order, special deals, and books we think you'll love.
//             </p>
//           </div>

//           {/* Feature 4 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">🛡️</div>
//             <h3 className="text-xl font-semibold mb-2">Safe Shopping</h3>
//             <p className="text-gray-600">
//               Your information stays private and secure with our protection measures.
//             </p>
//           </div>

//           {/* Feature 5 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">📱</div>
//             <h3 className="text-xl font-semibold mb-2">Shop Anywhere</h3>
//             <p className="text-gray-600">
//               Works perfectly on phones, tablets, and computers - shop whenever inspiration strikes.
//             </p>
//           </div>

//           {/* Feature 6 */}
//           <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
//             <div className="text-rose-500 text-3xl mb-3">❤️</div>
//             <h3 className="text-xl font-semibold mb-2">Book Lovers, By Book Lovers</h3>
//             <p className="text-gray-600">
//               Our team is passionate about helping you discover your next favorite read.
//             </p>
//           </div>
//         </div>

//         <div className="mt-12 text-center">
//           <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
//             Start Exploring Books
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;









// import { motion } from "framer-motion";
// import Header from "../components/Header";

// const AboutSection = () => {
//   return (
//     <section className="py-20 bg-gray-800">
      
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: -20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ duration: 0.6 }}
//             className="text-5xl font-extrabold mb-4 text-rose-700 leading-tight"
//           >
//             Welcome to Your Ultimate Bookstore
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ delay: 0.3, duration: 0.6 }}
//             className="text-xl text-gray-600"
//           >
//             Discover. Connect. Inspire. Every book you need, just a click away.
//           </motion.p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {/* Feature Cards */}
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.4, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all border-t-4 border-rose-200 hover:border-rose-400"
//             >
//               <div className="text-rose-500 text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="mt-16 text-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all"
//           >
//             Start Your Reading Adventure
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Features data
// const features = [
//   {
//     icon: "🔍",
//     title: "Instant Book Search",
//     description: "Find books quickly by title, author, genre, or mood with our intelligent search system.",
//   },
//   {
//     icon: "📚",
//     title: "Vast Collection",
//     description: "Explore thousands of titles across fiction, non-fiction, academic, and rare genres.",
//   },
//   {
//     icon: "🚚",
//     title: "Fast & Reliable Delivery",
//     description: "Get your favorite books delivered securely and promptly to your doorstep.",
//   },
//   {
//     icon: "💬",
//     title: "Personalized Recommendations",
//     description: "Get curated suggestions tailored to your reading history and preferences.",
//   },
//   {
//     icon: "🔒",
//     title: "Safe & Secure Shopping",
//     description: "Your privacy and payment security are our top priorities.",
//   },
//   {
//     icon: "🤝",
//     title: "Community & Support",
//     description: "Join a community of readers and get real-time support whenever you need.",
//   },
// ];

// export default AboutSection;












import { motion } from "framer-motion";
import Header from "../components/Header";

const AboutSection = () => {
  return (
    <>
      <Header />
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-5xl font-extrabold mb-4 text-rose-700 leading-tight"
            >
              Welcome to Your Ultimate Bookstore
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-gray-600"
            >
              Discover. Connect. Inspire. Every book you need, just a click away.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature Cards */}
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all border-t-4 border-rose-200 hover:border-rose-400"
              >
                <div className="text-rose-500 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Start Your Reading Adventure
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

// Features data
const features = [
  {
    icon: "🔍",
    title: "Instant Book Search",
    description: "Find books quickly by title, author, genre, or mood with our intelligent search system.",
  },
  {
    icon: "📚",
    title: "Vast Collection",
    description: "Explore thousands of titles across fiction, non-fiction, academic, and rare genres.",
  },
  {
    icon: "🚚",
    title: "Fast & Reliable Delivery",
    description: "Get your favorite books delivered securely and promptly to your doorstep.",
  },
  {
    icon: "💬",
    title: "Personalized Recommendations",
    description: "Get curated suggestions tailored to your reading history and preferences.",
  },
  {
    icon: "🔒",
    title: "Safe & Secure Shopping",
    description: "Your privacy and payment security are our top priorities.",
  },
  {
    icon: "🤝",
    title: "Community & Support",
    description: "Join a community of readers and get real-time support whenever you need.",
  },
];

export default AboutSection;
