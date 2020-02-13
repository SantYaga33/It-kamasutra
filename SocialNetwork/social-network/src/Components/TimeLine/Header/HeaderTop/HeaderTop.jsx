import React from 'react';
import styles from  './HeaderTop.module.css';


const HeaderTop = () => {
	return (
		<div className={styles.headerTop}>
			<div className={styles.headerTop_logo}>
				LOGO
			</div>
			<div className={styles.headerTop_wrap}>
				<div className={styles.headerTop_links}>
					<ul>
						<li><span>Home</span></li>
						<li><span>Timeline</span></li>
						<li><span>Account Setting</span></li>
						<li><span>More Pages</span></li>
					</ul>
				</div>
				<div className={styles.headerTop_iconWrap}>
					<div className={styles.headerTop_icons}></div>
					<div className={styles.headerTop_icons}></div>
					<div className={styles.headerTop_icons}></div>
					<div className={styles.headerTop_icons}></div>
					<div className={styles.headerTop_icons}></div>
				</div>
			</div>
			<div className={styles.headerTop_ava}>
				<img src="" alt="avatar"/>
			</div>
			<div className={styles.headerTop_menu}>
				MENU
			</div>
		</div>
	);
}

export default HeaderTop;