import React from 'react';
import { render } from 'enzyme';
import server from '../server/server';
import Movie from '../src/js/components/Movie/Movie';
/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;
let wrapper;

Enzyme.configure({ adapter: new Adapter() });

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(3000);

const url = 'http://localhost:3000';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should have the correct page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementById('appTitle').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

describe('Movie Finder', function() {
  this.timeout(10000);
  const url = 'http://localhost:8888';
  let app;

  before(() => {
    app = server.listen(8888);
  });
  
  beforeEach(() => {
    nightmare = new Nightmare({
      show: true,
    });
  });
  
  after(() => {
    app.close();
  });
  
  it('Should display movie list from api', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Rudy')
      .click('#movieButton')
      .wait(2000)
      .evaluate(() => document.querySelectorAll('li').length)
      .end()
      .then((cnt) => {
        expect(cnt).to.equal(10);
        done();
      })
      .catch(err => console.log(err));
  });
  it('Should display poster image for Rudy', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Rudy')
      .click('#movieButton')
      .wait(2000)
      .evaluate(() => document.querySelectorAll('li')[0].innerHTML)
      .end()
      .then((img) => {
        expect(img).to.contain('https://m.media-amazon.com/images/M/MV5BZGUzMDU1YmQtMzBkOS00MTNmLTg5ZDQtZjY5Njk4Njk2MmRlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg');
        done();
      })
      .catch(err => console.log(err));
  });
  it('Should display movie title of Rudy', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Rudy')
      .click('#movieButton')
      .wait(2000)
      .evaluate(() => document.querySelectorAll('li')[0].innerHTML)
      .end()
      .then((name) => {
        expect(name).to.contain('Rudy');
        done();
      })
      .catch(err => console.log(err));
  });
  it('Image should exist on movie detail page', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Rudy')
      .click('#movieButton')
      .wait(1000)
      .click('.movieDetailButtons:first-of-type')
      .wait(2000)
      .evaluate(() => document.getElementsByClassName('images').length)
      .end()
      .then((cnt) => {
        expect(cnt).to.equal(1);
        done();
      })
      .catch(err => console.log(err));
  });
  it('Image should display on movie detail page', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Star Wars')
      .click('#movieButton')
      .wait(1000)
      .click('.movieDetailButtons:first-of-type')
      .wait(2000)
      .evaluate(() => document.getElementsByClassName('card-header').length)
      .end()
      .then((header) => {
        expect(header).to.equal(1);
        done();
      })
      .catch(err => console.log(err));
  });
  it('P elements should exist on movie detail page', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Star Wars')
      .click('#movieButton')
      .wait(1000)
      .click('.movieDetailButtons:first-of-type')
      .wait(2000)
      .evaluate(() => document.getElementsByClassName('paragraphs').length)
      .end()
      .then((cnt) => {
        expect(cnt).to.equal(8);
        done();
      })
      .catch(err => console.log(err));
  });
  it('Span elements should exist on movie detail page', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Star Wars')
      .click('#movieButton')
      .wait(1000)
      .click('.movieDetailButtons:first-of-type')
      .wait(2000)
      .evaluate(() => document.getElementsByClassName('badge').length)
      .end()
      .then((cnt) => {
        expect(cnt).to.equal(3);
        done();
      })
      .catch(err => console.log(err));
  });
  it('Should go back to main screen', (done) => {
    nightmare
      .goto(url)
      .type('#movieInput', 'Star Wars')
      .click('#movieButton')
      .wait(1000)
      .click('.movieDetailButtons:first-of-type')
      .wait(2000)
      .click('.backButton:first-of-type')
      .wait(2000)
      .evaluate(() => document.querySelectorAll('li').length)
      .end()
      .then((cnt) => {
        expect(cnt).to.equal(10);
        done();
      })
      .catch(err => console.log(err));
  });
});
