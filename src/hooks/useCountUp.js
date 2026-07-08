import { useEffect, useRef } from 'react';

export default function useCountUp(end, duration = 2000, startOnVisible = true) {
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const animate = () => {
            if (counted.current) return;
            counted.current = true;
            let start = 0;
            const step = end / (duration / 16);
            const timer = setInterval(() => {
                start += step;
                if (start >= end) {
                    el.textContent = end;
                    clearInterval(timer);
                } else {
                    el.textContent = Math.floor(start);
                }
            }, 16);
        };

        if (startOnVisible) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        animate();
                        observer.unobserve(el);
                    }
                },
                { threshold: 0.5 }
            );
            observer.observe(el);
            return () => observer.disconnect();
        } else {
            animate();
        }
    }, [end, duration, startOnVisible]);

    return ref;
}
