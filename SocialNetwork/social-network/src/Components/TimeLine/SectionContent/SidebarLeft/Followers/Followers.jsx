import React from 'react';
import styles from  './SidebarLeft.module.css';


const SidebarLeft = () => {
	return (
		<div>
			<div className={styles.socials}></div>
			<div className={styles.shortcuts}></div>
			<div className={styles.recentAct}></div>
			<div className={styles.followers}></div>

		</div>
	);
}

export default SidebarLeft;