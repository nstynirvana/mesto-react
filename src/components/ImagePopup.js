import React from "react";

function ImagePopup(props) {

    return (
        <>
            <div className="popup popup-visual popup_open-image">
                <div className="popup-visual__review">
                    <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
                    <img src="#" alt="" className="popup-visual__image" />
                    <h2 className="popup-visual__text"></h2>
                </div>
            </div>
        </>
    );
}

export default ImagePopup;
