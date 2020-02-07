import React from 'react';
import style from './Main.module.css';


function Main() {
	return (
		<section>
			<div className='container'>
				<div className={style.main}>
					<div className={style.main_wrap}>
						<div className={style.discrt}>
							<span> Привет! </span>
							<span> Меня зовут Петр Иванов </span>
							<span> Я фронтенд-разработчик </span>
						</div>
						<div className={style.main_img}>
							<img src="" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Main;