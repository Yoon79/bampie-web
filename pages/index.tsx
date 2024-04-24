import React, {useEffect, useState} from "react";
import Nav from "./nav";
import Main from "./main";
import Footer from "./footer";

export default function Page() {
    useEffect(() => {
        const audio1 = new Audio('bg-dubstep.wav');
        const audio2 = new Audio('bg-chill.wav');

        const playAudio = (audio) => {
            audio.addEventListener('ended', function() {
                this.currentTime = 0;
                playNext();
            }, false);
            audio.play();
        };

        const playNext = () => {
            setTimeout(() => {
                audio2.play();
            }, 10); // 두 번째 곡 재생 딜레이 (1000->1초)
        };

        // 첫 번째 곡 재생
        playAudio(audio1);

        // cleanup 함수 등록
        return () => {
            audio1.pause();
            audio1.currentTime = 0;
            audio2.pause();
            audio2.currentTime = 0;
        };
    }, []);

    return (
        <>
            <Nav></Nav>
            <Main></Main>
            <Footer></Footer>
        </>
    );
}
