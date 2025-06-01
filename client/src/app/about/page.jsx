import './about.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About Crystals Mines B2B</h1>
        <p>
          At Crystals Mines B2B, we specialize in sourcing and supplying high-quality crystals and minerals to businesses worldwide. 
          Our mission is to empower your business with premium natural products that inspire and add value.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To provide authentic, ethically sourced crystals and minerals that meet the highest standards of quality, 
          while fostering sustainable partnerships and supporting our communities.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We maintain transparency and honesty in all dealings.</li>
          <li><strong>Quality:</strong> We ensure our products meet rigorous quality controls.</li>
          <li><strong>Sustainability:</strong> We prioritize responsible mining and environmental care.</li>
          <li><strong>Customer Focus:</strong> Your satisfaction and success drive our efforts.</li>
          <li><strong>Innovation:</strong> Constantly improving to serve you better.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated professionals bring years of experience in the mining and supply chain industries,
          committed to providing exceptional service and expertise.
        </p>
      </section>
    </div>
  );
}
