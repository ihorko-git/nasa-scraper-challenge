function init() {
    var canvas = document.getElementById("canvas");

}


function loadSVG(src) {
    var obj = document.createElement('object');
    obj.setAttribute('type', 'image/svg+xml');
    obj.setAttribute('data', src);
    obj.onload = e=>{
        console.log(obj.contentDocument.getElementById('ship_tail'))
        // obj.contentDocument.getElementById('ship_tail').style.transform = 'scale(0.5, 1)'
    }
    document.body.appendChild(obj);
    return obj;
//     <object type="image/svg+xml" data="data:image/svg+xml;base64,[data]">
//   fallback
// </object>
}

function getCtx() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    return context;    
}

function clear() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

shipClass = function(){
    var obj = {
        x: 200,
        y: 200,
        direction: 0,
        src: 'images/ships/ship1.svg',
        draw: function (){
            var ctx = getCtx();
            ctx.save(); // save current state
            ctx.translate(obj.x, obj.y)
            // ctx.drawImage(obj.image, obj.x, obj.y)

            
            ctx.rotate(obj.direction * Math.PI / 180); // rotate
            ctx.drawImage(obj.image, obj.x, obj.y); // draws a chain link or dagger
            ctx.restore(); // restore original states (no rotation etc)
        }
    }    
    console.log()
    obj.image = new Image(64, 64);
    obj.image.src = obj.src;
    obj.image.width = 64
    obj.image.height = 64
    obj.image.onload = function () {
        obj.draw();
    }

    return obj;
}