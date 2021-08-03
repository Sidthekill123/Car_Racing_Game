class Game{
constructor(){

}
getState(){
    var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState = data.val();
                })
}
update(state){
    var gameStateRef = database.ref("/");
        gameStateRef.update({
            gameState : state
                })
}
start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(car1Image);
    car2 = createSprite(300,200);
    car2.addImage(car2Image);
    car3 = createSprite(500,200);
    car3.addImage(car3Image);
    car4 = createSprite(700,200);
    car4.addImage(car4Image);
    cars = [car1,car2,car3,car4];

}
play(){
    form.greeting.hide();
    textSize(30);
    /*text("Game start",120,100);*/
    background(rgb (65,65,65));
    image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
    Player.getPlayerInfo(); 
    player.getCarsAtEnd();
    if(allPlayers != undefined){
        var index = 0;
        var x =200;
        var y;
        for(var plr in allPlayers){
            index+=1; //2
            x = x+200; //400
            y = displayHeight - allPlayers[plr].distance -350;
            cars[index-1].x = x;
            cars[index-1].y = y;

            if(index === player.index){
                //cars[index-1].shapeColor = "red";
                stroke(10);
                fill("red");
                ellipse(x,y,80,80);
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index-1].y;
            }
        }

    }
    if(keyDown(UP_ARROW )&&(player.index != 0)){
        player.distance += 50;
        player.update();
    }
    if(player.distance > 3300){
        gameState = 2;
        player.rank += 1;
        Player.updateCarsAtEnd(player.rank);
    }
    drawSprites();
}
    end(){
        console.log("Game Ended !!!");
        console.log(player.rank);
}
} 
