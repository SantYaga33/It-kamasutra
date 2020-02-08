import React from 'react';
import style from './Contacts.module.css';


function Contacts() {
	return (
		<section>
			<div className='container'>
				<div className={style.contacts}>
					<div className={style.title}>
						Контакты
					</div>
					<form className={style.form} action="">
						<input/>
						<input/>
						<textarea  rows="10" cols="80" name="text" placeholder="Ваше сообщение"></textarea>
						<button  type="submit" className={style.button}>Отправить</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contacts;