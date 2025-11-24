document.addEventListener('DOMContentLoaded', function() {

    // ======== Scroll Animation (IntersectionObserver) ========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
    // ======== END SCROLL ANIMATION ========


    // === For opening and closing the mobile menu ===
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); 
        });
    }

    // === For contact form submission (REMOVED: Form was removed from HTML) ===


    // =======================================================
    // === NEW: Accordion/FAQ Logic (إضافة تفاعلية لصفحة التواصل) ===
    // =======================================================
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const content = header.nextElementSibling;
            
            // تحقق مما إذا كان العنصر مفتوحًا حاليًا
            const isCurrentlyActive = currentItem.classList.contains('active');

            // 1. إغلاق جميع العناصر الأخرى (لفتح عنصر واحد فقط في كل مرة)
            accordionHeaders.forEach(otherHeader => {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherHeader.nextElementSibling;
                
                if (otherItem !== currentItem) {
                    otherItem.classList.remove('active');
                    // إعادة تعيين ارتفاع محتوى الأكورديون للحركة السلسة
                    otherContent.style.maxHeight = '0';
                    otherContent.style.paddingBottom = '0';
                }
            });

            // 2. فتح/إغلاق العنصر الذي تم النقر عليه
            if (!isCurrentlyActive) {
                currentItem.classList.add('active');
                // تعيين الارتفاع إلى ارتفاع المحتوى الفعلي
                content.style.maxHeight = content.scrollHeight + 20 + 'px'; // +20 لتحسين التباعد السفلي
                content.style.paddingBottom = '20px'; 
            } else {
                currentItem.classList.remove('active');
                // تعيين الارتفاع إلى صفر لإغلاقه بسلاسة
                content.style.maxHeight = '0';
                content.style.paddingBottom = '0';
            }
        });
    });
    // =======================================================
    // === End Accordion Logic ===
    // =======================================================

});