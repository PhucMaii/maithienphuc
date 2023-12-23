import React from 'react'
import { Box } from "@mui/material"
import { FC } from "react"
import { SkillCard } from "./SkillCard"

export const SkillSet: FC = () => {
    const skillSet: SkillCard[] = [
        {
            title: 'Front End Development',
            description: `I love convert and translate creative visions 
                            into seamless and attractive interface website, with focus on accessibility, 
                            responsiveness and a commitment to continuous learning`,
            tags: ['ReactJS', 'Javascript', 'Typescript']
        },
        {
            title: 'Back End Development',
            description: `Well-structured architecture and scalable server-side solutions are essential 
                            in order to perform a great perfomance and keep the users coming back`,
            tags: ['NextJS', 'NodeJS', 'MongoDB', 'SQL']
        },
        {
            title: 'UI/UX Design',
            description: `I love designing digital experiences that look great and are easy 
                            for people to use. Also, it is very essential in web development to 
                            make the product user-friendly.`,
            tags: ['Figma']
        },
    ]
    return (
        <Box display="flex" gap={4} justifyContent="center" flexWrap="wrap" my={4}>
            {
                skillSet && skillSet.map((skill) => {
                    return <SkillCard 
                                title={skill.title}
                                description={skill.description}
                                tags={skill.tags} 
                            />
                })
            }
        </Box>
  )
}
