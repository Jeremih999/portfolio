// import {
//     mobile,
//     backend,
//     creator,
//     web,
//     javascript,
//     typescript,
//     html,
//     css,
//     reactjs,
//     redux,
//     tailwind,
//     nodejs,
//     mongodb,
//     git,
//     figma,
//     docker,
//     meta,
//     starbucks,
//     tesla,
//     shopify,
//     carrent,
//     jobit,
//     tripguide,
//     threejs,
//   } from "../assets";

const experiences = [
    {
      title: "Graphics Designer",
      company_name: "Starbucks",
      // icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020",
      points: [
        "Design amazing logos for my client to standout from their competitors in their respective markets",
        "Head a team of freelancing designer in the past.",
        "Design full product designs.",
        "Participating in design reviews and providing constructive feedback to other designers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Tesla",
      // icon: tesla,
      iconBg: "#F58840",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to Design high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Product Designer",
      company_name: "Shopify",
      // icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using Figma and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other Designers.",
      ],
    },
    {
      title: "Videographer",
      company_name: "Meta",
      // icon: meta,
      iconBg: "#F58840",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "img/carrent.png",
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: "img/jobit.png",
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "WireFraming",
          color: "green-text-gradient",
        },
        {
          name: "Adobe",
          color: "pink-text-gradient",
        },
      ],
      image: "img/tripguide.png",
      source_code_link: "https://github.com/",
    },
  ];


  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our's, but Wiz proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Wisdom does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Wisdom optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our's, but Wiz proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Wisdom does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Wisdom optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];


  const portfolio = [
     {
      img : "./img/one.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     },
     {
      img : "./img/two.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     },
     {
      img : "./img/three.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     },
     {
      img : "./img/four.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     },
     {
      img : "./img/five.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     },
     {
      img : "./img/six.jpg",
      tags : ["flyer", "corel draw", "graphcs design", "adobe"]
     },
     {
      img : "./img/seven.jpg",
      tags : ["flyer", "corel draw", "graphcs design"]
     }
  ]
  export  {experiences, projects, testimonials, portfolio}