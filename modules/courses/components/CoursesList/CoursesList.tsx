'use client'
import { useDispatch, useSelector } from "react-redux";
import CoursesListItem from "./CoursesListItem";
import { RootState } from "@/modules/course/store";
import { removeCourse } from "@/modules/course/courses-actions";

const CoursesList: React.FC = () => {
  const courses = useSelector((state: RootState) => state.homePage.courses);
  const dispatch = useDispatch()

  return (
    <ul>
      {courses.map((course) => <CoursesListItem key={course} slug={course} onRemoveCourse={() => dispatch(removeCourse(course))} />)}
    </ul>
  );
};

export default CoursesList;
