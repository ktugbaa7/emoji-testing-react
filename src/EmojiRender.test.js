/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import emojiList from './emojiList.json';
import App from './App';


describe("Emoji Render Test",()=>{
    beforeEach(()=>{
        render(<App />)
    })
    test("should render emoji list",()=>{
        const emojList = emojiList.slice(0, 10);
        emojList.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })
})