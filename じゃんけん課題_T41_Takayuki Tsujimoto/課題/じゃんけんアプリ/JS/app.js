$("#button").on("click", function(){
    let r =Math.ceil(Math.random() * 3);
    let image ="";
    let enemy ="";
    let outcome ="";
    //1のとき:こちらはグーを出す
    if( r == 1){
        image ='<img id = "you" src="img/mostmusculer.jpeg">';
        let s =  Math.ceil(Math.random() * 3);
        switch(s){
            case 1:
                enemy ='<img id = "enemy" src="img/mostmusculer.jpeg">';
                outcome = "あいこ：きんにくをたたえあっている…。";
                break;
            case 2: 
                enemy ='<img id = "enemy" src="img/oliver.jpeg">';
                outcome = "まけ：もっときんりょうをおいもとめましょう。";
                break;
            case 3:
                enemy ='<img id = "enemy" src="img/bisepus.jpeg">';
                outcome = "かち：ちからこそパワー！！！！！";
                sound.play();
                break;
        }
    }

    //2のとき:こちらはパーを出す
    if( r == 2) {
    image ='<img id = "you" src="img/oliver.jpeg">';
    let s =  Math.ceil(Math.random() * 3);
        switch(s){
            case 1:
                enemy ='<img id = "enemy" src="img/mostmusculer.jpeg">';
                outcome = "かち：ちからこそパワー！！！！！";
                sound.play();
                break;
            case 2: 
                enemy ='<img id = "enemy" src="img/oliver.jpeg">';
                outcome = "あいこ：きんにくをたたえあっている…。";
                break;
            case 3:
                enemy ='<img id = "enemy" src="img/bisepus.jpeg">';
                outcome = "まけ：もっときんりょうをおいもとめましょう。";
                break;
        }
    }
    
    //3のとき:こちらはチョキを出す
    if( r == 3){
    image ='<img id = "you" src="img/bisepus.jpeg">';
    let s =  Math.ceil(Math.random() * 3);
        switch(s){
            case 1:
                enemy ='<img id = "enemy" src="img/mostmusculer.jpeg">';
                outcome = "まけ：もっときんりょうをおいもとめましょう。";
                break;
            case 2: 
                enemy ='<img id = "enemy" src="img/oliver.jpeg">';
                outcome = "かち：ちからこそパワー！！！！！";
                sound.play();
                break;
            case 3:
                enemy ='<img id = "enemy" src="img/bisepus.jpeg">';
                outcome = "あいこ：きんにくをたたえあっている…。";
                break;
        }
    }


    // #imageの部分に写真を出現させる
    $("#image").html(image);
    $("#enemy").html(enemy);
    $("#outcome").html(outcome);
    //#enemyの部分にも写真を出現させる


});