"use client";

import { useState } from "react";

interface Props {
  src: string;
  title: string;
}

export default function DemoEmbed({ src, title }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      {!loaded && (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        </div>
      )}
      <iframe
        src={src}
        title={title}
        className={`w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ height: "520px" }}
        onLoad={() => setLoaded(true)}
        sandbox="allow-scripts allow-same-origin allow-forms"
      />
    </div>
  );
}
