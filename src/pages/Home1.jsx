import React from 'react';
import FixedBottomNavigation from '../components/FixedBottomNavigation';
import LeftBar from '../components/LeftBar';
import Navbar from '../components/Navbar';

function Home1(props) {
    return (
        <div>
            <Navbar/>
            <LeftBar/>
            <FixedBottomNavigation/>
        </div>
    );
}

export default Home1;