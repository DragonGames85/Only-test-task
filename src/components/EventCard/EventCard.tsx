import React from 'react';
import { Event } from '../../types/app';
import styles from './EventCard.module.scss';

interface EventCardProps {
    event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <article className={styles.card}>
            <time className={styles.date} dateTime={event.date}>
                {event.date}
            </time>
            <p className={styles.desc}>{event.description}</p>
        </article>
    );
};
