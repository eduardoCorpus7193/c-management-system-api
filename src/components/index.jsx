import React, { useState } from 'react';
{/*import StudentCard from './StudentCard';*/}


const userCard = [
    {
        name: 'Edith Angelica Gonzalez Leos',
        career: 'Information technologies area multiplatform software development',
    }
];

const careerManager = [
    {
        name: 'Gerardo Orduna',
        charge: 'Career Manager',
        email: 'gerardo.orduna@utma.edu.mx',
    }
];

const tutor = [
    {
        name: 'Paola Flores',
        charge: 'Tutor',
        email: 'paola.flores@utma.edu.mx',
    }
];
const about = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl id ultricies vulputate, nunc ' +
        'purus tincidunt quam, in aliquet arcu odio ut est. In hac habitasse platea dictumst. Sed nec purus sit ' +
        'amet lectus aliquet mollis. Nullam auctor, nisl id ultricies vulputate, nunc purus tincidunt quam, in ' +
        'aliquet arcu odio ut est. In hac habitasse platea dictumst. Sed nec purus sit amet lectus aliquet mollis.',
    }
]

const studentData = [
    { 
        studentNumber: 'utm22030603', 
        career: 'Information technologies area multiplatform software development', 
        semester: 8, 
        group: 'A', 
        generalAverage: 9.7
    }
];

const contact = [
    { 
        personalEmail: 'edithglz@gmail.com',
        institutionalEmail: 'edithglz@utma.edu.mx',
        phone: '449 510 34 20'
    }
];

const personalData = [
    {
        gender: 'Female',
        birthdate: 'September 04, 2003',
        curp: 'GOLA030904MASNSMA0',
        addresses: 'Francisco Toledo 158, Pintores Mexicanos, Aguascalientes, Aguascalientes'
    }
];

const emergencyContact = [
    {
        name: 'Gonzalez Leos America Xochitl',
        phone: '449 510 99 60'
    }
];

{/*const students = [
    { name: 'Juan Pérez', level: 'Primero', career: 'Ingeniería' },
    { name: 'Ana García', level: 'Segundo', career: 'Medicina' },
    { name: 'Luis Martínez', level: 'Tercero', career: 'Derecho' },
    { name: 'María López', level: 'Cuarto', career: 'Arquitectura' },
];*/}

function Index() {

    const [isOpenStudentData, setIsOpenStudentData] = useState(false);

    const [inputValueNumber, setInputValueNumber] = useState('');
    const [inputValueCareer, setInputValueCareer] = useState('');
    const [inputValueSemester, setInputValueSemester] = useState('');
    const [inputValueGroup, setInputValueGroup] = useState('');
    const [inputValueGeneralAverage, setInputValueGeneralAverage] = useState('');

    const [studentNumber, setStudentNumber] = useState(studentData[0].studentNumber);
    const [career, setCareer] = useState(studentData[0].career);
    const [semester, setSemester] = useState(studentData[0].semester);
    const [group, setGroup] = useState(studentData[0].group);
    const [generalAverage, setGeneralAverage] = useState(studentData[0].generalAverage);

    const handleNumberInputChange = (event) => {
        setInputValueNumber(event.target.value);
    };

    const handleCareerInputChange = (event) => {
        setInputValueCareer(event.target.value);
    };

    const handleSemesterInputChange = (event) => {
        setInputValueSemester(event.target.value);
    };

    const handleGroupInputChange = (event) => {
        setInputValueGroup(event.target.value);
    };
    
    const handleGeneralAverageInputChange = (event) => {
        setInputValueGeneralAverage(event.target.value);
    };

    const [isOpenContact, setIsOpenContact] = useState(false);
    
    const [inputValuePersonalEmail, setInputValuePersonalEmail] = useState('');
    const [inputValueInstitutionalEmail, setInputValueInstitutionalEmail] = useState('');
    const [InputValuePhoneContact, setInputValuePhoneContact] = useState('');

    const [personalEmail, setPersonalEmail] = useState(contact[0].personalEmail);
    const [institutionalEmail, setInstitutionalEmail] = useState(contact[0].institutionalEmail);
    const [phoneContact, setPhoneContact] = useState(contact[0].phone);

    const handlePersonalEmailInputChange = (event) => {
        setInputValuePersonalEmail(event.target.value);
    };

    const handleInstitutionalEmailInputChange = (event) => {
        setInputValueInstitutionalEmail(event.target.value);
    };

    const handlePhoneInputChange = (event) => {
        setInputValuePhoneContact(event.target.value);
    };

    const [isOpenPersonalData, setIsOpenPersonalData] = useState(false);

    const [inputValueGender, setinputValueGender] = useState('');
    const [inputValueBirthdate, setinputValueBirthdate] = useState('');
    const [inputValueCurp, setinputValueCurp] = useState('');
    const [inputValueAddresses, setinputValueAddresses] = useState('');

    const [gender, setGender] = useState(personalData[0].gender);
    const [birthdate, setBirthdate] = useState(personalData[0].birthdate);
    const [curp, setCurp] = useState(personalData[0].curp);
    const [addresses, setAddresses] = useState(personalData[0].addresses);

    const handleGenderInputChange = (event) => {
        setinputValueGender(event.target.value);
    };

    const handleBirthdateInputChange = (event) => {
        setinputValueBirthdate(event.target.value);
    };

    const handleCurpInputChange = (event) => {
        setinputValueCurp(event.target.value);
    };

    const handleAddressesInputChange = (event) => {
        setinputValueAddresses(event.target.value);
    };

    const [isOpenEmergencyContact, setIsOpenEmergencyContact] = useState(false);

    const [inputValueName, setinputValueName] = useState('');
    const [inputValuePhoneEmergencyContact, setinputValuePhoneEmergencyContact] = useState('');

    const [name, setName] = useState(emergencyContact[0].name);
    const [phoneEmergencyContact, setPhoneEmergencyContact] = useState(emergencyContact[0].phone);

    const handleNameInputChange = (event) => {
        setinputValueName(event.target.value);
    };

    const handlePhoneEmergencyContactInputChange = (event) => {
        setinputValuePhoneEmergencyContact(event.target.value);
    };  


    const handleButtonClick = () => {
        setStudentNumber(inputValueNumber);
        setCareer(inputValueCareer);
        setSemester(inputValueSemester);
        setGroup(inputValueGroup);
        setGeneralAverage(inputValueGeneralAverage);

        setPersonalEmail(inputValuePersonalEmail);
        setInstitutionalEmail(inputValueInstitutionalEmail);
        setPhoneContact(InputValuePhoneContact);

        setGender(inputValueGender);
        setBirthdate(inputValueBirthdate);
        setCurp(inputValueCurp);
        setAddresses(inputValueAddresses);

        setName(inputValueName);
        setPhoneEmergencyContact(inputValuePhoneEmergencyContact);
    };

    function toggleButtonStudentData() {
        setIsOpenStudentData(!isOpenStudentData);
        if (!isOpenStudentData) {
            setInputValueNumber(studentNumber);
            setInputValueCareer(career);
            setInputValueSemester(semester);
            setInputValueGroup(group);
            setInputValueGeneralAverage(generalAverage);
        }
    };

    function toggleButtonContact() {
        setIsOpenContact(!isOpenContact);
        if (!isOpenContact) {
            setInputValuePersonalEmail(personalEmail);
            setInputValueInstitutionalEmail(institutionalEmail);
            setInputValuePhoneContact(phoneContact);
        }
    }

    function toggleButtonPersonalData() {
        setIsOpenPersonalData(!isOpenPersonalData);
        if (!isOpenPersonalData) {
            setinputValueGender(gender);
            setinputValueBirthdate(birthdate);
            setinputValueCurp(curp);
            setinputValueAddresses(addresses);
        }
    };

    function toggleButtonEmergencyContact() {
        setIsOpenEmergencyContact(!isOpenEmergencyContact);
        if (!isOpenEmergencyContact) {
            setinputValueName(name);
            setinputValuePhoneEmergencyContact(phoneEmergencyContact);
        }
    };

    const handleEditAll = () => {
        toggleButtonEmergencyContact();
        toggleButtonPersonalData();
        toggleButtonContact();
        toggleButtonStudentData();
    }; 

    return (
        <>
            <div>
                <div className="jumbotron jumbotron-fluid" id="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: '150px' }}
                                />
                            </div>
                            <div className="col-lg-8">
                                <h1 className="display-4">
                                    {userCard[0].name}
                                </h1>
                                <p className="lead">
                                    Student of <b> {userCard[0].career} </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="completeInformation">
                    <div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4" id="photoContainer1">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid"
                                            style={{ width: '150px' }}
                                        />
                                        <h5 className="my-3">
                                            {careerManager[0].name}
                                        </h5>
                                        <p className="text-muted mb-1" id="name-photoContainer1">
                                            <b>{careerManager[0].charge}</b>
                                        </p>
                                        <p className="text-muted mb-4" id="link-people1">
                                            {careerManager[0].email}
                                        </p>
                                    </div>
                                </div>

                                <div className="card mb-4" id="photoContainer2">
                                    <div className="card-body text-center">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp"
                                            alt="avatar"
                                            className="rounded-circle img-fluid"
                                            style={{ width: '150px' }}
                                        />
                                        <h5 className="my-3">
                                            {tutor[0].name}
                                        </h5>
                                        <p className="text-muted mb-1" id="name-photoContainer2">
                                            <b>{tutor[0].charge}</b>
                                        </p>
                                        <p className="text-muted mb-4" id="link-people2">
                                            {tutor[0].email}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">About the student</h5>
                                        <p className="text-muted">
                                            {about[0].text}
                                        </p>
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Student Data</h5>
                                        <div className="list">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Student number:</h6>
                                                    {isOpenStudentData ? (
                                                        <div>
                                                            {/*<input className="form-control form-control-sm input-style" type="text" placeholder={studentData[0].studentNumber} style={{ width: '600px' }}/>*/}
                                                           <input className="form-control form-control-sm input-style" type="text" value={inputValueNumber} onChange={handleNumberInputChange} style={{ width: '600px' }} />
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {studentNumber}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Career:</h6>
                                                    {isOpenStudentData ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValueCareer} onChange={handleCareerInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {career}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Semester:</h6>
                                                    {isOpenStudentData ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValueSemester} onChange={handleSemesterInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {semester}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Group:</h6>
                                                    {isOpenStudentData ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValueGroup} onChange={handleGroupInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {group}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">General Average:</h6>
                                                    {isOpenStudentData ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValueGeneralAverage} onChange={handleGeneralAverageInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {generalAverage}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='button' id='buttonStudentData'>
                                            <button className="edit-button no-outline" onClick={toggleButtonStudentData}>
                                                {isOpenStudentData ? (
                                                    <button type="button" class="btn btn-light" id="buttonStudentData" onClick={handleButtonClick}>Save</button>
                                                ) : (
                                                    <img  src='../images/edit.png' alt='Edit' width='25px' height='25px' />
                                                )}
                                            </button>
                                            {/*<button className="edit-button" onClick={togglePopup}> {/* onClick={handleClick} }
                                                <img src='../images/edit.png' alt='Edit' width='25px' height='25px' />
                                            </button>*/}
                                            {/*<div id="popup" class="popup">
                                                <div class="popup-content">
                                                    <span id="closePopupBtn" class="close">&times;</span>
                                                    <p>Hola</p>
                                                </div>
                                        </div>*/}
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Contact</h5>
                                        <div className="list">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Personal email:</h6>
                                                    {isOpenContact ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValuePersonalEmail} onChange={handlePersonalEmailInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {personalEmail}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Institutional email:</h6>
                                                    {isOpenContact ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={inputValueInstitutionalEmail} onChange={handleInstitutionalEmailInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {institutionalEmail}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Phone:</h6>
                                                    {isOpenContact ? (
                                                        <div>
                                                            <input className="form-control form-control-sm input-style" type="text" value={InputValuePhoneContact} onChange={handlePhoneInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {phoneContact}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className='button' id='buttonContact'>
                                            <button className="edit-button no-outline" onClick={toggleButtonContact}>
                                                {isOpenContact ? (
                                                    <button type="button" class="btn btn-light" id="buttonContact" onClick={handleButtonClick}>Save</button>
                                                ) : (
                                                    <img  src='../images/edit.png' alt='Edit' width='25px' height='25px' />
                                                )}
                                            </button>  
                                        </div>*/}
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Personal Data</h5>
                                        <div className="list">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Gender:</h6>
                                                    {isOpenPersonalData ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValueGender} onChange={handleGenderInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {gender}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Birthdate:</h6>
                                                    {isOpenPersonalData ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValueBirthdate} onChange={handleBirthdateInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {birthdate}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">CURP:</h6>
                                                    {isOpenPersonalData ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValueCurp} onChange={handleCurpInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {curp}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Addresses:</h6>
                                                    {isOpenPersonalData ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValueAddresses} onChange={handleAddressesInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {addresses}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className='button' id='buttonPersonalData'>
                                            <button className="edit-button no-outline" onClick={toggleButtonPersonalData}>
                                                {isOpenPersonalData ? (
                                                    <button type="button" class="btn btn-light" id="buttonPersonalData" onClick={handleButtonClick}>Save</button>
                                                ) : (
                                                    <img  src='../images/edit.png' alt='Edit' width='25px' height='25px' />
                                                )}
                                            </button> 
                                        </div>*/}
                                    </div>
                                </div>

                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h5 className="mb-4">Emergency Contact</h5>
                                        <div className="list">
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Nombre:</h6>
                                                    {isOpenEmergencyContact ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValueName} onChange={handleNameInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {name}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <div>
                                                    <h6 className="mb-2">Numero:</h6>
                                                    {isOpenEmergencyContact ? (
                                                        <div>
                                                            <input class="form-control form-control-sm" type="text" value={inputValuePhoneEmergencyContact} onChange={handlePhoneEmergencyContactInputChange} style={{ width: '600px' }}/>
                                                        </div>
                                                    ) : (
                                                        <p className="element-list text-muted mb-0">
                                                            {phoneEmergencyContact}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className='button' id='buttonEmergencyContact'>
                                            <button className="edit-button no-outline" onClick={toggleButtonEmergencyContact}>
                                                {isOpenEmergencyContact ? (
                                                    <button type="button" class="btn btn-light" id="buttonEmergencyContact" onClick={handleButtonClick}>Save</button>
                                                ) : (
                                                    <img  src='../images/edit.png' alt='Edit' width='25px' height='25px' />
                                                )}
                                            </button> 
                                        </div>*/}
                                    </div>
                                    
                                    
                                </div>
                                {/*<div className="card-body">
                                    <div className='button buttonEmergencyContact buttonPersonalData buttonContact buttonStudentData'>
                                        <button className="edit-button no-outline" onClick={handleEditAll}>
                                            {isOpenEmergencyContact ? (
                                                <button type="button" className="btn btn-light buttonEmergencyContact buttonPersonalData buttonContact buttonStudentData" onClick={handleEditAll}>Save</button>
                                            ) : (
                                                <button type="button" className="btn btn-light buttonEmergencyContact buttonPersonalData buttonContact buttonStudentData" onClick={handleEditAll}>Editar formulario</button>
                                            )}
                                        </button> 
                                    </div>
                                        </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        


                {/* Uncomment and use this section if needed
                <div className='row'>
                    {students.map((student, index) => (
                        <StudentCard
                            key={index}
                            name={student.name}
                            level={student.level}
                            career={student.career}
                        />
                    ))}
                </div>
                */}
            
        </>
    );
}

export default Index;
