document.addEventListener('DOMContentLoaded', function() {
  function addPlayer(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    if (!name || !number) {
      alert('Please enter both a name and a number for the player.');
      return;
    }

    const playerTable = document.getElementById('playerTable').getElementsByTagName('tbody')[0];

    const newRow = playerTable.insertRow();

    const nameCell = newRow.insertCell(0);
    const numberCell = newRow.insertCell(1);
    const pointsCell = newRow.insertCell(2);
    const assistsCell = newRow.insertCell(3);
    const reboundsCell = newRow.insertCell(4);
    const fgmCell = newRow.insertCell(5);
    const fgaCell = newRow.insertCell(6);
    const threePmCell = newRow.insertCell(7);
    const threePaCell = newRow.insertCell(8);
    const toCell = newRow.insertCell(9);
    const pfCell = newRow.insertCell(10);

    nameCell.textContent = name;
    numberCell.textContent = number;
    pointsCell.textContent = 0;
    assistsCell.textContent = 0;
    reboundsCell.textContent = 0;
    fgmCell.textContent = 0;
    fgaCell.textContent = 0;
    threePmCell.textContent = 0;
    threePaCell.textContent = 0;
    toCell.textContent = 0;
    pfCell.textContent = 0;

    document.getElementById('playerForm').reset();
  }
  document.getElementById('playerForm').addEventListener('submit', addPlayer)
  
});