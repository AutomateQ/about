import type { Metadata } from "next";
import ToolCard from "@/components/ToolCard";
import { tools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Free Tools",
  description:
    "All free AutomateQ tools — open-source scripts and automation utilities you can use today.",
};

export default function ToolsPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Free tools
        </h1>
        <p className="mb-10 text-gray-500 dark:text-gray-400">
          Everything here is open-source and free. Download, use, and share.
        </p>

        {tools.length === 0 ? (
          <p className="text-gray-400">More tools coming soon — follow along on GitHub.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
