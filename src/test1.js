
var Test1Layer = cc.Layer.extend({
    ball:null,
    ctor:function () {
        this._super();

        this.ball = new cc.Sprite(res.ball_png);
        this.ball.x = cc.winSize.width /2;
        this.ball.y = cc.winSize.height / 2;
        
        this.addChild(this.ball);

        return true;
    }
});

var Test1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Test1Layer();
        this.addChild(layer);
    }
});

