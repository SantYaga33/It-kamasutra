import React from 'react';
import style from './Footer.module.css';


function Footer() {
	return (
		<section>
			<div className='container'>
				<footer className={style.footer}>
					<div className={style.title}>
						Иван Иванов
					</div>
					<div className={style.icons}>
						<div className={style.icon_img}><img src="" alt=""/></div>
						<div className={style.icon_img}><img src="" alt=""/></div>
						<div className={style.icon_img}><img src="" alt=""/></div>
						<div className={style.icon_img}><img src="" alt=""/></div>
					</div>
					<div className={style.copyrights}>
						&copy; 2020 все права защищены
					</div>
				</footer>
			</div>
		</section>
	);
}

export default Footer;