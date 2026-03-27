import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Book a free discovery call or hire AutomateQ to build custom AI and automation workflows for your business.",
};

const services = [
  {
    icon: "🤖",
    title: "AI workflow automation",
    description:
      "Connect your existing tools with AI to cut repetitive tasks — email drafting, data entry, report generation, and more.",
  },
  {
    icon: "🏭",
    title: "Manufacturing ops",
    description:
      "Automate production tracking, quality checklists, inventory alerts, and shift hand-off reports.",
  },
  {
    icon: "📋",
    title: "Workflow automation",
    description:
      "Map your current process, identify bottlenecks, and build automated solutions using tools you already own.",
  },
];

const pricing = [
  {
    name: "Discovery call",
    price: "Free",
    description: "30-minute call to understand your problem and explore solutions.",
    cta: "Book now",
  },
  {
    name: "Hourly consulting",
    price: "$150 / hr",
    description:
      "Hands-on build sessions, code review, or step-by-step tool setup with you.",
    cta: "Get in touch",
  },
  {
    name: "Project-based",
    price: "Custom quote",
    description:
      "End-to-end automation built and delivered for a fixed price. Includes documentation.",
    cta: "Get in touch",
  },
];

export default function ConsultingPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Done-for-you automation
        </h1>
        <p className="mb-12 text-lg text-gray-500 dark:text-gray-400">
          Want AI or automation built specifically for your workflow? Let&apos;s
          talk — the first call is free.
        </p>

        {/* Services */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            What I can help with
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
            Pricing
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {pricing.map((p, i) => (
              <div
                key={p.name}
                className={`card flex flex-col gap-3 ${
                  i === 0 ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {p.price}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Calendly */}
        <section className="mb-16">
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Book a free discovery call
          </h2>
          <CalendlyEmbed />
        </section>

        {/* Contact form */}
        <section>
          <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
            Or send a message
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
