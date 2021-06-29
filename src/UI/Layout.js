import React from 'react';
import {Container} from "semantic-ui-react";

const Layout = ({children}) => {
    return (
        <main>
            <Container>
                {children}
            </Container>
        </main>
    );
};

export default Layout;