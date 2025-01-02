import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mateus Fernandes | Desenvolvedor Web",
  description: "Meu nome é Mateus Fernandes, desenvolvo interfaces web modernas, responsivas e focadas em proporcionar a melhor experiência ao usuário.",
  keywords: "desenvolvedor web, interfaces web, design responsivo, experiência do usuário, desenvolvimento front-end, criação de sites, freelancer web, design moderno, desenvolvimento web profissional, porfólio"

};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Header />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
