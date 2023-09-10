import { PencilLine } from 'phosphor-react'
import styles from '../Sidebar/Sidebar.module.css'
import { Avatr } from '../Avatar/Avatar'
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1683143726517-4356da89e756?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatr hasBorder={true} src="https://github.com/Luanrodrigues07.png" />
        <strong>Luan Rodrigues</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          {' '}
          <PencilLine size={20} />
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}
