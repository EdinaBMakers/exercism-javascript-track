export class Triangle {
  constructor(numOfRows) {
    this.numOfRows = numOfRows;
    this.pascalRows = undefined;
  }

  get lastRow() {
    return this.rows[this.numOfRows - 1];
  }

  get rows() {
    if (this.pascalRows) {
      return this.pascalRows;
    }

    this.pascalRows = [[1]]

    while (this.pascalRows.length < this.numOfRows) {
      let previousRow = this.pascalRows[this.pascalRows.length - 1];
      let currentRow = [1];

      for (let i = 0; i < previousRow.length - 1; i++) {
        currentRow.push(previousRow[i] + previousRow[i + 1]);
      }

      currentRow.push(1);
      this.pascalRows.push(currentRow);
    } 

    return this.pascalRows;
  }
}
