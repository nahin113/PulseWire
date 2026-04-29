import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
       <>
       <Header></Header>
       <Navbar></Navbar>
       <main>
        {children}
       </main>
       </>
    );
};

export default MainLayout;