export class DatasourceQuery {
	constructor(param) {
		this.currentPage = param.currentPage;
		this.date = param.date;
		this.filter = param.filter;
		this.perPage = param.perPage;
		this.sort = param.sort;
		this.total = param.total;
		this.search = param.search;
	}
	currentPage = 1;
	filter = {
		key: '',
		value: '',
	};
	total = 0;
	date = {
		start: '',
		end: '',
	};
	sort = {
		by: '',
		direction: '',
	};
	search = '';
}

export class DatasourceResponse {
	data = null;
	meta = DatasourceQuery;
	message = '';
	description = '';
}
