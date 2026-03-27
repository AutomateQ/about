export type Badge = "Free" | "Paid";

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  who: string;
  badge: Badge;
  githubUrl: string;
  demoUrl?: string;
  gumroadUrl?: string;
  featured?: boolean;
}

export const tools: Tool[] = [
  {
    slug: "netsend",
    name: "NetSend",
    tagline: "Send messages from one computer to another — no internet required.",
    description:
      "NetSend lets you send instant notifications and messages between computers on the same network. No cloud, no accounts, no fees. Just open it and start sending.",
    who: "Home users, small office teams, anyone who wants fast local messaging without relying on the internet.",
    badge: "Free",
    githubUrl: "https://github.com/AutomateQ/NetSend",
    demoUrl: undefined,
    featured: true,
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getFreeTools(): Tool[] {
  return tools.filter((t) => t.badge === "Free");
}

export function getPaidTools(): Tool[] {
  return tools.filter((t) => t.badge === "Paid");
}
