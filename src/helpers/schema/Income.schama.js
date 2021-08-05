//@ts-check

import Schema from 'helpers/schema/Schema.class';

const Income = new Schema({
	tableName: 'Worker',
	isExcelExportable: true,
	hasSummaryPage: true,
	fields: [
		{
			id: 'picture',
			type: 'image',
		},
		{
			id: 'WorkerID',
			type: 'int',
			hidden: true,
			isPrimaryKey: true,
		},
		{
			id: 'WorkerCode',
			type: 'string',
			noUpdate: true,
		},
		{
			id: 'WorkerDescription',
			type: 'string',
		},
	],
});

export default Income.schema;