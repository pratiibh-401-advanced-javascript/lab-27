import React from 'react';
import renderer from 'react-test-renderer';

import Counter from '../components/counter/counter.js';

describe('Sample test', () => {
    it('Exists', () => {
        let component = shallow(<Counter />);
        expect(component.find('section').exists()).toBeTruthy();
    });
});

describe('It can assert state changes', () => {

    it('can decrement successfully', () => {
        let component = mount(<Counter />);
        let button = component.find('#decrease');
        button.simulate('click');
        expect(component.state('count')).toBe(-1);
    });

    it('can increment successfully', () => {
        let component = mount(<Counter />);
        let button = component.find('#increase');
        button.simulate('click');
        expect(component.state('count')).toBe(1);
    });

    it('can decrement successfully after multiple simulated clicks', () => {
        let component = mount(<Counter />);
        let button = component.find('#decrease');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        expect(component.state('count')).toBe(-3);
    });

    it('can increment successfully after multiple simulated clicks', () => {
        let component = mount(<Counter />);
        let button = component.find('#increase');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        expect(component.state('count')).toBe(3);
    });

    it('can increment and decrement back to original position successfully after multiple simulated clicks', () => {
        let component = mount(<Counter />);
        let buttonIncrease = component.find('#increase');
        let buttonDecrease = component.find('#decrease');
        buttonIncrease.simulate('click');
        buttonDecrease.simulate('click');
        expect(component.state('count')).toBe(0);
    });

});

describe('Assert that state is being transferred to the DOM', () => {

    it('render elements successfully upon a simulated click of the decrement button', () => {
        let component = mount(<Counter />);
        let button = component.find('#decrease');
        button.simulate('click');
        let displayElement = component.find('span');
        expect(displayElement.text()).toContain('-1')
    });

    it('render elements successfully upon a simulated click of the increment button', () => {
        let component = mount(<Counter />);
        let button = component.find('#increase');
        button.simulate('click');
        let displayElement = component.find('span');
        expect(displayElement.text()).toContain('1')
    });
    
    it('render elements successfully upon multiple simulated clicks of the decrement button', () => {
        let component = mount(<Counter />);
        let button = component.find('#decrease');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        let displayElement = component.find('span');
        expect(displayElement.text()).toContain('-3')
    });

    it('render elements successfully upon multiple simulated clicks of the increment button', () => {
        let component = mount(<Counter />);
        let button = component.find('#increase');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        let displayElement = component.find('span');
        expect(displayElement.text()).toContain('3')
    });

    it('render elements successfully upon multiple simulated clicks of the increment and decrement button', () => {
        let component = mount(<Counter />);
        let buttonIncrease = component.find('#increase');
        let buttonDecrease = component.find('#decrease');
        buttonIncrease.simulate('click');
        buttonDecrease.simulate('click');
        let displayElement = component.find('span');
        expect(displayElement.text()).toContain('0');
    });

});

describe('Assert DOM stability via snapshot testing', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
});
