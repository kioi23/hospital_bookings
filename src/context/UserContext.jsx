import { createContext, useContext, useState } from 'react'; // React hooks for context and state

// Create context for user data
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider'); // Error if used outside provider
  }
  return context;
};

// Provider component to wrap the app and provide user state
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State for user object (name, age, gender, email)

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Provide user state to children */}
      {children}
    </UserContext.Provider>
  );
};