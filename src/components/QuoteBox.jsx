import '../styles/quoteBox.css'
import React, { useState } from 'react';
import quotes from '../quotes.json'

const QuoteBox = () => {

    const setRandomColor = () => {
        let r = Math.floor( Math.random() * 255 );
        let g = Math.floor( Math.random() * 255 );
        let b = Math.floor( Math.random() * 255 );

        return `rgb( ${r}, ${g}, ${b} )`;
    }
    
    const changeRandomNumber = () => {
        return Math.floor( Math.random() * quotes.length - 1 );
    }

    const [ randomNumber, setRandomNumber ] = useState( changeRandomNumber() );
    const [ quote, setQuote ] = useState( quotes[ randomNumber ].quote );
    const [ author, setAuthor ] = useState ( quotes[ randomNumber ].author );
    const [ color, setColor ] = useState( setRandomColor() );

    const changeQuote = ( n ) => {
        setQuote( quotes[ n ].quote );
        setAuthor( quotes[ n ].author );
        setColor( setRandomColor() );
    }

    document.body.style = `background-color: ${ color }`

    return (
        <div className='quoteBox' style={{ color: color }}>
            <p> <i className='bx bxs-quote-left'></i> { quote } </p>
            <h3> { author } </h3>
            <button onClick={ () => changeQuote( changeRandomNumber() ) } style={{ backgroundColor: color }}> 
                <i className='bx bxs-chevron-right'></i> 
            </button>
        </div>
    );
};

export default QuoteBox;