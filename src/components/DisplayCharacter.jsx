import  React  from  'react';

const  DisplayCharacter = ({ character }) => {
    return (
        <div className="DisplayCharacter">
            <img src={character.image} alt="picture" />
            <ul>
                <li>
                    {character.quote}
                </li>
                <li>
                    {character.character}
                </li>
            </ul>
        </div>
    );
};

export default DisplayCharacter;