var chicken = [{ "id": 1, "name": "fried", "price": 16000 },
{ "id": 2, "name": "seasoning", "price": 17000 },
{ "id": 3, "name": "volcano", "price": 18000 },
{ "id": 4, "name": "galbicheonwang", "price": 19000 },
{ "id": 5, "name": "gochubasasag", "price": 19000 }];

var pizza = [{ "id": 1, "name": "Chicago", "price": 16000 },
{ "id": 2, "name": "potato", "price": 17000 },
{ "id": 3, "name": "bulgogi", "price": 18000 },
{ "id": 4, "name": "shrimp", "price": 19000 },
{ "id": 5, "name": "pepperoni", "price": 15000 }];

var side = [{ "id": 1, "name": "fried potato", "price": 5000 },
{ "id": 2, "name": "tteogbokki", "price": 6000 },
{ "id": 3, "name": "cheeseball", "price": 5000 },
{ "id": 4, "name": "cola", "price": 1000 },
{ "id": 5, "name": "cider", "price": 1200 }];

var titles = ['id', 'name', 'price'];

$(document).ready(function () {
    createTable(chicken, pizza, side);
});

function createTable(chicken, pizza, side) {
    // Titles 영역
    // var $tableTitle = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px', 'align': 'center' });
    // var $trTitle = $('<tr />');
    // titles.forEach(function (o, i, a) {
    //     $trTitle.append($('<th />').text(o));
    // });
    // $tableTitle.append($trTitle);

    //데이터 영역

    // 치킨
    var $table1 = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px', 'align': 'center' });
    var $trTitle = $('<tr />');
    titles.forEach(function (o, i, a) {
        $trTitle.append($('<th />').text(o));
    });
    $table1.append($trTitle);

    chicken.forEach(function (o) {
        $tr = $('<tr />');
            titles.forEach(function (f) { //필드
                $tr.append($('<td />').text(o[f]));
            });
            $table1.append($tr);
    });

    // 피자
    var $table2 = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px', 'align': 'center' });
    var $trTitle = $('<tr />');
    titles.forEach(function (o, i, a) {
        $trTitle.append($('<th />').text(o));
    });
    $table2.append($trTitle);

    pizza.forEach(function (o) {
        $tr = $('<tr />');
        titles.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]));
        });
        $table2.append($tr);
    });

    // 치킨
    var $table3 = $('<table />').attr({ 'border': '1', 'cellPadding': '0px', 'cellSpacing': '0px', 'align': 'center' });
    var $trTitle = $('<tr />');
    titles.forEach(function (o, i, a) {
        $trTitle.append($('<th />').text(o));
    });
    $table3.append($trTitle);

    side.forEach(function (o) {
        $tr = $('<tr />');
        titles.forEach(function (f) { //필드
            $tr.append($('<td />').text(o[f]));
        });
        $table3.append($tr);
    });



    $('#table1').html($table1);
    $('#table2').html($table2);
    $('#table3').html($table3);

}
    // $().name ();