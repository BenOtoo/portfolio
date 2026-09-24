/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("mobile-navigation-open");

    });

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".project, .skill-block, .about-content"
);


const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (!entry.isIntersecting) {
                return;
            }


            entry.target.animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(24px)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                ],
                {
                    duration: 700,
                    easing: "cubic-bezier(.2,.7,.2,1)",
                    fill: "forwards"
                }
            );


            revealObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   CLOSE MOBILE NAVIGATION AFTER CLICK
   ========================================================= */

const navigationLinks = document.querySelectorAll(
    ".main-navigation a"
);


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove(
            "mobile-navigation-open"
        );

    });

});
