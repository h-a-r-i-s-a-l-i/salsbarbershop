import React from 'react';
import BarberCard from '../components/BarberCard';

const sampleBarbers = [
    {
        name: 'Salvatore (Sal)',
        photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
        specialty: 'Classic Cuts & Fades',
        bio: '20+ years crafting timeless and modern styles with care.',
        rank: 'Master' as const,
    },
    {
        name: 'Marco',
        photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
        specialty: 'Beard Sculpting & Textures',
        bio: 'Precision-driven, loves textured cuts and beard design.',
        rank: 'Senior' as const,
    },
    {
        name: 'Luis',
        photo: 'https://images.unsplash.com/photo-1531123414780-fca6e3b76eb0?auto=format&fit=crop&w=400&q=80',
        specialty: 'Modern Styles',
        bio: 'Keeps up with trends and delivers fresh, confident looks.',
        rank: 'Junior' as const,
    },
    {
        name: 'Denise',
        photo: 'https://images.unsplash.com/photo-1551836022-0f9f0d5b6d6b?auto=format&fit=crop&w=400&q=80',
        specialty: 'Women & Kids Cuts',
        bio: 'Warm, friendly approach — great with families.',
        rank: 'Senior' as const,
    },
];

const Barbers: React.FC = () => {
    return (
        <div className="barbers-page">
            <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: '2.4rem' }}>
                <h1 className="barbers-header">Meet the Barbers</h1>
                <div className="barbers-grid">
                    {sampleBarbers.map((b) => (
                        <BarberCard
                            key={b.name}
                            name={b.name}
                            photo={b.photo}
                            specialty={b.specialty}
                            bio={b.bio}
                            rank={b.rank}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Barbers;
