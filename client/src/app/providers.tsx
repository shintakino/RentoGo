"use client";
import StoreProvider from "@/state/redux";
import { Children } from "react";

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <StoreProvider>
            {children}
        </StoreProvider>
    )
}

export default Providers;