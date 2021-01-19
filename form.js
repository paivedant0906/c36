class Form{
    constructor(){

    }
    display(){
        var title=createElement('h1');
        title.html("Car Racing Game");
        title.position(300,100);
        var input=createInput("Name");
        var button=createButton("Play");
        var greeting=createElement('h2');
        input.position(300,200);
        button.position(300,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(300,200);
        })
    }
}