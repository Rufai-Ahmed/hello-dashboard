import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/static/Sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const quick = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go Market",
  description: "Revolutionizing food shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quick.className}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          theme="light"
        />

        <div className="flex bg-gray-100 min-h-screen justify-end">
          <Sidebar />
          <main className="w-[calc(100%-240px)] min-h-screen p-6 bg-gray-100">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
