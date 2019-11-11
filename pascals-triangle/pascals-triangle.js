export class Triangle {
  constructor(numOfRows) {
    this.numOfRows = numOfRows;
  }

  get lastRow() {
    return this.rows[this.numOfRows - 1];
  }

  get rows() {
    let pascalRows = [[1]]

    while (pascalRows.length < this.numOfRows) {
      let previousRow = pascalRows[pascalRows.length - 1];
      let currentRow = [1];

      for (let i = 0; i < previousRow.length - 1; i++) {
        currentRow.push(previousRow[i] + previousRow[i + 1]);
      }

      currentRow.push(1);
      pascalRows.push(currentRow);
    } 

    return pascalRows;
  }
}
