var L0=Object.defineProperty;var Nf=(i,e)=>{for(var t in e)L0(i,t,{get:e[t],enumerable:!0})};var _p=0,mu=1,yp=2;var ca=1,vp=2,Hr=3,jn=0,tn=1,mn=2,Ti=0,zs=1,la=2,gu=3,xu=4,Mp=5;var ps=100,bp=101,Sp=102,wp=103,Ap=104,Tp=200,Ep=201,Cp=202,Rp=203,Mc=204,bc=205,Ip=206,Pp=207,Lp=208,Np=209,Dp=210,Up=211,Fp=212,Op=213,Bp=214,Sc=0,wc=1,Ac=2,ks=3,Tc=4,Ec=5,Cc=6,Rc=7,$c=0,zp=1,kp=2,ii=0,_u=1,yu=2,vu=3,ha=4,Mu=5,bu=6,Su=7,Rr="attached",Jc="detached",wu=300,vs=301,Ys=302,jc=303,Qc=304,ua=306,Qn=1e3,Bn=1001,Ir=1002,Wt=1003,el=1004;var Ks=1005;var Xt=1006,Wr=1007;var si=1008;var Pn=1009,Au=1010,Tu=1011,Xr=1012,qr=1013,Dn=1014,hn=1015,Ei=1016,tl=1017,nl=1018,Yr=1020,Eu=35902,Cu=35899,Ru=1021,Iu=1022,wn=1023,_i=1026,Ms=1027,bs=1028,Kr=1029,Ci=1030,Zr=1031;var $r=1033,da=33776,fa=33777,pa=33778,ma=33779,il=35840,sl=35841,rl=35842,ol=35843,al=36196,cl=37492,ll=37496,hl=37488,ul=37489,ga=37490,dl=37491,fl=37808,pl=37809,ml=37810,gl=37811,xl=37812,_l=37813,yl=37814,vl=37815,Ml=37816,bl=37817,Sl=37818,wl=37819,Al=37820,Tl=37821,El=36492,Cl=36494,Rl=36495,Il=36283,Pl=36284,xa=36285,Ll=36286,Nl=2200,_a=2201,Vp=2202,Vs=2300,Gs=2301,vc=2302,ru=2303,Fs=2400,Os=2401,Uo=2402,Dl=2500,Gp=2501,Pu=0,ya=1,Jr=2,Hp=3200;var va=0,Wp=1,Vn="",Rt="srgb",Mn="srgb-linear",Fo="linear",yt="srgb";var Us=7680;var ou=519,Xp=512,qp=513,Yp=514,Ul=515,Kp=516,Zp=517,Fl=518,$p=519,Ic=35044;var Lu="300 es",$n=2e3,Pr=2001;function N0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jp(){let i=Lr("canvas");return i.style.display="block",i}var Df={},Nr=null;function Oo(...i){let e="THREE."+i.shift();Nr?Nr("log",e,...i):console.log(e,...i)}function jp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=jp(i);let e="THREE."+i.shift();if(Nr)Nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=jp(i);let e="THREE."+i.shift();if(Nr)Nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Bs(...i){let e=i.join(" ");e in Df||(Df[e]=!0,Ne(...i))}function Qp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var em={[Sc]:wc,[Ac]:Cc,[Tc]:Rc,[ks]:Ec,[wc]:Sc,[Cc]:Ac,[Rc]:Tc,[Ec]:ks},ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uf=1234567,No=Math.PI/180,Hs=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function Nu(i,e){return(i%e+e)%e}function U0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function F0(i,e,t){return i!==e?(t-i)/(e-i):0}function Do(i,e,t){return(1-t)*i+t*e}function O0(i,e,t,n){return Do(i,e,1-Math.exp(-t*n))}function B0(i,e=1){return e-Math.abs(Nu(i,e*2)-e)}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function k0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function V0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function G0(i,e){return i+Math.random()*(e-i)}function H0(i){return i*(.5-Math.random())}function W0(i){i!==void 0&&(Uf=i);let e=Uf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X0(i){return i*No}function q0(i){return i*Hs}function Y0(i){return(i&i-1)===0&&i!==0}function K0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Z0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kt={DEG2RAD:No,RAD2DEG:Hs,generateUUID:Jn,clamp:rt,euclideanModulo:Nu,mapLinear:U0,inverseLerp:F0,lerp:Do,damp:O0,pingpong:B0,smoothstep:z0,smootherstep:k0,randInt:V0,randFloat:G0,randFloatSpread:H0,seededRandom:W0,degToRad:X0,radToDeg:q0,isPowerOfTwo:Y0,ceilPowerOfTwo:K0,floorPowerOfTwo:Z0,setQuaternionFromProperEuler:$0,normalize:bt,denormalize:Zn},We=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,a=Math.sin(a*M)/A,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nh.copy(this).projectOnVector(e),this.sub(Nh)}reflect(e){return this.sub(Nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nh=new R,Ff=new ot,Ze=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],M=s[1],A=s[4],x=s[7],w=s[2],S=s[5],C=s[8];return r[0]=o*_+a*M+c*w,r[3]=o*p+a*A+c*S,r[6]=o*m+a*x+c*C,r[1]=l*_+h*M+u*w,r[4]=l*p+h*A+u*S,r[7]=l*m+h*x+u*C,r[2]=d*_+f*M+g*w,r[5]=d*p+f*A+g*S,r[8]=d*m+f*x+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dh.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dh.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dh=new Ze,Of=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){let i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vn?Fo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Of,fromXYZ:Bf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var je=J0();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pr,Pc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{pr===void 0&&(pr=Lr("canvas")),pr.width=e.width,pr.height=e.height;let s=pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wi(t[n]/255)*255):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j0=0,Dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Uh(s[o].image)):r.push(Uh(s[o]))}else r=Uh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Uh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Q0=0,Fh=new R,Qt=class i extends ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=Xt,o=si,a=wn,c=Pn,l=i.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Jn(),this.name="",this.source=new Dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qn:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case Ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qn:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case Ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=wu;Qt.DEFAULT_ANISOTROPY=1;var St=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,x=(f+1)/2,w=(m+1)/2,S=(h+d)/4,C=(u+_)/4,y=(g+p)/4;return A>x&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=S/n,r=C/n):x>w?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=y/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lc=class extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Lc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bo=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nc=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Re=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/mr.setFromMatrixColumn(e,0).length(),r=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,n){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),as.crossVectors(n,Ln),as.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),as.crossVectors(n,Ln)),as.normalize(),Ka.crossVectors(Ln,as),s[0]=as.x,s[4]=Ka.x,s[8]=Ln.x,s[1]=as.y,s[5]=Ka.y,s[9]=Ln.y,s[2]=as.z,s[6]=Ka.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],M=n[3],A=n[7],x=n[11],w=n[15],S=s[0],C=s[4],y=s[8],T=s[12],P=s[1],I=s[5],L=s[9],k=s[13],G=s[2],B=s[6],D=s[10],V=s[14],Y=s[3],ne=s[7],re=s[11],ce=s[15];return r[0]=o*S+a*P+c*G+l*Y,r[4]=o*C+a*I+c*B+l*ne,r[8]=o*y+a*L+c*D+l*re,r[12]=o*T+a*k+c*V+l*ce,r[1]=h*S+u*P+d*G+f*Y,r[5]=h*C+u*I+d*B+f*ne,r[9]=h*y+u*L+d*D+f*re,r[13]=h*T+u*k+d*V+f*ce,r[2]=g*S+_*P+p*G+m*Y,r[6]=g*C+_*I+p*B+m*ne,r[10]=g*y+_*L+p*D+m*re,r[14]=g*T+_*k+p*V+m*ce,r[3]=M*S+A*P+x*G+w*Y,r[7]=M*C+A*I+x*B+w*ne,r[11]=M*y+A*L+x*D+w*re,r[15]=M*T+A*k+x*V+w*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],M=c*f-l*d,A=a*f-l*u,x=a*d-c*u,w=o*f-l*h,S=o*d-c*h,C=o*u-a*h;return t*(_*M-p*A+m*x)-n*(g*M-p*w+m*S)+s*(g*A-_*w+m*C)-r*(g*x-_*S+p*C)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],M=t*a-n*o,A=t*c-s*o,x=t*l-r*o,w=n*c-s*a,S=n*l-r*a,C=s*l-r*c,y=h*_-u*g,T=h*p-d*g,P=h*m-f*g,I=u*p-d*_,L=u*m-f*_,k=d*m-f*p,G=M*k-A*L+x*I+w*P-S*T+C*y;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/G;return e[0]=(a*k-c*L+l*I)*B,e[1]=(s*L-n*k-r*I)*B,e[2]=(_*C-p*S+m*w)*B,e[3]=(d*S-u*C-f*w)*B,e[4]=(c*P-o*k-l*T)*B,e[5]=(t*k-s*P+r*T)*B,e[6]=(p*x-g*C-m*A)*B,e[7]=(h*C-d*x+f*A)*B,e[8]=(o*L-a*P+l*y)*B,e[9]=(n*P-t*L-r*y)*B,e[10]=(g*S-_*x+m*M)*B,e[11]=(u*x-h*S-f*M)*B,e[12]=(a*T-o*I-c*y)*B,e[13]=(t*I-n*T+s*y)*B,e[14]=(_*A-g*w-p*M)*B,e[15]=(h*w-u*A+d*M)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,M=c*l,A=c*h,x=c*u,w=n.x,S=n.y,C=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+x)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+m))*S,s[6]=(p+M)*S,s[7]=0,s[8]=(g+A)*C,s[9]=(p-M)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=mr.set(s[0],s[1],s[2]).length(),a=mr.set(s[4],s[5],s[6]).length(),c=mr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),qn.copy(this);let l=1/o,h=1/a,u=1/c;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=$n,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Pr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=$n,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===$n)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Pr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mr=new R,qn=new Re,ex=new R(0,0,0),tx=new R(1,1,1),as=new R,Ka=new R,Ln=new R,zf=new Re,kf=new ot,zn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nx=0,Vf=new R,gr=new ot,Bi=new Re,Za=new R,Ao=new R,ix=new R,sx=new ot,Gf=new R(1,0,0),Hf=new R(0,1,0),Wf=new R(0,0,1),Xf={type:"added"},rx={type:"removed"},xr={type:"childadded",child:null},Oh={type:"childremoved",child:null},Ut=class i extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new zn,n=new ot,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new Ze}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Hf,e)}rotateZ(e){return this.rotateOnAxis(Wf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Hf,e)}translateZ(e){return this.translateOnAxis(Wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Ao,Za,this.up):Bi.lookAt(Za,Ao,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),gr.setFromRotationMatrix(Bi),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xf),xr.child=e,this.dispatchEvent(xr),xr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rx),Oh.child=e,this.dispatchEvent(Oh),Oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new R(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},ox={type:"move"},Fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ox)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Bh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Nu(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Bh(o,r,e+1/3),this.g=Bh(o,r,e),this.b=Bh(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return je.workingToColorSpace(pn.copy(this),e),Math.round(rt(pn.r*255,0,255))*65536+Math.round(rt(pn.g*255,0,255))*256+Math.round(rt(pn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Rt){je.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL($a);let n=Do(cs.h,$a.h,t),s=Do(cs.s,$a.s,t),r=Do(cs.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Ie;Ie.NAMES=tm;var zo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xi=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Yn=new R,zi=new R,zh=new R,ki=new R,_r=new R,yr=new R,qf=new R,kh=new R,Vh=new R,Gh=new R,Hh=new St,Wh=new St,Xh=new St,fs=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yn.subVectors(s,t),zi.subVectors(n,t),zh.subVectors(e,t);let o=Yn.dot(Yn),a=Yn.dot(zi),c=Yn.dot(zh),l=zi.dot(zi),h=zi.dot(zh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ki.x),c.addScaledVector(o,ki.y),c.addScaledVector(a,ki.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Hh.setScalar(0),Wh.setScalar(0),Xh.setScalar(0),Hh.fromBufferAttribute(e,t),Wh.fromBufferAttribute(e,n),Xh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Hh,r.x),o.addScaledVector(Wh,r.y),o.addScaledVector(Xh,r.z),o}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),zi.subVectors(e,t),Yn.cross(zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),Yn.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_r.subVectors(s,n),yr.subVectors(r,n),kh.subVectors(e,n);let c=_r.dot(kh),l=yr.dot(kh);if(c<=0&&l<=0)return t.copy(n);Vh.subVectors(e,s);let h=_r.dot(Vh),u=yr.dot(Vh);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(_r,o);Gh.subVectors(e,r);let f=_r.dot(Gh),g=yr.dot(Gh);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(yr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return qf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(qf,a);let m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(_r,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),ja.subVectors(this.max,To),vr.subVectors(e.a,To),Mr.subVectors(e.b,To),br.subVectors(e.c,To),ls.subVectors(Mr,vr),hs.subVectors(br,Mr),Ps.subVectors(vr,br);let t=[0,-ls.z,ls.y,0,-hs.z,hs.y,0,-Ps.z,Ps.y,ls.z,0,-ls.x,hs.z,0,-hs.x,Ps.z,0,-Ps.x,-ls.y,ls.x,0,-hs.y,hs.x,0,-Ps.y,Ps.x,0];return!qh(t,vr,Mr,br,ja)||(t=[1,0,0,0,1,0,0,0,1],!qh(t,vr,Mr,br,ja))?!1:(Qa.crossVectors(ls,hs),t=[Qa.x,Qa.y,Qa.z],qh(t,vr,Mr,br,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new R,new R,new R,new R,new R,new R,new R,new R],Kn=new R,Ja=new Vt,vr=new R,Mr=new R,br=new R,ls=new R,hs=new R,Ps=new R,To=new R,ja=new R,Qa=new R,Ls=new R;function qh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ls.fromArray(i,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var $t=new R,ec=new We,ax=0,Ht=class extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ax++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ic,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ic&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ko=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vo=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},cx=new Vt,Eo=new R,Yh=new R,en=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);let t=Eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Eo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Yh)),this.expandByPoint(Eo.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lx=0,On=new Re,Kh=new Ut,Sr=new R,Nn=new Vt,Co=new Vt,on=new R,Et=class i extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(N0(e)?Vo:ko)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return Kh.lookAt(e),Kh.updateMatrix(),this.applyMatrix4(Kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Co.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Nn.min,Co.min),Nn.expandByPoint(on),on.addVectors(Nn.max,Co.max),Nn.expandByPoint(on)):(Nn.expandByPoint(Co.min),Nn.expandByPoint(Co.max))}Nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(Sr.fromBufferAttribute(e,l),on.add(Sr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new R,c[y]=new R;let l=new R,h=new R,u=new R,d=new We,f=new We,g=new We,_=new R,p=new R;function m(y,T,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(_),a[T].add(_),a[P].add(_),c[y].add(p),c[T].add(p),c[P].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,T=M.length;y<T;++y){let P=M[y],I=P.start,L=P.count;for(let k=I,G=I+L;k<G;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let A=new R,x=new R,w=new R,S=new R;function C(y){w.fromBufferAttribute(s,y),S.copy(w);let T=a[y];A.copy(T),A.sub(w.multiplyScalar(w.dot(T))).normalize(),x.crossVectors(S,T);let I=x.dot(c[y])<0?-1:1;o.setXYZW(y,A.x,A.y,A.z,I)}for(let y=0,T=M.length;y<T;++y){let P=M[y],I=P.start,L=P.count;for(let k=I,G=I+L;k<G;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ht(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new R,Br=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hx=0,bn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=zs,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=bc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ie().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gi=new R,Zh=new R,tc=new R,us=new R,$h=new R,nc=new R,Jh=new R,yi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zh.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),us.copy(this.origin).sub(Zh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(tc),a=us.dot(this.direction),c=-us.dot(tc),l=us.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zh).addScaledVector(tc,d),f}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);let n=Gi.dot(this.direction),s=Gi.dot(Gi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,s,r){$h.subVectors(t,e),nc.subVectors(n,e),Jh.crossVectors($h,nc);let o=this.direction.dot(Jh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;us.subVectors(this.origin,e);let c=a*this.direction.dot(nc.crossVectors(us,nc));if(c<0)return null;let l=a*this.direction.dot($h.cross(us));if(l<0||c+l>o)return null;let h=-a*us.dot(Jh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},qt=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yf=new Re,Ns=new yi,ic=new en,Kf=new R,sc=new R,rc=new R,oc=new R,jh=new R,ac=new R,Zf=new R,cc=new R,ze=class extends Ut{constructor(e=new Et,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ac.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(jh.fromBufferAttribute(u,e),o?ac.addScaledVector(jh,h):ac.addScaledVector(jh.sub(t),h))}t.add(ac)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ic.copy(n.boundingSphere),ic.applyMatrix4(r),Ns.copy(e.ray).recast(e.near),!(ic.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(ic,Kf)===null||Ns.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Yf.copy(r).invert(),Ns.copy(e.ray).applyMatrix4(Yf),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,w=A;x<w;x+=3){let S=a.getX(x),C=a.getX(x+1),y=a.getX(x+2);s=lc(this,m,e,n,l,h,u,S,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=a.getX(p),A=a.getX(p+1),x=a.getX(p+2);s=lc(this,o,e,n,l,h,u,M,A,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=M,w=A;x<w;x+=3){let S=x,C=x+1,y=x+2;s=lc(this,m,e,n,l,h,u,S,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let M=p,A=p+1,x=p+2;s=lc(this,o,e,n,l,h,u,M,A,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function ux(i,e,t,n,s,r,o,a){let c;if(e.side===tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===jn,a),c===null)return null;cc.copy(a),cc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(cc);return l<t.near||l>t.far?null:{distance:l,point:cc.clone(),object:i}}function lc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,sc),i.getVertexPosition(c,rc),i.getVertexPosition(l,oc);let h=ux(i,e,t,n,sc,rc,oc,Zf);if(h){let u=new R;fs.getBarycoord(Zf,sc,rc,oc,u),s&&(h.uv=fs.getInterpolatedAttribute(s,a,c,l,u,new We)),r&&(h.uv1=fs.getInterpolatedAttribute(r,a,c,l,u,new We)),o&&(h.normal=fs.getInterpolatedAttribute(o,a,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};fs.getNormal(sc,rc,oc,d.normal),h.face=d,h.barycoord=u}return h}var Ro=new St,$f=new St,Jf=new St,dx=new St,jf=new Re,hc=new R,Qh=new en,Qf=new Re,eu=new yi,Go=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rr,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qh.copy(this.boundingSphere),Qh.applyMatrix4(s),e.ray.intersectsSphere(Qh)!==!1&&(Qf.copy(s).invert(),eu.copy(e.ray).applyMatrix4(Qf),!(this.boundingBox!==null&&eu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,eu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Rr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jc?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$f.fromBufferAttribute(s.attributes.skinIndex,e),Jf.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ro.copy(t),t.set(0,0,0,0)):(Ro.set(...t,1),t.set(0,0,0)),Ro.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Jf.getComponent(r);if(o!==0){let a=$f.getComponent(r);jf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(dx.copy(Ro).applyMatrix4(jf),o)}}return t.isVector4&&(t.w=Ro.w),t.applyMatrix4(this.bindMatrixInverse)}},zr=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},vi=class extends Qt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wt,h=Wt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new Re,fx=new Re,Ho=class i{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:fx;ep.multiplyMatrices(a,t[r]),ep.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vi(t,e,e,wn,hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new zr),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Mi=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},wr=new Re,tp=new Re,uc=[],np=new Vt,px=new Re,Io=new ze,Po=new en,Wo=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,px)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),np.copy(e.boundingBox).applyMatrix4(wr),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wr),Po.copy(e.boundingSphere).applyMatrix4(wr),this.boundingSphere.union(Po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Po.copy(this.boundingSphere),Po.applyMatrix4(n),e.ray.intersectsSphere(Po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,wr),tp.multiplyMatrices(n,wr),Io.matrixWorld=tp,Io.raycast(e,uc);for(let o=0,a=uc.length;o<a;o++){let c=uc[o];c.instanceId=r,c.object=this,t.push(c)}uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vi(new Float32Array(s*this.count),s,this.count,bs,hn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},tu=new R,mx=new R,gx=new Ze,gi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tu.subVectors(n,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gx.getNormalMatrix(e),s=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ds=new en,xx=new We(.5,.5),dc=new R,ms=class{constructor(e=new gi,t=new gi,n=new gi,s=new gi,r=new gi,o=new gi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],M=r[12],A=r[13],x=r[14],w=r[15];if(s[0].setComponents(l-o,f-h,m-g,w-M).normalize(),s[1].setComponents(l+o,f+h,m+g,w+M).normalize(),s[2].setComponents(l+a,f+u,m+_,w+A).normalize(),s[3].setComponents(l-a,f-u,m-_,w-A).normalize(),n)s[4].setComponents(c,d,p,x).normalize(),s[5].setComponents(l-c,f-d,m-p,w-x).normalize();else if(s[4].setComponents(l-c,f-d,m-p,w-x).normalize(),t===$n)s[5].setComponents(l+c,f+d,m+p,w+x).normalize();else if(t===Pr)s[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);let t=xx.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kr=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dc=new R,Uc=new R,ip=new Re,Lo=new yi,fc=new en,nu=new R,sp=new R,Ws=class extends Ut{constructor(e=new Et,t=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Dc.fromBufferAttribute(t,s-1),Uc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Dc.distanceTo(Uc);e.setAttribute("lineDistance",new Qe(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(s),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;ip.copy(s).invert(),Lo.copy(e.ray).applyMatrix4(ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=h.getX(_),M=h.getX(_+1),A=pc(this,e,Lo,c,m,M,_);A&&t.push(A)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=pc(this,e,Lo,c,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=pc(this,e,Lo,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=pc(this,e,Lo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Dc.fromBufferAttribute(a,s),Uc.fromBufferAttribute(a,r),t.distanceSqToSegment(Dc,Uc,nu,sp)>n)return;nu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nu);if(!(l<e.near||l>e.far))return{distance:l,point:sp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rp=new R,op=new R,Xo=class extends Ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rp.fromBufferAttribute(t,s),op.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rp.distanceTo(op);e.setAttribute("lineDistance",new Qe(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},qo=class extends Ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bi=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ap=new Re,au=new yi,mc=new en,gc=new R,qi=class extends Ut{constructor(e=new Et,t=new bi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mc.copy(n.boundingSphere),mc.applyMatrix4(s),mc.radius+=r,e.ray.intersectsSphere(mc)===!1)return;ap.copy(s).invert(),au.copy(e.ray).applyMatrix4(ap);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=l.getX(g);gc.fromBufferAttribute(u,p),cp(gc,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)gc.fromBufferAttribute(u,g),cp(gc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cp(i,e,t,n,s,r,o){let a=au.distanceSqToPoint(i);if(a<t){let c=new R;au.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Yo=class extends Qt{constructor(e=[],t=vs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gs=class extends Qt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends Qt{constructor(e,t,n=Dn,s,r,o,a=Wt,c=Wt,l,h=_i,u=1){if(h!==_i&&h!==Ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fc=class extends Yi{constructor(e,t=Dn,n=vs,s,r,o=Wt,a=Wt,c,l=_i){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ko=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Cn=class i extends Et{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(_,p,m,M,A,x,w,S,C,y,T){let P=x/C,I=w/y,L=x/2,k=w/2,G=S/2,B=C+1,D=y+1,V=0,Y=0,ne=new R;for(let re=0;re<D;re++){let ce=re*I-k;for(let me=0;me<B;me++){let Ye=me*P-L;ne[_]=Ye*M,ne[p]=ce*A,ne[m]=G,l.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=S>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(me/C),u.push(1-re/y),V+=1}}for(let re=0;re<y;re++)for(let ce=0;ce<C;ce++){let me=d+ce+B*re,Ye=d+ce+B*(re+1),mt=d+(ce+1)+B*(re+1),$e=d+(ce+1)+B*re;c.push(me,Ye,$e),c.push(Ye,mt,$e),Y+=6}a.addGroup(f,Y,T),f+=Y,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Zo=class i extends Et{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new R,h=new We;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ti=class i extends Et{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],p=n/2,m=0;M(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function M(){let x=new R,w=new R,S=0,C=(t-e)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,I=P*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,G=k*c+a,B=Math.sin(G),D=Math.cos(G);w.x=I*B,w.y=-P*n+p,w.z=I*D,u.push(w.x,w.y,w.z),x.set(B,C,D).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-P),T.push(g++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=_[T][y],I=_[T+1][y],L=_[T+1][y+1],k=_[T][y+1];(e>0||T!==0)&&(h.push(P,I,k),S+=3),(t>0||T!==r-1)&&(h.push(I,L,k),S+=3)}l.addGroup(m,S,0),m+=S}function A(x){let w=g,S=new We,C=new R,y=0,T=x===!0?e:t,P=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let L=0;L<=s;L++){let G=L/s*c+a,B=Math.cos(G),D=Math.sin(G);C.x=T*D,C.y=p*P,C.z=T*B,u.push(C.x,C.y,C.z),d.push(0,P,0),S.x=B*.5+.5,S.y=D*.5*P+.5,f.push(S.x,S.y),g++}for(let L=0;L<s;L++){let k=w+L,G=I+L;x===!0?h.push(G,G+1,k):h.push(G+1,G,k),y+=3}l.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$o=class i extends ti{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ni=class i extends Et{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let M=m*d-o;for(let A=0;A<l;A++){let x=A*u-r;g.push(x,-M,0),_.push(0,0,1),p.push(A/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<a;M++){let A=M+l*m,x=M+l*(m+1),w=M+1+l*(m+1),S=M+1+l*m;f.push(A,x,S),f.push(x,w,S)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ki=class i extends Et{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let M=[],A=m/n,x=o+A*a,w=e*Math.cos(x),S=Math.sqrt(e*e-w*w),C=0;m===0&&o===0?C=.5/t:m===n&&c===Math.PI&&(C=-.5/t);for(let y=0;y<=t;y++){let T=y/t,P=s+T*r;u.x=-S*Math.cos(P),u.y=w,u.z=S*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+C,1-A),M.push(l++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let A=h[m][M+1],x=h[m][M],w=h[m+1][M],S=h[m+1][M+1];(m!==0||o>0)&&f.push(A,x,S),(m!==n-1||c<Math.PI)&&f.push(x,w,S)}this.setIndex(f),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(_,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Vr=class i extends Et{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new R,f=new R,g=new R;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let m=0;m<=s;m++){let M=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,M=(s+1)*(_-1)+p-1,A=(s+1)*(_-1)+p,x=(s+1)*_+p;c.push(m,M,x),c.push(M,A,x)}this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function Zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lp(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Zs(i[t]);for(let s in n)e[s]=n[s]}return e}function lp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _x(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var nm={clone:Zs,merge:gn},yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=_x(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ie().setHex(s.value);break;case"v2":this.uniforms[n].value=new We().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new St().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oc=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rn=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Si=class extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=va,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=$c,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bc=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zc=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Mx(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function hp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function bx(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Fs,endingEnd:Fs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Os:r=e,a=2*t-n;break;case Uo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Os:o=e,c=2*n-t;break;case Uo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,A=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let w=0;w!==a;++w)r[w]=m*o[h+w]+M*o[l+w]+A*o[c+w]+x*o[u+w];return r}},Jo=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Vc=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Gc=class extends wi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[l+g],p=o[c+g],m=f*d+g*2,M=u[m],A=u[m+1],x=e*d+g*2,w=h[x],S=h[x+1],C=(n-t)/(s-t),y,T,P,I,L;for(let k=0;k<8;k++){y=C*C,T=y*C,P=1-C,I=P*P,L=I*P;let B=L*t+3*I*C*M+3*P*y*w+T*s-n;if(Math.abs(B)<1e-10)break;let D=3*I*(M-t)+6*P*C*(w-M)+3*y*(s-w);if(Math.abs(D)<1e-10)break;C=C-B/D,C=Math.max(0,Math.min(1,C))}r[g]=L*_+3*I*C*A+3*P*y*S+T*p}return r}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Gc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break;case ru:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return vc;case this.InterpolantFactoryMethodBezier:return ru}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ve("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&D0(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Gs;var Zi=class extends In{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Vs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};jo.prototype.ValueTypeName="color";var $i=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};$i.prototype.ValueTypeName="number";var Hc=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)ot.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ji=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}};Ji.prototype.ValueTypeName="quaternion";Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends In{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Vs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var xs=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};xs.prototype.ValueTypeName="vector";var Xs=class{constructor(e="",t=-1,n=[],s=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wx(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Mx(c);c=hp(c,1,h),l=hp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new $i(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Sx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return jo;case"quaternion":return Ji;case"bool":case"boolean":return Zi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sx(i.type);if(i.times===void 0){let t=[],n=[];bx(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(up(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!up(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function up(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},im=new Wc,Ai=class{constructor(e){this.manager=e!==void 0?e:im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ai.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hi={},cu=class extends Error{constructor(e,t){super(e),this.response=t}},Gr=class extends Ai{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=xi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:n,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Hi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){M();function M(){u.read().then(({done:A,value:x})=>{if(A)m.close();else{_+=x.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let S=0,C=h.length;S<C;S++){let y=h[S];y.onProgress&&y.onProgress(w)}m.enqueue(x),M()}},A=>{m.error(A)})}}});return new Response(p)}else throw new cu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{xi.add(`file:${e}`,l);let h=Hi[e];delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Hi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Hi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ar=new WeakMap,Xc=class extends Ai{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ar.get(o);u===void 0&&(u=[],Ar.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Lr("img");function c(){h(),t&&t(this);let u=Ar.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ar.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),xi.remove(`image:${e}`);let d=Ar.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Ar.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Qo=class extends Ai{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,o=new Xc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},iu=new Re,dp=new R,fp=new R,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(iu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_c=new R,yc=new ot,mi=new R,ta=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_c,yc,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(_c,yc,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_c,yc,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ds=new R,pp=new We,mp=new We,Dt=class extends ta{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ds.x,ds.y).multiplyScalar(-e/ds.z),ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ds.x,ds.y).multiplyScalar(-e/ds.z)}getViewSize(e,t){return this.getViewBounds(e,pp,mp),t.subVectors(mp,pp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(No*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lu=class extends ea{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},na=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},hu=class extends ea{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0}},ia=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ys=class extends ta{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends ea{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kn=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new uu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var su=new WeakMap,sa=class extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{su.has(o)===!0?(s&&s(su.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){xi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),su.set(c,l),xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Tr=-90,Er=1,qc=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dt(Tr,Er,e,t);s.layers=this.layers,this.add(s);let r=new Dt(Tr,Er,e,t);r.layers=this.layers,this.add(r);let o=new Dt(Tr,Er,e,t);o.layers=this.layers,this.add(o);let a=new Dt(Tr,Er,e,t);a.layers=this.layers,this.add(a);let c=new Dt(Tr,Er,e,t);c.layers=this.layers,this.add(c);let l=new Dt(Tr,Er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yc=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Kc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){ot.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;ot.multiplyQuaternionsFlat(e,o,e,t,e,n),ot.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Uu="\\[\\]\\.:\\/",Ax=new RegExp("["+Uu+"]","g"),Fu="[^"+Uu+"]",Tx="[^"+Uu.replace("\\.","")+"]",Ex=/((?:WC+[\/:])*)/.source.replace("WC",Fu),Cx=/(WCOD+)?/.source.replace("WCOD",Tx),Rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),Ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),Px=new RegExp("^"+Ex+Cx+Rx+Ix+"$"),Lx=["material","materials","bones","map"],du=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ax,"")}static parseTrackName(e){let t=Px.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=du;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Fs,endingEnd:Fs};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=_a,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Gp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Dl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Vp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Nl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Os,s.endingEnd=Os):(e?s.endingStart=this.zeroSlopeAtStart?Os:Fs:s.endingStart=Uo,t?s.endingEnd=this.zeroSlopeAtEnd?Os:Fs:s.endingEnd=Uo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Nx=new Float32Array(1),ra=class extends ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;g=new Kc(wt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Jo(new Float32Array(2),new Float32Array(2),1,Nx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Xs.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Dl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Zc(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Xs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var oa=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},gp=new Re,aa=class{constructor(e,t,n=0,s=1/0){this.ray=new yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ur,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return fu(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fu(e[s],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)fu(r[o],e,t,!0)}}var pu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function Ou(i,e,t,n){let s=Dx(n);switch(t){case Ru:return i*e;case bs:return i*e/s.components*s.byteLength;case Kr:return i*e/s.components*s.byteLength;case Ci:return i*e*2/s.components*s.byteLength;case Zr:return i*e*2/s.components*s.byteLength;case Iu:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case $r:return i*e*4/s.components*s.byteLength;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case il:case rl:return Math.max(i,8)*Math.max(e,8)/2;case al:case cl:case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ll:case ga:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case El:case Cl:case Rl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xa:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(i){switch(i){case Pn:case Au:return{byteLength:1,components:1};case Xr:case Tu:case Ei:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Dn:case qr:case hn:return{byteLength:4,components:1};case Eu:case Cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Tm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Fx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,$x=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,l_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",p_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,g_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,x_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,R_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,U_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,F_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,k_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ey=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,oy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,py=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,my=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_y=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,My=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,by=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ty=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ry=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Iy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Py=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ly=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Fy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,By=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$y=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ev=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pe={alphahash_fragment:Ox,alphahash_pars_fragment:Bx,alphamap_fragment:zx,alphamap_pars_fragment:kx,alphatest_fragment:Vx,alphatest_pars_fragment:Gx,aomap_fragment:Hx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:qx,begin_vertex:Yx,beginnormal_vertex:Kx,bsdfs:Zx,iridescence_fragment:$x,bumpmap_pars_fragment:Jx,clipping_planes_fragment:jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:e_,clipping_planes_vertex:t_,color_fragment:n_,color_pars_fragment:i_,color_pars_vertex:s_,color_vertex:r_,common:o_,cube_uv_reflection_fragment:a_,defaultnormal_vertex:c_,displacementmap_pars_vertex:l_,displacementmap_vertex:h_,emissivemap_fragment:u_,emissivemap_pars_fragment:d_,colorspace_fragment:f_,colorspace_pars_fragment:p_,envmap_fragment:m_,envmap_common_pars_fragment:g_,envmap_pars_fragment:x_,envmap_pars_vertex:__,envmap_physical_pars_fragment:R_,envmap_vertex:y_,fog_vertex:v_,fog_pars_vertex:M_,fog_fragment:b_,fog_pars_fragment:S_,gradientmap_pars_fragment:w_,lightmap_pars_fragment:A_,lights_lambert_fragment:T_,lights_lambert_pars_fragment:E_,lights_pars_begin:C_,lights_toon_fragment:I_,lights_toon_pars_fragment:P_,lights_phong_fragment:L_,lights_phong_pars_fragment:N_,lights_physical_fragment:D_,lights_physical_pars_fragment:U_,lights_fragment_begin:F_,lights_fragment_maps:O_,lights_fragment_end:B_,lightprobes_pars_fragment:z_,logdepthbuf_fragment:k_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:H_,map_fragment:W_,map_pars_fragment:X_,map_particle_fragment:q_,map_particle_pars_fragment:Y_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:$_,morphcolor_vertex:J_,morphnormal_vertex:j_,morphtarget_pars_vertex:Q_,morphtarget_vertex:ey,normal_fragment_begin:ty,normal_fragment_maps:ny,normal_pars_fragment:iy,normal_pars_vertex:sy,normal_vertex:ry,normalmap_pars_fragment:oy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:cy,clearcoat_pars_fragment:ly,iridescence_pars_fragment:hy,opaque_fragment:uy,packing:dy,premultiplied_alpha_fragment:fy,project_vertex:py,dithering_fragment:my,dithering_pars_fragment:gy,roughnessmap_fragment:xy,roughnessmap_pars_fragment:_y,shadowmap_pars_fragment:yy,shadowmap_pars_vertex:vy,shadowmap_vertex:My,shadowmask_pars_fragment:by,skinbase_vertex:Sy,skinning_pars_vertex:wy,skinning_vertex:Ay,skinnormal_vertex:Ty,specularmap_fragment:Ey,specularmap_pars_fragment:Cy,tonemapping_fragment:Ry,tonemapping_pars_fragment:Iy,transmission_fragment:Py,transmission_pars_fragment:Ly,uv_pars_fragment:Ny,uv_pars_vertex:Dy,uv_vertex:Uy,worldpos_vertex:Fy,background_vert:Oy,background_frag:By,backgroundCube_vert:zy,backgroundCube_frag:ky,cube_vert:Vy,cube_frag:Gy,depth_vert:Hy,depth_frag:Wy,distance_vert:Xy,distance_frag:qy,equirect_vert:Yy,equirect_frag:Ky,linedashed_vert:Zy,linedashed_frag:$y,meshbasic_vert:Jy,meshbasic_frag:jy,meshlambert_vert:Qy,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:cv,meshtoon_vert:lv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ii={basic:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:gn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:gn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:gn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:gn([ye.points,ye.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:gn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:gn([ye.common,ye.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:gn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:gn([ye.sprite,ye.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:gn([ye.common,ye.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:gn([ye.lights,ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Ii.physical={uniforms:gn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var Ol={r:0,b:0,g:0},xv=new Re,Em=new Ze;Em.set(-1,0,0,0,1,0,0,0,1);function _v(i,e,t,n,s,r){let o=new Ie(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let x=M.backgroundBlurriness>0;A=e.get(A,x)}return A}function g(M){let A=!1,x=f(M);x===null?p(o,a):x&&x.isColor&&(p(x,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,A){let x=f(A);x&&(x.isCubeTexture||x.mapping===ua)?(l===void 0&&(l=new ze(new Cn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Zs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Em),l.material.toneMapped=je.getTransfer(x.colorSpace)!==yt,(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ze(new ni(2,2),new Sn({name:"BackgroundMaterial",uniforms:Zs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=je.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,A){M.getRGB(Ol,Du(i)),t.buffers.color.setClear(Ol.r,Ol.g,Ol.b,A,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,A=1){o.set(M),a=A,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:_,dispose:m}}function yv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,k,G,B){let D=!1,V=u(I,G,k,L);r!==V&&(r=V,l(r.object)),D=f(I,G,k,B),D&&g(I,G,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,x(I,L,k,G),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,k,G){let B=G.wireframe===!0,D=n[L.id];D===void 0&&(D={},n[L.id]=D);let V=I.isInstancedMesh===!0?I.id:0,Y=D[V];Y===void 0&&(Y={},D[V]=Y);let ne=Y[k.id];ne===void 0&&(ne={},Y[k.id]=ne);let re=ne[B];return re===void 0&&(re=d(c()),ne[B]=re),re}function d(I){let L=[],k=[],G=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:G,object:I,attributes:{},index:null}}function f(I,L,k,G){let B=r.attributes,D=L.attributes,V=0,Y=k.getAttributes();for(let ne in Y)if(Y[ne].location>=0){let ce=B[ne],me=D[ne];if(me===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),ce===void 0||ce.attribute!==me||me&&ce.data!==me.data)return!0;V++}return r.attributesNum!==V||r.index!==G}function g(I,L,k,G){let B={},D=L.attributes,V=0,Y=k.getAttributes();for(let ne in Y)if(Y[ne].location>=0){let ce=D[ne];ce===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));let me={};me.attribute=ce,ce&&ce.data&&(me.data=ce.data),B[ne]=me,V++}r.attributes=B,r.attributesNum=V,r.index=G}function _(){let I=r.newAttributes;for(let L=0,k=I.length;L<k;L++)I[L]=0}function p(I){m(I,0)}function m(I,L){let k=r.newAttributes,G=r.enabledAttributes,B=r.attributeDivisors;k[I]=1,G[I]===0&&(i.enableVertexAttribArray(I),G[I]=1),B[I]!==L&&(i.vertexAttribDivisor(I,L),B[I]=L)}function M(){let I=r.newAttributes,L=r.enabledAttributes;for(let k=0,G=L.length;k<G;k++)L[k]!==I[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function A(I,L,k,G,B,D,V){V===!0?i.vertexAttribIPointer(I,L,k,B,D):i.vertexAttribPointer(I,L,k,G,B,D)}function x(I,L,k,G){_();let B=G.attributes,D=k.getAttributes(),V=L.defaultAttributeValues;for(let Y in D){let ne=D[Y];if(ne.location>=0){let re=B[Y];if(re===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(re=I.instanceColor)),re!==void 0){let ce=re.normalized,me=re.itemSize,Ye=e.get(re);if(Ye===void 0)continue;let mt=Ye.buffer,$e=Ye.type,J=Ye.bytesPerElement,he=$e===i.INT||$e===i.UNSIGNED_INT||re.gpuType===qr;if(re.isInterleavedBufferAttribute){let oe=re.data,Ge=oe.stride,Ke=re.offset;if(oe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ne.locationSize;Oe++)m(ne.location+Oe,oe.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Oe=0;Oe<ne.locationSize;Oe++)p(ne.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Oe=0;Oe<ne.locationSize;Oe++)A(ne.location+Oe,me/ne.locationSize,$e,ce,Ge*J,(Ke+me/ne.locationSize*Oe)*J,he)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<ne.locationSize;oe++)m(ne.location+oe,re.meshPerAttribute);I.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<ne.locationSize;oe++)p(ne.location+oe);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let oe=0;oe<ne.locationSize;oe++)A(ne.location+oe,me/ne.locationSize,$e,ce,me*J,me/ne.locationSize*oe*J,he)}}else if(V!==void 0){let ce=V[Y];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ne.location,ce);break;case 3:i.vertexAttrib3fv(ne.location,ce);break;case 4:i.vertexAttrib4fv(ne.location,ce);break;default:i.vertexAttrib1fv(ne.location,ce)}}}}M()}function w(){T();for(let I in n){let L=n[I];for(let k in L){let G=L[k];for(let B in G){let D=G[B];for(let V in D)h(D[V].object),delete D[V];delete G[B]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let k in L){let G=L[k];for(let B in G){let D=G[B];for(let V in D)h(D[V].object),delete D[V];delete G[B]}}delete n[I.id]}function C(I){for(let L in n){let k=n[L];for(let G in k){let B=k[G];if(B[I.id]===void 0)continue;let D=B[I.id];for(let V in D)h(D[V].object),delete D[V];delete B[I.id]}}}function y(I){for(let L in n){let k=n[L],G=I.isInstancedMesh===!0?I.id:0,B=k[G];if(B!==void 0){for(let D in B){let V=B[D];for(let Y in V)h(V[Y].object),delete V[Y];delete B[D]}delete k[G],Object.keys(k).length===0&&delete n[L]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function vv(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Mv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!y)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ne("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:x,maxSamples:w,samples:S}}function bv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new gi,a=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let M=r?0:n,A=M*4,x=m.clippingState||null;c.value=x,x=h(g,d,A,f);for(let w=0;w!==A;++w)x[w]=t[w];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,x=f;A!==_;++A,x+=4)o.copy(u[A]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Ss=4,sm=[.125,.215,.35,.446,.526,.582],$s=20,Sv=256,Ma=new ys,rm=new Ie,Bu=null,zu=0,ku=0,Vu=!1,wv=new R,eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=wv}=r;Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,zu,ku),this._renderer.xr.enabled=Vu,e.scissorTest=!1,jr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),zu=this._renderer.getActiveCubeFace(),ku=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Ei,format:wn,colorSpace:Mn,depthBuffer:!1},s=om(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Av(r)),this._blurMaterial=Ev(r,e,t),this._ggxMaterial=Tv(r,e,t)}return s}_compileMaterial(e){let t=new ze(new Et,e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,s,r){let c=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rm),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Cn,new qt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(rm),m=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):x===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let w=this._cubeSize;jr(s,x*w,A>2?w:0,w,w),u.setRenderTarget(s),m&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vs||e.mapping===Ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ss?n-g+Ss:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,jr(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,Ma),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,jr(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,Ma)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$s-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):$s;p>$s&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${$s}`);let m=[],M=0;for(let C=0;C<$s;++C){let y=C/_,T=Math.exp(-y*y/2);m.push(T),C===0?M+=T:C<p&&(M+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:A}=this;d.dTheta.value=g,d.mipInt.value=A-n;let x=this._sizeLods[s],w=3*x*(s>A-Ss?s-A+Ss:0),S=4*(this._cubeSize-x);jr(t,w,S,3*x,2*x),c.setRenderTarget(t),c.render(u,Ma)}};function Av(i){let e=[],t=[],n=[],s=i,r=i-Ss+1+sm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ss?c=sm[o-i+Ss-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,M=new Float32Array(_*g*f),A=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let S=0;S<f;S++){let C=S%3*2/3-1,y=S>2?0:-1,T=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];M.set(T,_*g*S),A.set(d,p*g*S);let P=[S,S,S,S,S,S];x.set(P,m*g*S)}let w=new Et;w.setAttribute("position",new Ht(M,_)),w.setAttribute("uv",new Ht(A,p)),w.setAttribute("faceIndex",new Ht(x,m)),n.push(new ze(w,null)),s>Ss&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function om(i,e,t){let n=new ln(i,e,t);return n.texture.mapping=ua,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tv(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ev(i,e,t){let n=new Float32Array($s),s=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function am(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function cm(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var zl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Yo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Cn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ti});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=Xt),new qc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Cv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===jc||f===Qc)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new zl(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===jc||f===Qc,_=f===vs||f===Ys;if(g||_){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new eo(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let M=d.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new eo(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===jc?d.mapping=vs:f===Qc&&(d.mapping=Ys),d}function c(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Rv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Bs("WebGLRenderer: "+n+" extension not supported."),s}}}function Iv(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let A=0,x=M.length;A<x;A+=3){let w=M[A+0],S=M[A+1],C=M[A+2];d.push(w,S,S,C,C,w)}}else{let M=g.array;_=g.version;for(let A=0,x=M.length/3-1;A<x;A+=3){let w=A+0,S=A+1,C=A+2;d.push(w,S,S,C,C,w)}}let p=new(g.count>=65535?Vo:ko)(d,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pv(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Lv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nv(i,e,t){let n=new WeakMap,s=new St;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),_===!0&&(A=3);let x=a.attributes.position.count*A,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let S=new Float32Array(x*w*4*u),C=new Bo(S,x,w,u);C.type=hn,C.needsUpdate=!0;let y=A*4;for(let P=0;P<u;P++){let I=p[P],L=m[P],k=M[P],G=x*w*4*P;for(let B=0;B<I.count;B++){let D=B*y;f===!0&&(s.fromBufferAttribute(I,B),S[G+D+0]=s.x,S[G+D+1]=s.y,S[G+D+2]=s.z,S[G+D+3]=0),g===!0&&(s.fromBufferAttribute(L,B),S[G+D+4]=s.x,S[G+D+5]=s.y,S[G+D+6]=s.z,S[G+D+7]=0),_===!0&&(s.fromBufferAttribute(k,B),S[G+D+8]=s.x,S[G+D+9]=s.y,S[G+D+10]=s.z,S[G+D+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new We(x,w)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dv(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Uv={[_u]:"LINEAR_TONE_MAPPING",[yu]:"REINHARD_TONE_MAPPING",[vu]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[bu]:"AGX_TONE_MAPPING",[Su]:"NEUTRAL_TONE_MAPPING",[Mu]:"CUSTOM_TONE_MAPPING"};function Fv(i,e,t,n,s,r){let o=new ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new Yi(e,t):void 0}),a=new ln(e,t,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),c=new Et;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let l=new Oc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ze(c,l),u=new ys(-1,1,1,-1,0,1),d=null,f=null,g=!1,_,p=null,m=[],M=!1;this.setSize=function(A,x){o.setSize(A,x),a.setSize(A,x);for(let w=0;w<m.length;w++){let S=m[w];S.setSize&&S.setSize(A,x)}},this.setEffects=function(A){m=A,M=m.length>0&&m[0].isRenderPass===!0;let x=o.width,w=o.height;for(let S=0;S<m.length;S++){let C=m[S];C.setSize&&C.setSize(x,w)}},this.begin=function(A,x){if(g||A.toneMapping===ii&&m.length===0)return!1;if(p=x,x!==null){let w=x.width,S=x.height;(o.width!==w||o.height!==S)&&this.setSize(w,S)}return M===!1&&A.setRenderTarget(o),_=A.toneMapping,A.toneMapping=ii,!0},this.hasRenderPass=function(){return M},this.end=function(A,x){A.toneMapping=_,g=!0;let w=o,S=a;for(let C=0;C<m.length;C++){let y=m[C];if(y.enabled!==!1&&(y.render(A,S,w,x),y.needsSwap!==!1)){let T=w;w=S,S=T}}if(d!==A.outputColorSpace||f!==A.toneMapping){d=A.outputColorSpace,f=A.toneMapping,l.defines={},je.getTransfer(d)===yt&&(l.defines.SRGB_TRANSFER="");let C=Uv[f];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(p),A.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Cm=new Qt,Wu=new Yi(1,1),Rm=new Bo,Im=new Nc,Pm=new Yo,lm=[],hm=[],um=new Float32Array(16),dm=new Float32Array(9),fm=new Float32Array(4);function no(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lm[s];if(r===void 0&&(r=new Float32Array(s),lm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vl(i,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function Vv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;fm.set(n),i.uniformMatrix2fv(this.addr,!1,fm),sn(t,n)}}function Gv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;dm.set(n),i.uniformMatrix3fv(this.addr,!1,dm),sn(t,n)}}function Hv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;um.set(n),i.uniformMatrix4fv(this.addr,!1,um),sn(t,n)}}function Wv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function qv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function Kv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function $v(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function Jv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function jv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wu.compareFunction=t.isReversedDepthBuffer()?Fl:Ul,r=Wu):r=Cm,t.setTexture2D(e||r,s)}function Qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Im,s)}function eM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pm,s)}function tM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rm,s)}function nM(i){switch(i){case 5126:return Ov;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Vv;case 35675:return Gv;case 35676:return Hv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return Kv;case 36294:return Zv;case 36295:return $v;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}function iM(i,e){i.uniform1fv(this.addr,e)}function sM(i,e){let t=no(e,this.size,2);i.uniform2fv(this.addr,t)}function rM(i,e){let t=no(e,this.size,3);i.uniform3fv(this.addr,t)}function oM(i,e){let t=no(e,this.size,4);i.uniform4fv(this.addr,t)}function aM(i,e){let t=no(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cM(i,e){let t=no(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lM(i,e){let t=no(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hM(i,e){i.uniform1iv(this.addr,e)}function uM(i,e){i.uniform2iv(this.addr,e)}function dM(i,e){i.uniform3iv(this.addr,e)}function fM(i,e){i.uniform4iv(this.addr,e)}function pM(i,e){i.uniform1uiv(this.addr,e)}function mM(i,e){i.uniform2uiv(this.addr,e)}function gM(i,e){i.uniform3uiv(this.addr,e)}function xM(i,e){i.uniform4uiv(this.addr,e)}function _M(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Wu:o=Cm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function yM(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Im,r[o])}function vM(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pm,r[o])}function MM(i,e,t){let n=this.cache,s=e.length,r=Vl(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rm,r[o])}function bM(i){switch(i){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return oM;case 35674:return aM;case 35675:return cM;case 35676:return lM;case 5124:case 35670:return hM;case 35667:case 35671:return uM;case 35668:case 35672:return dM;case 35669:case 35673:return fM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return xM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return yM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return MM}}var Xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nM(t.type)}},qu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bM(t.type)}},Yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Gu=/(\w+)(\])?(\[|\.)?/g;function pm(i,e){i.seq.push(e),i.map[e.id]=e}function SM(i,e,t){let n=i.name,s=n.length;for(Gu.lastIndex=0;;){let r=Gu.exec(n),o=Gu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pm(t,l===void 0?new Xu(a,i,e):new qu(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Yu(a),pm(t,u)),t=u}}}var Qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);SM(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function mm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wM=37297,AM=0;function TM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var gm=new Ze;function EM(i){je._getMatrix(gm,je.workingColorSpace,i);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+TM(i.getShaderSource(e),a)}else return r}function CM(i,e){let t=EM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var RM={[_u]:"Linear",[yu]:"Reinhard",[vu]:"Cineon",[ha]:"ACESFilmic",[bu]:"AgX",[Su]:"Neutral",[Mu]:"Custom"};function IM(i,e){let t=RM[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new R;function PM(){je.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function NM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function DM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sa(i){return i!==""}function _m(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var UM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(i){return i.replace(UM,OM)}var FM=new Map;function OM(i,e){let t=Pe[e];if(t===void 0){let n=FM.get(e);if(n!==void 0)t=Pe[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ku(t)}var BM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vm(i){return i.replace(BM,zM)}function zM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var kM={[ca]:"SHADOWMAP_TYPE_PCF",[Hr]:"SHADOWMAP_TYPE_VSM"};function VM(i){return kM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GM={[vs]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[ua]:"ENVMAP_TYPE_CUBE_UV"};function HM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":GM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var WM={[Ys]:"ENVMAP_MODE_REFRACTION"};function XM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":WM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qM={[$c]:"ENVMAP_BLENDING_MULTIPLY",[zp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function YM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":qM[i.combine]||"ENVMAP_BLENDING_NONE"}function KM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ZM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=VM(t),l=HM(t),h=XM(t),u=YM(t),d=KM(t),f=LM(t),g=NM(r),_=s.createProgram(),p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Sa).join(`
`),m.length>0&&(m+=`
`)):(p=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),m=[Mm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Pe.tonemapping_pars_fragment:"",t.toneMapping!==ii?IM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,CM("linearToOutputTexel",t.outputColorSpace),PM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sa).join(`
`)),o=Ku(o),o=_m(o,t),o=ym(o,t),a=Ku(a),a=_m(a,t),a=ym(a,t),o=vm(o),a=vm(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Lu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let A=M+p+o,x=M+m+a,w=mm(s,s.VERTEX_SHADER,A),S=mm(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(w)||"",G=s.getShaderInfoLog(S)||"",B=L.trim(),D=k.trim(),V=G.trim(),Y=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,S);else{let re=xm(s,w,"vertex"),ce=xm(s,S,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+re+`
`+ce)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(D===""||V==="")&&(ne=!1);ne&&(I.diagnostics={runnable:Y,programLog:B,vertexShader:{log:D,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(w),s.deleteShader(S),y=new Qr(s,_),T=DM(s,_)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,wM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=S,this}var $M=0,Zu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $u(e),t.set(e,n)),n}},$u=class{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}};function JM(i){return i===Ci||i===ga||i===xa}function jM(i,e,t,n,s,r){let o=new Ur,a=new Zu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,P,I,L,k){let G=I.fog,B=L.geometry,D=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=e.get(y.envMap||D,V),ne=Y&&Y.mapping===ua?Y.image.height:null,re=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,me=ce!==void 0?ce.length:0,Ye=0;B.morphAttributes.position!==void 0&&(Ye=1),B.morphAttributes.normal!==void 0&&(Ye=2),B.morphAttributes.color!==void 0&&(Ye=3);let mt,$e,J,he;if(re){let Se=Ii[re];mt=Se.vertexShader,$e=Se.fragmentShader}else{mt=y.vertexShader,$e=y.fragmentShader;let Se=a.getVertexShaderStage(y),Tt=a.getFragmentShaderStage(y);a.update(y,Se,Tt),J=Se.id,he=Tt.id}let oe=i.getRenderTarget(),Ge=i.state.buffers.depth.getReversed(),Ke=L.isInstancedMesh===!0,Oe=L.isBatchedMesh===!0,It=!!y.map,nt=!!y.matcap,Mt=!!Y,st=!!y.aoMap,at=!!y.lightMap,Ft=!!y.bumpMap&&y.wireframe===!1,ut=!!y.normalMap,Pt=!!y.displacementMap,Zt=!!y.emissiveMap,Nt=!!y.metalnessMap,Ot=!!y.roughnessMap,U=y.anisotropy>0,jt=y.clearcoat>0,gt=y.dispersion>0,E=y.iridescence>0,v=y.sheen>0,z=y.transmission>0,X=U&&!!y.anisotropyMap,$=jt&&!!y.clearcoatMap,le=jt&&!!y.clearcoatNormalMap,de=jt&&!!y.clearcoatRoughnessMap,K=E&&!!y.iridescenceMap,j=E&&!!y.iridescenceThicknessMap,ae=v&&!!y.sheenColorMap,Te=v&&!!y.sheenRoughnessMap,ie=!!y.specularMap,se=!!y.specularColorMap,Me=!!y.specularIntensityMap,Be=z&&!!y.transmissionMap,He=z&&!!y.thicknessMap,N=!!y.gradientMap,fe=!!y.alphaMap,Q=y.alphaTest>0,pe=!!y.alphaHash,xe=!!y.extensions,te=ii;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(te=i.toneMapping);let Ee={shaderID:re,shaderType:y.type,shaderName:y.name,vertexShader:mt,fragmentShader:$e,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&L._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&L.instanceColor!==null,instancingMorph:Ke&&L.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:It,matcap:nt,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:ne,aoMap:st,lightMap:at,bumpMap:Ft,normalMap:ut,displacementMap:Pt,emissiveMap:Zt,normalMapObjectSpace:ut&&y.normalMapType===Wp,normalMapTangentSpace:ut&&y.normalMapType===va,packedNormalMap:ut&&y.normalMapType===va&&JM(y.normalMap.format),metalnessMap:Nt,roughnessMap:Ot,anisotropy:U,anisotropyMap:X,clearcoat:jt,clearcoatMap:$,clearcoatNormalMap:le,clearcoatRoughnessMap:de,dispersion:gt,iridescence:E,iridescenceMap:K,iridescenceThicknessMap:j,sheen:v,sheenColorMap:ae,sheenRoughnessMap:Te,specularMap:ie,specularColorMap:se,specularIntensityMap:Me,transmission:z,transmissionMap:Be,thicknessMap:He,gradientMap:N,opaque:y.transparent===!1&&y.blending===zs&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:Q,alphaHash:pe,combine:y.combine,mapUv:It&&g(y.map.channel),aoMapUv:st&&g(y.aoMap.channel),lightMapUv:at&&g(y.lightMap.channel),bumpMapUv:Ft&&g(y.bumpMap.channel),normalMapUv:ut&&g(y.normalMap.channel),displacementMapUv:Pt&&g(y.displacementMap.channel),emissiveMapUv:Zt&&g(y.emissiveMap.channel),metalnessMapUv:Nt&&g(y.metalnessMap.channel),roughnessMapUv:Ot&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:$&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:ie&&g(y.specularMap.channel),specularColorMapUv:se&&g(y.specularColorMap.channel),specularIntensityMapUv:Me&&g(y.specularIntensityMap.channel),transmissionMapUv:Be&&g(y.transmissionMap.channel),thicknessMapUv:He&&g(y.thicknessMap.channel),alphaMapUv:fe&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||U),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(It||fe),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ut===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ge,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:te,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:Zt&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(T,y),M(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function A(y){let T=f[y.type],P;if(T){let I=Ii[T];P=nm.clone(I.uniforms)}else P=y.uniforms;return P}function x(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new ZM(i,T,y,s),l.push(P),h.set(T,P)),P}function w(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function C(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:A,acquireProgram:x,releaseProgram:w,releaseShaderCache:S,programs:l,dispose:C}}function QM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function eb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,p,m){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=p,M.group=m),e++,M}function c(d,f,g,_,p,m){let M=a(d,f,g,_,p,m);g.transmission>0?n.push(M):g.transparent===!0?s.push(M):t.push(M)}function l(d,f,g,_,p,m){let M=a(d,f,g,_,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f,g){t.length>1&&t.sort(d||eb),n.length>1&&n.sort(f||bm),s.length>1&&s.sort(f||bm),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function tb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Sm,i.set(n,[o])):s>=r.length?(o=new Sm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function nb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ie};break;case"SpotLight":t={position:new R,direction:new R,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function ib(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var sb=0;function rb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ob(i){let e=new nb,t=ib(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let s=new R,r=new Re,o=new Re;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,M=0,A=0,x=0,w=0,S=0,C=0;l.sort(rb);for(let T=0,P=l.length;T<P;T++){let I=l[T],L=I.color,k=I.intensity,G=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ci?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*k,u+=L.g*k,d+=L.b*k;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],k);C++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=D,f++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(L).multiplyScalar(k),D.distance=G,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[_]=D;let V=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,V.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[_]=V.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=B,x++}_++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(L).multiplyScalar(k),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=D,p++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let V=I.shadow,Y=t.get(I);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=I.shadow.matrix,A++}n.point[g]=D,g++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(k),D.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[m]=D,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let y=n.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==M||y.numPointShadows!==A||y.numSpotShadows!==x||y.numSpotMaps!==w||y.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=x+w-S,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,y.directionalLength=f,y.pointLength=g,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=M,y.numPointShadows=A,y.numSpotShadows=x,y.numSpotMaps=w,y.numLightProbes=C,n.version=sb++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let A=l[m];if(A.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(A.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(A.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(A.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(A.width*.5,0,0),x.halfHeight.set(0,A.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(A.matrixWorld),x.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(A.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function wm(i){let e=new ob(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function ab(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wm(i),e.set(s,[a])):r>=o.length?(a=new wm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],ub=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Am=new Re,ba=new R,Hu=new R;function db(i,e,t){let n=new ms,s=new We,r=new We,o=new St,a=new Bc,c=new zc,l={},h=t.maxTextureSize,u={[jn]:tn,[tn]:jn,[mn]:mn},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:cb,fragmentShader:lb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Et;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let m=this.type;this.render=function(S,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;this.type===vp&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ca);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ti),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&C.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(B=>B.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,B=S.length;G<B;G++){let D=S[G],V=D.shadow;if(V===void 0){Ne("WebGLShadowMap:",D,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let Y=V.getFrameExtents();s.multiply(Y),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,V.mapSize.y=r.y));let ne=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Hr){if(D.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ln(s.x,s.y,{format:Ci,type:Ei,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),V.map.texture.name=D.name+".shadowMap",V.map.depthTexture=new Yi(s.x,s.y,hn),V.map.depthTexture.name=D.name+".shadowMapDepth",V.map.depthTexture.format=_i,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt}else D.isPointLight?(V.map=new zl(s.x),V.map.depthTexture=new Fc(s.x,Dn)):(V.map=new ln(s.x,s.y),V.map.depthTexture=new Yi(s.x,s.y,Dn)),V.map.depthTexture.name=D.name+".shadowMap",V.map.depthTexture.format=_i,this.type===ca?(V.map.depthTexture.compareFunction=ne?Fl:Ul,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Wt,V.map.depthTexture.magFilter=Wt);V.camera.updateProjectionMatrix()}let re=V.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<re;ce++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(V.map),i.clear());let me=V.getViewport(ce);o.set(r.x*me.x,r.y*me.y,r.x*me.z,r.y*me.w),L.viewport(o)}if(D.isPointLight){let me=V.camera,Ye=V.matrix,mt=D.distance||me.far;mt!==me.far&&(me.far=mt,me.updateProjectionMatrix()),ba.setFromMatrixPosition(D.matrixWorld),me.position.copy(ba),Hu.copy(me.position),Hu.add(hb[ce]),me.up.copy(ub[ce]),me.lookAt(Hu),me.updateMatrixWorld(),Ye.makeTranslation(-ba.x,-ba.y,-ba.z),Am.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Am,me.coordinateSystem,me.reversedDepth)}else V.updateMatrices(D);n=V.getFrustum(),x(C,y,V.camera,D,this.type)}V.isPointLightShadow!==!0&&this.type===Hr&&M(V,y),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,P,I)};function M(S,C){let y=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ln(s.x,s.y,{format:Ci,type:Ei})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(C,null,y,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(C,null,y,f,_,null)}function A(S,C,y,T){let P=null,I=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=y.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=P.uuid,k=C.uuid,G=l[L];G===void 0&&(G={},l[L]=G);let B=G[k];B===void 0&&(B=P.clone(),G[k]=B,C.addEventListener("dispose",w)),P=B}if(P.visible=C.visible,P.wireframe=C.wireframe,T===Hr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:u[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=y}return P}function x(S,C,y,T,P){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Hr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let k=e.update(S),G=S.material;if(Array.isArray(G)){let B=k.groups;for(let D=0,V=B.length;D<V;D++){let Y=B[D],ne=G[Y.materialIndex];if(ne&&ne.visible){let re=A(S,ne,T,P);S.onBeforeShadow(i,S,C,y,k,re,Y),i.renderBufferDirect(y,null,k,re,S,Y),S.onAfterShadow(i,S,C,y,k,re,Y)}}}else if(G.visible){let B=A(S,G,T,P);S.onBeforeShadow(i,S,C,y,k,B,null),i.renderBufferDirect(y,null,k,B,S,null),S.onAfterShadow(i,S,C,y,k,B,null)}}let L=S.children;for(let k=0,G=L.length;k<G;k++)x(L[k],C,y,T,P)}function w(S){S.target.removeEventListener("dispose",w);for(let y in l){let T=l[y],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function fb(i,e){function t(){let N=!1,fe=new St,Q=null,pe=new St(0,0,0,0);return{setMask:function(xe){Q!==xe&&!N&&(i.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){N=xe},setClear:function(xe,te,Ee,Se,Tt){Tt===!0&&(xe*=Se,te*=Se,Ee*=Se),fe.set(xe,te,Ee,Se),pe.equals(fe)===!1&&(i.clearColor(xe,te,Ee,Se),pe.copy(fe))},reset:function(){N=!1,Q=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,Q=null,pe=null,xe=null;return{setReversed:function(te){if(fe!==te){let Ee=e.get("EXT_clip_control");te?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),fe=te;let Se=xe;xe=null,this.setClear(Se)}},getReversed:function(){return fe},setTest:function(te){te?oe(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(te){Q!==te&&!N&&(i.depthMask(te),Q=te)},setFunc:function(te){if(fe&&(te=em[te]),pe!==te){switch(te){case Sc:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case ks:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=te}},setLocked:function(te){N=te},setClear:function(te){xe!==te&&(xe=te,fe&&(te=1-te),i.clearDepth(te))},reset:function(){N=!1,Q=null,pe=null,xe=null,fe=!1}}}function s(){let N=!1,fe=null,Q=null,pe=null,xe=null,te=null,Ee=null,Se=null,Tt=null;return{setTest:function(xt){N||(xt?oe(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(xt){fe!==xt&&!N&&(i.stencilMask(xt),fe=xt)},setFunc:function(xt,yn,Tn){(Q!==xt||pe!==yn||xe!==Tn)&&(i.stencilFunc(xt,yn,Tn),Q=xt,pe=yn,xe=Tn)},setOp:function(xt,yn,Tn){(te!==xt||Ee!==yn||Se!==Tn)&&(i.stencilOp(xt,yn,Tn),te=xt,Ee=yn,Se=Tn)},setLocked:function(xt){N=xt},setClear:function(xt){Tt!==xt&&(i.clearStencil(xt),Tt=xt)},reset:function(){N=!1,fe=null,Q=null,pe=null,xe=null,te=null,Ee=null,Se=null,Tt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,x=null,w=null,S=null,C=null,y=new Ie(0,0,0),T=0,P=!1,I=null,L=null,k=null,G=null,B=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,Y=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ne)[1]),V=Y>=1):ne.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),V=Y>=2);let re=null,ce={},me=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),mt=new St().fromArray(me),$e=new St().fromArray(Ye);function J(N,fe,Q,pe){let xe=new Uint8Array(4),te=i.createTexture();i.bindTexture(N,te),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<Q;Ee++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return te}let he={};he[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(ks),Ft(!1),ut(mu),oe(i.CULL_FACE),st(Ti);function oe(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ge(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ke(N,fe){return d[N]!==fe?(i.bindFramebuffer(N,fe),d[N]=fe,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(N,fe){let Q=g,pe=!1;if(N){Q=f.get(fe),Q===void 0&&(Q=[],f.set(fe,Q));let xe=N.textures;if(Q.length!==xe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ee=xe.length;te<Ee;te++)Q[te]=i.COLOR_ATTACHMENT0+te;Q.length=xe.length,pe=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,pe=!0);pe&&i.drawBuffers(Q)}function It(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let nt={[ps]:i.FUNC_ADD,[bp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};nt[wp]=i.MIN,nt[Ap]=i.MAX;let Mt={[Tp]:i.ZERO,[Ep]:i.ONE,[Cp]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[Dp]:i.SRC_ALPHA_SATURATE,[Lp]:i.DST_COLOR,[Ip]:i.DST_ALPHA,[Rp]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Np]:i.ONE_MINUS_DST_COLOR,[Pp]:i.ONE_MINUS_DST_ALPHA,[Up]:i.CONSTANT_COLOR,[Fp]:i.ONE_MINUS_CONSTANT_COLOR,[Op]:i.CONSTANT_ALPHA,[Bp]:i.ONE_MINUS_CONSTANT_ALPHA};function st(N,fe,Q,pe,xe,te,Ee,Se,Tt,xt){if(N===Ti){p===!0&&(Ge(i.BLEND),p=!1);return}if(p===!1&&(oe(i.BLEND),p=!0),N!==Mp){if(N!==m||xt!==P){if((M!==ps||w!==ps)&&(i.blendEquation(i.FUNC_ADD),M=ps,w=ps),xt)switch(N){case zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFunc(i.ONE,i.ONE);break;case gu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case la:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}A=null,x=null,S=null,C=null,y.set(0,0,0),T=0,m=N,P=xt}return}xe=xe||fe,te=te||Q,Ee=Ee||pe,(fe!==M||xe!==w)&&(i.blendEquationSeparate(nt[fe],nt[xe]),M=fe,w=xe),(Q!==A||pe!==x||te!==S||Ee!==C)&&(i.blendFuncSeparate(Mt[Q],Mt[pe],Mt[te],Mt[Ee]),A=Q,x=pe,S=te,C=Ee),(Se.equals(y)===!1||Tt!==T)&&(i.blendColor(Se.r,Se.g,Se.b,Tt),y.copy(Se),T=Tt),m=N,P=!1}function at(N,fe){N.side===mn?Ge(i.CULL_FACE):oe(i.CULL_FACE);let Q=N.side===tn;fe&&(Q=!Q),Ft(Q),N.blending===zs&&N.transparent===!1?st(Ti):st(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let pe=N.stencilWrite;a.setTest(pe),pe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Zt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function ut(N){N!==_p?(oe(i.CULL_FACE),N!==L&&(N===mu?i.cullFace(i.BACK):N===yp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),L=N}function Pt(N){N!==k&&(V&&i.lineWidth(N),k=N)}function Zt(N,fe,Q){N?(oe(i.POLYGON_OFFSET_FILL),(G!==fe||B!==Q)&&(G=fe,B=Q,o.getReversed()&&(fe=-fe),i.polygonOffset(fe,Q))):Ge(i.POLYGON_OFFSET_FILL)}function Nt(N){N?oe(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function Ot(N){N===void 0&&(N=i.TEXTURE0+D-1),re!==N&&(i.activeTexture(N),re=N)}function U(N,fe,Q){Q===void 0&&(re===null?Q=i.TEXTURE0+D-1:Q=re);let pe=ce[Q];pe===void 0&&(pe={type:void 0,texture:void 0},ce[Q]=pe),(pe.type!==N||pe.texture!==fe)&&(re!==Q&&(i.activeTexture(Q),re=Q),i.bindTexture(N,fe||he[N]),pe.type=N,pe.texture=fe)}function jt(){let N=ce[re];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function gt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function E(){try{i.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function z(){try{i.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function de(){try{i.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function K(){try{i.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ae(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Te(N,fe){u[N]!==fe&&(i.pixelStorei(N,fe),u[N]=fe)}function ie(N){mt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),mt.copy(N))}function se(N){$e.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$e.copy(N))}function Me(N,fe){let Q=l.get(fe);Q===void 0&&(Q=new WeakMap,l.set(fe,Q));let pe=Q.get(N);pe===void 0&&(pe=i.getUniformBlockIndex(fe,N.name),Q.set(N,pe))}function Be(N,fe){let pe=l.get(fe).get(N);c.get(fe)!==pe&&(i.uniformBlockBinding(fe,pe,N.__bindingPointIndex),c.set(fe,pe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},re=null,ce={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,M=null,A=null,x=null,w=null,S=null,C=null,y=new Ie(0,0,0),T=0,P=!1,I=null,L=null,k=null,G=null,B=null,mt.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ge,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:It,setBlending:st,setMaterial:at,setFlipSided:Ft,setCullFace:ut,setLineWidth:Pt,setPolygonOffset:Zt,setScissorTest:Nt,activeTexture:Ot,bindTexture:U,unbindTexture:jt,compressedTexImage2D:gt,compressedTexImage3D:E,texImage2D:K,texImage3D:j,pixelStorei:Te,getParameter:ae,updateUBOMapping:Me,uniformBlockBinding:Be,texStorage2D:le,texStorage3D:de,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:ie,viewport:se,reset:He}}function pb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,v){return g?new OffscreenCanvas(E,v):Lr("canvas")}function p(E,v,z){let X=1,$=gt(E);if(($.width>z||$.height>z)&&(X=z/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let le=Math.floor(X*$.width),de=Math.floor(X*$.height);d===void 0&&(d=_(le,de));let K=v?_(le,de):d;return K.width=le,K.height=de,K.getContext("2d").drawImage(E,0,0,le,de),Ne("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+le+"x"+de+")."),K}else return"data"in E&&Ne("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function m(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(E,v,z,X,$,le=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let de;X&&(de=e.get("EXT_texture_norm16"),de||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&de&&(K=de.R16_EXT),z===i.SHORT&&de&&(K=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),v===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&de&&(K=de.RG16_EXT),z===i.SHORT&&de&&(K=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&de&&(K=de.RGB16_EXT),z===i.SHORT&&de&&(K=de.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let j=le?Fo:je.getTransfer($);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=j===yt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&de&&(K=de.RGBA16_EXT),z===i.SHORT&&de&&(K=de.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(E,v){let z;return E?v===null||v===Dn||v===Yr?z=i.DEPTH24_STENCIL8:v===hn?z=i.DEPTH32F_STENCIL8:v===Xr&&(z=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Dn||v===Yr?z=i.DEPTH_COMPONENT24:v===hn?z=i.DEPTH_COMPONENT32F:v===Xr&&(z=i.DEPTH_COMPONENT16),z}function S(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Wt&&E.minFilter!==Xt?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function C(E){let v=E.target;v.removeEventListener("dispose",C),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(E){let v=E.target;v.removeEventListener("dispose",y),I(v)}function T(E){let v=n.get(E);if(v.__webglInit===void 0)return;let z=E.source,X=f.get(z);if(X){let $=X[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(E),Object.keys(X).length===0&&f.delete(z)}n.remove(E)}function P(E){let v=n.get(E);i.deleteTexture(v.__webglTexture);let z=E.source,X=f.get(z);delete X[v.__cacheKey],o.memory.textures--}function I(E){let v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let $=0;$<v.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[X][$]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=E.textures;for(let X=0,$=z.length;X<$;X++){let le=n.get(z[X]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(z[X])}n.remove(E)}let L=0;function k(){L=0}function G(){return L}function B(E){L=E}function D(){let E=L;return E>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),L+=1,E}function V(E){let v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function Y(E,v){let z=n.get(E);if(E.isVideoTexture&&U(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let X=E.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(z,E,v);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function ne(E,v){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Ge(z,E,v);return}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function re(E,v){let z=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){Ge(z,E,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function ce(E,v){let z=n.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&z.__version!==E.version){Ke(z,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}let me={[Qn]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ir]:i.MIRRORED_REPEAT},Ye={[Wt]:i.NEAREST,[el]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},mt={[Xp]:i.NEVER,[$p]:i.ALWAYS,[qp]:i.LESS,[Ul]:i.LEQUAL,[Yp]:i.EQUAL,[Fl]:i.GEQUAL,[Kp]:i.GREATER,[Zp]:i.NOTEQUAL};function $e(E,v){if(v.type===hn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Xt||v.magFilter===Wr||v.magFilter===Ks||v.magFilter===si||v.minFilter===Xt||v.minFilter===Wr||v.minFilter===Ks||v.minFilter===si)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,me[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,me[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,me[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Ye[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Ye[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wt||v.minFilter!==Ks&&v.minFilter!==si||v.type===hn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",C));let X=v.source,$=f.get(X);$===void 0&&($={},f.set(X,$));let le=V(v);if(le!==E.__cacheKey){$[le]===void 0&&($[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),$[le].usedTimes++;let de=$[E.__cacheKey];de!==void 0&&($[E.__cacheKey].usedTimes--,de.usedTimes===0&&P(v)),E.__cacheKey=le,E.__webglTexture=$[le].texture}return z}function he(E,v,z){return Math.floor(Math.floor(E/z)/v)}function oe(E,v,z,X){let le=E.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,X,v.data);else{le.sort((Te,ie)=>Te.start-ie.start);let de=0;for(let Te=1;Te<le.length;Te++){let ie=le[de],se=le[Te],Me=ie.start+ie.count,Be=he(se.start,v.width,4),He=he(ie.start,v.width,4);se.start<=Me+1&&Be===He&&he(se.start+se.count-1,v.width,4)===Be?ie.count=Math.max(ie.count,se.start+se.count-ie.start):(++de,le[de]=se)}le.length=de+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,ie=le.length;Te<ie;Te++){let se=le[Te],Me=Math.floor(se.start/4),Be=Math.ceil(se.count/4),He=Me%v.width,N=Math.floor(Me/v.width),fe=Be,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,He,N,fe,Q,z,X,v.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function Ge(E,v,z){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let $=J(E,v),le=v.source;t.bindTexture(X,E.__webglTexture,i.TEXTURE0+z);let de=n.get(le);if(le.version!==de.__version||$===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Q=je.getPrimaries(je.workingColorSpace),pe=v.colorSpace===Vn?null:je.getPrimaries(v.colorSpace),xe=v.colorSpace===Vn||Q===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let j=p(v.image,!1,s.maxTextureSize);j=jt(v,j);let ae=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),ie=x(v.internalFormat,ae,Te,v.normalized,v.colorSpace,v.isVideoTexture);$e(X,v);let se,Me=v.mipmaps,Be=v.isVideoTexture!==!0,He=de.__version===void 0||$===!0,N=le.dataReady,fe=S(v,j);if(v.isDepthTexture)ie=w(v.format===Ms,v.type),He&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ie,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ie,j.width,j.height,0,ae,Te,null));else if(v.isDataTexture)if(Me.length>0){Be&&He&&t.texStorage2D(i.TEXTURE_2D,fe,ie,Me[0].width,Me[0].height);for(let Q=0,pe=Me.length;Q<pe;Q++)se=Me[Q],Be?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,ae,Te,se.data):t.texImage2D(i.TEXTURE_2D,Q,ie,se.width,se.height,0,ae,Te,se.data);v.generateMipmaps=!1}else Be?(He&&t.texStorage2D(i.TEXTURE_2D,fe,ie,j.width,j.height),N&&oe(v,j,ae,Te)):t.texImage2D(i.TEXTURE_2D,0,ie,j.width,j.height,0,ae,Te,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ie,Me[0].width,Me[0].height,j.depth);for(let Q=0,pe=Me.length;Q<pe;Q++)if(se=Me[Q],v.format!==wn)if(ae!==null)if(Be){if(N)if(v.layerUpdates.size>0){let xe=Ou(se.width,se.height,v.format,v.type);for(let te of v.layerUpdates){let Ee=se.data.subarray(te*xe/se.data.BYTES_PER_ELEMENT,(te+1)*xe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,te,se.width,se.height,1,ae,Ee)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,j.depth,ae,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,ie,se.width,se.height,j.depth,0,se.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,se.width,se.height,j.depth,ae,Te,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,ie,se.width,se.height,j.depth,0,ae,Te,se.data)}else{Be&&He&&t.texStorage2D(i.TEXTURE_2D,fe,ie,Me[0].width,Me[0].height);for(let Q=0,pe=Me.length;Q<pe;Q++)se=Me[Q],v.format!==wn?ae!==null?Be?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,ae,se.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,ie,se.width,se.height,0,se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se.width,se.height,ae,Te,se.data):t.texImage2D(i.TEXTURE_2D,Q,ie,se.width,se.height,0,ae,Te,se.data)}else if(v.isDataArrayTexture)if(Be){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ie,j.width,j.height,j.depth),N)if(v.layerUpdates.size>0){let Q=Ou(j.width,j.height,v.format,v.type);for(let pe of v.layerUpdates){let xe=j.data.subarray(pe*Q/j.data.BYTES_PER_ELEMENT,(pe+1)*Q/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,j.width,j.height,1,ae,Te,xe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ae,Te,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ie,j.width,j.height,j.depth,0,ae,Te,j.data);else if(v.isData3DTexture)Be?(He&&t.texStorage3D(i.TEXTURE_3D,fe,ie,j.width,j.height,j.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ae,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,ie,j.width,j.height,j.depth,0,ae,Te,j.data);else if(v.isFramebufferTexture){if(He)if(Be)t.texStorage2D(i.TEXTURE_2D,fe,ie,j.width,j.height);else{let Q=j.width,pe=j.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ie,Q,pe,0,ae,Te,null),Q>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),u.add(v),Q.onpaint=pe=>{let xe=pe.changedElements;for(let te of u)xe.includes(te.image)&&(te.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let xe=i.RGBA,te=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,te,Ee,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Be&&He){let Q=gt(Me[0]);t.texStorage2D(i.TEXTURE_2D,fe,ie,Q.width,Q.height)}for(let Q=0,pe=Me.length;Q<pe;Q++)se=Me[Q],Be?N&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae,Te,se):t.texImage2D(i.TEXTURE_2D,Q,ie,ae,Te,se);v.generateMipmaps=!1}else if(Be){if(He){let Q=gt(j);t.texStorage2D(i.TEXTURE_2D,fe,ie,Q.width,Q.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Te,j)}else t.texImage2D(i.TEXTURE_2D,0,ie,ae,Te,j);m(v)&&M(X),de.__version=le.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Ke(E,v,z){if(v.image.length!==6)return;let X=J(E,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let le=n.get($);if($.version!==le.__version||X===!0){t.activeTexture(i.TEXTURE0+z);let de=je.getPrimaries(je.workingColorSpace),K=v.colorSpace===Vn?null:je.getPrimaries(v.colorSpace),j=v.colorSpace===Vn||de===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,ie=[];for(let te=0;te<6;te++)!ae&&!Te?ie[te]=p(v.image[te],!0,s.maxCubemapSize):ie[te]=Te?v.image[te].image:v.image[te],ie[te]=jt(v,ie[te]);let se=ie[0],Me=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),He=x(v.internalFormat,Me,Be,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,fe=le.__version===void 0||X===!0,Q=$.dataReady,pe=S(v,se);$e(i.TEXTURE_CUBE_MAP,v);let xe;if(ae){N&&fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,He,se.width,se.height);for(let te=0;te<6;te++){xe=ie[te].mipmaps;for(let Ee=0;Ee<xe.length;Ee++){let Se=xe[Ee];v.format!==wn?Me!==null?N?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,He,Se.width,Se.height,0,Se.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,0,0,Se.width,Se.height,Me,Be,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee,He,Se.width,Se.height,0,Me,Be,Se.data)}}}else{if(xe=v.mipmaps,N&&fe){xe.length>0&&pe++;let te=gt(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,He,te.width,te.height)}for(let te=0;te<6;te++)if(Te){N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ie[te].width,ie[te].height,Me,Be,ie[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ie[te].width,ie[te].height,0,Me,Be,ie[te].data);for(let Ee=0;Ee<xe.length;Ee++){let Tt=xe[Ee].image[te].image;N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Tt.width,Tt.height,Me,Be,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,He,Tt.width,Tt.height,0,Me,Be,Tt.data)}}else{N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me,Be,ie[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Me,Be,ie[te]);for(let Ee=0;Ee<xe.length;Ee++){let Se=xe[Ee];N?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,0,0,Me,Be,Se.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ee+1,He,Me,Be,Se.image[te])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),le.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function Oe(E,v,z,X,$,le){let de=r.convert(z.format,z.colorSpace),K=r.convert(z.type),j=x(z.internalFormat,de,K,z.normalized,z.colorSpace),ae=n.get(v),Te=n.get(z);if(Te.__renderTarget=v,!ae.__hasExternalTextures){let ie=Math.max(1,v.width>>le),se=Math.max(1,v.height>>le);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,le,j,ie,se,v.depth,0,de,K,null):t.texImage2D($,le,j,ie,se,0,de,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Te.__webglTexture,0,Nt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Te.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function It(E,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){let X=v.depthTexture,$=X&&X.isDepthTexture?X.type:null,le=w(v.stencilBuffer,$),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(v),le,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(v),le,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,le,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,E)}else{let X=v.textures;for(let $=0;$<X.length;$++){let le=X[$],de=r.convert(le.format,le.colorSpace),K=r.convert(le.type),j=x(le.internalFormat,de,K,le.normalized,le.colorSpace);Ot(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(v),j,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(E,v,z){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v.depthTexture);let ae=r.convert(v.depthTexture.format),Te=r.convert(v.depthTexture.type),ie;v.depthTexture.format===_i?ie=i.DEPTH_COMPONENT24:v.depthTexture.format===Ms&&(ie=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ie,v.width,v.height,0,ae,Te,null)}}else Y(v.depthTexture,0);let le=$.__webglTexture,de=Nt(v),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=v.depthTexture.format===Ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===_i)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,le,0);else if(v.depthTexture.format===Ms)Ot(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,le,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(E){let v=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=X}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)nt(v.__webglFramebuffer[X],E,X);else{let X=E.texture.mipmaps;X&&X.length>0?nt(v.__webglFramebuffer[0],E,0):nt(v.__webglFramebuffer,E,0)}else if(z){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),It(v.__webglDepthbuffer[X],E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}}else{let X=E.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),It(v.__webglDepthbuffer,E,!1);else{let $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(E,v,z){let X=n.get(E);v!==void 0&&Oe(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Mt(E)}function at(E){let v=E.texture,z=n.get(E),X=n.get(v);E.addEventListener("dispose",y);let $=E.textures,le=E.isWebGLCubeRenderTarget===!0,de=$.length>1;if(de||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),le){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let j=0;j<v.mipmaps.length;j++)z.__webglFramebuffer[K][j]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(de)for(let K=0,j=$.length;K<j;K++){let ae=n.get($[K]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ot(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let j=$[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let ae=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),ie=x(j.internalFormat,ae,Te,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),se=Nt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ie,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),It(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),$e(i.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Oe(z.__webglFramebuffer[K][j],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else Oe(z.__webglFramebuffer[K],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);m(v)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let K=0,j=$.length;K<j;K++){let ae=$[K],Te=n.get(ae),ie=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ie=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,Te.__webglTexture),$e(ie,ae),Oe(z.__webglFramebuffer,E,ae,i.COLOR_ATTACHMENT0+K,ie,0),m(ae)&&M(ie)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,X.__webglTexture),$e(K,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Oe(z.__webglFramebuffer[j],E,v,i.COLOR_ATTACHMENT0,K,j);else Oe(z.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,K,0);m(v)&&M(K),t.unbindTexture()}E.depthBuffer&&Mt(E)}function Ft(E){let v=E.textures;for(let z=0,X=v.length;z<X;z++){let $=v[z];if(m($)){let le=A(E),de=n.get($).__webglTexture;t.bindTexture(le,de),M(le),t.unbindTexture()}}}let ut=[],Pt=[];function Zt(E){if(E.samples>0){if(Ot(E)===!1){let v=E.textures,z=E.width,X=E.height,$=i.COLOR_BUFFER_BIT,le=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(E),K=v.length>1;if(K)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let j=E.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[ae]);let Te=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,z,X,0,0,z,X,$,i.NEAREST),c===!0&&(ut.length=0,Pt.length=0,ut.push(i.COLOR_ATTACHMENT0+ae),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(le),Pt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,de.__webglColorRenderbuffer[ae]);let Te=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Nt(E){return Math.min(s.maxSamples,E.samples)}function Ot(E){let v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(E){let v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function jt(E,v){let z=E.colorSpace,X=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Mn&&z!==Vn&&(je.getTransfer(z)===yt?(X!==wn||$!==Pn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",z)),v}function gt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.getTextureUnits=G,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ce,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qu(i,e){function t(n,s=Vn){let r,o=je.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Au)return i.BYTE;if(n===Tu)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===qr)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===Ei)return i.HALF_FLOAT;if(n===Ru)return i.ALPHA;if(n===Iu)return i.RGB;if(n===wn)return i.RGBA;if(n===_i)return i.DEPTH_COMPONENT;if(n===Ms)return i.DEPTH_STENCIL;if(n===bs)return i.RED;if(n===Kr)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Zr)return i.RG_INTEGER;if(n===$r)return i.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===al||n===cl||n===ll||n===hl||n===ul||n===ga||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===al||n===cl)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ll)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return r.COMPRESSED_R11_EAC;if(n===ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ga)return r.COMPRESSED_RG11_EAC;if(n===dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===xl||n===_l||n===yl||n===vl||n===Ml||n===bl||n===Sl||n===wl||n===Al||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===El||n===Cl||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===El)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===xa||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Ju,m={},M=t.getContextAttributes(),A=null,x=null,w=[],S=[],C=new We,y=null,T=new Dt;T.viewport=new St;let P=new Dt;P.viewport=new St;let I=[T,P],L=new Yc,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let he=w[J];return he===void 0&&(he=new Fr,w[J]=he),he.getTargetRaySpace()},this.getControllerGrip=function(J){let he=w[J];return he===void 0&&(he=new Fr,w[J]=he),he.getGripSpace()},this.getHand=function(J){let he=w[J];return he===void 0&&(he=new Fr,w[J]=he),he.getHandSpace()};function B(J){let he=S.indexOf(J.inputSource);if(he===-1)return;let oe=w[he];oe!==void 0&&(oe.update(J.inputSource,J.frame,l||o),oe.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",V);for(let J=0;J<w.length;J++){let he=S[J];he!==null&&(S[J]=null,w[J].disconnect(he))}k=null,G=null,p.reset();for(let J in m)delete m[J];e.setRenderTarget(A),f=null,d=null,u=null,s=null,x=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",D),s.addEventListener("inputsourceschange",V),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Ge=null,Ke=null;M.depth&&(Ke=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=M.stencil?Ms:_i,Ge=M.stencil?Yr:Dn);let Oe={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ln(d.textureWidth,d.textureHeight,{format:wn,type:Pn,depthTexture:new Yi(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ln(f.framebufferWidth,f.framebufferHeight,{format:wn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(J){for(let he=0;he<J.removed.length;he++){let oe=J.removed[he],Ge=S.indexOf(oe);Ge>=0&&(S[Ge]=null,w[Ge].disconnect(oe))}for(let he=0;he<J.added.length;he++){let oe=J.added[he],Ge=S.indexOf(oe);if(Ge===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=S.length){S.push(oe),Ge=Oe;break}else if(S[Oe]===null){S[Oe]=oe,Ge=Oe;break}if(Ge===-1)break}let Ke=w[Ge];Ke&&Ke.connect(oe)}}let Y=new R,ne=new R;function re(J,he,oe){Y.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(oe.matrixWorld);let Ge=Y.distanceTo(ne),Ke=he.projectionMatrix.elements,Oe=oe.projectionMatrix.elements,It=Ke[14]/(Ke[10]-1),nt=Ke[14]/(Ke[10]+1),Mt=(Ke[9]+1)/Ke[5],st=(Ke[9]-1)/Ke[5],at=(Ke[8]-1)/Ke[0],Ft=(Oe[8]+1)/Oe[0],ut=It*at,Pt=It*Ft,Zt=Ge/(-at+Ft),Nt=Zt*-at;if(he.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Nt),J.translateZ(Zt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ke[10]===-1)J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Ot=It+Zt,U=nt+Zt,jt=ut-Nt,gt=Pt+(Ge-Nt),E=Mt*nt/U*Ot,v=st*nt/U*Ot;J.projectionMatrix.makePerspective(jt,gt,E,v,Ot,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,he){he===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(he.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let he=J.near,oe=J.far;p.texture!==null&&(p.depthNear>0&&(he=p.depthNear),p.depthFar>0&&(oe=p.depthFar)),L.near=P.near=T.near=he,L.far=P.far=T.far=oe,(k!==L.near||G!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,G=L.far),L.layers.mask=J.layers.mask|6,T.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let Ge=J.parent,Ke=L.cameras;ce(L,Ge);for(let Oe=0;Oe<Ke.length;Oe++)ce(Ke[Oe],Ge);Ke.length===2?re(L,T,P):L.projectionMatrix.copy(T.projectionMatrix),me(J,L,Ge)};function me(J,he,oe){oe===null?J.matrix.copy(he.matrixWorld):(J.matrix.copy(oe.matrixWorld),J.matrix.invert(),J.matrix.multiply(he.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(he.projectionMatrix),J.projectionMatrixInverse.copy(he.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Ye=null;function mt(J,he){if(h=he.getViewerPose(l||o),g=he,h!==null){let oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ge=!1;oe.length!==L.cameras.length&&(L.cameras.length=0,Ge=!0);for(let nt=0;nt<oe.length;nt++){let Mt=oe[nt],st=null;if(f!==null)st=f.getViewport(Mt);else{let Ft=u.getViewSubImage(d,Mt);st=Ft.viewport,nt===0&&(e.setRenderTargetTextures(x,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(x))}let at=I[nt];at===void 0&&(at=new Dt,at.layers.enable(nt),at.viewport=new St,I[nt]=at),at.matrix.fromArray(Mt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Mt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(st.x,st.y,st.width,st.height),nt===0&&(L.matrix.copy(at.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ge===!0&&L.cameras.push(at)}let Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let nt=u.getDepthInformation(oe[0]);nt&&nt.isValid&&nt.texture&&p.init(nt,s.renderState)}if(Ke&&Ke.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<oe.length;nt++){let Mt=oe[nt].camera;if(Mt){let st=m[Mt];st||(st=new Ko,m[Mt]=st);let at=u.getCameraImage(Mt);st.sourceTexture=at}}}}for(let oe=0;oe<w.length;oe++){let Ge=S[oe],Ke=w[oe];Ge!==null&&Ke!==void 0&&Ke.update(Ge,he,l||o)}Ye&&Ye(J,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}let $e=new Tm;$e.setAnimationLoop(mt),this.setAnimationLoop=function(J){Ye=J},this.dispose=function(){}}},xb=new Re,Lm=new Ze;Lm.set(-1,0,0,0,1,0,0,0,1);function _b(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Du(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,A,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,M,A):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===tn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===tn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=e.get(m),A=M.envMap,x=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(xb.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Lm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===tn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yb(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,w){let S=w.program;n.uniformBlockBinding(x,S)}function l(x,w){let S=s[x.id];S===void 0&&(p(x),S=h(x),s[x.id]=S,x.addEventListener("dispose",M));let C=w.program;n.updateUBOMapping(x,C);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let w=u();x.__bindingPointIndex=w;let S=i.createBuffer(),C=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let w=s[x.id],S=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let y=0,T=S.length;y<T;y++){let P=S[y];if(Array.isArray(P))for(let I=0,L=P.length;I<L;I++)f(P[I],y,I,C);else f(P,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,w,S,C){if(_(x,w,S,C)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let L=T[I],k=m(L);g(L,x.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,w,S){typeof x=="number"||typeof x=="boolean"?w[0]=x:x.isMatrix3?(w[0]=x.elements[0],w[1]=x.elements[1],w[2]=x.elements[2],w[3]=0,w[4]=x.elements[3],w[5]=x.elements[4],w[6]=x.elements[5],w[7]=0,w[8]=x.elements[6],w[9]=x.elements[7],w[10]=x.elements[8],w[11]=0):ArrayBuffer.isView(x)?w.set(new x.constructor(x.buffer,x.byteOffset,w.length)):x.toArray(w,S)}function _(x,w,S,C){let y=x.value,T=w+"_"+S;if(C[T]===void 0)return typeof y=="number"||typeof y=="boolean"?C[T]=y:ArrayBuffer.isView(y)?C[T]=y.slice():C[T]=y.clone(),!0;{let P=C[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(x){let w=x.uniforms,S=0,C=16;for(let T=0,P=w.length;T<P;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let L=0,k=I.length;L<k;L++){let G=I[L],B=Array.isArray(G.value)?G.value:[G.value];for(let D=0,V=B.length;D<V;D++){let Y=B[D],ne=m(Y),re=S%C,ce=re%ne.boundary,me=re+ce;S+=ce,me!==0&&C-me<ne.storage&&(S+=C-me),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=ne.storage}}}let y=S%C;return y>0&&(S+=C-y),x.__size=S,x.__cache={},this}function m(x){let w={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(w.boundary=16,w.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),w}function M(x){let w=x.target;w.removeEventListener("dispose",M);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var vb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function Mb(){return Ri===null&&(Ri=new vi(vb,16,16,Ci,Ei),Ri.name="DFG_LUT",Ri.minFilter=Xt,Ri.magFilter=Xt,Ri.wrapS=Bn,Ri.wrapT=Bn,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var to=class{constructor(e={}){let{canvas:t=Jp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,p=new Set([$r,Zr,Kr]),m=new Set([Pn,Dn,Xr,Yr,tl,nl]),M=new Uint32Array(4),A=new Int32Array(4),x=new R,w=null,S=null,C=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,L=null,k=null,G=null,B=null;this._outputColorSpace=Rt;let D=0,V=0,Y=null,ne=-1,re=null,ce=new St,me=new St,Ye=null,mt=new Ie(0),$e=0,J=t.width,he=t.height,oe=1,Ge=null,Ke=null,Oe=new St(0,0,J,he),It=new St(0,0,J,he),nt=!1,Mt=new ms,st=!1,at=!1,Ft=new Re,ut=new R,Pt=new St,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function Ot(){return Y===null?oe:1}let U=n;function jt(b,O){return t.getContext(b,O)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",yn,!1),U===null){let O="webgl2";if(U=jt(O,b),U===null)throw jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ve("WebGLRenderer: "+b.message),b}let gt,E,v,z,X,$,le,de,K,j,ae,Te,ie,se,Me,Be,He,N,fe,Q,pe,xe,te;function Ee(){gt=new Rv(U),gt.init(),pe=new Qu(U,gt),E=new Mv(U,gt,e,pe),v=new fb(U,gt),E.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),k=U.createFramebuffer(),G=U.createFramebuffer(),B=U.createFramebuffer(),z=new Lv(U),X=new QM,$=new pb(U,gt,v,X,E,pe,z),le=new Cv(P),de=new Fx(U),xe=new yv(U,de),K=new Iv(U,de,z,xe),j=new Dv(U,K,de,xe,z),N=new Nv(U,E,$),Me=new bv(X),ae=new jM(P,le,gt,E,xe,Me),Te=new _b(P,X),ie=new tb,se=new ab(gt),He=new _v(P,le,v,j,g,c),Be=new db(P,j,E),te=new yb(U,z,E,v),fe=new vv(U,gt,z),Q=new Pv(U,gt,z),z.programs=ae.programs,P.capabilities=E,P.extensions=gt,P.properties=X,P.renderLists=ie,P.shadowMap=Be,P.state=v,P.info=z}Ee(),_!==Pn&&(T=new Fv(_,t.width,t.height,a,s,r));let Se=new ju(P,U);this.xr=Se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(b){b!==void 0&&(oe=b,this.setSize(J,he,!1))},this.getSize=function(b){return b.set(J,he)},this.setSize=function(b,O,q=!0){if(Se.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}J=b,he=O,t.width=Math.floor(b*oe),t.height=Math.floor(O*oe),q===!0&&(t.style.width=b+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(J*oe,he*oe).floor()},this.setDrawingBufferSize=function(b,O,q){J=b,he=O,oe=q,t.width=Math.floor(b*q),t.height=Math.floor(O*q),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===Pn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ce)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,O,q,H){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,O,q,H),v.viewport(ce.copy(Oe).multiplyScalar(oe).round())},this.getScissor=function(b){return b.copy(It)},this.setScissor=function(b,O,q,H){b.isVector4?It.set(b.x,b.y,b.z,b.w):It.set(b,O,q,H),v.scissor(me.copy(It).multiplyScalar(oe).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(b){v.setScissorTest(nt=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Ke=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,q=!0){let H=0;if(b){let W=!1;if(Y!==null){let _e=Y.texture.format;W=p.has(_e)}if(W){let _e=Y.texture.type,be=m.has(_e),ge=He.getClearColor(),Ce=He.getClearAlpha(),Le=ge.r,Je=ge.g,et=ge.b;be?(M[0]=Le,M[1]=Je,M[2]=et,M[3]=Ce,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Le,A[1]=Je,A[2]=et,A[3]=Ce,U.clearBufferiv(U.COLOR,0,A))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),He.dispose(),ie.dispose(),se.dispose(),X.dispose(),le.dispose(),j.dispose(),xe.dispose(),te.dispose(),ae.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",ur),Se.removeEventListener("sessionend",di),fi.stop()};function Tt(b){b.preventDefault(),Oo("WebGLRenderer: Context Lost."),I=!0}function xt(){Oo("WebGLRenderer: Context Restored."),I=!1;let b=z.autoReset,O=Be.enabled,q=Be.autoUpdate,H=Be.needsUpdate,W=Be.type;Ee(),z.autoReset=b,Be.enabled=O,Be.autoUpdate=q,Be.needsUpdate=H,Be.type=W}function yn(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Tn(b){let O=b.target;O.removeEventListener("dispose",Tn),vo(O)}function vo(b){Mo(b),X.remove(b)}function Mo(b){let O=X.get(b).programs;O!==void 0&&(O.forEach(function(q){ae.releaseProgram(q)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,q,H,W,_e){O===null&&(O=Zt);let be=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=Lh(b,O,q,H,W);v.setMaterial(H,be);let Ce=q.index,Le=1;if(H.wireframe===!0){if(Ce=K.getWireframeAttribute(q),Ce===void 0)return;Le=2}let Je=q.drawRange,et=q.attributes.position,De=Je.start*Le,_t=(Je.start+Je.count)*Le;_e!==null&&(De=Math.max(De,_e.start*Le),_t=Math.min(_t,(_e.start+_e.count)*Le)),Ce!==null?(De=Math.max(De,0),_t=Math.min(_t,Ce.count)):et!=null&&(De=Math.max(De,0),_t=Math.min(_t,et.count));let Bt=_t-De;if(Bt<0||Bt===1/0)return;xe.setup(W,H,ge,q,Ce);let Lt,F=fe;if(Ce!==null&&(Lt=de.get(Ce),F=Q,F.setIndex(Lt)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Ot()),F.setMode(U.LINES)):F.setMode(U.TRIANGLES);else if(W.isLine){let ee=H.linewidth;ee===void 0&&(ee=1),v.setLineWidth(ee*Ot()),W.isLineSegments?F.setMode(U.LINES):W.isLineLoop?F.setMode(U.LINE_LOOP):F.setMode(U.LINE_STRIP)}else W.isPoints?F.setMode(U.POINTS):W.isSprite&&F.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))F.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ee=W._multiDrawStarts,Z=W._multiDrawCounts,we=W._multiDrawCount,ue=Ce?de.get(Ce).bytesPerElement:1,Ue=X.get(H).currentProgram.getUniforms();for(let ct=0;ct<we;ct++)Ue.setValue(U,"_gl_DrawID",ct),F.render(ee[ct]/ue,Z[ct])}else if(W.isInstancedMesh)F.renderInstances(De,Bt,W.count);else if(q.isInstancedBufferGeometry){let ee=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Z=Math.min(q.instanceCount,ee);F.renderInstances(De,Bt,Z)}else F.render(De,Bt)};function hr(b,O,q){b.transparent===!0&&b.side===mn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,dr(b,O,q),b.side=jn,b.needsUpdate=!0,dr(b,O,q),b.side=mn):dr(b,O,q)}this.compile=function(b,O,q=null){q===null&&(q=b),S=se.get(q),S.init(O),y.push(S),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(S.pushLight(W),W.castShadow&&S.pushShadow(W))}),S.setupLights();let H=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let _e=W.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){let ge=_e[be];hr(ge,q,W),H.add(ge)}else hr(_e,q,W),H.add(_e)}),S=y.pop(),H},this.compileAsync=function(b,O,q=null){let H=this.compile(b,O,q);return new Promise(W=>{function _e(){if(H.forEach(function(be){X.get(be).currentProgram.isReady()&&H.delete(be)}),H.size===0){W(b);return}setTimeout(_e,10)}gt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ui=null;function Wa(b){ui&&ui(b)}function ur(){fi.stop()}function di(){fi.start()}let fi=new Tm;fi.setAnimationLoop(Wa),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(b){ui=b,Se.setAnimationLoop(b),b===null?fi.stop():fi.start()},Se.addEventListener("sessionstart",ur),Se.addEventListener("sessionend",di),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(b,O);let q=Se.enabled===!0&&Se.isPresenting===!0,H=T!==null&&(Y===null||q)&&T.begin(P,Y);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(O),O=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,O,Y),S=se.get(b,y.length),S.init(O),S.state.textureUnits=$.getTextureUnits(),y.push(S),Ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Mt.setFromProjectionMatrix(Ft,$n,O.reversedDepth),at=this.localClippingEnabled,st=Me.init(this.clippingPlanes,at),w=ie.get(b,C.length),w.init(),C.push(w),Se.enabled===!0&&Se.isPresenting===!0){let be=P.xr.getDepthSensingMesh();be!==null&&Rs(be,O,-1/0,P.sortObjects)}Rs(b,O,0,P.sortObjects),w.finish(),P.sortObjects===!0&&w.sort(Ge,Ke,O.reversedDepth),Nt=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,Nt&&He.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Me.beginShadows();let W=S.state.shadowsArray;if(Be.render(W,b,O),st===!0&&Me.endShadows(),(H&&T.hasRenderPass())===!1){let be=w.opaque,ge=w.transmissive;if(S.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(ge.length>0)for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le];bo(be,ge,b,et)}Nt&&He.render(b);for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le];Xa(w,b,et,et.viewport)}}else ge.length>0&&bo(be,ge,b,O),Nt&&He.render(b),Xa(w,b,O)}Y!==null&&V===0&&($.updateMultisampleRenderTarget(Y),$.updateRenderTargetMipmap(Y)),H&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,O),xe.resetDefaultState(),ne=-1,re=null,y.pop(),y.length>0?(S=y[y.length-1],$.setTextureUnits(S.state.textureUnits),st===!0&&Me.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,L!==null&&L.renderEnd()};function Rs(b,O,q,H){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Mt.intersectsSprite(b)){H&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ft);let be=j.update(b),ge=b.material;ge.visible&&w.push(b,be,ge,q,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Mt.intersectsObject(b))){let be=j.update(b),ge=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Pt.copy(be.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(Ft)),Array.isArray(ge)){let Ce=be.groups;for(let Le=0,Je=Ce.length;Le<Je;Le++){let et=Ce[Le],De=ge[et.materialIndex];De&&De.visible&&w.push(b,be,De,q,Pt.z,et)}}else ge.visible&&w.push(b,be,ge,q,Pt.z,null)}}let _e=b.children;for(let be=0,ge=_e.length;be<ge;be++)Rs(_e[be],O,q,H)}function Xa(b,O,q,H){let{opaque:W,transmissive:_e,transparent:be}=b;S.setupLightsView(q),st===!0&&Me.setGlobalState(P.clippingPlanes,q),H&&v.viewport(ce.copy(H)),W.length>0&&os(W,O,q),_e.length>0&&os(_e,O,q),be.length>0&&os(be,O,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function bo(b,O,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let De=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new ln(1,1,{generateMipmaps:!0,type:De?Ei:Pn,minFilter:si,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}let _e=S.state.transmissionRenderTarget[H.id],be=H.viewport||ce;_e.setSize(be.z*P.transmissionResolutionScale,be.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(mt),$e=P.getClearAlpha(),$e<1&&P.setClearColor(16777215,.5),P.clear(),Nt&&He.render(q);let Je=P.toneMapping;P.toneMapping=ii;let et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),st===!0&&Me.setGlobalState(P.clippingPlanes,H),os(b,q,H),$.updateMultisampleRenderTarget(_e),$.updateRenderTargetMipmap(_e),gt.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _t=0,Bt=O.length;_t<Bt;_t++){let Lt=O[_t],{object:F,geometry:ee,material:Z,group:we}=Lt;if(Z.side===mn&&F.layers.test(H.layers)){let ue=Z.side;Z.side=tn,Z.needsUpdate=!0,So(F,q,H,ee,Z,we),Z.side=ue,Z.needsUpdate=!0,De=!0}}De===!0&&($.updateMultisampleRenderTarget(_e),$.updateRenderTargetMipmap(_e))}P.setRenderTarget(ge,Ce,Le),P.setClearColor(mt,$e),et!==void 0&&(H.viewport=et),P.toneMapping=Je}function os(b,O,q){let H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,_e=b.length;W<_e;W++){let be=b[W],{object:ge,geometry:Ce,group:Le}=be,Je=be.material;Je.allowOverride===!0&&H!==null&&(Je=H),ge.layers.test(q.layers)&&So(ge,O,q,Ce,Je,Le)}}function So(b,O,q,H,W,_e){b.onBeforeRender(P,O,q,H,W,_e),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(P,O,q,H,b,_e),W.transparent===!0&&W.side===mn&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,P.renderBufferDirect(q,O,H,W,b,_e),W.side=jn,W.needsUpdate=!0,P.renderBufferDirect(q,O,H,W,b,_e),W.side=mn):P.renderBufferDirect(q,O,H,W,b,_e),b.onAfterRender(P,O,q,H,W,_e)}function dr(b,O,q){O.isScene!==!0&&(O=Zt);let H=X.get(b),W=S.state.lights,_e=S.state.shadowsArray,be=W.state.version,ge=ae.getParameters(b,W.state,_e,O,q,S.state.lightProbeGridArray),Ce=ae.getProgramCacheKey(ge),Le=H.programs;H.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;H.envMap=le.get(b.envMap||H.environment,Je),H.envMapRotation=H.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Tn),Le=new Map,H.programs=Le);let et=Le.get(Ce);if(et!==void 0){if(H.currentProgram===et&&H.lightsStateVersion===be)return En(b,ge),et}else ge.uniforms=ae.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,q,ge),b.onBeforeCompile(ge,P),et=ae.acquireProgram(ge,Ce),Le.set(Ce,et),H.uniforms=ge.uniforms;let De=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(De.clippingPlanes=Me.uniform),En(b,ge),H.needsLights=qa(b),H.lightsStateVersion=be,H.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=et,H.uniformsList=null,et}function fr(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=Qr.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function En(b,O){let q=X.get(b);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Is(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let q=0,H=b.length;q<H;q++){let W=b[q];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Lh(b,O,q,H,W){O.isScene!==!0&&(O=Zt),$.resetTextureUnits();let _e=O.fog,be=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ge=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:je.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Le=le.get(H.envMap||be,Ce),Je=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,et=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!q.morphAttributes.position,_t=!!q.morphAttributes.normal,Bt=!!q.morphAttributes.color,Lt=ii;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Lt=P.toneMapping);let F=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ee=F!==void 0?F.length:0,Z=X.get(H),we=S.state.lights;if(st===!0&&(at===!0||b!==re)){let dt=b===re&&H.id===ne;Me.setState(H,b,dt)}let ue=!1;H.version===Z.__version?(Z.needsLights&&Z.lightsStateVersion!==we.state.version||Z.outputColorSpace!==ge||W.isBatchedMesh&&Z.batching===!1||!W.isBatchedMesh&&Z.batching===!0||W.isBatchedMesh&&Z.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Z.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Z.instancing===!1||!W.isInstancedMesh&&Z.instancing===!0||W.isSkinnedMesh&&Z.skinning===!1||!W.isSkinnedMesh&&Z.skinning===!0||W.isInstancedMesh&&Z.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Z.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Z.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Z.instancingMorph===!1&&W.morphTexture!==null||Z.envMap!==Le||H.fog===!0&&Z.fog!==_e||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==Me.numPlanes||Z.numIntersection!==Me.numIntersection)||Z.vertexAlphas!==Je||Z.vertexTangents!==et||Z.morphTargets!==De||Z.morphNormals!==_t||Z.morphColors!==Bt||Z.toneMapping!==Lt||Z.morphTargetsCount!==ee||!!Z.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Z.__version=H.version);let Ue=Z.currentProgram;ue===!0&&(Ue=dr(H,O,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Ue,Z));let ct=!1,lt=!1,Ct=!1,Xe=Ue.getUniforms(),tt=Z.uniforms;if(v.useProgram(Ue.program)&&(ct=!0,lt=!0,Ct=!0),H.id!==ne&&(ne=H.id,lt=!0),Z.needsLights){let dt=Is(S.state.lightProbeGridArray,W);Z.lightProbeGrid!==dt&&(Z.lightProbeGrid=dt,lt=!0)}if(ct||re!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Xe.setValue(U,"projectionMatrix",b.projectionMatrix),Xe.setValue(U,"viewMatrix",b.matrixWorldInverse);let dn=Xe.map.cameraPosition;dn!==void 0&&dn.setValue(U,ut.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&Xe.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xe.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),re!==b&&(re=b,lt=!0,Ct=!0)}if(Z.needsLights&&(we.state.directionalShadowMap.length>0&&Xe.setValue(U,"directionalShadowMap",we.state.directionalShadowMap,$),we.state.spotShadowMap.length>0&&Xe.setValue(U,"spotShadowMap",we.state.spotShadowMap,$),we.state.pointShadowMap.length>0&&Xe.setValue(U,"pointShadowMap",we.state.pointShadowMap,$)),W.isSkinnedMesh){Xe.setOptional(U,W,"bindMatrix"),Xe.setOptional(U,W,"bindMatrixInverse");let dt=W.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),Xe.setValue(U,"boneTexture",dt.boneTexture,$))}W.isBatchedMesh&&(Xe.setOptional(U,W,"batchingTexture"),Xe.setValue(U,"batchingTexture",W._matricesTexture,$),Xe.setOptional(U,W,"batchingIdTexture"),Xe.setValue(U,"batchingIdTexture",W._indirectTexture,$),Xe.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Xe.setValue(U,"batchingColorTexture",W._colorsTexture,$));let zt=q.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&N.update(W,q,Ue),(lt||Z.receiveShadow!==W.receiveShadow)&&(Z.receiveShadow=W.receiveShadow,Xe.setValue(U,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(tt.envMapIntensity.value=O.environmentIntensity),tt.dfgLUT!==void 0&&(tt.dfgLUT.value=Mb()),lt){if(Xe.setValue(U,"toneMappingExposure",P.toneMappingExposure),Z.needsLights&&wo(tt,Ct),_e&&H.fog===!0&&Te.refreshFogUniforms(tt,_e),Te.refreshMaterialUniforms(tt,H,oe,he,S.state.transmissionRenderTarget[b.id]),Z.needsLights&&Z.lightProbeGrid){let dt=Z.lightProbeGrid;tt.probesSH.value=dt.texture,tt.probesMin.value.copy(dt.boundingBox.min),tt.probesMax.value.copy(dt.boundingBox.max),tt.probesResolution.value.copy(dt.resolution)}Qr.upload(U,fr(Z),tt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qr.upload(U,fr(Z),tt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xe.setValue(U,"center",W.center),Xe.setValue(U,"modelViewMatrix",W.modelViewMatrix),Xe.setValue(U,"normalMatrix",W.normalMatrix),Xe.setValue(U,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let dt=H.uniformsGroups;for(let dn=0,pi=dt.length;dn<pi;dn++){let Ya=dt[dn];te.update(Ya,Ue),te.bind(Ya,Ue)}}return Ue}function wo(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function qa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(b,O,q){let H=X.get(b);H.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(b.texture).__webglTexture=O,X.get(b.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){let q=X.get(b);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,q=0){Y=b,D=O,V=q;let H=null,W=!1,_e=!1;if(b){let ge=X.get(b);if(ge.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,ge.__webglFramebuffer),ce.copy(b.viewport),me.copy(b.scissor),Ye=b.scissorTest,v.viewport(ce),v.scissor(me),v.setScissorTest(Ye),ne=-1;return}else if(ge.__webglFramebuffer===void 0)$.setupRenderTarget(b);else if(ge.__hasExternalTextures)$.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Je=b.depthTexture;if(ge.__boundDepthTexture!==Je){if(Je!==null&&X.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(b)}}let Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(_e=!0);let Le=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?H=Le[O][q]:H=Le[O],W=!0):b.samples>0&&$.useMultisampledRTT(b)===!1?H=X.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[q]:H=Le,ce.copy(b.viewport),me.copy(b.scissor),Ye=b.scissorTest}else ce.copy(Oe).multiplyScalar(oe).floor(),me.copy(It).multiplyScalar(oe).floor(),Ye=nt;if(q!==0&&(H=k),v.bindFramebuffer(U.FRAMEBUFFER,H)&&v.drawBuffers(b,H),v.viewport(ce),v.scissor(me),v.setScissorTest(Ye),W){let ge=X.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,q)}else if(_e){let ge=O;for(let Ce=0;Ce<b.textures.length;Ce++){let Le=X.get(b.textures[Ce]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,q,ge)}}else if(b!==null&&q!==0){let ge=X.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ge.__webglTexture,q)}ne=-1},this.readRenderTargetPixels=function(b,O,q,H,W,_e,be,ge=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){v.bindFramebuffer(U.FRAMEBUFFER,Ce);try{let Le=b.textures[ge],Je=Le.format,et=Le.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!E.textureTypeReadable(et)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-H&&q>=0&&q<=b.height-W&&U.readPixels(O,q,H,W,pe.convert(Je),pe.convert(et),_e)}finally{let Le=Y!==null?X.get(Y).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,O,q,H,W,_e,be,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(O>=0&&O<=b.width-H&&q>=0&&q<=b.height-W){v.bindFramebuffer(U.FRAMEBUFFER,Ce);let Le=b.textures[ge],Je=Le.format,et=Le.type;if(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ge),!E.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!E.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),U.readPixels(O,q,H,W,pe.convert(Je),pe.convert(et),0);let _t=Y!==null?X.get(Y).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,_t);let Bt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Qp(U,Bt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,De),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e),U.deleteBuffer(De),U.deleteSync(Bt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,q=0){let H=Math.pow(2,-q),W=Math.floor(b.image.width*H),_e=Math.floor(b.image.height*H),be=O!==null?O.x:0,ge=O!==null?O.y:0;$.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,be,ge,W,_e),v.unbindTexture()},this.copyTextureToTexture=function(b,O,q=null,H=null,W=0,_e=0){let be,ge,Ce,Le,Je,et,De,_t,Bt,Lt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(q!==null)be=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Le=q.min.x,Je=q.min.y,et=q.isBox3?q.min.z:0;else{let tt=Math.pow(2,-W);be=Math.floor(Lt.width*tt),ge=Math.floor(Lt.height*tt),b.isDataArrayTexture?Ce=Lt.depth:b.isData3DTexture?Ce=Math.floor(Lt.depth*tt):Ce=1,Le=0,Je=0,et=0}H!==null?(De=H.x,_t=H.y,Bt=H.z):(De=0,_t=0,Bt=0);let F=pe.convert(O.format),ee=pe.convert(O.type),Z;O.isData3DTexture?($.setTexture3D(O,0),Z=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?($.setTexture2DArray(O,0),Z=U.TEXTURE_2D_ARRAY):($.setTexture2D(O,0),Z=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let we=v.getParameter(U.UNPACK_ROW_LENGTH),ue=v.getParameter(U.UNPACK_IMAGE_HEIGHT),Ue=v.getParameter(U.UNPACK_SKIP_PIXELS),ct=v.getParameter(U.UNPACK_SKIP_ROWS),lt=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,Lt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Lt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(U.UNPACK_SKIP_ROWS,Je),v.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let Ct=b.isDataArrayTexture||b.isData3DTexture,Xe=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){let tt=X.get(b),zt=X.get(O),dt=X.get(tt.__renderTarget),dn=X.get(zt.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,dt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let pi=0;pi<Ce;pi++)Ct&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(b).__webglTexture,W,et+pi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(O).__webglTexture,_e,Bt+pi)),U.blitFramebuffer(Le,Je,be,ge,De,_t,be,ge,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||X.has(b)){let tt=X.get(b),zt=X.get(O);v.bindFramebuffer(U.READ_FRAMEBUFFER,G),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,B);for(let dt=0;dt<Ce;dt++)Ct?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tt.__webglTexture,W,et+dt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tt.__webglTexture,W),Xe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,_e,Bt+dt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,zt.__webglTexture,_e),W!==0?U.blitFramebuffer(Le,Je,be,ge,De,_t,be,ge,U.COLOR_BUFFER_BIT,U.NEAREST):Xe?U.copyTexSubImage3D(Z,_e,De,_t,Bt+dt,Le,Je,be,ge):U.copyTexSubImage2D(Z,_e,De,_t,Le,Je,be,ge);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Xe?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Z,_e,De,_t,Bt,be,ge,Ce,F,ee,Lt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Z,_e,De,_t,Bt,be,ge,Ce,F,Lt.data):U.texSubImage3D(Z,_e,De,_t,Bt,be,ge,Ce,F,ee,Lt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,_e,De,_t,be,ge,F,ee,Lt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,_e,De,_t,Lt.width,Lt.height,F,Lt.data):U.texSubImage2D(U.TEXTURE_2D,_e,De,_t,be,ge,F,ee,Lt);v.pixelStorei(U.UNPACK_ROW_LENGTH,we),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),v.pixelStorei(U.UNPACK_SKIP_ROWS,ct),v.pixelStorei(U.UNPACK_SKIP_IMAGES,lt),_e===0&&O.generateMipmaps&&U.generateMipmap(Z),v.unbindTexture()},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&$.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){D=0,V=0,Y=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};function Gn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Et,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Nm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let g=Nm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Nm(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ht(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function ed(i,e){if(e===Pu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jr||e===ya){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function td(i,e,t){t[0]=i[0]>e[0]?e[0]:i[0],t[1]=i[1]<e[1]?e[1]:i[1],t[2]=i[2]>e[2]?e[2]:i[2],t[3]=i[3]<e[3]?e[3]:i[3],t[4]=i[4]>e[4]?e[4]:i[4],t[5]=i[5]<e[5]?e[5]:i[5]}function bb(i,e,t){let n=!1,s=i[0]>e[0]?e[0]:i[0],r=i[1]<e[1]?e[1]:i[1],o=i[2]>e[2]?e[2]:i[2],a=i[3]<e[3]?e[3]:i[3],c=i[4]>e[4]?e[4]:i[4],l=i[5]<e[5]?e[5]:i[5];return t[0]>s&&(t[0]=s,n=!0),t[1]<r&&(t[1]=r,n=!0),t[2]>o&&(t[2]=o,n=!0),t[3]<a&&(t[3]=a,n=!0),t[4]>c&&(t[4]=c,n=!0),t[5]<l&&(t[5]=l,n=!0),n}function Sb(i,e){return!(e[0]>i[0]||e[1]<i[1]||e[2]>i[2]||e[3]<i[3]||e[4]>i[4]||e[5]<i[5])}function wb(i,e){let t=!1;return e[0]>i[0]&&(e[0]=i[0],t=!0),e[1]<i[1]&&(e[1]=i[1],t=!0),e[2]>i[2]&&(e[2]=i[2],t=!0),e[3]<i[3]&&(e[3]=i[3],t=!0),e[4]>i[4]&&(e[4]=i[4],t=!0),e[5]<i[5]&&(e[5]=i[5],t=!0),t}function Gl(i,e){i[0]-=e,i[1]+=e,i[2]-=e,i[3]+=e,i[4]-=e,i[5]+=e}function io(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return 2*(e*t+t*n+n*e)}function Js(i,e){let t=i[0]>e[0]?e[0]:i[0],n=i[1]<e[1]?e[1]:i[1],s=i[2]>e[2]?e[2]:i[2],r=i[3]<e[3]?e[3]:i[3],o=i[4]>e[4]?e[4]:i[4],a=i[5]<e[5]?e[5]:i[5],c=n-t,l=r-s,h=a-o;return 2*(c*l+l*h+h*c)}function Ab(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return e>t?e>n?0:2:t>n?1:2}function wa(i,e){let t=i[0]-e[0],n=e[0]-i[1],s=t>n?t:n;s<0&&(s=0);let r=i[2]-e[1],o=e[1]-i[3],a=r>o?r:o;a<0&&(a=0);let c=i[4]-e[2],l=e[2]-i[5],h=c>l?c:l;return h<0&&(h=0),s*s+a*a+h*h}function Tb(i,e){let t,n,s,r,o,a,c=i[0]-e[0],l=e[0]-i[1];c>l?(t=c,n=l):(t=l,n=c),t<0&&(t=0);let h=i[2]-e[1],u=e[1]-i[3];h>u?(s=h,r=u):(s=u,r=h),s<0&&(s=0);let d=i[4]-e[2],f=e[2]-i[5];return d>f?(o=d,a=f):(o=f,a=d),o<0&&(o=0),{min:t*t+s*s+o*o,max:n*n+r*r+a*a}}var nd=class{constructor(){this.array=[]}clear(){this.array=[]}push(e){let t=this.array,n=e.inheritedCost,s=t.length>6?t.length-6:0,r;for(r=t.length-1;r>=s&&!(n<=t[r].inheritedCost);r--);r>t.length-7&&t.splice(r+1,0,e)}pop(){return this.array.pop()}},Hl=class{constructor(e=!1){this.root=null,this._sortedList=new nd,this.count=0,this.highPrecision=e,this._typeArray=e?Float64Array:Float32Array}createFromArray(e,t,n,s=0){let r=t.length,o=this._typeArray;o!==(t[0].BYTES_PER_ELEMENT===4?Float32Array:Float64Array)&&console.warn("Different precision.");let a=new o(6),c,l;this.root=h(0,r,null);function h(g,_,p){if(_===1){let x=t[g];s>0&&Gl(x,s);let w={box:x,object:e[g],parent:p};return n&&n(w),w}let m=u(g,_);d();let M=f(g,_);(M===g||M===g+_)&&(M=g+(_>>1));let A={box:m,parent:p};return A.left=h(g,M-g,A),A.right=h(M,_-M+g,A),A}function u(g,_){let p=new o(6),m=g+_;p[0]=1/0,p[1]=-1/0,p[2]=1/0,p[3]=-1/0,p[4]=1/0,p[5]=-1/0,a[0]=1/0,a[1]=-1/0,a[2]=1/0,a[3]=-1/0,a[4]=1/0,a[5]=-1/0;for(let M=g;M<m;M++){let A=t[M],x=A[0],w=A[1],S=A[2],C=A[3],y=A[4],T=A[5];p[0]>x&&(p[0]=x),p[1]<w&&(p[1]=w),p[2]>S&&(p[2]=S),p[3]<C&&(p[3]=C),p[4]>y&&(p[4]=y),p[5]<T&&(p[5]=T);let P=(w+x)*.5,I=(C+S)*.5,L=(T+y)*.5;a[0]>P&&(a[0]=P),a[1]<P&&(a[1]=P),a[2]>I&&(a[2]=I),a[3]<I&&(a[3]=I),a[4]>L&&(a[4]=L),a[5]<L&&(a[5]=L)}return p[0]-=s,p[1]+=s,p[2]-=s,p[3]+=s,p[4]-=s,p[5]+=s,p}function d(){c=Ab(a)*2,l=(a[c]+a[c+1])*.5}function f(g,_){let p=g,m=g+_-1;for(;p<=m;){let M=t[p];if((M[c+1]+M[c])*.5>=l)for(;;){let A=t[m];if((A[c+1]+A[c])*.5<l){let x=e[p];e[p]=e[m],e[m]=x;let w=t[p];t[p]=t[m],t[m]=w,m--;break}if(m--,m<=p)return p}p++}return p}}insert(e,t,n){n>0&&Gl(t,n);let s=this.createLeafNode(e,t);return this.root===null?this.root=s:this.insertLeaf(s),this.count++,s}insertRange(e,t,n,s){console.warn("Method not optimized yet. It just calls 'insert' N times.");let r=e.length,o=n>0?n:n?null:0;for(let a=0;a<r;a++){let c=this.insert(e[a],t[a],o??n[a]);s&&s(c)}}move(e,t){if(!e.parent||Sb(e.box,e.parent.box)){t>0&&Gl(e.box,t);return}t>0&&Gl(e.box,t);let n=this.delete(e);this.insertLeaf(e,n),this.count++}delete(e){let t=e.parent;if(t===null)return this.root=null,null;let n=t.parent,s=t.left===e?t.right:t.left;return s.parent=n,e.parent=null,n===null?(this.root=s,t):(n.left===t?n.left=s:n.right=s,this.refit(n),this.count--,t)}clear(){this.root=null}insertLeaf(e,t){let n=this.findBestSibling(e.box),s=n.parent;t===void 0?t=this.createInternalNode(s,n,e):(t.parent=s,t.left=n,t.right=e),n.parent=t,e.parent=t,s===null?this.root=t:s.left===n?s.left=t:s.right=t,this.refitAndRotate(e,n)}createLeafNode(e,t){return{box:t,object:e,parent:null}}createInternalNode(e,t,n){return{parent:e,left:t,right:n,box:new this._typeArray(6)}}findBestSibling(e){let t=this.root,n=t,s=Js(e,t.box),r=io(e);if(t.object!==void 0)return t;let o=this._sortedList;o.clear();let a={node:t,inheritedCost:s-io(t.box)};do{let{node:c,inheritedCost:l}=a;if(r+l>=s)break;let h=c.left,u=c.right,d=Js(e,h.box)+l,f=d-io(h.box),g=Js(e,u.box)+l,_=g-io(u.box);if(d>g?s>g&&(n=u,s=g):s>d&&(n=h,s=d),_>f){if(r+f>=s||(h.object===void 0&&o.push({node:h,inheritedCost:f}),r+_>=s))continue;u.object===void 0&&o.push({node:u,inheritedCost:_})}else{if(r+_>=s||(u.object===void 0&&o.push({node:u,inheritedCost:_}),r+f>=s))continue;h.object===void 0&&o.push({node:h,inheritedCost:f})}}while(a=o.pop());return n}refit(e){for(td(e.left.box,e.right.box,e.box);e=e.parent;)if(!bb(e.left.box,e.right.box,e.box))return}refitAndRotate(e,t){let n=e.box;e=e.parent;let s=e.box;for(td(n,t.box,s);e=e.parent;){let r=e.box;if(!wb(n,r))return;let o=e.left,a=e.right,c=o.box,l=a.box,h=null,u=null,d=0;if(a.object===void 0){let f=a.left,g=a.right,_=io(a.box),p=_-Js(c,f.box),m=_-Js(c,g.box);p>m?p>0&&(h=o,u=g,d=p):m>0&&(h=o,u=f,d=m)}if(o.object===void 0){let f=o.left,g=o.right,_=io(o.box),p=_-Js(l,f.box),m=_-Js(l,g.box);p>m?p>d&&(h=a,u=g):m>d&&(h=a,u=f)}h!==null&&this.swap(h,u)}}swap(e,t){let n=e.parent,s=t.parent,r=s.box;n.left===e?n.left=t:n.right=t,s.left===t?s.left=e:s.right=e,e.parent=s,t.parent=n,td(s.left.box,s.right.box,r)}},Xl=0,Eb=1,id=class{constructor(e,t){this.coordinateSystem=t,this.array=e?new Float64Array(24):new Float32Array(24)}setFromProjectionMatrix(e){if(this.updatePlane(0,e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),this.updatePlane(1,e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),this.updatePlane(2,e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),this.updatePlane(3,e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),this.updatePlane(4,e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14]),this.coordinateSystem===Xl)this.updatePlane(5,e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]);else if(this.coordinateSystem===Eb)this.updatePlane(5,e[2],e[6],e[10],e[14]);else throw new Error("Invalid coordinate system: "+this.coordinateSystem);return this}updatePlane(e,t,n,s,r){let o=this.array,a=e*4,c=Math.sqrt(t*t+n*n+s*s);o[a+0]=t/c,o[a+1]=n/c,o[a+2]=s/c,o[a+3]=r/c}intersectsBoxMask(e,t){let n=this.array,s,r,o,a,c,l;for(let h=0;h<6;h++){if(!(t&32>>h))continue;let u=h*4,d=n[u+0],f=n[u+1],g=n[u+2],_=n[u+3];if(d>0?(s=e[1],a=e[0]):(s=e[0],a=e[1]),f>0?(r=e[3],c=e[2]):(r=e[2],c=e[3]),g>0?(o=e[5],l=e[4]):(o=e[4],l=e[5]),d*s+f*r+g*o<-_)return-1;d*a+f*c+g*l>-_&&(t^=32>>h)}return t}isIntersected(e,t){let n=this.array;for(let s=0;s<6;s++){if(!(t&32>>s))continue;let r=s*4,o=n[r+0],a=n[r+1],c=n[r+2],l=n[r+3],h=o>0?e[1]:e[0],u=a>0?e[3]:e[2],d=c>0?e[5]:e[4];if(o*h+a*u+c*d<-l)return!1}return!0}isIntersectedMargin(e,t,n){if(t===0)return!0;let s=this.array;for(let r=0;r<6;r++){if(!(t&32>>r))continue;let o=r*4,a=s[o+0],c=s[o+1],l=s[o+2],h=s[o+3],u=a>0?e[1]-n:e[0]+n,d=c>0?e[3]-n:e[2]+n,f=l>0?e[5]-n:e[4]+n;if(a*u+c*d+l*f<-h)return!1}return!0}};function Dm(i,e,t,n,s,r){let o=n[0],a=e[0],c=t[0],l=(i[o]-a)*c,h=(i[o^1]-a)*c,u=l>0?l:0,d=h<1/0?h:1/0;return o=n[1],a=e[1],c=t[1],l=(i[o+2]-a)*c,l>d||(h=(i[o^3]-a)*c,u>h)||(u=l>u?l:u,d=h<d?h:d,o=n[2],a=e[2],c=t[2],l=(i[o+4]-a)*c,l>d)||(h=(i[o^5]-a)*c,u>h)?!1:(u=l>u?l:u,d=h<d?h:d,u<=r&&d>=s)}function Um(i,e){return i[1]>=e[0]&&e[1]>=i[0]&&i[3]>=e[2]&&e[3]>=i[2]&&i[5]>=e[4]&&e[5]>=i[4]}function Cb(i,e,t){return wa(t,i)<=e*e}var Wl=class{constructor(e,t=Xl){this._sign=new Uint8Array(3),this.builder=e;let n=e.highPrecision;this.frustum=new id(n,t),this._dirInv=n?new Float64Array(3):new Float32Array(3)}get root(){return this.builder.root}createFromArray(e,t,n,s){e?.length>0&&this.builder.createFromArray(e,t,n,s)}insert(e,t,n){return this.builder.insert(e,t,n)}insertRange(e,t,n,s){e?.length>0&&this.builder.insertRange(e,t,n,s)}move(e,t){this.builder.move(e,t)}delete(e){return this.builder.delete(e)}clear(){this.builder.clear()}traverse(e){if(this.root===null)return;t(this.root,0);function t(n,s){if(n.object!==void 0){e(n,s);return}e(n,s)||(t(n.left,s+1),t(n.right,s+1))}}intersectsRay(e,t,n,s=0,r=1/0){if(this.root===null)return!1;let o=this._dirInv,a=this._sign;return o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){return Dm(l.box,t,o,a,s,r)?l.object!==void 0?n(l.object):c(l.left)||c(l.right):!1}}intersectsBox(e,t){if(this.root===null)return!1;return n(this.root);function n(s){return Um(e,s.box)?s.object!==void 0?t(s.object):n(s.left)||n(s.right):!1}}intersectsSphere(e,t,n){if(this.root===null)return!1;return s(this.root);function s(r){return Cb(e,t,r.box)?r.object!==void 0?n(r.object):s(r.left)||s(r.right):!1}}isNodeIntersected(e,t){let n=e.box,s;for(;s=e.parent;){let o=s.left===e?s.right:s.left;if(r(o))return!0;e=s}return!1;function r(o){return Um(n,o.box)?o.object!==void 0?t(o.object):r(o.left)||r(o.right):!1}}rayIntersections(e,t,n,s=0,r=1/0){if(this.root===null)return;let o=this._dirInv,a=this._sign;o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){if(Dm(l.box,t,o,a,s,r)){if(l.object!==void 0){n(l.object);return}c(l.left),c(l.right)}}}frustumCulling(e,t){if(this.root===null)return;let n=this.frustum.setFromProjectionMatrix(e);s(this.root,63);function s(o,a){if(o.object!==void 0){n.isIntersected(o.box,a)&&t(o,n,a);return}if(a=n.intersectsBoxMask(o.box,a),!(a<0)){if(a===0){r(o.left),r(o.right);return}s(o.left,a),s(o.right,a)}}function r(o){if(o.object!==void 0){t(o,n,0);return}r(o.left),r(o.right)}}frustumCullingLOD(e,t,n,s){if(this.root===null)return;let r=this.frustum.setFromProjectionMatrix(e);o(this.root,63,null);function o(l,h,u){let d=l.box;if(u===null&&(u=c(d)),l.object!==void 0){r.isIntersected(d,h)&&s(l,u,r,h);return}if(h=r.intersectsBoxMask(d,h),!(h<0)){if(h===0){a(l.left,u),a(l.right,u);return}o(l.left,h,u),o(l.right,h,u)}}function a(l,h){if(h===null&&(h=c(l.box)),l.object!==void 0){s(l,h,r,0);return}a(l.left,h),a(l.right,h)}function c(l){let{min:h,max:u}=Tb(l,t);for(let d=n.length-1;d>0;d--)if(u>=n[d])return h>=n[d]?d:null;return 0}}closestPointToPoint(e,t){if(this.root===null)return;let n=1/0;return s(this.root),Math.sqrt(n);function s(r){if(r.object!==void 0){if(t){let c=t(r.object)??wa(r.box,e);c<n&&(n=c)}else n=wa(r.box,e);return}let o=wa(r.left.box,e),a=wa(r.right.box,e);o<a?o<n&&(s(r.left),a<n&&s(r.right)):a<n&&(s(r.right),o<n&&s(r.left))}}};function sd(i,e){return e[0]=i.x,e[1]=i.y,e[2]=i.z,e}function rd(i,e){let t=i.min,n=i.max;return e[0]=t.x,e[1]=n.x,e[2]=t.y,e[3]=n.y,e[4]=t.z,e[5]=n.z,e}var Yl=class{constructor(e,t,n){if(this.isInstanceEntity=!0,this.position=new R,this.scale=new R(1,1,1),this.quaternion=new ot,this.id=t,this.owner=e,n){let s=this.quaternion,r=this.rotation=new zn;r._onChange(()=>s.setFromEuler(r,!1)),s._onChange(()=>r.setFromQuaternion(s,void 0,!1))}}get visible(){return this.owner.getVisibilityAt(this.id)}set visible(e){this.owner.setVisibilityAt(this.id,e)}get active(){return this.owner.getActiveAt(this.id)}set active(e){this.owner.setActiveAt(this.id,e)}get color(){return this.owner.getColorAt(this.id)}set color(e){this.owner.setColorAt(this.id,e)}get opacity(){return this.owner.getOpacityAt(this.id)}set opacity(e){this.owner.setOpacityAt(this.id,e)}get morph(){return this.owner.getMorphAt(this.id)}set morph(e){this.owner.setMorphAt(this.id,e)}get matrix(){return this.owner.getMatrixAt(this.id)}get matrixWorld(){return this.matrix.premultiply(this.owner.matrixWorld)}setMatrixIdentity(){let e=this.owner,t=e.matricesTexture._data,n=this.id,s=n*16;t[s+0]=1,t[s+1]=0,t[s+2]=0,t[s+3]=0,t[s+4]=0,t[s+5]=1,t[s+6]=0,t[s+7]=0,t[s+8]=0,t[s+9]=0,t[s+10]=1,t[s+11]=0,t[s+12]=0,t[s+13]=0,t[s+14]=0,t[s+15]=1,e.matricesTexture.enqueueUpdate(n)}updateMatrix(){let e=this.owner,t=this.position,n=this.quaternion,s=this.scale,r=e.matricesTexture._data,o=this.id,a=o*16,c=n._x,l=n._y,h=n._z,u=n._w,d=c+c,f=l+l,g=h+h,_=c*d,p=c*f,m=c*g,M=l*f,A=l*g,x=h*g,w=u*d,S=u*f,C=u*g,y=s.x,T=s.y,P=s.z;r[a+0]=(1-(M+x))*y,r[a+1]=(p+C)*y,r[a+2]=(m-S)*y,r[a+3]=0,r[a+4]=(p-C)*T,r[a+5]=(1-(_+x))*T,r[a+6]=(A+w)*T,r[a+7]=0,r[a+8]=(m+S)*P,r[a+9]=(A-w)*P,r[a+10]=(1-(_+M))*P,r[a+11]=0,r[a+12]=t.x,r[a+13]=t.y,r[a+14]=t.z,r[a+15]=1,e.matricesTexture.enqueueUpdate(o),e.bvh&&e.autoUpdateBVH&&e.bvh.move(o)}updateMatrixPosition(){let e=this.owner,t=this.position,n=e.matricesTexture._data,s=this.id,r=s*16;n[r+12]=t.x,n[r+13]=t.y,n[r+14]=t.z,e.matricesTexture.enqueueUpdate(s),e.bvh&&e.autoUpdateBVH&&e.bvh.move(s)}getUniform(e,t){return this.owner.getUniformAt(this.id,e,t)}updateBones(e=!0,t){this.owner.setBonesAt(this.id,e,t)}setUniform(e,t){this.owner.setUniformAt(this.id,e,t)}copyTo(e){e.position.copy(this.position),e.scale.copy(this.scale),e.quaternion.copy(this.quaternion),this.rotation&&e.rotation.copy(this.rotation)}applyMatrix4(e){return this.matrix.premultiply(e).decompose(this.position,this.quaternion,this.scale),this}applyQuaternion(e){return this.quaternion.premultiply(e),this}rotateOnAxis(e,t){return ql.setFromAxisAngle(e,t),this.quaternion.multiply(ql),this}rotateOnWorldAxis(e,t){return ql.setFromAxisAngle(e,t),this.quaternion.premultiply(ql),this}rotateX(e){return this.rotateOnAxis(Om,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Om,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}remove(){return this.owner.removeInstances(this.id),this}},ql=new ot,Fm=new R,Om=new R(1,0,0),Bm=new R(0,1,0),zm=new R(0,0,1),ad=class{constructor(e,t=0,n=!1,s=!0){this.nodesMap=new Map,this.LODsMap=new Map,this._geoBoundingSphere=null,this._sphereTarget=null,this.target=e,this.accurateCulling=s,this._margin=t;let r=e._geometry;if(r.boundingBox||r.computeBoundingBox(),this.geoBoundingBox=r.boundingBox,n){r.boundingSphere||r.computeBoundingSphere();let o=r.boundingSphere.center;o.x===0&&o.y===0&&o.z===0?(this._geoBoundingSphere=r.boundingSphere,this._sphereTarget={centerX:0,centerY:0,centerZ:0,maxScale:0}):(console.warn('"getBoxFromSphere" is ignored because geometry is not centered.'),n=!1)}this.bvh=new Wl(new Hl,Xl),this._origin=new Float32Array(3),this._dir=new Float32Array(3),this._cameraPos=new Float32Array(3),this._getBoxFromSphere=n}create(){let e=this.target._instancesCount,t=this.target._instancesArrayCount,n=new Array(e),s=new Uint32Array(e),r=0;this.clear();for(let o=0;o<t;o++)this.target.getActiveAt(o)&&(n[r]=this.getBox(o,new Float32Array(6)),s[r]=o,r++);this.bvh.createFromArray(s,n,o=>{this.nodesMap.set(o.object,o)},this._margin)}insert(e){let t=this.bvh.insert(e,this.getBox(e,new Float32Array(6)),this._margin);this.nodesMap.set(e,t)}insertRange(e){let t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=this.getBox(e[s],new Float32Array(6));this.bvh.insertRange(e,n,this._margin,s=>{this.nodesMap.set(s.object,s)})}move(e){let t=this.nodesMap.get(e);t&&(this.getBox(e,t.box),this.bvh.move(t,this._margin))}delete(e){let t=this.nodesMap.get(e);t&&(this.bvh.delete(t),this.nodesMap.delete(e))}clear(){this.bvh.clear(),this.nodesMap.clear()}frustumCulling(e,t){this._margin>0&&this.accurateCulling?this.bvh.frustumCulling(e.elements,(n,s,r)=>{s.isIntersectedMargin(n.box,r,this._margin)&&t(n)}):this.bvh.frustumCulling(e.elements,t)}frustumCullingLOD(e,t,n,s){this.LODsMap.has(n)||this.LODsMap.set(n,new Float32Array(n.length));let r=this.LODsMap.get(n);for(let a=0;a<n.length;a++)r[a]=n[a].distance;let o=this._cameraPos;o[0]=t.x,o[1]=t.y,o[2]=t.z,this._margin>0&&this.accurateCulling?this.bvh.frustumCullingLOD(e.elements,o,r,(a,c,l,h)=>{l.isIntersectedMargin(a.box,h,this._margin)&&s(a,c)}):this.bvh.frustumCullingLOD(e.elements,o,r,s)}raycast(e,t){let n=e.ray,s=this._origin,r=this._dir;sd(n.origin,s),sd(n.direction,r),this.bvh.rayIntersections(r,s,t,e.near,e.far)}intersectBox(e,t){this._boxArray||(this._boxArray=new Float32Array(6));let n=this._boxArray;return rd(e,n),this.bvh.intersectsBox(n,t)}getBox(e,t){if(this._getBoxFromSphere){let n=this.target.matricesTexture._data,{centerX:s,centerY:r,centerZ:o,maxScale:a}=this.getSphereFromMatrix_centeredGeometry(e,n,this._sphereTarget),c=this._geoBoundingSphere.radius*a;t[0]=s-c,t[1]=s+c,t[2]=r-c,t[3]=r+c,t[4]=o-c,t[5]=o+c}else km.copy(this.geoBoundingBox).applyMatrix4(this.target.getMatrixAt(e)),rd(km,t);return t}getSphereFromMatrix_centeredGeometry(e,t,n){let s=e*16,r=t[s+0],o=t[s+1],a=t[s+2],c=t[s+4],l=t[s+5],h=t[s+6],u=t[s+8],d=t[s+9],f=t[s+10],g=r*r+o*o+a*a,_=c*c+l*l+h*h,p=u*u+d*d+f*f;return n.maxScale=Math.sqrt(Math.max(g,_,p)),n.centerX=t[s+12],n.centerY=t[s+13],n.centerZ=t[s+14],n}},km=new Vt,cd=class extends oa{constructor(e,t,n,s,r,o=1){let a=e.createBuffer();super(a,t,n,s,r.length/n),this.isGLInstancedBufferAttribute=!0,this._needsUpdate=!1,this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o,this.array=r,this._cacheArray=r,e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,r,e.DYNAMIC_DRAW)}update(e,t){if(!this._needsUpdate||t===0)return;let n=e.getContext();n.bindBuffer(n.ARRAY_BUFFER,this.buffer),this.array===this._cacheArray?n.bufferSubData(n.ARRAY_BUFFER,0,this.array,0,t):(n.bufferData(n.ARRAY_BUFFER,this.array,n.DYNAMIC_DRAW),this._cacheArray=this.array),this._needsUpdate=!1}clone(){return this}},Jl=null,Kl=null,Vm={};function Rb(i){return Kl.get(i)?.()??Jl(i)}function Ib(i){if(Kl.has(i))return;let e={};Kl.set(i,()=>{if(i.isMeshDistanceMaterial){let t=Jl(i);e.light=t.light}return e})}function Pb(i,e,t){let n=e.properties;Jl=n.get;let s=`${!!i.colorsTexture}_${i._useOpacity}_${!!i.boneTexture}_${!!i.uniformsTexture}`;Vm[s]??=new WeakMap,Kl=Vm[s],n.get=Rb,Ib(t)}function Lb(i){i.properties.get=Jl}function Zm(i,e){return Math.max(e,Math.ceil(Math.sqrt(i/e))*e)}function Nb(i,e,t,n){e===3&&(console.warn('"channels" cannot be 3. Set to 4. More info: https://github.com/mrdoob/three.js/pull/23228'),e=4);let s=Zm(n,t),r=new i(s*s*e),o=i.name.includes("Float"),a=i.name.includes("Uint"),c=o?hn:a?Dn:qr,l;switch(e){case 1:l=o?bs:Kr;break;case 2:l=o?Ci:Zr;break;case 4:l=o?wn:$r;break}return{array:r,size:s,type:c,format:l}}var oo=class extends vi{constructor(e,t,n,s,r,o){t===3&&(t=4);let{array:a,format:c,size:l,type:h}=Nb(e,t,n,s);super(a,l,l,c,h),this.partialUpdate=!0,this.maxUpdateCalls=1/0,this._utils=null,this._needsUpdate=!0,this._lastWidth=-1,this._data=a,this._channels=t,this._pixelsPerInstance=n,this._stride=n*t,this._rowToUpdate=new Array(l),this._uniformMap=r,this._fetchUniformsInFragmentShader=o,this.needsUpdate=!0}resize(e){let t=Zm(e,this._pixelsPerInstance);if(t===this.image.width)return;let n=this._data,s=this._channels;this._rowToUpdate.length=t;let r=n.constructor,o=new r(t*t*s),a=Math.min(n.length,o.length);o.set(new r(n.buffer,0,a)),this.dispose(),this.image={data:o,height:t,width:t},this._data=o}enqueueUpdate(e){if(this._needsUpdate=!0,!this.partialUpdate)return;let t=this.image.width/this._pixelsPerInstance,n=Math.floor(e/t);this._rowToUpdate[n]=!0}bindToProgram(e,t,n,s,r){if(!s[r])return;s[r].value=this;let o=this.getSlot(n,r);if(o===void 0)return;let a=e.properties.get(this);e.state.bindTexture(t.TEXTURE_2D,a.__webglTexture,t.TEXTURE0+o)}update(e,t,n){let s=e.properties.get(this),r=s.__version!==this.version;if(!this._needsUpdate&&!r)return;let o=this._lastWidth!==this.image.width;if(!s.__webglTexture||o)e.initTexture(this);else{let a=this.getSlot(t,n)??e.capabilities.maxTextures-1;this.partialUpdate?this.updatePartial(s,e,a):this.updateFull(s,e,a),s.__version=this.version}this._lastWidth=this.image.width,this._needsUpdate=!1}getSlot(e,t){return e[t]?.cache[0]}updateFull(e,t,n){this.updateRows(e,t,[{row:0,count:this.image.height}],n)}updatePartial(e,t,n){let s=this.getUpdateRowsInfo();s.length!==0&&(s.length>this.maxUpdateCalls?this.updateFull(e,t,n):this.updateRows(e,t,s,n),this._rowToUpdate.fill(!1))}getUpdateRowsInfo(){let e=this._rowToUpdate,t=[];for(let n=0,s=e.length;n<s;n++)if(e[n]){let r=n;for(;n<s&&e[n];n++);t.push({row:r,count:n-r})}return t}updateRows(e,t,n,s){let r=t.getContext();this._utils??=new Qu(r,t.extensions,t.capabilities);let o=this._utils.convert(this.format),a=this._utils.convert(this.type),{data:c,width:l}=this.image,h=this._channels;t.state.activeTexture(r.TEXTURE0+s),t.state.bindTexture(r.TEXTURE_2D,e.__webglTexture,r.TEXTURE0+s);let u=je.getPrimaries(je.workingColorSpace),d=this.colorSpace===Vn?null:je.getPrimaries(this.colorSpace),f=this.colorSpace===Vn||u===d?r.NONE:r.BROWSER_DEFAULT_WEBGL,g=r.getParameter(r.UNPACK_FLIP_Y_WEBGL),_=r.getParameter(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL),p=r.getParameter(r.UNPACK_ALIGNMENT),m=r.getParameter(r.UNPACK_COLORSPACE_CONVERSION_WEBGL);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,this.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,this.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);for(let{count:M,row:A}of n)r.texSubImage2D(r.TEXTURE_2D,0,0,A,l,M,o,a,c,A*l*h);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_),r.pixelStorei(r.UNPACK_ALIGNMENT,p),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,m),this.onUpdate?.(this)}setUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;r===1?this._data[e*o+s]=n:n.toArray(this._data,e*o+s)}getUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;return r===1?this._data[e*o+s]:n.fromArray(this._data,e*o+s)}getUniformsGLSL(e,t,n){let s=this.getUniformsVertexGLSL(e,t,n),r=this.getUniformsFragmentGLSL(e,t,n);return{vertex:s,fragment:r}}getUniformsVertexGLSL(e,t,n){if(this._fetchUniformsInFragmentShader)return`
        flat varying ${n} ez_v${t}; 
        void main() {
          ez_v${t} = ${t};`;let s=this.texelsFetchGLSL(e,t),r=this.getFromTexelsGLSL(),{assignVarying:o,declareVarying:a}=this.getVarying();return`
      uniform highp sampler2D ${e};  
      ${a}
      void main() {
        ${s}
        ${r}
        ${o}`}getUniformsFragmentGLSL(e,t,n){if(!this._fetchUniformsInFragmentShader){let{declareVarying:o,getVarying:a}=this.getVarying();return`
      ${o}
      void main() {
        ${a}`}let s=this.texelsFetchGLSL(e,`ez_v${t}`),r=this.getFromTexelsGLSL();return`
      uniform highp sampler2D ${e};  
      flat varying ${n} ez_v${t};
      void main() {
        ${s}
        ${r}`}texelsFetchGLSL(e,t){let n=this._pixelsPerInstance,s=`
      int size = textureSize(${e}, 0).x;
      int j = int(${t}) * ${n};
      int x = j % size;
      int y = j / size;
    `;for(let r=0;r<n;r++)s+=`vec4 ez_texel${r} = texelFetch(${e}, ivec2(x + ${r}, y), 0);
`;return s}getFromTexelsGLSL(){let e=this._uniformMap,t="";for(let[n,{type:s,offset:r,size:o}]of e){let a=Math.floor(r/this._channels);if(s==="mat3")t+=`mat3 ${n} = mat3(ez_texel${a}.rgb, vec3(ez_texel${a}.a, ez_texel${a+1}.rg), vec3(ez_texel${a+1}.ba, ez_texel${a+2}.r));
`;else if(s==="mat4")t+=`mat4 ${n} = mat4(ez_texel${a}, ez_texel${a+1}, ez_texel${a+2}, ez_texel${a+3});
`;else{let c=this.getUniformComponents(r,o);t+=`${s} ${n} = ez_texel${a}.${c};
`}}return t}getVarying(){let e=this._uniformMap,t="",n="",s="";for(let[r,{type:o}]of e)t+=`flat varying ${o} ez_v${r};
`,n+=`ez_v${r} = ${r};
`,s+=`${o} ${r} = ez_v${r};
`;return{declareVarying:t,assignVarying:n,getVarying:s}}getUniformComponents(e,t){let n=e%this._channels,s="";for(let r=0;r<t;r++)s+=Db[n+r];return s}copy(e){return super.copy(e),this.partialUpdate=e.partialUpdate,this.maxUpdateCalls=e.maxUpdateCalls,this._channels=e._channels,this._pixelsPerInstance=e._pixelsPerInstance,this._stride=e._stride,this._rowToUpdate=e._rowToUpdate,this._uniformMap=e._uniformMap,this._fetchUniformsInFragmentShader=e._fetchUniformsInFragmentShader,this}},Db=["r","g","b","a"],Fe=class extends ze{constructor(e,t,n={},s){if(!e)throw new Error('"geometry" is mandatory.');if(!t)throw new Error('"material" is mandatory.');let{allowsEuler:r,renderer:o,createEntities:a}=n;super(e,null),this.type="InstancedMesh2",this.isInstancedMesh2=!0,this.instances=null,this.instanceIndex=null,this.colorsTexture=null,this.morphTexture=null,this.boneTexture=null,this.uniformsTexture=null,this.boundingBox=null,this.boundingSphere=null,this.bvh=null,this.customSort=null,this.raycastOnlyFrustum=!1,this.LODinfo=null,this.autoUpdate=!0,this.bindMode=Rr,this.bindMatrix=null,this.bindMatrixInverse=null,this.skeleton=null,this.autoUpdateBVH=!0,this.onFrustumEnter=null,this._renderer=null,this._instancesCount=0,this._instancesArrayCount=0,this._perObjectFrustumCulled=!0,this._sortObjects=!1,this._indexArrayNeedsUpdate=!1,this._useOpacity=!1,this._currentMaterial=null,this._customProgramCacheKeyBase=null,this._onBeforeCompileBase=null,this._definesBase=null,this._freeIds=[],this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(0),16),this.instanceColor=null,this._customProgramCacheKey=()=>`ez_${!!this.colorsTexture}_${this._useOpacity}_${!!this.boneTexture}_${!!this.uniformsTexture}_${this._customProgramCacheKeyBase.call(this._currentMaterial)}`,this._onBeforeCompile=(l,h)=>{if(this._onBeforeCompileBase&&this._onBeforeCompileBase.call(this._currentMaterial,l,h),l.defines={...l.defines},l.defines.USE_INSTANCING_INDIRECT="",l.uniforms.matricesTexture={value:this.matricesTexture},this.uniformsTexture){l.uniforms.uniformsTexture={value:this.uniformsTexture};let{vertex:u,fragment:d}=this.uniformsTexture.getUniformsGLSL("uniformsTexture","instanceIndex","uint");l.vertexShader=l.vertexShader.replace("void main() {",u),l.fragmentShader=l.fragmentShader.replace("void main() {",d)}this.colorsTexture&&l.fragmentShader.includes("#include <color_pars_fragment>")&&(l.defines.USE_INSTANCING_COLOR_INDIRECT="",l.uniforms.colorsTexture={value:this.colorsTexture},l.vertexShader=l.vertexShader.replace("<color_vertex>","<instanced_color_vertex>"),l.vertexColors&&(l.defines.USE_VERTEX_COLOR=""),l.defines.USE_COLOR_ALPHA=""),this.boneTexture&&(l.defines.USE_SKINNING="",l.defines.USE_INSTANCING_SKINNING="",l.uniforms.bindMatrix={value:this.bindMatrix},l.uniforms.bindMatrixInverse={value:this.bindMatrixInverse},l.uniforms.bonesPerInstance={value:this.skeleton.bones.length},l.uniforms.boneTexture={value:this.boneTexture})};let c=n.capacity>0?n.capacity:Ub;this._renderer=o,this._capacity=c,this._parentLOD=s,this._geometry=e,this.material=t,this._allowsEuler=r??!1,this._tempInstance=new Yl(this,-1,r),this.availabilityArray=s?.availabilityArray??new Array(c*2),this._createEntities=a,this.initLastRenderInfo(),this.initIndexAttribute(),this.initMatricesTexture()}get capacity(){return this._capacity}get instancesCount(){return this._instancesCount}get perObjectFrustumCulled(){return this._perObjectFrustumCulled}set perObjectFrustumCulled(e){this._perObjectFrustumCulled=e,this._indexArrayNeedsUpdate=!0}get sortObjects(){return this._sortObjects}set sortObjects(e){this._sortObjects=e,this._indexArrayNeedsUpdate=!0}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.patchGeometry(e)}onBeforeShadow(e,t,n,s,r,o,a){this.patchMaterial(e,o),this.updateTextures(e,o);let c=e.info.render.frame;this.instanceIndex&&this.autoUpdate&&!this.frustumCullingAlreadyPerformed(c,n,s)&&this.performFrustumCulling(s,n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,o))}onBeforeRender(e,t,n,s,r,o){if(this.patchMaterial(e,r),this.updateTextures(e,r),!this.instanceIndex){this._renderer=e;return}let a=e.info.render.frame;this.autoUpdate&&!this.frustumCullingAlreadyPerformed(a,n,null)&&this.performFrustumCulling(n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,r))}onAfterShadow(e,t,n,s,r,o,a){this.unpatchMaterial(e,o)}onAfterRender(e,t,n,s,r,o){this.unpatchMaterial(e,r),!(this.instanceIndex||o&&!this.isLastGroup(o.materialIndex))&&this.initIndexAttribute()}updateTextures(e,t){let n=e.properties.get(t);this.matricesTexture.update(e,n,"matricesTexture"),this.colorsTexture?.update(e,n,"colorsTexture"),this.uniformsTexture?.update(e,n,"uniformsTexture"),this.boneTexture?.update(e,n,"boneTexture")}bindTextures(e,t){let n=e.properties.get(t),s=n.uniforms;if(!s)return;let r=n.currentProgram,o=r?.program;if(!o)return;let a=e.getContext(),c=r.getUniforms().map,l=a.getParameter(a.CURRENT_PROGRAM);e.state.useProgram(o),this.matricesTexture.bindToProgram(e,a,c,s,"matricesTexture"),this.colorsTexture?.bindToProgram(e,a,c,s,"colorsTexture"),this.uniformsTexture?.bindToProgram(e,a,c,s,"uniformsTexture"),this.boneTexture?.bindToProgram(e,a,c,s,"boneTexture"),e.state.useProgram(l)}isLastGroup(e){let t=this.material;for(let n=t.length-1;n>=e;n--)if(t[n].visible)return n===e}initIndexAttribute(){if(!this._renderer){this.count=0;return}let e=this._renderer.getContext(),t=this._capacity,n=new Uint32Array(t);for(let s=0;s<t;s++)n[s]=s;this.instanceIndex=new cd(e,e.UNSIGNED_INT,1,4,n),this._geometry.setAttribute("instanceIndex",this.instanceIndex)}initLastRenderInfo(){this._parentLOD||(this._lastRenderInfo={frame:-1,camera:null,shadowCamera:null})}initMatricesTexture(){this._parentLOD||(this.matricesTexture=new oo(Float32Array,4,4,this._capacity))}initColorsTexture(){this._parentLOD||(this.colorsTexture=new oo(Float32Array,4,1,this._capacity),this.colorsTexture.colorSpace=je.workingColorSpace,this.colorsTexture._data.fill(1),this.materialsNeedsUpdate())}materialsNeedsUpdate(){if(this.material.isMaterial){this.material.needsUpdate=!0;return}for(let e of this.material)e.needsUpdate=!0}patchGeometry(e){let t=e.getAttribute("instanceIndex");if(t){if(t===this.instanceIndex)return;console.warn("The geometry has been cloned because it was already used."),e=e.clone(),e.deleteAttribute("instanceIndex")}this.instanceIndex&&e.setAttribute("instanceIndex",this.instanceIndex)}patchMaterial(e,t){this._currentMaterial=t,this._customProgramCacheKeyBase=t.customProgramCacheKey,this._onBeforeCompileBase=t.onBeforeCompile,this._definesBase=t.defines,t.customProgramCacheKey=this._customProgramCacheKey,t.onBeforeCompile=this._onBeforeCompile,Pb(this,e,t)}unpatchMaterial(e,t){this._currentMaterial=null,Lb(e),t.defines=this._definesBase,t.onBeforeCompile=this._onBeforeCompileBase,t.customProgramCacheKey=this._customProgramCacheKeyBase,this._onBeforeCompileBase=null,this._customProgramCacheKeyBase=null,this._definesBase=null}computeBVH(e={}){this.bvh||(this.bvh=new ad(this,e.margin,e.getBBoxFromBSphere,e.accurateCulling)),this.bvh.clear(),this.bvh.create()}disposeBVH(){this.bvh=null}setMatrixAt(e,t){if(t.toArray(this.matricesTexture._data,e*16),this.instances){let n=this.instances[e];t.decompose(n.position,n.quaternion,n.scale)}this.matricesTexture.enqueueUpdate(e),this.bvh&&this.autoUpdateBVH&&this.bvh.move(e)}getMatrixAt(e,t=Fb){return t.fromArray(this.matricesTexture._data,e*16)}getPositionAt(e,t=Ob){let n=e*16,s=this.matricesTexture._data;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],t}getPositionAndMaxScaleOnAxisAt(e,t){let n=e*16,s=this.matricesTexture._data,r=s[n+0],o=s[n+1],a=s[n+2],c=r*r+o*o+a*a,l=s[n+4],h=s[n+5],u=s[n+6],d=l*l+h*h+u*u,f=s[n+8],g=s[n+9],_=s[n+10],p=f*f+g*g+_*_;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],Math.sqrt(Math.max(c,d,p))}applyMatrixAtToSphere(e,t,n,s){let r=e*16,o=this.matricesTexture._data,a=o[r+0],c=o[r+1],l=o[r+2],h=o[r+3],u=o[r+4],d=o[r+5],f=o[r+6],g=o[r+7],_=o[r+8],p=o[r+9],m=o[r+10],M=o[r+11],A=o[r+12],x=o[r+13],w=o[r+14],S=o[r+15],C=t.center,y=n.x,T=n.y,P=n.z,I=1/(h*y+g*T+M*P+S);C.x=(a*y+u*T+_*P+A)*I,C.y=(c*y+d*T+p*P+x)*I,C.z=(l*y+f*T+m*P+w)*I;let L=a*a+c*c+l*l,k=u*u+d*d+f*f,G=_*_+p*p+m*m;t.radius=s*Math.sqrt(Math.max(L,k,G))}setVisibilityAt(e,t){this.availabilityArray[e*2]=t,this._indexArrayNeedsUpdate=!0}getVisibilityAt(e){return this.availabilityArray[e*2]}setActiveAt(e,t){this.availabilityArray[e*2+1]=t,this._indexArrayNeedsUpdate=!0}getActiveAt(e){return this.availabilityArray[e*2+1]}getActiveAndVisibilityAt(e){let t=e*2,n=this.availabilityArray;return n[t]&&n[t+1]}setActiveAndVisibilityAt(e,t){let n=e*2,s=this.availabilityArray;s[n]=t,s[n+1]=t,this._indexArrayNeedsUpdate=!0}setColorAt(e,t){this.colorsTexture===null&&this.initColorsTexture(),t.isColor?t.toArray(this.colorsTexture._data,e*4):Wm.set(t).toArray(this.colorsTexture._data,e*4),this.colorsTexture.enqueueUpdate(e)}getColorAt(e,t=Wm){return t.fromArray(this.colorsTexture._data,e*4)}setOpacityAt(e,t){this._useOpacity||(this.colorsTexture===null?this.initColorsTexture():this.materialsNeedsUpdate(),this._useOpacity=!0),this.colorsTexture._data[e*4+3]=t,this.colorsTexture.enqueueUpdate(e)}getOpacityAt(e){return this._useOpacity?this.colorsTexture._data[e*4+3]:1}copyTo(e,t){this.getMatrixAt(e,t.matrix).decompose(t.position,t.quaternion,t.scale)}computeBoundingBox(){let e=this._geometry,t=this._instancesArrayCount;this.boundingBox??=new Vt,e.boundingBox===null&&e.computeBoundingBox();let n=e.boundingBox,s=this.boundingBox;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(Gm.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(Gm))}computeBoundingSphere(){let e=this._geometry,t=this._instancesArrayCount;this.boundingSphere??=new en,e.boundingSphere===null&&e.computeBoundingSphere();let n=e.boundingSphere,s=this.boundingSphere;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(Hm.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(Hm))}clone(e){let t={capacity:this._capacity,renderer:this._renderer,allowsEuler:this._allowsEuler,createEntities:this._createEntities};return new this.constructor(this.geometry,this.material,t).copy(this,e)}copy(e,t){return super.copy(e,t),this.count=e._capacity,this._instancesCount=e._instancesCount,this._instancesArrayCount=e._instancesArrayCount,this._capacity=e._capacity,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this.matricesTexture=e.matricesTexture.clone(),this.matricesTexture.image.data=this.matricesTexture.image.data.slice(),e.colorsTexture!==null&&(this.colorsTexture=e.colorsTexture.clone(),this.colorsTexture.image.data=this.colorsTexture.image.data.slice()),e.uniformsTexture!==null&&(this.uniformsTexture=e.uniformsTexture.clone(),this.uniformsTexture.image.data=this.uniformsTexture.image.data.slice()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone(),this.morphTexture.image.data=this.morphTexture.image.data.slice()),e.boneTexture!==null&&(this.boneTexture=e.boneTexture.clone(),this.boneTexture.image.data=this.boneTexture.image.data.slice()),this}dispose(){this.dispatchEvent({type:"dispose"}),this.matricesTexture.dispose(),this.colorsTexture?.dispose(),this.morphTexture?.dispose(),this.boneTexture?.dispose(),this.uniformsTexture?.dispose()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMatrixInverse&&(this.bindMode===Rr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("Unrecognized bindMode: "+this.bindMode))}},Ub=1e3,Gm=new Vt,Hm=new en,Fb=new Re,Wm=new Ie,Ob=new R;Fe.prototype.resizeBuffers=function(i){let e=this._capacity;this._capacity=i;let t=Math.min(i,e);if(this.instanceIndex){let n=new Uint32Array(i);n.set(new Uint32Array(this.instanceIndex.array.buffer,0,t)),this.instanceIndex.array=n}if(this.LODinfo){for(let n of this.LODinfo.objects)if(n._capacity=i,n.instanceIndex){let s=new Uint32Array(i);s.set(new Uint32Array(n.instanceIndex.array.buffer,0,t)),n.instanceIndex.array=s}}if(this.availabilityArray.length=i*2,this.matricesTexture.resize(i),this.colorsTexture&&(this.colorsTexture.resize(i),i>e&&this.colorsTexture._data.fill(1,e*4)),this.morphTexture){let n=this.morphTexture.image.data,s=n.length/e;this.morphTexture.dispose(),this.morphTexture=new vi(new Float32Array(s*i),s,i,bs,hn),this.morphTexture.image.data.set(n)}return this.uniformsTexture?.resize(i),this};Fe.prototype.setInstancesArrayCount=function(i){if(i<this._instancesArrayCount){let t=this.bvh;if(t)for(let n=this._instancesArrayCount-1;n>=i;n--)this.getActiveAt(n)&&t.delete(n);this._instancesArrayCount=i;return}if(i>this._capacity){let t=this._capacity+(this._capacity>>1)+512;for(;t<i;)t+=(t>>1)+512;this.resizeBuffers(t)}let e=this._instancesArrayCount;this._instancesArrayCount=i,this._createEntities&&this.createEntities(e)};function $m(i,e){return i.depth-e.depth}function Jm(i,e){return e.depth-i.depth}var ld=class{constructor(){this.array=[],this.pool=[]}push(e,t){let n=this.pool,s=this.array,r=s.length;r>=n.length&&n.push({depth:null,index:null,depthSort:null});let o=n[r];o.depth=e,o.index=t,s.push(o)}reset(){this.array.length=0}},Zl=new ms,oi=new ld,js=new Re,so=new Re,jl=new R,Aa=new R,ro=new R,Bb=new R,ri=new en;Fe.prototype.performFrustumCulling=function(i,e=i){let t=this._parentLOD??this,n=t.LODinfo,s;if(n){s=i!==e?n.shadowRender??n.render:n.render;for(let r of n.objects)r.count=0}else(t._perObjectFrustumCulled||t._sortObjects)&&(t.count=0);t._instancesArrayCount!==0&&(s?.levels.length>0?t.frustumCullingLOD(s,i,e):t.frustumCulling(i))};Fe.prototype.updateLastRenderInfo=function(i,e,t){let n=this._lastRenderInfo;n.frame=i,n.camera=e,n.shadowCamera=t};Fe.prototype.frustumCullingAlreadyPerformed=function(i,e,t){let n=this._lastRenderInfo;return n.frame===i&&n.camera===e&&n.shadowCamera===t?!0:(this.updateLastRenderInfo(i,e,t),!1)};Fe.prototype.frustumCulling=function(i){let e=this._sortObjects,t=this._perObjectFrustumCulled,n=this.instanceIndex.array;if(this.instanceIndex._needsUpdate=!0,!t&&!e){this.updateIndexArray();return}if(e&&(so.copy(this.matrixWorld).invert(),Aa.setFromMatrixPosition(i.matrixWorld).applyMatrix4(so),jl.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(so)),t?(js.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),this.bvh?this.BVHCulling(i):this.linearCulling(i)):this.updateRenderList(),e){let s=this.customSort;s===null?oi.array.sort(this.material?.transparent?Jm:$m):s(oi.array);let r=oi.array,o=r.length;for(let a=0;a<o;a++)n[a]=r[a].index;this.count=o,oi.reset()}};Fe.prototype.updateIndexArray=function(){if(!this._indexArrayNeedsUpdate)return;let i=this.instanceIndex.array,e=this._instancesArrayCount,t=0;for(let n=0;n<e;n++)this.getActiveAndVisibilityAt(n)&&(i[t++]=n);this.count=t,this._indexArrayNeedsUpdate=!1};Fe.prototype.updateRenderList=function(){let i=this._instancesArrayCount;for(let e=0;e<i;e++)if(this.getActiveAndVisibilityAt(e)){let t=this.getPositionAt(e).sub(Aa).dot(jl);oi.push(t,e)}};Fe.prototype.BVHCulling=function(i){let e=this.instanceIndex.array,t=this._instancesArrayCount,n=this._sortObjects,s=this.onFrustumEnter,r=0;this.bvh.frustumCulling(js,o=>{let a=o.object;if(a<t&&this.getVisibilityAt(a)&&(!s||s(a,i)))if(n){let c=this.getPositionAt(a).sub(Aa).dot(jl);oi.push(c,a)}else e[r++]=a}),this.count=r};Fe.prototype.linearCulling=function(i){let e=this.instanceIndex.array;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let t=this._geometry.boundingSphere,n=t.radius,s=t.center,r=this._instancesArrayCount,o=s.x===0&&s.y===0&&s.z===0,a=this._sortObjects,c=this.onFrustumEnter,l=0;Zl.setFromProjectionMatrix(js);for(let h=0;h<r;h++)if(this.getActiveAndVisibilityAt(h)){if(o){let u=this.getPositionAndMaxScaleOnAxisAt(h,ri.center);ri.radius=n*u}else this.applyMatrixAtToSphere(h,ri,s,n);if(Zl.intersectsSphere(ri)&&(!c||c(h,i)))if(a){let u=Bb.subVectors(ri.center,Aa).dot(jl);oi.push(u,h)}else e[l++]=h}this.count=l};Fe.prototype.frustumCullingLOD=function(i,e,t){let{count:n,levels:s}=i;for(let a=0;a<s.length;a++){if(!s[a].object.instanceIndex)return;n[a]=0,s[a].object.instanceIndex._needsUpdate=!0}let r=e===t&&this._sortObjects;js.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),so.copy(this.matrixWorld).invert(),Aa.setFromMatrixPosition(e.matrixWorld).applyMatrix4(so),ro.setFromMatrixPosition(t.matrixWorld).applyMatrix4(so);let o=i.levels.map(a=>a.object.instanceIndex.array);if(this.bvh?this.BVHCullingLOD(i,o,r,e,t):this.linearCullingLOD(i,o,r,e,t),r){let a=this.customSort,c=oi.array,l=0,h=s[1].distance;a===null?c.sort(s[0].object.material?.transparent?Jm:$m):a(c);for(let u=0,d=c.length;u<d;u++){let f=c[u];f.depth>h&&(l++,h=s[l+1]?.distance??1/0),o[l][n[l]++]=f.index}oi.reset()}for(let a=0;a<s.length;a++){let c=s[a].object;c.count=n[a]}};Fe.prototype.BVHCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i,a=this._instancesArrayCount,c=this.onFrustumEnter;t?this.bvh.frustumCulling(js,l=>{let h=l.object;if(h<a&&this.getVisibilityAt(h)&&(!c||c(h,n,s))){let u=this.getPositionAt(h).distanceToSquared(ro);oi.push(u,h)}}):this.bvh.frustumCullingLOD(js,ro,o,(l,h)=>{let u=l.object;if(u<a&&this.getVisibilityAt(u)){if(h===null){let d=this.getPositionAt(u).distanceToSquared(ro);h=this.getObjectLODIndexForDistance(o,d)}(!c||c(u,n,s,h))&&(e[h][r[h]++]=u)}})};Fe.prototype.linearCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let a=this._geometry.boundingSphere,c=a.radius,l=a.center,h=this._instancesArrayCount,u=l.x===0&&l.y===0&&l.z===0,d=this.onFrustumEnter;Zl.setFromProjectionMatrix(js);for(let f=0;f<h;f++)if(this.getActiveAndVisibilityAt(f)){if(u){let g=this.getPositionAndMaxScaleOnAxisAt(f,ri.center);ri.radius=c*g}else this.applyMatrixAtToSphere(f,ri,l,c);if(Zl.intersectsSphere(ri))if(t){if(!d||d(f,n,s)){let g=ri.center.distanceToSquared(ro);oi.push(g,f)}}else{let g=ri.center.distanceToSquared(ro),_=this.getObjectLODIndexForDistance(o,g);(!d||d(f,n,s,_))&&(e[_][r[_]++]=f)}}};Fe.prototype.clearTempInstance=function(i){let e=this._tempInstance;return e.id=i,this.clearInstance(e)};Fe.prototype.clearTempInstancePosition=function(i){let e=this._tempInstance;return e.id=i,e.position.set(0,0,0),e};Fe.prototype.clearInstance=function(i){return i.position.set(0,0,0),i.scale.set(1,1,1),i.quaternion.identity(),i};Fe.prototype.updateInstances=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstance(n);i(s,n),s.updateMatrix()}return this};Fe.prototype.updateInstancesPosition=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstancePosition(n);i(s,n),s.updateMatrixPosition()}return this};Fe.prototype.createEntities=function(i){let e=this._instancesArrayCount;if(!this.instances)this.instances=new Array(e);else if(this.instances.length<e)this.instances.length=e;else return this;let t=this.instances;for(let n=i;n<e;n++)t[n]||(t[n]=new Yl(this,n,this._allowsEuler));return this};Fe.prototype.addInstances=function(i,e){!e&&this.bvh&&console.warn("InstancedMesh2: if `computeBVH()` has already been called, it is better to valorize the instances in the `onCreation` callback for better performance.");let t=this._freeIds;if(t.length>0){let r=-1,o=Math.min(t.length,i),a=t.length-o;for(let c=t.length-1;c>=a;c--){let l=t[c];l>r&&(r=l),this.addInstance(l,e)}t.length-=o,i-=o,this._instancesArrayCount=Math.max(r+1,this._instancesArrayCount)}let n=this._instancesArrayCount,s=n+i;this.setInstancesArrayCount(s);for(let r=n;r<s;r++)this.addInstance(r,e);return this};Fe.prototype.addInstance=function(i,e){this._instancesCount++,this.setActiveAndVisibilityAt(i,!0);let t=this.instances?this.clearInstance(this.instances[i]):this.clearTempInstance(i);e?(e(t,i),t.updateMatrix()):t.setMatrixIdentity(),this.bvh?.insert(i)};Fe.prototype.removeInstances=function(...i){let e=this._freeIds,t=this.bvh;for(let n of i)n<this._instancesArrayCount&&this.getActiveAt(n)&&(this.setActiveAt(n,!1),e.push(n),t?.delete(n),this._instancesCount--);for(let n=this._instancesArrayCount-1;n>=0&&!this.getActiveAt(n);n--)this._instancesArrayCount--;return this};Fe.prototype.clearInstances=function(){if(this._instancesCount=0,this._instancesArrayCount=0,this._freeIds.length=0,this.bvh?.clear(),this.LODinfo)for(let i of this.LODinfo.objects)i.count=0;return this};Fe.prototype.getObjectLODIndexForDistance=function(i,e){for(let t=i.length-1;t>0;t--){let n=i[t],s=n.distance-n.distance*n.hysteresis;if(e>=s)return t}return 0};Fe.prototype.setFirstLODDistance=function(i){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");return this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.render||(this.LODinfo.render={levels:[{distance:i,hysteresis:0,object:this}],count:[0]}),this};Fe.prototype.addLOD=function(i,e,t=0,n=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");if(!this.LODinfo?.render&&t===0)throw new Error('Cannot set distance to 0 for the first LOD. Call "setFirstLODDistance" method before use "addLOD".');return this.setFirstLODDistance(0),this.addLevel(this.LODinfo.render,i,e,t,n),this};Fe.prototype.addShadowLOD=function(i,e=0,t=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.shadowRender||(this.LODinfo.shadowRender={levels:[],count:[]});let n=this.addLevel(this.LODinfo.shadowRender,i,null,e,t);return n.castShadow=!0,this.castShadow=!0,this};Fe.prototype.addLevel=function(i,e,t,n,s){let r=this.LODinfo.objects,o=i.levels,a,c;n=n**2;let l=r.findIndex(h=>h.geometry===e);if(l===-1){let h={capacity:this._capacity,renderer:this._renderer};c=new Fe(e,t??new Sn,h,this),c.frustumCulled=!1,this.patchLevel(c),r.push(c),this.add(c)}else c=r[l],t&&(c.material=t);for(a=0;a<o.length&&!(n<o[a].distance);a++);return o.splice(a,0,{distance:n,hysteresis:s,object:c}),i.count.push(0),c};Fe.prototype.updateLevel=function(i,e,t,n){if(!i)throw new Error("Render list is invalid.");let s=i.levels[e];if(!s)throw new Error("Cannot update an empty LOD.");if(t!=null&&!Number.isNaN(t)){let r=t**2;s.distance=r}return n!=null&&!Number.isNaN(n)&&(s.hysteresis=n),this};Fe.prototype.updateLOD=function(i,e,t){let n=this?.LODinfo?.render;if(i===0)throw new Error("Cannot change distance for LOD0. It is the main mesh and must stay at 0.");return this.updateLevel(n,i,e,t)};Fe.prototype.updateShadowLOD=function(i,e,t){return this.updateLevel(this.LODinfo?.shadowRender,i,e,t)};Fe.prototype.updateAllLevels=function(i,e,t){if(!i?.levels)throw new Error("Invalid LOD list.");let n=i.levels,s=this.LODinfo?.render===i,r=s?1:0;s&&(n[0].distance=0);let o=e?.length>0,a=[];o&&(a=s&&e[0]===0?e.slice(1,Math.min(n.length,e.length)):e.slice(0,Math.min(n.length-r,e.length)),a.every((l,h)=>{if(h>0&&l<=a[h-1])throw new Error(`LOD distances must be strictly increasing: d[${h-1}]=${a[h-1]} < d[${h}]=${l}`);return!0}));let c=o?a.length:n.length-r;for(let l=0;l<c;l++){let h=o?a[l]:void 0,u=Array.isArray(t)?t[l]:t;this.updateLevel(i,r+l,h,u)}return this};Fe.prototype.updateAllLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.render,i,e)};Fe.prototype.updateAllShadowLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.shadowRender,i,e)};Fe.prototype.disposeLOD=function(i){i.geometry.dispose();let e=i.material;if(Array.isArray(e))for(let t of e)t.dispose();else e.dispose()};Fe.prototype.removeLOD=function(i,e=!0){let t=this.LODinfo,n=t?.render;if(!n?.levels)throw new Error("Invalid LOD list.");let s=n.levels.length;if(i<0||i>=s)throw new Error("Level index OOB");if(s>1&&i===0)throw new Error("Cannot remove LOD0 while others exist");let[r]=n.levels.splice(i,1);n.count?.splice?.(i,1),n.levels.length<=1&&(t.render=null);let o=r.object,a=this.LODinfo?.shadowRender;if(a?.levels&&i<a.levels.length&&(a.levels.splice(i,1),a.count?.splice?.(i,1),a.levels.length===0&&(this.LODinfo.shadowRender=null)),e&&o!==this)try{this.remove(o);let c=t.objects?.indexOf(o)??-1;c!==-1&&t.objects.splice(c,1),this.disposeLOD(o)}catch(c){console.error(c)}return this};Fe.prototype.patchLevel=function(i){Object.defineProperty(i,"renderOrder",{get(){return this._parentLOD.renderOrder}}),Object.defineProperty(i,"_lastRenderInfo",{get(){return this._parentLOD._lastRenderInfo}}),Object.defineProperty(i,"matricesTexture",{get(){return this._parentLOD.matricesTexture}}),Object.defineProperty(i,"colorsTexture",{get(){return this._parentLOD.colorsTexture}}),Object.defineProperty(i,"uniformsTexture",{get(){return this._parentLOD.uniformsTexture}}),Object.defineProperty(i,"morphTexture",{get(){return this._parentLOD.morphTexture}}),Object.defineProperty(i,"boneTexture",{get(){return this._parentLOD.boneTexture}}),Object.defineProperty(i,"skeleton",{get(){return this._parentLOD.skeleton}}),Object.defineProperty(i,"bindMatrixInverse",{get(){return this._parentLOD.bindMatrixInverse}}),Object.defineProperty(i,"bindMatrix",{get(){return this._parentLOD.bindMatrix}})};var zb=new ze;Fe.prototype.getMorphAt=function(i,e=zb){let t=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=t.length+1,r=i*s+1;for(let o=0;o<t.length;o++)t[o]=n[r+o];return e};Fe.prototype.setMorphAt=function(i,e){let t=e.morphTargetInfluences,n=t.length+1;this.morphTexture===null&&!this._parentLOD&&(this.morphTexture=new vi(new Float32Array(n*this._capacity),n,this._capacity,bs,hn));let s=this.morphTexture.source.data.data,r=0;for(let c of t)r+=c;let o=this._geometry.morphTargetsRelative?1:1-r,a=n*i;s[a]=o,s.set(t,a+1),this.morphTexture.needsUpdate=!0};var od=[],$l=new ze,kb=new yi,Xm=new R,qm=new R,Ym=new Re,Km=new en;Fe.prototype.raycast=function(i,e){if(this._parentLOD||!this.material||this._instancesArrayCount===0||!this.instanceIndex)return;$l.geometry=this._geometry,$l.material=this.material;let t=i.ray,n=i.near,s=i.far;Ym.copy(this.matrixWorld).invert(),qm.setFromMatrixScale(this.matrixWorld),Xm.copy(i.ray.direction).multiply(qm);let r=Xm.length();i.ray=kb.copy(i.ray).applyMatrix4(Ym),i.near/=r,i.far/=r,this.raycastInstances(i,e),i.ray=t,i.near=n,i.far=s};Fe.prototype.raycastInstances=function(i,e){if(this.bvh)this.bvh.raycast(i,t=>this.checkObjectIntersection(i,t,e));else{if(this.boundingSphere===null&&this.computeBoundingSphere(),Km.copy(this.boundingSphere),!i.ray.intersectsSphere(Km))return;let t=this.instanceIndex.array,n=this.raycastOnlyFrustum&&this._perObjectFrustumCulled?this.count:this._instancesArrayCount;for(let s=0;s<n;s++)this.checkObjectIntersection(i,t[s],e)}};Fe.prototype.checkObjectIntersection=function(i,e,t){if(!(e>this._instancesArrayCount||!this.getActiveAndVisibilityAt(e))){this.getMatrixAt(e,$l.matrixWorld),$l.raycast(i,od);for(let n of od)n.instanceId=e,n.object=this,t.push(n);od.length=0}};Fe.prototype.initSkeleton=function(i,e=!0){if(i&&this.skeleton!==i&&!this._parentLOD){let t=i.bones;if(this.skeleton=i,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boneTexture=new oo(Float32Array,4,4*t.length,this._capacity),e)for(let n of t)n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1;this.materialsNeedsUpdate()}};Fe.prototype.setBonesAt=function(i,e=!0,t){let n=this.skeleton;if(!n)throw new Error('"setBonesAt" cannot be called before "initSkeleton"');let s=n.bones,r=n.boneInverses;for(let o=0,a=s.length;o<a;o++){let c=s[o];e&&(t?.has(c.name)||c.updateMatrix(),c.matrixWorld.multiplyMatrices(c.parent.matrixWorld,c.matrix)),this.multiplyBoneMatricesAt(i,o,c.matrixWorld,r[o])}this.boneTexture.enqueueUpdate(i)};Fe.prototype.multiplyBoneMatricesAt=function(i,e,t,n){let s=(i*this.skeleton.bones.length+e)*16,r=t.elements,o=n.elements,a=this.boneTexture._data,c=r[0],l=r[4],h=r[8],u=r[12],d=r[1],f=r[5],g=r[9],_=r[13],p=r[2],m=r[6],M=r[10],A=r[14],x=r[3],w=r[7],S=r[11],C=r[15],y=o[0],T=o[4],P=o[8],I=o[12],L=o[1],k=o[5],G=o[9],B=o[13],D=o[2],V=o[6],Y=o[10],ne=o[14],re=o[3],ce=o[7],me=o[11],Ye=o[15];a[s+0]=c*y+l*L+h*D+u*re,a[s+4]=c*T+l*k+h*V+u*ce,a[s+8]=c*P+l*G+h*Y+u*me,a[s+12]=c*I+l*B+h*ne+u*Ye,a[s+1]=d*y+f*L+g*D+_*re,a[s+5]=d*T+f*k+g*V+_*ce,a[s+9]=d*P+f*G+g*Y+_*me,a[s+13]=d*I+f*B+g*ne+_*Ye,a[s+2]=p*y+m*L+M*D+A*re,a[s+6]=p*T+m*k+M*V+A*ce,a[s+10]=p*P+m*G+M*Y+A*me,a[s+14]=p*I+m*B+M*ne+A*Ye,a[s+3]=x*y+w*L+S*D+C*re,a[s+7]=x*T+w*k+S*V+C*ce,a[s+11]=x*P+w*G+S*Y+C*me,a[s+15]=x*I+w*B+S*ne+C*Ye};Fe.prototype.getUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);return this.uniformsTexture.getUniformAt(i,e,t)};Fe.prototype.setUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);this.uniformsTexture.setUniformAt(i,e,t),this.uniformsTexture.enqueueUpdate(i)};Fe.prototype.initUniformsPerInstance=function(i){if(!this._parentLOD){let{channels:e,pixelsPerInstance:t,uniformMap:n,fetchInFragmentShader:s}=this.getUniformSchemaResult(i);this.uniformsTexture=new oo(Float32Array,e,t,this._capacity,n,s),this.materialsNeedsUpdate()}};Fe.prototype.getUniformSchemaResult=function(i){let e=0,t=new Map,n=[],s=i.vertex??{},r=i.fragment??{},o=!0;for(let l in s){let h=s[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u}),o=!1}for(let l in r)if(!s[l]){let h=r[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u})}n.sort((l,h)=>h.size-l.size);let a=[];for(let{name:l,size:h,type:u}of n){let d=this.getUniformOffset(h,a);t.set(l,{offset:d,size:h,type:u})}let c=Math.ceil(e/4);return{channels:Math.min(e,4),pixelsPerInstance:c,uniformMap:t,fetchInFragmentShader:o}};Fe.prototype.getUniformOffset=function(i,e){if(i<4){for(let n=0;n<e.length;n++)if(e[n]+i<=4){let s=n*4+e[n];return e[n]+=i,s}}let t=e.length*4;for(;i>0;i-=4)e.push(i);return t};Fe.prototype.getUniformSize=function(i){switch(i){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;case"mat3":return 9;case"mat4":return 16;default:throw new Error(`Invalid uniform type: ${i}`)}};var Vb=`#ifdef USE_INSTANCING_INDIRECT\r
  attribute uint instanceIndex;\r
  uniform highp sampler2D matricesTexture;  

  mat4 getInstancedMatrix() {\r
    int size = textureSize( matricesTexture, 0 ).x;\r
    int j = int( instanceIndex ) * 4;\r
    int x = j % size;\r
    int y = j / size;\r
    vec4 v1 = texelFetch( matricesTexture, ivec2( x, y ), 0 );\r
    vec4 v2 = texelFetch( matricesTexture, ivec2( x + 1, y ), 0 );\r
    vec4 v3 = texelFetch( matricesTexture, ivec2( x + 2, y ), 0 );\r
    vec4 v4 = texelFetch( matricesTexture, ivec2( x + 3, y ), 0 );\r
    return mat4( v1, v2, v3, v4 );\r
  }\r
#endif`,Gb=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  uniform highp sampler2D colorsTexture;

  vec4 getColorTexture() {\r
    int size = textureSize( colorsTexture, 0 ).x;\r
    int j = int( instanceIndex );\r
    int x = j % size;\r
    int y = j / size;\r
    return texelFetch( colorsTexture, ivec2( x, y ), 0 );\r
  }\r
#endif`,Hb=`#ifdef USE_INSTANCING_INDIRECT\r
  mat4 instanceMatrix = getInstancedMatrix();

  #ifdef USE_INSTANCING_COLOR_INDIRECT\r
    vColor *= getColorTexture();\r
  #endif\r
#endif`,Wb=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  #ifdef USE_VERTEX_COLOR\r
    vColor = vec4( color );\r
  #else\r
    vColor = vec4( 1.0 );\r
  #endif\r
#endif`,Xb=`#ifdef USE_SKINNING\r
  uniform mat4 bindMatrix;\r
  uniform mat4 bindMatrixInverse;\r
  uniform highp sampler2D boneTexture;

  #ifdef USE_INSTANCING_SKINNING\r
    uniform int bonesPerInstance;\r
  #endif

  mat4 getBoneMatrix( const in float i ) {\r
    int size = textureSize( boneTexture, 0 ).x;

    #ifdef USE_INSTANCING_SKINNING\r
      int j = ( bonesPerInstance * int( instanceIndex ) + int( i ) ) * 4;\r
    #else\r
      int j = int( i ) * 4;\r
    #endif

    int x = j % size;\r
    int y = j / size;\r
    vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\r
    vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\r
    vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\r
    vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\r
    return mat4( v1, v2, v3, v4 );\r
  }\r
#endif`;Pe.instanced_pars_vertex=Vb;Pe.instanced_color_pars_vertex=Gb;Pe.instanced_vertex=Hb;Pe.instanced_color_vertex=Wb;function hd(i){return i.replace("#ifdef USE_INSTANCING","#if defined USE_INSTANCING || defined USE_INSTANCING_INDIRECT")}Pe.project_vertex=hd(Pe.project_vertex);Pe.worldpos_vertex=hd(Pe.worldpos_vertex);Pe.defaultnormal_vertex=hd(Pe.defaultnormal_vertex);Pe.batching_pars_vertex=Pe.batching_pars_vertex.concat(`
#include <instanced_pars_vertex>`);Pe.color_pars_vertex=Pe.color_pars_vertex.concat(`
#include <instanced_color_pars_vertex>`);Pe.batching_vertex=Pe.batching_vertex.concat(`
#include <instanced_vertex>`);Pe.skinning_pars_vertex=Xb;Pe.morphinstance_vertex&&(Pe.morphinstance_vertex=Pe.morphinstance_vertex.replaceAll("gl_InstanceID","instanceIndex"));function Un(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function jm(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Qm(i){let e=new Map,t=new Map,n=i.clone();return eg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function eg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)eg(i.children[n],e.children[n],t)}var As=class extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new Ql(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ql(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Id(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Qi.extractUrlBase(e);o=Qi.resolveURL(l,this.path)}else o=Qi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===rg){try{o[it.KHR_BINARY_GLTF]=new Pd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Bd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new md;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new Ld(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new Nd;break;case it.KHR_MESH_QUANTIZATION:o[u]=new Dd;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function qb(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Yt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},pd=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new kn(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ia(h),l.distance=u;break;case"spot":l=new na(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},md=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Rt))}return Promise.all(s)}},gd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new We(r,r)}return Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},yd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},vd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},wd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yt(this.parser,e,this.name)!==null?Rn:null}extendMaterialParams(e,t){let n=Yt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Cd=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Rd=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Ql=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Id=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Re,p=new R,m=new ot,M=new R(1,1,1),A=new Wo(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),A.setMatrixAt(x,_.compose(p,m,M));for(let x in c)if(x==="_COLOR_0"){let w=c[x];A.instanceColor=new Mi(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ut.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},rg="glTF",Ta=12,tg={JSON:1313821514,BIN:5130562},Pd=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ta),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ta,r=new DataView(e,Ta),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===tg.JSON){let l=new Uint8Array(e,Ta+o,a);this.content=n.decode(l)}else if(c===tg.BIN){let l=Ta+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ld=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Fd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Fd[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=ao[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},a,l,Mn,d)})})}},Nd=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Dd=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},eh=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,M=1-p,A=m-d+u;for(let x=0;x!==a;x++){let w=o[_+x+a],S=o[_+x+c]*h,C=o[g+x+a],y=o[g+x]*h;r[x]=M*w+A*S+p*C+m*y}return r}},Yb=new ot,Ud=class extends eh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Yb.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ng={9728:Wt,9729:Xt,9984:el,9985:Wr,9986:Ks,9987:si},ig={33071:Bn,33648:Ir,10497:Qn},ud={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kb={CUBICSPLINE:void 0,LINEAR:Gs,STEP:Vs},dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Zb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function Qs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function $b(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Jb(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jb(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+fd(t.attributes):e=i.indices+":"+fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+fd(i.targets[n]);return e}function fd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Od(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Qb(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var eS=new Re,Bd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new qb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Qo(this.options.manager):this.textureLoader=new sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Qs(r,a,s),Pi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Qi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=ud[s.type],a=ao[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Ht(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=ud[s.type],l=ao[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(f&&f!==u){let m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,A=t.cache.get(M);A||(_=new l(a,m*f,s.count*f/h),A=new Or(_,f/h),t.cache.add(M,A)),p=new Br(A,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Ht(_,c,g);if(s.sparse!==void 0){let m=ud.SCALAR,M=ao[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,w=new M(o[1],A,s.sparse.count*m),S=new l(o[2],x,s.sparse.count*c);a!==null&&(p=new Ht(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let C=0,y=w.length;C<y;C++){let T=w[C];if(p.setX(T,S[C*c]),c>=2&&p.setY(T,S[C*c+1]),c>=3&&p.setZ(T,S[C*c+2]),c>=4&&p.setW(T,S[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ng[d.magFilter]||Xt,h.minFilter=ng[d.minFilter]||si,h.wrapS=ig[d.wrapS]||Qn,h.wrapT=ig[d.wrapT]||Qn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Wt&&h.minFilter!==Xt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let p=new Qt(_);p.needsUpdate=!0,d(p)}),t.load(Qi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Pi(u,o),u.userData.mimeType=o.mimeType||Qb(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new bi,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new kr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Rt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);let h=r.alphaMode||dd.OPAQUE;if(h===dd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===dd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new We(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qt){let u=r.emissiveFactor;a.emissive=new Ie().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Rt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Pi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Qs(s,u,r),u})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return sg(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=jb(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=sg(new Et,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Zb(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],p=o[f],m,M=l[f];if(p.mode===Hn.TRIANGLES||p.mode===Hn.TRIANGLE_STRIP||p.mode===Hn.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new Go(_,M):new ze(_,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Hn.TRIANGLE_STRIP?m.geometry=ed(m.geometry,ya):p.mode===Hn.TRIANGLE_FAN&&(m.geometry=ed(m.geometry,Jr));else if(p.mode===Hn.LINES)m=new Xo(_,M);else if(p.mode===Hn.LINE_STRIP)m=new Ws(_,M);else if(p.mode===Hn.LINE_LOOP)m=new qo(_,M);else if(p.mode===Hn.POINTS)m=new qi(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&Jb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Pi(m,r),p.extensions&&Qs(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Qs(s,u[0],r),u[0];let d=new ft;r.extensions&&Qs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(kt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ys(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Re;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ho(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let A=0,x=d.length;A<x;A++){let w=d[A],S=f[A],C=g[A],y=_[A],T=p[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let P=n._createAnimationTracks(w,S,C,y,T);if(P)for(let I=0;I<P.length;I++)m.push(P[I])}let M=new Xs(r,void 0,m);return Pi(M,s),M})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,eS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new zr:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Ut,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Pi(h,r),r.extensions&&Qs(n,h,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Pi(r,n),n.extensions&&Qs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Qm(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof bn||d instanceof Qt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ws[r.path]===ws.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(ws[r.path]){case ws.weights:h=$i;break;case ws.rotation:h=Ji;break;case ws.translation:case ws.scale:h=xs;break;default:n.itemSize===1?h=$i:h=xs;break}let u=s.interpolation!==void 0?Kb[s.interpolation]:Gs,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new h(c[f]+"."+ws[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Od(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ji?Ud:eh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function tS(i,e,t){let n=e.attributes,s=new Vt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),a.normalized){let h=Od(ao[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=Od(ao[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new en;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function sg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Fd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return je.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),Pi(i,e),tS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?$b(i,e.targets,t):i})}var nS=new As,iS=new Set(["wheel-back"]);function sS(i){let e=i.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(e,0,0);let s=n.getImageData(0,0,t.width,t.height).data,r=i.flipY===!0;return(o,a)=>{let c=r?1-a:a,l=Math.min(t.width-1,Math.max(0,Math.round(o*t.width-.5))),u=(Math.min(t.height-1,Math.max(0,Math.round(c*t.height-.5)))*t.width+l)*4;return[s[u],s[u+1],s[u+2]]}}function rS(i){let e=[],t=null,n=[];return i.updateMatrixWorld(!0),i.traverse(s=>{if(!s.isMesh||iS.has(s.name))return;let r=s.geometry.clone();if(r.applyMatrix4(new Re().copy(s.matrixWorld)),r.index){let a=r.toNonIndexed();r.dispose(),e.push(a)}else e.push(r);n.push(!/wheel/i.test(s.name||""));let o=Array.isArray(s.material)?s.material[0]:s.material;o&&o.map&&!t&&(t=o.map)}),{geos:e,texture:t,bodyRanges:n}}function cg(i,e){let t=i.attributes.position,n=i.attributes.uv,s=t.count/3,r=new Array(s),o=new Float64Array(s),a=new R,c=new R,l=new R;for(let h=0;h<s;h++){let u=h*3,d=(n.getX(u)+n.getX(u+1)+n.getX(u+2))/3,f=(n.getY(u)+n.getY(u+1)+n.getY(u+2))/3;r[h]=e(d,f),a.fromBufferAttribute(t,u),c.fromBufferAttribute(t,u+1),l.fromBufferAttribute(t,u+2),c.sub(a),l.sub(a),o[h]=c.cross(l).length()*.5}return{colors:r,areas:o}}function oS(i){return(i[0]>>3)*1024+(i[1]>>3)*32+(i[2]>>3)}function lg(i,e){let{colors:t,areas:n}=cg(i,e),s=new Map,r=new Map;for(let o=0;o<t.length;o++){let a=oS(t[o]);s.set(a,(s.get(a)||0)+n[o]),r.has(a)||r.set(a,t[o])}return[...s.entries()].map(([o,a])=>({color:r.get(o),area:a})).sort((o,a)=>a.area-o.area)}function hg(i,e,t){return Math.abs(i[0]-e[0])<=t&&Math.abs(i[1]-e[1])<=t&&Math.abs(i[2]-e[2])<=t}function og(i){let e=Math.max(i[0],i[1],i[2]),t=Math.min(i[0],i[1],i[2]);return e===0?0:(e-t)/e}function aS(i,e){let t=lg(i,e),n=[];for(let c of t){let l=n.find(h=>hg(h.rep,c.color,34));l?(l.area+=c.area,l.members.push(c.color)):n.push({rep:c.color,area:c.area,members:[c.color]})}let s=n.filter(c=>og(c.rep)>=.22),r=s.length?s:n;r.sort((c,l)=>l.area-c.area);let o=r[0],a=n.filter(c=>c!==o&&c.area>=o.area*.25&&og(c.rep)<.32).slice(0,1);return[o,...a]}function cS(i,e,t){let n=i.attributes.position,s=i.attributes.normal,{colors:r}=cg(i,e),o={p:[],n:[],c:[]},a={p:[],n:[],c:[]},c=Math.max(...t.map(l=>Math.max(l.rep[0],l.rep[1],l.rep[2])))||255;for(let l=0;l<r.length;l++){let h=r[l],u=t.some(f=>hg(h,f.rep,34)),d=u?o:a;for(let f=0;f<3;f++){let g=l*3+f;if(d.p.push(n.getX(g),n.getY(g),n.getZ(g)),d.n.push(s.getX(g),s.getY(g),s.getZ(g)),u){let _=Math.min(1,Math.max(h[0],h[1],h[2])/c);d.c.push(_,_,_)}else d.c.push((h[0]/255)**2.2,(h[1]/255)**2.2,(h[2]/255)**2.2)}}return{paint:o,trim:a}}function ag(i,e){if(!i.p.length)return null;let t=e.clone();return t.deleteAttribute("uv"),t.attributes.tangent&&t.deleteAttribute("tangent"),t.setAttribute("position",new Qe(i.p,3)),t.setAttribute("normal",new Qe(i.n,3)),t.setAttribute("color",new Qe(i.c,3)),t.setIndex(null),t}async function ug(i,e){let t=await nS.loadAsync(i),{geos:n,texture:s,bodyRanges:r}=rS(t.scene);if(!s)throw new Error("no palette texture in "+i);s.image.width===void 0&&await s.image.decode?.();let o=sS(s),a=n.filter((I,L)=>r[L]),c=Gn(n,!1),l=Gn(a,!1),h=aS(l,o),u=h[0].rep,d=lg(l,o).slice(0,6).map(I=>({color:I.color,area:+I.area.toFixed(3)})),{paint:f,trim:g}=cS(c,o,h),_=ag(f,c),p=ag(g,c),m=new Vt().setFromBufferAttribute(c.attributes.position),M=new R;m.getSize(M);let A=M.x>M.z,x=A?M.x:M.z,w=e/x;for(let I of[_,p])I&&(A&&I.rotateY(Math.PI/2),I.scale(w,w,w));let S=new Vt;for(let I of[_,p])I&&(I.computeBoundingBox(),S.union(I.boundingBox));let C=-(S.min.x+S.max.x)/2,y=-S.min.y,T=-(S.min.z+S.max.z)/2;for(let I of[_,p])I&&(I.translate(C,y,T),I.computeBoundingBox());c.dispose(),l.dispose();let P=new R;(_||p).computeBoundingBox(),S.makeEmpty();for(let I of[_,p])I&&S.union(I.boundingBox);S.getSize(P);for(let I of[_,p])I&&(I.userData.shared=!0);return{paintGeo:_,trimGeo:p,width:P.x,height:P.y,length:P.z,paintColor:u,palette:d,triangles:(_?_.attributes.position.count:0)/3+(p?p.attributes.position.count:0)/3}}var Li=[{name:"sedan",file:"sedan",len:4.55,weight:27},{name:"hatchback",file:"hatchback-sports",len:4.05,weight:21},{name:"suv",file:"suv",len:4.85,weight:19},{name:"crossover",file:"suv-luxury",len:4.7,weight:13},{name:"van",file:"van",len:4.9,weight:12},{name:"delivery",file:"delivery",len:5.25,weight:8}],lo=[{name:"white",hex:15527664,weight:9},{name:"silver",hex:11712445,weight:7},{name:"black",hex:2303530,weight:8},{name:"grey",hex:7304572,weight:6},{name:"blue",hex:2974648,weight:11},{name:"red",hex:12791595,weight:11},{name:"navy",hex:2241628,weight:6},{name:"green",hex:3115602,weight:8},{name:"orange",hex:14710303,weight:8},{name:"teal",hex:2071208,weight:6},{name:"plum",hex:8207219,weight:4},{name:"beige",hex:14076326,weight:4},{name:"brown",hex:7031344,weight:3},{name:"yellow",hex:15712281,weight:9}];var zd=[1,1,1],lS=[.1,.112,.13],dg=[.05,.05,.055];function hS(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e[0],s[r*3+1]=e[1],s[r*3+2]=e[2];return t.setAttribute("color",new Qe(s,3)),t}function th(i){let e=i.reduce((s,r)=>s+r.weight,0),t=[],n=0;for(let s of i)n+=s.weight/e,t.push(n);return{entries:i,cum:t}}function nh(i,e){let{entries:t,cum:n}=i;for(let s=0;s<n.length;s++)if(e<n[s])return s;return t.length-1}function co(i,e,t,n,s,r,o){let a=new Cn(i,e,t);return a.translate(n,s,r),hS(a,o)}function ih(){let i=new Et;return i.setAttribute("position",new Qe([0,0,0,0,0,0,0,0,0],3)),i.setAttribute("normal",new Qe([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new Qe([0,0,0,0,0,0,0,0,0],3)),i}function fg(i){let e=i.height*.58,t=i.height-e;return Gn([co(i.width*1.02,i.height*.18,i.length*.92,0,i.height*.09,0,dg),co(i.width,e*.85,i.length,0,i.height*.18+e*.42,0,zd),co(i.width*.84,t,i.length*.52,0,e+t/2,-i.length*.04,zd)],!1)}function pg(i){let e=i.height*.82;return co(i.width,e,i.length,0,e/2,0,zd)}function mg(i){let e=i.height*.52,t=[];for(let n of[-1,1])for(let s of[-1,1])t.push(co(e*.5,e*.86,e,n*(i.width*.5-e*.27),e*.43,s*i.length*.31,dg));return t.push(co(i.width*.84,i.height*.22,i.length*.42,0,i.height*.68,-i.length*.03,lS)),Gn(t,!1)}var rh=12.5,kd=2.4,Vd={};function qe(i,e,t){let n=i+":"+(e||0)+":"+(t||0);return Vd[n]||(Vd[n]=new Gt({color:i,roughness:e===void 0?.8:e,metalness:t||0})),Vd[n]}function vt(i,e,t,n,s,r,o){let a=new ze(new Cn(i,e,t),o);return a.position.set(n,s,r),a}function ai(i,e,t,n,s,r,o){let a=new ze(new ti(i,i,e,o||10),r);return a.position.set(t,n,s),a}var Wd=12172477,ci=9344412,Gd=2896186,oh=15906844,Hd=12072239,es=15659507,vg=3107653,uS=14967839;function dS(i){let e=new ft,t=vt(7.2,.04,5.2,0,.02,0,qe(Wd,.94));e.add(t);for(let s of[-1,1])for(let r of[-1,1])e.add(ai(.13,2.7,s*2.7,1.35,r*1.7,qe(ci,.5,.4)));e.add(vt(6.6,.36,4.4,0,2.88,0,qe(es,.62))),e.add(vt(6.7,.16,4.5,0,2.62,0,qe(Hd,.6)));for(let s of[-1,1])e.add(vt(1.1,1,.8,0,.5,s*1.5,qe(es,.6))),e.add(vt(.9,.42,.14,0,.78,s*1.94,qe(Gd,.4))),e.add(ai(.06,1.4,.62,.7,s*1.5,qe(Gd,.7)));let n=vt(2.6,1.7,2,0,.85,-3.2,qe(es,.72));return e.add(n),e.add(vt(2.7,.14,2.1,0,1.76,-3.2,qe(Hd,.6))),e.add(vt(2.1,.7,.06,0,.85,-2.17,qe(3820120,.25,.2))),e.add(ai(.09,3.4,3.1,1.7,-1.9,qe(ci,.5,.4))),e.add(vt(1,1.3,.12,3.1,3.2,-1.9,qe(oh,.5))),e.userData.blockers=[{x:0,z:0,r:3.6},{x:0,z:-3.2,r:2.2},{x:3.1,z:-1.9,r:.7}],e.rotation.y=i()*Math.PI*2,e}function fS(i){let e=new ft;e.add(vt(3.4,.05,1.7,0,.025,0,qe(Wd,.94)));for(let n of[-1,1])e.add(ai(.055,2,n*1.5,1,-.6,qe(ci,.4,.5))),e.add(ai(.055,2,n*1.5,1,.55,qe(ci,.4,.5)));e.add(vt(3.3,.08,1.5,0,2.04,0,qe(oh,.55))),e.add(vt(3.1,1.4,.05,0,1.2,-.62,qe(10470360,.2,.1))),e.add(vt(2.4,.09,.42,0,.55,-.36,qe(7096878,.85))),e.add(vt(2.4,.44,.06,0,.8,-.55,qe(7096878,.85))),e.add(ai(.05,2.4,2,1.2,0,qe(ci,.4,.5)));let t=vt(.62,.62,.05,2,2.35,0,qe(es,.5));return e.add(t),e.add(vt(.42,.42,.02,2,2.35,.04,qe(vg,.5))),e.userData.blockers=[{x:0,z:0,r:2.2}],e.rotation.y=i()*Math.PI*2,e}function pS(i){let e=new ft,t=qe(3817544,.9),n=qe(4870491,.88),s=[[0,0,6],[1.15,.3,5],[-.9,.9,4],[.35,-1.15,5],[-1.2,-.7,3]],r=0;for(let[a,c,l]of s)for(let h=0;h<l;h++){let u=new ze(new Vr(.42,.17,6,14),r++&1?n:t);u.rotation.x=Math.PI/2,u.rotation.z=i()*1.5,u.position.set(a+(i()-.5)*.06,.19+h*.35,c+(i()-.5)*.06),e.add(u)}let o=new ze(new Vr(.42,.17,6,14),t);return o.position.set(1.9,.42,-.7),o.rotation.z=.35,e.add(o),e.add(vt(2.6,.9,.1,0,.45,1.9,qe(5462111,.8))),e.userData.blockers=[{x:0,z:0,r:2.6}],e.rotation.y=i()*Math.PI*2,e}function mS(i){let e=new ft;e.add(ai(.11,4.2,-1.4,2.1,0,qe(ci,.45,.5))),e.add(ai(.11,4.2,1.4,2.1,0,qe(ci,.45,.5))),e.add(vt(3.3,.14,.14,0,4.15,0,qe(ci,.45,.5)));let t=vt(3.2,1.5,.09,0,3.3,0,qe(i()>.5?vg:2379903,.55));e.add(t);for(let n=0;n<3;n++)e.add(vt(2-n*.35,.17,.02,-.3+n*.1,3.75-n*.42,.06,qe(es,.5)));return e.add(vt(.5,.5,.02,1.25,3.3,.06,qe(es,.5))),e.userData.blockers=[{x:-1.4,z:0,r:.5},{x:1.4,z:0,r:.5}],e.rotation.y=i()*Math.PI*2,e}function gS(i){let e=new ft,t=qe(uS,.7),n=qe(es,.6);for(let s=0;s<16;s++){let r=s/16*Math.PI*2+i()*.2,o=1.5+i()*1.8,a=new ft;a.add(vt(.32,.045,.32,0,.022,0,t));let c=new ze(new $o(.13,.44,10),t);c.position.y=.24,a.add(c);let l=new ze(new ti(.088,.1,.07,10),n);l.position.y=.27,a.add(l),a.position.set(Math.cos(r)*o,0,Math.sin(r)*o),a.rotation.y=i()*3,e.add(a)}for(let s=0;s<3;s++){let r=new ft;for(let o=0;o<5;o++)r.add(vt(.34,.24,.06,-.68+o*.34,.62,0,o%2?qe(Hd,.68):n));r.add(vt(1.7,.06,.06,0,.74,0,qe(ci,.5,.4))),r.add(ai(.05,.75,-.8,.37,0,qe(ci,.5,.4))),r.add(ai(.05,.75,.8,.37,0,qe(ci,.5,.4))),r.position.set((i()-.5)*3,0,(i()-.5)*3),r.rotation.y=i()*3,e.add(r)}return e.add(ai(.06,2.6,0,1.3,0,qe(oh,.6))),e.add(vt(.5,.3,.4,0,2.6,0,qe(Gd,.5))),e.userData.blockers=[{x:0,z:0,r:.7}],e}function xS(i){let e=new ft;e.add(vt(5.4,.05,3.4,0,.025,0,qe(Wd,.94)));for(let n of[-1,1])e.add(vt(.24,2.3,3.4,n*2.3,1.15,0,qe(4161454,.6)));e.add(vt(5,.28,3.6,0,2.44,0,qe(es,.6))),e.add(vt(5.1,.14,3.7,0,2.16,0,qe(2845335,.55)));for(let n of[-1,1]){let s=new ze(new ti(.42,.42,1.9,12),qe(13660072,.95));s.position.set(n*1.2,1.15,0),e.add(s)}let t=qe(es,.42);for(let n=0;n<34;n++){let s=.2+i()*.34,r=new ze(new Ki(s,8,6),t);r.position.set((i()-.5)*4.4,.12+i()*.7,(i()-.5)*3.2),r.scale.y=.7,e.add(r)}return e.add(vt(.7,1.1,.5,3,.55,-1.2,qe(oh,.6))),e.userData.blockers=[{x:0,z:0,r:3.1},{x:3,z:-1.2,r:.7}],e.rotation.y=i()*Math.PI*2,e}var gg=[dS,fS,pS,mS,gS,xS],Mg=new Gt({vertexColors:!0,roughness:.78,metalness:0}),bg=new Gt({vertexColors:!0,roughness:.4,metalness:.5});Mg.userData.shared=!0;bg.userData.shared=!0;var sh=new Ie;function _S(i,e){sh.copy(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=sh.r,n[s*3+1]=sh.g,n[s*3+2]=sh.b;return i.setAttribute("color",new Qe(n,3)),i}function yS(i){i.updateMatrixWorld(!0);let e=[],t=[];i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.clone();r.applyMatrix4(s.matrixWorld);for(let o of["uv","uv1","uv2","tangent"])r.attributes[o]&&r.deleteAttribute(o);_S(r,s.material.color),(s.material.metalness>.2?t:e).push(r)});let n=new ft;e.length&&n.add(new ze(Gn(e,!1),Mg)),t.length&&n.add(new ze(Gn(t,!1),bg));for(let s of e.concat(t))s.dispose();return n}var bT=new R(0,1,0),xg=new R,er=new R,_g=new Re,yg=new ot;function vS(i,e,t,n){er.set(0,1,0).cross(e),er.lengthSq()<1e-8&&er.set(1,0,0).cross(e),er.normalize(),yg.setFromAxisAngle(e,n),er.applyQuaternion(yg).normalize(),xg.crossVectors(e,er),_g.makeBasis(xg,e,er),i.quaternion.setFromRotationMatrix(_g),i.position.copy(e).multiplyScalar(t)}function Sg(i,e,t){let n=new ft,s=Un(t^4003771),r=[],o=[],a=new R;return i.forEach((c,l)=>{let h=gg[l%gg.length],u=new ft,d=h(s),f=yS(d);f.scale.setScalar(kd),u.add(f),vS(u,c.c,e-.35,s()*Math.PI*2),n.add(u),r.push({dir:c.c.clone(),cos:Math.cos(rh/e)});let g=d.userData.blockers||[{x:0,z:0,r:3}];for(let _ of g){a.set(_.x,0,_.z).applyEuler(d.rotation).multiplyScalar(kd).applyQuaternion(u.quaternion).add(u.position);let p=_.r*kd/e;o.push({dir:a.clone().normalize(),cos:Math.cos(p),sin:Math.sin(p)})}}),{group:n,clearings:r,blockers:o}}var MS=[{file:"pine",height:5.2,weight:30,road:!1},{file:"pine-crooked",height:4.6,weight:16,road:!1},{file:"rocks",height:1.3,weight:14,road:!1},{file:"rocks-tall",height:2.1,weight:8,road:!1},{file:"hay-bale",height:1.2,weight:14,road:!1},{file:"lightpost-single",height:3.8,weight:18,road:!0}],ho=null;async function wg(){if(ho)return ho;let i=new As;return ho=await Promise.all(MS.map(async e=>{let t=await i.loadAsync("assets/models/props/"+e.file+".glb"),n=[],s=null;t.scene.updateMatrixWorld(!0),t.scene.traverse(h=>{if(!h.isMesh)return;let u=h.geometry.index?h.geometry.toNonIndexed():h.geometry.clone();u.applyMatrix4(h.matrixWorld);for(let f of["uv1","uv2","tangent"])u.attributes[f]&&u.deleteAttribute(f);n.push(u);let d=Array.isArray(h.material)?h.material[0]:h.material;d&&d.map&&!s&&(s=d.map)});let r=Gn(n,!1);for(let h of n)h.dispose();r.computeBoundingBox();let o=r.boundingBox,a=e.height/Math.max(1e-6,o.max.y-o.min.y);r.scale(a,a,a),r.computeBoundingBox();let c=r.boundingBox;r.translate(-(c.min.x+c.max.x)/2,-c.min.y,-(c.min.z+c.max.z)/2),r.userData.shared=!0,s&&(s.colorSpace=Rt,s.userData.shared=!0);let l=new Si({map:s});return l.userData.shared=!0,{...e,geo:r,material:l}})),ho}function Ag(){if(!ho)throw new Error("call loadScatterKit() first");return ho}var uo=1.15,Ig=2.45;function bS(i){return Math.sqrt(i*Ig/(4*Math.PI))}var SS=[111,172,79],wS=[119,180,87],Tg=[114,118,126],Eg=[200,202,204],AS=[226,217,176],TS=[[244,246,242],[255,217,79],[255,159,177]],Ts=null;async function Pg(){return Ts||(Ts={cars:await Promise.all(Li.map(e=>ug("assets/models/"+e.file+".glb",uo)))},Ts)}function Cg(i,e,t){let n=i+.5,s=Math.acos(1-2*n/e),r=Math.PI*(1+Math.sqrt(5))*n;return t.set(Math.cos(r)*Math.sin(s),Math.cos(s),Math.sin(r)*Math.sin(s))}function ES(i,e){let t=Un(i^3119643),n=[];for(let r=0;r<9;r++){let o=new R(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(4+t()*4.4)/e;n.push({n:o,half:Math.sin(a),edge:Math.sin(a*.88),line:Math.sin(a*.06)})}let s=[];for(let r=0;r<9;r++){let o=new R(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(rh+4.5+t()*8)/e;s.push({c:o,cos:Math.cos(a),rim:Math.cos(a*.94)})}return{roads:n,yards:s}}function CS(i){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128),r=Un(i),o=new Float32Array(16384);for(let c=0;c<o.length;c++)o[c]=r();for(let c=0;c<128;c++)for(let l=0;l<128;l++){let h=o[c*128+l]*.62;h+=o[c*3%128*128+l*3%128]*.38;let u=Math.round(40+h*215),d=(c*128+l)*4;s.data[d]=u,s.data[d+1]=u,s.data[d+2]=u,s.data[d+3]=255}n.putImageData(s,0,0);let a=new gs(t);return a.wrapS=Qn,a.wrapT=Qn,a}async function RS(i,e){let t=()=>new Promise(p=>setTimeout(p,0)),r=document.createElement("canvas");r.width=4096,r.height=2048;let o=r.getContext("2d"),a=o.createImageData(4096,2048),c=a.data,{roads:l,yards:h}=i,u=Un(e^8133973),d=new Float32Array(4096);for(let p=0;p<d.length;p++)d[p]=u()*2-1;let f=new R,g=0;for(let p=0;p<2048;p++){(p&255)===255&&await t();let m=(p+.5)/2048*Math.PI,M=Math.sin(m),A=Math.cos(m);for(let x=0;x<4096;x++){let w=(x+.5)/4096*Math.PI*2;f.set(-Math.cos(w)*M,A,Math.sin(w)*M);let S=null,C=!1;for(let T=0;T<h.length;T++){let P=f.dot(h[T].c);if(P>h[T].cos){S=P>h[T].rim?Tg:Eg,C=!0;break}}if(!C)for(let T=0;T<l.length;T++){let P=Math.abs(f.dot(l[T].n));if(P<l[T].half){P>l[T].edge?S=Eg:P<l[T].line&&x+p*3>>5&1?S=AS:S=Tg,C=!0;break}}if(!S){let T=(x>>2)*73+(p>>2)*151&16383;T<18?S=TS[T%3]:S=(x>>7)+(p>>7)&1?SS:wS}let y=d[x*31+p*17&4095]*(C?4:5);c[g++]=S[0]+y,c[g++]=S[1]+y,c[g++]=S[2]+y,c[g++]=255}}o.putImageData(a,0,0);let _=new gs(r);return _.colorSpace=Rt,_.anisotropy=16,_}function IS(){let i=document.createElement("canvas");i.width=8,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#4f96d6"),t.addColorStop(.34,"#8ac0e8"),t.addColorStop(.52,"#b7d8ee"),t.addColorStop(.6,"#d9ecf6"),t.addColorStop(.72,"#c8dfec"),t.addColorStop(1,"#b2cbd9"),e.fillStyle=t,e.fillRect(0,0,8,256);let n=new gs(i);n.colorSpace=Rt;let s=new ze(new Ki(1,32,24),new qt({map:n,side:tn,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));return s.scale.setScalar(10),s.renderOrder=-20,s.frustumCulled=!1,s}function PS(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.26,"rgba(255,255,250,1)"),t.addColorStop(.3,"rgba(255,248,226,0.60)"),t.addColorStop(.44,"rgba(255,242,208,0.14)"),t.addColorStop(1,"rgba(255,236,192,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ze(new ni(1,1),new qt({map:new gs(i),transparent:!0,blending:la,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));return n.renderOrder=-19,n.frustumCulled=!1,n}function Xd(i){let e=new ft,t=new ti(i*.5,i*.5,i*.42,16);t.rotateZ(Math.PI/2);let n=new ti(i*.33,i*.33,i*.54,14);n.rotateZ(Math.PI/2);let s=new Gt({color:1645342,roughness:.86,metalness:0});e.add(new ze(t,s)),e.add(new ze(n,new Gt({color:12896461,roughness:.36,metalness:.5})));let r=new ze(new Cn(i*.4,i*.16,i*.16),s);return r.position.x=-i*.3,e.add(r),e}function Lg(i){if(!Ts)throw new Error("call loadToyKit() first");let e=940,t=400,n=Ts.cars[0],s=new Xi;s.add(new _s(15923455,9411206,1.15));let r=new kn(16775406,2.6);r.position.set(2.2,3,3.2),s.add(r);let o=new kn(14215416,1);o.position.set(-2.8,1.6,-1.6),s.add(o);let a=new Gt({vertexColors:!0,color:14173503,metalness:.3,roughness:.36}),c=new Gt({vertexColors:!0,metalness:.1,roughness:.58}),l=n.height*1.1,h=new R(-(n.width*.5+l*.18),l*.52,-n.length*.2),u=.62;for(let G of[-1,1]){let B=new ft;if(B.add(new ze(n.paintGeo,a)),n.trimGeo&&B.add(new ze(n.trimGeo,c)),G>0){let D=Xd(l);D.position.copy(h),D.rotation.y=-.85,B.add(D)}B.position.set(G*1.06,0,0),B.rotation.y=u,s.add(B)}let d=new Dt(28,e/t,.1,40);d.position.set(.1,.88,3.95),d.lookAt(0,.17,0),d.updateMatrixWorld();let f=new ln(e,t,{samples:4}),g=i.getRenderTarget(),_=i.getClearColor(new Ie),p=i.getClearAlpha(),m=i.toneMappingExposure;i.setRenderTarget(f),i.setClearColor(15988473,1),i.toneMappingExposure=1.25,i.clear(),i.render(s,d);let M=new Uint8Array(e*t*4);i.readRenderTargetPixels(f,0,0,e,t,M),i.setRenderTarget(g),i.setClearColor(_,p),i.toneMappingExposure=m,f.dispose();let A=document.createElement("canvas");A.width=e,A.height=t;let x=A.getContext("2d"),w=x.createImageData(e,t);for(let G=0;G<t;G++){let B=(t-1-G)*e*4;w.data.set(M.subarray(B,B+e*4),G*e*4)}x.putImageData(w,0,0);let S=h.clone().applyAxisAngle(new R(0,1,0),u).add(new R(1.06,0,0)),C=S.clone().project(d),y=(C.x*.5+.5)*e,T=(-C.y*.5+.5)*t,P=S.clone().add(new R(0,l*.5,0)).project(d),I=Math.abs((-P.y*.5+.5)*t-T)*1.5;x.save();let L=x.createRadialGradient(y,T,I*.2,y,T,I*2.1);L.addColorStop(0,"rgba(255, 232, 160, 0.42)"),L.addColorStop(1,"rgba(255, 232, 160, 0)"),x.fillStyle=L,x.beginPath(),x.arc(y,T,I*2.1,0,Math.PI*2),x.fill(),x.restore(),x.save(),x.shadowColor="rgba(232, 163, 12, 0.55)",x.shadowBlur=14,x.strokeStyle="rgba(255, 255, 255, 0.95)",x.lineWidth=9,x.beginPath(),x.arc(y,T,I,0,Math.PI*2),x.stroke(),x.strokeStyle="#e8a30c",x.lineWidth=5,x.beginPath(),x.arc(y,T,I,0,Math.PI*2),x.stroke(),x.restore();let k=(G,B,D,V)=>{x.fillStyle=V,x.beginPath();for(let Y=0;Y<8;Y++){let ne=Y/8*Math.PI*2,re=Y%2===0?D:D*.34;x[Y===0?"moveTo":"lineTo"](G+Math.cos(ne)*re,B+Math.sin(ne)*re)}x.closePath(),x.fill()};return k(y+I*1.05,T-I*1,11,"#ffd94d"),k(y-I*1.25,T-I*.5,7,"#ffffff"),k(y+I*.55,T+I*1.25,6,"#ffd94d"),x.font="800 27px ui-sans-serif, system-ui, sans-serif",x.textAlign="center",x.fillStyle="#5a626c",x.fillText("every car",e*.26,52),x.fillStyle="#1b1e24",x.fillText("one car",e*.74,52),x.font="800 17px ui-sans-serif, system-ui, sans-serif",x.fillStyle="#7b838d",x.fillText("four wheels",e*.26,76),x.fillStyle="#b07f05",x.fillText("FIVE WHEELS",e*.74,76),A.toDataURL("image/jpeg",.93)}var Rg=420;async function Ng({renderer:i,count:e,seed:t}){if(!Ts)throw new Error("call loadToyKit() first");let n=Ts.cars,s=bS(e),r=ES(t,s),o=()=>new Promise(F=>setTimeout(F,0)),a=Math.cos(rh/s),c=r.yards.slice(0,8),l=new R;function h(F){for(let ee=0;ee<c.length;ee++)if(F.dot(c[ee].c)>a)return!0;return!1}function u(F){let ee=0;for(let Z=0;Z<F;Z++)h(Cg(Z,F,l))&&ee++;return F-ee}let d=e+Rg,f=d;for(let F=0;F<20;F++){let ee=u(f);if(ee===d)break;f+=d-ee}await o(),f+=90;let g=0,_=new Xi,p=new R().setFromSphericalCoords(1,Math.PI*.3,Math.PI*.35),m=IS();_.add(m);let M=PS();_.add(M);let A=Un(t^3262877),x=new Ki(1,7,5),w=[],S=new R,C=new R,y=new R,T=new R;for(let F=0;F<7;F++){S.set(A()*2-1,A()*1.6-.8,A()*2-1).normalize();let ee=s+24+A()*12;C.set(0,1,0).cross(S),C.lengthSq()<1e-6&&C.set(1,0,0).cross(S),C.normalize(),y.crossVectors(S,C);let Z=3+(A()*2|0);for(let we=0;we<Z;we++){let ue=x.clone(),Ue=2.4+A()*2.4;ue.scale(Ue,Ue*.5,Ue*.85),T.copy(S).multiplyScalar(ee+(A()-.5)*1.4).addScaledVector(C,(we-(Z-1)/2)*Ue*1.15+(A()-.5)*1.2).addScaledVector(y,(A()-.5)*2.4),ue.translate(T.x,T.y,T.z),w.push(ue)}}let P=new ze(Gn(w,!1),new Si({color:16777215}));P.frustumCulled=!1,_.add(P),x.dispose();for(let F of w)F.dispose();let I=new ft,L=new Et;L.setAttribute("position",new Qe([0,0,.14,0,0,-.2,1,.12,-.05],3)),L.computeVertexNormals();let k=new qt({color:3752266,side:mn}),G=Un(t^7847597),B=[];for(let F=0;F<3;F++){let ee=new ft,Z=new ze(L,k),we=new ze(L,k);we.scale.x=-1,ee.add(Z,we);let ue=new R(G()*2-1,G()*2-1,G()*2-1).normalize(),Ue=new R(0,1,0).cross(ue);Ue.lengthSq()<1e-6&&Ue.set(1,0,0).cross(ue),Ue.normalize();let ct=new R().crossVectors(ue,Ue);B.push({bird:ee,left:Z,right:we,u:Ue,v:ct,alt:s+10+G()*6,rate:.028+G()*.02,phase:G()*Math.PI*2,flap:7+G()*3}),I.add(ee)}_.add(I);let D=new R,V=new R,Y=new Re;function ne(F){P.rotation.y=F*.004;for(let ee of B){let Z=F*ee.rate+ee.phase,we=Math.cos(Z),ue=Math.sin(Z);D.copy(ee.u).multiplyScalar(we).addScaledVector(ee.v,ue).multiplyScalar(ee.alt),V.copy(ee.u).multiplyScalar(-ue).addScaledVector(ee.v,we),ee.bird.position.copy(D),Y.lookAt(D,V.add(D),D.clone().normalize()),ee.bird.quaternion.setFromRotationMatrix(Y);let Ue=Math.sin(F*ee.flap+ee.phase)*.65;ee.left.rotation.z=Ue,ee.right.rotation.z=-Ue}}let re=new eo(i),ce=new Xi,me=new ze(m.geometry,m.material.clone());me.material.depthTest=!0,me.scale.setScalar(10),ce.add(me);let Ye=re.fromScene(ce,0,.1,100);_.environment=Ye.texture,_.environmentIntensity=.55,re.dispose(),me.material.dispose();let mt=new _s(14872314,7183440,.48);_.add(mt);let $e=new kn(16773076,1.62);$e.position.copy(p).multiplyScalar(s*4),_.add($e);let J=p.clone();function he(F){F?J.copy(F).multiplyScalar(1.45).add(p).normalize():J.copy(p),$e.position.copy(J).multiplyScalar(s*4)}await o();let oe=new Si({map:await RS(r,t)}),Ge=CS(t^1175074);oe.detailMap=Ge,oe.onBeforeCompile=F=>{F.uniforms.detailMap={value:Ge},F.uniforms.detailTile={value:new We(220,110)},F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D detailMap;
uniform vec2 detailTile;`).replace("#include <map_fragment>",`#include <map_fragment>
float dtl = texture2D( detailMap, vMapUv * detailTile ).r;
diffuseColor.rgb *= 0.82 + 0.33 * dtl;`)};let Ke=new ze(new Ki(s,96,60),oe);_.add(Ke);let Oe=Sg(c,s,t);_.add(Oe.group);let It=Un(t),nt=th(Li),Mt=th(lo),st=255,at=new Int32Array(Li.length),Ft=new R(0,1,0),ut=new R,Pt=new ot,Zt=new ot,Nt=Un(t^5352243),Ot=0,U=0,jt=0,gt=[],E=new Float32Array(f*3),v=t^10300183,z=new R,X=new R,le=Math.sqrt(Ig)*.38;async function de(F){let ee=Un(v);E=new Float32Array(F*3);let Z=F;for(let tt=0;tt<Z;tt++){Cg(tt,Z,ut),z.set(0,1,0).cross(ut),z.lengthSq()<1e-8&&z.set(1,0,0).cross(ut),z.normalize(),X.crossVectors(ut,z);let zt=ee()*Math.PI*2,dt=Math.sqrt(ee())*le/s;ut.addScaledVector(z,Math.cos(zt)*dt).addScaledVector(X,Math.sin(zt)*dt).normalize(),E[tt*3]=ut.x,E[tt*3+1]=ut.y,E[tt*3+2]=ut.z}let we=[1,2,3,5,8,13,21,34,55,89,144,233,377,610,987],ue=1.16,Ue=Math.cos(ue/s),ct=new R,lt=new R,Ct=new R;for(let tt=0;tt<8;tt++){await o();for(let zt=0;zt<Z;zt++){ct.set(E[zt*3],E[zt*3+1],E[zt*3+2]);for(let dt=0;dt<we.length;dt++){let dn=zt+we[dt];if(dn>=Z)continue;lt.set(E[dn*3],E[dn*3+1],E[dn*3+2]);let pi=ct.dot(lt);if(pi<=Ue||(Ct.copy(ct).addScaledVector(lt,-pi),Ct.lengthSq()<1e-12))continue;Ct.normalize();let Ya=Math.acos(Math.min(1,pi))*s,Lf=(ue-Ya)*.52/s;ct.addScaledVector(Ct,Lf).normalize(),lt.addScaledVector(Ct,-Lf).normalize(),E[dn*3]=lt.x,E[dn*3+1]=lt.y,E[dn*3+2]=lt.z}E[zt*3]=ct.x,E[zt*3+1]=ct.y,E[zt*3+2]=ct.z}}let Xe=0;for(let tt=0;tt<Z;tt++)h(ut.set(E[tt*3],E[tt*3+1],E[tt*3+2]))||Xe++;return Xe}g=await de(f);for(let F=0;g<d&&F<5;F++)f+=d-g+60,g=await de(f);let K=Math.min(Rg,Math.max(0,g-e)),j=g-e-K,ae=new Uint8Array(f),Te=new Uint8Array(f),ie=new Float32Array(f*3),se=new Float32Array(f*4);for(let F=0;F<f;F++){if(ut.set(E[F*3],E[F*3+1],E[F*3+2]),Pt.setFromUnitVectors(Ft,ut),Zt.setFromAxisAngle(Ft,Nt()*Math.PI*2),Pt.multiply(Zt),ie[F*3]=ut.x*s,ie[F*3+1]=ut.y*s,ie[F*3+2]=ut.z*s,se[F*4]=Pt.x,se[F*4+1]=Pt.y,se[F*4+2]=Pt.z,se[F*4+3]=Pt.w,h(ut)){ae[F]=st;continue}if(j>0&&Math.floor(U*j/g)!==Math.floor((U+1)*j/g)){U++,ae[F]=st;continue}if(U++,K>0&&Math.floor(jt*K/(e+K))!==Math.floor((jt+1)*K/(e+K))){jt++,ae[F]=st,gt.push(F);continue}jt++;let ee=nh(nt,It());ae[F]=ee,Te[F]=nh(Mt,It()),at[ee]++,Ot++}let Me=-1;for(let F=0;F<4e3&&Me<0;F++){let ee=It()*f|0;ae[ee]!==st&&Math.abs(ie[ee*3+1]/s)<.74&&(Me=ee)}if(Me<0){for(let F=0;F<f;F++)if(ae[F]!==st){Me=F;break}}let Be=new Gt({vertexColors:!0,metalness:.44,roughness:.33,envMapIntensity:.9}),He=new Gt({vertexColors:!0,metalness:.1,roughness:.6,envMapIntensity:.55}),N=new qt({color:1778455,transparent:!0,opacity:.3,depthWrite:!1}),fe=new Si({vertexColors:!0}),Q=uo*26,pe=uo*30,xe=uo*90,te=[],Ee=[],Se=[],Tt=[],xt=new Int32Array(f).fill(-1),yn=new Int32Array(Li.length);function Tn(F,ee,Z){let we=new Fe(F,ee,{capacity:Math.max(1,Z),renderer:i});return we.frustumCulled=!1,we}function vo(F,ee,Z,we){let ue=yn[F];for(;ae[ue]!==F;)ue++;yn[F]=ue+1,ee.position.set(ie[ue*3],ie[ue*3+1],ie[ue*3+2]),ee.quaternion.set(se[ue*4],se[ue*4+1],se[ue*4+2],se[ue*4+3]),we&&(Tt[F][Z]=ue,xt[ue]=Z,ee.color=lo[Te[ue]].hex)}for(let F=0;F<Li.length;F++){await o();let ee=n[F],Z={width:ee.width,height:ee.height,length:ee.length},we=at[F];Tt[F]=new Int32Array(Math.max(1,we));let ue=Tn(ee.paintGeo,Be,we);ue.addLOD(fg(Z),Be,pe),ue.addLOD(pg(Z),fe,xe),ue.userData.body=F;let Ue=Tn(ee.trimGeo,He,we);Ue.addLOD(mg(Z),He,Q),Ue.addLOD(ih(),He,pe),Ue.userData.body=F;let ct=new ni(Z.width*1.28,Z.length*1.06);ct.rotateX(-Math.PI/2),ct.translate(0,.012,0);let lt=Tn(ct,N,we);lt.addLOD(ih(),N,uo*24),lt.renderOrder=1,_.add(lt,ue,Ue),te[F]=ue,Ee[F]=Ue,Se[F]=lt,we&&(ue.addInstances(we,(Ct,Xe)=>vo(F,Ct,Xe,!0)),yn[F]=0,Ue.addInstances(we,(Ct,Xe)=>vo(F,Ct,Xe,!1)),yn[F]=0,lt.addInstances(we,(Ct,Xe)=>vo(F,Ct,Xe,!1)),ue.computeBVH({margin:0}),Ue.computeBVH({margin:0}))}let Mo=n[ae[Me]],hr=Mo.height*1.1,ui=Xd(hr),Wa=new ot(se[Me*4],se[Me*4+1],se[Me*4+2],se[Me*4+3]),ur=new R(Mo.width*.5+hr*.18,hr*.52,-Mo.length*.2).applyQuaternion(Wa);ui.position.set(ie[Me*3]+ur.x,ie[Me*3+1]+ur.y,ie[Me*3+2]+ur.z),ui.quaternion.copy(Wa),_.add(ui);let di=Ag(),fi=Un(t^6211489),Rs=[];for(let F=0;F<di.length;F++)di[F].road||Rs.push(F);let Xa=th(Rs.map(F=>di[F])),bo=di.findIndex(F=>F.road),os=di.map(()=>[]),So=new R;for(let F of gt){So.set(ie[F*3]/s,ie[F*3+1]/s,ie[F*3+2]/s);let ee=!1;for(let Z of r.roads)if(Math.abs(So.dot(Z.n))<Z.half){ee=!0;break}if(ee){bo>=0&&os[bo].push(F);continue}os[Rs[nh(Xa,fi())]].push(F)}let dr=new Si;for(let F=0;F<di.length;F++){let ee=os[F];if(!ee.length)continue;let Z=di[F],we=new Fe(Z.geo,Z.material,{capacity:ee.length,renderer:i});we.frustumCulled=!1,we.addLOD(ih(),dr,xe);let ue=(s-.12)/s;we.addInstances(ee.length,(Ue,ct)=>{let lt=ee[ct];Ue.position.set(ie[lt*3]*ue,ie[lt*3+1]*ue,ie[lt*3+2]*ue),Ue.quaternion.set(se[lt*4],se[lt*4+1],se[lt*4+2],se[lt*4+3]);let Ct=.85+fi()*.3;Ue.scale.set(Ct,Ct,Ct)}),_.add(we)}let fr=240,En=22,Is=new Float32Array(fr*3),Lh=Un(t^10359283);for(let F=0;F<Is.length;F++)Is[F]=Lh()*En;let wo=new Qe(new Float32Array(fr*3),3),qa=new Et;qa.setAttribute("position",wo);let b=new qi(qa,new bi({color:16775388,size:.09,sizeAttenuation:!0,transparent:!0,opacity:.5,depthWrite:!1}));b.frustumCulled=!1,b.renderOrder=1,_.add(b);let O=new R,q=new R;function H(F,ee){return(ee||O).set(ie[F*3],ie[F*3+1],ie[F*3+2])}let W=uo*32,_e=Math.cos(W/s),be=new R(2,0,0);function ge(F){if(!(be.distanceToSquared(F)<4/s*(4/s))){be.copy(F);for(let ee=0;ee<Li.length;ee++){let Z=Se[ee],we=Tt[ee],ue=Z.instancesCount;for(let Ue=0;Ue<ue;Ue++){let ct=we[Ue],lt=(ie[ct*3]*F.x+ie[ct*3+1]*F.y+ie[ct*3+2]*F.z)/s;Z.setActiveAt(Ue,lt>_e)}}}}function Ce(F,ee){let Z=xt[F];if(Z<0)return;let we=ae[F];te[we].setVisibilityAt(Z,ee),Ee[we].setVisibilityAt(Z,ee),Se[we].setVisibilityAt(Z,ee),F===Me&&(ui.visible=ee)}function Le(F){let ee=ae[F],Z=n[ee],we=new ft,ue=new Gt({vertexColors:!0,metalness:.44,roughness:.33,envMapIntensity:.9,color:lo[Te[F]].hex});if(we.add(new ze(Z.paintGeo,ue)),Z.trimGeo&&we.add(new ze(Z.trimGeo,He.clone())),F===Me){let Ue=Z.height*1.1,ct=Xd(Ue);ct.position.set(Z.width*.5+Ue*.18,Ue*.52,-Z.length*.2),we.add(ct)}return we.position.set(ie[F*3],ie[F*3+1],ie[F*3+2]),we.quaternion.set(se[F*4],se[F*4+1],se[F*4+2],se[F*4+3]),we}function Je(F){let ee=null;for(let we=0;we<Li.length;we++)for(let ue of[te[we],Ee[we]]){if(!ue||ue.instancesCount===0)continue;let Ue=F.intersectObject(ue,!1);Ue.length&&(!ee||Ue[0].distance<ee.distance)&&(ee={distance:Ue[0].distance,index:Tt[we][Ue[0].instanceId]})}let Z=F.intersectObject(ui,!0);return Z.length&&(!ee||Z[0].distance<ee.distance)&&(ee={distance:Z[0].distance,index:Me}),ee}function et(F,ee){xt[F]<0||te[ae[F]].setColorAt(xt[F],ee)}function De(F){et(F,lo[Te[F]].hex)}function _t(F){m.position.copy(F.position);let ee=8;q.copy(J).multiplyScalar(ee).add(F.position),M.position.copy(q),M.quaternion.copy(F.quaternion),M.scale.setScalar(ee*.085);let Z=performance.now()*.001,we=Z*.35,ue=F.position.x,Ue=F.position.y,ct=F.position.z,lt=wo.array,Ct=En/2;for(let Xe=0;Xe<fr;Xe++){let tt=Is[Xe*3]+we,zt=Is[Xe*3+1]+Math.sin(Z*.6+Xe*1.7)*.4,dt=Is[Xe*3+2];lt[Xe*3]=ue+((tt-ue)%En+En)%En-Ct,lt[Xe*3+1]=Ue+((zt-Ue)%En+En)%En-Ct,lt[Xe*3+2]=ct+((dt-ct)%En+En)%En-Ct}wo.needsUpdate=!0,ne(Z)}function Bt(F){let ee=F!=="menu";ee||he(null),mt.intensity=ee?.48:.26,$e.intensity=ee?1.62:2.35,_.environmentIntensity=ee?.55:.3;for(let Z=0;Z<Li.length;Z++)Ee[Z].visible=ee,Se[Z].visible=ee;Lt(ee)}function Lt(F){_.fog=new zo(13624303,F?s*.36:s*.55,F?s*1.8:s*2.4);for(let ee of[Be,He,oe,N])ee.needsUpdate=!0}return{scene:_,globe:Ke,sun:$e,sunDir:p,radius:s,target:Me,slots:f,count:Ot,envTarget:Ye,paintMeshes:te,trimMeshes:Ee,blotMeshes:Se,fifth:ui,props:Oe.group,sites:c,blockers:Oe.blockers,setCarShown:Ce,carCopy:Le,refreshBlots:ge,positionOf:H,pick:Je,setColor:et,restoreColor:De,follow:_t,setFog:Lt,setMode:Bt,aimSun:he,bodyOf:ae,paintOf:Te,infoOf:F=>({body:Li[ae[F]],paint:lo[Te[F]]})}}function Dg(i,e,t){let n=(e?e.clone():new R(0,0,1)).normalize(),s=new R,r=new R,o=new R,a=new R,c=new R,l=new ot,h=new Re;s.set(0,1,0).cross(n),s.lengthSq()<1e-8&&s.set(1,0,0).cross(n),s.normalize();function u(){s.addScaledVector(n,-s.dot(n)),s.lengthSq()<1e-10&&(s.set(0,1,0).cross(n),s.lengthSq()<1e-10&&s.set(1,0,0).cross(n)),s.normalize(),r.crossVectors(n,s),o.copy(r).negate()}u();function d(M){l.setFromAxisAngle(n,-M),s.applyQuaternion(l),u()}t&&d(t);function f(M,A,x){c.set(0,0,0).addScaledVector(s,A).addScaledVector(o,M);let w=c.length();return w<1e-6||x===0||(c.divideScalar(w),a.crossVectors(n,c),a.lengthSq()<1e-12)?0:(a.normalize(),l.setFromAxisAngle(a,x/i),n.applyQuaternion(l).normalize(),s.applyQuaternion(l),u(),x)}let g=new R;function _(M){return g.copy(n).multiplyScalar(i+(M||0))}let p=new ot;function m(){return h.makeBasis(r,n,s),p.setFromRotationMatrix(h)}return{radius:i,get position(){return n},get forward(){return s},get right(){return o},get up(){return n},turn:d,step:f,surfacePoint:_,orientation:m,teleport(M){n.copy(M).normalize(),u()}}}var li={dist:16.36,distMin:10,distMax:28,elev:.894,elevMin:.16,elevMax:1.16,aimUp:3.4,aimAhead:7.5,shoulder:0},Ea={eye:1.75,pitch:-.16,pitchMin:-1.24,pitchMax:.62};function Ug(i){let e="third",t=1,n=li.elev,s=Ea.pitch,r=li.dist,o=1,a=!0,c=new R,l=new R,h=new ot,u=new ot,d=new R,f=new R,g=new R,_=new R,p=new Re;function m(x,w,S){let C=i.aspect<.85,y=C?r*1.26:r,T=C?Math.min(li.elevMax,n+.11):n;o>.001&&(T=kt.lerp(T,.3,o),y=kt.lerp(y,r*1.3,o));let P=f.copy(x.position).multiplyScalar(x.radius);g.copy(x.forward),_.crossVectors(g,x.up).normalize();let I=C?li.shoulder*.6:li.shoulder;w.copy(P).addScaledVector(x.up,Math.sin(T)*y).addScaledVector(g,-Math.cos(T)*y).addScaledVector(_,I),d.copy(P).addScaledVector(x.up,li.aimUp).addScaledVector(g,li.aimAhead).addScaledVector(_,I),p.lookAt(w,d,x.up),S.setFromRotationMatrix(p)}function M(x,w,S){w.copy(x.position).multiplyScalar(x.radius).addScaledVector(x.up,Ea.eye),d.copy(w).addScaledVector(x.forward,Math.cos(s)*4).addScaledVector(x.up,Math.sin(s)*4),p.lookAt(w,d,x.up),S.setFromRotationMatrix(p)}function A(x,w){o=kt.lerp(o,a?1:0,Math.min(1,w*2));let S=w>0?Math.min(1,w*4.6):1;if(t=kt.lerp(t,e==="first"?0:1,S),t<.0015&&(t=0),t>.9985&&(t=1),t===0){M(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}if(t===1){m(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}M(x,c,h),m(x,l,u);let C=t*t*(3-2*t);i.position.lerpVectors(c,l,C),i.quaternion.slerpQuaternions(h,u,C)}return{get mode(){return e},get settled(){return t===0||t===1},toggle(){return e=e==="third"?"first":"third",e},set(x){e=x},cinema(x){a=x},look(x){e==="first"?s=kt.clamp(s-x,Ea.pitchMin,Ea.pitchMax):n=kt.clamp(n+x,li.elevMin,li.elevMax)},zoom(x){r=kt.clamp(r*(1+x*.12),li.distMin,li.distMax)},get eyeHeight(){return e==="first"?Ea.eye:Math.sin(n)*r},update:A}}function Fg(i){let e=null,t=null,n=null,s=null,r=0,o=0,a=0;function c(){if(e)return;e=new to({canvas:i,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),e.setClearColor(0,0),e.outputColorSpace=Rt,t=new Xi,n=new Dt(30,1,.05,20);let p=new _s(15398143,12178074,1.05),m=new kn(16773848,2.1);m.position.set(2.2,3.4,2.6);let M=new kn(14674431,.7);M.position.set(-2.6,1.2,-2.2),t.add(p,m,M)}function l(p){r=requestAnimationFrame(l);let m=Math.min(.05,(p-a)/1e3||.016);a=p,o+=m*.7,s&&(s.rotation.y=o,s.position.y=-.16+Math.sin(o*1.7)*.02);let M=i.clientWidth||300,A=i.clientHeight||180;(i.width!==M*2||i.height!==A*2)&&e.setSize(M*2,A*2,!1),n.aspect=M/A,n.updateProjectionMatrix(),e.render(t,n)}function h(p){c(),u(),s=p,s.position.set(0,-.16,0),s.rotation.set(0,0,0),t.add(s),n.position.set(0,.72,2.35),n.lookAt(new R(0,.06,0)),o=.6,a=0,r=requestAnimationFrame(l)}function u(){cancelAnimationFrame(r),r=0,s&&(t.remove(s),s.traverse(p=>{p.material&&(Array.isArray(p.material)?p.material:[p.material]).forEach(m=>m.dispose())}),s=null)}function d(p){let A=document.createElement("canvas");A.width=1200,A.height=630;let x=A.getContext("2d"),w=x.createLinearGradient(0,0,0,630);w.addColorStop(0,"#6fb1e4"),w.addColorStop(.55,"#a8d2ef"),w.addColorStop(.78,"#e8f4fb"),x.fillStyle=w,x.fillRect(0,0,1200,630),x.fillStyle="rgba(255, 249, 214, 0.95)",x.beginPath(),x.arc(150,118,52,0,Math.PI*2),x.fill(),x.fillStyle="rgba(255, 249, 214, 0.35)",x.beginPath(),x.arc(150,118,78,0,Math.PI*2),x.fill(),f(x,320,96,1),f(x,960,150,.8),f(x,690,70,.62),x.fillStyle="#79b95c",x.beginPath(),x.ellipse(1200/2,950,1200*.9,430,0,0,Math.PI*2),x.fill();for(let k=0;k<46;k++){let G=k*137.5%1200,B=590-k*89.7%150*(.4+k*31%10/16);x.fillStyle=["#e5443d","#3f7fd9","#f2b705","#3fae6a","#ffffff"][k%5],x.save(),x.translate(G,B),x.rotate(k*47%180*.02),x.globalAlpha=.85,x.fillRect(-4,-2.4,8,4.8),x.restore()}x.globalAlpha=1;let S=500,C=330,y=1200/2-S/2,T=630/2-C/2+34;if(x.save(),x.shadowColor="rgba(16, 24, 34, 0.30)",x.shadowBlur=26,x.shadowOffsetY=10,x.fillStyle="#ffffff",_(x,y-16,T-16,S+32,C+54,18),x.fill(),x.restore(),e&&s){let k=n.aspect,G=s.rotation.y,B=s.position.y;s.rotation.y=.85,s.position.y=-.16;let D=new ln(S,C,{samples:4}),V=e.getRenderTarget(),Y=e.getClearColor(new Ie),ne=e.getClearAlpha();e.setRenderTarget(D),e.setClearColor(15595003,1),n.aspect=S/C,n.updateProjectionMatrix(),e.clear(),e.render(t,n);let re=new Uint8Array(S*C*4);e.readRenderTargetPixels(D,0,0,S,C,re),e.setRenderTarget(V),e.setClearColor(Y,ne),D.dispose();let ce=document.createElement("canvas");ce.width=S,ce.height=C;let me=ce.getContext("2d"),Ye=me.createImageData(S,C);for(let mt=0;mt<C;mt++){let $e=(C-1-mt)*S*4;Ye.data.set(re.subarray($e,$e+S*4),mt*S*4)}me.putImageData(Ye,0,0),x.drawImage(ce,y,T,S,C),s.rotation.y=G,s.position.y=B,n.aspect=k,n.updateProjectionMatrix()}x.font='700 24px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.textAlign="center",x.fillStyle="#3c4753",x.fillText("the one with five wheels",1200/2,T+C+26),x.lineJoin="round",x.textAlign="left",x.font='900 74px ui-sans-serif, system-ui, "Segoe UI", sans-serif';let P=x.measureText("FIVE ").width,I=x.measureText("WHEELS").width;x.save(),x.translate(1200/2,118),x.rotate(-.026),x.lineWidth=15,x.strokeStyle="rgba(20, 28, 38, 0.62)";let L=-(P+I)/2;return x.strokeText("FIVE ",L,0),x.fillStyle="#ffffff",x.fillText("FIVE ",L,0),x.strokeText("WHEELS",L+P,0),x.fillStyle="#f9c92b",x.fillText("WHEELS",L+P,0),x.restore(),x.textAlign="center",x.font='800 28px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.fillStyle="#17242d",g(x,"I found it in "+p.time+" \xB7 "+p.tries+" cars tried \xB7 "+p.count+" on the planet",1200/2,596),A}function f(p,m,M,A){p.fillStyle="rgba(255, 255, 255, 0.92)",p.beginPath(),p.arc(m,M,26*A,0,Math.PI*2),p.arc(m+30*A,M+6*A,20*A,0,Math.PI*2),p.arc(m-30*A,M+8*A,18*A,0,Math.PI*2),p.fill()}function g(p,m,M,A,x){let w=p.measureText(m).width,S=parseFloat(p.font.match(/(\d+(?:\.\d+)?)px/)[1])*1.7;p.fillStyle=x||"rgba(255, 255, 255, 0.9)",_(p,M-w/2-20,A-S*.72,w+40,S,S/2),p.fill(),p.fillStyle="#17242d",p.fillText(m,M,A)}function _(p,m,M,A,x,w){p.beginPath(),p.moveTo(m+w,M),p.arcTo(m+A,M,m+A,M+x,w),p.arcTo(m+A,M+x,m,M+x,w),p.arcTo(m,M+x,m,M,w),p.arcTo(m,M,m+A,M,w),p.closePath()}return{show:h,stop:u,photo:d}}var tr=3,Ni=null,qd=null;function LS(i,e,t){let n=[];if(i.traverse(p=>{p.isMesh&&/^leg/i.test(p.name)&&n.push(p)}),!n.length)return null;let s=new R,r=new Vt,o=n.map(p=>(p.geometry.computeBoundingBox(),p.geometry.boundingBox));function a(p,m){let M=o[p],A=1/0;for(let x=0;x<8;x++)s.set(x&1?M.max.x:M.min.x,x&2?M.max.y:M.min.y,x&4?M.max.z:M.min.z).applyMatrix4(n[p].matrixWorld),s.y<A&&(A=s.y,m.copy(s));return m}let c=new R,l=1/0,h=-1/0;function u(p,m){p.setEffectiveWeight(1);for(let P of m)P.setEffectiveWeight(0);e.timeScale=1;let M=p.getClip().duration,A=90,x=M*1.15/A,w=n.map(()=>null),S=[],C=1/0,y=0;for(let P=0;P<A;P++){e.update(x),i.updateMatrixWorld(!0),r.setFromObject(i),r.min.y<l&&(l=r.min.y),r.max.y>h&&(h=r.max.y);let I=1/0,L=0;for(let k=0;k<n.length;k++)a(k,c),w[k]!==null&&c.y<I&&(I=c.y,L=(w[k]-c.z)/x),w[k]=c.z;I<1/0&&S.push(L),I<C&&(C=I,y=p.time%M/M)}return S.sort((P,I)=>P-I),{carry:S.length?S[Math.floor(S.length*.75)]:0,span:M,contact:y}}let d=u(t.walk,[t.run,t.idle]),f=u(t.run,[t.walk,t.idle]),g=h-l;if(!(g>1e-6))return null;let _=tr/g;return{scale:_,lift:-l*_,walkCycle:d.span,runCycle:f.span,walkSpeed:Math.max(.1,d.carry*_),runSpeed:Math.max(.1,f.carry*_),phase:f.contact-d.contact,contact:d.contact}}var Og=new qt({color:2106410,side:tn});Og.userData.shared=!0;function Bg(i,e){let t=[];i.traverse(n=>{n.isMesh&&!n.userData.outline&&!n.userData.outlined&&t.push(n)});for(let n of t){let s=new ze(n.geometry,Og);s.userData.outline=!0,n.userData.outlined=!0,n.geometry&&(n.geometry.userData.shared=!0),s.scale.setScalar(e),s.frustumCulled=!1,n.add(s)}}function zg(){let i=new ft,e=new Gt({color:15905420,roughness:.9}),t=new Gt({color:5217891,roughness:.9}),n=(r,o,a,c,l,h,u)=>{let d=new ze(new Cn(r,o,a),u);return d.position.set(c,l,h),i.add(d),d};n(.66,.18,.62,0,0,.05,e);for(let r=0;r<4;r++){let o=n(.135,.16,.42,-.24+r*.16,.06,-.42,e);o.rotation.x=.55}let s=n(.15,.15,.34,.4,.04,-.1,e);return s.rotation.y=-.6,s.rotation.x=.35,n(.58,.24,.32,0,-.13,.42,t),i.scale.setScalar(.78),Bg(i,1.04),i}async function kg(){return Ni||(Ni=await new As().loadAsync("assets/models/props/attendant.glb"),Ni)}function Vg(i){if(!Ni)throw new Error("call loadHero() first");let e=new ft,t=Ni.scene;e.add(t),t.scale.setScalar(1),t.position.set(0,0,0),t.updateMatrixWorld(!0);let n=new ra(t),s={};for(let D of Ni.animations)s[D.name]=D;let r=n.clipAction(s.idle||Ni.animations[0]),o=n.clipAction(s.walk||Ni.animations[0]),a=n.clipAction(s.sprint||s.walk||Ni.animations[0]);for(let D of[r,o,a])D.setLoop(_a,1/0),D.enabled=!0,D.play();let c=null;t.traverse(D=>{!c&&D.name==="root"&&(c=D)});let l=c?c.position.clone():null,h=l?()=>{c.position.x=l.x,c.position.z=l.z}:()=>{};qd||(qd=LS(t,n,{idle:r,walk:o,run:a}));let u=qd||{scale:tr/.9,lift:0,walkSpeed:tr*.8,runSpeed:tr*2,phase:0};t.scale.setScalar(u.scale),t.position.set(0,u.lift,0),r.setEffectiveWeight(1),o.setEffectiveWeight(0),a.setEffectiveWeight(0),r.time=0,o.time=0,a.time=0,n.update(0),h(),t.traverse(D=>{if(!D.isMesh)return;D.geometry&&(D.geometry.userData.shared=!0);let V=Array.isArray(D.material)?D.material:[D.material];for(let Y of V){Y.envMapIntensity=1.1,Y.userData.shared=!0;for(let ne in Y){let re=Y[ne];re&&re.isTexture&&(re.userData.shared=!0)}Y.needsUpdate=!0}D.frustumCulled=!1,D.castShadow=!1,D.receiveShadow=!1}),Bg(t,1.07);let d={};for(let[D,V,Y]of[["pickup",s["pick-up"],!0],["yes",s["emote-yes"],!1],["no",s["emote-no"],!1]]){if(!V)continue;let ne=n.clipAction(V);ne.clampWhenFinished=!0,d[D]={action:ne,hold:Y}}let f=null,g=0,_=!1;n.addEventListener("finished",D=>{f&&D.action===f.action&&!f.hold&&(_=!0)});function p(D,V){let Y=d[D];Y&&(f&&f.action.stop(),f=Y,_=!1,f.action.reset(),f.action.setLoop(V>1?_a:Nl,V||1),f.action.play())}function m(){f&&(_=!0)}let M=new ze(new Zo(tr*.3,20),new qt({color:1120014,transparent:!0,opacity:.26,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.06,M.renderOrder=2,e.add(M);let A=u.walkSpeed,x=u.runSpeed,w=o.getClip().duration,S=a.getClip().duration,C=Math.max(.001,A*w),y=Math.max(.001,x*S),T=u.phase||0,P=u.contact||0,I=0,L=1,k=0;function G(D,V,Y){return D===V?!1:D<V?D<Y&&Y<=V:Y>D||Y<=V}function B(D,V){let Y=V<.25?1:0;L=kt.lerp(L,Y,Math.min(1,D*7));let ne=kt.clamp((V-A*1.05)/(x-A*1.05),0,1);I=kt.lerp(I,ne,Math.min(1,D*4)),f&&!_?g=Math.min(1,g+D*8):g>0&&(g=Math.max(0,g-D*5),g===0&&f&&(f.action.stop(),f=null,_=!1)),f&&f.action.setEffectiveWeight(g);let re=1-g,ce=1-L;r.setEffectiveWeight(L*re),o.setEffectiveWeight(ce*(1-I)*re),a.setEffectiveWeight(ce*I*re);let me=kt.lerp(C,y,I),Ye=kt.clamp(V/me,.3,3.6);n.timeScale=1,o.timeScale=w*Ye,a.timeScale=S*Ye;let mt=(o.time%w/w+T+1)%1;a.time=mt*S,n.update(D),h();let $e=o.time%w/w*Math.PI*2,J=(1-L)*Math.min(1,V/Math.max(1,A));if(t.rotation.set(.1*I*J,.09*Math.sin($e+Math.PI*.5)*J,.11*Math.sin($e)*J),t.position.x=Math.sin($e)*.05*J,i){let he=o.time%w/w;L<.5&&V>1&&(G(k,he,P)||G(k,he,(P+.5)%1))&&i(I>.5),k=he}}return{object:e,radius:tr*.12,height:tr,fit:u,get gait(){return o.time%w/w},act:p,release:m,animate:B,get yaw(){return e.rotation.y},set yaw(D){e.rotation.y=D}}}var nf={};Nf(nf,{confetti:()=>lh,group:()=>Ra,puff:()=>Ia,spark:()=>ef,update:()=>tf});var Es=420,Ra=new ft,ts=new Float32Array(Es*3),Ca=new Float32Array(Es),ah=new Float32Array(Es),Zd=new Float32Array(Es),Yd=0,ch=new Et,$d=new Qe(new Float32Array(Es*3),3),Jd=new Qe(new Float32Array(Es*3),3);ch.setAttribute("position",$d);ch.setAttribute("color",Jd);var ns=$d.array,Kd=Jd.array;ch.userData.shared=!0;var Hg=new bi({size:.12,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,sizeAttenuation:!0});Hg.userData.shared=!0;var jd=new qi(ch,Hg);jd.frustumCulled=!1;jd.renderOrder=2;Ra.add(jd);function Qd(i,e,t,n,s,r,o,a,c,l,h,u){let d=Yd;Yd=(Yd+1)%Es,ns[d*3]=i,ns[d*3+1]=e,ns[d*3+2]=t,ts[d*3]=n,ts[d*3+1]=s,ts[d*3+2]=r,Kd[d*3]=o,Kd[d*3+1]=a,Kd[d*3+2]=c,Ca[d]=l,ah[d]=h,Zd[d]=u}var Gg=[[1,.82,.2],[.9,.3,.3],[.35,.6,1],[.4,.85,.5],[1,.62,.78],[.97,.97,.97]];function lh(i,e){for(let t=0;t<150;t++){let n=Gg[t%Gg.length],s=Math.random()*Math.PI*2,r=1.4+Math.random()*2.6;Qd(i.x+(Math.random()-.5)*.6,i.y+(Math.random()-.5)*.6,i.z+(Math.random()-.5)*.6,Math.cos(s)*r+e.x*(2.6+Math.random()*2.4),Math.sin(s)*r*.4+e.y*(2.6+Math.random()*2.4),Math.sin(s+1.7)*r+e.z*(2.6+Math.random()*2.4),n[0],n[1],n[2],1.8+Math.random()*.9,4.2,1.1)}}function Ia(i,e,t){let n=t||5;for(let s=0;s<n;s++){let r=Math.random()*Math.PI*2,o=.3+Math.random()*.7,a=.55+Math.random()*.14;Qd(i.x,i.y,i.z,Math.cos(r)*o+e.x*.5,Math.sin(r*1.3)*o*.4+e.y*.5,Math.sin(r)*o+e.z*.5,a,a*.97,a*.9,.4+Math.random()*.2,-.6,0)}}function ef(i){for(let e=0;e<2;e++)Qd(i.x+(Math.random()-.5)*.3,i.y+(Math.random()-.5)*.3,i.z+(Math.random()-.5)*.3,(Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8,1,.85+Math.random()*.15,.35,.35+Math.random()*.2,.8,0)}var Wg=6,Fn=20,Xg=new ni(.1,.062);Xg.userData.shared=!0;var qg=new qt({color:7319119,side:mn,transparent:!0,opacity:.85});qg.userData.shared=!0;var Yg=[],Kg=[];for(let i=0;i<Wg;i++){let e=new ze(Xg,qg);e.frustumCulled=!1,Ra.add(e),Kg.push(e),Yg.push([Math.random()*Fn,Math.random()*Fn,Math.random()*Fn])}var nr=0;function tf(i,e,t){nr+=i;for(let n=0;n<Es;n++){if(Ca[n]<=0)continue;if(Ca[n]-=i,Ca[n]<=0){ns[n*3]=0,ns[n*3+1]=0,ns[n*3+2]=0;continue}e&&(ts[n*3]-=e.x*ah[n]*i,ts[n*3+1]-=e.y*ah[n]*i,ts[n*3+2]-=e.z*ah[n]*i);let s=Zd[n]?Math.sin(Ca[n]*11+n*2.3)*Zd[n]:0;ns[n*3]+=(ts[n*3]+s)*i,ns[n*3+1]+=ts[n*3+1]*i,ns[n*3+2]+=(ts[n*3+2]+s)*i}if($d.needsUpdate=!0,Jd.needsUpdate=!0,t){let n=t.position.x,s=t.position.y,r=t.position.z,o=Fn/2,a=nr*1.6;for(let c=0;c<Wg;c++){let l=Yg[c],h=l[0]+a,u=l[1]+Math.sin(nr*.9+c*2.1)*1.2,d=l[2]+Math.sin(nr*.5+c)*2,f=Kg[c];f.position.set(n+((h-n)%Fn+Fn)%Fn-o,s+((u-s)%Fn+Fn)%Fn-o,r+((d-r)%Fn+Fn)%Fn-o),f.rotation.set(nr*2.3+c,nr*1.7+c*2,nr*2.9+c*3)}}}function Pa(){let i=Math.random().toString(36).slice(2);return{seed:jm("fw:r:"+i)}}var df={};Nf(df,{attendantPing:()=>Na,audioGraph:()=>NS,footstep:()=>hf,isMuted:()=>hh,keyfobHit:()=>DS,keyfobMiss:()=>af,setMuted:()=>of,startAmbience:()=>uf,unlockAudio:()=>uh,unlockWin:()=>lf,wrongCar:()=>cf});var an=null,Di=null,sf=null;function La(){if(!an){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}an=new(window.AudioContext||window.webkitAudioContext),Di=an.createGain(),Di.gain.value=Cs?0:1;let i=an.createGain();i.gain.value=.16;let e=an.createDelay(.2);e.delayTime.value=.055;let t=an.createGain();t.gain.value=.22;let n=an.createBiquadFilter();n.type="lowpass",n.frequency.value=2600,Di.connect(an.destination),Di.connect(i),i.connect(e),e.connect(t),t.connect(e),e.connect(n),n.connect(an.destination);let s=Math.floor(an.sampleRate*.4);sf=an.createBuffer(1,s,an.sampleRate);let r=sf.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}return an.state==="suspended"&&an.resume(),an}function NS(){return La(),{ctx:an,bus:Di}}var Cs=!1;try{Cs=localStorage.getItem("fivewheels.muted")==="1"}catch{Cs=!1}function hh(){return Cs}function of(i){Cs=!!i;try{localStorage.setItem("fivewheels.muted",Cs?"1":"0")}catch{}return Di&&(Di.gain.value=Cs?0:1),Cs}function uh(){let i=La(),e=i.createGain();e.gain.value=1e-4;let t=i.createOscillator();t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.02)}function Wn({at:i=0,dur:e,from:t,to:n,type:s="triangle",gain:r=.1,cutoff:o=0}){let a=La(),c=a.currentTime+i,l=a.createOscillator(),h=a.createGain();l.type=s,l.frequency.setValueAtTime(t,c),n&&n!==t&&l.frequency.exponentialRampToValueAtTime(n,c+e),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(r,c+.006),h.gain.exponentialRampToValueAtTime(1e-4,c+e);let u=l.connect(h);if(o){let d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=o,h.connect(d),u=d}else u=h;u.connect(Di),l.start(c),l.stop(c+e+.03)}function dh({at:i=0,dur:e=.09,cutoff:t=900,gain:n=.22}){let s=La(),r=s.currentTime+i,o=s.createBufferSource();o.buffer=sf;let a=s.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(Math.max(120,t*.35),r+e);let c=s.createGain();c.gain.setValueAtTime(n,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(c).connect(Di),o.start(r),o.stop(r+e+.02)}function DS(){dh({at:0,dur:.035,cutoff:2600,gain:.42}),Wn({at:.005,dur:.075,from:1750,to:2450,gain:.34,cutoff:5200}),Wn({at:.115,dur:.085,from:1900,to:2650,gain:.34,cutoff:5200})}function af(){dh({at:0,dur:.028,cutoff:1700,gain:.5})}function cf(){for(let i of[0,.2])Wn({at:i,dur:.17,from:415,to:405,type:"sawtooth",gain:.3,cutoff:1500}),Wn({at:i,dur:.17,from:311,to:305,type:"sawtooth",gain:.27,cutoff:1500})}function lf(){dh({at:0,dur:.13,cutoff:620,gain:.62}),Wn({at:.06,dur:.09,from:1500,to:2100,gain:.36,cutoff:5e3}),Wn({at:.18,dur:.1,from:1900,to:2600,gain:.36,cutoff:5e3}),Wn({at:.32,dur:.34,from:2600,to:3100,gain:.22,cutoff:6e3})}function Na(){Wn({at:0,dur:.13,from:720,to:720,type:"sine",gain:.34,cutoff:2200}),Wn({at:.14,dur:.2,from:960,to:960,type:"sine",gain:.32,cutoff:2200})}function hf(i){let e=.88+Math.random()*.24;dh({at:0,dur:i?.05:.042,cutoff:(i?1e3:720)*e,gain:i?.14:.09})}var rf=null;function US(){if(!an||an.state!=="running")return;let i=2100+Math.random()*1500;Wn({at:0,dur:.07,from:i,to:i*1.3,type:"sine",gain:.05,cutoff:6400}),Wn({at:.11,dur:.09,from:i*1.15,to:i*.85,type:"sine",gain:.04,cutoff:6400}),Math.random()<.4&&Wn({at:.26,dur:.06,from:i*1.05,to:i*1.25,type:"sine",gain:.035,cutoff:6400})}function Zg(){rf&&setTimeout(()=>{US(),Zg()},4e3+Math.random()*7e3)}function uf(){if(rf)return;let i=La(),e=Math.floor(i.sampleRate*2),t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);for(let l=0;l<e;l++)n[l]=Math.random()*2-1;let s=i.createBufferSource();s.buffer=t,s.loop=!0;let r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.6;let o=i.createGain();o.gain.value=.018;let a=i.createOscillator();a.frequency.value=.09;let c=i.createGain();c.gain.value=170,a.connect(c).connect(r.frequency),s.connect(r).connect(o).connect(Di),s.start(),a.start(),rf={src:s,lfo:a},Zg()}function fh(i,e={}){typeof gtag=="function"&&gtag("event",i,e)}var za=Pa(),$g=10,FS=22,Jg=.0032,jg=.0058,OS=new URLSearchParams(location.search),Qg=parseInt(OS.get("cars")||"",10),_h=Number.isFinite(Qg)?kt.clamp(Qg,4e3,12e4):49e3,BS=["localhost","127.0.0.1",""].includes(location.hostname),_n=document.getElementById("scene");function p0(i){console.error(i);let e=document.querySelector("#boot .spin"),t=document.getElementById("boot"),n=document.getElementById("boot-note");e&&(e.hidden=!0),t&&(t.hidden=!1),n&&(n.textContent="This planet will not load. The game needs WebGL \u2014 try another browser, or switch hardware acceleration back on.")}var Jt;try{Jt=new to({canvas:_n,antialias:!0,powerPreference:"high-performance"})}catch(i){throw p0(i),i}function Tf(){let i=matchMedia("(pointer: coarse)").matches;return Math.min(devicePixelRatio||1,i?1.25:1.5)}Jt.setPixelRatio(Tf());Jt.toneMapping=ha;Jt.toneMappingExposure=.95;var ht=new Dt(52,1,.08,400),ka=new aa;ka.far=170;var e0=new We,At=i=>document.getElementById(i),ve={boot:At("boot"),bootNote:At("boot-note"),menu:At("menu"),hud:At("hud"),win:At("win"),help:At("help"),clock:At("clock"),tries:At("tries"),winTime:At("win-time"),winTries:At("win-tries"),winCount:At("win-count"),menuCount:At("menu-count"),streak:At("streak"),copy:At("copy"),photo:At("photo"),eye:At("eye"),hint:At("hint"),brief:At("brief"),briefImg:At("brief-img"),sr:At("sr-status"),lamp:At("lamp"),lampN:At("lamp-n"),hintNote:At("hintnote"),seeker:At("seeker"),cheer:At("cheer"),stick:At("stick"),stickKnob:At("stick").firstElementChild},Ae=null,ke=null,cn=null,xn=null,Ha=Fg(At("trophy")),pt="boot",rn=0,Oi=0,yh=0,Ua=0,go=[],Kt=new R,ss=new R,_o=new ot,t0=new Re,m0=new R(0,1,0),n0=new ot,Fi=0;function vh(i){i&&(ke.turn(i),Fi+=i,Fi>Math.PI?Fi-=Math.PI*2:Fi<-Math.PI&&(Fi+=Math.PI*2))}function Va(){let i=innerWidth,e=innerHeight;Jt.setPixelRatio(Tf()),Jt.setSize(i,e,!1),ht.aspect=i/e,ht.fov=i/e<.85?62:52,ht.updateProjectionMatrix()}addEventListener("resize",Va);Va();function zS(){return new Promise(i=>{let e=!1,t=()=>{e||(e=!0,i())};requestAnimationFrame(()=>requestAnimationFrame(t)),setTimeout(t,150)})}function Th(i){let e=i.querySelector("button");e&&e.focus()}function yo(i){ve.sr.textContent=i}function rs(i,e){let t=e?Math.round(i*10)/10:Math.floor(i),n=Math.floor(t/60),s=t-n*60;return e?n+":"+(s<10?"0":"")+s.toFixed(1):n+":"+String(s).padStart(2,"0")}function Ba(i){return i.toLocaleString("en-US")}function kS(i){let e=new Set;i.scene.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),typeof t.dispose=="function"&&t.isInstancedMesh2&&t.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of n)if(!(e.has(s)||s.userData.shared)){e.add(s);for(let r in s){let o=s[r];o&&o.isTexture&&!o.userData.shared&&o.dispose()}s.dispose()}}),i.envTarget?i.envTarget.dispose():i.scene.environment&&i.scene.environment.dispose(),Jt.renderLists.dispose()}var or=null;function g0(){for(let i=0;i<2;i++){let e=!1;for(let t of Ae.blockers){let n=ke.position.dot(t.dir);n<=t.cos||(Kt.copy(ke.position).addScaledVector(t.dir,-n),!(Kt.lengthSq()<1e-10)&&(Kt.normalize(),ss.copy(t.dir).multiplyScalar(t.cos).addScaledVector(Kt,t.sin),ke.teleport(ss),e=!0))}if(!e)return}}function yf(i,e){let t=document.getElementById("bootbar-fill");t&&(t.style.transitionDuration=(e||400)+"ms",t.style.width=i+"%")}async function x0(i){if(Ae&&or===i.seed){i0();return}ve.boot.hidden=!1,ve.bootNote.textContent="Pouring "+Ba(_h)+" cars onto a planet\u2026",yf(90,9e3),await zS(),Ae&&(kS(Ae),Ae=null),Ae=await Ng({renderer:Jt,count:_h,seed:i.seed}),or=i.seed,Ae.setMode("play"),ht.near=.08,ht.far=Ae.radius*2,ht.updateProjectionMatrix(),Ae.scene.add(Ra),Oa||wf(C0),xn=Vg(e=>{hf(e),Ia(ke.surfacePoint(.06),ke.up,e?4:2)}),Ae.scene.add(xn.object),i0(),ve.menuCount.textContent=Ba(Ae.count),ve.winCount.textContent=Ba(Ae.count),ve.boot.hidden=!0}function i0(){let i=Ae.positionOf(Ae.target,Kt).clone().normalize(),e=Ae.sites[0].c,t=2;for(let r of Ae.sites){let o=r.c.dot(i);o<t&&(t=o,e=r.c)}let n=ss.set(0,1,0).cross(e);n.lengthSq()<1e-6&&n.set(1,0,0).cross(e),n.normalize();let s=e.clone().addScaledVector(n,.2).normalize();ke=Dg(Ae.radius,s),Kt.copy(e).addScaledVector(s,-e.dot(s)).normalize(),ke.turn(Math.atan2(ke.right.dot(Kt),ke.forward.dot(Kt))),ke.turn(1.15),cn=Ug(ht),sr=0,Fi=0}function Eh(i,e,t){xn.object.position.copy(ke.surfacePoint(0)),n0.setFromAxisAngle(m0,Fi),xn.object.quaternion.copy(ke.orientation()).multiply(n0),xn.animate(i,e);let n=ht.position.distanceTo(xn.object.position)<xn.height*.95;xn.object.visible=(t||cn.mode==="third"||!cn.settled)&&!n}var An=new Set,lr=new Map,Fa={t:-1e9,x:0,y:0,moved:0},is=null,_0=matchMedia("(pointer: fine)").matches,Ef=0,Cf=0,Rf=!1,fo=-1;function VS(i){let e=i>>16&255,t=i>>8&255,n=i&255,s=r=>Math.round(r+(255-r)*.55);return s(e)<<16|s(t)<<8|s(n)}function s0(i){for(let e of go)if(e.index===i)return!0;return!1}function Ch(i){i!==fo&&(fo>=0&&!s0(fo)&&Ae.restoreColor(fo),fo=-1,i>=0&&!s0(i)&&(Ae.setColor(i,VS(Ae.infoOf(i).paint.hex)),fo=i))}addEventListener("keydown",i=>{if(i.repeat)return;let e=i.key.toLowerCase();if(pt==="inspect"){(e==="q"||e==="escape")&&WS(),e==="enter"&&(i.preventDefault(),A0());return}if(e===" "&&pt==="play"){i.preventDefault(),cn.toggle(),Ph();return}if(e==="h"&&pt==="play"){T0();return}if(e==="enter"&&pt==="play"){i.preventDefault(),w0(_0&&Rf?Ga(Ef,Cf):Ga(innerWidth/2,innerHeight/2));return}An.add(e),i.code&&An.add(i.code.toLowerCase())});addEventListener("keyup",i=>{An.delete(i.key.toLowerCase()),i.code&&An.delete(i.code.toLowerCase())});addEventListener("blur",()=>An.clear());var ph=0;addEventListener("visibilitychange",()=>{document.hidden?(An.clear(),ph=performance.now()):ph&&(Oi+=performance.now()-ph,ph=0,Sf=performance.now())});function ff(i,e){return(An.has(e)?1:0)-(An.has(i)?1:0)}function xo(i){return i.pointerType==="touch"||i.pointerType==="pen"}function y0(i,e,t){let n=t||7,s=Ga(i,e);if(s>=0)return s;for(let[r,o]of[[n,0],[-n,0],[0,n],[0,-n]])if(s=Ga(i+r,e+o),s>=0)return s;return-1}_n.addEventListener("pointerdown",i=>{if(!xo(i)&&i.button!==0)return;if(pt==="inspect"){A0();return}if(pt!=="play")return;let e=!1;for(let s of lr.values())s.role==="walk"&&(e=!0);let t=xo(i)&&i.clientX<innerWidth*.42&&!e,n=!t&&performance.now()-Fa.t<250&&Math.hypot(i.clientX-Fa.x,i.clientY-Fa.y)<48;lr.set(i.pointerId,{role:t?"walk":"look",x0:i.clientX,y0:i.clientY,x:i.clientX,y:i.clientY,t0:performance.now(),moved:n?Fa.moved:0,pick:t||n?-1:y0(i.clientX,i.clientY,xo(i)?16:7)}),t&&(is={x:0,y:0},ve.stick.style.left=i.clientX+"px",ve.stick.style.top=i.clientY+"px",ve.stick.classList.add("on"),ve.stickKnob.style.transform="translate(0px, 0px)");try{_n.setPointerCapture(i.pointerId)}catch{}});_n.addEventListener("pointermove",i=>{xo(i)||(Ef=i.clientX,Cf=i.clientY,Rf=!0);let e=lr.get(i.pointerId);if(!e)return;let t=i.clientX-e.x,n=i.clientY-e.y;e.x=i.clientX,e.y=i.clientY,e.moved+=Math.abs(t)+Math.abs(n),e.role==="look"?xo(i)?(vh(t*Jg),cn.look(n*Jg)):(vh(-t*jg),cn.look(-n*jg)):(is={x:kt.clamp((i.clientX-e.x0)/62,-1,1),y:kt.clamp((i.clientY-e.y0)/62,-1,1)},ve.stickKnob.style.transform="translate("+(is.x*40).toFixed(1)+"px,"+(is.y*40).toFixed(1)+"px)")});function v0(i){let e=lr.get(i.pointerId);if(e){if(lr.delete(i.pointerId),e.role==="walk"){is=null,ve.stick.classList.remove("on");return}Fa={t:performance.now(),x:i.clientX,y:i.clientY,moved:e.moved},e.moved<20&&w0(e.pick>=0?e.pick:y0(i.clientX,i.clientY,xo(i)?16:7))}}_n.addEventListener("pointerup",v0);_n.addEventListener("pointercancel",v0);_n.addEventListener("wheel",i=>{pt==="play"&&(i.preventDefault(),cn.zoom(Math.sign(i.deltaY)))},{passive:!1});_n.addEventListener("contextmenu",i=>i.preventDefault());function M0(i,e,t){go.push({index:i,hex:e,times:t*2,t:0,on:!1})}function If(i){for(let e=go.length-1;e>=0;e--){let t=go[e];t.t-=i,!(t.t>0)&&(t.on=!t.on,Ae.setColor(t.index,t.on?t.hex:Ae.infoOf(t.index).paint.hex),t.t=.12,--t.times<=0&&(Ae.restoreColor(t.index),go.splice(e,1)))}}function Ga(i,e){if(!Ae)return-1;e0.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),ht.updateMatrixWorld(),ka.setFromCamera(e0,ht);let t=Ae.pick(ka);return t?t.index:-1}var GS=new R(0,-.34,-1.5),r0=.55,vf=1.7,o0=.6,rr=-1,un=null,ar=null,Ui="lift",hi=0,Mh=0,b0=new R,S0=new ot,mh=new R,pf=new R,mo=new ot,mf=new R,HS=new ot().setFromAxisAngle(new R(1,0,0),-.3);function w0(i){if(pt!=="play"||i<0)return;Ch(-1),rr=i,hi=0,Mh=0,Ui="lift",pt="inspect",Ae.setCarShown(i,!1),un=Ae.carCopy(i),b0.copy(un.position),S0.copy(un.quaternion),Ae.scene.add(un),Ia(un.position,ke.up,6),ar||(ar=zg()),Ae.scene.add(ar);let e=Ae.infoOf(i);xn.act("pickup"),yo("Picked up a "+e.paint.name+" "+e.body.name+"."),af()}function bh(){if(un){let i=new Set;un.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t)i.has(n)||n.userData.shared||(i.add(n),n.dispose())}),Ae.scene.remove(un)}ar&&Ae.scene.remove(ar),rr>=0&&(Ae.setCarShown(rr,!0),Ia(Ae.positionOf(rr,Kt),ke.up,4)),un=null,rr=-1}function WS(){pt!=="inspect"||Ui==="toss"||(bh(),xn.release(),pt="play",_n.focus())}function A0(){pt!=="inspect"||Ui==="toss"||(Ui="look",hi=vf)}function a0(i){return _o.setFromUnitVectors(m0,ke.up),mo.setFromAxisAngle(ke.up,Mh),i.copy(mo).multiply(_o)}function XS(i){if(Ae.aimSun(ke.up),cn.update(ke,i),Eh(i,0),If(i),ve.clock.textContent=rs((performance.now()-Oi)/1e3,!0),ht.updateMatrixWorld(),mh.copy(GS).applyMatrix4(ht.matrixWorld),hi+=i,Ui==="lift"){let t=Math.min(1,hi/r0),n=t*t*(3-2*t);Mh+=i*1.2,un.position.lerpVectors(b0,mh,n),un.quaternion.copy(S0).slerp(a0(mo),n),t>=1&&(Ui="look",hi=0)}else if(Ui==="look"){if(Mh+=i*(Math.PI*2/vf),un.position.copy(mh).addScaledVector(ke.up,Math.sin(hi*5)*.015),un.quaternion.copy(a0(mo)),hi>=vf){if(rn++,ve.tries.textContent=rn,rr===Ae.target){bh(),xn.act("yes",3),qS();return}Ui="toss",hi=0,xn.act("no"),mf.set(1,0,0).applyQuaternion(ht.quaternion),pf.copy(mf).multiplyScalar(4.4).addScaledVector(ke.up,3.4),cf(),yo("Not the one \u2014 tossed it. "+rn+(rn===1?" car":" cars")+" tried, "+rs((performance.now()-Oi)/1e3,!1)+" on the clock.")}}else{un.position.addScaledVector(pf,i),ef(un.position),pf.addScaledVector(ke.up,-7*i),mo.setFromAxisAngle(mf,i*9),un.quaternion.premultiply(mo);let t=Math.max(.05,1-i*1.2);if(un.scale.multiplyScalar(t),hi>=o0){let n=rr;bh(),M0(n,14241615,2),pt="play",_n.focus();return}}let e=Ui==="toss"?Math.max(0,1-hi/(o0*.45)):Math.min(1,Ui==="look"?1:hi/(r0*.85));Kt.set(0,0,-1).applyQuaternion(ht.quaternion),ar.position.copy(mh).addScaledVector(ke.up,-.17-(1-e)*1.4).addScaledVector(Kt,-.14),ar.quaternion.copy(ht.quaternion).multiply(HS)}function qS(){Ch(-1),pt="won",JS(),Xn=null,yh=performance.now(),Ua=0,lf(),M0(Ae.target,16774084,5),Ae.positionOf(Ae.target,Kt),ss.copy(Kt).normalize(),lh(Kt.addScaledVector(ss,1.8),ss),ve.hud.hidden=!0,_n.style.cursor="";let i=(yh-Oi)/1e3;ve.winTime.textContent=rs(i,!1),ve.winTries.textContent=rn,o1(i),yo("That is the one \u2014 five wheels. Found in "+rs(i,!1)+" after "+rn+(rn===1?" car.":" cars.")),fh("skor_kaydedildi",{time_seconds:Math.round(i),tries:rn}),setTimeout(()=>{pt==="won"&&(ve.win.hidden=!1,Th(ve.win),Ha.show(Ae.carCopy(Ae.target)),c0(ve.winTime,i,900,e=>rs(e,!1)),c0(ve.winTries,rn,900,e=>String(Math.round(e))))},2100)}function c0(i,e,t,n){let s=performance.now();(function r(){let o=Math.min(1,(performance.now()-s)/t),a=1-Math.pow(1-o,3);i.textContent=n(e*a),o<1&&pt==="won"?setTimeout(r,24):i.textContent=n(e)})()}function YS(){let i=(yh-Oi)/1e3;return`FIVE WHEELS
Found it in `+rs(i,!1)+", after "+rn+(rn===1?" car":" cars")+(cr?" and "+cr+(cr===1?" hint":" hints"):"")+`.
`+Ba(Ae.count)+" to check. Beat me."}var Sh=1,cr=0,wh=0,l0=0,ir=new R,Da=new R,h0=new R;function KS(){Sh=1,cr=0,wh=0,ve.lampN.textContent="1",ve.lamp.classList.remove("spent"),ve.lamp.setAttribute("aria-label","Use your hint"),ve.hintNote.classList.remove("on"),ve.seeker.hidden=!0}function T0(){if(pt!=="play"||Sh<=0)return;Sh=0,cr=1,ve.lampN.textContent="0",ve.lamp.classList.add("spent"),ve.lamp.setAttribute("aria-label","Hint used"),wh=10;let i="It is that way. Ten seconds.";ve.hintNote.textContent="\u{1F4A1} "+i,ve.hintNote.classList.add("on"),clearTimeout(l0),l0=setTimeout(()=>ve.hintNote.classList.remove("on"),6500),yo("Hint: the arrow points toward the car for ten seconds."),xn.act("yes",2),Na(),Ih(),fh("ipucu_kullanildi")}var u0={lap:"Around the world! A full lap of the planet \u{1F30D}",t10:"10 cars checked. 48,990 innocent ones to go.",t50:"50 cars checked \u2014 now it\u2019s personal.",t100:"100 cars! The attendant salutes you \u{1FAE1}",m5:"Five minutes in. It\u2019s out there. Probably watching you.",m15:"Fifteen minutes. Respect \u2014 it cannot hide forever."},Ah={lap:!1,t10:!1,t50:!1,t100:!1,m5:!1,m15:!1},Mf=0,d0=new R,bf=!1,f0=0;function ZS(){for(let i in Ah)Ah[i]=!1;Mf=0,bf=!1}function po(i){Ah[i]||pt!=="play"||(Ah[i]=!0,ve.cheer.textContent=u0[i],ve.cheer.classList.remove("on"),ve.cheer.offsetWidth,ve.cheer.classList.add("on"),clearTimeout(f0),f0=setTimeout(()=>ve.cheer.classList.remove("on"),4600),yo(u0[i]),Na(),i==="lap"&&(Kt.copy(ke.position).multiplyScalar(Ae.radius),ss.copy(ke.up),lh(Kt.addScaledVector(ss,2.2),ss)))}function $S(i){if(bf){let t=Math.min(1,Math.max(-1,d0.dot(ke.position)));Mf+=Math.acos(t)}d0.copy(ke.position),bf=!0,Mf>=Math.PI*2&&po("lap"),rn>=100?po("t100"):rn>=50?po("t50"):rn>=10&&po("t10");let e=(performance.now()-Oi)/6e4;e>=15?po("m15"):e>=5&&po("m5")}var Pf="fivewheels.round";function Rh(){try{let i=localStorage.getItem(Pf);if(!i)return null;let e=JSON.parse(i);return!e||e.done||e.count!==_h||!Number.isFinite(e.seed)?null:e}catch{return null}}function Ih(){if(!Ae||or===null||pt==="won")return;let i=pt==="play"||pt==="inspect";if(!i){let e=Rh();if(e&&e.seed===or)return}try{localStorage.setItem(Pf,JSON.stringify({seed:or,count:_h,elapsed:i?Math.max(0,(performance.now()-Oi)/1e3):0,tries:rn,hintUsed:cr>0,done:!1}))}catch{}}function JS(){try{localStorage.removeItem(Pf)}catch{}}var Xn=Rh();Xn&&(za={seed:Xn.seed});addEventListener("pagehide",Ih);function jS(i){if(wh<=0){ve.seeker.hidden||(ve.seeker.hidden=!0);return}if(wh-=i,Ae.positionOf(Ae.target,ir).normalize(),ir.addScaledVector(ke.up,-ir.dot(ke.up)),ir.lengthSq()<1e-10)return;ir.normalize(),Da.set(0,0,-1).applyQuaternion(ht.quaternion),Da.addScaledVector(ke.up,-Da.dot(ke.up)).normalize(),h0.crossVectors(Da,ir);let e=Math.atan2(h0.dot(ke.up),Da.dot(ir));ve.seeker.style.transform="rotate("+(-e*180/Math.PI).toFixed(1)+"deg)",ve.seeker.hidden=!1}function Ph(){ve.eye.textContent=cn.mode==="first"?"\u{1F52D}":"\u{1F441}",ve.eye.setAttribute("aria-label",cn.mode==="first"?"Stand back up":"Crouch down and look")}function E0(){pt==="inspect"&&bh(),(pt==="play"||pt==="won")&&Ch(-1),Ha.stop(),pt="menu",ve.menu.hidden=!1,ve.hud.hidden=!0,ve.win.hidden=!0,ve.help.hidden=!0,ve.brief.hidden=!0,_n.style.cursor="",Th(ve.menu),Ae.setMode("play")}async function xh(i){Ha.stop(),pt="menu",ve.menu.hidden=!0,ve.win.hidden=!0,await x0(i),go.length=0,KS(),Xn=Rh(),Xn&&Xn.seed===or?(rn=Xn.tries||0,Xn.hintUsed&&(Sh=0,cr=1,ve.lampN.textContent="0",ve.lamp.classList.add("spent"),ve.lamp.setAttribute("aria-label","Hint used"))):(Xn=null,rn=0),ve.tries.textContent=rn,ve.brief.hidden=!1,Th(ve.brief),uh()}function QS(){ve.brief.hidden=!0,pt="play",Oi=performance.now()-(Xn&&Xn.seed===or?(Xn.elapsed||0)*1e3:0),Ih(),ve.clock.textContent="0:00.0",ZS(),Ph(),ve.hud.hidden=!1,ve.hint.classList.remove("gone"),setTimeout(()=>ve.hint.classList.add("gone"),9e3),_n.focus(),yo("Round started. One car out there has five wheels; the clock is running."),Na(),uf(),fh("oyun_basladi")}var Sf=performance.now(),sr=0,gf=0,xf=0,e1=1.15*26,C0=1.15*16,Oa=!0,gh=60,_f=0;function wf(i){if(Ae)for(let e of Ae.trimMeshes){let t=e.LODinfo&&e.LODinfo.render&&e.LODinfo.render.levels;t&&t[1]&&(t[1].distance=i*i)}}function t1(i){gh+=(1/Math.max(i,.001)-gh)*.04,_f+=i,!(_f<2)&&(_f=0,Oa&&gh<42?(Oa=!1,wf(C0)):!Oa&&gh>56&&(Oa=!0,wf(e1)))}function n1(i){cn.cinema(!0),vh(i*.021),ke.step(0,1,i*2.1),g0(),Ae.aimSun(ke.up),cn.update(ke,i),Eh(i,0,!0),xn.object.visible=!1}function i1(i){cn.cinema(!1);let e=ff("keya","keyd"),t=ff("keys","keyw"),n=ff("keyq","keye")+(An.has("arrowright")?1:0)-(An.has("arrowleft")?1:0);An.has("arrowup")&&(t+=1),An.has("arrowdown")&&(t-=1),is&&(e+=is.x,t+=-is.y),vh(kt.clamp(n,-1,1)*i*2.1);let s=Math.min(1,Math.hypot(e,t)),r=An.has("shift")||!!is&&s>.92,o=s*(r?FS:$g);if(sr=kt.lerp(sr,o,Math.min(1,i*9)),sr>.01&&(ke.step(e,t,sr*i),g0()),$S(i),s>.06){let c=Math.atan2(-e,t)-Fi;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;Fi+=c*Math.min(1,i*9)}Ae.aimSun(ke.up),cn.update(ke,i);let a=Math.min(1,sr/$g);if(a>.05&&lr.size===0){let c=xn.gait*Math.PI*2,l=(cn.mode==="first"?1:.4)*a;ht.position.addScaledVector(ke.up,Math.sin(c*2)*.045*l),Kt.set(1,0,0).applyQuaternion(ht.quaternion),ht.position.addScaledVector(Kt,Math.sin(c)*.035*l),Kt.set(0,0,-1).applyQuaternion(ht.quaternion),_o.setFromAxisAngle(Kt,Math.sin(c)*.01*l),ht.quaternion.premultiply(_o)}Eh(i,sr),If(i),ve.clock.textContent=rs((performance.now()-Oi)/1e3,!0),xf+=i,xf>3&&(xf=0,Ih()),jS(i),gf+=i,gf>.12&&(gf=0,_0&&Rf&&lr.size===0&&Ch(Ga(Ef,Cf)))}function s1(i){Ua+=i,If(i),Eh(i,0);let e=ht.aspect<.85?62:52,t=Math.exp(-Ua*4.2)*Math.sin(Math.min(Math.PI,Ua*6.5));ht.fov=e-t*9,ht.updateProjectionMatrix();let n=Ae.positionOf(Ae.target,Kt).clone(),s=n.clone().normalize(),r=new R(0,1,0).cross(s);r.lengthSq()<1e-6&&(r=new R(1,0,0).cross(s)),r.normalize();let o=.9+Ua*.45,a=r.clone().multiplyScalar(Math.cos(o)).addScaledVector(r.clone().cross(s).normalize(),Math.sin(o)),c=n.clone().addScaledVector(s,.95).addScaledVector(a,2.6);t0.lookAt(c,n.clone().addScaledVector(s,.22),s),_o.setFromRotationMatrix(t0);let l=Math.min(1,i*3.2);ht.position.lerp(c,l),ht.quaternion.slerp(_o,l)}function Af(i){Ae&&(pt==="menu"||pt==="boot"?n1(i):pt==="play"?i1(i):pt==="inspect"?XS(i):pt==="won"&&s1(i),ke&&Ae.refreshBlots(ke.position),tf(i,ke?ke.up:null,ht),Ae.follow(ht))}function r1(){let i=Tf();(Jt.getPixelRatio()!==i||_n.width!==Math.floor(innerWidth*i)||_n.height!==Math.floor(innerHeight*i))&&Va()}function R0(){requestAnimationFrame(R0),r1();let i=performance.now(),e=Math.min((i-Sf)/1e3,.1);Sf=i,Ae&&(t1(e),Af(e),Jt.render(Ae.scene,ht))}function o1(i){try{let e="fivewheels.best",t=parseFloat(localStorage.getItem(e)||"0");(!t||i<t)&&localStorage.setItem(e,String(i))}catch{}I0()}function I0(){let i=0;try{i=parseFloat(localStorage.getItem("fivewheels.best")||"0")}catch{i=0}ve.streak.textContent=i?"Your best so far: "+rs(i,!1)+".":"No car found yet. Go and look."}function P0(){let i=hh();for(let e of document.querySelectorAll("[data-mute]"))e.textContent=i?"\u{1F507}":"\u{1F50A}",e.classList.toggle("off",i),e.setAttribute("aria-label",i?"Sound is off":"Sound is on")}document.addEventListener("click",i=>{let e=i.target.closest("[data-act]");if(!e)return;let t=e.dataset.act;if(t==="start"){let n=Rh();if(n)xh({seed:n.seed});else{let s=za;za=Pa(),xh(s)}}else if(t==="random")xh(Pa());else if(t==="go")QS();else if(t==="lamp")T0();else if(t==="menu")E0();else if(t==="help")ve.help.hidden=!ve.help.hidden,ve.help.hidden?pt==="play"&&_n.focus():Th(ve.help);else if(t==="mute")of(!hh()),P0();else if(t==="eye")cn.toggle(),Ph();else if(t==="copy"){let n=YS();navigator.clipboard.writeText(n).then(()=>{ve.copy.textContent="Copied",setTimeout(()=>{ve.copy.textContent="Copy result"},1600)},()=>{ve.copy.textContent="Press \u2318C"})}else t==="photo"&&Ha.photo({time:rs((yh-Oi)/1e3,!1),tries:rn,count:Ba(Ae.count)}).toBlob(s=>{if(!s)return;let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="five-wheels-found.png",r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),4e3),navigator.clipboard&&window.ClipboardItem&&navigator.clipboard.write([new ClipboardItem({"image/png":s})]).catch(()=>{});let o=ve.photo.querySelector(".lbl");o.textContent="Saved \u2014 go post it \u{1F6DE}",setTimeout(()=>{o.textContent="Save the photo"},2200)},"image/png")});(async function(){ve.bootNote.textContent="Unpacking the cars\u2026",yf(14,600),await Promise.all([Pg(),wg()]),ve.bootNote.textContent="Waking the attendant\u2026",yf(30,400),await kg(),await x0(za),ve.briefImg.src=Lg(Jt),document.addEventListener("pointerdown",()=>uh(),{once:!0}),Va(),I0(),P0(),E0(),R0(),BS&&(window.__five={fx:nf,trophy:Ha,get world(){return Ae},get walker(){return ke},get view(){return cn},get valet(){return xn},get faceYaw(){return Fi},get state(){return pt},camera:ht,renderer:Jt,audio:df,start:e=>xh(e?za:Pa()),step:Af,run(e,t){let n=t||.016666666666666666;for(let s=0;s<e;s+=n)Af(n)},press(e,t){t===!1?An.delete(e):An.add(e)},turn(e){ke.turn(e)},setView(e){cn.set(e),Ph()},goTo(e,t){let n=Ae.positionOf(e,new R).clone().normalize(),s=n.clone(),r=new R(0,1,0).cross(s);r.lengthSq()<1e-6&&(r=new R(1,0,0).cross(s)),r.normalize();let o=(t===void 0?2.2:t)/Ae.radius;ke.teleport(n.clone().addScaledVector(r,Math.sin(o)).normalize());let a=n.clone().addScaledVector(ke.position,-n.dot(ke.position)).normalize();ke.turn(Math.atan2(ke.right.dot(a),ke.forward.dot(a)))},pickCentre(){ht.updateMatrixWorld(),Ae.scene.updateMatrixWorld(),ka.setFromCamera(new We(0,0),ht);let e=Ae.pick(ka);return e?e.index:null},measure(e){let t=Jt.getContext(),n=new Uint8Array(4),s=()=>{Jt.render(Ae.scene,ht),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n)};for(let o=0;o<8;o++)s();let r=[];for(let o=0;o<(e||24);o++){let a=performance.now();s(),r.push(performance.now()-a)}return r.sort((o,a)=>o-a),{fps:+(1e3/r[r.length>>1]).toFixed(1),worst:+(1e3/r[r.length-1]).toFixed(1),tris:Jt.info.render.triangles,calls:Jt.info.render.calls}},async shot(e,t,n){let s=t||1280,r=n||720;Jt.setPixelRatio(1),Jt.setSize(s,r,!1),ht.aspect=s/r,ht.updateProjectionMatrix(),Jt.render(Ae.scene,ht);let o=Jt.domElement.toDataURL("image/jpeg",.92);return Va(),(await fetch("/save?dir=shots&name="+e,{method:"POST",body:o})).text()}})})().catch(p0);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
