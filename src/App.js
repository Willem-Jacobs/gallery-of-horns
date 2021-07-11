import React from 'react';

import Header from './Pages/Header';
import Main from './Pages/Main';
import Footer from './Pages/Footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
