import "./globals.css";
import { Inter, Fredoka, Poppins } from "next/font/google";
import Navbar from "../components/layout/navbar"; // make sure path is correct
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "My Babysitter App",
  description: "Figma UI example",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   <body className={`${inter.variable} ${fredoka.variable} ${poppins.variable}`}>
        {/* Display Navbar */}
        <Navbar />
       

        {/* Page content */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
