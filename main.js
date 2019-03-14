var canvas=document.querySelector("canvas");
console.log(canvas);
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext("2d");


// c.fillRect(x,y,width,height)
// restangle
// c.fillRect(50,50,50,50);
// c.fillStyle="rgba(255,152,0,0.5)";
// c.fillRect(100,100,50,50);
// c.fillStyle="rgba(152,0,152,0.5)";
// c.fillRect(150,150,50,50);
// c.fillStyle="rgba(0,152,0,0.5)";
// c.fillRect(200,200,50,50);
// c.fillStyle="rgba(255,0,152,0.5)";
// c.fillRect(250,250,50,50);
// //line
// c.beginPath();

// // c.moveTo(x,y)
// c.moveTo(70,300);
// c.lineTo(210,250);
// c.lineTo(400,700);
// c.lineTo(700,700);
// c.lineTo(500,250);
// c.strokeStyle="rgba(255,0,0,0.5)";
// c.stroke();

// cuối cung bao h cũng phải có stroke();

// circle/arc
// c.beginPath();
// c.arc(300,300,30,0,Math.PI*2,false);
// c.stroke();


// for (var i=0;i < 1000; i++){
//     var x=Math.random()*innerWidth,y=Math.random()*innerHeight;
//     c.beginPath();
//     c.arc(x,y,30,0,Math.PI*2,false);
//     c.stroke();
// }
//,dx,dy,radius

var mouse = {
  x:undefined,
  y:undefined,
};


window.addEventListener("mousemove",function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    

});
var maxRadius=50;

var colors =["red","green","blue","pink"];
console.log(index);

var xxx=colors[index];
console.log(xxx);
console.log(colors);
var circle =function (x,y,dx,dy,radius,color)
{
this.x=x;
this.y=y;
this.dx=dx;
this.dy=dy;
this.radius=radius;
this.minRadius=this.radius;
this.color=color;



console.log(this.color);
this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
    c.strokeStyle="black";
    c.stroke();
    c.fillStyle=this.color;
    c.fill();
    
}
this.update=function(){
    if(this.x+this.radius > innerWidth || this.x-this.radius < 0)
    {
        this.dx=-this.dx;
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius < 0)
    {
        this.dy=-this.dy;
    }
   this.x+=this.dx;
   this.y+=this.dy;


//    --interactive
    if(mouse.x-this.x < 50 && mouse.x -this.x > -50 && mouse.y-this.y< 50 && mouse.y-this.y > -50 ) // khoang cach vong trong voi monitor  < 50
    {
        if(this.radius<maxRadius)
        {this.radius+=1; //tang ban kinh len 1
        }
    }
    else if(this.radius>this.minRadius)
    {
        this.radius-=1;
    }

   this.draw()
}




}
//tao ra 100 phan tu circle
var list_circle=[];
for(var i=0;i<100;i++)
    {   var radius=Math.random()*4+1,
        x=Math.random()*(innerWidth-radius*2)-radius,
        y=Math.random()*(innerWidth-radius*2)-radius,
        dx=(Math.random()-0.5),
        dy=(Math.random()-0.5);
//console.log(x,y,dx,dy,radius);
    var index=Math.floor(Math.random()*4);

       var color =colors[index] 
        // console.log(colors);
        var circles=new circle(x,y,dx,dy,radius,color)
        list_circle.push(circles);
       
    }
// end

// resize man hinh window 
window.addEventListener("resize",function(){

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    
});




console.log(list_circle);

function animate()
{     
    requestAnimationFrame(animate); 
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<list_circle.length;i++)
    {  
        list_circle[i].update();
    }
    

  
}
animate();