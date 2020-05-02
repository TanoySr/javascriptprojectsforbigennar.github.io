
	function setfocus() {
	document.calcform.x.focus();
}
function calc() {
	x = document.calcform.x.value;
 	y = calcfunc(x);
 	y = roundresult(y);
 	document.calcform.y.value = y
}
function calc_a() {
	x = document.calcform2.x.value;
 	y = calcfunc_a(x);
 	y = roundresult(y);
 	document.calcform2.y.value = y
}
function calc3() {
	x1 = document.calcform.x.value;
	x2 = document.calcform.x2.value;
 	y = calcfunc(x1,x2);
 	y = roundresult(y);
 	document.calcform.y.value = y;
}
function calc4() {
	a = document.calcform.x.value;
	b = document.calcform.x2.value;
	c = document.calcform.x3.value;
	d = b*b-4*a*c;
 	document.calcform.y0.value = roundresult(d);
 	if( d>=0 )
 	{
	 	document.calcform.y1.value = roundresult((-b+Math.sqrt(d))/(2*a));
	 	document.calcform.y2.value = roundresult((-b-Math.sqrt(d))/(2*a));
 	}
 	else
 	{
 		re = roundresult(-b/(2*a));
 		im = roundresult(Math.sqrt(-d)/(2*a));
	 	document.calcform.y1.value = re+' + i'+im;
	 	document.calcform.y2.value = re+' - i'+im;
 	}
 	b=-b;
 	document.calcform.y3.value = '('+b.toString()+' \xb1 \u221A('+d.toString()+')) / (2\xd7'+a.toString()+')';
}
function calc5() {
	x = document.calcform.x.value;
 	y = calcfunc(x);
 	y = roundresult(y);
 	if( x>0 ) y='\u00B1'+y;
 	document.calcform.y.value = y
}
function calc6() {
	x1 = document.calcform.x.value;
	x2 = document.calcform.x2.value;
	val=x2;
	if( x2<0 ) val=-val;
 	y = calcfunc(x1,val);
 	y = roundresult(y);
 	if( x2>0 && (x1/2)==Math.round(x1/2) ) y='\u00B1'+y;
 	if( x2<0 ) {
 		if( (x1/2)==Math.round(x1/2) )
 			y='NaN';
 		else
 			y=-y;
 	}
 	document.calcform.y.value = y;
}
function roundresult(x) {
 	y = parseFloat(x);
 	y = roundnum(y,10);
 	return y;
}
function roundnum(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toPrecision(p+1);
	var y=String(m);
	i=y.indexOf('e');
	if( i==-1 )	i=y.length;
	j=y.indexOf('.');
	if( i>j && j!=-1 ) 
	{
		while(i>0)
		{
			if(y.charAt(--i)=='0')
				y = removeAt(y,i);
			else
				break;
		}
		if(y.charAt(i)=='.')
			y = removeAt(y,i);
	}
	return y;
}
function roundnum2(x,p) {
	var i;
 	var n=parseFloat(x);
	var m=n.toFixed(p);
	var y=String(m);
	i=y.length;
	j=y.indexOf('.');
	if( i>j && j!=-1 ) 
	{
		while(i>0)
		{
			if(y.charAt(--i)=='0')
				y = removeAt(y,i);
			else
				break;
		}
		if(y.charAt(i)=='.')
			y = removeAt(y,i);
	}
	return y;
}
function removeAt(s,i) {
	s = s.substring(0,i)+s.substring(i+1,s.length);
	return s;
}
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

/*
function convertbase(x,b1,b2) {
	d="0123456789ABCDEFX";
	x=x.replace(/ /,"");
	x=x.toUpperCase();
	y=0;
//	return b1+b2;
	for(i=x.length, s=1; i>=1; i--,s*=b1) {
		c = x.charAt(i-1);
		for(j=0; j<b1+1; j++) {
			if( j==b1 ) {
				y = "bad input number";
				return y;
			}
			if( c == d.charAt(j) )
				break;
		}
		y+=j*s;
	}
	x=y;
 	if( x==0 ) return "0";
 	y="";
 	for(s=1; s<=x; s*=b2);
 	if( x!=s ) s/=b2;
 	for(p=s; p>=1; p/=b2) {
 		i = Math.floor(x/p);
 		y+= d.charAt(i);
 		x-= i*p;
 	}
	return y;
}
function convertbase2(x,b1,b2) {
	x = parseInt(x, b1);
	y = x.toString(b2);
	return y;
}
*/
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

var gcd2 = function(a, b, f) {
	if( f )
	{
	    if ( b<=1 )
	        return a;
    }
    else
	{
	    if ( !b )
	        return a;
    }
    return gcd2(b, a % b, f);
};

function digits_after_period(x)
{
	f = x.toString();
	i = f.indexOf('.');
	len = f.length-i-1;
	return len;
}

function parseFraction(s)
{
	var n1=n2=0;
	var sign=n3=1;
	i = s.indexOf(' ');
	if( i==0 ) s=s.substring(1);
	i = s.indexOf('-');
	if( i==0 ) {s=s.substring(1); sign=-1;}
	i = s.indexOf(' ');
	if( i==0 ) s=s.substring(1);
	i = s.indexOf(' ');
	if( !isNaN(parseInt(s)) && isFinite(s) ) i=s.length;
	if( i!=-1 ) 
	{
		n1 = parseInt(s.substring(0,i));
		s = s.substring(i+1);
	}
	i = s.indexOf('/');
	if( i!=-1 )
	{
		n2 = parseInt(s.substring(0,i));
		s = s.substring(i+1);
		n3 = parseInt(s);
	}
	return [sign,n1,n2,n3];
}

var lastin=-1;
	var lastout=-1;
	var gcd2 = function(a, b, f) {
		if( f )
		{
		    if ( b<=1 )
		        return a;
	    }
	    else
		{
		    if ( !b )
		        return a;
	    }
	    return gcd2(b, a % b, f);
	};
	function onblur0() {
		lastin=-1;
	}
	function calcp0(i) {
		var p = document.calcform0.p0.value;
		var n = document.calcform0.n0.value;
		var h = document.calcform0.h0.value;
		var y;
		if( p=='' && n=='' ) return;
		if( p=='' && h=='' ) return;
		if( n=='' && h=='' ) return;
		if( p!='' && n!='' && h!='' && lastin==i ) {
			if( lastout==1 ) p='';
			if( lastout==2 ) n='';
			if( lastout==3 ) h='';
		}
		if( p=='' ) {
			lastout=1;
			y = h/n*100;
			y = roundnum(y,6);
			document.calcform0.p0.value = y;
		}
		if( n=='' ) {
			lastout=2;
			y = h/p*100;
			y = roundnum(y,6);
			document.calcform0.n0.value = y;
		}
		if( h=='' ) {
			lastout=3;
			y = p/100*n;
			y = roundnum(y,6);
			document.calcform0.h0.value = y;
		}
		lastin = i;
		//out = a+'% \u00D7 '+b+' = ';
		//out+= '('+a+'/100)'+' \u00D7 '+b+' = '+y;
		//document.calcform0.out0.value = out;
		//row1.style.display = '';
	}
	function calcp1() {
		var row1 = document.getElementById("pf1");
		//var row2 = document.getElementById("pf2");
		a = document.calcform1.a.value;
		b = document.calcform1.b.value;
		y = a*b/100;
		y = roundnum(y,6);
		document.calcform1.result1.value = y;
		out = a+'% \u00D7 '+b+' = ';
		out+= '('+a+'/100)'+' \u00D7 '+b+' = '+y;
		document.calcform1.out1.value = out;
		row1.style.display = '';
	}
	function calcp2() {
		var row1 = document.getElementById("pf3");
		a = document.calcform2.c.value;
		b = document.calcform2.d.value;
		y = a*100/b;
		y = roundnum(y,6);
		document.calcform2.result2.value = y;
		out = '('+a+' / '+b+') \u00D7 100%'+' = '+y+'%';;
		document.calcform2.out2.value = out;
		row1.style.display = '';
	}
	function calcp3() {
		var row1 = document.getElementById("pf5");
		a = document.calcform3.x3.value;
		b = document.calcform3.y3.value;
		y = a/b*100;
		y = roundnum(y,6);
		document.calcform3.result3.value = y;
		out = a+' / '+b+'% = ';
		out += '('+a+' / '+b+') \u00D7 100 = '+y;
		document.calcform3.out3.value = out;
		row1.style.display = '';
	}
	function calcp4() {
		var row1 = document.getElementById("pf7");
		a = document.calcform4.e.value;
		b = document.calcform4.f.value;
		y = (b-a)/a*100;
		y = roundnum(y,6);
		document.calcform4.result4.value = y;
		out = '[('+b+' - '+a+') / '+a+'] \u00D7 100% = '+y+'%';
		document.calcform4.out4.value = out;
		row1.style.display = '';
	}
	function convert() {
		var percent = document.calcform5.c1.value;
		var num = document.calcform5.c2.value;
		var den = document.calcform5.c3.value;
		var dec = document.calcform5.c4.value;
		if( percent!="" ) {
			var sign = '';
			var sign2 = '+';
			x = percent;
			x2 = parseFloat(x/100);
			var absx=Math.abs(x2);
			//var y=Math.floor(absx);
			var y=0;
			var frac=roundresult(absx-y);
			if( x2<0 ) sign = sign2 = '-';
			d = digits_after_period(absx);
			den = Math.round(Math.pow(10,d));
			num = Math.round(frac*den);
			var len=num.toString().length;
			var f=false;
			if( len>8 ) f=true;
			g = gcd2(num,den,f);
			num2 = Math.round(num/g);
			den2 = Math.round(den/g);
			document.calcform5.c2.value = num2;
			document.calcform5.c3.value = den2;
			document.calcform5.c4.value = roundresult(x2);
		} else if( num!="" && den!="" ) {
			x = num/den;
			document.calcform5.c1.value = roundresult(x*100);
			document.calcform5.c4.value = roundresult(x);
		} else {
			var sign = '';
			var sign2 = '+';
			x = dec;
			x2 = parseFloat(x);
			var absx=Math.abs(x2);
			//var y=Math.floor(absx);
			var y=0;
			var frac=roundresult(absx-y);
			if( x2<0 ) sign = sign2 = '-';
			d = digits_after_period(absx);
			den = Math.round(Math.pow(10,d));
			num = Math.round(frac*den);
			var len=num.toString().length;
			var f=false;
			if( len>8 ) f=true;
			g = gcd2(num,den,f);
			num2 = Math.round(num/g);
			den2 = Math.round(den/g);
			document.calcform5.c2.value = num2;
			document.calcform5.c3.value = den2;
			document.calcform5.c1.value = roundresult(x2*100);
		}
			
	}
	function reset1() {
		var row1 = document.getElementById("pf1");
		row1.style.display = 'none';
	}
	function reset2() {
		var row1 = document.getElementById("pf3");
		row1.style.display = 'none';
	}
	function reset3() {
		var row1 = document.getElementById("pf5");
		row1.style.display = 'none';
	}
	function reset4() {
		var row1 = document.getElementById("pf7");
		row1.style.display = 'none';
	}
