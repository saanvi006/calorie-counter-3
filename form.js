class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createInput('enter')
        this.greeting = createElement('h2')
        this.title = createElement('h2');


    }

    display(){
     this.title = createElement("h2")
        this.title.style('font-size', '24px', 'color', 'white')
        this.title.html("Calorie Counter");
        this.title.position(100, 0);
        

        this.input = createInput("enter breakfast item");
        this.input.style('background-color', "pink")
        this.button = createButton('enter');
        this.button.style('background-color', "lavender")
        this.input.position(100, 160);
        this.button.position(100,300);

        this.input2 = createInput("enter lunch item");
        this.input2.style('background-color', "pink")
        this.input2.position(100, 200);
        
        this.input3 = createInput("enter dinner item");
        this.input3.style('background-color', "pink")
        this.input3.position(100, 240);

        this.reset = createButton('reset')
        this.reset.style('background-color', "lightBlue")
        this.reset.position(150,300)
        this.reset.mousePressed(function(){
            gameState = 0
            this.greeting.hide();
        })



        this.button.mousePressed(()=>{
            this.input.hide();
            this.input2.hide();
            this.input3.hide();
            this.button.hide();
            gameState = 1

            var name = this.input.value();
            food.getCalorie(name)
            var name = this.input2.value();
            food.getCalorie(name)
            var name = this.input3.value()
            food.getCalorie(name)

            this.greeting = createElement ('h3')
            this.greeting.style("color" , "white")
            this.greeting.html("The food that you have chosen is " + name)
            this.greeting.position(130,300)
            
       
        })
    }
}