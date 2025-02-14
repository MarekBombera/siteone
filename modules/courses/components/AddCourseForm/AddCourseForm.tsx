'use client'
import { addCourse } from "@/modules/course/coursesActions";
import { RootState } from "@/modules/course/store";
import ApiService from "@/services/ApiService";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddCourseForm: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const courses = useSelector((state: RootState) => state.homePage.courses);
  const dispatch = useDispatch()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const playlistId = formData.get("playlistId") as string;

    try {
      const api = new ApiService();
      const response = await api.getSlug(playlistId);
      const json = await response.json();
  
      if (json.message) {
        setError(json.message)
        return
      }
      if (courses.includes(json)) {
        setError('Course already exists')
        return
      }
      if (error) {
        setError(null)
      }
  
      dispatch(addCourse(json));
    }
    catch {
      setError('Failed to add course')
      return
    }
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e)
    }}>
      <h2>Add a new course</h2>
      <label>
        youtube playlist id:
        <input type="text" name="playlistId" />
      </label>
      <button type="submit">Add course</button>
      {error ? <p>{error}</p> : null}
    </form>
  );
};

export default AddCourseForm;
