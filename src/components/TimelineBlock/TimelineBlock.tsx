import React, { useEffect, useState } from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import { TimeInterval } from '../../types/app';
import { ControlBar } from '../ControlBar/ControlBar';
import { EventsSlider } from '../EventsSlider/EventsSlider';
import { TimelineCircle } from '../TimelineCircle/TimelineCircle';
import { TimelineHeader } from '../TimelineHeader/TimelineHeader';
import { YearDisplay } from '../YearDisplay/YearDisplay';
import styles from './TimelineBlock.module.scss';

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(v, max));

interface TimelineProps {
    heading?: string;
    segments: TimeInterval[];
    initialIndex?: number;
    className?: string;
}

export const TimelineBlock: React.FC<TimelineProps> = ({ heading, segments, initialIndex = 0, className }) => {
    const [active, setActive] = useState(clamp(initialIndex, 0, segments.length - 1));
    const activeSeg: TimeInterval = segments[active];

    const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
    useEffect(() => {
        swiper?.slideTo(0, 0);
    }, [active, swiper]);

    const prevSegment = () => setActive(v => (v - 1 + segments.length) % segments.length);
    const nextSegment = () => setActive(v => (v + 1) % segments.length);

    return (
        <section className={`${styles.block} ${className ?? ''}`}>
            <span aria-hidden className={styles.bgLineV} />
            <span aria-hidden className={styles.bgLineH} />

            <TimelineHeader title={heading} />

            <div className={styles.stage}>
                <YearDisplay startYear={activeSeg.startYear} endYear={activeSeg.endYear} />
                <TimelineCircle segments={segments} active={active} onSegmentChange={setActive} />
            </div>

            <span aria-hidden className={styles.bgLineB} />

            <ControlBar
                active={active}
                totalSegments={segments.length}
                onPrevSegment={prevSegment}
                onNextSegment={nextSegment}
            />
            <EventsSlider events={activeSeg.events} onSwiperInit={setSwiper} />
        </section>
    );
};

export default TimelineBlock;
