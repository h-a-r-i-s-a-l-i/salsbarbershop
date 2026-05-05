import React, { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/harisali2533/new-meeting';

const Book: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const id = 'calendly-widget-js';

        const initCalendly = () => {
            const win = window as any;
            const parent = containerRef.current;
            if (!parent) return;
            parent.innerHTML = '';

            if (win.Calendly && typeof win.Calendly.initInlineWidget === 'function') {
                win.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: parent });
                return;
            }

            const iframe = document.createElement('iframe');
            const host = window.location.hostname || 'localhost';
            const src = `${CALENDLY_URL}?embed_domain=${encodeURIComponent(host)}&embed_type=Inline`;
            iframe.src = src;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';
            iframe.setAttribute('title', 'Calendly scheduling');
            parent.appendChild(iframe);
        };

        if (!document.getElementById(id)) {
            const script = document.createElement('script');
            script.src = 'https://assets.calendly.com/assets/external/widget.js';
            script.async = true;
            script.id = id;
            script.onload = initCalendly;
            document.body.appendChild(script);
        } else {
            initCalendly();
        }

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <main className="booking-page">
            <section className="page-hero booking-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Book Your Visit</span>
                    <h1>Reserve a premium appointment.</h1>
                    <p>Secure your spot with our fast and easy scheduling experience. Your next sharp look starts here.</p>
                </div>
            </section>

            <section className="section-container booking-content">
                <div className="booking-intro">
                    <h2>Choose your time</h2>
                    <p>Use the booking widget below to select the service, date, and time that fits your schedule.</p>
                </div>
                <div className="calendly-wrapper" ref={containerRef} />
            </section>
        </main>
    );
};

export default Book;
