import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

    React.useEffect(() => {
    }, [props.isOpen]);

    return (
        <>
            <PopupWithForm name="formEdit" title='Редактировать профиль' textOfButton='Сохранить' isOpen={props.isOpen} noValidate>
                <input type="text" className="popup__text popup__text_type_name" id="username" required placeholder="Имя" name="username" minLength="2" maxLength="40" />
                <span className="error"></span>
                <input type="text" className="popup__text popup__text_type_job" id="aboutname" required placeholder="О себе" name="aboutname" minLength="2" maxLength="200" />
                <span className="error"></span>
            </PopupWithForm>
        </>
    );
}

export default EditProfilePopup

