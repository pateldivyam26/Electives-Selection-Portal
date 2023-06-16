import React, { useState } from 'react';
import './CourseForm.css';

const CourseForm = ({ onFormSubmit }) => {
    const [branch, setBranch] = useState('');
    const [semester, setSemester] = useState('');
    const [credits, setCredits] = useState('');
    const [domain, setDomain] = useState('');
    const [formValid, setFormValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (branch && semester && credits && domain) {
            onFormSubmit({ branch, semester, credits, domain });
        } else {
            setFormValid(false);
        }
    };

    const handleBranchChange = (e) => {
        setBranch(e.target.value);
        setDomain('');
        setFormValid(true);
    };

    return (
        <div className="form-container">
            <h1>Electives Selection Portal</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Branch:&nbsp;&nbsp;
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
                {/* <br /> */}
                {branch && (
                    <>
                        <label>
                            Semester:&nbsp;&nbsp;
                            <input
                                className="input-field"
                                type="number"
                                min="1"
                                max="8"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                            />
                        </label>

                        <label>
                            Credits Completed:&nbsp;&nbsp;
                            <select
                                value={credits}
                                onChange={(e) => setCredits(e.target.value)}
                            >
                                <option value="">Credits Completed</option>
                                <option value="38"> &gt;= 38 credits</option>
                                <option value="75"> &gt;= 75 credits</option>
                                <option value="85"> &gt;= 85 credits</option>
                            </select>
                        </label>

                        {branch === 'ee' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="communication">Communication</option>
                                    <option value="signal_processing">Signal Processing</option>
                                    <option value="control_engineering">Control Engineering</option>
                                    <option value="devices_circuits">Devices and Circuits</option>
                                    <option value="computing_systems">Computing Systems</option>
                                    <option value="power_engineering">Power Engineering</option>
                                </select>
                            </label>
                        )}
                        {branch === 'cse' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="theory_algorithms">Theory and Algorithms</option>
                                    <option value="hardware">Hardware</option>
                                    <option value="systems">Systems</option>
                                    <option value="network_security">Network and Security</option>
                                    <option value="ai_ml">AI-ML</option>
                                    <option value="speech_text_vision">Speech, Text, and Vision</option>
                                    <option value="social_computing">Social Computing</option>
                                </select>
                            </label>
                        )}
                        {branch === 'ci' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="sit">Smart Infrastructure Technology</option>
                                    <option value="geo_eng">Geotechnical Engineering</option>
                                    <option value="env_eng">Environmental Engineering</option>
                                    <option value="trans_eng">Transport Engineering</option>
                                    <option value="cons_infra">Construction and Infrastructure</option>
                                    <option value="struct_eng">Structural Engineering</option>
                                    <option value="res_eng">Water Resources Engineering</option>
                                    <option value="infra_sys">Infrastructure Systems</option>
                                </select>
                            </label>
                        )}
                        {branch === 'me' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="design">Design</option>
                                    <option value="manufacturing">Manufacturing</option>
                                    <option value="thermofluids">Thermofluids</option>
                                </select>
                            </label>
                        )}
                        {branch === 'mt' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="struct_mat">Structural Materials</option>
                                    <option value="func_mat">Functional Materials</option>
                                    <option value="comp_mat_eng">Computational Materials Engineering</option>
                                    <option value="process_met">Process Metallurgy</option>
                                </select>
                            </label>
                        )}
                        {branch === 'ch' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="chem_eng_design">Chemical Engineering Design</option>
                                    <option value="process_eng_int">Process Engineering Intelligence</option>
                                    <option value="cfie">Complex Fluids and Interfacial Engineering</option>
                                    <option value="sust">Sustainability</option>
                                    <option value="molec_eng">Molecular Engineering</option>
                                    <option value="biochem_eng">Biochemical Engineering</option>
                                </select>
                            </label>
                        )}
                        {branch === 'bb' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="omics">Omics</option>
                                    <option value="biom_eng">Biomaterials Engineering</option>
                                    <option value="csb">Computational and Systems Biology</option>
                                    <option value="bioimaging">Bioimaging</option>
                                    <option value="biosensors">Biosensors</option>
                                    <option value="mssd">Microbial Systems for Sustainable Development</option>
                                    <option value="ddd">Drug Design and Development</option>
                                </select>
                            </label>
                        )}
                        {branch === 'ai' && (
                            <label>
                                Domain:&nbsp;&nbsp;
                                <select
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                >
                                    <option value="">Select Domain</option>
                                    <option value="ai_ml">AI and ML</option>
                                    <option value="robot">Robotics and Automation</option>
                                    <option value="socio_digital">Socio-Digital Reality</option>
                                    <option value="sci_intell">Science of Intelligence</option>
                                    <option value="applications">Applications</option>
                                    <option value="cps_iot">Cyber Physical Systems, Sensors and IoT</option>
                                    <option value="data_dis">Data and Discovery Science</option>
                                </select>
                            </label>
                        )}
                        <button type="submit">View Courses</button>
                        {!formValid && (
                            <p className="center-message">Please fill in all the details!!</p>
                        )}
                    </>
                )}
            </form>
        </div>
    );
};

export default CourseForm;