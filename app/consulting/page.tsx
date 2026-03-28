import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Custom automation consulting by AutomateQ. Book a free 30-minute discovery call.",
};

const services = [
  {
    title: "Workflow automation",
    description:
      "We map your manual processes and build pipelines that run automatically — cutting hours of repetitive work each week.",
  },
  {
    title: "Custom tool development",
    description:
      "Need something that doesn't exist yet? We design and build lightweight tools scoped exactly to your workflow.",
  },
  {
    title: "Integrations & APIs",
    description:
      "Connect your existing apps — CRM to spreadsheet, webhook to Slack, database to dashboard. We handle the plumbing.",
  },
];

const pricingTiers = [
  {
    name: "Discovery call",
    price: "Free",
    description:
      "30-minute video call. We listen to your problem and tell you honestly if we can help.",
    highlight: false,
  },
  {
    name: "Project-based",
    price: "From $500",
    description:
      "Fixed scope, fixed price. Ideal for one-off tools, integrations, or automations with clear requirements.",
    highlight: true,
  },
  {
    name: "Retainer",
    price: "From $1,200/mo",
    description:
      "Ongoing development and support for teams that need a reliable automation partner.",
    highlight: false,
  },
];

export default function ConsultingPage() {
  return (
    <div className="space-y-20 px-4 py-16">
      {/* Hero */}
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
          Consulting
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          You know your problem better than anyone. We know automation.
          Let&apos;s build a solution together.
        </p>
      </div>

      {/* Services */}
      <section className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          What we build
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map(({ title, description }) => (
            <div key={title} className="card">
              <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Pricing
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {pricingTiers.map(({ name, price, description, highlight }) => (
            <div
              key={name}
              className={`card flex flex-col gap-3 ${highlight ? "ring-2 ring-blue-500" : ""}`}
            >
              <h3 className="font-bold text-gray-900 dark:text-white">{name}</h3>
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                {price}
              </p>
              <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Book a call */}
      <section className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Book a free call
        </h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Pick a time that works for you. No sales pressure — just a
          conversation.
        </p>
        {/* Replace this href with your real Calendly link */}
        <a
          href="https://calendly.com/AutomateQ"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Open Calendly
        </a>
      </section>

      {/* Contact form */}
      <section className="mx-auto max-w-2xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Or send a message
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
