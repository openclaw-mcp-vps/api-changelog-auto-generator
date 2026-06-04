import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Changelog Auto-Generator — Auto-generate API changelogs from git commits",
  description: "Scans git commits and automatically generates formatted API changelogs for breaking changes, new endpoints, and deprecations. Built for API companies and dev tool startups."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3c5d76a-15e4-4d75-8dbc-12e1ec38325d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
