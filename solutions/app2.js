const HU = {
	date(date) {
		return new Intl.DateTimeFormat("hu-HU").format(date)
	},

	curreny(currency) {
		return new Intl.NumberFormat("hu-HU", {
			style: 'currency',
			currency: 'HUF'
		}).format(currency)
	},

	list(list) {
		let endResult = "";
		let currentAffix = ", ";
		for (let i = 0; i < list.length; i++) {
			if (i === list.length - 1) {
				currentAffix = "";
			}
			if (i === list.length - 2) {
				currentAffix = " és ";
			}
			endResult += list[i] + currentAffix;
		}
		return endResult;
	},

};


export default HU;