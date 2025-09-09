import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const AnimatedNumber: React.FC<{ value: number }> = ({ value }) => {
    const count = useMotionValue(value);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, { duration: 0.8 });
        return controls.stop;
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
};
