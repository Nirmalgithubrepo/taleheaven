import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [strength, setStrength] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "password") checkStrength(value);
  };

  const checkStrength = (password) => {
    if (password.length < 6) return setStrength("Weak");
    if (
      password.match(/[A-Z]/) &&
      password.match(/[0-9]/) &&
      password.length >= 8
    )
      return setStrength("Strong");
    return setStrength("Medium");
  };

  const validateForm = () => {
    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format!");
      return false;
    } else {
      setEmailError("");
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters with uppercase, lowercase, and a number"
      );
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }

    return true;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((res) => setTimeout(res, 1500));
      toast.success("Signup successful!");
      navigate("/login");
    } catch (err) {
      toast.error("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form onSubmit={handleSignup}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {form.password && (
              <p
                className={`mt-1 text-sm ${
                  strength === "Strong"
                    ? "text-green-600"
                    : strength === "Medium"
                    ? "text-yellow-600"
                    : "text-red-500"
                }`}
              >
                Strength: {strength}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;





// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import ReCAPTCHA from "react-google-recaptcha";
// import { Eye, EyeOff } from "lucide-react";
// import toast from "react-hot-toast";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [strength, setStrength] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });

//     if (name === "password") checkStrength(value);
//   };

//   const checkStrength = (password) => {
//     if (password.length < 6) return setStrength("Weak");
//     if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.length >= 8)
//       return setStrength("Strong");
//     return setStrength("Medium");
//   };

//   const validateForm = () => {
//     const { name, email, password, confirmPassword } = form;

//     if (!captchaVerified) {
//       toast.error("Please verify CAPTCHA!");
//       return false;
//     }

//     if (!name || !email || !password || !confirmPassword) {
//       toast.error("All fields are required!");
//       return false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Invalid email format!");
//       return false;
//     }

//     const passwordRegex =
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

//     if (!passwordRegex.test(password)) {
//       toast.error(
//         "Password must be 8+ characters with uppercase, lowercase, and number"
//       );
//       return false;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return false;
//     }

//     return true;
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       // Simulate API call
//       await new Promise((res) => setTimeout(res, 1500));

//       toast.success("Signup successful!");
//       navigate("/login");
//     } catch (err) {
//       toast.error("Signup failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-rose-50 p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

//         <form onSubmit={handleSignup}>
//           {/* Name */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Full Name</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               type="text"
//               placeholder="John Doe"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               type="email"
//               placeholder="john@example.com"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4 relative">
//             <label className="block text-sm font-medium">Password</label>
//             <div className="relative">
//               <input
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-3 text-gray-500"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {form.password && (
//               <p
//                 className={`mt-1 text-sm ${
//                   strength === "Strong"
//                     ? "text-green-600"
//                     : strength === "Medium"
//                     ? "text-yellow-600"
//                     : "text-red-500"
//                 }`}
//               >
//                 Strength: {strength}
//               </p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Confirm Password</label>
//             <input
//               name="confirmPassword"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>

//           {/* CAPTCHA */}
//           {/* <div className="mb-4">
//             <ReCAPTCHA
//               sitekey="6LcIwhsrAAAAADnAtqwhfkTpvQAagqd-XvtkLmON"  // Use your Site Key here
//               onChange={() => setCaptchaVerified(true)}
//               onExpired={() => setCaptchaVerified(false)}
//             />
//           </div> */}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded text-white transition ${
//               loading
//                 ? "bg-gray-500 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Creating..." : "Create Account"}
//           </button>
//         </form>

//         <p className="text-center mt-4 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;




// import React,{useContext,useState} from 'react'
// import { assets } from '../assets/assets';
// import { useNavigate } from 'react-router-dom';
// // import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';
// import axios from "axios";
// const Signup= () => {
 
//  const navigate=useNavigate()
// //  const {backendUrl,setisLoggedIn,getUserData} = useContext(AppContext);


//   const [state, setState] = useState('Sign Up'); 
  
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('')



//   const onSubmitHandler = async (e) => {  
      
//         try {
//           e.preventDefault();
//           axios.defaults.withCredentials=true;

//      if (state === 'Sign Up') {
//               const {data}= await axios.post(`http://localhost:2000/register`, { name, email, password });
//               if (data.success) {
//                 setisLoggedIn(true);
//                 getUserData()
//                 navigate('/');
//             } else {
//                 toast.error(data.message);
//             }
//             }  
//      else {
//                 const {data} = await axios.post(`http://localhost:2000/register`, { email, password });
//                 if (data.success) {
//                   setisLoggedIn(true);
//                  getUserData()
//                   navigate('/');
//               } else {
//                   toast.error(data.message);
//               }
//             }  
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };
//   return (
//     <div className='flex items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to-purple-400'>
      
//         <img onClick={()=>navigate('/')} src={assets.logo} alt='Logo' className='absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer' />
   
//       <div className='bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm'>
//         <h2 className='text-3xl font-semibold text-white text-center'>
//           {state === 'Sign Up' ? 'Create Account' : 'Login'}
//         </h2>  
//         <p className='text-center text-sm mb-6'>
//           {state === 'Sign Up' ? 'Create your account' : 'Login to your account!'}
//         </p>
        
//         <form   onSubmit={onSubmitHandler} > 
//           {state === "Sign Up" && (
//             <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
//               <img src={assets.person_icon} alt="Person Icon" />
//               <input
//                 onChange={(e) => setName(e.target.value)} value={name}
//                 type='text' placeholder="Full Name" required className='bg-transparent outline-none' />
//             </div>
//           )}

//           <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'> 
//             <img src={assets.mail_icon} alt="Mail Icon" />
//             <input
//               onChange={(e) => setEmail(e.target.value)} value={email}
//               type='email' placeholder="Email Id" required className='bg-transparent outline-none' />
//           </div>

//           <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'> 
//             <img src={assets.lock_icon} alt="Lock Icon" />
//             <input
//               onChange={(e) => setPassword(e.target.value)} value={password}
//               type='password' placeholder="Password" required className='bg-transparent outline-none' />
//           </div>

          
//             <p onClick={()=>navigate('/reset-password')} className='mb-4 text-indigo-500 cursor-pointer'>Forgot password?</p>
    

//           <button  className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900'>
//             {state}
//           </button>

//           {state === "Sign Up" ? (
//             <p className='text-gray-400 text-center text-xs mt-4'>
//               Already have an account?{" "}
//               <span onClick={() => setState('Log In')} className='text-blue-400 cursor-pointer underline'>
//                 Login Here
//               </span>
//             </p>
//           ) : (
//             <p className='text-gray-400 text-center text-xs mt-4'>
//               Don't have an account?{" "}
//               <span onClick={() => setState('Sign Up')} className='text-blue-400 cursor-pointer underline'>
//                 Sign Up
//               </span>
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup;
