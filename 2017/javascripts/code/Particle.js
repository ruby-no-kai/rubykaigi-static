function Particle(t,i,e){this.mode=0,this.x=t,this.y=i,this.rotation=0,this.alpha=1,this.scale=1,this.force=0,this.deceleration=.9,this.friction=.1,this.speed=1,this.vector=new Vector2d(Static.randomRange(-this.speed,this.speed),Static.randomRange(-this.speed,this.speed)),this.area=e?e:new Rect(0,0,window.innerWidth,window.innerHeight)}Particle.prototype.update=function(){this.x+=this.vector.x,this.y+=this.vector.y,this.rotation=this.vector.get_angle()},Particle.prototype.check=function(){(this.x<this.area.x||this.x>this.area.x+this.area.width)&&(this.vector.x*=-1),(this.y<this.area.y||this.y>this.area.y+this.area.height)&&(this.vector.y*=-1)};