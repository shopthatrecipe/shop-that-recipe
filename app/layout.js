// app/layout.js

export const metadata = {
  title: 'Shop That Recipe!',
  description: 'Shop your favorite recipes instantly!',
  openGraph: {
    title: 'Shop That Recipe!',
    description: 'Turn your favorite recipes into a Walmart cart instantly!',
    url: 'https://www.shopthatrecipe.com/',  // <--- Replace with your real domain!
    siteName: 'Shop That Recipe',
    images: [
      {
        url: '/logo.png',  // This will pull from /public/logo.png
        width: 1200,
        height: 630,
        alt: 'Shop That Recipe Logo',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}


