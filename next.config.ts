import { resolve } from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: resolve(process.cwd()),
  },
};

export default nextConfig;
