import { Record } from './record.js';
type acceptedTypes = string | number | boolean | Date | null
type recordValues = {
    [key: string]: acceptedTypes
}

class Table {
    public name: string;
    public head: string[];
    public records: Record[];

    constructor(name: string, head: string[], initialValue: recordValues[]) {
        this.head = head;
        this.records = initialValue.map((record) => new Record(this, record));
    }

    public createElement() {
        console.log('Creating table element');

        let table = document.createElement('table');
        table.id = "exampleTable";

        let thead = document.createElement('thead');
        let theadtr = document.createElement('tr');
        thead.appendChild(theadtr);
        let tbody = document.createElement('tbody');
        this.head.forEach((element) => {
            let th = document.createElement('th');
            let thText = document.createElement('span');
            thText.appendChild(document.createTextNode(element));
            th.appendChild(thText);
            theadtr.appendChild(th);
        });
        this.records.forEach((record) => {
            let tr = document.createElement('tr');
            for (const column of this.head) {
                let td = document.createElement('td');
                console.log(column);
                console.log(record.values);
                let value = record.values[column] ?? "NULL"; 
                let valueElement = document.createElement('span');
                valueElement.appendChild(document.createTextNode(value.toString()));
                td.appendChild(valueElement);
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });
        table.appendChild(thead);
        table.appendChild(tbody);
        const container = document.getElementById('exampleContainer');
        if (!container) {
            throw new Error('Container not found');
        }
        container.appendChild(table);

    }
}

export { Table }