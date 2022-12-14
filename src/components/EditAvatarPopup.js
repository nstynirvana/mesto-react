import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

    React.useEffect(() => {
    }, [props.isOpen]);

    return (
        <>
            <PopupWithForm name="formEditAvatar" title='Обновить аватар' isOpen={props.isOpen} onClose={props.onClose} noValidate>
                <input type="url" className="popup__text popup__text_type_image" required id="profile-avatar-link" placeholder="Ссылка на картинку" name="avatar" value="" />
                <span className="error"></span>
            </PopupWithForm>
        </>
    )
}

export default EditAvatarPopup
