import React from 'react';
import style from './Header.module.css';


function Header() {
	return (
		<div className={style.header}>
			<div className="container">
				<div className={style.header_wrap}>
					<div className= {style.header_content}>
						<ul className={style.ul}>
							<li className={style.item}>Главная</li>
							<li className={style.item}>Скиллы</li>
							<li className={style.item}>Мои проекты</li>
							<li className={style.item}>Контакты</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
