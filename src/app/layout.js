import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import '@fontsource/poppins'; 

export const metadata = {
  title: "Wrirk",
  description: "Generated by wrirk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*<head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      </head>*/}
      <body className="font-poppins 2xl:container 2xl:mx-auto xl:mx-auto lg:mx-0 md:mx-0 sm:mx-0 mx-0">
        <Header />
        {children}
        <Footer />
        {/*<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>*/}
        </body>
    </html>
  );
}
