"use client";

import { Provider as ReduxProvider } from "react-redux";
import "./globals.css";
import { store } from "@/store";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="">
                <ReduxProvider store={store}>{children}</ReduxProvider>
            </body>
        </html>
    );
}
