const courses = {
    ee: {
        communication: [
            {
                name: 'Information Theory and Coding',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=40',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Computer Networks (CS)',
                level: 300,
                hours: '3-0-2',
                credits: 4.5,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=18',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Debasis Das' },
                    { year: 2022, name: 'Prof. Ravi Bhandari' },
                ],
            },
            {
                name: 'Microwave Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=45',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Arani Ali Khan' },
                ],
            },
            {
                name: 'Cellular Communication Networks',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=44',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Arun Kumar Singh' },
                ],
            },
            {
                name: 'Satellite Communications',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=43',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Spread Spectrum Communications',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=41',
                semesterAvailability: ['even', 'odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Optical Communication Systems',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=42',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Nitin Bhatia, Dr. Arpit Khandelwal, Dr. Aashish Mathur' },
                ],
            },
        ],
        signal_processing: [
            {
                name: 'Digital Image Processing',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=50',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Anil Kumar Tiwari' },
                ],
            },
            {
                name: 'Speech Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=48',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Signal Compression',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=47',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'System Identification',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=49',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Himanshu Kumar' },
                ],
            },
        ],
        control_engineering: [
            {
                name: 'Modern Control',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=51',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Nonlinear and Adaptive Control',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=52',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Robust and Optimal Control',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=53',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Foundations of Cyber Physical Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=54',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Introduction to Robotics (IDRP)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://shorturl.at/lBJS0',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Suril Vijaykumar Shah' },
                ],
            },
        ],
        devices_circuits: [
            {
                name: 'VLSI Design',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=56',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Shree Prakash Tiwari' },
                ],
            },
            {
                name: 'Biosensors',
                level: 300,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=57',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Saakshi Dhanekar' },
                    { year: 2022, name: 'Dr. Saakshi Dhanekar' },
                ],
            },
            {
                name: 'Integrated Circuit Technology',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Sensors and Actuators',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=59',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'CAD for VLSI',
                level: 700,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=58',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Physics and Modeling of MOS Transistor',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=60',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2023, name: 'Dr. Harshit Agarwal' },
                    { year: 2021, name: 'Dr. Harshit Agarwal' },
                ],
            },
        ],
        computing_systems: [
            {
                name: 'Deep Learning (AI)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=25',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Vatsa' },
                    { year: 2022, name: 'Dr. Mayank Vatsa' },
                ],
            },
            {
                name: 'High Level Synthesis (CS)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Real-Time Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=62',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Reconfigurable Computing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=63',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Pervasive and Mobile Computing (CS)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=95',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Suchetana Chakraborty' },
                ],
            },
        ],
        power_engineering: [
            {
                name: 'Measurement and Instrumentation',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=69',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Ravi Yadav' },
                ],
            },
            {
                name: 'Power System Analysis and Stability',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=65',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Power System Operation and Control',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=66',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Nishant Kumar' },
                ],
            },
            {
                name: 'Power Electronics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=67',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Industrial Drives',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=68',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
        ],
    },
    cse: {
        theory_algorithms: [
            {
                name: 'Randomized Algorithms',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=101',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Approximation Algorithms',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=56',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Complexity Theory',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=62',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Vimal Raj Sharma' },
                ],
            },
            {
                name: 'Advanced Data Structures',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=29',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Quantum Computing',
                level: 400,
                hours: '3-0-2',
                credits: 3,
                syllabus: 'https://syllabus-link.com/course3',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Graph-theoretic Algorithms',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=83',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Pallavi Jain' },
                ],
            },
            {
                name: 'Parameterized Complexity',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=99',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Lawqueen Kanesh' },
                    { year: 2022, name: 'Dr. Lawqueen Kanesh' },
                ],
            },
            {
                name: 'Optimization (Math)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=27',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Md Abu Talhamainuddin Ansary' },
                    { year: 2022, name: 'Md Abu Talhamainuddin Ansary' },
                ],
            },
        ],
        hardware: [
            {
                name: 'High-level Synthesis (EE/CS)',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=87',
                semesterAvailability: ['even', 'odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Embedded Systems (EE)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=36',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Binod Kumar' },
                    { year: 2022, name: 'Dr. Binod Kumar' },
                ],
            },
            {
                name: 'VLSI Design (EE)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=56',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Shree Prakash Tiwari' },
                ],
            },
            {
                name: 'Hardware Software Co-Design (CS)',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=85',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Binod Kumar' },
                ],
            },
        ],
        systems: [
            {
                name: 'Software Testing and Quality Assurance',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=109',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Sumit Kalra' },
                ],
            },
            {
                name: 'Distributed Database Systems',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=76',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Romi Banerjee' },
                ],
            },
            {
                name: 'Distributed Systems',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=32',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Suchetana Chakraborty' },
                ],
            },
            {
                name: 'Mobile and Pervasive Computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=95',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Suchetana Chakraborty' },
                ],
            },
            {
                name: 'Virtualization and Cloud Computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=116',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sumit Kalra' },
                ],

            },
            {
                name: 'Compiler Design',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=61',
                semesterAvailability: ['even'],
                professors: [
                    
                ],
            },
            {
                name: 'Software Maintenance',
                level: 400,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=36',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        network_security: [
            {
                name: 'Introduction to Wireless Ad hoc Network',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=91',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: '5G Mobile Networks',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=96',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Software Defined Networks',
                level: 700,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=108',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Intelligent Radio Networks (EE)',
                level: 700,
                hours: '3-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=82',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Data Communication Networks (EE)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=35',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Arun Kumar Singh, Dr. Aashish Mathur' },
                    { year: 2023, name: 'Dr. Manoj Choudhary' },
                ],
            },
            {
                name: 'Cryptography and Network Security (CS/EE) ',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=57',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Somitra Kumar Sanadhya' },
                ],
            },
            {
                name: 'Introduction to Blockchain',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=90',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Debasis Das' },
                    { year: 2022, name: 'Dr. Debasis Das' },
                ],
            },
        ],
        ai_ml: [
            {
                name: 'Deep Learning',
                level: 400,
                hours: '3-0-2',
                credits: 4.5,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=25',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Vatsa' },
                    { year: 2022, name: 'Dr. Mayank Vatsa' },
                ],
            },
            {
                name: 'Artificial Intelligence',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=62',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Manish Aggarwal' },
                    { year: 2022, name: 'Dr. Manish Aggarwal' },
                ],
            },
            {
                name: 'Advanced Machine Learning',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=53',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Vatsa' },
                    { year: 2022, name: 'Dr. Mayank Vatsa' },
                ],
            },
            {
                name: 'Dependable Artificial Intelligences',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=26',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Richa Singh' },
                ],
            },
            {
                name: 'Information Retrieval',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=88',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Autonomous Systems (IDRP) ',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=58',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Rajendra Nagar' },
                ],
            },
            {
                name: 'Ethics, Policy, Law and Regulation in AI',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=80',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Santanu Chaudhury' },
                ],
            },
            {
                name: 'Planning and Decision making for Robots (IDRP)',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://syllabus-link.com/course3',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        speech_text_vision: [
            {
                name: 'Natural Language Understanding',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=97',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Anand Mishra' },
                ],
            },
            {
                name: 'Digital Image Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=50',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Anil Kumar Tiwari' },
                ],
            },
            {
                name: 'Computer Vision',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=68',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Anand Mishra' },
                ],
            },
            {
                name: 'Computer Graphics',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=66',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Rajendra Nagar' },
                    { year: 2022, name: 'Dr. Rajendra Nagar' },
                ],
            },
            {
                name: 'Speech Understanding',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=110',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        social_computing: [
            {
                name: 'Social Computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=104',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Sustainable Computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=111',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'ICT for Development',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=33',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Machine Learning for Epidemiology',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=92',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Health Informatics',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=86',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Social Choice',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=65',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Cognition & Behavior Modelling',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=30',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Social Networks',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=105',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Suman Kundu' },
                ],
            },
            {
                name: 'Ethics, policy, law and regulations in AI',
                level: 400,
                hours: '0-0-2',
                credits: 1,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=80',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Santanu Chaudhury' },
                ],
            },
            {
                name: 'Crowd-sourcing and human computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=69',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Environmental Informatics',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=79',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Microeconomics',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=63',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
        ],
    },
    //Mechanical Engineering
    me: {
        design: [
            {
                name: 'Introduction to Acoustics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=74',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Amrita Puri' },
                ],
            },
            {
                name: 'Mechanical Vibrations',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=79',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Barun Pratiher' },
                ],
            },
            {
                name: 'Computer aided Design',
                level: 400,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=76',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Mechatronics',
                level: 600,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=81',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Principles of Biomechanics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Finite Element Methods and Applications',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=82',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Introduction to Robotics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://shorturl.at/lBJS0',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Suril Vijaykumar Shah' },
                ],

            },
            {
                name: 'Embedded Systems',
                level: 300,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/EE/2.%20B.Tech%20EE_24092020.pdf#page=36',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Arpit Arvind Khandelwal' },
                    { year: 2022, name: 'Dr. Malyala Pavana Ravi Sai Kiran' },
                ],
            },

        ],
        manufacturing: [
            {
                name: 'Tool Design',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=60',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Applied Ergonomics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=61',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Micro-Nano Manufacturing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=62',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2022, name: 'Dr. Ankur Gupta' },
                ],
            },
            {
                name: 'Design and Manufacturing of Bio Materials',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Computer Integrated Manufacturing',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=64',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Design for Manufacturing',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=65',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        thermofluids: [
            {
                name: 'Turbomachinery',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=49',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Arun Kumar R' },
                ],
            },
            {
                name: 'Refrigeration and Airconditioning',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Power Plant Engineering',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=51',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Porous media flows and applications',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=56',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Solar Thermal Systems',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=53',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Computational Fluid Dynamics and Heat Transfer',
                level: 700,
                hours: '3-1-0',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sudipto Mukhopadhyay' },
                ],
            },
        ],
    },
    //Chemical engineering
    ch: {
        chem_eng_design: [
            {
                name: 'Industrial Management and Safety for Chemical Engineers',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=39',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Product Design in Chemical Engineering',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=40',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Unit Operations',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=41',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Membrane Technology',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=42',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        process_eng_int: [
            {
                name: 'Applications of Artificial Intelligence in Chemical Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=43',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Petrochemical Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=45',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Gangawane Krunal Madhukar' },
                ],
            },
            {
                name: 'Petroleum Refinery Process Modelling',
                level: 400,
                hours: '1-0-2',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=46',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Basics of Reliability and Maintainability Engineering for System Safety',
                level: 400,
                hours: '3-1-0',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=47',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        cfie: [
            {
                name: 'Introduction to Complex Fluids',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=48',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Nirmalya Bachhar' },
                ],
            },
            {
                name: 'Interfacial Engineering in Soft Matter',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=49',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Bioprinting',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=50',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: '3-D Printing: Material Processing and Properties',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=51',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Introductory Principles in Polymer Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=53',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Deepak Arora' },
                ],
            },
        ],
        sust: [
            {
                name: 'Solid Waste Management',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=54',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sumit Kamal' },
                    { year: 2022, name: 'Dr. Anand Krishnan Plappally' },
                ],
            },
            {
                name: 'Air Pollution Control technology',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=55',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Processing of Rare-earth and Radioactive Materials',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=56',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Energy Resources',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=57',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Waste Water Treatment',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=58',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        molec_eng: [
            {
                name: 'Molecular Transport Phenomena',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=59',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Fluid-Like Structures and SelfAssembling Systems',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=60',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Organic Molecules, Complexes and Polymers for Electronics and Optoelectronics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=61',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Molecular Thermodynamics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=62',
                semesterAvailability: ['odd'],
                professors: [
                    
                    { year: 2023, name: 'Dr. Praveenkumar Sappidi' },
                ],
            },
        ],
        biochem_eng: [
            {
                name: 'Biochemical Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=63',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Prasenjit Sarkar' },
                ],
            },
            {
                name: 'Bioprocess Technology',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=64',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Bio-Transport Phenomena',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=65',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Biochemical Separation Processes',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=66',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Bioreactors',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=67',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
    },
    // Material Engineering
    mt: {
        struct_mat: [
            {
                name: 'Processing-Microstructure and Properties of Steels',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=35',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Degradation and Failure of Materials',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=36',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Composites',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=37',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Polymeric Materials and Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=38',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Ceramics and Glass',
                level: 400,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=39',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Casting and Solidification',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=41',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Metallurgy of Joining',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=42',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Saurabh Sanjay Nene' },
                    
                ],
            },
            {
                name: 'High Temperature Materials',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Abir Bhattacharyya' },
                    
                ],
            },
            {
                name: 'Digital Fabrication',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=44',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Ankur Gupta' },
                    { year: 2022, name: 'Dr. Kaushalkumar Ashokbhai Desai' },
                    
                ],
            },
            {
                name: 'Smart Manufacturing',
                level: 300,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=47',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2023, name: 'Dr. Kaushalkumar Ashokbhai Desai' },
                ],
            },
            {
                name: 'Additive Manufacturing',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Computer Aided Design',
                level: 400,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=76',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Design of Machine Elements',
                level: 300,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=35',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2023, name: 'Dr. Barun Pratiher' },
                ],
            },
        ],
        func_mat: [
            {
                name: 'Battery Materials',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=43',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: '3D Printing: Material Processing and Properties',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=45',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Lithium ion Batteries',
                level: 400,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=47',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Surface Engineering',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=49',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Synthesis and Processing of Semiconductors and 2D materials',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=50',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Functional Ceramics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=53',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Magnetism and Magnetic Materials',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=55',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Devendra Singh Negi' },
                ],
            },
            {
                name: 'Nanoscience',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Rakesh Kumar Sharma' },
                    { year: 2022, name: 'Dr. Rakesh Kumar Sharma' },
                    
                ],
            },
            {
                name: 'Biomaterials Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=52',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Surajit Ghosh' },
                    { year: 2022, name: 'Dr. Surajit Ghosh' },
                ],
            },
            {
                name: 'Cell-Material Interaction',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=36',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Raviraj Vankayal' },
                    
                ],
            },
            {
                name: 'Tissue Engineering (BSBE)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=37',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Indranil Banerjee' },
                    { year: 2022, name: 'Dr. Indranil Banerjee' },
                ],
            },
            {
                name: 'Interfacial Engineering in Soft Matter (CHE)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf#page=49',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Quantum Mechanics (PHY)',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://shorturl.at/isILO',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Somnath Ghosh' },
                    { year: 2021, name: 'Dr. B M Krishna Mariserla' },
                ],
            },
            {
                name: 'Advanced Condensed Matter Physics (PHY)',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://rb.gy/r8dcw',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Sunita' },
                    
                ],
            },
            {
                name: 'Energy Harvesting Technologies (PHY)',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://rb.gy/1u74o',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Physics of Solar Cells (PHY)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://rb.gy/ywwi6',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        comp_mat_eng: [
            {
                name: 'Computational Thermodynamics',
                level: 400,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=56',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Ravi K R' },
                    
                ],
            },
            {
                name: 'Modelling of Metallurgical Processes',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Machine Learning for Materials Design',
                level: 700,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'First-Principles Calculations',
                level: 700,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Appala Naidu Gandi' },
                    
                ],
            },
            {
                name: 'Phase field modelling',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Industry 4.0: Applications in Metallurgical and Materials Engineering',
                level: 700,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Ravi K R' },
                    { year: 2022, name: 'Dr. Ravi K R' },
                ],
            },
            {
                name: 'Introduction to Internet of Things (EE)',
                level: 700,
                hours: '1-0-0',
                credits: 1,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Finite Element Methods (ME)',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/UG/ME/1%20B.Tech%20ME%20Curriculum%20structure.pdf#page=82',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Barun Pratiher' },
                    { year: 2022, name: 'Dr. Barun Pratiher' },
                ],
            },
            {
                name: 'Artificial Intelligence (CSE)',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=62',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Manish Aggarwal' },
                    { year: 2022, name: 'Dr. Manish Aggarwal' },
                ],
            },
            {
                name: 'Deep Learning (CSE) ',
                level: 400,
                hours: '3-0-3',
                credits: 4.5,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=25',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Vatsa' },
                    { year: 2022, name: 'Dr. Mayank Vatsa' },
                ],
            },
            {
                name: 'Optimization (Offered by MA)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=27',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Md Abu Talhamainuddin Ansary' },
                    { year: 2022, name: 'Md Abu Talhamainuddin Ansary' },
                ]
            },
        ],
        process_met: [
            {
                name: 'Mineral Beneficiation',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=57',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Kinetics of Metallurgical Processes',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=58',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Principles of Process Metallurgy',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=59',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Hydrometallurgy',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=60',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Electrometallurgy',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=61',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Secondary and Special Steelmaking',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf#page=62',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Processing of Rare Earth and Radioactive Materials (CH)',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Fluid Dynamics (CH)',
                level: 700,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/mat/B.Tech.%20Curriculum_document-2020-10-07-12-26-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2023, name: 'Dr. Sudipto Mukhopadhyay' },
                    
                ],
            },

        ],
    },
    //Civil Engineering
    ci: {
        sit: [
            {
                name: 'AI/ML in Infrastructure Engineering',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=109',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Suman' },
                    
                ],
            },
            {
                name: 'Building Services',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=115',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Intelligent Buildings',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=113',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Surveillance and Security of Infrastructures',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=103',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Cyber-Physical Systems for Infrastructure',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=107',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Tekcham Gishan Singh' }, 
                ],
            },
            {
                name: 'Digital Twin and Asset management',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=105',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        geo_eng: [
            {
                name: 'Geology for Civil Engineers',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=91',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Ground Improvement Techniques',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=93',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Introduction to Soil Dynamics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=95',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Advanced Geotechnical Engineering',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=97',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        env_eng: [
            {
                name: 'Air pollution and Control',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=99',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2022, name: 'Dr. Deepika Bhattu' },
                    { year: 2021, name: 'Dr. Deepika Bhattu' },
                ],
            },
            {
                name: 'Mathematical Modelling in Environmental System',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=111',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Industrial Waste: Control and Utilization',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=101',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Environmental Biotechnology and Bioremediation',
                level: 700,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=117',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        trans_eng: [
            {
                name: 'Highway Geometric Design',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=83',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Pavement Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=85',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Traffic System and ITS',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=87',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Urban Transportation Planning',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=89',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        cons_infra: [
            {
                name: 'Concrete Technology',
                level: 400,
                hours: '3-0-3',
                credits: 4.5,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=77',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Infrastructure Planning and Management',
                level: 400,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=123',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
        ],
        struct_eng: [
            {
                name: 'Steel Structure Design',
                level: 400,
                hours: '3-1-0',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=67',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Advanced Structural Design',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=69',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Dynamics of Structure',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=71',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Finite Element Method',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=73',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Barun Pratiher' },
                    { year: 2022, name: 'Dr. Barun Pratiher' },
                ],
            },
            {
                name: 'Prestressed concrete structures',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=79',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Prefabricated structures',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=81',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Earthquake Engineering',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=75',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Amit Kumar Rathi' },
                ],
            },
            {
                name: 'Introduction to Structural Health monitoring',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=121',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        res_eng: [
            {
                name: 'Environmental Hydrology',
                level: 700,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=119',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Saran Aadhar' },
                ],
            },
        ],
        infra_sys: [
            {
                name: 'Introduction to Power Infrastructure Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=125',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Thermal and nuclear power infrastructure Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=127',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Infrastructure planning and design for rail and air transport',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=129',
                semesterAvailability: ['odd'],
                professors: [
                    
                ],
            },
            {
                name: 'Infrastructure planning and design of ports and harbours',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=131',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'IT and Telecom Infrastructure',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=133',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Green Building and Sustainable Materials',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf#page=135',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Bhupendra Singh' },
                ],
            },
        ],
    },
    //Biosciences and Bioengineering
    bb: {
        omics: [
            {
                name: 'Microbiomes and Metagenomics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=32',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Shankar Manoharan' },
                ],
            },
            {
                name: 'Computational Methods for Multiomics',
                level: 400,
                hours: '3-0-2',
                credits: 4,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Microarray Data Analysis',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=34',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        biom_eng: [
            {
                name: 'Cell-material Interactions',
                level: 300,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=36',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Raviraj Vankayala' },
                ],
            },
            {
                name: 'Tissue Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=37',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Indranil Banerjee' },
                    { year: 2022, name: 'Dr. Indranil Banerjee' },
                ],
            },
            {
                name: 'Therapeutic Delivery Systems',
                level: 400,
                hours: '2-0-0',
                credits: 2,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=38',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Principles of Biomechanics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Additive Manufacturing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: '' },
                ],
            },
            {
                name: 'Bio-transport Phenomena',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=39',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        csb: [
            {
                name: 'Mathematical Biology',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Algorithms in Biology',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=41',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sucharita Dey' },
                    { year: 2022, name: 'Dr. Sushmita Paul' },
                ],
            },
            {
                name: 'Modelling Biological Systems',
                level: 300,
                hours: '2-0-2',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=42',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Design of Experiments',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        bioimaging: [
            {
                name: 'Digital Image Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=50',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Anil Kumar Tiwari' },
                ],
            },
            {
                name: 'Bio-image Computing',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Electron Microscopy for Biology',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Special topics on biomedical imaging',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        biosensors: [
            {
                name: 'Whole Cell based Biosensors',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=45',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Microsystems Fabrication Technology',
                level: 700,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Kamaljit Rangra' },
                    { year: 2022, name: 'Dr. Ajay Agarwal' },
                ],
            },
            {
                name: 'Chemosensors',
                level: 600,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
        ],
        mssd: [
            {
                name: 'Microbial Remediation and Environmental Biotechnology',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=47',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Microbes in Food and Sustainable Agriculture',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=48',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Bioenergy',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=49',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Meenu Chhabra' },
                    { year: 2022, name: 'Dr. Meenu Chhabra' },
                ],
            },
        ],
        ddd: [
            {
                name: 'Principles of Drug Discovery',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=51',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Medicinal Chemistry',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=52',
                semesterAvailability: ['odd', 'even'],
                professors: [
                
                ],
            },
            {
                name: 'Viral Infection and Antiviral Drug Development',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://iitj.ac.in/uploaded_docs/dept_upload/bio/curriculum_document-2020-10-03-22-20-pm.pdf#page=53',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sudipta Bhattacharyya' },
                    { year: 2021, name: 'Dr. Sudipta Bhattacharyya' },
                ],
            },
        ],
    },
    ai: {
        ai_ml: [
            {
                name: 'Advanced Artificial Intelligence',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=33',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Gaurav Harit' },
                    { year: 2022, name: 'Dr. Angshuman Paul' },
                ],
            },
            {
                name: 'Advanced Machine Learning',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=32',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Mayank Vatsa' },
                    { year: 2022, name: 'Dr. Mayank Vatsa' },
                ],
            },
            {
                name: 'Resource Constrained Artificial Intelligence',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Scalable Machine Learning',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Learning Theory',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Information Retrieval',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=36',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Graph Theoretic Algorithms',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Stream Analytics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=39',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        robot: [
            {
                name: 'Introduction to Robotics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://shorturl.at/lBJS0',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Suril Vijaykumar Shah' },
                ],
            },
            {
                name: 'Planning and Decision Making of Robots',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Multi-Agent Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Autonomous Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/curriculum/CSE-Courses-Details.pdf#page=58',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Rajendra Nagar' },
                ],
            },
        ],
        socio_digital: [
            {
                name: 'Multimodal Interfaces',
                level: 400,
                hours: '0-0-2',
                credits: 2,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Introduction to Haptics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Amit Bhardwaj' },
                ],
            },
            {
                name: 'Introduction to AR and VR',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Advanced Human-Machine Interaction',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Social Networks',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://syllabus-link.com/course3https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=38',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Suman Kundu' },
                ],
            },
        ],
        sci_intell: [
            {
                name: 'Computational Neuroscience',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Dipanjan Roy' },
                ],
            },
            {
                name: 'Connectomics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Shilpa Dang' },
                ],
            },
            {
                name: 'Bioimaging',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Priyanka Singh' },
                    { year: 2022, name: 'Dr. Priyanka Singh' },
                ],
            },
        ],
        applications: [
            {
                name: 'Digital Image Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=50',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2022, name: 'Dr. Anil Kumar Tiwari' },
                ],
            },
            {
                name: 'Computer Vision',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=40',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Anand Mishra' },
                ],
            },
            {
                name: 'Natural Language Understanding',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=34',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Anand Mishra' },
                ],
            },
            {
                name: 'Speech Understanding',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=51',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computational Linguistics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Advanced Biometrics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=42',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Computer Graphics',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=43',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Rajendra Nagar' },
                    { year: 2022, name: 'Dr. Rajendra Nagar' },
                ],
            },
            {
                name: 'Video Processing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=49',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Animation',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'GPU Programming',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    { year: 2023, name: 'Dr. Dip Sankar Banerjee' },
                    { year: 2021, name: 'Dr. Dip Sankar Banerjee' },
                ],
            },
        ],
        cps_iot: [
            {
                name: 'Introduction to Cyber Physical Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd'],
                professors: [
                    { year: 2023, name: 'Dr. Anoop Jain' },
                    { year: 2022, name: 'Dr. Anoop Jain' },
                ],
            },
            {
                name: 'Embedded Systems Design',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Arpit Arvind Khandelwal' },
                    { year: 2022, name: 'Dr. Malyala Pavana Ravi Sai Kiran' },
                ],
            },
            {
                name: 'Security in CPS',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Anoop Jain' },
                ],
            },
            {
                name: 'Edge and Fog Computing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Sumit Kalra' },
                ],
            },
            {
                name: 'Real Time Systems',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
        data_dis: [
            {
                name: 'Introduction to Space Science',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Reliability Engineering and Life Testing',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=55',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Introduction to Game Theory',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=54',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Puneet Sharma' },
                ],
            },
            {
                name: 'Nonlinear Dynamics and Chaos',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=59',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Differential Geometry',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=58',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
            {
                name: 'Introduction to Financial Engineering',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf#page=53',
                semesterAvailability: ['even'],
                professors: [
                    { year: 2023, name: 'Dr. Vivek Vijay' },
                ],
            },
            {
                name: 'Computational Chemistry',
                level: 400,
                hours: '3-0-0',
                credits: 3,
                syllabus: 'https://cse.iitj.ac.in/images/pdf/BTech_AIDE_24092020.pdf',
                semesterAvailability: ['odd', 'even'],
                professors: [
                    
                ],
            },
        ],
    },
};

export default courses;