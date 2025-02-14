import { FC } from "react"
import Link from "next/link";
import styles from './Navigation.module.scss'


const Navigation:FC = () => {
  return (
    <nav className={styles.nav}>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/course/ten-days-of-javascript">10 days of JavaScript</Link>
      </li>
      <li>
        <Link href="/course//java">Java</Link>
      </li>
      <li>
        <Link href="/course/free-code-camp">Free Code Camp</Link>
      </li>
    </ul>
  </nav>
  )
};

export default Navigation
