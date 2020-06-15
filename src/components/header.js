import React from 'react';


const Header = () => {
    let st = {
        color: 'red',
        fontSize: ' 40px',
    }
    return (
        <h1 style={st} className='header'>todo list</h1>
    )
}

export default Header;