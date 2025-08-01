// Import React and all our components
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext'; // Authentication system
import LoginSignUpPage from './pages/LoginSignUpPage';       // Login/Signup form
import Dashboard from './pages/Dashboard';             // Dashboard for logged-in users


// INNER APP COMPONENT
// This component decides what to show based on authentication status
const AppContent = () => {
    // GET AUTHENTICATION STATUS from our context
    const { isLoggedIn } = useAuth();
    
    // CONDITIONAL RENDERING
    // This is the core logic: show different components based on login status
    return isLoggedIn ? <Dashboard /> : <LoginSignUpPage />;
    
    // Translation: 
    // - If user is logged in → show the dashboard
    // - If user is NOT logged in → show the login/signup page
};

// MAIN APP COMPONENT
// This is the root component that wraps everything
const App = () => {
    return (
        // AUTHENTICATION PROVIDER WRAPPER
        // This makes authentication data available to ALL child components
        <AuthProvider>
            <div className="App"> {/* Main app container */}
                <AppContent /> {/* The component that decides what to show */}
            </div>
        </AuthProvider>
    );
};

export default App;

/*
HOW THE FLOW WORKS:

1. App starts → AuthProvider loads and checks if user was previously logged in
2. AppContent checks isLoggedIn status
3. If false → Shows LoginSignUpPage 
4. User fills form and clicks submit → AuthContext updates isLoggedIn to true
5. AppContent re-renders and now shows SimpleDashboard
6. User clicks logout → AuthContext updates isLoggedIn to false
7. AppContent re-renders and shows LoginSignUpPage again

This creates an automatic flow where the app responds to authentication changes!
*/