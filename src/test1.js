
var Test1Layer = cc.Layer.extend({
    ball:null,
    dx:4,
    dy:4,
    ang: 0,
    ctor:function () {
        this._super();

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.x = cc.winSize.width /2;
        this.ball.y = cc.winSize.height / 2;

        this.ball.scaleX = 1;
        this.ball.scaleY = 1;

        this.addChild(this.ball);
        this.scheduleUpdate();


        return true;
    },

    update:function () {
        if (this.ball.x - this.ball.width/2 <= 0 ||
         this.ball.x + this.ball.width/2 >= cc.winSize.width){
            this.dx *= -1;
            if (this.dx<0){
                // right
                if (this.dy>0){
                    this.ang += 90;
                }else{
                    this.ang -= 90;
                }
            }else{
                // left
                if (this.dy>0){
                    this.ang -= 90;
                }else{
                    this.ang += 90;
                }
            }


            this.ball.runAction(cc.rotateTo(0.5,this.ang));
        }

        if (this.ball.y - this.ball.height/2 <= 0 ||
            this.ball.y + this.ball.height/2 >= cc.winSize.height){
            this.dy *= -1;

            if (this.dy<0){
                // right
                if (this.dx>0){
                    this.ang -= 90;
                }else{
                    this.ang += 90;
                }
            }else{
                // left
                if (this.dx>0){
                    this.ang += 90;
                }else{
                    this.ang -= 90;
                }
            }


            this.ball.runAction(cc.rotateTo(0.5,this.ang));
        }

        this.ball.x += this.dx;
        this.ball.y += this.dy;
    }
});

var Test1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test1Layer();
        this.addChild(layer);
    }
});

