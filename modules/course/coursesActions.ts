import { Courses } from "./coursesReducer"

export const ALL_COURSES = 'PlaylistPage/ALL_COURSES'
export const REMOVE_COURSE = 'PlaylistPage/REMOVE_COURSE'
export const ADD_COURSE = 'PlaylistPage/ADD_COURSE'

export const allCourses = (payload: Courses) => ({ type: ALL_COURSES, payload })
export const removeCourse = (payload: string) => ({ type: REMOVE_COURSE, payload })
export const addCourse = (payload: string) => ({ type: ADD_COURSE, payload })

export type CoursesActions =
  | ReturnType<typeof allCourses>
  | ReturnType<typeof removeCourse>
  | ReturnType<typeof addCourse>;
