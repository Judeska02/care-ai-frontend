type ThemeCardProps = {
  title: string;
  colorClassName: string;
  image: string;
  onClick: () => void;
};

export default function ThemeCard({
  title,
  colorClassName,
  image,
  onClick,
}: ThemeCardProps) {
  return (
    <div className="theme" onClick={onClick}>
      <div className={`theme-icon ${colorClassName}`}>
        <img src={image} alt={title} className="theme-icon-image" />
      </div>

      <div className="theme-label">{title}</div>
    </div>
  );
}