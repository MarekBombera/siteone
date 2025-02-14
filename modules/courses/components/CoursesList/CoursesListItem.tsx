import styles from "./CoursesListItem.module.scss";

type Props = {
  slug: string;
  onRemoveCourse: () => void
};

const CoursesListItem: React.FC<Props> = ({ slug, onRemoveCourse }) => {
  return (
    <li className={styles["courses-list-item"]}>
      {slug}
      <button onClick={onRemoveCourse}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
