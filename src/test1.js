
var Test1Layer = cc.Layer.extend({
    ball:null,
    dx:4,
    dy:4,
    ang: 0,
    counter:0,
    bricks: new Array(),
    ctor:function () {
        this._super();

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.x = cc.winSize.width /2;
        this.ball.y = cc.winSize.height / 2;

        this.ball.scaleX = 1;
        this.ball.scaleY = 1;

        this.addChild(this.ball);

        for (var i=0; i<10; i++){
            this.bricks[i] = new cc.Sprite(res.brick_png);
            this.bricks[i].x = this.bricks[i].width*i + this.bricks[i].width/2;
            this.bricks[i].y = cc.winSize.height * 9 / 10;
            this.addChild(this.bricks[i]);
        }


        this.scheduleUpdate();


        return true;
    },

    update:function () {
        if (this.ball.x - this.ball.width/2 <= 0 ||
         this.ball.x + this.ball.width/2 >= cc.winSize.width){
            this.dx *= -1;
            if (this.dx<0){
                this.ang += (this.dy>0)?90:-90
                // right
                /*
                if (this.dy>0){
                    this.ang += 90;
                }else{
                    this.ang -= 90;
                }
                */
            }else{
                this.ang += (this.dy>0)?-90:90
                // left
                /*
                if (this.dy>0){
                    this.ang -= 90;
                }else{
                    this.ang += 90;
                }
                */
            }


            this.ball.runAction(cc.rotateTo(0.5,this.ang));
            this.counter++;
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
            this.counter++;
        }

        if (this.counter>=10){
            this.removeChild(this.ball);
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

