import Link from "next/link";
import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import { getFeaturedTools } from "@/content/tools";

export default function HomePage() {
  const featured = getFeaturedTools();

  return (
    <>
      <Hero />

      {/* Featured tools */}
      {featured.length > 0 && (
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Featured tools
            </h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
              Open-source, free to use, built to save you time.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/tools" className="btn-secondary">
                View all tools
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Three-tier CTA */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white">
            How can AutomateQ help you?
          </h2>
          <p className="mb-12 text-center text-gray-500 dark:text-gray-400">
            Pick the path that fits what you need right now.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Free */}
            <div className="card text-center">
              <div className="mb-4 text-4xl">🛠️</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Free tools
              </h3>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Open-source scripts and tools you can download and use today — no
                credit card, no sign-up.
              </p>
              <Link href="/tools" className="btn-primary">
                Browse tools
              </Link>
            </div>

            {/* Paid */}
            <div className="card text-center ring-2 ring-blue-500">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Premium tools
              </h3>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                More powerful, plug-and-play scripts with setup guides, updates,
                and support included.
              </p>
              <Link href="/store" className="btn-primary">
                Visit store
              </Link>
            </div>

            {/* Consulting */}
            <div className="card text-center">
              <div className="mb-4 text-4xl">🤝</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                Done-for-you
              </h3>
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                Want automation built specifically for your workflow? Book a free
                discovery call and let&apos;s figure it out together.
              </p>
              <Link href="/consulting" className="btn-secondary">
                Book a call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
