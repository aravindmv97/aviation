import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import Footer from './components/footer';

const Wrapper = styled.div`
  background: #eee;
  /* min-height: 100vh; */
`;

const Container = styled.div`
  padding: 120px;
`;

export default function Routes() {
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = e => {
      if (!showMenu && document.scrollingElement.scrollTop > 10) {
        setShowMenu(true);
      }
      if (!showMenu && document.scrollingElement.scrollTop < 10) {
        setShowMenu(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Router>
      <Wrapper>
        <Header showMenu={showMenu} />
        <Container id="mainContainer">
          <Switch>
            <Route path="/">
              <Home showMenu={showMenu} />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Wrapper>
    </Router>
  );
}
