import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styles from './Badge.module.scss';

interface IBadge {
    label: string;
}

const Badge: React.FC<IBadge> = ({ label }) => {
    return (
        <div className={styles.badge}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={label}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles.badgeLabel}
                >
                    {label}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

export default Badge;
