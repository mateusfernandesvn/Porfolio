import type { Metadata } from "next";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../providers/theme";
import { getLocale, getMessages } from "next-intl/server";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mateusfernandes.com.br"),
  title: "Mateus Fernandes | Desenvolvedor Web",
  description:
    "Sou Mateus Fernandes, um desenvolvedor web especializado em criar interfaces modernas, responsivas e com foco na melhor experiência do usuário. Confira meu portfólio e meus projetos!",
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
    "portfólio de desenvolvedor",
    "portfólio front-end",
    "front-end",
    "Mateus Fernandes",
    "programador",
    "programação web",
    "sites responsivos",
  ],
  authors: [
    {
      name: "Mateus Fernandes",
      url: "https://github.com/mateusfernandesvn",
    },
  ],
  openGraph: {
    title: "Mateus Fernandes | Desenvolvedor Web",
    description:
      "Desenvolvedor web focado em criar experiências digitais excepcionais com design responsivo e otimizado para SEO.",
    url: "https://mateusfernandes.com.br",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Imagem de Mateus Fernandes, Desenvolvedor Web",
        type: "image/png",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mateusfernandesvn",
    creator: "@mateusfernandesvn",
    title: "Mateus Fernandes | Desenvolvedor Web",
    description:
      "Portfólio e projetos de Mateus Fernandes, desenvolvedor web especializado em criar experiências digitais responsivas e focadas no usuário.",
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
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="pah5o5pX8dtS-0yO0CEhNpuAQ5ngZkGZB3g1T76h-r4"
        />
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
      </head>
      <body>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2S8LSQPGFR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2S8LSQPGFR');
          `}
        </Script>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
