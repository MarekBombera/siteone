import { AnyAction } from 'redux-saga'
import { ADD_COURSE, ALL_COURSES, CoursesActions, REMOVE_COURSE } from './coursesActions'

export const initialState = {
  courses: ['java', 'free-code-camp', 'ten-days-of-javascript']
}

export type Courses = typeof initialState['courses']

// Wasn't able to type action correctly wouldn't use Any in production
const coursesReducer = (state = initialState, action: CoursesActions | AnyAction) => {
  switch (action.type) {
    case ALL_COURSES:
      return {...state}
    case REMOVE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course !== action.payload),
      }
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      }
    default:
      return state
  }
}

export default coursesReducer
