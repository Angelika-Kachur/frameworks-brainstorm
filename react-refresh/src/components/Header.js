import React from 'react';

const headerStyles = {
    background: '#333',
    color: 'orange',
    fontSize: 18,
    textAlign: 'center'
}


const Header = ({title, subtitle}) => {
    return (
        <header style={headerStyles}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    )
}

export default Header;

