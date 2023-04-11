/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('emoji filter test', () => {
    let input;

    beforeEach(() => {
        render(<App />)
        input = screen.getByLabelText("input") // labeli seçiyoruz (label'a input ismi verdik searchInput.js de)
    })
    test('Failed to filter emojis', () => {
       const emojiFilter = screen.getByText("Yum"); // Yum emojisinin filtrelemesini istiyoruz.
       fireEvent.click(input, emojiFilter); 
       expect(emojiFilter).toBeInTheDocument(); //istenilen filtreleme dokümanda gösteriliyor.
    })
})