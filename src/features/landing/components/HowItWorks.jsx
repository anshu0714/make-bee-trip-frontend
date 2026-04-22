const steps = [
  {
    title: "Search",
    desc: "Enter your destination, travel dates, and preferences.",
    icon: "🔍"
  },
  {
    title: "Compare",
    desc: "Browse multiple options and choose the best deal.",
    icon: "⚖️"
  },
  {
    title: "Book",
    desc: "Confirm instantly with secure and fast checkout.",
    icon: "✅"
  }
];

export default function HowItWorks() {
  return (
    <section className="how container">
      <h2>How It Works</h2>
      <p className="subtitle">
        Book your entire journey in just 3 simple steps
      </p>

      <div className="steps">
        {steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="circle">{step.icon}</div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>

            {i !== steps.length - 1 && <div className="line" />}
          </div>
        ))}
      </div>
    </section>
  );
}