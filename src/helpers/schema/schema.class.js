//@ts-check

/**
 * @typedef {object} SchemaField
 * @property {string} SchemaField.id - id of the field
 * @property {('string'|'int'|'float'|'boolean'|'date'|'time'|'datetime'|'image')} SchemaField.type - the field's data type
 * @property {string} [SchemaField.label] - label of the field
 * @property {string} [SchemaField.excelName] - the excel header for this field
 * @property {boolean} [SchemaField.hidden] - should the field be hidden in all forms and views?
 * @property {boolean} [SchemaField.noAdd] - can the field's value be added from the Add screen?
 * @property {boolean} [SchemaField.noUpdate] - can the field's value be updated from the Update screen?
 * @property {boolean} [SchemaField.noView] - should the field be visible on views?
 * @property {boolean} [SchemaField.isPrimaryKey] - is the field primary key in the database?
 * @property {boolean} [SchemaField.canBeNull] - can the field's value be null?
 * @property {boolean} [SchemaField.frontendOnly] - should the field be excluded from api request body?
 * @property {function} [SchemaField.getValue] - function to calculate and return the value current field. used for fields whose value is calculated and not entered
 * @property {function} [SchemaField.viewValue] - function to calculate and return the value to be shown on views
 *
 * @property {object} [SchemaField.inputProps] - the props object to be passed to the input element
 * @property {(number|function)} [SchemaField.inputProps.min] - the minimum number value for the field
 * @property {(number|function)} [SchemaField.inputProps.max] - the maximum number value for the field
 * @property {(number|function)} [SchemaField.inputProps.minLength] - the lower character limit for the text field
 * @property {(number|function)} [SchemaField.inputProps.maxLength] - the upper character limit for the text field
 * @property {RegExp} [SchemaField.inputProps.pattern] - the Regular Expression Validation Pattern
 * @property {boolean} [SchemaField.inputProps.readOnly] - is the field's text input read only?
 *
 * @property {object} [SchemaField.dropdown] - the details for the field's dropdown, exclude if no dropdown
 * @property {boolean} [SchemaField.dropdown.allowsNew] - does the field allows values outside of the options?
 * @property {function} [SchemaField.dropdown.getValue] - function to calculate and return the value for the dropdown by selected option
 * @property {function} [SchemaField.dropdown.getLabel] - function to calculate and return the label for the dropdown by selected option
 * @property {object[]} [SchemaField.dropdown.values] - predetermined option values for the dropdown, exclude if dropdown.api is defined
 * @property {function} [SchemaField.dropdown.filter] - function to filter the dropdown options by the current state
 * @property {object} [SchemaField.dropdown.api] - the dropdown API details. exclude if dropdown.values is defined
 * @property {string} SchemaField.dropdown.api.path - the path of the API
 * @property {function} [SchemaField.dropdown.api.getParams] - function to calculate and return the parameter string
 * @property {function} [SchemaField.dropdown.api.responseMap] - function to map the API response
*/

/**
 * @typedef {object} SchemaObject
 * @property {string} SchemaObject.tableName - schema table's name
 * @property {string} [SchemaField.pageLabel] - label of the schema page
 * @property {SchemaField[]} SchemaObject.fields - list of fields in the current schema
 * @property {boolean} [SchemaObject.isExcelExportable] - is the schema excel exportable
 * @property {boolean} [SchemaObject.hasSummaryPage] - does the schema table have a summary page
*/

class Schema {

/**
 * Class Constructor
 * @param {SchemaObject} schema
*/
constructor(schema) {
	this.schema = schema;
}

};

export default Schema;