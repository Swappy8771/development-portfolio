import "./globals.css";

export const metadata = {
  title: "Swappy | Full Stack Developer",
  description: "Portfolio of Swappy — Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
