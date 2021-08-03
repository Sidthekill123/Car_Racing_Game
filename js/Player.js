class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = 0;
        this.rank = 0;

    }
    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCount = data.val();
        })

    }
    updateCount(playerCount){
        var playerCountRef = database.ref("/");
        playerCountRef.update({
        playerCount:playerCount
        });

            
    }
    update(){

        var playerRef = database.ref("players/player" + this.index);
        playerRef.update({
          name:this.name,
          distance:this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = database.ref("players")
        playerInfoRef.on("value",function(data){
            allPlayers = data.val();
        })
    }

    getCarsAtEnd(){
        var carsAtEndRef = database.ref("CarsAtEnd");
        carsAtEndRef.on("value",function(data){
            this.rank = data.val(); //0
        })
    }

    static updateCarsAtEnd(rank){
        var carsAtEndRef = database.ref("/");
        carsAtEndRef.update({
            CarsAtEnd:rank
        });
    }
}