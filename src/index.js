module.exports = function solveSudoku(matrix) {

    for (let rowK = 0; rowK < COUNT_OF_NUMBERS; rowK++) {
        for (let colK = 0; colK < COUNT_OF_NUMBERS; colK++) {

            if (matrix[rowK][colK] === 0) {
                for (let number = 1; number <= COUNT_OF_NUMBERS; number++) {
                    if (isNumberCorrectForInsertion(matrix, rowK, colK, number)) {
                        matrix[rowK][colK] = number;
                        if (solveSudoku(matrix)) return matrix; // we have won
                        matrix[rowK][colK] = 0;
                    }
                }
                return false;
            }

        }
    }

    return true;
};

const COUNT_OF_NUMBERS = 9;

const isNumberCorrectForInsertion = (matrix, row, column, number) => {
    return !existInRow(matrix, row, number) &&
        !existInColumn(matrix, column, number) &&
        !existInSquare(matrix, row - (row % 3), column - (column % 3), number);
};

const existInSquare = (matrix, sRow, sColumn, number) => {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (matrix[sRow + r][sColumn + c] === number) return true;
        }
    }
    return false;
};

const existInRow = (matrix, row, number) => matrix[row].indexOf(number) >= 0;

const existInColumn = (matrix, column, number) => matrix.some(value => value[column] === number);






