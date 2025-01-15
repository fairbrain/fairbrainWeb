$(document).ready(function () {
    $('.slick-slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // ring chart


    const charts = [
        { element: 'ringChart1', label: 'label1', percentage: 85 },
        { element: 'ringChart2', label: 'label2', percentage: 70 },
        { element: 'ringChart3', label: 'label3', percentage: 50 },
        { element: 'ringChart4', label: 'label4', percentage: 35 },
    ];

    charts.forEach((chart) => {
        animateRingChart(chart.element, chart.label, chart.percentage);
    });

    function animateRingChart(elementId, labelId, percentage) {
        const element = document.getElementById(elementId);
        const label = document.getElementById(labelId);
        let start = 0;
        const animationDuration = 2000; // 2 seconds
        const fps = 60;
        const step = 100 / (animationDuration / (1000 / fps)); // Increment step

        const interval = setInterval(() => {
            start += step;
            if (start >= 100) start = 100;

            const currentAngle = (percentage / 100) * start;
            element.style.background = `conic-gradient(
              white 0% ${currentAngle}%,
              black ${currentAngle}% 100%
            )`;

            label.textContent = `${Math.round((percentage / 100) * start)}%`;

            if (start >= 100) clearInterval(interval);
        }, 1000 / fps);
    }
});

