import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import HeaderHome from "../../components/Header/HeaderHome";

export default function HomePage() {
    return (
        <main className="w-screen min-h-screen bg-[#212121]">
            <HeaderHome marginY={20} buttonWidth={320} buttonText="Comece agora" buttonRedirect='startNowSection' h1Text='TWEETIFY LABS' h2Text='Economize tempo enquanto aumenta a
qualidade de seus posts!' />
        </main>
    );
}