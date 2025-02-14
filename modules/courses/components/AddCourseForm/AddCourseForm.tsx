'use client'
import { addCourse } from "@/modules/course/coursesActions";
import ApiService from "@/services/ApiService";
import { useDispatch } from "react-redux";

const AddCourseForm: React.FC = () => {
  const dispatch = useDispatch()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const playlistId = formData.get("playlistId") as string;

    const api = new ApiService();
    const response = await api.getSlug(playlistId);
    const json = await response.json();

    dispatch(addCourse(json));
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
    </form>
  );
};

export default AddCourseForm;
