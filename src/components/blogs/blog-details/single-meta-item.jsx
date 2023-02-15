
export default function SingleMetaItem({ title, subtitle }) {
  return (
    <div className="postbox__meta-item mb-30">
      <div className="postbox__meta-content">
        <span className="postbox__meta-type">{title}</span>
        <p className="postbox__meta-name">{subtitle}</p>
      </div>
    </div>
  );
}