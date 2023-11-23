const team = {
  _players : [
    {firstName: 'Sheriff', lastName: 'Hammed', age:30},
    {firstName: 'Abolade', lastName: 'Samuel', age:35},
    {firstName: 'Adekunle', lastName: 'Bolanle', age:25}
  ],
  _games : [
{opponent: 'RiversUnited', teamPoints: 50, opponentPoints:30},
{opponent: 'KanoPillar', teamPoints: 45, opponentPoints:40},
{opponent: 'ShootingStars', teamPoints: 48, opponentPoints:35},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName,newLastName,newAge){
    let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
},
addGame (newOpponent,newTeamPoints,newOpponentPoints){
 let game = {
   opponent : newOpponent,
   teamPoints : newTeamPoints,
   opponentPoints : newOpponentPoints
 };
 this.games.push(game);
}
};
//console.log(team.addPlayer('Bugs','Bunny',76));
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);
team.addGame('Titans',100,98);
console.log(team.games);