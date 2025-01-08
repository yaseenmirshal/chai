import { Poppins } from "next/font/google"; 
import "./globals.css";

// Import Poppins font
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
});

export const metadata = {
  title: "Chai Kadai",
  description: "Delicious food near your town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
