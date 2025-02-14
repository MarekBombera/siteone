import { Courses } from "./courses-reducer"

export const ALL_COURSES = 'PlaylistPage/ALL_COURSES'
export const REMOVE_COURSE = 'PlaylistPage/REMOVE_COURSE'
export const ADD_COURSE = 'PlaylistPage/ADD_COURSE'

export const allCourses = (payload: Courses) => ({ type: ALL_COURSES, payload })
export const removeCourse = (payload) => ({ type: REMOVE_COURSE, payload })
export const addCourse = (payload) => ({ type: ADD_COURSE, payload })
