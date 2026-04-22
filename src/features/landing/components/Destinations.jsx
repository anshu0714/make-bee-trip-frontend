import { showSuccess } from "@/utils/toaster.utils";

const places = [
  {
    name: "Goa",
    image: "https://images.unsplash.com/photo-1587922546307-776227941871",
  },
  {
    name: "Manali",
    image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766",
  },
  {
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="destinations container">
      <h2>Popular Destinations</h2>

      <div className="grid">
        {places.map((place, i) => (
          <div className="card" key={i}>
            <img
              src={place.image + "?auto=format&fit=crop&w=800&q=80"}
              alt={place.name}
            />
            <h3>{place.name}</h3>

            <button
              className="btn btn--primary"
              onClick={() => showSuccess("Booking Confirmed!")}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
