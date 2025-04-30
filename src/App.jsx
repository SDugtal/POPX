import { useState } from "react";

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [userData, setUserData] = useState({
    fullName: "Marry Doe",
    phone: "Marry Doe",
    email: "Marry@Gmail.Com",
    password: "Marry Doe",
    company: "Marry Doe",
    isAgency: true
  });

  // Navigation handlers
  const navigateToLogin = () => setCurrentPage("login");
  const navigateToCreateAccount = () => setCurrentPage("createAccount");
  const navigateToSettings = () => setCurrentPage("settings");

  // Render the current page based on state
  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage navigateToLogin={navigateToLogin} navigateToCreateAccount={navigateToCreateAccount} />;
      case "login":
        return <LoginPage navigateToSettings={navigateToSettings} />;
      case "createAccount":
        return <CreateAccountPage navigateToSettings={navigateToSettings} userData={userData} setUserData={setUserData} />;
      case "settings":
        return <SettingsPage userData={userData} />;
      default:
        return <WelcomePage navigateToLogin={navigateToLogin} navigateToCreateAccount={navigateToCreateAccount} />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md">
        {renderPage()}
      </div>
    </div>
  );
}

// Welcome Page Component
function WelcomePage({ navigateToLogin, navigateToCreateAccount }) {
  return (
    <div className="h-screen flex flex-col justify-between p-4">
      <div className="flex-grow flex flex-col justify-end mb-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Welcome to PopX</h1>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="mb-4">
        <button 
          onClick={navigateToCreateAccount}
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded mb-4">
          Create Account
        </button>
        <button 
          onClick={navigateToLogin}
          className="w-full py-3 bg-purple-200 text-gray-700 font-semibold rounded">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

// Login Page Component
function LoginPage({ navigateToSettings }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    navigateToSettings();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Signin to your PopX account</h1>
      <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <div>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-purple-600 text-sm mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-gray-300 text-gray-100 font-semibold rounded">
          Login
        </button>
      </div>
    </div>
  );
}

// Create Account Page Component
function CreateAccountPage({ navigateToSettings, userData, setUserData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRadioChange = (value) => {
    setUserData({ ...userData, isAgency: value === "yes" });
  };

  const handleSubmit = () => {
    navigateToSettings();
  };

  return (
    <div className="h-screen p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create your PopX account</h1>
      
      <div>
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Full Name*
          </label>
          <input
            name="fullName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={userData.fullName}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Phone number*
          </label>
          <input
            name="phone"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={userData.phone}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Email address*
          </label>
          <input
            name="email"
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Password*
          </label>
          <input
            name="password"
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={userData.password}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-purple-600 text-sm mb-1">
            Company name
          </label>
          <input
            name="company"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={userData.company}
            onChange={handleChange}
          />
        </div>
        
        <div className="mb-6">
          <p className="mb-2">Are you an Agency?</p>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="agency"
                checked={userData.isAgency}
                onChange={() => handleRadioChange("yes")}
                className="text-purple-600"
              />
              <label className="ml-2">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name="agency"
                checked={!userData.isAgency}
                onChange={() => handleRadioChange("no")}
                className="text-purple-600"
              />
              <label className="ml-2">No</label>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-purple-600 text-white font-semibold rounded">
          Create Account
        </button>
      </div>
    </div>
  );
}

// Settings Page Component
function SettingsPage({ userData }) {
  return (
    <div className="h-screen">
      <div className="p-4 border-b">
        <h1 className="text-xl font-medium text-gray-800">Account Settings</h1>
      </div>
      
      <div className="p-4 flex items-center">
        <div className="relative mr-4">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
            <img 
              src="\src\assets\icon.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
            ✓
          </div>
        </div>

        <div>
          <h2 className="font-medium">{userData.fullName}</h2>
          <p className="text-gray-600 text-sm">{userData.email}</p>
          <p className="text-gray-500 text-xs mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea id doloremque aperiam veniam? Voluptates quisquam esse dolor vel sed aliquam architecto nesciunt voluptatum, illum, similique provident aut minus. Quos, sunt!
          </p>
        </div>
      </div>
    </div>
  );
}