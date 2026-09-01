import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes a fully pre-rendered tree to out/,
  // which is the output directory the DataDack "nextjs-export" profile
  // declares. Nothing runs at request time.
  output: "export",
  // The default image loader needs a server to optimise on the fly, which a
  // static export has none of; without this the build fails outright.
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
