import {Table} from './classes/table.js'
function createDemoTable() {
    console.log("Creating table")
    const table = new Table("EXAMPLE", ["sID", "ENGNAME", "CLASS", "CLASSNO", "DOB"], [
        {
            sID: 20200001,
            ENGNAME: "John Doe",
            CLASS: "2A",
            CLASSNO: 1,
            DOB: "2000-01-01"
        },
        {
            sID: 20200002,
            ENGNAME: "Jane Doe",
            CLASS: "2A",
            CLASSNO: 2
        },
        {
            sID: 20200003,
            ENGNAME: "John Smith",
            CLASS: "2S",
        }
    ]);
    table.createElement();
}

window["createDemoTable"] = createDemoTable;