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
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState(false);

    const [cards, setCards] = React.useState([]);

    const [currentUser, setCurrentUser] = React.useState({});

    React.useEffect(() => {
        api.getAllCards()
            .then((cards) => {
                setCards(cards);

            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch(err => console.log(err))
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(element => element._id === currentUser._id);
        api.setCardLike(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((element) => element._id === card._id ? newCard : element));
            })
            .catch(err => console.log(err))
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((state) => state.filter(element => element._id !== card._id));
                closeAllPopups()
            })
            .catch(err => console.log(err))
    }

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

            <CurrentUserContext.Provider value={currentUser}>

                <Header />

                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onBtnDelete={handleCardDelete}
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

            </CurrentUserContext.Provider>

        </div>
    );
}

export default App;
