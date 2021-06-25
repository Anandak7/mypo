import React from 'react'
import Particles from 'react-particles-js';
import particlesConfig from "./config/Configparticle";
export const Background = () => {
    return (
        <div style={{
            position:'fixed',
            display:'flex',
            flexDirection:'column',
            height:"100vw",
            width:'100vh',
            // 'mix-blend-mode': 'difference',
            zIndex:"-99",
          }}>
            <Particles  params={particlesConfig}/>
        </div>
    )
}
