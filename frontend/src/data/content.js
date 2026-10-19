export const img = (name) => `/images/opt/${name}.webp`;

export const NAV = [
  ["/", "Home"],
  ["/community", "Community Involvement"],
  ["/projects", "Projects"],
  ["/leadership", "Leadership"],
  ["/work", "Work Experience"],
  ["/contact", "Contact"],
];

export const SOCIALS = {
  instagram: "https://www.instagram.com/__aryanbasnet__/",
  email: "mailto:basnetaryan05@gmail.com",
  youtube: "https://www.youtube.com/@techwitharyan05/featured",
};

export const RESUME = "/images/AryanBasnet_Resume.pdf";

export const ABOUT = [
  "Hi! I’m Aryan Basnet, a graduate of Rato Bangala School. I am a social entrepreneur and the founder of Vidhata, a nonprofit organization dedicated to providing holistic educational opportunities to underserved students across Nepal. Working with a team of young volunteers, I help develop programs that bring practical learning and skill-building opportunities to students beyond the traditional classroom.",
  "My work also includes AI engineering and education policy research. I am interested in understanding how technology, research, and better-designed systems can address real-world challenges. By bringing together technology, education, and social entrepreneurship, I hope to develop meaningful solutions that expand access to learning and create greater opportunities for underserved communities.",
];

export const MARQUEE = ["Computerphile", "Social Entrepreneur", "Policy Researcher", "Technology", "Education", "Social Development"];

export const EXPLORE = [
  { to: "/community", label: "Community Involvement", note: "Social Impact Initiatives", image: img("vidhata") },
  { to: "/projects", label: "Projects", note: "Research, a book & Tech With Aryan", image: img("youtube_channel") },
  { to: "/leadership", label: "Leadership", note: "Quiz Team & Programming and Robotics Club", image: img("rbs_quiz_team") },
  { to: "/work", label: "Work Experience", note: "Entrepreneurial & professional experience", image: img("presentation") },
  { to: "/contact", label: "Contact", note: "Request a call or send a mail", image: img("AryanBasnet_founder_final") },
];

export const COMMUNITY = {
  vidhata: [
    "With nothing but my backpack, I began my volunteering journey, working in numerous government schools. Along the way, I encountered severely understaffed schools with teachers available only for core academic subjects (usually STEM-oriented), which restricted intellectual growth for students. With limited access to extracurricular education and life skills, their decision-making and critical thinking abilities remained underdeveloped, and they were instead forced into the trap of rote learning. This limited their horizons and aspirations.",
    "Moved by these challenges, I felt a strong need to act. With a heart set on finding a solution, I started \"Vidhata.\" Through Vidhata, we provide non-academic, holistic learning to underprivileged students across Nepal.",
    "Focusing on social, emotional, and ethical development through a comprehensive framework, we help develop a variety of soft skills among our students to enable them to be well-rounded global citizens and expose them to a larger world of opportunities. With us, students find their horizons broadened and become more confident in pursuing bigger ambitions, no longer limited by their lack of knowledge or opportunities.",
  ],
  impact: [
    { n: "125+", label: "Volunteers Connected", tone: "pink", span: "md:col-span-3" },
    { n: "12,000+", label: "Students Impacted", tone: "maroon", span: "md:col-span-3" },
    { n: "30", label: "Partner Organizations", tone: "grey", span: "md:col-span-2" },
    { n: "450+", label: "Lecture Hours", tone: "deep", span: "md:col-span-2" },
    { n: "12", label: "Districts Reached", tone: "grey", span: "md:col-span-2" },
  ],
  stories: ["story1", "story2", "story3", "story4"],
  cohorts: ["training1", "training2", "training3", "training4"],
};

export const FESTIVALS = [
  {
    id: "dashain",
    title: "Dashain",
    subtitle: "My Culture & Inspiration",
    intro: "Dashain is Nepal’s most significant Hindu festival, symbolizing the victory of good over evil and the strength of family bonds.",
    heading: "About Dashain",
    image: img("Dashain1"),
    paras: [
      "Dashain is the longest and most significant festival in Nepal, celebrated by people across the country with great devotion and joy. It symbolizes the victory of good over evil and is rooted in the worship of Goddess Durga, who represents strength, protection, and righteousness. The festival also commemorates the triumph of the goddess over the demon Mahishasura, reinforcing the belief that truth and virtue ultimately prevail.",
      "Observed over fifteen days, Dashain brings families together from near and far. Homes are cleaned and decorated, elders bless younger members with tika and jamara, and people seek blessings for health, prosperity, and success. Traditional rituals, prayers, and offerings are performed, especially during the most important days such as Maha Ashtami, Maha Navami, and Vijaya Dashami.",
      "Beyond its religious significance, Dashain holds deep cultural and social importance. It is a time of reunion, forgiveness, and renewal of relationships. New clothes are worn, traditional foods are shared, and swings (ping) are set up in villages, adding to the festive spirit. Dashain strengthens family bonds, preserves cultural traditions, and fosters a sense of unity and gratitude among people across generations.",
    ],
    essenceTitle: "The Essence of Dashain",
    essence: ["Victory & Renewal", "Family Reunion", "Tradition & Faith", "Gratitude & Blessings"],
    photosTitle: "Photos of Dashain",
    photos: [img("dashain_2"), img("dashain_3")],
  },
  {
    id: "tihar",
    title: "Tihar",
    subtitle: "Festival of Light & Love",
    intro: "A celebration of compassion, devotion, and the sacred bond between brother and sister.",
    heading: "The Bond of Bhai Tika",
    image: img("Tihar1"),
    reverse: true,
    paras: [
      "Tihar, also known as Deepawali, is one of Nepal’s most important festivals, celebrated over five days. It symbolizes the victory of light over darkness and knowledge over ignorance, and highlights values of gratitude, harmony, and respect for all living beings.",
      "Each day of Tihar is dedicated to honoring different beings. Crows, dogs, and cows are worshipped for their symbolic and practical importance, while Goddess Laxmi, the deity of wealth and prosperity, is worshipped with homes illuminated by oil lamps and candles. The final day, Bhai Tika, celebrates the sacred bond between brothers and sisters through prayers for protection, long life, and well-being.",
      "Beyond its religious meaning, Tihar is a festival of togetherness and joy. People decorate their homes with flowers and rangoli, sing Deusi-Bhailo, and exchange sweets and gifts. Tihar strengthens family bonds, promotes compassion, and brings communities together in a warm and festive spirit.",
    ],
    essenceTitle: "The Essence of Bhai Tika",
    essence: ["Protection", "Reciprocity", "Trust", "Cultural Continuity"],
    photosTitle: "Photos of Tihar",
    photos: [img("Tihar2"), img("Tihar3")],
  },
];

export const TITAN = {
  title: "Titan City",
  category: "Educational Game / EdTech",
  description: "An interactive educational game that teaches students about the solar system through engaging missions and gameplay.",
  videoId: "Ng4upY_2MVQ",
  videoUrl: "https://www.youtube.com/watch?v=Ng4upY_2MVQ",
  image: img("titan-city"),
};

export const PROJECTS = [
  {
    id: "research",
    tag: "Research Project",
    title: "Understanding the Impact of Artificial Intelligence (AI) Tools on Teaching and Learning in Government Schools in Nepal",
    text: "Understanding the Impact of Artificial Intelligence (AI) Tools on Teaching and Learning in Government Schools in Nepal” is a research study that examines how AI tools influence teaching effectiveness and student learning outcomes in Nepal’s public schools. Using data collected from 412 teachers across 78 government schools, the study explores the role of teacher readiness, digital infrastructure, and AI adoption in education. It highlights how AI can support classroom learning when combined with proper teacher training and equitable access to technology, while also identifying key challenges faced by rural and low-resource schools.",
    cta: { label: "Read the paper", href: "https://www.ijraset.com/best-journal/understanding-the-impact-of-artificial-intelligence-ai-tools-on-teaching-and-learning-in-government-schools-in-nepal" },
    image: img("research_paper"),
    alt: "First page of the research paper on AI tools in Nepal's government schools",
    portrait: true,
    featuresTitle: "Features of the paper",
    features: [
      ["AI & Education Research", "Examines how AI tools impact teaching and student learning in Nepal’s government schools."],
      ["Teacher Readiness Analysis", "Highlights the importance of teacher training and digital readiness for effective AI integration."],
      ["Infrastructure & Equity Insights", "Explores how infrastructure and resource gaps affect AI adoption in urban and rural schools."],
    ],
  },
  {
    id: "book",
    tag: "Book Project",
    title: "Machine Learning for High Schoolers",
    text: "This book provides a practical introduction to machine learning, specifically designed for high school students. It combines foundational concepts in mathematics, computer science, and data-analysis with step-by-step guidance to create and evaluate machine learning models. With accessible explanations and real-world examples, the book bridges the gap between beginner-friendly resources and overly technical material.",
    cta: { label: "Read the Book", href: "https://www.amazon.com/dp/B0DRPQRGC9/" },
    image: img("book_cover"),
    alt: "Cover of the book Machine Learning for High Schoolers",
    portrait: true,
    reverse: true,
    featuresTitle: "Features of the Book",
    features: [
      ["Concept-First Explanations", "Ideas are introduced intuitively before technical depth."],
      ["Real-World Examples", "Machine learning connected to everyday experiences."],
      ["Student-Centered Structure", "Designed for clarity, flow, and young learners."],
    ],
  },
  {
    id: "channel",
    tag: "YouTube Channel",
    title: "Tech With Aryan",
    text: "I realized that many people in Nepal wanted to learn coding, but most online resources were only available in English. To bridge this gap, I started a YouTube channel where I teach coding in Nepali, making tech education accessible and empowering the Nepali tech community.",
    cta: { label: "Visit Channel", href: "https://www.youtube.com/@techwitharyan05/featured" },
    image: img("youtube_channel"),
    alt: "Tech With Aryan YouTube channel page",
    featuresTitle: "Features of the Channel",
    features: [
      ["Nepali Language Tutorials", "Coding concepts explained clearly in Nepali."],
      ["Beginner-Friendly Content", "Designed for students with little or no prior experience."],
      ["Community-Focused Learning", "Encouraging and supporting Nepal’s growing tech community."],
    ],
    demo: { id: "C-jafqSxrks", thumb: img("techwitharyan-demo"), title: "Tech With Aryan – Video Demonstration" },
  },
];

export const LEADERSHIP = {
  quiz: {
    tag: "Student Leadership",
    title: ["Founder & Captain", "Rato Bangala School Quiz Team"],
    text: "I founded and led my school’s quiz team at the national level competitions, building a committed group of students united by a genuine interest in learning. As captain, I coordinated regular practice sessions, guided team strategy, and fostered a culture of preparation, teamwork, and intellectual curiosity.",
    image: img("rbs_quiz_team"),
    roles: [["Founder", "Conceptualized the team and its academic vision."], ["Captain", "Led the school team in national-level competitions."], ["Mentor", "Trained juniors to ensure continuity and excellence."]],
    galleryTitle: "Competitions & Recognition",
    gallery: [[img("rbs_quiz"), "Quiz competition"], [img("rbs_quiz_certificate_team"), "Team certificate"], [img("rbs_quiz_certificate"), "Award certificate"]],
  },
  club: {
    tag: "Innovation & Impact",
    title: ["Vice President", "Rato Bangala School Programming & Robotics Club"],
    paras: [
      "As the Vice President, I managed the club’s academic and technical activities, organizing regular coding sessions and introductory workshops for junior students. I focused on building strong fundamentals, encouraging peer learning, and guiding members through practical exercises and small projects to develop confidence in programming and robotics.",
      "Building on this foundation, I led the team in developing a glove that translates sign language into text, integrating hardware and software components. I also led club teams in national and regional hackathons, coordinating project development and supporting focused, collaborative work under competitive conditions.",
    ],
    image: img("gloves"),
    roles: [["Assistive Glove", "Wearable technology translating sign language into text."], ["National Hackathon", "First-prize winner representing RBS."], ["Civic-Tech Platform", "Web app built for a garbage-cleaning agency."], ["Best Project Award", "Winner at RBS Science Expo 2023."]],
    galleryTitle: "Robotics, Hackathons & Innovation",
    gallery: [[img("hackathon"), "Hackathon"], [img("prize"), "Prize"], [img("hackathon3"), "Science expo"]],
  },
};

export const WORK = [
  {
    id: "nabil",
    group: "Entrepreneurial Experience",
    title: "Nabil School of Social Entrepreneurship Fellowship Program",
    text: "I was selected to join the Nabil School of Social Entrepreneurship, where I participated in weekly sessions exploring socially driven, scalable ventures. The program strengthened my leadership approach and deepened my understanding of sustainable innovation.",
    bullets: [
      "Gained practical experience in identifying community needs through structured field interviews and root-cause analysis methods.",
      "Learned to design clear and sustainable business models supported by realistic budgeting and resource planning.",
      "Developed an understanding of how to measure and evaluate the social impact of community-focused projects.",
      "Built skills in crafting and delivering pitches for social enterprise and startup ideas.",
    ],
    image: img("nabil_fellowship"),
    alt: "Nabil School of Social Entrepreneurship fellowship",
    photo: true,
    photos: [[img("presentation"), "Presenting during the Nabil fellowship"], [img("session1"), "Participating in a Nabil fellowship session"], [img("session2"), "Collaborative learning during the fellowship"], [img("nabil4"), "Nabil fellowship event"]],
  },
  {
    id: "npf",
    title: "Research Intern, National Policy Forum Nepal",
    text: "As a Research Intern in Education Policy at the National Policy Forum, I contribute to research on education reform, public education systems, and learning outcomes in Nepal. My work involves reviewing existing research, supporting policy development, and examining ways to improve teaching and student learning.",
    bullets: [
      "Conduct literature reviews and policy analysis related to education reform, public education systems, and learning outcomes in Nepal.",
      "Assist in preparing policy briefs, research reports, presentations, and analytical summaries related to education governance and reform.",
      "Support the drafting of a policy recommendation paper for the Ministry of Education focused on improving educational delivery, classroom effectiveness, and student engagement within and beyond formal classroom settings.",
      "Assist in designing and implementing a survey of high school teachers in a selected metropolitan city to assess teaching practices and institutional challenges.",
      "Contribute to the development of research tools and survey instruments to evaluate student learning outcomes among teachers who have received training and those who have not.",
      "Support data collection, survey coordination, preliminary data analysis, and preparation of findings for policy discussions.",
      "Participate in policy discussions, stakeholder consultations, and research meetings organized by the National Policy Forum.",
    ],
    image: img("npf_logo"),
    alt: "National Policy Forum logo",
  },
  {
    id: "helloworld",
    title: "AI Engineer, Hello World IT Solutions",
    text: "As an AI Engineer, I worked on developing an AI-based diagnostic model to support the identification of pneumonia and tuberculosis from chest X-ray images.",
    bullets: [
      "Developed a diagnostic model using a dataset of 7,132 chest X-ray images.",
      "Built a lightweight model architecture with 3.7 million parameters.",
      "Achieved 94% overall diagnostic accuracy in model evaluation.",
      "Received validation from medical experts regarding its potential clinical applicability.",
    ],
    image: img("hello-world-it-solutions-logo"),
    alt: "Hello World IT Solutions logo",
  },
  {
    id: "jantra",
    group: "Work Experience",
    title: "Project Coordinator: Urban TB Control Initiative, Japan-Nepal Health and Tuberculosis Research Association",
    text: "During my role as Project Coordinator for the Urban TB Control Initiative at JANTRA, I worked on strengthening diagnostic access and community-level tuberculosis surveillance in high-density urban areas.",
    bullets: [
      "Collaborated with medical officers and field teams to oversee AI-assisted X-ray screening and TB-LAMP testing.",
      "Led screening operations reaching over 2,500 individuals and supported effective linkage to treatment.",
      "Trained 52 healthcare staff on diagnostic protocols and reporting systems.",
      "Organized and facilitated 12 structured review meetings to refine strategies and track progress.",
    ],
    image: img("jantra-logo"),
    alt: "Japan-Nepal Health and Tuberculosis Research Association logo",
  },
];
