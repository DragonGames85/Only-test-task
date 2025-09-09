import { useMemo } from 'react';

/**
 * Возвращает массив углов для равномерного размещения точек по окружности.
 * По умолчанию старт с 30° и далее по часовой стрелке.
 */
export const useAngles = (count: number, startDeg: number = 30): number[] => {
    return useMemo(() => {
        const step = 360 / Math.max(1, count);
        return Array.from({ length: count }, (_, i) => startDeg + i * step);
    }, [count, startDeg]);
};
