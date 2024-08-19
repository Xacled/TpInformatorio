import './Components.css';

interface ProfileProps {
  text: string;
  text2: string;
}

export default function Profile({ text, text2 }: ProfileProps) {
  return (
    <div className="profile-listen">
      <img
        src="src/assets/ytlogo.png"
        alt="YouTube Music Logo"
        className="profile-image"
      />
      <div className="profile-details">
        <span className="profile-name">{text}</span>
        <span className="profile-action">{text2}</span>
      </div>
    </div>
  );
}
