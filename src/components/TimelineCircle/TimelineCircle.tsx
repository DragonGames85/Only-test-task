import { motion } from 'framer-motion';
import React from 'react';
import { useAngles } from '../../hooks/useAngles';
import { TimeInterval } from '../../types/app';
import Badge from './Badge';
import styles from './TimelineCircle.module.scss';

interface TimelineCircleProps {
    segments: TimeInterval[];
    active: number;
    onSegmentChange: (index: number) => void;
}

export const TimelineCircle: React.FC<TimelineCircleProps> = ({ segments, active, onSegmentChange }) => {
    const activeSeg = segments[active];
    const angles = useAngles(segments.length);

    const step = 360 / segments.length;
    const rotation = -(active * step + 90);

    return (
        <div className={styles.circleWrap}>
            <motion.div
                className={styles.circle}
                animate={{ rotate: rotation }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                style={{ ['--global-rot' as any]: `${rotation}deg` }}
            >
                {segments.map((seg, i) => {
                    const angle = angles[i];
                    const selected = i === active;
                    return (
                        <div
                            key={seg.id}
                            className={`${styles.dotWrap} ${selected ? styles.dotWrapActive : ''}`}
                            style={{ ['--angle' as any]: `${angle}deg` }}
                        >
                            <button
                                role="tab"
                                className={`${styles.dot} ${selected ? styles.dotActive : ''}`}
                                onClick={() => onSegmentChange(i)}
                                title={`${seg.label}: ${seg.startYear}–${seg.endYear}`}
                            />
                            <span className={styles.dotNumber}>{i + 1}</span>
                        </div>
                    );
                })}
            </motion.div>

            <Badge label={activeSeg.label} />
        </div>
    );
};
