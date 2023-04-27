function ProfileCard(props) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.username}</div>
        </div>
    );
}

export default ProfileCard; 