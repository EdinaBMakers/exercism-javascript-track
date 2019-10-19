export class Matrix {
  constructor(str) {
    this.str = str;
  }

  get rows() {
    const rowStr = this.str.split('\n')
    return rowStr.map(row => row.split(' ').map(Number));
  }

  get columns() {
    const rows = this.rows;
    const colIndices = rows[0].map((_, index) => index);
    
    return colIndices.map(colIndex => rows.map(row => row[colIndex]));
  }
}
