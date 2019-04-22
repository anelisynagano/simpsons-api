import React from 'react';

const GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div className="GenerateCharacter">
            <button onClick={selectCharacter}>Get Character</button>
        </div>
    );
};

export default GenerateCharacter;