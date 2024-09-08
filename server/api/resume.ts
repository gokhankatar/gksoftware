export default eventHandler((event) => {

    const cv = {
        general: {
            name: 'Gokhan Katar',
            title: 'Front End Developer',
            email: 'katar_gokhan@hotmail.com'
        },
        education: [
            { institution: 'insurance', school: 'baskent', degree: 'bachelor', time: '2015-2020' },
            { institution: 'finance', school: 'atilim', degree: 'master', time: '2022-2024' },
            { institution: 'computer-programming', school: 'anadolu', degree: 'bachelor', time: '2024-' }
        ],
        projetcs: [
            { name: 'academy', link: 'https://esrefugurcelik.com/' },
            { name: 'get-country', link: 'https://www.getcountry.net/' },
            { name: 'follow-yourself', link: 'https://followyourself.net/' },
            { name: 'gksoftware', link: 'https://gksoftware.net/' },
        ],
        certificates: [
            { name: 'vektorel' }
        ],
        experiences: [
            { experience: 'freelance', time: '2020-' }
        ],
        skills: [
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
            "VueJs",
            "NuxtJs",
            "Firebase",
            "Npm",
            "Windows",
            "MacOS",
            "Git",
            "Github",
            "Vuetify",
            "Gsap",
            "i18n",
            "Bootstrap",
            "ViteJs",
            "Webpack",
            "Axios API",
            "AJAX",
            "Fetch API",
            "Rest API",
            "SwiperJs",
            "Hosting",
            "Domain",
            "SaaS",
            "PaaS"
        ],
        whatNext: [
            "NodeJs",
            "MySql",
            "Linux",
            "Swift"
        ]
    }

    return cv;
})