import React from 'react';

import Nav from '../components/core/Nav/Nav';
import Home from '../components/feature/Home/Home';
import Footer from '../components/core/Footer/Footer';

class Index extends React.Component {
    render () {
        return (
        <>
        <Nav />
        <Home />
        <Footer />
        </>
    )
    }
}

export default Index;