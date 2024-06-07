import React, { useState } from 'react';
import { userData } from '../mocks/data.js';

function Profile() {

    const { 
        porfile,
        tutor,
        extracurricularAct,
        aboutStudent,
        studentData,
        contactData,
        personalData,
        emergencyContact
    } = userData;

    console.log(userData);

    return (
        <>
        {/*BODY */}

        {/*BODY: JUMBOTRON */}
            <div>
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid avatar"                                    
                                />
                            </div>
                            <div className="col-lg-8">
                                <h1 className="display-4">
                                    {porfile.name}
                                </h1>
                                <p className="lead">
                                    Student of <b> {porfile.career} </b>
                                </p>
                                <h1 className='credits'>
                                    {porfile.credits}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BODY: CONTENT */}
                <div className="content">
                    <div>
                        <div className="row">

                            {/* BODY: PHOTOCONTAINER */}
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid tutor-avatar"                                            
                                        />
                                        <h5 className="my-3">
                                            {tutor.name}
                                        </h5>
                                        <p className="text-muted mb-1">
                                            <b>{tutor.charge}</b>
                                        </p>
                                        <p className="text-muted mb-4">
                                            {tutor.email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* BODY: CONTAINER INFORMATION */}
                            <div className="col-lg-8">

                                <div className="card mb-4">
                                    <div className="card-body">
                                        {/* body: Extracurricular activity*/}
                                        <h5 className="mb-4">Extracurricular activity </h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Activity</span></div>
                                                <div className='camp-space'><span className="camp-design">Teacher</span></div>   
                                                <div className='camp-space'><span className="camp-design">Teacher email</span></div>
                                                <div className='camp-space'><span className="camp-design">Length</span></div> 
                                                <div className='camp-space'><span className="camp-design">Schedule</span></div> 
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.name}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.teacher}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.email}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.startedDate} - {extracurricularAct.finishedDate}</span></div>                                        
                                                <div className='camp-space element-list text-muted mb-0 schedule-disposition'>
                                                    <div className=''>
                                                        <ul className="no-bullets">
                                                            <li>Monday</li>
                                                            <li>Tuesday</li>
                                                            <li>Wednesday</li>
                                                            <li>Thursday</li>
                                                            <li>Friday</li>
                                                            <li>Saturday</li>
                                                            <li>Sunday</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <ul className="no-bullets">
                                                            <li>{extracurricularAct.scheduleLunes}</li>
                                                            <li>{extracurricularAct.scheduleMartes}</li>
                                                            <li>{extracurricularAct.scheduleMiercoles}</li>
                                                            <li>{extracurricularAct.scheduleJueves}</li>
                                                            <li>{extracurricularAct.scheduleViernes}</li>
                                                            <li>{extracurricularAct.scheduleSabado}</li>
                                                            <li>{extracurricularAct.scheduleDomingo}</li>
                                                        </ul>
                                                    </div>    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* body: About the student*/}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">About the student</h5>
                                        <p className="text-muted">
                                            {aboutStudent.text}
                                        </p>
                                    </div>
                                </div>

                                {/* body: Student Data*/}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Student Data</h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Student number</span></div>
                                                <div className='camp-space'><span className="camp-design">Career</span></div>   
                                                <div className='camp-space'><span className="camp-design">Semester</span></div>
                                                <div className='camp-space'><span className="camp-design">Group</span></div> 
                                                <div className='camp-space'><span className="camp-design">General Average</span></div>
                                                
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.studentNumber}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.career}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.semester}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{studentData.group}</span></div>  
                                                <div className='camp-space'><span className='camp-text'>{studentData.generalAverage}</span></div>
                                            </div>                               
                                        </div>                                        
                                    </div>
                                </div>

                                {/* body: Personal Data*/}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Personal Data</h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Gender</span></div>
                                                <div className='camp-space'><span className="camp-design">Birthdate</span></div>   
                                                <div className='camp-space'><span className="camp-design">curp</span></div>
                                                <div className='camp-space'><span className="camp-design">Address</span></div>
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{personalData.gender}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{personalData.birthdate}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{personalData.curp}</span></div>
                                                <div className='camp-space'><span className='camp-text'>{personalData.addresses}</span></div>                                            
                                            </div>                               
                                        </div> 
                                    </div>
                                </div>
                                
                                {/* body: Contact & Emergency Contact*/}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Contact</h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Personal email</span></div>
                                                <div className='camp-space'><span className="camp-design">Institutional email</span></div>   
                                                <div className='camp-space'><span className="camp-design">Phone</span></div>
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{contactData.personalEmail}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{contactData.institutionalEmail}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{contactData.phone}</span></div>                                            
                                            </div>                               
                                        </div> 
                                    </div>
                                </div>

                                {/* body: Emergency Contact*/}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Emergency Contact</h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Nombre</span></div>
                                                <div className='camp-space'><span className="camp-design">Numero</span></div>   
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{emergencyContact.phone}</span></div>                                            
                                                <div className='camp-space'><span className='camp-text'>{emergencyContact.name}</span></div>                                            
                                            </div>                               
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
}

export default Profile;
