class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.rank = null;
        this.distance = 0;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
        playerCount=data.val();    
        })
    }
    
    updateCount(count){
        database.ref('/').update({
         playerCount:count
        })
    }
  
    update(){
        database.ref('/').update({
         name:this.name,
         distance:this.distance
        })
    }

    
}
