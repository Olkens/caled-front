import { QueryProvider } from "@/providers/QueryProvider";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import {Navbar} from "@/components/NavBar";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={cn("font-mono", jetbrainsMono.variable)}>
      <body>
        <Navbar></Navbar>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
