import Navigation from './components/Navigation';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050f0a' }}>
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}
