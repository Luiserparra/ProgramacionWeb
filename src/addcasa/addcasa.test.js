import React from 'react';
import ReactTestUtils from 'react-dom/test-utils'; 
import addCasa from './addcasa';

describe('addCasa Component', () => {
 
    it('has an form tag', () => {
        const component = ReactTestUtils.renderIntoDocument(<addCasa/>);    
        var form = ReactTestUtils.findRenderedDOMComponentWithTag(
         component, 'form'
        );
    });
   
    it('is wrapped inside a row class', () => {
        const component = ReactTestUtils.renderIntoDocument(<addCasa/>);    
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(
         component, 'row'
       );
    })
  })