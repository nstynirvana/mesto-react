import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const [currentUser, setCurrentUser] = React.useState({});

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
    }

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch(err => console.log(err))
    }, [])
    return (

        <body className="page">

            <Header />

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
            />

            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='userName' />

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='userDescription' />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='userAvatar' />

            <ImagePopup />

            <div className="popup popup_delete">
                <div className="popup__content">
                    <button aria-label="??????????????" id="editBtnDelete" type="button" className="popup__close-button popup__close-button_edit"></button>
                    <h2 className="popup__heading">???? ???????????????</h2>
                    <button aria-label="??????????????????" id="consent" className="popup__submit-button">????</button>
                </div>
            </div>

            <template id="template-element" >
                <div className="element">
                    <img className="element__image" alt="name" />
                    <button type="button" className="element__delete-button hidden" name="delete" value="delete"></button>
                    <div className=" element__info">
                        <h2 className="element__title"></h2>
                        <div className="element__container-likes">
                            <button aria-label="????????" type="button" className="element__like-button" name="like"
                                value="like"></button>
                            <p className="element__sum-likes"></p>
                        </div>
                    </div>
                </div>
            </template>


        </body>
    );
}

export default App;
