import React, { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/harisali2533/new-meeting'; // replace if needed

const Book: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const id = 'calendly-widget-js';

        const initCalendly = () => {
            const win = window as any;
            const parent = containerRef.current;
            if (!parent) return;
            // clear existing children (if any)
            parent.innerHTML = '';
            try {
                if (win.Calendly && typeof win.Calendly.initInlineWidget === 'function') {
                    win.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: parent });
                    return;
                }
            } catch (err) {
                // ignore and fallback to iframe below
            }

            // Fallback: embed Calendly via iframe (more reliable across SPA navigation)
            // Calendly supports embed_type=Inline and embed_domain parameters
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
            const s = document.createElement('script');
            s.src = 'https://assets.calendly.com/assets/external/widget.js';
            s.async = true;
            s.id = id;
            s.onload = () => initCalendly();
            document.body.appendChild(s);
        } else {
            // script already present — re-init widget
            initCalendly();
        }

        return () => {
            // cleanup: remove any Calendly nodes we added
            if (containerRef.current) containerRef.current.innerHTML = '';
        };
    }, []);

    return (
        <div className="page">
            <h2 style={{ marginBottom: '1rem' }}>Book an Appointment</h2>
            <div className="calendly-container" style={{ width: '100%', height: '650px' }} ref={containerRef} />
        </div>
    );
};

export default Book;
