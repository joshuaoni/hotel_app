import { Navbar, PropertyComponent } from './_components'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      <PropertyComponent />
    </div>
  )
}
