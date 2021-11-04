class Car {
	constructor (make, model, year) {
		this.make  = make;
		this.model = model;
		this.year  = year;
	}

	getIntroduction() {
		return this.make + ' ' + this.model;
	}

	getAge() {
		let diff = (new Date).getFullYear() - this.year;
		
		return diff <= 11 ? '11 metų arba senesnis' : '10 metų arba jaunesnis';
	}
}