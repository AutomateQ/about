import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug } from "@/content/tools";
import DemoEmbed from "@/components/DemoEmbed";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};
  return {
    title: tool.name,
    description: tool.tagline,
  };
}

export default function ToolPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
              tool.badge === "Free"
                ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                : "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
            }`}
          >
            {tool.badge}
          </span>
        </div>
        <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
          {tool.name}
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">{tool.tagline}</p>
      </div>

      {/* Description */}
      <div className="mb-10 rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          What it does
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
      </div>

      {/* Who it's for */}
      <div className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
          Who it&apos;s for
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{tool.who}</p>
      </div>

      {/* Live demo */}
      {tool.demoUrl && (
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Live demo
          </h2>
          <DemoEmbed url={tool.demoUrl} title={`${tool.name} demo`} />
        </section>
      )}

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <a
          href={tool.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View on GitHub
        </a>
        {tool.gumroadUrl && (
          <a
            href={tool.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Upgrade to Pro
          </a>
        )}
        <Link href="/tools" className="btn-secondary">
          Back to all tools
        </Link>
      </div>
    </article>
  );
}
