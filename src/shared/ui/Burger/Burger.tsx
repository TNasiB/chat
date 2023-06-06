import src from "assets/burger.svg";
import "./Burger.scss";

export function Burger() {
  return (
    <button className="burger-btn">
      <img src={src} alt="burger" />
    </button>
  );
}
