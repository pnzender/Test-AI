import './Users.css';

function User({ name, avatarUrl }) {
    return (
        <div className="user-profile">
            <img src={avatarUrl} alt={`${name}'s avatar`} className="user-profile__avatar"/>
            <div className="user-profile__name" data-testid="user-card-name">{name}</div>
        </div>
    );
}