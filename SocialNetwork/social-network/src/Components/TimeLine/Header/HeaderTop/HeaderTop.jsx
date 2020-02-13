import React from 'react';
import styles from  './HeaderTop.module.css';


const HeaderTop = () => {
	return (
		<div className={styles.headerTop}>
			<div className={styles.headerTop_logo}></div>
			{/* /.header-top_logo */}
			<div className={styles.headerTop_links}></div>
			{/* /.header-top_links */}
			<div className={styles.headerTop_icons}></div>
			{/* /.header-top_icons */}
			<div className={styles.headerTop_lang}></div>
			{/* /.header-top_lang */}
			<div className={styles.headerTop_ava}></div>
			{/* /.header-top_ava */}
			<div className={styles.headerTop_menu}></div>
			{/* /.header-top_menu */}
		</div>
	);
}

export default HeaderTop;