import React, { FunctionComponent } from 'react';
import { styled, css } from 'frontity';
import Background from './Background'

const Home: FunctionComponent = () => {
    const WrapperCSS = css`
        position: absolute;
        z-index: 100;
        width: 100%;
        overflow: auto;
        margin: 40px 0 0;
    `;

    const socialLinksCSS = css`
        display: flex;
        flex-flow: column;

        > div {
            width: 56px;
            height: 56px;
            border-radius: 56px;
            background-color: black;
        }
        > nav {
            display: flex;
            flex-flow: column;
        }
    `;

    const containerCSS = css`
        margin: 0 40px;

    `;


    return (
        <>
            <Background />
            <div css={WrapperCSS}>
                <div css={containerCSS}>
                    <div id="social-links" css={socialLinksCSS}>
                        <div></div>
                        <nav>
                            <a><span>Dribbble</span></a>
                            <a><span>Behance</span></a>
                            <a><span>Codepen</span></a>
                            <a><span>Github</span></a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;