

export default function DetailsMetaItem({ title, subtitle }) {
  return (
    <div className="portfolio__details-meta-item d-flex align-items-start">
      <div className="portfolio__details-meta-content">
        <h5>{title}</h5>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
