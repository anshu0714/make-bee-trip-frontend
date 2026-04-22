import { logInfo } from "@/utils/logger.utils";

export default function AppCTA() {
  const handlePlayStoreClick = () => {
    logInfo("CTA Clicked: Play Store Button", {
      location: "AppCTA",
      platform: "android",
    });
  };

  const handleAppStoreClick = () => {
    logInfo("CTA Clicked: App Store Button", {
      location: "AppCTA",
      platform: "ios",
    });
  };

  return (
    <section className="app-cta">
      <div className="container app-cta-grid">
        {/* LEFT CONTENT */}
        <div className="cta-text">
          <h2>Take Make Bee Trip Anywhere</h2>
          <p>
            Book flights, trains, buses, and hotels on the go. Experience faster
            booking and exclusive mobile deals.
          </p>

          <div className="buttons">
            <button
              className="store-btn primary"
              onClick={handlePlayStoreClick}
            >
              📱 Get it on Play Store
            </button>

            <button className="store-btn" onClick={handleAppStoreClick}>
              🍎 Download on App Store
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cta-image">
          <img
            src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=600&auto=format&fit=crop&q=60"
            alt="App Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
