import React from 'react';
import style from './SelectDay.module.css';



const Progress = () => {
	let currentDay = 'Monday';
	let days = [
		{title: 'Monday', bgClassName: 'green'},
		{title: 'Tuesday', bgClassName: 'yellow'},
		{title: 'Wednesday', bgClassName: 'red'},
		{title: 'Thursday', bgClassName: 'purple'},
		{title: 'Friday', bgClassName: 'blue'}
	];

	// const searchDay = () => {
	// 	if ( days.title === currentDay ) {
	// 		return true
	// 	} else{
	// 		return false
	// 	}
	// };
	//
	// let indexOfDay = days.findIndex(searchDay);
let fff = days[1].bgClassName;
console.log(fff);
		return (
			<div className={style.wrap} >
				<div className="fff">
					{days[1].title }
				</div>
			</div>
		);

}


export default Progress;






