class Game {
  constructor(){}
  
 getState(){
   var gameStateRef = database.ref('gameState');
   gameStateRef.on("value",(data)=>{
    gameState=data.val();
   })
 }

 update(count){
   database.ref('/').update({
     gameState:count
   })
 }

 updateRank(count){
   database.ref('/').update({
     CarsAtEnd:count
   })
 }
 
 async start(){
   if(gameState===0){
     player = new Player();
     form = new Form();
     form.display()
   }
 }
}
