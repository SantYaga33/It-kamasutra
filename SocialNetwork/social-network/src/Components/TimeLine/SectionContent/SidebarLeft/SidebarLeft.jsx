import React from 'react';
import styles from  './SidebarLeft.module.css';


const SidebarLeft = () => {
	return (
		<div className={styles.sidebar_wrap	}>
		<div className={styles.sidebar}>
			<div className={styles.socials}></div>
			<div className={styles.shortcuts}></div>
			<div className={styles.recentAct}></div>
			<div className={styles.following}></div>

		</div>
		</div>
	);
}

export default SidebarLeft;