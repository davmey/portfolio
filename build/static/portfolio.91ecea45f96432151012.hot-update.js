webpackHotUpdate("portfolio",{

/***/ "./packages/davids-portfolio/src/theme/Background/magic.js":
/*!*****************************************************************!*\
  !*** ./packages/davids-portfolio/src/theme/Background/magic.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// generate and animate the background lava lamp\n;(function(){if(typeof window)\"use strict\";var lava0;var ge1doot={screen:{elem:null,callback:null,ctx:null,width:0,height:0,left:0,top:0,init:function init(id,callback,initRes){this.elem=document.getElementById(id);this.callback=callback||null;if(this.elem.tagName==\"CANVAS\")this.ctx=this.elem.getContext(\"2d\");window.addEventListener('resize',function(){this.resize();}.bind(this),false);this.elem.onselectstart=function(){return false;};this.elem.ondrag=function(){return false;};initRes&&this.resize();return this;},resize:function resize(){var o=this.elem;this.width=o.offsetWidth;this.height=o.offsetHeight;for(this.left=0,this.top=0;o!=null;o=o.offsetParent){this.left+=o.offsetLeft;this.top+=o.offsetTop;}if(this.ctx){this.elem.width=this.width;this.elem.height=this.height;}this.callback&&this.callback();}}};// Point constructor\nvar Point=function Point(x,y){this.x=x;this.y=y;this.magnitude=x*x+y*y;this.computed=0;this.force=0;};Point.prototype.add=function(p){return new Point(this.x+p.x,this.y+p.y);};// Ball constructor\nvar Ball=function Ball(parent){var min=0.7;var max=1.8;this.vel=new Point((Math.random()>0.5?1:-1)*(0.2+Math.random()*0.25),(Math.random()>0.5?1:-1)*(0.2+Math.random()));this.pos=new Point(parent.width*0.2+Math.random()*parent.width*0.6,parent.height*0.2+Math.random()*parent.height*0.6);this.size=parent.wh/15+(Math.random()*(max-min)+min)*(parent.wh/15);this.width=parent.width;this.height=parent.height;};// move balls\nBall.prototype.move=function(){// bounce borders\nif(this.pos.x>=this.width-this.size){if(this.vel.x>0)this.vel.x=-this.vel.x;this.pos.x=this.width-this.size;}else if(this.pos.x<=this.size){if(this.vel.x<0)this.vel.x=-this.vel.x;this.pos.x=this.size;}if(this.pos.y>=this.height-this.size){if(this.vel.y>0)this.vel.y=-this.vel.y;this.pos.y=this.height-this.size;}else if(this.pos.y<=this.size){if(this.vel.y<0)this.vel.y=-this.vel.y;this.pos.y=this.size;}// velocity\nthis.pos=this.pos.add(this.vel);};// lavalamp constructor\nvar LavaLamp=function LavaLamp(width,height,numBalls,c0,c1){this.step=5;this.width=width;this.height=height;this.wh=Math.min(width,height);this.sx=Math.floor(this.width/this.step);this.sy=Math.floor(this.height/this.step);this.paint=false;this.metaFill=createRadialGradient(width,height,width,c0,c1);this.plx=[0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0];this.ply=[0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1];this.mscases=[0,3,0,3,1,3,0,3,2,2,0,2,1,1,0];this.ix=[1,0,-1,0,0,1,0,-1,-1,0,1,0,0,1,1,0,0,0,1,1];this.grid=[];this.balls=[];this.iter=0;this.sign=1;// init grid\nfor(var i=0;i<(this.sx+2)*(this.sy+2);i++){this.grid[i]=new Point(i%(this.sx+2)*this.step,Math.floor(i/(this.sx+2))*this.step);}// create metaballs\nfor(var k=0;k<numBalls;k++){this.balls[k]=new Ball(this);}};// compute cell force\nLavaLamp.prototype.computeForce=function(x,y,idx){var force;var id=idx||x+y*(this.sx+2);if(x===0||y===0||x===this.sx||y===this.sy){force=0.6*this.sign;}else{force=0;var cell=this.grid[id];var i=0;var ball;while(ball=this.balls[i++]){force+=ball.size*ball.size/(-2*cell.x*ball.pos.x-2*cell.y*ball.pos.y+ball.pos.magnitude+cell.magnitude);}force*=this.sign;}this.grid[id].force=force;return force;};// compute cell\nLavaLamp.prototype.marchingSquares=function(next){var x=next[0];var y=next[1];var pdir=next[2];var id=x+y*(this.sx+2);if(this.grid[id].computed===this.iter){return false;}var dir,mscase=0;// neighbors force\nfor(var i=0;i<4;i++){var idn=x+this.ix[i+12]+(y+this.ix[i+16])*(this.sx+2);var force=this.grid[idn].force;if(force>0&&this.sign<0||force<0&&this.sign>0||!force){// compute force if not in buffer\nforce=this.computeForce(x+this.ix[i+12],y+this.ix[i+16],idn);}if(Math.abs(force)>1)mscase+=Math.pow(2,i);}if(mscase===15){// inside\nreturn[x,y-1,false];}else{// ambiguous cases\nif(mscase===5)dir=pdir===2?3:1;else if(mscase===10)dir=pdir===3?0:2;else{// lookup\ndir=this.mscases[mscase];this.grid[id].computed=this.iter;}// draw line\nvar ix=this.step/(Math.abs(Math.abs(this.grid[x+this.plx[4*dir+2]+(y+this.ply[4*dir+2])*(this.sx+2)].force)-1)/Math.abs(Math.abs(this.grid[x+this.plx[4*dir+3]+(y+this.ply[4*dir+3])*(this.sx+2)].force)-1)+1);ctx.lineTo(this.grid[x+this.plx[4*dir]+(y+this.ply[4*dir])*(this.sx+2)].x+this.ix[dir]*ix,this.grid[x+this.plx[4*dir+1]+(y+this.ply[4*dir+1])*(this.sx+2)].y+this.ix[dir+4]*ix);this.paint=true;// next\nreturn[x+this.ix[dir+4],y+this.ix[dir+8],dir];}};LavaLamp.prototype.renderMetaballs=function(){var i=0,ball;while(ball=this.balls[i++]){ball.move();}// reset grid\nthis.iter++;this.sign=-this.sign;this.paint=false;ctx.fillStyle=this.metaFill;ctx.beginPath();// compute metaballs\ni=0;//ctx.shadowBlur = 50;\n//ctx.shadowColor = \"green\";\nwhile(ball=this.balls[i++]){// first cell\nvar next=[Math.round(ball.pos.x/this.step),Math.round(ball.pos.y/this.step),false];// marching squares\ndo{next=this.marchingSquares(next);}while(next);// fill and close path\nif(this.paint){ctx.fill();ctx.closePath();ctx.beginPath();this.paint=false;}}};// gradients\nvar createRadialGradient=function createRadialGradient(w,h,r,c0,c1){var gradient=ctx.createRadialGradient(w/1,h/1,0,w/1,h/1,r);gradient.addColorStop(0,c0);gradient.addColorStop(1,c1);return gradient;};// main loop\nvar run=function run(){requestAnimationFrame(run);ctx.clearRect(0,0,screen.width,screen.height);lava0.renderMetaballs();};// canvas\nvar screen=ge1doot.screen.init(\"bubble\",null,true),ctx=screen.ctx;screen.resize();// create LavaLamps\nlava0=new LavaLamp(screen.width,screen.height,6,\"#D80078\",\"#035DEF\");run();})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9kYXZpZHMtcG9ydGZvbGlvL3NyYy90aGVtZS9CYWNrZ3JvdW5kL21hZ2ljLmpzP2NiODUiXSwibmFtZXMiOlsid2luZG93IiwibGF2YTAiLCJnZTFkb290Iiwic2NyZWVuIiwiZWxlbSIsImNhbGxiYWNrIiwiY3R4Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiaW5pdCIsImlkIiwiaW5pdFJlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWdOYW1lIiwiZ2V0Q29udGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJiaW5kIiwib25zZWxlY3RzdGFydCIsIm9uZHJhZyIsIm8iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJQb2ludCIsIngiLCJ5IiwibWFnbml0dWRlIiwiY29tcHV0ZWQiLCJmb3JjZSIsInByb3RvdHlwZSIsImFkZCIsInAiLCJCYWxsIiwicGFyZW50IiwibWluIiwibWF4IiwidmVsIiwiTWF0aCIsInJhbmRvbSIsInBvcyIsInNpemUiLCJ3aCIsIm1vdmUiLCJMYXZhTGFtcCIsIm51bUJhbGxzIiwiYzAiLCJjMSIsInN0ZXAiLCJzeCIsImZsb29yIiwic3kiLCJwYWludCIsIm1ldGFGaWxsIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJwbHgiLCJwbHkiLCJtc2Nhc2VzIiwiaXgiLCJncmlkIiwiYmFsbHMiLCJpdGVyIiwic2lnbiIsImkiLCJrIiwiY29tcHV0ZUZvcmNlIiwiaWR4IiwiY2VsbCIsImJhbGwiLCJtYXJjaGluZ1NxdWFyZXMiLCJuZXh0IiwicGRpciIsImRpciIsIm1zY2FzZSIsImlkbiIsImFicyIsInBvdyIsImxpbmVUbyIsInJlbmRlck1ldGFiYWxscyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJvdW5kIiwiZmlsbCIsImNsb3NlUGF0aCIsInciLCJoIiwiciIsImdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwicnVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLENBQUMsQ0FBQyxVQUFXLENBQ1gsR0FBSSxNQUFPQSxPQUFYLENBRUUsYUFFQSxHQUFJQyxNQUFKLENBQ0EsR0FBSUMsUUFBTyxDQUFHLENBQ1pDLE1BQU0sQ0FBRSxDQUNOQyxJQUFJLENBQU0sSUFESixDQUVOQyxRQUFRLENBQUUsSUFGSixDQUdOQyxHQUFHLENBQU8sSUFISixDQUlOQyxLQUFLLENBQUssQ0FKSixDQUtOQyxNQUFNLENBQUksQ0FMSixDQU1OQyxJQUFJLENBQU0sQ0FOSixDQU9OQyxHQUFHLENBQU8sQ0FQSixDQVFOQyxJQUFJLENBQUUsY0FBVUMsRUFBVixDQUFjUCxRQUFkLENBQXdCUSxPQUF4QixDQUFpQyxDQUNyQyxLQUFLVCxJQUFMLENBQVlVLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsRUFBeEIsQ0FBWixDQUNBLEtBQUtQLFFBQUwsQ0FBZ0JBLFFBQVEsRUFBSSxJQUE1QixDQUNBLEdBQUksS0FBS0QsSUFBTCxDQUFVWSxPQUFWLEVBQXFCLFFBQXpCLENBQW1DLEtBQUtWLEdBQUwsQ0FBVyxLQUFLRixJQUFMLENBQVVhLFVBQVYsQ0FBcUIsSUFBckIsQ0FBWCxDQUNuQ2pCLE1BQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDLFVBQVksQ0FDNUMsS0FBS0MsTUFBTCxHQUNELENBRmlDLENBRWhDQyxJQUZnQyxDQUUzQixJQUYyQixDQUFsQyxDQUVjLEtBRmQsRUFHQSxLQUFLaEIsSUFBTCxDQUFVaUIsYUFBVixDQUEwQixVQUFZLENBQUUsTUFBTyxNQUFQLENBQWUsQ0FBdkQsQ0FDQSxLQUFLakIsSUFBTCxDQUFVa0IsTUFBVixDQUEwQixVQUFZLENBQUUsTUFBTyxNQUFQLENBQWUsQ0FBdkQsQ0FDQVQsT0FBTyxFQUFJLEtBQUtNLE1BQUwsRUFBWCxDQUNBLE1BQU8sS0FBUCxDQUNELENBbkJL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RixHQUFHLENBQUMwRixTQUFKLENBQWMsQ0FBZCxDQUFpQixDQUFqQixDQUFvQjdGLE1BQU0sQ0FBQ0ksS0FBM0IsQ0FBa0NKLE1BQU0sQ0FBQ0ssTUFBekMsRUFDQVAsS0FBSyxDQUFDa0YsZUFBTixHQUNELENBSkQsQ0FLQTtBQUNBLEdBQUloRixPQUFNLENBQUdELE9BQU8sQ0FBQ0MsTUFBUixDQUFlUSxJQUFmLENBQW9CLFFBQXBCLENBQThCLElBQTlCLENBQW9DLElBQXBDLENBQWIsQ0FDSUwsR0FBRyxDQUFHSCxNQUFNLENBQUNHLEdBRGpCLENBRUFILE1BQU0sQ0FBQ2dCLE1BQVAsR0FDQTtBQUNBbEIsS0FBSyxDQUFHLEdBQUlnRCxTQUFKLENBQWE5QyxNQUFNLENBQUNJLEtBQXBCLENBQTJCSixNQUFNLENBQUNLLE1BQWxDLENBQTBDLENBQTFDLENBQTZDLFNBQTdDLENBQXdELFNBQXhELENBQVIsQ0FFQXNGLEdBQUcsR0FFSixDQXhRRiIsImZpbGUiOiIuL3BhY2thZ2VzL2Rhdmlkcy1wb3J0Zm9saW8vc3JjL3RoZW1lL0JhY2tncm91bmQvbWFnaWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZSBhbmQgYW5pbWF0ZSB0aGUgYmFja2dyb3VuZCBsYXZhIGxhbXBcbjsoZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93KVxuXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gIFxuICAgIHZhciBsYXZhMDtcbiAgICB2YXIgZ2UxZG9vdCA9IHtcbiAgICAgIHNjcmVlbjoge1xuICAgICAgICBlbGVtOiAgICAgbnVsbCxcbiAgICAgICAgY2FsbGJhY2s6IG51bGwsXG4gICAgICAgIGN0eDogICAgICBudWxsLFxuICAgICAgICB3aWR0aDogICAgMCxcbiAgICAgICAgaGVpZ2h0OiAgIDAsXG4gICAgICAgIGxlZnQ6ICAgICAwLFxuICAgICAgICB0b3A6ICAgICAgMCxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGlkLCBjYWxsYmFjaywgaW5pdFJlcykge1xuICAgICAgICAgIHRoaXMuZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2sgfHwgbnVsbDtcbiAgICAgICAgICBpZiAodGhpcy5lbGVtLnRhZ05hbWUgPT0gXCJDQU5WQVNcIikgdGhpcy5jdHggPSB0aGlzLmVsZW0uZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICAgIH0uYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuZWxlbS5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICB0aGlzLmVsZW0ub25kcmFnICAgICAgICA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgICAgaW5pdFJlcyAmJiB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbyA9IHRoaXMuZWxlbTtcbiAgICAgICAgICB0aGlzLndpZHRoICA9IG8ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSBvLm9mZnNldEhlaWdodDtcbiAgICAgICAgICBmb3IgKHRoaXMubGVmdCA9IDAsIHRoaXMudG9wID0gMDsgbyAhPSBudWxsOyBvID0gby5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubGVmdCArPSBvLm9mZnNldExlZnQ7XG4gICAgICAgICAgICB0aGlzLnRvcCAgKz0gby5vZmZzZXRUb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLmN0eCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtLndpZHRoICA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmVsZW0uaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBQb2ludCBjb25zdHJ1Y3RvclxuICAgIHZhciBQb2ludCA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgIHRoaXMueCA9IHg7XG4gICAgICB0aGlzLnkgPSB5O1xuICAgICAgdGhpcy5tYWduaXR1ZGUgPSB4ICogeCArIHkgKiB5O1xuICAgICAgdGhpcy5jb21wdXRlZCA9IDA7XG4gICAgICB0aGlzLmZvcmNlID0gMDtcbiAgICB9O1xuICAgIFBvaW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihwKSB7XG4gICAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAueCwgdGhpcy55ICsgcC55KTtcbiAgICB9O1xuICBcbiAgICAvLyBCYWxsIGNvbnN0cnVjdG9yXG4gICAgdmFyIEJhbGwgPSBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICAgIHZhciBtaW4gPSAwLjc7XG4gICAgICB2YXIgbWF4ID0gMS44O1xuICAgICAgdGhpcy52ZWwgPSBuZXcgUG9pbnQoXG4gICAgICAgIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSAqICgwLjIgKyBNYXRoLnJhbmRvbSgpICogMC4yNSksIChNYXRoLnJhbmRvbSgpID4gMC41ID8gMSA6IC0xKSAqICgwLjIgKyBNYXRoLnJhbmRvbSgpKVxuICAgICAgKTtcbiAgICAgIHRoaXMucG9zID0gbmV3IFBvaW50KFxuICAgICAgICBwYXJlbnQud2lkdGggKiAwLjIgKyBNYXRoLnJhbmRvbSgpICogcGFyZW50LndpZHRoICogMC42LFxuICAgICAgICBwYXJlbnQuaGVpZ2h0ICogMC4yICsgTWF0aC5yYW5kb20oKSAqIHBhcmVudC5oZWlnaHQgKiAwLjZcbiAgICAgICk7XG4gICAgICB0aGlzLnNpemUgPSAocGFyZW50LndoIC8gMTUpICsgKCBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4gKSAqIChwYXJlbnQud2ggLyAxNSk7XG4gICAgICB0aGlzLndpZHRoID0gcGFyZW50LndpZHRoO1xuICAgICAgdGhpcy5oZWlnaHQgPSBwYXJlbnQuaGVpZ2h0O1xuICAgIH07XG4gIFxuICAgIC8vIG1vdmUgYmFsbHNcbiAgICBCYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XG4gIFxuICAgICAgLy8gYm91bmNlIGJvcmRlcnNcbiAgICAgIGlmICh0aGlzLnBvcy54ID49IHRoaXMud2lkdGggLSB0aGlzLnNpemUpIHtcbiAgICAgICAgaWYgKHRoaXMudmVsLnggPiAwKSB0aGlzLnZlbC54ID0gLXRoaXMudmVsLng7XG4gICAgICAgIHRoaXMucG9zLnggPSB0aGlzLndpZHRoIC0gdGhpcy5zaXplO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcy54IDw9IHRoaXMuc2l6ZSkge1xuICAgICAgICBpZiAodGhpcy52ZWwueCA8IDApIHRoaXMudmVsLnggPSAtdGhpcy52ZWwueDtcbiAgICAgICAgdGhpcy5wb3MueCA9IHRoaXMuc2l6ZTtcbiAgICAgIH1cbiAgXG4gICAgICBpZiAodGhpcy5wb3MueSA+PSB0aGlzLmhlaWdodCAtIHRoaXMuc2l6ZSkge1xuICAgICAgICBpZiAodGhpcy52ZWwueSA+IDApIHRoaXMudmVsLnkgPSAtdGhpcy52ZWwueTtcbiAgICAgICAgdGhpcy5wb3MueSA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5zaXplO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnBvcy55IDw9IHRoaXMuc2l6ZSkge1xuICAgICAgICBpZiAodGhpcy52ZWwueSA8IDApIHRoaXMudmVsLnkgPSAtdGhpcy52ZWwueTtcbiAgICAgICAgdGhpcy5wb3MueSA9IHRoaXMuc2l6ZTtcbiAgICAgIH1cbiAgXG4gICAgICAvLyB2ZWxvY2l0eVxuICAgICAgdGhpcy5wb3MgPSB0aGlzLnBvcy5hZGQodGhpcy52ZWwpO1xuICBcbiAgICB9O1xuICBcbiAgICAvLyBsYXZhbGFtcCBjb25zdHJ1Y3RvclxuICAgIHZhciBMYXZhTGFtcCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIG51bUJhbGxzLCBjMCwgYzEpIHtcbiAgICAgIHRoaXMuc3RlcCA9IDU7XG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMud2ggPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuc3ggPSBNYXRoLmZsb29yKHRoaXMud2lkdGggLyB0aGlzLnN0ZXApO1xuICAgICAgdGhpcy5zeSA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyB0aGlzLnN0ZXApO1xuICAgICAgdGhpcy5wYWludCA9IGZhbHNlO1xuICAgICAgdGhpcy5tZXRhRmlsbCA9IGNyZWF0ZVJhZGlhbEdyYWRpZW50KHdpZHRoLCBoZWlnaHQsIHdpZHRoLCBjMCwgYzEpO1xuICAgICAgdGhpcy5wbHggPSBbMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMF07XG4gICAgICB0aGlzLnBseSA9IFswLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAxLCAwLCAxXTtcbiAgICAgIHRoaXMubXNjYXNlcyA9IFswLCAzLCAwLCAzLCAxLCAzLCAwLCAzLCAyLCAyLCAwLCAyLCAxLCAxLCAwXTtcbiAgICAgIHRoaXMuaXggPSBbMSwgMCwgLTEsIDAsIDAsIDEsIDAsIC0xLCAtMSwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMV07XG4gICAgICB0aGlzLmdyaWQgPSBbXTtcbiAgICAgIHRoaXMuYmFsbHMgPSBbXTtcbiAgICAgIHRoaXMuaXRlciA9IDA7XG4gICAgICB0aGlzLnNpZ24gPSAxO1xuICBcbiAgICAgIC8vIGluaXQgZ3JpZFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAodGhpcy5zeCArIDIpICogKHRoaXMuc3kgKyAyKTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ3JpZFtpXSA9IG5ldyBQb2ludChcbiAgICAgICAgICAoaSAlICh0aGlzLnN4ICsgMikpICogdGhpcy5zdGVwLCAoTWF0aC5mbG9vcihpIC8gKHRoaXMuc3ggKyAyKSkpICogdGhpcy5zdGVwXG4gICAgICAgIClcbiAgICAgIH1cbiAgXG4gICAgICAvLyBjcmVhdGUgbWV0YWJhbGxzXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IG51bUJhbGxzOyBrKyspIHtcbiAgICAgICAgdGhpcy5iYWxsc1trXSA9IG5ldyBCYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgLy8gY29tcHV0ZSBjZWxsIGZvcmNlXG4gICAgTGF2YUxhbXAucHJvdG90eXBlLmNvbXB1dGVGb3JjZSA9IGZ1bmN0aW9uKHgsIHksIGlkeCkge1xuICBcbiAgICAgIHZhciBmb3JjZTtcbiAgICAgIHZhciBpZCA9IGlkeCB8fCB4ICsgeSAqICh0aGlzLnN4ICsgMik7XG4gIFxuICAgICAgaWYgKHggPT09IDAgfHwgeSA9PT0gMCB8fCB4ID09PSB0aGlzLnN4IHx8IHkgPT09IHRoaXMuc3kpIHtcbiAgICAgICAgZm9yY2UgPSAwLjYgKiB0aGlzLnNpZ247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JjZSA9IDA7XG4gICAgICAgIHZhciBjZWxsID0gdGhpcy5ncmlkW2lkXTtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgYmFsbDtcbiAgICAgICAgd2hpbGUgKGJhbGwgPSB0aGlzLmJhbGxzW2krK10pIHtcbiAgICAgICAgICBmb3JjZSArPSBiYWxsLnNpemUgKiBiYWxsLnNpemUgLyAoLTIgKiBjZWxsLnggKiBiYWxsLnBvcy54IC0gMiAqIGNlbGwueSAqIGJhbGwucG9zLnkgKyBiYWxsLnBvcy5tYWduaXR1ZGUgKyBjZWxsLm1hZ25pdHVkZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yY2UgKj0gdGhpcy5zaWduXG4gICAgICB9XG4gICAgICB0aGlzLmdyaWRbaWRdLmZvcmNlID0gZm9yY2U7XG4gICAgICByZXR1cm4gZm9yY2U7XG4gICAgfTtcbiAgICAvLyBjb21wdXRlIGNlbGxcbiAgICBMYXZhTGFtcC5wcm90b3R5cGUubWFyY2hpbmdTcXVhcmVzID0gZnVuY3Rpb24obmV4dCkge1xuICAgICAgdmFyIHggPSBuZXh0WzBdO1xuICAgICAgdmFyIHkgPSBuZXh0WzFdO1xuICAgICAgdmFyIHBkaXIgPSBuZXh0WzJdO1xuICAgICAgdmFyIGlkID0geCArIHkgKiAodGhpcy5zeCArIDIpO1xuICAgICAgaWYgKHRoaXMuZ3JpZFtpZF0uY29tcHV0ZWQgPT09IHRoaXMuaXRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgZGlyLCBtc2Nhc2UgPSAwO1xuICBcbiAgICAgIC8vIG5laWdoYm9ycyBmb3JjZVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgdmFyIGlkbiA9ICh4ICsgdGhpcy5peFtpICsgMTJdKSArICh5ICsgdGhpcy5peFtpICsgMTZdKSAqICh0aGlzLnN4ICsgMik7XG4gICAgICAgIHZhciBmb3JjZSA9IHRoaXMuZ3JpZFtpZG5dLmZvcmNlO1xuICAgICAgICBpZiAoKGZvcmNlID4gMCAmJiB0aGlzLnNpZ24gPCAwKSB8fCAoZm9yY2UgPCAwICYmIHRoaXMuc2lnbiA+IDApIHx8ICFmb3JjZSkge1xuICAgICAgICAgIC8vIGNvbXB1dGUgZm9yY2UgaWYgbm90IGluIGJ1ZmZlclxuICAgICAgICAgIGZvcmNlID0gdGhpcy5jb21wdXRlRm9yY2UoXG4gICAgICAgICAgICB4ICsgdGhpcy5peFtpICsgMTJdLFxuICAgICAgICAgICAgeSArIHRoaXMuaXhbaSArIDE2XSxcbiAgICAgICAgICAgIGlkblxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKE1hdGguYWJzKGZvcmNlKSA+IDEpIG1zY2FzZSArPSBNYXRoLnBvdygyLCBpKTtcbiAgICAgIH1cbiAgICAgIGlmIChtc2Nhc2UgPT09IDE1KSB7XG4gICAgICAgIC8vIGluc2lkZVxuICAgICAgICByZXR1cm4gW3gsIHkgLSAxLCBmYWxzZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbWJpZ3VvdXMgY2FzZXNcbiAgICAgICAgaWYgKG1zY2FzZSA9PT0gNSkgZGlyID0gKHBkaXIgPT09IDIpID8gMyA6IDE7XG4gICAgICAgIGVsc2UgaWYgKG1zY2FzZSA9PT0gMTApIGRpciA9IChwZGlyID09PSAzKSA/IDAgOiAyO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBsb29rdXBcbiAgICAgICAgICBkaXIgPSB0aGlzLm1zY2FzZXNbbXNjYXNlXTtcbiAgICAgICAgICB0aGlzLmdyaWRbaWRdLmNvbXB1dGVkID0gdGhpcy5pdGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRyYXcgbGluZVxuICAgICAgICB2YXIgaXggPSB0aGlzLnN0ZXAgLyAoXG4gICAgICAgICAgICBNYXRoLmFicyhNYXRoLmFicyh0aGlzLmdyaWRbKHggKyB0aGlzLnBseFs0ICogZGlyICsgMl0pICsgKHkgKyB0aGlzLnBseVs0ICogZGlyICsgMl0pICogKHRoaXMuc3ggKyAyKV0uZm9yY2UpIC0gMSkgL1xuICAgICAgICAgICAgTWF0aC5hYnMoTWF0aC5hYnModGhpcy5ncmlkWyh4ICsgdGhpcy5wbHhbNCAqIGRpciArIDNdKSArICh5ICsgdGhpcy5wbHlbNCAqIGRpciArIDNdKSAqICh0aGlzLnN4ICsgMildLmZvcmNlKSAtIDEpICsgMVxuICAgICAgICAgICk7XG4gICAgICAgIGN0eC5saW5lVG8oXG4gICAgICAgICAgdGhpcy5ncmlkWyh4ICsgdGhpcy5wbHhbNCAqIGRpcl0pICsgKHkgKyB0aGlzLnBseVs0ICogZGlyXSkgKiAodGhpcy5zeCArIDIpXS54ICsgdGhpcy5peFtkaXJdICogaXgsXG4gICAgICAgICAgdGhpcy5ncmlkWyh4ICsgdGhpcy5wbHhbNCAqIGRpciArIDFdKSArICh5ICsgdGhpcy5wbHlbNCAqIGRpciArIDFdKSAqICh0aGlzLnN4ICsgMildLnkgKyB0aGlzLml4W2RpciArIDRdICogaXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wYWludCA9IHRydWU7XG4gICAgICAgIC8vIG5leHRcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB4ICsgdGhpcy5peFtkaXIgKyA0XSxcbiAgICAgICAgICB5ICsgdGhpcy5peFtkaXIgKyA4XSxcbiAgICAgICAgICBkaXJcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBMYXZhTGFtcC5wcm90b3R5cGUucmVuZGVyTWV0YWJhbGxzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSA9IDAsIGJhbGw7XG4gICAgICB3aGlsZSAoYmFsbCA9IHRoaXMuYmFsbHNbaSsrXSkgYmFsbC5tb3ZlKCk7XG4gICAgICAvLyByZXNldCBncmlkXG4gICAgICB0aGlzLml0ZXIrKztcbiAgICAgIHRoaXMuc2lnbiA9IC10aGlzLnNpZ247XG4gICAgICB0aGlzLnBhaW50ID0gZmFsc2U7XG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5tZXRhRmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIC8vIGNvbXB1dGUgbWV0YWJhbGxzXG4gICAgICBpID0gMDtcbiAgICAgIC8vY3R4LnNoYWRvd0JsdXIgPSA1MDtcbiAgICAgIC8vY3R4LnNoYWRvd0NvbG9yID0gXCJncmVlblwiO1xuICAgICAgd2hpbGUgKGJhbGwgPSB0aGlzLmJhbGxzW2krK10pIHtcbiAgICAgICAgLy8gZmlyc3QgY2VsbFxuICAgICAgICB2YXIgbmV4dCA9IFtcbiAgICAgICAgICBNYXRoLnJvdW5kKGJhbGwucG9zLnggLyB0aGlzLnN0ZXApLFxuICAgICAgICAgIE1hdGgucm91bmQoYmFsbC5wb3MueSAvIHRoaXMuc3RlcCksIGZhbHNlXG4gICAgICAgIF07XG4gICAgICAgIC8vIG1hcmNoaW5nIHNxdWFyZXNcbiAgICAgICAgZG8ge1xuICAgICAgICAgIG5leHQgPSB0aGlzLm1hcmNoaW5nU3F1YXJlcyhuZXh0KTtcbiAgICAgICAgfSB3aGlsZSAobmV4dCk7XG4gICAgICAgIC8vIGZpbGwgYW5kIGNsb3NlIHBhdGhcbiAgICAgICAgaWYgKHRoaXMucGFpbnQpIHtcbiAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgdGhpcy5wYWludCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgXG4gICAgLy8gZ3JhZGllbnRzXG4gICAgdmFyIGNyZWF0ZVJhZGlhbEdyYWRpZW50ID0gZnVuY3Rpb24odywgaCwgciwgYzAsIGMxKSB7XG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoXG4gICAgICAgIHcgLyAxLCBoIC8gMSwgMCxcbiAgICAgICAgdyAvIDEsIGggLyAxLCByXG4gICAgICApO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGMwKTtcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCBjMSk7XG4gICAgICByZXR1cm4gZ3JhZGllbnQ7XG4gICAgfTtcbiAgXG4gICAgLy8gbWFpbiBsb29wXG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJ1bik7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHNjcmVlbi53aWR0aCwgc2NyZWVuLmhlaWdodCk7XG4gICAgICBsYXZhMC5yZW5kZXJNZXRhYmFsbHMoKTtcbiAgICB9O1xuICAgIC8vIGNhbnZhc1xuICAgIHZhciBzY3JlZW4gPSBnZTFkb290LnNjcmVlbi5pbml0KFwiYnViYmxlXCIsIG51bGwsIHRydWUpLFxuICAgICAgICBjdHggPSBzY3JlZW4uY3R4O1xuICAgIHNjcmVlbi5yZXNpemUoKTtcbiAgICAvLyBjcmVhdGUgTGF2YUxhbXBzXG4gICAgbGF2YTAgPSBuZXcgTGF2YUxhbXAoc2NyZWVuLndpZHRoLCBzY3JlZW4uaGVpZ2h0LCA2LCBcIiNEODAwNzhcIiwgXCIjMDM1REVGXCIpO1xuICBcbiAgICBydW4oKTtcbiAgXG4gIH0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/davids-portfolio/src/theme/Background/magic.js\n");

/***/ })

})