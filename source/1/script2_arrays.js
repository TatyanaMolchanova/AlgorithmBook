var averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 80, 81];
averageTemp[1] = [81, 79, 75, 73, 78, 84];

// console.log('averageTemp', averageTemp);

function printMatrix(myMatrix) {
    for (var i = 0; i < myMatrix.length; i++) {
        for (var j = 0; j < myMatrix[i].length; j++) {
            // console.log('myMatrix[i]', myMatrix[i]);
            // console.log('myMatrix[j]', myMatrix[j]);
            // console.log('myMatrix[i][j]', myMatrix[i][j]);
        }
    }
}

printMatrix(averageTemp);

var matrix3x3x3 = [];
for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

// console.log('matrix3x3x3', matrix3x3x3);

for (var i = 0; i < matrix3x3x3.length; i++) {
    for (var j = 0; j < matrix3x3x3[i].length; j++) {
        for (var z = 0; z < matrix3x3x3[i][j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}