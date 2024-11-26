import { Suspense } from "react";
import { Header } from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

export const Layout = () => <>
    <Header />
    <Suspense >
        <Outlet />
    </Suspense>
</>