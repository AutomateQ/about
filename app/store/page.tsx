import type { Metadata } from "next";
import Link from "next/link";
import { getPaidTools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Premium AutomateQ tools — powerful automation scripts with setup guides and support included.",
};

export default function StorePage() {
  const paidTools = getPaidTools();

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Premium tools
        </h1>
        <p className="mb-10 text-gray-500 dark:text-gray-400">
          More powerful scripts with step-by-step setup guides, lifetime updates,
          and support. One-time payment, no subscription.
        </p>

        {paidTools.length === 0 ? (
          <div className="card max-w-md text-center mx-auto">
            <div className="mb-3 text-4xl">🔜</div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              Paid tools coming soon
            </h2>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              We&apos;re working on premium versions of our tools. Follow on
              YouTube or GitHub to be the first to know.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://youtube.com/@AutomateQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on YouTube
              </a>
              <a
                href="https://github.com/AutomateQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {paidTools.map((tool) => (
              <div key={tool.slug} className="card flex flex-col gap-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {tool.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  <span className="font-medium text-gray-500 dark:text-gray-400">
                    For:{" "}
                  </span>
                  {tool.who}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {tool.gumroadUrl ? (
                    <a
                      href={tool.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Get on Gumroad
                    </a>
                  ) : null}
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="btn-secondary"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
