var _x=Object.defineProperty;var sp=(i,e)=>{for(var t in e)_x(i,t,{get:e[t],enumerable:!0})};var Hp=0,Ou=1,Wp=2;var Ta=1,Xp=2,oo=3,di=0,Kt=1,Sn=2,Bi=0,ir=1,Ea=2,Bu=3,zu=4,qp=5;var Ls=100,Yp=101,Kp=102,Zp=103,$p=104,Jp=200,jp=201,Qp=202,em=203,Wc=204,Xc=205,tm=206,nm=207,im=208,sm=209,rm=210,om=211,am=212,cm=213,lm=214,qc=0,Yc=1,Kc=2,sr=3,Zc=4,$c=5,Jc=6,jc=7,yl=0,hm=1,um=2,gi=0,ku=1,Vu=2,Gu=3,Ca=4,Hu=5,Wu=6,Xu=7,qr="attached",vl="detached",qu=300,Os=301,ur=302,Ml=303,bl=304,Ra=306,Xn=1e3,ei=1001,Yr=1002,Jt=1003,Sl=1004;var dr=1005;var jt=1006,ao=1007;var xi=1008;var Gn=1009,Yu=1010,Ku=1011,co=1012,lo=1013,qn=1014,yn=1015,zi=1016,wl=1017,Al=1018,ho=1020,Zu=35902,$u=35899,Ju=1021,ju=1022,Nn=1023,Ri=1026,Bs=1027,zs=1028,uo=1029,ki=1030,fo=1031;var po=1033,Ia=33776,Pa=33777,La=33778,Na=33779,Tl=35840,El=35841,Cl=35842,Rl=35843,Il=36196,Pl=37492,Ll=37496,Nl=37488,Dl=37489,Da=37490,Ul=37491,Fl=37808,Ol=37809,Bl=37810,zl=37811,kl=37812,Vl=37813,Gl=37814,Hl=37815,Wl=37816,Xl=37817,ql=37818,Yl=37819,Kl=37820,Zl=37821,$l=36492,Jl=36494,jl=36495,Ql=36283,eh=36284,Ua=36285,th=36286,nh=2200,Fa=2201,dm=2202,rr=2300,or=2301,Hc=2302,Eu=2303,er=2400,tr=2401,ea=2402,ih=2500,fm=2501,Qu=0,Oa=1,mo=2,pm=3200;var Ba=0,mm=1,ii="",Nt="srgb",In="srgb-linear",ta="linear",vt="srgb";var Qs=7680;var Cu=519,gm=512,xm=513,_m=514,sh=515,ym=516,vm=517,rh=518,Mm=519,Qc=35044;var ed="300 es",hi=2e3,Kr=2001;function yx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bm(){let i=Zr("canvas");return i.style.display="block",i}var rp={},$r=null;function na(...i){let e="THREE."+i.shift();$r?$r("log",e,...i):console.log(e,...i)}function Sm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=Sm(i);let e="THREE."+i.shift();if($r)$r("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Sm(i);let e="THREE."+i.shift();if($r)$r("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function nr(...i){let e=i.join(" ");e in rp||(rp[e]=!0,De(...i))}function wm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Am={[qc]:Yc,[Kc]:Jc,[Zc]:jc,[sr]:$c,[Yc]:qc,[Jc]:Kc,[jc]:Zc,[$c]:sr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],op=1234567,jo=Math.PI/180,ar=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function rt(i,e,t){return Math.max(e,Math.min(t,i))}function td(i,e){return(i%e+e)%e}function Mx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function bx(i,e,t){return i!==e?(t-i)/(e-i):0}function Qo(i,e,t){return(1-t)*i+t*e}function Sx(i,e,t,n){return Qo(i,e,1-Math.exp(-t*n))}function wx(i,e=1){return e-Math.abs(td(i,e*2)-e)}function Ax(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ex(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Cx(i,e){return i+Math.random()*(e-i)}function Rx(i){return i*(.5-Math.random())}function Ix(i){i!==void 0&&(op=i);let e=op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Px(i){return i*jo}function Lx(i){return i*ar}function Nx(i){return(i&i-1)===0&&i!==0}function Dx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ux(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Wt={DEG2RAD:jo,RAD2DEG:ar,generateUUID:ui,clamp:rt,euclideanModulo:td,mapLinear:Mx,inverseLerp:bx,lerp:Qo,damp:Sx,pingpong:wx,smoothstep:Ax,smootherstep:Tx,randInt:Ex,randFloat:Cx,randFloatSpread:Rx,seededRandom:Ix,degToRad:Px,radToDeg:Lx,isPowerOfTwo:Nx,ceilPowerOfTwo:Dx,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:Fx,normalize:wt,denormalize:li},qe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a;let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tu=new C,ap=new tt,$e=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],b=s[1],w=s[4],x=s[7],A=s[2],M=s[5],E=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*p+a*w+c*M,r[6]=o*m+a*x+c*E,r[1]=l*_+h*b+u*A,r[4]=l*p+h*w+u*M,r[7]=l*m+h*x+u*E,r[2]=d*_+f*b+g*A,r[5]=d*p+f*w+g*M,r[8]=d*m+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,t)),this}rotate(e){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nu=new $e,cp=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lp=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){let i={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=Xr(s.r),s.g=Xr(s.g),s.b=Xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[In]:{primaries:e,whitePoint:n,transfer:ta,toXYZ:cp,fromXYZ:lp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:cp,fromXYZ:lp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var Je=Ox();function as(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pr,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=Zr("canvas")),Pr.width=e.width,Pr.height=e.height;let s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=as(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(as(t[n]/255)*255):t[n]=as(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bx=0,Jr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(iu(s[o].image)):r.push(iu(s[o]))}else r=iu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?el.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var zx=0,su=new C,on=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=jt,o=xi,a=Nn,c=Gn,l=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ui(),this.name="",this.source=new Jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=qu;on.DEFAULT_ANISOTROPY=1;var At=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,x=(f+1)/2,A=(m+1)/2,M=(h+d)/4,E=(u+_)/4,y=(g+p)/4;return w>x&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=E/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new on(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Re=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,Vx)}lookAt(e,t,n){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),As.crossVectors(n,Hn),As.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),As.crossVectors(n,Hn)),As.normalize(),xc.crossVectors(Hn,As),s[0]=As.x,s[4]=xc.x,s[8]=Hn.x,s[1]=As.y,s[5]=xc.y,s[9]=Hn.y,s[2]=As.z,s[6]=xc.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],w=n[7],x=n[11],A=n[15],M=s[0],E=s[4],y=s[8],T=s[12],P=s[1],R=s[5],L=s[9],k=s[13],Y=s[2],B=s[6],F=s[10],z=s[14],K=s[3],ee=s[7],ie=s[11],re=s[15];return r[0]=o*M+a*P+c*Y+l*K,r[4]=o*E+a*R+c*B+l*ee,r[8]=o*y+a*L+c*F+l*ie,r[12]=o*T+a*k+c*z+l*re,r[1]=h*M+u*P+d*Y+f*K,r[5]=h*E+u*R+d*B+f*ee,r[9]=h*y+u*L+d*F+f*ie,r[13]=h*T+u*k+d*z+f*re,r[2]=g*M+_*P+p*Y+m*K,r[6]=g*E+_*R+p*B+m*ee,r[10]=g*y+_*L+p*F+m*ie,r[14]=g*T+_*k+p*z+m*re,r[3]=b*M+w*P+x*Y+A*K,r[7]=b*E+w*R+x*B+A*ee,r[11]=b*y+w*L+x*F+A*ie,r[15]=b*T+w*k+x*z+A*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],b=c*f-l*d,w=a*f-l*u,x=a*d-c*u,A=o*f-l*h,M=o*d-c*h,E=o*u-a*h;return t*(_*b-p*w+m*x)-n*(g*b-p*A+m*M)+s*(g*w-_*A+m*E)-r*(g*x-_*M+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=t*a-n*o,w=t*c-s*o,x=t*l-r*o,A=n*c-s*a,M=n*l-r*a,E=s*l-r*c,y=h*_-u*g,T=h*p-d*g,P=h*m-f*g,R=u*p-d*_,L=u*m-f*_,k=d*m-f*p,Y=b*k-w*L+x*R+A*P-M*T+E*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/Y;return e[0]=(a*k-c*L+l*R)*B,e[1]=(s*L-n*k-r*R)*B,e[2]=(_*E-p*M+m*A)*B,e[3]=(d*M-u*E-f*A)*B,e[4]=(c*P-o*k-l*T)*B,e[5]=(t*k-s*P+r*T)*B,e[6]=(p*x-g*E-m*w)*B,e[7]=(h*E-d*x+f*w)*B,e[8]=(o*L-a*P+l*y)*B,e[9]=(n*P-t*L-r*y)*B,e[10]=(g*M-_*x+m*b)*B,e[11]=(u*x-h*M-f*b)*B,e[12]=(a*T-o*R-c*y)*B,e[13]=(t*R-n*T+s*y)*B,e[14]=(_*w-g*A-p*b)*B,e[15]=(h*A-u*w+d*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,b=c*l,w=c*h,x=c*u,A=n.x,M=n.y,E=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+x)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(p+b)*M,s[7]=0,s[8]=(g+w)*E,s[9]=(p-b)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Lr.set(s[0],s[1],s[2]).length(),a=Lr.set(s[4],s[5],s[6]).length(),c=Lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),oi.copy(this);let l=1/o,h=1/a,u=1/c;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=hi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===hi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Kr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hi,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===hi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Kr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Lr=new C,oi=new Re,kx=new C(0,0,0),Vx=new C(1,1,1),As=new C,xc=new C,Hn=new C,hp=new Re,up=new tt,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gx=0,dp=new C,Nr=new tt,ts=new Re,_c=new C,Wo=new C,Hx=new C,Wx=new tt,fp=new C(1,0,0),pp=new C(0,1,0),mp=new C(0,0,1),gp={type:"added"},Xx={type:"removed"},Dr={type:"childadded",child:null},ru={type:"childremoved",child:null},Gt=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new ti,n=new tt,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new $e}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(fp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ts.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_c.copy(e):_c.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ts.lookAt(Wo,_c,this.up):ts.lookAt(_c,Wo,this.up),this.quaternion.setFromRotationMatrix(ts),s&&(ts.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(ts),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xx),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ts.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ts.multiply(e.parent.matrixWorld)),e.applyMatrix4(ts),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Wx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Gt.DEFAULT_UP=new C(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qx={type:"move"},Qr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},yc={h:0,s:0,l:0};function ou(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=td(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ou(o,r,e+1/3),this.g=ou(o,r,e),this.b=ou(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Je.workingToColorSpace(bn.copy(this),e),Math.round(rt(bn.r*255,0,255))*65536+Math.round(rt(bn.g*255,0,255))*256+Math.round(rt(bn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Nt){Je.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(yc);let n=Qo(Ts.h,yc.h,t),s=Qo(Ts.s,yc.s,t),r=Qo(Ts.l,yc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new be;be.NAMES=Tm;var sa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ii=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ai=new C,ns=new C,au=new C,is=new C,Ur=new C,Fr=new C,xp=new C,cu=new C,lu=new C,hu=new C,uu=new At,du=new At,fu=new At,Ps=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ai.subVectors(e,t),s.cross(ai);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ai.subVectors(s,t),ns.subVectors(n,t),au.subVectors(e,t);let o=ai.dot(ai),a=ai.dot(ns),c=ai.dot(au),l=ns.dot(ns),h=ns.dot(au),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,is)===null?!1:is.x>=0&&is.y>=0&&is.x+is.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,is)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,is.x),c.addScaledVector(o,is.y),c.addScaledVector(a,is.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uu.setScalar(0),du.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(e,t),du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uu,r.x),o.addScaledVector(du,r.y),o.addScaledVector(fu,r.z),o}static isFrontFacing(e,t,n,s){return ai.subVectors(n,t),ns.subVectors(e,t),ai.cross(ns).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),ns.subVectors(this.a,this.b),ai.cross(ns).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ur.subVectors(s,n),Fr.subVectors(r,n),cu.subVectors(e,n);let c=Ur.dot(cu),l=Fr.dot(cu);if(c<=0&&l<=0)return t.copy(n);lu.subVectors(e,s);let h=Ur.dot(lu),u=Fr.dot(lu);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ur,o);hu.subVectors(e,r);let f=Ur.dot(hu),g=Fr.dot(hu);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Fr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return xp.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(xp,a);let m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Ur,o).addScaledVector(Fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ci):ci.fromBufferAttribute(r,o),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vc.copy(n.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Mc.subVectors(this.max,Xo),Or.subVectors(e.a,Xo),Br.subVectors(e.b,Xo),zr.subVectors(e.c,Xo),Es.subVectors(Br,Or),Cs.subVectors(zr,Br),Zs.subVectors(Or,zr);let t=[0,-Es.z,Es.y,0,-Cs.z,Cs.y,0,-Zs.z,Zs.y,Es.z,0,-Es.x,Cs.z,0,-Cs.x,Zs.z,0,-Zs.x,-Es.y,Es.x,0,-Cs.y,Cs.x,0,-Zs.y,Zs.x,0];return!pu(t,Or,Br,zr,Mc)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Or,Br,zr,Mc))?!1:(bc.crossVectors(Es,Cs),t=[bc.x,bc.y,bc.z],pu(t,Or,Br,zr,Mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ss=[new C,new C,new C,new C,new C,new C,new C,new C],ci=new C,vc=new Yt,Or=new C,Br=new C,zr=new C,Es=new C,Cs=new C,Zs=new C,Xo=new C,Mc=new C,bc=new C,$s=new C;function pu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$s.fromArray(i,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),c=e.dot($s),l=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var sn=new C,Sc=new qe,Yx=0,$t=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sc.fromBufferAttribute(this,t),Sc.applyMatrix3(e),this.setXY(t,Sc.x,Sc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var ra=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oa=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kx=new Yt,qo=new C,mu=new C,an=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);let t=qo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(mu)),this.expandByPoint(qo.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zx=0,Qn=new Re,gu=new Gt,kr=new C,Wn=new Yt,Yo=new Yt,fn=new C,It=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?oa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(Wn.min,Yo.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,Yo.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(Yo.min),Wn.expandByPoint(Yo.max))}Wn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(kr.fromBufferAttribute(e,l),fn.add(kr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new $t(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new C,c[y]=new C;let l=new C,h=new C,u=new C,d=new qe,f=new qe,g=new qe,_=new C,p=new C;function m(y,T,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[y].add(_),a[T].add(_),a[P].add(_),c[y].add(p),c[T].add(p),c[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,T=b.length;y<T;++y){let P=b[y],R=P.start,L=P.count;for(let k=R,Y=R+L;k<Y;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new C,x=new C,A=new C,M=new C;function E(y){A.fromBufferAttribute(s,y),M.copy(A);let T=a[y];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(M,T);let R=x.dot(c[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,R)}for(let y=0,T=b.length;y<T;++y){let P=b[y],R=P.start,L=P.count;for(let k=R,Y=R+L;k<Y;k+=3)E(e.getX(k+0)),E(e.getX(k+1)),E(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new $t(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Rn=new C,to=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$x=0,Pn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=ir,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var rs=new C,xu=new C,wc=new C,Rs=new C,_u=new C,Ac=new C,yu=new C,Pi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xu.copy(e).add(t).multiplyScalar(.5),wc.copy(t).sub(e).normalize(),Rs.copy(this.origin).sub(xu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wc),a=Rs.dot(this.direction),c=-Rs.dot(wc),l=Rs.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xu).addScaledVector(wc,d),f}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,s,r){_u.subVectors(t,e),Ac.subVectors(n,e),yu.crossVectors(_u,Ac);let o=this.direction.dot(yu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rs.subVectors(this.origin,e);let c=a*this.direction.dot(Ac.crossVectors(Rs,Ac));if(c<0)return null;let l=a*this.direction.dot(_u.cross(Rs));if(l<0||c+l>o)return null;let h=-a*Rs.dot(yu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ht=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_p=new Re,Js=new Pi,Tc=new an,yp=new C,Ec=new C,Cc=new C,Rc=new C,vu=new C,Ic=new C,vp=new C,Pc=new C,ze=class extends Gt{constructor(e=new It,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ic.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(vu.fromBufferAttribute(u,e),o?Ic.addScaledVector(vu,h):Ic.addScaledVector(vu.sub(t),h))}t.add(Ic)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Js.copy(e.ray).recast(e.near),!(Tc.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Tc,yp)===null||Js.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(_p.copy(r).invert(),Js.copy(e.ray).applyMatrix4(_p),!(n.boundingBox!==null&&Js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){let M=a.getX(x),E=a.getX(x+1),y=a.getX(x+2);s=Lc(this,m,e,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);s=Lc(this,o,e,n,l,h,u,b,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){let M=x,E=x+1,y=x+2;s=Lc(this,m,e,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,w=p+1,x=p+2;s=Lc(this,o,e,n,l,h,u,b,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Jx(i,e,t,n,s,r,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===di,a),c===null)return null;Pc.copy(a),Pc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Pc);return l<t.near||l>t.far?null:{distance:l,point:Pc.clone(),object:i}}function Lc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ec),i.getVertexPosition(c,Cc),i.getVertexPosition(l,Rc);let h=Jx(i,e,t,n,Ec,Cc,Rc,vp);if(h){let u=new C;Ps.getBarycoord(vp,Ec,Cc,Rc,u),s&&(h.uv=Ps.getInterpolatedAttribute(s,a,c,l,u,new qe)),r&&(h.uv1=Ps.getInterpolatedAttribute(r,a,c,l,u,new qe)),o&&(h.normal=Ps.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new C,materialIndex:0};Ps.getNormal(Ec,Cc,Rc,d.normal),h.face=d,h.barycoord=u}return h}var Ko=new At,Mp=new At,bp=new At,jx=new At,Sp=new Re,Nc=new C,Mu=new an,wp=new Re,bu=new Pi,aa=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qr,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nc),this.boundingBox.expandByPoint(Nc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Nc),this.boundingSphere.expandByPoint(Nc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mu.copy(this.boundingSphere),Mu.applyMatrix4(s),e.ray.intersectsSphere(Mu)!==!1&&(wp.copy(s).invert(),bu.copy(e.ray).applyMatrix4(wp),!(this.boundingBox!==null&&bu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vl?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Mp.fromBufferAttribute(s.attributes.skinIndex,e),bp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ko.copy(t),t.set(0,0,0,0)):(Ko.set(...t,1),t.set(0,0,0)),Ko.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=bp.getComponent(r);if(o!==0){let a=Mp.getComponent(r);Sp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jx.copy(Ko).applyMatrix4(Sp),o)}}return t.isVector4&&(t.w=Ko.w),t.applyMatrix4(this.bindMatrixInverse)}},no=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Li=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Jt,h=Jt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=new Re,Qx=new Re,ca=class i{constructor(e=[],t=[]){this.uuid=ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Qx;Ap.multiplyMatrices(a,t[r]),Ap.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Li(t,e,e,Nn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new no),this.bones.push(o),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ni=class extends $t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Re,Tp=new Re,Dc=[],Ep=new Yt,e_=new Re,Zo=new ze,$o=new an,la=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Ep.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Ep)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),$o.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union($o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$o.copy(this.boundingSphere),$o.applyMatrix4(n),e.ray.intersectsSphere($o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vr),Tp.multiplyMatrices(n,Vr),Zo.matrixWorld=Tp,Zo.raycast(e,Dc);for(let o=0,a=Dc.length;o<a;o++){let c=Dc[o];c.instanceId=r,c.object=this,t.push(c)}Dc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Li(new Float32Array(s*this.count),s,this.count,zs,yn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Su=new C,t_=new C,n_=new $e,Ei=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Su.subVectors(n,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Su),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n_.getNormalMatrix(e),s=this.coplanarPoint(Su).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},js=new an,i_=new qe(.5,.5),Uc=new C,Ns=class{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,o=new Ei){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],b=r[12],w=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,m-g,A-b).normalize(),s[1].setComponents(l+o,f+h,m+g,A+b).normalize(),s[2].setComponents(l+a,f+u,m+_,A+w).normalize(),s[3].setComponents(l-a,f-u,m-_,A-w).normalize(),n)s[4].setComponents(c,d,p,x).normalize(),s[5].setComponents(l-c,f-d,m-p,A-x).normalize();else if(s[4].setComponents(l-c,f-d,m-p,A-x).normalize(),t===hi)s[5].setComponents(l+c,f+d,m+p,A+x).normalize();else if(t===Kr)s[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(e){js.center.set(0,0,0);let t=i_.distanceTo(e.center);return js.radius=.7071067811865476+t,js.applyMatrix4(e.matrixWorld),this.intersectsSphere(js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Uc.x=s.normal.x>0?e.max.x:e.min.x,Uc.y=s.normal.y>0?e.max.y:e.min.y,Uc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var io=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new C,sl=new C,Cp=new Re,Jo=new Pi,Fc=new an,wu=new C,Rp=new C,cr=class extends Gt{constructor(e=new It,t=new io){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)il.fromBufferAttribute(t,s-1),sl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=il.distanceTo(sl);e.setAttribute("lineDistance",new Ze(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=r,e.ray.intersectsSphere(Fc)===!1)return;Cp.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(Cp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=h.getX(_),b=h.getX(_+1),w=Oc(this,e,Jo,c,m,b,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=Oc(this,e,Jo,c,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=Oc(this,e,Jo,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Oc(this,e,Jo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(il.fromBufferAttribute(a,s),sl.fromBufferAttribute(a,r),t.distanceSqToSegment(il,sl,wu,Rp)>n)return;wu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(wu);if(!(l<e.near||l>e.far))return{distance:l,point:Rp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ip=new C,Pp=new C,ha=class extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ip.fromBufferAttribute(t,s),Pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ip.distanceTo(Pp);e.setAttribute("lineDistance",new Ze(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Di=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lp=new Re,Ru=new Pi,Bc=new an,zc=new C,cs=class extends Gt{constructor(e=new It,t=new Di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(s),Bc.radius+=r,e.ray.intersectsSphere(Bc)===!1)return;Lp.copy(s).invert(),Ru.copy(e.ray).applyMatrix4(Lp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=l.getX(g);zc.fromBufferAttribute(u,p),Np(zc,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)zc.fromBufferAttribute(u,g),Np(zc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Np(i,e,t,n,s,r,o){let a=Ru.distanceSqToPoint(i);if(a<t){let c=new C;Ru.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var da=class extends on{constructor(e=[],t=Os,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ls=class extends on{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends on{constructor(e,t,n=qn,s,r,o,a=Jt,c=Jt,l,h=Ri,u=1){if(h!==Ri&&h!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},rl=class extends hs{constructor(e,t=qn,n=Os,s,r,o=Jt,a=Jt,c,l=Ri){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pn=class i extends It{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2));function g(_,p,m,b,w,x,A,M,E,y,T){let P=x/E,R=A/y,L=x/2,k=A/2,Y=M/2,B=E+1,F=y+1,z=0,K=0,ee=new C;for(let ie=0;ie<F;ie++){let re=ie*R-k;for(let fe=0;fe<B;fe++){let We=fe*P-L;ee[_]=We*b,ee[p]=re*w,ee[m]=Y,l.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[m]=M>0?1:-1,h.push(ee.x,ee.y,ee.z),u.push(fe/E),u.push(1-ie/y),z+=1}}for(let ie=0;ie<y;ie++)for(let re=0;re<E;re++){let fe=d+re+B*ie,We=d+re+B*(ie+1),pt=d+(re+1)+B*(ie+1),Qe=d+(re+1)+B*ie;c.push(fe,We,Qe),c.push(We,pt,Qe),K+=6}a.addGroup(f,K,T),f+=K,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var pa=class i extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,h=new qe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pi=class i extends It{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],p=n/2,m=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function b(){let x=new C,A=new C,M=0,E=(t-e)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,R=P*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,Y=k*c+a,B=Math.sin(Y),F=Math.cos(Y);A.x=R*B,A.y=-P*n+p,A.z=R*F,u.push(A.x,A.y,A.z),x.set(B,E,F).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-P),T.push(g++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=_[T][y],R=_[T+1][y],L=_[T+1][y+1],k=_[T][y+1];(e>0||T!==0)&&(h.push(P,R,k),M+=3),(t>0||T!==r-1)&&(h.push(R,L,k),M+=3)}l.addGroup(m,M,0),m+=M}function w(x){let A=g,M=new qe,E=new C,y=0,T=x===!0?e:t,P=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;let R=g;for(let L=0;L<=s;L++){let Y=L/s*c+a,B=Math.cos(Y),F=Math.sin(Y);E.x=T*F,E.y=p*P,E.z=T*B,u.push(E.x,E.y,E.z),d.push(0,P,0),M.x=B*.5+.5,M.y=F*.5*P+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){let k=A+L,Y=R+L;x===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),y+=3}l.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var mi=class i extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let b=m*d-o;for(let w=0;w<l;w++){let x=w*u-r;g.push(x,-b,0),_.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let w=b+l*m,x=b+l*(m+1),A=b+1+l*(m+1),M=b+1+l*m;f.push(w,x,M),f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ui=class i extends It{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let b=[],w=m/n,x=o+w*a,A=e*Math.cos(x),M=Math.sqrt(e*e-A*A),E=0;m===0&&o===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let T=y/t,P=s+T*r;u.x=-M*Math.cos(P),u.y=A,u.z=M*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+E,1-w),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let w=h[m][b+1],x=h[m][b],A=h[m+1][b],M=h[m+1][b+1];(m!==0||o>0)&&f.push(w,x,M),(m!==n-1||c<Math.PI)&&f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var so=class i extends It{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new C,f=new C,g=new C;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let m=0;m<=s;m++){let b=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(b),f.y=(e+t*Math.cos(p))*Math.sin(b),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,b=(s+1)*(_-1)+p-1,w=(s+1)*(_-1)+p,x=(s+1)*_+p;c.push(m,b,x),c.push(b,w,x)}this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function fr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Dp(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Dp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=fr(i[t]);for(let s in n)e[s]=n[s]}return e}function Dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function s_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Em={clone:fr,merge:wn},r_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r_,this.fragmentShader=o_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=s_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new be().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new At().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ol=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Bt=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kn=class extends Bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var us=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=yl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},al=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cl=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function kc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function a_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Up(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function c_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Fi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends Fi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:er,endingEnd:er}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case tr:r=e,a=2*t-n;break;case ea:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case tr:o=e,c=2*n-t;break;case ea:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+b*o[l+A]+w*o[c+A]+x*o[u+A];return r}},ma=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},hl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ul=class extends Fi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[l+g],p=o[c+g],m=f*d+g*2,b=u[m],w=u[m+1],x=e*d+g*2,A=h[x],M=h[x+1],E=(n-t)/(s-t),y,T,P,R,L;for(let k=0;k<8;k++){y=E*E,T=y*E,P=1-E,R=P*P,L=R*P;let B=L*t+3*R*E*b+3*P*y*A+T*s-n;if(Math.abs(B)<1e-10)break;let F=3*R*(b-t)+6*P*E*(A-b)+3*y*(s-A);if(Math.abs(F)<1e-10)break;E=E-B/F,E=Math.max(0,Math.min(1,E))}r[g]=L*_+3*R*E*w+3*P*y*M+T*p}return r}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kc(t,this.TimeBufferType),this.values=kc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kc(e.times,Array),values:kc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case or:t=this.InterpolantFactoryMethodLinear;break;case Hc:t=this.InterpolantFactoryMethodSmooth;break;case Eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return or;case this.InterpolantFactoryMethodSmooth:return Hc;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ge("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&vx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=or;var ds=class extends Vn{constructor(e,t,n){super(e,t,n)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=rr;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="color";var fs=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};fs.prototype.ValueTypeName="number";var dl=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)tt.slerpFlat(r,0,o,l-a,o,l,c);return r}},ps=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Vn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=rr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Ds.prototype.ValueTypeName="vector";var lr=class{constructor(e="",t=-1,n=[],s=ih){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(h_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=a_(c);c=Up(c,1,h),l=Up(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new fs(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function l_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return ga;case"quaternion":return ps;case"bool":case"boolean":return ds;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function h_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=l_(i.type);if(i.times===void 0){let t=[],n=[];c_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Fp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Fp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var fl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Cm=new fl,Oi=class{constructor(e){this.manager=e!==void 0?e:Cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var os={},Iu=class extends Error{constructor(e,t){super(e),this.response=t}},ro=class extends Oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ci.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(os[e]!==void 0){os[e].push({onLoad:t,onProgress:n,onError:s});return}os[e]=[],os[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=os[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){b();function b(){u.read().then(({done:w,value:x})=>{if(w)m.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,E=h.length;M<E;M++){let y=h[M];y.onProgress&&y.onProgress(A)}m.enqueue(x),b()}},w=>{m.error(w)})}}});return new Response(p)}else throw new Iu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ci.add(`file:${e}`,l);let h=os[e];delete os[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=os[e];if(h===void 0)throw this.manager.itemError(e),l;delete os[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gr=new WeakMap,pl=class extends Oi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Gr.get(o);u===void 0&&(u=[],Gr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Zr("img");function c(){h(),t&&t(this);let u=Gr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ci.remove(`image:${e}`);let d=Gr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ci.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var xa=class extends Oi{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new pl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},hr=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Us=class extends hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Au=new Re,Op=new C,Bp=new C,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Op.setFromMatrixPosition(e.matrixWorld),t.position.copy(Op),Bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bp),t.updateMatrixWorld(),Au.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Kr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vc=new C,Gc=new tt,Ti=new C,ya=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vc,Gc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Gc,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vc,Gc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Gc,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Is=new C,zp=new qe,kp=new qe,Vt=class extends ya{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Is.x,Is.y).multiplyScalar(-e/Is.z),Is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Is.x,Is.y).multiplyScalar(-e/Is.z)}getViewSize(e,t){return this.getViewBounds(e,zp,kp),t.subVectors(kp,zp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Pu=class extends _a{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},va=class extends hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Lu=class extends _a{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},Ma=class extends hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fs=class extends ya{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nu=class extends _a{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ni=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Nu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Tu=new WeakMap,ba=class extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ci.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Tu.has(o)===!0?(s&&s(Tu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ci.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Tu.set(c,l),Ci.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ci.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Hr=-90,Wr=1,ml=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Hr,Wr,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Hr,Wr,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Hr,Wr,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Hr,Wr,e,t);a.layers=this.layers,this.add(a);let c=new Vt(Hr,Wr,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Hr,Wr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},gl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){tt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;tt.multiplyQuaternionsFlat(e,o,e,t,e,n),tt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},id="\\[\\]\\.:\\/",u_=new RegExp("["+id+"]","g"),sd="[^"+id+"]",d_="[^"+id.replace("\\.","")+"]",f_=/((?:WC+[\/:])*)/.source.replace("WC",sd),p_=/(WCOD+)?/.source.replace("WCOD",d_),m_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sd),g_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sd),x_=new RegExp("^"+f_+p_+m_+g_+"$"),__=["material","materials","bones","map"],Du=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u_,"")}static parseTrackName(e){let t=x_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);__.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Du;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _l=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:er,endingEnd:er};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Fa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case fm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case ih:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===dm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===nh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=tr,s.endingEnd=tr):(e?s.endingStart=this.zeroSlopeAtStart?tr:er:s.endingStart=ea,t?s.endingEnd=this.zeroSlopeAtEnd?tr:er:s.endingEnd=ea)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},y_=new Float32Array(1),Sa=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;g=new xl(Ct.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ma(new Float32Array(2),new Float32Array(2),1,y_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?lr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ih),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new _l(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?lr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var wa=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Vp=new Re,Aa=class{constructor(e,t,n=0,s=1/0){this.ray=new Pi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new jr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vp),this}intersectObject(e,t=!0,n=[]){return Uu(e,this,n,t),n.sort(Gp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Uu(e[s],this,n,t);return n.sort(Gp),n}};function Gp(i,e){return i.distance-e.distance}function Uu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Uu(r[o],e,t,!0)}}var Fu=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function rd(i,e,t,n){let s=v_(n);switch(t){case Ju:return i*e;case zs:return i*e/s.components*s.byteLength;case uo:return i*e/s.components*s.byteLength;case ki:return i*e*2/s.components*s.byteLength;case fo:return i*e*2/s.components*s.byteLength;case ju:return i*e*3/s.components*s.byteLength;case Nn:return i*e*4/s.components*s.byteLength;case po:return i*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case El:case Rl:return Math.max(i,16)*Math.max(e,8)/4;case Tl:case Cl:return Math.max(i,8)*Math.max(e,8)/2;case Il:case Pl:case Nl:case Dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Da:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $l:case Jl:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ql:case eh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ua:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function v_(i){switch(i){case Gn:case Yu:return{byteLength:1,components:1};case co:case Ku:case zi:return{byteLength:2,components:1};case wl:case Al:return{byteLength:2,components:4};case qn:case lo:case yn:return{byteLength:4,components:1};case Zu:case $u:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function Jm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function b_(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,A_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
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
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F_=`#ifdef USE_IRIDESCENCE
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
#endif`,O_=`#ifdef USE_BUMPMAP
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,q_=`#define PI 3.141592653589793
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
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,K_=`vec3 transformedNormal = objectNormal;
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
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hy=`#ifdef USE_GRADIENTMAP
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
}`,uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vy=`PhysicalMaterial material;
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
#endif`,My=`uniform sampler2D dfgLUT;
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
}`,by=`
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,By=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`#ifdef USE_MORPHTARGETS
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
#endif`,ky=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,av=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cv=`float getShadowMask() {
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
}`,lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hv=`#ifdef USE_SKINNING
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
#endif`,uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#ifdef USE_TRANSMISSION
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wv=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rv=`#include <common>
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
}`,Iv=`#if DEPTH_PACKING == 3200
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
}`,Pv=`#define DISTANCE
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
}`,Lv=`#define DISTANCE
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`uniform float scale;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#define LAMBERT
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
}`,kv=`#define LAMBERT
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
}`,Vv=`#define MATCAP
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
}`,Gv=`#define MATCAP
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
}`,Hv=`#define NORMAL
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
}`,Wv=`#define NORMAL
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
}`,Xv=`#define PHONG
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
}`,qv=`#define PHONG
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
}`,Yv=`#define STANDARD
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
}`,Kv=`#define STANDARD
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
}`,Zv=`#define TOON
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
}`,$v=`#define TOON
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
}`,Jv=`uniform float size;
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
}`,jv=`uniform vec3 diffuse;
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
}`,Qv=`#include <common>
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
}`,eM=`uniform vec3 color;
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
}`,tM=`uniform float rotation;
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
}`,nM=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:S_,alphahash_pars_fragment:w_,alphamap_fragment:A_,alphamap_pars_fragment:T_,alphatest_fragment:E_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:I_,batching_pars_vertex:P_,batching_vertex:L_,begin_vertex:N_,beginnormal_vertex:D_,bsdfs:U_,iridescence_fragment:F_,bumpmap_pars_fragment:O_,clipping_planes_fragment:B_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:V_,color_fragment:G_,color_pars_fragment:H_,color_pars_vertex:W_,color_vertex:X_,common:q_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:K_,displacementmap_pars_vertex:Z_,displacementmap_vertex:$_,emissivemap_fragment:J_,emissivemap_pars_fragment:j_,colorspace_fragment:Q_,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:sy,envmap_physical_pars_fragment:my,envmap_vertex:ry,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:cy,fog_pars_fragment:ly,gradientmap_pars_fragment:hy,lightmap_pars_fragment:uy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:fy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:xy,lights_phong_fragment:_y,lights_phong_pars_fragment:yy,lights_physical_fragment:vy,lights_physical_pars_fragment:My,lights_fragment_begin:by,lights_fragment_maps:Sy,lights_fragment_end:wy,lightprobes_pars_fragment:Ay,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ey,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Ry,map_fragment:Iy,map_pars_fragment:Py,map_particle_fragment:Ly,map_particle_pars_fragment:Ny,metalnessmap_fragment:Dy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Fy,morphcolor_vertex:Oy,morphnormal_vertex:By,morphtarget_pars_vertex:zy,morphtarget_vertex:ky,normal_fragment_begin:Vy,normal_fragment_maps:Gy,normal_pars_fragment:Hy,normal_pars_vertex:Wy,normal_vertex:Xy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:Ky,clearcoat_pars_fragment:Zy,iridescence_pars_fragment:$y,opaque_fragment:Jy,packing:jy,premultiplied_alpha_fragment:Qy,project_vertex:ev,dithering_fragment:tv,dithering_pars_fragment:nv,roughnessmap_fragment:iv,roughnessmap_pars_fragment:sv,shadowmap_pars_fragment:rv,shadowmap_pars_vertex:ov,shadowmap_vertex:av,shadowmask_pars_fragment:cv,skinbase_vertex:lv,skinning_pars_vertex:hv,skinning_vertex:uv,skinnormal_vertex:dv,specularmap_fragment:fv,specularmap_pars_fragment:pv,tonemapping_fragment:mv,tonemapping_pars_fragment:gv,transmission_fragment:xv,transmission_pars_fragment:_v,uv_pars_fragment:yv,uv_pars_vertex:vv,uv_vertex:Mv,worldpos_vertex:bv,background_vert:Sv,background_frag:wv,backgroundCube_vert:Av,backgroundCube_frag:Tv,cube_vert:Ev,cube_frag:Cv,depth_vert:Rv,depth_frag:Iv,distance_vert:Pv,distance_frag:Lv,equirect_vert:Nv,equirect_frag:Dv,linedashed_vert:Uv,linedashed_frag:Fv,meshbasic_vert:Ov,meshbasic_frag:Bv,meshlambert_vert:zv,meshlambert_frag:kv,meshmatcap_vert:Vv,meshmatcap_frag:Gv,meshnormal_vert:Hv,meshnormal_frag:Wv,meshphong_vert:Xv,meshphong_frag:qv,meshphysical_vert:Yv,meshphysical_frag:Kv,meshtoon_vert:Zv,meshtoon_frag:$v,points_vert:Jv,points_frag:jv,shadow_vert:Qv,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},_e={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Gi={basic:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:wn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:wn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new be(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:wn([_e.points,_e.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:wn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:wn([_e.common,_e.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:wn([_e.sprite,_e.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distance:{uniforms:wn([_e.common,_e.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distance_vert,fragmentShader:Ie.distance_frag},shadow:{uniforms:wn([_e.lights,_e.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Gi.physical={uniforms:wn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};var oh={r:0,b:0,g:0},iM=new Re,jm=new $e;jm.set(-1,0,0,0,1,0,0,0,1);function sM(i,e,t,n,s,r){let o=new be(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let x=b.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(b){let w=!1,x=f(b);x===null?p(o,a):x&&x.isColor&&(p(x,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===Ra)?(l===void 0&&(l=new ze(new pn(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:fr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jm),l.material.toneMapped=Je.getTransfer(x.colorSpace)!==vt,(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ze(new mi(2,2),new Ln({name:"BackgroundMaterial",uniforms:fr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(oh,nd(i)),t.buffers.color.setClear(oh.r,oh.g,oh.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:_,dispose:m}}function rM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(R,L,k,Y,B){let F=!1,z=u(R,Y,k,L);r!==z&&(r=z,l(r.object)),F=f(R,Y,k,B),F&&g(R,Y,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,x(R,L,k,Y),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function h(R){return i.deleteVertexArray(R)}function u(R,L,k,Y){let B=Y.wireframe===!0,F=n[L.id];F===void 0&&(F={},n[L.id]=F);let z=R.isInstancedMesh===!0?R.id:0,K=F[z];K===void 0&&(K={},F[z]=K);let ee=K[k.id];ee===void 0&&(ee={},K[k.id]=ee);let ie=ee[B];return ie===void 0&&(ie=d(c()),ee[B]=ie),ie}function d(R){let L=[],k=[],Y=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,Y[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:Y,object:R,attributes:{},index:null}}function f(R,L,k,Y){let B=r.attributes,F=L.attributes,z=0,K=k.getAttributes();for(let ee in K)if(K[ee].location>=0){let re=B[ee],fe=F[ee];if(fe===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),re===void 0||re.attribute!==fe||fe&&re.data!==fe.data)return!0;z++}return r.attributesNum!==z||r.index!==Y}function g(R,L,k,Y){let B={},F=L.attributes,z=0,K=k.getAttributes();for(let ee in K)if(K[ee].location>=0){let re=F[ee];re===void 0&&(ee==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),ee==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));let fe={};fe.attribute=re,re&&re.data&&(fe.data=re.data),B[ee]=fe,z++}r.attributes=B,r.attributesNum=z,r.index=Y}function _(){let R=r.newAttributes;for(let L=0,k=R.length;L<k;L++)R[L]=0}function p(R){m(R,0)}function m(R,L){let k=r.newAttributes,Y=r.enabledAttributes,B=r.attributeDivisors;k[R]=1,Y[R]===0&&(i.enableVertexAttribArray(R),Y[R]=1),B[R]!==L&&(i.vertexAttribDivisor(R,L),B[R]=L)}function b(){let R=r.newAttributes,L=r.enabledAttributes;for(let k=0,Y=L.length;k<Y;k++)L[k]!==R[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function w(R,L,k,Y,B,F,z){z===!0?i.vertexAttribIPointer(R,L,k,B,F):i.vertexAttribPointer(R,L,k,Y,B,F)}function x(R,L,k,Y){_();let B=Y.attributes,F=k.getAttributes(),z=L.defaultAttributeValues;for(let K in F){let ee=F[K];if(ee.location>=0){let ie=B[K];if(ie===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ie=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ie=R.instanceColor)),ie!==void 0){let re=ie.normalized,fe=ie.itemSize,We=e.get(ie);if(We===void 0)continue;let pt=We.buffer,Qe=We.type,J=We.bytesPerElement,ae=Qe===i.INT||Qe===i.UNSIGNED_INT||ie.gpuType===lo;if(ie.isInterleavedBufferAttribute){let se=ie.data,ke=se.stride,Ke=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ee.locationSize;Oe++)m(ee.location+Oe,se.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<ee.locationSize;Oe++)p(ee.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Oe=0;Oe<ee.locationSize;Oe++)w(ee.location+Oe,fe/ee.locationSize,Qe,re,ke*J,(Ke+fe/ee.locationSize*Oe)*J,ae)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)m(ee.location+se,ie.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<ee.locationSize;se++)p(ee.location+se);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let se=0;se<ee.locationSize;se++)w(ee.location+se,fe/ee.locationSize,Qe,re,fe*J,fe/ee.locationSize*se*J,ae)}}else if(z!==void 0){let re=z[K];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(ee.location,re);break;case 3:i.vertexAttrib3fv(ee.location,re);break;case 4:i.vertexAttrib4fv(ee.location,re);break;default:i.vertexAttrib1fv(ee.location,re)}}}}b()}function A(){T();for(let R in n){let L=n[R];for(let k in L){let Y=L[k];for(let B in Y){let F=Y[B];for(let z in F)h(F[z].object),delete F[z];delete Y[B]}}delete n[R]}}function M(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let k in L){let Y=L[k];for(let B in Y){let F=Y[B];for(let z in F)h(F[z].object),delete F[z];delete Y[B]}}delete n[R.id]}function E(R){for(let L in n){let k=n[L];for(let Y in k){let B=k[Y];if(B[R.id]===void 0)continue;let F=B[R.id];for(let z in F)h(F[z].object),delete F[z];delete B[R.id]}}}function y(R){for(let L in n){let k=n[L],Y=R.isInstancedMesh===!0?R.id:0,B=k[Y];if(B!==void 0){for(let F in B){let z=B[F];for(let K in z)h(z[K].object),delete z[K];delete B[F]}delete k[Y],Object.keys(k).length===0&&delete n[L]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function oM(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function aM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Nn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Gn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yn&&!y)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:A,samples:M}}function cM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ei,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,w=b*4,x=m.clippingState||null;c.value=x,x=h(g,d,w,f);for(let A=0;A!==w;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=f;w!==_;++w,x+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var ks=4,Rm=[.125,.215,.35,.446,.526,.582],pr=20,lM=256,za=new Fs,Im=new be,od=null,ad=0,cd=0,ld=!1,hM=new C,Vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=hM}=r;od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ad,cd),this._renderer.xr.enabled=ld,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:zi,format:Nn,colorSpace:In,depthBuffer:!1},s=Pm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uM(r)),this._blurMaterial=fM(r,e,t),this._ggxMaterial=dM(r,e,t)}return s}_compileMaterial(e){let t=new ze(new It,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,s,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Im),u.toneMapping=gi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new pn,new Ht({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(Im),m=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let A=this._cubeSize;go(s,x*A,w>2?A:0,A,A),u.setRenderTarget(s),m&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Os||e.mapping===ur;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;go(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-ks?n-g+ks:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,go(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,za),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,go(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,za)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ge("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pr-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):pr;p>pr&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pr}`);let m=[],b=0;for(let E=0;E<pr;++E){let y=E/_,T=Math.exp(-y*y/2);m.push(T),E===0?b+=T:E<p&&(b+=2*T)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let x=this._sizeLods[s],A=3*x*(s>w-ks?s-w+ks:0),M=4*(this._cubeSize-x);go(t,A,M,3*x,2*x),c.setRenderTarget(t),c.render(u,za)}};function uM(i){let e=[],t=[],n=[],s=i,r=i-ks+1+Rm.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ks?c=Rm[o-i+ks-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),w=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let M=0;M<f;M++){let E=M%3*2/3-1,y=M>2?0:-1,T=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];b.set(T,_*g*M),w.set(d,p*g*M);let P=[M,M,M,M,M,M];x.set(P,m*g*M)}let A=new It;A.setAttribute("position",new $t(b,_)),A.setAttribute("uv",new $t(w,p)),A.setAttribute("faceIndex",new $t(x,m)),n.push(new ze(A,null)),s>ks&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Pm(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function go(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dM(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function fM(i,e,t){let n=new Float32Array(pr),s=new C(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Lm(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lh(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Nm(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lh(){return`

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
	`}var ch=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Bi});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=jt),new ml(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function pM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ml||f===bl)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new ch(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===Ml||f===bl,_=f===Os||f===ur;if(g||_){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Vs(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let b=d.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Vs(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Ml?d.mapping=Os:f===bl&&(d.mapping=ur),d}function c(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function mM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function gM(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let w=0,x=b.length;w<x;w+=3){let A=b[w+0],M=b[w+1],E=b[w+2];d.push(A,M,M,E,E,A)}}else{let b=g.array;_=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let A=w+0,M=w+1,E=w+2;d.push(A,M,M,E,E,A)}}let p=new(g.count>=65535?oa:ra)(d,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function xM(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function _M(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ge("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yM(i,e,t){let n=new WeakMap,s=new At;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let x=a.attributes.position.count*w,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*A*4*u),E=new ia(M,x,A,u);E.type=yn,E.needsUpdate=!0;let y=w*4;for(let P=0;P<u;P++){let R=p[P],L=m[P],k=b[P],Y=x*A*4*P;for(let B=0;B<R.count;B++){let F=B*y;f===!0&&(s.fromBufferAttribute(R,B),M[Y+F+0]=s.x,M[Y+F+1]=s.y,M[Y+F+2]=s.z,M[Y+F+3]=0),g===!0&&(s.fromBufferAttribute(L,B),M[Y+F+4]=s.x,M[Y+F+5]=s.y,M[Y+F+6]=s.z,M[Y+F+7]=0),_===!0&&(s.fromBufferAttribute(k,B),M[Y+F+8]=s.x,M[Y+F+9]=s.y,M[Y+F+10]=s.z,M[Y+F+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new qe(x,A)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vM(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var MM={[ku]:"LINEAR_TONE_MAPPING",[Vu]:"REINHARD_TONE_MAPPING",[Gu]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[Wu]:"AGX_TONE_MAPPING",[Xu]:"NEUTRAL_TONE_MAPPING",[Hu]:"CUSTOM_TONE_MAPPING"};function bM(i,e,t,n,s,r){let o=new _n(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new hs(e,t):void 0}),a=new _n(e,t,{type:zi,depthBuffer:!1,stencilBuffer:!1}),c=new It;c.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let l=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ze(c,l),u=new Fs(-1,1,1,-1,0,1),d=null,f=null,g=!1,_,p=null,m=[],b=!1;this.setSize=function(w,x){o.setSize(w,x),a.setSize(w,x);for(let A=0;A<m.length;A++){let M=m[A];M.setSize&&M.setSize(w,x)}},this.setEffects=function(w){m=w,b=m.length>0&&m[0].isRenderPass===!0;let x=o.width,A=o.height;for(let M=0;M<m.length;M++){let E=m[M];E.setSize&&E.setSize(x,A)}},this.begin=function(w,x){if(g||w.toneMapping===gi&&m.length===0)return!1;if(p=x,x!==null){let A=x.width,M=x.height;(o.width!==A||o.height!==M)&&this.setSize(A,M)}return b===!1&&w.setRenderTarget(o),_=w.toneMapping,w.toneMapping=gi,!0},this.hasRenderPass=function(){return b},this.end=function(w,x){w.toneMapping=_,g=!0;let A=o,M=a;for(let E=0;E<m.length;E++){let y=m[E];if(y.enabled!==!1&&(y.render(w,M,A,x),y.needsSwap!==!1)){let T=A;A=M,M=T}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,l.defines={},Je.getTransfer(d)===vt&&(l.defines.SRGB_TRANSFER="");let E=MM[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var Qm=new on,dd=new hs(1,1),e0=new ia,t0=new nl,n0=new da,Dm=[],Um=[],Fm=new Float32Array(16),Om=new Float32Array(9),Bm=new Float32Array(4);function yo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dm[s];if(r===void 0&&(r=new Float32Array(s),Dm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hh(i,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function SM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function EM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Bm.set(n),i.uniformMatrix2fv(this.addr,!1,Bm),ln(t,n)}}function CM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Om.set(n),i.uniformMatrix3fv(this.addr,!1,Om),ln(t,n)}}function RM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Fm.set(n),i.uniformMatrix4fv(this.addr,!1,Fm),ln(t,n)}}function IM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function PM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function DM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function OM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function BM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dd.compareFunction=t.isReversedDepthBuffer()?rh:sh,r=dd):r=Qm,t.setTexture2D(e||r,s)}function zM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||t0,s)}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||n0,s)}function VM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||e0,s)}function GM(i){switch(i){case 5126:return SM;case 35664:return wM;case 35665:return AM;case 35666:return TM;case 35674:return EM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return IM;case 35667:case 35671:return PM;case 35668:case 35672:return LM;case 35669:case 35673:return NM;case 5125:return DM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}function HM(i,e){i.uniform1fv(this.addr,e)}function WM(i,e){let t=yo(e,this.size,2);i.uniform2fv(this.addr,t)}function XM(i,e){let t=yo(e,this.size,3);i.uniform3fv(this.addr,t)}function qM(i,e){let t=yo(e,this.size,4);i.uniform4fv(this.addr,t)}function YM(i,e){let t=yo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function KM(i,e){let t=yo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ZM(i,e){let t=yo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $M(i,e){i.uniform1iv(this.addr,e)}function JM(i,e){i.uniform2iv(this.addr,e)}function jM(i,e){i.uniform3iv(this.addr,e)}function QM(i,e){i.uniform4iv(this.addr,e)}function eb(i,e){i.uniform1uiv(this.addr,e)}function tb(i,e){i.uniform2uiv(this.addr,e)}function nb(i,e){i.uniform3uiv(this.addr,e)}function ib(i,e){i.uniform4uiv(this.addr,e)}function sb(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=dd:o=Qm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function rb(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||t0,r[o])}function ob(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||n0,r[o])}function ab(i,e,t){let n=this.cache,s=e.length,r=hh(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||e0,r[o])}function cb(i){switch(i){case 5126:return HM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return KM;case 35676:return ZM;case 5124:case 35670:return $M;case 35667:case 35671:return JM;case 35668:case 35672:return jM;case 35669:case 35673:return QM;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return ab}}var fd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}},pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cb(t.type)}},md=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},hd=/(\w+)(\])?(\[|\.)?/g;function zm(i,e){i.seq.push(e),i.map[e.id]=e}function lb(i,e,t){let n=i.name,s=n.length;for(hd.lastIndex=0;;){let r=hd.exec(n),o=hd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zm(t,l===void 0?new fd(a,i,e):new pd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new md(a),zm(t,u)),t=u}}}var xo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);lb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function km(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var hb=37297,ub=0;function db(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Vm=new $e;function fb(i){Je._getMatrix(Vm,Je.workingColorSpace,i);let e=`mat3( ${Vm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case ta:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+db(i.getShaderSource(e),a)}else return r}function pb(i,e){let t=fb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mb={[ku]:"Linear",[Vu]:"Reinhard",[Gu]:"Cineon",[Ca]:"ACESFilmic",[Wu]:"AgX",[Xu]:"Neutral",[Hu]:"Custom"};function gb(i,e){let t=mb[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ah=new C;function xb(){Je.getLuminanceCoefficients(ah);let i=ah.x.toFixed(4),e=ah.y.toFixed(4),t=ah.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function yb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Va(i){return i!==""}function Hm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(i){return i.replace(Mb,Sb)}var bb=new Map;function Sb(i,e){let t=Ie[e];if(t===void 0){let n=bb.get(e);if(n!==void 0)t=Ie[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gd(t)}var wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(i){return i.replace(wb,Ab)}function Ab(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Tb={[Ta]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function Eb(i){return Tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cb={[Os]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function Rb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ib={[ur]:"ENVMAP_MODE_REFRACTION"};function Pb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ib[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Lb={[yl]:"ENVMAP_BLENDING_MULTIPLY",[hm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function Nb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lb[i.combine]||"ENVMAP_BLENDING_NONE"}function Db(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ub(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Eb(t),l=Rb(t),h=Pb(t),u=Nb(t),d=Db(t),f=_b(t),g=yb(r),_=s.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Va).join(`
`),m.length>0&&(m+=`
`)):(p=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),m=[qm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?Ie.tonemapping_pars_fragment:"",t.toneMapping!==gi?gb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,pb("linearToOutputTexel",t.outputColorSpace),xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Va).join(`
`)),o=gd(o),o=Hm(o,t),o=Wm(o,t),a=gd(a),a=Hm(a,t),a=Wm(a,t),o=Xm(o),a=Xm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+p+o,x=b+m+a,A=km(s,s.VERTEX_SHADER,w),M=km(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(R){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(M)||"",B=L.trim(),F=k.trim(),z=Y.trim(),K=!0,ee=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,M);else{let ie=Gm(s,A,"vertex"),re=Gm(s,M,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+ie+`
`+re)}else B!==""?De("WebGLProgram: Program Info Log:",B):(F===""||z==="")&&(ee=!1);ee&&(R.diagnostics={runnable:K,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(A),s.deleteShader(M),y=new xo(s,_),T=vb(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,hb)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}var Fb=0,xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _d(e),t.set(e,n)),n}},_d=class{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}};function Ob(i){return i===ki||i===Da||i===Ua}function Bb(i,e,t,n,s,r){let o=new jr,a=new xd,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,P,R,L,k){let Y=R.fog,B=L.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?R.environment:null,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||F,z),ee=K&&K.mapping===Ra?K.image.height:null,ie=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,fe=re!==void 0?re.length:0,We=0;B.morphAttributes.position!==void 0&&(We=1),B.morphAttributes.normal!==void 0&&(We=2),B.morphAttributes.color!==void 0&&(We=3);let pt,Qe,J,ae;if(ie){let Ae=Gi[ie];pt=Ae.vertexShader,Qe=Ae.fragmentShader}else{pt=y.vertexShader,Qe=y.fragmentShader;let Ae=a.getVertexShaderStage(y),Pt=a.getFragmentShaderStage(y);a.update(y,Ae,Pt),J=Ae.id,ae=Pt.id}let se=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),Ke=L.isInstancedMesh===!0,Oe=L.isBatchedMesh===!0,Dt=!!y.map,je=!!y.matcap,Mt=!!K,dt=!!y.aoMap,ht=!!y.lightMap,qt=!!y.bumpMap&&y.wireframe===!1,Zt=!!y.normalMap,zt=!!y.displacementMap,en=!!y.emissiveMap,Ut=!!y.metalnessMap,at=!!y.roughnessMap,O=y.anisotropy>0,gn=y.clearcoat>0,mt=y.dispersion>0,I=y.iridescence>0,v=y.sheen>0,V=y.transmission>0,X=O&&!!y.anisotropyMap,q=gn&&!!y.clearcoatMap,ce=gn&&!!y.clearcoatNormalMap,he=gn&&!!y.clearcoatRoughnessMap,Z=I&&!!y.iridescenceMap,Q=I&&!!y.iridescenceThicknessMap,pe=v&&!!y.sheenColorMap,Pe=v&&!!y.sheenRoughnessMap,ue=!!y.specularMap,de=!!y.specularColorMap,ve=!!y.specularIntensityMap,Fe=V&&!!y.transmissionMap,He=V&&!!y.thicknessMap,N=!!y.gradientMap,le=!!y.alphaMap,j=y.alphaTest>0,ne=!!y.alphaHash,oe=!!y.extensions,$=gi;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&($=i.toneMapping);let Ce={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:pt,fragmentShader:Qe,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&L._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&L.instanceColor!==null,instancingMorph:Ke&&L.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Dt,matcap:je,envMap:Mt,envMapMode:Mt&&K.mapping,envMapCubeUVHeight:ee,aoMap:dt,lightMap:ht,bumpMap:qt,normalMap:Zt,displacementMap:zt,emissiveMap:en,normalMapObjectSpace:Zt&&y.normalMapType===mm,normalMapTangentSpace:Zt&&y.normalMapType===Ba,packedNormalMap:Zt&&y.normalMapType===Ba&&Ob(y.normalMap.format),metalnessMap:Ut,roughnessMap:at,anisotropy:O,anisotropyMap:X,clearcoat:gn,clearcoatMap:q,clearcoatNormalMap:ce,clearcoatRoughnessMap:he,dispersion:mt,iridescence:I,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:v,sheenColorMap:pe,sheenRoughnessMap:Pe,specularMap:ue,specularColorMap:de,specularIntensityMap:ve,transmission:V,transmissionMap:Fe,thicknessMap:He,gradientMap:N,opaque:y.transparent===!1&&y.blending===ir&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:j,alphaHash:ne,combine:y.combine,mapUv:Dt&&g(y.map.channel),aoMapUv:dt&&g(y.aoMap.channel),lightMapUv:ht&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:Zt&&g(y.normalMap.channel),displacementMapUv:zt&&g(y.displacementMap.channel),emissiveMapUv:en&&g(y.emissiveMap.channel),metalnessMapUv:Ut&&g(y.metalnessMap.channel),roughnessMapUv:at&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:q&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(y.sheenRoughnessMap.channel),specularMapUv:ue&&g(y.specularMap.channel),specularColorMapUv:de&&g(y.specularColorMap.channel),specularIntensityMapUv:ve&&g(y.specularIntensityMap.channel),transmissionMapUv:Fe&&g(y.transmissionMap.channel),thicknessMapUv:He&&g(y.thicknessMap.channel),alphaMapUv:le&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Zt||O),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Dt||le),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&Zt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ke,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:We,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:en&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(T,y),b(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let T=f[y.type],P;if(T){let R=Gi[T];P=Em.clone(R.uniforms)}else P=y.uniforms;return P}function x(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Ub(i,T,y,s),l.push(P),h.set(T,P)),P}function A(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:x,releaseProgram:A,releaseShaderCache:M,programs:l,dispose:E}}function zb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Km(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,p,m){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=o(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=p,b.group=m),e++,b}function c(d,f,g,_,p,m){let b=a(d,f,g,_,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function l(d,f,g,_,p,m){let b=a(d,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(d,f,g){t.length>1&&t.sort(d||kb),n.length>1&&n.sort(f||Ym),s.length>1&&s.sort(f||Ym),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function Vb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Km,i.set(n,[o])):s>=r.length?(o=new Km,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new be};break;case"SpotLight":t={position:new C,direction:new C,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Hb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Wb=0;function Xb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qb(i){let e=new Gb,t=Hb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new Re,o=new Re;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,w=0,x=0,A=0,M=0,E=0;l.sort(Xb);for(let T=0,P=l.length;T<P;T++){let R=l[T],L=R.color,k=R.intensity,Y=R.distance,B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ki?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=L.r*k,u+=L.g*k,d+=L.b*k;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],k);E++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let z=R.shadow,K=t.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.directionalShadow[f]=K,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=F,f++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(L).multiplyScalar(k),F.distance=Y,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[_]=F;let z=R.shadow;if(R.map&&(n.spotLightMap[A]=R.map,A++,z.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[_]=z.matrix,R.castShadow){let K=t.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=B,x++}_++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy(L).multiplyScalar(k),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=F,p++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let z=R.shadow,K=t.get(R);K.shadowIntensity=z.intensity,K.shadowBias=z.bias,K.shadowNormalBias=z.normalBias,K.shadowRadius=z.radius,K.shadowMapSize=z.mapSize,K.shadowCameraNear=z.camera.near,K.shadowCameraFar=z.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,w++}n.point[g]=F,g++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(k),F.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[m]=F,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let y=n.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==b||y.numPointShadows!==w||y.numSpotShadows!==x||y.numSpotMaps!==A||y.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,y.directionalLength=f,y.pointLength=g,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=b,y.numPointShadows=w,y.numSpotShadows=x,y.numSpotMaps=A,y.numLightProbes=E,n.version=Wb++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let w=l[m];if(w.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(w.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(w.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function Zm(i){let e=new qb(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Yb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Zm(i),e.set(s,[a])):r>=o.length?(a=new Zm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
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
}`,$b=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Jb=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],$m=new Re,ka=new C,ud=new C;function jb(i,e,t){let n=new Ns,s=new qe,r=new qe,o=new At,a=new al,c=new cl,l={},h=t.maxTextureSize,u={[di]:Kt,[Kt]:di,[Sn]:Sn},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new It;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let m=this.type;this.render=function(M,E,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Xp&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ta);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Bi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=m!==this.type;k&&E.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(B=>B.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,B=M.length;Y<B;Y++){let F=M[Y],z=F.shadow;if(z===void 0){De("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let K=z.getFrameExtents();s.multiply(K),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,z.mapSize.y=r.y));let ee=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ee,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===oo){if(F.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new _n(s.x,s.y,{format:ki,type:zi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new hs(s.x,s.y,yn),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=Ri,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt}else F.isPointLight?(z.map=new ch(s.x),z.map.depthTexture=new rl(s.x,qn)):(z.map=new _n(s.x,s.y),z.map.depthTexture=new hs(s.x,s.y,qn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=Ri,this.type===Ta?(z.map.depthTexture.compareFunction=ee?rh:sh,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Jt,z.map.depthTexture.magFilter=Jt);z.camera.updateProjectionMatrix()}let ie=z.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ie;re++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,re),i.clear();else{re===0&&(i.setRenderTarget(z.map),i.clear());let fe=z.getViewport(re);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),L.viewport(o)}if(F.isPointLight){let fe=z.camera,We=z.matrix,pt=F.distance||fe.far;pt!==fe.far&&(fe.far=pt,fe.updateProjectionMatrix()),ka.setFromMatrixPosition(F.matrixWorld),fe.position.copy(ka),ud.copy(fe.position),ud.add($b[re]),fe.up.copy(Jb[re]),fe.lookAt(ud),fe.updateMatrixWorld(),We.makeTranslation(-ka.x,-ka.y,-ka.z),$m.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),z._frustum.setFromProjectionMatrix($m,fe.coordinateSystem,fe.reversedDepth)}else z.updateMatrices(F);n=z.getFrustum(),x(E,y,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===oo&&b(z,y),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,P,R)};function b(M,E){let y=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new _n(s.x,s.y,{format:ki,type:zi})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,y,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,y,f,_,null)}function w(M,E,y,T){let P=null,R=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)P=R;else if(P=y.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=P.uuid,k=E.uuid,Y=l[L];Y===void 0&&(Y={},l[L]=Y);let B=Y[k];B===void 0&&(B=P.clone(),Y[k]=B,E.addEventListener("dispose",A)),P=B}if(P.visible=E.visible,P.wireframe=E.wireframe,T===oo?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:u[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=y}return P}function x(M,E,y,T,P){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===oo)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let k=e.update(M),Y=M.material;if(Array.isArray(Y)){let B=k.groups;for(let F=0,z=B.length;F<z;F++){let K=B[F],ee=Y[K.materialIndex];if(ee&&ee.visible){let ie=w(M,ee,T,P);M.onBeforeShadow(i,M,E,y,k,ie,K),i.renderBufferDirect(y,null,k,ie,M,K),M.onAfterShadow(i,M,E,y,k,ie,K)}}}else if(Y.visible){let B=w(M,Y,T,P);M.onBeforeShadow(i,M,E,y,k,B,null),i.renderBufferDirect(y,null,k,B,M,null),M.onAfterShadow(i,M,E,y,k,B,null)}}let L=M.children;for(let k=0,Y=L.length;k<Y;k++)x(L[k],E,y,T,P)}function A(M){M.target.removeEventListener("dispose",A);for(let y in l){let T=l[y],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function Qb(i,e){function t(){let N=!1,le=new At,j=null,ne=new At(0,0,0,0);return{setMask:function(oe){j!==oe&&!N&&(i.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){N=oe},setClear:function(oe,$,Ce,Ae,Pt){Pt===!0&&(oe*=Ae,$*=Ae,Ce*=Ae),le.set(oe,$,Ce,Ae),ne.equals(le)===!1&&(i.clearColor(oe,$,Ce,Ae),ne.copy(le))},reset:function(){N=!1,j=null,ne.set(-1,0,0,0)}}}function n(){let N=!1,le=!1,j=null,ne=null,oe=null;return{setReversed:function($){if(le!==$){let Ce=e.get("EXT_clip_control");$?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=$;let Ae=oe;oe=null,this.setClear(Ae)}},getReversed:function(){return le},setTest:function($){$?se(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function($){j!==$&&!N&&(i.depthMask($),j=$)},setFunc:function($){if(le&&($=Am[$]),ne!==$){switch($){case qc:i.depthFunc(i.NEVER);break;case Yc:i.depthFunc(i.ALWAYS);break;case Kc:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case Zc:i.depthFunc(i.EQUAL);break;case $c:i.depthFunc(i.GEQUAL);break;case Jc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=$}},setLocked:function($){N=$},setClear:function($){oe!==$&&(oe=$,le&&($=1-$),i.clearDepth($))},reset:function(){N=!1,j=null,ne=null,oe=null,le=!1}}}function s(){let N=!1,le=null,j=null,ne=null,oe=null,$=null,Ce=null,Ae=null,Pt=null;return{setTest:function(Tt){N||(Tt?se(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Tt){le!==Tt&&!N&&(i.stencilMask(Tt),le=Tt)},setFunc:function(Tt,Zn,$n){(j!==Tt||ne!==Zn||oe!==$n)&&(i.stencilFunc(Tt,Zn,$n),j=Tt,ne=Zn,oe=$n)},setOp:function(Tt,Zn,$n){($!==Tt||Ce!==Zn||Ae!==$n)&&(i.stencilOp(Tt,Zn,$n),$=Tt,Ce=Zn,Ae=$n)},setLocked:function(Tt){N=Tt},setClear:function(Tt){Pt!==Tt&&(i.clearStencil(Tt),Pt=Tt)},reset:function(){N=!1,le=null,j=null,ne=null,oe=null,$=null,Ce=null,Ae=null,Pt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,A=null,M=null,E=null,y=new be(0,0,0),T=0,P=!1,R=null,L=null,k=null,Y=null,B=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),z=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),z=K>=2);let ie=null,re={},fe=i.getParameter(i.SCISSOR_BOX),We=i.getParameter(i.VIEWPORT),pt=new At().fromArray(fe),Qe=new At().fromArray(We);function J(N,le,j,ne){let oe=new Uint8Array(4),$=i.createTexture();i.bindTexture(N,$),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<j;Ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(le+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return $}let ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(i.DEPTH_TEST),o.setFunc(sr),qt(!1),Zt(Ou),se(i.CULL_FACE),dt(Bi);function se(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ke(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ke(N,le){return d[N]!==le?(i.bindFramebuffer(N,le),d[N]=le,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(N,le){let j=g,ne=!1;if(N){j=f.get(le),j===void 0&&(j=[],f.set(le,j));let oe=N.textures;if(j.length!==oe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let $=0,Ce=oe.length;$<Ce;$++)j[$]=i.COLOR_ATTACHMENT0+$;j.length=oe.length,ne=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ne=!0);ne&&i.drawBuffers(j)}function Dt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let je={[Ls]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};je[Zp]=i.MIN,je[$p]=i.MAX;let Mt={[Jp]:i.ZERO,[jp]:i.ONE,[Qp]:i.SRC_COLOR,[Wc]:i.SRC_ALPHA,[rm]:i.SRC_ALPHA_SATURATE,[im]:i.DST_COLOR,[tm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[Xc]:i.ONE_MINUS_SRC_ALPHA,[sm]:i.ONE_MINUS_DST_COLOR,[nm]:i.ONE_MINUS_DST_ALPHA,[om]:i.CONSTANT_COLOR,[am]:i.ONE_MINUS_CONSTANT_COLOR,[cm]:i.CONSTANT_ALPHA,[lm]:i.ONE_MINUS_CONSTANT_ALPHA};function dt(N,le,j,ne,oe,$,Ce,Ae,Pt,Tt){if(N===Bi){p===!0&&(ke(i.BLEND),p=!1);return}if(p===!1&&(se(i.BLEND),p=!0),N!==qp){if(N!==m||Tt!==P){if((b!==Ls||A!==Ls)&&(i.blendEquation(i.FUNC_ADD),b=Ls,A=Ls),Tt)switch(N){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case Bu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}w=null,x=null,M=null,E=null,y.set(0,0,0),T=0,m=N,P=Tt}return}oe=oe||le,$=$||j,Ce=Ce||ne,(le!==b||oe!==A)&&(i.blendEquationSeparate(je[le],je[oe]),b=le,A=oe),(j!==w||ne!==x||$!==M||Ce!==E)&&(i.blendFuncSeparate(Mt[j],Mt[ne],Mt[$],Mt[Ce]),w=j,x=ne,M=$,E=Ce),(Ae.equals(y)===!1||Pt!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Pt),y.copy(Ae),T=Pt),m=N,P=!1}function ht(N,le){N.side===Sn?ke(i.CULL_FACE):se(i.CULL_FACE);let j=N.side===Kt;le&&(j=!j),qt(j),N.blending===ir&&N.transparent===!1?dt(Bi):dt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ne=N.stencilWrite;a.setTest(ne),ne&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),en(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(N){R!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),R=N)}function Zt(N){N!==Hp?(se(i.CULL_FACE),N!==L&&(N===Ou?i.cullFace(i.BACK):N===Wp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),L=N}function zt(N){N!==k&&(z&&i.lineWidth(N),k=N)}function en(N,le,j){N?(se(i.POLYGON_OFFSET_FILL),(Y!==le||B!==j)&&(Y=le,B=j,o.getReversed()&&(le=-le),i.polygonOffset(le,j))):ke(i.POLYGON_OFFSET_FILL)}function Ut(N){N?se(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function at(N){N===void 0&&(N=i.TEXTURE0+F-1),ie!==N&&(i.activeTexture(N),ie=N)}function O(N,le,j){j===void 0&&(ie===null?j=i.TEXTURE0+F-1:j=ie);let ne=re[j];ne===void 0&&(ne={type:void 0,texture:void 0},re[j]=ne),(ne.type!==N||ne.texture!==le)&&(ie!==j&&(i.activeTexture(j),ie=j),i.bindTexture(N,le||ae[N]),ne.type=N,ne.texture=le)}function gn(){let N=re[ie];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function V(){try{i.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ce(){try{i.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function he(){try{i.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Z(){try{i.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function pe(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Pe(N,le){u[N]!==le&&(i.pixelStorei(N,le),u[N]=le)}function ue(N){pt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),pt.copy(N))}function de(N){Qe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Qe.copy(N))}function ve(N,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let ne=j.get(N);ne===void 0&&(ne=i.getUniformBlockIndex(le,N.name),j.set(N,ne))}function Fe(N,le){let ne=l.get(le).get(N);c.get(le)!==ne&&(i.uniformBlockBinding(le,ne,N.__bindingPointIndex),c.set(le,ne))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ie=null,re={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,A=null,M=null,E=null,y=new be(0,0,0),T=0,P=!1,R=null,L=null,k=null,Y=null,B=null,pt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:se,disable:ke,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:Dt,setBlending:dt,setMaterial:ht,setFlipSided:qt,setCullFace:Zt,setLineWidth:zt,setPolygonOffset:en,setScissorTest:Ut,activeTexture:at,bindTexture:O,unbindTexture:gn,compressedTexImage2D:mt,compressedTexImage3D:I,texImage2D:Z,texImage3D:Q,pixelStorei:Pe,getParameter:pe,updateUBOMapping:ve,uniformBlockBinding:Fe,texStorage2D:ce,texStorage3D:he,texSubImage2D:v,texSubImage3D:V,compressedTexSubImage2D:X,compressedTexSubImage3D:q,scissor:ue,viewport:de,reset:He}}function eS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,v){return g?new OffscreenCanvas(I,v):Zr("canvas")}function p(I,v,V){let X=1,q=mt(I);if((q.width>V||q.height>V)&&(X=V/Math.max(q.width,q.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ce=Math.floor(X*q.width),he=Math.floor(X*q.height);d===void 0&&(d=_(ce,he));let Z=v?_(ce,he):d;return Z.width=ce,Z.height=he,Z.getContext("2d").drawImage(I,0,0,ce,he),De("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ce+"x"+he+")."),Z}else return"data"in I&&De("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),I;return I}function m(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function w(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(I,v,V,X,q,ce=!1){if(I!==null){if(i[I]!==void 0)return i[I];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he;X&&(he=e.get("EXT_texture_norm16"),he||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=v;if(v===i.RED&&(V===i.FLOAT&&(Z=i.R32F),V===i.HALF_FLOAT&&(Z=i.R16F),V===i.UNSIGNED_BYTE&&(Z=i.R8),V===i.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),V===i.SHORT&&he&&(Z=he.R16_SNORM_EXT)),v===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.R8UI),V===i.UNSIGNED_SHORT&&(Z=i.R16UI),V===i.UNSIGNED_INT&&(Z=i.R32UI),V===i.BYTE&&(Z=i.R8I),V===i.SHORT&&(Z=i.R16I),V===i.INT&&(Z=i.R32I)),v===i.RG&&(V===i.FLOAT&&(Z=i.RG32F),V===i.HALF_FLOAT&&(Z=i.RG16F),V===i.UNSIGNED_BYTE&&(Z=i.RG8),V===i.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),V===i.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RG8UI),V===i.UNSIGNED_SHORT&&(Z=i.RG16UI),V===i.UNSIGNED_INT&&(Z=i.RG32UI),V===i.BYTE&&(Z=i.RG8I),V===i.SHORT&&(Z=i.RG16I),V===i.INT&&(Z=i.RG32I)),v===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),V===i.UNSIGNED_INT&&(Z=i.RGB32UI),V===i.BYTE&&(Z=i.RGB8I),V===i.SHORT&&(Z=i.RGB16I),V===i.INT&&(Z=i.RGB32I)),v===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),V===i.UNSIGNED_INT&&(Z=i.RGBA32UI),V===i.BYTE&&(Z=i.RGBA8I),V===i.SHORT&&(Z=i.RGBA16I),V===i.INT&&(Z=i.RGBA32I)),v===i.RGB&&(V===i.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),V===i.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),v===i.RGBA){let Q=ce?ta:Je.getTransfer(q);V===i.FLOAT&&(Z=i.RGBA32F),V===i.HALF_FLOAT&&(Z=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Z=Q===vt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),V===i.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function A(I,v){let V;return I?v===null||v===qn||v===ho?V=i.DEPTH24_STENCIL8:v===yn?V=i.DEPTH32F_STENCIL8:v===co&&(V=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===qn||v===ho?V=i.DEPTH_COMPONENT24:v===yn?V=i.DEPTH_COMPONENT32F:v===co&&(V=i.DEPTH_COMPONENT16),V}function M(I,v){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Jt&&I.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function E(I){let v=I.target;v.removeEventListener("dispose",E),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(I){let v=I.target;v.removeEventListener("dispose",y),R(v)}function T(I){let v=n.get(I);if(v.__webglInit===void 0)return;let V=I.source,X=f.get(V);if(X){let q=X[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&P(I),Object.keys(X).length===0&&f.delete(V)}n.remove(I)}function P(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let V=I.source,X=f.get(V);delete X[v.__cacheKey],o.memory.textures--}function R(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let q=0;q<v.__webglFramebuffer[X].length;q++)i.deleteFramebuffer(v.__webglFramebuffer[X][q]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=I.textures;for(let X=0,q=V.length;X<q;X++){let ce=n.get(V[X]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(V[X])}n.remove(I)}let L=0;function k(){L=0}function Y(){return L}function B(I){L=I}function F(){let I=L;return I>=s.maxTextures&&De("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function z(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function K(I,v){let V=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let X=I.image;if(X===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(V,I,v);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+v)}function ee(I,v){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){ke(V,I,v);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+v)}function ie(I,v){let V=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){ke(V,I,v);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+v)}function re(I,v){let V=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){Ke(V,I,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+v)}let fe={[Xn]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Yr]:i.MIRRORED_REPEAT},We={[Jt]:i.NEAREST,[Sl]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},pt={[gm]:i.NEVER,[Mm]:i.ALWAYS,[xm]:i.LESS,[sh]:i.LEQUAL,[_m]:i.EQUAL,[rh]:i.GEQUAL,[ym]:i.GREATER,[vm]:i.NOTEQUAL};function Qe(I,v){if(v.type===yn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===ao||v.magFilter===dr||v.magFilter===xi||v.minFilter===jt||v.minFilter===ao||v.minFilter===dr||v.minFilter===xi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,fe[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,fe[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,fe[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,We[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,We[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==dr&&v.minFilter!==xi||v.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(I,v){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",E));let X=v.source,q=f.get(X);q===void 0&&(q={},f.set(X,q));let ce=z(v);if(ce!==I.__cacheKey){q[ce]===void 0&&(q[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),q[ce].usedTimes++;let he=q[I.__cacheKey];he!==void 0&&(q[I.__cacheKey].usedTimes--,he.usedTimes===0&&P(v)),I.__cacheKey=ce,I.__webglTexture=q[ce].texture}return V}function ae(I,v,V){return Math.floor(Math.floor(I/V)/v)}function se(I,v,V,X){let ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,V,X,v.data);else{ce.sort((Pe,ue)=>Pe.start-ue.start);let he=0;for(let Pe=1;Pe<ce.length;Pe++){let ue=ce[he],de=ce[Pe],ve=ue.start+ue.count,Fe=ae(de.start,v.width,4),He=ae(ue.start,v.width,4);de.start<=ve+1&&Fe===He&&ae(de.start+de.count-1,v.width,4)===Fe?ue.count=Math.max(ue.count,de.start+de.count-ue.start):(++he,ce[he]=de)}ce.length=he+1;let Z=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Pe=0,ue=ce.length;Pe<ue;Pe++){let de=ce[Pe],ve=Math.floor(de.start/4),Fe=Math.ceil(de.count/4),He=ve%v.width,N=Math.floor(ve/v.width),le=Fe,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,He,N,le,j,V,X,v.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ke(I,v,V){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let q=J(I,v),ce=v.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+V);let he=n.get(ce);if(ce.version!==he.__version||q===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=Je.getPrimaries(Je.workingColorSpace),ne=v.colorSpace===ii?null:Je.getPrimaries(v.colorSpace),oe=v.colorSpace===ii||j===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Q=p(v.image,!1,s.maxTextureSize);Q=gn(v,Q);let pe=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type),ue=x(v.internalFormat,pe,Pe,v.normalized,v.colorSpace,v.isVideoTexture);Qe(X,v);let de,ve=v.mipmaps,Fe=v.isVideoTexture!==!0,He=he.__version===void 0||q===!0,N=ce.dataReady,le=M(v,Q);if(v.isDepthTexture)ue=A(v.format===Bs,v.type),He&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,ue,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,pe,Pe,null));else if(v.isDataTexture)if(ve.length>0){Fe&&He&&t.texStorage2D(i.TEXTURE_2D,le,ue,ve[0].width,ve[0].height);for(let j=0,ne=ve.length;j<ne;j++)de=ve[j],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,pe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,j,ue,de.width,de.height,0,pe,Pe,de.data);v.generateMipmaps=!1}else Fe?(He&&t.texStorage2D(i.TEXTURE_2D,le,ue,Q.width,Q.height),N&&se(v,Q,pe,Pe)):t.texImage2D(i.TEXTURE_2D,0,ue,Q.width,Q.height,0,pe,Pe,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,ve[0].width,ve[0].height,Q.depth);for(let j=0,ne=ve.length;j<ne;j++)if(de=ve[j],v.format!==Nn)if(pe!==null)if(Fe){if(N)if(v.layerUpdates.size>0){let oe=rd(de.width,de.height,v.format,v.type);for(let $ of v.layerUpdates){let Ce=de.data.subarray($*oe/de.data.BYTES_PER_ELEMENT,($+1)*oe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,$,de.width,de.height,1,pe,Ce)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,pe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ue,de.width,de.height,Q.depth,0,de.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,Q.depth,pe,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ue,de.width,de.height,Q.depth,0,pe,Pe,de.data)}else{Fe&&He&&t.texStorage2D(i.TEXTURE_2D,le,ue,ve[0].width,ve[0].height);for(let j=0,ne=ve.length;j<ne;j++)de=ve[j],v.format!==Nn?pe!==null?Fe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ue,de.width,de.height,0,de.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,pe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,j,ue,de.width,de.height,0,pe,Pe,de.data)}else if(v.isDataArrayTexture)if(Fe){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,ue,Q.width,Q.height,Q.depth),N)if(v.layerUpdates.size>0){let j=rd(Q.width,Q.height,v.format,v.type);for(let ne of v.layerUpdates){let oe=Q.data.subarray(ne*j/Q.data.BYTES_PER_ELEMENT,(ne+1)*j/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,Q.width,Q.height,1,pe,Pe,oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,pe,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,Q.width,Q.height,Q.depth,0,pe,Pe,Q.data);else if(v.isData3DTexture)Fe?(He&&t.texStorage3D(i.TEXTURE_3D,le,ue,Q.width,Q.height,Q.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,pe,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ue,Q.width,Q.height,Q.depth,0,pe,Pe,Q.data);else if(v.isFramebufferTexture){if(He)if(Fe)t.texStorage2D(i.TEXTURE_2D,le,ue,Q.width,Q.height);else{let j=Q.width,ne=Q.height;for(let oe=0;oe<le;oe++)t.texImage2D(i.TEXTURE_2D,oe,ue,j,ne,0,pe,Pe,null),j>>=1,ne>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),u.add(v),j.onpaint=ne=>{let oe=ne.changedElements;for(let $ of u)oe.includes($.image)&&($.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let oe=i.RGBA,$=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,oe,$,Ce,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Fe&&He){let j=mt(ve[0]);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}for(let j=0,ne=ve.length;j<ne;j++)de=ve[j],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,pe,Pe,de):t.texImage2D(i.TEXTURE_2D,j,ue,pe,Pe,de);v.generateMipmaps=!1}else if(Fe){if(He){let j=mt(Q);t.texStorage2D(i.TEXTURE_2D,le,ue,j.width,j.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,ue,pe,Pe,Q);m(v)&&b(X),he.__version=ce.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Ke(I,v,V){if(v.image.length!==6)return;let X=J(I,v),q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+V);let ce=n.get(q);if(q.version!==ce.__version||X===!0){t.activeTexture(i.TEXTURE0+V);let he=Je.getPrimaries(Je.workingColorSpace),Z=v.colorSpace===ii?null:Je.getPrimaries(v.colorSpace),Q=v.colorSpace===ii||he===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Pe=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let $=0;$<6;$++)!pe&&!Pe?ue[$]=p(v.image[$],!0,s.maxCubemapSize):ue[$]=Pe?v.image[$].image:v.image[$],ue[$]=gn(v,ue[$]);let de=ue[0],ve=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),He=x(v.internalFormat,ve,Fe,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,le=ce.__version===void 0||X===!0,j=q.dataReady,ne=M(v,de);Qe(i.TEXTURE_CUBE_MAP,v);let oe;if(pe){N&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,He,de.width,de.height);for(let $=0;$<6;$++){oe=ue[$].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){let Ae=oe[Ce];v.format!==Nn?ve!==null?N?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ae.width,Ae.height,ve,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,He,Ae.width,Ae.height,0,Ae.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,0,0,Ae.width,Ae.height,ve,Fe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce,He,Ae.width,Ae.height,0,ve,Fe,Ae.data)}}}else{if(oe=v.mipmaps,N&&le){oe.length>0&&ne++;let $=mt(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ne,He,$.width,$.height)}for(let $=0;$<6;$++)if(Pe){N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ue[$].width,ue[$].height,ve,Fe,ue[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,ue[$].width,ue[$].height,0,ve,Fe,ue[$].data);for(let Ce=0;Ce<oe.length;Ce++){let Pt=oe[Ce].image[$].image;N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,Pt.width,Pt.height,ve,Fe,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,He,Pt.width,Pt.height,0,ve,Fe,Pt.data)}}else{N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ve,Fe,ue[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,He,ve,Fe,ue[$]);for(let Ce=0;Ce<oe.length;Ce++){let Ae=oe[Ce];N?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,0,0,ve,Fe,Ae.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ce+1,He,ve,Fe,Ae.image[$])}}}m(v)&&b(i.TEXTURE_CUBE_MAP),ce.__version=q.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Oe(I,v,V,X,q,ce){let he=r.convert(V.format,V.colorSpace),Z=r.convert(V.type),Q=x(V.internalFormat,he,Z,V.normalized,V.colorSpace),pe=n.get(v),Pe=n.get(V);if(Pe.__renderTarget=v,!pe.__hasExternalTextures){let ue=Math.max(1,v.width>>ce),de=Math.max(1,v.height>>ce);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ce,Q,ue,de,v.depth,0,he,Z,null):t.texImage2D(q,ce,Q,ue,de,0,he,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,q,Pe.__webglTexture,0,Ut(v)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,q,Pe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(I,v,V){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let X=v.depthTexture,q=X&&X.isDepthTexture?X.type:null,ce=A(v.stencilBuffer,q),he=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(v),ce,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(v),ce,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ce,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,I)}else{let X=v.textures;for(let q=0;q<X.length;q++){let ce=X[q],he=r.convert(ce.format,ce.colorSpace),Z=r.convert(ce.type),Q=x(ce.internalFormat,he,Z,ce.normalized,ce.colorSpace);at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(v),Q,v.width,v.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(v),Q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(I,v,V){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(v.depthTexture);if(q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(q.__webglInit===void 0&&(q.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v.depthTexture);let pe=r.convert(v.depthTexture.format),Pe=r.convert(v.depthTexture.type),ue;v.depthTexture.format===Ri?ue=i.DEPTH_COMPONENT24:v.depthTexture.format===Bs&&(ue=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ue,v.width,v.height,0,pe,Pe,null)}}else K(v.depthTexture,0);let ce=q.__webglTexture,he=Ut(v),Z=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,Q=v.depthTexture.format===Bs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ri)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,ce,0);else if(v.depthTexture.format===Bs)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(I){let v=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",q)};X.addEventListener("dispose",q),v.__depthDisposeCallback=q}v.__boundDepthTexture=X}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(V)for(let X=0;X<6;X++)je(v.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?je(v.__webglFramebuffer[0],I,0):je(v.__webglFramebuffer,I,0)}else if(V){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Dt(v.__webglDepthbuffer[X],I,!1);else{let q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ce)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Dt(v.__webglDepthbuffer,I,!1);else{let q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(I,v,V){let X=n.get(I);v!==void 0&&Oe(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Mt(I)}function ht(I){let v=I.texture,V=n.get(I),X=n.get(v);I.addEventListener("dispose",y);let q=I.textures,ce=I.isWebGLCubeRenderTarget===!0,he=q.length>1;if(he||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,o.memory.textures++),ce){V.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[Z]=[];for(let Q=0;Q<v.mipmaps.length;Q++)V.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else V.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let Z=0;Z<v.mipmaps.length;Z++)V.__webglFramebuffer[Z]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(he)for(let Z=0,Q=q.length;Z<Q;Z++){let pe=n.get(q[Z]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&at(I)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){let Q=q[Z];V.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Z]);let pe=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),ue=x(Q.internalFormat,pe,Pe,Q.normalized,Q.colorSpace,I.isXRRenderTarget===!0),de=Ut(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ue,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,V.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,v);for(let Z=0;Z<6;Z++)if(v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Oe(V.__webglFramebuffer[Z][Q],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Oe(V.__webglFramebuffer[Z],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(v)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let Z=0,Q=q.length;Z<Q;Z++){let pe=q[Z],Pe=n.get(pe),ue=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Pe.__webglTexture),Qe(ue,pe),Oe(V.__webglFramebuffer,I,pe,i.COLOR_ATTACHMENT0+Z,ue,0),m(pe)&&b(ue)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Qe(Z,v),v.mipmaps&&v.mipmaps.length>0)for(let Q=0;Q<v.mipmaps.length;Q++)Oe(V.__webglFramebuffer[Q],I,v,i.COLOR_ATTACHMENT0,Z,Q);else Oe(V.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,Z,0);m(v)&&b(Z),t.unbindTexture()}I.depthBuffer&&Mt(I)}function qt(I){let v=I.textures;for(let V=0,X=v.length;V<X;V++){let q=v[V];if(m(q)){let ce=w(I),he=n.get(q).__webglTexture;t.bindTexture(ce,he),b(ce),t.unbindTexture()}}}let Zt=[],zt=[];function en(I){if(I.samples>0){if(at(I)===!1){let v=I.textures,V=I.width,X=I.height,q=i.COLOR_BUFFER_BIT,ce=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(I),Z=v.length>1;if(Z)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let Q=I.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);let Pe=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,V,X,0,0,V,X,q,i.NEAREST),c===!0&&(Zt.length=0,zt.length=0,Zt.push(i.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Zt.push(ce),zt.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);let Pe=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ut(I){return Math.min(s.maxSamples,I.samples)}function at(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(I){let v=o.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function gn(I,v){let V=I.colorSpace,X=I.format,q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==In&&V!==ii&&(Je.getTransfer(V)===vt?(X!==Nn||q!==Gn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",V)),v}function mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.getTextureUnits=Y,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=re,this.rebindTextures=dt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Md(i,e){function t(n,s=ii){let r,o=Je.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$u)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return i.BYTE;if(n===Ku)return i.SHORT;if(n===co)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===zi)return i.HALF_FLOAT;if(n===Ju)return i.ALPHA;if(n===ju)return i.RGB;if(n===Nn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===zs)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===La||n===Na)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tl||n===El||n===Cl||n===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Pl||n===Ll||n===Nl||n===Dl||n===Da||n===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Il||n===Pl)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nl)return r.COMPRESSED_R11_EAC;if(n===Dl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Da)return r.COMPRESSED_RG11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Jl||n===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===eh||n===Ua||n===th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var tS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nS=`
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

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:tS,fragmentShader:nS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vd=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new yd,m={},b=t.getContextAttributes(),w=null,x=null,A=[],M=[],E=new qe,y=null,T=new Vt;T.viewport=new At;let P=new Vt;P.viewport=new At;let R=[T,P],L=new gl,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=A[J];return ae===void 0&&(ae=new Qr,A[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=A[J];return ae===void 0&&(ae=new Qr,A[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=A[J];return ae===void 0&&(ae=new Qr,A[J]=ae),ae.getHandSpace()};function B(J){let ae=M.indexOf(J.inputSource);if(ae===-1)return;let se=A[ae];se!==void 0&&(se.update(J.inputSource,J.frame,l||o),se.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let J=0;J<A.length;J++){let ae=M[J];ae!==null&&(M[J]=null,A[J].disconnect(ae))}k=null,Y=null,p.reset();for(let J in m)delete m[J];e.setRenderTarget(w),f=null,d=null,u=null,s=null,x=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ke=null,Ke=null;b.depth&&(Ke=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?Bs:Ri,ke=b.stencil?ho:qn);let Oe={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _n(d.textureWidth,d.textureHeight,{format:Nn,type:Gn,depthTexture:new hs(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new _n(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(J){for(let ae=0;ae<J.removed.length;ae++){let se=J.removed[ae],ke=M.indexOf(se);ke>=0&&(M[ke]=null,A[ke].disconnect(se))}for(let ae=0;ae<J.added.length;ae++){let se=J.added[ae],ke=M.indexOf(se);if(ke===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=M.length){M.push(se),ke=Oe;break}else if(M[Oe]===null){M[Oe]=se,ke=Oe;break}if(ke===-1)break}let Ke=A[ke];Ke&&Ke.connect(se)}}let K=new C,ee=new C;function ie(J,ae,se){K.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);let ke=K.distanceTo(ee),Ke=ae.projectionMatrix.elements,Oe=se.projectionMatrix.elements,Dt=Ke[14]/(Ke[10]-1),je=Ke[14]/(Ke[10]+1),Mt=(Ke[9]+1)/Ke[5],dt=(Ke[9]-1)/Ke[5],ht=(Ke[8]-1)/Ke[0],qt=(Oe[8]+1)/Oe[0],Zt=Dt*ht,zt=Dt*qt,en=ke/(-ht+qt),Ut=en*-ht;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ut),J.translateZ(en),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ke[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let at=Dt+en,O=je+en,gn=Zt-Ut,mt=zt+(ke-Ut),I=Mt*je/O*at,v=dt*je/O*at;J.projectionMatrix.makePerspective(gn,mt,I,v,at,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ae=J.near,se=J.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(se=p.depthFar)),L.near=P.near=T.near=ae,L.far=P.far=T.far=se,(k!==L.near||Y!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),k=L.near,Y=L.far),L.layers.mask=J.layers.mask|6,T.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let ke=J.parent,Ke=L.cameras;re(L,ke);for(let Oe=0;Oe<Ke.length;Oe++)re(Ke[Oe],ke);Ke.length===2?ie(L,T,P):L.projectionMatrix.copy(T.projectionMatrix),fe(J,L,ke)};function fe(J,ae,se){se===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ar*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let We=null;function pt(J,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){let se=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ke=!1;se.length!==L.cameras.length&&(L.cameras.length=0,ke=!0);for(let je=0;je<se.length;je++){let Mt=se[je],dt=null;if(f!==null)dt=f.getViewport(Mt);else{let qt=u.getViewSubImage(d,Mt);dt=qt.viewport,je===0&&(e.setRenderTargetTextures(x,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(x))}let ht=R[je];ht===void 0&&(ht=new Vt,ht.layers.enable(je),ht.viewport=new At,R[je]=ht),ht.matrix.fromArray(Mt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Mt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),je===0&&(L.matrix.copy(ht.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ke===!0&&L.cameras.push(ht)}let Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let je=u.getDepthInformation(se[0]);je&&je.isValid&&je.texture&&p.init(je,s.renderState)}if(Ke&&Ke.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let je=0;je<se.length;je++){let Mt=se[je].camera;if(Mt){let dt=m[Mt];dt||(dt=new fa,m[Mt]=dt);let ht=u.getCameraImage(Mt);dt.sourceTexture=ht}}}}for(let se=0;se<A.length;se++){let ke=M[se],Ke=A[se];ke!==null&&Ke!==void 0&&Ke.update(ke,ae,l||o)}We&&We(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let Qe=new Jm;Qe.setAnimationLoop(pt),this.setAnimationLoop=function(J){We=J},this.dispose=function(){}}},iS=new Re,i0=new $e;i0.set(-1,0,0,0,1,0,0,0,1);function sS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,nd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Kt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Kt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,x=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(iS.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(i0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Kt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,A){let M=A.program;n.uniformBlockBinding(x,M)}function l(x,A){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",b));let E=A.program;n.updateUBOMapping(x,E);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let A=u();x.__bindingPointIndex=A;let M=i.createBuffer(),E=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let A=s[x.id],M=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,T=M.length;y<T;y++){let P=M[y];if(Array.isArray(P))for(let R=0,L=P.length;R<L;R++)f(P[R],y,R,E);else f(P,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,M,E){if(_(x,A,M,E)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let P=0;for(let R=0;R<T.length;R++){let L=T[R],k=m(L);g(L,x.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,A,M){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,M)}function _(x,A,M,E){let y=x.value,T=A+"_"+M;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{let P=E[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(x){let A=x.uniforms,M=0,E=16;for(let T=0,P=A.length;T<P;T++){let R=Array.isArray(A[T])?A[T]:[A[T]];for(let L=0,k=R.length;L<k;L++){let Y=R[L],B=Array.isArray(Y.value)?Y.value:[Y.value];for(let F=0,z=B.length;F<z;F++){let K=B[F],ee=m(K),ie=M%E,re=ie%ee.boundary,fe=ie+re;M+=re,fe!==0&&E-fe<ee.storage&&(M+=E-fe),Y.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=M,M+=ee.storage}}}let y=M%E;return y>0&&(M+=E-y),x.__size=M,x.__cache={},this}function m(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),A}function b(x){let A=x.target;A.removeEventListener("dispose",b);let M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var oS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function aS(){return Vi===null&&(Vi=new Li(oS,16,16,ki,zi),Vi.name="DFG_LUT",Vi.minFilter=jt,Vi.magFilter=jt,Vi.wrapS=ei,Vi.wrapT=ei,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var _o=class{constructor(e={}){let{canvas:t=bm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,p=new Set([po,fo,uo]),m=new Set([Gn,qn,co,ho,wl,Al]),b=new Uint32Array(4),w=new Int32Array(4),x=new C,A=null,M=null,E=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,R=!1,L=null,k=null,Y=null,B=null;this._outputColorSpace=Nt;let F=0,z=0,K=null,ee=-1,ie=null,re=new At,fe=new At,We=null,pt=new be(0),Qe=0,J=t.width,ae=t.height,se=1,ke=null,Ke=null,Oe=new At(0,0,J,ae),Dt=new At(0,0,J,ae),je=!1,Mt=new Ns,dt=!1,ht=!1,qt=new Re,Zt=new C,zt=new At,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function at(){return K===null?se:1}let O=n;function gn(S,U){return t.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",Tt,!1),t.addEventListener("webglcontextcreationerror",Zn,!1),O===null){let U="webgl2";if(O=gn(U,S),O===null)throw gn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ge("WebGLRenderer: "+S.message),S}let mt,I,v,V,X,q,ce,he,Z,Q,pe,Pe,ue,de,ve,Fe,He,N,le,j,ne,oe,$;function Ce(){mt=new mM(O),mt.init(),ne=new Md(O,mt),I=new aM(O,mt,e,ne),v=new Qb(O,mt),I.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),k=O.createFramebuffer(),Y=O.createFramebuffer(),B=O.createFramebuffer(),V=new _M(O),X=new zb,q=new eS(O,mt,v,X,I,ne,V),ce=new pM(P),he=new b_(O),oe=new rM(O,he),Z=new gM(O,he,V,oe),Q=new vM(O,Z,he,oe,V),N=new yM(O,I,q),ve=new cM(X),pe=new Bb(P,ce,mt,I,oe,ve),Pe=new sS(P,X),ue=new Vb,de=new Yb(mt),He=new sM(P,ce,v,Q,g,c),Fe=new jb(P,Q,I),$=new rS(O,V,I,v),le=new oM(O,mt,V),j=new xM(O,mt,V),V.programs=pe.programs,P.capabilities=I,P.extensions=mt,P.properties=X,P.renderLists=ue,P.shadowMap=Fe,P.state=v,P.info=V}Ce(),_!==Gn&&(T=new bM(_,t.width,t.height,a,s,r));let Ae=new vd(P,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=mt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=mt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(S){S!==void 0&&(se=S,this.setSize(J,ae,!1))},this.getSize=function(S){return S.set(J,ae)},this.setSize=function(S,U,W=!0){if(Ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,ae=U,t.width=Math.floor(S*se),t.height=Math.floor(U*se),W===!0&&(t.style.width=S+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(J*se,ae*se).floor()},this.setDrawingBufferSize=function(S,U,W){J=S,ae=U,se=W,t.width=Math.floor(S*W),t.height=Math.floor(U*W),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Gn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(re)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,U,W,G){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,U,W,G),v.viewport(re.copy(Oe).multiplyScalar(se).round())},this.getScissor=function(S){return S.copy(Dt)},this.setScissor=function(S,U,W,G){S.isVector4?Dt.set(S.x,S.y,S.z,S.w):Dt.set(S,U,W,G),v.scissor(fe.copy(Dt).multiplyScalar(se).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(S){v.setScissorTest(je=S)},this.setOpaqueSort=function(S){ke=S},this.setTransparentSort=function(S){Ke=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,W=!0){let G=0;if(S){let H=!1;if(K!==null){let ge=K.texture.format;H=p.has(ge)}if(H){let ge=K.texture.type,Se=m.has(ge),xe=He.getClearColor(),Ee=He.getClearAlpha(),Le=xe.r,Ye=xe.g,et=xe.b;Se?(b[0]=Le,b[1]=Ye,b[2]=et,b[3]=Ee,O.clearBufferuiv(O.COLOR,0,b)):(w[0]=Le,w[1]=Ye,w[2]=et,w[3]=Ee,O.clearBufferiv(O.COLOR,0,w))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",Tt,!1),t.removeEventListener("webglcontextcreationerror",Zn,!1),He.dispose(),ue.dispose(),de.dispose(),X.dispose(),ce.dispose(),Q.dispose(),oe.dispose(),$.dispose(),pe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ws),Ae.removeEventListener("sessionend",Qi),Jn.stop()};function Pt(S){S.preventDefault(),na("WebGLRenderer: Context Lost."),R=!0}function Tt(){na("WebGLRenderer: Context Restored."),R=!1;let S=V.autoReset,U=Fe.enabled,W=Fe.autoUpdate,G=Fe.needsUpdate,H=Fe.type;Ce(),V.autoReset=S,Fe.enabled=U,Fe.autoUpdate=W,Fe.needsUpdate=G,Fe.type=H}function Zn(S){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function $n(S){let U=S.target;U.removeEventListener("dispose",$n),jh(U)}function jh(S){fc(S),X.remove(S)}function fc(S){let U=X.get(S).programs;U!==void 0&&(U.forEach(function(W){pe.releaseProgram(W)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,W,G,H,ge){U===null&&(U=en);let Se=H.isMesh&&H.matrixWorld.determinantAffine()<0,xe=Vo(S,U,W,G,H);v.setMaterial(G,Se);let Ee=W.index,Le=1;if(G.wireframe===!0){if(Ee=Z.getWireframeAttribute(W),Ee===void 0)return;Le=2}let Ye=W.drawRange,et=W.attributes.position,Ne=Ye.start*Le,st=(Ye.start+Ye.count)*Le;ge!==null&&(Ne=Math.max(Ne,ge.start*Le),st=Math.min(st,(ge.start+ge.count)*Le)),Ee!==null?(Ne=Math.max(Ne,0),st=Math.min(st,Ee.count)):et!=null&&(Ne=Math.max(Ne,0),st=Math.min(st,et.count));let bt=st-Ne;if(bt<0||bt===1/0)return;oe.setup(H,G,xe,W,Ee);let Ft,gt=le;if(Ee!==null&&(Ft=he.get(Ee),gt=j,gt.setIndex(Ft)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*at()),gt.setMode(O.LINES)):gt.setMode(O.TRIANGLES);else if(H.isLine){let dn=G.linewidth;dn===void 0&&(dn=1),v.setLineWidth(dn*at()),H.isLineSegments?gt.setMode(O.LINES):H.isLineLoop?gt.setMode(O.LINE_LOOP):gt.setMode(O.LINE_STRIP)}else H.isPoints?gt.setMode(O.POINTS):H.isSprite&&gt.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))gt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let dn=H._multiDrawStarts,we=H._multiDrawCounts,xn=H._multiDrawCount,ct=Ee?he.get(Ee).bytesPerElement:1,Fn=X.get(G).currentProgram.getUniforms();for(let On=0;On<xn;On++)Fn.setValue(O,"_gl_DrawID",On),gt.render(dn[On]/ct,we[On])}else if(H.isInstancedMesh)gt.renderInstances(Ne,bt,H.count);else if(W.isInstancedBufferGeometry){let dn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,dn);gt.renderInstances(Ne,bt,we)}else gt.render(Ne,bt)};function ji(S,U,W){S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=Kt,S.needsUpdate=!0,Si(S,U,W),S.side=di,S.needsUpdate=!0,Si(S,U,W),S.side=Sn):Si(S,U,W)}this.compile=function(S,U,W=null){W===null&&(W=S),M=de.get(W),M.init(U),y.push(M),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),S!==W&&S.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(M.pushLight(H),H.castShadow&&M.pushShadow(H))}),M.setupLights();let G=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let xe=ge[Se];ji(xe,W,H),G.add(xe)}else ji(ge,W,H),G.add(ge)}),M=y.pop(),G},this.compileAsync=function(S,U,W=null){let G=this.compile(S,U,W);return new Promise(H=>{function ge(){if(G.forEach(function(Se){X.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){H(S);return}setTimeout(ge,10)}mt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let bi=null;function Ys(S){bi&&bi(S)}function ws(){Jn.stop()}function Qi(){Jn.start()}let Jn=new Jm;Jn.setAnimationLoop(Ys),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(S){bi=S,Ae.setAnimationLoop(S),S===null?Jn.stop():Jn.start()},Ae.addEventListener("sessionstart",ws),Ae.addEventListener("sessionend",Qi),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(S,U);let W=Ae.enabled===!0&&Ae.isPresenting===!0,G=T!==null&&(K===null||W)&&T.begin(P,K);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(U),U=Ae.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,U,K),M=de.get(S,y.length),M.init(U),M.state.textureUnits=q.getTextureUnits(),y.push(M),qt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Mt.setFromProjectionMatrix(qt,hi,U.reversedDepth),ht=this.localClippingEnabled,dt=ve.init(this.clippingPlanes,ht),A=ue.get(S,E.length),A.init(),E.push(A),Ae.enabled===!0&&Ae.isPresenting===!0){let Se=P.xr.getDepthSensingMesh();Se!==null&&Ks(Se,U,-1/0,P.sortObjects)}Ks(S,U,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(ke,Ke,U.reversedDepth),Ut=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Ut&&He.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&ve.beginShadows();let H=M.state.shadowsArray;if(Fe.render(H,S,U),dt===!0&&ve.endShadows(),(G&&T.hasRenderPass())===!1){let Se=A.opaque,xe=A.transmissive;if(M.setupLights(),U.isArrayCamera){let Ee=U.cameras;if(xe.length>0)for(let Le=0,Ye=Ee.length;Le<Ye;Le++){let et=Ee[Le];pc(Se,xe,S,et)}Ut&&He.render(S);for(let Le=0,Ye=Ee.length;Le<Ye;Le++){let et=Ee[Le];Bo(A,S,et,et.viewport)}}else xe.length>0&&pc(Se,xe,S,U),Ut&&He.render(S),Bo(A,S,U)}K!==null&&z===0&&(q.updateMultisampleRenderTarget(K),q.updateRenderTargetMipmap(K)),G&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,U),oe.resetDefaultState(),ee=-1,ie=null,y.pop(),y.length>0?(M=y[y.length-1],q.setTextureUnits(M.state.textureUnits),dt===!0&&ve.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,L!==null&&L.renderEnd()};function Ks(S,U,W,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Mt.intersectsSprite(S)){G&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(qt);let Se=Q.update(S),xe=S.material;xe.visible&&A.push(S,Se,xe,W,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Mt.intersectsObject(S))){let Se=Q.update(S),xe=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),zt.copy(Se.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(qt)),Array.isArray(xe)){let Ee=Se.groups;for(let Le=0,Ye=Ee.length;Le<Ye;Le++){let et=Ee[Le],Ne=xe[et.materialIndex];Ne&&Ne.visible&&A.push(S,Se,Ne,W,zt.z,et)}}else xe.visible&&A.push(S,Se,xe,W,zt.z,null)}}let ge=S.children;for(let Se=0,xe=ge.length;Se<xe;Se++)Ks(ge[Se],U,W,G)}function Bo(S,U,W,G){let{opaque:H,transmissive:ge,transparent:Se}=S;M.setupLightsView(W),dt===!0&&ve.setGlobalState(P.clippingPlanes,W),G&&v.viewport(re.copy(G)),H.length>0&&Cn(H,U,W),ge.length>0&&Cn(ge,U,W),Se.length>0&&Cn(Se,U,W),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pc(S,U,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Ne=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new _n(1,1,{generateMipmaps:!0,type:Ne?zi:Gn,minFilter:xi,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ge=M.state.transmissionRenderTarget[G.id],Se=G.viewport||re;ge.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);let xe=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Le=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(pt),Qe=P.getClearAlpha(),Qe<1&&P.setClearColor(16777215,.5),P.clear(),Ut&&He.render(W);let Ye=P.toneMapping;P.toneMapping=gi;let et=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),dt===!0&&ve.setGlobalState(P.clippingPlanes,G),Cn(S,W,G),q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let st=0,bt=U.length;st<bt;st++){let Ft=U[st],{object:gt,geometry:dn,material:we,group:xn}=Ft;if(we.side===Sn&&gt.layers.test(G.layers)){let ct=we.side;we.side=Kt,we.needsUpdate=!0,mc(gt,W,G,dn,we,xn),we.side=ct,we.needsUpdate=!0,Ne=!0}}Ne===!0&&(q.updateMultisampleRenderTarget(ge),q.updateRenderTargetMipmap(ge))}P.setRenderTarget(xe,Ee,Le),P.setClearColor(pt,Qe),et!==void 0&&(G.viewport=et),P.toneMapping=Ye}function Cn(S,U,W){let G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ge=S.length;H<ge;H++){let Se=S[H],{object:xe,geometry:Ee,group:Le}=Se,Ye=Se.material;Ye.allowOverride===!0&&G!==null&&(Ye=G),xe.layers.test(W.layers)&&mc(xe,U,W,Ee,Ye,Le)}}function mc(S,U,W,G,H,ge){S.onBeforeRender(P,U,W,G,H,ge),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(P,U,W,G,S,ge),H.transparent===!0&&H.side===Sn&&H.forceSinglePass===!1?(H.side=Kt,H.needsUpdate=!0,P.renderBufferDirect(W,U,G,H,S,ge),H.side=di,H.needsUpdate=!0,P.renderBufferDirect(W,U,G,H,S,ge),H.side=Sn):P.renderBufferDirect(W,U,G,H,S,ge),S.onAfterRender(P,U,W,G,H,ge)}function Si(S,U,W){U.isScene!==!0&&(U=en);let G=X.get(S),H=M.state.lights,ge=M.state.shadowsArray,Se=H.state.version,xe=pe.getParameters(S,H.state,ge,U,W,M.state.lightProbeGridArray),Ee=pe.getProgramCacheKey(xe),Le=G.programs;G.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ye=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;G.envMap=ce.get(S.envMap||G.environment,Ye),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",$n),Le=new Map,G.programs=Le);let et=Le.get(Ee);if(et!==void 0){if(G.currentProgram===et&&G.lightsStateVersion===Se)return ko(S,xe),et}else xe.uniforms=pe.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,W,xe),S.onBeforeCompile(xe,P),et=pe.acquireProgram(xe,Ee),Le.set(Ee,et),G.uniforms=xe.uniforms;let Ne=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),ko(S,xe),G.needsLights=Go(S),G.lightsStateVersion=Se,G.needsLights&&(Ne.ambientLightColor.value=H.state.ambient,Ne.lightProbe.value=H.state.probe,Ne.directionalLights.value=H.state.directional,Ne.directionalLightShadows.value=H.state.directionalShadow,Ne.spotLights.value=H.state.spot,Ne.spotLightShadows.value=H.state.spotShadow,Ne.rectAreaLights.value=H.state.rectArea,Ne.ltc_1.value=H.state.rectAreaLTC1,Ne.ltc_2.value=H.state.rectAreaLTC2,Ne.pointLights.value=H.state.point,Ne.pointLightShadows.value=H.state.pointShadow,Ne.hemisphereLights.value=H.state.hemi,Ne.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ne.spotLightMatrix.value=H.state.spotLightMatrix,Ne.spotLightMap.value=H.state.spotLightMap,Ne.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=et,G.uniformsList=null,et}function zo(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=xo.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ko(S,U){let W=X.get(S);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function wi(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let W=0,G=S.length;W<G;W++){let H=S[W];if(H.texture!==null&&H.boundingBox.containsPoint(x))return H}return null}function Vo(S,U,W,G,H){U.isScene!==!0&&(U=en),q.resetTextureUnits();let ge=U.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,xe=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Je.workingColorSpace,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=ce.get(G.envMap||Se,Ee),Ye=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,et=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,bt=!!W.morphAttributes.color,Ft=gi;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=P.toneMapping);let gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dn=gt!==void 0?gt.length:0,we=X.get(G),xn=M.state.lights;if(dt===!0&&(ht===!0||S!==ie)){let xt=S===ie&&G.id===ee;ve.setState(G,S,xt)}let ct=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==xn.state.version||we.outputColorSpace!==xe||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==Le||G.fog===!0&&we.fog!==ge||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ve.numPlanes||we.numIntersection!==ve.numIntersection)||we.vertexAlphas!==Ye||we.vertexTangents!==et||we.morphTargets!==Ne||we.morphNormals!==st||we.morphColors!==bt||we.toneMapping!==Ft||we.morphTargetsCount!==dn||!!we.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,we.__version=G.version);let Fn=we.currentProgram;ct===!0&&(Fn=Si(G,U,H),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Fn,we));let On=!1,tn=!1,jn=!1,St=Fn.getUniforms(),Ot=we.uniforms;if(v.useProgram(Fn.program)&&(On=!0,tn=!0,jn=!0),G.id!==ee&&(ee=G.id,tn=!0),we.needsLights){let xt=wi(M.state.lightProbeGridArray,H);we.lightProbeGrid!==xt&&(we.lightProbeGrid=xt,tn=!0)}if(On||ie!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",S.projectionMatrix),St.setValue(O,"viewMatrix",S.matrixWorldInverse);let Ai=St.map.cameraPosition;Ai!==void 0&&Ai.setValue(O,Zt.setFromMatrixPosition(S.matrixWorld)),I.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),ie!==S&&(ie=S,tn=!0,jn=!0)}if(we.needsLights&&(xn.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",xn.state.directionalShadowMap,q),xn.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",xn.state.spotShadowMap,q),xn.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",xn.state.pointShadowMap,q)),H.isSkinnedMesh){St.setOptional(O,H,"bindMatrix"),St.setOptional(O,H,"bindMatrixInverse");let xt=H.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),St.setValue(O,"boneTexture",xt.boneTexture,q))}H.isBatchedMesh&&(St.setOptional(O,H,"batchingTexture"),St.setValue(O,"batchingTexture",H._matricesTexture,q),St.setOptional(O,H,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",H._indirectTexture,q),St.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",H._colorsTexture,q));let ri=W.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&N.update(H,W,Fn),(tn||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,St.setValue(O,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=aS()),tn){if(St.setValue(O,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&Qh(Ot,jn),ge&&G.fog===!0&&Pe.refreshFogUniforms(Ot,ge),Pe.refreshMaterialUniforms(Ot,G,se,ae,M.state.transmissionRenderTarget[S.id]),we.needsLights&&we.lightProbeGrid){let xt=we.lightProbeGrid;Ot.probesSH.value=xt.texture,Ot.probesMin.value.copy(xt.boundingBox.min),Ot.probesMax.value.copy(xt.boundingBox.max),Ot.probesResolution.value.copy(xt.resolution)}xo.upload(O,zo(we),Ot,q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xo.upload(O,zo(we),Ot,q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(O,"center",H.center),St.setValue(O,"modelViewMatrix",H.modelViewMatrix),St.setValue(O,"normalMatrix",H.normalMatrix),St.setValue(O,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let xt=G.uniformsGroups;for(let Ai=0,es=xt.length;Ai<es;Ai++){let gc=xt[Ai];$.update(gc,Fn),$.bind(gc,Fn)}}return Fn}function Qh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Go(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(S,U,W){let G=X.get(S);G.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(S.texture).__webglTexture=U,X.get(S.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let W=X.get(S);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,W=0){K=S,F=U,z=W;let G=null,H=!1,ge=!1;if(S){let xe=X.get(S);if(xe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),re.copy(S.viewport),fe.copy(S.scissor),We=S.scissorTest,v.viewport(re),v.scissor(fe),v.setScissorTest(We),ee=-1;return}else if(xe.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(xe.__hasExternalTextures)q.rebindTextures(S,X.get(S.texture).__webglTexture,X.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ye=S.depthTexture;if(xe.__boundDepthTexture!==Ye){if(Ye!==null&&X.has(Ye)&&(S.width!==Ye.image.width||S.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}let Ee=S.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);let Le=X.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][W]:G=Le[U],H=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?G=X.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[W]:G=Le,re.copy(S.viewport),fe.copy(S.scissor),We=S.scissorTest}else re.copy(Oe).multiplyScalar(se).floor(),fe.copy(Dt).multiplyScalar(se).floor(),We=je;if(W!==0&&(G=k),v.bindFramebuffer(O.FRAMEBUFFER,G)&&v.drawBuffers(S,G),v.viewport(re),v.scissor(fe),v.setScissorTest(We),H){let xe=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,W)}else if(ge){let xe=U;for(let Ee=0;Ee<S.textures.length;Ee++){let Le=X.get(S.textures[Ee]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ee,Le.__webglTexture,W,xe)}}else if(S!==null&&W!==0){let xe=X.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,W)}ee=-1},this.readRenderTargetPixels=function(S,U,W,G,H,ge,Se,xe=0){if(!(S&&S.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){v.bindFramebuffer(O.FRAMEBUFFER,Ee);try{let Le=S.textures[xe],Ye=Le.format,et=Le.type;if(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!I.textureFormatReadable(Ye)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(et)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&W>=0&&W<=S.height-H&&O.readPixels(U,W,G,H,ne.convert(Ye),ne.convert(et),ge)}finally{let Le=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,U,W,G,H,ge,Se,xe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee)if(U>=0&&U<=S.width-G&&W>=0&&W<=S.height-H){v.bindFramebuffer(O.FRAMEBUFFER,Ee);let Le=S.textures[xe],Ye=Le.format,et=Le.type;if(S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!I.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ne),O.bufferData(O.PIXEL_PACK_BUFFER,ge.byteLength,O.STREAM_READ),O.readPixels(U,W,G,H,ne.convert(Ye),ne.convert(et),0);let st=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,st);let bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await wm(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ne),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ge),O.deleteBuffer(Ne),O.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,W=0){let G=Math.pow(2,-W),H=Math.floor(S.image.width*G),ge=Math.floor(S.image.height*G),Se=U!==null?U.x:0,xe=U!==null?U.y:0;q.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,Se,xe,H,ge),v.unbindTexture()},this.copyTextureToTexture=function(S,U,W=null,G=null,H=0,ge=0){let Se,xe,Ee,Le,Ye,et,Ne,st,bt,Ft=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(W!==null)Se=W.max.x-W.min.x,xe=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ye=W.min.y,et=W.isBox3?W.min.z:0;else{let Ot=Math.pow(2,-H);Se=Math.floor(Ft.width*Ot),xe=Math.floor(Ft.height*Ot),S.isDataArrayTexture?Ee=Ft.depth:S.isData3DTexture?Ee=Math.floor(Ft.depth*Ot):Ee=1,Le=0,Ye=0,et=0}G!==null?(Ne=G.x,st=G.y,bt=G.z):(Ne=0,st=0,bt=0);let gt=ne.convert(U.format),dn=ne.convert(U.type),we;U.isData3DTexture?(q.setTexture3D(U,0),we=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),we=O.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),we=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let xn=v.getParameter(O.UNPACK_ROW_LENGTH),ct=v.getParameter(O.UNPACK_IMAGE_HEIGHT),Fn=v.getParameter(O.UNPACK_SKIP_PIXELS),On=v.getParameter(O.UNPACK_SKIP_ROWS),tn=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,Ft.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ft.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(O.UNPACK_SKIP_ROWS,Ye),v.pixelStorei(O.UNPACK_SKIP_IMAGES,et);let jn=S.isDataArrayTexture||S.isData3DTexture,St=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Ot=X.get(S),ri=X.get(U),xt=X.get(Ot.__renderTarget),Ai=X.get(ri.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,xt.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let es=0;es<Ee;es++)jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(S).__webglTexture,H,et+es),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,ge,bt+es)),O.blitFramebuffer(Le,Ye,Se,xe,Ne,st,Se,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||X.has(S)){let Ot=X.get(S),ri=X.get(U);v.bindFramebuffer(O.READ_FRAMEBUFFER,Y),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let xt=0;xt<Ee;xt++)jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,H,et+xt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,H),St?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ri.__webglTexture,ge,bt+xt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ri.__webglTexture,ge),H!==0?O.blitFramebuffer(Le,Ye,Se,xe,Ne,st,Se,xe,O.COLOR_BUFFER_BIT,O.NEAREST):St?O.copyTexSubImage3D(we,ge,Ne,st,bt+xt,Le,Ye,Se,xe):O.copyTexSubImage2D(we,ge,Ne,st,Le,Ye,Se,xe);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else St?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(we,ge,Ne,st,bt,Se,xe,Ee,gt,dn,Ft.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(we,ge,Ne,st,bt,Se,xe,Ee,gt,Ft.data):O.texSubImage3D(we,ge,Ne,st,bt,Se,xe,Ee,gt,dn,Ft):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ge,Ne,st,Se,xe,gt,dn,Ft.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ge,Ne,st,Ft.width,Ft.height,gt,Ft.data):O.texSubImage2D(O.TEXTURE_2D,ge,Ne,st,Se,xe,gt,dn,Ft);v.pixelStorei(O.UNPACK_ROW_LENGTH,xn),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Fn),v.pixelStorei(O.UNPACK_SKIP_ROWS,On),v.pixelStorei(O.UNPACK_SKIP_IMAGES,tn),ge===0&&U.generateMipmaps&&O.generateMipmap(we),v.unbindTexture()},this.initRenderTarget=function(S){X.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){F=0,z=0,K=null,v.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function An(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new It,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=s0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let g=s0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function s0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new $t(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function bd(i,e){if(e===Qu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===mo||e===Oa){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===mo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Sd(i,e,t){t[0]=i[0]>e[0]?e[0]:i[0],t[1]=i[1]<e[1]?e[1]:i[1],t[2]=i[2]>e[2]?e[2]:i[2],t[3]=i[3]<e[3]?e[3]:i[3],t[4]=i[4]>e[4]?e[4]:i[4],t[5]=i[5]<e[5]?e[5]:i[5]}function cS(i,e,t){let n=!1,s=i[0]>e[0]?e[0]:i[0],r=i[1]<e[1]?e[1]:i[1],o=i[2]>e[2]?e[2]:i[2],a=i[3]<e[3]?e[3]:i[3],c=i[4]>e[4]?e[4]:i[4],l=i[5]<e[5]?e[5]:i[5];return t[0]>s&&(t[0]=s,n=!0),t[1]<r&&(t[1]=r,n=!0),t[2]>o&&(t[2]=o,n=!0),t[3]<a&&(t[3]=a,n=!0),t[4]>c&&(t[4]=c,n=!0),t[5]<l&&(t[5]=l,n=!0),n}function lS(i,e){return!(e[0]>i[0]||e[1]<i[1]||e[2]>i[2]||e[3]<i[3]||e[4]>i[4]||e[5]<i[5])}function hS(i,e){let t=!1;return e[0]>i[0]&&(e[0]=i[0],t=!0),e[1]<i[1]&&(e[1]=i[1],t=!0),e[2]>i[2]&&(e[2]=i[2],t=!0),e[3]<i[3]&&(e[3]=i[3],t=!0),e[4]>i[4]&&(e[4]=i[4],t=!0),e[5]<i[5]&&(e[5]=i[5],t=!0),t}function uh(i,e){i[0]-=e,i[1]+=e,i[2]-=e,i[3]+=e,i[4]-=e,i[5]+=e}function vo(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return 2*(e*t+t*n+n*e)}function mr(i,e){let t=i[0]>e[0]?e[0]:i[0],n=i[1]<e[1]?e[1]:i[1],s=i[2]>e[2]?e[2]:i[2],r=i[3]<e[3]?e[3]:i[3],o=i[4]>e[4]?e[4]:i[4],a=i[5]<e[5]?e[5]:i[5],c=n-t,l=r-s,h=a-o;return 2*(c*l+l*h+h*c)}function uS(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return e>t?e>n?0:2:t>n?1:2}function Ga(i,e){let t=i[0]-e[0],n=e[0]-i[1],s=t>n?t:n;s<0&&(s=0);let r=i[2]-e[1],o=e[1]-i[3],a=r>o?r:o;a<0&&(a=0);let c=i[4]-e[2],l=e[2]-i[5],h=c>l?c:l;return h<0&&(h=0),s*s+a*a+h*h}function dS(i,e){let t,n,s,r,o,a,c=i[0]-e[0],l=e[0]-i[1];c>l?(t=c,n=l):(t=l,n=c),t<0&&(t=0);let h=i[2]-e[1],u=e[1]-i[3];h>u?(s=h,r=u):(s=u,r=h),s<0&&(s=0);let d=i[4]-e[2],f=e[2]-i[5];return d>f?(o=d,a=f):(o=f,a=d),o<0&&(o=0),{min:t*t+s*s+o*o,max:n*n+r*r+a*a}}var wd=class{constructor(){this.array=[]}clear(){this.array=[]}push(e){let t=this.array,n=e.inheritedCost,s=t.length>6?t.length-6:0,r;for(r=t.length-1;r>=s&&!(n<=t[r].inheritedCost);r--);r>t.length-7&&t.splice(r+1,0,e)}pop(){return this.array.pop()}},dh=class{constructor(e=!1){this.root=null,this._sortedList=new wd,this.count=0,this.highPrecision=e,this._typeArray=e?Float64Array:Float32Array}createFromArray(e,t,n,s=0){let r=t.length,o=this._typeArray;o!==(t[0].BYTES_PER_ELEMENT===4?Float32Array:Float64Array)&&console.warn("Different precision.");let a=new o(6),c,l;this.root=h(0,r,null);function h(g,_,p){if(_===1){let x=t[g];s>0&&uh(x,s);let A={box:x,object:e[g],parent:p};return n&&n(A),A}let m=u(g,_);d();let b=f(g,_);(b===g||b===g+_)&&(b=g+(_>>1));let w={box:m,parent:p};return w.left=h(g,b-g,w),w.right=h(b,_-b+g,w),w}function u(g,_){let p=new o(6),m=g+_;p[0]=1/0,p[1]=-1/0,p[2]=1/0,p[3]=-1/0,p[4]=1/0,p[5]=-1/0,a[0]=1/0,a[1]=-1/0,a[2]=1/0,a[3]=-1/0,a[4]=1/0,a[5]=-1/0;for(let b=g;b<m;b++){let w=t[b],x=w[0],A=w[1],M=w[2],E=w[3],y=w[4],T=w[5];p[0]>x&&(p[0]=x),p[1]<A&&(p[1]=A),p[2]>M&&(p[2]=M),p[3]<E&&(p[3]=E),p[4]>y&&(p[4]=y),p[5]<T&&(p[5]=T);let P=(A+x)*.5,R=(E+M)*.5,L=(T+y)*.5;a[0]>P&&(a[0]=P),a[1]<P&&(a[1]=P),a[2]>R&&(a[2]=R),a[3]<R&&(a[3]=R),a[4]>L&&(a[4]=L),a[5]<L&&(a[5]=L)}return p[0]-=s,p[1]+=s,p[2]-=s,p[3]+=s,p[4]-=s,p[5]+=s,p}function d(){c=uS(a)*2,l=(a[c]+a[c+1])*.5}function f(g,_){let p=g,m=g+_-1;for(;p<=m;){let b=t[p];if((b[c+1]+b[c])*.5>=l)for(;;){let w=t[m];if((w[c+1]+w[c])*.5<l){let x=e[p];e[p]=e[m],e[m]=x;let A=t[p];t[p]=t[m],t[m]=A,m--;break}if(m--,m<=p)return p}p++}return p}}insert(e,t,n){n>0&&uh(t,n);let s=this.createLeafNode(e,t);return this.root===null?this.root=s:this.insertLeaf(s),this.count++,s}insertRange(e,t,n,s){console.warn("Method not optimized yet. It just calls 'insert' N times.");let r=e.length,o=n>0?n:n?null:0;for(let a=0;a<r;a++){let c=this.insert(e[a],t[a],o??n[a]);s&&s(c)}}move(e,t){if(!e.parent||lS(e.box,e.parent.box)){t>0&&uh(e.box,t);return}t>0&&uh(e.box,t);let n=this.delete(e);this.insertLeaf(e,n),this.count++}delete(e){let t=e.parent;if(t===null)return this.root=null,null;let n=t.parent,s=t.left===e?t.right:t.left;return s.parent=n,e.parent=null,n===null?(this.root=s,t):(n.left===t?n.left=s:n.right=s,this.refit(n),this.count--,t)}clear(){this.root=null}insertLeaf(e,t){let n=this.findBestSibling(e.box),s=n.parent;t===void 0?t=this.createInternalNode(s,n,e):(t.parent=s,t.left=n,t.right=e),n.parent=t,e.parent=t,s===null?this.root=t:s.left===n?s.left=t:s.right=t,this.refitAndRotate(e,n)}createLeafNode(e,t){return{box:t,object:e,parent:null}}createInternalNode(e,t,n){return{parent:e,left:t,right:n,box:new this._typeArray(6)}}findBestSibling(e){let t=this.root,n=t,s=mr(e,t.box),r=vo(e);if(t.object!==void 0)return t;let o=this._sortedList;o.clear();let a={node:t,inheritedCost:s-vo(t.box)};do{let{node:c,inheritedCost:l}=a;if(r+l>=s)break;let h=c.left,u=c.right,d=mr(e,h.box)+l,f=d-vo(h.box),g=mr(e,u.box)+l,_=g-vo(u.box);if(d>g?s>g&&(n=u,s=g):s>d&&(n=h,s=d),_>f){if(r+f>=s||(h.object===void 0&&o.push({node:h,inheritedCost:f}),r+_>=s))continue;u.object===void 0&&o.push({node:u,inheritedCost:_})}else{if(r+_>=s||(u.object===void 0&&o.push({node:u,inheritedCost:_}),r+f>=s))continue;h.object===void 0&&o.push({node:h,inheritedCost:f})}}while(a=o.pop());return n}refit(e){for(Sd(e.left.box,e.right.box,e.box);e=e.parent;)if(!cS(e.left.box,e.right.box,e.box))return}refitAndRotate(e,t){let n=e.box;e=e.parent;let s=e.box;for(Sd(n,t.box,s);e=e.parent;){let r=e.box;if(!hS(n,r))return;let o=e.left,a=e.right,c=o.box,l=a.box,h=null,u=null,d=0;if(a.object===void 0){let f=a.left,g=a.right,_=vo(a.box),p=_-mr(c,f.box),m=_-mr(c,g.box);p>m?p>0&&(h=o,u=g,d=p):m>0&&(h=o,u=f,d=m)}if(o.object===void 0){let f=o.left,g=o.right,_=vo(o.box),p=_-mr(l,f.box),m=_-mr(l,g.box);p>m?p>d&&(h=a,u=g):m>d&&(h=a,u=f)}h!==null&&this.swap(h,u)}}swap(e,t){let n=e.parent,s=t.parent,r=s.box;n.left===e?n.left=t:n.right=t,s.left===t?s.left=e:s.right=e,e.parent=s,t.parent=n,Sd(s.left.box,s.right.box,r)}},ph=0,fS=1,Ad=class{constructor(e,t){this.coordinateSystem=t,this.array=e?new Float64Array(24):new Float32Array(24)}setFromProjectionMatrix(e){if(this.updatePlane(0,e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),this.updatePlane(1,e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),this.updatePlane(2,e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),this.updatePlane(3,e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),this.updatePlane(4,e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14]),this.coordinateSystem===ph)this.updatePlane(5,e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]);else if(this.coordinateSystem===fS)this.updatePlane(5,e[2],e[6],e[10],e[14]);else throw new Error("Invalid coordinate system: "+this.coordinateSystem);return this}updatePlane(e,t,n,s,r){let o=this.array,a=e*4,c=Math.sqrt(t*t+n*n+s*s);o[a+0]=t/c,o[a+1]=n/c,o[a+2]=s/c,o[a+3]=r/c}intersectsBoxMask(e,t){let n=this.array,s,r,o,a,c,l;for(let h=0;h<6;h++){if(!(t&32>>h))continue;let u=h*4,d=n[u+0],f=n[u+1],g=n[u+2],_=n[u+3];if(d>0?(s=e[1],a=e[0]):(s=e[0],a=e[1]),f>0?(r=e[3],c=e[2]):(r=e[2],c=e[3]),g>0?(o=e[5],l=e[4]):(o=e[4],l=e[5]),d*s+f*r+g*o<-_)return-1;d*a+f*c+g*l>-_&&(t^=32>>h)}return t}isIntersected(e,t){let n=this.array;for(let s=0;s<6;s++){if(!(t&32>>s))continue;let r=s*4,o=n[r+0],a=n[r+1],c=n[r+2],l=n[r+3],h=o>0?e[1]:e[0],u=a>0?e[3]:e[2],d=c>0?e[5]:e[4];if(o*h+a*u+c*d<-l)return!1}return!0}isIntersectedMargin(e,t,n){if(t===0)return!0;let s=this.array;for(let r=0;r<6;r++){if(!(t&32>>r))continue;let o=r*4,a=s[o+0],c=s[o+1],l=s[o+2],h=s[o+3],u=a>0?e[1]-n:e[0]+n,d=c>0?e[3]-n:e[2]+n,f=l>0?e[5]-n:e[4]+n;if(a*u+c*d+l*f<-h)return!1}return!0}};function r0(i,e,t,n,s,r){let o=n[0],a=e[0],c=t[0],l=(i[o]-a)*c,h=(i[o^1]-a)*c,u=l>0?l:0,d=h<1/0?h:1/0;return o=n[1],a=e[1],c=t[1],l=(i[o+2]-a)*c,l>d||(h=(i[o^3]-a)*c,u>h)||(u=l>u?l:u,d=h<d?h:d,o=n[2],a=e[2],c=t[2],l=(i[o+4]-a)*c,l>d)||(h=(i[o^5]-a)*c,u>h)?!1:(u=l>u?l:u,d=h<d?h:d,u<=r&&d>=s)}function o0(i,e){return i[1]>=e[0]&&e[1]>=i[0]&&i[3]>=e[2]&&e[3]>=i[2]&&i[5]>=e[4]&&e[5]>=i[4]}function pS(i,e,t){return Ga(t,i)<=e*e}var fh=class{constructor(e,t=ph){this._sign=new Uint8Array(3),this.builder=e;let n=e.highPrecision;this.frustum=new Ad(n,t),this._dirInv=n?new Float64Array(3):new Float32Array(3)}get root(){return this.builder.root}createFromArray(e,t,n,s){e?.length>0&&this.builder.createFromArray(e,t,n,s)}insert(e,t,n){return this.builder.insert(e,t,n)}insertRange(e,t,n,s){e?.length>0&&this.builder.insertRange(e,t,n,s)}move(e,t){this.builder.move(e,t)}delete(e){return this.builder.delete(e)}clear(){this.builder.clear()}traverse(e){if(this.root===null)return;t(this.root,0);function t(n,s){if(n.object!==void 0){e(n,s);return}e(n,s)||(t(n.left,s+1),t(n.right,s+1))}}intersectsRay(e,t,n,s=0,r=1/0){if(this.root===null)return!1;let o=this._dirInv,a=this._sign;return o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){return r0(l.box,t,o,a,s,r)?l.object!==void 0?n(l.object):c(l.left)||c(l.right):!1}}intersectsBox(e,t){if(this.root===null)return!1;return n(this.root);function n(s){return o0(e,s.box)?s.object!==void 0?t(s.object):n(s.left)||n(s.right):!1}}intersectsSphere(e,t,n){if(this.root===null)return!1;return s(this.root);function s(r){return pS(e,t,r.box)?r.object!==void 0?n(r.object):s(r.left)||s(r.right):!1}}isNodeIntersected(e,t){let n=e.box,s;for(;s=e.parent;){let o=s.left===e?s.right:s.left;if(r(o))return!0;e=s}return!1;function r(o){return o0(n,o.box)?o.object!==void 0?t(o.object):r(o.left)||r(o.right):!1}}rayIntersections(e,t,n,s=0,r=1/0){if(this.root===null)return;let o=this._dirInv,a=this._sign;o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){if(r0(l.box,t,o,a,s,r)){if(l.object!==void 0){n(l.object);return}c(l.left),c(l.right)}}}frustumCulling(e,t){if(this.root===null)return;let n=this.frustum.setFromProjectionMatrix(e);s(this.root,63);function s(o,a){if(o.object!==void 0){n.isIntersected(o.box,a)&&t(o,n,a);return}if(a=n.intersectsBoxMask(o.box,a),!(a<0)){if(a===0){r(o.left),r(o.right);return}s(o.left,a),s(o.right,a)}}function r(o){if(o.object!==void 0){t(o,n,0);return}r(o.left),r(o.right)}}frustumCullingLOD(e,t,n,s){if(this.root===null)return;let r=this.frustum.setFromProjectionMatrix(e);o(this.root,63,null);function o(l,h,u){let d=l.box;if(u===null&&(u=c(d)),l.object!==void 0){r.isIntersected(d,h)&&s(l,u,r,h);return}if(h=r.intersectsBoxMask(d,h),!(h<0)){if(h===0){a(l.left,u),a(l.right,u);return}o(l.left,h,u),o(l.right,h,u)}}function a(l,h){if(h===null&&(h=c(l.box)),l.object!==void 0){s(l,h,r,0);return}a(l.left,h),a(l.right,h)}function c(l){let{min:h,max:u}=dS(l,t);for(let d=n.length-1;d>0;d--)if(u>=n[d])return h>=n[d]?d:null;return 0}}closestPointToPoint(e,t){if(this.root===null)return;let n=1/0;return s(this.root),Math.sqrt(n);function s(r){if(r.object!==void 0){if(t){let c=t(r.object)??Ga(r.box,e);c<n&&(n=c)}else n=Ga(r.box,e);return}let o=Ga(r.left.box,e),a=Ga(r.right.box,e);o<a?o<n&&(s(r.left),a<n&&s(r.right)):a<n&&(s(r.right),o<n&&s(r.left))}}};function Td(i,e){return e[0]=i.x,e[1]=i.y,e[2]=i.z,e}function Ed(i,e){let t=i.min,n=i.max;return e[0]=t.x,e[1]=n.x,e[2]=t.y,e[3]=n.y,e[4]=t.z,e[5]=n.z,e}var gh=class{constructor(e,t,n){if(this.isInstanceEntity=!0,this.position=new C,this.scale=new C(1,1,1),this.quaternion=new tt,this.id=t,this.owner=e,n){let s=this.quaternion,r=this.rotation=new ti;r._onChange(()=>s.setFromEuler(r,!1)),s._onChange(()=>r.setFromQuaternion(s,void 0,!1))}}get visible(){return this.owner.getVisibilityAt(this.id)}set visible(e){this.owner.setVisibilityAt(this.id,e)}get active(){return this.owner.getActiveAt(this.id)}set active(e){this.owner.setActiveAt(this.id,e)}get color(){return this.owner.getColorAt(this.id)}set color(e){this.owner.setColorAt(this.id,e)}get opacity(){return this.owner.getOpacityAt(this.id)}set opacity(e){this.owner.setOpacityAt(this.id,e)}get morph(){return this.owner.getMorphAt(this.id)}set morph(e){this.owner.setMorphAt(this.id,e)}get matrix(){return this.owner.getMatrixAt(this.id)}get matrixWorld(){return this.matrix.premultiply(this.owner.matrixWorld)}setMatrixIdentity(){let e=this.owner,t=e.matricesTexture._data,n=this.id,s=n*16;t[s+0]=1,t[s+1]=0,t[s+2]=0,t[s+3]=0,t[s+4]=0,t[s+5]=1,t[s+6]=0,t[s+7]=0,t[s+8]=0,t[s+9]=0,t[s+10]=1,t[s+11]=0,t[s+12]=0,t[s+13]=0,t[s+14]=0,t[s+15]=1,e.matricesTexture.enqueueUpdate(n)}updateMatrix(){let e=this.owner,t=this.position,n=this.quaternion,s=this.scale,r=e.matricesTexture._data,o=this.id,a=o*16,c=n._x,l=n._y,h=n._z,u=n._w,d=c+c,f=l+l,g=h+h,_=c*d,p=c*f,m=c*g,b=l*f,w=l*g,x=h*g,A=u*d,M=u*f,E=u*g,y=s.x,T=s.y,P=s.z;r[a+0]=(1-(b+x))*y,r[a+1]=(p+E)*y,r[a+2]=(m-M)*y,r[a+3]=0,r[a+4]=(p-E)*T,r[a+5]=(1-(_+x))*T,r[a+6]=(w+A)*T,r[a+7]=0,r[a+8]=(m+M)*P,r[a+9]=(w-A)*P,r[a+10]=(1-(_+b))*P,r[a+11]=0,r[a+12]=t.x,r[a+13]=t.y,r[a+14]=t.z,r[a+15]=1,e.matricesTexture.enqueueUpdate(o),e.bvh&&e.autoUpdateBVH&&e.bvh.move(o)}updateMatrixPosition(){let e=this.owner,t=this.position,n=e.matricesTexture._data,s=this.id,r=s*16;n[r+12]=t.x,n[r+13]=t.y,n[r+14]=t.z,e.matricesTexture.enqueueUpdate(s),e.bvh&&e.autoUpdateBVH&&e.bvh.move(s)}getUniform(e,t){return this.owner.getUniformAt(this.id,e,t)}updateBones(e=!0,t){this.owner.setBonesAt(this.id,e,t)}setUniform(e,t){this.owner.setUniformAt(this.id,e,t)}copyTo(e){e.position.copy(this.position),e.scale.copy(this.scale),e.quaternion.copy(this.quaternion),this.rotation&&e.rotation.copy(this.rotation)}applyMatrix4(e){return this.matrix.premultiply(e).decompose(this.position,this.quaternion,this.scale),this}applyQuaternion(e){return this.quaternion.premultiply(e),this}rotateOnAxis(e,t){return mh.setFromAxisAngle(e,t),this.quaternion.multiply(mh),this}rotateOnWorldAxis(e,t){return mh.setFromAxisAngle(e,t),this.quaternion.premultiply(mh),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(l0,e)}rotateZ(e){return this.rotateOnAxis(h0,e)}translateOnAxis(e,t){return a0.copy(e).applyQuaternion(this.quaternion),this.position.add(a0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(l0,e)}translateZ(e){return this.translateOnAxis(h0,e)}remove(){return this.owner.removeInstances(this.id),this}},mh=new tt,a0=new C,c0=new C(1,0,0),l0=new C(0,1,0),h0=new C(0,0,1),Rd=class{constructor(e,t=0,n=!1,s=!0){this.nodesMap=new Map,this.LODsMap=new Map,this._geoBoundingSphere=null,this._sphereTarget=null,this.target=e,this.accurateCulling=s,this._margin=t;let r=e._geometry;if(r.boundingBox||r.computeBoundingBox(),this.geoBoundingBox=r.boundingBox,n){r.boundingSphere||r.computeBoundingSphere();let o=r.boundingSphere.center;o.x===0&&o.y===0&&o.z===0?(this._geoBoundingSphere=r.boundingSphere,this._sphereTarget={centerX:0,centerY:0,centerZ:0,maxScale:0}):(console.warn('"getBoxFromSphere" is ignored because geometry is not centered.'),n=!1)}this.bvh=new fh(new dh,ph),this._origin=new Float32Array(3),this._dir=new Float32Array(3),this._cameraPos=new Float32Array(3),this._getBoxFromSphere=n}create(){let e=this.target._instancesCount,t=this.target._instancesArrayCount,n=new Array(e),s=new Uint32Array(e),r=0;this.clear();for(let o=0;o<t;o++)this.target.getActiveAt(o)&&(n[r]=this.getBox(o,new Float32Array(6)),s[r]=o,r++);this.bvh.createFromArray(s,n,o=>{this.nodesMap.set(o.object,o)},this._margin)}insert(e){let t=this.bvh.insert(e,this.getBox(e,new Float32Array(6)),this._margin);this.nodesMap.set(e,t)}insertRange(e){let t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=this.getBox(e[s],new Float32Array(6));this.bvh.insertRange(e,n,this._margin,s=>{this.nodesMap.set(s.object,s)})}move(e){let t=this.nodesMap.get(e);t&&(this.getBox(e,t.box),this.bvh.move(t,this._margin))}delete(e){let t=this.nodesMap.get(e);t&&(this.bvh.delete(t),this.nodesMap.delete(e))}clear(){this.bvh.clear(),this.nodesMap.clear()}frustumCulling(e,t){this._margin>0&&this.accurateCulling?this.bvh.frustumCulling(e.elements,(n,s,r)=>{s.isIntersectedMargin(n.box,r,this._margin)&&t(n)}):this.bvh.frustumCulling(e.elements,t)}frustumCullingLOD(e,t,n,s){this.LODsMap.has(n)||this.LODsMap.set(n,new Float32Array(n.length));let r=this.LODsMap.get(n);for(let a=0;a<n.length;a++)r[a]=n[a].distance;let o=this._cameraPos;o[0]=t.x,o[1]=t.y,o[2]=t.z,this._margin>0&&this.accurateCulling?this.bvh.frustumCullingLOD(e.elements,o,r,(a,c,l,h)=>{l.isIntersectedMargin(a.box,h,this._margin)&&s(a,c)}):this.bvh.frustumCullingLOD(e.elements,o,r,s)}raycast(e,t){let n=e.ray,s=this._origin,r=this._dir;Td(n.origin,s),Td(n.direction,r),this.bvh.rayIntersections(r,s,t,e.near,e.far)}intersectBox(e,t){this._boxArray||(this._boxArray=new Float32Array(6));let n=this._boxArray;return Ed(e,n),this.bvh.intersectsBox(n,t)}getBox(e,t){if(this._getBoxFromSphere){let n=this.target.matricesTexture._data,{centerX:s,centerY:r,centerZ:o,maxScale:a}=this.getSphereFromMatrix_centeredGeometry(e,n,this._sphereTarget),c=this._geoBoundingSphere.radius*a;t[0]=s-c,t[1]=s+c,t[2]=r-c,t[3]=r+c,t[4]=o-c,t[5]=o+c}else u0.copy(this.geoBoundingBox).applyMatrix4(this.target.getMatrixAt(e)),Ed(u0,t);return t}getSphereFromMatrix_centeredGeometry(e,t,n){let s=e*16,r=t[s+0],o=t[s+1],a=t[s+2],c=t[s+4],l=t[s+5],h=t[s+6],u=t[s+8],d=t[s+9],f=t[s+10],g=r*r+o*o+a*a,_=c*c+l*l+h*h,p=u*u+d*d+f*f;return n.maxScale=Math.sqrt(Math.max(g,_,p)),n.centerX=t[s+12],n.centerY=t[s+13],n.centerZ=t[s+14],n}},u0=new Yt,Id=class extends wa{constructor(e,t,n,s,r,o=1){let a=e.createBuffer();super(a,t,n,s,r.length/n),this.isGLInstancedBufferAttribute=!0,this._needsUpdate=!1,this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o,this.array=r,this._cacheArray=r,e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,r,e.DYNAMIC_DRAW)}update(e,t){if(!this._needsUpdate||t===0)return;let n=e.getContext();n.bindBuffer(n.ARRAY_BUFFER,this.buffer),this.array===this._cacheArray?n.bufferSubData(n.ARRAY_BUFFER,0,this.array,0,t):(n.bufferData(n.ARRAY_BUFFER,this.array,n.DYNAMIC_DRAW),this._cacheArray=this.array),this._needsUpdate=!1}clone(){return this}},vh=null,xh=null,d0={};function mS(i){return xh.get(i)?.()??vh(i)}function gS(i){if(xh.has(i))return;let e={};xh.set(i,()=>{if(i.isMeshDistanceMaterial){let t=vh(i);e.light=t.light}return e})}function xS(i,e,t){let n=e.properties;vh=n.get;let s=`${!!i.colorsTexture}_${i._useOpacity}_${!!i.boneTexture}_${!!i.uniformsTexture}`;d0[s]??=new WeakMap,xh=d0[s],n.get=mS,gS(t)}function _S(i){i.properties.get=vh}function v0(i,e){return Math.max(e,Math.ceil(Math.sqrt(i/e))*e)}function yS(i,e,t,n){e===3&&(console.warn('"channels" cannot be 3. Set to 4. More info: https://github.com/mrdoob/three.js/pull/23228'),e=4);let s=v0(n,t),r=new i(s*s*e),o=i.name.includes("Float"),a=i.name.includes("Uint"),c=o?yn:a?qn:lo,l;switch(e){case 1:l=o?zs:uo;break;case 2:l=o?ki:fo;break;case 4:l=o?Nn:po;break}return{array:r,size:s,type:c,format:l}}var So=class extends Li{constructor(e,t,n,s,r,o){t===3&&(t=4);let{array:a,format:c,size:l,type:h}=yS(e,t,n,s);super(a,l,l,c,h),this.partialUpdate=!0,this.maxUpdateCalls=1/0,this._utils=null,this._needsUpdate=!0,this._lastWidth=-1,this._data=a,this._channels=t,this._pixelsPerInstance=n,this._stride=n*t,this._rowToUpdate=new Array(l),this._uniformMap=r,this._fetchUniformsInFragmentShader=o,this.needsUpdate=!0}resize(e){let t=v0(e,this._pixelsPerInstance);if(t===this.image.width)return;let n=this._data,s=this._channels;this._rowToUpdate.length=t;let r=n.constructor,o=new r(t*t*s),a=Math.min(n.length,o.length);o.set(new r(n.buffer,0,a)),this.dispose(),this.image={data:o,height:t,width:t},this._data=o}enqueueUpdate(e){if(this._needsUpdate=!0,!this.partialUpdate)return;let t=this.image.width/this._pixelsPerInstance,n=Math.floor(e/t);this._rowToUpdate[n]=!0}bindToProgram(e,t,n,s,r){if(!s[r])return;s[r].value=this;let o=this.getSlot(n,r);if(o===void 0)return;let a=e.properties.get(this);e.state.bindTexture(t.TEXTURE_2D,a.__webglTexture,t.TEXTURE0+o)}update(e,t,n){let s=e.properties.get(this),r=s.__version!==this.version;if(!this._needsUpdate&&!r)return;let o=this._lastWidth!==this.image.width;if(!s.__webglTexture||o)e.initTexture(this);else{let a=this.getSlot(t,n)??e.capabilities.maxTextures-1;this.partialUpdate?this.updatePartial(s,e,a):this.updateFull(s,e,a),s.__version=this.version}this._lastWidth=this.image.width,this._needsUpdate=!1}getSlot(e,t){return e[t]?.cache[0]}updateFull(e,t,n){this.updateRows(e,t,[{row:0,count:this.image.height}],n)}updatePartial(e,t,n){let s=this.getUpdateRowsInfo();s.length!==0&&(s.length>this.maxUpdateCalls?this.updateFull(e,t,n):this.updateRows(e,t,s,n),this._rowToUpdate.fill(!1))}getUpdateRowsInfo(){let e=this._rowToUpdate,t=[];for(let n=0,s=e.length;n<s;n++)if(e[n]){let r=n;for(;n<s&&e[n];n++);t.push({row:r,count:n-r})}return t}updateRows(e,t,n,s){let r=t.getContext();this._utils??=new Md(r,t.extensions,t.capabilities);let o=this._utils.convert(this.format),a=this._utils.convert(this.type),{data:c,width:l}=this.image,h=this._channels;t.state.activeTexture(r.TEXTURE0+s),t.state.bindTexture(r.TEXTURE_2D,e.__webglTexture,r.TEXTURE0+s);let u=Je.getPrimaries(Je.workingColorSpace),d=this.colorSpace===ii?null:Je.getPrimaries(this.colorSpace),f=this.colorSpace===ii||u===d?r.NONE:r.BROWSER_DEFAULT_WEBGL,g=r.getParameter(r.UNPACK_FLIP_Y_WEBGL),_=r.getParameter(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL),p=r.getParameter(r.UNPACK_ALIGNMENT),m=r.getParameter(r.UNPACK_COLORSPACE_CONVERSION_WEBGL);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,this.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,this.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);for(let{count:b,row:w}of n)r.texSubImage2D(r.TEXTURE_2D,0,0,w,l,b,o,a,c,w*l*h);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_),r.pixelStorei(r.UNPACK_ALIGNMENT,p),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,m),this.onUpdate?.(this)}setUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;r===1?this._data[e*o+s]=n:n.toArray(this._data,e*o+s)}getUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;return r===1?this._data[e*o+s]:n.fromArray(this._data,e*o+s)}getUniformsGLSL(e,t,n){let s=this.getUniformsVertexGLSL(e,t,n),r=this.getUniformsFragmentGLSL(e,t,n);return{vertex:s,fragment:r}}getUniformsVertexGLSL(e,t,n){if(this._fetchUniformsInFragmentShader)return`
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
`;return{declareVarying:t,assignVarying:n,getVarying:s}}getUniformComponents(e,t){let n=e%this._channels,s="";for(let r=0;r<t;r++)s+=vS[n+r];return s}copy(e){return super.copy(e),this.partialUpdate=e.partialUpdate,this.maxUpdateCalls=e.maxUpdateCalls,this._channels=e._channels,this._pixelsPerInstance=e._pixelsPerInstance,this._stride=e._stride,this._rowToUpdate=e._rowToUpdate,this._uniformMap=e._uniformMap,this._fetchUniformsInFragmentShader=e._fetchUniformsInFragmentShader,this}},vS=["r","g","b","a"],Ue=class extends ze{constructor(e,t,n={},s){if(!e)throw new Error('"geometry" is mandatory.');if(!t)throw new Error('"material" is mandatory.');let{allowsEuler:r,renderer:o,createEntities:a}=n;super(e,null),this.type="InstancedMesh2",this.isInstancedMesh2=!0,this.instances=null,this.instanceIndex=null,this.colorsTexture=null,this.morphTexture=null,this.boneTexture=null,this.uniformsTexture=null,this.boundingBox=null,this.boundingSphere=null,this.bvh=null,this.customSort=null,this.raycastOnlyFrustum=!1,this.LODinfo=null,this.autoUpdate=!0,this.bindMode=qr,this.bindMatrix=null,this.bindMatrixInverse=null,this.skeleton=null,this.autoUpdateBVH=!0,this.onFrustumEnter=null,this._renderer=null,this._instancesCount=0,this._instancesArrayCount=0,this._perObjectFrustumCulled=!0,this._sortObjects=!1,this._indexArrayNeedsUpdate=!1,this._useOpacity=!1,this._currentMaterial=null,this._customProgramCacheKeyBase=null,this._onBeforeCompileBase=null,this._definesBase=null,this._freeIds=[],this.isInstancedMesh=!0,this.instanceMatrix=new Ni(new Float32Array(0),16),this.instanceColor=null,this._customProgramCacheKey=()=>`ez_${!!this.colorsTexture}_${this._useOpacity}_${!!this.boneTexture}_${!!this.uniformsTexture}_${this._customProgramCacheKeyBase.call(this._currentMaterial)}`,this._onBeforeCompile=(l,h)=>{if(this._onBeforeCompileBase&&this._onBeforeCompileBase.call(this._currentMaterial,l,h),l.defines={...l.defines},l.defines.USE_INSTANCING_INDIRECT="",l.uniforms.matricesTexture={value:this.matricesTexture},this.uniformsTexture){l.uniforms.uniformsTexture={value:this.uniformsTexture};let{vertex:u,fragment:d}=this.uniformsTexture.getUniformsGLSL("uniformsTexture","instanceIndex","uint");l.vertexShader=l.vertexShader.replace("void main() {",u),l.fragmentShader=l.fragmentShader.replace("void main() {",d)}this.colorsTexture&&l.fragmentShader.includes("#include <color_pars_fragment>")&&(l.defines.USE_INSTANCING_COLOR_INDIRECT="",l.uniforms.colorsTexture={value:this.colorsTexture},l.vertexShader=l.vertexShader.replace("<color_vertex>","<instanced_color_vertex>"),l.vertexColors&&(l.defines.USE_VERTEX_COLOR=""),l.defines.USE_COLOR_ALPHA=""),this.boneTexture&&(l.defines.USE_SKINNING="",l.defines.USE_INSTANCING_SKINNING="",l.uniforms.bindMatrix={value:this.bindMatrix},l.uniforms.bindMatrixInverse={value:this.bindMatrixInverse},l.uniforms.bonesPerInstance={value:this.skeleton.bones.length},l.uniforms.boneTexture={value:this.boneTexture})};let c=n.capacity>0?n.capacity:MS;this._renderer=o,this._capacity=c,this._parentLOD=s,this._geometry=e,this.material=t,this._allowsEuler=r??!1,this._tempInstance=new gh(this,-1,r),this.availabilityArray=s?.availabilityArray??new Array(c*2),this._createEntities=a,this.initLastRenderInfo(),this.initIndexAttribute(),this.initMatricesTexture()}get capacity(){return this._capacity}get instancesCount(){return this._instancesCount}get perObjectFrustumCulled(){return this._perObjectFrustumCulled}set perObjectFrustumCulled(e){this._perObjectFrustumCulled=e,this._indexArrayNeedsUpdate=!0}get sortObjects(){return this._sortObjects}set sortObjects(e){this._sortObjects=e,this._indexArrayNeedsUpdate=!0}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.patchGeometry(e)}onBeforeShadow(e,t,n,s,r,o,a){this.patchMaterial(e,o),this.updateTextures(e,o);let c=e.info.render.frame;this.instanceIndex&&this.autoUpdate&&!this.frustumCullingAlreadyPerformed(c,n,s)&&this.performFrustumCulling(s,n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,o))}onBeforeRender(e,t,n,s,r,o){if(this.patchMaterial(e,r),this.updateTextures(e,r),!this.instanceIndex){this._renderer=e;return}let a=e.info.render.frame;this.autoUpdate&&!this.frustumCullingAlreadyPerformed(a,n,null)&&this.performFrustumCulling(n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,r))}onAfterShadow(e,t,n,s,r,o,a){this.unpatchMaterial(e,o)}onAfterRender(e,t,n,s,r,o){this.unpatchMaterial(e,r),!(this.instanceIndex||o&&!this.isLastGroup(o.materialIndex))&&this.initIndexAttribute()}updateTextures(e,t){let n=e.properties.get(t);this.matricesTexture.update(e,n,"matricesTexture"),this.colorsTexture?.update(e,n,"colorsTexture"),this.uniformsTexture?.update(e,n,"uniformsTexture"),this.boneTexture?.update(e,n,"boneTexture")}bindTextures(e,t){let n=e.properties.get(t),s=n.uniforms;if(!s)return;let r=n.currentProgram,o=r?.program;if(!o)return;let a=e.getContext(),c=r.getUniforms().map,l=a.getParameter(a.CURRENT_PROGRAM);e.state.useProgram(o),this.matricesTexture.bindToProgram(e,a,c,s,"matricesTexture"),this.colorsTexture?.bindToProgram(e,a,c,s,"colorsTexture"),this.uniformsTexture?.bindToProgram(e,a,c,s,"uniformsTexture"),this.boneTexture?.bindToProgram(e,a,c,s,"boneTexture"),e.state.useProgram(l)}isLastGroup(e){let t=this.material;for(let n=t.length-1;n>=e;n--)if(t[n].visible)return n===e}initIndexAttribute(){if(!this._renderer){this.count=0;return}let e=this._renderer.getContext(),t=this._capacity,n=new Uint32Array(t);for(let s=0;s<t;s++)n[s]=s;this.instanceIndex=new Id(e,e.UNSIGNED_INT,1,4,n),this._geometry.setAttribute("instanceIndex",this.instanceIndex)}initLastRenderInfo(){this._parentLOD||(this._lastRenderInfo={frame:-1,camera:null,shadowCamera:null})}initMatricesTexture(){this._parentLOD||(this.matricesTexture=new So(Float32Array,4,4,this._capacity))}initColorsTexture(){this._parentLOD||(this.colorsTexture=new So(Float32Array,4,1,this._capacity),this.colorsTexture.colorSpace=Je.workingColorSpace,this.colorsTexture._data.fill(1),this.materialsNeedsUpdate())}materialsNeedsUpdate(){if(this.material.isMaterial){this.material.needsUpdate=!0;return}for(let e of this.material)e.needsUpdate=!0}patchGeometry(e){let t=e.getAttribute("instanceIndex");if(t){if(t===this.instanceIndex)return;console.warn("The geometry has been cloned because it was already used."),e=e.clone(),e.deleteAttribute("instanceIndex")}this.instanceIndex&&e.setAttribute("instanceIndex",this.instanceIndex)}patchMaterial(e,t){this._currentMaterial=t,this._customProgramCacheKeyBase=t.customProgramCacheKey,this._onBeforeCompileBase=t.onBeforeCompile,this._definesBase=t.defines,t.customProgramCacheKey=this._customProgramCacheKey,t.onBeforeCompile=this._onBeforeCompile,xS(this,e,t)}unpatchMaterial(e,t){this._currentMaterial=null,_S(e),t.defines=this._definesBase,t.onBeforeCompile=this._onBeforeCompileBase,t.customProgramCacheKey=this._customProgramCacheKeyBase,this._onBeforeCompileBase=null,this._customProgramCacheKeyBase=null,this._definesBase=null}computeBVH(e={}){this.bvh||(this.bvh=new Rd(this,e.margin,e.getBBoxFromBSphere,e.accurateCulling)),this.bvh.clear(),this.bvh.create()}disposeBVH(){this.bvh=null}setMatrixAt(e,t){if(t.toArray(this.matricesTexture._data,e*16),this.instances){let n=this.instances[e];t.decompose(n.position,n.quaternion,n.scale)}this.matricesTexture.enqueueUpdate(e),this.bvh&&this.autoUpdateBVH&&this.bvh.move(e)}getMatrixAt(e,t=bS){return t.fromArray(this.matricesTexture._data,e*16)}getPositionAt(e,t=SS){let n=e*16,s=this.matricesTexture._data;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],t}getPositionAndMaxScaleOnAxisAt(e,t){let n=e*16,s=this.matricesTexture._data,r=s[n+0],o=s[n+1],a=s[n+2],c=r*r+o*o+a*a,l=s[n+4],h=s[n+5],u=s[n+6],d=l*l+h*h+u*u,f=s[n+8],g=s[n+9],_=s[n+10],p=f*f+g*g+_*_;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],Math.sqrt(Math.max(c,d,p))}applyMatrixAtToSphere(e,t,n,s){let r=e*16,o=this.matricesTexture._data,a=o[r+0],c=o[r+1],l=o[r+2],h=o[r+3],u=o[r+4],d=o[r+5],f=o[r+6],g=o[r+7],_=o[r+8],p=o[r+9],m=o[r+10],b=o[r+11],w=o[r+12],x=o[r+13],A=o[r+14],M=o[r+15],E=t.center,y=n.x,T=n.y,P=n.z,R=1/(h*y+g*T+b*P+M);E.x=(a*y+u*T+_*P+w)*R,E.y=(c*y+d*T+p*P+x)*R,E.z=(l*y+f*T+m*P+A)*R;let L=a*a+c*c+l*l,k=u*u+d*d+f*f,Y=_*_+p*p+m*m;t.radius=s*Math.sqrt(Math.max(L,k,Y))}setVisibilityAt(e,t){this.availabilityArray[e*2]=t,this._indexArrayNeedsUpdate=!0}getVisibilityAt(e){return this.availabilityArray[e*2]}setActiveAt(e,t){this.availabilityArray[e*2+1]=t,this._indexArrayNeedsUpdate=!0}getActiveAt(e){return this.availabilityArray[e*2+1]}getActiveAndVisibilityAt(e){let t=e*2,n=this.availabilityArray;return n[t]&&n[t+1]}setActiveAndVisibilityAt(e,t){let n=e*2,s=this.availabilityArray;s[n]=t,s[n+1]=t,this._indexArrayNeedsUpdate=!0}setColorAt(e,t){this.colorsTexture===null&&this.initColorsTexture(),t.isColor?t.toArray(this.colorsTexture._data,e*4):m0.set(t).toArray(this.colorsTexture._data,e*4),this.colorsTexture.enqueueUpdate(e)}getColorAt(e,t=m0){return t.fromArray(this.colorsTexture._data,e*4)}setOpacityAt(e,t){this._useOpacity||(this.colorsTexture===null?this.initColorsTexture():this.materialsNeedsUpdate(),this._useOpacity=!0),this.colorsTexture._data[e*4+3]=t,this.colorsTexture.enqueueUpdate(e)}getOpacityAt(e){return this._useOpacity?this.colorsTexture._data[e*4+3]:1}copyTo(e,t){this.getMatrixAt(e,t.matrix).decompose(t.position,t.quaternion,t.scale)}computeBoundingBox(){let e=this._geometry,t=this._instancesArrayCount;this.boundingBox??=new Yt,e.boundingBox===null&&e.computeBoundingBox();let n=e.boundingBox,s=this.boundingBox;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(f0.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(f0))}computeBoundingSphere(){let e=this._geometry,t=this._instancesArrayCount;this.boundingSphere??=new an,e.boundingSphere===null&&e.computeBoundingSphere();let n=e.boundingSphere,s=this.boundingSphere;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(p0.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(p0))}clone(e){let t={capacity:this._capacity,renderer:this._renderer,allowsEuler:this._allowsEuler,createEntities:this._createEntities};return new this.constructor(this.geometry,this.material,t).copy(this,e)}copy(e,t){return super.copy(e,t),this.count=e._capacity,this._instancesCount=e._instancesCount,this._instancesArrayCount=e._instancesArrayCount,this._capacity=e._capacity,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this.matricesTexture=e.matricesTexture.clone(),this.matricesTexture.image.data=this.matricesTexture.image.data.slice(),e.colorsTexture!==null&&(this.colorsTexture=e.colorsTexture.clone(),this.colorsTexture.image.data=this.colorsTexture.image.data.slice()),e.uniformsTexture!==null&&(this.uniformsTexture=e.uniformsTexture.clone(),this.uniformsTexture.image.data=this.uniformsTexture.image.data.slice()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone(),this.morphTexture.image.data=this.morphTexture.image.data.slice()),e.boneTexture!==null&&(this.boneTexture=e.boneTexture.clone(),this.boneTexture.image.data=this.boneTexture.image.data.slice()),this}dispose(){this.dispatchEvent({type:"dispose"}),this.matricesTexture.dispose(),this.colorsTexture?.dispose(),this.morphTexture?.dispose(),this.boneTexture?.dispose(),this.uniformsTexture?.dispose()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMatrixInverse&&(this.bindMode===qr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("Unrecognized bindMode: "+this.bindMode))}},MS=1e3,f0=new Yt,p0=new an,bS=new Re,m0=new be,SS=new C;Ue.prototype.resizeBuffers=function(i){let e=this._capacity;this._capacity=i;let t=Math.min(i,e);if(this.instanceIndex){let n=new Uint32Array(i);n.set(new Uint32Array(this.instanceIndex.array.buffer,0,t)),this.instanceIndex.array=n}if(this.LODinfo){for(let n of this.LODinfo.objects)if(n._capacity=i,n.instanceIndex){let s=new Uint32Array(i);s.set(new Uint32Array(n.instanceIndex.array.buffer,0,t)),n.instanceIndex.array=s}}if(this.availabilityArray.length=i*2,this.matricesTexture.resize(i),this.colorsTexture&&(this.colorsTexture.resize(i),i>e&&this.colorsTexture._data.fill(1,e*4)),this.morphTexture){let n=this.morphTexture.image.data,s=n.length/e;this.morphTexture.dispose(),this.morphTexture=new Li(new Float32Array(s*i),s,i,zs,yn),this.morphTexture.image.data.set(n)}return this.uniformsTexture?.resize(i),this};Ue.prototype.setInstancesArrayCount=function(i){if(i<this._instancesArrayCount){let t=this.bvh;if(t)for(let n=this._instancesArrayCount-1;n>=i;n--)this.getActiveAt(n)&&t.delete(n);this._instancesArrayCount=i;return}if(i>this._capacity){let t=this._capacity+(this._capacity>>1)+512;for(;t<i;)t+=(t>>1)+512;this.resizeBuffers(t)}let e=this._instancesArrayCount;this._instancesArrayCount=i,this._createEntities&&this.createEntities(e)};function M0(i,e){return i.depth-e.depth}function b0(i,e){return e.depth-i.depth}var Pd=class{constructor(){this.array=[],this.pool=[]}push(e,t){let n=this.pool,s=this.array,r=s.length;r>=n.length&&n.push({depth:null,index:null,depthSort:null});let o=n[r];o.depth=e,o.index=t,s.push(o)}reset(){this.array.length=0}},_h=new Ns,yi=new Pd,gr=new Re,Mo=new Re,Mh=new C,Ha=new C,bo=new C,wS=new C,_i=new an;Ue.prototype.performFrustumCulling=function(i,e=i){let t=this._parentLOD??this,n=t.LODinfo,s;if(n){s=i!==e?n.shadowRender??n.render:n.render;for(let r of n.objects)r.count=0}else(t._perObjectFrustumCulled||t._sortObjects)&&(t.count=0);t._instancesArrayCount!==0&&(s?.levels.length>0?t.frustumCullingLOD(s,i,e):t.frustumCulling(i))};Ue.prototype.updateLastRenderInfo=function(i,e,t){let n=this._lastRenderInfo;n.frame=i,n.camera=e,n.shadowCamera=t};Ue.prototype.frustumCullingAlreadyPerformed=function(i,e,t){let n=this._lastRenderInfo;return n.frame===i&&n.camera===e&&n.shadowCamera===t?!0:(this.updateLastRenderInfo(i,e,t),!1)};Ue.prototype.frustumCulling=function(i){let e=this._sortObjects,t=this._perObjectFrustumCulled,n=this.instanceIndex.array;if(this.instanceIndex._needsUpdate=!0,!t&&!e){this.updateIndexArray();return}if(e&&(Mo.copy(this.matrixWorld).invert(),Ha.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Mo),Mh.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Mo)),t?(gr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),this.bvh?this.BVHCulling(i):this.linearCulling(i)):this.updateRenderList(),e){let s=this.customSort;s===null?yi.array.sort(this.material?.transparent?b0:M0):s(yi.array);let r=yi.array,o=r.length;for(let a=0;a<o;a++)n[a]=r[a].index;this.count=o,yi.reset()}};Ue.prototype.updateIndexArray=function(){if(!this._indexArrayNeedsUpdate)return;let i=this.instanceIndex.array,e=this._instancesArrayCount,t=0;for(let n=0;n<e;n++)this.getActiveAndVisibilityAt(n)&&(i[t++]=n);this.count=t,this._indexArrayNeedsUpdate=!1};Ue.prototype.updateRenderList=function(){let i=this._instancesArrayCount;for(let e=0;e<i;e++)if(this.getActiveAndVisibilityAt(e)){let t=this.getPositionAt(e).sub(Ha).dot(Mh);yi.push(t,e)}};Ue.prototype.BVHCulling=function(i){let e=this.instanceIndex.array,t=this._instancesArrayCount,n=this._sortObjects,s=this.onFrustumEnter,r=0;this.bvh.frustumCulling(gr,o=>{let a=o.object;if(a<t&&this.getVisibilityAt(a)&&(!s||s(a,i)))if(n){let c=this.getPositionAt(a).sub(Ha).dot(Mh);yi.push(c,a)}else e[r++]=a}),this.count=r};Ue.prototype.linearCulling=function(i){let e=this.instanceIndex.array;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let t=this._geometry.boundingSphere,n=t.radius,s=t.center,r=this._instancesArrayCount,o=s.x===0&&s.y===0&&s.z===0,a=this._sortObjects,c=this.onFrustumEnter,l=0;_h.setFromProjectionMatrix(gr);for(let h=0;h<r;h++)if(this.getActiveAndVisibilityAt(h)){if(o){let u=this.getPositionAndMaxScaleOnAxisAt(h,_i.center);_i.radius=n*u}else this.applyMatrixAtToSphere(h,_i,s,n);if(_h.intersectsSphere(_i)&&(!c||c(h,i)))if(a){let u=wS.subVectors(_i.center,Ha).dot(Mh);yi.push(u,h)}else e[l++]=h}this.count=l};Ue.prototype.frustumCullingLOD=function(i,e,t){let{count:n,levels:s}=i;for(let a=0;a<s.length;a++){if(!s[a].object.instanceIndex)return;n[a]=0,s[a].object.instanceIndex._needsUpdate=!0}let r=e===t&&this._sortObjects;gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),Mo.copy(this.matrixWorld).invert(),Ha.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Mo),bo.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Mo);let o=i.levels.map(a=>a.object.instanceIndex.array);if(this.bvh?this.BVHCullingLOD(i,o,r,e,t):this.linearCullingLOD(i,o,r,e,t),r){let a=this.customSort,c=yi.array,l=0,h=s[1].distance;a===null?c.sort(s[0].object.material?.transparent?b0:M0):a(c);for(let u=0,d=c.length;u<d;u++){let f=c[u];f.depth>h&&(l++,h=s[l+1]?.distance??1/0),o[l][n[l]++]=f.index}yi.reset()}for(let a=0;a<s.length;a++){let c=s[a].object;c.count=n[a]}};Ue.prototype.BVHCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i,a=this._instancesArrayCount,c=this.onFrustumEnter;t?this.bvh.frustumCulling(gr,l=>{let h=l.object;if(h<a&&this.getVisibilityAt(h)&&(!c||c(h,n,s))){let u=this.getPositionAt(h).distanceToSquared(bo);yi.push(u,h)}}):this.bvh.frustumCullingLOD(gr,bo,o,(l,h)=>{let u=l.object;if(u<a&&this.getVisibilityAt(u)){if(h===null){let d=this.getPositionAt(u).distanceToSquared(bo);h=this.getObjectLODIndexForDistance(o,d)}(!c||c(u,n,s,h))&&(e[h][r[h]++]=u)}})};Ue.prototype.linearCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let a=this._geometry.boundingSphere,c=a.radius,l=a.center,h=this._instancesArrayCount,u=l.x===0&&l.y===0&&l.z===0,d=this.onFrustumEnter;_h.setFromProjectionMatrix(gr);for(let f=0;f<h;f++)if(this.getActiveAndVisibilityAt(f)){if(u){let g=this.getPositionAndMaxScaleOnAxisAt(f,_i.center);_i.radius=c*g}else this.applyMatrixAtToSphere(f,_i,l,c);if(_h.intersectsSphere(_i))if(t){if(!d||d(f,n,s)){let g=_i.center.distanceToSquared(bo);yi.push(g,f)}}else{let g=_i.center.distanceToSquared(bo),_=this.getObjectLODIndexForDistance(o,g);(!d||d(f,n,s,_))&&(e[_][r[_]++]=f)}}};Ue.prototype.clearTempInstance=function(i){let e=this._tempInstance;return e.id=i,this.clearInstance(e)};Ue.prototype.clearTempInstancePosition=function(i){let e=this._tempInstance;return e.id=i,e.position.set(0,0,0),e};Ue.prototype.clearInstance=function(i){return i.position.set(0,0,0),i.scale.set(1,1,1),i.quaternion.identity(),i};Ue.prototype.updateInstances=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstance(n);i(s,n),s.updateMatrix()}return this};Ue.prototype.updateInstancesPosition=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstancePosition(n);i(s,n),s.updateMatrixPosition()}return this};Ue.prototype.createEntities=function(i){let e=this._instancesArrayCount;if(!this.instances)this.instances=new Array(e);else if(this.instances.length<e)this.instances.length=e;else return this;let t=this.instances;for(let n=i;n<e;n++)t[n]||(t[n]=new gh(this,n,this._allowsEuler));return this};Ue.prototype.addInstances=function(i,e){!e&&this.bvh&&console.warn("InstancedMesh2: if `computeBVH()` has already been called, it is better to valorize the instances in the `onCreation` callback for better performance.");let t=this._freeIds;if(t.length>0){let r=-1,o=Math.min(t.length,i),a=t.length-o;for(let c=t.length-1;c>=a;c--){let l=t[c];l>r&&(r=l),this.addInstance(l,e)}t.length-=o,i-=o,this._instancesArrayCount=Math.max(r+1,this._instancesArrayCount)}let n=this._instancesArrayCount,s=n+i;this.setInstancesArrayCount(s);for(let r=n;r<s;r++)this.addInstance(r,e);return this};Ue.prototype.addInstance=function(i,e){this._instancesCount++,this.setActiveAndVisibilityAt(i,!0);let t=this.instances?this.clearInstance(this.instances[i]):this.clearTempInstance(i);e?(e(t,i),t.updateMatrix()):t.setMatrixIdentity(),this.bvh?.insert(i)};Ue.prototype.removeInstances=function(...i){let e=this._freeIds,t=this.bvh;for(let n of i)n<this._instancesArrayCount&&this.getActiveAt(n)&&(this.setActiveAt(n,!1),e.push(n),t?.delete(n),this._instancesCount--);for(let n=this._instancesArrayCount-1;n>=0&&!this.getActiveAt(n);n--)this._instancesArrayCount--;return this};Ue.prototype.clearInstances=function(){if(this._instancesCount=0,this._instancesArrayCount=0,this._freeIds.length=0,this.bvh?.clear(),this.LODinfo)for(let i of this.LODinfo.objects)i.count=0;return this};Ue.prototype.getObjectLODIndexForDistance=function(i,e){for(let t=i.length-1;t>0;t--){let n=i[t],s=n.distance-n.distance*n.hysteresis;if(e>=s)return t}return 0};Ue.prototype.setFirstLODDistance=function(i){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");return this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.render||(this.LODinfo.render={levels:[{distance:i,hysteresis:0,object:this}],count:[0]}),this};Ue.prototype.addLOD=function(i,e,t=0,n=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");if(!this.LODinfo?.render&&t===0)throw new Error('Cannot set distance to 0 for the first LOD. Call "setFirstLODDistance" method before use "addLOD".');return this.setFirstLODDistance(0),this.addLevel(this.LODinfo.render,i,e,t,n),this};Ue.prototype.addShadowLOD=function(i,e=0,t=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.shadowRender||(this.LODinfo.shadowRender={levels:[],count:[]});let n=this.addLevel(this.LODinfo.shadowRender,i,null,e,t);return n.castShadow=!0,this.castShadow=!0,this};Ue.prototype.addLevel=function(i,e,t,n,s){let r=this.LODinfo.objects,o=i.levels,a,c;n=n**2;let l=r.findIndex(h=>h.geometry===e);if(l===-1){let h={capacity:this._capacity,renderer:this._renderer};c=new Ue(e,t??new Ln,h,this),c.frustumCulled=!1,this.patchLevel(c),r.push(c),this.add(c)}else c=r[l],t&&(c.material=t);for(a=0;a<o.length&&!(n<o[a].distance);a++);return o.splice(a,0,{distance:n,hysteresis:s,object:c}),i.count.push(0),c};Ue.prototype.updateLevel=function(i,e,t,n){if(!i)throw new Error("Render list is invalid.");let s=i.levels[e];if(!s)throw new Error("Cannot update an empty LOD.");if(t!=null&&!Number.isNaN(t)){let r=t**2;s.distance=r}return n!=null&&!Number.isNaN(n)&&(s.hysteresis=n),this};Ue.prototype.updateLOD=function(i,e,t){let n=this?.LODinfo?.render;if(i===0)throw new Error("Cannot change distance for LOD0. It is the main mesh and must stay at 0.");return this.updateLevel(n,i,e,t)};Ue.prototype.updateShadowLOD=function(i,e,t){return this.updateLevel(this.LODinfo?.shadowRender,i,e,t)};Ue.prototype.updateAllLevels=function(i,e,t){if(!i?.levels)throw new Error("Invalid LOD list.");let n=i.levels,s=this.LODinfo?.render===i,r=s?1:0;s&&(n[0].distance=0);let o=e?.length>0,a=[];o&&(a=s&&e[0]===0?e.slice(1,Math.min(n.length,e.length)):e.slice(0,Math.min(n.length-r,e.length)),a.every((l,h)=>{if(h>0&&l<=a[h-1])throw new Error(`LOD distances must be strictly increasing: d[${h-1}]=${a[h-1]} < d[${h}]=${l}`);return!0}));let c=o?a.length:n.length-r;for(let l=0;l<c;l++){let h=o?a[l]:void 0,u=Array.isArray(t)?t[l]:t;this.updateLevel(i,r+l,h,u)}return this};Ue.prototype.updateAllLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.render,i,e)};Ue.prototype.updateAllShadowLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.shadowRender,i,e)};Ue.prototype.disposeLOD=function(i){i.geometry.dispose();let e=i.material;if(Array.isArray(e))for(let t of e)t.dispose();else e.dispose()};Ue.prototype.removeLOD=function(i,e=!0){let t=this.LODinfo,n=t?.render;if(!n?.levels)throw new Error("Invalid LOD list.");let s=n.levels.length;if(i<0||i>=s)throw new Error("Level index OOB");if(s>1&&i===0)throw new Error("Cannot remove LOD0 while others exist");let[r]=n.levels.splice(i,1);n.count?.splice?.(i,1),n.levels.length<=1&&(t.render=null);let o=r.object,a=this.LODinfo?.shadowRender;if(a?.levels&&i<a.levels.length&&(a.levels.splice(i,1),a.count?.splice?.(i,1),a.levels.length===0&&(this.LODinfo.shadowRender=null)),e&&o!==this)try{this.remove(o);let c=t.objects?.indexOf(o)??-1;c!==-1&&t.objects.splice(c,1),this.disposeLOD(o)}catch(c){console.error(c)}return this};Ue.prototype.patchLevel=function(i){Object.defineProperty(i,"renderOrder",{get(){return this._parentLOD.renderOrder}}),Object.defineProperty(i,"_lastRenderInfo",{get(){return this._parentLOD._lastRenderInfo}}),Object.defineProperty(i,"matricesTexture",{get(){return this._parentLOD.matricesTexture}}),Object.defineProperty(i,"colorsTexture",{get(){return this._parentLOD.colorsTexture}}),Object.defineProperty(i,"uniformsTexture",{get(){return this._parentLOD.uniformsTexture}}),Object.defineProperty(i,"morphTexture",{get(){return this._parentLOD.morphTexture}}),Object.defineProperty(i,"boneTexture",{get(){return this._parentLOD.boneTexture}}),Object.defineProperty(i,"skeleton",{get(){return this._parentLOD.skeleton}}),Object.defineProperty(i,"bindMatrixInverse",{get(){return this._parentLOD.bindMatrixInverse}}),Object.defineProperty(i,"bindMatrix",{get(){return this._parentLOD.bindMatrix}})};var AS=new ze;Ue.prototype.getMorphAt=function(i,e=AS){let t=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=t.length+1,r=i*s+1;for(let o=0;o<t.length;o++)t[o]=n[r+o];return e};Ue.prototype.setMorphAt=function(i,e){let t=e.morphTargetInfluences,n=t.length+1;this.morphTexture===null&&!this._parentLOD&&(this.morphTexture=new Li(new Float32Array(n*this._capacity),n,this._capacity,zs,yn));let s=this.morphTexture.source.data.data,r=0;for(let c of t)r+=c;let o=this._geometry.morphTargetsRelative?1:1-r,a=n*i;s[a]=o,s.set(t,a+1),this.morphTexture.needsUpdate=!0};var Cd=[],yh=new ze,TS=new Pi,g0=new C,x0=new C,_0=new Re,y0=new an;Ue.prototype.raycast=function(i,e){if(this._parentLOD||!this.material||this._instancesArrayCount===0||!this.instanceIndex)return;yh.geometry=this._geometry,yh.material=this.material;let t=i.ray,n=i.near,s=i.far;_0.copy(this.matrixWorld).invert(),x0.setFromMatrixScale(this.matrixWorld),g0.copy(i.ray.direction).multiply(x0);let r=g0.length();i.ray=TS.copy(i.ray).applyMatrix4(_0),i.near/=r,i.far/=r,this.raycastInstances(i,e),i.ray=t,i.near=n,i.far=s};Ue.prototype.raycastInstances=function(i,e){if(this.bvh)this.bvh.raycast(i,t=>this.checkObjectIntersection(i,t,e));else{if(this.boundingSphere===null&&this.computeBoundingSphere(),y0.copy(this.boundingSphere),!i.ray.intersectsSphere(y0))return;let t=this.instanceIndex.array,n=this.raycastOnlyFrustum&&this._perObjectFrustumCulled?this.count:this._instancesArrayCount;for(let s=0;s<n;s++)this.checkObjectIntersection(i,t[s],e)}};Ue.prototype.checkObjectIntersection=function(i,e,t){if(!(e>this._instancesArrayCount||!this.getActiveAndVisibilityAt(e))){this.getMatrixAt(e,yh.matrixWorld),yh.raycast(i,Cd);for(let n of Cd)n.instanceId=e,n.object=this,t.push(n);Cd.length=0}};Ue.prototype.initSkeleton=function(i,e=!0){if(i&&this.skeleton!==i&&!this._parentLOD){let t=i.bones;if(this.skeleton=i,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boneTexture=new So(Float32Array,4,4*t.length,this._capacity),e)for(let n of t)n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1;this.materialsNeedsUpdate()}};Ue.prototype.setBonesAt=function(i,e=!0,t){let n=this.skeleton;if(!n)throw new Error('"setBonesAt" cannot be called before "initSkeleton"');let s=n.bones,r=n.boneInverses;for(let o=0,a=s.length;o<a;o++){let c=s[o];e&&(t?.has(c.name)||c.updateMatrix(),c.matrixWorld.multiplyMatrices(c.parent.matrixWorld,c.matrix)),this.multiplyBoneMatricesAt(i,o,c.matrixWorld,r[o])}this.boneTexture.enqueueUpdate(i)};Ue.prototype.multiplyBoneMatricesAt=function(i,e,t,n){let s=(i*this.skeleton.bones.length+e)*16,r=t.elements,o=n.elements,a=this.boneTexture._data,c=r[0],l=r[4],h=r[8],u=r[12],d=r[1],f=r[5],g=r[9],_=r[13],p=r[2],m=r[6],b=r[10],w=r[14],x=r[3],A=r[7],M=r[11],E=r[15],y=o[0],T=o[4],P=o[8],R=o[12],L=o[1],k=o[5],Y=o[9],B=o[13],F=o[2],z=o[6],K=o[10],ee=o[14],ie=o[3],re=o[7],fe=o[11],We=o[15];a[s+0]=c*y+l*L+h*F+u*ie,a[s+4]=c*T+l*k+h*z+u*re,a[s+8]=c*P+l*Y+h*K+u*fe,a[s+12]=c*R+l*B+h*ee+u*We,a[s+1]=d*y+f*L+g*F+_*ie,a[s+5]=d*T+f*k+g*z+_*re,a[s+9]=d*P+f*Y+g*K+_*fe,a[s+13]=d*R+f*B+g*ee+_*We,a[s+2]=p*y+m*L+b*F+w*ie,a[s+6]=p*T+m*k+b*z+w*re,a[s+10]=p*P+m*Y+b*K+w*fe,a[s+14]=p*R+m*B+b*ee+w*We,a[s+3]=x*y+A*L+M*F+E*ie,a[s+7]=x*T+A*k+M*z+E*re,a[s+11]=x*P+A*Y+M*K+E*fe,a[s+15]=x*R+A*B+M*ee+E*We};Ue.prototype.getUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);return this.uniformsTexture.getUniformAt(i,e,t)};Ue.prototype.setUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);this.uniformsTexture.setUniformAt(i,e,t),this.uniformsTexture.enqueueUpdate(i)};Ue.prototype.initUniformsPerInstance=function(i){if(!this._parentLOD){let{channels:e,pixelsPerInstance:t,uniformMap:n,fetchInFragmentShader:s}=this.getUniformSchemaResult(i);this.uniformsTexture=new So(Float32Array,e,t,this._capacity,n,s),this.materialsNeedsUpdate()}};Ue.prototype.getUniformSchemaResult=function(i){let e=0,t=new Map,n=[],s=i.vertex??{},r=i.fragment??{},o=!0;for(let l in s){let h=s[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u}),o=!1}for(let l in r)if(!s[l]){let h=r[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u})}n.sort((l,h)=>h.size-l.size);let a=[];for(let{name:l,size:h,type:u}of n){let d=this.getUniformOffset(h,a);t.set(l,{offset:d,size:h,type:u})}let c=Math.ceil(e/4);return{channels:Math.min(e,4),pixelsPerInstance:c,uniformMap:t,fetchInFragmentShader:o}};Ue.prototype.getUniformOffset=function(i,e){if(i<4){for(let n=0;n<e.length;n++)if(e[n]+i<=4){let s=n*4+e[n];return e[n]+=i,s}}let t=e.length*4;for(;i>0;i-=4)e.push(i);return t};Ue.prototype.getUniformSize=function(i){switch(i){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;case"mat3":return 9;case"mat4":return 16;default:throw new Error(`Invalid uniform type: ${i}`)}};var ES=`#ifdef USE_INSTANCING_INDIRECT\r
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
#endif`,CS=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  uniform highp sampler2D colorsTexture;

  vec4 getColorTexture() {\r
    int size = textureSize( colorsTexture, 0 ).x;\r
    int j = int( instanceIndex );\r
    int x = j % size;\r
    int y = j / size;\r
    return texelFetch( colorsTexture, ivec2( x, y ), 0 );\r
  }\r
#endif`,RS=`#ifdef USE_INSTANCING_INDIRECT\r
  mat4 instanceMatrix = getInstancedMatrix();

  #ifdef USE_INSTANCING_COLOR_INDIRECT\r
    vColor *= getColorTexture();\r
  #endif\r
#endif`,IS=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  #ifdef USE_VERTEX_COLOR\r
    vColor = vec4( color );\r
  #else\r
    vColor = vec4( 1.0 );\r
  #endif\r
#endif`,PS=`#ifdef USE_SKINNING\r
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
#endif`;Ie.instanced_pars_vertex=ES;Ie.instanced_color_pars_vertex=CS;Ie.instanced_vertex=RS;Ie.instanced_color_vertex=IS;function Ld(i){return i.replace("#ifdef USE_INSTANCING","#if defined USE_INSTANCING || defined USE_INSTANCING_INDIRECT")}Ie.project_vertex=Ld(Ie.project_vertex);Ie.worldpos_vertex=Ld(Ie.worldpos_vertex);Ie.defaultnormal_vertex=Ld(Ie.defaultnormal_vertex);Ie.batching_pars_vertex=Ie.batching_pars_vertex.concat(`
#include <instanced_pars_vertex>`);Ie.color_pars_vertex=Ie.color_pars_vertex.concat(`
#include <instanced_color_pars_vertex>`);Ie.batching_vertex=Ie.batching_vertex.concat(`
#include <instanced_vertex>`);Ie.skinning_pars_vertex=PS;Ie.morphinstance_vertex&&(Ie.morphinstance_vertex=Ie.morphinstance_vertex.replaceAll("gl_InstanceID","instanceIndex"));function Dn(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function S0(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function w0(i){let e=new Map,t=new Map,n=i.clone();return A0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function A0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)A0(i.children[n],e.children[n],t)}var Hs=class extends Oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new zd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new bh(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bh(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new jd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);o=gs.resolveURL(l,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ro(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===I0){try{o[it.KHR_BINARY_GLTF]=new Qd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new af(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:o[u]=new Od;break;case it.KHR_DRACO_MESH_COMPRESSION:o[u]=new ef(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[u]=new tf;break;case it.KHR_MESH_QUANTIZATION:o[u]=new nf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function LS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Qt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fd=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],In);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ni(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ma(h),l.distance=u;break;case"spot":l=new va(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Od=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new be(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],In),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}},Bd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},zd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(r,r)}return Promise.all(s)}},kd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Vd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Gd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new be(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],In)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new be().setRGB(r[0],r[1],r[2],In),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},qd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new be().setRGB(r[0],r[1],r[2],In),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(s)}},Yd=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Kd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Qt(this.parser,e,this.name)!==null?kn:null}extendMaterialParams(e,t){let n=Qt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},$d=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Jd=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},bh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},jd=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Re,p=new C,m=new tt,b=new C(1,1,1),w=new la(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),w.setMatrixAt(x,_.compose(p,m,b));for(let x in c)if(x==="_COLOR_0"){let A=c[x];w.instanceColor=new Ni(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Gt.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},I0="glTF",Wa=12,T0={JSON:1313821514,BIN:5130562},Qd=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==I0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Wa,r=new DataView(e,Wa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===T0.JSON){let l=new Uint8Array(e,Wa+o,a);this.content=n.decode(l)}else if(c===T0.BIN){let l=Wa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},ef=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=rf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=rf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=wo[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},a,l,In,d)})})}},tf=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},nf=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Sh=class extends Fi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,b=1-p,w=m-d+u;for(let x=0;x!==a;x++){let A=o[_+x+a],M=o[_+x+c]*h,E=o[g+x+a],y=o[g+x]*h;r[x]=b*A+w*M+p*E+m*y}return r}},NS=new tt,sf=class extends Sh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return NS.fromArray(r).normalize().toArray(r),r}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},E0={9728:Jt,9729:jt,9984:Sl,9985:ao,9986:dr,9987:xi},C0={33071:ei,33648:Yr,10497:Xn},Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DS={CUBICSPLINE:void 0,LINEAR:or,STEP:rr},Dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function US(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Bt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),i.DefaultMaterial}function xr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FS(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function OS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BS(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ud(t.attributes):e=i.indices+":"+Ud(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Ud(i.targets[n]);return e}function Ud(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function of(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var kS=new Re,af=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new LS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new ba(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return xr(r,a,s),Hi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nd[s.type],a=wo[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new $t(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Nd[s.type],l=wo[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(f&&f!==u){let m=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,w=t.cache.get(b);w||(_=new l(a,m*f,s.count*f/h),w=new eo(_,f/h),t.cache.add(b,w)),p=new to(w,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new $t(_,c,g);if(s.sparse!==void 0){let m=Nd.SCALAR,b=wo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new b(o[1],w,s.sparse.count*m),M=new l(o[2],x,s.sparse.count*c);a!==null&&(p=new $t(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,y=A.length;E<y;E++){let T=A[E];if(p.setX(T,M[E*c]),c>=2&&p.setY(T,M[E*c+1]),c>=3&&p.setZ(T,M[E*c+2]),c>=4&&p.setW(T,M[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=E0[d.magFilter]||jt,h.minFilter=E0[d.minFilter]||xi,h.wrapS=C0[d.wrapS]||Xn,h.wrapT=C0[d.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Jt&&h.minFilter!==jt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let p=new on(_);p.needsUpdate=!0,d(p)}),t.load(gs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Hi(u,o),u.userData.mimeType=o.mimeType||zS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Di,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new io,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Bt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=s[it.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new be(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],In),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Sn);let h=r.alphaMode||Dd.OPAQUE;if(h===Dd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Dd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ht&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ht){let u=r.emissiveFactor;a.emissive=new be().setRGB(u[0],u[1],u[2],In)}return r.emissiveTexture!==void 0&&o!==Ht&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Hi(u,r),t.associations.set(u,{materials:e}),r.extensions&&xr(s,u,r),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return R0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=BS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=R0(new It,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?US(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],p=o[f],m,b=l[f];if(p.mode===si.TRIANGLES||p.mode===si.TRIANGLE_STRIP||p.mode===si.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new aa(_,b):new ze(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===si.TRIANGLE_STRIP?m.geometry=bd(m.geometry,Oa):p.mode===si.TRIANGLE_FAN&&(m.geometry=bd(m.geometry,mo));else if(p.mode===si.LINES)m=new ha(_,b);else if(p.mode===si.LINE_STRIP)m=new cr(_,b);else if(p.mode===si.LINE_LOOP)m=new ua(_,b);else if(p.mode===si.POINTS)m=new cs(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&OS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Hi(m,r),p.extensions&&xr(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&xr(s,u[0],r),u[0];let d=new ft;r.extensions&&xr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(Wt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Fs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Re;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ca(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let w=0,x=d.length;w<x;w++){let A=d[w],M=f[w],E=g[w],y=_[w],T=p[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,M,E,y,T);if(P)for(let R=0;R<P.length;R++)m.push(P[R])}let b=new lr(r,void 0,m);return Hi(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,kS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new no:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Gt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Hi(h,r),r.extensions&&xr(n,h,r),r.matrix!==void 0){let u=new Re;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Hi(r,n),n.extensions&&xr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(w0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Pn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Gs[r.path]===Gs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Gs[r.path]){case Gs.weights:h=fs;break;case Gs.rotation:h=ps;break;case Gs.translation:case Gs.scale:h=Ds;break;default:n.itemSize===1?h=fs:h=Ds;break}let u=s.interpolation!==void 0?DS[s.interpolation]:or,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new h(c[f]+"."+Gs[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=of(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ps?sf:Sh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function VS(i,e,t){let n=e.attributes,s=new Yt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let h=of(wo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=of(wo[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new an;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function R0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=rf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==In&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),Hi(i,e),VS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FS(i,e.targets,t):i})}var GS=new Hs,HS=new Set(["wheel-back"]);function WS(i){let e=i.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(e,0,0);let s=n.getImageData(0,0,t.width,t.height).data,r=i.flipY===!0;return(o,a)=>{let c=r?1-a:a,l=Math.min(t.width-1,Math.max(0,Math.round(o*t.width-.5))),u=(Math.min(t.height-1,Math.max(0,Math.round(c*t.height-.5)))*t.width+l)*4;return[s[u],s[u+1],s[u+2]]}}function XS(i){let e=[],t=null,n=[];return i.updateMatrixWorld(!0),i.traverse(s=>{if(!s.isMesh||HS.has(s.name))return;let r=s.geometry.clone();if(r.applyMatrix4(new Re().copy(s.matrixWorld)),r.index){let a=r.toNonIndexed();r.dispose(),e.push(a)}else e.push(r);n.push(!/wheel/i.test(s.name||""));let o=Array.isArray(s.material)?s.material[0]:s.material;o&&o.map&&!t&&(t=o.map)}),{geos:e,texture:t,bodyRanges:n}}function N0(i,e){let t=i.attributes.position,n=i.attributes.uv,s=t.count/3,r=new Array(s),o=new Float64Array(s),a=new C,c=new C,l=new C;for(let h=0;h<s;h++){let u=h*3,d=(n.getX(u)+n.getX(u+1)+n.getX(u+2))/3,f=(n.getY(u)+n.getY(u+1)+n.getY(u+2))/3;r[h]=e(d,f),a.fromBufferAttribute(t,u),c.fromBufferAttribute(t,u+1),l.fromBufferAttribute(t,u+2),c.sub(a),l.sub(a),o[h]=c.cross(l).length()*.5}return{colors:r,areas:o}}function qS(i){return(i[0]>>3)*1024+(i[1]>>3)*32+(i[2]>>3)}function D0(i,e){let{colors:t,areas:n}=N0(i,e),s=new Map,r=new Map;for(let o=0;o<t.length;o++){let a=qS(t[o]);s.set(a,(s.get(a)||0)+n[o]),r.has(a)||r.set(a,t[o])}return[...s.entries()].map(([o,a])=>({color:r.get(o),area:a})).sort((o,a)=>a.area-o.area)}function U0(i,e,t){return Math.abs(i[0]-e[0])<=t&&Math.abs(i[1]-e[1])<=t&&Math.abs(i[2]-e[2])<=t}function P0(i){let e=Math.max(i[0],i[1],i[2]),t=Math.min(i[0],i[1],i[2]);return e===0?0:(e-t)/e}function YS(i,e){let t=D0(i,e),n=[];for(let c of t){let l=n.find(h=>U0(h.rep,c.color,34));l?(l.area+=c.area,l.members.push(c.color)):n.push({rep:c.color,area:c.area,members:[c.color]})}let s=n.filter(c=>P0(c.rep)>=.22),r=s.length?s:n;r.sort((c,l)=>l.area-c.area);let o=r[0],a=n.filter(c=>c!==o&&c.area>=o.area*.25&&P0(c.rep)<.32).slice(0,1);return[o,...a]}function KS(i,e,t){let n=i.attributes.position,s=i.attributes.normal,{colors:r}=N0(i,e),o={p:[],n:[],c:[]},a={p:[],n:[],c:[]},c=Math.max(...t.map(l=>Math.max(l.rep[0],l.rep[1],l.rep[2])))||255;for(let l=0;l<r.length;l++){let h=r[l],u=t.some(f=>U0(h,f.rep,34)),d=u?o:a;for(let f=0;f<3;f++){let g=l*3+f;if(d.p.push(n.getX(g),n.getY(g),n.getZ(g)),d.n.push(s.getX(g),s.getY(g),s.getZ(g)),u){let _=Math.min(1,Math.max(h[0],h[1],h[2])/c);d.c.push(_,_,_)}else d.c.push((h[0]/255)**2.2,(h[1]/255)**2.2,(h[2]/255)**2.2)}}return{paint:o,trim:a}}function L0(i,e){if(!i.p.length)return null;let t=e.clone();return t.deleteAttribute("uv"),t.attributes.tangent&&t.deleteAttribute("tangent"),t.setAttribute("position",new Ze(i.p,3)),t.setAttribute("normal",new Ze(i.n,3)),t.setAttribute("color",new Ze(i.c,3)),t.setIndex(null),t}async function F0(i,e){let t=await GS.loadAsync(i),{geos:n,texture:s,bodyRanges:r}=XS(t.scene);if(!s)throw new Error("no palette texture in "+i);s.image.width===void 0&&await s.image.decode?.();let o=WS(s),a=n.filter((R,L)=>r[L]),c=An(n,!1),l=An(a,!1),h=YS(l,o),u=h[0].rep,d=D0(l,o).slice(0,6).map(R=>({color:R.color,area:+R.area.toFixed(3)})),{paint:f,trim:g}=KS(c,o,h),_=L0(f,c),p=L0(g,c),m=new Yt().setFromBufferAttribute(c.attributes.position),b=new C;m.getSize(b);let w=b.x>b.z,x=w?b.x:b.z,A=e/x;for(let R of[_,p])R&&(w&&R.rotateY(Math.PI/2),R.scale(A,A,A));let M=new Yt;for(let R of[_,p])R&&(R.computeBoundingBox(),M.union(R.boundingBox));let E=-(M.min.x+M.max.x)/2,y=-M.min.y,T=-(M.min.z+M.max.z)/2;for(let R of[_,p])R&&(R.translate(E,y,T),R.computeBoundingBox());c.dispose(),l.dispose();let P=new C;(_||p).computeBoundingBox(),M.makeEmpty();for(let R of[_,p])R&&M.union(R.boundingBox);M.getSize(P);for(let R of[_,p])R&&(R.userData.shared=!0);return{paintGeo:_,trimGeo:p,width:P.x,height:P.y,length:P.z,paintColor:u,palette:d,triangles:(_?_.attributes.position.count:0)/3+(p?p.attributes.position.count:0)/3}}var Wi=[{name:"sedan",file:"sedan",len:4.55,weight:27},{name:"hatchback",file:"hatchback-sports",len:4.05,weight:21},{name:"suv",file:"suv",len:4.85,weight:19},{name:"crossover",file:"suv-luxury",len:4.7,weight:13},{name:"van",file:"van",len:4.9,weight:12},{name:"delivery",file:"delivery",len:5.25,weight:8}],qa=[{name:"white",hex:15527664,weight:9},{name:"silver",hex:11712445,weight:7},{name:"black",hex:2303530,weight:8},{name:"grey",hex:7304572,weight:6},{name:"blue",hex:2974648,weight:11},{name:"red",hex:12791595,weight:11},{name:"navy",hex:2241628,weight:6},{name:"green",hex:3115602,weight:8},{name:"orange",hex:14710303,weight:8},{name:"teal",hex:2071208,weight:6},{name:"plum",hex:8207219,weight:4},{name:"beige",hex:14076326,weight:4},{name:"brown",hex:7031344,weight:3},{name:"yellow",hex:15712281,weight:9}],Ao=[{name:"dust",label:"dusty",weight:30},{name:"grime",label:"filthy",weight:17},{name:"rust",label:"rusted",weight:14},{name:"leaves",label:"leaf-buried",weight:10},{name:"stripped",label:"stripped",weight:9},{name:"sunken",label:"half-buried",weight:9},{name:"tipped",label:"tipped-over",weight:7},{name:"flipped",label:"overturned",weight:4}],O0={dust:{hex:10984584,lo:.68,hi:.88},grime:{hex:5000261,lo:.64,hi:.84},rust:{hex:8144164,lo:.68,hi:.9},leaves:{hex:7299897,lo:.7,hi:.9},stripped:{hex:7162671,lo:.74,hi:.92},sunken:{hex:7299921,lo:.72,hi:.9},tipped:{hex:9340020,lo:.68,hi:.88},flipped:{hex:8813676,lo:.72,hi:.9}},B0=new be,z0=new be;function lf(i,e,t){let n=O0[e]||O0.dust;return B0.setHex(i),z0.setHex(n.hex),B0.lerp(z0,n.lo+t*(n.hi-n.lo)).getHex()}var cf=[1,1,1],ZS=[.1,.112,.13],k0=[.05,.05,.055];function V0(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e[0],s[r*3+1]=e[1],s[r*3+2]=e[2];return t.setAttribute("color",new Ze(s,3)),t}function Ya(i){let e=i.reduce((s,r)=>s+r.weight,0),t=[],n=0;for(let s of i)n+=s.weight/e,t.push(n);return{entries:i,cum:t}}function Ka(i,e){let{entries:t,cum:n}=i;for(let s=0;s<n.length;s++)if(e<n[s])return s;return t.length-1}function Xa(i,e,t,n,s,r,o){let a=new pn(i,e,t);return a.translate(n,s,r),V0(a,o)}function wh(){let i=new It;return i.setAttribute("position",new Ze([0,0,0,0,0,0,0,0,0],3)),i.setAttribute("normal",new Ze([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new Ze([0,0,0,0,0,0,0,0,0],3)),i}function G0(i){let e=i.height*.58,t=i.height-e;return An([Xa(i.width*1.02,i.height*.18,i.length*.92,0,i.height*.09,0,k0),Xa(i.width,e*.85,i.length,0,i.height*.18+e*.42,0,cf),Xa(i.width*.84,t,i.length*.52,0,e+t/2,-i.length*.04,cf)],!1)}function H0(i){let e=i.height*.82;return Xa(i.width,e,i.length,0,e/2,0,cf)}function W0(i){let e=i.height*.52,t=[];for(let n of[-1,1])for(let s of[-1,1]){let r=new pi(e*.43,e*.43,e*.5,6);r.rotateZ(Math.PI/2),r.translate(n*(i.width*.5-e*.27),e*.43,s*i.length*.31),t.push(V0(r,k0))}return t.push(Xa(i.width*.84,i.height*.22,i.length*.42,0,i.height*.68,-i.length*.03,ZS)),An(t,!1)}var Eh=12.5,Eo=2.4,hf={};function nt(i,e,t){let n=i+":"+(e||0)+":"+(t||0);return hf[n]||(hf[n]=new Bt({color:i,roughness:e===void 0?.8:e,metalness:t||0})),hf[n]}function ot(i,e,t,n,s,r,o){let a=new ze(new pn(i,e,t),o);return a.position.set(n,s,r),a}function Co(i,e,t,n,s,r,o){let a=new ze(new pi(i,i,e,o||10),r);return a.position.set(t,n,s),a}var $0=10131341,Za=8223346,X0=2896186,df=11569700;var Ro=8144164,_s=6042393;function $S(i){let e=new ft;for(let o of[-1,1])e.add(ot(1,.62,4.2,o*1.35,.28,0,nt(X0,.95))),e.add(ot(1.06,.22,4.3,o*1.35,.55,0,nt(_s,.95)));e.add(Co(1.05,.34,0,.78,0,nt(Za,.7,.3),12));let t=ot(2.5,1.9,3.4,-.2,1.9,0,nt(Ro,.9));e.add(t),e.add(ot(2.6,.2,3.5,-.2,2.92,0,nt(_s,.9))),e.add(ot(1.2,1.4,1.3,1.15,1.75,1.15,nt(df,.85))),e.add(ot(.06,1,1,1.76,1.9,1.15,nt(1316893,.9)));let n=ot(.55,.55,6.4,0,4.2,2.6,nt(Ro,.88));n.rotation.x=-.62,e.add(n);let s=ot(.42,.42,3.6,0,6.6,5.4,nt(_s,.88));s.rotation.x=.95,e.add(s),e.add(Co(.035,1.5,0,5.5,6.9,nt(X0,.8),6));let r=ot(.7,.35,.7,0,4.7,6.9,nt(Za,.7,.35));e.add(r);for(let o=0;o<4;o++){let a=o/4*Math.PI*2+.78,c=ot(.16,1.1,.16,Math.cos(a)*.42,4.15,6.9+Math.sin(a)*.42,nt(Za,.75,.3));c.rotation.set(Math.sin(a)*.5,0,-Math.cos(a)*.5),e.add(c)}return e.userData.blockers=[{x:0,z:0,r:3}],e.rotation.y=i()*Math.PI*2,e}function JS(i){let e=new ft,t=[Ro,_s,7037266,5919817,8016438],n=1/Eo,s=.62*n,r=1.14*n,o=3+(i()*2|0);for(let c=0;c<o;c++){let l=(c-(o-1)/2)*s*1.28,h=(i()-.5)*r*.3,u=5+(i()*5|0),d=.02*n;for(let f=0;f<u;f++){let g=(.17+i()*.09)*n,_=s*(1+i()*.16),p=r*(.92+i()*.12),m=ot(_,g,p,l+(i()-.5)*s*.3,d+g/2,h+(i()-.5)*r*.16,nt(t[i()*t.length|0],.92));if(m.rotation.set((i()-.5)*.07,(i()-.5)*.35,(i()-.5)*.09),e.add(m),f>=u-3){let b=ot(_*.74,g*.55,p*.4,m.position.x+(i()-.5)*s*.2,d+g+g*.26,m.position.z+(i()-.5)*r*.1,nt(4143924,.9));b.rotation.copy(m.rotation),e.add(b)}d+=g+.012*n}}let a=.19*n;for(let c=0;c<3;c++){let l=new ze(new pi(a,a,a*.55,9),nt(3354667,.95));l.rotation.set(Math.PI/2,i()*3,0),l.position.set((i()-.5)*r*2.6,a*.28,(i()-.5)*r*2.6),e.add(l)}return e.userData.blockers=[{x:0,z:0,r:Math.max(r*1.1,s*o*.85)}],e.rotation.y=i()*Math.PI*2,e}function jS(i){let e=new ft,t=.045;for(let a of[-1,1])for(let c of[-1,1])e.add(ot(.5,.34,.5,a*1.5,.17,c*1,nt($0,.95)));let n=ot(3.8,2.1,2.5,0,1.4,0,nt(9276028,.9));n.rotation.z=t,e.add(n);let s=ot(4,.16,2.7,.05,2.5,0,nt(Ro,.9));s.rotation.z=t,e.add(s),e.add(ot(.06,1.5,.8,1.9,1.1,-.5,nt(1316893,.9)));let r=ot(.08,1.5,.8,1.95,1.1,.45,nt(7036748,.9));r.rotation.y=-.7,e.add(r),e.add(ot(.05,.85,1.2,1.9,1.7,.75,nt(1316893,.9))),e.add(ot(.07,.95,1.3,1.88,1.7,.75,nt(7036748,.9)));for(let a=0;a<2;a++)e.add(Co(.3,.9,2.6+a*.75,.45,-1.5+a*.4,nt(a?_s:5919817,.93),10));let o=ot(.12,2.4,.12,-2,1.1,.6,nt(Za,.8,.2));return o.rotation.z=-.38,e.add(o),e.userData.blockers=[{x:0,z:0,r:2.4}],e.rotation.y=i()*Math.PI*2,e}function QS(i){let e=new ft,t=nt(3814702,.95),n=nt(4867128,.93),s=[[0,0,6],[1.15,.3,5],[-.9,.9,4],[.35,-1.15,5],[-1.2,-.7,3]],r=0;for(let[a,c,l]of s)for(let h=0;h<l;h++){let u=new ze(new so(.42,.17,6,14),r++&1?n:t);u.rotation.x=Math.PI/2,u.rotation.z=i()*1.5,u.position.set(a+(i()-.5)*.06,.19+h*.35,c+(i()-.5)*.06),e.add(u)}let o=new ze(new so(.42,.17,6,14),t);return o.position.set(1.9,.42,-.7),o.rotation.z=.35,e.add(o),e.add(ot(2.6,.9,.1,0,.45,1.9,nt(5462111,.8))),e.userData.blockers=[{x:0,z:0,r:2.6}],e.rotation.y=i()*Math.PI*2,e}function e1(i){let e=new ft,t=1/Eo,n=1.14*t*1.35,s=.62*t*1.6,r=nt(Ro,.92),o=nt(_s,.9),a=nt(6971993,.85,.25);e.add(ot(s*2.4,.1*t,n*1.5,0,.05*t,0,nt($0,.95))),e.add(ot(s*1.9,.22*t,n*1.15,0,.2*t,0,a));for(let d of[-1,1]){e.add(ot(.3*t,1.05*t,n*1.2,d*s*.98,.7*t,0,r)),e.add(ot(.3*t,.86*t,.26*t,d*s*.55,.62*t,-n*.56,o));for(let f=0;f<4;f++)e.add(ot(.38*t,.11*t,n*.17,d*s*.98,1.26*t,(f-1.5)*n*.27,o))}let c=(1.225+.15)*t,l=ot(s*1.96,.3*t,n*1.2,0,c,0,o);e.add(l);for(let d of[-1,1])e.add(Co(.13*t,.62*t,d*s*.62,c+.46*t,-n*.12,nt(Za,.35,.6),8)),e.add(Co(.075*t,.3*t,d*s*.62,c+.86*t,-n*.12,nt(9407360,.25,.8),8));e.add(ot(s*1.5,.13*t,.2*t,0,c+.98*t,-n*.12,o)),e.add(ot(s*.85,.62*t,n*.5,s*1.55,.35*t,-n*.3,nt(df,.85))),e.add(ot(s*.34,.72*t,s*.3,-s*1.5,.4*t,n*.34,a)),e.add(Co(.055*t,.95*t,s*1.55,.95*t,-n*.3,o,8));let h=ot(.62*t,.26*t,1.14*t,0,.44*t,n*.05,nt(8016438,.92));h.rotation.set(.03,.06,.02),e.add(h);let u=ot(.58*t,.19*t,.42*t,.02*t,.4*t,n*.66,nt(_s,.93));return u.rotation.set(.16,.05,.03),e.add(u),e.userData.blockers=[{x:0,z:0,r:n*1.05},{x:s*1.55,z:-n*.3,r:s*.7}],e.rotation.y=i()*Math.PI*2,e}function t1(i){let e=new ft,t=1/Eo,n=[Ro,_s,6117966,df,4871488],s=2+(i()*2|0),r=(o,a,c,l,h)=>{let u=new ft,d=1.05*t,f=.62*t,g=2.1*t,_=nt(h,.93);u.add(ot(d,.07*t,g,0,.035*t,0,_));for(let p of[-1,1])u.add(ot(d,f,.07*t,0,f/2,p*g/2,_));for(let p of[-1,1])u.add(ot(.07*t,f,g,p*d/2,f/2,0,_));for(let p=0;p<5;p++)for(let m of[-1,1])u.add(ot(.05*t,f*.92,.1*t,m*(d/2+.02*t),f*.46,(p-2)*g*.19,nt(_s,.9)));for(let p=0;p<7;p++){let m=ot((.18+i()*.3)*t,(.09+i()*.12)*t,(.2+i()*.45)*t,(i()-.5)*d*.66,f*(.55+i()*.5),(i()-.5)*g*.72,nt(n[i()*n.length|0],.94));m.rotation.set(i()*1.4,i()*3,i()*1),u.add(m)}return u.position.set(o,0,a),u.rotation.set(0,c,l),u};for(let o=0;o<s;o++)e.add(r((o-(s-1)/2)*1.35*t,(i()-.5)*.5*t,(i()-.5)*.25,0,n[i()*n.length|0]));return e.add(r(s*.85*t,1.5*t,i()*3,Math.PI*.42,n[i()*n.length|0])),e.userData.blockers=[{x:0,z:0,r:(s*.75+.6)*t*1.1}],e.rotation.y=i()*Math.PI*2,e}var q0=[$S,JS,QS,e1,jS,t1],J0=new Bt({vertexColors:!0,roughness:.78,metalness:0}),j0=new Bt({vertexColors:!0,roughness:.4,metalness:.5});J0.userData.shared=!0;j0.userData.shared=!0;var Ah=new be;function n1(i,e){Ah.copy(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=Ah.r,n[s*3+1]=Ah.g,n[s*3+2]=Ah.b;return i.setAttribute("color",new Ze(n,3)),i}function i1(i){i.updateMatrixWorld(!0);let e=[],t=[];i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.clone();r.applyMatrix4(s.matrixWorld);for(let o of["uv","uv1","uv2","tangent"])r.attributes[o]&&r.deleteAttribute(o);n1(r,s.material.color),(s.material.metalness>.2?t:e).push(r)});let n=new ft;e.length&&n.add(new ze(An(e,!1),J0)),t.length&&n.add(new ze(An(t,!1),j0));for(let s of e.concat(t))s.dispose();return n}var ME=new C(0,1,0),Y0=new C,_r=new C,K0=new Re,Z0=new tt;function s1(i,e,t,n){_r.set(0,1,0).cross(e),_r.lengthSq()<1e-8&&_r.set(1,0,0).cross(e),_r.normalize(),Z0.setFromAxisAngle(e,n),_r.applyQuaternion(Z0).normalize(),Y0.crossVectors(e,_r),K0.makeBasis(Y0,e,_r),i.quaternion.setFromRotationMatrix(K0),i.position.copy(e).multiplyScalar(t)}function Q0(i,e,t){let n=new ft,s=Dn(t^4003771),r=[],o=[],a=new C;return i.forEach((c,l)=>{let h=q0[l%q0.length],u=new ft,d=h(s),f=i1(d);f.scale.setScalar(Eo),u.add(f),s1(u,c.c,e-.35,s()*Math.PI*2),n.add(u),r.push({dir:c.c.clone(),cos:Math.cos(Eh/e)});let g=d.userData.blockers||[{x:0,z:0,r:3}];for(let _ of g){a.set(_.x,0,_.z).applyEuler(d.rotation).multiplyScalar(Eo).applyQuaternion(u.quaternion).add(u.position);let p=_.r*Eo/e;o.push({dir:a.clone().normalize(),cos:Math.cos(p),sin:Math.sin(p)})}}),{group:n,clearings:r,blockers:o}}function xs(i,e){let t=i.index?i.toNonIndexed():i,n=new be(e),s=t.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return t.setAttribute("color",new Ze(r,3)),t}var uf=[7290658,8144164,5919817,4867132,7037266,3946547];function Th(i,e){return e[i()*e.length|0]}function r1(i){let e=[];for(let t=0;t<9;t++){let n=.5+i()*1.1,s=.4+i()*.9,r=new pn(n,.05+i()*.07,s);r.rotateX((i()-.5)*1.5),r.rotateY(i()*6.283),r.rotateZ((i()-.5)*1.5),r.translate((i()-.5)*1.1,.08+t*.1+i()*.12,(i()-.5)*1.1),e.push(xs(r,Th(i,uf)))}for(let t=0;t<2;t++){let n=.9+i()*.8,s=new pi(.045,.045,n,5);s.rotateZ(1.1+i()*.5),s.rotateY(i()*6.283),s.translate((i()-.5)*.8,.35+i()*.4,(i()-.5)*.8),e.push(xs(s,5130048))}return An(e,!1)}function o1(i){let e=[],t=2+(i()*2|0);for(let n=0;n<t;n++){let s=.85+i()*.2,r=new pi(.31,.31,s,10);n>0&&i()<.55?(r.rotateZ(Math.PI/2),r.rotateY(i()*6.283),r.translate((i()-.5)*1.5,.31,(i()-.5)*1.5)):r.translate((i()-.5)*1.3,s/2,(i()-.5)*1.3),e.push(xs(r,Th(i,[7290658,5919817,4867132,8144164])))}return An(e,!1)}function a1(i){let e=[],t=2+i()*.9,n=.12+i()*.3,s=new pn(.13,t,.13);if(s.rotateZ(n),s.translate(0,t/2,0),e.push(xs(s,6248008)),i()<.75){let r=new pn(1.5+i()*.8,.09,.06);r.rotateZ(-.25-i()*.5),r.rotateY(i()*6.283),r.translate(.35,t*(.5+i()*.3),0),e.push(xs(r,7290658))}return An(e,!1)}function c1(i){let e=[],t=new pn(.9,.06,.62);t.rotateY(i()*6.283),t.rotateX((i()-.5)*.3),t.translate((i()-.5)*.9,.05,(i()-.5)*.9),e.push(xs(t,Th(i,uf)));let n=new pn(1.15,.09,.14);n.rotateY(i()*6.283),n.translate((i()-.5)*1.2,.06,(i()-.5)*1.2),e.push(xs(n,7037266));let s=new pi(.28,.28,.16,9);s.rotateX(Math.PI/2),s.rotateZ(i()*6.283),s.translate((i()-.5)*1.3,.08,(i()-.5)*1.3),e.push(xs(s,3354667));for(let r=0;r<5;r++){let o=new pn(.1+i()*.18,.05,.1+i()*.16);o.rotateY(i()*6.283),o.rotateX((i()-.5)*.5),o.translate((i()-.5)*2,.04,(i()-.5)*2),e.push(xs(o,Th(i,uf)))}return An(e,!1)}var l1={heap:r1,drums:o1,post:a1,parts:c1},h1=[{make:"heap",height:1.6,weight:26,road:!1},{make:"parts",height:.5,weight:20,road:!1},{make:"drums",height:1.1,weight:14,road:!1},{make:"post",height:2.6,weight:12,road:!1},{file:"rocks",height:1.3,weight:10,road:!1},{file:"rocks-tall",height:2.1,weight:6,road:!1},{make:"heap",height:2.4,weight:8,road:!0},{file:"lightpost-single",height:3.8,weight:14,road:!0}],To=null;async function eg(){if(To)return To;let i=new Hs,e=Dn(6040081);return To=await Promise.all(h1.map(async t=>{let n,s=null;if(t.make)n=l1[t.make](e);else{let l=await i.loadAsync("assets/models/props/"+t.file+".glb"),h=[];l.scene.updateMatrixWorld(!0),l.scene.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();d.applyMatrix4(u.matrixWorld);for(let g of["uv1","uv2","tangent"])d.attributes[g]&&d.deleteAttribute(g);h.push(d);let f=Array.isArray(u.material)?u.material[0]:u.material;f&&f.map&&!s&&(s=f.map)}),n=An(h,!1);for(let u of h)u.dispose()}n.computeBoundingBox();let r=n.boundingBox,o=t.height/Math.max(1e-6,r.max.y-r.min.y);n.scale(o,o,o),n.computeBoundingBox();let a=n.boundingBox;n.translate(-(a.min.x+a.max.x)/2,-a.min.y,-(a.min.z+a.max.z)/2),n.userData.shared=!0,s&&(s.colorSpace=Nt,s.userData.shared=!0);let c=new us(t.make?{vertexColors:!0}:{map:s,color:9341568});return c.userData.shared=!0,{...t,geo:n,material:c}})),To}function tg(){if(!To)throw new Error("call loadScatterKit() first");return To}var yr=1.15,ag=2.45;function u1(i){return Math.sqrt(i*ag/(4*Math.PI))}var d1=[147,135,99],f1=[156,144,108],ng=[110,102,86],ig=[147,139,120],p1=[168,161,128],sg=[[74,68,60],[116,62,32],[46,43,39],[138,132,118],[95,56,30],[58,55,49]],Ws=null;async function cg(){return Ws||(Ws={cars:await Promise.all(Wi.map(e=>F0("assets/models/"+e.file+".glb",yr)))},Ws)}function rg(i,e,t){let n=i+.5,s=Math.acos(1-2*n/e),r=Math.PI*(1+Math.sqrt(5))*n;return t.set(Math.cos(r)*Math.sin(s),Math.cos(s),Math.sin(r)*Math.sin(s))}function m1(i,e){let t=Dn(i^3119643),n=[];for(let r=0;r<9;r++){let o=new C(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(4+t()*4.4)/e;n.push({n:o,half:Math.sin(a),edge:Math.sin(a*.88),line:Math.sin(a*.06)})}let s=[];for(let r=0;r<9;r++){let o=new C(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(Eh+4.5+t()*8)/e;s.push({c:o,cos:Math.cos(a),rim:Math.cos(a*.94)})}return{roads:n,yards:s}}function g1(i){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d"),s=Dn(i),r=(h,u,d)=>{n.fillStyle="#808080",n.fillRect(0,0,256,256),n.globalCompositeOperation="lighter";for(let f=0;f<h;f++){let g=s()*256,_=s()*256,p=u+s()*(d-u),m=s()<.5;for(let b=-1;b<=1;b++)for(let w=-1;w<=1;w++){let x=n.createRadialGradient(g+b*256,_+w*256,0,g+b*256,_+w*256,p),A=m?.34:0;if(x.addColorStop(0,"rgba(255,255,255,"+(m?.34:0)+")"),x.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=x,n.beginPath(),n.arc(g+b*256,_+w*256,p,0,Math.PI*2),n.fill(),!m){n.globalCompositeOperation="multiply";let M=n.createRadialGradient(g+b*256,_+w*256,0,g+b*256,_+w*256,p);M.addColorStop(0,"rgba(90,90,90,0.55)"),M.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=M,n.beginPath(),n.arc(g+b*256,_+w*256,p,0,Math.PI*2),n.fill(),n.globalCompositeOperation="lighter"}}}return n.globalCompositeOperation="source-over",n.getImageData(0,0,256,256)},o=r(26,26,78),a=r(90,7,24),c=n.createImageData(256,256);for(let h=0;h<256*256;h++)c.data[h*4]=o.data[h*4],c.data[h*4+1]=a.data[h*4],c.data[h*4+2]=0,c.data[h*4+3]=255;n.putImageData(c,0,0);let l=new ls(t);return l.wrapS=Xn,l.wrapT=Xn,l}var ff=null,x1=`
varying vec3 vRustPos;
`,_1=`
vRustPos = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
`,y1=`
uniform sampler2D rustMap;
uniform float rustAmt;
varying vec3 vRustPos;
`,v1=`
vec3 rp = vRustPos;
vec2 ruvA = vec2( rp.x + rp.y * 0.6, rp.z + rp.y * 0.6 ) * 0.85;
vec2 ruvB = vec2( rp.x + rp.z, rp.y * 0.55 + ( rp.x - rp.z ) * 0.24 ) * 2.30;
float nBig = texture2D( rustMap, ruvA ).r;
float nFine = texture2D( rustMap, ruvB ).g;
float mRust = smoothstep( 0.60, 0.95, nBig ) * rustAmt * ( 0.55 + 0.45 * nBig );
float mPale = smoothstep( 0.64, 0.96, nFine ) * rustAmt * 0.34;
vec3 rustCol = vec3( 0.245, 0.100, 0.046 );
// Was 1.55 + 0.10 \u2014 a bleach patch that bright reads as a highlight, i.e. as
// polish, on a car that is supposed to be dead.
vec3 paleCol = diffuseColor.rgb * 1.28 + 0.045;
diffuseColor.rgb = mix( diffuseColor.rgb, rustCol, mRust );
diffuseColor.rgb = mix( diffuseColor.rgb, paleCol, mPale );
diffuseColor.rgb *= 0.90 + 0.20 * nFine;
`;function pf(i,e){return ff||(ff=g1(5955329)),i.onBeforeCompile=t=>{t.uniforms.rustMap={value:ff},t.uniforms.rustAmt={value:e},t.vertexShader=t.vertexShader.replace("#include <common>","#include <common>"+x1).replace("#include <worldpos_vertex>","#include <worldpos_vertex>"+_1),t.fragmentShader=t.fragmentShader.replace("#include <common>","#include <common>"+y1).replace("#include <color_fragment>","#include <color_fragment>"+v1)},i.customProgramCacheKey=()=>"weathered"+e,i}function M1(i){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128),r=Dn(i),o=new Float32Array(16384);for(let c=0;c<o.length;c++)o[c]=r();for(let c=0;c<128;c++)for(let l=0;l<128;l++){let h=o[c*128+l]*.62;h+=o[c*3%128*128+l*3%128]*.38;let u=Math.round(40+h*215),d=(c*128+l)*4;s.data[d]=u,s.data[d+1]=u,s.data[d+2]=u,s.data[d+3]=255}n.putImageData(s,0,0);let a=new ls(t);return a.wrapS=Xn,a.wrapT=Xn,a}async function b1(i,e){let t=()=>new Promise(p=>setTimeout(p,0)),r=document.createElement("canvas");r.width=4096,r.height=2048;let o=r.getContext("2d"),a=o.createImageData(4096,2048),c=a.data,{roads:l,yards:h}=i,u=Dn(e^8133973),d=new Float32Array(4096);for(let p=0;p<d.length;p++)d[p]=u()*2-1;let f=new C,g=0;for(let p=0;p<2048;p++){(p&255)===255&&await t();let m=(p+.5)/2048*Math.PI,b=Math.sin(m),w=Math.cos(m);for(let x=0;x<4096;x++){let A=(x+.5)/4096*Math.PI*2;f.set(-Math.cos(A)*b,w,Math.sin(A)*b);let M=null,E=!1;for(let T=0;T<h.length;T++){let P=f.dot(h[T].c);if(P>h[T].cos){M=P>h[T].rim?ng:ig,E=!0;break}}if(!E)for(let T=0;T<l.length;T++){let P=Math.abs(f.dot(l[T].n));if(P<l[T].half){P>l[T].edge?M=ig:P<l[T].line&&x+p*3>>5&1?M=p1:M=ng,E=!0;break}}if(!M){let T=(x>>3)*73+(p>>3)*151&16383;T<420?M=sg[T%sg.length]:M=(x>>7)+(p>>7)&1?d1:f1,((x>>5)*197+(p>>5)*419&1023)<52&&(M=[M[0]*.68|0,M[1]*.66|0,M[2]*.63|0])}let y=d[x*31+p*17&4095]*(E?4:5);c[g++]=M[0]+y,c[g++]=M[1]+y,c[g++]=M[2]+y,c[g++]=255}}o.putImageData(a,0,0);let _=new ls(r);return _.colorSpace=Nt,_.anisotropy=16,_}function S1(){let i=document.createElement("canvas");i.width=8,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#3a83c9"),t.addColorStop(.18,"#5896c9"),t.addColorStop(.32,"#93b3c4"),t.addColorStop(.4,"#c9b394"),t.addColorStop(.46,"#dda86a"),t.addColorStop(.5,"#c2884b"),t.addColorStop(1,"#a8763f"),e.fillStyle=t,e.fillRect(0,0,8,256);let n=new ls(i);n.colorSpace=Nt;let s=new ze(new Ui(1,32,24),new Ht({map:n,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));return s.scale.setScalar(10),s.renderOrder=-20,s.frustumCulled=!1,s}function w1(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.26,"rgba(255,255,250,1)"),t.addColorStop(.3,"rgba(255,248,226,0.60)"),t.addColorStop(.44,"rgba(255,242,208,0.14)"),t.addColorStop(1,"rgba(255,236,192,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new ze(new mi(1,1),new Ht({map:new ls(i),transparent:!0,blending:Ea,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));return n.renderOrder=-19,n.frustumCulled=!1,n}function lg(i,e){if(!Ws)throw new Error("call loadToyKit() first");let t=940,n=400,s=Ws.cars[0],r=new Ii;r.add(new Us(15923455,9411206,1.15));let o=new ni(16775406,2.6);o.position.set(2.2,3,3.2),r.add(o);let a=new ni(14215416,1);a.position.set(-2.8,1.6,-1.6),r.add(a),e&&(r.environment=e,r.environmentIntensity=1);let c=14173503,l=pf(new Bt({vertexColors:!0,color:lf(c,"dust",.88),metalness:0,roughness:.88,envMapIntensity:.45}),1),h=new Bt({vertexColors:!0,color:7236189,metalness:0,roughness:.9,envMapIntensity:.3}),u=new Bt({vertexColors:!0,color:c,metalness:.55,roughness:.07,envMapIntensity:1.6}),d=new Bt({vertexColors:!0,metalness:.4,roughness:.18,envMapIntensity:1.3}),f=.62;for(let F of[-1,1]){let z=new ft,K=F>0;z.add(new ze(s.paintGeo,K?u:l)),s.trimGeo&&z.add(new ze(s.trimGeo,K?d:h)),z.position.set(F*1.06,0,0),z.rotation.y=f,r.add(z)}let g=new Vt(28,t/n,.1,40);g.position.set(.1,.88,3.95),g.lookAt(0,.17,0),g.updateMatrixWorld();let _=new _n(t,n,{samples:4}),p=i.getRenderTarget(),m=i.getClearColor(new be),b=i.getClearAlpha(),w=i.toneMappingExposure;i.setRenderTarget(_),i.setClearColor(15988473,1),i.toneMappingExposure=1.25,i.clear(),i.render(r,g);let x=new Uint8Array(t*n*4);i.readRenderTargetPixels(_,0,0,t,n,x),i.setRenderTarget(p),i.setClearColor(m,b),i.toneMappingExposure=w,_.dispose();let A=document.createElement("canvas");A.width=t,A.height=n;let M=A.getContext("2d"),E=M.createImageData(t,n);for(let F=0;F<n;F++){let z=(n-1-F)*t*4;E.data.set(x.subarray(z,z+t*4),F*t*4)}M.putImageData(E,0,0);let y=new C(1.06,s.height*.48,0),T=y.clone().project(g),P=(T.x*.5+.5)*t,R=(-T.y*.5+.5)*n,L=y.clone().add(new C(0,s.height*.62,0)).project(g),k=Math.abs((-L.y*.5+.5)*n-R)*2.4;M.save();let Y=M.createRadialGradient(P,R,k*.2,P,R,k*2.1);Y.addColorStop(0,"rgba(255, 232, 160, 0.42)"),Y.addColorStop(1,"rgba(255, 232, 160, 0)"),M.fillStyle=Y,M.beginPath(),M.arc(P,R,k*2.1,0,Math.PI*2),M.fill(),M.restore(),M.save(),M.shadowColor="rgba(232, 163, 12, 0.55)",M.shadowBlur=14,M.strokeStyle="rgba(255, 255, 255, 0.95)",M.lineWidth=9,M.beginPath(),M.arc(P,R,k,0,Math.PI*2),M.stroke(),M.strokeStyle="#e8a30c",M.lineWidth=5,M.beginPath(),M.arc(P,R,k,0,Math.PI*2),M.stroke(),M.restore();let B=(F,z,K,ee)=>{M.fillStyle=ee,M.beginPath();for(let ie=0;ie<8;ie++){let re=ie/8*Math.PI*2,fe=ie%2===0?K:K*.34;M[ie===0?"moveTo":"lineTo"](F+Math.cos(re)*fe,z+Math.sin(re)*fe)}M.closePath(),M.fill()};return B(P+k*1.05,R-k*1,11,"#ffd94d"),B(P-k*1.25,R-k*.5,7,"#ffffff"),B(P+k*.55,R+k*1.25,6,"#ffd94d"),M.font="800 27px ui-sans-serif, system-ui, sans-serif",M.textAlign="center",M.fillStyle="#5a626c",M.fillText("every car",t*.26,52),M.fillStyle="#1b1e24",M.fillText("one car",t*.74,52),M.font="800 17px ui-sans-serif, system-ui, sans-serif",M.fillStyle="#7b838d",M.fillText("dusty",t*.26,76),M.fillStyle="#b07f05",M.fillText("SPOTLESS",t*.74,76),A.toDataURL("image/jpeg",.93)}var og=1500;async function hg({renderer:i,count:e,seed:t}){if(!Ws)throw new Error("call loadToyKit() first");let n=Ws.cars,s=u1(e),r=m1(t,s),o=()=>new Promise(D=>setTimeout(D,0)),a=Math.cos(Eh/s),c=r.yards.slice(0,8),l=new C;function h(D){for(let te=0;te<c.length;te++)if(D.dot(c[te].c)>a)return!0;return!1}function u(D){let te=0;for(let ye=0;ye<D;ye++)h(rg(ye,D,l))&&te++;return D-te}let d=e+og,f=d;for(let D=0;D<20;D++){let te=u(f);if(te===d)break;f+=d-te}await o(),f+=90;let g=0,_=new Ii,p=new C().setFromSphericalCoords(1,Math.PI*.3,Math.PI*.35),m=new C,b=S1();_.add(b);let w=w1();_.add(w);let x=Dn(t^3262877),A=new Ui(1,7,5),M=[],E=new C,y=new C,T=new C,P=new C;for(let D=0;D<7;D++){E.set(x()*2-1,x()*1.6-.8,x()*2-1).normalize();let te=s+24+x()*12;y.set(0,1,0).cross(E),y.lengthSq()<1e-6&&y.set(1,0,0).cross(E),y.normalize(),T.crossVectors(E,y);let ye=3+(x()*2|0);for(let Te=0;Te<ye;Te++){let Be=A.clone(),Xe=2.4+x()*2.4;Be.scale(Xe,Xe*.5,Xe*.85),P.copy(E).multiplyScalar(te+(x()-.5)*1.4).addScaledVector(y,(Te-(ye-1)/2)*Xe*1.15+(x()-.5)*1.2).addScaledVector(T,(x()-.5)*2.4),Be.translate(P.x,P.y,P.z),M.push(Be)}}let R=new ze(An(M,!1),new us({color:14994347}));R.frustumCulled=!1,_.add(R),A.dispose();for(let D of M)D.dispose();let L=new ft,k=new It;k.setAttribute("position",new Ze([0,0,.14,0,0,-.2,1,.12,-.05],3)),k.computeVertexNormals();let Y=new Ht({color:3752266,side:Sn}),B=Dn(t^7847597),F=[];for(let D=0;D<3;D++){let te=new ft,ye=new ze(k,Y),Te=new ze(k,Y);Te.scale.x=-1,te.add(ye,Te);let Be=new C(B()*2-1,B()*2-1,B()*2-1).normalize(),Xe=new C(0,1,0).cross(Be);Xe.lengthSq()<1e-6&&Xe.set(1,0,0).cross(Be),Xe.normalize();let Et=new C().crossVectors(Be,Xe);F.push({bird:te,left:ye,right:Te,u:Xe,v:Et,alt:s+10+B()*6,rate:.028+B()*.02,phase:B()*Math.PI*2,flap:7+B()*3}),L.add(te)}_.add(L);let z=new C,K=new C,ee=new Re;function ie(D){R.rotation.y=D*.004;for(let te of F){let ye=D*te.rate+te.phase,Te=Math.cos(ye),Be=Math.sin(ye);z.copy(te.u).multiplyScalar(Te).addScaledVector(te.v,Be).multiplyScalar(te.alt),K.copy(te.u).multiplyScalar(-Be).addScaledVector(te.v,Te),te.bird.position.copy(z),ee.lookAt(z,K.add(z),z.clone().normalize()),te.bird.quaternion.setFromRotationMatrix(ee);let Xe=Math.sin(D*te.flap+te.phase)*.65;te.left.rotation.z=Xe,te.right.rotation.z=-Xe}}let re=new Vs(i),fe=new Ii,We=new ze(b.geometry,b.material.clone());We.material.depthTest=!0,We.scale.setScalar(10),fe.add(We);let pt=re.fromScene(fe,0,.1,100);_.environment=pt.texture,_.environmentIntensity=.65,re.dispose(),We.material.dispose();let Qe=new Us(14478588,8354898,.62);_.add(Qe);let J=new ni(16767392,1.78);J.position.copy(p).multiplyScalar(s*4),_.add(J);let ae=p.clone();function se(D){D?ae.copy(D).multiplyScalar(1.45).add(p).normalize():ae.copy(p),J.position.copy(ae).multiplyScalar(s*4)}await o();let ke=new us({map:await b1(r,t)}),Ke=M1(t^1175074);ke.detailMap=Ke,ke.onBeforeCompile=D=>{D.uniforms.detailMap={value:Ke},D.uniforms.detailTile={value:new qe(220,110)},D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D detailMap;
uniform vec2 detailTile;`).replace("#include <map_fragment>",`#include <map_fragment>
float dtl = texture2D( detailMap, vMapUv * detailTile ).r;
diffuseColor.rgb *= 0.82 + 0.33 * dtl;`)};let Oe=new ze(new Ui(s,96,60),ke);_.add(Oe);let Dt=Q0(c,s,t);_.add(Dt.group);let je=Dn(t),Mt=Ya(Wi),dt=Ya(qa),ht=Ya(Ao),qt=new be,Zt=new be(6117452),zt=255,en=new Int32Array(Wi.length),Ut=new C(0,1,0),at=new C,O=new tt,gn=new tt,mt=Dn(t^5352243),I=0,v=0,V=0,X=[],q=new Float32Array(f*3),ce=t^10300183,he=new C,Z=new C,pe=Math.sqrt(ag)*.38;async function Pe(D){let te=Dn(ce);q=new Float32Array(D*3);let ye=D;for(let yt=0;yt<ye;yt++){rg(yt,ye,at),he.set(0,1,0).cross(at),he.lengthSq()<1e-8&&he.set(1,0,0).cross(at),he.normalize(),Z.crossVectors(at,he);let kt=te()*Math.PI*2,Bn=Math.sqrt(te())*pe/s;at.addScaledVector(he,Math.cos(kt)*Bn).addScaledVector(Z,Math.sin(kt)*Bn).normalize(),q[yt*3]=at.x,q[yt*3+1]=at.y,q[yt*3+2]=at.z}let Te=[1,2,3,5,8,13,21,34,55,89,144,233,377,610,987],Be=1.16,Xe=Math.cos(Be/s),Et=new C,_t=new C,Lt=new C;for(let yt=0;yt<8;yt++){await o();for(let kt=0;kt<ye;kt++){Et.set(q[kt*3],q[kt*3+1],q[kt*3+2]);for(let Bn=0;Bn<Te.length;Bn++){let zn=kt+Te[Bn];if(zn>=ye)continue;_t.set(q[zn*3],q[zn*3+1],q[zn*3+2]);let Ho=Et.dot(_t);if(Ho<=Xe||(Lt.copy(Et).addScaledVector(_t,-Ho),Lt.lengthSq()<1e-12))continue;Lt.normalize();let eu=Math.acos(Math.min(1,Ho))*s,ip=(Be-eu)*.52/s;Et.addScaledVector(Lt,ip).normalize(),_t.addScaledVector(Lt,-ip).normalize(),q[zn*3]=_t.x,q[zn*3+1]=_t.y,q[zn*3+2]=_t.z}q[kt*3]=Et.x,q[kt*3+1]=Et.y,q[kt*3+2]=Et.z}}let nn=0;for(let yt=0;yt<ye;yt++)h(at.set(q[yt*3],q[yt*3+1],q[yt*3+2]))||nn++;return nn}g=await Pe(f);for(let D=0;g<d&&D<5;D++)f+=d-g+60,g=await Pe(f);let ue=Math.min(og,Math.max(0,g-e)),de=g-e-ue,ve=new Uint8Array(f),Fe=new Uint8Array(f),He=new Uint8Array(f),N=new Float32Array(f),le=new Int32Array(f),j=new Int32Array(f),ne=new Float32Array(f*3),oe=new Float32Array(f*4);for(let D=0;D<f;D++){if(at.set(q[D*3],q[D*3+1],q[D*3+2]),O.setFromUnitVectors(Ut,at),gn.setFromAxisAngle(Ut,mt()*Math.PI*2),O.multiply(gn),ne[D*3]=at.x*s,ne[D*3+1]=at.y*s,ne[D*3+2]=at.z*s,oe[D*4]=O.x,oe[D*4+1]=O.y,oe[D*4+2]=O.z,oe[D*4+3]=O.w,h(at)){ve[D]=zt;continue}if(de>0&&Math.floor(v*de/g)!==Math.floor((v+1)*de/g)){v++,ve[D]=zt;continue}if(v++,ue>0&&Math.floor(V*ue/(e+ue))!==Math.floor((V+1)*ue/(e+ue))){V++,ve[D]=zt,X.push(D);continue}V++;let te=Ka(Mt,je());ve[D]=te,Fe[D]=Ka(dt,je()),He[D]=Ka(ht,je()),N[D]=je(),le[D]=lf(qa[Fe[D]].hex,Ao[He[D]].name,N[D]),j[D]=qt.setHex(le[D]).lerp(Zt,.55).getHex(),en[te]++,I++}let $=-1;for(let D=0;D<4e3&&$<0;D++){let te=je()*f|0;ve[te]!==zt&&Math.abs(ne[te*3+1]/s)<.74&&($=te)}if($<0){for(let D=0;D<f;D++)if(ve[D]!==zt){$=D;break}}let Ce=new Bt({vertexColors:!0,metalness:0,roughness:.88,envMapIntensity:.45});pf(Ce,1);let Ae=new Bt({vertexColors:!0,metalness:.1,roughness:.5,envMapIntensity:.7}),Pt=new Ht({color:2761496,transparent:!0,opacity:.24,depthWrite:!1}),Tt=new Bt({vertexColors:!0,metalness:0,roughness:.95,envMapIntensity:.35}),Zn=yr*26,$n=yr*34,jh=yr*44,fc=yr*90,ji=[],bi=[],Ys=[],ws=[],Qi=new Int32Array(f).fill(-1),Jn=new Int32Array(Wi.length);function Ks(D,te,ye){let Te=new Ue(D,te,{capacity:Math.max(1,ye),renderer:i});return Te.frustumCulled=!1,Te}let Bo=new C(0,0,1),pc=D=>{let te=Math.imul(D^2654435769,2246822507);return te^=te>>>13,(Math.imul(te,3266489909)>>>0)%1024/1024},Cn=(D,te)=>{let ye=Math.imul(D+te*40503^668265263,374761393);return ye^=ye>>>15,ye=Math.imul(ye,625341585),ye^=ye>>>13,(ye>>>0)%4096/4096},mc=(D,te,ye)=>{let Te=Math.imul(D*374761393+te*668265263+ye*2147483647,625341585);return Te^=Te>>>15,Te=Math.imul(Te^2654435769,2246822507),Te^=Te>>>13,(Te>>>0)%4096/4096},Si=new C,zo=new C,ko=new C,wi=new tt,Vo=new C(1,0,0),Qh=new C(0,1,0),Go=new C(0,0,1),S=new C,U=new C,W=new tt,G=new tt;function H(D,te,ye){S.set(ne[D*3],ne[D*3+1],ne[D*3+2]),W.set(oe[D*4],oe[D*4+1],oe[D*4+2],oe[D*4+3]);let Te=7;U.copy(S).normalize();let Be=Math.round(U.x*Te),Xe=Math.round(U.y*Te),Et=Math.round(U.z*Te),_t=mc(Be,Xe,Et);if(Si.set(Be,Xe,Et),Si.lengthSq()>1e-6){Si.normalize().multiplyScalar(s).sub(S);let yt=Si.length(),kt=Math.max(-2.6,Math.min(2.6,(_t-.46)*2.1*yt*.16));yt>1e-4&&S.addScaledVector(Si,kt/yt)}let Lt=(Cn(D,1)-.5)*1.05,nn=(Cn(D,2)-.5)*1.05;if(zo.copy(Vo).applyQuaternion(W),ko.copy(Go).applyQuaternion(W),S.addScaledVector(zo,Lt).addScaledVector(ko,nn),ye){let yt=.74+Cn(D,7)*.42;te.scale.set(yt,1,yt)}else{let kt=Cn(D,3)<.14?.3:.085;if(wi.setFromAxisAngle(Vo,(Cn(D,4)-.5)*2*kt),W.multiply(wi),wi.setFromAxisAngle(Go,(Cn(D,5)-.5)*2*kt),W.multiply(wi),_t>.62){let zn=Cn(D,8);if(zn<.22){let Ho=n[ve[D]],eu=zn<.07?2:1;U.copy(S).normalize(),S.addScaledVector(U,Ho.height*(.78*eu)),wi.setFromAxisAngle(Vo,(Cn(D,9)-.5)*.44),W.multiply(wi),wi.setFromAxisAngle(Go,(Cn(D,10)-.5)*.44),W.multiply(wi)}}let Bn=Cn(D,6);if(Bn<.2){let zn=.52+Bn/.2*.26;te.scale.set(1+(1-zn)*.42,zn,1+(1-zn)*.22)}else te.scale.set(1,1,1)}if(!ye){let yt=n[ve[D]],kt=Ao[He[D]].name;if(U.copy(S).normalize(),kt==="tipped")G.setFromAxisAngle(Bo,(N[D]<.5?1:-1)*Math.PI*.5),W.multiply(G),S.addScaledVector(U,yt.width*.5);else if(kt==="flipped"){let Bn=Math.PI*(.8+pc(D)*.12);G.setFromAxisAngle(Bo,N[D]<.5?Bn:-Bn),W.multiply(G),S.addScaledVector(U,yt.height*.86)}else kt==="sunken"?S.addScaledVector(U,-yt.height*.2):kt==="stripped"&&S.addScaledVector(U,-yt.height*.14)}te.position.copy(S),te.quaternion.copy(W)}function ge(D,te,ye,Te){let Be=Jn[D];for(;ve[Be]!==D;)Be++;Jn[D]=Be+1,H(Be,te,Te==="blot"),Te==="paint"?(ws[D][ye]=Be,Qi[Be]=ye,te.color=le[Be]):Te==="trim"&&(te.color=j[Be])}for(let D=0;D<Wi.length;D++){await o();let te=n[D],ye={width:te.width,height:te.height,length:te.length},Te=en[D];ws[D]=new Int32Array(Math.max(1,Te));let Be=Ks(te.paintGeo,Ce,Te);Be.addLOD(G0(ye),Ce,$n),Be.addLOD(H0(ye),Tt,fc),Be.userData.body=D;let Xe=Ks(te.trimGeo,Ae,Te);Xe.addLOD(W0(ye),Ae,Zn),Xe.addLOD(wh(),Ae,jh),Xe.userData.body=D;let Et=new mi(ye.width*1.28,ye.length*1.06);Et.rotateX(-Math.PI/2),Et.translate(0,.012,0);let _t=Ks(Et,Pt,Te);if(_t.addLOD(wh(),Pt,yr*24),_t.renderOrder=1,_.add(_t,Be,Xe),ji[D]=Be,bi[D]=Xe,Ys[D]=_t,!!Te){Be.addInstances(Te,(Lt,nn)=>ge(D,Lt,nn,"paint")),Jn[D]=0,Xe.addInstances(Te,(Lt,nn)=>ge(D,Lt,nn,"trim")),Jn[D]=0,_t.addInstances(Te,(Lt,nn)=>ge(D,Lt,nn,"blot"));for(let Lt=0;Lt<Te;Lt++)Ao[He[ws[D][Lt]]].name==="stripped"&&Xe.setVisibilityAt(Lt,!1);Be.computeBVH({margin:0}),Xe.computeBVH({margin:0})}}let Se=n[ve[$]],xe=new tt(oe[$*4],oe[$*4+1],oe[$*4+2],oe[$*4+3]),Ee=qa[Fe[$]].hex,Le=((Ee>>16&255)*.3+(Ee>>8&255)*.6+(Ee&255)*.1)/255,Ye=new be(Ee);Le<.44&&Ye.lerp(new be(16777215),.5);let et=new Bt({vertexColors:!0,color:Ye,metalness:.55,roughness:.07,envMapIntensity:1.6,emissive:new be(16773586),emissiveIntensity:0}),Ne=new Bt({vertexColors:!0,metalness:.4,roughness:.18,envMapIntensity:1.3}),st=new ft;st.add(new ze(Se.paintGeo,et)),Se.trimGeo&&st.add(new ze(Se.trimGeo,Ne)),st.position.set(ne[$*3],ne[$*3+1],ne[$*3+2]),st.quaternion.copy(xe),_.add(st),ji[ve[$]].setVisibilityAt(Qi[$],!1),bi[ve[$]].setVisibilityAt(Qi[$],!1);let bt=tg(),Ft=Dn(t^6211489),gt=[];for(let D=0;D<bt.length;D++)bt[D].road||gt.push(D);let dn=Ya(gt.map(D=>bt[D])),we=bt.findIndex(D=>D.road),xn=bt.map(()=>[]),ct=new C;for(let D of X){ct.set(ne[D*3]/s,ne[D*3+1]/s,ne[D*3+2]/s);let te=!1;for(let ye of r.roads)if(Math.abs(ct.dot(ye.n))<ye.half){te=!0;break}if(te){we>=0&&xn[we].push(D);continue}xn[gt[Ka(dn,Ft())]].push(D)}let Fn=new us;for(let D=0;D<bt.length;D++){let te=xn[D];if(!te.length)continue;let ye=bt[D],Te=new Ue(ye.geo,ye.material,{capacity:te.length,renderer:i});Te.frustumCulled=!1,Te.addLOD(wh(),Fn,fc);let Be=(s-.12)/s;Te.addInstances(te.length,(Xe,Et)=>{let _t=te[Et];Xe.position.set(ne[_t*3]*Be,ne[_t*3+1]*Be,ne[_t*3+2]*Be),Xe.quaternion.set(oe[_t*4],oe[_t*4+1],oe[_t*4+2],oe[_t*4+3]);let Lt=.85+Ft()*.3;Xe.scale.set(Lt,Lt,Lt)}),_.add(Te)}let On=900,tn=22,jn=new Float32Array(On*3),St=Dn(t^10359283);for(let D=0;D<jn.length;D++)jn[D]=St()*tn;let Ot=new Ze(new Float32Array(On*3),3),ri=new It;ri.setAttribute("position",Ot);let xt=new cs(ri,new Di({color:14260058,size:.135,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1}));xt.frustumCulled=!1,xt.renderOrder=1,_.add(xt);let Ai=new C,es=new C;function gc(D,te){return(te||Ai).set(ne[D*3],ne[D*3+1],ne[D*3+2])}let lx=yr*32,hx=Math.cos(lx/s),ep=new C(2,0,0);function ux(D){if(!(ep.distanceToSquared(D)<4/s*(4/s))){ep.copy(D);for(let te=0;te<Wi.length;te++){let ye=Ys[te],Te=ws[te],Be=ye.instancesCount;for(let Xe=0;Xe<Be;Xe++){let Et=Te[Xe],_t=(ne[Et*3]*D.x+ne[Et*3+1]*D.y+ne[Et*3+2]*D.z)/s;ye.setActiveAt(Xe,_t>hx)}}}}function dx(D,te){let ye=Qi[D];if(ye<0)return;let Te=ve[D];if(Ys[Te].setVisibilityAt(ye,te),D===$){st.visible=te;return}ji[Te].setVisibilityAt(ye,te),bi[Te].setVisibilityAt(ye,te)}function fx(D){let te=ve[D],ye=n[te],Te=new ft,Be=D===$,Xe=new Bt(Be?{vertexColors:!0,color:Ye.clone(),metalness:.55,roughness:.07,envMapIntensity:1.6}:{vertexColors:!0,color:le[D],metalness:0,roughness:.88,envMapIntensity:.45});if(Be||pf(Xe,1),Te.add(new ze(ye.paintGeo,Xe)),ye.trimGeo){let Et=Be?Ne.clone():Ae.clone();Be||(Et.color=new be(j[D])),Te.add(new ze(ye.trimGeo,Et))}return H(D,Te,Be),Te}function px(D){let te=null;for(let Te=0;Te<Wi.length;Te++)for(let Be of[ji[Te],bi[Te]]){if(!Be||Be.instancesCount===0)continue;let Xe=D.intersectObject(Be,!1);Xe.length&&(!te||Xe[0].distance<te.distance)&&(te={distance:Xe[0].distance,index:ws[Te][Xe[0].instanceId]})}let ye=D.intersectObject(st,!0);return ye.length&&(!te||ye[0].distance<te.distance)&&(te={distance:ye[0].distance,index:$}),te}function tp(D,te){Qi[D]<0||ji[ve[D]].setColorAt(Qi[D],te)}function mx(D){tp(D,le[D])}function gx(D){b.position.copy(D.position),m.copy(D.position),m.lengthSq()>1e-8&&(m.normalize(),b.quaternion.setFromUnitVectors(Qh,m));let te=8;es.copy(ae).multiplyScalar(te).add(D.position),w.position.copy(es),w.quaternion.copy(D.quaternion),w.scale.setScalar(te*.085);let ye=performance.now()*.001,Te=ye*.35,Be=D.position.x,Xe=D.position.y,Et=D.position.z,_t=Ot.array,Lt=tn/2;for(let nn=0;nn<On;nn++){let yt=jn[nn*3]+Te,kt=jn[nn*3+1]+Math.sin(ye*.6+nn*1.7)*.4,Bn=jn[nn*3+2];_t[nn*3]=Be+((yt-Be)%tn+tn)%tn-Lt,_t[nn*3+1]=Xe+((kt-Xe)%tn+tn)%tn-Lt,_t[nn*3+2]=Et+((Bn-Et)%tn+tn)%tn-Lt}Ot.needsUpdate=!0,ie(ye)}function xx(D){let te=D!=="menu";te||se(null),Qe.intensity=te?.48:.26,J.intensity=te?1.62:2.35,_.environmentIntensity=te?.65:.38;for(let ye=0;ye<Wi.length;ye++)bi[ye].visible=te,Ys[ye].visible=te;np(te)}function np(D){_.fog=new sa(12948057,D?s*.26:s*.5,D?s*1.45:s*2.2);for(let te of[Ce,Ae,ke,Pt])te.needsUpdate=!0}return{scene:_,globe:Oe,sun:J,sunDir:p,radius:s,target:$,slots:f,count:I,envTarget:pt,paintMeshes:ji,trimMeshes:bi,blotMeshes:Ys,hero:st,props:Dt.group,sites:c,blockers:Dt.blockers,setCarShown:dx,carCopy:fx,refreshBlots:ux,positionOf:gc,pick:px,setColor:tp,restoreColor:mx,follow:gx,setFog:np,setMode:xx,aimSun:se,bodyOf:ve,paintOf:Fe,infoOf:D=>({body:Wi[ve[D]],paint:qa[Fe[D]],decay:Ao[He[D]],shade:le[D]})}}function ug(i,e,t){let n=(e?e.clone():new C(0,0,1)).normalize(),s=new C,r=new C,o=new C,a=new C,c=new C,l=new tt,h=new Re;s.set(0,1,0).cross(n),s.lengthSq()<1e-8&&s.set(1,0,0).cross(n),s.normalize();function u(){s.addScaledVector(n,-s.dot(n)),s.lengthSq()<1e-10&&(s.set(0,1,0).cross(n),s.lengthSq()<1e-10&&s.set(1,0,0).cross(n)),s.normalize(),r.crossVectors(n,s),o.copy(r).negate()}u();function d(b){l.setFromAxisAngle(n,-b),s.applyQuaternion(l),u()}t&&d(t);function f(b,w,x){c.set(0,0,0).addScaledVector(s,w).addScaledVector(o,b);let A=c.length();return A<1e-6||x===0||(c.divideScalar(A),a.crossVectors(n,c),a.lengthSq()<1e-12)?0:(a.normalize(),l.setFromAxisAngle(a,x/i),n.applyQuaternion(l).normalize(),s.applyQuaternion(l),u(),x)}let g=new C;function _(b){return g.copy(n).multiplyScalar(i+(b||0))}let p=new tt;function m(){return h.makeBasis(r,n,s),p.setFromRotationMatrix(h)}return{radius:i,get position(){return n},get forward(){return s},get right(){return o},get up(){return n},turn:d,step:f,surfacePoint:_,orientation:m,teleport(b){n.copy(b).normalize(),u()}}}var vi={dist:16.36,distMin:10,distMax:28,elev:.894,elevMin:.16,elevMax:1.16,aimUp:3.4,aimAhead:7.5,shoulder:0},$a={eye:1.75,pitch:-.16,pitchMin:-1.24,pitchMax:.62};function dg(i){let e="third",t=1,n=vi.elev,s=$a.pitch,r=vi.dist,o=1,a=!0,c=new C,l=new C,h=new tt,u=new tt,d=new C,f=new C,g=new C,_=new C,p=new Re;function m(x,A,M){let E=i.aspect<.85,y=E?r*1.26:r,T=E?Math.min(vi.elevMax,n+.11):n;o>.001&&(T=Wt.lerp(T,.3,o),y=Wt.lerp(y,r*1.3,o));let P=f.copy(x.position).multiplyScalar(x.radius);g.copy(x.forward),_.crossVectors(g,x.up).normalize();let R=E?vi.shoulder*.6:vi.shoulder;A.copy(P).addScaledVector(x.up,Math.sin(T)*y).addScaledVector(g,-Math.cos(T)*y).addScaledVector(_,R),d.copy(P).addScaledVector(x.up,vi.aimUp).addScaledVector(g,vi.aimAhead).addScaledVector(_,R),p.lookAt(A,d,x.up),M.setFromRotationMatrix(p)}function b(x,A,M){A.copy(x.position).multiplyScalar(x.radius).addScaledVector(x.up,$a.eye),d.copy(A).addScaledVector(x.forward,Math.cos(s)*4).addScaledVector(x.up,Math.sin(s)*4),p.lookAt(A,d,x.up),M.setFromRotationMatrix(p)}function w(x,A){o=Wt.lerp(o,a?1:0,Math.min(1,A*2));let M=A>0?Math.min(1,A*4.6):1;if(t=Wt.lerp(t,e==="first"?0:1,M),t<.0015&&(t=0),t>.9985&&(t=1),t===0){b(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}if(t===1){m(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}b(x,c,h),m(x,l,u);let E=t*t*(3-2*t);i.position.lerpVectors(c,l,E),i.quaternion.slerpQuaternions(h,u,E)}return{get mode(){return e},get settled(){return t===0||t===1},toggle(){return e=e==="third"?"first":"third",e},set(x){e=x},cinema(x){a=x},look(x){e==="first"?s=Wt.clamp(s-x,$a.pitchMin,$a.pitchMax):n=Wt.clamp(n+x,vi.elevMin,vi.elevMax)},zoom(x){r=Wt.clamp(r*(1+x*.12),vi.distMin,vi.distMax)},get eyeHeight(){return e==="first"?$a.eye:Math.sin(n)*r},update:w}}function fg(i){let e=null,t=null,n=null,s=null,r=0,o=0,a=0;function c(){if(e)return;e=new _o({canvas:i,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),e.setClearColor(0,0),e.outputColorSpace=Nt,t=new Ii,n=new Vt(30,1,.05,20);let p=new Us(15398143,12893606,1.05),m=new ni(16773848,2.1);m.position.set(2.2,3.4,2.6);let b=new ni(14674431,.7);b.position.set(-2.6,1.2,-2.2),t.add(p,m,b);let w=new Ii,x=new ze(new Ui(8,12,8),new Ht({color:14675707,side:Kt}));w.add(x);let A=new ze(new Ui(7.4,10,6),new Ht({color:11972763,side:Kt}));A.position.y=-7,w.add(A);let M=new Vs(e),E=M.fromScene(w,0,.1,40);t.environment=E.texture,t.environmentIntensity=1.15,M.dispose(),x.geometry.dispose(),x.material.dispose(),A.geometry.dispose(),A.material.dispose()}function l(p){r=requestAnimationFrame(l);let m=Math.min(.05,(p-a)/1e3||.016);a=p,o+=m*.7,s&&(s.rotation.y=o,s.position.y=-.16+Math.sin(o*1.7)*.02);let b=i.clientWidth||300,w=i.clientHeight||180;(i.width!==b*2||i.height!==w*2)&&e.setSize(b*2,w*2,!1),n.aspect=b/w,n.updateProjectionMatrix(),e.render(t,n)}function h(p){c(),u(),p.traverse(m=>{let b=m.material?Array.isArray(m.material)?m.material:[m.material]:[];for(let w of b)w.metalness===void 0||w.metalness<=.25||(w.metalness=.18,w.roughness=Math.max(.22,w.roughness||0),w.needsUpdate=!0)}),s=p,s.position.set(0,-.16,0),s.rotation.set(0,0,0),t.add(s),n.position.set(0,.72,2.35),n.lookAt(new C(0,.06,0)),o=.6,a=0,r=requestAnimationFrame(l)}function u(){cancelAnimationFrame(r),r=0,s&&(t.remove(s),s.traverse(p=>{p.material&&(Array.isArray(p.material)?p.material:[p.material]).forEach(m=>m.dispose())}),s=null)}function d(p){let w=document.createElement("canvas");w.width=1200,w.height=630;let x=w.getContext("2d"),A=x.createLinearGradient(0,0,0,630);A.addColorStop(0,"#6fb1e4"),A.addColorStop(.55,"#a8d2ef"),A.addColorStop(.78,"#e8f4fb"),x.fillStyle=A,x.fillRect(0,0,1200,630),x.fillStyle="rgba(255, 249, 214, 0.95)",x.beginPath(),x.arc(150,118,52,0,Math.PI*2),x.fill(),x.fillStyle="rgba(255, 249, 214, 0.35)",x.beginPath(),x.arc(150,118,78,0,Math.PI*2),x.fill(),f(x,320,96,1),f(x,960,150,.8),f(x,690,70,.62),x.fillStyle="#8b8154",x.beginPath(),x.ellipse(1200/2,950,1200*.9,430,0,0,Math.PI*2),x.fill();for(let k=0;k<46;k++){let Y=k*137.5%1200,B=590-k*89.7%150*(.4+k*31%10/16);x.fillStyle=["#8a7a5f","#6d6857","#7d5a3c","#948c73","#5d5c4e"][k%5],x.save(),x.translate(Y,B),x.rotate(k*47%180*.02),x.globalAlpha=.85,x.fillRect(-4,-2.4,8,4.8),x.restore()}x.globalAlpha=1;let M=500,E=330,y=1200/2-M/2,T=630/2-E/2+34;if(x.save(),x.shadowColor="rgba(16, 24, 34, 0.30)",x.shadowBlur=26,x.shadowOffsetY=10,x.fillStyle="#ffffff",_(x,y-16,T-16,M+32,E+54,18),x.fill(),x.restore(),e&&s){let k=n.aspect,Y=s.rotation.y,B=s.position.y;s.rotation.y=.85,s.position.y=-.16;let F=new _n(M,E,{samples:4}),z=e.getRenderTarget(),K=e.getClearColor(new be),ee=e.getClearAlpha();e.setRenderTarget(F),e.setClearColor(15595003,1),n.aspect=M/E,n.updateProjectionMatrix(),e.clear(),e.render(t,n);let ie=new Uint8Array(M*E*4);e.readRenderTargetPixels(F,0,0,M,E,ie),e.setRenderTarget(z),e.setClearColor(K,ee),F.dispose();let re=document.createElement("canvas");re.width=M,re.height=E;let fe=re.getContext("2d"),We=fe.createImageData(M,E);for(let pt=0;pt<E;pt++){let Qe=(E-1-pt)*M*4;We.data.set(ie.subarray(Qe,Qe+M*4),pt*M*4)}fe.putImageData(We,0,0),x.drawImage(re,y,T,M,E),s.rotation.y=Y,s.position.y=B,n.aspect=k,n.updateProjectionMatrix()}x.font='700 24px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.textAlign="center",x.fillStyle="#3c4753",x.fillText("the one somebody still washes",1200/2,T+E+26),x.lineJoin="round",x.textAlign="left",x.font='900 74px ui-sans-serif, system-ui, "Segoe UI", sans-serif';let P=x.measureText("ONE CAR ").width,R=x.measureText("SHINES").width;x.save(),x.translate(1200/2,118),x.rotate(-.026),x.lineWidth=15,x.strokeStyle="rgba(20, 28, 38, 0.62)";let L=-(P+R)/2;return x.strokeText("ONE CAR ",L,0),x.fillStyle="#ffffff",x.fillText("ONE CAR ",L,0),x.strokeText("SHINES",L+P,0),x.fillStyle="#f9c92b",x.fillText("SHINES",L+P,0),x.restore(),x.textAlign="center",x.font='800 28px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.fillStyle="#17242d",g(x,"I found it in "+p.time+" \xB7 "+p.tries+" cars tried \xB7 "+p.count+" on the planet",1200/2,596),w}function f(p,m,b,w){p.fillStyle="rgba(255, 255, 255, 0.92)",p.beginPath(),p.arc(m,b,26*w,0,Math.PI*2),p.arc(m+30*w,b+6*w,20*w,0,Math.PI*2),p.arc(m-30*w,b+8*w,18*w,0,Math.PI*2),p.fill()}function g(p,m,b,w,x){let A=p.measureText(m).width,M=parseFloat(p.font.match(/(\d+(?:\.\d+)?)px/)[1])*1.7;p.fillStyle=x||"rgba(255, 255, 255, 0.9)",_(p,b-A/2-20,w-M*.72,A+40,M,M/2),p.fill(),p.fillStyle="#17242d",p.fillText(m,b,w)}function _(p,m,b,w,x,A){p.beginPath(),p.moveTo(m+A,b),p.arcTo(m+w,b,m+w,b+x,A),p.arcTo(m+w,b+x,m,b+x,A),p.arcTo(m,b+x,m,b,A),p.arcTo(m,b,m+w,b,A),p.closePath()}return{show:h,stop:u,photo:d}}var vr=3,Xi=null,mf=null;function A1(i,e,t){let n=[];if(i.traverse(p=>{p.isMesh&&/^leg/i.test(p.name)&&n.push(p)}),!n.length)return null;let s=new C,r=new Yt,o=n.map(p=>(p.geometry.computeBoundingBox(),p.geometry.boundingBox));function a(p,m){let b=o[p],w=1/0;for(let x=0;x<8;x++)s.set(x&1?b.max.x:b.min.x,x&2?b.max.y:b.min.y,x&4?b.max.z:b.min.z).applyMatrix4(n[p].matrixWorld),s.y<w&&(w=s.y,m.copy(s));return m}let c=new C,l=1/0,h=-1/0;function u(p,m){p.setEffectiveWeight(1);for(let P of m)P.setEffectiveWeight(0);e.timeScale=1;let b=p.getClip().duration,w=90,x=b*1.15/w,A=n.map(()=>null),M=[],E=1/0,y=0;for(let P=0;P<w;P++){e.update(x),i.updateMatrixWorld(!0),r.setFromObject(i),r.min.y<l&&(l=r.min.y),r.max.y>h&&(h=r.max.y);let R=1/0,L=0;for(let k=0;k<n.length;k++)a(k,c),A[k]!==null&&c.y<R&&(R=c.y,L=(A[k]-c.z)/x),A[k]=c.z;R<1/0&&M.push(L),R<E&&(E=R,y=p.time%b/b)}return M.sort((P,R)=>P-R),{carry:M.length?M[Math.floor(M.length*.75)]:0,span:b,contact:y}}let d=u(t.walk,[t.run,t.idle]),f=u(t.run,[t.walk,t.idle]),g=h-l;if(!(g>1e-6))return null;let _=vr/g;return{scale:_,lift:-l*_,walkCycle:d.span,runCycle:f.span,walkSpeed:Math.max(.1,d.carry*_),runSpeed:Math.max(.1,f.carry*_),phase:f.contact-d.contact,contact:d.contact}}var mg=new Ht({color:2106410,side:Kt});mg.userData.shared=!0;function gg(i,e){let t=[];i.traverse(n=>{n.isMesh&&!n.userData.outline&&!n.userData.outlined&&t.push(n)});for(let n of t){let s=new ze(n.geometry,mg);s.userData.outline=!0,n.userData.outlined=!0,n.geometry&&(n.geometry.userData.shared=!0),s.scale.setScalar(e),s.frustumCulled=!1,n.add(s)}}function xg(){let i=new ft,e=new Bt({color:15905420,roughness:.9}),t=new Bt({color:5217891,roughness:.9}),n=(r,o,a,c,l,h,u)=>{let d=new ze(new pn(r,o,a),u);return d.position.set(c,l,h),i.add(d),d};n(.66,.18,.62,0,0,.05,e);for(let r=0;r<4;r++){let o=n(.135,.16,.42,-.24+r*.16,.06,-.42,e);o.rotation.x=.55}let s=n(.15,.15,.34,.4,.04,-.1,e);return s.rotation.y=-.6,s.rotation.x=.35,n(.58,.24,.32,0,-.13,.42,t),i.scale.setScalar(.78),gg(i,1.04),i}var T1=new WeakMap;function pg(i,e,t,n){let s=i.clone();return s.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
       {
         float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
         diffuseColor.rgb = mix(diffuseColor.rgb, vec3(lum), ${e.toFixed(3)});
         diffuseColor.rgb *= vec3(${t.map(o=>o.toFixed(3)).join(", ")});
       }`)},s.customProgramCacheKey=()=>"dust:"+n,s.needsUpdate=!0,T1.set(s,n),s}function E1(i){let e=new Map,t=new Map;i.traverse(n=>{if(!n.isMesh||!n.material)return;let s=/leg|boot|shoe|foot/i.test(n.name),r=s?t:e,o=n.material;r.has(o)||r.set(o,s?pg(o,.52,[.72,.63,.5],"heavy"):pg(o,.36,[.88,.8,.68],"light")),n.material=r.get(o)})}async function _g(){if(Xi)return Xi;let i=await new Hs().loadAsync("assets/models/props/attendant.glb");return E1(i.scene),Xi=i,Xi}function yg(i){if(!Xi)throw new Error("call loadHero() first");let e=new ft,t=Xi.scene;e.add(t),t.scale.setScalar(1),t.position.set(0,0,0),t.updateMatrixWorld(!0);let n=new Sa(t),s={};for(let F of Xi.animations)s[F.name]=F;let r=n.clipAction(s.idle||Xi.animations[0]),o=n.clipAction(s.walk||Xi.animations[0]),a=n.clipAction(s.sprint||s.walk||Xi.animations[0]);for(let F of[r,o,a])F.setLoop(Fa,1/0),F.enabled=!0,F.play();let c=null;t.traverse(F=>{!c&&F.name==="root"&&(c=F)});let l=c?c.position.clone():null,h=l?()=>{c.position.x=l.x,c.position.z=l.z}:()=>{};mf||(mf=A1(t,n,{idle:r,walk:o,run:a}));let u=mf||{scale:vr/.9,lift:0,walkSpeed:vr*.8,runSpeed:vr*2,phase:0};t.scale.setScalar(u.scale),t.position.set(0,u.lift,0),r.setEffectiveWeight(1),o.setEffectiveWeight(0),a.setEffectiveWeight(0),r.time=0,o.time=0,a.time=0,n.update(0),h(),t.traverse(F=>{if(!F.isMesh)return;F.geometry&&(F.geometry.userData.shared=!0);let z=Array.isArray(F.material)?F.material:[F.material];for(let K of z){K.envMapIntensity=1.1,K.userData.shared=!0;for(let ee in K){let ie=K[ee];ie&&ie.isTexture&&(ie.userData.shared=!0)}K.needsUpdate=!0}F.frustumCulled=!1,F.castShadow=!1,F.receiveShadow=!1}),gg(t,1.07);let d={};for(let[F,z,K]of[["pickup",s["pick-up"],!0],["yes",s["emote-yes"],!1],["no",s["emote-no"],!1]]){if(!z)continue;let ee=n.clipAction(z);ee.clampWhenFinished=!0,d[F]={action:ee,hold:K}}let f=null,g=0,_=!1;n.addEventListener("finished",F=>{f&&F.action===f.action&&!f.hold&&(_=!0)});function p(F,z){let K=d[F];K&&(f&&f.action.stop(),f=K,_=!1,f.action.reset(),f.action.setLoop(z>1?Fa:nh,z||1),f.action.play())}function m(){f&&(_=!0)}let b=new ze(new pa(vr*.3,20),new Ht({color:1120014,transparent:!0,opacity:.26,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.06,b.renderOrder=2,e.add(b);let w=u.walkSpeed,x=u.runSpeed,A=o.getClip().duration,M=a.getClip().duration,E=Math.max(.001,w*A),y=Math.max(.001,x*M),T=u.phase||0,P=u.contact||0,R=0,L=1,k=0;function Y(F,z,K){return F===z?!1:F<z?F<K&&K<=z:K>F||K<=z}function B(F,z){let K=z<.25?1:0;L=Wt.lerp(L,K,Math.min(1,F*7));let ee=Wt.clamp((z-w*1.05)/(x-w*1.05),0,1);R=Wt.lerp(R,ee,Math.min(1,F*4)),f&&!_?g=Math.min(1,g+F*8):g>0&&(g=Math.max(0,g-F*5),g===0&&f&&(f.action.stop(),f=null,_=!1)),f&&f.action.setEffectiveWeight(g);let ie=1-g,re=1-L;r.setEffectiveWeight(L*ie),o.setEffectiveWeight(re*(1-R)*ie),a.setEffectiveWeight(re*R*ie);let fe=Wt.lerp(E,y,R),We=Wt.clamp(z/fe,.3,3.6);n.timeScale=1,o.timeScale=A*We,a.timeScale=M*We;let pt=(o.time%A/A+T+1)%1;a.time=pt*M,n.update(F),h();let Qe=o.time%A/A*Math.PI*2,J=(1-L)*Math.min(1,z/Math.max(1,w));if(t.rotation.set(.1*R*J,.09*Math.sin(Qe+Math.PI*.5)*J,.11*Math.sin(Qe)*J),t.position.x=Math.sin(Qe)*.05*J,i){let ae=o.time%A/A;L<.5&&z>1&&(Y(k,ae,P)||Y(k,ae,(P+.5)%1))&&i(R>.5),k=ae}}return{object:e,radius:vr*.12,height:vr,fit:u,get gait(){return o.time%A/A},act:p,release:m,animate:B,get yaw(){return e.rotation.y},set yaw(F){e.rotation.y=F}}}var wf={};sp(wf,{confetti:()=>Ih,group:()=>ja,puff:()=>Io,spark:()=>Ph,update:()=>Sf});var Xs=420,ja=new ft,ys=new Float32Array(Xs*3),Ja=new Float32Array(Xs),Ch=new Float32Array(Xs),_f=new Float32Array(Xs),gf=0,Rh=new It,yf=new Ze(new Float32Array(Xs*3),3),vf=new Ze(new Float32Array(Xs*3),3);Rh.setAttribute("position",yf);Rh.setAttribute("color",vf);var vs=yf.array,xf=vf.array;Rh.userData.shared=!0;var Mg=new Di({size:.12,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,sizeAttenuation:!0});Mg.userData.shared=!0;var Mf=new cs(Rh,Mg);Mf.frustumCulled=!1;Mf.renderOrder=2;ja.add(Mf);function bf(i,e,t,n,s,r,o,a,c,l,h,u){let d=gf;gf=(gf+1)%Xs,vs[d*3]=i,vs[d*3+1]=e,vs[d*3+2]=t,ys[d*3]=n,ys[d*3+1]=s,ys[d*3+2]=r,xf[d*3]=o,xf[d*3+1]=a,xf[d*3+2]=c,Ja[d]=l,Ch[d]=h,_f[d]=u}var vg=[[1,.82,.2],[.9,.3,.3],[.35,.6,1],[.4,.85,.5],[1,.62,.78],[.97,.97,.97]];function Ih(i,e){for(let t=0;t<150;t++){let n=vg[t%vg.length],s=Math.random()*Math.PI*2,r=1.4+Math.random()*2.6;bf(i.x+(Math.random()-.5)*.6,i.y+(Math.random()-.5)*.6,i.z+(Math.random()-.5)*.6,Math.cos(s)*r+e.x*(2.6+Math.random()*2.4),Math.sin(s)*r*.4+e.y*(2.6+Math.random()*2.4),Math.sin(s+1.7)*r+e.z*(2.6+Math.random()*2.4),n[0],n[1],n[2],1.8+Math.random()*.9,4.2,1.1)}}function Io(i,e,t){let n=t||5;for(let s=0;s<n;s++){let r=Math.random()*Math.PI*2,o=.3+Math.random()*.7,a=.55+Math.random()*.14;bf(i.x,i.y,i.z,Math.cos(r)*o+e.x*.5,Math.sin(r*1.3)*o*.4+e.y*.5,Math.sin(r)*o+e.z*.5,a,a*.97,a*.9,.4+Math.random()*.2,-.6,0)}}function Ph(i){for(let e=0;e<2;e++)bf(i.x+(Math.random()-.5)*.3,i.y+(Math.random()-.5)*.3,i.z+(Math.random()-.5)*.3,(Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8,1,.85+Math.random()*.15,.35,.35+Math.random()*.2,.8,0)}var bg=6,Yn=20,Sg=new mi(.1,.062);Sg.userData.shared=!0;var wg=new Ht({color:7319119,side:Sn,transparent:!0,opacity:.85});wg.userData.shared=!0;var Ag=[],Tg=[];for(let i=0;i<bg;i++){let e=new ze(Sg,wg);e.frustumCulled=!1,ja.add(e),Tg.push(e),Ag.push([Math.random()*Yn,Math.random()*Yn,Math.random()*Yn])}var Mr=0;function Sf(i,e,t){Mr+=i;for(let n=0;n<Xs;n++){if(Ja[n]<=0)continue;if(Ja[n]-=i,Ja[n]<=0){vs[n*3]=0,vs[n*3+1]=0,vs[n*3+2]=0;continue}e&&(ys[n*3]-=e.x*Ch[n]*i,ys[n*3+1]-=e.y*Ch[n]*i,ys[n*3+2]-=e.z*Ch[n]*i);let s=_f[n]?Math.sin(Ja[n]*11+n*2.3)*_f[n]:0;vs[n*3]+=(ys[n*3]+s)*i,vs[n*3+1]+=ys[n*3+1]*i,vs[n*3+2]+=(ys[n*3+2]+s)*i}if(yf.needsUpdate=!0,vf.needsUpdate=!0,t){let n=t.position.x,s=t.position.y,r=t.position.z,o=Yn/2,a=Mr*1.6;for(let c=0;c<bg;c++){let l=Ag[c],h=l[0]+a,u=l[1]+Math.sin(Mr*.9+c*2.1)*1.2,d=l[2]+Math.sin(Mr*.5+c)*2,f=Tg[c];f.position.set(n+((h-n)%Yn+Yn)%Yn-o,s+((u-s)%Yn+Yn)%Yn-o,r+((d-r)%Yn+Yn)%Yn-o),f.rotation.set(Mr*2.3+c,Mr*1.7+c*2,Mr*2.9+c*3)}}}function Qa(){let i=Math.random().toString(36).slice(2);return{seed:S0("fw:r:"+i)}}var Df={};sp(Df,{attendantPing:()=>nc,audioGraph:()=>C1,deadCar:()=>Rf,footstep:()=>Lf,isMuted:()=>Lh,liftWreck:()=>Cf,setMuted:()=>Ef,shineWin:()=>If,startAmbience:()=>Nf,uiTick:()=>Pf,unlockAudio:()=>tc});var mn=null,qi=null,Af=null;function ec(){if(!mn){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}mn=new(window.AudioContext||window.webkitAudioContext),qi=mn.createGain(),qi.gain.value=qs?0:1;let i=mn.createGain();i.gain.value=.16;let e=mn.createDelay(.2);e.delayTime.value=.055;let t=mn.createGain();t.gain.value=.22;let n=mn.createBiquadFilter();n.type="lowpass",n.frequency.value=2600,qi.connect(mn.destination),qi.connect(i),i.connect(e),e.connect(t),t.connect(e),e.connect(n),n.connect(mn.destination);let s=Math.floor(mn.sampleRate*.4);Af=mn.createBuffer(1,s,mn.sampleRate);let r=Af.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}return mn.state==="suspended"&&mn.resume(),mn}function C1(){return ec(),{ctx:mn,bus:qi}}var qs=!1;try{qs=localStorage.getItem("fivewheels.muted")==="1"}catch{qs=!1}function Lh(){return qs}function Ef(i){qs=!!i;try{localStorage.setItem("fivewheels.muted",qs?"1":"0")}catch{}return qi&&(qi.gain.value=qs?0:1),qs}function tc(){let i=ec(),e=i.createGain();e.gain.value=1e-4;let t=i.createOscillator();t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.02)}function Yi({at:i=0,dur:e,from:t,to:n,type:s="triangle",gain:r=.1,cutoff:o=0}){let a=ec(),c=a.currentTime+i,l=a.createOscillator(),h=a.createGain();l.type=s,l.frequency.setValueAtTime(t,c),n&&n!==t&&l.frequency.exponentialRampToValueAtTime(n,c+e),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(r,c+.006),h.gain.exponentialRampToValueAtTime(1e-4,c+e);let u=l.connect(h);if(o){let d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=o,h.connect(d),u=d}else u=h;u.connect(qi),l.start(c),l.stop(c+e+.03)}function Ms({at:i=0,dur:e=.09,cutoff:t=900,gain:n=.22}){let s=ec(),r=s.currentTime+i,o=s.createBufferSource();o.buffer=Af;let a=s.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(Math.max(120,t*.35),r+e);let c=s.createGain();c.gain.setValueAtTime(n,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(c).connect(qi),o.start(r),o.stop(r+e+.02)}function Cf(){Ms({at:0,dur:.055,cutoff:1100,gain:.44}),Ms({at:.02,dur:.3,cutoff:7200,gain:.11})}function Rf(){Ms({at:0,dur:.16,cutoff:380,gain:.6}),Yi({at:.015,dur:.42,from:148,to:92,type:"sawtooth",gain:.11,cutoff:620}),Ms({at:.2,dur:.045,cutoff:3200,gain:.2}),Ms({at:.29,dur:.038,cutoff:3900,gain:.14}),Ms({at:.35,dur:.03,cutoff:4400,gain:.09})}function If(){Ms({at:0,dur:.55,cutoff:780,gain:.17});let i=(e,t,n)=>{Yi({at:e,dur:.95,from:t,to:t,type:"sine",gain:n,cutoff:7200}),Yi({at:e,dur:.45,from:t*2,to:t*2,type:"sine",gain:n*.38,cutoff:8600})};i(0,784,.24),i(.12,1046,.23),i(.26,1318,.21),i(.44,1568,.19);for(let e=0;e<6;e++)Yi({at:.52+e*.075+Math.random()*.035,dur:.11,from:2500+Math.random()*1700,to:3300+Math.random()*1900,type:"sine",gain:.085,cutoff:9500})}function Pf(i){Ms({at:0,dur:.022,cutoff:i?2600:1900,gain:i?.3:.2}),Yi({at:.004,dur:i?.075:.05,from:i?620:880,to:i?960:760,type:"sine",gain:i?.16:.1,cutoff:4200})}function nc(){Yi({at:0,dur:.13,from:720,to:720,type:"sine",gain:.34,cutoff:2200}),Yi({at:.14,dur:.2,from:960,to:960,type:"sine",gain:.32,cutoff:2200})}function Lf(i){let e=.88+Math.random()*.24;Ms({at:0,dur:i?.05:.042,cutoff:(i?1e3:720)*e,gain:i?.14:.09})}var Tf=null;function R1(){if(!mn||mn.state!=="running")return;let i=2100+Math.random()*1500;Yi({at:0,dur:.07,from:i,to:i*1.3,type:"sine",gain:.05,cutoff:6400}),Yi({at:.11,dur:.09,from:i*1.15,to:i*.85,type:"sine",gain:.04,cutoff:6400}),Math.random()<.4&&Yi({at:.26,dur:.06,from:i*1.05,to:i*1.25,type:"sine",gain:.035,cutoff:6400})}function Eg(){Tf&&setTimeout(()=>{R1(),Eg()},4e3+Math.random()*7e3)}function Nf(){if(Tf)return;let i=ec(),e=Math.floor(i.sampleRate*2),t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);for(let l=0;l<e;l++)n[l]=Math.random()*2-1;let s=i.createBufferSource();s.buffer=t,s.loop=!0;let r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.6;let o=i.createGain();o.gain.value=.018;let a=i.createOscillator();a.frequency.value=.09;let c=i.createGain();c.gain.value=170,a.connect(c).connect(r.frequency),s.connect(r).connect(o).connect(qi),s.start(),a.start(),Tf={src:s,lfo:a},Eg()}function Nh(i,e={}){typeof gtag=="function"&&gtag("event",i,e)}var cc=Qa(),Cg=10,I1=22,Rg=.0032,Dh=.0058,P1=new URLSearchParams(location.search),Ig=parseInt(P1.get("cars")||"",10),zh=Number.isFinite(Ig)?Wt.clamp(Ig,4e3,12e4):49e3,L1=["localhost","127.0.0.1",""].includes(location.hostname),En=document.getElementById("scene");function Xg(i){console.error(i);let e=document.querySelector("#boot .spin"),t=document.getElementById("boot"),n=document.getElementById("boot-note");e&&(e.hidden=!0),t&&(t.hidden=!1),n&&(n.textContent="This planet will not load. The game needs WebGL \u2014 try another browser, or switch hardware acceleration back on.")}var rn;try{rn=new _o({canvas:En,antialias:!0,powerPreference:"high-performance"})}catch(i){throw Xg(i),i}function Kf(){let i=matchMedia("(pointer: coarse)").matches;return Math.min(devicePixelRatio||1,i?1.25:1.5)}rn.setPixelRatio(Kf());rn.toneMapping=Ca;rn.toneMappingExposure=1.05;var lt=new Vt(52,1,.08,400),lc=new Aa;lc.far=170;var Pg=new qe,Rt=i=>document.getElementById(i),me={boot:Rt("boot"),bootNote:Rt("boot-note"),menu:Rt("menu"),hud:Rt("hud"),win:Rt("win"),help:Rt("help"),clock:Rt("clock"),tries:Rt("tries"),winTime:Rt("win-time"),winTries:Rt("win-tries"),winCount:Rt("win-count"),menuCount:Rt("menu-count"),streak:Rt("streak"),copy:Rt("copy"),photo:Rt("photo"),eye:Rt("eye"),hint:Rt("hint"),brief:Rt("brief"),briefImg:Rt("brief-img"),sr:Rt("sr-status"),lamp:Rt("lamp"),lampN:Rt("lamp-n"),hintNote:Rt("hintnote"),seeker:Rt("seeker"),cheer:Rt("cheer"),stick:Rt("stick"),stickKnob:Rt("stick").firstElementChild},Me=null,Ve=null,un=null,Tn=null,dc=fg(Rt("trophy")),ut="boot",hn=0,Ji=0,kh=0,Sr=0,Do=[],Xt=new C,$i=new C,Fo=new tt,Lg=new Re,qg=new C(0,1,0),Ng=new tt,Zi=0;function oc(i){i&&(Ve.turn(i),Zi+=i,Zi>Math.PI?Zi-=Math.PI*2:Zi<-Math.PI&&(Zi+=Math.PI*2))}function hc(){let i=innerWidth,e=innerHeight;rn.setPixelRatio(Kf()),rn.setSize(i,e,!1),lt.aspect=i/e,lt.fov=i/e<.85?62:52,lt.updateProjectionMatrix()}addEventListener("resize",hc);hc();function N1(){return new Promise(i=>{let e=!1,t=()=>{e||(e=!0,i())};requestAnimationFrame(()=>requestAnimationFrame(t)),setTimeout(t,150)})}function qh(i){let e=i.querySelector("button");e&&e.focus()}function Oo(i){me.sr.textContent=i}function Ss(i,e){let t=e?Math.round(i*10)/10:Math.floor(i),n=Math.floor(t/60),s=t-n*60;return e?n+":"+(s<10?"0":"")+s.toFixed(1):n+":"+String(s).padStart(2,"0")}function ac(i){return i.toLocaleString("en-US")}function D1(i){let e=new Set;i.scene.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),typeof t.dispose=="function"&&t.isInstancedMesh2&&t.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of n)if(!(e.has(s)||s.userData.shared)){e.add(s);for(let r in s){let o=s[r];o&&o.isTexture&&!o.userData.shared&&o.dispose()}s.dispose()}}),i.envTarget?i.envTarget.dispose():i.scene.environment&&i.scene.environment.dispose(),rn.renderLists.dispose()}var Tr=null;function Yg(){for(let i=0;i<2;i++){let e=!1;for(let t of Me.blockers){let n=Ve.position.dot(t.dir);n<=t.cos||(Xt.copy(Ve.position).addScaledVector(t.dir,-n),!(Xt.lengthSq()<1e-10)&&(Xt.normalize(),$i.copy(t.dir).multiplyScalar(t.cos).addScaledVector(Xt,t.sin),Ve.teleport($i),e=!0))}if(!e)return}}function Vf(i,e){let t=document.getElementById("bootbar-fill");t&&(t.style.transitionDuration=(e||400)+"ms",t.style.width=i+"%")}async function Kg(i){if(Me&&Tr===i.seed){Dg();return}me.boot.hidden=!1,me.bootNote.textContent="Abandoning "+ac(zh)+" cars on a planet\u2026",Vf(90,9e3),await N1(),Me&&(D1(Me),Me=null),Me=await hg({renderer:rn,count:zh,seed:i.seed}),Tr=i.seed,Me.setMode("play"),lt.near=.08,lt.far=Me.radius*2,lt.updateProjectionMatrix(),Me.scene.add(ja),rc||qf(sx),Tn=yg(e=>{Lf(e),Io(Ve.surfacePoint(.06),Ve.up,e?4:2)}),Me.scene.add(Tn.object),Dg(),me.menuCount.textContent=ac(Me.count),me.winCount.textContent=ac(Me.count),me.boot.hidden=!0}function Dg(){let i=Me.positionOf(Me.target,Xt).clone().normalize(),e=Me.sites[0].c,t=2;for(let r of Me.sites){let o=r.c.dot(i);o<t&&(t=o,e=r.c)}let n=$i.set(0,1,0).cross(e);n.lengthSq()<1e-6&&n.set(1,0,0).cross(e),n.normalize();let s=e.clone().addScaledVector(n,.2).normalize();Ve=ug(Me.radius,s),Xt.copy(e).addScaledVector(s,-e.dot(s)).normalize(),Ve.turn(Math.atan2(Ve.right.dot(Xt),Ve.forward.dot(Xt))),Ve.turn(1.15),un=dg(lt),wr=0,Zi=0}function Yh(i,e,t){Tn.object.position.copy(Ve.surfacePoint(0)),Ng.setFromAxisAngle(qg,Zi),Tn.object.quaternion.copy(Ve.orientation()).multiply(Ng),Tn.animate(i,e);let n=lt.position.distanceTo(Tn.object.position)<Tn.height*.95;Tn.object.visible=(t||un.mode==="third"||!un.settled)&&!n}var Un=new Set,Ir=new Map,sc={t:-1e9,x:0,y:0,moved:0},bs=null,Zg=matchMedia("(pointer: fine)").matches,Zf=0,$f=0,Jf=!1,Po=-1;function U1(i){let e=i>>16&255,t=i>>8&255,n=i&255,s=r=>Math.round(r+(255-r)*.55);return s(e)<<16|s(t)<<8|s(n)}function Ug(i){for(let e of Do)if(e.index===i)return!0;return!1}function Kh(i){i!==Po&&(Po>=0&&!Ug(Po)&&Me.restoreColor(Po),Po=-1,i>=0&&!Ug(i)&&(Me.setColor(i,U1(Me.infoOf(i).shade)),Po=i))}addEventListener("keydown",i=>{if(i.repeat)return;let e=i.key.toLowerCase();if(ut==="inspect"){(e==="q"||e==="escape")&&z1(),e==="enter"&&(i.preventDefault(),tx());return}if(e===" "&&ut==="play"){i.preventDefault(),un.toggle(),Jh();return}if(e==="h"&&ut==="play"){nx();return}if(e==="enter"&&ut==="play"){i.preventDefault(),ex(Zg&&Jf?uc(Zf,$f):uc(innerWidth/2,innerHeight/2));return}Un.add(e),i.code&&Un.add(i.code.toLowerCase())});addEventListener("keyup",i=>{Un.delete(i.key.toLowerCase()),i.code&&Un.delete(i.code.toLowerCase())});addEventListener("blur",()=>Un.clear());var Uh=0;addEventListener("visibilitychange",()=>{document.hidden?(Un.clear(),Uh=performance.now()):Uh&&(Ji+=performance.now()-Uh,Uh=0,Xf=performance.now())});function Uf(i,e){return(Un.has(e)?1:0)-(Un.has(i)?1:0)}function Uo(i){return i.pointerType==="touch"||i.pointerType==="pen"}function $g(i,e,t){let n=t||7,s=uc(i,e);if(s>=0)return s;for(let[r,o]of[[n,0],[-n,0],[0,n],[0,-n]])if(s=uc(i+r,e+o),s>=0)return s;return-1}var Er=!1;try{Er=localStorage.getItem("fivewheels.mousegrab")==="1"}catch{Er=!1}En.addEventListener("pointerdown",i=>{if(!Uo(i)&&i.button!==0)return;if(ut==="inspect"){tx();return}if(ut!=="play")return;let e=!1;for(let s of Ir.values())s.role==="walk"&&(e=!0);let t=Uo(i)&&i.clientX<innerWidth*.42&&!e,n=!t&&performance.now()-sc.t<250&&Math.hypot(i.clientX-sc.x,i.clientY-sc.y)<48;Ir.set(i.pointerId,{role:t?"walk":"look",x0:i.clientX,y0:i.clientY,x:i.clientX,y:i.clientY,t0:performance.now(),moved:n?sc.moved:0,pick:t||n?-1:$g(i.clientX,i.clientY,Uo(i)?16:7)}),t&&(bs={x:0,y:0},me.stick.style.left=i.clientX+"px",me.stick.style.top=i.clientY+"px",me.stick.classList.add("on"),me.stickKnob.style.transform="translate(0px, 0px)");try{En.setPointerCapture(i.pointerId)}catch{}});En.addEventListener("pointermove",i=>{Uo(i)||(Zf=i.clientX,$f=i.clientY,Jf=!0);let e=Ir.get(i.pointerId);if(!e)return;let t=i.clientX-e.x,n=i.clientY-e.y;e.x=i.clientX,e.y=i.clientY,e.moved+=Math.abs(t)+Math.abs(n),e.role==="look"?Uo(i)?(oc(t*Rg),un.look(n*Rg)):Er?(oc(-t*Dh),un.look(-n*Dh)):(oc(t*Dh),un.look(n*Dh)):(bs={x:Wt.clamp((i.clientX-e.x0)/62,-1,1),y:Wt.clamp((i.clientY-e.y0)/62,-1,1)},me.stickKnob.style.transform="translate("+(bs.x*40).toFixed(1)+"px,"+(bs.y*40).toFixed(1)+"px)")});function Jg(i){let e=Ir.get(i.pointerId);if(e){if(Ir.delete(i.pointerId),e.role==="walk"){bs=null,me.stick.classList.remove("on");return}sc={t:performance.now(),x:i.clientX,y:i.clientY,moved:e.moved},e.moved<20&&ex(e.pick>=0?e.pick:$g(i.clientX,i.clientY,Uo(i)?16:7))}}En.addEventListener("pointerup",Jg);En.addEventListener("pointercancel",Jg);En.addEventListener("wheel",i=>{ut==="play"&&(i.preventDefault(),un.zoom(Math.sign(i.deltaY)))},{passive:!1});En.addEventListener("contextmenu",i=>i.preventDefault());function F1(i,e,t){Do.push({index:i,hex:e,times:t*2,t:0,on:!1})}function jf(i){for(let e=Do.length-1;e>=0;e--){let t=Do[e];t.t-=i,!(t.t>0)&&(t.on=!t.on,t.on?Me.setColor(t.index,t.hex):Me.restoreColor(t.index),t.t=.12,--t.times<=0&&(Me.restoreColor(t.index),Do.splice(e,1)))}}function uc(i,e){if(!Me)return-1;Pg.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),lt.updateMatrixWorld(),lc.setFromCamera(Pg,lt);let t=Me.pick(lc);return t?t.index:-1}var O1=new C(0,-.34,-1.5),Fg=.55,Gf=1.7,Og=.6,Ar=-1,vn=null,Cr=null,Ki="lift",Mi=0,Vh=0,jg=new C,Qg=new tt,Fh=new C,Ff=new C,No=new tt,Of=new C,B1=new tt().setFromAxisAngle(new C(1,0,0),-.3);function ex(i){if(ut!=="play"||i<0)return;Kh(-1),Ar=i,Mi=0,Vh=0,Ki="lift",ut="inspect",Me.setCarShown(i,!1),vn=Me.carCopy(i),jg.copy(vn.position),Qg.copy(vn.quaternion),Me.scene.add(vn),Io(vn.position,Ve.up,6),Cr||(Cr=xg()),Me.scene.add(Cr);let e=Me.infoOf(i);Tn.act("pickup");let t=/^[aeiou]/i.test(e.decay.label)?"an ":"a ";Oo("Picked up "+t+e.decay.label+" "+e.body.name+"."),Cf()}function Gh(){if(vn){let i=new Set;vn.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t)i.has(n)||n.userData.shared||(i.add(n),n.dispose())}),Me.scene.remove(vn)}Cr&&Me.scene.remove(Cr),Ar>=0&&(Me.setCarShown(Ar,!0),Io(Me.positionOf(Ar,Xt),Ve.up,4)),vn=null,Ar=-1}function z1(){ut!=="inspect"||Ki==="toss"||(Gh(),Tn.release(),ut="play",En.focus())}function tx(){ut!=="inspect"||Ki==="toss"||(Ki="look",Mi=Gf)}function Bg(i){return Fo.setFromUnitVectors(qg,Ve.up),No.setFromAxisAngle(Ve.up,Vh),i.copy(No).multiply(Fo)}function k1(i){if(Me.aimSun(Ve.up),un.update(Ve,i),Yh(i,0),jf(i),me.clock.textContent=Ss((performance.now()-Ji)/1e3,!0),lt.updateMatrixWorld(),Fh.copy(O1).applyMatrix4(lt.matrixWorld),Mi+=i,Ki==="lift"){let t=Math.min(1,Mi/Fg),n=t*t*(3-2*t);Vh+=i*1.2,vn.position.lerpVectors(jg,Fh,n),vn.quaternion.copy(Qg).slerp(Bg(No),n),t>=1&&(Ki="look",Mi=0)}else if(Ki==="look"){if(Vh+=i*(Math.PI*2/Gf),vn.position.copy(Fh).addScaledVector(Ve.up,Math.sin(Mi*5)*.015),vn.quaternion.copy(Bg(No)),Mi>=Gf){if(hn++,me.tries.textContent=hn,Ar===Me.target){Gh(),Tn.act("yes",3),V1();return}Ki="toss",Mi=0,Tn.act("no"),Of.set(1,0,0).applyQuaternion(lt.quaternion),Ff.copy(Of).multiplyScalar(4.4).addScaledVector(Ve.up,3.4),Rf(),Oo("Not the one \u2014 tossed it. "+hn+(hn===1?" car":" cars")+" tried, "+Ss((performance.now()-Ji)/1e3,!1)+" on the clock.")}}else{vn.position.addScaledVector(Ff,i),Ph(vn.position),Ff.addScaledVector(Ve.up,-7*i),No.setFromAxisAngle(Of,i*9),vn.quaternion.premultiply(No);let t=Math.max(.05,1-i*1.2);if(vn.scale.multiplyScalar(t),Mi>=Og){let n=Ar,s=Me.positionOf(n,Xt).clone();Gh(),F1(n,14241615,2),Io(s,$i.copy(s).normalize(),9),ut="play",En.focus();return}}let e=Ki==="toss"?Math.max(0,1-Mi/(Og*.45)):Math.min(1,Ki==="look"?1:Mi/(Fg*.85));Xt.set(0,0,-1).applyQuaternion(lt.quaternion),Cr.position.copy(Fh).addScaledVector(Ve.up,-.17-(1-e)*1.4).addScaledVector(Xt,-.14),Cr.quaternion.copy(lt.quaternion).multiply(B1)}function V1(){Kh(-1),ut="won",q1(),Kn=null,kh=performance.now(),Sr=0,If(),Me.positionOf(Me.target,Xt),$i.copy(Xt).normalize(),Ih(Xt.addScaledVector($i,1.8),$i);for(let e=0;e<26;e++)Ph(Xt);me.hud.hidden=!0,En.style.cursor="";let i=(kh-Ji)/1e3;me.winTime.textContent=Ss(i,!1),me.winTries.textContent=hn,tw(i),Oo("That is the one \u2014 spotless. Found in "+Ss(i,!1)+" after "+hn+(hn===1?" car.":" cars.")),Nh("skor_kaydedildi",{time_seconds:Math.round(i),tries:hn}),setTimeout(()=>{ut==="won"&&(me.win.hidden=!1,qh(me.win),dc.show(Me.carCopy(Me.target)),zg(me.winTime,i,900,e=>Ss(e,!1)),zg(me.winTries,hn,900,e=>String(Math.round(e))))},2100)}function zg(i,e,t,n){let s=performance.now();(function r(){let o=Math.min(1,(performance.now()-s)/t),a=1-Math.pow(1-o,3);i.textContent=n(e*a),o<1&&ut==="won"?setTimeout(r,24):i.textContent=n(e)})()}function G1(){let i=(kh-Ji)/1e3;return`ONE CAR SHINES
Found it in `+Ss(i,!1)+", after "+hn+(hn===1?" car":" cars")+(Rr?" and "+Rr+(Rr===1?" hint":" hints"):"")+`.
`+ac(Me.count)+" to check. Beat me."}var Hh=1,Rr=0,Wh=0,kg=0,br=new C,ic=new C,Vg=new C;function H1(){Hh=1,Rr=0,Wh=0,me.lampN.textContent="1",me.lamp.classList.remove("spent"),me.lamp.setAttribute("aria-label","Use your hint"),me.hintNote.classList.remove("on"),me.seeker.hidden=!0}function nx(){if(ut!=="play"||Hh<=0)return;Hh=0,Rr=1,me.lampN.textContent="0",me.lamp.classList.add("spent"),me.lamp.setAttribute("aria-label","Hint used"),me.lamp.classList.remove("pop"),me.lamp.offsetWidth,me.lamp.classList.add("pop");let i=Me.infoOf(Me.target),e=Math.floor(Math.random()*3),t,n;e===0?(Wh=10,t="It is that way. Ten seconds.",n="Hint: the arrow points toward the car for ten seconds."):e===1?(t="It's a "+i.body.name+". The attendant saw that much.",n="Hint: the clean car is a "+i.body.name+"."):(t="It's painted "+i.paint.name+". That's all he remembers.",n="Hint: the clean car is painted "+i.paint.name+"."),me.hintNote.textContent="\u{1F4A1} "+t,me.hintNote.classList.add("on"),clearTimeout(kg),kg=setTimeout(()=>me.hintNote.classList.remove("on"),e===0?6500:9e3),Oo(n),Tn.act("yes",2),nc(),$h(),Nh("ipucu_kullanildi")}var Gg={lap:"Around the world! A full lap of the planet \u{1F30D}",t10:"10 wrecks checked. 48,990 to go.",t50:"50 checked \u2014 now it\u2019s personal.",t100:"100 cars, and not one of them washed \u{1FAE1}",m5:"Five minutes in. It\u2019s out there, catching the light.",m15:"Fifteen minutes. Somebody still drives out here. Keep looking."},Xh={lap:!1,t10:!1,t50:!1,t100:!1,m5:!1,m15:!1},Hf=0,Hg=new C,Wf=!1,Wg=0;function W1(){for(let i in Xh)Xh[i]=!1;Hf=0,Wf=!1}function Lo(i){Xh[i]||ut!=="play"||(Xh[i]=!0,me.cheer.textContent=Gg[i],me.cheer.classList.remove("on"),me.cheer.offsetWidth,me.cheer.classList.add("on"),clearTimeout(Wg),Wg=setTimeout(()=>me.cheer.classList.remove("on"),4600),Oo(Gg[i]),nc(),i==="lap"&&(Xt.copy(Ve.position).multiplyScalar(Me.radius),$i.copy(Ve.up),Ih(Xt.addScaledVector($i,2.2),$i)))}function X1(i){if(Wf){let t=Math.min(1,Math.max(-1,Hg.dot(Ve.position)));Hf+=Math.acos(t)}Hg.copy(Ve.position),Wf=!0,Hf>=Math.PI*2&&Lo("lap"),hn>=100?Lo("t100"):hn>=50?Lo("t50"):hn>=10&&Lo("t10");let e=(performance.now()-Ji)/6e4;e>=15?Lo("m15"):e>=5&&Lo("m5")}var Qf="fivewheels.round";function Zh(){try{let i=localStorage.getItem(Qf);if(!i)return null;let e=JSON.parse(i);return!e||e.done||e.count!==zh||!Number.isFinite(e.seed)?null:e}catch{return null}}function $h(){if(!Me||Tr===null||ut==="won")return;let i=ut==="play"||ut==="inspect";if(!i){let e=Zh();if(e&&e.seed===Tr)return}try{localStorage.setItem(Qf,JSON.stringify({seed:Tr,count:zh,elapsed:i?Math.max(0,(performance.now()-Ji)/1e3):0,tries:hn,hintsUsed:Rr,done:!1}))}catch{}}function q1(){try{localStorage.removeItem(Qf)}catch{}}var Kn=Zh();Kn&&(cc={seed:Kn.seed});addEventListener("pagehide",$h);function Y1(i){if(Wh<=0){me.seeker.hidden||(me.seeker.hidden=!0);return}if(Wh-=i,Me.positionOf(Me.target,br).normalize(),br.addScaledVector(Ve.up,-br.dot(Ve.up)),br.lengthSq()<1e-10)return;br.normalize(),ic.set(0,0,-1).applyQuaternion(lt.quaternion),ic.addScaledVector(Ve.up,-ic.dot(Ve.up)).normalize(),Vg.crossVectors(ic,br);let e=Math.atan2(Vg.dot(Ve.up),ic.dot(br));me.seeker.style.transform="rotate("+(-e*180/Math.PI).toFixed(1)+"deg)",me.seeker.hidden=!1}function Jh(){me.eye.textContent=un.mode==="first"?"\u{1F52D}":"\u{1F441}",me.eye.setAttribute("aria-label",un.mode==="first"?"Stand back up":"Crouch down and look")}function ix(){ut==="inspect"&&Gh(),(ut==="play"||ut==="won")&&Kh(-1),dc.stop(),ut="menu",me.menu.hidden=!1,me.hud.hidden=!0,me.win.hidden=!0,me.help.hidden=!0,me.brief.hidden=!0,En.style.cursor="",qh(me.menu),Me.setMode("play")}async function Bh(i){dc.stop(),ut="menu",me.menu.hidden=!0,me.win.hidden=!0,await Kg(i),Do.length=0,H1(),Kn=Zh(),Kn&&Kn.seed===Tr?(hn=Kn.tries||0,(Kn.hintUsed||Kn.hintsUsed>0)&&(Hh=0,Rr=1,me.lampN.textContent="0",me.lamp.classList.add("spent"),me.lamp.setAttribute("aria-label","Hint used"))):(Kn=null,hn=0),me.tries.textContent=hn,me.brief.hidden=!1,qh(me.brief),tc()}function K1(){me.brief.hidden=!0,ut="play",Ji=performance.now()-(Kn&&Kn.seed===Tr?(Kn.elapsed||0)*1e3:0),$h(),me.clock.textContent="0:00.0",W1(),Jh(),me.hud.hidden=!1,me.hint.classList.remove("gone"),setTimeout(()=>me.hint.classList.add("gone"),9e3),En.focus(),Oo("Round started. One car out there is spotless; the clock is running."),nc(),Nf(),Nh("oyun_basladi")}var Xf=performance.now(),wr=0,Bf=0,zf=0,Z1=1.15*26,sx=1.15*16,rc=!0,Oh=60,kf=0;function qf(i){if(Me)for(let e of Me.trimMeshes){let t=e.LODinfo&&e.LODinfo.render&&e.LODinfo.render.levels;t&&t[1]&&(t[1].distance=i*i)}}function $1(i){Oh+=(1/Math.max(i,.001)-Oh)*.04,kf+=i,!(kf<2)&&(kf=0,rc&&Oh<42?(rc=!1,qf(sx)):!rc&&Oh>56&&(rc=!0,qf(Z1)))}function J1(i){un.cinema(!0),oc(i*.021),Ve.step(0,1,i*2.1),Yg(),Me.aimSun(Ve.up),un.update(Ve,i),Yh(i,0,!0),Tn.object.visible=!1}function j1(i){un.cinema(!1);let e=Uf("keya","keyd"),t=Uf("keys","keyw"),n=Uf("keyq","keye")+(Un.has("arrowright")?1:0)-(Un.has("arrowleft")?1:0);Un.has("arrowup")&&(t+=1),Un.has("arrowdown")&&(t-=1),bs&&(e+=bs.x,t+=-bs.y),oc(Wt.clamp(n,-1,1)*i*2.1);let s=Math.min(1,Math.hypot(e,t)),r=Un.has("shift")||!!bs&&s>.92,o=s*(r?I1:Cg);if(wr=Wt.lerp(wr,o,Math.min(1,i*9)),wr>.01&&(Ve.step(e,t,wr*i),Yg()),X1(i),s>.06){let c=Math.atan2(-e,t)-Zi;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;Zi+=c*Math.min(1,i*9)}Me.aimSun(Ve.up),un.update(Ve,i);let a=Math.min(1,wr/Cg);if(a>.05&&Ir.size===0){let c=Tn.gait*Math.PI*2,l=(un.mode==="first"?1:.4)*a;lt.position.addScaledVector(Ve.up,Math.sin(c*2)*.045*l),Xt.set(1,0,0).applyQuaternion(lt.quaternion),lt.position.addScaledVector(Xt,Math.sin(c)*.035*l),Xt.set(0,0,-1).applyQuaternion(lt.quaternion),Fo.setFromAxisAngle(Xt,Math.sin(c)*.01*l),lt.quaternion.premultiply(Fo)}Yh(i,wr),jf(i),me.clock.textContent=Ss((performance.now()-Ji)/1e3,!0),zf+=i,zf>3&&(zf=0,$h()),Y1(i),Bf+=i,Bf>.12&&(Bf=0,Zg&&Jf&&Ir.size===0&&Kh(uc(Zf,$f)))}function Q1(i){Sr+=i;let e=Me.hero.children[0].material,t=Math.exp(-Math.pow((Sr-.1)/.13,2)),n=Math.exp(-Math.pow((Sr-.58)/.3,2))*.42;e.emissiveIntensity=(t+n)*2.1,jf(i),Yh(i,0);let s=lt.aspect<.85?62:52,r=Math.exp(-Sr*4.2)*Math.sin(Math.min(Math.PI,Sr*6.5));lt.fov=s-r*9,lt.updateProjectionMatrix();let o=Me.positionOf(Me.target,Xt).clone(),a=o.clone().normalize(),c=new C(0,1,0).cross(a);c.lengthSq()<1e-6&&(c=new C(1,0,0).cross(a)),c.normalize();let l=.9+Sr*.45,h=c.clone().multiplyScalar(Math.cos(l)).addScaledVector(c.clone().cross(a).normalize(),Math.sin(l)),u=o.clone().addScaledVector(a,.95).addScaledVector(h,2.6);Lg.lookAt(u,o.clone().addScaledVector(a,.22),a),Fo.setFromRotationMatrix(Lg);let d=Math.min(1,i*3.2);lt.position.lerp(u,d),lt.quaternion.slerp(Fo,d)}function Yf(i){Me&&(ut==="menu"||ut==="boot"?J1(i):ut==="play"?j1(i):ut==="inspect"?k1(i):ut==="won"&&Q1(i),Ve&&Me.refreshBlots(Ve.position),Sf(i,Ve?Ve.up:null,lt),Me.follow(lt))}function ew(){let i=Kf();(rn.getPixelRatio()!==i||En.width!==Math.floor(innerWidth*i)||En.height!==Math.floor(innerHeight*i))&&hc()}function rx(){requestAnimationFrame(rx),ew();let i=performance.now(),e=Math.min((i-Xf)/1e3,.1);Xf=i,Me&&($1(e),Yf(e),rn.render(Me.scene,lt))}function tw(i){try{let e="fivewheels.best",t=parseFloat(localStorage.getItem(e)||"0");(!t||i<t)&&localStorage.setItem(e,String(i))}catch{}ox()}function ox(){let i=0;try{i=parseFloat(localStorage.getItem("fivewheels.best")||"0")}catch{i=0}me.streak.textContent=i?"Your best so far: "+Ss(i,!1)+".":"No car found yet. Go and look."}function ax(){let i=document.getElementById("mouseflip");i&&(i.textContent=Er?"Mouse: grab the world":"Mouse: FPS look")}function cx(){let i=Lh();for(let e of document.querySelectorAll("[data-mute]"))e.textContent=i?"\u{1F507}":"\u{1F50A}",e.classList.toggle("off",i),e.setAttribute("aria-label",i?"Sound is off":"Sound is on")}var nw=new Set(["start","random","go","lamp","photo"]);document.addEventListener("click",i=>{let e=i.target.closest("[data-act]");if(!e)return;let t=e.dataset.act;if(tc(),Pf(nw.has(t)),t==="start"){let n=Zh();if(n)Bh({seed:n.seed});else{let s=cc;cc=Qa(),Bh(s)}}else if(t==="random")Bh(Qa());else if(t==="go")K1();else if(t==="lamp")nx();else if(t==="menu")ix();else if(t==="help")me.help.hidden=!me.help.hidden,me.help.hidden?ut==="play"&&En.focus():qh(me.help);else if(t==="mouseflip"){Er=!Er;try{localStorage.setItem("fivewheels.mousegrab",Er?"1":"0")}catch{}ax()}else if(t==="mute")Ef(!Lh()),cx();else if(t==="eye")un.toggle(),Jh();else if(t==="copy"){let n=G1();navigator.clipboard.writeText(n).then(()=>{me.copy.textContent="Copied",setTimeout(()=>{me.copy.textContent="Copy result"},1600)},()=>{me.copy.textContent="Press \u2318C"})}else t==="photo"&&dc.photo({time:Ss((kh-Ji)/1e3,!1),tries:hn,count:ac(Me.count)}).toBlob(s=>{if(!s)return;let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="one-car-shines.png",r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),4e3),navigator.clipboard&&window.ClipboardItem&&navigator.clipboard.write([new ClipboardItem({"image/png":s})]).catch(()=>{});let o=me.photo.querySelector(".lbl");o.textContent="Saved \u2014 go post it \u2728",setTimeout(()=>{o.textContent="Save the photo"},2200)},"image/png")});(async function(){me.bootNote.textContent="Unpacking the wrecks\u2026",Vf(14,600),await Promise.all([cg(),eg()]),me.bootNote.textContent="Letting the dust settle\u2026",Vf(30,400),await _g(),await Kg(cc),me.briefImg.src=lg(rn,Me&&Me.scene?Me.scene.environment:null),document.addEventListener("pointerdown",()=>tc(),{once:!0}),hc(),ox(),cx(),ax(),ix(),rx(),L1&&(window.__five={fx:wf,trophy:dc,get world(){return Me},get walker(){return Ve},get view(){return un},get valet(){return Tn},get faceYaw(){return Zi},get state(){return ut},camera:lt,renderer:rn,audio:Df,start:e=>Bh(e?cc:Qa()),step:Yf,run(e,t){let n=t||.016666666666666666;for(let s=0;s<e;s+=n)Yf(n)},press(e,t){t===!1?Un.delete(e):Un.add(e)},turn(e){Ve.turn(e)},setView(e){un.set(e),Jh()},goTo(e,t){let n=Me.positionOf(e,new C).clone().normalize(),s=n.clone(),r=new C(0,1,0).cross(s);r.lengthSq()<1e-6&&(r=new C(1,0,0).cross(s)),r.normalize();let o=(t===void 0?2.2:t)/Me.radius;Ve.teleport(n.clone().addScaledVector(r,Math.sin(o)).normalize());let a=n.clone().addScaledVector(Ve.position,-n.dot(Ve.position)).normalize();Ve.turn(Math.atan2(Ve.right.dot(a),Ve.forward.dot(a)))},pickCentre(){lt.updateMatrixWorld(),Me.scene.updateMatrixWorld(),lc.setFromCamera(new qe(0,0),lt);let e=Me.pick(lc);return e?e.index:null},measure(e){let t=rn.getContext(),n=new Uint8Array(4),s=()=>{rn.render(Me.scene,lt),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n)};for(let o=0;o<8;o++)s();let r=[];for(let o=0;o<(e||24);o++){let a=performance.now();s(),r.push(performance.now()-a)}return r.sort((o,a)=>o-a),{fps:+(1e3/r[r.length>>1]).toFixed(1),worst:+(1e3/r[r.length-1]).toFixed(1),tris:rn.info.render.triangles,calls:rn.info.render.calls}},async shot(e,t,n){let s=t||1280,r=n||720;rn.setPixelRatio(1),rn.setSize(s,r,!1),lt.aspect=s/r,lt.updateProjectionMatrix(),rn.render(Me.scene,lt);let o=rn.domElement.toDataURL("image/jpeg",.92);return hc(),(await fetch("/save?dir=shots&name="+e,{method:"POST",body:o})).text()}})})().catch(Xg);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
