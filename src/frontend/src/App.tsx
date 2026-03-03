import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "#050f0a" }}>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}
