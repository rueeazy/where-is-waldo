import React from 'react';
import Picture from '../components/Picture';
import InfoPanel from '../components/InfoPanel';

const Home = () => {
    return (
        <div className="home">
            <h1 className="header">Find Waldo</h1>
            <div className="main-content">
                <Picture />
                <InfoPanel />  
            </div>
        </div>
    )
}

export default Home