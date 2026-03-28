import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Premium automation tools from AutomateQ. Pay once, use forever.",
};

const products: {
  id: string;
  name: string;
  tagline: string;
  price: string | null;
  gumroadUrl: string | null;
}[] = [
  // Add Gumroad products here as they go live
];

export default function StorePage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Store
        </h1>
        <p className="mb-10 text-gray-500 dark:text-gray-400">
          Pay once, use forever. Every product includes documentation and 30
          days of support.
        </p>

        {products.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-16 text-center dark:border-gray-700">
            <p className="mb-2 text-lg font-semibold text-gray-700 dark:text-gray-300">
              Premium products coming soon
            </p>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Follow along on GitHub or reach out to find out what&apos;s in the
              works.
            </p>
            <Link href="/consulting" className="btn-primary">
              Work with us directly
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div key={p.id} className="card flex flex-col gap-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {p.name}
                </h3>
                <p className="flex-1 text-sm text-gray-500 dark:text-gray-400">
                  {p.tagline}
                </p>
                {p.price && p.gumroadUrl ? (
                  <a
                    href={p.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Buy for {p.price}
                  </a>
                ) : (
                  <Link href="/consulting" className="btn-secondary">
                    Get notified
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
