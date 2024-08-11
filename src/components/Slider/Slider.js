import React, { useEffect } from 'react';
import h1 from './header1.webp';
import h2 from './header2.jpg';
import h3 from './header3.webp';

const Slider = () => {
    useEffect(() => {
        const carousel = document.querySelector('#indicators-carousel');
        
        if (carousel) {
            const items = carousel.querySelectorAll('[data-carousel-item]');
            const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
            let activeIndex = 0;

            const updateCarousel = (index) => {
                items.forEach((item, i) => {
                    item.classList.toggle('hidden', i !== index);
                });
                indicators.forEach((indicator, i) => {
                    indicator.setAttribute('aria-current', i === index ? 'true' : 'false');
                });
                activeIndex = index;
            };

            const prevButton = carousel.querySelector('[data-carousel-prev]');
            const nextButton = carousel.querySelector('[data-carousel-next]');

            const showNext = () => {
                const nextIndex = (activeIndex + 1) % items.length;
                updateCarousel(nextIndex);
            };

            const showPrev = () => {
                const prevIndex = (activeIndex - 1 + items.length) % items.length;
                updateCarousel(prevIndex);
            };

            if (prevButton) prevButton.addEventListener('click', showPrev);
            if (nextButton) nextButton.addEventListener('click', showNext);

            return () => {
                if (prevButton) prevButton.removeEventListener('click', showPrev);
                if (nextButton) nextButton.removeEventListener('click', showNext);
            };

            // Initialize the carousel
            updateCarousel(activeIndex);
        }
    }, []);

    return (
        <div className="p-4 text-center">
            <div id="indicators-carousel" className="relative w-full" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Carousel items */}
                    <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out" data-carousel-item="active">
                        <img src={h1} className="w-full h-full object-cover" alt="Slide 1" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out hidden" data-carousel-item>
                        <img src={h2} className="w-full h-full object-cover" alt="Slide 2" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center transition-opacity duration-700 ease-in-out hidden" data-carousel-item>
                        <img src={h3} className="w-full h-full object-cover" alt="Slide 3" />
                    </div>
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full bg-white" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
                {/* Slider controls */}
                <button type="button" className="absolute top-1/2 start-0 z-30 flex items-center justify-center -translate-y-1/2 h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-1/2 end-0 z-30 flex items-center justify-center -translate-y-1/2 h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <input type='text' className='w-11/12 m-4 rounded-lg' placeholder='hello Sumit here'/>
        </div>
    );
};

export default Slider;
