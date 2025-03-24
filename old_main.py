import sqlite3
from tkinter import *
from tkinter import ttk

conn: sqlite3.Connection | None = None

sqlDatatypes = ["INTEGER", "TEXT", "NULL"]

def SelectQuery(event):
    SelectText = Label(InputArea, text="SELECT")
    SelectText.pack()

if __name__ == "__main__":
    print("Connecting to database...")
    conn = sqlite3.connect('db/main.db')
    print("Connected to database.")

    root = Tk("SQL-Visualizer")
    AreaContainer = ttk.PanedWindow()
    AreaContainer.pack(fill=BOTH, expand=True)

    InputArea = ttk.PanedWindow()
    InputArea.anchor("nw")
    OutputArea = ttk.PanedWindow()
    OutputArea.anchor("ne")

    QuerySelectionBtn = ttk.Combobox(InputArea, values=["Select"]) # TBD
    QuerySelectionBtn.bind("<<ComboboxSelected>>", SelectQuery)
    InputArea.add(QuerySelectionBtn)

    Table = ttk.Frame()
    for i in range(5):
        for j in range(5):
            b = Label(Table, borderwidth=1, border=1, text=f"R{i}C{j}")
            b.grid(row=i, column=j)
    OutputArea.add(Table)

    AreaContainer.add(InputArea)
    AreaContainer.add(OutputArea)

    root.mainloop()
    # Debug
    