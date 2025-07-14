// Script for adding a sub in player not in Siu4 team list
document.addEventListener('DOMContentLoaded', function() {
    function addPlayer(event) {
        event.preventDefault();
        const playerName = document.getElementById('name').value;
        const playerNum = document.getElementById('number').value;

        const playerTable = document.getElementById('playerTableBody');
        const newRow = `
            <tr scope="row" class="${playerNum}-stat-row">
                <td id="${playerNum}-number">${playerNum}</td>
                <td id="${playerNum}-name">${playerName}</td>
                <td id="${playerNum}-points">0</td>
                <td id="${playerNum}-assists">0</td>
                <td id="${playerNum}-rebounds">0</td>
                <td id="${playerNum}-fgm">0</td>
                <td id="${playerNum}-fga">0</td>
                <td id="${playerNum}-tpm">0</td>
                <td id="${playerNum}-tpa">0</td>
                <td id="${playerNum}-ftm">0</td>
                <td id="${playerNum}-fta">0}</td>
                <td id="${playerNum}-steals">0</td>
                <td id="${playerNum}-blocks">0}</td>
                <td id="${playerNum}-to">0</td>
                <td id="${playerNum}-pf">0</td>
                <td>
                    <button class="editBtn" id="${playerNum}-addFGM" onClick="addFGM(${playerNum})">+1 FGM</button>
                    <button class="editBtn" id="${playerNum}-addFGA" onClick="addFGA(${playerNum})">+1 FGA</button>
                    <button class="editBtn" id="${playerNum}-addTPM" onClick="addTGM(${playerNum})">+1 3PM</button>
                    <button class="editBtn" id="${playerNum}-addTPA" onClick="addTGA(${playerNum})">+1 3PA</button>
                    <br>
                    <button class="editBtn" id="${playerNum}-addFTM" onClick="addFTM(${playerNum})">+1 FTM</button>
                    <button class="editBtn" id="${playerNum}-addFTA" onClick="addFTA(${playerNum})">+1 FTA</button>
                    <button class="editBtn" id="${playerNum}-addAssist" onClick="addAssist(${playerNum})">+1 Ast</button>
                    <button class="editBtn" id="${playerNum}-addRebound" onClick="addRebound(${playerNum})">+1 Reb</button>                        
                    <br>
                    <button class="editBtn" id="${playerNum}-addSteal" onClick="addSteal(${playerNum})">+1 Stl</button>
                    <button class="editBtn" id="${playerNum}-addBlock" onClick="addBlock(${playerNum})">+1 Blk</button>
                    <button class="editBtn" id="${playerNum}-addTO" onClick="addTO(${playerNum})">+1 TO</button>
                    <button class="editBtn" id="${playerNum}-addPF" onClick="addPF(${playerNum})">+1 PF</button>
                </td>
            </tr>
        `;
        playerTable.innerHTML += newRow;
        document.getElementById('playerForm').reset();
    }
    document.getElementById('playerForm').addEventListener('submit', addPlayer);
});