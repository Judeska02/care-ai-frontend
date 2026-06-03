import "./MenuButton.css";

type MenuButtonProps = {
  onClick: () => void;
};

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button
      className="menu-button"
      type="button"
      onClick={onClick}
      aria-label="Open menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}