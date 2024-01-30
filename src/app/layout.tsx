import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/provider/auth";
import FooterComponent from "@/components/ui/footer";
import CartProvider from "@/provider/cart";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Store",
  description: "Seu ecommerce preferido na palma da mão.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Toaster />
            </CartProvider>
          </AuthProvider>
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
