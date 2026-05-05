type TestimonialCardProps = {
    name: string;
    role: string;
    quote: string;
    rating?: number;
};

export default function TestimonialCard({ name, role, quote, rating = 5 }: TestimonialCardProps) {
    return (
        <article className="testimonial-card">
            <div className="testimonial-stars">{'★'.repeat(rating)}</div>
            <p className="testimonial-quote">“{quote}”</p>
            <div className="testimonial-author">
                <span className="testimonial-name">{name}</span>
                <span className="testimonial-role">{role}</span>
            </div>
        </article>
    );
}
