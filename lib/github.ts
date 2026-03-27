export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export async function getOrgRepos(): Promise<GitHubRepo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const res = await fetch("https://api.github.com/orgs/AutomateQ/repos", {
    headers,
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    console.error("GitHub API error:", res.status, res.statusText);
    return [];
  }

  return res.json();
}
