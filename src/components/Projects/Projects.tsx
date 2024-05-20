import React from 'react'
import { Grid } from '@mui/material'
import { FC } from 'react'
import { ProjectCard, ProjectCardProps } from './ProjectCard'

export const Projects: FC = () => {
    const projList: ProjectCardProps[] = [
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
        img: "/projects/nextjsSheet.png",
        title: "Data Habor Pro",
        description: `Data Habor Pro is an app which is integrated with Google Sheet. 
                        It is very helpful for business who uses google sheet as their 'database'. 
                        In this app, users can create their own form and then customize each field for 
                        each sheet and so on to make their life easier when they want to input data or 
                        statistic into their google sheet`,
        technologies: "NextJS, Prisma, MySQL, Typescript, TailwindCSS",
        versionControl: "GIT",
        githubLink: "https://github.com/PhucMaii/nextjs-sheets-form",
        timeRange: "Dec 2023 - Present",
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
