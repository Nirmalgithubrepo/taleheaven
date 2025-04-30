// src/hooks/useAuth.js

const useAuth = () => {
    return {
      user: {
        isLoggedIn: true,   // Change to false to simulate logged-out state
        name: "Nil",        // User's name
        role: "admin",      // Can change to "user" for a regular user
      },
    };
  };
  
  export default useAuth;
  