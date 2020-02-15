import React from 'react';
import styles from  './Central.module.css';

import MyPost from "./Myposts/MyPost";




const CentralContent = () => {
	return (
		<div className={styles.sidebar_wrap	}>
			<div className={styles.sidebar}>
				<MyPost/>
			</div>
		</div>
	);
}

export default CentralContent;