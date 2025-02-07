// App.js
import LandingPage from "./pages/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;