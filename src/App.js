/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
  {
    title: 'What is the meaning of Lorem ipsum?',
    content:
      'Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder',
  },
  {
    title: 'Why is Lorem Ipsum Dolor used?',
    content: 'The Lorem Ipsum text is used to fill spaces designated to host texts that have not yet been published.',
  },
  {
    title: 'What is the most used version?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
  },
];

var options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    //passing a component inside another component will be dellieverd as children to parent component!
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown title="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
