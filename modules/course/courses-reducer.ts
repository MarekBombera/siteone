import { ADD_COURSE, ALL_COURSES, REMOVE_COURSE } from './courses-actions'

export const initialState = {
  courses: ['java', 'free-code-camp', 'ten-days-of-javascript']
}

export type Courses = typeof initialState['courses']

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COURSES:
      return {...state}
    case REMOVE_COURSE:
      return {
        ...state,
        courses: state.courses.filter((course) => course !== action.payload),
      }
    case ADD_COURSE:
      return {...state}
    default:
      return state
  }
}

export default coursesReducer
