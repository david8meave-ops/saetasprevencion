import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root to this project. Without it, Next walks up looking for a
    // lockfile and can mistake the home directory for the workspace root,
    // making Turbopack watch/index far too many files.
    root: path.join(__dirname),
  },
};

export default nextConfig;
