import React from 'react'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { ProjectCard, ProjectCardProps } from './ProjectCard'

export const Projects: FC = () => {
    const projList: ProjectCardProps[] = [
      {
        img: "/projects/supremeSprouts.png",
        title: "Supreme Sprouts Ltd.",
        description: `A web application for Supreme Sprouts Company to manage their data and track their orders. It includes 3 sides of the application, driver side, client side and admin side. Driver side is used for delivery system, client side is used for ordering system and admin side is used for management system. The application is built with NextJS, Prisma, MySQL, Typescript and TailwindCSS.`,
        technologies: "NextJS, Prisma, MySQL, Typescript, TailwindCSS",
        versionControl: "GIT",
        githubLink: "private",
        timeRange: "Dec 2023 - Present",
      },
      {
        img: "/projects/QuizApp.png",
        title: "Quiz App",
        description: `The Quiz App fetch data from QuizAPI and it allows user to select and play quiz. 
                        I also used Firebase to store user score to display a ranking board. `,
        technologies: "ReactJS, Firebase, Antd (Ant Design of React), SwiperJS",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/Midterm-CSTP2107",
        deploymentLink: " https://quizapp-one-taupe.vercel.app/",
        timeRange: "Oct 2023 - Nov 2023",
      },
      {
        img: "/projects/learnPDF.png",
        title: "LearnPDF",
        description: `A ChatPDF web-based application for students target to chatting with their uploaded pdf and also they can create their own flash cards based on the document with AI support.`,
        technologies: "NextJS, NeonDB, PostgresSQL, Typescript, ShadcnUI, TailwindCSS, OpenAI, PinceconeDB, AWS, Langchain",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/learn-chatpdf",
        timeRange: "August 2024 - Present",
      },
      {
        img: "/projects/bookNook.png",
        title: "Book Nook",
        description: `This web application seeks to enhance the reservation experience for both customers and restaurants. It features a search and filtering system enabling customers to swiftly locate their preferred dining establishments. Additionally, it offers a user-friendly reservation management interface for restaurants, streamlining the process of handling reservations.`,
        technologies: "ReactJS, Firebase, MUI, Javascript SwiperJS",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/BookNook",
        deploymentLink: "https://book-nook-three.vercel.app/",
        timeRange: "Jan 2024 - Mar 2024",
      },
      {
        img: "/projects/restaurantApp.png",
        title: "Grab & Go",
        description: `The Restaurant Web Application which helps customers to look up 
                        for some restaurants and order from them, then they will come there to pick up 
                        their food. Application is implemented with both restaurant side and 
                        customer side with user-friendly user interface.`,
        technologies:
          "ReactJS, Firebase, ApexChart.js, i18(translation), PWA, Material UI",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/RestaurantApp",
        deploymentLink: "https://restaurant-app-git-dev-phucmaii.vercel.app/",
        timeRange: "Aug 2023 - Nov 2023",
      },
      {
        img: "/projects/marioGame.png",
        title: "Mario Game",
        description: `Mario Game is a fun game where users can play by direct the Mario to eat mushroom
                        and as well as avoid poisons on the way to eat mushrooms. For each mushroom the Mario 
                        has eaten, Mario will increase its speed. I even make the game more interesting when 
                        hide all mushrooms and poisons on the map after 3 seconds. So you need to figure the way to get mushrooms by your memory.`,
        technologies: "HTML, CSS, Javascript",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/MarioGame",
        deploymentLink: "https://mario-game-omega.vercel.app",
        timeRange: "3 days",
      },

    ];
  return (
    <Grid container columnSpacing={4} p={2} justifyContent="center">
        {
            projList && projList.map((proj) => {
                return <Grid item xs={12} md={6}>
                            <ProjectCard proj={proj}/>
                        </Grid> 
            })
        }
    </Grid>
  )
}
