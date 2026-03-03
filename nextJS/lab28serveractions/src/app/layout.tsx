import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous" />

      </head>
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
