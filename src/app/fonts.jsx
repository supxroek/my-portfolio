import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const ceraBold = localFont({
  weight: "400",
  src: "../font/ceraBold.otf",
  display: "swap",
});

export const ceraMedium = localFont({
  weight: "400",
  src: "../font/ceraMedium.otf",
  display: "swap",
});

export const FCIBold = localFont({
  src: "../font/FCIBold.ttf",
  display: "swap",
});

export const FCIRegular = localFont({
  src: "../font/FCIRegular.ttf",
  display: "swap",
});
