import UserContext from "./UserContext"; // Import context
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile"; // Import UserProfile

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserProfile /> {/* Wrapped inside provider */}
      <Footer />
    </UserContext.Provider>
  );
}

export default App;




