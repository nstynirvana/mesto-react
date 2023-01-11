import React from 'react';

function Card({ card, onCardClick }) {
    const { img, title, like } = card;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <>
            <div className="element">
                <img onClick={handleClick} className="element__image" src={img} alt={title}/>
                <button type="button" className="element__delete-button hidden" name="delete" value="delete"></button>
                <div className=" element__info">
                    <h2 className="element__title">{title}</h2>
                    <div className="element__container-likes">
                        <button aria-label="Лайк" type="button" className="element__like-button" name="like"
                            value="like"></button>
                        <p className="element__sum-likes">{like}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;