var num = 'Hello';
document.write(num);
console.log(num);
window.alert(num);

var num1, num2, num3;
num1 = 10;
num2 = 20;
num3 = num1 + num2;
document.write('<br>으' + num3 + '아');

var titleAry = ['이름', '국어', '영어', '수학'];
var nameAry = ['hong', 'kim', 'park'];

document.write('<table border="1">');
document.write('<tr>');
for (var i = 0; i < titleAry.length; i++) {
    document.write('<th>' + titleAry[i] + '</th>')
}
document.write('</tr>');
for (var j = 0; j < nameAry.length; j++) {
    document.write('<tr>');
    document.write('<td style="background-color : yellow;>'+nameAry[j]+'</td>');
    for (var i = 0; i < 3; i++) {
        document.write('<td>');
        document.write(i+10);
        document.write('</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
