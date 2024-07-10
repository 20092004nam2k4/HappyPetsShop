import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Content from '../components/Content';

const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div style={{ display: 'flex' }}>
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
