import React from 'react';

const Main = ({main: {content, skills}}) => {
    const skillList = skills
    .filter(skill => skill.length > 2)
    .map(skill => skill.toLowerCase())
    .map(num => <li key={num}>{num}</li>);
    return (
        <main>
            <p>{content}</p>
            <p>{skillList}</p>
        </main>
    )
}

export default Main;

