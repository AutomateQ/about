"use client";

import { useState } from "react";

type Props = {
  url: string;
  title: string;
  height?: number;
};

export default function DemoEmbed({ url, title, height = 600 }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      {!loaded && (
        <div className="flex h-48 items-center justify-center text-sm text-gray-400">
          Loading demo...
        </div>
      )}
      <iframe
        src={url}
        title={title}
        width="100%"
        height={height}
        className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0 h-0"}`}
        onLoad={() => setLoaded(true)}
        sandbox="allow-scripts allow-same-origin allow-forms"
        loading="lazy"
      />
    </div>
  );
}
