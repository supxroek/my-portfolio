import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const robotoMono = Roboto_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const FCIBold = localFont({
    src: "../font/FCIBold.ttf",
    display: 'swap',
});

export const FCIRegular = localFont({
    src: "../font/FCIRegular.ttf",
    display: 'swap',
});