import React from 'react';
import imgBg from './HeaderBg_Img/main-bg-50.png'
import Bg from './HeaderBg_Img/timeline-1.jpg'
import styles from  './HeaderBg.module.css';


const HeaderBg = () => {
	return (
		<div className={styles.headerBg}>
			<figure className={styles.figure}>
				<img src={ imgBg }  alt="photo"/>
			</figure>


			<div className={styles.headerBg_bg}></div>
			{/* /.header-bg_bg */}
			<div className={styles.headerBg_ava}></div>
			{/* /.header-bg_ava */}
			<div className={styles.headerBg_editPfoto}></div>
			{/* /.header-bg_editPhoto */}
			<div className={styles.headerBg_followers}></div>
			{/* /.header-bg_followers */}
			<div className={styles.headerBg_addFriends}></div>
			{/* /.header-bg_addFriends */}
		</div>

	);
}

export default HeaderBg;