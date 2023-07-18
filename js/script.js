document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('#navMobile');
    const burger = document.querySelector('#burger').addEventListener('click', () => {
        /* Si la balise contientla classe active on l'enlève */
        if (nav.classList.contains('active')) {
            setTimeout(() => {
                nav.classList.remove('active');
                nav.querySelector('ul').style.display = "none";
            }, '500')
        }
        /* Si la balise ne contient pas la classe active on l'ajoute */

        else {
            nav.classList.add('active')
            nav.querySelector('ul').style.display = "flex";
        }
        /* Si on clique sur les liens dans le menues on ferme. */
        nav.querySelectorAll('a').forEach((links) => {
            links.addEventListener('click', () => {
                nav.classList.remove('active');
                nav.querySelector('ul').style.display = "none";

            })
        })
    })
})
