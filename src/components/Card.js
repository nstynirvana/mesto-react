import React from 'react';

function Card(props) {
   
    const handleClick = () => {
        props.onCardClick(props.card);
    };  

    return (
        <>
            <div className="element">
                <img onClick={handleClick} className="element__image" src={props.card.link} alt={props.card.title} />
                <button type="button" className="element__delete-button hidden" name="delete" value="delete"></button>
                <div className=" element__info">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__container-likes">
                        <button aria-label="Лайк" type="button" className="element__like-button" name="like"
                            value="like"></button>
                        <p className="element__sum-likes">{props.card.likes.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;