import { Router } from 'express';
import { getAllCourses,addCourse,deleteCourse,updateCourse,partialUpdateCourse,addCommentToCourse } from '../controllers/courseController';

const router = Router();

router.get('/', getAllCourses);
router.post('/add', addCourse);
router.post('/addc', addCommentToCourse);
router.delete('/remove/:id', deleteCourse);
router.put('/update/:id', updateCourse);
router.patch('/partialUpdate/:id', partialUpdateCourse);

export default router;