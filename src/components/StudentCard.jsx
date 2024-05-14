import React from "react";

function StudentCard({name, level, career}) {
    return (
        <div class="student-card">
            <h1>Eatudiante</h1>
            <div>
                <label>Nombre: </label>
                <label>{name}</label>
            </div>
            <div>
                <label>Nivel: </label>
                <label>{level}</label>
            </div>
            <div>
                <label>Carrera: </label>
                <label>{career}</label>
            </div>
        </div>
    );
}

export default StudentCard;
