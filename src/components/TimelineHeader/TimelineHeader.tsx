import React from 'react';
import styles from './TimelineHeader.module.scss';

interface TimelineHeaderProps {
    title?: string;
}

export const TimelineHeader: React.FC<TimelineHeaderProps> = ({ title = 'Исторические\nдаты' }) => {
    const [line1, line2] = title.split('\n');
    return (
        <header className={styles.header}>
            <h2 className={styles.h2}>
                {line1}
                <br />
                {line2}
            </h2>
        </header>
    );
};
