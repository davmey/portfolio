import React from 'react';
import './magic';
import { css } from 'frontity';

const Background = (props) => {
    const bubbleCSS = css`
        // the lava lamp animation in the canvas masks a different gradient in cotrast to the background set in the JS
        overflow: hidden;
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        
        canvas {
            height: 100%;
            width: 100%;
            @media screen and (max-width: 520px) {
                transform: scale(1);
                filter: blur(70px);
                min-height: 900px;
                min-width: 700px;
            }
            transform: scale(1.5);
            filter: blur(80px);
        }
    `;
    return (
        <div css={bubbleCSS}>
            <canvas id="bubble"></canvas>
        </div>
    )
}

export default Background;