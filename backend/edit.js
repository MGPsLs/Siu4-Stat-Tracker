// Script for editing player data
// Add 1 point for the player
function addPoints(playerNumber, points) {
    const pointsCell = document.getElementById(`${playerNumber}-points`);
    pointsCell.textContent = parseInt(pointsCell.textContent) + points;
}

// Add 1 assist for the player
function addAssist(playerNumber) {
    const assistsCell = document.getElementById(`${playerNumber}-assists`);
    assistsCell.textContent = parseInt(assistsCell.textContent) + 1;
}

// Add 1 rebound for the player
function addRebound(playerNumber) {
    const reboundsCell = document.getElementById(`${playerNumber}-rebounds`);
    reboundsCell.textContent = parseInt(reboundsCell.textContent) + 1;
}

// Add 1 Steal for the player
function addSteal(playerNumber) {
    const stealsCell = document.getElementById(`${playerNumber}-steals`);
    stealsCell.textContent = parseInt(stealsCell.textContent) + 1;
}

// Add 1 Block for the player
function addBlock(playerNumber) {
    const blocksCell = document.getElementById(`${playerNumber}-blocks`);
    blocksCell.textContent = parseInt(blocksCell.textContent) + 1;
}

// Add 1 field goal attempt for the player
function addFGA(playerNumber) {
    const fgaCell = document.getElementById(`${playerNumber}-fga`);
    fgaCell.textContent = parseInt(fgaCell.textContent) + 1;
}

// Add 1 field goal made for the player including points and attempts
function addFGM(playerNumber) {
    const fgmCell = document.getElementById(`${playerNumber}-fgm`);
    fgmCell.textContent = parseInt(fgmCell.textContent) + 1;
    addFGA(playerNumber); // Increment field goal attempts
    // Increment points
    addPoints(playerNumber, 2);
}

// Add 1 three-point attempt for the player
function addTGA(playerNumber) {
    const threePaCell = document.getElementById(`${playerNumber}-tpa`);
    threePaCell.textContent = parseInt(threePaCell.textContent) + 1;
}

// Add 1 three-point made for the player including points and attempts
function addTGM(playerNumber) {
    const threePmCell = document.getElementById(`${playerNumber}-tpm`);
    threePmCell.textContent = parseInt(threePmCell.textContent) + 1;
    addTGA(playerNumber); // Increment three-point attempts
    // Increment points
    addPoints(playerNumber, 3);
}

// Add 1 free throw attempt for the player
function addFTA(playerNumber) {
    const ftaCell = document.getElementById(`${playerNumber}-fta`);
    ftaCell.textContent = parseInt(ftaCell.textContent) + 1;
}

// Add 1 free throw made for the player including points and attempts
function addFTM(playerNumber) {
    const ftmCell = document.getElementById(`${playerNumber}-ftm`);
    ftmCell.textContent = parseInt(ftmCell.textContent) + 1;
    addFTA(playerNumber); // Increment free throw attempts
    // Increment points
    addPoints(playerNumber, 1);
}

// Add 1 turnover for the player
function addTO(playerNumber) {
    const toCell = document.getElementById(`${playerNumber}-to`);
    toCell.textContent = parseInt(toCell.textContent) + 1;
}

// Add 1 personal foul for the player
function addPF(playerNumber) {
    const pfCell = document.getElementById(`${playerNumber}-pf`);
    pfCell.textContent = parseInt(pfCell.textContent) + 1;
}

