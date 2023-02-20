import React from 'react'
import { useEffect } from 'react';

export default function SplashScreen() {
    // useEffect(() => {
    //     setTimeout(() => {
    //         const splashScreen = document.getElementById('splash-screen');
    //         if (splashScreen) {
    //             splashScreen.remove();
    //         }
    //     }, 5000);
    // }, []);
    return (
        <>
            <div id="splash-screen">
                <video autoPlay muted style={{ width: '700px', height: '1000px' }}>
                    <source src='assets/img/splashVideo.mp4' type="video/mp4" />
                </video>
            </div>
        </>
    )
}
