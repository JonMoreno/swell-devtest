// helper functions to re-use in the app.

export function formatDate(date: string): string {
	const d = new Date(date);
	let month = '' + (d.getMonth() + 1);
	let day = '' + d.getDate();
	const year = d.getFullYear().toString().substr(-2);
	let hour = d.getHours();
	let minute: number | string = d.getMinutes();
	const amOrPm = hour >= 12 ? 'pm' : 'am';

	hour = hour % 12;
	hour = hour ? hour : 12;
	minute = minute < 10 ? '0' + minute : minute;

	month = month.length < 2 ? '0' + month : month;
	day = day.length < 2 ? '0' + day : day;

	return [month, day, year].join('/') + ' ' + hour + ':' + minute + ' ' + amOrPm;
}
