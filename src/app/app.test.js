import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './app';

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Counter', () => {  

  test('Counter to initialize with 0', () => {
    const counterWrapper = shallow(<App />);
    const text = parseInt(counterWrapper.find('label').text().split(' ')[1]);
  
    expect(text).toEqual(0);
  });

  test('Counter should increment by 1 when button is clicked', () => {
    const counterWrapper = shallow(<App />);
    
    counterWrapper.find('button').simulate('click');
    
    const text = parseInt(counterWrapper.find('label').text().split(' ')[1]);

    expect(text).toEqual(1);
  });
})