(function () {
    // Обо мне
    const aboutLists = document.querySelectorAll('.about__list');

    aboutLists.forEach(aboutList => {
        aboutList.addEventListener('click', toggleTab);
    });

    function toggleTab(event) {
        const aboutControl = event.target.closest('.about__link');

        if (!aboutControl) return;

        event.preventDefault();

        const aboutContentID = aboutControl.getAttribute('href').substring(1);
        const aboutContent = document.getElementById(aboutContentID);

        if (!aboutContent) {
            return;
        }

        document.querySelector('.about__content--check').classList.remove('about__content--check');
        aboutContent.classList.add('about__content--check');

        document.querySelectorAll('.tab-control__link--active').forEach(link => {
            link.classList.remove('tab-control__link--active');
        });

        aboutControl.classList.add('tab-control__link--active');
    }

})();