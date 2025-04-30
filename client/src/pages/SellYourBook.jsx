// import React, { useState } from "react";

// const SellYourBook = () => {
//   const [bookDetails, setBookDetails] = useState({
//     title: "",
//     author: "",
//     price: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Book Submitted:", bookDetails);
//     alert("Your book has been listed for sale!");
//     setBookDetails({ title: "", author: "", price: "", description: "" });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">Sell Your Book</h1>
//         <p className="text-gray-600 mb-4">
//           List your book for sale by filling in the details below.
//         </p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Book Title"
//             value={bookDetails.title}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="text"
//             name="author"
//             placeholder="Author"
//             value={bookDetails.author}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <input
//             type="text"
//             name="price"
//             placeholder="Price ($)"
//             value={bookDetails.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={bookDetails.description}
//             onChange={handleChange}
//             className="w-full p-2 border rounded-lg"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//           >
//             List Book for Sale
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SellYourBook;










// import React, { useState } from "react";

// const SellYourBook = () => {
//   const [bookDetails, setBookDetails] = useState({
//     title: "",
//     author: "",
//     price: "",
//     description: "",
//     coverImage: null,
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [preview, setPreview] = useState(null);

//   const handleChange = (e) => {
//     setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setBookDetails({ ...bookDetails, coverImage: file });
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setBookDetails({ ...bookDetails, coverImage: null });
//     setPreview(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Book Submitted:", bookDetails);
//     setSubmitted(true);

//     setTimeout(() => setSubmitted(false), 3000); // Hide success message after 3 sec
//     setBookDetails({ title: "", author: "", price: "", description: "", coverImage: null });
//     setPreview(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-800 flex items-center justify-center p-6">
//       <div className="max-w-3xl w-full bg-amber-50 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-xl">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
//           Sell Your Book
//         </h1>
//         <p className="text-lg text-gray-700 mb-6 text-center">
//           List your book for sale by filling in the details below.
//         </p>

//         {submitted && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 text-center transition-all duration-300">
//             ✅ Your book has been successfully listed!
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Book Title"
//             value={bookDetails.title}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
//             required
//           />
//           <input
//             type="text"
//             name="author"
//             placeholder="Author"
//             value={bookDetails.author}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
//             required
//           />
//           <input
//             type="text"
//             name="price"
//             placeholder="Price ($)"
//             value={bookDetails.price}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
//             required
//           />
//           <textarea
//             name="description"
//             placeholder="Book Description"
//             value={bookDetails.description}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
//             required
//             rows="4"
//           ></textarea>

//           {/* Book Cover Upload */}
//           <div className="space-y-2">
//             <label className="text-gray-700 font-semibold">Upload Book Cover:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full p-2 border rounded-lg cursor-pointer"
//             />
//           </div>

//           {/* Image Preview */}
//           {preview && (
//             <div className="relative mt-4">
//               <img src={preview} alt="Book Cover Preview" className="w-32 h-40 object-cover rounded-lg shadow-lg" />
//               <button
//                 type="button"
//                 onClick={removeImage}
//                 className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-sm hover:bg-red-600"
//               >
//                 ✖
//               </button>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
//           >
//             📚 List Book for Sale
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SellYourBook;




















import React, { useState } from "react";
import Header from "../components/Header"; // Make sure to import your Header component

const SellYourBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    coverImage: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBookDetails({ ...bookDetails, coverImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setBookDetails({ ...bookDetails, coverImage: null });
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Submitted:", bookDetails);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
    setBookDetails({ title: "", author: "", price: "", description: "", coverImage: null });
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Header */}
      <Header />

      {/* Page Content */}
      <div className="flex items-center justify-center p-20">
        <div className="max-w-3xl w-full bg-amber-50 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-105 hover:shadow-xl">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
            Sell Your Book
          </h1>
          <p className="text-lg text-gray-700 mb-6 text-center">
            List your book for sale by filling in the details below.
          </p>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 text-center transition-all duration-300">
              ✅ Your book has been successfully listed!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={bookDetails.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="author"
              placeholder="Author"
              value={bookDetails.author}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price ($)"
              value={bookDetails.price}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
            />
            <textarea
              name="description"
              placeholder="Book Description"
              value={bookDetails.description}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 focus:border-blue-500"
              required
              rows="4"
            ></textarea>

            {/* Book Cover Upload */}
            <div className="space-y-2">
              <label className="text-gray-700 font-semibold">Upload Book Cover:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-2 border rounded-lg cursor-pointer"
              />
            </div>

            {/* Image Preview */}
            {preview && (
              <div className="relative mt-4">
                <img src={preview} alt="Book Cover Preview" className="w-32 h-40 object-cover rounded-lg shadow-lg" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-sm hover:bg-red-600"
                >
                  ✖
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
            >
              📚 List Book for Sale
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellYourBook;
