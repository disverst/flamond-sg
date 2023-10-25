import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Flamond Diamond Ring',
  description: `Elegance meets brilliance in the Flamond Diamond Ring. This exquisite piece showcases a unique design inspired by the fiery allure of flames, symbolizing passion and eternal love. Set with shimmering diamonds that dance with light, the ring's intricate craftsmanship is evident in every facet. The diamonds, hand-selected for their clarity and brilliance, are meticulously set to ensure maximum sparkle. Crafted in premium metal, the Flamond Diamond Ring is not just a piece of jewelry but a testament to timeless beauty and artistry. Whether worn as an engagement ring or a statement piece, it promises to captivate and enchant`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
