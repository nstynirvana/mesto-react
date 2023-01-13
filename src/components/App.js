import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';


function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    const handleCardClick = (card) => {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard(null);
    }

    return (

        <body className="page">

            <Header />

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='userName' />

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='userDescription' />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='userAvatar' />

            <ImagePopup />

            <div className="popup popup_delete">
                <div className="popup__content">
                    <button aria-label="Закрыть" id="editBtnDelete" type="button" className="popup__close-button popup__close-button_edit"></button>
                    <h2 className="popup__heading">Вы уверены?</h2>
                    <button aria-label="Сохранить" id="consent" className="popup__submit-button">Да</button>
                </div>
            </div>
        </body>
    );
}

export default App;
