export default function SearchWidget() {
  return (
    <div className="search-widget container">
      <div className="tabs">
        <span>Flights</span>
        <span>Trains</span>
        <span>Buses</span>
        <span>Hotels</span>
      </div>

      <div className="form">
        <input placeholder="From" />
        <input placeholder="To" />
        <input type="date" />
        <input placeholder="Passengers" />

        <button className="btn btn--primary">
          Search Now
        </button>
      </div>
    </div>
  );
}