import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  // GitHub Pages serves the site from /<repo>; empty for local builds.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  trailingSlash: true,
  reactStrictMode: true,
  agentRules: false,
};

export default withMDX(config);
