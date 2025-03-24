import { Table } from "./table";

type acceptedTypes = string | number | boolean | Date | null
type recordValues = {
    [key: string]: acceptedTypes
}

class Record {
    public values: recordValues
    constructor(parentTable: Table, fields: recordValues) {
        parentTable.head.forEach((column) => {
            if (!fields[column]) {
                fields[column] = null
            }
        })
        this.values = fields
    }
}

export {Record}