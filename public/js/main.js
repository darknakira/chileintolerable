/*! chileintolerable 2015-01-19 */
// threejs.org/license
'use strict';var THREE={REVISION:"70"};"object"===typeof module&&(module.exports=THREE);void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:0});THREE.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;
THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.MinEquation=103;THREE.MaxEquation=104;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;
THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=300;THREE.CubeReflectionMapping=301;THREE.CubeRefractionMapping=302;THREE.EquirectangularReflectionMapping=303;THREE.EquirectangularRefractionMapping=304;THREE.SphericalReflectionMapping=305;THREE.RepeatWrapping=1E3;
THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;
THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;THREE.RGBEFormat=THREE.RGBAFormat;THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.RGB_PVRTC_4BPPV1_Format=2100;THREE.RGB_PVRTC_2BPPV1_Format=2101;THREE.RGBA_PVRTC_4BPPV1_Format=2102;THREE.RGBA_PVRTC_2BPPV1_Format=2103;
THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};
THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElement("canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],n=c+f+b;0<n?(c=.5/Math.sqrt(n+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,n=b._w;this._x=c*n+f*g+d*k-e*h;this._y=d*n+f*h+e*g-c*k;this._z=e*n+f*k+c*h-d*g;this._w=f*n-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(.001>Math.abs(k))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=
Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,
b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=
this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+
c;this.x=a.array[b];this.y=a.array[b+1];return this},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=
a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,
c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=
(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,n=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-n*-f;this.y=k*a+b*-f+n*-e-h*-g;this.z=n*a+b*-g+h*-f-k*-e;return this},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a)}}(),unproject:function(){var a;return function(b){void 0===
a&&(a=new THREE.Matrix4);a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>
a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,
b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);
return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/
b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},
projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());
return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,
b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===
this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};
THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=
this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},
setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var n=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+n-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;n=(n+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>n?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>n?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),
b=d/c,d=k/c):.01>n?(c=b=.707106781,d=0):(d=Math.sqrt(n),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+n-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);
return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);
return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);
return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=
this.z;a[b+3]=this.w;return a},fromAttribute:function(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],n=e[9],p=e[2],q=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-n,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(n,-1,1)),.99999>Math.abs(n)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,
k)):(this._y=Math.atan2(-p,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(q,-1,1)),.99999>Math.abs(q)?(this._y=Math.atan2(-p,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(p,-1,1)),.99999>Math.abs(p)?(this._x=Math.atan2(q,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-n,k),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=
Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-n,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4);a.makeRotationFromQuaternion(b);this.setFromRotationMatrix(a,c,d);return this}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,
b||this._order)},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,
this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var f=e.vertices,e=0,g=f.length;e<g;e++)a.copy(f[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);else if(e instanceof THREE.BufferGeometry&&void 0!==e.attributes.position)for(f=e.attributes.position.array,e=0,g=f.length;e<g;e+=3)a.set(f[e],f[e+1],f[e+2]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},
makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-
this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var n=this.elements;n[0]=a;n[3]=b;n[6]=c;n[1]=d;n[4]=e;n[7]=f;n[2]=g;n[5]=h;n[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){return(new THREE.Matrix3).fromArray(this.elements)}};
THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,n,p,q,m,t,s,r){var u=this.elements;u[0]=a;u[4]=b;u[8]=c;u[12]=d;u[1]=e;u[5]=f;u[9]=g;u[13]=h;u[2]=k;u[6]=n;u[10]=p;u[14]=q;u[3]=m;u[7]=t;u[11]=s;u[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){var d=this.elements;a.set(d[0],d[1],d[2]);b.set(d[4],d[5],d[6]);c.set(d[8],d[9],d[10]);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),
f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*
e,n=c*h,p=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+n*d;b[5]=a-p*d;b[9]=-c*g;b[2]=p-a*d;b[6]=n+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,n=d*h,p=d*e,b[0]=a+p*c,b[4]=n*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-n,b[6]=p+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,n=d*h,p=d*e,b[0]=a-p*c,b[4]=-f*e,b[8]=n+k*c,b[1]=k+n*c,b[5]=f*h,b[9]=p-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,n=c*h,p=c*e,b[0]=g*h,b[4]=n*d-k,b[8]=a*d+p,b[1]=g*e,b[5]=p*d+a,b[9]=k*d-n,b[2]=-d,b[6]=c*g,b[10]=f*g):
"YZX"===a.order?(a=f*g,k=f*d,n=c*g,p=c*d,b[0]=g*h,b[4]=p-a*e,b[8]=n*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+n,b[10]=a-p*e):"XZY"===a.order&&(a=f*g,k=f*d,n=c*g,p=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+p,b[5]=f*h,b[9]=k*e-n,b[2]=n*e-k,b[6]=c*h,b[10]=p*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},
makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var n=c*h,c=c*k,p=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(p+e);b[4]=n-f;b[8]=c+h;b[1]=n+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+p);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,
c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],
k=c[12],n=c[1],p=c[5],q=c[9],m=c[13],t=c[2],s=c[6],r=c[10],u=c[14],v=c[3],y=c[7],C=c[11],c=c[15],x=d[0],F=d[4],z=d[8],G=d[12],E=d[1],w=d[5],D=d[9],A=d[13],U=d[2],M=d[6],K=d[10],L=d[14],N=d[3],T=d[7],Q=d[11],d=d[15];e[0]=f*x+g*E+h*U+k*N;e[4]=f*F+g*w+h*M+k*T;e[8]=f*z+g*D+h*K+k*Q;e[12]=f*G+g*A+h*L+k*d;e[1]=n*x+p*E+q*U+m*N;e[5]=n*F+p*w+q*M+m*T;e[9]=n*z+p*D+q*K+m*Q;e[13]=n*G+p*A+q*L+m*d;e[2]=t*x+s*E+r*U+u*N;e[6]=t*F+s*w+r*M+u*T;e[10]=t*z+s*D+r*K+u*Q;e[14]=t*G+s*A+r*L+u*d;e[3]=v*x+y*E+C*U+c*N;e[7]=v*F+
y*w+C*M+c*T;e[11]=v*z+y*D+C*K+c*Q;e[15]=v*G+y*A+C*L+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=
a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");
return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],n=a[2],p=a[6],q=a[10],m=a[14];return a[3]*(+e*h*p-d*k*p-e*g*q+c*k*q+d*g*m-c*h*m)+a[7]*(+b*h*m-b*k*q+e*f*q-d*f*m+d*k*n-e*h*n)+a[11]*(+b*k*p-b*g*m-e*f*p+c*f*m+e*g*n-c*k*n)+a[15]*(-d*g*n-b*h*p+b*g*q+d*f*p-c*f*q+c*h*n)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];
a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=
this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],n=d[5],p=d[9],q=d[13],m=d[2],t=d[6],s=d[10],r=d[14],u=d[3],v=d[7],y=d[11],d=d[15];c[0]=p*r*v-q*s*v+q*t*y-n*r*y-p*t*d+n*s*d;c[4]=h*s*v-g*r*v-h*t*y+f*r*y+g*t*d-f*s*d;c[8]=g*q*v-h*p*v+h*n*y-f*q*y-g*n*d+f*p*d;c[12]=h*p*t-g*q*t-h*n*s+f*q*s+g*n*r-f*p*r;c[1]=q*s*u-p*r*u-q*m*y+
k*r*y+p*m*d-k*s*d;c[5]=g*r*u-h*s*u+h*m*y-e*r*y-g*m*d+e*s*d;c[9]=h*p*u-g*q*u-h*k*y+e*q*y+g*k*d-e*p*d;c[13]=g*q*m-h*p*m+h*k*s-e*q*s-g*k*r+e*p*r;c[2]=n*r*u-q*t*u+q*m*v-k*r*v-n*m*d+k*t*d;c[6]=h*t*u-f*r*u-h*m*v+e*r*v+f*m*d-e*t*d;c[10]=f*q*u-h*n*u+h*k*v-e*q*v-f*k*d+e*n*d;c[14]=h*n*m-f*q*m-h*k*t+e*q*t+f*k*r-e*n*r;c[3]=p*t*u-n*s*u-p*m*v+k*s*v+n*m*y-k*t*y;c[7]=f*s*u-g*t*u+g*m*v-e*s*v-f*m*y+e*t*y;c[11]=g*n*u-f*p*u-g*k*v+e*p*v+f*k*y-e*n*y;c[15]=f*p*m-g*n*m+g*k*t-e*p*t-f*k*s+e*n*s;c=e*c[0]+k*c[4]+m*c[8]+u*c[12];
if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.warn("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.warn("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.warn("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.warn("THREE.Matrix4: .rotateZ() has been removed.")},
rotateByAxis:function(a,b){console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,
1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,n=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*
g+d*h,n*g+c,n*h-d*f,0,k*h-d*g,n*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];
c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,n=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=n;b.elements[9]*=n;b.elements[10]*=n;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;
g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(.5*a));var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,n=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/n;g[14]=-((f+e)/n);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],
a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){return(new THREE.Matrix4).fromArray(this.elements)}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);
b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),n=c.dot(this.direction),p=-c.dot(b),q=c.lengthSq(),m=Math.abs(1-k*k),t;0<m?(d=k*p-n,e=k*n-p,t=h*m,0<=d?e>=-t?e<=t?(h=1/m,d*=h,e*=h,k=d*(d+k*e+2*n)+e*(k*d+e+2*p)+q):(e=h,d=Math.max(0,-(k*e+n)),k=-d*d+e*(e+2*p)+q):(e=-h,d=Math.max(0,-(k*e+n)),k=-d*d+e*(e+2*p)+q):e<=-t?(d=Math.max(0,-(-k*h+n)),e=0<d?-h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q):e<=t?(d=0,e=Math.min(Math.max(-h,-p),h),k=e*(e+
2*p)+q):(d=Math.max(0,-(k*h+n)),e=0<d?h:Math.min(Math.max(-h,-p),h),k=-d*d+e*(e+2*p)+q)):(e=0<k?-h:h,d=Math.max(0,-(k*e+n)),k=-d*d+e*(e+2*p)+q);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k}}(),isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;
if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},
isIntersectionBox:function(){var a=new THREE.Vector3;return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*
g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));
if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],n=c[7],p=c[8],q=c[9],m=c[10],t=c[11],s=c[12],r=c[13],u=c[14],c=c[15];b[0].setComponents(f-a,n-g,t-p,c-s).normalize();b[1].setComponents(f+
a,n+g,t+p,c+s).normalize();b[2].setComponents(f+d,n+h,t+q,c+r).normalize();b[3].setComponents(f-d,n-h,t-q,c-r).normalize();b[4].setComponents(f-e,n-k,t-m,c-u).normalize();b[5].setComponents(f+e,n+k,t+m,c+u).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return Math.floor(this.randFloat(a,b))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(){var a=Math.PI/180;return function(b){return b*a}}(),radToDeg:function(){var a=
180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,n,p,q,m;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+
2;n=this.points[c[0]];p=this.points[c[1]];q=this.points[c[2]];m=this.points[c[3]];h=g*g;k=g*h;d.x=b(n.x,p.x,q.x,m.x,g,h,k);d.y=b(n.y,p.y,q.y,m.y,g,h,k);d.z=b(n.z,p.z,q.z,m.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,m=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=m.chunks[b]-m.chunks[b-1];g=Math.ceil(a*c/m.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var n=d*k-e*e;h=h||new THREE.Vector3;if(0==n)return h.set(-2,-1,-1);n=1/n;k=(k*f-e*g)*n;d=(d*g-e*f)*n;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(b,c){c instanceof a.PerspectiveCamera?
(this.ray.origin.copy(c.position),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(c.position).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,-1).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,e){var f=[];c(a,this,f,e);f.sort(b);return f},intersectObjects:function(a,e){var f=[];if(!1===a instanceof Array)return console.log("THREE.Raycaster.intersectObjects: objects is not an Array."),
f;for(var g=0,h=a.length;g<h;g++)c(a[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,
value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d}});this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add:",
a,"can't be added as a child of itself."),this;a instanceof THREE.Object3D?(void 0!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add:",a,"is not an instance of THREE.Object3D.");return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=void 0,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getChildByName:function(a,
b){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},getObjectById:function(a,b){return this.getObjectByProperty("id",a,b)},getObjectByName:function(a,b){return this.getObjectByProperty("name",a,b)},getObjectByProperty:function(a,b,c){if(this[a]===b)return this;for(var d=0,e=this.children.length;d<e;d++){var f=this.children[d].getObjectByProperty(a,b,c);if(void 0!==f)return f}},getWorldPosition:function(a){a=a||new THREE.Vector3;
this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){c=c||new THREE.Quaternion;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Euler;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new THREE.Vector3,b=new THREE.Quaternion;
return function(c){c=c||new THREE.Vector3;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<
c;b++)this.children[b].traverseVisible(a)}},traverseAncestors:function(a){this.parent&&(a(this.parent),this.parent.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},toJSON:function(){var a={metadata:{version:4.3,type:"Object",generator:"ObjectExporter"}},b={},c=function(c){void 0===a.geometries&&(a.geometries=[]);if(void 0===b[c.uuid]){var d=c.toJSON();delete d.metadata;b[c.uuid]=d;a.geometries.push(d)}return c.uuid},d={},e=function(b){void 0===a.materials&&(a.materials=[]);if(void 0===d[b.uuid]){var c=b.toJSON();delete c.metadata;d[b.uuid]=c;
a.materials.push(c)}return b.uuid},f=function(a){var b={};b.uuid=a.uuid;b.type=a.type;""!==a.name&&(b.name=a.name);"{}"!==JSON.stringify(a.userData)&&(b.userData=a.userData);!0!==a.visible&&(b.visible=a.visible);a instanceof THREE.PerspectiveCamera?(b.fov=a.fov,b.aspect=a.aspect,b.near=a.near,b.far=a.far):a instanceof THREE.OrthographicCamera?(b.left=a.left,b.right=a.right,b.top=a.top,b.bottom=a.bottom,b.near=a.near,b.far=a.far):a instanceof THREE.AmbientLight?b.color=a.color.getHex():a instanceof
THREE.DirectionalLight?(b.color=a.color.getHex(),b.intensity=a.intensity):a instanceof THREE.PointLight?(b.color=a.color.getHex(),b.intensity=a.intensity,b.distance=a.distance):a instanceof THREE.SpotLight?(b.color=a.color.getHex(),b.intensity=a.intensity,b.distance=a.distance,b.angle=a.angle,b.exponent=a.exponent):a instanceof THREE.HemisphereLight?(b.color=a.color.getHex(),b.groundColor=a.groundColor.getHex()):a instanceof THREE.Mesh?(b.geometry=c(a.geometry),b.material=e(a.material)):a instanceof
THREE.Line?(b.geometry=c(a.geometry),b.material=e(a.material)):a instanceof THREE.Sprite&&(b.material=e(a.material));b.matrix=a.matrix.toArray();if(0<a.children.length){b.children=[];for(var d=0;d<a.children.length;d++)b.children.push(f(a.children[d]))}return b};a.object=f(this);return a},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.rotationAutoUpdate=
this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);
THREE.Object3DIdCount=0;THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b;this.needsUpdate=!1};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d]},set:function(a){this.array.set(a);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,b,c){a*=this.itemSize;
this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},clone:function(){return new THREE.BufferAttribute(new this.array.constructor(this.array),this.itemSize)}};
THREE.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.attributes={};this.attributesKeys=[];this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):(this.attributes[a]=b,this.attributesKeys=Object.keys(this.attributes))},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=
this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0)},center:function(){},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var n=
new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(n,3));if(f!==THREE.NoColors){var p=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(p,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uv",new THREE.BufferAttribute(q,2))}for(var m=0,t=0,s=0;m<d.length;m++,t+=6,s+=9){var r=d[m],u=c[r.a],v=c[r.b],y=c[r.c];k[s]=u.x;k[s+1]=u.y;k[s+2]=u.z;k[s+3]=v.x;k[s+4]=v.y;k[s+5]=v.z;k[s+6]=y.x;k[s+7]=y.y;k[s+8]=y.z;!0===h?(u=r.vertexNormals[0],
v=r.vertexNormals[1],y=r.vertexNormals[2],n[s]=u.x,n[s+1]=u.y,n[s+2]=u.z,n[s+3]=v.x,n[s+4]=v.y,n[s+5]=v.z,n[s+6]=y.x,n[s+7]=y.y,n[s+8]=y.z):(u=r.normal,n[s]=u.x,n[s+1]=u.y,n[s+2]=u.z,n[s+3]=u.x,n[s+4]=u.y,n[s+5]=u.z,n[s+6]=u.x,n[s+7]=u.y,n[s+8]=u.z);f===THREE.FaceColors?(r=r.color,p[s]=r.r,p[s+1]=r.g,p[s+2]=r.b,p[s+3]=r.r,p[s+4]=r.g,p[s+5]=r.b,p[s+6]=r.r,p[s+7]=r.g,p[s+8]=r.b):f===THREE.VertexColors&&(u=r.vertexColors[0],v=r.vertexColors[1],r=r.vertexColors[2],p[s]=u.r,p[s+1]=u.g,p[s+2]=u.b,p[s+3]=
v.r,p[s+4]=v.g,p[s+5]=v.b,p[s+6]=r.r,p[s+7]=r.g,p[s+8]=r.b);!0===g&&(r=e[0][m][0],u=e[0][m][1],v=e[0][m][2],q[t]=r.x,q[t+1]=r.y,q[t+2]=u.x,q[t+3]=u.y,q[t+4]=v.x,q[t+5]=v.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){var a=new THREE.Vector3;return function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var b=this.attributes.position.array;if(b){var c=this.boundingBox;c.makeEmpty();for(var d=0,e=b.length;d<e;d+=3)a.set(b[d],b[d+1],b[d+2]),c.expandByPoint(a)}if(void 0===
b||0===b.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')}}(),computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;
if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=
this.attributes;if(a.position){var b=a.position.array;if(void 0===a.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(b.length),3));else for(var c=a.normal.array,d=0,e=c.length;d<e;d++)c[d]=0;var c=a.normal.array,f,g,h,k=new THREE.Vector3,n=new THREE.Vector3,p=new THREE.Vector3,q=new THREE.Vector3,m=new THREE.Vector3;if(a.index)for(var t=a.index.array,s=0<this.offsets.length?this.offsets:[{start:0,count:t.length,index:0}],r=0,u=s.length;r<u;++r){e=s[r].start;f=s[r].count;
for(var v=s[r].index,d=e,e=e+f;d<e;d+=3)f=3*(v+t[d]),g=3*(v+t[d+1]),h=3*(v+t[d+2]),k.fromArray(b,f),n.fromArray(b,g),p.fromArray(b,h),q.subVectors(p,n),m.subVectors(k,n),q.cross(m),c[f]+=q.x,c[f+1]+=q.y,c[f+2]+=q.z,c[g]+=q.x,c[g+1]+=q.y,c[g+2]+=q.z,c[h]+=q.x,c[h+1]+=q.y,c[h+2]+=q.z}else for(d=0,e=b.length;d<e;d+=9)k.fromArray(b,d),n.fromArray(b,d+3),p.fromArray(b,d+6),q.subVectors(p,n),m.subVectors(k,n),q.cross(m),c[d]=q.x,c[d+1]=q.y,c[d+2]=q.z,c[d+3]=q.x,c[d+4]=q.y,c[d+5]=q.z,c[d+6]=q.x,c[d+7]=q.y,
c[d+8]=q.z;this.normalizeNormals();a.normal.needsUpdate=!0}},computeTangents:function(){function a(a,b,c){q.fromArray(d,3*a);m.fromArray(d,3*b);t.fromArray(d,3*c);s.fromArray(f,2*a);r.fromArray(f,2*b);u.fromArray(f,2*c);v=m.x-q.x;y=t.x-q.x;C=m.y-q.y;x=t.y-q.y;F=m.z-q.z;z=t.z-q.z;G=r.x-s.x;E=u.x-s.x;w=r.y-s.y;D=u.y-s.y;A=1/(G*D-E*w);U.set((D*v-w*y)*A,(D*C-w*x)*A,(D*F-w*z)*A);M.set((G*y-E*v)*A,(G*x-E*C)*A,(G*z-E*F)*A);k[a].add(U);k[b].add(U);k[c].add(U);n[a].add(M);n[b].add(M);n[c].add(M)}function b(a){xa.fromArray(e,
3*a);H.copy(xa);qa=k[a];ga.copy(qa);ga.sub(xa.multiplyScalar(xa.dot(qa))).normalize();ea.crossVectors(H,qa);ya=ea.dot(n[a]);$a=0>ya?-1:1;h[4*a]=ga.x;h[4*a+1]=ga.y;h[4*a+2]=ga.z;h[4*a+3]=$a}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,
e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&this.addAttribute("tangent",new THREE.BufferAttribute(new Float32Array(4*g),4));for(var h=this.attributes.tangent.array,k=[],n=[],p=0;p<g;p++)k[p]=new THREE.Vector3,n[p]=new THREE.Vector3;var q=new THREE.Vector3,m=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector2,r=new THREE.Vector2,u=new THREE.Vector2,v,y,C,x,F,z,G,E,w,D,A,U=new THREE.Vector3,M=new THREE.Vector3,K,L,N,T,Q;0===this.drawcalls.length&&
this.addDrawCall(0,c.length,0);var W=this.drawcalls,p=0;for(L=W.length;p<L;++p){K=W[p].start;N=W[p].count;var O=W[p].index,g=K;for(K+=N;g<K;g+=3)N=O+c[g],T=O+c[g+1],Q=O+c[g+2],a(N,T,Q)}var ga=new THREE.Vector3,ea=new THREE.Vector3,xa=new THREE.Vector3,H=new THREE.Vector3,$a,qa,ya,p=0;for(L=W.length;p<L;++p)for(K=W[p].start,N=W[p].count,O=W[p].index,g=K,K+=N;g<K;g+=3)N=O+c[g],T=O+c[g+1],Q=O+c[g+2],b(N),b(T),b(Q)}},computeOffsets:function(a){var b=a;void 0===a&&(b=65535);Date.now();a=this.attributes.index.array;
for(var c=this.attributes.position.array,d=a.length/3,e=new Uint16Array(a.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],n=0,p=0,q=new Int32Array(6),m=new Int32Array(c.length),t=new Int32Array(c.length),s=0;s<c.length;s++)m[s]=-1,t[s]=-1;for(c=0;c<d;c++){for(var r=p=0;3>r;r++)s=a[3*c+r],-1==m[s]?(q[2*r]=s,q[2*r+1]=-1,p++):m[s]<k.index?(q[2*r]=s,q[2*r+1]=-1,n++):(q[2*r]=s,q[2*r+1]=m[s]);if(g+p>k.index+b)for(k={start:f,count:0,index:g},h.push(k),p=0;6>p;p+=2)r=q[p+1],-1<r&&r<k.index&&(q[p+1]=
-1);for(p=0;6>p;p+=2)s=q[p],r=q[p+1],-1===r&&(r=g++),m[s]=r,t[r]=s,e[f++]=r-k.index,k.count++}this.reorderBuffers(e,t,g);return this.offsets=h},merge:function(a,b){if(!1===a instanceof THREE.BufferGeometry)console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},
normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e;for(e in this.attributes)"index"!=e&&(d[e]=new this.attributes[e].array.constructor(this.attributes[e].itemSize*c));for(var f=0;f<c;f++){var g=b[f];for(e in this.attributes)if("index"!=e)for(var h=this.attributes[e].array,k=this.attributes[e].itemSize,n=d[e],p=0;p<k;p++)n[f*k+p]=h[g*
k+p]}this.attributes.index.array=a;for(e in this.attributes)"index"!=e&&(this.attributes[e].array=d[e],this.attributes[e].numItems=this.attributes[e].itemSize*c)},toJSON:function(){var a={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type,data:{attributes:{}}},b=this.attributes,c=this.offsets,d=this.boundingSphere,e;for(e in b){for(var f=b[e],g=[],h=f.array,k=0,n=h.length;k<n;k++)g[k]=h[k];a.data.attributes[e]={itemSize:f.itemSize,type:f.array.constructor.name,
array:g}}0<c.length&&(a.data.offsets=JSON.parse(JSON.stringify(c)));null!==d&&(a.data.boundingSphere={center:d.center.toArray(),radius:d.radius});return a},clone:function(){var a=new THREE.BufferGeometry,b;for(b in this.attributes)a.addAttribute(b,this.attributes[b].clone());b=0;for(var c=this.offsets.length;b<c;b++){var d=this.offsets[b];a.offsets.push({start:d.start,index:d.index,count:d.count})}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=
this.tangentsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof THREE.Sphere&&this.computeBoundingSphere()},
fromBufferGeometry:function(a){for(var b=this,c=a.attributes,d=c.position.array,e=void 0!==c.index?c.index.array:void 0,f=void 0!==c.normal?c.normal.array:void 0,g=void 0!==c.color?c.color.array:void 0,h=void 0!==c.uv?c.uv.array:void 0,k=[],n=[],p=c=0;c<d.length;c+=3,p+=2)b.vertices.push(new THREE.Vector3(d[c],d[c+1],d[c+2])),void 0!==f&&k.push(new THREE.Vector3(f[c],f[c+1],f[c+2])),void 0!==g&&b.colors.push(new THREE.Color(g[c],g[c+1],g[c+2])),void 0!==h&&n.push(new THREE.Vector2(h[p],h[p+1]));p=
function(a,c,d){var e=void 0!==f?[k[a].clone(),k[c].clone(),k[d].clone()]:[],p=void 0!==g?[b.colors[a].clone(),b.colors[c].clone(),b.colors[d].clone()]:[];b.faces.push(new THREE.Face3(a,c,d,e,p));void 0!==h&&b.faceVertexUvs[0].push([n[a].clone(),n[c].clone(),n[d].clone()])};if(void 0!==e)for(c=0;c<e.length;c+=3)p(e[c],e[c+1],e[c+2]);else for(c=0;c<d.length/3;c+=3)p(c,c+1,c+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=
a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=new THREE.Vector3;a.addVectors(this.boundingBox.min,this.boundingBox.max);a.multiplyScalar(-.5);this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x,a.y,a.z));this.computeBoundingBox();return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,
g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=
0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=
e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=
this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,n,p,q,m,t,s,r,u,v=[],y=[];c=new THREE.Vector3;var C=new THREE.Vector3,x=new THREE.Vector3,F=new THREE.Vector3,z=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)v[a]=new THREE.Vector3,y[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,u=e.b,e=e.c,g=this.vertices[d],h=this.vertices[u],k=this.vertices[e],
n=f[0],p=f[1],q=f[2],f=h.x-g.x,m=k.x-g.x,t=h.y-g.y,s=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=p.x-n.x,r=q.x-n.x,p=p.y-n.y,n=q.y-n.y,q=1/(k*n-r*p),c.set((n*f-p*m)*q,(n*t-p*s)*q,(n*h-p*g)*q),C.set((k*m-r*f)*q,(k*s-r*t)*q,(k*g-r*h)*q),v[d].add(c),v[u].add(c),v[e].add(c),y[d].add(C),y[u].add(C),y[e].add(C);C=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)z.copy(e.vertexNormals[c]),d=e[C[c]],u=v[d],x.copy(u),x.sub(z.multiplyScalar(z.dot(u))).normalize(),
F.crossVectors(e.vertexNormals[c],u),d=F.dot(y[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(x.x,x.y,x.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);
this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,n=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var p=0,q=g.length;p<q;p++){var m=g[p].clone();void 0!==b&&m.applyMatrix4(b);f.push(m)}p=0;for(q=k.length;p<
q;p++){var g=k[p],t,s=g.vertexNormals,r=g.vertexColors,m=new THREE.Face3(g.a+e,g.b+e,g.c+e);m.normal.copy(g.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(f=s.length;b<f;b++)t=s[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),m.vertexNormals.push(t);m.color.copy(g.color);b=0;for(f=r.length;b<f;b++)t=r[b],m.vertexColors.push(t.clone());m.materialIndex=g.materialIndex+c;h.push(m)}p=0;for(q=a.length;p<q;p++)if(c=a[p],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());
n.push(d)}}},mergeMesh:function(a){!1===a instanceof THREE.Mesh?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<
g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==n[b])return n[b];n[b]=k.length/3;k.push(a.x,a.y,
a.z);return n[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==q[b])return q[b];q[b]=p.length;p.push(a.getHex());return q[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==t[b])return t[b];t[b]=m.length/2;m.push(a.x,a.y);return t[b]}var e={metadata:{version:4,type:"BufferGeometry",generator:"BufferGeometryExporter"},uuid:this.uuid,type:this.type};""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==
f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],k=[],n={},p=[],q={},m=[],t={};for(g=0;g<this.faces.length;g++){var s=this.faces[g],r=void 0!==this.faceVertexUvs[0][g],u=0<s.normal.length(),v=0<s.vertexNormals.length,y=1!==s.color.r||1!==s.color.g||1!==s.color.b,C=0<s.vertexColors.length,x=0,x=a(x,0,0),x=a(x,1,!1),x=a(x,2,!1),x=a(x,3,r),x=a(x,4,u),x=a(x,5,v),x=a(x,6,y),x=a(x,7,C);h.push(x);h.push(s.a,s.b,s.c);r&&(r=this.faceVertexUvs[0][g],
h.push(d(r[0]),d(r[1]),d(r[2])));u&&h.push(b(s.normal));v&&(u=s.vertexNormals,h.push(b(u[0]),b(u[1]),b(u[2])));y&&h.push(c(s.color));C&&(s=s.vertexColors,h.push(c(s[0]),c(s[1]),c(s[2])))}e.data={};e.data.vertices=f;e.data.normals=k;0<p.length&&(e.data.colors=p);0<m.length&&(e.data.uvs=[m]);e.data.faces=h;return e},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());c=0;
for(d=this.faceVertexUvs.length;c<d;c++){b=this.faceVertexUvs[c];void 0===a.faceVertexUvs[c]&&(a.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,n=g.length;k<n;k++)h.push(g[k].clone());a.faceVertexUvs[c].push(h)}}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;
THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion;return function(b){b=b||new THREE.Vector3;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();
THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));
this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,m=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=
1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=m;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;
THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;this.projectionMatrix.makeOrthographic(c-a,c+a,d+b,d-b,this.near,this.far)};
THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.zoom=1;this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){var a=THREE.Math.radToDeg(2*Math.atan(Math.tan(.5*THREE.Math.degToRad(this.fov))/this.zoom));if(this.fullWidth){var b=this.fullWidth/this.fullHeight,a=Math.tan(THREE.Math.degToRad(.5*a))*this.near,c=-a,d=b*c,b=Math.abs(b*a-d),c=Math.abs(a-c);this.projectionMatrix.makeFrustum(d+this.x*b/this.fullWidth,d+(this.x+this.width)*b/this.fullWidth,a-(this.y+this.height)*c/this.fullHeight,a-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(a,
this.aspect,this.near,this.far)};THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.zoom=this.zoom;a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;a.projectionMatrix.copy(this.projectionMatrix);return a};THREE.Light=function(a){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.constructor=THREE.Light;
THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a);this.type="AmbientLight"};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.constructor=THREE.AmbientLight;THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.type="AreaLight";this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=.5;this.quadraticAttenuation=.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.AreaLight.prototype.constructor=THREE.AreaLight;
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.type="DirectionalLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;
this.shadowCascadeOffset=new THREE.Vector3(0,0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,.99,.998];this.shadowCascadeFarZ=[.99,.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight.prototype.constructor=THREE.DirectionalLight;
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.type="HemisphereLight";this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.constructor=THREE.HemisphereLight;
THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.type="PointLight";this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.constructor=THREE.PointLight;
THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.type="SpotLight";this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=
this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.constructor=THREE.SpotLight;
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=
this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache=function(){this.files={}};THREE.Cache.prototype={constructor:THREE.Cache,add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,r){var u=b+e,v,y=THREE.Loader.Handlers.get(u);null!==y?v=y.load(u):(v=new THREE.Texture,y=f.imageLoader,y.crossOrigin=f.crossOrigin,y.load(u,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);v.image=e}else v.image=a;v.needsUpdate=!0}));v.sourceFile=e;g&&(v.repeat.set(g[0],g[1]),1!==g[0]&&(v.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(v.wrapT=THREE.RepeatWrapping));h&&v.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(v.wrapS=e[k[0]]),void 0!==e[k[1]]&&(v.wrapT=e[k[1]]));r&&(v.anisotropy=r);a[d]=v}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)h.transparent=a.transparent;void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===
a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorAmbient&&(h.ambient=e(a.colorAmbient));a.colorEmissive&&(h.emissive=e(a.colorEmissive));a.transparency&&(h.opacity=a.transparency);a.specularCoef&&(h.shininess=a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,
a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&
b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormalFactor&&(h.normalScale=new THREE.Vector2(a.mapNormalFactor,a.mapNormalFactor));g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};
THREE.XHRLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){e.cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),void 0!==b&&f.addEventListener("load",function(c){e.cache.add(a,this);b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.constructor=THREE.JSONLoader;THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);if(void 0!==h.metadata&&"scene"===h.metadata.type){console.error('THREE.JSONLoader: "'+b+'" seems to be a Scene. Use THREE.SceneLoader instead.');return}h=a.parse(h,d);c(h.geometry,h.materials)}else console.error('THREE.JSONLoader: "'+b+'" seems to be unreachable or the file is empty.');
a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load \""+b+'" ('+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,n,p,q,m,t,s,r,u,v,y=a.faces;p=a.vertices;var C=a.normals,x=a.colors,F=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&F++;for(d=0;d<F;d++)c.faceVertexUvs[d]=[]}k=0;for(n=p.length;k<n;)d=new THREE.Vector3,d.x=p[k++]*b,d.y=p[k++]*b,d.z=p[k++]*b,c.vertices.push(d);k=0;for(n=y.length;k<n;)if(b=y[k++],t=b&1,h=b&2,d=b&8,q=b&16,s=b&32,p=b&64,b&=128,t){t=new THREE.Face3;
t.a=y[k];t.b=y[k+1];t.c=y[k+3];r=new THREE.Face3;r.a=y[k+1];r.b=y[k+2];r.c=y[k+3];k+=4;h&&(h=y[k++],t.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<F;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)m=y[k++],v=u[2*m],m=u[2*m+1],v=new THREE.Vector2(v,m),2!==g&&c.faceVertexUvs[d][h].push(v),0!==g&&c.faceVertexUvs[d][h+1].push(v);q&&(q=3*y[k++],t.normal.set(C[q++],C[q++],C[q]),r.normal.copy(t.normal));if(s)for(d=0;4>d;d++)q=3*y[k++],s=new THREE.Vector3(C[q++],
C[q++],C[q]),2!==d&&t.vertexNormals.push(s),0!==d&&r.vertexNormals.push(s);p&&(p=y[k++],p=x[p],t.color.setHex(p),r.color.setHex(p));if(b)for(d=0;4>d;d++)p=y[k++],p=x[p],2!==d&&t.vertexColors.push(new THREE.Color(p)),0!==d&&r.vertexColors.push(new THREE.Color(p));c.faces.push(t);c.faces.push(r)}else{t=new THREE.Face3;t.a=y[k++];t.b=y[k++];t.c=y[k++];h&&(h=y[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<F;d++)for(u=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)m=y[k++],v=u[2*m],m=u[2*m+1],
v=new THREE.Vector2(v,m),c.faceVertexUvs[d][h].push(v);q&&(q=3*y[k++],t.normal.set(C[q++],C[q++],C[q]));if(s)for(d=0;3>d;d++)q=3*y[k++],s=new THREE.Vector3(C[q++],C[q++],C[q]),t.vertexNormals.push(s);p&&(p=y[k++],t.color.setHex(x[p]));if(b)for(d=0;3>d;d++)p=y[k++],t.vertexColors.push(new THREE.Color(x[p]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+
"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,n,p;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],n=c.morphTargets[d].vertices,p=a.morphTargets[d].vertices,h=0,k=p.length;h<k;h+=3){var q=new THREE.Vector3;q.x=p[h]*b;q.y=p[h+1]*b;q.z=p[h+2]*b;n.push(q)}}if(void 0!==a.morphColors)for(d=
0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,n=a.morphColors[d].colors,b=0,h=n.length;b<h;b+=3)p=new THREE.Color(16755200),p.setRGB(n[b],n[b+1],n[b+2]),k.push(p)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};
THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d;for(d in c){var e=c[d],f=new self[e.type](e.array);b.addAttribute(d,new THREE.BufferAttribute(f,e.itemSize))}c=a.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));
a=a.boundingSphere;void 0!==a&&(c=new THREE.Vector3,void 0!==a.center&&c.fromArray(a.center),b.boundingSphere=new THREE.Sphere(c,a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);
void 0!==a.shininess&&(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&
(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);
break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=
d.parse(h.data);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,
b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,
b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.warn("THREE.ObjectLoader: Undefined geometry",b.geometry);void 0===f&&console.warn("THREE.ObjectLoader: Undefined material",b.material);e=new THREE.Mesh(e,f);break;case "Line":e=c[b.geometry];f=d[b.material];void 0===e&&console.warn("THREE.ObjectLoader: Undefined geometry",b.geometry);void 0===f&&console.warn("THREE.ObjectLoader: Undefined material",b.material);e=new THREE.Line(e,f);break;case "Sprite":f=
d[b.material];void 0===f&&console.warn("THREE.ObjectLoader: Undefined material",b.material);e=new THREE.Sprite(f);break;case "Group":e=new THREE.Group;break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=
b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(){this._parser=null};
THREE.BinaryTextureLoader.prototype={constructor:THREE.BinaryTextureLoader,load:function(a,b,c,d){var e=this,f=new THREE.DataTexture,g=new THREE.XHRLoader;g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?a.magFilter:
THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}};THREE.CompressedTextureLoader=function(){this._parser=null};
THREE.CompressedTextureLoader.prototype={constructor:THREE.CompressedTextureLoader,load:function(a,b,c){var d=this,e=[],f=new THREE.CompressedTexture;f.image=e;var g=new THREE.XHRLoader;g.setResponseType("arraybuffer");if(a instanceof Array){var h=0;c=function(c){g.load(a[c],function(a){a=d._parser(a,!0);e[c]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};h+=1;6===h&&(1==a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.format=a.format,f.needsUpdate=!0,b&&b(f))})};for(var k=0,n=
a.length;k<n;++k)c(k)}else g.load(a,function(a){a=d._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,g=0;g<c;g++){e[g]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)e[g].mipmaps.push(a.mipmaps[g*a.mipmapCount+h]),e[g].format=a.format,e[g].width=a.width,e[g].height=a.height}else f.image.width=a.width,f.image.height=a.height,f.mipmaps=a.mipmaps;1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter);f.format=a.format;f.needsUpdate=!0;b&&b(f)});return f}};
THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=
0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},toJSON:function(){var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type};""!==this.name&&
(a.name=this.name);this instanceof THREE.MeshBasicMaterial?(a.color=this.color.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshLambertMaterial?(a.color=this.color.getHex(),a.ambient=this.ambient.getHex(),a.emissive=this.emissive.getHex(),this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&
(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshPhongMaterial?(a.color=this.color.getHex(),a.ambient=this.ambient.getHex(),a.emissive=this.emissive.getHex(),a.specular=this.specular.getHex(),a.shininess=this.shininess,this.vertexColors!==THREE.NoColors&&(a.vertexColors=this.vertexColors),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshNormalMaterial?(this.shading!==
THREE.FlatShading&&(a.shading=this.shading),this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.MeshDepthMaterial?(this.blending!==THREE.NormalBlending&&(a.blending=this.blending),this.side!==THREE.FrontSide&&(a.side=this.side)):this instanceof THREE.ShaderMaterial?(a.uniforms=this.uniforms,a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader):this instanceof THREE.SpriteMaterial&&(a.color=this.color.getHex());
1>this.opacity&&(a.opacity=this.opacity);!1!==this.transparent&&(a.transparent=this.transparent);!1!==this.wireframe&&(a.wireframe=this.wireframe);return a},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=
this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);THREE.MaterialIdCount=0;
THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=
1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;
a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=
THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;
THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MeshFaceMaterial";this.materials=a instanceof Array?a:[]};
THREE.MeshFaceMaterial.prototype={constructor:THREE.MeshFaceMaterial,toJSON:function(){for(var a={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},b=0,c=this.materials.length;b<c;b++)a.materials.push(this.materials[b].toJSON());return a},clone:function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a}};
THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.type="PointCloudMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointCloudMaterial.prototype.constructor=THREE.PointCloudMaterial;
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=
this.morphTargets=this.skinning=!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial"};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};
THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};
THREE.Texture=function(a,b,c,d,e,f,g,h,k){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=
void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};
THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,n,p){THREE.Texture.call(this,null,f,g,h,k,n,d,e,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,n,p){THREE.Texture.call(this,null,f,g,h,k,n,d,e,p);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;
THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var n=this,p=function(){requestAnimationFrame(p);a.readyState===a.HAVE_ENOUGH_DATA&&(n.needsUpdate=!0)};p()};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;
THREE.Group=function(){THREE.Object3D.call(this);this.type="Group"};THREE.Group.prototype=Object.create(THREE.Object3D.prototype);THREE.Group.prototype.constructor=THREE.Group;THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.type="PointCloud";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()})};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);THREE.PointCloud.prototype.constructor=THREE.PointCloud;
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var m=c.ray.origin.distanceTo(k);
d.push({distance:m,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var n=f.attributes,p=n.position.array;if(void 0!==n.index){var n=n.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:n.length,index:0}]);for(var m=0,t=q.length;m<t;++m)for(var s=q[m].start,r=q[m].index,f=s,s=s+q[m].count;f<s;f++){var u=r+n[f];k.fromArray(p,3*u);g(k,u)}}else for(n=p.length/3,f=0;f<n;f++)k.set(p[3*f],p[3*f+1],p[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.mode=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.constructor=THREE.Line;
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)){a.getInverse(this.matrixWorld);b.copy(d.ray).applyMatrix4(a);var h=new THREE.Vector3,k=new THREE.Vector3,n=new THREE.Vector3,p=new THREE.Vector3,q=this.mode===THREE.LineStrip?1:2;if(g instanceof
THREE.BufferGeometry){var m=g.attributes;if(void 0!==m.index){var t=m.index.array,m=m.position.array,s=g.offsets;0===s.length&&(s=[{start:0,count:t.length,index:0}]);for(var r=0;r<s.length;r++)for(var u=s[r].start,v=s[r].count,y=s[r].index,g=u;g<u+v-1;g+=q){var C=y+t[g+1];h.fromArray(m,3*(y+t[g]));k.fromArray(m,3*C);C=b.distanceSqToSegment(h,k,p,n);C>f||(C=b.origin.distanceTo(p),C<d.near||C>d.far||e.push({distance:C,point:n.clone().applyMatrix4(this.matrixWorld),face:null,faceIndex:null,object:this}))}}else for(m=
m.position.array,g=0;g<m.length/3-1;g+=q)h.fromArray(m,3*g),k.fromArray(m,3*g+3),C=b.distanceSqToSegment(h,k,p,n),C>f||(C=b.origin.distanceTo(p),C<d.near||C>d.far||e.push({distance:C,point:n.clone().applyMatrix4(this.matrixWorld),face:null,faceIndex:null,object:this}))}else if(g instanceof THREE.Geometry)for(h=g.vertices,k=h.length,g=0;g<k-1;g+=q)C=b.distanceSqToSegment(h[g],h[g+1],p,n),C>f||(C=b.origin.distanceTo(p),C<d.near||C>d.far||e.push({distance:C,point:n.clone().applyMatrix4(this.matrixWorld),
face:null,faceIndex:null,object:this}))}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.mode));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.constructor=THREE.Mesh;THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var n=
this.material;if(void 0!==n){var p=k.attributes,q,m,t=g.precision;if(void 0!==p.index){var s=p.index.array,r=p.position.array,u=k.offsets;0===u.length&&(u=[{start:0,count:s.length,index:0}]);for(var v=0,y=u.length;v<y;++v)for(var p=u[v].start,C=u[v].index,k=p,x=p+u[v].count;k<x;k+=3){p=C+s[k];q=C+s[k+1];m=C+s[k+2];d.fromArray(r,3*p);e.fromArray(r,3*q);f.fromArray(r,3*m);var F=n.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,n.side!==THREE.DoubleSide);if(null!==F){F.applyMatrix4(this.matrixWorld);
var z=g.ray.origin.distanceTo(F);z<t||z<g.near||z>g.far||h.push({distance:z,point:F,face:new THREE.Face3(p,q,m,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this})}}}else for(r=p.position.array,s=k=0,x=r.length;k<x;k+=3,s+=9)p=k,q=k+1,m=k+2,d.fromArray(r,s),e.fromArray(r,s+3),f.fromArray(r,s+6),F=n.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,n.side!==THREE.DoubleSide),null!==F&&(F.applyMatrix4(this.matrixWorld),z=g.ray.origin.distanceTo(F),z<t||z<g.near||z>
g.far||h.push({distance:z,point:F,face:new THREE.Face3(p,q,m,THREE.Triangle.normal(d,e,f)),faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(s=this.material instanceof THREE.MeshFaceMaterial,r=!0===s?this.material.materials:null,t=g.precision,u=k.vertices,v=0,y=k.faces.length;v<y;v++)if(C=k.faces[v],n=!0===s?r[C.materialIndex]:this.material,void 0!==n){p=u[C.a];q=u[C.b];m=u[C.c];if(!0===n.morphTargets){F=k.morphTargets;z=this.morphTargetInfluences;d.set(0,0,0);e.set(0,0,0);f.set(0,
0,0);for(var x=0,G=F.length;x<G;x++){var E=z[x];if(0!==E){var w=F[x].vertices;d.x+=(w[C.a].x-p.x)*E;d.y+=(w[C.a].y-p.y)*E;d.z+=(w[C.a].z-p.z)*E;e.x+=(w[C.b].x-q.x)*E;e.y+=(w[C.b].y-q.y)*E;e.z+=(w[C.b].z-q.z)*E;f.x+=(w[C.c].x-m.x)*E;f.y+=(w[C.c].y-m.y)*E;f.z+=(w[C.c].z-m.z)*E}}d.add(p);e.add(q);f.add(m);p=d;q=e;m=f}F=n.side===THREE.BackSide?b.intersectTriangle(m,q,p,!0):b.intersectTriangle(p,q,m,n.side!==THREE.DoubleSide);null!==F&&(F.applyMatrix4(this.matrixWorld),z=g.ray.origin.distanceTo(F),z<t||
z<g.near||z>g.far||h.push({distance:z,point:F,face:C,faceIndex:v,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.constructor=THREE.Bone;
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){var a=new THREE.Matrix4;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,
1,1);h=0;for(k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.constructor=THREE.SkinnedMesh;THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};
THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.type="MorphAnimMesh";this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.constructor=THREE.MorphAnimMesh;THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.constructor=THREE.LOD;THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Uint16Array([0,1,2,0,2,3]),b=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),c=new Float32Array([0,0,1,0,1,1,0,1]),d=new THREE.BufferGeometry;d.addAttribute("index",new THREE.BufferAttribute(a,1));d.addAttribute("position",new THREE.BufferAttribute(b,3));d.addAttribute("uv",new THREE.BufferAttribute(c,2));return function(a){THREE.Object3D.call(this);this.type="Sprite";this.geometry=d;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();
THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.constructor=THREE.Sprite;THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Particle=THREE.Sprite;THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.constructor=THREE.LensFlare;
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)};THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=null;this.autoUpdate=!0};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.ShaderChunk={};THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.default_vertex="#ifdef USE_SKINNING\n\n\tvec4 mvPosition = modelViewMatrix * skinned;\n\n#elif defined( USE_MORPHTARGETS )\n\n\tvec4 mvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#else\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n";THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";
THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t#else\n\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t#endif\n\n\t#else\n\n\t\tvec3 reflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t#else\n\t\tfloat flipNormal = 1.0;\n\t#endif\n\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = clamp( flipNormal * reflectVec.y * 0.5 + 0.5, 0.0, 1.0);\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * 0.15915494309189533576888376337251 + 0.5; // reciprocal( 2 PI ) + 0.5\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t\t\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tenvColor.xyz *= envColor.xyz;\n\n\t#endif\n\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, envColor.xyz, specularStrength * reflectivity );\n\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\n\t\tgl_FragColor.xyz += envColor.xyz * specularStrength * reflectivity;\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex="#ifdef USE_SKINNING\n\n\tvec3 objectNormal = skinnedNormal.xyz;\n\n#elif defined( USE_MORPHNORMALS )\n\n\tvec3 objectNormal = morphedNormal;\n\n#else\n\n\tvec3 objectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\t#ifdef ENVMAP_MODE_REFLECTION\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t#else\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#elif defined( USE_MORPHTARGETS )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif\n";THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];b[c][d]=e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix4||e instanceof THREE.Texture?e.clone():e instanceof Array?e.slice():e}}return b}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:.98},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",
value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",
value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},
map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,
THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,
THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,
{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},
specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\tvNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["#define PHONG\nuniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,
THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,
"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,
"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,
"}"].join("\n")},equirect:{uniforms:{tEquirect:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",
THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = clamp( tFlip * direction.y * -0.5 + 0.5, 0.0, 1.0);\nsampleUV.x = atan( direction.z, direction.x ) * 0.15915494309189533576888376337251 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a){var b=a.geometry;a=a.material;var c=b.vertices.length;if(a.attributes){void 0===b.__webglCustomAttributesList&&(b.__webglCustomAttributesList=[]);for(var d in a.attributes){var e=a.attributes[d];if(!e.__webglInitialized||e.createUniqueBuffers){e.__webglInitialized=!0;var f=1;"v2"===e.type?f=2:"v3"===e.type?f=3:"v4"===e.type?f=4:"c"===e.type&&(f=3);e.size=f;e.array=new Float32Array(c*f);e.buffer=l.createBuffer();e.buffer.belongsToAttribute=d;e.needsUpdate=
!0}b.__webglCustomAttributesList.push(e)}}}function c(a,b){var c=b.geometry,e=a.faces3,f=3*e.length,g=1*e.length,h=3*e.length,e=d(b,a);a.__vertexArray=new Float32Array(3*f);a.__normalArray=new Float32Array(3*f);a.__colorArray=new Float32Array(3*f);a.__uvArray=new Float32Array(2*f);1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*f));c.hasTangents&&(a.__tangentArray=new Float32Array(4*f));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&(a.__skinIndexArray=new Float32Array(4*
f),a.__skinWeightArray=new Float32Array(4*f));c=null!==aa.get("OES_element_index_uint")&&21845<g?Uint32Array:Uint16Array;a.__typeArray=c;a.__faceArray=new c(3*g);a.__lineArray=new c(2*h);var k=a.numMorphTargets;if(k)for(a.__morphTargetsArrays=[],c=0;c<k;c++)a.__morphTargetsArrays.push(new Float32Array(3*f));if(k=a.numMorphNormals)for(a.__morphNormalsArrays=[],c=0;c<k;c++)a.__morphNormalsArrays.push(new Float32Array(3*f));a.__webglFaceCount=3*g;a.__webglLineCount=2*h;if(e.attributes){void 0===a.__webglCustomAttributesList&&
(a.__webglCustomAttributesList=[]);for(var m in e.attributes){var g=e.attributes[m],h={},n;for(n in g)h[n]=g[n];if(!h.__webglInitialized||h.createUniqueBuffers)h.__webglInitialized=!0,c=1,"v2"===h.type?c=2:"v3"===h.type?c=3:"v4"===h.type?c=4:"c"===h.type&&(c=3),h.size=c,h.array=new Float32Array(f*c),h.buffer=l.createBuffer(),h.buffer.belongsToAttribute=m,g.needsUpdate=!0,h.__original=g;a.__webglCustomAttributesList.push(h)}}a.__inittedArrays=!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?
a.material.materials[b.materialIndex]:a.material}function e(a,b,c,d){c=c.attributes;var e=b.attributes;b=b.attributesKeys;for(var f=0,k=b.length;f<k;f++){var m=b[f],n=e[m];if(0<=n){var p=c[m];void 0!==p?(m=p.itemSize,l.bindBuffer(l.ARRAY_BUFFER,p.buffer),g(n),l.vertexAttribPointer(n,m,l.FLOAT,!1,0,d*m*4)):void 0!==a.defaultAttributeValues&&(2===a.defaultAttributeValues[m].length?l.vertexAttrib2fv(n,a.defaultAttributeValues[m]):3===a.defaultAttributeValues[m].length&&l.vertexAttrib3fv(n,a.defaultAttributeValues[m]))}}h()}
function f(){for(var a=0,b=kb.length;a<b;a++)kb[a]=0}function g(a){kb[a]=1;0===Ma[a]&&(l.enableVertexAttribArray(a),Ma[a]=1)}function h(){for(var a=0,b=Ma.length;a<b;a++)Ma[a]!==kb[a]&&(l.disableVertexAttribArray(a),Ma[a]=0)}function k(a,b){return a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function n(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function p(a,b){return b[0]-a[0]}function q(a){if(!1!==a.visible){if(!(a instanceof THREE.Scene||a instanceof THREE.Group)){void 0===
a.__webglInit&&(a.__webglInit=!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,a.addEventListener("removed",ic));var c=a.geometry;if(void 0!==c&&void 0===c.__webglInit)if(c.__webglInit=!0,c.addEventListener("dispose",jc),c instanceof THREE.BufferGeometry)I.info.memory.geometries++;else if(a instanceof THREE.Mesh)r(a,c);else if(a instanceof THREE.Line){if(void 0===c.__webglVertexBuffer){c.__webglVertexBuffer=l.createBuffer();c.__webglColorBuffer=l.createBuffer();c.__webglLineDistanceBuffer=
l.createBuffer();I.info.memory.geometries++;var d=c.vertices.length;c.__vertexArray=new Float32Array(3*d);c.__colorArray=new Float32Array(3*d);c.__lineDistanceArray=new Float32Array(1*d);c.__webglLineCount=d;b(a);c.verticesNeedUpdate=!0;c.colorsNeedUpdate=!0;c.lineDistancesNeedUpdate=!0}}else a instanceof THREE.PointCloud&&void 0===c.__webglVertexBuffer&&(c.__webglVertexBuffer=l.createBuffer(),c.__webglColorBuffer=l.createBuffer(),I.info.memory.geometries++,d=c.vertices.length,c.__vertexArray=new Float32Array(3*
d),c.__colorArray=new Float32Array(3*d),c.__sortArray=[],c.__webglParticleCount=d,b(a),c.verticesNeedUpdate=!0,c.colorsNeedUpdate=!0);if(void 0===a.__webglActive)if(a.__webglActive=!0,a instanceof THREE.Mesh)if(c instanceof THREE.BufferGeometry)u(Fa,c,a);else{if(c instanceof THREE.Geometry)for(var c=sb[c.id],d=0,e=c.length;d<e;d++)u(Fa,c[d],a)}else a instanceof THREE.Line||a instanceof THREE.PointCloud?u(Fa,c,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&Ga.push({id:null,
object:a,opaque:null,transparent:null,z:0});if(a instanceof THREE.Light)pa.push(a);else if(a instanceof THREE.Sprite)tb.push(a);else if(a instanceof THREE.LensFlare)eb.push(a);else if((c=Fa[a.id])&&(!1===a.frustumCulled||!0===ub.intersectsObject(a)))for(d=0,e=c.length;d<e;d++){var f=c[d],g=f,h=g.object,k=g.buffer,m=h.geometry,h=h.material;h instanceof THREE.MeshFaceMaterial?(h=h.materials[m instanceof THREE.BufferGeometry?0:k.materialIndex],g.material=h,h.transparent?za.push(g):Ta.push(g)):h&&(g.material=
h,h.transparent?za.push(g):Ta.push(g));f.render=!0;!0===I.sortObjects&&(Da.setFromMatrixPosition(a.matrixWorld),Da.applyProjection(vb),f.z=Da.z)}}d=0;for(e=a.children.length;d<e;d++)q(a.children[d])}}function m(a,b,c,d,e,f){for(var g,h=0,l=a.length;h<l;h++){g=a[h];var k=g.object,m=g.buffer;G(k,b);if(f)g=f;else{g=g.material;if(!g)continue;e&&I.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);I.setDepthTest(g.depthTest);I.setDepthWrite(g.depthWrite);A(g.polygonOffset,g.polygonOffsetFactor,
g.polygonOffsetUnits)}I.setMaterialFaces(g);m instanceof THREE.BufferGeometry?I.renderBufferDirect(b,c,d,g,m,k):I.renderBuffer(b,c,d,g,m,k)}}function t(a,b,c,d,e,f,g){for(var h,l=0,k=a.length;l<k;l++){h=a[l];var m=h.object;if(m.visible){if(g)h=g;else{h=h[b];if(!h)continue;f&&I.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);I.setDepthTest(h.depthTest);I.setDepthWrite(h.depthWrite);A(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}I.renderImmediateObject(c,d,e,h,m)}}}function s(a){var b=
a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function r(a,b){var d=a.material,e=!1;if(void 0===sb[b.id]||!0===b.groupsNeedUpdate){delete Fa[a.id];for(var f=sb,g=b.id,d=d instanceof THREE.MeshFaceMaterial,h=aa.get("OES_element_index_uint")?4294967296:65535,k,e={},m=b.morphTargets.length,n=b.morphNormals.length,p,q={},r=[],t=0,s=b.faces.length;t<s;t++){k=b.faces[t];var v=d?k.materialIndex:0;v in e||(e[v]={hash:v,counter:0});k=e[v].hash+"_"+e[v].counter;
k in q||(p={id:kc++,faces3:[],materialIndex:v,vertices:0,numMorphTargets:m,numMorphNormals:n},q[k]=p,r.push(p));q[k].vertices+3>h&&(e[v].counter+=1,k=e[v].hash+"_"+e[v].counter,k in q||(p={id:kc++,faces3:[],materialIndex:v,vertices:0,numMorphTargets:m,numMorphNormals:n},q[k]=p,r.push(p)));q[k].faces3.push(t);q[k].vertices+=3}f[g]=r;b.groupsNeedUpdate=!1}f=sb[b.id];g=0;for(d=f.length;g<d;g++){h=f[g];if(void 0===h.__webglVertexBuffer){e=h;e.__webglVertexBuffer=l.createBuffer();e.__webglNormalBuffer=
l.createBuffer();e.__webglTangentBuffer=l.createBuffer();e.__webglColorBuffer=l.createBuffer();e.__webglUVBuffer=l.createBuffer();e.__webglUV2Buffer=l.createBuffer();e.__webglSkinIndicesBuffer=l.createBuffer();e.__webglSkinWeightsBuffer=l.createBuffer();e.__webglFaceBuffer=l.createBuffer();e.__webglLineBuffer=l.createBuffer();if(n=e.numMorphTargets)for(e.__webglMorphTargetsBuffers=[],m=0;m<n;m++)e.__webglMorphTargetsBuffers.push(l.createBuffer());if(n=e.numMorphNormals)for(e.__webglMorphNormalsBuffers=
[],m=0;m<n;m++)e.__webglMorphNormalsBuffers.push(l.createBuffer());I.info.memory.geometries++;c(h,a);b.verticesNeedUpdate=!0;b.morphTargetsNeedUpdate=!0;b.elementsNeedUpdate=!0;b.uvsNeedUpdate=!0;b.normalsNeedUpdate=!0;b.tangentsNeedUpdate=!0;e=b.colorsNeedUpdate=!0}else e=!1;(e||void 0===a.__webglActive)&&u(Fa,h,a)}a.__webglActive=!0}function u(a,b,c){var d=c.id;a[d]=a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function v(a){var b=a.geometry;if(b instanceof THREE.BufferGeometry)for(var e=
b.attributes,f=b.attributesKeys,g=0,h=f.length;g<h;g++){var k=f[g],m=e[k];void 0===m.buffer&&(m.buffer=l.createBuffer(),m.needsUpdate=!0);if(!0===m.needsUpdate){var n="index"===k?l.ELEMENT_ARRAY_BUFFER:l.ARRAY_BUFFER;l.bindBuffer(n,m.buffer);l.bufferData(n,m.array,l.STATIC_DRAW);m.needsUpdate=!1}}else if(a instanceof THREE.Mesh){!0===b.groupsNeedUpdate&&r(a,b);for(var p=sb[b.id],g=0,q=p.length;g<q;g++){var t=p[g],s=d(a,t);!0===b.groupsNeedUpdate&&c(t,a);var u=s.attributes&&y(s);if(b.verticesNeedUpdate||
b.morphTargetsNeedUpdate||b.elementsNeedUpdate||b.uvsNeedUpdate||b.normalsNeedUpdate||b.colorsNeedUpdate||b.tangentsNeedUpdate||u){var v=t,x=a,z=l.DYNAMIC_DRAW,G=!b.dynamic,E=s;if(v.__inittedArrays){var D=E&&void 0!==E.shading&&E.shading===THREE.SmoothShading,w=void 0,F=void 0,I=void 0,A=void 0,Q=void 0,M=void 0,K=void 0,N=void 0,O=void 0,T=void 0,U=void 0,H=void 0,L=void 0,X=void 0,W=void 0,pa=void 0,ta=void 0,Za=void 0,Fa=void 0,ga=void 0,Ta=void 0,aa=void 0,Ga=void 0,za=void 0,ha=void 0,P=void 0,
ea=void 0,fa=void 0,ma=void 0,Y=void 0,tb=void 0,qa=void 0,Da=void 0,Aa=void 0,Ha=void 0,xa=void 0,na=void 0,ab=void 0,eb=void 0,la=void 0,Na=0,Ua=0,mb=0,ya=0,Xa=0,Va=0,Ia=0,nb=0,Oa=0,ia=0,ra=0,J=0,Ba=void 0,bb=v.__vertexArray,wb=v.__uvArray,ob=v.__uv2Array,Pa=v.__normalArray,Ca=v.__tangentArray,cb=v.__colorArray,Ka=v.__skinIndexArray,La=v.__skinWeightArray,$a=v.__morphTargetsArrays,xb=v.__morphNormalsArrays,pb=v.__webglCustomAttributesList,B=void 0,db=v.__faceArray,sa=v.__lineArray,oa=x.geometry,
Sa=oa.elementsNeedUpdate,Ma=oa.uvsNeedUpdate,Ab=oa.normalsNeedUpdate,Hb=oa.tangentsNeedUpdate,Ib=oa.colorsNeedUpdate,lb=oa.morphTargetsNeedUpdate,Cb=oa.vertices,V=v.faces3,Ja=oa.faces,Wa=oa.faceVertexUvs[0],Db=oa.faceVertexUvs[1],Pb=oa.skinIndices,$=oa.skinWeights,Eb=oa.morphTargets,R=oa.morphNormals;if(oa.verticesNeedUpdate){w=0;for(F=V.length;w<F;w++)A=Ja[V[w]],H=Cb[A.a],L=Cb[A.b],X=Cb[A.c],bb[Ua]=H.x,bb[Ua+1]=H.y,bb[Ua+2]=H.z,bb[Ua+3]=L.x,bb[Ua+4]=L.y,bb[Ua+5]=L.z,bb[Ua+6]=X.x,bb[Ua+7]=X.y,bb[Ua+
8]=X.z,Ua+=9;l.bindBuffer(l.ARRAY_BUFFER,v.__webglVertexBuffer);l.bufferData(l.ARRAY_BUFFER,bb,z)}if(lb)for(Ha=0,xa=Eb.length;Ha<xa;Ha++){w=ra=0;for(F=V.length;w<F;w++)eb=V[w],A=Ja[eb],H=Eb[Ha].vertices[A.a],L=Eb[Ha].vertices[A.b],X=Eb[Ha].vertices[A.c],na=$a[Ha],na[ra]=H.x,na[ra+1]=H.y,na[ra+2]=H.z,na[ra+3]=L.x,na[ra+4]=L.y,na[ra+5]=L.z,na[ra+6]=X.x,na[ra+7]=X.y,na[ra+8]=X.z,E.morphNormals&&(D?(la=R[Ha].vertexNormals[eb],Za=la.a,Fa=la.b,ga=la.c):ga=Fa=Za=R[Ha].faceNormals[eb],ab=xb[Ha],ab[ra]=Za.x,
ab[ra+1]=Za.y,ab[ra+2]=Za.z,ab[ra+3]=Fa.x,ab[ra+4]=Fa.y,ab[ra+5]=Fa.z,ab[ra+6]=ga.x,ab[ra+7]=ga.y,ab[ra+8]=ga.z),ra+=9;l.bindBuffer(l.ARRAY_BUFFER,v.__webglMorphTargetsBuffers[Ha]);l.bufferData(l.ARRAY_BUFFER,$a[Ha],z);E.morphNormals&&(l.bindBuffer(l.ARRAY_BUFFER,v.__webglMorphNormalsBuffers[Ha]),l.bufferData(l.ARRAY_BUFFER,xb[Ha],z))}if($.length){w=0;for(F=V.length;w<F;w++)A=Ja[V[w]],za=$[A.a],ha=$[A.b],P=$[A.c],La[ia]=za.x,La[ia+1]=za.y,La[ia+2]=za.z,La[ia+3]=za.w,La[ia+4]=ha.x,La[ia+5]=ha.y,La[ia+
6]=ha.z,La[ia+7]=ha.w,La[ia+8]=P.x,La[ia+9]=P.y,La[ia+10]=P.z,La[ia+11]=P.w,ea=Pb[A.a],fa=Pb[A.b],ma=Pb[A.c],Ka[ia]=ea.x,Ka[ia+1]=ea.y,Ka[ia+2]=ea.z,Ka[ia+3]=ea.w,Ka[ia+4]=fa.x,Ka[ia+5]=fa.y,Ka[ia+6]=fa.z,Ka[ia+7]=fa.w,Ka[ia+8]=ma.x,Ka[ia+9]=ma.y,Ka[ia+10]=ma.z,Ka[ia+11]=ma.w,ia+=12;0<ia&&(l.bindBuffer(l.ARRAY_BUFFER,v.__webglSkinIndicesBuffer),l.bufferData(l.ARRAY_BUFFER,Ka,z),l.bindBuffer(l.ARRAY_BUFFER,v.__webglSkinWeightsBuffer),l.bufferData(l.ARRAY_BUFFER,La,z))}if(Ib){w=0;for(F=V.length;w<F;w++)A=
Ja[V[w]],K=A.vertexColors,N=A.color,3===K.length&&E.vertexColors===THREE.VertexColors?(Ta=K[0],aa=K[1],Ga=K[2]):Ga=aa=Ta=N,cb[Oa]=Ta.r,cb[Oa+1]=Ta.g,cb[Oa+2]=Ta.b,cb[Oa+3]=aa.r,cb[Oa+4]=aa.g,cb[Oa+5]=aa.b,cb[Oa+6]=Ga.r,cb[Oa+7]=Ga.g,cb[Oa+8]=Ga.b,Oa+=9;0<Oa&&(l.bindBuffer(l.ARRAY_BUFFER,v.__webglColorBuffer),l.bufferData(l.ARRAY_BUFFER,cb,z))}if(Hb&&oa.hasTangents){w=0;for(F=V.length;w<F;w++)A=Ja[V[w]],O=A.vertexTangents,W=O[0],pa=O[1],ta=O[2],Ca[Ia]=W.x,Ca[Ia+1]=W.y,Ca[Ia+2]=W.z,Ca[Ia+3]=W.w,Ca[Ia+
4]=pa.x,Ca[Ia+5]=pa.y,Ca[Ia+6]=pa.z,Ca[Ia+7]=pa.w,Ca[Ia+8]=ta.x,Ca[Ia+9]=ta.y,Ca[Ia+10]=ta.z,Ca[Ia+11]=ta.w,Ia+=12;l.bindBuffer(l.ARRAY_BUFFER,v.__webglTangentBuffer);l.bufferData(l.ARRAY_BUFFER,Ca,z)}if(Ab){w=0;for(F=V.length;w<F;w++)if(A=Ja[V[w]],Q=A.vertexNormals,M=A.normal,3===Q.length&&D)for(Y=0;3>Y;Y++)qa=Q[Y],Pa[Va]=qa.x,Pa[Va+1]=qa.y,Pa[Va+2]=qa.z,Va+=3;else for(Y=0;3>Y;Y++)Pa[Va]=M.x,Pa[Va+1]=M.y,Pa[Va+2]=M.z,Va+=3;l.bindBuffer(l.ARRAY_BUFFER,v.__webglNormalBuffer);l.bufferData(l.ARRAY_BUFFER,
Pa,z)}if(Ma&&Wa){w=0;for(F=V.length;w<F;w++)if(I=V[w],T=Wa[I],void 0!==T)for(Y=0;3>Y;Y++)Da=T[Y],wb[mb]=Da.x,wb[mb+1]=Da.y,mb+=2;0<mb&&(l.bindBuffer(l.ARRAY_BUFFER,v.__webglUVBuffer),l.bufferData(l.ARRAY_BUFFER,wb,z))}if(Ma&&Db){w=0;for(F=V.length;w<F;w++)if(I=V[w],U=Db[I],void 0!==U)for(Y=0;3>Y;Y++)Aa=U[Y],ob[ya]=Aa.x,ob[ya+1]=Aa.y,ya+=2;0<ya&&(l.bindBuffer(l.ARRAY_BUFFER,v.__webglUV2Buffer),l.bufferData(l.ARRAY_BUFFER,ob,z))}if(Sa){w=0;for(F=V.length;w<F;w++)db[Xa]=Na,db[Xa+1]=Na+1,db[Xa+2]=Na+
2,Xa+=3,sa[nb]=Na,sa[nb+1]=Na+1,sa[nb+2]=Na,sa[nb+3]=Na+2,sa[nb+4]=Na+1,sa[nb+5]=Na+2,nb+=6,Na+=3;l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,v.__webglFaceBuffer);l.bufferData(l.ELEMENT_ARRAY_BUFFER,db,z);l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,v.__webglLineBuffer);l.bufferData(l.ELEMENT_ARRAY_BUFFER,sa,z)}if(pb)for(Y=0,tb=pb.length;Y<tb;Y++)if(B=pb[Y],B.__original.needsUpdate){J=0;if(1===B.size)if(void 0===B.boundTo||"vertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)A=Ja[V[w]],B.array[J]=B.value[A.a],B.array[J+
1]=B.value[A.b],B.array[J+2]=B.value[A.c],J+=3;else{if("faces"===B.boundTo)for(w=0,F=V.length;w<F;w++)Ba=B.value[V[w]],B.array[J]=Ba,B.array[J+1]=Ba,B.array[J+2]=Ba,J+=3}else if(2===B.size)if(void 0===B.boundTo||"vertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)A=Ja[V[w]],H=B.value[A.a],L=B.value[A.b],X=B.value[A.c],B.array[J]=H.x,B.array[J+1]=H.y,B.array[J+2]=L.x,B.array[J+3]=L.y,B.array[J+4]=X.x,B.array[J+5]=X.y,J+=6;else{if("faces"===B.boundTo)for(w=0,F=V.length;w<F;w++)X=L=H=Ba=B.value[V[w]],
B.array[J]=H.x,B.array[J+1]=H.y,B.array[J+2]=L.x,B.array[J+3]=L.y,B.array[J+4]=X.x,B.array[J+5]=X.y,J+=6}else if(3===B.size){var S;S="c"===B.type?["r","g","b"]:["x","y","z"];if(void 0===B.boundTo||"vertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)A=Ja[V[w]],H=B.value[A.a],L=B.value[A.b],X=B.value[A.c],B.array[J]=H[S[0]],B.array[J+1]=H[S[1]],B.array[J+2]=H[S[2]],B.array[J+3]=L[S[0]],B.array[J+4]=L[S[1]],B.array[J+5]=L[S[2]],B.array[J+6]=X[S[0]],B.array[J+7]=X[S[1]],B.array[J+8]=X[S[2]],J+=9;else if("faces"===
B.boundTo)for(w=0,F=V.length;w<F;w++)X=L=H=Ba=B.value[V[w]],B.array[J]=H[S[0]],B.array[J+1]=H[S[1]],B.array[J+2]=H[S[2]],B.array[J+3]=L[S[0]],B.array[J+4]=L[S[1]],B.array[J+5]=L[S[2]],B.array[J+6]=X[S[0]],B.array[J+7]=X[S[1]],B.array[J+8]=X[S[2]],J+=9;else if("faceVertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)Ba=B.value[V[w]],H=Ba[0],L=Ba[1],X=Ba[2],B.array[J]=H[S[0]],B.array[J+1]=H[S[1]],B.array[J+2]=H[S[2]],B.array[J+3]=L[S[0]],B.array[J+4]=L[S[1]],B.array[J+5]=L[S[2]],B.array[J+6]=X[S[0]],B.array[J+
7]=X[S[1]],B.array[J+8]=X[S[2]],J+=9}else if(4===B.size)if(void 0===B.boundTo||"vertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)A=Ja[V[w]],H=B.value[A.a],L=B.value[A.b],X=B.value[A.c],B.array[J]=H.x,B.array[J+1]=H.y,B.array[J+2]=H.z,B.array[J+3]=H.w,B.array[J+4]=L.x,B.array[J+5]=L.y,B.array[J+6]=L.z,B.array[J+7]=L.w,B.array[J+8]=X.x,B.array[J+9]=X.y,B.array[J+10]=X.z,B.array[J+11]=X.w,J+=12;else if("faces"===B.boundTo)for(w=0,F=V.length;w<F;w++)X=L=H=Ba=B.value[V[w]],B.array[J]=H.x,B.array[J+1]=
H.y,B.array[J+2]=H.z,B.array[J+3]=H.w,B.array[J+4]=L.x,B.array[J+5]=L.y,B.array[J+6]=L.z,B.array[J+7]=L.w,B.array[J+8]=X.x,B.array[J+9]=X.y,B.array[J+10]=X.z,B.array[J+11]=X.w,J+=12;else if("faceVertices"===B.boundTo)for(w=0,F=V.length;w<F;w++)Ba=B.value[V[w]],H=Ba[0],L=Ba[1],X=Ba[2],B.array[J]=H.x,B.array[J+1]=H.y,B.array[J+2]=H.z,B.array[J+3]=H.w,B.array[J+4]=L.x,B.array[J+5]=L.y,B.array[J+6]=L.z,B.array[J+7]=L.w,B.array[J+8]=X.x,B.array[J+9]=X.y,B.array[J+10]=X.z,B.array[J+11]=X.w,J+=12;l.bindBuffer(l.ARRAY_BUFFER,
B.buffer);l.bufferData(l.ARRAY_BUFFER,B.array,z)}G&&(delete v.__inittedArrays,delete v.__colorArray,delete v.__normalArray,delete v.__tangentArray,delete v.__uvArray,delete v.__uv2Array,delete v.__faceArray,delete v.__vertexArray,delete v.__lineArray,delete v.__skinIndexArray,delete v.__skinWeightArray)}}}b.verticesNeedUpdate=!1;b.morphTargetsNeedUpdate=!1;b.elementsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.tangentsNeedUpdate=!1;s.attributes&&C(s)}else if(a instanceof
THREE.Line){s=d(a,b);u=s.attributes&&y(s);if(b.verticesNeedUpdate||b.colorsNeedUpdate||b.lineDistancesNeedUpdate||u){var Z=l.DYNAMIC_DRAW,Ea,ka,Bb,Fb,ba,gb,ua=b.vertices,Qb=b.colors,Rb=b.lineDistances,qb=ua.length,Sb=Qb.length,yb=Rb.length,Gb=b.__vertexArray,rb=b.__colorArray,kb=b.__lineDistanceArray,Mb=b.colorsNeedUpdate,Ob=b.lineDistancesNeedUpdate,hb=b.__webglCustomAttributesList,Ya,ib,va,Kb,Qa,ca;if(b.verticesNeedUpdate){for(Ea=0;Ea<qb;Ea++)Fb=ua[Ea],ba=3*Ea,Gb[ba]=Fb.x,Gb[ba+1]=Fb.y,Gb[ba+2]=
Fb.z;l.bindBuffer(l.ARRAY_BUFFER,b.__webglVertexBuffer);l.bufferData(l.ARRAY_BUFFER,Gb,Z)}if(Mb){for(ka=0;ka<Sb;ka++)gb=Qb[ka],ba=3*ka,rb[ba]=gb.r,rb[ba+1]=gb.g,rb[ba+2]=gb.b;l.bindBuffer(l.ARRAY_BUFFER,b.__webglColorBuffer);l.bufferData(l.ARRAY_BUFFER,rb,Z)}if(Ob){for(Bb=0;Bb<yb;Bb++)kb[Bb]=Rb[Bb];l.bindBuffer(l.ARRAY_BUFFER,b.__webglLineDistanceBuffer);l.bufferData(l.ARRAY_BUFFER,kb,Z)}if(hb)for(Ya=0,ib=hb.length;Ya<ib;Ya++)if(ca=hb[Ya],ca.needsUpdate&&(void 0===ca.boundTo||"vertices"===ca.boundTo)){ba=
0;Kb=ca.value.length;if(1===ca.size)for(va=0;va<Kb;va++)ca.array[va]=ca.value[va];else if(2===ca.size)for(va=0;va<Kb;va++)Qa=ca.value[va],ca.array[ba]=Qa.x,ca.array[ba+1]=Qa.y,ba+=2;else if(3===ca.size)if("c"===ca.type)for(va=0;va<Kb;va++)Qa=ca.value[va],ca.array[ba]=Qa.r,ca.array[ba+1]=Qa.g,ca.array[ba+2]=Qa.b,ba+=3;else for(va=0;va<Kb;va++)Qa=ca.value[va],ca.array[ba]=Qa.x,ca.array[ba+1]=Qa.y,ca.array[ba+2]=Qa.z,ba+=3;else if(4===ca.size)for(va=0;va<Kb;va++)Qa=ca.value[va],ca.array[ba]=Qa.x,ca.array[ba+
1]=Qa.y,ca.array[ba+2]=Qa.z,ca.array[ba+3]=Qa.w,ba+=4;l.bindBuffer(l.ARRAY_BUFFER,ca.buffer);l.bufferData(l.ARRAY_BUFFER,ca.array,Z);ca.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;b.lineDistancesNeedUpdate=!1;s.attributes&&C(s)}else if(a instanceof THREE.PointCloud){s=d(a,b);u=s.attributes&&y(s);if(b.verticesNeedUpdate||b.colorsNeedUpdate||u){var jb=l.DYNAMIC_DRAW,Tb,Ub,$b,ja,ac,ub=b.vertices,vb=ub.length,Nb=b.colors,Vb=Nb.length,bc=b.__vertexArray,cc=b.__colorArray,Wb=b.colorsNeedUpdate,
Jb=b.__webglCustomAttributesList,dc,zb,wa,Lb,Ra,da;if(b.verticesNeedUpdate){for(Tb=0;Tb<vb;Tb++)$b=ub[Tb],ja=3*Tb,bc[ja]=$b.x,bc[ja+1]=$b.y,bc[ja+2]=$b.z;l.bindBuffer(l.ARRAY_BUFFER,b.__webglVertexBuffer);l.bufferData(l.ARRAY_BUFFER,bc,jb)}if(Wb){for(Ub=0;Ub<Vb;Ub++)ac=Nb[Ub],ja=3*Ub,cc[ja]=ac.r,cc[ja+1]=ac.g,cc[ja+2]=ac.b;l.bindBuffer(l.ARRAY_BUFFER,b.__webglColorBuffer);l.bufferData(l.ARRAY_BUFFER,cc,jb)}if(Jb)for(dc=0,zb=Jb.length;dc<zb;dc++){da=Jb[dc];if(da.needsUpdate&&(void 0===da.boundTo||
"vertices"===da.boundTo))if(Lb=da.value.length,ja=0,1===da.size)for(wa=0;wa<Lb;wa++)da.array[wa]=da.value[wa];else if(2===da.size)for(wa=0;wa<Lb;wa++)Ra=da.value[wa],da.array[ja]=Ra.x,da.array[ja+1]=Ra.y,ja+=2;else if(3===da.size)if("c"===da.type)for(wa=0;wa<Lb;wa++)Ra=da.value[wa],da.array[ja]=Ra.r,da.array[ja+1]=Ra.g,da.array[ja+2]=Ra.b,ja+=3;else for(wa=0;wa<Lb;wa++)Ra=da.value[wa],da.array[ja]=Ra.x,da.array[ja+1]=Ra.y,da.array[ja+2]=Ra.z,ja+=3;else if(4===da.size)for(wa=0;wa<Lb;wa++)Ra=da.value[wa],
da.array[ja]=Ra.x,da.array[ja+1]=Ra.y,da.array[ja+2]=Ra.z,da.array[ja+3]=Ra.w,ja+=4;l.bindBuffer(l.ARRAY_BUFFER,da.buffer);l.bufferData(l.ARRAY_BUFFER,da.array,jb);da.needsUpdate=!1}}b.verticesNeedUpdate=!1;b.colorsNeedUpdate=!1;s.attributes&&C(s)}}function y(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function C(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function x(a,b,c,d,e){var f,g,h,k;Mb=0;if(d.needsUpdate){d.program&&lc(d);d.addEventListener("dispose",
mc);var m=Dc[d.type];if(m){var n=THREE.ShaderLib[m];d.__webglShader={uniforms:THREE.UniformsUtils.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}}else d.__webglShader={uniforms:d.uniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader};for(var p=0,q=0,r=0,t=0,s=0,v=b.length;s<v;s++){var u=b[s];u.onlyShadow||!1===u.visible||(u instanceof THREE.DirectionalLight&&p++,u instanceof THREE.PointLight&&q++,u instanceof THREE.SpotLight&&r++,u instanceof THREE.HemisphereLight&&
t++)}f=p;g=q;h=r;k=t;for(var x,y=0,C=0,G=b.length;C<G;C++){var A=b[C];A.castShadow&&(A instanceof THREE.SpotLight&&y++,A instanceof THREE.DirectionalLight&&!A.shadowCascade&&y++)}x=y;var D;if(Nb&&e&&e.skeleton&&e.skeleton.useVertexTexture)D=1024;else{var H=l.getParameter(l.MAX_VERTEX_UNIFORM_VECTORS),L=Math.floor((H-20)/4);void 0!==e&&e instanceof THREE.SkinnedMesh&&(L=Math.min(e.skeleton.bones.length,L),L<e.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+e.skeleton.bones.length+
", this GPU supports just "+L+" (try OpenGL instead of ANGLE)"));D=L}var K={precision:ga,supportsVertexTextures:Vb,map:!!d.map,envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,lightMap:!!d.lightMap,bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:c,useFog:d.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:X,skinning:d.skinning,maxBones:D,useVertexTexture:Nb&&
e&&e.skeleton&&e.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:I.maxMorphTargets,maxMorphNormals:I.maxMorphNormals,maxDirLights:f,maxPointLights:g,maxSpotLights:h,maxHemiLights:k,maxShadows:x,shadowMapEnabled:I.shadowMapEnabled&&e.receiveShadow&&0<x,shadowMapType:I.shadowMapType,shadowMapDebug:I.shadowMapDebug,shadowMapCascade:I.shadowMapCascade,alphaTest:d.alphaTest,metal:d.metal,wrapAround:d.wrapAround,doubleSided:d.side===THREE.DoubleSide,flipSided:d.side===
THREE.BackSide},N=[];m?N.push(m):(N.push(d.fragmentShader),N.push(d.vertexShader));if(void 0!==d.defines)for(var O in d.defines)N.push(O),N.push(d.defines[O]);for(O in K)N.push(O),N.push(K[O]);for(var W=N.join(),pa,ta=0,Za=Xa.length;ta<Za;ta++){var Fa=Xa[ta];if(Fa.code===W){pa=Fa;pa.usedTimes++;break}}void 0===pa&&(pa=new THREE.WebGLProgram(I,W,d,K),Xa.push(pa),I.info.memory.programs=Xa.length);d.program=pa;var Ta=pa.attributes;if(d.morphTargets){d.numSupportedMorphTargets=0;for(var aa,Ga="morphTarget",
za=0;za<I.maxMorphTargets;za++)aa=Ga+za,0<=Ta[aa]&&d.numSupportedMorphTargets++}if(d.morphNormals)for(d.numSupportedMorphNormals=0,Ga="morphNormal",za=0;za<I.maxMorphNormals;za++)aa=Ga+za,0<=Ta[aa]&&d.numSupportedMorphNormals++;d.uniformsList=[];for(var ea in d.__webglShader.uniforms){var tb=d.program.uniforms[ea];tb&&d.uniformsList.push([d.__webglShader.uniforms[ea],tb])}d.needsUpdate=!1}d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(I.maxMorphTargets));
var qa=!1,eb=!1,ya=!1,xa=d.program,ha=xa.uniforms,P=d.__webglShader.uniforms;xa.id!==Wb&&(l.useProgram(xa.program),Wb=xa.id,ya=eb=qa=!0);d.id!==Hb&&(-1===Hb&&(ya=!0),Hb=d.id,eb=!0);if(qa||a!==Ib)l.uniformMatrix4fv(ha.projectionMatrix,!1,a.projectionMatrix.elements),X&&l.uniform1f(ha.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==Ib&&(Ib=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==ha.cameraPosition&&(Da.setFromMatrixPosition(a.matrixWorld),l.uniform3f(ha.cameraPosition,
Da.x,Da.y,Da.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshBasicMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==ha.viewMatrix&&l.uniformMatrix4fv(ha.viewMatrix,!1,a.matrixWorldInverse.elements);if(d.skinning)if(e.bindMatrix&&null!==ha.bindMatrix&&l.uniformMatrix4fv(ha.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==ha.bindMatrixInverse&&l.uniformMatrix4fv(ha.bindMatrixInverse,!1,e.bindMatrixInverse.elements),
Nb&&e.skeleton&&e.skeleton.useVertexTexture){if(null!==ha.boneTexture){var $a=z();l.uniform1i(ha.boneTexture,$a);I.setTexture(e.skeleton.boneTexture,$a)}null!==ha.boneTextureWidth&&l.uniform1i(ha.boneTextureWidth,e.skeleton.boneTextureWidth);null!==ha.boneTextureHeight&&l.uniform1i(ha.boneTextureHeight,e.skeleton.boneTextureHeight)}else e.skeleton&&e.skeleton.boneMatrices&&null!==ha.boneGlobalMatrices&&l.uniformMatrix4fv(ha.boneGlobalMatrices,!1,e.skeleton.boneMatrices);if(eb){c&&d.fog&&(P.fogColor.value=
c.color,c instanceof THREE.Fog?(P.fogNear.value=c.near,P.fogFar.value=c.far):c instanceof THREE.FogExp2&&(P.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(Ob){var ya=!0,fa,fb,Y,Ma=0,Sa=0,Ya=0,Aa,Ha,hb,na,ab,jb,la=nc,Na=la.directional.colors,Ua=la.directional.positions,mb=la.point.colors,kb=la.point.positions,sb=la.point.distances,Va=la.spot.colors,Ia=la.spot.positions,nb=la.spot.distances,Oa=la.spot.directions,ia=la.spot.anglesCos,
ra=la.spot.exponents,J=la.hemi.skyColors,Ba=la.hemi.groundColors,bb=la.hemi.positions,wb=0,ob=0,Pa=0,Ca=0,cb=0,Ka=0,La=0,ib=0,xb=0,pb=0,B=0,db=0;fa=0;for(fb=b.length;fa<fb;fa++)Y=b[fa],Y.onlyShadow||(Aa=Y.color,na=Y.intensity,jb=Y.distance,Y instanceof THREE.AmbientLight?Y.visible&&(I.gammaInput?(Ma+=Aa.r*Aa.r,Sa+=Aa.g*Aa.g,Ya+=Aa.b*Aa.b):(Ma+=Aa.r,Sa+=Aa.g,Ya+=Aa.b)):Y instanceof THREE.DirectionalLight?(cb+=1,Y.visible&&(ma.setFromMatrixPosition(Y.matrixWorld),Da.setFromMatrixPosition(Y.target.matrixWorld),
ma.sub(Da),ma.normalize(),xb=3*wb,Ua[xb]=ma.x,Ua[xb+1]=ma.y,Ua[xb+2]=ma.z,I.gammaInput?E(Na,xb,Aa,na*na):w(Na,xb,Aa,na),wb+=1)):Y instanceof THREE.PointLight?(Ka+=1,Y.visible&&(pb=3*ob,I.gammaInput?E(mb,pb,Aa,na*na):w(mb,pb,Aa,na),Da.setFromMatrixPosition(Y.matrixWorld),kb[pb]=Da.x,kb[pb+1]=Da.y,kb[pb+2]=Da.z,sb[ob]=jb,ob+=1)):Y instanceof THREE.SpotLight?(La+=1,Y.visible&&(B=3*Pa,I.gammaInput?E(Va,B,Aa,na*na):w(Va,B,Aa,na),ma.setFromMatrixPosition(Y.matrixWorld),Ia[B]=ma.x,Ia[B+1]=ma.y,Ia[B+2]=ma.z,
nb[Pa]=jb,Da.setFromMatrixPosition(Y.target.matrixWorld),ma.sub(Da),ma.normalize(),Oa[B]=ma.x,Oa[B+1]=ma.y,Oa[B+2]=ma.z,ia[Pa]=Math.cos(Y.angle),ra[Pa]=Y.exponent,Pa+=1)):Y instanceof THREE.HemisphereLight&&(ib+=1,Y.visible&&(ma.setFromMatrixPosition(Y.matrixWorld),ma.normalize(),db=3*Ca,bb[db]=ma.x,bb[db+1]=ma.y,bb[db+2]=ma.z,Ha=Y.color,hb=Y.groundColor,I.gammaInput?(ab=na*na,E(J,db,Ha,ab),E(Ba,db,hb,ab)):(w(J,db,Ha,na),w(Ba,db,hb,na)),Ca+=1)));fa=3*wb;for(fb=Math.max(Na.length,3*cb);fa<fb;fa++)Na[fa]=
0;fa=3*ob;for(fb=Math.max(mb.length,3*Ka);fa<fb;fa++)mb[fa]=0;fa=3*Pa;for(fb=Math.max(Va.length,3*La);fa<fb;fa++)Va[fa]=0;fa=3*Ca;for(fb=Math.max(J.length,3*ib);fa<fb;fa++)J[fa]=0;fa=3*Ca;for(fb=Math.max(Ba.length,3*ib);fa<fb;fa++)Ba[fa]=0;la.directional.length=wb;la.point.length=ob;la.spot.length=Pa;la.hemi.length=Ca;la.ambient[0]=Ma;la.ambient[1]=Sa;la.ambient[2]=Ya;Ob=!1}if(ya){var sa=nc;P.ambientLightColor.value=sa.ambient;P.directionalLightColor.value=sa.directional.colors;P.directionalLightDirection.value=
sa.directional.positions;P.pointLightColor.value=sa.point.colors;P.pointLightPosition.value=sa.point.positions;P.pointLightDistance.value=sa.point.distances;P.spotLightColor.value=sa.spot.colors;P.spotLightPosition.value=sa.spot.positions;P.spotLightDistance.value=sa.spot.distances;P.spotLightDirection.value=sa.spot.directions;P.spotLightAngleCos.value=sa.spot.anglesCos;P.spotLightExponent.value=sa.spot.exponents;P.hemisphereLightSkyColor.value=sa.hemi.skyColors;P.hemisphereLightGroundColor.value=
sa.hemi.groundColors;P.hemisphereLightDirection.value=sa.hemi.positions;F(P,!0)}else F(P,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){P.opacity.value=d.opacity;I.gammaInput?P.diffuse.value.copyGammaToLinear(d.color):P.diffuse.value=d.color;P.map.value=d.map;P.lightMap.value=d.lightMap;P.specularMap.value=d.specularMap;P.alphaMap.value=d.alphaMap;d.bumpMap&&(P.bumpMap.value=d.bumpMap,P.bumpScale.value=d.bumpScale);d.normalMap&&
(P.normalMap.value=d.normalMap,P.normalScale.value.copy(d.normalScale));var oa;d.map?oa=d.map:d.specularMap?oa=d.specularMap:d.normalMap?oa=d.normalMap:d.bumpMap?oa=d.bumpMap:d.alphaMap&&(oa=d.alphaMap);if(void 0!==oa){var ub=oa.offset,zb=oa.repeat;P.offsetRepeat.value.set(ub.x,ub.y,zb.x,zb.y)}P.envMap.value=d.envMap;P.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;P.reflectivity.value=d.reflectivity;P.refractionRatio.value=d.refractionRatio}d instanceof THREE.LineBasicMaterial?
(P.diffuse.value=d.color,P.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(P.diffuse.value=d.color,P.opacity.value=d.opacity,P.dashSize.value=d.dashSize,P.totalSize.value=d.dashSize+d.gapSize,P.scale.value=d.scale):d instanceof THREE.PointCloudMaterial?(P.psColor.value=d.color,P.opacity.value=d.opacity,P.size.value=d.size,P.scale.value=Q.height/2,P.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(P.shininess.value=d.shininess,I.gammaInput?(P.ambient.value.copyGammaToLinear(d.ambient),
P.emissive.value.copyGammaToLinear(d.emissive),P.specular.value.copyGammaToLinear(d.specular)):(P.ambient.value=d.ambient,P.emissive.value=d.emissive,P.specular.value=d.specular),d.wrapAround&&P.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(I.gammaInput?(P.ambient.value.copyGammaToLinear(d.ambient),P.emissive.value.copyGammaToLinear(d.emissive)):(P.ambient.value=d.ambient,P.emissive.value=d.emissive),d.wrapAround&&P.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?
(P.mNear.value=a.near,P.mFar.value=a.far,P.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(P.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&P.shadowMatrix)for(var Ab=0,vb=0,Xb=b.length;vb<Xb;vb++){var lb=b[vb];lb.castShadow&&(lb instanceof THREE.SpotLight||lb instanceof THREE.DirectionalLight&&!lb.shadowCascade)&&(P.shadowMap.value[Ab]=lb.shadowMap,P.shadowMapSize.value[Ab]=lb.shadowMapSize,P.shadowMatrix.value[Ab]=lb.shadowMatrix,P.shadowDarkness.value[Ab]=lb.shadowDarkness,
P.shadowBias.value[Ab]=lb.shadowBias,Ab++)}for(var Cb=d.uniformsList,V,Ja,Wa,Db=0,Pb=Cb.length;Db<Pb;Db++){var $=Cb[Db][0];if(!1!==$.needsUpdate){var Eb=$.type,R=$.value,S=Cb[Db][1];switch(Eb){case "1i":l.uniform1i(S,R);break;case "1f":l.uniform1f(S,R);break;case "2f":l.uniform2f(S,R[0],R[1]);break;case "3f":l.uniform3f(S,R[0],R[1],R[2]);break;case "4f":l.uniform4f(S,R[0],R[1],R[2],R[3]);break;case "1iv":l.uniform1iv(S,R);break;case "3iv":l.uniform3iv(S,R);break;case "1fv":l.uniform1fv(S,R);break;
case "2fv":l.uniform2fv(S,R);break;case "3fv":l.uniform3fv(S,R);break;case "4fv":l.uniform4fv(S,R);break;case "Matrix3fv":l.uniformMatrix3fv(S,!1,R);break;case "Matrix4fv":l.uniformMatrix4fv(S,!1,R);break;case "i":l.uniform1i(S,R);break;case "f":l.uniform1f(S,R);break;case "v2":l.uniform2f(S,R.x,R.y);break;case "v3":l.uniform3f(S,R.x,R.y,R.z);break;case "v4":l.uniform4f(S,R.x,R.y,R.z,R.w);break;case "c":l.uniform3f(S,R.r,R.g,R.b);break;case "iv1":l.uniform1iv(S,R);break;case "iv":l.uniform3iv(S,R);
break;case "fv1":l.uniform1fv(S,R);break;case "fv":l.uniform3fv(S,R);break;case "v2v":void 0===$._array&&($._array=new Float32Array(2*R.length));for(var Z=0,Ea=R.length;Z<Ea;Z++)Wa=2*Z,$._array[Wa]=R[Z].x,$._array[Wa+1]=R[Z].y;l.uniform2fv(S,$._array);break;case "v3v":void 0===$._array&&($._array=new Float32Array(3*R.length));Z=0;for(Ea=R.length;Z<Ea;Z++)Wa=3*Z,$._array[Wa]=R[Z].x,$._array[Wa+1]=R[Z].y,$._array[Wa+2]=R[Z].z;l.uniform3fv(S,$._array);break;case "v4v":void 0===$._array&&($._array=new Float32Array(4*
R.length));Z=0;for(Ea=R.length;Z<Ea;Z++)Wa=4*Z,$._array[Wa]=R[Z].x,$._array[Wa+1]=R[Z].y,$._array[Wa+2]=R[Z].z,$._array[Wa+3]=R[Z].w;l.uniform4fv(S,$._array);break;case "m3":l.uniformMatrix3fv(S,!1,R.elements);break;case "m3v":void 0===$._array&&($._array=new Float32Array(9*R.length));Z=0;for(Ea=R.length;Z<Ea;Z++)R[Z].flattenToArrayOffset($._array,9*Z);l.uniformMatrix3fv(S,!1,$._array);break;case "m4":l.uniformMatrix4fv(S,!1,R.elements);break;case "m4v":void 0===$._array&&($._array=new Float32Array(16*
R.length));Z=0;for(Ea=R.length;Z<Ea;Z++)R[Z].flattenToArrayOffset($._array,16*Z);l.uniformMatrix4fv(S,!1,$._array);break;case "t":V=R;Ja=z();l.uniform1i(S,Ja);if(!V)continue;if(V instanceof THREE.CubeTexture||V.image instanceof Array&&6===V.image.length){var ka=V,Bb=Ja;if(6===ka.image.length)if(ka.needsUpdate){ka.image.__webglTextureCube||(ka.addEventListener("dispose",Jb),ka.image.__webglTextureCube=l.createTexture(),I.info.memory.textures++);l.activeTexture(l.TEXTURE0+Bb);l.bindTexture(l.TEXTURE_CUBE_MAP,
ka.image.__webglTextureCube);l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,ka.flipY);for(var Fb=ka instanceof THREE.CompressedTexture,ba=ka.image[0]instanceof THREE.DataTexture,gb=[],ua=0;6>ua;ua++)gb[ua]=!I.autoScaleCubemaps||Fb||ba?ba?ka.image[ua].image:ka.image[ua]:M(ka.image[ua],Ec);var Qb=gb[0],Rb=THREE.Math.isPowerOfTwo(Qb.width)&&THREE.Math.isPowerOfTwo(Qb.height),qb=T(ka.format),Sb=T(ka.type);U(l.TEXTURE_CUBE_MAP,ka,Rb);for(ua=0;6>ua;ua++)if(Fb)for(var yb,Gb=gb[ua].mipmaps,rb=0,Yb=Gb.length;rb<Yb;rb++)yb=
Gb[rb],ka.format!==THREE.RGBAFormat&&ka.format!==THREE.RGBFormat?-1<oc().indexOf(qb)?l.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ua,rb,qb,yb.width,yb.height,0,yb.data):console.warn("Attempt to load unsupported compressed texture format"):l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ua,rb,qb,yb.width,yb.height,0,qb,Sb,yb.data);else ba?l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ua,0,qb,gb[ua].width,gb[ua].height,0,qb,Sb,gb[ua].data):l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+ua,0,qb,qb,Sb,gb[ua]);
ka.generateMipmaps&&Rb&&l.generateMipmap(l.TEXTURE_CUBE_MAP);ka.needsUpdate=!1;if(ka.onUpdate)ka.onUpdate()}else l.activeTexture(l.TEXTURE0+Bb),l.bindTexture(l.TEXTURE_CUBE_MAP,ka.image.__webglTextureCube)}else if(V instanceof THREE.WebGLRenderTargetCube){var Zb=V;l.activeTexture(l.TEXTURE0+Ja);l.bindTexture(l.TEXTURE_CUBE_MAP,Zb.__webglTexture)}else I.setTexture(V,Ja);break;case "tv":void 0===$._array&&($._array=[]);Z=0;for(Ea=$.value.length;Z<Ea;Z++)$._array[Z]=z();l.uniform1iv(S,$._array);Z=0;
for(Ea=$.value.length;Z<Ea;Z++)V=$.value[Z],Ja=$._array[Z],V&&I.setTexture(V,Ja);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+Eb)}}}}l.uniformMatrix4fv(ha.modelViewMatrix,!1,e._modelViewMatrix.elements);ha.normalMatrix&&l.uniformMatrix3fv(ha.normalMatrix,!1,e._normalMatrix.elements);null!==ha.modelMatrix&&l.uniformMatrix4fv(ha.modelMatrix,!1,e.matrixWorld.elements);return xa}function F(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=
b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=b;a.spotLightDirection.needsUpdate=b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function z(){var a=Mb;a>=pc&&console.warn("WebGLRenderer: trying to use "+
a+" texture units while this GPU supports only "+pc);Mb+=1;return a}function G(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}function E(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function w(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function D(a){a*=O;a!==qc&&(l.lineWidth(a),qc=a)}function A(a,b,c){rc!==a&&(a?l.enable(l.POLYGON_OFFSET_FILL):l.disable(l.POLYGON_OFFSET_FILL),rc=a);!a||sc===b&&tc===c||
(l.polygonOffset(b,c),sc=b,tc=c)}function U(a,b,c){c?(l.texParameteri(a,l.TEXTURE_WRAP_S,T(b.wrapS)),l.texParameteri(a,l.TEXTURE_WRAP_T,T(b.wrapT)),l.texParameteri(a,l.TEXTURE_MAG_FILTER,T(b.magFilter)),l.texParameteri(a,l.TEXTURE_MIN_FILTER,T(b.minFilter))):(l.texParameteri(a,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(a,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),b.wrapS===THREE.ClampToEdgeWrapping&&b.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT is set to THREE.ClampToEdgeWrapping. ( "+
b.sourceFile+" )"),l.texParameteri(a,l.TEXTURE_MAG_FILTER,N(b.magFilter)),l.texParameteri(a,l.TEXTURE_MIN_FILTER,N(b.minFilter)),b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter is set to THREE.LinearFilter or THREE.NearestFilter. ( "+b.sourceFile+" )"));(c=aa.get("EXT_texture_filter_anisotropic"))&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy)&&(l.texParameterf(a,c.TEXTURE_MAX_ANISOTROPY_EXT,
Math.min(b.anisotropy,I.getMaxAnisotropy())),b.__oldAnisotropy=b.anisotropy)}function M(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElement("canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.log("THREE.WebGLRenderer:",a,"is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height+".");return d}return a}function K(a,b){l.bindRenderbuffer(l.RENDERBUFFER,
a);b.depthBuffer&&!b.stencilBuffer?(l.renderbufferStorage(l.RENDERBUFFER,l.DEPTH_COMPONENT16,b.width,b.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(l.renderbufferStorage(l.RENDERBUFFER,l.DEPTH_STENCIL,b.width,b.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.RENDERBUFFER,a)):l.renderbufferStorage(l.RENDERBUFFER,l.RGBA4,b.width,b.height)}function L(a){a instanceof THREE.WebGLRenderTargetCube?(l.bindTexture(l.TEXTURE_CUBE_MAP,
a.__webglTexture),l.generateMipmap(l.TEXTURE_CUBE_MAP),l.bindTexture(l.TEXTURE_CUBE_MAP,null)):(l.bindTexture(l.TEXTURE_2D,a.__webglTexture),l.generateMipmap(l.TEXTURE_2D),l.bindTexture(l.TEXTURE_2D,null))}function N(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?l.NEAREST:l.LINEAR}function T(a){var b;if(a===THREE.RepeatWrapping)return l.REPEAT;if(a===THREE.ClampToEdgeWrapping)return l.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return l.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return l.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return l.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return l.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return l.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return l.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return l.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return l.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return l.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return l.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return l.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return l.BYTE;if(a===THREE.ShortType)return l.SHORT;if(a===THREE.UnsignedShortType)return l.UNSIGNED_SHORT;if(a===THREE.IntType)return l.INT;if(a===THREE.UnsignedIntType)return l.UNSIGNED_INT;if(a===THREE.FloatType)return l.FLOAT;if(a===THREE.AlphaFormat)return l.ALPHA;if(a===THREE.RGBFormat)return l.RGB;if(a===THREE.RGBAFormat)return l.RGBA;if(a===THREE.LuminanceFormat)return l.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return l.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return l.FUNC_ADD;if(a===THREE.SubtractEquation)return l.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return l.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return l.ZERO;if(a===THREE.OneFactor)return l.ONE;if(a===THREE.SrcColorFactor)return l.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return l.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return l.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return l.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return l.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return l.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return l.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return l.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return l.SRC_ALPHA_SATURATE;b=aa.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;
if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}b=aa.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}b=aa.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;
if(a===THREE.MaxEquation)return b.MAX_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var Q=void 0!==a.canvas?a.canvas:document.createElement("canvas"),W=void 0!==a.context?a.context:null,O=1,ga=void 0!==a.precision?a.precision:"highp",ea=void 0!==a.alpha?a.alpha:!1,xa=void 0!==a.depth?a.depth:!0,H=void 0!==a.stencil?a.stencil:!0,$a=void 0!==a.antialias?a.antialias:!1,qa=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ya=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:
!1,X=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:!1,ta=new THREE.Color(0),Za=0,pa=[],Fa={},Ga=[],Ta=[],za=[],tb=[],eb=[];this.domElement=Q;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=
!0;this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var I=this,Xa=[],Wb=null,uc=null,Hb=-1,Sa="",Ib=null,Mb=0,zb=-1,Xb=-1,Yb=-1,Zb=-1,ec=-1,fc=-1,gc=-1,hc=-1,rc=null,sc=null,tc=null,qc=null,hb=0,Ya=0,ib=Q.width,jb=Q.height,vc=0,wc=0,kb=new Uint8Array(16),Ma=new Uint8Array(16),ub=new THREE.Frustum,vb=new THREE.Matrix4;new THREE.Matrix4;var Da=new THREE.Vector3,ma=new THREE.Vector3,Ob=!0,nc={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},
point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},l;try{var xc={alpha:ea,depth:xa,stencil:H,antialias:$a,premultipliedAlpha:qa,preserveDrawingBuffer:ya};l=W||Q.getContext("webgl",xc)||Q.getContext("experimental-webgl",xc);if(null===l){if(null!==Q.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";
}Q.addEventListener("webglcontextlost",function(a){a.preventDefault();yc();zc();Fa={}},!1)}catch(Fc){console.error(Fc)}void 0===l.getShaderPrecisionFormat&&(l.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});var aa=new THREE.WebGLExtensions(l);aa.get("OES_texture_float");aa.get("OES_texture_float_linear");aa.get("OES_standard_derivatives");X&&aa.get("EXT_frag_depth");var zc=function(){l.clearColor(0,0,0,1);l.clearDepth(1);l.clearStencil(0);l.enable(l.DEPTH_TEST);l.depthFunc(l.LEQUAL);
l.frontFace(l.CCW);l.cullFace(l.BACK);l.enable(l.CULL_FACE);l.enable(l.BLEND);l.blendEquation(l.FUNC_ADD);l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA);l.viewport(hb,Ya,ib,jb);l.clearColor(ta.r,ta.g,ta.b,Za)},yc=function(){Ib=Wb=null;Xb=zb=hc=gc=Yb=-1;Sa="";Hb=-1;Ob=!0;for(var a=0;a<Ma.length;a++)Ma[a]=0};zc();this.context=l;var pc=l.getParameter(l.MAX_TEXTURE_IMAGE_UNITS),Gc=l.getParameter(l.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Hc=l.getParameter(l.MAX_TEXTURE_SIZE),Ec=l.getParameter(l.MAX_CUBE_MAP_TEXTURE_SIZE),
Vb=0<Gc,Nb=Vb&&aa.get("OES_texture_float"),Ic=l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.HIGH_FLOAT),Jc=l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.MEDIUM_FLOAT);l.getShaderPrecisionFormat(l.VERTEX_SHADER,l.LOW_FLOAT);var Kc=l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.HIGH_FLOAT),Lc=l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.MEDIUM_FLOAT);l.getShaderPrecisionFormat(l.FRAGMENT_SHADER,l.LOW_FLOAT);var oc=function(){var a;return function(){if(void 0!==a)return a;a=[];if(aa.get("WEBGL_compressed_texture_pvrtc")||
aa.get("WEBGL_compressed_texture_s3tc"))for(var b=l.getParameter(l.COMPRESSED_TEXTURE_FORMATS),c=0;c<b.length;c++)a.push(b[c]);return a}}(),Mc=0<Ic.precision&&0<Kc.precision,Ac=0<Jc.precision&&0<Lc.precision;"highp"!==ga||Mc||(Ac?(ga="mediump",console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(ga="lowp",console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));"mediump"!==ga||Ac||(ga="lowp",console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));
var Nc=new THREE.ShadowMapPlugin(this,pa,Fa,Ga),Oc=new THREE.SpritePlugin(this,tb),Pc=new THREE.LensFlarePlugin(this,eb);this.getContext=function(){return l};this.forceContextLoss=function(){aa.get("WEBGL_lose_context").loseContext()};this.supportsVertexTextures=function(){return Vb};this.supportsFloatTextures=function(){return aa.get("OES_texture_float")};this.supportsStandardDerivatives=function(){return aa.get("OES_standard_derivatives")};this.supportsCompressedTextureS3TC=function(){return aa.get("WEBGL_compressed_texture_s3tc")};
this.supportsCompressedTexturePVRTC=function(){return aa.get("WEBGL_compressed_texture_pvrtc")};this.supportsBlendMinMax=function(){return aa.get("EXT_blend_minmax")};this.getMaxAnisotropy=function(){var a;return function(){if(void 0!==a)return a;var b=aa.get("EXT_texture_filter_anisotropic");return a=null!==b?l.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}}();this.getPrecision=function(){return ga};this.getPixelRatio=function(){return O};this.setPixelRatio=function(a){O=a};this.setSize=function(a,
b,c){Q.width=a*O;Q.height=b*O;!1!==c&&(Q.style.width=a+"px",Q.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){hb=a*O;Ya=b*O;ib=c*O;jb=d*O;l.viewport(hb,Ya,ib,jb)};this.setScissor=function(a,b,c,d){l.scissor(a*O,b*O,c*O,d*O)};this.enableScissorTest=function(a){a?l.enable(l.SCISSOR_TEST):l.disable(l.SCISSOR_TEST)};this.getClearColor=function(){return ta};this.setClearColor=function(a,b){ta.set(a);Za=void 0!==b?b:1;l.clearColor(ta.r,ta.g,ta.b,Za)};this.getClearAlpha=
function(){return Za};this.setClearAlpha=function(a){Za=a;l.clearColor(ta.r,ta.g,ta.b,Za)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=l.COLOR_BUFFER_BIT;if(void 0===b||b)d|=l.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=l.STENCIL_BUFFER_BIT;l.clear(d)};this.clearColor=function(){l.clear(l.COLOR_BUFFER_BIT)};this.clearDepth=function(){l.clear(l.DEPTH_BUFFER_BIT)};this.clearStencil=function(){l.clear(l.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,
c,d)};this.resetGLState=yc;var ic=function(a){a.target.traverse(function(a){a.removeEventListener("remove",ic);if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete Fa[a.id];else if(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var b=Ga,c=b.length-1;0<=c;c--)b[c].object===a&&b.splice(c,1);delete a.__webglInit;delete a._modelViewMatrix;delete a._normalMatrix;delete a.__webglActive})},jc=function(a){a=a.target;a.removeEventListener("dispose",
jc);delete a.__webglInit;if(a instanceof THREE.BufferGeometry){for(var b in a.attributes){var c=a.attributes[b];void 0!==c.buffer&&(l.deleteBuffer(c.buffer),delete c.buffer)}I.info.memory.geometries--}else if(b=sb[a.id],void 0!==b){for(var c=0,d=b.length;c<d;c++){var e=b[c];if(void 0!==e.numMorphTargets){for(var f=0,g=e.numMorphTargets;f<g;f++)l.deleteBuffer(e.__webglMorphTargetsBuffers[f]);delete e.__webglMorphTargetsBuffers}if(void 0!==e.numMorphNormals){f=0;for(g=e.numMorphNormals;f<g;f++)l.deleteBuffer(e.__webglMorphNormalsBuffers[f]);
delete e.__webglMorphNormalsBuffers}Bc(e)}delete sb[a.id]}else Bc(a);Sa=""},Jb=function(a){a=a.target;a.removeEventListener("dispose",Jb);a.image&&a.image.__webglTextureCube?(l.deleteTexture(a.image.__webglTextureCube),delete a.image.__webglTextureCube):void 0!==a.__webglInit&&(l.deleteTexture(a.__webglTexture),delete a.__webglTexture,delete a.__webglInit);I.info.memory.textures--},Cc=function(a){a=a.target;a.removeEventListener("dispose",Cc);if(a&&void 0!==a.__webglTexture){l.deleteTexture(a.__webglTexture);
delete a.__webglTexture;if(a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)l.deleteFramebuffer(a.__webglFramebuffer[b]),l.deleteRenderbuffer(a.__webglRenderbuffer[b]);else l.deleteFramebuffer(a.__webglFramebuffer),l.deleteRenderbuffer(a.__webglRenderbuffer);delete a.__webglFramebuffer;delete a.__webglRenderbuffer}I.info.memory.textures--},mc=function(a){a=a.target;a.removeEventListener("dispose",mc);lc(a)},Bc=function(a){for(var b="__webglVertexBuffer __webglNormalBuffer __webglTangentBuffer __webglColorBuffer __webglUVBuffer __webglUV2Buffer __webglSkinIndicesBuffer __webglSkinWeightsBuffer __webglFaceBuffer __webglLineBuffer __webglLineDistanceBuffer".split(" "),
c=0,d=b.length;c<d;c++){var e=b[c];void 0!==a[e]&&(l.deleteBuffer(a[e]),delete a[e])}if(void 0!==a.__webglCustomAttributesList){for(e in a.__webglCustomAttributesList)l.deleteBuffer(a.__webglCustomAttributesList[e].buffer);delete a.__webglCustomAttributesList}I.info.memory.geometries--},lc=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Xa.length;a<c;a++)if(d=Xa[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Xa.length;a<
c;a++)d=Xa[a],d.program!==b&&e.push(d);Xa=e;l.deleteProgram(b);I.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){f();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=l.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=l.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=l.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=l.createBuffer());a.hasPositions&&(l.bindBuffer(l.ARRAY_BUFFER,a.__webglVertexBuffer),
l.bufferData(l.ARRAY_BUFFER,a.positionArray,l.DYNAMIC_DRAW),g(b.attributes.position),l.vertexAttribPointer(b.attributes.position,3,l.FLOAT,!1,0,0));if(a.hasNormals){l.bindBuffer(l.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,k,m,n,p,q,r,t,s,v,u=3*a.count;for(v=0;v<u;v+=9)s=a.normalArray,d=s[v],e=s[v+1],k=s[v+2],m=s[v+3],p=s[v+4],r=s[v+5],n=s[v+6],q=s[v+7],t=s[v+8],d=(d+m+n)/3,e=(e+p+q)/3,k=(k+r+t)/3,s[v]=d,s[v+1]=e,s[v+2]=k,s[v+3]=d,s[v+4]=e,s[v+5]=k,s[v+6]=d,s[v+
7]=e,s[v+8]=k}l.bufferData(l.ARRAY_BUFFER,a.normalArray,l.DYNAMIC_DRAW);g(b.attributes.normal);l.vertexAttribPointer(b.attributes.normal,3,l.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(l.bindBuffer(l.ARRAY_BUFFER,a.__webglUvBuffer),l.bufferData(l.ARRAY_BUFFER,a.uvArray,l.DYNAMIC_DRAW),g(b.attributes.uv),l.vertexAttribPointer(b.attributes.uv,2,l.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(l.bindBuffer(l.ARRAY_BUFFER,a.__webglColorBuffer),l.bufferData(l.ARRAY_BUFFER,a.colorArray,l.DYNAMIC_DRAW),
g(b.attributes.color),l.vertexAttribPointer(b.attributes.color,3,l.FLOAT,!1,0,0));h();l.drawArrays(l.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,g,h){if(!1!==d.visible)if(v(h),a=x(a,b,c,d,h),b=!1,c="direct_"+g.id+"_"+a.id+"_"+(d.wireframe?1:0),c!==Sa&&(Sa=c,b=!0),b&&f(),h instanceof THREE.Mesh){h=!0===d.wireframe?l.LINES:l.TRIANGLES;var k=g.attributes.index;if(k){var m,n;k.array instanceof Uint32Array&&aa.get("OES_element_index_uint")?(m=l.UNSIGNED_INT,n=4):(m=l.UNSIGNED_SHORT,
n=2);c=g.offsets;if(0===c.length)b&&(e(d,a,g,0),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,k.buffer)),l.drawElements(h,k.array.length,m,0),I.info.render.calls++,I.info.render.vertices+=k.array.length,I.info.render.faces+=k.array.length/3;else{b=!0;for(var p=0,q=c.length;p<q;p++){var s=c[p].index;b&&(e(d,a,g,s),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,k.buffer));l.drawElements(h,c[p].count,m,c[p].start*n);I.info.render.calls++;I.info.render.vertices+=c[p].count;I.info.render.faces+=c[p].count/3}}}else b&&e(d,
a,g,0),d=g.attributes.position,l.drawArrays(h,0,d.array.length/3),I.info.render.calls++,I.info.render.vertices+=d.array.length/3,I.info.render.faces+=d.array.length/9}else if(h instanceof THREE.PointCloud)if(h=l.POINTS,k=g.attributes.index)if(k.array instanceof Uint32Array&&aa.get("OES_element_index_uint")?(m=l.UNSIGNED_INT,n=4):(m=l.UNSIGNED_SHORT,n=2),c=g.offsets,0===c.length)b&&(e(d,a,g,0),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,k.buffer)),l.drawElements(h,k.array.length,m,0),I.info.render.calls++,
I.info.render.points+=k.array.length;else for(1<c.length&&(b=!0),p=0,q=c.length;p<q;p++)s=c[p].index,b&&(e(d,a,g,s),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,k.buffer)),l.drawElements(h,c[p].count,m,c[p].start*n),I.info.render.calls++,I.info.render.points+=c[p].count;else if(b&&e(d,a,g,0),d=g.attributes.position,c=g.offsets,0===c.length)l.drawArrays(h,0,d.array.length/3),I.info.render.calls++,I.info.render.points+=d.array.length/3;else for(p=0,q=c.length;p<q;p++)l.drawArrays(h,c[p].index,c[p].count),I.info.render.calls++,
I.info.render.points+=c[p].count;else if(h instanceof THREE.Line)if(h=h.mode===THREE.LineStrip?l.LINE_STRIP:l.LINES,D(d.linewidth),k=g.attributes.index)if(k.array instanceof Uint32Array?(m=l.UNSIGNED_INT,n=4):(m=l.UNSIGNED_SHORT,n=2),c=g.offsets,0===c.length)b&&(e(d,a,g,0),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,k.buffer)),l.drawElements(h,k.array.length,m,0),I.info.render.calls++,I.info.render.vertices+=k.array.length;else for(1<c.length&&(b=!0),p=0,q=c.length;p<q;p++)s=c[p].index,b&&(e(d,a,g,s),l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,
k.buffer)),l.drawElements(h,c[p].count,m,c[p].start*n),I.info.render.calls++,I.info.render.vertices+=c[p].count;else if(b&&e(d,a,g,0),d=g.attributes.position,c=g.offsets,0===c.length)l.drawArrays(h,0,d.array.length/3),I.info.render.calls++,I.info.render.vertices+=d.array.length/3;else for(p=0,q=c.length;p<q;p++)l.drawArrays(h,c[p].index,c[p].count),I.info.render.calls++,I.info.render.vertices+=c[p].count};this.renderBuffer=function(a,b,c,d,e,k){if(!1!==d.visible){v(k);c=x(a,b,c,d,k);b=c.attributes;
a=!1;c=e.id+"_"+c.id+"_"+(d.wireframe?1:0);c!==Sa&&(Sa=c,a=!0);a&&f();if(!d.morphTargets&&0<=b.position)a&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglVertexBuffer),g(b.position),l.vertexAttribPointer(b.position,3,l.FLOAT,!1,0,0));else if(k.morphTargetBase){c=d.program.attributes;-1!==k.morphTargetBase&&0<=c.position?(l.bindBuffer(l.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[k.morphTargetBase]),g(c.position),l.vertexAttribPointer(c.position,3,l.FLOAT,!1,0,0)):0<=c.position&&(l.bindBuffer(l.ARRAY_BUFFER,
e.__webglVertexBuffer),g(c.position),l.vertexAttribPointer(c.position,3,l.FLOAT,!1,0,0));if(k.morphTargetForcedOrder.length)for(var m=0,n=k.morphTargetForcedOrder,q=k.morphTargetInfluences,s;m<d.numSupportedMorphTargets&&m<n.length;)s=c["morphTarget"+m],0<=s&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[n[m]]),g(s),l.vertexAttribPointer(s,3,l.FLOAT,!1,0,0)),s=c["morphNormal"+m],0<=s&&d.morphNormals&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[n[m]]),g(s),l.vertexAttribPointer(s,
3,l.FLOAT,!1,0,0)),k.__webglMorphTargetInfluences[m]=q[n[m]],m++;else{n=[];q=k.morphTargetInfluences;m=0;for(s=q.length;m<s;m++)n.push([q[m],m]);n.length>d.numSupportedMorphTargets?(n.sort(p),n.length=d.numSupportedMorphTargets):n.length>d.numSupportedMorphNormals?n.sort(p):0===n.length&&n.push([0,0]);for(var m=0,r=d.numSupportedMorphTargets;m<r;m++)if(n[m]){var t=n[m][1];s=c["morphTarget"+m];0<=s&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[t]),g(s),l.vertexAttribPointer(s,3,l.FLOAT,
!1,0,0));s=c["morphNormal"+m];0<=s&&d.morphNormals&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[t]),g(s),l.vertexAttribPointer(s,3,l.FLOAT,!1,0,0));k.__webglMorphTargetInfluences[m]=q[t]}else k.__webglMorphTargetInfluences[m]=0}null!==d.program.uniforms.morphTargetInfluences&&l.uniform1fv(d.program.uniforms.morphTargetInfluences,k.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(c=0,q=e.__webglCustomAttributesList.length;c<q;c++)n=e.__webglCustomAttributesList[c],
0<=b[n.buffer.belongsToAttribute]&&(l.bindBuffer(l.ARRAY_BUFFER,n.buffer),g(b[n.buffer.belongsToAttribute]),l.vertexAttribPointer(b[n.buffer.belongsToAttribute],n.size,l.FLOAT,!1,0,0));0<=b.color&&(0<k.geometry.colors.length||0<k.geometry.faces.length?(l.bindBuffer(l.ARRAY_BUFFER,e.__webglColorBuffer),g(b.color),l.vertexAttribPointer(b.color,3,l.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&l.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglNormalBuffer),
g(b.normal),l.vertexAttribPointer(b.normal,3,l.FLOAT,!1,0,0));0<=b.tangent&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglTangentBuffer),g(b.tangent),l.vertexAttribPointer(b.tangent,4,l.FLOAT,!1,0,0));0<=b.uv&&(k.geometry.faceVertexUvs[0]?(l.bindBuffer(l.ARRAY_BUFFER,e.__webglUVBuffer),g(b.uv),l.vertexAttribPointer(b.uv,2,l.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&l.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(k.geometry.faceVertexUvs[1]?(l.bindBuffer(l.ARRAY_BUFFER,e.__webglUV2Buffer),
g(b.uv2),l.vertexAttribPointer(b.uv2,2,l.FLOAT,!1,0,0)):void 0!==d.defaultAttributeValues&&l.vertexAttrib2fv(b.uv2,d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),g(b.skinIndex),l.vertexAttribPointer(b.skinIndex,4,l.FLOAT,!1,0,0),l.bindBuffer(l.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),g(b.skinWeight),l.vertexAttribPointer(b.skinWeight,4,l.FLOAT,!1,0,0));0<=b.lineDistance&&(l.bindBuffer(l.ARRAY_BUFFER,e.__webglLineDistanceBuffer),
g(b.lineDistance),l.vertexAttribPointer(b.lineDistance,1,l.FLOAT,!1,0,0))}h();k instanceof THREE.Mesh?(k=e.__typeArray===Uint32Array?l.UNSIGNED_INT:l.UNSIGNED_SHORT,d.wireframe?(D(d.wireframeLinewidth),a&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),l.drawElements(l.LINES,e.__webglLineCount,k,0)):(a&&l.bindBuffer(l.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),l.drawElements(l.TRIANGLES,e.__webglFaceCount,k,0)),I.info.render.calls++,I.info.render.vertices+=e.__webglFaceCount,I.info.render.faces+=
e.__webglFaceCount/3):k instanceof THREE.Line?(k=k.mode===THREE.LineStrip?l.LINE_STRIP:l.LINES,D(d.linewidth),l.drawArrays(k,0,e.__webglLineCount),I.info.render.calls++):k instanceof THREE.PointCloud&&(l.drawArrays(l.POINTS,0,e.__webglParticleCount),I.info.render.calls++,I.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var e=a.fog;Sa="";Hb=-1;
Ib=null;Ob=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();a.traverse(function(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update()});b.matrixWorldInverse.getInverse(b.matrixWorld);vb.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);ub.setFromMatrix(vb);pa.length=0;Ta.length=0;za.length=0;tb.length=0;eb.length=0;q(a);!0===I.sortObjects&&(Ta.sort(k),za.sort(n));Nc.render(a,b);I.info.render.calls=0;I.info.render.vertices=0;I.info.render.faces=0;I.info.render.points=
0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);d=0;for(var f=Ga.length;d<f;d++){var g=Ga[d],h=g.object;h.visible&&(G(h,b),s(g))}a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),A(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),m(Ta,b,pa,e,!0,d),m(za,b,pa,e,!0,d),t(Ga,"",b,pa,e,!1,d)):(d=null,
this.setBlending(THREE.NoBlending),m(Ta,b,pa,e,!1,d),t(Ga,"opaque",b,pa,e,!1,d),m(za,b,pa,e,!0,d),t(Ga,"transparent",b,pa,e,!0,d));Oc.render(a,b);Pc.render(a,b,vc,wc);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&L(c);this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=x(a,b,c,d,e);Sa="";I.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,l,ub):e.render(function(a){I.renderBufferImmediate(a,
f,d)})};var sb={},kc=0,Dc={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointCloudMaterial:"particle_basic"};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?l.disable(l.CULL_FACE):(b===THREE.FrontFaceDirectionCW?l.frontFace(l.CW):l.frontFace(l.CCW),a===THREE.CullFaceBack?l.cullFace(l.BACK):a===THREE.CullFaceFront?l.cullFace(l.FRONT):l.cullFace(l.FRONT_AND_BACK),
l.enable(l.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide;a=a.side===THREE.BackSide;zb!==b&&(b?l.disable(l.CULL_FACE):l.enable(l.CULL_FACE),zb=b);Xb!==a&&(a?l.frontFace(l.CW):l.frontFace(l.CCW),Xb=a)};this.setDepthTest=function(a){gc!==a&&(a?l.enable(l.DEPTH_TEST):l.disable(l.DEPTH_TEST),gc=a)};this.setDepthWrite=function(a){hc!==a&&(l.depthMask(a),hc=a)};this.setBlending=function(a,b,c,d){a!==Yb&&(a===THREE.NoBlending?l.disable(l.BLEND):a===THREE.AdditiveBlending?
(l.enable(l.BLEND),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.SRC_ALPHA,l.ONE)):a===THREE.SubtractiveBlending?(l.enable(l.BLEND),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ZERO,l.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(l.enable(l.BLEND),l.blendEquation(l.FUNC_ADD),l.blendFunc(l.ZERO,l.SRC_COLOR)):a===THREE.CustomBlending?l.enable(l.BLEND):(l.enable(l.BLEND),l.blendEquationSeparate(l.FUNC_ADD,l.FUNC_ADD),l.blendFuncSeparate(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA)),Yb=
a);if(a===THREE.CustomBlending){if(b!==Zb&&(l.blendEquation(T(b)),Zb=b),c!==ec||d!==fc)l.blendFunc(T(c),T(d)),ec=c,fc=d}else fc=ec=Zb=null};this.uploadTexture=function(a){void 0===a.__webglInit&&(a.__webglInit=!0,a.addEventListener("dispose",Jb),a.__webglTexture=l.createTexture(),I.info.memory.textures++);l.bindTexture(l.TEXTURE_2D,a.__webglTexture);l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,a.flipY);l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);l.pixelStorei(l.UNPACK_ALIGNMENT,a.unpackAlignment);
a.image=M(a.image,Hc);var b=a.image,c=THREE.Math.isPowerOfTwo(b.width)&&THREE.Math.isPowerOfTwo(b.height),d=T(a.format),e=T(a.type);U(l.TEXTURE_2D,a,c);var f=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<f.length&&c){for(var g=0,h=f.length;g<h;g++)b=f[g],l.texImage2D(l.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);a.generateMipmaps=!1}else l.texImage2D(l.TEXTURE_2D,0,d,b.width,b.height,0,d,e,b.data);else if(a instanceof THREE.CompressedTexture)for(g=0,h=f.length;g<h;g++)b=f[g],a.format!==THREE.RGBAFormat&&
a.format!==THREE.RGBFormat?-1<oc().indexOf(d)?l.compressedTexImage2D(l.TEXTURE_2D,g,d,b.width,b.height,0,b.data):console.warn("Attempt to load unsupported compressed texture format"):l.texImage2D(l.TEXTURE_2D,g,d,b.width,b.height,0,d,e,b.data);else if(0<f.length&&c){g=0;for(h=f.length;g<h;g++)b=f[g],l.texImage2D(l.TEXTURE_2D,g,d,d,e,b);a.generateMipmaps=!1}else l.texImage2D(l.TEXTURE_2D,0,d,d,e,a.image);a.generateMipmaps&&c&&l.generateMipmap(l.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()};
this.setTexture=function(a,b){l.activeTexture(l.TEXTURE0+b);a.needsUpdate?I.uploadTexture(a):l.bindTexture(l.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&void 0===a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",Cc);a.__webglTexture=l.createTexture();I.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),
d=T(a.format),e=T(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];l.bindTexture(l.TEXTURE_CUBE_MAP,a.__webglTexture);U(l.TEXTURE_CUBE_MAP,a,c);for(var g=0;6>g;g++){a.__webglFramebuffer[g]=l.createFramebuffer();a.__webglRenderbuffer[g]=l.createRenderbuffer();l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+g,0,d,a.width,a.height,0,d,e,null);var f=a,h=l.TEXTURE_CUBE_MAP_POSITIVE_X+g;l.bindFramebuffer(l.FRAMEBUFFER,a.__webglFramebuffer[g]);l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,
h,f.__webglTexture,0);K(a.__webglRenderbuffer[g],a)}c&&l.generateMipmap(l.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=l.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:l.createRenderbuffer(),l.bindTexture(l.TEXTURE_2D,a.__webglTexture),U(l.TEXTURE_2D,a,c),l.texImage2D(l.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=l.TEXTURE_2D,l.bindFramebuffer(l.FRAMEBUFFER,a.__webglFramebuffer),l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,d,a.__webglTexture,
0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.RENDERBUFFER,a.__webglRenderbuffer):K(a.__webglRenderbuffer,a),c&&l.generateMipmap(l.TEXTURE_2D);b?l.bindTexture(l.TEXTURE_CUBE_MAP,null):l.bindTexture(l.TEXTURE_2D,null);l.bindRenderbuffer(l.RENDERBUFFER,null);l.bindFramebuffer(l.FRAMEBUFFER,null)}a?
(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=ib,a=jb,d=hb,e=Ya);b!==uc&&(l.bindFramebuffer(l.FRAMEBUFFER,b),l.viewport(d,e,c,a),uc=b);vc=c;wc=a};this.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};this.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};this.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};
this.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;
THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.log("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}};
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,n=d.__webglShader.vertexShader,p=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var m="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?m="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(m="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",s="ENVMAP_MODE_REFLECTION",r="ENVMAP_BLENDING_MULTIPLY";
if(e.envMap){switch(d.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:t="ENVMAP_TYPE_CUBE";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:t="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:t="ENVMAP_TYPE_SPHERE"}switch(d.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:s="ENVMAP_MODE_REFRACTION"}switch(d.combine){case THREE.MultiplyOperation:r="ENVMAP_BLENDING_MULTIPLY";
break;case THREE.MixOperation:r="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:r="ENVMAP_BLENDING_ADD"}}var u,v;u=[];for(var y in g)v=g[y],!1!==v&&(v="#define "+y+" "+v,u.push(v));u=u.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",u,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define MAX_DIR_LIGHTS "+e.maxDirLights,
"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+s:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":
"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+m:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":
"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap?"#extension GL_OES_standard_derivatives : enable":"",u,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"",e.useFog&&e.fog?"#define USE_FOG":
"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+t:"",e.envMap?"#define "+s:"",e.envMap?"#define "+r:"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.metal?"#define METAL":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":
"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+m:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));n=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+n);p=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,b+p);f.attachShader(g,n);f.attachShader(g,p);void 0!==q&&f.bindAttribLocation(g,
0,q);f.linkProgram(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&(console.error("THREE.WebGLProgram: Could not initialise shader."),console.error("gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS)),console.error("gl.getError()",f.getError()));""!==f.getProgramInfoLog(g)&&console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f.getProgramInfoLog(g));f.deleteShader(n);f.deleteShader(p);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");
e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var C in h)q.push(C);h=q;C={};q=0;for(b=h.length;q<b;q++)m=h[q],C[m]=f.getUniformLocation(g,m);this.uniforms=C;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var x in k)q.push(x);
e=q;k={};x=0;for(h=e.length;x<h;x++)C=e[x],k[C]=f.getAttribLocation(g,C);this.attributes=k;this.attributesKeys=Object.keys(this.attributes);this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=n;this.fragmentShader=p;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&(console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c)),console.warn(a(d)));return c}}();
THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,n,p,q,m=a.context,t,s,r,u,v,y;this.render=function(C,x,F,z){if(0!==b.length){C=new THREE.Vector3;var G=z/F,E=.5*F,w=.5*z,D=16/z,A=new THREE.Vector2(D*G,D),U=new THREE.Vector3(1,1,0),M=new THREE.Vector2(1,1);if(void 0===r){var D=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),K=new Uint16Array([0,1,2,0,2,3]);t=m.createBuffer();s=m.createBuffer();m.bindBuffer(m.ARRAY_BUFFER,t);m.bufferData(m.ARRAY_BUFFER,D,m.STATIC_DRAW);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
s);m.bufferData(m.ELEMENT_ARRAY_BUFFER,K,m.STATIC_DRAW);v=m.createTexture();y=m.createTexture();m.bindTexture(m.TEXTURE_2D,v);m.texImage2D(m.TEXTURE_2D,0,m.RGB,16,16,0,m.RGB,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);m.bindTexture(m.TEXTURE_2D,y);m.texImage2D(m.TEXTURE_2D,0,
m.RGBA,16,16,0,m.RGBA,m.UNSIGNED_BYTE,null);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST);m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST);var D=(u=0<m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS))?{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
K=m.createProgram(),L=m.createShader(m.FRAGMENT_SHADER),N=m.createShader(m.VERTEX_SHADER),T="precision "+a.getPrecision()+" float;\n";m.shaderSource(L,T+D.fragmentShader);m.shaderSource(N,T+D.vertexShader);m.compileShader(L);m.compileShader(N);m.attachShader(K,L);m.attachShader(K,N);m.linkProgram(K);r=K;p=m.getAttribLocation(r,"position");q=m.getAttribLocation(r,"uv");c=m.getUniformLocation(r,"renderType");d=m.getUniformLocation(r,"map");e=m.getUniformLocation(r,"occlusionMap");f=m.getUniformLocation(r,
"opacity");g=m.getUniformLocation(r,"color");h=m.getUniformLocation(r,"scale");k=m.getUniformLocation(r,"rotation");n=m.getUniformLocation(r,"screenPosition")}m.useProgram(r);m.enableVertexAttribArray(p);m.enableVertexAttribArray(q);m.uniform1i(e,0);m.uniform1i(d,1);m.bindBuffer(m.ARRAY_BUFFER,t);m.vertexAttribPointer(p,2,m.FLOAT,!1,16,0);m.vertexAttribPointer(q,2,m.FLOAT,!1,16,8);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,s);m.disable(m.CULL_FACE);m.depthMask(!1);K=0;for(L=b.length;K<L;K++)if(D=16/z,A.set(D*
G,D),N=b[K],C.set(N.matrixWorld.elements[12],N.matrixWorld.elements[13],N.matrixWorld.elements[14]),C.applyMatrix4(x.matrixWorldInverse),C.applyProjection(x.projectionMatrix),U.copy(C),M.x=U.x*E+E,M.y=U.y*w+w,u||0<M.x&&M.x<F&&0<M.y&&M.y<z){m.activeTexture(m.TEXTURE1);m.bindTexture(m.TEXTURE_2D,v);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGB,M.x-8,M.y-8,16,16,0);m.uniform1i(c,0);m.uniform2f(h,A.x,A.y);m.uniform3f(n,U.x,U.y,U.z);m.disable(m.BLEND);m.enable(m.DEPTH_TEST);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,
0);m.activeTexture(m.TEXTURE0);m.bindTexture(m.TEXTURE_2D,y);m.copyTexImage2D(m.TEXTURE_2D,0,m.RGBA,M.x-8,M.y-8,16,16,0);m.uniform1i(c,1);m.disable(m.DEPTH_TEST);m.activeTexture(m.TEXTURE1);m.bindTexture(m.TEXTURE_2D,v);m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0);N.positionScreen.copy(U);N.customUpdateCallback?N.customUpdateCallback(N):N.updateLensFlares();m.uniform1i(c,2);m.enable(m.BLEND);for(var T=0,Q=N.lensFlares.length;T<Q;T++){var W=N.lensFlares[T];.001<W.opacity&&.001<W.scale&&(U.x=W.x,
U.y=W.y,U.z=W.z,D=W.size*W.scale/z,A.x=D*G,A.y=D,m.uniform3f(n,U.x,U.y,U.z),m.uniform2f(h,A.x,A.y),m.uniform1f(k,W.rotation),m.uniform1f(f,W.opacity),m.uniform3f(g,W.color.r,W.color.g,W.color.b),a.setBlending(W.blending,W.blendEquation,W.blendSrc,W.blendDst),a.setTexture(W.texture,1),m.drawElements(m.TRIANGLES,6,m.UNSIGNED_SHORT,0))}}m.enable(m.CULL_FACE);m.enable(m.DEPTH_TEST);m.depthMask(!0);a.resetGLState()}}};
THREE.ShadowMapPlugin=function(a,b,c,d){function e(a,b,d){if(b.visible){var g=c[b.id];if(g&&b.castShadow&&(!1===b.frustumCulled||!0===p.intersectsObject(b)))for(var f=0,h=g.length;f<h;f++){var k=g[f];b._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,b.matrixWorld);r.push(k)}f=0;for(h=b.children.length;f<h;f++)e(a,b.children[f],d)}}var f=a.context,g,h,k,n,p=new THREE.Frustum,q=new THREE.Matrix4,m=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector3,r=[],u=THREE.ShaderLib.depthRGBA,v=THREE.UniformsUtils.clone(u.uniforms);
g=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader});h=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0});k=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,skinning:!0});n=new THREE.ShaderMaterial({uniforms:v,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,morphTargets:!0,skinning:!0});g._shadowPass=!0;h._shadowPass=!0;k._shadowPass=
!0;n._shadowPass=!0;this.render=function(c,v){if(!1!==a.shadowMapEnabled){var u,F,z,G,E,w,D,A,U=[];G=0;f.clearColor(1,1,1,1);f.disable(f.BLEND);f.enable(f.CULL_FACE);f.frontFace(f.CCW);a.shadowMapCullFace===THREE.CullFaceFront?f.cullFace(f.FRONT):f.cullFace(f.BACK);a.setDepthTest(!0);u=0;for(F=b.length;u<F;u++)if(z=b[u],z.castShadow)if(z instanceof THREE.DirectionalLight&&z.shadowCascade)for(E=0;E<z.shadowCascadeCount;E++){var M;if(z.shadowCascadeArray[E])M=z.shadowCascadeArray[E];else{D=z;var K=
E;M=new THREE.DirectionalLight;M.isVirtual=!0;M.onlyShadow=!0;M.castShadow=!0;M.shadowCameraNear=D.shadowCameraNear;M.shadowCameraFar=D.shadowCameraFar;M.shadowCameraLeft=D.shadowCameraLeft;M.shadowCameraRight=D.shadowCameraRight;M.shadowCameraBottom=D.shadowCameraBottom;M.shadowCameraTop=D.shadowCameraTop;M.shadowCameraVisible=D.shadowCameraVisible;M.shadowDarkness=D.shadowDarkness;M.shadowBias=D.shadowCascadeBias[K];M.shadowMapWidth=D.shadowCascadeWidth[K];M.shadowMapHeight=D.shadowCascadeHeight[K];
M.pointsWorld=[];M.pointsFrustum=[];A=M.pointsWorld;w=M.pointsFrustum;for(var L=0;8>L;L++)A[L]=new THREE.Vector3,w[L]=new THREE.Vector3;A=D.shadowCascadeNearZ[K];D=D.shadowCascadeFarZ[K];w[0].set(-1,-1,A);w[1].set(1,-1,A);w[2].set(-1,1,A);w[3].set(1,1,A);w[4].set(-1,-1,D);w[5].set(1,-1,D);w[6].set(-1,1,D);w[7].set(1,1,D);M.originalCamera=v;w=new THREE.Gyroscope;w.position.copy(z.shadowCascadeOffset);w.add(M);w.add(M.target);v.add(w);z.shadowCascadeArray[E]=M;console.log("Created virtualLight",M)}K=
z;A=E;D=K.shadowCascadeArray[A];D.position.copy(K.position);D.target.position.copy(K.target.position);D.lookAt(D.target);D.shadowCameraVisible=K.shadowCameraVisible;D.shadowDarkness=K.shadowDarkness;D.shadowBias=K.shadowCascadeBias[A];w=K.shadowCascadeNearZ[A];K=K.shadowCascadeFarZ[A];D=D.pointsFrustum;D[0].z=w;D[1].z=w;D[2].z=w;D[3].z=w;D[4].z=K;D[5].z=K;D[6].z=K;D[7].z=K;U[G]=M;G++}else U[G]=z,G++;u=0;for(F=U.length;u<F;u++){z=U[u];z.shadowMap||(E=THREE.LinearFilter,a.shadowMapType===THREE.PCFSoftShadowMap&&
(E=THREE.NearestFilter),z.shadowMap=new THREE.WebGLRenderTarget(z.shadowMapWidth,z.shadowMapHeight,{minFilter:E,magFilter:E,format:THREE.RGBAFormat}),z.shadowMapSize=new THREE.Vector2(z.shadowMapWidth,z.shadowMapHeight),z.shadowMatrix=new THREE.Matrix4);if(!z.shadowCamera){if(z instanceof THREE.SpotLight)z.shadowCamera=new THREE.PerspectiveCamera(z.shadowCameraFov,z.shadowMapWidth/z.shadowMapHeight,z.shadowCameraNear,z.shadowCameraFar);else if(z instanceof THREE.DirectionalLight)z.shadowCamera=new THREE.OrthographicCamera(z.shadowCameraLeft,
z.shadowCameraRight,z.shadowCameraTop,z.shadowCameraBottom,z.shadowCameraNear,z.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}c.add(z.shadowCamera);!0===c.autoUpdate&&c.updateMatrixWorld()}z.shadowCameraVisible&&!z.cameraHelper&&(z.cameraHelper=new THREE.CameraHelper(z.shadowCamera),c.add(z.cameraHelper));if(z.isVirtual&&M.originalCamera==v){E=v;G=z.shadowCamera;w=z.pointsFrustum;D=z.pointsWorld;m.set(Infinity,Infinity,Infinity);t.set(-Infinity,-Infinity,-Infinity);
for(K=0;8>K;K++)A=D[K],A.copy(w[K]),A.unproject(E),A.applyMatrix4(G.matrixWorldInverse),A.x<m.x&&(m.x=A.x),A.x>t.x&&(t.x=A.x),A.y<m.y&&(m.y=A.y),A.y>t.y&&(t.y=A.y),A.z<m.z&&(m.z=A.z),A.z>t.z&&(t.z=A.z);G.left=m.x;G.right=t.x;G.top=t.y;G.bottom=m.y;G.updateProjectionMatrix()}G=z.shadowMap;w=z.shadowMatrix;E=z.shadowCamera;E.position.setFromMatrixPosition(z.matrixWorld);s.setFromMatrixPosition(z.target.matrixWorld);E.lookAt(s);E.updateMatrixWorld();E.matrixWorldInverse.getInverse(E.matrixWorld);z.cameraHelper&&
(z.cameraHelper.visible=z.shadowCameraVisible);z.shadowCameraVisible&&z.cameraHelper.update();w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);w.multiply(E.projectionMatrix);w.multiply(E.matrixWorldInverse);q.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse);p.setFromMatrix(q);a.setRenderTarget(G);a.clear();r.length=0;e(c,c,E);z=0;for(G=r.length;z<G;z++)D=r[z],w=D.object,D=D.buffer,K=w.material instanceof THREE.MeshFaceMaterial?w.material.materials[0]:w.material,A=void 0!==w.geometry.morphTargets&&
0<w.geometry.morphTargets.length&&K.morphTargets,L=w instanceof THREE.SkinnedMesh&&K.skinning,A=w.customDepthMaterial?w.customDepthMaterial:L?A?n:k:A?h:g,a.setMaterialFaces(K),D instanceof THREE.BufferGeometry?a.renderBufferDirect(E,b,null,A,D,w):a.renderBuffer(E,b,null,A,D,w);z=0;for(G=d.length;z<G;z++)D=d[z],w=D.object,w.visible&&w.castShadow&&(w._modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,w.matrixWorld),a.renderImmediateObject(E,b,null,g,w))}u=a.getClearColor();F=a.getClearAlpha();f.clearColor(u.r,
u.g,u.b,F);f.enable(f.BLEND);a.shadowMapCullFace===THREE.CullFaceFront&&f.cullFace(f.BACK);a.resetGLState()}}};
THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,n,p,q,m,t,s,r,u,v,y;function C(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var x=a.context,F,z,G,E,w=new THREE.Vector3,D=new THREE.Quaternion,A=new THREE.Vector3;this.render=function(U,M){if(0!==b.length){if(void 0===G){var K=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),L=new Uint16Array([0,1,2,0,2,3]);F=x.createBuffer();z=x.createBuffer();x.bindBuffer(x.ARRAY_BUFFER,F);x.bufferData(x.ARRAY_BUFFER,K,x.STATIC_DRAW);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,
z);x.bufferData(x.ELEMENT_ARRAY_BUFFER,L,x.STATIC_DRAW);var K=x.createProgram(),L=x.createShader(x.VERTEX_SHADER),N=x.createShader(x.FRAGMENT_SHADER);x.shaderSource(L,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
x.shaderSource(N,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
x.compileShader(L);x.compileShader(N);x.attachShader(K,L);x.attachShader(K,N);x.linkProgram(K);G=K;v=x.getAttribLocation(G,"position");y=x.getAttribLocation(G,"uv");c=x.getUniformLocation(G,"uvOffset");d=x.getUniformLocation(G,"uvScale");e=x.getUniformLocation(G,"rotation");f=x.getUniformLocation(G,"scale");g=x.getUniformLocation(G,"color");h=x.getUniformLocation(G,"map");k=x.getUniformLocation(G,"opacity");n=x.getUniformLocation(G,"modelViewMatrix");p=x.getUniformLocation(G,"projectionMatrix");q=
x.getUniformLocation(G,"fogType");m=x.getUniformLocation(G,"fogDensity");t=x.getUniformLocation(G,"fogNear");s=x.getUniformLocation(G,"fogFar");r=x.getUniformLocation(G,"fogColor");u=x.getUniformLocation(G,"alphaTest");K=document.createElement("canvas");K.width=8;K.height=8;L=K.getContext("2d");L.fillStyle="white";L.fillRect(0,0,8,8);E=new THREE.Texture(K);E.needsUpdate=!0}x.useProgram(G);x.enableVertexAttribArray(v);x.enableVertexAttribArray(y);x.disable(x.CULL_FACE);x.enable(x.BLEND);x.bindBuffer(x.ARRAY_BUFFER,
F);x.vertexAttribPointer(v,2,x.FLOAT,!1,16,0);x.vertexAttribPointer(y,2,x.FLOAT,!1,16,8);x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,z);x.uniformMatrix4fv(p,!1,M.projectionMatrix.elements);x.activeTexture(x.TEXTURE0);x.uniform1i(h,0);L=K=0;(N=U.fog)?(x.uniform3f(r,N.color.r,N.color.g,N.color.b),N instanceof THREE.Fog?(x.uniform1f(t,N.near),x.uniform1f(s,N.far),x.uniform1i(q,1),L=K=1):N instanceof THREE.FogExp2&&(x.uniform1f(m,N.density),x.uniform1i(q,2),L=K=2)):(x.uniform1i(q,0),L=K=0);for(var N=0,T=b.length;N<
T;N++){var Q=b[N];Q._modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,Q.matrixWorld);Q.z=-Q._modelViewMatrix.elements[14]}b.sort(C);for(var W=[],N=0,T=b.length;N<T;N++){var Q=b[N],O=Q.material;x.uniform1f(u,O.alphaTest);x.uniformMatrix4fv(n,!1,Q._modelViewMatrix.elements);Q.matrixWorld.decompose(w,D,A);W[0]=A.x;W[1]=A.y;Q=0;U.fog&&O.fog&&(Q=L);K!==Q&&(x.uniform1i(q,Q),K=Q);null!==O.map?(x.uniform2f(c,O.map.offset.x,O.map.offset.y),x.uniform2f(d,O.map.repeat.x,O.map.repeat.y)):(x.uniform2f(c,
0,0),x.uniform2f(d,1,1));x.uniform1f(k,O.opacity);x.uniform3f(g,O.color.r,O.color.g,O.color.b);x.uniform1f(e,O.rotation);x.uniform2fv(f,W);a.setBlending(O.blending,O.blendEquation,O.blendSrc,O.blendDst);a.setDepthTest(O.depthTest);a.setDepthWrite(O.depthWrite);O.map&&O.map.image&&O.map.image.width?a.setTexture(O.map,0):a.setTexture(E,0);x.drawElements(x.TRIANGLES,6,x.UNSIGNED_SHORT,0)}x.enable(x.CULL_FACE);a.resetGLState()}}};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))},void 0,d)};for(var h=0,k=a.length;h<k;++h)b(h);return f},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),n=k.data,p=0;p<d;p++)for(var q=0;q<e;q++){var m=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,s=0>p-1?0:p-1,r=p+1>d-1?d-1:p+1,u=[],v=[0,0,h[4*(q*d+p)]/255*b];u.push([-1,0,h[4*(q*d+s)]/255*b]);u.push([-1,-1,h[4*(m*d+s)]/255*b]);u.push([0,-1,h[4*(m*d+p)]/255*b]);u.push([1,-1,h[4*(m*d+r)]/255*b]);u.push([1,0,h[4*(q*d+r)]/255*b]);u.push([1,1,h[4*(t*d+r)]/255*b]);u.push([0,1,h[4*(t*d+p)]/255*
b]);u.push([-1,1,h[4*(t*d+s)]/255*b]);m=[];s=u.length;for(t=0;t<s;t++){var r=u[t],y=u[(t+1)%s],r=[r[0]-v[0],r[1]-v[1],r[2]-v[2]],y=[y[0]-v[0],y[1]-v[1],y[2]-v[2]];m.push(c([r[1]*y[2]-r[2]*y[1],r[2]*y[0]-r[0]*y[2],r[0]*y[1]-r[1]*y[0]]))}u=[0,0,0];for(t=0;t<m.length;t++)u[0]+=m[t][0],u[1]+=m[t][1],u[2]+=m[t][2];u[0]/=m.length;u[1]/=m.length;u[2]/=m.length;v=4*(q*d+p);n[v]=(u[0]+1)/2*255|0;n[v+1]=(u[1]+1)/2*255|0;n[v+2]=255*u[2]|0;n[v+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,n,p,q,m,t,s,r,u,v=b.glyphs[a]||b.glyphs["?"];if(v){if(v.o)for(b=v._cachedOutline||(v._cachedOutline=v.o.split(" ")),n=b.length,a=0;a<n;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;p=b[a++]*c;e.moveTo(k,p);
break;case "l":k=b[a++]*c+d;p=b[a++]*c;e.lineTo(k,p);break;case "q":k=b[a++]*c+d;p=b[a++]*c;t=b[a++]*c+d;s=b[a++]*c;e.quadraticCurveTo(t,s,k,p);if(g=f[f.length-1])for(q=g.x,m=g.y,g=1,h=this.divisions;g<=h;g++){var y=g/h;THREE.Shape.Utils.b2(y,q,t,k);THREE.Shape.Utils.b2(y,m,s,p)}break;case "b":if(k=b[a++]*c+d,p=b[a++]*c,t=b[a++]*c+d,s=b[a++]*c,r=b[a++]*c+d,u=b[a++]*c,e.bezierCurveTo(t,s,r,u,k,p),g=f[f.length-1])for(q=g.x,m=g.y,g=1,h=this.divisions;g<=h;g++)y=g/h,THREE.Shape.Utils.b3(y,q,t,r,k),THREE.Shape.Utils.b3(y,
m,s,u,p)}return{offset:v.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,n,p;if(0<b(a))for(n=0;n<e;n++)g[n]=n;else for(n=0;n<e;n++)g[n]=e-1-n;var q=2*e;for(n=e-1;2<e;){if(0>=q--){console.log("Warning, unable to triangulate polygon!");break}k=n;e<=k&&(k=0);n=k+1;e<=n&&(n=0);p=n+1;e<=p&&(p=0);var m;a:{var t=m=void 0,s=void 0,r=void 0,u=void 0,v=void 0,y=void 0,C=void 0,x=void 0,
t=a[g[k]].x,s=a[g[k]].y,r=a[g[n]].x,u=a[g[n]].y,v=a[g[p]].x,y=a[g[p]].y;if(1E-10>(r-t)*(y-s)-(u-s)*(v-t))m=!1;else{var F=void 0,z=void 0,G=void 0,E=void 0,w=void 0,D=void 0,A=void 0,U=void 0,M=void 0,K=void 0,M=U=A=x=C=void 0,F=v-r,z=y-u,G=t-v,E=s-y,w=r-t,D=u-s;for(m=0;m<e;m++)if(C=a[g[m]].x,x=a[g[m]].y,!(C===t&&x===s||C===r&&x===u||C===v&&x===y)&&(A=C-t,U=x-s,M=C-r,K=x-u,C-=v,x-=y,M=F*K-z*M,A=w*U-D*A,U=G*x-E*C,-1E-10<=M&&-1E-10<=U&&-1E-10<=A)){m=!1;break a}m=!0}}if(m){f.push([a[g[k]],a[g[n]],a[g[p]]]);
h.push([g[k],g[n],g[p]]);k=n;for(p=n+1;p<e;k++,p++)g[k]=g[p];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;
THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.panner=this.context.createPanner();this.panner.connect(this.gain)};THREE.Audio.prototype=Object.create(THREE.Object3D.prototype);THREE.Audio.prototype.constructor=THREE.Audio;
THREE.Audio.prototype.load=function(a){var b=this,c=new XMLHttpRequest;c.open("GET",a,!0);c.responseType="arraybuffer";c.onload=function(a){b.context.decodeAudioData(this.response,function(a){b.source.buffer=a;b.source.connect(b.panner);b.source.start(0)})};c.send();return this};THREE.Audio.prototype.setLoop=function(a){this.source.loop=a};THREE.Audio.prototype.setRefDistance=function(a){this.panner.refDistance=a};THREE.Audio.prototype.setRolloffFactor=function(a){this.panner.rolloffFactor=a};
THREE.Audio.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3;return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}();THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=new (window.AudioContext||window.webkitAudioContext)};THREE.AudioListener.prototype=Object.create(THREE.Object3D.prototype);THREE.AudioListener.prototype.constructor=THREE.AudioListener;
THREE.AudioListener.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g){THREE.Object3D.prototype.updateMatrixWorld.call(this,g);g=this.context.listener;var h=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.subVectors(a,f);g.setPosition(a.x,a.y,a.z);g.setOrientation(d.x,d.y,d.z,h.x,h.y,h.z);g.setVelocity(e.x,e.y,e.z);f.copy(a)}}();
THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.constructor=THREE.CurvePath;THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,n,p,q=a[0]instanceof THREE.Vector3;p=q?new THREE.Vector3:new THREE.Vector2;k=0;for(n=a.length;k<n;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),p.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);THREE.Gyroscope.prototype.constructor=THREE.Gyroscope;
THREE.Gyroscope.prototype.updateMatrixWorld=function(){var a=new THREE.Vector3,b=new THREE.Quaternion,c=new THREE.Vector3,d=new THREE.Vector3,e=new THREE.Quaternion,f=new THREE.Vector3;return function(g){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||g)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(d,e,f),this.matrix.decompose(a,b,c),this.matrixWorld.compose(d,b,f)):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,g=!0;for(var h=0,k=this.children.length;h<k;h++)this.children[h].updateMatrixWorld(g)}}();THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.Path.prototype.constructor=THREE.Path;THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};
THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};
THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,n,p,q,m,t,s,r;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];m=f[1];0<c.length?(g=c[c.length-1],t=g.x,
s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)r=f/a,g=THREE.Shape.Utils.b2(r,t,q,h),r=THREE.Shape.Utils.b2(r,s,m,k),c.push(new THREE.Vector2(g,r));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];m=f[1];n=f[2];p=f[3];0<c.length?(g=c[c.length-1],t=g.x,s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)r=f/a,g=THREE.Shape.Utils.b3(r,t,q,n,h),r=THREE.Shape.Utils.b3(r,s,m,p,k),c.push(new THREE.Vector2(g,r));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;r=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;r=r.concat(f[0]);r=new THREE.SplineCurve(r);for(f=1;f<=g;f++)c.push(r.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];m=f[2];n=f[3];g=f[4];q=!!f[5];t=g-n;s=2*a;for(f=1;f<=s;f++)r=f/s,q||(r=1-r),r=n+r*t,g=h+m*Math.cos(r),r=k+m*Math.sin(r),c.push(new THREE.Vector2(g,r));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],m=f[2],p=f[3],n=f[4],g=f[5],q=!!f[6],t=g-n,s=2*a,f=1;f<=s;f++)r=f/s,q||
(r=1-r),r=n+r*t,g=h+m*Math.cos(r),r=k+p*Math.sin(r),c.push(new THREE.Vector2(g,r))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],g=new THREE.Shape;g.actions=e.actions;g.curves=e.curves;b.push(g)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,g=0;g<c;e=g++){var f=b[e],h=b[g],k=h.x-f.x,m=h.y-f.y;if(1E-10<Math.abs(m)){if(0>m&&(f=b[g],k=-k,h=b[e],m=-m),!(a.y<f.y||a.y>h.y))if(a.y==f.y){if(a.x==f.x)return!0}else{e=m*(a.x-f.x)-k*(a.y-f.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==f.y&&(h.x<=a.x&&a.x<=f.x||f.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var n=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),n=a?!n:n;
h=[];var p=[],q=[],m=0,t;p[m]=void 0;q[m]=[];var s,r;s=0;for(r=e.length;s<r;s++)g=e[s],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!n&&p[m]&&m++,p[m]={s:new THREE.Shape,p:t},p[m].s.actions=g.actions,p[m].s.curves=g.curves,n&&m++,q[m]=[]):q[m].push({h:g,p:t[0]});if(!p[0])return c(e);if(1<p.length){s=!1;r=[];g=0;for(e=p.length;g<e;g++)h[g]=[];g=0;for(e=p.length;g<e;g++)for(f=q[g],n=0;n<f.length;n++){m=f[n];t=!0;for(var u=0;u<p.length;u++)d(m.p,p[u].p)&&(g!=u&&r.push({froms:g,tos:u,
hole:n}),t?(t=!1,h[u].push(m)):s=!0);t&&h[g].push(m)}0<r.length&&(s||(q=h))}s=0;for(r=p.length;s<r;s++)for(h=p[s].s,k.push(h),g=q[s],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.constructor=THREE.Shape;THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};
THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};
THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,g){var f=b.x-a.x,h=b.y-a.y,k=e.x-d.x,n=e.y-d.y,p=a.x-d.x,q=a.y-d.y,G=h*k-f*n,E=h*p-f*q;if(1E-10<Math.abs(G)){if(0<G){if(0>E||E>G)return[];k=n*p-k*q;if(0>k||k>G)return[]}else{if(0<E||E<G)return[];k=n*p-k*q;if(0<k||k<G)return[]}if(0==k)return!g||0!=E&&E!=G?[a]:[];if(k==G)return!g||0!=E&&E!=G?[b]:[];if(0==E)return[d];
if(E==G)return[e];g=k/G;return[{x:a.x+g*f,y:a.y+g*h}]}if(0!=E||n*p!=k*q)return[];h=0==f&&0==h;k=0==k&&0==n;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=f?(a.x<b.x?(f=a,k=a.x,h=b,a=b.x):(f=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,G=d.x,n=e,d=e.x):(b=e,G=e.x,n=d,d=d.x)):(a.y<b.y?(f=a,k=a.y,h=b,a=b.y):(f=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,G=d.y,n=e,d=e.y):(b=e,G=e.y,n=d,d=d.y));return k<=G?a<G?[]:a==G?g?[]:[b]:a<=d?[b,h]:[b,n]:k>d?[]:k==d?g?[]:[f]:a<=d?[f,h]:
[f,n]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,n,p={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)n=h[f].x+":"+h[f].y,void 0!==p[n]&&console.log("Duplicate point",n),p[n]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;
d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<n.length;e++)for(f=b[n[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,n=[],p,q,z,G,E,w=[],D,A,U,M=0;for(p=b.length;M<p;M++)n.push(M);D=0;for(var K=2*n.length;0<n.length;){K--;if(0>K){console.log("Infinite Loop! Holes left:"+
n.length+", Probably Hole outside Shape!");break}for(q=D;q<h.length;q++){z=h[q];p=-1;for(M=0;M<n.length;M++)if(G=n[M],E=z.x+":"+z.y+":"+G,void 0===w[E]){k=b[G];for(A=0;A<k.length;A++)if(G=k[A],c(q,A)&&!f(z,G)&&!g(z,G)){p=A;n.splice(M,1);D=h.slice(0,q+1);G=h.slice(q);A=k.slice(p);U=k.slice(0,p+1);h=D.concat(A).concat(U).concat(G);D=q;break}if(0<=p)break;w[E]=!0}if(0<=p)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=q[f],h=0;3>h;h++)n=k[h].x+":"+k[h].y,
n=p[n],void 0!==n&&(k[h]=n);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,
b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=new THREE.Vector2;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return b};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=new THREE.Vector2;b.x=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);return b.normalize()};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;
THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;
THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector2;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);return c};THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};
THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);a=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;b=new THREE.Vector2;b.x=this.aX+this.xRadius*Math.cos(a);b.y=this.aY+this.yRadius*Math.sin(a);return b};
THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});
THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);b.y=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);b.z=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return b});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b=new THREE.Vector3;b.x=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);b.y=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b.z=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return b});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=this.points;a*=b.length-0;var c=Math.floor(a);a-=c;var c=c+(0<c?0:(Math.floor(Math.abs(c)/b.length)+1)*b.length),d=b[(c-1)%b.length],e=b[c%b.length],f=b[(c+1)%b.length],b=b[(c+2)%b.length],c=new THREE.Vector3;c.x=THREE.Curve.Utils.interpolate(d.x,e.x,f.x,b.x,a);c.y=THREE.Curve.Utils.interpolate(d.y,e.y,f.y,b.y,a);c.z=THREE.Curve.Utils.interpolate(d.z,e.z,f.z,b.z,a);return c});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0===a.initialized)return a;for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].resetBlendWeights();
for(b=0;b<this.animations.length;b++)this.animations[b].update(a)}};THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};THREE.Animation.prototype.keyTypes=["pos","rot","scl"];
THREE.Animation.prototype.play=function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)};THREE.Animation.prototype.stop=function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)};
THREE.Animation.prototype.reset=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0===c.animationCache&&(c.animationCache={animations:{},blending:{positionWeight:0,quaternionWeight:0,scaleWeight:0}});void 0===c.animationCache.animations[this.data.name]&&(c.animationCache.animations[this.data.name]={},c.animationCache.animations[this.data.name].prevKey={pos:0,rot:0,scl:0},c.animationCache.animations[this.data.name].nextKey={pos:0,rot:0,scl:0},c.animationCache.animations[this.data.name].originalMatrix=
c.matrix);for(var c=c.animationCache.animations[this.data.name],d=0;3>d;d++){for(var e=this.keyTypes[d],f=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(e,a,1);g.time<this.currentTime&&g.index>f.index;)f=g,g=this.getNextKeyWith(e,a,g.index+1);c.prevKey[e]=f;c.nextKey[e]=g}}};
THREE.Animation.prototype.resetBlendWeights=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];void 0!==c.animationCache&&(c.animationCache.blending.positionWeight=0,c.animationCache.blending.quaternionWeight=0,c.animationCache.blending.scaleWeight=0)}};
THREE.Animation.prototype.update=function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,m,t,s,r;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];s=a[c[2]];r=a[c[3]];c=e*e;m=e*c;d[0]=f(q[0],t[0],s[0],r[0],e,c,m);d[1]=f(q[1],t[1],s[1],r[1],e,c,m);d[2]=f(q[2],t[2],s[2],r[2],e,c,m);return d},f=function(a,b,c,d,e,f,m){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*m+
(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(this.currentTime>f||0>this.currentTime)this.loop?(this.currentTime%=f,0>this.currentTime&&(this.currentTime+=f),this.reset()):this.stop();f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],n=k.animationCache.animations[this.data.name],p=k.animationCache.blending,q=0;3>q;q++){var m=this.keyTypes[q],t=n.prevKey[m],s=n.nextKey[m];if(0<this.timeScale&&
s.time<=this.currentTime||0>this.timeScale&&t.time>=this.currentTime){t=this.data.hierarchy[f].keys[0];for(s=this.getNextKeyWith(m,f,1);s.time<this.currentTime&&s.index>t.index;)t=s,s=this.getNextKeyWith(m,f,s.index+1);n.prevKey[m]=t;n.nextKey[m]=s}var r=(this.currentTime-t.time)/(s.time-t.time),u=t[m],v=s[m];0>r&&(r=0);1<r&&(r=1);if("pos"===m)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=u[0]+(v[0]-u[0])*r,c.y=u[1]+(v[1]-u[1])*r,c.z=u[2]+(v[2]-u[2])*r,t=this.weight/(this.weight+p.positionWeight),
k.position.lerp(c,t),p.positionWeight+=this.weight;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,t.index-1).pos,a[1]=u,a[2]=v,a[3]=this.getNextKeyWith("pos",f,s.index+1).pos,r=.33*r+.33,s=e(a,r),t=this.weight/(this.weight+p.positionWeight),p.positionWeight+=this.weight,m=k.position,m.x+=(s[0]-m.x)*t,m.y+=(s[1]-m.y)*t,m.z+=(s[2]-m.z)*t,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&
(r=e(a,1.01*r),b.set(r[0],r[1],r[2]),b.sub(m),b.y=0,b.normalize(),r=Math.atan2(b.x,b.z),k.rotation.set(0,r,0))}else"rot"===m?(THREE.Quaternion.slerp(u,v,d,r),0===p.quaternionWeight?(k.quaternion.copy(d),p.quaternionWeight=this.weight):(t=this.weight/(this.weight+p.quaternionWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,t),p.quaternionWeight+=this.weight)):"scl"===m&&(c.x=u[0]+(v[0]-u[0])*r,c.y=u[1]+(v[1]-u[1])*r,c.z=u[2]+(v[2]-u[2])*r,t=this.weight/(this.weight+p.scaleWeight),k.scale.lerp(c,
t),p.scaleWeight+=this.weight)}return!0}}}();THREE.Animation.prototype.getNextKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=c[1],this.startTime=Math.min(c[0].time,
this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)};THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=
f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.currentFrame=this.lastFrame=0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={constructor:THREE.MorphAnimation,play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(a){if(!1!==this.isPlaying){this.currentTime+=a;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);a=this.duration/this.frames;var b=Math.floor(this.currentTime/a);b!=this.currentFrame&&(this.mesh.morphTargetInfluences[this.lastFrame]=0,this.mesh.morphTargetInfluences[this.currentFrame]=
1,this.mesh.morphTargetInfluences[b]=0,this.lastFrame=this.currentFrame,this.currentFrame=b);this.mesh.morphTargetInfluences[b]=this.currentTime%a/a;this.mesh.morphTargetInfluences[this.lastFrame]=1-this.mesh.morphTargetInfluences[b]}}};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,r){var u,v=h.widthSegments,y=h.heightSegments,C=e/2,x=f/2,F=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)u="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)u="y",y=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)u="x",v=h.depthSegments;var z=v+1,G=y+1,E=e/v,w=f/y,D=new THREE.Vector3;D[u]=0<g?1:-1;for(e=0;e<G;e++)for(f=0;f<z;f++){var A=new THREE.Vector3;A[a]=(f*E-C)*c;A[b]=(e*w-x)*d;A[u]=g;h.vertices.push(A)}for(e=
0;e<y;e++)for(f=0;f<v;f++)x=f+z*e,a=f+z*(e+1),b=f+1+z*(e+1),c=f+1+z*e,d=new THREE.Vector2(f/v,1-e/y),g=new THREE.Vector2(f/v,1-(e+1)/y),u=new THREE.Vector2((f+1)/v,1-(e+1)/y),C=new THREE.Vector2((f+1)/v,1-e/y),x=new THREE.Face3(x+F,a+F,c+F),x.normal.copy(D),x.vertexNormals.push(D.clone(),D.clone(),D.clone()),x.materialIndex=r,h.faces.push(x),h.faceVertexUvs[0].push([d,g,C]),x=new THREE.Face3(a+F,b+F,c+F),x.normal.copy(D),x.vertexNormals.push(D.clone(),D.clone(),D.clone()),x.materialIndex=r,h.faces.push(x),
h.faceVertexUvs[0].push([g.clone(),u,C.clone()])}THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(.5,.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,
0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;
THREE.CubeGeometry=function(a,b,c,d,e,f){console.warn("THREE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=c/2,n,p,q=[],m=[];for(p=0;p<=e;p++){var t=[],s=[],r=p/e,u=r*(b-a)+a;for(n=0;n<=d;n++){var v=n/d,y=new THREE.Vector3;y.x=u*Math.sin(v*h+
g);y.y=-r*c+k;y.z=u*Math.cos(v*h+g);this.vertices.push(y);t.push(this.vertices.length-1);s.push(new THREE.Vector2(v,1-r))}q.push(t);m.push(s)}c=(b-a)/c;for(n=0;n<d;n++)for(0!==a?(g=this.vertices[q[0][n]].clone(),h=this.vertices[q[0][n+1]].clone()):(g=this.vertices[q[1][n]].clone(),h=this.vertices[q[1][n+1]].clone()),g.setY(Math.sqrt(g.x*g.x+g.z*g.z)*c).normalize(),h.setY(Math.sqrt(h.x*h.x+h.z*h.z)*c).normalize(),p=0;p<e;p++){var t=q[p][n],s=q[p+1][n],r=q[p+1][n+1],u=q[p][n+1],v=g.clone(),y=g.clone(),
C=h.clone(),x=h.clone(),F=m[p][n].clone(),z=m[p+1][n].clone(),G=m[p+1][n+1].clone(),E=m[p][n+1].clone();this.faces.push(new THREE.Face3(t,s,u,[v,y,x]));this.faceVertexUvs[0].push([F,z,E]);this.faces.push(new THREE.Face3(s,r,u,[y.clone(),C,x.clone()]));this.faceVertexUvs[0].push([z.clone(),G,E.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,k,0)),n=0;n<d;n++)t=q[0][n],s=q[0][n+1],r=this.vertices.length-1,v=new THREE.Vector3(0,1,0),y=new THREE.Vector3(0,1,0),C=new THREE.Vector3(0,
1,0),F=m[0][n].clone(),z=m[0][n+1].clone(),G=new THREE.Vector2(z.x,0),this.faces.push(new THREE.Face3(t,s,r,[v,y,C])),this.faceVertexUvs[0].push([F,z,G]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-k,0)),n=0;n<d;n++)t=q[e][n+1],s=q[e][n],r=this.vertices.length-1,v=new THREE.Vector3(0,-1,0),y=new THREE.Vector3(0,-1,0),C=new THREE.Vector3(0,-1,0),F=m[e][n+1].clone(),z=m[e][n].clone(),G=new THREE.Vector2(z.x,1),this.faces.push(new THREE.Face3(t,s,r,[v,y,C])),this.faceVertexUvs[0].push([F,
z,G]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;
THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(1E-10<Math.abs(d*g-e*f)){var k=Math.sqrt(h),m=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2)}else a=!1,1E-10<d?1E-10<f&&(a=!0):-1E-10>d?-1E-10>f&&(a=!0):Math.sign(e)==
Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d)}function e(a,b){var c,d;for(H=a.length;0<=--H;){c=H;d=H-1;0>d&&(d=a.length-1);for(var e=0,f=t+2*p,e=0;e<f;e++){var g=ga*e,h=ga*(e+1),k=b+c+g,g=b+d+g,m=b+d+h,h=b+c+h,k=k+U,g=g+U,m=m+U,h=h+U;A.faces.push(new THREE.Face3(k,g,h,null,null,y));A.faces.push(new THREE.Face3(g,m,h,null,null,y));k=C.generateSideWallUV(A,k,g,m,h);A.faceVertexUvs[0].push([k[0],k[1],k[3]]);A.faceVertexUvs[0].push([k[1],
k[2],k[3]])}}}function f(a,b,c){A.vertices.push(new THREE.Vector3(a,b,c))}function g(a,b,c){a+=U;b+=U;c+=U;A.faces.push(new THREE.Face3(a,b,c,null,null,v));a=C.generateTopUV(A,a,b,c);A.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,n=void 0!==b.bevelSize?b.bevelSize:k-2,p=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:!0,m=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,s=b.extrudePath,
r,u=!1,v=b.material,y=b.extrudeMaterial,C=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,x,F,z,G;s&&(r=s.getSpacedPoints(t),u=!0,q=!1,x=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,t,!1),F=new THREE.Vector3,z=new THREE.Vector3,G=new THREE.Vector3);q||(n=k=p=0);var E,w,D,A=this,U=this.vertices.length,s=a.extractPoints(m),m=s.shape,M=s.holes;if(s=!THREE.Shape.Utils.isClockWise(m)){m=m.reverse();w=0;for(D=M.length;w<D;w++)E=M[w],THREE.Shape.Utils.isClockWise(E)&&
(M[w]=E.reverse());s=!1}var K=THREE.Shape.Utils.triangulateShape(m,M),L=m;w=0;for(D=M.length;w<D;w++)E=M[w],m=m.concat(E);var N,T,Q,W,O,ga=m.length,ea,xa=K.length,s=[],H=0;Q=L.length;N=Q-1;for(T=H+1;H<Q;H++,N++,T++)N===Q&&(N=0),T===Q&&(T=0),s[H]=d(L[H],L[N],L[T]);var $a=[],qa,ya=s.concat();w=0;for(D=M.length;w<D;w++){E=M[w];qa=[];H=0;Q=E.length;N=Q-1;for(T=H+1;H<Q;H++,N++,T++)N===Q&&(N=0),T===Q&&(T=0),qa[H]=d(E[H],E[N],E[T]);$a.push(qa);ya=ya.concat(qa)}for(N=0;N<p;N++){Q=N/p;W=k*(1-Q);T=n*Math.sin(Q*
Math.PI/2);H=0;for(Q=L.length;H<Q;H++)O=c(L[H],s[H],T),f(O.x,O.y,-W);w=0;for(D=M.length;w<D;w++)for(E=M[w],qa=$a[w],H=0,Q=E.length;H<Q;H++)O=c(E[H],qa[H],T),f(O.x,O.y,-W)}T=n;for(H=0;H<ga;H++)O=q?c(m[H],ya[H],T):m[H],u?(z.copy(x.normals[0]).multiplyScalar(O.x),F.copy(x.binormals[0]).multiplyScalar(O.y),G.copy(r[0]).add(z).add(F),f(G.x,G.y,G.z)):f(O.x,O.y,0);for(Q=1;Q<=t;Q++)for(H=0;H<ga;H++)O=q?c(m[H],ya[H],T):m[H],u?(z.copy(x.normals[Q]).multiplyScalar(O.x),F.copy(x.binormals[Q]).multiplyScalar(O.y),
G.copy(r[Q]).add(z).add(F),f(G.x,G.y,G.z)):f(O.x,O.y,h/t*Q);for(N=p-1;0<=N;N--){Q=N/p;W=k*(1-Q);T=n*Math.sin(Q*Math.PI/2);H=0;for(Q=L.length;H<Q;H++)O=c(L[H],s[H],T),f(O.x,O.y,h+W);w=0;for(D=M.length;w<D;w++)for(E=M[w],qa=$a[w],H=0,Q=E.length;H<Q;H++)O=c(E[H],qa[H],T),u?f(O.x,O.y+r[t-1].y,r[t-1].x+W):f(O.x,O.y,h+W)}(function(){if(q){var a;a=0*ga;for(H=0;H<xa;H++)ea=K[H],g(ea[2]+a,ea[1]+a,ea[0]+a);a=t+2*p;a*=ga;for(H=0;H<xa;H++)ea=K[H],g(ea[0]+a,ea[1]+a,ea[2]+a)}else{for(H=0;H<xa;H++)ea=K[H],g(ea[2],
ea[1],ea[0]);for(H=0;H<xa;H++)ea=K[H],g(ea[0]+ga*t,ea[1]+ga*t,ea[2]+ga*t)}})();(function(){var a=0;e(L,a);a+=L.length;w=0;for(D=M.length;w<D;w++)E=M[w],e(E,a),a+=E.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,
1-d.z),new THREE.Vector2(e.y,1-e.z)]}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,n=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=n.length;e<f;e++)g=n[e],THREE.Shape.Utils.isClockWise(g)&&(n[e]=g.reverse());var p=THREE.Shape.Utils.triangulateShape(k,n);e=0;for(f=n.length;e<f;e++)g=n[e],
k=k.concat(g);n=k.length;f=p.length;for(e=0;e<n;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)n=p[e],k=n[0]+h,g=n[1]+h,n=n[2]+h,this.faces.push(new THREE.Face3(k,g,n,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,n))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,n=Math.cos(k),p=Math.sin(k),k=0,q=a.length;k<q;k++){var m=a[k],t=new THREE.Vector3;t.x=n*m.x-p*m.y;t.y=p*m.x+n*m.y;t.z=m.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=p=k+c*g;d=p+c;var n=p+1+c,p=p+1,m=g*f,t=k*e,s=
m+f,r=t+e;this.faces.push(new THREE.Face3(b,d,p));this.faceVertexUvs[0].push([new THREE.Vector2(m,t),new THREE.Vector2(s,t),new THREE.Vector2(m,r)]);this.faces.push(new THREE.Face3(d,n,p));this.faceVertexUvs[0].push([new THREE.Vector2(s,t),new THREE.Vector2(s,r),new THREE.Vector2(m,r)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;
THREE.PlaneGeometry=function(a,b,c,d){console.info("THREE.PlaneGeometry: Consider using THREE.PlaneBufferGeometry for lower memory footprint.");THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d))};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;
THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,n=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var p=new Float32Array(g*h*2),q=0,m=0,t=0;t<h;t++)for(var s=t*n-f,r=0;r<g;r++)b[q]=r*k-e,b[q+1]=-s,a[q+2]=1,p[m]=r/c,p[m+1]=1-t/d,q+=3,m+=2;q=0;e=new (65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(t=0;t<d;t++)for(r=
0;r<c;r++)f=r+g*(t+1),h=r+1+g*(t+1),k=r+1+g*t,e[q]=r+g*t,e[q+1]=f,e[q+2]=k,e[q+3]=f,e[q+4]=h,e[q+5]=k,q+=6;this.addAttribute("index",new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(p,2))};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,n=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var p=new THREE.Vector3,q=e+g/c*f;p.x=k*Math.cos(q);p.y=k*Math.sin(q);this.vertices.push(p);h.push(new THREE.Vector2((p.x/b+1)/2,
(p.y/b+1)/2))}k+=n}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,n=q+c+1,p=q+c+2,this.faces.push(new THREE.Face3(f,n,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[n].clone(),h[p].clone()]),f=q,n=q+c+2,p=q+1,this.faces.push(new THREE.Face3(f,n,p,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[n].clone(),h[p].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};
THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,n=[],p=[];for(k=0;k<=c;k++){var q=[],m=[];for(h=0;h<=b;h++){var t=h/b,s=k/c,r=new THREE.Vector3;r.x=-a*Math.cos(d+t*e)*Math.sin(f+s*g);
r.y=a*Math.cos(f+s*g);r.z=a*Math.sin(d+t*e)*Math.sin(f+s*g);this.vertices.push(r);q.push(this.vertices.length-1);m.push(new THREE.Vector2(t,1-s))}n.push(q);p.push(m)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=n[k][h+1];e=n[k][h];f=n[k+1][h];g=n[k+1][h+1];var q=this.vertices[d].clone().normalize(),m=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),s=this.vertices[g].clone().normalize(),r=p[k][h+1].clone(),u=p[k][h].clone(),v=p[k+1][h].clone(),y=p[k+1][h+1].clone();Math.abs(this.vertices[d].y)===
a?(r.x=(r.x+u.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,s])),this.faceVertexUvs[0].push([r,v,y])):Math.abs(this.vertices[f].y)===a?(v.x=(v.x+y.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,m,t])),this.faceVertexUvs[0].push([r,u,v])):(this.faces.push(new THREE.Face3(d,e,g,[q,m,s])),this.faceVertexUvs[0].push([r,u,y]),this.faces.push(new THREE.Face3(e,f,g,[m.clone(),t,s.clone()])),this.faceVertexUvs[0].push([u.clone(),v,y.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry"};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var n=0;n<=d;n++){var p=n/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(p);f.y=a*Math.sin(p);var m=new THREE.Vector3;m.x=(a+b*Math.cos(q))*Math.cos(p);m.y=(a+b*Math.cos(q))*Math.sin(p);m.z=b*Math.sin(q);this.vertices.push(m);g.push(new THREE.Vector2(n/
d,k/c));h.push(m.clone().sub(f).normalize())}for(k=1;k<=c;k++)for(n=1;n<=d;n++)a=(d+1)*k+n-1,b=(d+1)*(k-1)+n-1,e=(d+1)*(k-1)+n,f=(d+1)*k+n,p=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),p=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(p),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};
THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*.5;g=d*(2+b)*g*.5;d=e*d*Math.sin(a)*.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),n=new THREE.Vector3,p=new THREE.Vector3,q=new THREE.Vector3,m=0;m<c;++m){k[m]=
Array(d);var t=m/c*2*e*Math.PI,s=h(t,f,e,a,g),t=h(t+.01,f,e,a,g);n.subVectors(t,s);p.addVectors(t,s);q.crossVectors(n,p);p.crossVectors(q,n);q.normalize();p.normalize();for(t=0;t<d;++t){var r=t/d*2*Math.PI,u=-b*Math.cos(r),r=b*Math.sin(r),v=new THREE.Vector3;v.x=s.x+u*p.x+r*q.x;v.y=s.y+u*p.y+r*q.y;v.z=s.z+u*p.z+r*q.z;k[m][t]=this.vertices.push(v)-1}}for(m=0;m<c;++m)for(t=0;t<d;++t)e=(m+1)%c,f=(t+1)%d,a=k[m][t],b=k[e][t],e=k[e][f],f=k[m][f],g=new THREE.Vector2(m/c,t/d),n=new THREE.Vector2((m+1)/c,
t/d),p=new THREE.Vector2((m+1)/c,(t+1)/d),q=new THREE.Vector2(m/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,n,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([n.clone(),p,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;
THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,n=b+1,p,q,m,t,s,r=new THREE.Vector3,u,v,y;u=new THREE.TubeGeometry.FrenetFrames(a,b,e);v=u.normals;y=u.binormals;this.tangents=u.tangents;this.normals=v;this.binormals=y;for(u=0;u<n;u++)for(g[u]=[],p=u/(n-1),s=a.getPointAt(p),h=v[u],k=y[u],m=c*f(p),p=0;p<d;p++)q=
p/d*2*Math.PI,t=-m*Math.cos(q),q=m*Math.sin(q),r.copy(s),r.x+=t*h.x+q*k.x,r.y+=t*h.y+q*k.y,r.z+=t*h.z+q*k.z,g[u][p]=this.vertices.push(new THREE.Vector3(r.x,r.y,r.z))-1;for(u=0;u<b;u++)for(p=0;p<d;p++)f=e?(u+1)%b:u+1,n=(p+1)%d,a=g[u][p],c=g[f][p],f=g[f][n],n=g[u][n],r=new THREE.Vector2(u/b,p/d),v=new THREE.Vector2((u+1)/b,p/d),y=new THREE.Vector2((u+1)/b,(p+1)/d),h=new THREE.Vector2(u/b,(p+1)/d),this.faces.push(new THREE.Face3(a,c,n)),this.faceVertexUvs[0].push([r,v,h]),this.faces.push(new THREE.Face3(c,
f,n)),this.faceVertexUvs[0].push([v.clone(),y,h.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a)};
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var n,p,q;this.tangents=e;this.normals=f;this.binormals=g;for(n=0;n<b;n++)p=n/(b-1),e[n]=a.getTangentAt(p),e[n].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;n=Math.abs(e[0].x);p=Math.abs(e[0].y);q=Math.abs(e[0].z);n<=a&&(a=n,d.set(1,0,0));p<=a&&(a=p,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(n=1;n<b;n++)f[n]=f[n-1].clone(),g[n]=g[n-1].clone(),h.crossVectors(e[n-1],e[n]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[n-1].dot(e[n]),-1,1)),f[n].applyMatrix4(k.makeRotationAxis(h,d))),g[n].crossVectors(e[n],f[n]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),n=1;n<b;n++)f[n].applyMatrix4(k.makeRotationAxis(e[n],d*n)),g[n].crossVectors(e[n],
f[n])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);u.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(u.z,-u.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,b){var c=
Math.pow(2,b);Math.pow(4,b);for(var d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),m=[],n=0;n<=c;n++){m[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),s=c-n,r=0;r<=s;r++)m[n][r]=0==r&&n==c?p:e(p.clone().lerp(q,r/s))}for(n=0;n<c;n++)for(r=0;r<2*(c-n)-1;r++)d=Math.floor(r/2),0==r%2?f(m[n][d+1],m[n+1][d],m[n][d]):f(m[n][d+1],m[n+1][d+1],m[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,
a.y));return a.clone()}THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,n=0,p=a.length;n<p;n+=3)e(new THREE.Vector3(a[n],a[n+1],a[n+2]));a=this.vertices;for(var q=[],m=n=0,p=b.length;n<p;n+=3,m++){var t=a[b[n]],s=a[b[n+1]],r=a[b[n+2]];q[m]=new THREE.Face3(t.index,s.index,r.index,[t.clone(),s.clone(),r.clone()])}for(var u=new THREE.Vector3,n=0,p=q.length;n<p;n++)g(q[n],d);n=0;for(p=this.faceVertexUvs[0].length;n<
p;n++)b=this.faceVertexUvs[0][n],d=b[0].x,a=b[1].x,q=b[2].x,m=Math.max(d,Math.max(a,q)),t=Math.min(d,Math.min(a,q)),.9<m&&.1>t&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>q&&(b[2].x+=1));n=0;for(p=this.vertices.length;n<p;n++)this.vertices[n].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;
THREE.DodecahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,
11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b)};THREE.DodecahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;
THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b}};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b}};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;
THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b}};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,n,p=b+1;for(g=0;g<=c;g++)for(n=g/c,h=0;h<=b;h++)k=h/b,k=a(k,n),d.push(k);var q,m,t,s;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*p+h,d=g*p+h+1,n=(g+1)*p+h+1,k=(g+1)*p+h,q=new THREE.Vector2(h/b,g/c),m=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),s=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,
d,k)),f.push([q,m,s]),e.push(new THREE.Face3(d,n,k)),f.push([m.clone(),t,s.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;
THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,a-b,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;
THREE.CameraHelper.prototype.update=function(){var a,b,c=new THREE.Vector3,d=new THREE.Camera,e=function(e,g,h,k){c.set(g,h,k).unproject(d);e=b[e];if(void 0!==e)for(g=0,h=e.length;g<h;g++)a.vertices[e[g]].copy(c)};return function(){a=this.geometry;b=this.pointMap;d.projectionMatrix.copy(this.camera.projectionMatrix);e("c",0,0,-1);e("t",0,0,1);e("n1",-1,-1,-1);e("n2",1,-1,-1);e("n3",-1,1,-1);e("n4",1,1,-1);e("f1",-1,-1,1);e("f2",1,-1,1);e("f3",-1,1,1);e("f4",1,1,1);e("u1",.7,1.1,-1);e("u2",-.7,1.1,
-1);e("u3",0,2,-1);e("cf1",-1,0,1);e("cf2",1,0,1);e("cf3",0,-1,1);e("cf4",0,1,1);e("cn1",-1,0,-1);e("cn2",1,0,-1);e("cn3",0,-1,-1);e("cn4",0,1,-1);a.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();for(var n=k.vertices,k=k.faces,p=0,q=0,m=k.length;q<m;q++)for(var t=k[q],s=0;3>s;s++){d[0]=t[g[s]];d[1]=t[g[(s+1)%3]];d.sort(f);var r=d.toString();void 0===e[r]?(e[r]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},p++):e[r].face2=q}d=new Float32Array(6*p);f=0;for(r in e)if(g=e[r],void 0===g.face2||
.9999>k[g.face1].normal.dot(k[g.face2].normal))p=n[g.vert1],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z,p=n[g.vert2],d[f++]=p.x,d[f++]=p.y,d[f++]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3));THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b,c,d){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];a=new THREE.SphereGeometry(b,4,2);a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(b=0;8>b;b++)a.faces[b].color=this.colors[4>b?0:1];b=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(a,b);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;
THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrix=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};
THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,n=f.length;k<n;k++)for(var p=f[k],q=0,m=p.vertexNormals.length;q<m;q++){var t=p.vertexNormals[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.constructor=THREE.VertexTangentsHelper;
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,n=f.length;k<n;k++)for(var p=f[k],q=0,m=p.vertexTangents.length;q<m;q++){var t=p.vertexTangents[q];d[h].copy(e[p[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,n=a.geometry.faces,p=0,q=new Uint32Array(6*n.length),m=0,t=n.length;m<t;m++)for(var s=n[m],r=0;3>r;r++){d[0]=s[g[r]];d[1]=s[g[(r+1)%3]];d.sort(f);var u=d.toString();void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++)}d=new Float32Array(6*p);m=0;for(t=p;m<t;m++)for(r=0;2>r;r++)p=
k[q[2*m+r]],g=6*m+3*r,d[g+0]=p.x,d[g+1]=p.y,d[g+2]=p.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){k=a.geometry.attributes.position.array;t=a.geometry.attributes.index.array;n=a.geometry.drawcalls;p=0;0===n.length&&(n=[{count:t.length,index:0,start:0}]);for(var q=new Uint32Array(2*t.length),s=0,v=n.length;s<v;++s)for(var r=n[s].start,u=n[s].count,g=n[s].index,m=r,y=r+u;m<y;m+=3)for(r=0;3>r;r++)d[0]=
g+t[m+r],d[1]=g+t[m+(r+1)%3],d.sort(f),u=d.toString(),void 0===e[u]&&(q[2*p]=d[0],q[2*p+1]=d[1],e[u]=!0,p++);d=new Float32Array(6*p);m=0;for(t=p;m<t;m++)for(r=0;2>r;r++)g=6*m+3*r,p=3*q[2*m+r],d[g+0]=k[p],d[g+1]=k[p+1],d[g+2]=k[p+2]}else for(k=a.geometry.attributes.position.array,p=k.length/3,q=p/3,d=new Float32Array(6*p),m=0,t=q;m<t;m++)for(r=0;3>r;r++)g=18*m+6*r,q=9*m+3*r,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],p=9*m+(r+1)%3*3,d[g+3]=k[p],d[g+4]=k[p+1],d[g+5]=k[p+2];h.addAttribute("position",new THREE.BufferAttribute(d,
3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
;/**
 * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
 * @author mrdoob / http://mrdoob.com/
 */

THREE.CSS3DObject = function ( element ) {

	THREE.Object3D.call( this );

	this.element = element;
	this.element.style.position = 'absolute';

	this.addEventListener( 'removed', function ( event ) {

		if ( this.element.parentNode !== null ) {

			this.element.parentNode.removeChild( this.element );

		}

	} );

};

THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );

THREE.CSS3DSprite = function ( element ) {

	THREE.CSS3DObject.call( this, element );

};

THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );

//

THREE.CSS3DRenderer = function () {

	console.log( 'THREE.CSS3DRenderer', THREE.REVISION );

	var _width, _height;
	var _widthHalf, _heightHalf;

	var matrix = new THREE.Matrix4();
	
	var cache = {
		camera: { fov: 0, style: '' },
		objects: {}
	};

	var domElement = document.createElement( 'div' );
	domElement.style.overflow = 'hidden';

	domElement.style.WebkitTransformStyle = 'preserve-3d';
	domElement.style.MozTransformStyle = 'preserve-3d';
	domElement.style.oTransformStyle = 'preserve-3d';
	domElement.style.transformStyle = 'preserve-3d';

	this.domElement = domElement;

	var cameraElement = document.createElement( 'div' );

	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
	cameraElement.style.MozTransformStyle = 'preserve-3d';
	cameraElement.style.oTransformStyle = 'preserve-3d';
	cameraElement.style.transformStyle = 'preserve-3d';

	domElement.appendChild( cameraElement );

	this.setClearColor = function () {

	};

	this.setSize = function ( width, height ) {

		_width = width;
		_height = height;

		_widthHalf = _width / 2;
		_heightHalf = _height / 2;

		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';

		cameraElement.style.width = width + 'px';
		cameraElement.style.height = height + 'px';

	};

	var epsilon = function ( value ) {

		return Math.abs( value ) < 0.000001 ? 0 : value;

	};

	var getCameraCSSMatrix = function ( matrix ) {

		var elements = matrix.elements;

		return 'matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( - elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( elements[ 6 ] ) + ',' +
			epsilon( elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( - elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( - elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

	};

	var getObjectCSSMatrix = function ( matrix ) {

		var elements = matrix.elements;

		return 'translate3d(-50%,-50%,0) matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( - elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( - elements[ 6 ] ) + ',' +
			epsilon( - elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

	};

	var renderObject = function ( object, camera ) {

		if ( object instanceof THREE.CSS3DObject ) {

			var style;

			if ( object instanceof THREE.CSS3DSprite ) {

				// http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

				matrix.copy( camera.matrixWorldInverse );
				matrix.transpose();
				matrix.copyPosition( object.matrixWorld );
				matrix.scale( object.scale );

				matrix.elements[ 3 ] = 0;
				matrix.elements[ 7 ] = 0;
				matrix.elements[ 11 ] = 0;
				matrix.elements[ 15 ] = 1;

				style = getObjectCSSMatrix( matrix );

			} else {

				style = getObjectCSSMatrix( object.matrixWorld );

			}

			var element = object.element;
			var cachedStyle = cache.objects[ object.id ];

			if ( cachedStyle === undefined || cachedStyle !== style ) {

				element.style.WebkitTransform = style;
				element.style.MozTransform = style;
				element.style.oTransform = style;
				element.style.transform = style;

				cache.objects[ object.id ] = style;

			}

			if ( element.parentNode !== cameraElement ) {

				cameraElement.appendChild( element );

			}

		}

		for ( var i = 0, l = object.children.length; i < l; i ++ ) {

			renderObject( object.children[ i ], camera );

		}

	};

	this.render = function ( scene, camera ) {

		var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.fov * 0.5 ) ) * _height;

		if ( cache.camera.fov !== fov ) {

			domElement.style.WebkitPerspective = fov + "px";
			domElement.style.MozPerspective = fov + "px";
			domElement.style.oPerspective = fov + "px";
			domElement.style.perspective = fov + "px";

			cache.camera.fov = fov;

		}

		scene.updateMatrixWorld();

		if ( camera.parent === undefined ) camera.updateMatrixWorld();

		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

		var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
			" translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";

		if ( cache.camera.style !== style ) {

			cameraElement.style.WebkitTransform = style;
			cameraElement.style.MozTransform = style;
			cameraElement.style.oTransform = style;
			cameraElement.style.transform = style;
			
			cache.camera.style = style;

		}

		renderObject( scene, camera );

	};

};
;/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();

	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;

	// Limits to how far you can dolly in and out
	this.minDistance = 100;
	this.maxDistance = 12000;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;


	var mouseButtonsBinding = { rotate: 2, zoom: 1,  pan: 0 };

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();
	var panOffset = new THREE.Vector3();

	var offset = new THREE.Vector3();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };

	var state = STATE.NONE;

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();

	// so camera.up is the orbit axis

	var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
	var quatInverse = quat.clone().inverse();

	// events

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start'};
	var endEvent = { type: 'end'};

	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	// pass in distance in world space to move left
	this.panLeft = function ( distance ) {

		var te = this.object.matrix.elements;

		// get X column of matrix
		panOffset.set( te[ 0 ], te[ 1 ], te[ 2 ] );
		panOffset.multiplyScalar( - distance );
		
		pan.add( panOffset );

	};

	// pass in distance in world space to move up
	this.panUp = function ( distance ) {

		var te = this.object.matrix.elements;

		// get Y column of matrix
		panOffset.set( te[ 4 ], te[ 5 ], te[ 6 ] );
		panOffset.multiplyScalar( distance );
		
		pan.add( panOffset );

	};
	
	// pass in x,y of change desired in pixel space,
	// right and down are positive
	this.pan = function ( deltaX, deltaY ) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( scope.object.fov !== undefined ) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub( scope.target );
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft( 2 * deltaX * targetDistance / element.clientHeight );
			scope.panUp( 2 * deltaY * targetDistance / element.clientHeight );

		} else if ( scope.object.top !== undefined ) {

			// orthographic
			scope.panLeft( deltaX * (scope.object.right - scope.object.left) / element.clientWidth );
			scope.panUp( deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight );

		} else {

			// camera neither orthographic or perspective
			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

		}

	};

	this.dollyIn = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function () {

		var position = this.object.position;

		offset.copy( position ).sub( this.target );

		// rotate offset to "y-axis-is-up" space
		offset.applyQuaternion( quat );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
		
		// move target to panned location
		this.target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		// rotate offset back to "camera-up-vector-is-up" space
		offset.applyQuaternion( quatInverse );

		position.copy( this.target ).add( offset );

		this.object.lookAt( this.target );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set( 0, 0, 0 );

		if ( lastPosition.distanceToSquared( this.object.position ) > EPS ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	this.reset = function () {

		state = STATE.NONE;

		this.target.copy( this.target0 );
		this.object.position.copy( this.position0 );

		this.update();

	};

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;
		event.preventDefault();

		if ( event.button === mouseButtonsBinding.rotate ) {
			if ( scope.noRotate === true ) return;

			state = STATE.ROTATE;

			rotateStart.set( event.clientX, event.clientY );

		} else if ( event.button === mouseButtonsBinding.zoom ) {
			if ( scope.noZoom === true ) return;

			state = STATE.DOLLY;

			dollyStart.set( event.clientX, event.clientY );

		} else if ( event.button === mouseButtonsBinding.pan ) {
			if ( scope.noPan === true ) return;

			state = STATE.PAN;

			panStart.set( event.clientX, event.clientY );

		}

		scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.addEventListener( 'mouseup', onMouseUp, false );
		scope.dispatchEvent( startEvent );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( state === STATE.ROTATE ) {

			if ( scope.noRotate === true ) return;

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.noZoom === true ) return;

			dollyEnd.set( event.clientX, event.clientY );
			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy( dollyEnd );

		} else if ( state === STATE.PAN ) {

			if ( scope.noPan === true ) return;

			panEnd.set( event.clientX, event.clientY );
			panDelta.subVectors( panEnd, panStart );
			
			scope.pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

		}

		scope.update();

	}

	function onMouseUp( /* event */ ) {

		if ( scope.enabled === false ) return;

		scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );
		scope.dispatchEvent( endEvent );
		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.noZoom === true ) return;

		event.preventDefault();
		event.stopPropagation();

		var delta = 0;

		if ( event.wheelDelta !== undefined ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail !== undefined ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

		scope.update();
		scope.dispatchEvent( startEvent );
		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.noKeys === true || scope.noPan === true ) return;
		
		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan( 0, scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.BOTTOM:
				scope.pan( 0, - scope.keyPanSpeed );
				scope.update();
				break;

			case scope.keys.LEFT:
				scope.pan( scope.keyPanSpeed, 0 );
				scope.update();
				break;

			case scope.keys.RIGHT:
				scope.pan( - scope.keyPanSpeed, 0 );
				scope.update();
				break;

		}

	}

	function touchstart( event ) {

		if ( scope.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate

				if ( scope.noRotate === true ) return;

				state = STATE.TOUCH_ROTATE;

				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			case 2:	// two-fingered touch: dolly

				if ( scope.noZoom === true ) return;

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				dollyStart.set( 0, distance );
				break;

			case 3: // three-fingered touch: pan

				if ( scope.noPan === true ) return;

				state = STATE.TOUCH_PAN;

				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			default:

				state = STATE.NONE;

		}

		scope.dispatchEvent( startEvent );

	}

	function touchmove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate

				if ( scope.noRotate === true ) return;
				if ( state !== STATE.TOUCH_ROTATE ) return;

				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );

				scope.update();
				break;

			case 2: // two-fingered touch: dolly

				if ( scope.noZoom === true ) return;
				if ( state !== STATE.TOUCH_DOLLY ) return;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy( dollyEnd );

				scope.update();
				break;

			case 3: // three-fingered touch: pan

				if ( scope.noPan === true ) return;
				if ( state !== STATE.TOUCH_PAN ) return;

				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				panDelta.subVectors( panEnd, panStart );
				
				scope.pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

				scope.update();
				break;

			default:

				state = STATE.NONE;

		}

	}

	function touchend( /* event */ ) {

		if ( scope.enabled === false ) return;

		scope.dispatchEvent( endEvent );
		state = STATE.NONE;

	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

	window.addEventListener( 'keydown', onKeyDown, false );

	// force an update at start
	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );;// tween.js - http://github.com/sole/tween.js
'use strict';var TWEEN=TWEEN||function(){var a=[];return{REVISION:"7",getAll:function(){return a},removeAll:function(){a=[]},add:function(c){a.push(c)},remove:function(c){c=a.indexOf(c);-1!==c&&a.splice(c,1)},update:function(c){if(0===a.length)return!1;for(var b=0,d=a.length,c=void 0!==c?c:Date.now();b<d;)a[b].update(c)?b++:(a.splice(b,1),d--);return!0}}}();
TWEEN.Tween=function(a){var c={},b={},d=1E3,e=0,f=null,h=TWEEN.Easing.Linear.None,r=TWEEN.Interpolation.Linear,k=[],l=null,m=!1,n=null,p=null;this.to=function(a,c){null!==c&&(d=c);b=a;return this};this.start=function(d){TWEEN.add(this);m=!1;f=void 0!==d?d:Date.now();f+=e;for(var g in b)if(null!==a[g]){if(b[g]instanceof Array){if(0===b[g].length)continue;b[g]=[a[g]].concat(b[g])}c[g]=a[g]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(a){e=a;return this};this.easing=
function(a){h=a;return this};this.interpolation=function(a){r=a;return this};this.chain=function(){k=arguments;return this};this.onStart=function(a){l=a;return this};this.onUpdate=function(a){n=a;return this};this.onComplete=function(a){p=a;return this};this.update=function(e){if(e<f)return!0;!1===m&&(null!==l&&l.call(a),m=!0);var g=(e-f)/d,g=1<g?1:g,i=h(g),j;for(j in c){var s=c[j],q=b[j];a[j]=q instanceof Array?r(q,i):s+(q-s)*i}null!==n&&n.call(a,i);if(1==g){null!==p&&p.call(a);g=0;for(i=k.length;g<
i;g++)k[g].start(e);return!1}return!0}};
TWEEN.Easing={Linear:{None:function(a){return a}},Quadratic:{In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return 1>(a*=2)?0.5*a*a:-0.5*(--a*(a-2)-1)}},Cubic:{In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)}},Quartic:{In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)}},Quintic:{In:function(a){return a*a*a*
a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)}},Sinusoidal:{In:function(a){return 1-Math.cos(a*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return 0.5*(1-Math.cos(Math.PI*a))}},Exponential:{In:function(a){return 0===a?0:Math.pow(1024,a-1)},Out:function(a){return 1===a?1:1-Math.pow(2,-10*a)},InOut:function(a){return 0===a?0:1===a?1:1>(a*=2)?0.5*Math.pow(1024,a-1):0.5*(-Math.pow(2,-10*(a-1))+2)}},Circular:{In:function(a){return 1-
Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return 1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)}},Elastic:{In:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return-(b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4))},Out:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return b*Math.pow(2,-10*a)*Math.sin((a-c)*
2*Math.PI/0.4)+1},InOut:function(a){var c,b=0.1;if(0===a)return 0;if(1===a)return 1;!b||1>b?(b=1,c=0.1):c=0.4*Math.asin(1/b)/(2*Math.PI);return 1>(a*=2)?-0.5*b*Math.pow(2,10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4):0.5*b*Math.pow(2,-10*(a-=1))*Math.sin((a-c)*2*Math.PI/0.4)+1}},Back:{In:function(a){return a*a*(2.70158*a-1.70158)},Out:function(a){return--a*a*(2.70158*a+1.70158)+1},InOut:function(a){return 1>(a*=2)?0.5*a*a*(3.5949095*a-2.5949095):0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)}},Bounce:{In:function(a){return 1-
TWEEN.Easing.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375},InOut:function(a){return 0.5>a?0.5*TWEEN.Easing.Bounce.In(2*a):0.5*TWEEN.Easing.Bounce.Out(2*a-1)+0.5}}};
TWEEN.Interpolation={Linear:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),f=TWEEN.Interpolation.Utils.Linear;return 0>c?f(a[0],a[1],d):1<c?f(a[b],a[b-1],b-d):f(a[e],a[e+1>b?b:e+1],d-e)},Bezier:function(a,c){var b=0,d=a.length-1,e=Math.pow,f=TWEEN.Interpolation.Utils.Bernstein,h;for(h=0;h<=d;h++)b+=e(1-c,d-h)*e(c,h)*a[h]*f(d,h);return b},CatmullRom:function(a,c){var b=a.length-1,d=b*c,e=Math.floor(d),f=TWEEN.Interpolation.Utils.CatmullRom;return a[0]===a[b]?(0>c&&(e=Math.floor(d=b*(1+c))),f(a[(e-
1+b)%b],a[e],a[(e+1)%b],a[(e+2)%b],d-e)):0>c?a[0]-(f(a[0],a[0],a[1],a[1],-d)-a[0]):1<c?a[b]-(f(a[b],a[b],a[b-1],a[b-1],d-b)-a[b]):f(a[e?e-1:0],a[e],a[b<e+1?b:e+1],a[b<e+2?b:e+2],d-e)},Utils:{Linear:function(a,c,b){return(c-a)*b+a},Bernstein:function(a,c){var b=TWEEN.Interpolation.Utils.Factorial;return b(a)/b(c)/b(a-c)},Factorial:function(){var a=[1];return function(c){var b=1,d;if(a[c])return a[c];for(d=c;1<d;d--)b*=d;return a[c]=b}}(),CatmullRom:function(a,c,b,d,e){var a=0.5*(b-a),d=0.5*(d-c),f=
e*e;return(2*c-2*b+a+d)*e*f+(-3*c+3*b-2*a-d)*f+a*e+c}}};
;/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */

'use strict';

// setImmediate
if (!window.setImmediate) {
  window.setImmediate = (function setupSetImmediate() {
    return window.msSetImmediate ||
    window.webkitSetImmediate ||
    window.mozSetImmediate ||
    window.oSetImmediate ||
    (function setupSetZeroTimeout() {
      if (!window.postMessage || !window.addEventListener) {
        return null;
      }

      var callbacks = [undefined];
      var message = 'zero-timeout-message';

      // Like setTimeout, but only takes a function argument.  There's
      // no time argument (always zero) and no arguments (you have to
      // use a closure).
      var setZeroTimeout = function setZeroTimeout(callback) {
        var id = callbacks.length;
        callbacks.push(callback);
        window.postMessage(message + id.toString(36), '*');

        return id;
      };

      window.addEventListener('message', function setZeroTimeoutMessage(evt) {
        // Skipping checking event source, retarded IE confused this window
        // object with another in the presence of iframe
        if (typeof evt.data !== 'string' ||
            evt.data.substr(0, message.length) !== message/* ||
            evt.source !== window */) {
          return;
        }

        evt.stopImmediatePropagation();

        var id = parseInt(evt.data.substr(message.length), 36);
        if (!callbacks[id]) {
          return;
        }

        callbacks[id]();
        callbacks[id] = undefined;
      }, true);

      /* specify clearImmediate() here since we need the scope */
      window.clearImmediate = function clearZeroTimeout(id) {
        if (!callbacks[id]) {
          return;
        }

        callbacks[id] = undefined;
      };

      return setZeroTimeout;
    })() ||
    // fallback
    function setImmediateFallback(fn) {
      window.setTimeout(fn, 0);
    };
  })();
}

if (!window.clearImmediate) {
  window.clearImmediate = (function setupClearImmediate() {
    return window.msClearImmediate ||
    window.webkitClearImmediate ||
    window.mozClearImmediate ||
    window.oClearImmediate ||
    // "clearZeroTimeout" is implement on the previous block ||
    // fallback
    function clearImmediateFallback(timer) {
      window.clearTimeout(timer);
    };
  })();
}

(function(global) {

  // Check if WordCloud can run on this browser
  var isSupported = (function isSupported() {
    var canvas = document.createElement('canvas');
    if (!canvas || !canvas.getContext) {
      return false;
    }

    var ctx = canvas.getContext('2d');
    if (!ctx.getImageData) {
      return false;
    }
    if (!ctx.fillText) {
      return false;
    }

    if (!Array.prototype.some) {
      return false;
    }
    if (!Array.prototype.push) {
      return false;
    }

    return true;
  }());

  // Find out if the browser impose minium font size by
  // drawing small texts on a canvas and measure it's width.
  var miniumFontSize = (function getMiniumFontSize() {
    if (!isSupported) {
      return;
    }

    var ctx = document.createElement('canvas').getContext('2d');

    // start from 20
    var size = 20;

    // two sizes to measure
    var hanWidth, mWidth;

    while (size) {
      ctx.font = size.toString(10) + 'px sans-serif';
      if ((ctx.measureText('\uFF37').width === hanWidth) &&
          (ctx.measureText('m').width) === mWidth) {
        return (size + 1);
      }

      hanWidth = ctx.measureText('\uFF37').width;
      mWidth = ctx.measureText('m').width;

      size--;
    }

    return 0;
  })();

  // Based on http://jsfromhell.com/array/shuffle
  var shuffleArray = function shuffleArray(arr) {
    for (var j, x, i = arr.length; i;
      j = Math.floor(Math.random() * i),
      x = arr[--i], arr[i] = arr[j],
      arr[j] = x) {}
    return arr;
  };

  var WordCloud = function WordCloud(elements, options) {
    if (!isSupported) {
      return;
    }

    if (!Array.isArray(elements)) {
      elements = [elements];
    }

    elements.forEach(function(el, i) {
      if (typeof el === 'string') {
        elements[i] = document.getElementById(el);
        if (!elements[i]) {
          throw 'The element id specified is not found.';
        }
      } else if (!el.tagName && !el.appendChild) {
        throw 'You must pass valid HTML elements, or ID of the element.';
      }
    });

    /* Default values to be overwritten by options object */
    var settings = {
      list: [],
      fontFamily: '"Trebuchet MS", "Heiti TC", "微軟正黑體", ' +
                  '"Arial Unicode MS", "Droid Fallback Sans", sans-serif',
      fontWeight: 'normal',
      color: 'random-dark',
      minSize: 0, // 0 to disable
      weightFactor: 1,
      clearCanvas: true,
      backgroundColor: '#fff',  // opaque white = rgba(255, 255, 255, 1)

      gridSize: 8,
      origin: null,

      drawMask: false,
      maskColor: 'rgba(255,0,0,0.3)',
      maskGapWidth: 0.3,

      wait: 0,
      abortThreshold: 0, // disabled
      abort: function noop() {},

      minRotation: - Math.PI / 2,
      maxRotation: Math.PI / 2,

      shuffle: true,
      rotateRatio: 0.1,

      shape: 'circle',
      ellipticity: 0.65,

      hover: null,
      click: null
    };

    if (options) {
      for (var key in options) {
        if (key in settings) {
          settings[key] = options[key];
        }
      }
    }

    /* Convert weightFactor into a function */
    if (typeof settings.weightFactor !== 'function') {
      var factor = settings.weightFactor;
      settings.weightFactor = function weightFactor(pt) {
        return pt * factor; //in px
      };
    }

    /* Convert shape into a function */
    if (typeof settings.shape !== 'function') {
      switch (settings.shape) {
        case 'circle':
        /* falls through */
        default:
          // 'circle' is the default and a shortcut in the code loop.
          settings.shape = 'circle';
          break;

        case 'cardioid':
          settings.shape = function shapeCardioid(theta) {
            return 1 - Math.sin(theta);
          };
          break;

        /*

        To work out an X-gon, one has to calculate "m",
        where 1/(cos(2*PI/X)+m*sin(2*PI/X)) = 1/(cos(0)+m*sin(0))
        http://www.wolframalpha.com/input/?i=1%2F%28cos%282*PI%2FX%29%2Bm*sin%28
        2*PI%2FX%29%29+%3D+1%2F%28cos%280%29%2Bm*sin%280%29%29

        Copy the solution into polar equation r = 1/(cos(t') + m*sin(t'))
        where t' equals to mod(t, 2PI/X);

        */

        case 'diamond':
        case 'square':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+PI%2F2%29%29%2Bsin%28mod+%28t%2C+PI%2F2%29%29%29%2C+t+%3D
          // +0+..+2*PI
          settings.shape = function shapeSquare(theta) {
            var thetaPrime = theta % (2 * Math.PI / 4);
            return 1 / (Math.cos(thetaPrime) + Math.sin(thetaPrime));
          };
          break;

        case 'triangle-forward':
          // http://www.wolframalpha.com/input/?i=plot+r+%3D+1%2F%28cos%28mod+
          // %28t%2C+2*PI%2F3%29%29%2Bsqrt%283%29sin%28mod+%28t%2C+2*PI%2F3%29
          // %29%29%2C+t+%3D+0+..+2*PI
          settings.shape = function shapeTriangle(theta) {
            var thetaPrime = theta % (2 * Math.PI / 3);
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime));
          };
          break;

        case 'triangle':
        case 'triangle-upright':
          settings.shape = function shapeTriangle(theta) {
            var thetaPrime = (theta + Math.PI * 3 / 2) % (2 * Math.PI / 3);
            return 1 / (Math.cos(thetaPrime) +
                        Math.sqrt(3) * Math.sin(thetaPrime));
          };
          break;

        case 'pentagon':
          settings.shape = function shapePentagon(theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 5);
            return 1 / (Math.cos(thetaPrime) +
                        0.726543 * Math.sin(thetaPrime));
          };
          break;

        case 'star':
          settings.shape = function shapeStar(theta) {
            var thetaPrime = (theta + 0.955) % (2 * Math.PI / 10);
            if ((theta + 0.955) % (2 * Math.PI / 5) - (2 * Math.PI / 10) >= 0) {
              return 1 / (Math.cos((2 * Math.PI / 10) - thetaPrime) +
                          3.07768 * Math.sin((2 * Math.PI / 10) - thetaPrime));
            } else {
              return 1 / (Math.cos(thetaPrime) +
                          3.07768 * Math.sin(thetaPrime));
            }
          };
          break;
      }
    }

    /* Make sure gridSize is a whole number and is not smaller than 4px */
    settings.gridSize = Math.max(Math.floor(settings.gridSize), 4);

    /* shorthand */
    var g = settings.gridSize;
    var maskRectWidth = g - settings.maskGapWidth;

    /* normalize rotation settings */
    var rotationRange = Math.abs(settings.maxRotation - settings.minRotation);
    var minRotation = Math.min(settings.maxRotation, settings.minRotation);

    /* information/object available to all functions, set when start() */
    var grid, // 2d array containing filling information
      ngx, ngy, // width and height of the grid
      center, // position of the center of the cloud
      maxRadius;

    /* timestamp for measuring each putWord() action */
    var escapeTime;

    /* function for getting the color of the text */
    var getTextColor;
    switch (settings.color) {
      case 'random-dark':
        getTextColor = function getRandomDarkColor() {
          return 'rgb(' +
            Math.floor(Math.random() * 128).toString(10) + ',' +
            Math.floor(Math.random() * 128).toString(10) + ',' +
            Math.floor(Math.random() * 128).toString(10) + ')';
        };
        break;

      case 'random-light':
        getTextColor = function getRandomLightColor() {
          return 'rgb(' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ',' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ',' +
            Math.floor(Math.random() * 128 + 128).toString(10) + ')';
        };
        break;

      default:
        if (typeof settings.color === 'function') {
          getTextColor = settings.color;
        }
        break;
    }

    /* Interactive */
    var interactive = false;
    var infoGrid = [];
    var hovered;

    var getInfoGridFromMouseEvent = function getInfoGridFromMouseEvent(evt) {
      var canvas = evt.currentTarget;
      var rect = canvas.getBoundingClientRect();
      var eventX = evt.clientX - rect.left;
      var eventY = evt.clientY - rect.top;

      var x = Math.floor(eventX * ((canvas.width / rect.width) || 1) / g);
      var y = Math.floor(eventY * ((canvas.height / rect.height) || 1) / g);

      return infoGrid[x][y];
    };

    var wordcloudhover = function wordcloudhover(evt) {
      var info = getInfoGridFromMouseEvent(evt);

      if (hovered === info) {
        return;
      }

      hovered = info;
      if (!info) {
        settings.hover(undefined, undefined, evt);

        return;
      }

      settings.hover(info.item, info.dimension, evt);

    };

    var wordcloudclick = function wordcloudclick(evt) {
      var info = getInfoGridFromMouseEvent(evt);
      if (!info) {
        return;
      }

      settings.click(info.item, info.dimension, evt);
    };

    /* Get points on the grid for a given radius away from the center */
    var pointsAtRadius = [];
    var getPointsAtRadius = function getPointsAtRadius(radius) {
      if (pointsAtRadius[radius]) {
        return pointsAtRadius[radius];
      }

      // Look for these number of points on each radius
      var T = radius * 8;

      // Getting all the points at this radius
      var t = T;
      var points = [];

      if (radius === 0) {
        points.push([center[0], center[1], 0]);
      }

      while (t--) {
        // distort the radius to put the cloud in shape
        var rx = 1;
        if (settings.shape !== 'circle') {
          rx = settings.shape(t / T * 2 * Math.PI); // 0 to 1
        }

        // Push [x, y, t]; t is used solely for getTextColor()
        points.push([
          center[0] + radius * rx * Math.cos(-t / T * 2 * Math.PI),
          center[1] + radius * rx * Math.sin(-t / T * 2 * Math.PI) *
            settings.ellipticity,
          t / T * 2 * Math.PI]);
      }

      pointsAtRadius[radius] = points;
      return points;
    };

    /* Return true if we had spent too much time */
    var exceedTime = function exceedTime() {
      return ((settings.abortThreshold > 0) &&
        ((new Date()).getTime() - escapeTime > settings.abortThreshold));
    };

    /* Get the deg of rotation according to settings, and luck. */
    var getRotateDeg = function getRotateDeg() {
      if (settings.rotateRatio === 0) {
        return 0;
      }

      if (Math.random() > settings.rotateRatio) {
        return 0;
      }

      if (rotationRange === 0) {
        return minRotation;
      }

      return minRotation + Math.random() * rotationRange;
    };

    var getTextInfo = function getTextInfo(word, weight, rotateDeg) {
      // calculate the acutal font size
      // fontSize === 0 means weightFactor function wants the text skipped,
      // and size < minSize means we cannot draw the text.
      var debug = false;
      var fontSize = settings.weightFactor(weight);
      if (fontSize <= settings.minSize) {
        return false;
      }

      // Scale factor here is to make sure fillText is not limited by
      // the minium font size set by browser.
      // It will always be 1 or 2n.
      var mu = 1;
      if (fontSize < miniumFontSize) {
        mu = (function calculateScaleFactor() {
          var mu = 2;
          while (mu * fontSize < miniumFontSize) {
            mu += 2;
          }
          return mu;
        })();
      }

      var fcanvas = document.createElement('canvas');
      var fctx = fcanvas.getContext('2d', { willReadFrequently: true });

      fctx.font = settings.fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;

      // Estimate the dimension of the text with measureText().
      var fw = fctx.measureText(word).width / mu;
      var fh = Math.max(fontSize * mu,
                        fctx.measureText('m').width,
                        fctx.measureText('\uFF37').width) / mu;

      // Create a boundary box that is larger than our estimates,
      // so text don't get cut of (it sill might)
      var boxWidth = fw + fh * 2;
      var boxHeight = fh * 3;
      var fgw = Math.ceil(boxWidth / g);
      var fgh = Math.ceil(boxHeight / g);
      boxWidth = fgw * g;
      boxHeight = fgh * g;

      // Calculate the proper offsets to make the text centered at
      // the preferred position.

      // This is simply half of the width.
      var fillTextOffsetX = - fw / 2;
      // Instead of moving the box to the exact middle of the preferred
      // position, for Y-offset we move 0.4 instead, so Latin alphabets look
      // vertical centered.
      var fillTextOffsetY = - fh * 0.4;

      // Calculate the actual dimension of the canvas, considering the rotation.
      var cgh = Math.ceil((boxWidth * Math.abs(Math.sin(rotateDeg)) +
                           boxHeight * Math.abs(Math.cos(rotateDeg))) / g);
      var cgw = Math.ceil((boxWidth * Math.abs(Math.cos(rotateDeg)) +
                           boxHeight * Math.abs(Math.sin(rotateDeg))) / g);
      var width = cgw * g;
      var height = cgh * g;

      fcanvas.setAttribute('width', width);
      fcanvas.setAttribute('height', height);

      if (debug) {
        // Attach fcanvas to the DOM
        document.body.appendChild(fcanvas);
        // Save it's state so that we could restore and draw the grid correctly.
        fctx.save();
      }

      // Scale the canvas with |mu|.
      fctx.scale(1 / mu, 1 / mu);
      fctx.translate(width * mu / 2, height * mu / 2);
      fctx.rotate(- rotateDeg);

      // Once the width/height is set, ctx info will be reset.
      // Set it again here.
      fctx.font = settings.fontWeight + ' ' +
        (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;

      // Fill the text into the fcanvas.
      // XXX: We cannot because textBaseline = 'top' here because
      // Firefox and Chrome uses different default line-height for canvas.
      // Please read https://bugzil.la/737852#c6.
      // Here, we use textBaseline = 'middle' and draw the text at exactly
      // 0.5 * fontSize lower.
      fctx.fillStyle = '#000';
      fctx.textBaseline = 'middle';
      fctx.fillText(word, fillTextOffsetX * mu,
                    (fillTextOffsetY + fontSize * 0.5) * mu);

      // Get the pixels of the text
      var imageData = fctx.getImageData(0, 0, width, height).data;

      if (exceedTime()) {
        return false;
      }

      if (debug) {
        // Draw the box of the original estimation
        fctx.strokeRect(fillTextOffsetX * mu,
                        fillTextOffsetY, fw * mu, fh * mu);
        fctx.restore();
      }

      // Read the pixels and save the information to the occupied array
      var occupied = [];
      var gx = cgw, gy, x, y;
      var bounds = [cgh / 2, cgw / 2, cgh / 2, cgw / 2];
      while (gx--) {
        gy = cgh;
        while (gy--) {
          y = g;
          singleGridLoop: {
            while (y--) {
              x = g;
              while (x--) {
                if (imageData[((gy * g + y) * width +
                               (gx * g + x)) * 4 + 3]) {
                  occupied.push([gx, gy]);

                  if (gx < bounds[3]) {
                    bounds[3] = gx;
                  }
                  if (gx > bounds[1]) {
                    bounds[1] = gx;
                  }
                  if (gy < bounds[0]) {
                    bounds[0] = gy;
                  }
                  if (gy > bounds[2]) {
                    bounds[2] = gy;
                  }

                  if (debug) {
                    fctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                    fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5);
                  }
                  break singleGridLoop;
                }
              }
            }
            if (debug) {
              fctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
              fctx.fillRect(gx * g, gy * g, g - 0.5, g - 0.5);
            }
          }
        }
      }

      if (debug) {
        fctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
        fctx.fillRect(bounds[3] * g,
                      bounds[0] * g,
                      (bounds[1] - bounds[3] + 1) * g,
                      (bounds[2] - bounds[0] + 1) * g);
      }

      // Return information needed to create the text on the real canvas
      return {
        mu: mu,
        occupied: occupied,
        bounds: bounds,
        gw: cgw,
        gh: cgh,
        fillTextOffsetX: fillTextOffsetX,
        fillTextOffsetY: fillTextOffsetY,
        fillTextWidth: fw,
        fillTextHeight: fh,
        fontSize: fontSize
      };
    };

    /* Determine if there is room available in the given dimension */
    var canFitText = function canFitText(gx, gy, gw, gh, occupied) {
      // Go through the occupied points,
      // return false if the space is not available.
      var i = occupied.length;
      while (i--) {
        var px = gx + occupied[i][0];
        var py = gy + occupied[i][1];

        if (px >= ngx || py >= ngy || px < 0 || py < 0 || !grid[px][py]) {
          return false;
        }
      }
      return true;
    };

    /* Actually draw the text on the grid */
    var drawText = function drawText(gx, gy, info, word, weight,
                                     distance, theta, rotateDeg, attributes) {

      var fontSize = info.fontSize;
      var color;
      if (getTextColor) {
        color = getTextColor(word, weight, fontSize, distance, theta);
      } else {
        color = settings.color;
      }

      var dimension;
      var bounds = info.bounds;
      dimension = {
        x: (gx + bounds[3]) * g,
        y: (gy + bounds[0]) * g,
        w: (bounds[1] - bounds[3] + 1) * g,
        h: (bounds[2] - bounds[0] + 1) * g
      };

      elements.forEach(function(el) {
        if (el.getContext) {
          var ctx = el.getContext('2d');
          var mu = info.mu;

          // Save the current state before messing it
          ctx.save();
          ctx.scale(1 / mu, 1 / mu);

          ctx.font = settings.fontWeight + ' ' +
                     (fontSize * mu).toString(10) + 'px ' + settings.fontFamily;
          ctx.fillStyle = color;

          // Translate the canvas position to the origin coordinate of where
          // the text should be put.
          ctx.translate((gx + info.gw / 2) * g * mu,
                        (gy + info.gh / 2) * g * mu);

          if (rotateDeg !== 0) {
            ctx.rotate(- rotateDeg);
          }

          // Finally, fill the text.

          // XXX: We cannot because textBaseline = 'top' here because
          // Firefox and Chrome uses different default line-height for canvas.
          // Please read https://bugzil.la/737852#c6.
          // Here, we use textBaseline = 'middle' and draw the text at exactly
          // 0.5 * fontSize lower.
          ctx.textBaseline = 'middle';
          ctx.fillText(word, info.fillTextOffsetX * mu,
                             (info.fillTextOffsetY + fontSize * 0.5) * mu);

          // The below box is always matches how <span>s are positioned
          /* ctx.strokeRect(info.fillTextOffsetX, info.fillTextOffsetY,
            info.fillTextWidth, info.fillTextHeight); */

          // Restore the state.
          ctx.restore();
        } else {
          // drawText on DIV element
          var span = document.createElement('span');
          var transformRule = '';
          transformRule = 'rotate(' + (- rotateDeg / Math.PI * 180) + 'deg) ';
          if (info.mu !== 1) {
            transformRule +=
              'translateX(-' + (info.fillTextWidth / 4) + 'px) ' +
              'scale(' + (1 / info.mu) + ')';
          }
          var styleRules = {
            'position': 'absolute',
            'display': 'block',
            'font': settings.fontWeight + ' ' +
                    (fontSize * info.mu) + 'px ' + settings.fontFamily,
            'left': ((gx + info.gw / 2) * g + info.fillTextOffsetX) + 'px',
            'top': ((gy + info.gh / 2) * g + info.fillTextOffsetY) + 'px',
            'width': info.fillTextWidth + 'px',
            'height': info.fillTextHeight + 'px',
            'color': color,
            'lineHeight': fontSize + 'px',
            'whiteSpace': 'nowrap',
            'transform': transformRule,
            'webkitTransform': transformRule,
            'msTransform': transformRule,
            'transformOrigin': '50% 40%',
            'webkitTransformOrigin': '50% 40%',
            'msTransformOrigin': '50% 40%'
          };
          span.textContent = word;
          for (var cssProp in styleRules) {
            span.style[cssProp] = styleRules[cssProp];
          }
          if (attributes) {
            for (var attribute in attributes) {
              span.setAttribute(attribute, attributes[attribute]);
            }
          }
          el.appendChild(span);
        }
      });
    };

    /* Help function to updateGrid */
    var fillGridAt = function fillGridAt(x, y, drawMask, dimension, item) {
      if (x >= ngx || y >= ngy || x < 0 || y < 0) {
        return;
      }

      grid[x][y] = false;

      if (drawMask) {
        var ctx = elements[0].getContext('2d');
        ctx.fillRect(x * g, y * g, maskRectWidth, maskRectWidth);
      }

      if (interactive) {
        infoGrid[x][y] = { item: item, dimension: dimension };
      }
    };

    /* Update the filling information of the given space with occupied points.
       Draw the mask on the canvas if necessary. */
    var updateGrid = function updateGrid(gx, gy, gw, gh, info, item) {
      var occupied = info.occupied;
      var drawMask = settings.drawMask;
      var ctx;
      if (drawMask) {
        ctx = elements[0].getContext('2d');
        ctx.save();
        ctx.fillStyle = settings.maskColor;
      }

      var dimension;
      if (interactive) {
        var bounds = info.bounds;
        dimension = {
          x: (gx + bounds[3]) * g,
          y: (gy + bounds[0]) * g,
          w: (bounds[1] - bounds[3] + 1) * g,
          h: (bounds[2] - bounds[0] + 1) * g
        };
      }

      var i = occupied.length;
      while (i--) {
        fillGridAt(gx + occupied[i][0], gy + occupied[i][1],
                   drawMask, dimension, item);
      }

      if (drawMask) {
        ctx.restore();
      }
    };

    /* putWord() processes each item on the list,
       calculate it's size and determine it's position, and actually
       put it on the canvas. */
    var putWord = function putWord(item) {
      var word, weight, attributes;
      if (Array.isArray(item)) {
        word = item[0];
        weight = item[1];
      } else {
        word = item.word;
        weight = item.weight;
        attributes = item.attributes;
      }
      var rotateDeg = getRotateDeg();

      // get info needed to put the text onto the canvas
      var info = getTextInfo(word, weight, rotateDeg);

      // not getting the info means we shouldn't be drawing this one.
      if (!info) {
        return false;
      }

      if (exceedTime()) {
        return false;
      }

      // Skip the loop if we have already know the bounding box of
      // word is larger than the canvas.
      var bounds = info.bounds;
      if ((bounds[1] - bounds[3] + 1) > ngx ||
        (bounds[2] - bounds[0] + 1) > ngy) {
        return false;
      }

      // Determine the position to put the text by
      // start looking for the nearest points
      var r = maxRadius + 1;

      var tryToPutWordAtPoint = function(gxy) {
        var gx = Math.floor(gxy[0] - info.gw / 2);
        var gy = Math.floor(gxy[1] - info.gh / 2);
        var gw = info.gw;
        var gh = info.gh;

        // If we cannot fit the text at this position, return false
        // and go to the next position.
        if (!canFitText(gx, gy, gw, gh, info.occupied)) {
          return false;
        }

        // Actually put the text on the canvas
        drawText(gx, gy, info, word, weight,
                 (maxRadius - r), gxy[2], rotateDeg, attributes);

        // Mark the spaces on the grid as filled
        updateGrid(gx, gy, gw, gh, info, item);

        // Return true so some() will stop and also return true.
        return true;
      };

      while (r--) {
        var points = getPointsAtRadius(maxRadius - r);

        if (settings.shuffle) {
          points = [].concat(points);
          shuffleArray(points);
        }

        // Try to fit the words by looking at each point.
        // array.some() will stop and return true
        // when putWordAtPoint() returns true.
        // If all the points returns false, array.some() returns false.
        var drawn = points.some(tryToPutWordAtPoint);

        if (drawn) {
          // leave putWord() and return true
          return true;
        }
      }
      // we tried all distances but text won't fit, return false
      return false;
    };

    /* Send DOM event to all elements. Will stop sending event and return
       if the previous one is canceled (for cancelable events). */
    var sendEvent = function sendEvent(type, cancelable, detail) {
      if (cancelable) {
        return !elements.some(function(el) {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(type, true, cancelable, detail || {});
          return !el.dispatchEvent(evt);
        }, this);
      } else {
        elements.forEach(function(el) {
          var evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(type, true, cancelable, detail || {});
          el.dispatchEvent(evt);
        }, this);
      }
    };

    /* Start drawing on a canvas */
    var start = function start() {
      // For dimensions, clearCanvas etc.,
      // we only care about the first element.
      var canvas = elements[0];

      if (canvas.getContext) {
        ngx = Math.floor(canvas.width / g);
        ngy = Math.floor(canvas.height / g);
      } else {
        var rect = canvas.getBoundingClientRect();
        ngx = Math.floor(rect.width / g);
        ngy = Math.floor(rect.height / g);
      }

      // Sending a wordcloudstart event which cause the previous loop to stop.
      // Do nothing if the event is canceled.
      if (!sendEvent('wordcloudstart', true)) {
        return;
      }

      // Determine the center of the word cloud
      center = (settings.origin) ?
        [settings.origin[0]/g, settings.origin[1]/g] :
        [ngx / 2, ngy / 2];

      // Maxium radius to look for space
      maxRadius = Math.floor(Math.sqrt(ngx * ngx + ngy * ngy));

      /* Clear the canvas only if the clearCanvas is set,
         if not, update the grid to the current canvas state */
      grid = [];

      var gx, gy, i;
      if (!canvas.getContext || settings.clearCanvas) {
        elements.forEach(function(el) {
          if (el.getContext) {
            var ctx = el.getContext('2d');
            ctx.fillStyle = settings.backgroundColor;
            ctx.clearRect(0, 0, ngx * (g + 1), ngy * (g + 1));
            ctx.fillRect(0, 0, ngx * (g + 1), ngy * (g + 1));
          } else {
            el.textContent = '';
            el.style.backgroundColor = settings.backgroundColor;
          }
        });

        /* fill the grid with empty state */
        gx = ngx;
        while (gx--) {
          grid[gx] = [];
          gy = ngy;
          while (gy--) {
            grid[gx][gy] = true;
          }
        }
      } else {
        /* Determine bgPixel by creating
           another canvas and fill the specified background color. */
        var bctx = document.createElement('canvas').getContext('2d');

        bctx.fillStyle = settings.backgroundColor;
        bctx.fillRect(0, 0, 1, 1);
        var bgPixel = bctx.getImageData(0, 0, 1, 1).data;

        /* Read back the pixels of the canvas we got to tell which part of the
           canvas is empty.
           (no clearCanvas only works with a canvas, not divs) */
        var imageData =
          canvas.getContext('2d').getImageData(0, 0, ngx * g, ngy * g).data;

        gx = ngx;
        var x, y;
        while (gx--) {
          grid[gx] = [];
          gy = ngy;
          while (gy--) {
            y = g;
            singleGridLoop: while (y--) {
              x = g;
              while (x--) {
                i = 4;
                while (i--) {
                  if (imageData[((gy * g + y) * ngx * g +
                                 (gx * g + x)) * 4 + i] !== bgPixel[i]) {
                    grid[gx][gy] = false;
                    break singleGridLoop;
                  }
                }
              }
            }
            if (grid[gx][gy] !== false) {
              grid[gx][gy] = true;
            }
          }
        }

        imageData = bctx = bgPixel = undefined;
      }

      // fill the infoGrid with empty state if we need it
      if (settings.hover || settings.click) {

        interactive = true;

        /* fill the grid with empty state */
        gx = ngx + 1;
        while (gx--) {
          infoGrid[gx] = [];
        }

        if (settings.hover) {
          canvas.addEventListener('mousemove', wordcloudhover);
        }

        if (settings.click) {
          canvas.addEventListener('click', wordcloudclick);
        }

        canvas.addEventListener('wordcloudstart', function stopInteraction() {
          canvas.removeEventListener('wordcloudstart', stopInteraction);

          canvas.removeEventListener('mousemove', wordcloudhover);
          canvas.removeEventListener('click', wordcloudclick);
          hovered = undefined;
        });
      }

      i = 0;
      var loopingFunction, stoppingFunction;
      if (settings.wait !== 0) {
        loopingFunction = window.setTimeout;
        stoppingFunction = window.clearTimeout;
      } else {
        loopingFunction = window.setImmediate;
        stoppingFunction = window.clearImmediate;
      }

      var addEventListener = function addEventListener(type, listener) {
        elements.forEach(function(el) {
          el.addEventListener(type, listener);
        }, this);
      };

      var removeEventListener = function removeEventListener(type, listener) {
        elements.forEach(function(el) {
          el.removeEventListener(type, listener);
        }, this);
      };

      var anotherWordCloudStart = function anotherWordCloudStart() {
        removeEventListener('wordcloudstart', anotherWordCloudStart);
        stoppingFunction(timer);
      };

      addEventListener('wordcloudstart', anotherWordCloudStart);

      var timer = loopingFunction(function loop() {
        if (i >= settings.list.length) {
          stoppingFunction(timer);
          sendEvent('wordcloudstop', false);
          removeEventListener('wordcloudstart', anotherWordCloudStart);

          return;
        }
        escapeTime = (new Date()).getTime();
        var drawn = putWord(settings.list[i]);
        var canceled = !sendEvent('wordclouddrawn', true, {
          item: settings.list[i], drawn: drawn });
        if (exceedTime() || canceled) {
          stoppingFunction(timer);
          settings.abort();
          sendEvent('wordcloudabort', false);
          sendEvent('wordcloudstop', false);
          removeEventListener('wordcloudstart', anotherWordCloudStart);
          return;
        }
        i++;
        timer = loopingFunction(loop, settings.wait);
      }, settings.wait);
    };

    // All set, start the drawing
    start();
  };

  WordCloud.isSupported = isSupported;
  WordCloud.miniumFontSize = miniumFontSize;

  // Expose the library as an AMD module
  if (typeof global.define === 'function' && global.define.amd) {
    global.define('wordcloud', [], function() { return WordCloud; });
  } else {
    global.WordCloud = WordCloud;
  }

})(window);;function Map () {

	var camera, scene, renderer;
	var controls, objects;
	var lastTimeMsec= null
	var nowMsec = null
	var onRenderFcts = [];
	var container = new THREE.Object3D();
	var filter_tags = null;

	var init = function() {

		objects = [];
		camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
		camera.position.z = 3600;
		camera.position.y = 150;

		scene = new THREE.Scene();
		//

		renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.domElement.style.position = 'absolute';
		document.getElementById( 'map' ).appendChild( renderer.domElement );
		
		//

//		controls   = new THREE.OrbitControls(camera);
//		controls.noPan = true;

		window.addEventListener( 'resize', onWindowResize, false );

		createLand();

		socket.on('stream', function(tweet){
			setTag(parseInt(Math.random() * 10) + 1, tweet);
		});
	};


	this.setFilters = function( filters ) { 
		filter_tags = filters;
		socket.emit("filter",filter_tags);
	};


	var setTag = function(pos,tweet) {
		var element = document.createElement( 'div' );
		element.className = 'marker';
		element.textContent = tweet.keyword;

		var tag = new THREE.CSS3DObject( element );
		tag.position.set(objects[pos].position.x , objects[pos].position.y, objects[pos].position.z + 50);
		
		container.add(tag);


		setTimeout(function() { 
			tag.visible = false;
			$(tag.element).fadeOut();
			scene.remove(tag);
		},5000);

		onRenderFcts.push(function(delta, now){
			tag.lookAt(camera.position);
			tag.rotation.set(1.6,-0.8,0);
		});


		$("#tweetText").append("<li>" + tweet.text + "</li>");

		return tag;
	};


	var animCountry = function() {

		TWEEN.removeAll();

		new TWEEN.Tween( container.rotation).to( { x: -1.0, y: 0, z: 0.8 }, 2000).onUpdate(function(){  })
		.start();
		new TWEEN.Tween(camera.position).to({ x: 250, y: -1800, z: 2000 },2000).start()

	};

	var adjust = function(i,object) {
		/*console.log(i);*/
		switch (i) {
			case 1:

			break;

			case 2:
				object.position.y += 45;
				object.position.x += 25;
			break;

			case 3:
				object.position.y -= 8;
				object.position.x += 52;
			break;


			case 4:
				object.position.y -= 125;
				object.position.x -= 10;
			break;

			case 5:
				object.position.y -= 183;
				object.position.x -= 71;
			break;


			case 6:
				object.position.y -= 175;
				object.position.x -= 85;
			break;

			case 7:
				object.position.y -= 25;
				object.position.x -= 75;
			break;
			case 8:
				object.position.y += 107;
				object.position.x -= 85;
			break;

			case 9:
				object.position.y += 205;
				object.position.x -= 115;
			break;

			case 10:
				object.position.y += 265;
				object.position.x -= 165;
			break;

			case 11:
				object.position.y += 355;
				object.position.x -= 162;
			break;


			case 12:
				object.position.y += 420;
				object.position.x -= 185;
			break;


			case 13:
				object.position.y += 420;
				object.position.x -= 220;
			break;


			case 14:
				object.position.y += 265;
				object.position.x -= 240;
			break;


			case 15:
				object.position.y -= 230;
				object.position.x -= 100;
			break;
		}
	};

	var createLand = function() {
		
		for (var i = 16 - 1; i >= 1; i--) {
			var element = document.createElement( 'div' );
			element.className = 'region';

			var img = document.createElement( 'img' );
			img.src = "img/regiones/" + i + ".png";
			element.appendChild(img);


			var object = new THREE.CSS3DObject( element );
			//object.scale.set(new THREE.Vector3(0.01,0.01,0.01));
			object.position.y = ((i * 200) * -1) + 2000;
			object.position.z = -1700;

			adjust(i,object);

			object.element.addEventListener("click", function(event) { 
				var vector = new THREE.Vector3({ x: object.position.x , y: object.position.y , z: object.position.z });
				//vector.setFromMatrixPosition( object.matrixWorld );
				camera.lookAt(vector);
			});

			
			objects.push( object );
			container.add( object );
		};
		scene.add( container );
		/*onRenderFcts.push(function(delta, now){
			for (var i = objects.length - 1; i >= 0; i--) {
				objects[i].lookAt(camera.position);
			};
		});*/
	};

	var onWindowResize = function() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

		render();

	};

	onRenderFcts.push(function(delta, now){
		renderer.render( scene, camera);
	});

	var render = function() {

		requestAnimationFrame( render );
		lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
		var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
		lastTimeMsec	= nowMsec
		TWEEN.update();
		onRenderFcts.forEach(function(onRenderFct){
			onRenderFct(deltaMsec/1000, nowMsec/1000);
		});

	};
	
	this.show = animCountry;
	this.setTag = setTag;

	init();
	render();
};;function Cloud () {
	var container = null;
	var	items = [];
	var selected = [];	
	var selectedColors = [];
	var drawed = false;
	var _init = function() {
		parent =  document.getElementById( 'cloud' );
		parent.style.width = window.innerWidth;
		parent.style.height = window.innerHeight;

		container = document.getElementById( 'cloudCanvas' );
		container.style.width = window.innerWidth;
		container.style.height = window.innerHeight * 0.75;


		list();
	};


	var list = function() {

		items = [["vestido de novia en la cartera",22],
		["al 3 y al 4",17],
		["al tres y al cuatro",45],
		["aplaplac",40],
		["a todo cachete",8],
		["bagallo",25],
		["bachicha",20],
		["burrero",75],
		["brujo",85],
		["bruto",60],
		["cachudo",80],
		["se le cae el helado",30],
		["cabeza de rodilla",10],
		["cabro chico",60],
		["cafiche",60],
		["califa",55],
		["canuto",40],
		["cantimplora",55],
		["cartucho",60],
		["cuentero",95],
		["cuico",110],
		["cuyano",75],
		["chamullento",88],
		["chancho",60],
		["chancletero",33],
		["chanta",80],
		["vuelta la chaqueta",30],
		["che",100],
		["china",99],
		["chino",56],
		["chiporro",45],
		["choro",120],
		["choro canero",50],
		["choros de esquina",129],
		["chula",60],
		["del ambiente",20],
		["domestico",12],
		["duro",95],
		["encalillado",300],
		["encanado",32],
		["weon",200],
		["en la pitilla",70],
		["esta en la cuerea",30],
		["flayte",170],
		["fleto",170],
		["franchute",100],
		["fresco raja",2],
		["gallo",30],
		["gata mojada",30],
		["gitano",30],
		["guacho",30],
		["guardado",30],
		["guata",30],
		["guitre",30],
		["gringo",30],
		["highlander",30],
		["hocicon",30],
		["huaso",30],
		["incapas",30],
		["patita de chancho",30],
		["julero",30],
		["jai",30],
		["jaibon",30],
		["lanza",30],
		["lela",30],
		["letrado",30],
		["liceo con numero",30],
		["liceo con nombre de misil",30],
		["malandra",30],
		["mandril",30],
		["mano challa",30],
		["maraca",170],
		["mariposon",30],
		["maricon",140],
		["matasanos",30],
		["matusalen",30],
		["mea contra viento",30],
		["mea contra el viento",30],
		["mechera",30],
		["melon con flecos",30],
		["mina",30],
		["mino",30],
		["mono",30],
		["opus",30],
		["opuh",30],
		["paco",30],
		["pailon",30],
		["paitoco",30],
		["palo grueso",30],
		["papito coraz",30],
		["peineta",30],
		["pelolais",30],
		["pelo lais",30],
		["peluson",30],
		["pendejo",30],
		["pepe pato",30],
		["petaca",30],
		["perro",30],
		["perra",30],
		["pez gordo",30],
		["picante",30],
		["pokemon",30],
		["punga",30],
		["profana cuna",30],
		["puta",30],
		["profeta",30],
		["se le quema el arroz",30],
		["raspado",30],
		["rata",30],
		["rati",30],
		["resfalin de piojos",30],
		["roto",90],
		["se le cae",30],
		["se le cae la pelota al barro",30],
		["da vuelta el paragua",30],
		["sele apago el calefon",30],
		["se le apaga el calefon",30],
		["se le paso el tren",30],
		["singuchito",30],
		["siutico",30],
		["solterona",30],
		["sudaca",30],
		["tecla",30],
		["testiculo de jehova",30],
		["tira",30],
		["tira el poto pa las moras",30],
		["todo cagado",30],
		["torrante",30],
		["turco",30],
		["tropicarsh",30],
		["vaca",30],
		["vacuna",30],
		["vagoneta",30],
		["viejo verde",30],
		["yegua",130],
		["yira",30],
		["zorra",140]];	


		return items;
	};


	var draw = function() {
		$("#addFrase").focus();
		if (!drawed) {
			drawed = true;
			WordCloud(container,{
				gridSize: Math.round(32 * (window.innerWidth / 4) / 1024),
				list: items,
				fontFamily: 'Times, serif', 
				minSize: 12,
				rotateRatio: 0.5,
				color: function (word, weight) {
					var colors = ["#336666","#CCCCCC","#996666", "#660000", "#330000" ,"#666666", "##996633", "#CC9966","#663333"];
				    return colors[Math.floor(Math.random()*colors.length)];
				}
			});

			container.addEventListener("wordcloudstop", function() {
				$("#cloudCanvas span").click(function() { 
					// find element
					var elem = $(this).text();
					var index = selected.indexOf(elem);
					if (index == -1) {
						if (selected.length < 3) {
							selected.push(elem);
							selectedColors.push($(this).css('color'));
							$(this).css('color',"#3399CC");
							$(this).css('z-index', 10);
						}
					} else {
						//de-select
						selected.splice(index,1);
						$(this).css('color',selectedColors[index]);
						$(this).css('z-index', 0);
						selectedColors.splice(index,1);
					}

					if (selected.length == 3) {
						$(".blackbg").height(window.innerHeight - 90)
						$(".blackbg").fadeIn("fast");
					} else {
						$(".blackbg").fadeOut("fast");
					}
					

					if (selected.length > 0)
						$("#goMapBtn").fadeIn();
					else
						$("#goMapBtn").fadeOut();

				});


			});
		}
	};


	this.filters = selected;

	this.show = draw;


	_init();
};


var words = new Cloud;;/**
 * Created by maeth on 11/2/14.
 */

var socket = io.connect('54.215.212.113');

function ChileIntolerable() {


	var hideWindows = function() {
		var cloud = document.getElementById('cloud');
		cloud.style.top = -window.innerHeight;

		var map = document.getElementById('map');
		map.style.top = window.innerHeight;
	};

	var showWordsTab = function() {
		$("#cloud").css('z-index', 9);
		$("#cloud").animate({ top: 0 },1500,words.show);
	};

	var hideWordsTab = function()  { 
		$("#cloud").css('z-index', 0);
		$("#cloud").animate({ top: -window.innerHeight},1500);
	};
	var showMap = function() {
		$("#logo").hide();
		$("#cloud .handle .bar .up").toggleClass("down");
		$("#cloud").animate({ top: -window.innerHeight + 30},1500,function() {
			var rtMap = new Map;

			rtMap.setFilters(words.filters);
			
			$("#map").animate({ top: 0 },1500,function() { 
				
				$("#map .handle").css('bottom',-window.innerHeight);

				$("#map .handle").fadeIn('fast');
				rtMap.show() 


			});
		});
	};

	var hideMap = function() {
		$("#map").animate({ top: window.innerHeight },1500);
	};


	var _setBindings = function() {
		$("#logo").click(showWordsTab);
		$("#cloud .bar").click(hideWordsTab);
		$("#goMapBtn").click(showMap);
	};


	var _init = function() { 
		hideWindows();
		_setBindings();
		
	};


	_init();

};

var clint = new ChileIntolerable;