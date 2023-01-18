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

    const [selectedCard, setSelectedCard] = React.useState(false);

    const [userData, setUserData] = React.useState({});

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((res) => {
                setUserData(res);
            })
            .catch((err) => {
                console.log(err);
            })
        api.getAllCards()
            .then((cards) => {
                setCards(cards);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

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
        setSelectedCard(false);
    }
    
    return (

        <div className="page">

            <Header />

            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                userAvatar={userData.avatar}
                userDescription={userData.about}
                userName={userData.name}
                cards={cards}
            />

            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name='userName' />

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name='userDescription' />

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name='userAvatar' />

            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
            />

            <div className="popup popup_delete">
                <div className="popup__content">
                    <button aria-label="Закрыть" id="editBtnDelete" type="button" className="popup__close-button popup__close-button_edit"></button>
                    <h2 className="popup__heading">Вы уверены?</h2>
                    <button aria-label="Сохранить" id="consent" className="popup__submit-button">Да</button>
                </div>
            </div>
        </div>
    );
}

export default App;
