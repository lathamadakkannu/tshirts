import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import './styles/globals.scss';

 
const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["400","700"],
});

export const metadata = {
  title: "KustomeTee",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
