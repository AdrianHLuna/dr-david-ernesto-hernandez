import type { Metadata } from "next";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { doctor } from "@/data/doctor";

export const metadata: Metadata = {
  title: `${doctor.title} ${doctor.name} | ${doctor.specialty} en ${doctor.city}`,
  description: doctor.bio.substring(0, 150) + "...",
  keywords: [
    `Especialista en ${doctor.specialty} en ${doctor.city}`,
    "Cirujano General CDMX",
    "Cirujano Bariatra CDMX",
    "Manga Gástrica México",
    "Cirugía de Tracto Digestivo Superior",
    "Operación de Vesícula y Hernias"
  ],
  openGraph: {
    title: `${doctor.title} ${doctor.name} | ${doctor.specialty}`,
    description: doctor.bio.substring(0, 150) + "...",
    url: "http://localhost:3000",
    siteName: `${doctor.title} ${doctor.name}`,
    locale: "es_MX",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQ5RTJF4');`,
          }}
        />
        {/* Etiqueta Google Ads */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18345087001" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18345087001');
            `,
          }}
        />
        {/* Etiqueta de Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N1BM7ZXS47" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-N1BM7ZXS47');
            `,
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQ5RTJF4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}

