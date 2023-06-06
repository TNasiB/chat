import "./Avatar.scss";

interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar(props: AvatarProps) {
  return <img className="user-avatar" src={props.src} alt={props.alt} />;
}
