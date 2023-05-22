function setup(){
    canvas=createCanvas(640,480)
    canvas.position(110,250)
    video=createCapture(VIDEO);
    video.hide()
    filter_color1=""
    }
    
    function draw(){
    image(video,0,0,640,480)
    tint(filter_color1)
    }
    
    function filter_color(){
    filter_color1=document.getElementById("color_name").value
    }
    
    function take_snapshot(){
    save('isa.png')
    }