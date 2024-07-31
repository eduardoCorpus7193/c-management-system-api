const express = require("express"); //Importa los módulos necesarios para crear el servidor
const app = express();   //crear el servidor
const bodyParser = require("body-parser");  //para analizar el cuerpo de las solicitudes HTTP entrantes

app.use(bodyParser.json()); //parsear el cuerpo de las solicitudes HTTP entrantes 

const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, getCoursesByCourseName, getCoursesByCoordinatorId } = require("./queries/courses.queries.js");
const { getAllCoursesName, getCourseNameById, getCourseByName, createCourseName, updateCourseName, deleteCourseName, } = require("./queries/course_catalog.queries.js");
const { getAllCoursesType, getcourseTypeById, createCourseType, updatecourseType, deletecourseType, getCoursesBycourseType } = require("./queries/course_type.queries.js");

// Endpoints for courses

//Get all courses
app.get("/api/courses", (req, res) => {
    getAllCourses(req, res);
  });

// Get a course by ID
app.get("/api/courses/:id", (req, res) => {
    getCourseById(req, res);
  });
 
// Post a new course
app.post("/api/courses", (req, res) => {
  createCourse(req, res);
});

// PUT update a course (replace entire course)
app.put("/api/courses/:id", (req, res) => {
  updateCourse(req, res);
});

// DELETE a course
app.delete("/api/courses/:id", (req, res) => {
  deleteCourse(req, res)
});

// Get a course by Name
app.get("/api/coursesByName/:name", (req, res) => {
  getCoursesByCourseName(req, res);
});

// Endpoints for course_catalog

//Get all courses
app.get("/api/courses_name", (req, res) => {
  getAllCoursesName(req, res);
});

// Get a course by ID
app.get("/api/courses_name_id/:id", (req, res) => {
  getCourseNameById(req, res);
});

// Get a course by ID
app.get("/api/courses_name/:name", (req, res) => {
  getCourseByName(req, res);
});

// Post a new course
app.post("/api/courses_name", (req, res) => {
createCourseName(req, res);
});

// PUT update a course (replace entire course)
app.put("/api/courses_name/:id", (req, res) => {
updateCourseName(req, res);
});

// DELETE a course
app.delete("/api/courses_name/:id", (req, res) => {
deleteCourseName(req, res)
});

// Endpoints for course_type

//Get all courses type
app.get("/api/courses_type", (req, res) => {
  getAllCoursesType(req, res);
});

// Get a course by ID
app.get("/api/courses_type_id/:id", (req, res) => {
  getcourseTypeById(req, res);
});

// Post a new course
app.post("/api/courses_type", (req, res) => {
  createCourseType(req, res);
});

// PUT update a course (replace entire course)
app.put("/api/courses_type/:id", (req, res) => {
updateCourseType(req, res);
});

// DELETE a course
app.delete("/api/courses_type/:id", (req, res) => {
deleteCourseType(req, res)
});



  // Start the server
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
app.listen(port, () => console.log(`Server listening on port ${port}`));