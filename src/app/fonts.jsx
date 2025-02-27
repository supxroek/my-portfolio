import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const robotoMono = Roboto_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const baruRegular = localFont({
    src: "../font/baruRegular.ttf",
    display: 'swap',
});

export const baruBold = localFont({
    src: '../font/baruBold.ttf',
    display: 'swap',
});

export const baruBlack = localFont({
    src: '../font/baruBlack.ttf',
    display: 'swap',
});

export const wildWorld = localFont({
    src: '../font/WildWorld.otf',
    display: 'swap',
});