/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('emoji copy test', () => {
    let item;

    beforeEach(() => {
        render(<App />);
        item = screen.getByText("Blush")
    })
    test('data clipboard fail', () =>  {
        fireEvent.click(item)
        expect(item.parentElement.getAttribute("data-clipboard-text")).toMatch("😊")
    })
})