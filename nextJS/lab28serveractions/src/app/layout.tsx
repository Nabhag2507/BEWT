import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href='/'>Home page</Link> &nbsp;
        <Link href='demo-a'>A demo</Link> &nbsp;
        <Link href='demo-b'>B demo</Link> &nbsp;
        <Link href='demo-c'>C demo</Link>
        {children}
      </body>
    </html>
  );
}
