import React from 'react';
import Header from '../components/Header/Header';
import HeaderSm from '../components/Header/Header_sm';

const Main = () => {
    return (
        <div className=' relative'>
            {/* Header section */}
            <section>
                <Header />
                <HeaderSm />
            </section>

            {/* Body Section */}
            <section>
                
            </section>
        </div>
    );
};

export default Main;