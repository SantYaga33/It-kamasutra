import React from 'react';
import styles from  './Followers.module.css';
import img1 from './Followers_Img/follow1.jpg'
import img2 from './Followers_Img/follow2.jpg'
import img3 from './Followers_Img/follow3.jpg'
import img4 from './Followers_Img/follow4.jpg'
import img5 from './Followers_Img/follow5.jpg'
import img6 from './Followers_Img/follow6.jpg'


const Followers = () => {
	return (
		<div className={styles.widget}>
			<h4 className={styles.widgetTitle}>Who's follownig</h4>
			<ul className={styles.followers}>
				<li>
					<figure><img src={img1 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Kelly Bill</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img2 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Issabel</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img3 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Andrew</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img4 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Sophia</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
				<li>
					<figure><img src={img5 } alt=""/></figure>
					<div className={styles.friend_meta}>
						<h4><a href="time-line.html" title="">Allen</a></h4>
						<a href="#" title="" className={styles.underline}>Add Friend</a>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Followers;