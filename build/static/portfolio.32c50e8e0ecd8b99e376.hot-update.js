webpackHotUpdate("portfolio",{

/***/ "./packages/davids-portfolio/src/theme/Background/magic.js":
/*!*****************************************************************!*\
  !*** ./packages/davids-portfolio/src/theme/Background/magic.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// generate and animate the background lava lamp\n;(function(){if(typeof window!=='undefined'){}\"use strict\";var lava0;var ge1doot={screen:{elem:null,callback:null,ctx:null,width:0,height:0,left:0,top:0,init:function init(id,callback,initRes){this.elem=document.getElementById(id);this.callback=callback||null;if(this.elem.tagName==\"CANVAS\")this.ctx=this.elem.getContext(\"2d\");window.addEventListener('resize',function(){this.resize();}.bind(this),false);this.elem.onselectstart=function(){return false;};this.elem.ondrag=function(){return false;};initRes&&this.resize();return this;},resize:function resize(){var o=this.elem;this.width=o.offsetWidth;this.height=o.offsetHeight;for(this.left=0,this.top=0;o!=null;o=o.offsetParent){this.left+=o.offsetLeft;this.top+=o.offsetTop;}if(this.ctx){this.elem.width=this.width;this.elem.height=this.height;}this.callback&&this.callback();}}};// Point constructor\nvar Point=function Point(x,y){this.x=x;this.y=y;this.magnitude=x*x+y*y;this.computed=0;this.force=0;};Point.prototype.add=function(p){return new Point(this.x+p.x,this.y+p.y);};// Ball constructor\nvar Ball=function Ball(parent){var min=0.7;var max=1.8;this.vel=new Point((Math.random()>0.5?1:-1)*(0.2+Math.random()*0.25),(Math.random()>0.5?1:-1)*(0.2+Math.random()));this.pos=new Point(parent.width*0.2+Math.random()*parent.width*0.6,parent.height*0.2+Math.random()*parent.height*0.6);this.size=parent.wh/15+(Math.random()*(max-min)+min)*(parent.wh/15);this.width=parent.width;this.height=parent.height;};// move balls\nBall.prototype.move=function(){// bounce borders\nif(this.pos.x>=this.width-this.size){if(this.vel.x>0)this.vel.x=-this.vel.x;this.pos.x=this.width-this.size;}else if(this.pos.x<=this.size){if(this.vel.x<0)this.vel.x=-this.vel.x;this.pos.x=this.size;}if(this.pos.y>=this.height-this.size){if(this.vel.y>0)this.vel.y=-this.vel.y;this.pos.y=this.height-this.size;}else if(this.pos.y<=this.size){if(this.vel.y<0)this.vel.y=-this.vel.y;this.pos.y=this.size;}// velocity\nthis.pos=this.pos.add(this.vel);};// lavalamp constructor\nvar LavaLamp=function LavaLamp(width,height,numBalls,c0,c1){this.step=5;this.width=width;this.height=height;this.wh=Math.min(width,height);this.sx=Math.floor(this.width/this.step);this.sy=Math.floor(this.height/this.step);this.paint=false;this.metaFill=createRadialGradient(width,height,width,c0,c1);this.plx=[0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0];this.ply=[0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1];this.mscases=[0,3,0,3,1,3,0,3,2,2,0,2,1,1,0];this.ix=[1,0,-1,0,0,1,0,-1,-1,0,1,0,0,1,1,0,0,0,1,1];this.grid=[];this.balls=[];this.iter=0;this.sign=1;// init grid\nfor(var i=0;i<(this.sx+2)*(this.sy+2);i++){this.grid[i]=new Point(i%(this.sx+2)*this.step,Math.floor(i/(this.sx+2))*this.step);}// create metaballs\nfor(var k=0;k<numBalls;k++){this.balls[k]=new Ball(this);}};// compute cell force\nLavaLamp.prototype.computeForce=function(x,y,idx){var force;var id=idx||x+y*(this.sx+2);if(x===0||y===0||x===this.sx||y===this.sy){force=0.6*this.sign;}else{force=0;var cell=this.grid[id];var i=0;var ball;while(ball=this.balls[i++]){force+=ball.size*ball.size/(-2*cell.x*ball.pos.x-2*cell.y*ball.pos.y+ball.pos.magnitude+cell.magnitude);}force*=this.sign;}this.grid[id].force=force;return force;};// compute cell\nLavaLamp.prototype.marchingSquares=function(next){var x=next[0];var y=next[1];var pdir=next[2];var id=x+y*(this.sx+2);if(this.grid[id].computed===this.iter){return false;}var dir,mscase=0;// neighbors force\nfor(var i=0;i<4;i++){var idn=x+this.ix[i+12]+(y+this.ix[i+16])*(this.sx+2);var force=this.grid[idn].force;if(force>0&&this.sign<0||force<0&&this.sign>0||!force){// compute force if not in buffer\nforce=this.computeForce(x+this.ix[i+12],y+this.ix[i+16],idn);}if(Math.abs(force)>1)mscase+=Math.pow(2,i);}if(mscase===15){// inside\nreturn[x,y-1,false];}else{// ambiguous cases\nif(mscase===5)dir=pdir===2?3:1;else if(mscase===10)dir=pdir===3?0:2;else{// lookup\ndir=this.mscases[mscase];this.grid[id].computed=this.iter;}// draw line\nvar ix=this.step/(Math.abs(Math.abs(this.grid[x+this.plx[4*dir+2]+(y+this.ply[4*dir+2])*(this.sx+2)].force)-1)/Math.abs(Math.abs(this.grid[x+this.plx[4*dir+3]+(y+this.ply[4*dir+3])*(this.sx+2)].force)-1)+1);ctx.lineTo(this.grid[x+this.plx[4*dir]+(y+this.ply[4*dir])*(this.sx+2)].x+this.ix[dir]*ix,this.grid[x+this.plx[4*dir+1]+(y+this.ply[4*dir+1])*(this.sx+2)].y+this.ix[dir+4]*ix);this.paint=true;// next\nreturn[x+this.ix[dir+4],y+this.ix[dir+8],dir];}};LavaLamp.prototype.renderMetaballs=function(){var i=0,ball;while(ball=this.balls[i++]){ball.move();}// reset grid\nthis.iter++;this.sign=-this.sign;this.paint=false;ctx.fillStyle=this.metaFill;ctx.beginPath();// compute metaballs\ni=0;//ctx.shadowBlur = 50;\n//ctx.shadowColor = \"green\";\nwhile(ball=this.balls[i++]){// first cell\nvar next=[Math.round(ball.pos.x/this.step),Math.round(ball.pos.y/this.step),false];// marching squares\ndo{next=this.marchingSquares(next);}while(next);// fill and close path\nif(this.paint){ctx.fill();ctx.closePath();ctx.beginPath();this.paint=false;}}};// gradients\nvar createRadialGradient=function createRadialGradient(w,h,r,c0,c1){var gradient=ctx.createRadialGradient(w/1,h/1,0,w/1,h/1,r);gradient.addColorStop(0,c0);gradient.addColorStop(1,c1);return gradient;};// main loop\nvar run=function run(){requestAnimationFrame(run);ctx.clearRect(0,0,screen.width,screen.height);lava0.renderMetaballs();};// canvas\nvar screen=ge1doot.screen.init(\"bubble\",null,true),ctx=screen.ctx;screen.resize();// create LavaLamps\nlava0=new LavaLamp(screen.width,screen.height,6,\"#D80078\",\"#035DEF\");run();})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9kYXZpZHMtcG9ydGZvbGlvL3NyYy90aGVtZS9CYWNrZ3JvdW5kL21hZ2ljLmpzP2NiODUiXSwibmFtZXMiOlsid2luZG93IiwibGF2YTAiLCJnZTFkb290Iiwic2NyZWVuIiwiZWxlbSIsImNhbGxiYWNrIiwiY3R4Iiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIiwiaW5pdCIsImlkIiwiaW5pdFJlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWdOYW1lIiwiZ2V0Q29udGV4dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNpemUiLCJiaW5kIiwib25zZWxlY3RzdGFydCIsIm9uZHJhZyIsIm8iLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFBhcmVudCIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJQb2ludCIsIngiLCJ5IiwibWFnbml0dWRlIiwiY29tcHV0ZWQiLCJmb3JjZSIsInByb3RvdHlwZSIsImFkZCIsInAiLCJCYWxsIiwicGFyZW50IiwibWluIiwibWF4IiwidmVsIiwiTWF0aCIsInJhbmRvbSIsInBvcyIsInNpemUiLCJ3aCIsIm1vdmUiLCJMYXZhTGFtcCIsIm51bUJhbGxzIiwiYzAiLCJjMSIsInN0ZXAiLCJzeCIsImZsb29yIiwic3kiLCJwYWludCIsIm1ldGFGaWxsIiwiY3JlYXRlUmFkaWFsR3JhZGllbnQiLCJwbHgiLCJwbHkiLCJtc2Nhc2VzIiwiaXgiLCJncmlkIiwiYmFsbHMiLCJpdGVyIiwic2lnbiIsImkiLCJrIiwiY29tcHV0ZUZvcmNlIiwiaWR4IiwiY2VsbCIsImJhbGwiLCJtYXJjaGluZ1NxdWFyZXMiLCJuZXh0IiwicGRpciIsImRpciIsIm1zY2FzZSIsImlkbiIsImFicyIsInBvdyIsImxpbmVUbyIsInJlbmRlck1ldGFiYWxscyIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsInJvdW5kIiwiZmlsbCIsImNsb3NlUGF0aCIsInciLCJoIiwiciIsImdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwicnVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJSZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLENBQUMsQ0FBQyxVQUFXLENBQ1gsR0FBSSxNQUFPQSxPQUFQLEdBQWtCLFdBQXRCLENBQW1DLENBRWxDLENBRUMsYUFFQSxHQUFJQyxNQUFKLENBQ0EsR0FBSUMsUUFBTyxDQUFHLENBQ1pDLE1BQU0sQ0FBRSxDQUNOQyxJQUFJLENBQU0sSUFESixDQUVOQyxRQUFRLENBQUUsSUFGSixDQUdOQyxHQUFHLENBQU8sSUFISixDQUlOQyxLQUFLLENBQUssQ0FKSixDQUtOQyxNQUFNLENBQUksQ0FMSixDQU1OQyxJQUFJLENBQU0sQ0FOSixDQU9OQyxHQUFHLENBQU8sQ0FQSixDQVFOQyxJQUFJLENBQUUsY0FBVUMsRUFBVixDQUFjUCxRQUFkLENBQXdCUSxPQUF4QixDQUFpQyxDQUNyQyxLQUFLVCxJQUFMLENBQVlVLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsRUFBeEIsQ0FBWixDQUNBLEtBQUtQLFFBQUwsQ0FBZ0JBLFFBQVEsRUFBSSxJQUE1QixDQUNBLEdBQUksS0FBS0QsSUFBTCxDQUFVWSxPQUFWLEVBQXFCLFFBQXpCLENBQW1DLEtBQUtWLEdBQUwsQ0FBVyxLQUFLRixJQUFMLENBQVVhLFVBQVYsQ0FBcUIsSUFBckIsQ0FBWCxDQUNuQ2pCLE1BQU0sQ0FBQ2tCLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDLFVBQVksQ0FDNUMsS0FBS0MsTUFBTCxHQUNELENBRmlDLENBRWhDQyxJQUZnQyxDQUUzQixJQUYyQixDQUFsQyxDQUVjLEtBRmQsRUFHQSxLQUFLaEIsSUFBTCxDQUFVaUIsYUFBVixDQUEwQixVQUFZLENBQUUsTUFBTyxNQUFQLENBQWUsQ0FBdkQsQ0FDQSxLQUFLakIsSUFBTCxDQUFVa0IsTUFBVixDQUEwQixVQUFZLENBQUUsTUFBTyxNQUFQLENBQWUsQ0FBdkQsQ0FDQVQsT0FBTyxFQUFJLEtBQUtNLE1BQUwsRUFBWCxD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QixDQUFDRCxHQUFELENBQXJCLENBQ0F4RixHQUFHLENBQUMwRixTQUFKLENBQWMsQ0FBZCxDQUFpQixDQUFqQixDQUFvQjdGLE1BQU0sQ0FBQ0ksS0FBM0IsQ0FBa0NKLE1BQU0sQ0FBQ0ssTUFBekMsRUFDQVAsS0FBSyxDQUFDa0YsZUFBTixHQUNELENBSkQsQ0FLQTtBQUNBLEdBQUloRixPQUFNLENBQUdELE9BQU8sQ0FBQ0MsTUFBUixDQUFlUSxJQUFmLENBQW9CLFFBQXBCLENBQThCLElBQTlCLENBQW9DLElBQXBDLENBQWIsQ0FDSUwsR0FBRyxDQUFHSCxNQUFNLENBQUNHLEdBRGpCLENBRUFILE1BQU0sQ0FBQ2dCLE1BQVAsR0FDQTtBQUNBbEIsS0FBSyxDQUFHLEdBQUlnRCxTQUFKLENBQWE5QyxNQUFNLENBQUNJLEtBQXBCLENBQTJCSixNQUFNLENBQUNLLE1BQWxDLENBQTBDLENBQTFDLENBQTZDLFNBQTdDLENBQXdELFNBQXhELENBQVIsQ0FFQXNGLEdBQUcsR0FFSixDQTFRRiIsImZpbGUiOiIuL3BhY2thZ2VzL2Rhdmlkcy1wb3J0Zm9saW8vc3JjL3RoZW1lL0JhY2tncm91bmQvbWFnaWMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZW5lcmF0ZSBhbmQgYW5pbWF0ZSB0aGUgYmFja2dyb3VuZCBsYXZhIGxhbXBcbjsoZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIFxuICB9XG5cbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgXG4gICAgdmFyIGxhdmEwO1xuICAgIHZhciBnZTFkb290ID0ge1xuICAgICAgc2NyZWVuOiB7XG4gICAgICAgIGVsZW06ICAgICBudWxsLFxuICAgICAgICBjYWxsYmFjazogbnVsbCxcbiAgICAgICAgY3R4OiAgICAgIG51bGwsXG4gICAgICAgIHdpZHRoOiAgICAwLFxuICAgICAgICBoZWlnaHQ6ICAgMCxcbiAgICAgICAgbGVmdDogICAgIDAsXG4gICAgICAgIHRvcDogICAgICAwLFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoaWQsIGNhbGxiYWNrLCBpbml0UmVzKSB7XG4gICAgICAgICAgdGhpcy5lbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBudWxsO1xuICAgICAgICAgIGlmICh0aGlzLmVsZW0udGFnTmFtZSA9PSBcIkNBTlZBU1wiKSB0aGlzLmN0eCA9IHRoaXMuZWxlbS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5lbGVtLm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICAgIHRoaXMuZWxlbS5vbmRyYWcgICAgICAgID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgICBpbml0UmVzICYmIHRoaXMucmVzaXplKCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBvID0gdGhpcy5lbGVtO1xuICAgICAgICAgIHRoaXMud2lkdGggID0gby5vZmZzZXRXaWR0aDtcbiAgICAgICAgICB0aGlzLmhlaWdodCA9IG8ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIGZvciAodGhpcy5sZWZ0ID0gMCwgdGhpcy50b3AgPSAwOyBvICE9IG51bGw7IG8gPSBvLm9mZnNldFBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5sZWZ0ICs9IG8ub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIHRoaXMudG9wICArPSBvLm9mZnNldFRvcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuY3R4KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW0ud2lkdGggID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgIHRoaXMuZWxlbS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIFBvaW50IGNvbnN0cnVjdG9yXG4gICAgdmFyIFBvaW50ID0gZnVuY3Rpb24oeCwgeSkge1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLm1hZ25pdHVkZSA9IHggKiB4ICsgeSAqIHk7XG4gICAgICB0aGlzLmNvbXB1dGVkID0gMDtcbiAgICAgIHRoaXMuZm9yY2UgPSAwO1xuICAgIH07XG4gICAgUG9pbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHApIHtcbiAgICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpO1xuICAgIH07XG4gIFxuICAgIC8vIEJhbGwgY29uc3RydWN0b3JcbiAgICB2YXIgQmFsbCA9IGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgdmFyIG1pbiA9IDAuNztcbiAgICAgIHZhciBtYXggPSAxLjg7XG4gICAgICB0aGlzLnZlbCA9IG5ldyBQb2ludChcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpICogKDAuMiArIE1hdGgucmFuZG9tKCkgKiAwLjI1KSwgKE1hdGgucmFuZG9tKCkgPiAwLjUgPyAxIDogLTEpICogKDAuMiArIE1hdGgucmFuZG9tKCkpXG4gICAgICApO1xuICAgICAgdGhpcy5wb3MgPSBuZXcgUG9pbnQoXG4gICAgICAgIHBhcmVudC53aWR0aCAqIDAuMiArIE1hdGgucmFuZG9tKCkgKiBwYXJlbnQud2lkdGggKiAwLjYsXG4gICAgICAgIHBhcmVudC5oZWlnaHQgKiAwLjIgKyBNYXRoLnJhbmRvbSgpICogcGFyZW50LmhlaWdodCAqIDAuNlxuICAgICAgKTtcbiAgICAgIHRoaXMuc2l6ZSA9IChwYXJlbnQud2ggLyAxNSkgKyAoIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbiApICogKHBhcmVudC53aCAvIDE1KTtcbiAgICAgIHRoaXMud2lkdGggPSBwYXJlbnQud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IHBhcmVudC5oZWlnaHQ7XG4gICAgfTtcbiAgXG4gICAgLy8gbW92ZSBiYWxsc1xuICAgIEJhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbigpIHtcbiAgXG4gICAgICAvLyBib3VuY2UgYm9yZGVyc1xuICAgICAgaWYgKHRoaXMucG9zLnggPj0gdGhpcy53aWR0aCAtIHRoaXMuc2l6ZSkge1xuICAgICAgICBpZiAodGhpcy52ZWwueCA+IDApIHRoaXMudmVsLnggPSAtdGhpcy52ZWwueDtcbiAgICAgICAgdGhpcy5wb3MueCA9IHRoaXMud2lkdGggLSB0aGlzLnNpemU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnggPD0gdGhpcy5zaXplKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbC54IDwgMCkgdGhpcy52ZWwueCA9IC10aGlzLnZlbC54O1xuICAgICAgICB0aGlzLnBvcy54ID0gdGhpcy5zaXplO1xuICAgICAgfVxuICBcbiAgICAgIGlmICh0aGlzLnBvcy55ID49IHRoaXMuaGVpZ2h0IC0gdGhpcy5zaXplKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbC55ID4gMCkgdGhpcy52ZWwueSA9IC10aGlzLnZlbC55O1xuICAgICAgICB0aGlzLnBvcy55ID0gdGhpcy5oZWlnaHQgLSB0aGlzLnNpemU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucG9zLnkgPD0gdGhpcy5zaXplKSB7XG4gICAgICAgIGlmICh0aGlzLnZlbC55IDwgMCkgdGhpcy52ZWwueSA9IC10aGlzLnZlbC55O1xuICAgICAgICB0aGlzLnBvcy55ID0gdGhpcy5zaXplO1xuICAgICAgfVxuICBcbiAgICAgIC8vIHZlbG9jaXR5XG4gICAgICB0aGlzLnBvcyA9IHRoaXMucG9zLmFkZCh0aGlzLnZlbCk7XG4gIFxuICAgIH07XG4gIFxuICAgIC8vIGxhdmFsYW1wIGNvbnN0cnVjdG9yXG4gICAgdmFyIExhdmFMYW1wID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgbnVtQmFsbHMsIGMwLCBjMSkge1xuICAgICAgdGhpcy5zdGVwID0gNTtcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy53aCA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5zeCA9IE1hdGguZmxvb3IodGhpcy53aWR0aCAvIHRoaXMuc3RlcCk7XG4gICAgICB0aGlzLnN5ID0gTWF0aC5mbG9vcih0aGlzLmhlaWdodCAvIHRoaXMuc3RlcCk7XG4gICAgICB0aGlzLnBhaW50ID0gZmFsc2U7XG4gICAgICB0aGlzLm1ldGFGaWxsID0gY3JlYXRlUmFkaWFsR3JhZGllbnQod2lkdGgsIGhlaWdodCwgd2lkdGgsIGMwLCBjMSk7XG4gICAgICB0aGlzLnBseCA9IFswLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXTtcbiAgICAgIHRoaXMucGx5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDFdO1xuICAgICAgdGhpcy5tc2Nhc2VzID0gWzAsIDMsIDAsIDMsIDEsIDMsIDAsIDMsIDIsIDIsIDAsIDIsIDEsIDEsIDBdO1xuICAgICAgdGhpcy5peCA9IFsxLCAwLCAtMSwgMCwgMCwgMSwgMCwgLTEsIC0xLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxXTtcbiAgICAgIHRoaXMuZ3JpZCA9IFtdO1xuICAgICAgdGhpcy5iYWxscyA9IFtdO1xuICAgICAgdGhpcy5pdGVyID0gMDtcbiAgICAgIHRoaXMuc2lnbiA9IDE7XG4gIFxuICAgICAgLy8gaW5pdCBncmlkXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICh0aGlzLnN4ICsgMikgKiAodGhpcy5zeSArIDIpOyBpKyspIHtcbiAgICAgICAgdGhpcy5ncmlkW2ldID0gbmV3IFBvaW50KFxuICAgICAgICAgIChpICUgKHRoaXMuc3ggKyAyKSkgKiB0aGlzLnN0ZXAsIChNYXRoLmZsb29yKGkgLyAodGhpcy5zeCArIDIpKSkgKiB0aGlzLnN0ZXBcbiAgICAgICAgKVxuICAgICAgfVxuICBcbiAgICAgIC8vIGNyZWF0ZSBtZXRhYmFsbHNcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgbnVtQmFsbHM7IGsrKykge1xuICAgICAgICB0aGlzLmJhbGxzW2tdID0gbmV3IEJhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvLyBjb21wdXRlIGNlbGwgZm9yY2VcbiAgICBMYXZhTGFtcC5wcm90b3R5cGUuY29tcHV0ZUZvcmNlID0gZnVuY3Rpb24oeCwgeSwgaWR4KSB7XG4gIFxuICAgICAgdmFyIGZvcmNlO1xuICAgICAgdmFyIGlkID0gaWR4IHx8IHggKyB5ICogKHRoaXMuc3ggKyAyKTtcbiAgXG4gICAgICBpZiAoeCA9PT0gMCB8fCB5ID09PSAwIHx8IHggPT09IHRoaXMuc3ggfHwgeSA9PT0gdGhpcy5zeSkge1xuICAgICAgICBmb3JjZSA9IDAuNiAqIHRoaXMuc2lnbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcmNlID0gMDtcbiAgICAgICAgdmFyIGNlbGwgPSB0aGlzLmdyaWRbaWRdO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBiYWxsO1xuICAgICAgICB3aGlsZSAoYmFsbCA9IHRoaXMuYmFsbHNbaSsrXSkge1xuICAgICAgICAgIGZvcmNlICs9IGJhbGwuc2l6ZSAqIGJhbGwuc2l6ZSAvICgtMiAqIGNlbGwueCAqIGJhbGwucG9zLnggLSAyICogY2VsbC55ICogYmFsbC5wb3MueSArIGJhbGwucG9zLm1hZ25pdHVkZSArIGNlbGwubWFnbml0dWRlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JjZSAqPSB0aGlzLnNpZ25cbiAgICAgIH1cbiAgICAgIHRoaXMuZ3JpZFtpZF0uZm9yY2UgPSBmb3JjZTtcbiAgICAgIHJldHVybiBmb3JjZTtcbiAgICB9O1xuICAgIC8vIGNvbXB1dGUgY2VsbFxuICAgIExhdmFMYW1wLnByb3RvdHlwZS5tYXJjaGluZ1NxdWFyZXMgPSBmdW5jdGlvbihuZXh0KSB7XG4gICAgICB2YXIgeCA9IG5leHRbMF07XG4gICAgICB2YXIgeSA9IG5leHRbMV07XG4gICAgICB2YXIgcGRpciA9IG5leHRbMl07XG4gICAgICB2YXIgaWQgPSB4ICsgeSAqICh0aGlzLnN4ICsgMik7XG4gICAgICBpZiAodGhpcy5ncmlkW2lkXS5jb21wdXRlZCA9PT0gdGhpcy5pdGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBkaXIsIG1zY2FzZSA9IDA7XG4gIFxuICAgICAgLy8gbmVpZ2hib3JzIGZvcmNlXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICB2YXIgaWRuID0gKHggKyB0aGlzLml4W2kgKyAxMl0pICsgKHkgKyB0aGlzLml4W2kgKyAxNl0pICogKHRoaXMuc3ggKyAyKTtcbiAgICAgICAgdmFyIGZvcmNlID0gdGhpcy5ncmlkW2lkbl0uZm9yY2U7XG4gICAgICAgIGlmICgoZm9yY2UgPiAwICYmIHRoaXMuc2lnbiA8IDApIHx8IChmb3JjZSA8IDAgJiYgdGhpcy5zaWduID4gMCkgfHwgIWZvcmNlKSB7XG4gICAgICAgICAgLy8gY29tcHV0ZSBmb3JjZSBpZiBub3QgaW4gYnVmZmVyXG4gICAgICAgICAgZm9yY2UgPSB0aGlzLmNvbXB1dGVGb3JjZShcbiAgICAgICAgICAgIHggKyB0aGlzLml4W2kgKyAxMl0sXG4gICAgICAgICAgICB5ICsgdGhpcy5peFtpICsgMTZdLFxuICAgICAgICAgICAgaWRuXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTWF0aC5hYnMoZm9yY2UpID4gMSkgbXNjYXNlICs9IE1hdGgucG93KDIsIGkpO1xuICAgICAgfVxuICAgICAgaWYgKG1zY2FzZSA9PT0gMTUpIHtcbiAgICAgICAgLy8gaW5zaWRlXG4gICAgICAgIHJldHVybiBbeCwgeSAtIDEsIGZhbHNlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGFtYmlndW91cyBjYXNlc1xuICAgICAgICBpZiAobXNjYXNlID09PSA1KSBkaXIgPSAocGRpciA9PT0gMikgPyAzIDogMTtcbiAgICAgICAgZWxzZSBpZiAobXNjYXNlID09PSAxMCkgZGlyID0gKHBkaXIgPT09IDMpID8gMCA6IDI7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIGxvb2t1cFxuICAgICAgICAgIGRpciA9IHRoaXMubXNjYXNlc1ttc2Nhc2VdO1xuICAgICAgICAgIHRoaXMuZ3JpZFtpZF0uY29tcHV0ZWQgPSB0aGlzLml0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZHJhdyBsaW5lXG4gICAgICAgIHZhciBpeCA9IHRoaXMuc3RlcCAvIChcbiAgICAgICAgICAgIE1hdGguYWJzKE1hdGguYWJzKHRoaXMuZ3JpZFsoeCArIHRoaXMucGx4WzQgKiBkaXIgKyAyXSkgKyAoeSArIHRoaXMucGx5WzQgKiBkaXIgKyAyXSkgKiAodGhpcy5zeCArIDIpXS5mb3JjZSkgLSAxKSAvXG4gICAgICAgICAgICBNYXRoLmFicyhNYXRoLmFicyh0aGlzLmdyaWRbKHggKyB0aGlzLnBseFs0ICogZGlyICsgM10pICsgKHkgKyB0aGlzLnBseVs0ICogZGlyICsgM10pICogKHRoaXMuc3ggKyAyKV0uZm9yY2UpIC0gMSkgKyAxXG4gICAgICAgICAgKTtcbiAgICAgICAgY3R4LmxpbmVUbyhcbiAgICAgICAgICB0aGlzLmdyaWRbKHggKyB0aGlzLnBseFs0ICogZGlyXSkgKyAoeSArIHRoaXMucGx5WzQgKiBkaXJdKSAqICh0aGlzLnN4ICsgMildLnggKyB0aGlzLml4W2Rpcl0gKiBpeCxcbiAgICAgICAgICB0aGlzLmdyaWRbKHggKyB0aGlzLnBseFs0ICogZGlyICsgMV0pICsgKHkgKyB0aGlzLnBseVs0ICogZGlyICsgMV0pICogKHRoaXMuc3ggKyAyKV0ueSArIHRoaXMuaXhbZGlyICsgNF0gKiBpeFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnBhaW50ID0gdHJ1ZTtcbiAgICAgICAgLy8gbmV4dFxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHggKyB0aGlzLml4W2RpciArIDRdLFxuICAgICAgICAgIHkgKyB0aGlzLml4W2RpciArIDhdLFxuICAgICAgICAgIGRpclxuICAgICAgICBdO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIExhdmFMYW1wLnByb3RvdHlwZS5yZW5kZXJNZXRhYmFsbHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpID0gMCwgYmFsbDtcbiAgICAgIHdoaWxlIChiYWxsID0gdGhpcy5iYWxsc1tpKytdKSBiYWxsLm1vdmUoKTtcbiAgICAgIC8vIHJlc2V0IGdyaWRcbiAgICAgIHRoaXMuaXRlcisrO1xuICAgICAgdGhpcy5zaWduID0gLXRoaXMuc2lnbjtcbiAgICAgIHRoaXMucGFpbnQgPSBmYWxzZTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLm1ldGFGaWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgLy8gY29tcHV0ZSBtZXRhYmFsbHNcbiAgICAgIGkgPSAwO1xuICAgICAgLy9jdHguc2hhZG93Qmx1ciA9IDUwO1xuICAgICAgLy9jdHguc2hhZG93Q29sb3IgPSBcImdyZWVuXCI7XG4gICAgICB3aGlsZSAoYmFsbCA9IHRoaXMuYmFsbHNbaSsrXSkge1xuICAgICAgICAvLyBmaXJzdCBjZWxsXG4gICAgICAgIHZhciBuZXh0ID0gW1xuICAgICAgICAgIE1hdGgucm91bmQoYmFsbC5wb3MueCAvIHRoaXMuc3RlcCksXG4gICAgICAgICAgTWF0aC5yb3VuZChiYWxsLnBvcy55IC8gdGhpcy5zdGVwKSwgZmFsc2VcbiAgICAgICAgXTtcbiAgICAgICAgLy8gbWFyY2hpbmcgc3F1YXJlc1xuICAgICAgICBkbyB7XG4gICAgICAgICAgbmV4dCA9IHRoaXMubWFyY2hpbmdTcXVhcmVzKG5leHQpO1xuICAgICAgICB9IHdoaWxlIChuZXh0KTtcbiAgICAgICAgLy8gZmlsbCBhbmQgY2xvc2UgcGF0aFxuICAgICAgICBpZiAodGhpcy5wYWludCkge1xuICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICB0aGlzLnBhaW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICAvLyBncmFkaWVudHNcbiAgICB2YXIgY3JlYXRlUmFkaWFsR3JhZGllbnQgPSBmdW5jdGlvbih3LCBoLCByLCBjMCwgYzEpIHtcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgdyAvIDEsIGggLyAxLCAwLFxuICAgICAgICB3IC8gMSwgaCAvIDEsIHJcbiAgICAgICk7XG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgYzApO1xuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGMxKTtcbiAgICAgIHJldHVybiBncmFkaWVudDtcbiAgICB9O1xuICBcbiAgICAvLyBtYWluIGxvb3BcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocnVuKTtcbiAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgc2NyZWVuLndpZHRoLCBzY3JlZW4uaGVpZ2h0KTtcbiAgICAgIGxhdmEwLnJlbmRlck1ldGFiYWxscygpO1xuICAgIH07XG4gICAgLy8gY2FudmFzXG4gICAgdmFyIHNjcmVlbiA9IGdlMWRvb3Quc2NyZWVuLmluaXQoXCJidWJibGVcIiwgbnVsbCwgdHJ1ZSksXG4gICAgICAgIGN0eCA9IHNjcmVlbi5jdHg7XG4gICAgc2NyZWVuLnJlc2l6ZSgpO1xuICAgIC8vIGNyZWF0ZSBMYXZhTGFtcHNcbiAgICBsYXZhMCA9IG5ldyBMYXZhTGFtcChzY3JlZW4ud2lkdGgsIHNjcmVlbi5oZWlnaHQsIDYsIFwiI0Q4MDA3OFwiLCBcIiMwMzVERUZcIik7XG4gIFxuICAgIHJ1bigpO1xuICBcbiAgfSkoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/davids-portfolio/src/theme/Background/magic.js\n");

/***/ })

})