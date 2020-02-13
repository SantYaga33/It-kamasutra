import React from 'react';
import styles from  './Header.module.css';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBg from "./HeaderBg/HeaderBg";
import HeaderNav from "./HeaderNav/HeaderNav";


const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderBg />
			<HeaderNav />
		</header>

	);
}

export default Header;