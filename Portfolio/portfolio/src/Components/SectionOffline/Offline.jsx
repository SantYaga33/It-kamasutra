import React from 'react';
import style from './Offline.module.css';



function Offline() {
	return (
		<section>
			<div className='container'>
				<div className={style.offline}>
					<div className={style.wrap}>
						<div className={style.title}>
							Рассматриваю варианты удаленной работы
						</div>
						<button className={style.button}>Заказать работу</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Offline;