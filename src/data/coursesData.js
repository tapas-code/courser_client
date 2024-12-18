const coursesData = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://blog.castle.io/content/images/2021/03/blog-thumb-1.png', // Placeholder image
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.',
      },
      {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.',
      },
    ],
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    description: 'Deep dive into advanced JavaScript concepts and techniques.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Understanding Closures',
        content: 'An introduction to closures in JavaScript.',
      },
      {
        week: 2,
        topic: 'Prototypal Inheritance',
        content: 'Exploring inheritance patterns in JavaScript.',
      },
    ],
  },
  {
    id: 3,
    name: 'Full Stack Web Development',
    instructor: 'Michael Brown',
    description: 'Learn full stack web development with modern technologies.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://dm1wsvzj3kcu0.cloudfront.net/wp-content/uploads/2023/06/full-stack-devlopment.jpg',
    duration: '12 weeks',
    schedule: 'Fridays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['HTML', 'CSS', 'JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Full Stack',
        content: 'Overview of full stack development and setting up the environment.',
      },
      {
        week: 2,
        topic: 'Frontend Basics',
        content: 'Building the frontend using HTML, CSS, and JavaScript.',
      },
    ],
  },
  {
    id: 4,
    name: 'Data Science with Python',
    instructor: 'Alice Green',
    description: 'Learn data science techniques and how to use Python for data analysis.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://ncbiinsights.ncbi.nlm.nih.gov/wp-content/uploads/2021/09/python_datascience.png',
    duration: '10 weeks',
    schedule: 'Saturdays, 10:00 AM - 1:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python knowledge', 'Statistics fundamentals'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Data Science',
        content: 'Overview of data science and its applications.',
      },
      {
        week: 2,
        topic: 'Python for Data Analysis',
        content: 'Using Python libraries like pandas and NumPy for data analysis.',
      },
    ],
  },
  {
    id: 5,
    name: 'Machine Learning 101',
    instructor: 'Robert White',
    description: 'Introduction to machine learning concepts and algorithms.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://images.squarespace-cdn.com/content/v1/5daddb33ee92bf44231c2fef/e163d977-3fe5-42da-b959-5b5319027458/machine-learning-in-healthcare.jpg',
    duration: '9 weeks',
    schedule: 'Wednesdays, 3:00 PM - 5:00 PM',
    location: 'Online',
    prerequisites: ['Data Science with Python', 'Linear Algebra'],
    syllabus: [
      {
        week: 1,
        topic: 'Machine Learning Basics',
        content: 'Introduction to machine learning concepts.',
      },
      {
        week: 2,
        topic: 'Supervised Learning',
        content: 'Understanding supervised learning and algorithms.',
      },
    ],
  },
  {
    id: 6,
    name: 'Cloud Computing Fundamentals',
    instructor: 'Emily Johnson',
    description: 'Learn the basics of cloud computing and how to use cloud services.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy98wWh1PtPJyX5HLBAXk5m6YgLwIzR2fVg&s',
    duration: '5 weeks',
    schedule: 'Thursdays, 1:00 PM - 2:30 PM',
    location: 'Online',
    prerequisites: ['Basic Networking Knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Cloud Computing',
        content: 'Overview of cloud computing and its benefits.',
      },
      {
        week: 2,
        topic: 'Cloud Service Models',
        content: 'Understanding different cloud service models.',
      },
    ],
  },
  {
    id: 7,
    name: 'Cybersecurity Basics',
    instructor: 'Mark Black',
    description: 'Introduction to cybersecurity concepts and practices.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'https://www.earthbenddistribution.com/wp-content/uploads/2024/02/cybersecurity_resellers.jpg',
    duration: '7 weeks',
    schedule: 'Fridays, 6:00 PM - 7:30 PM',
    location: 'Online',
    prerequisites: ['Basic Computer Knowledge'],
    syllabus: [
      {
        week: 1,
        topic: 'Understanding Cybersecurity',
        content: 'Overview of cybersecurity threats and defenses.',
      },
      {
        week: 2,
        topic: 'Network Security',
        content: 'Introduction to network security fundamentals.',
      },
    ],
  },
  {
    id: 8,
    name: 'Introduction to AI',
    instructor: 'Sarah Lee',
    description: 'Learn the basics of Artificial Intelligence and its applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://athena.edu.mu/wp-content/uploads/2020/04/Introduction-to-artificial-intelligence.png',
    duration: '8 weeks',
    schedule: 'Mondays, 2:00 PM - 4:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python Knowledge', 'Machine Learning 101'],
    syllabus: [
      {
        week: 1,
        topic: 'What is AI?',
        content: 'Introduction to Artificial Intelligence.',
      },
      {
        week: 2,
        topic: 'AI Applications',
        content: 'Exploring different applications of AI.',
      },
    ],
  },
  {
    id: 9,
    name: 'Big Data Analytics',
    instructor: 'James Williams',
    description: 'Introduction to big data concepts and how to analyze large datasets.',
    enrollmentStatus: 'Closed',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkl-0NzlqpkB8aYoRoKzEvxjDZZzJNyAsddQ&s',
    duration: '10 weeks',
    schedule: 'Wednesdays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['Data Science with Python'],
    syllabus: [
      {
        week: 1,
        topic: 'Big Data Overview',
        content: 'Introduction to big data and its importance.',
      },
      {
        week: 2,
        topic: 'Tools for Big Data',
        content: 'Exploring tools like Hadoop and Spark.',
      },
    ],
  },
  {
    id: 10,
    name: 'DevOps Essentials',
    instructor: 'Angela Brown',
    description: 'Learn the fundamentals of DevOps and how to implement it in projects.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://cd.foundation/wp-content/uploads/sites/78/2020/09/devops.png',
    duration: '8 weeks',
    schedule: 'Tuesdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic Linux Commands', 'Software Development Lifecycle'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to DevOps',
        content: 'Overview of DevOps principles and practices.',
      },
      {
        week: 2,
        topic: 'CI/CD Pipelines',
        content: 'Building continuous integration and delivery pipelines.',
      },
    ],
  },
];

export default coursesData;
