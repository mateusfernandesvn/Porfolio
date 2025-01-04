import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mateus Fernandes | Desenvolvedor Web",
  description: "Meu nome é Mateus Fernandes, desenvolvo interfaces web modernas, responsivas e focadas em proporcionar a melhor experiência ao usuário.",
  keywords: [
    "desenvolvedor web",
    "interfaces web",
    "design responsivo",
    "experiência do usuário",
    "desenvolvimento front-end",
    "criação de sites",
    "freelancer web",
    "design moderno",
    "desenvolvimento web profissional",
    "portfólio",
    "portfólio front-end",
    "front-end"
  ],
  authors: [
    {
      name: "Mateus Fernandes",
      url: "https://github.com/mateusfernandesvn",
    },
  ],
  openGraph: {
    title: "Mateus Fernandes | Desenvolvedor Web",
    description: "Desenvolvedor web focado em criar experiências digitais excepcionais.",
    url: "https://mateusfernandes.com.br", 
    images: [
      {
        url: "/imagem.png",
        width: 1200,
        height: 630,
        alt: "Mateus Fernandes",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
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
