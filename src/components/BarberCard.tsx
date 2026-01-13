import React from 'react';

type Rank = 'Junior' | 'Senior' | 'Apprentice' | 'Master';

interface BarberCardProps {
    name: string;
    photo: string;
    specialty?: string;
    bio?: string;
    rank?: Rank;
}

const rankColor = (rank?: Rank) => {
    switch (rank) {
        case 'Senior':
            return '#ffd052';
        case 'Master':
            return '#ffb86b';
        case 'Junior':
            return '#c8d3ff';
        case 'Apprentice':
            return '#a6ffd0';
        default:
            return '#cfb675';
    }
};

const BarberCard: React.FC<BarberCardProps> = ({ name, photo, specialty, bio, rank }) => {
    return (
        <div className="barber-card">
            <div className="barber-photo-frame">
                <img className="barber-photo" src={photo} alt={name} />
            </div>
            <div className="barber-info">
                <div className="barber-name">{name}</div>
                {specialty && <div className="barber-specialty">{specialty}</div>}
                {bio && <div className="barber-bio">{bio}</div>}
            </div>
            {rank && (
                <div
                    style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: rankColor(rank),
                        color: '#20130a',
                        padding: '6px 10px',
                        borderRadius: 12,
                        fontWeight: 700,
                        boxShadow: '0 6px 18px rgba(0,0,0,0.25)',
                        fontSize: '0.9rem',
                        letterSpacing: '0.08em'
                    }}
                >
                    {rank}
                </div>
            )}
        </div>
    );
};

export default BarberCard;
