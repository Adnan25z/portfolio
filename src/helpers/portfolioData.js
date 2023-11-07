import game from "../images/projectsicon/AIG.gif";
import cruise from "../images/projectsicon/cruise.gif";
import connect4 from "../images/projectsicon/connect4.gif";
import chess from "../images/projectsicon/maya1.gif";
import music from "../images/projectsicon/music.gif";
import quitch from "../images/projectsicon/quitch.gif";
import javaee from "../images/projectsicon/Picture1.png";
import WanderLog from "../images/projectsicon/WanderLog.jpg";
import AquaVision from "../images/projectsicon/aquavision.gif";
import groupBehaviour from "../images/projectsicon/groupBehaviour(HunterPrey).gif";
import library from "../images/projectsicon/library.png";
import AIcampaign from "../images/projectsicon/AIcampaign.jpg";
import pathFind from "../images/projectsicon/pathFind.gif";

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
        image: javaee,
        link: 'https://github.com/Adnan25z/ConsulatancyCompany',
        title: 'secure and scalable website using java ee8',
        summary: `Created a website using java ee8, primefaces and JSF and then also used mysql to store the data in the database. I developed a comprehensive Consultant Company Management System (CCMS) to facilitate effective operations
        of a consultancy firm. The software application aims to streamline the company's process by providing distinct
        functionalities catered to the needs of various user roles, including Admin, Client, Consultant, and Recruiter. CCMS will
        offer capabilities such as client and project management, consultant assignment, and billing creation, fostering better
        communication, transparency, and efficiency in the consultancy business operations.`,
        tech: 'java ee8 | jsf | primefaces | netbeans IDE'
    },
    {
        image: music,
        link: 'https://github.com/Adnan25z/RubyMusicPlayer',
        title: 'Music Player',
        summary: `In this project, I developed a Music Player application in Ruby, utilizing the powerful Gosu library to create an immersive music listening experience. The application showcases my technical skills in Ruby programming, graphical rendering, and effective integration of external libraries.
        Key Features:
        Gosu Integration: I harnessed the capabilities of Gosu to achieve high-quality graphic rendering, enabling the display of album artwork and interactive control buttons for seamless music playback.
        Album and Track Management: Through well-structured Ruby data structures, I efficiently managed multiple albums and their corresponding tracks, allowing users to browse and select their desired music effortlessly.
        Responsive Event Handling: I implemented Gosu's event handling mechanisms to ensure smooth and responsive user interactions, allowing users to control music playback intuitively.`,
        tech: 'Ruby | Gosu'
    },
    {
        image: AquaVision,
        link: 'https://github.com/capstoneproject28/fish-detection-and-tracking',
        title: 'AquaVision',
        summary: `As part of my software development portfolio, I played a pivotal role in creating 'AquaVision'—a sophisticated video analytics platform designed to streamline the process of video handling, processing, and data visualization for ecological monitoring. This project, which was my university capstone, showcases my comprehensive skills in full-stack web development, particularly in backend development. The application facilitates seamless video uploads, backend processing with machine learning integration, and a user-friendly interface to display processed data. While the project is a robust prototype, it highlights backend processing over frontend intricacies, focusing on efficient data handling, storage, and retrieval with Firebase, as well as secure user authentication.
        Key Features:
        Efficient Video Processing: Implemented robust file handling to ensure only compatible video formats are uploaded, with a unique naming convention that enhances traceability and prevents file conflicts.
        Firebase Integration: Established a secure connection to Firebase for structured video storage and retrieval, allowing for each video to be accompanied by rich metadata for analytics purposes.
        Advanced Analytics: Developed an analytics function that interfaces with the YOLO machine learning model to annotate videos and extract meaningful insights, such as species count and behavior, which are visualized through integrated graphs on the frontend.
        Personalized User Experience: Created a user-specific video retrieval system that filters content based on the logged-in user, ensuring personalized access to data and analytics.
        Dual Authentication System: Built a secure login mechanism supporting both email and username, including token-based session management for enhanced security.
        Machine Learning Integration: Seamlessly integrated the YOLO model to provide real-time predictive analytics on the videos uploaded, further enabling ecological monitoring and research.
        User Interface & Admin Dashboard: Although backend-focused, I contributed to developing a placeholder frontend for user interactions and an admin dashboard for managing the application's content and user activities.`,
        tech: 'React | Django | YOLOv8 | Google Firebase | SQLite'
    },
    {
        image: chess,
        title: 'Maya 3D modelling: objects and environments',
        summary:`Created using Autodesk Maya for modelling and the Arnold renderer for achieving realistic and atmospheric visual effects. This project reflects my expertise in 3D modelling, lighting, shading, and rendering, as well as my creative abilities in designing a haunting and immersive environment.
        Key Features:
        Spooky Environment Design: The project involves the creation of a chilling and immersive environment, incorporating elements like fog, eerie lighting, haunting objects, and a carefully crafted ambience.
        3D Modelling in Maya: I used Autodesk Maya to model and sculpt various objects in the environment, such as a jar filled with eyeballs, levitating chess board and pieces and other spooky elements.
        Realistic Lighting with Arnold: The Arnold renderer was employed to achieve realistic lighting effects, creating the perfect atmosphere for the Spooky Environment with dynamic shadows and eerie glows.
        Shading and Texturing: I meticulously applied materials and textures to enhance the visual appeal of objects, making them appear worn, weathered, and ghostly.
        Composition and Camera Work: Carefully crafted camera angles and composition contribute to the haunting and mysterious atmosphere, enhancing the overall visual storytelling.`,
        tech: 'Maya| Adobe AfterEffects'
    },
    {
        image: cruise,
        link: 'https://github.com/Adnan25z/CruiseBooking',
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
        image: pathFind,
        link: 'https://github.com/Adnan25z/NavigationWithGraphs',
        title: 'pathFinder',
        summary: `"Navigation with Graphs" is a sophisticated simulation project, which I conceptualized and developed from scratch. The primary focus of this project was to implement an interactive environment where autonomous agents utilize heuristic search algorithms for pathfinding and navigation without steering behaviors. This project showcases my comprehensive skills in Python programming and artificial intelligence related to game development.
        Key Features:
        Heuristic Pathfinding Implementation: Built an innovative pathfinding system that harnesses A* and Dijkstra algorithms, enabling agents to intelligently navigate by calculating efficient paths within the simulation.
        Custom Agent Class Design: Architected an Agent class from the ground up, equipped with functionalities for path following, dynamic target setting, and visual rendering within the game environment.
        Interactive Simulation Mechanics: Developed the simulation to update agent positions in real time, facilitating smooth and interactive gameplay that responds to user inputs for target setting and path planning.       
        Varied Agent Dynamics: Introduced the concept of variable agent speeds, enhancing the simulation's realism by mimicking diverse movement capabilities found in real-world entities.`,
        tech: 'Python 3.0 | Pyglet 1.5.27'
    },
    {
        image: connect4,
        link: 'https://github.com/Adnan25z/Connect4WPF',
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
        image: WanderLog,
        link: 'https://github.com/Adnan25z/kotlinCustomApp',
        title: 'WanderLog',
        summary: `WanderLog is an intuitive mobile application crafted for travel enthusiasts to document and organize their favorite destinations. It's built on a robust three-tier architecture, ensuring a seamless user experience.
        Key Features include:
        Place Logging: Users can document new places with descriptions, photos, and more.
        Google Places API: Enhances place information with automated address filling and location data.
        Interactive Maps: Visualize saved places on a map, offering a geographic overview of travels.
        CRUD Functionality: Full capability to create, read, update, and delete entries for flexible travel management.
        Asynchronous Operations: Utilizes coroutines for smooth and responsive API interactions and database transactions.
        User-Friendly UI: Leverages Android's Jetpack components for an elegant and efficient user interface.`,
        tech: 'Android Studio | Kotlin | Places API'
    },
    {
        image: groupBehaviour,
        link: 'https://github.com/Adnan25z/groupBehaviour-Hunter-Prey-',
        title: 'Steering Forces and Hunter Prey simulation',
        summary: `This Python-based simulation engages players with an artificial flocking mechanism, demonstrating complex group behaviors in agents. Utilizing the principles of cohesion, separation, and alignment, each agent dynamically interacts within the environment to simulate natural flock movement, with an intriguing addition of a predator agent to elevate the challenge.
        Key Features:
        Complex Steering Behaviors: Implements cohesion, separation, and alignment to drive realistic flocking patterns.
        Dynamic Group Formation: Agents autonomously align and adjust to fly cohesively in a group.
        Collision Avoidance: Each agent maintains a safe distance autonomously, preventing overlaps and ensuring a smooth simulation.
        Real-Time Variable Adjustments: Players can interactively tweak behavior variables during the simulation to explore different dynamics.
        Debugging Aids: Critical variables and behaviors are displayed on-screen, aiding in understanding and debugging the flocking mechanism.
        Predator and Prey Dynamics: Adds an additional layer of complexity with a predator agent that influences the flock's movement, demonstrating emergent behavior.
        Interactive UI: Allows for the intuitive adjustment of steering forces, enabling players to discover the ideal balance for simulation.
        Visualization Tools: The game visually represents the influences acting on each agent, including the average group heading and neighbor proximity.`,
        tech: 'Python 3.0 | Pyglet 1.5.27'
    },
    {
        image: library,
        link: 'https://github.com/Adnan25z/Library-Reservation-System',
        title: 'LibSpace',
        summary: `LibSpace is a robust library management web application designed to streamline library operations. Developed using JavaScript and PHP, the platform supports cataloging, circulation, and advanced search of books. With features such as member management, due tracking, and fine calculations, LibSpace simplifies library administrative tasks while enhancing user accessibility. Its intuitive interface and robust backend facilitate an efficient and organized library management system.`,
        tech: 'JavaScript | PHP'
    },
    {
        image: AIcampaign,
        link: 'https://github.com/abubakarirfan/ai-campaigns/graphs/contributors',
        title: 'AI-Powered SMS Campaign Generator',
        summary: `This app is an AI-powered web application designed to streamline the creation of SMS campaigns. The application harnesses the power of the OpenAI API to generate content based on user inputs. It provides a seamless user experience by employing Google Sheets as a straightforward, user-friendly database. This innovative tool empowers businesses to execute targeted, efficient, and personalized SMS campaigns, significantly enhancing their communication strategies.`,
        tech: 'Next JS'
    },
];

export default portfolioData