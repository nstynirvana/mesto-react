import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    React.useEffect(() => {
      }, [props.isOpen]);

    return (
        <>
            <PopupWithForm textOfButton="Создать" name="formAdd" title='Новое место' isOpen={props.isOpen} onClose={props.onClose} noValidate>
                <input type="text" className="popup__text popup__text_type_title" required id="place-name" placeholder="Название" name="name" minLength="2" maxLength="30"/>
                <span className="form__error image-subtitle-error"></span>
                <input type="url" className="popup__text popup__text_type_image" required id="place-img-link" placeholder="Ссылка на картинку" name="link"/>
                <span className="form__error image-link-error"></span>
            </PopupWithForm>
        </>
    )
}

export default AddPlacePopup
