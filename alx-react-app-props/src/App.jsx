import UserContext from "./UserContext";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile"; // Assuming user data goes here

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile /> {/* This should use Context instead of props */}
      <Footer />
    </UserContext.Provider>
  );
}

export default App;



