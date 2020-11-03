import React from 'react'
import codingLaptop from 'scss/images/coding_laptop.jpg';
import darkKeyboard from 'scss/images/dark_keyboard.jpg';

function Home() {
    return (
        <div style={{
            position: 'relative',
            textAlign: 'center',
            color: 'white'
          }}>
            <img src={darkKeyboard} alt='' style={{width: '100%'}}></img>
            <div style={{
                position: 'absolute',
                paddingLeft: '150px',
                top: '8px',
                fontFamily: 'monospace',
                fontSize: '35px',
                marginTop: '30px'
            }}>
                Hello I am Monica. I am a UI developer living in Milpitas, California.
            </div>
            
        </div>
    )
}

export default Home
