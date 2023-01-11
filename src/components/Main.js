import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getInitialCards(), api.getInitialUsers()])
            .then(([cards, infoUsers]) => {
                setUserName(infoUsers.name);
                setUserDescription(infoUsers.about);
                setUserAvatar(infoUsers.avatar);
                setCards(cards.map((card) => ({
                    img: card.link,
                    title: card.name,
                    like: card.likes.length,
                    idCard: card._id
                })
                ))
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <main className="content">

                <section className="profile">
                    <button onClick={props.onEditAvatar} className="profile__image-edit-button">
                        <img src={userAvatar} className="profile__image" alt="Аватар пользователя" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__title">{userName}</h1>
                            <button onClick={props.onEditProfile} aria-label="Редактировать" type="button" className="profile__edit-button" name="edit" value="edit"></button>
                        </div>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button onClick={props.onAddPlace} aria-label="Добавить" type="button" className="profile__add-button" name="add"></button>
                </section>

                <section className="elements">
                </section>

            </main>

            <section className="card">{cards.map(({ ...card }) =>
                <Card onCardClick={props.onCardClick} card={card} key={card.idCard} {...card} />
            )}
            </section>
        </>
    );
}

export default Main;
