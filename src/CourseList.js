import React from "react";
import "./CourseList.css";
import courses from "./CourseData.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

const CourseList = ({ branch, credits, domain }) => {
    const filteredCourses =
        courses[branch] && courses[branch][domain]
            ? courses[branch][domain].filter((course) => {
                if (Number(credits) >= 38 && course.level === 300) return true;
                if (
                    Number(credits) >= 75 &&
                    (course.level === 400 ||
                        course.level === 600 ||
                        course.level === 300)
                )
                    return true;
                if (Number(credits) >= 85) return true;
                return false;
            })
            : [];

    const generatePDF = () => {
        const doc = new jsPDF("landscape");
        const tableData = filteredCourses.map((course) => {
            const professors = course.professors.map((professor) => `${professor.year}: ${professor.name}`);
            return [
                course.name,
                course.level,
                course.hours,
                course.credits,
                course.syllabus,
                professors.join('\n'),
            ];
        });

        doc.autoTable({
            head: [['Course Name', 'Level', 'L-T-P', 'Credits', 'Syllabus', 'Professors']],
            body: tableData,
        });


        doc.save("course_list.pdf");
    };

    return (
        <div className="course-list-container">
            <h1>AVAILABLE COURSES</h1>
            <br />
            {filteredCourses.length > 0 ? (
                <React.Fragment>
                    <div className="course-cards-container">
                        {filteredCourses.map((course, index) => (
                            <div key={index} className="course-card">
                                <h2>{course.name}</h2>
                                <p>
                                    <b>Level:</b> {course.level}
                                </p>
                                <p>
                                    <b>L-T-P:</b> {course.hours}
                                </p>
                                <p>
                                    <b>Credits:</b> {course.credits}
                                </p>
                                {course.professors.length > 0 && (
                                    <p>
                                        <b>Professors:</b>
                                        <br />
                                        {course.professors.map((professor, index) => (
                                            <span key={index}>
                                                <b>{professor.year}:</b>{" "}
                                                {professor.name.split(",").map((name, i) => (
                                                    <React.Fragment key={i}>
                                                        {name.trim()}
                                                        <br />
                                                    </React.Fragment>
                                                ))}
                                            </span>
                                        ))}
                                    </p>
                                )}
                                <br />
                                <a
                                    href={course.syllabus}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="syllabus-button"
                                >
                                    Syllabus
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="print-button-container">
                        <button className="print-button" onClick={generatePDF}>
                            Print
                        </button>
                    </div>
                </React.Fragment>
            ) : (
                <h1>No courses available for the selected criteria!</h1>
            )}
        </div>
    );
};

export default CourseList;
