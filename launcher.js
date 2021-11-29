class Launcher {
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            // rigidez
            stiffness: 0.02,
            //comprimento
            length: 5
        }
        
        this. bodyA = bodyA
        this. pointB = pointB
        //criação da restriçao
        this.launcher = Constraint.create(options)
        //add no mundo
        World.add(world, this.launcher);

    }

    attach(body){
this.launcher.bodyA = body;
    }

    
// para o passarinho desgrudar quando soltar o estilingue
    fly(){

    
        //Para o passarinho continuar voando na tela e não ficar parado
        this.launcher.bodyA = null;
    }


display() 
{ 
    if(this.launcher.bodyA) 
    { 
        var pointA=this.bodyA.position; 
        var pointB=this.pointB 
        strokeWeight(2); 
        line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
}
}