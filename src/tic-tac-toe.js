class TicTacToe {
    constructor() {
        this.matrix = [
            Array(null,null,null),
            Array(null,null,null),
            Array(null,null,null),
        ];
        this.player = 'x'
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null){
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
             this.player === 'x' ? this.player ='o' : this.player ='x';
             this.isFinished();
        }
        return this;
    }

    isFinished() {
        if(this.getWinner() === 'x' || this.getWinner() === 'o') return !(this.getWinner() === null) 
        return this.noMoreTurns();
    }

    getWinner() {
        //debugger
        let row1 = this.matrix[0];
        let row2 = this.matrix[1];
        let row3 = this.matrix[2];
        if(row1.join('') === 'xxx' || row2.join('') === 'xxx' || row3.join('') === 'xxx'){
            return 'x'
        }else if(row1.join('')==='ooo' || row2.join('')==='ooo' || row3.join('')==='ooo') return 'o';
        else {
            let result = [];
            let diagonal = [];
            let diagonalMinus = [];
            for(let i=0, length = this.matrix.length; i < length; i++){
                for(let j=0, k = this.matrix.length -1, length = this.matrix.length; j < length, k >= 0; j++, k--){
                    result.push(this.matrix[j][i]);
                    diagonal.push(this.matrix[j][j]);
                    diagonalMinus.push(this.matrix[j][k])
                }
                if(result.join('') === 'xxx' || diagonal.join('')==='xxx'  || diagonalMinus.join('') ==='xxx') return 'x';
                else if(result.join('') === 'ooo' || diagonal.join('')==='ooo' || diagonalMinus.join('') === 'ooo') return 'o';
                result = []; diagonal = []; diagonalMinus = [];
            }
        }
        return null;
    }

    noMoreTurns() {
        let count = [];
        this.matrix.forEach(el => el.forEach(e => {
            e === null ? count.push(e):false;
        }));
        return count.length === 0;
    }

    isDraw() {
        return ((this.noMoreTurns() && !this.getWinner()) ? true : false)
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
