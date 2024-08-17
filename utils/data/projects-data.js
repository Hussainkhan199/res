import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Talkdaily INC',
        description: "Developed a wordpress site that mainly provides cellular and Internet serivces in US and Canada. I used PHP as a backend language and for database I use Mysql. also used javascript for frontend and for some backend functionality. Also developed API for data management.  ",
        tools: ['Wordpress', 'Mysql', 'Chatgpt', 'Google APIs', 'PHP', 'Plugins', 'javascript', 'APIs', 'Woocommerce'],
        role: 'Full Stack Developer',
        code: '',
        demo: 'https://www.talkdailyinc.com/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Travel Agency Web App',
        description: 'I have designed and developed a full-stack web app for a Travel Agency based in UK. I created UI with Figma. and for frontend I use Blade Template with Bootstrap and CSS. This web app support multiple langauges for differnet Users. Added Google APIs, captcha for verificaton. Created CMS panels for easy management for Admins and Uses POVs, Created Role base permission.',
        tools: ['Laravel', 'Blade Template', "Google Maps", "Bootstrap", "Travels Api", "MySQL", "Captcha", "Validation Api", "CSS", "Figma"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },