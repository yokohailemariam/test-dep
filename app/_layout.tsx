/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import "./styles/globals.css";
import { Footer } from "./_components";
import ToasterProvider from "@/lib/providers/ToastProviders";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Leza award voting website",
  description:
    "Leza Awards: Vote for Your Favorite Ethiopian Artists The Leza Awards are the premier awards ceremony for excellence in Ethiopian music and film. The awards recognize the achievements of Ethiopian artists in a variety of categories, including song of the year, best male artist, best female artist, and best film.",
};
const font = Poppins({ subsets: ["latin"], weight: "400" });
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/award_logo.png" sizes="any" as="style" />
      </head>
      <body className={font.className}>
        <Providers>
          <ToasterProvider />

          <main>{props.children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
