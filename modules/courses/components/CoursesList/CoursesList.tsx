'use client'
import { useSelector } from "react-redux";
import CoursesListItem from "./CoursesListItem";
import { RootState } from "@/modules/course/store";

const CoursesList: React.FC = () => {
  const courses = useSelector((state: RootState) => state.homePage.courses);

  return (
    <ul>
      {courses.map((course) => <CoursesListItem key={course} slug={course} />)}
    </ul>
  );
};

export default CoursesList;
