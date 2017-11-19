import React from 'react';
import { Grid, ListGroup, ListGroupItem } from 'react-bootstrap/lib';

import Carousel from './carousel';
import './home.scss';

export default () => (
  <div className="home">
    <div className="home__carousel-wrapper">
      <Grid>
        <Carousel />
      </Grid>
    </div>
    <div className="home__text-wrapper">
      <Grid>
        <div className="home__text-block">
          We got you covered on <span>each step</span> of website creation: from
          <span> design </span> and <span> development </span>
          to <span>hosting</span>. We are focused on results, using our vast experience,
          to help you meet
          your digital goals. Talk to us about your project to <span>get started</span>…
        </div>
      </Grid>
    </div>
    <div className="home__text-wrapper grey">
      <Grid>
        <div className="home__text-block">
          <h2>Technologies Stack</h2>
          <ListGroup>
            <ListGroupItem header="Javascript">ES6/ES7, Node.js, Vanilla Javascript</ListGroupItem>
            <ListGroupItem header="React">React.js, Flux, Redux, Jest</ListGroupItem>
            <ListGroupItem header="Angular">Angular 1, Angular 2 or 4, TypeScript</ListGroupItem>
            <ListGroupItem header="Webpack">Webpack 3, Babel, Hot Reload</ListGroupItem>
            <ListGroupItem header="Deploy">Docker, Ansible</ListGroupItem>
            <ListGroupItem header="Databases">MySQL, Postgres, MongoDB, DynamoDB</ListGroupItem>
            <ListGroupItem header="Testing">
              TDD, BDD, Jest, Mocha, Chai, Jasmine, Istanbul, Enzyme
            </ListGroupItem>
            <ListGroupItem header="AWS">
              Lambda, S3, EC2, Serverless Framework, ApiGateway, ECS
            </ListGroupItem>
            <ListGroupItem header="ORM">Sequelize, Mongoose, Knex</ListGroupItem>
            <ListGroupItem header="Template Engines">Jade, Handlebars</ListGroupItem>
            <ListGroupItem header="Other">PHP, Elastic Search, Socket.io</ListGroupItem>
          </ListGroup>
        </div>
      </Grid>
    </div>
  </div>
);
