import React from 'react';
import Nav from '../components/core/Nav/Nav';
import Footer from '../components/core/Footer/Footer';
import Contact from '../components/feature/Contact/Contact';

class Contacts extends React.Component {
    render () {
        return (
        <>
        <Nav />
        <Contact />
        <Footer />
        </>
    )
    }
}
export default Contacts;