// import React, { useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// function RefrshHandler({ setIsAuthenticated }) {
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             setIsAuthenticated(true);
//             if (location.pathname === '/' ||
//                 location.pathname === '/login' ||
//                 location.pathname === '/signup'
//             ) {
//                 navigate('', { replace: false });
//             }
//         }
//     }, [location, navigate, setIsAuthenticated])

//     return (
//         null
//     )
// }

// export default RefrshHandler





import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      if (
        location.pathname === '/' ||
        location.pathname === '/login' ||
        location.pathname === '/signup'
      ) {
        navigate('/home', { replace: true }); // Correct target and clean back button history
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefrshHandler;
