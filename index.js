// run `node index.js` in the terminal

// s = [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 5],
// ];
s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

console.log('Square: \n', s.join('\n').replaceAll(',', ' '));
let count = 0;
while (theSummOfCulumns(s)) {
  console.log('----');
}
console.log('---- count:', count);
// theSummOfCulumns(s);

function theSummOfCulumns(square) {
  let diagon1 = 0;
  let diagon2 = 0;
  let lignes = new Array(3).fill(0);
  let columns = new Array(3).fill(0);
  const n = square.length;
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square.length; j++) {
      columns[i] += square[j][i];
    }

    lignes[i] = square[i].reduce((a, b) => a + b, 0);
    diagon1 += s[i][i];
    diagon2 += s[i][n - 1 - i];
  }

  const indLigne = lignes.indexOf(lignes.reduce((a, b) => Math.abs(a - b), 0));
  const indColumns = columns.indexOf(
    columns.reduce((a, b) => Math.abs(a - b), 0)
  );
  console.log('lignes :', lignes);
  console.log('columns:', columns);
  console.log('diagon1:', diagon1);
  console.log('diagon2:', diagon2);
  const allSums =
    lignes.reduce((a, b) => a + b, 0) +
    columns.reduce((a, b) => a + b, 0) +
    diagon1 +
    diagon2;
  if (Math.floor(allSums / (2 * n + 2)) == diagon1) return true;
  console.log('---------------------------------- allSums:', allSums);
  console.log('allSums / (2 * n + 2) :', Math.floor(allSums / (2 * n + 2)));
  console.log('indLigne :', indLigne);
  console.log('indColumns :', indColumns);
  s[indLigne][indColumns]++;
  count++;
  return false;
}
