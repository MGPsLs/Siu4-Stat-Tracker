fetch("/database/players.json")
.then(function(response) {

    return response.json();

})

.then(function(players){
    let tableList = document.querySelector("#playerTableBody");
    let playerData = "";
    for(let player of players){
        if(!player) {
            continue;
        } else {
            playerData += `
                <tr scope="row" class="${player.number}-stat-row">
                    <td id="${player.number}-number">${player.number}</td>
                    <td id="${player.number}-name">${player.name}</td>
                    <td id="${player.number}-points">${player.points}</td>
                    <td id="${player.number}-assists">${player.assists}</td>
                    <td id="${player.number}-rebounds">${player.rebounds}</td>
                    <td id="${player.number}-fgm">${player.fgm}</td>
                    <td id="${player.number}-fga">${player.fga}</td>
                    <td id="${player.number}-tpm">${player.tpm}</td>
                    <td id="${player.number}-tpa">${player.tpa}</td>
                    <td id="${player.number}-ftm">${player.ftm}</td>
                    <td id="${player.number}-fta">${player.fta}</td>
                    <td id="${player.number}-steals">${player.steals}</td>
                    <td id="${player.number}-blocks">${player.blocks}</td>
                    <td id="${player.number}-to">${player.to}</td>
                    <td id="${player.number}-pf">${player.pf}</td>
                    <td>
                        <button class="editBtn" id="${player.number}-addFGM" onClick="addFGM(${player.number})">+1 FGM</button>
                        <button class="editBtn" id="${player.number}-addFGA" onClick="addFGA(${player.number})">+1 FGA</button>
                        <button class="editBtn" id="${player.number}-addTPM" onClick="addTGM(${player.number})">+1 3PM</button>
                        <button class="editBtn" id="${player.number}-addTPA" onClick="addTGA(${player.number})">+1 3PA</button>
                        <br>
                        <button class="editBtn" id="${player.number}-addFTM" onClick="addFTM(${player.number})">+1 FTM</button>
                        <button class="editBtn" id="${player.number}-addFTA" onClick="addFTA(${player.number})">+1 FTA</button>
                        <button class="editBtn" id="${player.number}-addAssist" onClick="addAssist(${player.number})">+1 Ast</button>
                        <button class="editBtn" id="${player.number}-addRebound" onClick="addRebound(${player.number})">+1 Reb</button>                        
                        <br>
                        <button class="editBtn" id="${player.number}-addSteal" onClick="addSteal(${player.number})">+1 Stl</button>
                        <button class="editBtn" id="${player.number}-addBlock" onClick="addBlock(${player.number})">+1 Blk</button>
                        <button class="editBtn" id="${player.number}-addTO" onClick="addTO(${player.number})">+1 TO</button>
                        <button class="editBtn" id="${player.number}-addPF" onClick="addPF(${player.number})">+1 PF</button>
                    </td>
                </tr>
            `;
            tableList.innerHTML = playerData;
        }
    }
})