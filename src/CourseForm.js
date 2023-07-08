import React, { useState } from 'react';
import './CourseForm.css';
import Logo from "./images/iitj_logo.png";

const CourseForm = ({ onFormSubmit }) => {
    const [branch, setBranch] = useState('');
    // const [semester, setSemester] = useState('');
    const [credits, setCredits] = useState('');
    const [domain, setDomain] = useState('');
    const [formValid, setFormValid] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (branch && credits && domain) {
            onFormSubmit({ branch, credits, domain });
        } else {
            setFormValid(false);
        }
    };

    const handleBranchChange = (e) => {
        setBranch(e.target.value);
        setFormValid(true);
    };

    const handleDomainChange = (e) => {
        setDomain(e.target.value);
    };

    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="form-container">
            <img src={Logo} className="logo-login" alt="Logo" />
            <h1>Electives Selection Portal</h1>
            <button className="instruction-button" onClick={openPopup}>
                Guidelines 
            </button>

            {showPopup && (
                <div className="popup" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={closePopup}>X</button>
                    <br/><br/>
                        <table className="instructions-table">
                        <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Level</th>
                                    <th>Credit Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>100</td>
                                    <td rowSpan={2}>Cr &gt;= 0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>300</td>
                                    <td>Cr &gt;= 38</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>400</td>
                                    <td rowSpan={2}>Cr &gt;= 75</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>700</td>
                                    <td>Cr &gt;= 85 with CGPA &gt;= 6*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* {showPopup && ( // Render the popup content if showPopup is true
                <div className="popup">
                    <div className="popup-content">
                        <table className="instructions-table">
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Level</th>
                                    <th>Credit Requirements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>100</td>
                                    <td rowSpan={2}>Cr &gt;= 0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>200</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>300</td>
                                    <td>Cr &gt;= 38</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>400</td>
                                    <td rowSpan={2}>Cr &gt;= 75</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>700</td>
                                    <td>Cr &gt;= 75 with CGPA &gt;= 6*</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )} */}
            <form onSubmit={handleSubmit}>
                <label>
                    Branch:
                    <select value={branch} onChange={handleBranchChange}>
                        <option value="">Select Branch</option>
                        <option value="ai">Artificial Intelligence and Data Science</option>
                        <option value="bb">Bioscience and Bioengineering</option>
                        <option value="ch">Chemical Engineering</option>
                        <option value="ci">Civil and Infrastructure Engineering</option>
                        <option value="cse">Computer Science and Engineering</option>
                        <option value="ee">Electrical Engineering</option>
                        <option value="me">Mechanical Engineering</option>
                        <option value="mt">Materials Engineering</option>
                    </select>
                </label>

                <label>
                    Domain:
                    <select value={domain} onChange={handleDomainChange}>
                        <option value="">Select Domain</option>
                        {branch === 'ee' && (
                            <>
                                <option value="communication">Communication</option>
                                <option value="signal_processing">Signal Processing</option>
                                <option value="control_engineering">Control Engineering</option>
                                <option value="devices_circuits">Devices and Circuits</option>
                                <option value="computing_systems">Computing Systems</option>
                                <option value="power_engineering">Power Engineering</option>
                            </>
                        )}
                        {branch === 'cse' && (
                            <>
                                <option value="theory_algorithms">Theory and Algorithms</option>
                                <option value="hardware">Hardware</option>
                                <option value="systems">Systems</option>
                                <option value="network_security">Network and Security</option>
                                <option value="ai_ml">AI-ML</option>
                                <option value="speech_text_vision">Speech, Text, and Vision</option>
                                <option value="social_computing">Social Computing</option>
                            </>
                        )}
                        {branch === 'ci' && (
                            <>
                                <option value="sit">Smart Infrastructure Technology</option>
                                <option value="geo_eng">Geotechnical Engineering</option>
                                <option value="env_eng">Environmental Engineering</option>
                                <option value="trans_eng">Transport Engineering</option>
                                <option value="cons_infra">Construction and Infrastructure</option>
                                <option value="struct_eng">Structural Engineering</option>
                                <option value="res_eng">Water Resources Engineering</option>
                                <option value="infra_sys">Infrastructure Systems</option>
                            </>
                        )}
                        {branch === 'me' && (
                            <>
                                <option value="design">Design</option>
                                <option value="manufacturing">Manufacturing</option>
                                <option value="thermofluids">Thermofluids</option>
                            </>
                        )}
                        {branch === 'mt' && (
                            <>
                                <option value="struct_mat">Structural Materials</option>
                                <option value="func_mat">Functional Materials</option>
                                <option value="comp_mat_eng">Computational Materials Engineering</option>
                                <option value="process_met">Process Metallurgy</option>
                            </>
                        )}
                        {branch === 'ch' && (
                            <>
                                <option value="chem_eng_design">Chemical Engineering Design</option>
                                <option value="process_eng_int">Process Engineering Intelligence</option>
                                <option value="cfie">Complex Fluids and Interfacial Engineering</option>
                                <option value="sust">Sustainability</option>
                                <option value="molec_eng">Molecular Engineering</option>
                                <option value="biochem_eng">Biochemical Engineering</option>
                            </>
                        )}
                        {branch === 'bb' && (
                            <>
                                <option value="omics">Omics</option>
                                <option value="biom_eng">Biomaterials Engineering</option>
                                <option value="csb">Computational and Systems Biology</option>
                                <option value="bioimaging">Bioimaging</option>
                                <option value="biosensors">Biosensors</option>
                                <option value="mssd">Microbial Systems for Sustainable Development</option>
                                <option value="ddd">Drug Design and Development</option>
                            </>
                        )}
                        {branch === 'ai' && (
                            <>
                                <option value="ai_ml">AI and ML</option>
                                <option value="robot">Robotics and Automation</option>
                                <option value="socio_digital">Socio-Digital Reality</option>
                                <option value="sci_intell">Science of Intelligence</option>
                                <option value="applications">Applications</option>
                                <option value="cps_iot">Cyber Physical Systems, Sensors and IoT</option>
                                <option value="data_dis">Data and Discovery Science</option>
                            </>
                        )}
                    </select>
                </label>

                {/* <label>
                    Semester:
                    <input
                        className="input-field"
                        type="number"
                        min="1"
                        max="8"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)}
                    />
                </label> */}

                <label>
                    Credits Completed:
                    <select
                        value={credits}
                        onChange={(e) => setCredits(e.target.value)}
                    >
                        <option value="">Credits Completed</option>
                        <option value="38"> Cr &gt;= 38</option>
                        <option value="75"> Cr &gt;= 75</option>
                        <option value="85"> Cr &gt;= 85</option>
                    </select>
                </label>

                <button type="submit">View Courses</button>

                {!formValid && (
                    <p className="center-message">Please fill in all the details!!</p>
                )}
            </form>
        </div>
    );
};

export default CourseForm;
