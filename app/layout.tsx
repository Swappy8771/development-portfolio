import "./globals.css";

export const metadata = {
  title: "Swapnil Patil | Full Stack Developer",
  description: "Portfolio of Swapnil— Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
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
