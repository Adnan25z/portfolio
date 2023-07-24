import game from "../images/projectsicon/AIG.gif";
import cruise from "../images/projectsicon/cruise.gif";
import connect4 from "../images/projectsicon/connect4.gif";
import chess from "../images/projectsicon/maya1.gif";
import music from "../images/projectsicon/music.png";
import quitch from "../images/projectsicon/quitch.gif";


const portfolioData = [
    {
        image: game,
        link: 'https://github.com/Adnan25z/AIG_towerDefence',
        title: 'Defenders',
        summary: `AI Tower Defense is an engaging fantasy tower defense game that showcases my expertise in game AI development. The key features include:
        • Implemented a recommendation system using GOAP to guide players in making strategic tower placements and upgrades.
        • Integrated A* pathfinding for enemy units, allowing dynamic adaptation to changing game environments.
        • Towers exhibit realistic movement through steering force models, intelligently repositioning for optimal combat.
        • Designed towers with goal-oriented planning, enabling strategic decision-making based on current conditions.
        • Demonstrated the fusion of predictive projectile movement and hierarchical state machines for dynamic tower behaviors.`,
        tech: 'python | pyglet'
    },
    {
        image: cruise,
        link: 'https://github.com/Adnan25z/AIG_towerDefence',
        title: 'cruiseEase',
        summary: `As part of my university project, I developed a Cruise Booking web application hosted locally on a development server. The application is built using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL, and it aims to provide users with an engaging platform to explore and book cruise vacations. This university project serves as a demonstration of my web development skills and does not include real-time availability and pricing or a fully secure user authentication system.
        Key Features:
        • User-Friendly Interface: The web application offers an intuitive user interface, allowing users to easily browse through various cruise options and explore details.
        • Cruise Search and Filters: Users can efficiently search for available cruises and apply filters to refine their search based on destinations, dates, budgets, and other preferences.
        • Booking System: The application includes a booking system that allows users to make reservation requests for their desired cruises.
        • Admin Panel: As part of the project, I designed an admin panel to manage cruise listings, view bookings, and handle customer inquiries.
        • Home and Description Pages: The home page showcases enticing cruise packages, while the description pages provide additional information about each cruise, amenities, and user testimonials.`,
        tech: 'HTML | CSS | JavaScript | Bootstrap | PHP | MySQL'
    },
    {
        image: connect4,
        link: 'https://github.com/Adnan25z/AIG_towerDefence',
        title: 'connect4',
        summary:`My Connect4 game is a dynamic and engaging desktop application built in C# and WPF, leveraging the Caliburn Micro library. This project demonstrates my proficiency in C# programming, Windows Presentation Foundation (WPF), the Model-View-ViewModel (MVVM) architectural pattern, and various advanced design patterns like the State and Strategy patterns.
        Key Features include:
        • Player vs. Player and AI vs. Player Modes: The application offers two exciting gameplay modes, allowing users to play against each other or challenge the AI in three difficulty levels.
        • AI Implementation using Minimax: The AI opponent employs the Minimax algorithm to make optimal moves, providing challenging gameplay experiences.
        • State Pattern: The application utilizes the State pattern to manage different game states, such as Player's Turn, AI's Turn, Game Over, etc., ensuring efficient handling of game flow and logic.
        • Strategy Pattern: The Strategy pattern is employed to manage different AI difficulty levels, enabling easy extensibility to add more sophisticated AI strategies in the future.
        • Save Games in JSON Format: Players can save ongoing games in JSON format, allowing them to continue gameplay at a later time and preserving the game state.
        • MVVM Architecture: The entire project follows the MVVM architectural pattern, ensuring a clear separation of concerns between the user interface and business logic.`,
        tech: 'C# | WPF | caliburn'
    },
    {
        image: chess,
        link: 'https://github.com/Adnan25z/AIG_towerDefence',
        title: 'Maya 3D modelling: objects and environments',
        summary:`Created using Autodesk Maya for modelling and the Arnold renderer for achieving realistic and atmospheric visual effects. This project reflects my expertise in 3D modelling, lighting, shading, and rendering, as well as my creative abilities in designing a haunting and immersive environment.
        Key Features:
        Spooky Environment Design: The project involves the creation of a chilling and immersive environment, incorporating elements like fog, eerie lighting, haunting objects, and a carefully crafted ambience.
        3D Modelling in Maya: I used Autodesk Maya to model and sculpt various objects in the environment, such as a jar filled with eyeballs, levitating chess board and pieces and other spooky elements.
        Realistic Lighting with Arnold: The Arnold renderer was employed to achieve realistic lighting effects, creating the perfect atmosphere for the Spooky Environment with dynamic shadows and eerie glows.
        Shading and Texturing: I meticulously applied materials and textures to enhance the visual appeal of objects, making them appear worn, weathered, and ghostly.
        Composition and Camera Work: Carefully crafted camera angles and composition contribute to the haunting and mysterious atmosphere, enhancing the overall visual storytelling.`,
        tech: 'C# | WPF | caliburn'
    }
];

export default portfolioData