import SchoolIcon from "@mui/icons-material/School";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ComputerIcon from '@mui/icons-material/Computer';


export const journeys: any = [
    {
        title: "Supreme Sprouts Ltd.",
        period: 'Feb 2024 - Present',
        subtitle: 'Full Stack Developer (Full Time)',
        description: 'Worked as a Full Stack Developer at Supreme Sprouts, where I independently developed an ordering software system from scratch. Collaborated directly with my boss and the client to build the application according to their requirements.',
        highlights: [
            'Designed Front End architecture and Back End structure to handle more than 300 users',
            'Take full ownership and responsibility of the product.',
            'Develop real time database with Pusher in order to enhance user experience with auto print feature',
            'Build the codebase from scratch with Typescript, React.js, Node.js and MySQL',
            'Implemented complex data structure and algorithms for searching data across app.'
        ],
        icon: ComputerIcon  
    },
    {
        title: "Trade and Track",
        period: 'Dec 2023 - Feb 2024',
        subtitle: 'Full Stack Developer Intern',
        description: 'Worked as a Full Stack Developer at Trade and Track for three months, contributing to the development of the Trade and Track project codebase.',
        highlights: [
            'Design dark/light theme mode for the application using MUI theme config with React.js.',
            'Create a month-view calendar using full-calendar library integrate with my written API for user to see their trade result.',
            'Optimize and restructure the api code with Nextjs and Prisma.',
            'Create a customized middleware to guard all access to the API.',
            'Gain hands on experience in technology like React.js, Next.js, Prisma and MongoDB'
        ],
        icon: ComputerIcon  
    },
    {
        title: "Little Minh's Kitchen",
        period: 'Dec 2022 - Present',
        subtitle: 'Food and Beverages Server (Part Time)',
        description: `Although the role of a server isn't directly related to technology, it has significantly enhanced my soft skills, such as communication and proper behavior. I recognize that strong communication skills are essential in the technology field, even though I often interact more with computers than with people.`,
        highlights: [
            'Being nice with customer',
            'Working under high pressure',
            'Problem solving in any cases',
            'Good communication and behaving well with customers and co workers'
        ],
        icon: RestaurantIcon  
    },
    {
        title: 'VCC',
        period: 'Sep 2022 - Apr 2024',
        subtitle: 'Diploma in Computer System Technology',
        description: 'This is where I first fell in love with computers, particularly programming. It opened a new chapter in my life, allowing me to gain invaluable experience through numerous hands-on coding projects, ranging from simple to highly complex.',
        icon: SchoolIcon
    },
]