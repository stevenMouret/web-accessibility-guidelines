document.addEventListener("DOMContentLoaded", function(event) {
    console.log('toto');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                alignWithTop: true,
                behavior: 'smooth',
                block: "start"
            });
        });
    });
});
