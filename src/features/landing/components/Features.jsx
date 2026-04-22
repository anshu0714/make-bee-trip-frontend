const features = [
  {
    title: "Fast Booking",
    desc: "Book flights, trains, buses, and hotels in seconds with a seamless experience.",
    icon: "⚡"
  },
  {
    title: "Best Price Guarantee",
    desc: "We compare across platforms to ensure you always get the lowest price available.",
    icon: "💰"
  },
  {
    title: "Real-time Availability",
    desc: "Live inventory updates so you never miss a seat or room.",
    icon: "📡"
  },
  {
    title: "Secure Payments",
    desc: "Your transactions are protected with industry-grade encryption.",
    icon: "🔒"
  },
  {
    title: "24/7 Support",
    desc: "Our travel experts are available anytime to assist you.",
    icon: "🧑‍💻"
  },
  {
    title: "Easy Cancellations",
    desc: "Flexible cancellation policies with quick refunds.",
    icon: "↩️"
  }
];

export default function Features() {
  return (
    <section id="features" className="features container">
      <h2>Why Choose Make Bee Trip</h2>
      <p className="section-subtitle">
        Everything you need for a smooth, reliable, and affordable travel experience.
      </p>

      <div className="grid">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}