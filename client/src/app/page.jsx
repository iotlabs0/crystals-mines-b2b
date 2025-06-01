import '@/styles/home.css'; 
import { 
  ArrowRightIcon, 
  SparklesIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  DevicePhoneMobileIcon, 
  CurrencyDollarIcon, 
  CheckBadgeIcon 
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Crystals Mines B2B</h1>
        <p>Your trusted partner for high-quality crystals and minerals.</p>
        <button className="btn-primary">
          Explore Products <ArrowRightIcon className="icon-arrow" />
        </button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <SparklesIcon className="feature-icon" />
            <h3>Premium Quality</h3>
            <p>Only the finest crystals sourced responsibly.</p>
          </div>
          <div className="feature-card">
            <ShieldCheckIcon className="feature-icon" />
            <h3>Reliable Service</h3>
            <p>Trustworthy B2B supply chain and support.</p>
          </div>
          <div className="feature-card">
            <BoltIcon className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Timely shipments to keep your business running smoothly.</p>
          </div>
          <div className="feature-card">
            <DevicePhoneMobileIcon className="feature-icon" />
            <h3>Easy Communication</h3>
            <p>Dedicated team available for your inquiries.</p>
          </div>
          <div className="feature-card">
            <CurrencyDollarIcon className="feature-icon" />
            <h3>Competitive Pricing</h3>
            <p>Get the best value for your bulk purchases.</p>
          </div>
          <div className="feature-card">
            <CheckBadgeIcon className="feature-icon" />
            <h3>Certified Authenticity</h3>
            <p>All products come with certification and guarantees.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
