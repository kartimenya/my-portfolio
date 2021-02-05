import React from 'react';

import { Home, About, Contact, Projects } from './pages';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="MyPortfolio" scroll>
              <Navigation>
                  <Link to="">Главная</Link>
                  <Link to="about">Обо мне</Link>
                  <Link to="projects">Работы</Link>
                  <Link to="contact">Контакты</Link>
              </Navigation>
          </Header>
          <Drawer title="MyPortfolio">
              <Navigation>
                  <Link to="/">Главная</Link>
                  <Link to="about">Обо мне</Link>
                  <Link to="projects">Работы</Link>
                  <Link to="contact">Контакты</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} exact />
              <Route path="/projects" component={Projects} exact />
              <Route path="/contact" component={Contact} exact />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
