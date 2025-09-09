import React from 'react';
import type { Swiper as SwiperInstance } from 'swiper';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Event } from '../../types/app';
import { EventCard } from '../EventCard/EventCard';
import styles from './EventsSlider.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
interface EventsSliderProps {
    events: Event[];
    onSwiperInit: (swiper: SwiperInstance) => void;
}

export const EventsSlider: React.FC<EventsSliderProps> = ({ events, onSwiperInit }) => {
    return (
        <div className={styles.sliderWrap}>
            <Swiper
                modules={[Pagination, A11y, Keyboard]}
                onSwiper={onSwiperInit}
                keyboard={{ enabled: true }}
                spaceBetween={80}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1.05 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className={styles.swiper}
            >
                <AnimatePresence mode="sync">
                    {events.map(event => (
                        <SwiperSlide key={event.id} className={styles.slide}>
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </AnimatePresence>
            </Swiper>
        </div>
    );
};
