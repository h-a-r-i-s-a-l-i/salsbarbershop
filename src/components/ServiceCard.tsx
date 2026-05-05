type ServiceCardProps = {
    title: string;
    price: string;
    description: string;
    footnote?: string;
};

export default function ServiceCard({ title, price, description, footnote }: ServiceCardProps) {
    return (
        <article className="service-card">
            <div className="service-card-top">
                <span className="service-label">{title}</span>
                <span className="service-price">{price}</span>
            </div>
            <p>{description}</p>
            {footnote ? <p className="service-note">{footnote}</p> : null}
        </article>
    );
}
