import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DemoEmbed from "@/components/DemoEmbed";
import { tools, getToolBySlug } from "@/content/tools";

interface Props {
  params: { slug: string };
}

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
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/tools" className="hover:text-gray-600 dark:hover:text-gray-300">
            Tools
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600 dark:text-gray-300">{tool.name}</span>
        </nav>

        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {tool.name}
          </h1>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              tool.badge === "Free"
                ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
                : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
            }`}
          >
            {tool.badge}
          </span>
        </div>

        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          {tool.tagline}
        </p>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
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
              Get premium version
            </a>
          )}
        </div>

        {/* Description */}
        <div className="mt-10 space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            What is {tool.name}?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Who is it for?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{tool.who}</p>
        </div>

        {/* Live demo */}
        {tool.demoUrl && (
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
              Live demo
            </h2>
            <DemoEmbed src={tool.demoUrl} title={`${tool.name} live demo`} />
          </div>
        )}

        {/* Upgrade CTA for paid version */}
        {tool.gumroadUrl && (
          <div className="mt-12 rounded-xl border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300">
              Want more power?
            </h3>
            <p className="mt-1 text-sm text-purple-700 dark:text-purple-400">
              The premium version includes additional features, setup support, and
              lifetime updates.
            </p>
            <a
              href={tool.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block btn-primary"
            >
              Get premium on Gumroad
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
