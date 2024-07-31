const db = require("../models/db");

const Course = db.courses;
const Course_Catalog = db.course_catalog;

// Validate that the employee exist to delete/edit/partial edit
const validateCourseName = (courseName) => {
  if(!courseName){
    return res.status(400).json({
      msg : "Bad request",
      status : 400,
      body : "Impossible to find the given data"
    });  
  }
}

// 1. Get all courses
const getAllCoursesName = async (req, res) => {
  try {
    const coursesName = await Course_Catalog.findAll();
    res.json(coursesName);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

// 2. Get a course by ID
const getCourseNameById = async (req, res) => {
    try {
      const ID = req.params.id
      const getCourseName = await Course_Catalog.findOne(
        {
          where: {
            id : ID
          }
        });
      return res.status(200).json({
        ok : true,
        status : 200,
        body : getCourseName
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
// 3. Get a course by ID
const getCourseByName = async (req, res) => {
    try {
      const NAME = req.params.name
      const getCourseName = await Course_Catalog.findOne(
        {
          where: {
            name : NAME
          }
        });
      return res.status(200).json({
        ok : true,
        status : 200,
        body : getCourseName
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };


// 4. Create a new course
const createCourseName = async (req, res) => {
  try { 
    const courseName = await Course_Catalog.create(req.body);
    return res.json(courseName);
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// 5. Update a course (PUT)
const updateCourseName = async (req, res) => {
  try {
    const keysReq = Object.keys(req.body);
    keysReq.sort();
    //  if(!keysReq.every(isTheSameArray)){
    //      res.status(400).json({
    //        msg : "Bad request",
    //        status : 400,
    //        body : "Missing parameters"
    //      });
    //      return;
    //    }
    const id = req.params.id
    const updateCourseName = await Course_Catalog.update(
      req.body,
      {
        where: {
          id : id
        }
      });
    validateCourseName(updateCourseName);
    return res.status(200).json({
      ok : true,
      status : 200,
      body : updateCourseName
    });
  }
  catch(error){
    return res.status(500).json({ message: error.message,
      status : 500,
      body : "Error updating course"
     });
  }
}


// 6. Delete course
const deleteCourseName = async (req, res) => {
  try{
    const ID = req.params.name
    const deleteCourse = await db.Course_Catalog.destroy({
      where:{
        id : ID
      }
    });
    validateCourse(deleteCourse);
    return res.status(200).json({
      ok : true,
      status : 200,
      body : deleteCourse
    });
  } catch (error){
    return res.status(500).json({ message: error.message });
  }
}

// 7. Get courses by course name (search with like operator)
const getCoursesByCourseName = async (req, res) => {
  try {
    const NAME = req.params.course_name_id
    const getCourse = await Course.findAll( { include: [ { model: Course_Catalog, as: 'course_catalog' } ] } ,
      {
        where: {
          course_name_id : NAME
        }
      });
    return res.status(200).json({
      ok : true,
      status : 200,
      body : getCourse
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// 8. Get courses by coordinator ID
const getCoursesByCoordinatorId = async (coordinatorId) => {
  try {
    const courses = await Course.findAll({
      where: {
        cordinator_user_id: coordinatorId,
      },
      include: [
        { model: User, as: 'coordinator' }, // Include coordinator information
        { model: QuarterCatalog, as: 'quarter' }, // Include quarter information
        { model: CourseCatalog, as: 'courseName' }, // Include course name information
      ],
    });
    return courses;
  } catch (error) {
    console.error('Error getting courses by coordinator ID:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
};

module.exports = {
    getAllCoursesName,
    getCourseNameById,
    getCourseByName,
    createCourseName,
    updateCourseName,
    deleteCourseName,
    getCoursesByCourseName,
    getCoursesByCoordinatorId,
}