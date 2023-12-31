# Electives Selection Portal

Welcome to the Electives Selection Portal GitHub repository! This repository hosts the source code for the Electives Selection Portal, an online platform designed to facilitate the process of selecting program electives for the students of Indian Institute of Technology, Jodhpur.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Electives Selection Portal provides a user-friendly interface for students to view and choose program elective courses. The portal uses student-provided information, such as branch, domain, and completed credits, to display a customized list of eligible courses. It provides essential details about each course, including descriptions and prerequisites, and offers a convenient link to access the syllabus PDF. It also displays the names of professors who have taught the course in the past two years. Additionally, the portal allows students to generate a PDF document containing their selected courses in a tabulated format, facilitating easy reference for future use.
These features collectively enhance the user experience of the Elective Selection Portal, providing students with relevant course options, comprehensive information, and convenient methods to store and access their elective selections.

## Features

The Electives Selection Portal offers the following features:

- **Customized Course Display:**
  - Displays a list of courses based on student information such as branch, domain, and completed credits.
  - Shows courses that are eligible for the student based on their input.

- **Basic Course Information:**
  - Provides basic information about each course, including details such as course name, level of the course, number of credits and professor names who have taught the course in the past two years.
  - Offers a clear overview of the course content and requirements.

- **Syllabus PDF Link:**
  - Includes a link to the syllabus PDF for each course.
  - Enables students to access and download the detailed syllabus for further reference.

- **Print Functionality:**
  - Allows students to generate a PDF document containing the list of courses the student is eligible for.
  - Presents the course information in a tabulated manner for easy reference and future use.


## Installation

To set up a local development environment, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/Electives-Selection-Portal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Electives-Selection-Portal
   ```

3. Run the following command and the website will run locally on `localhost:3000` :
    ```bash
   npm install
   npm start
   ```

That's it! You can now explore the Electives Selection Portal locally on your machine.

## Usage

The Electives Selection Portal is designed with an intuitive and user-friendly interface. Here are some guidelines for using the portal:

As a student, follow these steps to make your elective selections:

  - Visit the [portal website](https://electives-selection-portal.netlify.app/).
  - Provide your branch information.
  - Select the domain in which you are interested and wish to pursue an elective.
  - Choose the appropriate range indicating the number of credits you have completed so far.
  - Click on the 'View Courses' button.
  - A list of program electives relevant to your eligibility will be displayed, along with basic information about each course.
  - To save this list of elective courses for future reference, click on the 'Print' button to generate a PDF.

By following these steps, you can easily explore and select your desired electives through the Electives Selection Portal.

<p  align="center">
<img src="image/img_portal_1.png" width = "960px" alt="form"><br>
<i>(Fig. 1 : Enter the details)</i>
</p>
<p  align="center">
<img src="image/img_portal_2.png" width = "960px" alt="List of Courses"><br>
<i>(Fig. 2 : List of Courses)</i>
</p>
<p  align="center">
<img src="image/img_portal_3.png" width = "960px" alt="pdf"><br>
<i>(Fig. 3 : PDF containing list of courses student is eligible for)</i>
</p>

## Contributing

Contributions to the Electives Selection Portal project are welcome and encouraged! If you have any ideas for improvements, bug fixes, or new features, please follow these steps:

1. Fork the repository and clone it to your local machine.

   ```bash
   git clone https://github.com/your-username/Electives-Selection-Portal.git
   ```

2. Create a new branch to work on your changes.

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your modifications and commit them with descriptive commit messages.

   ```bash
   git commit -m "Add feature: your feature description"
   ```

## License

MIT License

Copyright (c) 2023 Divyam Patel, Vedant Anant Sontake

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
