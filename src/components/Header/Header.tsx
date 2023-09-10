import styles from '../Header/Header.module.css'
import logo from '../../assets/IgniteSimbol.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
    </header>
  )
}
