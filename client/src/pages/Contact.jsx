// import React from "react";

// const Contact = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <header className="text-center py-12 bg-blue-400 text-white">
//         <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
//         <p className="text-lg">We’d love to hear from you. Reach out to us with any questions!</p>
//       </header>

//       {/* Contact Section */}
//       <div className="container mx-auto p-8 max-w-4xl">
//         <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

//         <div className="bg-white p-6 shadow-lg rounded-lg">
//           {/* Contact Form */}
//           <form className="grid grid-cols-1 gap-4">
//             <div>
//               <label className="text-gray-700 font-semibold">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter your name"
//                 className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div>
//               <label className="text-gray-700 font-semibold">Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             <div>
//               <label className="text-gray-700 font-semibold">Message</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter your message"
//                 className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-blue-300"
//               ></textarea>
//             </div>

//             <button className="mt-3 bg-blue-700 text-white py-3 rounded-md hover:bg-blue-700">
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="mt-8 text-center text-gray-700">
//           <p className="text-lg font-semibold">📍 Our Address</p>
//           <p>123 Book Street, TaleHaven, India</p>

//           <p className="text-lg font-semibold mt-4">📧 Email Us</p>
//           <p>support@talehaven.com</p>

//           <p className="text-lg font-semibold mt-4">📞 Call Us</p>
//           <p>+91 98765 43210</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;










// import React, { useState } from "react";
// import Header from "../components/Header";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// const InputField = ({ label, placeholder, width, onChange }) => {
//   return (
//     <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
//       <label className="font-bold">{label}</label>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-grow placeholder-normal"
//         onChange={(e) => onChange(e.target.value)}
//       />
//     </div>
//   );
// };

// const ContactItem = ({ icon, title, content }) => (
//   <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
//     <div className="flex flex-col grow mt-2.5 tracking-tight text-gray-900 max-md:mt-10">
//       <div className="flex gap-5 text-2xl font-bold leading-9">
//         <img src={icon} alt="" className="shrink-0 aspect-square w-[54px]" />
//         <h3 className="flex-auto self-start">{title}</h3>
//       </div>
//       <div className="pr-2px flex-auto self-start text-xl leading-8 px-20 w-auto">
//         {content}
//       </div>
//     </div>
//   </div>
// );

// const ContactUsForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const phoneNumberRegex = /^\+?\d{1,3}(?:[-\s]?\d{3}){3}$/;
//     if (!phoneNumberRegex.test(formData.phoneNumber)) {
//       alert("Please enter a valid phone number.");
//       return;
//     }

//     try {
//       const response = await fetch("https://your-backend-endpoint.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to submit form data");
//       }

//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phoneNumber: "",
//         subject: "",
//         message: "",
//       });

//       alert("Form submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form. Please try again later.");
//     }
//   };

//   const contactData = [
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
//       title: "Call us",
//       content: (
//         <>
//           +1-940-394-2948
//           <br />
//           +1-389-385-3807
//         </>
//       ),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
//       title: "Email us",
//       content: (
//         <>
//           support@brainwave.io
//           <br />
//           contact@brainwave.io
//         </>
//       ),
//     },
//     {
//       icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
//       title: "Visit us",
//       content: (
//         <>
//           34 Madison Street,
//           <br />
//           NY, USA 10005
//         </>
//       ),
//     },
//   ];

//   return (
//     <div className="container mx-auto h-screen flex justify-center items-center p-10 bg-gray-800">
    
//       <div className="bg-[#F4F7FA] px-10 py-10 max-w-[1250px] w-full rounded-2xl bg-amber-50">
        
//         <section className="flex flex-col px-10 text-center text-gray-900 max-w-[1266px] w-full flex-nowrap justify-center items-center ">
//           <h1 className="text-gray-800 self-center text-6xl  tracking-tighter leading-[64.8px] max-md:text-4xl pt-30">
//             Contact us
//           </h1>
//         </section>
//         <section className=" py-20">
//           <div className="flex gap-8 max-md:flex-col max-md:gap-0">
//             {contactData.map((item, index) => (
//               <ContactItem
//                 key={index}
//                 icon={item.icon}
//                 title={item.title}
//                 content={item.content}
//               />
//             ))}
//           </div>
//         </section>
//         <section className="flex flex-col px-11 py-12 text-base font-bold tracking-normal leading-6 text-gray-900 rounded-xl shadow-2xl max-md:px-5 bg-white">
//           <div className="flex flex-wrap justify-center items-center">
//             <div className="flex w-full max-w-[1000px] justify-between">
//               <InputField
//                 label="First Name & Last Name"
//                 placeholder="i.e. John Smith"
//                 width="w-[48%]"
//                 onChange={(value) => handleChange("firstName", value)}
//               />
//               <InputField
//                 label="Email"
//                 placeholder="i.e. john@mail.com"
//                 width="w-[48%]"
//                 onChange={(value) => handleChange("email", value)}
//               />
//             </div>
//             <div className="flex w-full max-w-[1000px] justify-between ">
//               <InputField
//                 label="Phone Number"
//                 placeholder="i.e. +1-234-567-7890"
//                 width="w-[48%]"
//                 onChange={(value) => handleChange("phoneNumber", value)}
//               />
//               <InputField
//                 label="Subject"
//                 placeholder="i.e. I need help"
//                 width="w-[48%]"
//                 onChange={(value) => handleChange("subject", value)}
//               />
//             </div>
//           </div>

//           <div className="flex flex-wrap justify-center items-center bg-white rounded-lg max-md:max-w-full w-[100%]">
//             <InputField
//               label="Message"
//               placeholder="i.e. Type your message here."
//               width="w-[93%]"
//               onChange={(value) => handleChange("message", value)}
//             />
//             <div className="flex justify-start max-md:max-w-full w-[90%] pt-8">
//               <button
//                 className="text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-w-[300px] max-md:px-5 h-18 px-16 py-3 w-[200px]"
//                 onClick={handleSubmit}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ContactUsForm;













import React, { useState } from "react";
import Header from "../components/Header";


const InputField = ({ label, placeholder, width, onChange }) => {
  return (
    <div className={`flex flex-col ${width || "w-[50%]"} p-4`}>
      <label className="font-bold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 flex-grow placeholder-normal"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-2.5 tracking-tight text-gray-900 max-md:mt-10">
      <div className="flex gap-5 text-2xl font-bold leading-9">
        <img src={icon} alt="" className="shrink-0 aspect-square w-[54px]" />
        <h3 className="flex-auto self-start">{title}</h3>
      </div>
      <div className="pr-2px flex-auto self-start text-xl leading-8 px-20 w-auto">
        {content}
      </div>
    </div>
  </div>
);

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  // Search Query state for Header
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const phoneNumberRegex = /^\+?\d{1,3}(?:[-\s]?\d{3}){3}$/;
    if (!phoneNumberRegex.test(formData.phoneNumber)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-endpoint.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  const contactData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Call us",
      content: (
        <>
          +1-940-394-2948
          <br />
          +1-389-385-3807
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Email us",
      content: (
        <>
          support@brainwave.io
          <br />
          contact@brainwave.io
        </>
      ),
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5f06f2bccb9b07bf8a8046586bd9f211dbb71be297a47e5dd6d80a6ee9193342?apiKey=597363a3080546f9b072bf59bebbfd17&",
      title: "Visit us",
      content: (
        <>
          34 Madison Street,
          <br />
          NY, USA 10005
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto h-full flex flex-col">
      {/* Header with search bar */}
      <div>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      {/* Contact Us Content */}
      <div className="flex justify-center items-center p-10 bg-gray-800 flex-grow">
        <div className="bg-[#F4F7FA] px-10 py-10 max-w-[1250px] w-full rounded-2xl bg-amber-50">
          <section className="flex flex-col px-10 text-center text-gray-900 max-w-[1266px] w-full flex-nowrap justify-center items-center">
            <h1 className="text-gray-800 self-center text-6xl tracking-tighter leading-[64.8px] max-md:text-4xl pt-30">
              Contact us
            </h1>
          </section>

          <section className="py-20">
            <div className="flex gap-8 max-md:flex-col max-md:gap-0">
              {contactData.map((item, index) => (
                <ContactItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </section>

          <section className="flex flex-col px-11 py-12 text-base font-bold tracking-normal leading-6 text-gray-900 rounded-xl shadow-2xl max-md:px-5 bg-white">
            <div className="flex flex-wrap justify-center items-center">
              <div className="flex w-full max-w-[1000px] justify-between">
                <InputField
                  label="First Name & Last Name"
                  placeholder="i.e. John Smith"
                  width="w-[48%]"
                  onChange={(value) => handleChange("firstName", value)}
                />
                <InputField
                  label="Email"
                  placeholder="i.e. john@mail.com"
                  width="w-[48%]"
                  onChange={(value) => handleChange("email", value)}
                />
              </div>
              <div className="flex w-full max-w-[1000px] justify-between">
                <InputField
                  label="Phone Number"
                  placeholder="i.e. +1-234-567-7890"
                  width="w-[48%]"
                  onChange={(value) => handleChange("phoneNumber", value)}
                />
                <InputField
                  label="Subject"
                  placeholder="i.e. I need help"
                  width="w-[48%]"
                  onChange={(value) => handleChange("subject", value)}
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center bg-white rounded-lg max-md:max-w-full w-[100%]">
              <InputField
                label="Message"
                placeholder="i.e. Type your message here."
                width="w-[93%]"
                onChange={(value) => handleChange("message", value)}
              />
              <div className="flex justify-start max-md:max-w-full w-[90%] pt-8">
                <button
                  className="text-lg tracking-tight leading-8 text-center text-white bg-indigo-600 rounded-lg max-w-[300px] max-md:px-5 h-18 px-16 py-3 w-[200px]"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
