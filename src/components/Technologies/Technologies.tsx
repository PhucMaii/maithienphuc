import React from 'react';
import { Box } from '@mui/material';
import { FC } from 'react'
import { Tech, TechCard } from './TechCard';


export const Technologies: FC = () => {
  const technologies: Tech[] = [
    {
      icon: "/techIcons/nextjs.png",
      name: "NextJS",
    },
    {
      icon: "/techIcons/nodejs.png",
      name: "NodeJS",
    },
    {
      icon: "/techIcons/reactjs.png",
      name: "ReactJS",
    },
    {
      icon: "/techIcons/typescript.png",
      name: "Typescript",
    },
    {
      icon: "/techIcons/aws.jpeg",
      name: "AWS",
    },
    {
      icon: "/techIcons/expressjs.png",
      name: "ExpressJS",
    },
    {
      icon: "/techIcons/javascript.png",
      name: "Javascript",
    },
    {
      icon: "/techIcons/html.png",
      name: "HTML",
    },
    {
      icon: "/techIcons/css.png",
      name: "CSS",
    },
    {
      icon: "/techIcons/mongodb.png",
      name: "MongoDB",
    },
    {
      icon: "/techIcons/mysql.png",
      name: "MySQL",
    },
  ];
  return (
    <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap" my={4}>
      {technologies &&
        technologies.map((tech) => {
          return <TechCard icon={tech.icon} name={tech.name} />;
        })}
    </Box>
  );
}
