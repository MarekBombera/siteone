import React from 'react'
import Container from '@/components/Container'
import styles from './Header.module.scss'
import Navigation from './components/Navigation'

const Header = () => (
  <header className={styles.base}>
    <Container>
      <div className={styles.logo}>Awesome project</div>
      <Navigation />
    </Container>
  </header>
)

export default Header
