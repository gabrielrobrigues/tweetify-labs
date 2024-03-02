import React, { useEffect, useState } from "react";
import { Toastify } from "../../components/Toastify/Toastify";
import "./style.css"
import WhiteButton from "../Buttons/WhiteButton";

export default function HeaderHome({ marginY, buttonWidth, buttonText, buttonRedirect, h1Text, h2Text }) {
    const handleStartNowClick = (e) => {
        e.preventDefault();
        console.log('funciona mano', e)
    }
    return (
        <div className="h-34 w-full relative">
            <img className="w-full" alt="Header Background" src="/images/header/home-header.svg" />
            <div className="-mt-24 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <h1>{h1Text}</h1>
                <h2 className="text-center max-w-[720px]">{h2Text}</h2>
                <WhiteButton marginY={marginY} width={buttonWidth} text={buttonText} onClick={handleStartNowClick} />
            </div>
        </div>
    );
}