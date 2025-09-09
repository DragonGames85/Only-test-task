import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';
import styles from './YearDisplay.module.scss';

interface YearDisplayProps {
    startYear: number;
    endYear: number;
}

export const YearDisplay: React.FC<YearDisplayProps> = ({ startYear, endYear }) => {
    return (
        <>
            <div className={styles.yearLeft}>
                <AnimatePresence mode="wait">
                    <AnimatedNumber value={startYear} />
                </AnimatePresence>
            </div>

            <div className={styles.yearRight}>
                <AnimatePresence mode="wait">
                    <AnimatedNumber value={endYear} />
                </AnimatePresence>
            </div>
        </>
    );
};
