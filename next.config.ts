import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const isUserSite = repoName.endsWith(".github.io");

const basePath =
  process.env.GITHUB_ACTIONS === "true" && repoName && !isUserSite
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;