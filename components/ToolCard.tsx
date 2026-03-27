import Link from "next/link";
import type { Tool } from "@/content/tools";

interface Props {
  tool: Tool;
}

export default function ToolCard({ tool }: Props) {
  return (
    <div className="card flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {tool.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            tool.badge === "Free"
              ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300"
              : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
          }`}
        >
          {tool.badge}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">{tool.tagline}</p>

      <p className="text-xs text-gray-400 dark:text-gray-500">
        <span className="font-medium text-gray-500 dark:text-gray-400">For: </span>
        {tool.who}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        <Link
          href={`/tools/${tool.slug}`}
          className="btn-primary text-xs px-3 py-2"
        >
          Learn more
        </Link>
        <a
          href={tool.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs px-3 py-2"
        >
          GitHub
        </a>
        {tool.demoUrl && (
          <a
            href={tool.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs px-3 py-2"
          >
            Live demo
          </a>
        )}
      </div>
    </div>
  );
}
