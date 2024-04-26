import "./globals.css";
import localFont from 'next/font/local';
const myFont = localFont({ src: '../public/fonts/Boldins.ttf' })


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
