type ThemeCardProps = {
  title: string;
  colorClassName: string;
  onClick: () => void;
};

export default function ThemeCard({ title, colorClassName, onClick }: ThemeCardProps) {
  return (
    <div className="theme" onClick={onClick}>
      <div className={`theme-icon ${colorClassName}`}></div>
      <div className="theme-label">{title}</div>
    </div>
  );
}