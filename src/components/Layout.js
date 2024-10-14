import styles from './Layout.module.css';
import NavBar from './NavBar';
import Footer from './Footer';
import MenuMobile from './MenuMobile';

function Layout({ children }) {
  return (
    <div>
      <MenuMobile class={styles.MenuMobile} />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
