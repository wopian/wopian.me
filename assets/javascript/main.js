( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );

// 75 = particles
// a: = particle size
window.onload=function(){var c=document.getElementById("snow"),d=c.getContext("2d"),e=window.innerWidth,f=window.innerHeight;c.width=e;c.height=f;for(var h=[],c=0;75>c;c++)h.push({x:Math.random()*e,y:Math.random()*f,a:Math.random()*1+1,b:75*Math.random()});var g=0;setInterval(function(){d.clearRect(0,0,e,f);d.fillStyle="rgba(255, 255, 255, 0.8)";d.beginPath();for(var b=0;75>b;b++){var a=h[b];d.moveTo(a.x,a.y);d.arc(a.x,a.y,a.a,0,2*Math.PI,!0)}d.fill();g+=.01;for(b=0;75>b;b++)if(a=h[b],a.y+=Math.cos(g+
a.b)+1+a.a/2,a.x+=2*Math.sin(g),a.x>e+5||-5>a.x||a.y>f)h[b]=0<b%3?{x:Math.random()*e,y:-10,a:a.a,b:a.b}:0<Math.sin(g)?{x:-5,y:Math.random()*f,a:a.a,b:a.b}:{x:e+5,y:Math.random()*f,a:a.a,b:a.b}},17)};
