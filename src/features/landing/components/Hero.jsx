import travel from "../../../assets/travel.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Book Your Journey Smarter, Faster, Better</h1>
          <p>Flights, trains, buses, and hotels — all in one place.</p>

          <div className="hero-actions">
            <button className="btn btn--primary">Search Trips</button>
            <button className="btn btn--secondary">Explore Deals</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={travel} alt="travel" />
        </div>
      </div>
    </section>
  );
}
