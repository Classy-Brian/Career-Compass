// Import React and our authentication context
import React from 'react';
import { useAuth } from '../AuthContext';
import './Dashboard.css'; 

const Dashboard = () => {
    // GET USER DATA AND LOGOUT FUNCTION from our authentication context
    const { user, logout } = useAuth();

    return (
        <div className="dashboard"> {/* Changed from style={styles.dashboard} to className */}
            
            {/* HEADER SECTION with welcome message and logout button */}
            <div className="dashboard-header"> {/* Changed from style={styles.header} */}
                <h1>Welcome!</h1> {/* Simple welcome message */}
                
                {/* LOGOUT BUTTON */}
                <button onClick={logout} className="logout-button"> {/* Changed from style={styles.logoutButton} */}
                    Logout
                    {/* When clicked, this calls the logout function from our context
                        which will clear the user data and redirect back to login */}
                </button>
            </div>
            
            {/* MAIN CONTENT SECTION */}
            <div className="dashboard-content"> {/* Changed from style={styles.content} */}
                {/* PERSONALIZED GREETING using user's name from context */}
                <h2>Hello, {user.name}! </h2>
                <p>You are successfully logged in.</p>
                
                {/* USER INFORMATION DISPLAY */}
                <div className="user-info"> {/* Changed from style={styles.userInfo} */}
                    <h3>Your Information:</h3>
                    {/* Display the user data we stored during login/signup */}
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;