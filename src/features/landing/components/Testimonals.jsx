export default function Testimonials() {
  const testimonials = [
    {
      rating: "⭐⭐⭐⭐⭐",
      message: "Booking was quick and the prices were really competitive.",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      message: "Smooth experience from search to checkout without any issues.",
    },
    {
      rating: "⭐⭐⭐⭐☆",
      message: "Great deals on flights and hotels, saved both time and money.",
    },
    {
      rating: "⭐⭐⭐⭐⭐",
      message: "User-friendly interface and everything worked perfectly.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Users Say</h2>

        <div className="cards">
          {testimonials.map((item, i) => (
            <div className="card" key={i}>
              {item.rating}
              <p>{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
