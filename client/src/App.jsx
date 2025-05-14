import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";  
import ProfilePage from "./pages/ProfilePage"; // Import the ProfilePage component
import { Link } from "react-router-dom"; // Import Link for navigation

const App = () => {
  return (

     <div className="bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {/* Add your navigation links here */}
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
      </nav>   */}
    
    </div>
  );
}
export default App;