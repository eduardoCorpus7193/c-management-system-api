import { userData } from '../mocks/data.js';

function Sports() {

    const { 
        extracurricularAct,
        aboutStudent,
        studentData,
    } = userData;

    console.log(userData);

    return (
        <>
            <div> 
                {/* BODY: CONTENT */}
                <div className='jumbotron' id='content'>
                    <div>
                        <div className="row">
                            {/* BODY: CONTAINER INFORMATION */}
                            <div className="col-lg-8 container-info-disposition">

                                {/* ABOUT THE STUDENT */}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">About the activity</h5>
                                        <p className="text-muted">
                                            {aboutStudent.text}
                                        </p>
                                    </div>
                                </div>

                                {/* EXTRACURRICULAR ACTIVITY */}
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Extracurricular activity </h5>
                                        <div className='disposition'>
                                            <div className='list'>
                                                <div className='camp-space'><span className="camp-design">Activity</span></div>
                                                <div className='camp-space'><span className="camp-design">Length</span></div> 
                                                <div className='camp-space'><span className="camp-design">Schedule</span></div> 
                                            </div>
                                            <div className="list">                                            
                                                <div className='camp-space'><span className='camp-text'>{extracurricularAct.name}</span></div>                                              
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
                                                        
                            </div>

                            {/* PHOTO CONTAINER */}
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid tutor-avatar"                                            
                                        />
                                        <h5 className="my-3">
                                            Fray
                                        </h5>
                                    </div>
                                    <div>
                                        <hr />
                                    </div>
                                    <div>
                                        {/* CONTACT */}
                                        <div className='disposition'>
                                            <div className='list'>
                                                <p className='camp-space camp-design'>Tallerista:</p>
                                                <p className='camp-space camp-text'>Fraygodofredo Perez Domingues</p>
                                                <p className='camp-space camp-design'>Email:</p>
                                                <p className='camp-space camp-text'>fraygodofredo.perez@utma.edu.mx</p>
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

export default Sports;
