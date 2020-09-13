import React from 'react';
import { connect } from 'frontity';
import { Global, css } from "frontity";

import Link from './link';
import Home from './home';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    return (
        <>
            <Global 
                styles={css`
                    html, body, #root {
                        width: 100%;
                        height: 100%;
                    }
                    body {
                        margin: 0;
                        display: flex;
                        background-color: #D7E0EB;
                    }
                `}
            />
            <Home />
            {/* <h1>Hello 123</h1>
            <p>{state.router.link}</p>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/page/2">Page 2</Link>
                <Link href="/lorem-ipsum">Hello World</Link>
            </nav>
            <div>
                {data.isArchive && <div>This is a list</div>}
                {data.isPost && <div>This is a post</div>}
                {data.isPage && <div>This is a page</div>}
            </div> */}
        </>
    );
};

export default connect(Root);