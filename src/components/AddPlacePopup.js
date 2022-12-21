import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

    React.useEffect(() => {
      }, [props.isOpen]);
      
    return (
        <>
            <PopupWithForm name="formAdd" title='Новое место' textOfButton='Создать' isOpen={props.isOpen} noValidate>
                <input type="text" className="popup__text popup__text_type_title" required id="place-name" placeholder="Название" name="name" value="" minLength="2" maxLength="30"/>
                <span className="form__error image-subtitle-error"></span>
                <input type="url" className="popup__text popup__text_type_image" required id="place-img-link" placeholder="Ссылка на картинку" name="link" value="" />
                <span className="form__error image-link-error"></span>
            </PopupWithForm>
        </>
    )
}

export default AddPlacePopup
