'use client'
import { FC } from "react"
import Link from "next/link";
import styles from './Navigation.module.scss'
import { useSelector } from "react-redux";
import { RootState } from "@/modules/course/store";

const Navigation: FC = () => {
  const courses = useSelector((state: RootState) => state.homePage.courses);

  return (
  <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      {courses.map((course) => (
      <li key={course}>
        <Link href={`/course/${course}`}>{course}</Link>
      </li>
      ))}
    </ul>
  </nav>
  )
};

export default Navigation
