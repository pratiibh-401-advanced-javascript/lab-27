import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../src/components/counter.js';

describe('Counter component has complete functionality', () => {
    it('Exists', () => {
        let component = shallow(<Counter />)
        expect(component.find('div').exists()).toBeTruthy();
    });

    it('Assert state changes properly', () => {
    });
  
    it('Assert that state is being transferred to the DOM', () => {

    });
  
    it('Assert DOM stability via snapshot testing', () => {

    });
  
  });

