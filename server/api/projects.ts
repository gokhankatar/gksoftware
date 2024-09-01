export default eventHandler((event) => {
  // fotografları da ekleyebilmenin yolunu bul
  const repositories = [
    {
      id:'23Jk1273jd',
      title: "Follow Yourself",
      description:
        "A web application that allows you to track your activities.",
      link: "https://followyourself.net/",
      technologies: [
        "vue",
        "vue-router",
        "i18n",
        "vuetify",
        "vuex",
        "gsap",
        "netlify",
      ],
    },
    {
      id:"aksdh9123",
      title: "Get Country",
      description:
        "A web application that contains a lot of information about all countries in the world",
      link: "https://www.getcountry.net/",
      technologies: ["vue", "vue-router", "gsap", "netlify"],
    },
    {
      id:"123jdnsjnjkc",
      title: "Personal Academician Site",
      description:
        "It is a full stack web application where an academic can share, add, delete and update many of his/her activities such as his/her studies, blog posts, CV. He/she can do these only by logging into the admin panel interface. It is made upon request.",
      link: "https://esrefugurcelik.com/",
      technologies: [
        "vue",
        "vite",
        "vuetify",
        "vue-router",
        "pinia",
        "i18n",
        "momentJs",
        "html2pdf",
        "firebase",
        "netlify",
      ],
    },
    {
      id:"123jdnsj22d2",
      title: "Crypto Tracker",
      description:
        "A web application where every user can add and track any cryptocurrency they want to their watchlist.",
      link: "https://github.com/gokhankatar/crypto-tracker",
      technologies: [
        "vue",
        "vue-router",
        "vuetify",
        "vite",
        "axios",
        "pinia",
        "firebase",
      ],
    },
    {
      id:"123jdnsjn213ujk",
      title: "Food App",
      description: "A basic cafeteria application",
      link: "https://github.com/gokhankatar/crypto-tracker",
      technologies: [
        "vue",
        "vue-router",
        "vite",
        "vuetify",
        "pinia",
        "momentJs",
        "firebase",
      ],
    },
    {
      id:"123jdnsjnjxc",
      title: "Blog App",
      description: "A simple blog application",
      link: "https://github.com/gokhankatar/blog-app",
      technologies: [
        "vue",
        "vue-router",
        "vite",
        "vuetify",
        "pinia",
        "axios",
        "firebase",
      ],
    },
    {
      id:"123jdnUUUc",
      title: "Merchantile App",
      description:
        "It is a trading application developed with front-end and back-end. Auto logout. Add/delete/update product. You can save your products, favorite them or mark them as sold and display them on your relevant pages. At the same time, the total of your sold products and your total earnings will be displayed on your sold page. View products from relevant categories. View the products you have uploaded to the platform together on your 'My Products' page",
      link: "https://github.com/gokhankatar/merchantile-app",
      technologies: [
        "vue",
        "vue-router",
        "vuex",
        "vite",
        "firebase",
        "rest API",
        "axios",
        "vuetify",
      ],
    },
    {
      id:"87cnKKNKs",
      title: "Chat App",
      description: "A basic chat application",
      link: "https://github.com/gokhankatar/chat-app",
      technologies: [
        "vue",
        "vite",
        "vue-router",
        "pinia",
        "momentJs",
        "vuetify",
        "firebase",
      ],
    },
  ];

  return repositories;
});
