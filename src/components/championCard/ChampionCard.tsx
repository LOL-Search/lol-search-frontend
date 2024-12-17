import React from 'react';
import championImages from '../../assets/images/images';

interface ChampionCardProps {
    name: string;
    title: string;
}

// const ChampionCard: React.FC<ChampionCardProps> = ({ name, title }) => {
    const ChampionCard: React.FC<ChampionCardProps> = ({ name }) => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <img
                src={championImages[name]}
                alt={name}
                style={{ width: '150px', height: '150px', borderRadius: '8px' }}
            />
            {/* <h3>{title}</h3> */}
        </div>
    );
};

export default ChampionCard;
