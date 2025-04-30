// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';

// function Login() {
//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       return handleError('Email and password are required');
//     }

//     try {
//       const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       });

//       const result = await response.json();
//       const { success, message, jwtToken, name, error } = result;

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//       } else if (error) {
//         const details = error?.details[0]?.message || 'Login failed';
//         handleError(details);
//       } else {
//         handleError(message);
//       }
//     } catch (err) {
//       handleError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             onChange={handleChange}
//             type="email"
//             name="email"
//             placeholder="Enter your email..."
//             value={loginInfo.email}
//             id="email"
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             onChange={handleChange}
//             type="password"
//             name="password"
//             placeholder="Enter your password..."
//             value={loginInfo.password}
//             id="password"
//           />
//         </div>
//         <button type="submit">Login</button>
//         <p>
//           Don't have an account?{' '}
//           <Link to="/signup">Signup</Link>
//         </p>
//       </form>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;







import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('Email and password are required');
    }

    try {
      // const url = `https://deploy-mern-app-1-api.vercel.app/auth/login`;
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message || 'Login failed';
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      
      <div className="w-full max-w-md p-8 space-y-6 bg-rose-50 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
              id="email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
              id="password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;









// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';

// function Login() {
//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
//   });

//   const [loading, setLoading] = useState(false); // Track loading state
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     // Basic validation
//     if (!email || !password) {
//       return handleError('Email and password are required');
//     }

//     // Email validation
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailPattern.test(email)) {
//       return handleError('Please enter a valid email address');
//     }

//     // Password validation
//     if (password.length < 6) {
//       return handleError('Password must be at least 6 characters');
//     }

//     setLoading(true); // Start loading

//     try {
//       const url = "http://localhost:8080/auth/login";
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginInfo)
//       });

//       const result = await response.json();
//       const { success, message, jwtToken, name, error } = result;

//       setLoading(false); // End loading

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setTimeout(() => {
//           navigate('/');
//         }, 1000);
//       } else if (error) {
//         const details = error?.details[0]?.message || 'Login failed';
//         handleError(details);
//       } else {
//         handleError(message);
//       }
//     } catch (err) {
//       setLoading(false); // End loading on error
//       handleError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               onChange={handleChange}
//               type="email"
//               name="email"
//               placeholder="Enter your email..."
//               value={loginInfo.email}
//               id="email"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="password"
//               placeholder="Enter your password..."
//               value={loginInfo.password}
//               id="password"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading} // Disable button while loading
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>

//           <p className="text-center text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/signup" className="text-blue-500 hover:underline">
//               Signup
//             </Link>
//           </p>
//         </form>
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;
