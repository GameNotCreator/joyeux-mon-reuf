'use client'

import React, { useState } from "react";
import Particles from "./components/particles";

export default function Home() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const cardStyle: React.CSSProperties = {
    transformStyle: 'preserve-3d',
    transition: 'transform 0.6s',
    transform: isFlipped ? 'rotateY(180deg)' : 'none',
  };

  const frontBackStyle: React.CSSProperties = {
    backfaceVisibility: 'hidden',
  };

  const backStyle: React.CSSProperties = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <style jsx>{`
        @media (max-width: 768px) {
          body {
            transform: rotate(90deg);
            transform-origin: left top;
            width: 100vh;
            height: 100vw;
            overflow-x: hidden;
            position: absolute;
            top: 100%;
            left: 0;
          }
        }
      `}</style>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      
      <div className="relative md:w-1/2 md:h-96 items-center flex flex-col justify-center">
        <div className="relative h-full w-full" style={cardStyle}>
          <div className="absolute" style={frontBackStyle}>
            <img src="/1.jpg" width={100} height={100} className="md:w-full md:h-full object-cover" alt="front" />
          </div>
          <div className="absolute" style={backStyle}>
            <p className="text-white text-center">Je comptais te l'imprimer mais puiqu'on se voit pas</p>
            <img src="/2.jpg" width={100} height={100} className="md:w-full md:h-full object-cover" alt="back" />
          </div>
        </div>
      </div>

      <button onClick={handleFlip} className="items-center p-2 bg-black text-white rounded">Clique ici</button>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          Joyeux Anniversaire mon reuf!!!! By Hedi Fourati <br/> (Deso le code est pas ouf va sur pc)
        </h2>
      </div>
    </div>
  );
}
