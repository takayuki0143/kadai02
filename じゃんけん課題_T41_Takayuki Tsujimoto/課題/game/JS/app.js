let me = "";
let my = "";
let sa ="";
let ta ="";

// ホバーした時
$("#distribution").on("mouseover",function(){
    select.play();
    // alert("ok");
});

$("#change1").on("mouseover",function(){
    select.play();
    // alert("ok");
});
$("#change2").on("mouseover",function(){
    select.play();
    // alert("ok");
});
$("#change3").on("mouseover",function(){
    select.play();
    // alert("ok");
});
$("#enemy-cards").on("mouseover",function(){
    select.play();
    // alert("ok");
});
$("#reload").on("mouseover",function(){
    select.play();
    // alert("ok");
});



// 手札を配布するボタンを押した時の挙動
$('#distribution').on('click',function(){
    power.play();
    sentou.play();
// クリックしたら隠れていたボタンが出てきて、手札配布のボタンは隠れるようにしたい。
$ ("#change1").show(500);
$ ("#change2").show(500);
$ ("#change3").show(500);
$ ("#enemy-cards").show(500);
// 手札配布のボタンは隠れるようにしたい。
$ ("#distribution").hide(1000);


// 1-6までの数字を取得して、変数に代入。その結果によって条件を分岐させる。
// 1枚目
const sb = Math.ceil(Math.random() * 6);
sa = sb;
switch(sb){
    case 1:
        me = '<img src="IMG/abdominalsandthighs.jpg">';
        break;
    case 2:
        me = '<img src="IMG/frotdoublebiceps.jpg">';
        break;
    case 3:
        me = '<img src="IMG/sidetriceps.jpg">';
        break;
    case 4:
        me = '<img src="IMG/frontlatspread.jpg">';
        break;
    case 5:
        me = '<img src="IMG/sidechest.jpg">';
        break;
    case 6:
        me = '<img src="IMG/mostmuscular.jpg">';
        break;
}
// 2枚目
const tb = Math.ceil(Math.random() * 6);
ta = tb;
switch(tb){
    case 1:
        my = '<img src="IMG/abdominalsandthighs.jpg">';
        break;
    case 2:
        my = '<img src="IMG/frotdoublebiceps.jpg">';
        break;
    case 3:
        my = '<img src="IMG/sidetriceps.jpg">';
        break;
    case 4:
        my = '<img src="IMG/frontlatspread.jpg">';
        break;
    case 5:
        my = '<img src="IMG/sidechest.jpg">';
        break;
    case 6:
        my = '<img src="IMG/mostmuscular.jpg">';
        break;
}
$(".me-cards").html(me);
$(".my-cards").html(my);
$(".mine-sum").html(sa + ta);
});


let change1 = ""; 
let ca1 ="";
// 手札を入れ替える(1)を押した時の挙動
$("#change1").on("click" , function(){
    "#change1".disabled = true;
    $('#change2').prop('disabled', true); // ボタン2を無効化する
    $('#change3').prop('disabled', true); // ボタン3を無効化する
    const cb1 = Math.ceil(Math.random() * 6);
    ca1 = cb1;
    switch(cb1){
        case 1:
            change1 = '<img src="IMG/abdominalsandthighs.jpg">';
            break;

            case 2:
            change1 = '<img src="IMG/frotdoublebiceps.jpg">';
            break;

            case 3:
            change1 = '<img src="IMG/sidetriceps.jpg">';
            break;

            case 4:
            change1 = '<img src="IMG/frontlatspread.jpg">';
            break;

            case 5:
            change1 = '<img src="IMG/sidechest.jpg">';
            break;

            case 6:
            change1 =  '<img src="IMG/mostmuscular.jpg">';
            break;
    }
    $(".me-cards").html(change1);
    $(".mine-sum").html(ca1 + ta);
});

// 手札を入れ替える(2)を押した時の挙動
let change2 = ""; 
let ca2 ="";
// 手札を入れ替える(2)を押した時の挙動
$("#change2").on("click" , function(){
    '#change2'.disabled = true;
    $('#change1').prop('disabled', true); // ボタン1を無効化する
    $('#change3').prop('disabled', true); // ボタン3を無効化する
    const cb2 = Math.ceil(Math.random() * 6);
    ca2 = cb2;
    switch(cb2){
            case 1:
            change2 = '<img src="IMG/abdominalsandthighs.jpg">';
            break;

            case 2:
            change2 = '<img src="IMG/frotdoublebiceps.jpg">';
            break;

            case 3:
            change2 = '<img src="IMG/sidetriceps.jpg">';
            break;

            case 4:
            change2 = '<img src="IMG/frontlatspread.jpg">';
            break;

            case 5:
            change2 = '<img src="IMG/sidechest.jpg">';
            break;

            case 6:
            change2 =  '<img src="IMG/mostmuscular.jpg">';
            break;
    }
    $(".my-cards").html(change2);
    $(".mine-sum").html(sa + ca2);
});


// 両方を変えるを押した場合の挙動
let cha3 = "";
let chb3 = "";
$('#change3').on('click',function(){
    '#change3'.disabled = true;
    $('#change1').prop('disabled', true); // ボタン1を無効化する
    $('#change2').prop('disabled', true); // ボタン2を無効化する
    // 1-6までの数字を取得して、変数に代入。その結果によって条件を分岐させる。
    // 1枚目
    const ca3 = Math.ceil(Math.random() * 6);
    cha3 = ca3;
    switch(ca3){
        case 1:
            me3 = '<img src="IMG/abdominalsandthighs.jpg">';
            break;
        case 2:
            me3 = '<img src="IMG/frotdoublebiceps.jpg">';
            break;
        case 3:
            me3 = '<img src="IMG/sidetriceps.jpg">';
            break;
        case 4:
            me3 = '<img src="IMG/frontlatspread.jpg">';
            break;
        case 5:
            me3 = '<img src="IMG/sidechest.jpg">';
            break;
        case 6:
            me3 = '<img src="IMG/mostmuscular.jpg">';
            break;
    }
    // 2枚目
    const cb3 = Math.ceil(Math.random() * 6);
    chb3 = cb3;
    switch(cb3){
    case 1:
        my3 = '<img src="IMG/abdominalsandthighs.jpg">';
        break;
    case 2:
        my3 = '<img src="IMG/frotdoublebiceps.jpg">';
        break;
    case 3:
        my3 = '<img src="IMG/sidetriceps.jpg">';
        break;
    case 4:
        my3 = '<img src="IMG/frontlatspread.jpg">';
        break;
    case 5:
        my3 = '<img src="IMG/sidechest.jpg">';
        break;
    case 6:
        my3 = '<img src="IMG/mostmuscular.jpg">';
        break;
}

$(".me-cards").html(me3);
$(".my-cards").html(my3);
$(".mine-sum").html(cha3 + chb3);
});

// enemy-cards(勝負する！) のボタンを押したら、相手の手札が出現する！
let x = "";
let y = "";
// 相手の1枚目
let ene1 ="";
let ene2 ="";

$("#enemy-cards").on("click", function(){
    // 自分の他のボタンが消えるようにしたい
    $ ("#change1").hide(1000);
    $ ("#change2").hide(1000);
    $ ("#change3").hide(1000);
    $ ("#enemy-cards").hide(1000);

    const enemy1 = Math.ceil(Math.random() * 6);
    x = enemy1;
    switch(enemy1){
    case 1:
        ene1 = '<img src="IMG/abdominalsandthighs.jpg">';
        break;
    case 2:
        ene1 = '<img src="IMG/frotdoublebiceps.jpg">';
        break;
    case 3:
        ene1 = '<img src="IMG/sidetriceps.jpg">';
        break;
    case 4:
        ene1 = '<img src="IMG/frontlatspread.jpg">';
        break;
    case 5:
        ene1 = '<img src="IMG/sidechest.jpg">';
        break;
    case 6:
        ene1 = '<img src="IMG/mostmuscular.jpg">';
        break;
}
// 相手の2枚目
    const enemy2 = Math.ceil(Math.random() * 6);
    y = enemy2;
    switch(enemy2){
    case 1:
        ene2 = '<img src="IMG/abdominalsandthighs.jpg">';
        break;
    case 2:
        ene2 = '<img src="IMG/frotdoublebiceps.jpg">';
        break;
    case 3:
        ene2 = '<img src="IMG/sidetriceps.jpg">';
        break;
    case 4:
        ene2 = '<img src="IMG/frontlatspread.jpg">';
        break;
    case 5:
        ene2 = '<img src="IMG/sidechest.jpg">';
        break;
    case 6:
        ene2 = '<img src="IMG/mostmuscular.jpg">';
        break;
}
$(".enemy-cards").html(ene1);
$(".enemy-cardz").html(ene2);
$(".enemy-sum").html( x + y );

let sum = $(".mine-sum").html();
console.log(sum);
//勝敗のついての記載をする！！
// 勝ちの場合
if(sum > (x + y)) {
    // $("#outcome").show(1000,"勝ちました！！");
    setTimeout(function(){
    $('#outcome').text("勝ち：でかい！");
      }, 2000);
     muscle.play();
    // フリーポーズの動画を再生させたい
    // $("#movie").fadeIn(3000);
    $("#reload").fadeIn(5000);
    $("#reload").on("click",function(){
    window.location.reload();
       
    });
}
// 負けの場合
if(sum < (x + y)){
    // $("#outcome").show(1000,"負けました…");
    setTimeout(function(){
        $('#outcome').text("負け：よわい！");
      }, 2000);
      lose.play(); 
    //ジムの会員サイトへのジャンプ
    $("#reload").fadeIn(5000);
    setTimeout(function(){
    $('reload').text("もう1回勝負する！");
      }, 4000);
    $("#reload").on("click",function(){
       window.location.reload();
    });
}
// 引き分けの場合
if(sum== (x + y)){
    // $("#outcome").show(1000,"同点です");
    setTimeout(function(){
        $('#outcome').text("あいこ：まだまだこれから！");
      }, 2000);
    //リロードされるような処理をしたい
     $("#reload").fadeIn(5000);
    setTimeout(function(){
        $('reload').text("もう1回勝負する！");
          }, 4000);
     $("#reload").on("click",function(){
        window.location.reload();
     });
}

});

//3回連続で勝った場合は何か起こるかも…


//ポージングの写真をホバーした時
$("#pose1").on("mouseover",function(){
    ab.play();
});

$("#pose2").on("mouseover",function(){
    bulk.play();
});

$("#pose3").on("mouseover",function(){
    side.play();
});

$("#pose4").on("mouseover",function(){
    lat.play();
});

$("#pose5").on("mouseover",function(){
    chest.play();
});

$("#pose6").on("mouseover",function(){
    dodai.play();
});