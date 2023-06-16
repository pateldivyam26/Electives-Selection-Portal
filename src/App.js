import React, { useState } from 'react';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import './App.css';

const App = () => {
  const [courseSelection, setCourseSelection] = useState(null);

  const handleFormSubmit = (formData) => {
    setCourseSelection(formData);
  };

  return (
    <div className="app-container">
      {/* <h1>Course Portal</h1> */}
      {courseSelection ? (
        <CourseList {...courseSelection} />
      ) : (
        <CourseForm onFormSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
