var a = " DIE";
var b = " IN HELL";
// alert( 'Death in the hell!' + a + b );
var i;
for(i = 0; i<3; i++) {
    a += i;
}
alert("What the fuck " + a);

var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3

var a;
var b;