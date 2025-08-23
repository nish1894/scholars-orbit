import './ProfileInfo.css';

const ProfileInfo = ({ name = 'John Doe', avatar }) => {
  return (
    <div className="profile-info">
      <img
        src={avatar || 'https://img.icons8.com/?size=30&id=14736&format=png&color=000000'}
        alt="Profile"
        className="profile-avatar"
      />
      <div className="profile-details">
        <span className="profile-name">{name}</span>
      </div>
    </div>
  );
};

export default ProfileInfo;
