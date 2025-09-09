import React from 'react';
import styles from './ControlBar.module.scss';

interface ControlBarProps {
    active: number;
    totalSegments: number;
    onPrevSegment: () => void;
    onNextSegment: () => void;
}

const pad2 = (n: number) => n.toString().padStart(2, '0');

export const ControlBar: React.FC<ControlBarProps> = ({ active, totalSegments, onPrevSegment, onNextSegment }) => {
    return (
        <div className={styles.controlBar}>
            <div className={styles.segmentControls}>
                <span className={styles.segCount}>
                    {pad2(active + 1)}/{pad2(totalSegments)}
                </span>
                <div className={styles.segBtns}>
                    <button
                        onClick={onPrevSegment}
                        className={`${styles.segBtn} ${styles.segBtnPrev}`}
                        aria-label="Предыдущий временной отрезок"
                    />
                    <button
                        onClick={onNextSegment}
                        className={`${styles.segBtn} ${styles.segBtnNext}`}
                        aria-label="Следующий временной отрезок"
                    />
                </div>
            </div>
        </div>
    );
};
