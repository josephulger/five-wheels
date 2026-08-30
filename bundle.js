var xx=Object.defineProperty;var rp=(i,e)=>{for(var t in e)xx(i,t,{get:e[t],enumerable:!0})};var Wp=0,Bu=1,Xp=2;var Ea=1,qp=2,fo=3,mi=0,Zt=1,Sn=2,zi=0,ar=1,Ca=2,zu=3,ku=4,Yp=5;var Ds=100,Kp=101,Zp=102,$p=103,Jp=104,jp=200,Qp=201,em=202,tm=203,Xc=204,qc=205,nm=206,im=207,sm=208,rm=209,om=210,am=211,cm=212,lm=213,hm=214,Yc=0,Kc=1,Zc=2,cr=3,$c=4,Jc=5,jc=6,Qc=7,vl=0,um=1,dm=2,_i=0,Vu=1,Gu=2,Hu=3,Ra=4,Wu=5,Xu=6,qu=7,jr="attached",Ml="detached",Yu=300,zs=301,mr=302,bl=303,Sl=304,Ia=306,Yn=1e3,ei=1001,Qr=1002,jt=1003,wl=1004;var gr=1005;var Qt=1006,po=1007;var yi=1008;var Vn=1009,Ku=1010,Zu=1011,mo=1012,go=1013,Kn=1014,xn=1015,ki=1016,Al=1017,Tl=1018,xo=1020,$u=35902,Ju=35899,ju=1021,Qu=1022,Dn=1023,Pi=1026,ks=1027,Vs=1028,_o=1029,Vi=1030,yo=1031;var vo=1033,Pa=33776,La=33777,Na=33778,Da=33779,El=35840,Cl=35841,Rl=35842,Il=35843,Pl=36196,Ll=37492,Nl=37496,Dl=37488,Ul=37489,Ua=37490,Fl=37491,Ol=37808,Bl=37809,zl=37810,kl=37811,Vl=37812,Gl=37813,Hl=37814,Wl=37815,Xl=37816,ql=37817,Yl=37818,Kl=37819,Zl=37820,$l=37821,Jl=36492,jl=36494,Ql=36495,eh=36283,th=36284,Fa=36285,nh=36286,ih=2200,Oa=2201,fm=2202,lr=2300,hr=2301,Wc=2302,Cu=2303,sr=2400,rr=2401,ta=2402,sh=2500,pm=2501,ed=0,Ba=1,Mo=2,mm=3200;var za=0,gm=1,ri="",Nt="srgb",Pn="srgb-linear",na="linear",yt="srgb";var ir=7680;var Ru=519,xm=512,_m=513,ym=514,rh=515,vm=516,Mm=517,oh=518,bm=519,el=35044;var td="300 es",fi=2e3,eo=2001;function _x(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sm(){let i=to("canvas");return i.style.display="block",i}var op={},no=null;function ia(...i){let e="THREE."+i.shift();no?no("log",e,...i):console.log(e,...i)}function wm(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function De(...i){i=wm(i);let e="THREE."+i.shift();if(no)no("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ve(...i){i=wm(i);let e="THREE."+i.shift();if(no)no("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function or(...i){let e=i.join(" ");e in op||(op[e]=!0,De(...i))}function Am(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Tm={[Yc]:Kc,[Zc]:jc,[$c]:Qc,[cr]:Jc,[Kc]:Yc,[jc]:Zc,[Qc]:$c,[Jc]:cr},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,Qo=Math.PI/180,ur=180/Math.PI;function pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function nd(i,e){return(i%e+e)%e}function vx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mx(i,e,t){return i!==e?(t-i)/(e-i):0}function ea(i,e,t){return(1-t)*i+t*e}function bx(i,e,t,n){return ea(i,e,1-Math.exp(-t*n))}function Sx(i,e=1){return e-Math.abs(nd(i,e*2)-e)}function wx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ax(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ex(i,e){return i+Math.random()*(e-i)}function Cx(i){return i*(.5-Math.random())}function Rx(i){i!==void 0&&(ap=i);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ix(i){return i*Qo}function Px(i){return i*ur}function Lx(i){return(i&i-1)===0&&i!==0}function Nx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ux(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:De("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xt={DEG2RAD:Qo,RAD2DEG:ur,generateUUID:pi,clamp:ot,euclideanModulo:nd,mapLinear:vx,inverseLerp:Mx,lerp:ea,damp:bx,pingpong:Sx,smoothstep:wx,smootherstep:Ax,randInt:Tx,randFloat:Ex,randFloatSpread:Cx,seededRandom:Rx,degToRad:Ix,radToDeg:Px,isPowerOfTwo:Lx,ceilPowerOfTwo:Nx,floorPowerOfTwo:Dx,setQuaternionFromProperEuler:Ux,normalize:St,denormalize:di},qe=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(u!==_||c!==d||l!==f||h!==g){let p=c*d+l*f+h*g+u*_;p<0&&(d=-d,f=-f,g=-g,_=-_,p=-p);let m=1-a;if(p<.9995){let b=Math.acos(p),w=Math.sin(b);m=Math.sin(m*b)/w,a=Math.sin(a*b)/w,c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a}else{c=c*m+d*a,l=l*m+f*a,h=h*m+g*a,u=u*m+_*a;let b=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=b,l*=b,h*=b,u*=b}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:De("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nu=new C,cp=new et,Je=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],b=s[1],w=s[4],x=s[7],A=s[2],M=s[5],E=s[8];return r[0]=o*_+a*b+c*A,r[3]=o*p+a*w+c*M,r[6]=o*m+a*x+c*E,r[1]=l*_+h*b+u*A,r[4]=l*p+h*w+u*M,r[7]=l*m+h*x+u*E,r[2]=d*_+f*b+g*A,r[5]=d*p+f*w+g*M,r[8]=d*m+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(iu.makeScale(e,t)),this}rotate(e){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},iu=new Je,lp=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hp=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fx(){let i={enabled:!0,workingColorSpace:Pn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Jr(s.r),s.g=Jr(s.g),s.b=Jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pn]:{primaries:e,whitePoint:n,transfer:na,toXYZ:lp,fromXYZ:hp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:lp,fromXYZ:hp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var Qe=Fx();function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Or,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Or===void 0&&(Or=to("canvas")),Or.width=e.width,Or.height=e.height;let s=Or.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Or}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=to("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cs(t[n]/255)*255):t[n]=cs(t[n]);return{data:t,width:e.width,height:e.height}}else return De("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ox=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(su(s[o].image)):r.push(su(s[o]))}else r=su(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(De("Texture: Unable to serialize Texture."),{})}var Bx=0,ru=new C,an=class i extends gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=Qt,o=yi,a=Dn,c=Vn,l=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=pi(),this.name="",this.source=new io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){De(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yn:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yn:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Yu;an.DEFAULT_ANISOTROPY=1;var wt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,x=(f+1)/2,A=(m+1)/2,M=(h+d)/4,E=(u+_)/4,y=(g+p)/4;return w>x&&w>A?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=E/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=E/r,s=y/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new an(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new io(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},sa=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ie=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Br.setFromMatrixColumn(e,0).length(),r=1/Br.setFromMatrixColumn(e,1).length(),o=1/Br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,kx)}lookAt(e,t,n){let s=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),Es.crossVectors(n,Xn),Es.lengthSq()===0&&(Math.abs(n.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),Es.crossVectors(n,Xn)),Es.normalize(),_c.crossVectors(Xn,Es),s[0]=Es.x,s[4]=_c.x,s[8]=Xn.x,s[1]=Es.y,s[5]=_c.y,s[9]=Xn.y,s[2]=Es.z,s[6]=_c.z,s[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],w=n[7],x=n[11],A=n[15],M=s[0],E=s[4],y=s[8],T=s[12],P=s[1],I=s[5],L=s[9],z=s[13],X=s[2],B=s[6],U=s[10],k=s[14],Y=s[3],te=s[7],ne=s[11],ce=s[15];return r[0]=o*M+a*P+c*X+l*Y,r[4]=o*E+a*I+c*B+l*te,r[8]=o*y+a*L+c*U+l*ne,r[12]=o*T+a*z+c*k+l*ce,r[1]=h*M+u*P+d*X+f*Y,r[5]=h*E+u*I+d*B+f*te,r[9]=h*y+u*L+d*U+f*ne,r[13]=h*T+u*z+d*k+f*ce,r[2]=g*M+_*P+p*X+m*Y,r[6]=g*E+_*I+p*B+m*te,r[10]=g*y+_*L+p*U+m*ne,r[14]=g*T+_*z+p*k+m*ce,r[3]=b*M+w*P+x*X+A*Y,r[7]=b*E+w*I+x*B+A*te,r[11]=b*y+w*L+x*U+A*ne,r[15]=b*T+w*z+x*k+A*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],b=c*f-l*d,w=a*f-l*u,x=a*d-c*u,A=o*f-l*h,M=o*d-c*h,E=o*u-a*h;return t*(_*b-p*w+m*x)-n*(g*b-p*A+m*M)+s*(g*w-_*A+m*E)-r*(g*x-_*M+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=t*a-n*o,w=t*c-s*o,x=t*l-r*o,A=n*c-s*a,M=n*l-r*a,E=s*l-r*c,y=h*_-u*g,T=h*p-d*g,P=h*m-f*g,I=u*p-d*_,L=u*m-f*_,z=d*m-f*p,X=b*z-w*L+x*I+A*P-M*T+E*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/X;return e[0]=(a*z-c*L+l*I)*B,e[1]=(s*L-n*z-r*I)*B,e[2]=(_*E-p*M+m*A)*B,e[3]=(d*M-u*E-f*A)*B,e[4]=(c*P-o*z-l*T)*B,e[5]=(t*z-s*P+r*T)*B,e[6]=(p*x-g*E-m*w)*B,e[7]=(h*E-d*x+f*w)*B,e[8]=(o*L-a*P+l*y)*B,e[9]=(n*P-t*L-r*y)*B,e[10]=(g*M-_*x+m*b)*B,e[11]=(u*x-h*M-f*b)*B,e[12]=(a*T-o*I-c*y)*B,e[13]=(t*I-n*T+s*y)*B,e[14]=(_*w-g*A-p*b)*B,e[15]=(h*A-u*w+d*b)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,p=o*u,m=a*u,b=c*l,w=c*h,x=c*u,A=n.x,M=n.y,E=n.z;return s[0]=(1-(_+m))*A,s[1]=(f+x)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(f-x)*M,s[5]=(1-(d+m))*M,s[6]=(p+b)*M,s[7]=0,s[8]=(g+w)*E,s[9]=(p-b)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Br.set(s[0],s[1],s[2]).length(),a=Br.set(s[4],s[5],s[6]).length(),c=Br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let l=1/o,h=1/a,u=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=fi,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===fi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===eo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===fi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===eo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Br=new C,li=new Ie,zx=new C(0,0,0),kx=new C(1,1,1),Es=new C,_c=new C,Xn=new C,up=new Ie,dp=new et,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:De("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dp.setFromEuler(this),this.setFromQuaternion(dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vx=0,fp=new C,zr=new et,ns=new Ie,yc=new C,Xo=new C,Gx=new C,Hx=new et,pp=new C(1,0,0),mp=new C(0,1,0),gp=new C(0,0,1),xp={type:"added"},Wx={type:"removed"},kr={type:"childadded",child:null},ou={type:"childremoved",child:null},Ht=class i extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new ti,n=new et,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new Je}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.multiply(zr),this}rotateOnWorldAxis(e,t){return zr.setFromAxisAngle(e,t),this.quaternion.premultiply(zr),this}rotateX(e){return this.rotateOnAxis(pp,e)}rotateY(e){return this.rotateOnAxis(mp,e)}rotateZ(e){return this.rotateOnAxis(gp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pp,e)}translateY(e){return this.translateOnAxis(mp,e)}translateZ(e){return this.translateOnAxis(gp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yc.copy(e):yc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(Xo,yc,this.up):ns.lookAt(yc,Xo,this.up),this.quaternion.setFromRotationMatrix(ns),s&&(ns.extractRotation(s.matrixWorld),zr.setFromRotationMatrix(ns),this.quaternion.premultiply(zr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xp),kr.child=e,this.dispatchEvent(kr),kr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wx),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xp),kr.child=e,this.dispatchEvent(kr),kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,Gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new C(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xx={type:"move"},ro=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},vc={h:0,s:0,l:0};function au(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=nd(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=au(o,r,e+1/3),this.g=au(o,r,e),this.b=au(o,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&De("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:De("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);De("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Em[e.toLowerCase()];return n!==void 0?this.setHex(n,t):De("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.workingToColorSpace(bn.copy(this),e),Math.round(ot(bn.r*255,0,255))*65536+Math.round(ot(bn.g*255,0,255))*256+Math.round(ot(bn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(bn.copy(this),t);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Nt){Qe.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,s=bn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cs),this.setHSL(Cs.h+e,Cs.s+t,Cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cs),e.getHSL(vc);let n=ea(Cs.h,vc.h,t),s=ea(Cs.s,vc.s,t),r=ea(Cs.l,vc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Me;Me.NAMES=Em;var ra=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Li=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new C,is=new C,cu=new C,ss=new C,Vr=new C,Gr=new C,_p=new C,lu=new C,hu=new C,uu=new C,du=new wt,fu=new wt,pu=new wt,Ns=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),is.subVectors(n,t),cu.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(is),c=hi.dot(cu),l=is.dot(is),h=is.dot(cu),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ss)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ss.x),c.addScaledVector(o,ss.y),c.addScaledVector(a,ss.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(du,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(pu,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),is.subVectors(e,t),hi.cross(is).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),is.subVectors(this.a,this.b),hi.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Vr.subVectors(s,n),Gr.subVectors(r,n),lu.subVectors(e,n);let c=Vr.dot(lu),l=Gr.dot(lu);if(c<=0&&l<=0)return t.copy(n);hu.subVectors(e,s);let h=Vr.dot(hu),u=Gr.dot(hu);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Vr,o);uu.subVectors(e,r);let f=Vr.dot(uu),g=Gr.dot(uu);if(g>=0&&f<=g)return t.copy(r);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Gr,a);let p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return _p.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(_p,a);let m=1/(p+_+d);return o=_*m,a=d*m,t.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kt=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mc.copy(n.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),bc.subVectors(this.max,qo),Hr.subVectors(e.a,qo),Wr.subVectors(e.b,qo),Xr.subVectors(e.c,qo),Rs.subVectors(Wr,Hr),Is.subVectors(Xr,Wr),Qs.subVectors(Hr,Xr);let t=[0,-Rs.z,Rs.y,0,-Is.z,Is.y,0,-Qs.z,Qs.y,Rs.z,0,-Rs.x,Is.z,0,-Is.x,Qs.z,0,-Qs.x,-Rs.y,Rs.x,0,-Is.y,Is.x,0,-Qs.y,Qs.x,0];return!mu(t,Hr,Wr,Xr,bc)||(t=[1,0,0,0,1,0,0,0,1],!mu(t,Hr,Wr,Xr,bc))?!1:(Sc.crossVectors(Rs,Is),t=[Sc.x,Sc.y,Sc.z],mu(t,Hr,Wr,Xr,bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new C,new C,new C,new C,new C,new C,new C,new C],ui=new C,Mc=new Kt,Hr=new C,Wr=new C,Xr=new C,Rs=new C,Is=new C,Qs=new C,qo=new C,bc=new C,Sc=new C,er=new C;function mu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){er.fromArray(i,r);let a=s.x*Math.abs(er.x)+s.y*Math.abs(er.y)+s.z*Math.abs(er.z),c=e.dot(er),l=t.dot(er),h=n.dot(er);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var rn=new C,wc=new qe,qx=0,Jt=class extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var oa=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var $e=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yx=new Kt,Yo=new C,gu=new C,cn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yo.subVectors(e,this.center);let t=Yo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Yo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yo.copy(e.center).add(gu)),this.expandByPoint(Yo.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Kx=0,Qn=new Ie,xu=new Ht,qr=new C,qn=new Kt,Ko=new Kt,fn=new C,Pt=class i extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?aa:oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,n){return Qn.makeTranslation(e,t,n),this.applyMatrix4(Qn),this}scale(e,t,n){return Qn.makeScale(e,t,n),this.applyMatrix4(Qn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $e(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&De("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];qn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ko.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(qn.min,Ko.min),qn.expandByPoint(fn),fn.addVectors(qn.max,Ko.max),qn.expandByPoint(fn)):(qn.expandByPoint(Ko.min),qn.expandByPoint(Ko.max))}qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)fn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(fn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)fn.fromBufferAttribute(a,l),c&&(qr.fromBufferAttribute(e,l),fn.add(qr)),s=Math.max(s,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Jt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new C,c[y]=new C;let l=new C,h=new C,u=new C,d=new qe,f=new qe,g=new qe,_=new C,p=new C;function m(y,T,P){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[y].add(_),a[T].add(_),a[P].add(_),c[y].add(p),c[T].add(p),c[P].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,T=b.length;y<T;++y){let P=b[y],I=P.start,L=P.count;for(let z=I,X=I+L;z<X;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let w=new C,x=new C,A=new C,M=new C;function E(y){A.fromBufferAttribute(s,y),M.copy(A);let T=a[y];w.copy(T),w.sub(A.multiplyScalar(A.dot(T))).normalize(),x.crossVectors(M,T);let I=x.dot(c[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,I)}for(let y=0,T=b.length;y<T;++y){let P=b[y],I=P.start,L=P.count;for(let z=I,X=I+L;z<X;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Jt(d,h,u)}if(this.index===null)return De("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},In=new C,ao=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),s=St(s,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ia("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ia("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zx=0,Ln=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=ar,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){De(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){De(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xc&&(n.blendSrc=this.blendSrc),this.blendDst!==qc&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Me().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new qe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var os=new C,_u=new C,Ac=new C,Ps=new C,yu=new C,Tc=new C,vu=new C,Ni=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_u.copy(e).add(t).multiplyScalar(.5),Ac.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(_u);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ac),a=Ps.dot(this.direction),c=-Ps.dot(Ac),l=Ps.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_u).addScaledVector(Ac,d),f}intersectSphere(e,t){os.subVectors(e.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,n,s,r){yu.subVectors(t,e),Tc.subVectors(n,e),vu.crossVectors(yu,Tc);let o=this.direction.dot(vu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);let c=a*this.direction.dot(Tc.crossVectors(Ps,Tc));if(c<0)return null;let l=a*this.direction.dot(yu.cross(Ps));if(l<0||c+l>o)return null;let h=-a*Ps.dot(vu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yp=new Ie,tr=new Ni,Ec=new cn,vp=new C,Cc=new C,Rc=new C,Ic=new C,Mu=new C,Pc=new C,Mp=new C,Lc=new C,Be=class extends Ht{constructor(e=new Pt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Mu.fromBufferAttribute(u,e),o?Pc.addScaledVector(Mu,h):Pc.addScaledVector(Mu.sub(t),h))}t.add(Pc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(r),tr.copy(e.ray).recast(e.near),!(Ec.containsPoint(tr.origin)===!1&&(tr.intersectSphere(Ec,vp)===null||tr.origin.distanceToSquared(vp)>(e.far-e.near)**2))&&(yp.copy(r).invert(),tr.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,tr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){let M=a.getX(x),E=a.getX(x+1),y=a.getX(x+2);s=Nc(this,m,e,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=a.getX(p),w=a.getX(p+1),x=a.getX(p+2);s=Nc(this,o,e,n,l,h,u,b,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],m=o[p.materialIndex],b=Math.max(p.start,f.start),w=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let x=b,A=w;x<A;x+=3){let M=x,E=x+1,y=x+2;s=Nc(this,m,e,n,l,h,u,M,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,w=p+1,x=p+2;s=Nc(this,o,e,n,l,h,u,b,w,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function $x(i,e,t,n,s,r,o,a){let c;if(e.side===Zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===mi,a),c===null)return null;Lc.copy(a),Lc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Lc);return l<t.near||l>t.far?null:{distance:l,point:Lc.clone(),object:i}}function Nc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Cc),i.getVertexPosition(c,Rc),i.getVertexPosition(l,Ic);let h=$x(i,e,t,n,Cc,Rc,Ic,Mp);if(h){let u=new C;Ns.getBarycoord(Mp,Cc,Rc,Ic,u),s&&(h.uv=Ns.getInterpolatedAttribute(s,a,c,l,u,new qe)),r&&(h.uv1=Ns.getInterpolatedAttribute(r,a,c,l,u,new qe)),o&&(h.normal=Ns.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new C,materialIndex:0};Ns.getNormal(Cc,Rc,Ic,d.normal),h.face=d,h.barycoord=u}return h}var Zo=new wt,bp=new wt,Sp=new wt,Jx=new wt,wp=new Ie,Dc=new C,bu=new cn,Ap=new Ie,Su=new Ni,ca=class extends Be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=jr,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingBox.expandByPoint(Dc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Dc),this.boundingSphere.expandByPoint(Dc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bu.copy(this.boundingSphere),bu.applyMatrix4(s),e.ray.intersectsSphere(bu)!==!1&&(Ap.copy(s).invert(),Su.copy(e.ray).applyMatrix4(Ap),!(this.boundingBox!==null&&Su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===jr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ml?this.bindMatrixInverse.copy(this.bindMatrix).invert():De("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;bp.fromBufferAttribute(s.attributes.skinIndex,e),Sp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Zo.copy(t),t.set(0,0,0,0)):(Zo.set(...t,1),t.set(0,0,0)),Zo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Sp.getComponent(r);if(o!==0){let a=bp.getComponent(r);wp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jx.copy(Zo).applyMatrix4(wp),o)}}return t.isVector4&&(t.w=Zo.w),t.applyMatrix4(this.bindMatrixInverse)}},co=class extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},Di=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=jt,h=jt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tp=new Ie,jx=new Ie,la=class i{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){De("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jx;Tp.multiplyMatrices(a,t[r]),Tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Di(t,e,e,Dn,xn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(De("Skeleton: No bone found with UUID:",r),o=new co),this.bones.push(o),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ui=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yr=new Ie,Ep=new Ie,Uc=[],Cp=new Kt,Qx=new Ie,$o=new Be,Jo=new cn,ha=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),Cp.copy(e.boundingBox).applyMatrix4(Yr),this.boundingBox.union(Cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yr),Jo.copy(e.boundingSphere).applyMatrix4(Yr),this.boundingSphere.union(Jo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if($o.geometry=this.geometry,$o.material=this.material,$o.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(n),e.ray.intersectsSphere(Jo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yr),Ep.multiplyMatrices(n,Yr),$o.matrixWorld=Ep,$o.raycast(e,Uc);for(let o=0,a=Uc.length;o<a;o++){let c=Uc[o];c.instanceId=r,c.object=this,t.push(c)}Uc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Di(new Float32Array(s*this.count),s,this.count,Vs,xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wu=new C,e_=new C,t_=new Je,Ri=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wu.subVectors(n,t).cross(e_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(wu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||t_.getNormalMatrix(e),s=this.coplanarPoint(wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},nr=new cn,n_=new qe(.5,.5),Fc=new C,Us=class{constructor(e=new Ri,t=new Ri,n=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],b=r[12],w=r[13],x=r[14],A=r[15];if(s[0].setComponents(l-o,f-h,m-g,A-b).normalize(),s[1].setComponents(l+o,f+h,m+g,A+b).normalize(),s[2].setComponents(l+a,f+u,m+_,A+w).normalize(),s[3].setComponents(l-a,f-u,m-_,A-w).normalize(),n)s[4].setComponents(c,d,p,x).normalize(),s[5].setComponents(l-c,f-d,m-p,A-x).normalize();else if(s[4].setComponents(l-c,f-d,m-p,A-x).normalize(),t===fi)s[5].setComponents(l+c,f+d,m+p,A+x).normalize();else if(t===eo)s[5].setComponents(c,d,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nr)}intersectsSprite(e){nr.center.set(0,0,0);let t=n_.distanceTo(e.center);return nr.radius=.7071067811865476+t,nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(nr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fc.x=s.normal.x>0?e.max.x:e.min.x,Fc.y=s.normal.y>0?e.max.y:e.min.y,Fc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lo=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sl=new C,rl=new C,Rp=new Ie,jo=new Ni,Oc=new cn,Au=new C,Ip=new C,dr=class extends Ht{constructor(e=new Pt,t=new lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sl.fromBufferAttribute(t,s-1),rl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sl.distanceTo(rl);e.setAttribute("lineDistance",new $e(n,1))}else De("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,e.ray.intersectsSphere(Oc)===!1)return;Rp.copy(s).invert(),jo.copy(e.ray).applyMatrix4(Rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=h.getX(_),b=h.getX(_+1),w=Bc(this,e,jo,c,m,b,_);w&&t.push(w)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=Bc(this,e,jo,c,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,p=g-1;_<p;_+=l){let m=Bc(this,e,jo,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=Bc(this,e,jo,c,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(sl.fromBufferAttribute(a,s),rl.fromBufferAttribute(a,r),t.distanceSqToSegment(sl,rl,Au,Ip)>n)return;Au.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Au);if(!(l<e.near||l>e.far))return{distance:l,point:Ip.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Pp=new C,Lp=new C,ua=class extends dr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Pp.fromBufferAttribute(t,s),Lp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Pp.distanceTo(Lp);e.setAttribute("lineDistance",new $e(n,1))}else De("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends dr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fi=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Np=new Ie,Iu=new Ni,zc=new cn,kc=new C,ls=class extends Ht{constructor(e=new Pt,t=new Fi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(s),zc.radius+=r,e.ray.intersectsSphere(zc)===!1)return;Np.copy(s).invert(),Iu.copy(e.ray).applyMatrix4(Np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let p=l.getX(g);kc.fromBufferAttribute(u,p),Dp(kc,p,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)kc.fromBufferAttribute(u,g),Dp(kc,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Dp(i,e,t,n,s,r,o){let a=Iu.distanceSqToPoint(i);if(a<t){let c=new C;Iu.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var fa=class extends an{constructor(e=[],t=zs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},hs=class extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var us=class extends an{constructor(e,t,n=Kn,s,r,o,a=jt,c=jt,l,h=Pi,u=1){if(h!==Pi&&h!==ks)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ol=class extends us{constructor(e,t=Kn,n=zs,s,r,o=jt,a=jt,c,l=Pi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},pn=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2));function g(_,p,m,b,w,x,A,M,E,y,T){let P=x/E,I=A/y,L=x/2,z=A/2,X=M/2,B=E+1,U=y+1,k=0,Y=0,te=new C;for(let ne=0;ne<U;ne++){let ce=ne*I-z;for(let ue=0;ue<B;ue++){let Ye=ue*P-L;te[_]=Ye*b,te[p]=ce*w,te[m]=X,l.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[m]=M>0?1:-1,h.push(te.x,te.y,te.z),u.push(ue/E),u.push(1-ne/y),k+=1}}for(let ne=0;ne<y;ne++)for(let ce=0;ce<E;ce++){let ue=d+ce+B*ne,Ye=d+ce+B*(ne+1),ut=d+(ce+1)+B*(ne+1),je=d+(ce+1)+B*ne;c.push(ue,Ye,je),c.push(Ye,ut,je),Y+=6}a.addGroup(f,Y,T),f+=Y,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ma=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,h=new qe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $e(o,3)),this.setAttribute("normal",new $e(a,3)),this.setAttribute("uv",new $e(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ni=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],p=n/2,m=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new $e(u,3)),this.setAttribute("normal",new $e(d,3)),this.setAttribute("uv",new $e(f,2));function b(){let x=new C,A=new C,M=0,E=(t-e)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,I=P*(t-e)+e;for(let L=0;L<=s;L++){let z=L/s,X=z*c+a,B=Math.sin(X),U=Math.cos(X);A.x=I*B,A.y=-P*n+p,A.z=I*U,u.push(A.x,A.y,A.z),x.set(B,E,U).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-P),T.push(g++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=_[T][y],I=_[T+1][y],L=_[T+1][y+1],z=_[T][y+1];(e>0||T!==0)&&(h.push(P,I,z),M+=3),(t>0||T!==r-1)&&(h.push(I,L,z),M+=3)}l.addGroup(m,M,0),m+=M}function w(x){let A=g,M=new qe,E=new C,y=0,T=x===!0?e:t,P=x===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let L=0;L<=s;L++){let X=L/s*c+a,B=Math.cos(X),U=Math.sin(X);E.x=T*U,E.y=p*P,E.z=T*B,u.push(E.x,E.y,E.z),d.push(0,P,0),M.x=B*.5+.5,M.y=U*.5*P+.5,f.push(M.x,M.y),g++}for(let L=0;L<s;L++){let z=A+L,X=I+L;x===!0?h.push(X,X+1,z):h.push(X+1,X,z),y+=3}l.addGroup(m,y,x===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var xi=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let b=m*d-o;for(let w=0;w<l;w++){let x=w*u-r;g.push(x,-b,0),_.push(0,0,1),p.push(w/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let b=0;b<a;b++){let w=b+l*m,x=b+l*(m+1),A=b+1+l*(m+1),M=b+1+l*m;f.push(w,x,M),f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var ii=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new C,d=new C,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let b=[],w=m/n,x=o+w*a,A=e*Math.cos(x),M=Math.sqrt(e*e-A*A),E=0;m===0&&o===0?E=.5/t:m===n&&c===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){let T=y/t,P=s+T*r;u.x=-M*Math.cos(P),u.y=A,u.z=M*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+E,1-w),b.push(l++)}h.push(b)}for(let m=0;m<n;m++)for(let b=0;b<t;b++){let w=h[m][b+1],x=h[m][b],A=h[m+1][b],M=h[m+1][b+1];(m!==0||o>0)&&f.push(w,x,M),(m!==n-1||c<Math.PI)&&f.push(x,A,M)}this.setIndex(f),this.setAttribute("position",new $e(g,3)),this.setAttribute("normal",new $e(_,3)),this.setAttribute("uv",new $e(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ho=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],u=[],d=new C,f=new C,g=new C;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let m=0;m<=s;m++){let b=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(b),f.y=(e+t*Math.cos(p))*Math.sin(b),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),d.x=e*Math.cos(b),d.y=e*Math.sin(b),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(m/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,b=(s+1)*(_-1)+p-1,w=(s+1)*(_-1)+p,x=(s+1)*_+p;c.push(m,b,x),c.push(b,w,x)}this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Up(s))s.isRenderTargetTexture?(De("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Up(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function Up(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function i_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function id(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Cm={clone:xr,merge:wn},s_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=i_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Me().setHex(s.value);break;case"v2":this.uniforms[n].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},al=class extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ot=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ds=class extends Ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=za,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=vl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cl=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Vc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function o_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Fp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function a_(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Oi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends Oi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sr,endingEnd:sr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rr:r=e,a=2*t-n;break;case ta:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rr:o=e,c=2*n-t;break;case ta:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,b=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*_+.5*g,x=f*p-f*_;for(let A=0;A!==a;++A)r[A]=m*o[h+A]+b*o[l+A]+w*o[c+A]+x*o[u+A];return r}},ga=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ul=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dl=class extends Oi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*g;return r}let d=a*2,f=e-1;for(let g=0;g!==a;++g){let _=o[l+g],p=o[c+g],m=f*d+g*2,b=u[m],w=u[m+1],x=e*d+g*2,A=h[x],M=h[x+1],E=(n-t)/(s-t),y,T,P,I,L;for(let z=0;z<8;z++){y=E*E,T=y*E,P=1-E,I=P*P,L=I*P;let B=L*t+3*I*E*b+3*P*y*A+T*s-n;if(Math.abs(B)<1e-10)break;let U=3*I*(b-t)+6*P*E*(A-b)+3*y*(s-A);if(Math.abs(U)<1e-10)break;E=E-B/U,E=Math.max(0,Math.min(1,E))}r[g]=L*_+3*I*E*w+3*P*y*M+T*p}return r}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vc(t,this.TimeBufferType),this.values=Vc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Vc(e.times,Array),values:Vc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new dl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case lr:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break;case Cu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return De("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return Wc;case this.InterpolantFactoryMethodBezier:return Cu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ve("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&yx(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=hr;var fs=class extends kn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=lr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="color";var ps=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};ps.prototype.ValueTypeName="number";var fl=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)et.slerpFlat(r,0,o,l-a,o,l,c);return r}},ms=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};ms.prototype.ValueTypeName="quaternion";ms.prototype.InterpolantFactoryMethodSmooth=void 0;var gs=class extends kn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=lr;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends kn{constructor(e,t,n,s){super(e,t,n,s)}};Fs.prototype.ValueTypeName="vector";var fr=class{constructor(e="",t=-1,n=[],s=sh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(l_(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=o_(c);c=Fp(c,1,h),l=Fp(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ps(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function c_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ps;case"vector":case"vector2":case"vector3":case"vector4":return Fs;case"color":return xa;case"quaternion":return ms;case"bool":case"boolean":return fs;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function l_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=c_(i.type);if(i.times===void 0){let t=[],n=[];a_(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Op(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Op(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Op(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var pl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rm=new pl,Bi=class{constructor(e){this.manager=e!==void 0?e:Rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var as={},Pu=class extends Error{constructor(e,t){super(e),this.response=t}},uo=class extends Bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ii.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(as[e]!==void 0){as[e].push({onLoad:t,onProgress:n,onError:s});return}as[e]=[],as[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&De("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=as[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,_=0,p=new ReadableStream({start(m){b();function b(){u.read().then(({done:w,value:x})=>{if(w)m.close();else{_+=x.byteLength;let A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let M=0,E=h.length;M<E;M++){let y=h[M];y.onProgress&&y.onProgress(A)}m.enqueue(x),b()}},w=>{m.error(w)})}}});return new Response(p)}else throw new Pu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ii.add(`file:${e}`,l);let h=as[e];delete as[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=as[e];if(h===void 0)throw this.manager.itemError(e),l;delete as[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Kr=new WeakMap,ml=class extends Bi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Kr.get(o);u===void 0&&(u=[],Kr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=to("img");function c(){h(),t&&t(this);let u=Kr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ii.remove(`image:${e}`);let d=Kr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ii.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var _a=class extends Bi{constructor(e){super(e)}load(e,t,n,s){let r=new an,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},pr=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Os=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Tu=new Ie,Bp=new C,zp=new C,ya=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),Tu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===eo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gc=new C,Hc=new et,Ci=new C,va=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gc,Hc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gc,Hc,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Hc,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ls=new C,kp=new qe,Vp=new qe,Gt=class extends va{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ur*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z)}getViewSize(e,t){return this.getViewBounds(e,kp,Vp),t.subVectors(Vp,kp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Lu=class extends ya{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ma=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Nu=class extends ya{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}},ba=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bs=class extends va{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Du=class extends ya{constructor(){super(new Bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},si=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Du}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Eu=new WeakMap,Sa=class extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&De("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&De("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ii.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Eu.has(o)===!0?(s&&s(Eu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Ii.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Eu.set(c,l),Ii.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zr=-90,$r=1,gl=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Gt(Zr,$r,e,t);s.layers=this.layers,this.add(s);let r=new Gt(Zr,$r,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Zr,$r,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Zr,$r,e,t);a.layers=this.layers,this.add(a);let c=new Gt(Zr,$r,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Zr,$r,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xl=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var _l=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){et.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;et.multiplyQuaternionsFlat(e,o,e,t,e,n),et.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},sd="\\[\\]\\.:\\/",h_=new RegExp("["+sd+"]","g"),rd="[^"+sd+"]",u_="[^"+sd.replace("\\.","")+"]",d_=/((?:WC+[\/:])*)/.source.replace("WC",rd),f_=/(WCOD+)?/.source.replace("WCOD",u_),p_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rd),m_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rd),g_=new RegExp("^"+d_+f_+p_+m_+"$"),x_=["material","materials","bones","map"],Uu=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h_,"")}static parseTrackName(e){let t=g_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);x_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){De("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Uu;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yl=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:sr,endingEnd:sr};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Oa,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case pm:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case sh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===fm;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===ih){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=rr,s.endingEnd=rr):(e?s.endingStart=this.zeroSlopeAtStart?rr:sr:s.endingStart=ta,t?s.endingEnd=this.zeroSlopeAtEnd?rr:sr:s.endingEnd=ta)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},__=new Float32Array(1),wa=class extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;g=new _l(Et.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ga(new Float32Array(2),new Float32Array(2),1,__),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?fr.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sh),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new yl(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?fr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Aa=class{constructor(e,t,n,s,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=s,this.count=r,this.normalized=o,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Gp=new Ie,Ta=class{constructor(e,t,n=0,s=1/0){this.ray=new Ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gp),this}intersectObject(e,t=!0,n=[]){return Fu(e,this,n,t),n.sort(Hp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Fu(e[s],this,n,t);return n.sort(Hp),n}};function Hp(i,e){return i.distance-e.distance}function Fu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Fu(r[o],e,t,!0)}}var Ou=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function od(i,e,t,n){let s=y_(n);switch(t){case ju:return i*e;case Vs:return i*e/s.components*s.byteLength;case _o:return i*e/s.components*s.byteLength;case Vi:return i*e*2/s.components*s.byteLength;case yo:return i*e*2/s.components*s.byteLength;case Qu:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case El:case Rl:return Math.max(i,8)*Math.max(e,8)/2;case Pl:case Ll:case Dl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nl:case Ua:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case jl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fa:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y_(i){switch(i){case Vn:case Ku:return{byteLength:1,components:1};case mo:case Zu:case ki:return{byteLength:2,components:1};case Al:case Tl:return{byteLength:2,components:4};case Kn:case go:case xn:return{byteLength:4,components:1};case $u:case Ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?De("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function jm(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function M_(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var b_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
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
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
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
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
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
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,U_=`#ifdef USE_IRIDESCENCE
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
#endif`,F_=`#ifdef USE_BUMPMAP
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
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,X_=`#define PI 3.141592653589793
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
} // validated`,q_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Y_=`vec3 transformedNormal = objectNormal;
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
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ly=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yy=`PhysicalMaterial material;
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
#endif`,vy=`uniform sampler2D dfgLUT;
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
}`,My=`
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Py=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Ny=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$y=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,av=`float getShadowMask() {
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
}`,cv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lv=`#ifdef USE_SKINNING
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
#endif`,hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uv=`#ifdef USE_SKINNING
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
#endif`,dv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gv=`#ifdef USE_TRANSMISSION
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
#endif`,xv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sv=`uniform sampler2D t2D;
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Av=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`#include <common>
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
}`,Rv=`#if DEPTH_PACKING == 3200
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
}`,Iv=`#define DISTANCE
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
}`,Pv=`#define DISTANCE
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`uniform float scale;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Bv=`#define LAMBERT
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
}`,zv=`#define LAMBERT
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
}`,kv=`#define MATCAP
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
}`,Vv=`#define MATCAP
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
}`,Gv=`#define NORMAL
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
}`,Hv=`#define NORMAL
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
}`,Wv=`#define PHONG
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
}`,Xv=`#define PHONG
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
}`,qv=`#define STANDARD
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
}`,Yv=`#define STANDARD
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
}`,Kv=`#define TOON
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
}`,Zv=`#define TOON
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
}`,$v=`uniform float size;
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
}`,Jv=`uniform vec3 diffuse;
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
}`,jv=`#include <common>
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
}`,Qv=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:b_,alphahash_pars_fragment:S_,alphamap_fragment:w_,alphamap_pars_fragment:A_,alphatest_fragment:T_,alphatest_pars_fragment:E_,aomap_fragment:C_,aomap_pars_fragment:R_,batching_pars_vertex:I_,batching_vertex:P_,begin_vertex:L_,beginnormal_vertex:N_,bsdfs:D_,iridescence_fragment:U_,bumpmap_pars_fragment:F_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:k_,color_fragment:V_,color_pars_fragment:G_,color_pars_vertex:H_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:q_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:K_,displacementmap_vertex:Z_,emissivemap_fragment:$_,emissivemap_pars_fragment:J_,colorspace_fragment:j_,colorspace_pars_fragment:Q_,envmap_fragment:ey,envmap_common_pars_fragment:ty,envmap_pars_fragment:ny,envmap_pars_vertex:iy,envmap_physical_pars_fragment:py,envmap_vertex:sy,fog_vertex:ry,fog_pars_vertex:oy,fog_fragment:ay,fog_pars_fragment:cy,gradientmap_pars_fragment:ly,lightmap_pars_fragment:hy,lights_lambert_fragment:uy,lights_lambert_pars_fragment:dy,lights_pars_begin:fy,lights_toon_fragment:my,lights_toon_pars_fragment:gy,lights_phong_fragment:xy,lights_phong_pars_fragment:_y,lights_physical_fragment:yy,lights_physical_pars_fragment:vy,lights_fragment_begin:My,lights_fragment_maps:by,lights_fragment_end:Sy,lightprobes_pars_fragment:wy,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:Ey,logdepthbuf_vertex:Cy,map_fragment:Ry,map_pars_fragment:Iy,map_particle_fragment:Py,map_particle_pars_fragment:Ly,metalnessmap_fragment:Ny,metalnessmap_pars_fragment:Dy,morphinstance_vertex:Uy,morphcolor_vertex:Fy,morphnormal_vertex:Oy,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:ky,normal_fragment_maps:Vy,normal_pars_fragment:Gy,normal_pars_vertex:Hy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:Ky,iridescence_pars_fragment:Zy,opaque_fragment:$y,packing:Jy,premultiplied_alpha_fragment:jy,project_vertex:Qy,dithering_fragment:ev,dithering_pars_fragment:tv,roughnessmap_fragment:nv,roughnessmap_pars_fragment:iv,shadowmap_pars_fragment:sv,shadowmap_pars_vertex:rv,shadowmap_vertex:ov,shadowmask_pars_fragment:av,skinbase_vertex:cv,skinning_pars_vertex:lv,skinning_vertex:hv,skinnormal_vertex:uv,specularmap_fragment:dv,specularmap_pars_fragment:fv,tonemapping_fragment:pv,tonemapping_pars_fragment:mv,transmission_fragment:gv,transmission_pars_fragment:xv,uv_pars_fragment:_v,uv_pars_vertex:yv,uv_vertex:vv,worldpos_vertex:Mv,background_vert:bv,background_frag:Sv,backgroundCube_vert:wv,backgroundCube_frag:Av,cube_vert:Tv,cube_frag:Ev,depth_vert:Cv,depth_frag:Rv,distance_vert:Iv,distance_frag:Pv,equirect_vert:Lv,equirect_frag:Nv,linedashed_vert:Dv,linedashed_frag:Uv,meshbasic_vert:Fv,meshbasic_frag:Ov,meshlambert_vert:Bv,meshlambert_frag:zv,meshmatcap_vert:kv,meshmatcap_frag:Vv,meshnormal_vert:Gv,meshnormal_frag:Hv,meshphong_vert:Wv,meshphong_frag:Xv,meshphysical_vert:qv,meshphysical_frag:Yv,meshtoon_vert:Kv,meshtoon_frag:Zv,points_vert:$v,points_frag:Jv,shadow_vert:jv,shadow_frag:Qv,sprite_vert:eM,sprite_frag:tM},_e={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Hi={basic:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:wn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:wn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Me(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:wn([_e.points,_e.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:wn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:wn([_e.common,_e.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:wn([_e.sprite,_e.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:wn([_e.common,_e.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:wn([_e.lights,_e.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Hi.physical={uniforms:wn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var ah={r:0,b:0,g:0},nM=new Ie,Qm=new Je;Qm.set(-1,0,0,0,1,0,0,0,1);function iM(i,e,t,n,s,r){let o=new Me(0),a=s===!0?0:1,c,l,h=null,u=0,d=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let x=b.backgroundBlurriness>0;w=e.get(w,x)}return w}function g(b){let w=!1,x=f(b);x===null?p(o,a):x&&x.isColor&&(p(x,1),w=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(b,w){let x=f(w);x&&(x.isCubeTexture||x.mapping===Ia)?(l===void 0&&(l=new Be(new pn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:xr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qm),l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==yt,(h!==x||u!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Be(new xi(2,2),new Nn({name:"BackgroundMaterial",uniforms:xr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(x.colorSpace)!==yt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,w){b.getRGB(ah,id(i)),t.buffers.color.setClear(ah.r,ah.g,ah.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,p(o,a)},render:g,addToRenderList:_,dispose:m}}function sM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(I,L,z,X,B){let U=!1,k=u(I,X,z,L);r!==k&&(r=k,l(r.object)),U=f(I,X,z,B),U&&g(I,X,z,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,x(I,L,z,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,z,X){let B=X.wireframe===!0,U=n[L.id];U===void 0&&(U={},n[L.id]=U);let k=I.isInstancedMesh===!0?I.id:0,Y=U[k];Y===void 0&&(Y={},U[k]=Y);let te=Y[z.id];te===void 0&&(te={},Y[z.id]=te);let ne=te[B];return ne===void 0&&(ne=d(c()),te[B]=ne),ne}function d(I){let L=[],z=[],X=[];for(let B=0;B<t;B++)L[B]=0,z[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:X,object:I,attributes:{},index:null}}function f(I,L,z,X){let B=r.attributes,U=L.attributes,k=0,Y=z.getAttributes();for(let te in Y)if(Y[te].location>=0){let ce=B[te],ue=U[te];if(ue===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),ce===void 0||ce.attribute!==ue||ue&&ce.data!==ue.data)return!0;k++}return r.attributesNum!==k||r.index!==X}function g(I,L,z,X){let B={},U=L.attributes,k=0,Y=z.getAttributes();for(let te in Y)if(Y[te].location>=0){let ce=U[te];ce===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor));let ue={};ue.attribute=ce,ce&&ce.data&&(ue.data=ce.data),B[te]=ue,k++}r.attributes=B,r.attributesNum=k,r.index=X}function _(){let I=r.newAttributes;for(let L=0,z=I.length;L<z;L++)I[L]=0}function p(I){m(I,0)}function m(I,L){let z=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;z[I]=1,X[I]===0&&(i.enableVertexAttribArray(I),X[I]=1),B[I]!==L&&(i.vertexAttribDivisor(I,L),B[I]=L)}function b(){let I=r.newAttributes,L=r.enabledAttributes;for(let z=0,X=L.length;z<X;z++)L[z]!==I[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function w(I,L,z,X,B,U,k){k===!0?i.vertexAttribIPointer(I,L,z,B,U):i.vertexAttribPointer(I,L,z,X,B,U)}function x(I,L,z,X){_();let B=X.attributes,U=z.getAttributes(),k=L.defaultAttributeValues;for(let Y in U){let te=U[Y];if(te.location>=0){let ne=B[Y];if(ne===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor)),ne!==void 0){let ce=ne.normalized,ue=ne.itemSize,Ye=e.get(ne);if(Ye===void 0)continue;let ut=Ye.buffer,je=Ye.type,J=Ye.bytesPerElement,le=je===i.INT||je===i.UNSIGNED_INT||ne.gpuType===go;if(ne.isInterleavedBufferAttribute){let ie=ne.data,Ge=ie.stride,Ke=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Oe=0;Oe<te.locationSize;Oe++)m(te.location+Oe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Oe=0;Oe<te.locationSize;Oe++)p(te.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Oe=0;Oe<te.locationSize;Oe++)w(te.location+Oe,ue/te.locationSize,je,ce,Ge*J,(Ke+ue/te.locationSize*Oe)*J,le)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<te.locationSize;ie++)m(te.location+ie,ne.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<te.locationSize;ie++)p(te.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let ie=0;ie<te.locationSize;ie++)w(te.location+ie,ue/te.locationSize,je,ce,ue*J,ue/te.locationSize*ie*J,le)}}else if(k!==void 0){let ce=k[Y];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(te.location,ce);break;case 3:i.vertexAttrib3fv(te.location,ce);break;case 4:i.vertexAttrib4fv(te.location,ce);break;default:i.vertexAttrib1fv(te.location,ce)}}}}b()}function A(){T();for(let I in n){let L=n[I];for(let z in L){let X=L[z];for(let B in X){let U=X[B];for(let k in U)h(U[k].object),delete U[k];delete X[B]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let L=n[I.id];for(let z in L){let X=L[z];for(let B in X){let U=X[B];for(let k in U)h(U[k].object),delete U[k];delete X[B]}}delete n[I.id]}function E(I){for(let L in n){let z=n[L];for(let X in z){let B=z[X];if(B[I.id]===void 0)continue;let U=B[I.id];for(let k in U)h(U[k].object),delete U[k];delete B[I.id]}}}function y(I){for(let L in n){let z=n[L],X=I.isInstancedMesh===!0?I.id:0,B=z[X];if(B!==void 0){for(let U in B){let k=B[U];for(let Y in k)h(k[Y].object),delete k[Y];delete B[U]}delete z[X],Object.keys(z).length===0&&delete n[L]}}}function T(){P(),o=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function rM(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function oM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Dn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let y=E===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Vn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xn&&!y)}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(De("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&De("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:x,maxSamples:A,samples:M}}function aM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ri,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let b=r?0:n,w=b*4,x=m.clippingState||null;c.value=x,x=h(g,d,w,f);for(let A=0;A!==w;++A)x[A]=t[A];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let m=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=f;w!==_;++w,x+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var Gs=4,Im=[.125,.215,.35,.446,.526,.582],_r=20,cM=256,ka=new Bs,Pm=new Me,ad=null,cd=0,ld=0,hd=!1,lM=new C,Hs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=lM}=r;ad=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,cd,ld),this._renderer.xr.enabled=hd,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ki,format:Dn,colorSpace:Pn,depthBuffer:!1},s=Lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hM(r)),this._blurMaterial=dM(r,e,t),this._ggxMaterial=uM(r,e,t)}return s}_compileMaterial(e){let t=new Be(new Pt,e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,s,r){let c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Pm),u.toneMapping=_i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Be(new pn,new Wt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,m=!0):(p.color.copy(Pm),m=!0);for(let w=0;w<6;w++){let x=w%3;x===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):x===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let A=this._cubeSize;bo(s,x*A,w>2?A:0,A,A),u.setRenderTarget(s),m&&u.render(_,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===zs||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;bo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=0+l*1.25,f=u*d,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Gs?n-g+Gs:0),m=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,bo(r,p,m,3*_,2*_),s.setRenderTarget(r),s.render(a,ka),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,bo(e,p,m,3*_,2*_),s.setRenderTarget(e),s.render(a,ka)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*_r-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):_r;p>_r&&De(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_r}`);let m=[],b=0;for(let E=0;E<_r;++E){let y=E/_,T=Math.exp(-y*y/2);m.push(T),E===0?b+=T:E<p&&(b+=2*T)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let x=this._sizeLods[s],A=3*x*(s>w-Gs?s-w+Gs:0),M=4*(this._cubeSize-x);bo(t,A,M,3*x,2*x),c.setRenderTarget(t),c.render(u,ka)}};function hM(i){let e=[],t=[],n=[],s=i,r=i-Gs+1+Im.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Gs?c=Im[o-i+Gs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),w=new Float32Array(p*g*f),x=new Float32Array(m*g*f);for(let M=0;M<f;M++){let E=M%3*2/3-1,y=M>2?0:-1,T=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];b.set(T,_*g*M),w.set(d,p*g*M);let P=[M,M,M,M,M,M];x.set(P,m*g*M)}let A=new Pt;A.setAttribute("position",new Jt(b,_)),A.setAttribute("uv",new Jt(w,p)),A.setAttribute("faceIndex",new Jt(x,m)),n.push(new Be(A,null)),s>Gs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Lm(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function uM(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function dM(i,e,t){let n=new Float32Array(_r),s=new C(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Nm(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hh(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Dm(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function hh(){return`

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
	`}var lh=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pn(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:zi});r.uniforms.tEquirect.value=t;let o=new Be(s,r),a=t.minFilter;return t.minFilter===yi&&(t.minFilter=Qt),new gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function fM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===bl||f===Sl)if(e.has(d)){let g=e.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new lh(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,g=f===bl||f===Sl,_=f===zs||f===mr;if(g||_){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Hs(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let b=d.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Hs(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===bl?d.mapping=zs:f===Sl&&(d.mapping=mr),d}function c(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function pM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&or("WebGLRenderer: "+n+" extension not supported."),s}}}function mM(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let w=0,x=b.length;w<x;w+=3){let A=b[w+0],M=b[w+1],E=b[w+2];d.push(A,M,M,E,E,A)}}else{let b=g.array;_=g.version;for(let w=0,x=b.length/3-1;w<x;w+=3){let A=w+0,M=w+1,E=w+2;d.push(A,M,M,E,E,A)}}let p=new(g.count>=65535?aa:oa)(d,1);p.version=_;let m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function gM(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function l(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function xM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _M(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let T=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let x=a.attributes.position.count*w,A=1;x>e.maxTextureSize&&(A=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*A*4*u),E=new sa(M,x,A,u);E.type=xn,E.needsUpdate=!0;let y=w*4;for(let P=0;P<u;P++){let I=p[P],L=m[P],z=b[P],X=x*A*4*P;for(let B=0;B<I.count;B++){let U=B*y;f===!0&&(s.fromBufferAttribute(I,B),M[X+U+0]=s.x,M[X+U+1]=s.y,M[X+U+2]=s.z,M[X+U+3]=0),g===!0&&(s.fromBufferAttribute(L,B),M[X+U+4]=s.x,M[X+U+5]=s.y,M[X+U+6]=s.z,M[X+U+7]=0),_===!0&&(s.fromBufferAttribute(z,B),M[X+U+8]=s.x,M[X+U+9]=s.y,M[X+U+10]=s.z,M[X+U+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new qe(x,A)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yM(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var vM={[Vu]:"LINEAR_TONE_MAPPING",[Gu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Ra]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Wu]:"CUSTOM_TONE_MAPPING"};function MM(i,e,t,n,s,r){let o=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new us(e,t):void 0}),a=new gn(e,t,{type:ki,depthBuffer:!1,stencilBuffer:!1}),c=new Pt;c.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $e([0,2,0,0,2,0],2));let l=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Be(c,l),u=new Bs(-1,1,1,-1,0,1),d=null,f=null,g=!1,_,p=null,m=[],b=!1;this.setSize=function(w,x){o.setSize(w,x),a.setSize(w,x);for(let A=0;A<m.length;A++){let M=m[A];M.setSize&&M.setSize(w,x)}},this.setEffects=function(w){m=w,b=m.length>0&&m[0].isRenderPass===!0;let x=o.width,A=o.height;for(let M=0;M<m.length;M++){let E=m[M];E.setSize&&E.setSize(x,A)}},this.begin=function(w,x){if(g||w.toneMapping===_i&&m.length===0)return!1;if(p=x,x!==null){let A=x.width,M=x.height;(o.width!==A||o.height!==M)&&this.setSize(A,M)}return b===!1&&w.setRenderTarget(o),_=w.toneMapping,w.toneMapping=_i,!0},this.hasRenderPass=function(){return b},this.end=function(w,x){w.toneMapping=_,g=!0;let A=o,M=a;for(let E=0;E<m.length;E++){let y=m[E];if(y.enabled!==!1&&(y.render(w,M,A,x),y.needsSwap!==!1)){let T=A;A=M,M=T}}if(d!==w.outputColorSpace||f!==w.toneMapping){d=w.outputColorSpace,f=w.toneMapping,l.defines={},Qe.getTransfer(d)===yt&&(l.defines.SRGB_TRANSFER="");let E=vM[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,w.setRenderTarget(p),w.render(h,u),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}var e0=new an,fd=new us(1,1),t0=new sa,n0=new il,i0=new fa,Um=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),zm=new Float32Array(4);function Ao(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Um[s];if(r===void 0&&(r=new Float32Array(s),Um[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uh(i,e){let t=Fm[e];t===void 0&&(t=new Int32Array(e),Fm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function wM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function AM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function TM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,n))return;zm.set(n),i.uniformMatrix2fv(this.addr,!1,zm),hn(t,n)}}function EM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,n))return;Bm.set(n),i.uniformMatrix3fv(this.addr,!1,Bm),hn(t,n)}}function CM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(ln(t,n))return;Om.set(n),i.uniformMatrix4fv(this.addr,!1,Om),hn(t,n)}}function RM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function IM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function PM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function LM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function NM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function FM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function OM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?oh:rh,r=fd):r=e0,t.setTexture2D(e||r,s)}function BM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||n0,s)}function zM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||i0,s)}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||t0,s)}function VM(i){switch(i){case 5126:return bM;case 35664:return SM;case 35665:return wM;case 35666:return AM;case 35674:return TM;case 35675:return EM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return IM;case 35668:case 35672:return PM;case 35669:case 35673:return LM;case 5125:return NM;case 36294:return DM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}function GM(i,e){i.uniform1fv(this.addr,e)}function HM(i,e){let t=Ao(e,this.size,2);i.uniform2fv(this.addr,t)}function WM(i,e){let t=Ao(e,this.size,3);i.uniform3fv(this.addr,t)}function XM(i,e){let t=Ao(e,this.size,4);i.uniform4fv(this.addr,t)}function qM(i,e){let t=Ao(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function YM(i,e){let t=Ao(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function KM(i,e){let t=Ao(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ZM(i,e){i.uniform1iv(this.addr,e)}function $M(i,e){i.uniform2iv(this.addr,e)}function JM(i,e){i.uniform3iv(this.addr,e)}function jM(i,e){i.uniform4iv(this.addr,e)}function QM(i,e){i.uniform1uiv(this.addr,e)}function eb(i,e){i.uniform2uiv(this.addr,e)}function tb(i,e){i.uniform3uiv(this.addr,e)}function nb(i,e){i.uniform4uiv(this.addr,e)}function ib(i,e,t){let n=this.cache,s=e.length,r=uh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=fd:o=e0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function sb(i,e,t){let n=this.cache,s=e.length,r=uh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||n0,r[o])}function rb(i,e,t){let n=this.cache,s=e.length,r=uh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||i0,r[o])}function ob(i,e,t){let n=this.cache,s=e.length,r=uh(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||t0,r[o])}function ab(i){switch(i){case 5126:return GM;case 35664:return HM;case 35665:return WM;case 35666:return XM;case 35674:return qM;case 35675:return YM;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return $M;case 35668:case 35672:return JM;case 35669:case 35673:return jM;case 5125:return QM;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ob}}var pd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}},md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ab(t.type)}},gd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ud=/(\w+)(\])?(\[|\.)?/g;function km(i,e){i.seq.push(e),i.map[e.id]=e}function cb(i,e,t){let n=i.name,s=n.length;for(ud.lastIndex=0;;){let r=ud.exec(n),o=ud.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){km(t,l===void 0?new pd(a,i,e):new md(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new gd(a),km(t,u)),t=u}}}var So=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);cb(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Vm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lb=37297,hb=0;function ub(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Gm=new Je;function db(i){Qe._getMatrix(Gm,Qe.workingColorSpace,i);let e=`mat3( ${Gm.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case na:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return De("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ub(i.getShaderSource(e),a)}else return r}function fb(i,e){let t=db(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var pb={[Vu]:"Linear",[Gu]:"Reinhard",[Hu]:"Cineon",[Ra]:"ACESFilmic",[Xu]:"AgX",[qu]:"Neutral",[Wu]:"Custom"};function mb(i,e){let t=pb[e];return t===void 0?(De("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ch=new C;function gb(){Qe.getLuminanceCoefficients(ch);let i=ch.x.toFixed(4),e=ch.y.toFixed(4),t=ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ga).join(`
`)}function _b(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ga(i){return i!==""}function Wm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vb=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(i){return i.replace(vb,bb)}var Mb=new Map;function bb(i,e){let t=Pe[e];if(t===void 0){let n=Mb.get(e);if(n!==void 0)t=Pe[n],De('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xd(t)}var Sb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(i){return i.replace(Sb,wb)}function wb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ym(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Ab={[Ea]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function Tb(i){return Ab[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eb={[zs]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};function Cb(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rb={[mr]:"ENVMAP_MODE_REFRACTION"};function Ib(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pb={[vl]:"ENVMAP_BLENDING_MULTIPLY",[um]:"ENVMAP_BLENDING_MIX",[dm]:"ENVMAP_BLENDING_ADD"};function Lb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Pb[i.combine]||"ENVMAP_BLENDING_NONE"}function Nb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Db(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=Tb(t),l=Cb(t),h=Ib(t),u=Lb(t),d=Nb(t),f=xb(t),g=_b(r),_=s.createProgram(),p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ga).join(`
`),m.length>0&&(m+=`
`)):(p=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Pe.tonemapping_pars_fragment:"",t.toneMapping!==_i?mb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,fb("linearToOutputTexel",t.outputColorSpace),gb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),o=xd(o),o=Wm(o,t),o=Xm(o,t),a=xd(a),a=Wm(a,t),a=Xm(a,t),o=qm(o),a=qm(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+p+o,x=b+m+a,A=Vm(s,s.VERTEX_SHADER,w),M=Vm(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(I){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(M)||"",B=L.trim(),U=z.trim(),k=X.trim(),Y=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,M);else{let ne=Hm(s,A,"vertex"),ce=Hm(s,M,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ne+`
`+ce)}else B!==""?De("WebGLProgram: Program Info Log:",B):(U===""||k==="")&&(te=!1);te&&(I.diagnostics={runnable:Y,programLog:B,vertexShader:{log:U,prefix:p},fragmentShader:{log:k,prefix:m}})}s.deleteShader(A),s.deleteShader(M),y=new So(s,_),T=yb(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,lb)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}var Ub=0,_d=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yd(e),t.set(e,n)),n}},yd=class{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}};function Fb(i){return i===Vi||i===Ua||i===Fa}function Ob(i,e,t,n,s,r){let o=new so,a=new _d,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,T,P,I,L,z){let X=I.fog,B=L.geometry,U=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=e.get(y.envMap||U,k),te=Y&&Y.mapping===Ia?Y.image.height:null,ne=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&De("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=ce!==void 0?ce.length:0,Ye=0;B.morphAttributes.position!==void 0&&(Ye=1),B.morphAttributes.normal!==void 0&&(Ye=2),B.morphAttributes.color!==void 0&&(Ye=3);let ut,je,J,le;if(ne){let Ae=Hi[ne];ut=Ae.vertexShader,je=Ae.fragmentShader}else{ut=y.vertexShader,je=y.fragmentShader;let Ae=a.getVertexShaderStage(y),Bt=a.getFragmentShaderStage(y);a.update(y,Ae,Bt),J=Ae.id,le=Bt.id}let ie=i.getRenderTarget(),Ge=i.state.buffers.depth.getReversed(),Ke=L.isInstancedMesh===!0,Oe=L.isBatchedMesh===!0,Rt=!!y.map,nt=!!y.matcap,Mt=!!Y,ht=!!y.aoMap,ct=!!y.lightMap,Yt=!!y.bumpMap&&y.wireframe===!1,Dt=!!y.normalMap,$t=!!y.displacementMap,tn=!!y.emissiveMap,it=!!y.metalnessMap,It=!!y.roughnessMap,F=y.anisotropy>0,yn=y.clearcoat>0,dt=y.dispersion>0,R=y.iridescence>0,v=y.sheen>0,G=y.transmission>0,V=F&&!!y.anisotropyMap,Z=yn&&!!y.clearcoatMap,ae=yn&&!!y.clearcoatNormalMap,de=yn&&!!y.clearcoatRoughnessMap,$=R&&!!y.iridescenceMap,j=R&&!!y.iridescenceThicknessMap,fe=v&&!!y.sheenColorMap,Te=v&&!!y.sheenRoughnessMap,me=!!y.specularMap,se=!!y.specularColorMap,Le=!!y.specularIntensityMap,Fe=G&&!!y.transmissionMap,We=G&&!!y.thicknessMap,N=!!y.gradientMap,he=!!y.alphaMap,K=y.alphaTest>0,re=!!y.alphaHash,oe=!!y.extensions,Q=_i;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Q=i.toneMapping);let Ee={shaderID:ne,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:je,defines:y.defines,customVertexShaderID:J,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&L._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&L.instanceColor!==null,instancingMorph:Ke&&L.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Rt,matcap:nt,envMap:Mt,envMapMode:Mt&&Y.mapping,envMapCubeUVHeight:te,aoMap:ht,lightMap:ct,bumpMap:Yt,normalMap:Dt,displacementMap:$t,emissiveMap:tn,normalMapObjectSpace:Dt&&y.normalMapType===gm,normalMapTangentSpace:Dt&&y.normalMapType===za,packedNormalMap:Dt&&y.normalMapType===za&&Fb(y.normalMap.format),metalnessMap:it,roughnessMap:It,anisotropy:F,anisotropyMap:V,clearcoat:yn,clearcoatMap:Z,clearcoatNormalMap:ae,clearcoatRoughnessMap:de,dispersion:dt,iridescence:R,iridescenceMap:$,iridescenceThicknessMap:j,sheen:v,sheenColorMap:fe,sheenRoughnessMap:Te,specularMap:me,specularColorMap:se,specularIntensityMap:Le,transmission:G,transmissionMap:Fe,thicknessMap:We,gradientMap:N,opaque:y.transparent===!1&&y.blending===ar&&y.alphaToCoverage===!1,alphaMap:he,alphaTest:K,alphaHash:re,combine:y.combine,mapUv:Rt&&g(y.map.channel),aoMapUv:ht&&g(y.aoMap.channel),lightMapUv:ct&&g(y.lightMap.channel),bumpMapUv:Yt&&g(y.bumpMap.channel),normalMapUv:Dt&&g(y.normalMap.channel),displacementMapUv:$t&&g(y.displacementMap.channel),emissiveMapUv:tn&&g(y.emissiveMap.channel),metalnessMapUv:it&&g(y.metalnessMap.channel),roughnessMapUv:It&&g(y.roughnessMap.channel),anisotropyMapUv:V&&g(y.anisotropyMap.channel),clearcoatMapUv:Z&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(y.sheenRoughnessMap.channel),specularMapUv:me&&g(y.specularMap.channel),specularColorMapUv:se&&g(y.specularColorMap.channel),specularIntensityMapUv:Le&&g(y.specularIntensityMap.channel),transmissionMapUv:Fe&&g(y.transmissionMap.channel),thicknessMapUv:We&&g(y.thicknessMap.channel),alphaMapUv:he&&g(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Dt||F),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Rt||he),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&Dt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ge,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ye,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Q,decodeVideoTexture:Rt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:tn&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(m(T,y),b(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let T=f[y.type],P;if(T){let I=Hi[T];P=Cm.clone(I.uniforms)}else P=y.uniforms;return P}function x(y,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Db(i,T,y,s),l.push(P),h.set(T,P)),P}function A(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:w,acquireProgram:x,releaseProgram:A,releaseShaderCache:M,programs:l,dispose:E}}function Bb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,_,p,m){let b=i[e];return b===void 0?(b={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},i[e]=b):(b.id=d.id,b.object=d,b.geometry=f,b.material=g,b.materialVariant=o(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=p,b.group=m),e++,b}function c(d,f,g,_,p,m){let b=a(d,f,g,_,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function l(d,f,g,_,p,m){let b=a(d,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function h(d,f,g){t.length>1&&t.sort(d||zb),n.length>1&&n.sort(f||Km),s.length>1&&s.sort(f||Km),g&&(t.reverse(),n.reverse(),s.reverse())}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function kb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zm,i.set(n,[o])):s>=r.length?(o=new Zm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Vb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Me};break;case"SpotLight":t={position:new C,direction:new C,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Gb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hb=0;function Wb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xb(i){let e=new Vb,t=Gb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let s=new C,r=new Ie,o=new Ie;function a(l){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,w=0,x=0,A=0,M=0,E=0;l.sort(Wb);for(let T=0,P=l.length;T<P;T++){let I=l[T],L=I.color,z=I.intensity,X=I.distance,B=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Vi?B=I.shadow.map.texture:B=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=L.r*z,u+=L.g*z,d+=L.b*z;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],z);E++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,Y=t.get(I);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=I.shadow.matrix,b++}n.directional[f]=U,f++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(L).multiplyScalar(z),U.distance=X,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[_]=U;let k=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,k.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[_]=k.matrix,I.castShadow){let Y=t.get(I);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=B,x++}_++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(L).multiplyScalar(z),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=U,p++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let k=I.shadow,Y=t.get(I);Y.shadowIntensity=k.intensity,Y.shadowBias=k.bias,Y.shadowNormalBias=k.normalBias,Y.shadowRadius=k.radius,Y.shadowMapSize=k.mapSize,Y.shadowCameraNear=k.camera.near,Y.shadowCameraFar=k.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=I.shadow.matrix,w++}n.point[g]=U,g++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(z),U.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=U,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let y=n.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==b||y.numPointShadows!==w||y.numSpotShadows!==x||y.numSpotMaps!==A||y.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=E,y.directionalLength=f,y.pointLength=g,y.spotLength=_,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=b,y.numPointShadows=w,y.numSpotShadows=x,y.numSpotMaps=A,y.numLightProbes=E,n.version=Hb++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,b=l.length;m<b;m++){let w=l[m];if(w.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),u++}else if(w.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(w.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(w.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function $m(i){let e=new Xb(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function qb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new $m(i),e.set(s,[a])):r>=o.length?(a=new $m(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Yb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kb=`uniform sampler2D shadow_pass;
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
}`,Zb=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],$b=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Jm=new Ie,Va=new C,dd=new C;function Jb(i,e,t){let n=new Us,s=new qe,r=new qe,o=new wt,a=new cl,c=new ll,l={},h=t.maxTextureSize,u={[mi]:Zt,[Zt]:mi,[Sn]:Sn},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Yb,fragmentShader:Kb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Be(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ea;let m=this.type;this.render=function(M,E,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===qp&&(De("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ea);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=m!==this.type;z&&E.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=M.length;X<B;X++){let U=M[X],k=U.shadow;if(k===void 0){De("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Y=k.getFrameExtents();s.multiply(Y),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,k.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=te,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===fo){if(U.isPointLight){De("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new gn(s.x,s.y,{format:Vi,type:ki,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new us(s.x,s.y,xn),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=Pi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=jt,k.map.depthTexture.magFilter=jt}else U.isPointLight?(k.map=new lh(s.x),k.map.depthTexture=new ol(s.x,Kn)):(k.map=new gn(s.x,s.y),k.map.depthTexture=new us(s.x,s.y,Kn)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=Pi,this.type===Ea?(k.map.depthTexture.compareFunction=te?oh:rh,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=jt,k.map.depthTexture.magFilter=jt);k.camera.updateProjectionMatrix()}let ne=k.map.isWebGLCubeRenderTarget?6:1;for(let ce=0;ce<ne;ce++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(k.map),i.clear());let ue=k.getViewport(ce);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),L.viewport(o)}if(U.isPointLight){let ue=k.camera,Ye=k.matrix,ut=U.distance||ue.far;ut!==ue.far&&(ue.far=ut,ue.updateProjectionMatrix()),Va.setFromMatrixPosition(U.matrixWorld),ue.position.copy(Va),dd.copy(ue.position),dd.add(Zb[ce]),ue.up.copy($b[ce]),ue.lookAt(dd),ue.updateMatrixWorld(),Ye.makeTranslation(-Va.x,-Va.y,-Va.z),Jm.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Jm,ue.coordinateSystem,ue.reversedDepth)}else k.updateMatrices(U);n=k.getFrustum(),x(E,y,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===fo&&b(k,y),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(T,P,I)};function b(M,E){let y=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gn(s.x,s.y,{format:Vi,type:ki})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(E,null,y,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(E,null,y,f,_,null)}function w(M,E,y,T){let P=null,I=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)P=I;else if(P=y.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=P.uuid,z=E.uuid,X=l[L];X===void 0&&(X={},l[L]=X);let B=X[z];B===void 0&&(B=P.clone(),X[z]=B,E.addEventListener("dispose",A)),P=B}if(P.visible=E.visible,P.wireframe=E.wireframe,T===fo?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:u[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=i.properties.get(P);L.light=y}return P}function x(M,E,y,T,P){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===fo)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let z=e.update(M),X=M.material;if(Array.isArray(X)){let B=z.groups;for(let U=0,k=B.length;U<k;U++){let Y=B[U],te=X[Y.materialIndex];if(te&&te.visible){let ne=w(M,te,T,P);M.onBeforeShadow(i,M,E,y,z,ne,Y),i.renderBufferDirect(y,null,z,ne,M,Y),M.onAfterShadow(i,M,E,y,z,ne,Y)}}}else if(X.visible){let B=w(M,X,T,P);M.onBeforeShadow(i,M,E,y,z,B,null),i.renderBufferDirect(y,null,z,B,M,null),M.onAfterShadow(i,M,E,y,z,B,null)}}let L=M.children;for(let z=0,X=L.length;z<X;z++)x(L[z],E,y,T,P)}function A(M){M.target.removeEventListener("dispose",A);for(let y in l){let T=l[y],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function jb(i,e){function t(){let N=!1,he=new wt,K=null,re=new wt(0,0,0,0);return{setMask:function(oe){K!==oe&&!N&&(i.colorMask(oe,oe,oe,oe),K=oe)},setLocked:function(oe){N=oe},setClear:function(oe,Q,Ee,Ae,Bt){Bt===!0&&(oe*=Ae,Q*=Ae,Ee*=Ae),he.set(oe,Q,Ee,Ae),re.equals(he)===!1&&(i.clearColor(oe,Q,Ee,Ae),re.copy(he))},reset:function(){N=!1,K=null,re.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,K=null,re=null,oe=null;return{setReversed:function(Q){if(he!==Q){let Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),he=Q;let Ae=oe;oe=null,this.setClear(Ae)}},getReversed:function(){return he},setTest:function(Q){Q?ie(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(Q){K!==Q&&!N&&(i.depthMask(Q),K=Q)},setFunc:function(Q){if(he&&(Q=Tm[Q]),re!==Q){switch(Q){case Yc:i.depthFunc(i.NEVER);break;case Kc:i.depthFunc(i.ALWAYS);break;case Zc:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case $c:i.depthFunc(i.EQUAL);break;case Jc:i.depthFunc(i.GEQUAL);break;case jc:i.depthFunc(i.GREATER);break;case Qc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=Q}},setLocked:function(Q){N=Q},setClear:function(Q){oe!==Q&&(oe=Q,he&&(Q=1-Q),i.clearDepth(Q))},reset:function(){N=!1,K=null,re=null,oe=null,he=!1}}}function s(){let N=!1,he=null,K=null,re=null,oe=null,Q=null,Ee=null,Ae=null,Bt=null;return{setTest:function(At){N||(At?ie(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(At){he!==At&&!N&&(i.stencilMask(At),he=At)},setFunc:function(At,Jn,jn){(K!==At||re!==Jn||oe!==jn)&&(i.stencilFunc(At,Jn,jn),K=At,re=Jn,oe=jn)},setOp:function(At,Jn,jn){(Q!==At||Ee!==Jn||Ae!==jn)&&(i.stencilOp(At,Jn,jn),Q=At,Ee=Jn,Ae=jn)},setLocked:function(At){N=At},setClear:function(At){Bt!==At&&(i.clearStencil(At),Bt=At)},reset:function(){N=!1,he=null,K=null,re=null,oe=null,Q=null,Ee=null,Ae=null,Bt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,A=null,M=null,E=null,y=new Me(0,0,0),T=0,P=!1,I=null,L=null,z=null,X=null,B=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Y=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),k=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),k=Y>=2);let ne=null,ce={},ue=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),ut=new wt().fromArray(ue),je=new wt().fromArray(Ye);function J(N,he,K,re){let oe=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<K;Ee++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(he+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return Q}let le={};le[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(cr),Yt(!1),Dt(Bu),ie(i.CULL_FACE),ht(zi);function ie(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ge(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ke(N,he){return d[N]!==he?(i.bindFramebuffer(N,he),d[N]=he,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=he),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(N,he){let K=g,re=!1;if(N){K=f.get(he),K===void 0&&(K=[],f.set(he,K));let oe=N.textures;if(K.length!==oe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ee=oe.length;Q<Ee;Q++)K[Q]=i.COLOR_ATTACHMENT0+Q;K.length=oe.length,re=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,re=!0);re&&i.drawBuffers(K)}function Rt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let nt={[Ds]:i.FUNC_ADD,[Kp]:i.FUNC_SUBTRACT,[Zp]:i.FUNC_REVERSE_SUBTRACT};nt[$p]=i.MIN,nt[Jp]=i.MAX;let Mt={[jp]:i.ZERO,[Qp]:i.ONE,[em]:i.SRC_COLOR,[Xc]:i.SRC_ALPHA,[om]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[nm]:i.DST_ALPHA,[tm]:i.ONE_MINUS_SRC_COLOR,[qc]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[cm]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[hm]:i.ONE_MINUS_CONSTANT_ALPHA};function ht(N,he,K,re,oe,Q,Ee,Ae,Bt,At){if(N===zi){p===!0&&(Ge(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),N!==Yp){if(N!==m||At!==P){if((b!==Ds||A!==Ds)&&(i.blendEquation(i.FUNC_ADD),b=Ds,A=Ds),At)switch(N){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case zu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ku:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",N);break}else switch(N){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ku:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",N);break}w=null,x=null,M=null,E=null,y.set(0,0,0),T=0,m=N,P=At}return}oe=oe||he,Q=Q||K,Ee=Ee||re,(he!==b||oe!==A)&&(i.blendEquationSeparate(nt[he],nt[oe]),b=he,A=oe),(K!==w||re!==x||Q!==M||Ee!==E)&&(i.blendFuncSeparate(Mt[K],Mt[re],Mt[Q],Mt[Ee]),w=K,x=re,M=Q,E=Ee),(Ae.equals(y)===!1||Bt!==T)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Bt),y.copy(Ae),T=Bt),m=N,P=!1}function ct(N,he){N.side===Sn?Ge(i.CULL_FACE):ie(i.CULL_FACE);let K=N.side===Zt;he&&(K=!K),Yt(K),N.blending===ar&&N.transparent===!1?ht(zi):ht(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let re=N.stencilWrite;a.setTest(re),re&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),tn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(N){I!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),I=N)}function Dt(N){N!==Wp?(ie(i.CULL_FACE),N!==L&&(N===Bu?i.cullFace(i.BACK):N===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),L=N}function $t(N){N!==z&&(k&&i.lineWidth(N),z=N)}function tn(N,he,K){N?(ie(i.POLYGON_OFFSET_FILL),(X!==he||B!==K)&&(X=he,B=K,o.getReversed()&&(he=-he),i.polygonOffset(he,K))):Ge(i.POLYGON_OFFSET_FILL)}function it(N){N?ie(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function It(N){N===void 0&&(N=i.TEXTURE0+U-1),ne!==N&&(i.activeTexture(N),ne=N)}function F(N,he,K){K===void 0&&(ne===null?K=i.TEXTURE0+U-1:K=ne);let re=ce[K];re===void 0&&(re={type:void 0,texture:void 0},ce[K]=re),(re.type!==N||re.texture!==he)&&(ne!==K&&(i.activeTexture(K),ne=K),i.bindTexture(N,he||le[N]),re.type=N,re.texture=he)}function yn(){let N=ce[ne];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function v(){try{i.texSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function G(){try{i.texSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function ae(){try{i.texStorage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function de(){try{i.texStorage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function $(){try{i.texImage2D(...arguments)}catch(N){Ve("WebGLState:",N)}}function j(){try{i.texImage3D(...arguments)}catch(N){Ve("WebGLState:",N)}}function fe(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function Te(N,he){u[N]!==he&&(i.pixelStorei(N,he),u[N]=he)}function me(N){ut.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ut.copy(N))}function se(N){je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),je.copy(N))}function Le(N,he){let K=l.get(he);K===void 0&&(K=new WeakMap,l.set(he,K));let re=K.get(N);re===void 0&&(re=i.getUniformBlockIndex(he,N.name),K.set(N,re))}function Fe(N,he){let re=l.get(he).get(N);c.get(he)!==re&&(i.uniformBlockBinding(he,re,N.__bindingPointIndex),c.set(he,re))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ne=null,ce={},d={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,w=null,x=null,A=null,M=null,E=null,y=new Me(0,0,0),T=0,P=!1,I=null,L=null,z=null,X=null,B=null,ut.set(0,0,i.canvas.width,i.canvas.height),je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Ge,bindFramebuffer:Ke,drawBuffers:Oe,useProgram:Rt,setBlending:ht,setMaterial:ct,setFlipSided:Yt,setCullFace:Dt,setLineWidth:$t,setPolygonOffset:tn,setScissorTest:it,activeTexture:It,bindTexture:F,unbindTexture:yn,compressedTexImage2D:dt,compressedTexImage3D:R,texImage2D:$,texImage3D:j,pixelStorei:Te,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:ae,texStorage3D:de,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:me,viewport:se,reset:We}}function Qb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):to("canvas")}function p(R,v,G){let V=1,Z=dt(R);if((Z.width>G||Z.height>G)&&(V=G/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ae=Math.floor(V*Z.width),de=Math.floor(V*Z.height);d===void 0&&(d=_(ae,de));let $=v?_(ae,de):d;return $.width=ae,$.height=de,$.getContext("2d").drawImage(R,0,0,ae,de),De("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+de+")."),$}else return"data"in R&&De("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function m(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,v,G,V,Z,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];De("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let de;V&&(de=e.get("EXT_texture_norm16"),de||De("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=v;if(v===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&de&&($=de.R16_EXT),G===i.SHORT&&de&&($=de.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),v===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&de&&($=de.RG16_EXT),G===i.SHORT&&de&&($=de.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&de&&($=de.RGB16_EXT),G===i.SHORT&&de&&($=de.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),v===i.RGBA){let j=ae?na:Qe.getTransfer(Z);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=j===yt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&de&&($=de.RGBA16_EXT),G===i.SHORT&&de&&($=de.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(R,v){let G;return R?v===null||v===Kn||v===xo?G=i.DEPTH24_STENCIL8:v===xn?G=i.DEPTH32F_STENCIL8:v===mo&&(G=i.DEPTH24_STENCIL8,De("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Kn||v===xo?G=i.DEPTH_COMPONENT24:v===xn?G=i.DEPTH_COMPONENT32F:v===mo&&(G=i.DEPTH_COMPONENT16),G}function M(R,v){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function E(R){let v=R.target;v.removeEventListener("dispose",E),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&u.delete(v)}function y(R){let v=R.target;v.removeEventListener("dispose",y),I(v)}function T(R){let v=n.get(R);if(v.__webglInit===void 0)return;let G=R.source,V=f.get(G);if(V){let Z=V[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(R),Object.keys(V).length===0&&f.delete(G)}n.remove(R)}function P(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let G=R.source,V=f.get(G);delete V[v.__cacheKey],o.memory.textures--}function I(R){let v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(v.__webglFramebuffer[V]))for(let Z=0;Z<v.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[V]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[V])}else{if(Array.isArray(v.__webglFramebuffer))for(let V=0;V<v.__webglFramebuffer.length;V++)i.deleteFramebuffer(v.__webglFramebuffer[V]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let V=0;V<v.__webglColorRenderbuffer.length;V++)v.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[V]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=R.textures;for(let V=0,Z=G.length;V<Z;V++){let ae=n.get(G[V]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(G[V])}n.remove(R)}let L=0;function z(){L=0}function X(){return L}function B(R){L=R}function U(){let R=L;return R>=s.maxTextures&&De("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),L+=1,R}function k(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function Y(R,v){let G=n.get(R);if(R.isVideoTexture&&F(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let V=R.image;if(V===null)De("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)De("WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(G,R,v);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function te(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ge(G,R,v);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function ne(R,v){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Ge(G,R,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function ce(R,v){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ke(G,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let ue={[Yn]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Qr]:i.MIRRORED_REPEAT},Ye={[jt]:i.NEAREST,[wl]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[po]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ut={[xm]:i.NEVER,[bm]:i.ALWAYS,[_m]:i.LESS,[rh]:i.LEQUAL,[ym]:i.EQUAL,[oh]:i.GEQUAL,[vm]:i.GREATER,[Mm]:i.NOTEQUAL};function je(R,v){if(v.type===xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===po||v.magFilter===gr||v.magFilter===yi||v.minFilter===Qt||v.minFilter===po||v.minFilter===gr||v.minFilter===yi)&&De("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ue[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ye[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ye[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ut[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==gr&&v.minFilter!==yi||v.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function J(R,v){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",E));let V=v.source,Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));let ae=k(v);if(ae!==R.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Z[ae].usedTimes++;let de=Z[R.__cacheKey];de!==void 0&&(Z[R.__cacheKey].usedTimes--,de.usedTimes===0&&P(v)),R.__cacheKey=ae,R.__webglTexture=Z[ae].texture}return G}function le(R,v,G){return Math.floor(Math.floor(R/G)/v)}function ie(R,v,G,V){let ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,V,v.data);else{ae.sort((Te,me)=>Te.start-me.start);let de=0;for(let Te=1;Te<ae.length;Te++){let me=ae[de],se=ae[Te],Le=me.start+me.count,Fe=le(se.start,v.width,4),We=le(me.start,v.width,4);se.start<=Le+1&&Fe===We&&le(se.start+se.count-1,v.width,4)===Fe?me.count=Math.max(me.count,se.start+se.count-me.start):(++de,ae[de]=se)}ae.length=de+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Te=0,me=ae.length;Te<me;Te++){let se=ae[Te],Le=Math.floor(se.start/4),Fe=Math.ceil(se.count/4),We=Le%v.width,N=Math.floor(Le/v.width),he=Fe,K=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,We,N,he,K,G,V,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function Ge(R,v,G){let V=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(V=i.TEXTURE_3D);let Z=J(R,v),ae=v.source;t.bindTexture(V,R.__webglTexture,i.TEXTURE0+G);let de=n.get(ae);if(ae.version!==de.__version||Z===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let K=Qe.getPrimaries(Qe.workingColorSpace),re=v.colorSpace===ri?null:Qe.getPrimaries(v.colorSpace),oe=v.colorSpace===ri||K===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let j=p(v.image,!1,s.maxTextureSize);j=yn(v,j);let fe=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),me=x(v.internalFormat,fe,Te,v.normalized,v.colorSpace,v.isVideoTexture);je(V,v);let se,Le=v.mipmaps,Fe=v.isVideoTexture!==!0,We=de.__version===void 0||Z===!0,N=ae.dataReady,he=M(v,j);if(v.isDepthTexture)me=A(v.format===ks,v.type),We&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,me,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,me,j.width,j.height,0,fe,Te,null));else if(v.isDataTexture)if(Le.length>0){Fe&&We&&t.texStorage2D(i.TEXTURE_2D,he,me,Le[0].width,Le[0].height);for(let K=0,re=Le.length;K<re;K++)se=Le[K],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,fe,Te,se.data):t.texImage2D(i.TEXTURE_2D,K,me,se.width,se.height,0,fe,Te,se.data);v.generateMipmaps=!1}else Fe?(We&&t.texStorage2D(i.TEXTURE_2D,he,me,j.width,j.height),N&&ie(v,j,fe,Te)):t.texImage2D(i.TEXTURE_2D,0,me,j.width,j.height,0,fe,Te,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,me,Le[0].width,Le[0].height,j.depth);for(let K=0,re=Le.length;K<re;K++)if(se=Le[K],v.format!==Dn)if(fe!==null)if(Fe){if(N)if(v.layerUpdates.size>0){let oe=od(se.width,se.height,v.format,v.type);for(let Q of v.layerUpdates){let Ee=se.data.subarray(Q*oe/se.data.BYTES_PER_ELEMENT,(Q+1)*oe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Q,se.width,se.height,1,fe,Ee)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,fe,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,me,se.width,se.height,j.depth,0,se.data,0,0);else De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,se.width,se.height,j.depth,fe,Te,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,me,se.width,se.height,j.depth,0,fe,Te,se.data)}else{Fe&&We&&t.texStorage2D(i.TEXTURE_2D,he,me,Le[0].width,Le[0].height);for(let K=0,re=Le.length;K<re;K++)se=Le[K],v.format!==Dn?fe!==null?Fe?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,fe,se.data):t.compressedTexImage2D(i.TEXTURE_2D,K,me,se.width,se.height,0,se.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,se.width,se.height,fe,Te,se.data):t.texImage2D(i.TEXTURE_2D,K,me,se.width,se.height,0,fe,Te,se.data)}else if(v.isDataArrayTexture)if(Fe){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,me,j.width,j.height,j.depth),N)if(v.layerUpdates.size>0){let K=od(j.width,j.height,v.format,v.type);for(let re of v.layerUpdates){let oe=j.data.subarray(re*K/j.data.BYTES_PER_ELEMENT,(re+1)*K/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,j.width,j.height,1,fe,Te,oe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,Te,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,j.width,j.height,j.depth,0,fe,Te,j.data);else if(v.isData3DTexture)Fe?(We&&t.texStorage3D(i.TEXTURE_3D,he,me,j.width,j.height,j.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,Te,j.data)):t.texImage3D(i.TEXTURE_3D,0,me,j.width,j.height,j.depth,0,fe,Te,j.data);else if(v.isFramebufferTexture){if(We)if(Fe)t.texStorage2D(i.TEXTURE_2D,he,me,j.width,j.height);else{let K=j.width,re=j.height;for(let oe=0;oe<he;oe++)t.texImage2D(i.TEXTURE_2D,oe,me,K,re,0,fe,Te,null),K>>=1,re>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),u.add(v),K.onpaint=re=>{let oe=re.changedElements;for(let Q of u)oe.includes(Q.image)&&(Q.needsUpdate=!0)},K.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let oe=i.RGBA,Q=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,oe,Q,Ee,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&We){let K=dt(Le[0]);t.texStorage2D(i.TEXTURE_2D,he,me,K.width,K.height)}for(let K=0,re=Le.length;K<re;K++)se=Le[K],Fe?N&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,fe,Te,se):t.texImage2D(i.TEXTURE_2D,K,me,fe,Te,se);v.generateMipmaps=!1}else if(Fe){if(We){let K=dt(j);t.texStorage2D(i.TEXTURE_2D,he,me,K.width,K.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Te,j)}else t.texImage2D(i.TEXTURE_2D,0,me,fe,Te,j);m(v)&&b(V),de.__version=ae.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ke(R,v,G){if(v.image.length!==6)return;let V=J(R,v),Z=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let ae=n.get(Z);if(Z.version!==ae.__version||V===!0){t.activeTexture(i.TEXTURE0+G);let de=Qe.getPrimaries(Qe.workingColorSpace),$=v.colorSpace===ri?null:Qe.getPrimaries(v.colorSpace),j=v.colorSpace===ri||de===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Te=v.image[0]&&v.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!fe&&!Te?me[Q]=p(v.image[Q],!0,s.maxCubemapSize):me[Q]=Te?v.image[Q].image:v.image[Q],me[Q]=yn(v,me[Q]);let se=me[0],Le=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),We=x(v.internalFormat,Le,Fe,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,he=ae.__version===void 0||V===!0,K=Z.dataReady,re=M(v,se);je(i.TEXTURE_CUBE_MAP,v);let oe;if(fe){N&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,We,se.width,se.height);for(let Q=0;Q<6;Q++){oe=me[Q].mipmaps;for(let Ee=0;Ee<oe.length;Ee++){let Ae=oe[Ee];v.format!==Dn?Le!==null?N?K&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Ae.width,Ae.height,Le,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,We,Ae.width,Ae.height,0,Ae.data):De("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,Ae.width,Ae.height,Le,Fe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,We,Ae.width,Ae.height,0,Le,Fe,Ae.data)}}}else{if(oe=v.mipmaps,N&&he){oe.length>0&&re++;let Q=dt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,We,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(Te){N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Le,Fe,me[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,me[Q].width,me[Q].height,0,Le,Fe,me[Q].data);for(let Ee=0;Ee<oe.length;Ee++){let Bt=oe[Ee].image[Q].image;N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Bt.width,Bt.height,Le,Fe,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,We,Bt.width,Bt.height,0,Le,Fe,Bt.data)}}else{N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,Fe,me[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,We,Le,Fe,me[Q]);for(let Ee=0;Ee<oe.length;Ee++){let Ae=oe[Ee];N?K&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Le,Fe,Ae.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,We,Le,Fe,Ae.image[Q])}}}m(v)&&b(i.TEXTURE_CUBE_MAP),ae.__version=Z.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Oe(R,v,G,V,Z,ae){let de=r.convert(G.format,G.colorSpace),$=r.convert(G.type),j=x(G.internalFormat,de,$,G.normalized,G.colorSpace),fe=n.get(v),Te=n.get(G);if(Te.__renderTarget=v,!fe.__hasExternalTextures){let me=Math.max(1,v.width>>ae),se=Math.max(1,v.height>>ae);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,j,me,se,v.depth,0,de,$,null):t.texImage2D(Z,ae,j,me,se,0,de,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,Te.__webglTexture,0,it(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,Te.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(R,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let V=v.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ae=A(v.stencilBuffer,Z),de=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;It(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),ae,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,R)}else{let V=v.textures;for(let Z=0;Z<V.length;Z++){let ae=V[Z],de=r.convert(ae.format,ae.colorSpace),$=r.convert(ae.type),j=x(ae.internalFormat,de,$,ae.normalized,ae.colorSpace);It(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),j,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,v,G){let V=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),je(i.TEXTURE_CUBE_MAP,v.depthTexture);let fe=r.convert(v.depthTexture.format),Te=r.convert(v.depthTexture.type),me;v.depthTexture.format===Pi?me=i.DEPTH_COMPONENT24:v.depthTexture.format===ks&&(me=i.DEPTH24_STENCIL8);for(let se=0;se<6;se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,v.width,v.height,0,fe,Te,null)}}else Y(v.depthTexture,0);let ae=Z.__webglTexture,de=it(v),$=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,j=v.depthTexture.format===ks?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pi)It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ae,0);else if(v.depthTexture.format===ks)It(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ae,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(R){let v=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let V=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),V){let Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=V}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let V=0;V<6;V++)nt(v.__webglFramebuffer[V],R,V);else{let V=R.texture.mipmaps;V&&V.length>0?nt(v.__webglFramebuffer[0],R,0):nt(v.__webglFramebuffer,R,0)}else if(G){v.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[V]),v.__webglDepthbuffer[V]===void 0)v.__webglDepthbuffer[V]=i.createRenderbuffer(),Rt(v.__webglDepthbuffer[V],R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}else{let V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Rt(v.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(R,v,G){let V=n.get(R);v!==void 0&&Oe(V.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Mt(R)}function ct(R){let v=R.texture,G=n.get(R),V=n.get(v);R.addEventListener("dispose",y);let Z=R.textures,ae=R.isWebGLCubeRenderTarget===!0,de=Z.length>1;if(de||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=v.version,o.memory.textures++),ae){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let j=0;j<v.mipmaps.length;j++)G.__webglFramebuffer[$][j]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<v.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(de)for(let $=0,j=Z.length;$<j;$++){let fe=n.get(Z[$]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&It(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let j=Z[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);let fe=r.convert(j.format,j.colorSpace),Te=r.convert(j.type),me=x(j.internalFormat,fe,Te,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),se=it(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,me,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Rt(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),je(i.TEXTURE_CUBE_MAP,v);for(let $=0;$<6;$++)if(v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Oe(G.__webglFramebuffer[$][j],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else Oe(G.__webglFramebuffer[$],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(v)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let $=0,j=Z.length;$<j;$++){let fe=Z[$],Te=n.get(fe),me=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Te.__webglTexture),je(me,fe),Oe(G.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+$,me,0),m(fe)&&b(me)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,V.__webglTexture),je($,v),v.mipmaps&&v.mipmaps.length>0)for(let j=0;j<v.mipmaps.length;j++)Oe(G.__webglFramebuffer[j],R,v,i.COLOR_ATTACHMENT0,$,j);else Oe(G.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,$,0);m(v)&&b($),t.unbindTexture()}R.depthBuffer&&Mt(R)}function Yt(R){let v=R.textures;for(let G=0,V=v.length;G<V;G++){let Z=v[G];if(m(Z)){let ae=w(R),de=n.get(Z).__webglTexture;t.bindTexture(ae,de),b(ae),t.unbindTexture()}}}let Dt=[],$t=[];function tn(R){if(R.samples>0){if(It(R)===!1){let v=R.textures,G=R.width,V=R.height,Z=i.COLOR_BUFFER_BIT,ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=n.get(R),$=v.length>1;if($)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let j=R.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let Te=n.get(v[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,G,V,0,0,G,V,Z,i.NEAREST),c===!0&&(Dt.length=0,$t.length=0,Dt.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push(ae),$t.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$t)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,de.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,de.__webglColorRenderbuffer[fe]);let Te=n.get(v[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,de.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(R){return Math.min(s.maxSamples,R.samples)}function It(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function yn(R,v){let G=R.colorSpace,V=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Pn&&G!==ri&&(Qe.getTransfer(G)===yt?(V!==Dn||Z!==Vn)&&De("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",G)),v}function dt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=z,this.getTextureUnits=X,this.setTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=ce,this.rebindTextures=ht,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bd(i,e){function t(n,s=ri){let r,o=Qe.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ju)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ku)return i.BYTE;if(n===Zu)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===ju)return i.ALPHA;if(n===Qu)return i.RGB;if(n===Dn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===Vs)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Na||n===Da)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Cl||n===Rl||n===Il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Ll||n===Nl||n===Dl||n===Ul||n===Ua||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pl||n===Ll)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Nl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Dl)return r.COMPRESSED_R11_EAC;if(n===Ul)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ua)return r.COMPRESSED_RG11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===Bl||n===zl||n===kl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zl)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===jl||n===Ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Jl)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eh||n===th||n===Fa||n===nh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var eS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tS=`
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

}`,vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:eS,fragmentShader:tS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new vd,m={},b=t.getContextAttributes(),w=null,x=null,A=[],M=[],E=new qe,y=null,T=new Gt;T.viewport=new wt;let P=new Gt;P.viewport=new wt;let I=[T,P],L=new xl,z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let le=A[J];return le===void 0&&(le=new ro,A[J]=le),le.getTargetRaySpace()},this.getControllerGrip=function(J){let le=A[J];return le===void 0&&(le=new ro,A[J]=le),le.getGripSpace()},this.getHand=function(J){let le=A[J];return le===void 0&&(le=new ro,A[J]=le),le.getHandSpace()};function B(J){let le=M.indexOf(J.inputSource);if(le===-1)return;let ie=A[le];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||o),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let J=0;J<A.length;J++){let le=M[J];le!==null&&(M[J]=null,A[J].disconnect(le))}z=null,X=null,p.reset();for(let J in m)delete m[J];e.setRenderTarget(w),f=null,d=null,u=null,s=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&De("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&De("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ge=null,Ke=null;b.depth&&(Ke=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=b.stencil?ks:Pi,Ge=b.stencil?xo:Kn);let Oe={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Oe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new gn(d.textureWidth,d.textureHeight,{format:Dn,type:Vn,depthTexture:new us(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ie={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new gn(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(J){for(let le=0;le<J.removed.length;le++){let ie=J.removed[le],Ge=M.indexOf(ie);Ge>=0&&(M[Ge]=null,A[Ge].disconnect(ie))}for(let le=0;le<J.added.length;le++){let ie=J.added[le],Ge=M.indexOf(ie);if(Ge===-1){for(let Oe=0;Oe<A.length;Oe++)if(Oe>=M.length){M.push(ie),Ge=Oe;break}else if(M[Oe]===null){M[Oe]=ie,Ge=Oe;break}if(Ge===-1)break}let Ke=A[Ge];Ke&&Ke.connect(ie)}}let Y=new C,te=new C;function ne(J,le,ie){Y.setFromMatrixPosition(le.matrixWorld),te.setFromMatrixPosition(ie.matrixWorld);let Ge=Y.distanceTo(te),Ke=le.projectionMatrix.elements,Oe=ie.projectionMatrix.elements,Rt=Ke[14]/(Ke[10]-1),nt=Ke[14]/(Ke[10]+1),Mt=(Ke[9]+1)/Ke[5],ht=(Ke[9]-1)/Ke[5],ct=(Ke[8]-1)/Ke[0],Yt=(Oe[8]+1)/Oe[0],Dt=Rt*ct,$t=Rt*Yt,tn=Ge/(-ct+Yt),it=tn*-ct;if(le.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(it),J.translateZ(tn),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ke[10]===-1)J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let It=Rt+tn,F=nt+tn,yn=Dt-it,dt=$t+(Ge-it),R=Mt*nt/F*It,v=ht*nt/F*It;J.projectionMatrix.makePerspective(yn,dt,R,v,It,F),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ce(J,le){le===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(le.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let le=J.near,ie=J.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),L.near=P.near=T.near=le,L.far=P.far=T.far=ie,(z!==L.near||X!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,X=L.far),L.layers.mask=J.layers.mask|6,T.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let Ge=J.parent,Ke=L.cameras;ce(L,Ge);for(let Oe=0;Oe<Ke.length;Oe++)ce(Ke[Oe],Ge);Ke.length===2?ne(L,T,P):L.projectionMatrix.copy(T.projectionMatrix),ue(J,L,Ge)};function ue(J,le,ie){ie===null?J.matrix.copy(le.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(le.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(le.projectionMatrix),J.projectionMatrixInverse.copy(le.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ur*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Ye=null;function ut(J,le){if(h=le.getViewerPose(l||o),g=le,h!==null){let ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Ge=!1;ie.length!==L.cameras.length&&(L.cameras.length=0,Ge=!0);for(let nt=0;nt<ie.length;nt++){let Mt=ie[nt],ht=null;if(f!==null)ht=f.getViewport(Mt);else{let Yt=u.getViewSubImage(d,Mt);ht=Yt.viewport,nt===0&&(e.setRenderTargetTextures(x,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(x))}let ct=I[nt];ct===void 0&&(ct=new Gt,ct.layers.enable(nt),ct.viewport=new wt,I[nt]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(ht.x,ht.y,ht.width,ht.height),nt===0&&(L.matrix.copy(ct.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ge===!0&&L.cameras.push(ct)}let Ke=s.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let nt=u.getDepthInformation(ie[0]);nt&&nt.isValid&&nt.texture&&p.init(nt,s.renderState)}if(Ke&&Ke.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<ie.length;nt++){let Mt=ie[nt].camera;if(Mt){let ht=m[Mt];ht||(ht=new pa,m[Mt]=ht);let ct=u.getCameraImage(Mt);ht.sourceTexture=ct}}}}for(let ie=0;ie<A.length;ie++){let Ge=M[ie],Ke=A[ie];Ge!==null&&Ke!==void 0&&Ke.update(Ge,le,l||o)}Ye&&Ye(J,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let je=new jm;je.setAnimationLoop(ut),this.setAnimationLoop=function(J){Ye=J},this.dispose=function(){}}},nS=new Ie,s0=new Je;s0.set(-1,0,0,0,1,0,0,0,1);function iS(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,id(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,b,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),w=b.envMap,x=b.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(nS.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(s0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,b,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,A){let M=A.program;n.uniformBlockBinding(x,M)}function l(x,A){let M=s[x.id];M===void 0&&(p(x),M=h(x),s[x.id]=M,x.addEventListener("dispose",b));let E=A.program;n.updateUBOMapping(x,E);let y=e.render.frame;r[x.id]!==y&&(d(x),r[x.id]=y)}function h(x){let A=u();x.__bindingPointIndex=A;let M=i.createBuffer(),E=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,E,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,M),M}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let A=s[x.id],M=x.uniforms,E=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let y=0,T=M.length;y<T;y++){let P=M[y];if(Array.isArray(P))for(let I=0,L=P.length;I<L;I++)f(P[I],y,I,E);else f(P,y,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,A,M,E){if(_(x,A,M,E)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let L=T[I],z=m(L);g(L,x.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,A,M){typeof x=="number"||typeof x=="boolean"?A[0]=x:x.isMatrix3?(A[0]=x.elements[0],A[1]=x.elements[1],A[2]=x.elements[2],A[3]=0,A[4]=x.elements[3],A[5]=x.elements[4],A[6]=x.elements[5],A[7]=0,A[8]=x.elements[6],A[9]=x.elements[7],A[10]=x.elements[8],A[11]=0):ArrayBuffer.isView(x)?A.set(new x.constructor(x.buffer,x.byteOffset,A.length)):x.toArray(A,M)}function _(x,A,M,E){let y=x.value,T=A+"_"+M;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{let P=E[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function p(x){let A=x.uniforms,M=0,E=16;for(let T=0,P=A.length;T<P;T++){let I=Array.isArray(A[T])?A[T]:[A[T]];for(let L=0,z=I.length;L<z;L++){let X=I[L],B=Array.isArray(X.value)?X.value:[X.value];for(let U=0,k=B.length;U<k;U++){let Y=B[U],te=m(Y),ne=M%E,ce=ne%te.boundary,ue=ne+ce;M+=ce,ue!==0&&E-ue<te.storage&&(M+=E-ue),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=te.storage}}}let y=M%E;return y>0&&(M+=E-y),x.__size=M,x.__cache={},this}function m(x){let A={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(A.boundary=4,A.storage=4):x.isVector2?(A.boundary=8,A.storage=8):x.isVector3||x.isColor?(A.boundary=16,A.storage=12):x.isVector4?(A.boundary=16,A.storage=16):x.isMatrix3?(A.boundary=48,A.storage=48):x.isMatrix4?(A.boundary=64,A.storage=64):x.isTexture?De("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(A.boundary=16,A.storage=x.byteLength):De("WebGLRenderer: Unsupported uniform value type.",x),A}function b(x){let A=x.target;A.removeEventListener("dispose",b);let M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function w(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var rS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function oS(){return Gi===null&&(Gi=new Di(rS,16,16,Vi,ki),Gi.name="DFG_LUT",Gi.minFilter=Qt,Gi.magFilter=Qt,Gi.wrapS=ei,Gi.wrapT=ei,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var wo=class{constructor(e={}){let{canvas:t=Sm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=f,p=new Set([vo,yo,_o]),m=new Set([Vn,Kn,mo,xo,Al,Tl]),b=new Uint32Array(4),w=new Int32Array(4),x=new C,A=null,M=null,E=[],y=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,L=null,z=null,X=null,B=null;this._outputColorSpace=Nt;let U=0,k=0,Y=null,te=-1,ne=null,ce=new wt,ue=new wt,Ye=null,ut=new Me(0),je=0,J=t.width,le=t.height,ie=1,Ge=null,Ke=null,Oe=new wt(0,0,J,le),Rt=new wt(0,0,J,le),nt=!1,Mt=new Us,ht=!1,ct=!1,Yt=new Ie,Dt=new C,$t=new wt,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function It(){return Y===null?ie:1}let F=n;function yn(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"185"}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",Jn,!1),F===null){let O="webgl2";if(F=yn(O,S),F===null)throw yn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Ve("WebGLRenderer: "+S.message),S}let dt,R,v,G,V,Z,ae,de,$,j,fe,Te,me,se,Le,Fe,We,N,he,K,re,oe,Q;function Ee(){dt=new pM(F),dt.init(),re=new bd(F,dt),R=new oM(F,dt,e,re),v=new jb(F,dt),R.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),z=F.createFramebuffer(),X=F.createFramebuffer(),B=F.createFramebuffer(),G=new xM(F),V=new Bb,Z=new Qb(F,dt,v,V,R,re,G),ae=new fM(P),de=new M_(F),oe=new sM(F,de),$=new mM(F,de,G,oe),j=new yM(F,$,de,oe,G),N=new _M(F,R,Z),Le=new aM(V),fe=new Ob(P,ae,dt,R,oe,Le),Te=new iS(P,V),me=new kb,se=new qb(dt),We=new iM(P,ae,v,j,g,c),Fe=new Jb(P,j,R),Q=new sS(F,G,R,v),he=new rM(F,dt,G),K=new gM(F,dt,G),G.programs=fe.programs,P.capabilities=R,P.extensions=dt,P.properties=V,P.renderLists=me,P.shadowMap=Fe,P.state=v,P.info=G}Ee(),_!==Vn&&(T=new MM(_,t.width,t.height,a,s,r));let Ae=new Md(P,F);this.xr=Ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=dt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=dt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(J,le,!1))},this.getSize=function(S){return S.set(J,le)},this.setSize=function(S,O,q=!0){if(Ae.isPresenting){De("WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,le=O,t.width=Math.floor(S*ie),t.height=Math.floor(O*ie),q===!0&&(t.style.width=S+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(J*ie,le*ie).floor()},this.setDrawingBufferSize=function(S,O,q){J=S,le=O,ie=q,t.width=Math.floor(S*q),t.height=Math.floor(O*q),this.setViewport(0,0,S,O)},this.setEffects=function(S){if(_===Vn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let O=0;O<S.length;O++)if(S[O].isOutputPass===!0){De("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ce)},this.getViewport=function(S){return S.copy(Oe)},this.setViewport=function(S,O,q,H){S.isVector4?Oe.set(S.x,S.y,S.z,S.w):Oe.set(S,O,q,H),v.viewport(ce.copy(Oe).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(Rt)},this.setScissor=function(S,O,q,H){S.isVector4?Rt.set(S.x,S.y,S.z,S.w):Rt.set(S,O,q,H),v.scissor(ue.copy(Rt).multiplyScalar(ie).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(S){v.setScissorTest(nt=S)},this.setOpaqueSort=function(S){Ge=S},this.setTransparentSort=function(S){Ke=S},this.getClearColor=function(S){return S.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,q=!0){let H=0;if(S){let W=!1;if(Y!==null){let xe=Y.texture.format;W=p.has(xe)}if(W){let xe=Y.texture.type,ve=m.has(xe),ge=We.getClearColor(),Ce=We.getClearAlpha(),Ne=ge.r,Ze=ge.g,He=ge.b;ve?(b[0]=Ne,b[1]=Ze,b[2]=He,b[3]=Ce,F.clearBufferuiv(F.COLOR,0,b)):(w[0]=Ne,w[1]=Ze,w[2]=He,w[3]=Ce,F.clearBufferiv(F.COLOR,0,w))}else H|=F.COLOR_BUFFER_BIT}O&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",Jn,!1),We.dispose(),me.dispose(),se.dispose(),V.dispose(),ae.dispose(),j.dispose(),oe.dispose(),Q.dispose(),fe.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ts),Ae.removeEventListener("sessionend",Js),ai.stop()};function Bt(S){S.preventDefault(),ia("WebGLRenderer: Context Lost."),I=!0}function At(){ia("WebGLRenderer: Context Restored."),I=!1;let S=G.autoReset,O=Fe.enabled,q=Fe.autoUpdate,H=Fe.needsUpdate,W=Fe.type;Ee(),G.autoReset=S,Fe.enabled=O,Fe.autoUpdate=q,Fe.needsUpdate=H,Fe.type=W}function Jn(S){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function jn(S){let O=S.target;O.removeEventListener("dispose",jn),mc(O)}function mc(S){ws(S),V.remove(S)}function ws(S){let O=V.get(S).programs;O!==void 0&&(O.forEach(function(q){fe.releaseProgram(q)}),S.isShaderMaterial&&fe.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,q,H,W,xe){O===null&&(O=tn);let ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,ge=Ho(S,O,q,H,W);v.setMaterial(H,ve);let Ce=q.index,Ne=1;if(H.wireframe===!0){if(Ce=$.getWireframeAttribute(q),Ce===void 0)return;Ne=2}let Ze=q.drawRange,He=q.attributes.position,Re=Ze.start*Ne,pt=(Ze.start+Ze.count)*Ne;xe!==null&&(Re=Math.max(Re,xe.start*Ne),pt=Math.min(pt,(xe.start+xe.count)*Ne)),Ce!==null?(Re=Math.max(Re,0),pt=Math.min(pt,Ce.count)):He!=null&&(Re=Math.max(Re,0),pt=Math.min(pt,He.count));let Ut=pt-Re;if(Ut<0||Ut===1/0)return;oe.setup(W,H,ge,q,Ce);let zt,mt=he;if(Ce!==null&&(zt=de.get(Ce),mt=K,mt.setIndex(zt)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*It()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(W.isLine){let nn=H.linewidth;nn===void 0&&(nn=1),v.setLineWidth(nn*It()),W.isLineSegments?mt.setMode(F.LINES):W.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else W.isPoints?mt.setMode(F.POINTS):W.isSprite&&mt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(dt.get("WEBGL_multi_draw"))mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let nn=W._multiDrawStarts,be=W._multiDrawCounts,Rn=W._multiDrawCount,rt=Ce?de.get(Ce).bytesPerElement:1,kt=V.get(H).currentProgram.getUniforms();for(let vn=0;vn<Rn;vn++)kt.setValue(F,"_gl_DrawID",vn),mt.render(nn[vn]/rt,be[vn])}else if(W.isInstancedMesh)mt.renderInstances(Re,Ut,W.count);else if(q.isInstancedBufferGeometry){let nn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,be=Math.min(q.instanceCount,nn);mt.renderInstances(Re,Ut,be)}else mt.render(Re,Ut)};function Qi(S,O,q){S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=Zt,S.needsUpdate=!0,js(S,O,q),S.side=mi,S.needsUpdate=!0,js(S,O,q),S.side=Sn):js(S,O,q)}this.compile=function(S,O,q=null){q===null&&(q=S),M=se.get(q),M.init(O),y.push(M),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),S!==q&&S.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xe=W.material;if(xe)if(Array.isArray(xe))for(let ve=0;ve<xe.length;ve++){let ge=xe[ve];Qi(ge,q,W),H.add(ge)}else Qi(xe,q,W),H.add(xe)}),M=y.pop(),H},this.compileAsync=function(S,O,q=null){let H=this.compile(S,O,q);return new Promise(W=>{function xe(){if(H.forEach(function(ve){V.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){W(S);return}setTimeout(xe,10)}dt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let es=null;function $s(S){es&&es(S)}function ts(){ai.stop()}function Js(){ai.start()}let ai=new jm;ai.setAnimationLoop($s),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(S){es=S,Ae.setAnimationLoop(S),S===null?ai.stop():ai.start()},Ae.addEventListener("sessionstart",ts),Ae.addEventListener("sessionend",Js),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(S,O);let q=Ae.enabled===!0&&Ae.isPresenting===!0,H=T!==null&&(Y===null||q)&&T.begin(P,Y);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(O),O=Ae.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,O,Y),M=se.get(S,y.length),M.init(O),M.state.textureUnits=Z.getTextureUnits(),y.push(M),Yt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Mt.setFromProjectionMatrix(Yt,fi,O.reversedDepth),ct=this.localClippingEnabled,ht=Le.init(this.clippingPlanes,ct),A=me.get(S,E.length),A.init(),E.push(A),Ae.enabled===!0&&Ae.isPresenting===!0){let ve=P.xr.getDepthSensingMesh();ve!==null&&Ur(ve,O,-1/0,P.sortObjects)}Ur(S,O,0,P.sortObjects),A.finish(),P.sortObjects===!0&&A.sort(Ge,Ke,O.reversedDepth),it=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,it&&We.addToRenderList(A,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ht===!0&&Le.beginShadows();let W=M.state.shadowsArray;if(Fe.render(W,S,O),ht===!0&&Le.endShadows(),(H&&T.hasRenderPass())===!1){let ve=A.opaque,ge=A.transmissive;if(M.setupLights(),O.isArrayCamera){let Ce=O.cameras;if(ge.length>0)for(let Ne=0,Ze=Ce.length;Ne<Ze;Ne++){let He=Ce[Ne];Hn(ve,ge,S,He)}it&&We.render(S);for(let Ne=0,Ze=Ce.length;Ne<Ze;Ne++){let He=Ce[Ne];gc(A,S,He,He.viewport)}}else ge.length>0&&Hn(ve,ge,S,O),it&&We.render(S),gc(A,S,O)}Y!==null&&k===0&&(Z.updateMultisampleRenderTarget(Y),Z.updateRenderTargetMipmap(Y)),H&&T.end(P),S.isScene===!0&&S.onAfterRender(P,S,O),oe.resetDefaultState(),te=-1,ne=null,y.pop(),y.length>0?(M=y[y.length-1],Z.setTextureUnits(M.state.textureUnits),ht===!0&&Le.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?A=E[E.length-1]:A=null,L!==null&&L.renderEnd()};function Ur(S,O,q,H){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLightProbeGrid)M.pushLightProbeGrid(S);else if(S.isLight)M.pushLight(S),S.castShadow&&M.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Mt.intersectsSprite(S)){H&&$t.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Yt);let ve=j.update(S),ge=S.material;ge.visible&&A.push(S,ve,ge,q,$t.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Mt.intersectsObject(S))){let ve=j.update(S),ge=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),$t.copy(S.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),$t.copy(ve.boundingSphere.center)),$t.applyMatrix4(S.matrixWorld).applyMatrix4(Yt)),Array.isArray(ge)){let Ce=ve.groups;for(let Ne=0,Ze=Ce.length;Ne<Ze;Ne++){let He=Ce[Ne],Re=ge[He.materialIndex];Re&&Re.visible&&A.push(S,ve,Re,q,$t.z,He)}}else ge.visible&&A.push(S,ve,ge,q,$t.z,null)}}let xe=S.children;for(let ve=0,ge=xe.length;ve<ge;ve++)Ur(xe[ve],O,q,H)}function gc(S,O,q,H){let{opaque:W,transmissive:xe,transparent:ve}=S;M.setupLightsView(q),ht===!0&&Le.setGlobalState(P.clippingPlanes,q),H&&v.viewport(ce.copy(H)),W.length>0&&Fr(W,O,q),xe.length>0&&Fr(xe,O,q),ve.length>0&&Fr(ve,O,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Hn(S,O,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[H.id]===void 0){let Re=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[H.id]=new gn(1,1,{generateMipmaps:!0,type:Re?ki:Vn,minFilter:yi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}let xe=M.state.transmissionRenderTarget[H.id],ve=H.viewport||ce;xe.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);let ge=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(ut),je=P.getClearAlpha(),je<1&&P.setClearColor(16777215,.5),P.clear(),it&&We.render(q);let Ze=P.toneMapping;P.toneMapping=_i;let He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),M.setupLightsView(H),ht===!0&&Le.setGlobalState(P.clippingPlanes,H),Fr(S,q,H),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let pt=0,Ut=O.length;pt<Ut;pt++){let zt=O[pt],{object:mt,geometry:nn,material:be,group:Rn}=zt;if(be.side===Sn&&mt.layers.test(H.layers)){let rt=be.side;be.side=Zt,be.needsUpdate=!0,As(mt,q,H,nn,be,Rn),be.side=rt,be.needsUpdate=!0,Re=!0}}Re===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}P.setRenderTarget(ge,Ce,Ne),P.setClearColor(ut,je),He!==void 0&&(H.viewport=He),P.toneMapping=Ze}function Fr(S,O,q){let H=O.isScene===!0?O.overrideMaterial:null;for(let W=0,xe=S.length;W<xe;W++){let ve=S[W],{object:ge,geometry:Ce,group:Ne}=ve,Ze=ve.material;Ze.allowOverride===!0&&H!==null&&(Ze=H),ge.layers.test(q.layers)&&As(ge,O,q,Ce,Ze,Ne)}}function As(S,O,q,H,W,xe){S.onBeforeRender(P,O,q,H,W,xe),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,O,q,H,S,xe),W.transparent===!0&&W.side===Sn&&W.forceSinglePass===!1?(W.side=Zt,W.needsUpdate=!0,P.renderBufferDirect(q,O,H,W,S,xe),W.side=mi,W.needsUpdate=!0,P.renderBufferDirect(q,O,H,W,S,xe),W.side=Sn):P.renderBufferDirect(q,O,H,W,S,xe),S.onAfterRender(P,O,q,H,W,xe)}function js(S,O,q){O.isScene!==!0&&(O=tn);let H=V.get(S),W=M.state.lights,xe=M.state.shadowsArray,ve=W.state.version,ge=fe.getParameters(S,W.state,xe,O,q,M.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(ge),Ne=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;let Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ae.get(S.envMap||H.environment,Ze),H.envMapRotation=H.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",jn),Ne=new Map,H.programs=Ne);let He=Ne.get(Ce);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===ve)return ci(S,ge),He}else ge.uniforms=fe.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,q,ge),S.onBeforeCompile(ge,P),He=fe.acquireProgram(ge,Ce),Ne.set(Ce,He),H.uniforms=ge.uniforms;let Re=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Re.clippingPlanes=Le.uniform),ci(S,ge),H.needsLights=Wn(S),H.lightsStateVersion=ve,H.needsLights&&(Re.ambientLightColor.value=W.state.ambient,Re.lightProbe.value=W.state.probe,Re.directionalLights.value=W.state.directional,Re.directionalLightShadows.value=W.state.directionalShadow,Re.spotLights.value=W.state.spot,Re.spotLightShadows.value=W.state.spotShadow,Re.rectAreaLights.value=W.state.rectArea,Re.ltc_1.value=W.state.rectAreaLTC1,Re.ltc_2.value=W.state.rectAreaLTC2,Re.pointLights.value=W.state.point,Re.pointLightShadows.value=W.state.pointShadow,Re.hemisphereLights.value=W.state.hemi,Re.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Re.spotLightMatrix.value=W.state.spotLightMatrix,Re.spotLightMap.value=W.state.spotLightMap,Re.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=M.state.lightProbeGridArray.length>0,H.currentProgram=He,H.uniformsList=null,He}function Vo(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=So.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function ci(S,O){let q=V.get(S);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function Go(S,O){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let q=0,H=S.length;q<H;q++){let W=S[q];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function Ho(S,O,q,H,W){O.isScene!==!0&&(O=tn),Z.resetTextureUnits();let xe=O.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,ge=Y===null?P.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qe.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=ae.get(H.envMap||ve,Ce),Ze=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,Ut=!!q.morphAttributes.color,zt=_i;H.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(zt=P.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nn=mt!==void 0?mt.length:0,be=V.get(H),Rn=M.state.lights;if(ht===!0&&(ct===!0||S!==ne)){let bt=S===ne&&H.id===te;Le.setState(H,S,bt)}let rt=!1;H.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Rn.state.version||be.outputColorSpace!==ge||W.isBatchedMesh&&be.batching===!1||!W.isBatchedMesh&&be.batching===!0||W.isBatchedMesh&&be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&be.instancing===!1||!W.isInstancedMesh&&be.instancing===!0||W.isSkinnedMesh&&be.skinning===!1||!W.isSkinnedMesh&&be.skinning===!0||W.isInstancedMesh&&be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&be.instancingMorph===!1&&W.morphTexture!==null||be.envMap!==Ne||H.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Le.numPlanes||be.numIntersection!==Le.numIntersection)||be.vertexAlphas!==Ze||be.vertexTangents!==He||be.morphTargets!==Re||be.morphNormals!==pt||be.morphColors!==Ut||be.toneMapping!==zt||be.morphTargetsCount!==nn||!!be.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,be.__version=H.version);let kt=be.currentProgram;rt===!0&&(kt=js(H,O,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,kt,be));let vn=!1,wi=!1,Ai=!1,gt=kt.getUniforms(),Ft=be.uniforms;if(v.useProgram(kt.program)&&(vn=!0,wi=!0,Ai=!0),H.id!==te&&(te=H.id,wi=!0),be.needsLights){let bt=Go(M.state.lightProbeGridArray,W);be.lightProbeGrid!==bt&&(be.lightProbeGrid=bt,wi=!0)}if(vn||ne!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),gt.setValue(F,"projectionMatrix",S.projectionMatrix),gt.setValue(F,"viewMatrix",S.matrixWorldInverse);let Ei=gt.map.cameraPosition;Ei!==void 0&&Ei.setValue(F,Dt.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&gt.setValue(F,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&gt.setValue(F,"isOrthographic",S.isOrthographicCamera===!0),ne!==S&&(ne=S,wi=!0,Ai=!0)}if(be.needsLights&&(Rn.state.directionalShadowMap.length>0&&gt.setValue(F,"directionalShadowMap",Rn.state.directionalShadowMap,Z),Rn.state.spotShadowMap.length>0&&gt.setValue(F,"spotShadowMap",Rn.state.spotShadowMap,Z),Rn.state.pointShadowMap.length>0&&gt.setValue(F,"pointShadowMap",Rn.state.pointShadowMap,Z)),W.isSkinnedMesh){gt.setOptional(F,W,"bindMatrix"),gt.setOptional(F,W,"bindMatrixInverse");let bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),gt.setValue(F,"boneTexture",bt.boneTexture,Z))}W.isBatchedMesh&&(gt.setOptional(F,W,"batchingTexture"),gt.setValue(F,"batchingTexture",W._matricesTexture,Z),gt.setOptional(F,W,"batchingIdTexture"),gt.setValue(F,"batchingIdTexture",W._indirectTexture,Z),gt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&gt.setValue(F,"batchingColorTexture",W._colorsTexture,Z));let Ti=q.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&N.update(W,q,kt),(wi||be.receiveShadow!==W.receiveShadow)&&(be.receiveShadow=W.receiveShadow,gt.setValue(F,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(Ft.envMapIntensity.value=O.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=oS()),wi){if(gt.setValue(F,"toneMappingExposure",P.toneMappingExposure),be.needsLights&&Cn(Ft,Ai),xe&&H.fog===!0&&Te.refreshFogUniforms(Ft,xe),Te.refreshMaterialUniforms(Ft,H,ie,le,M.state.transmissionRenderTarget[S.id]),be.needsLights&&be.lightProbeGrid){let bt=be.lightProbeGrid;Ft.probesSH.value=bt.texture,Ft.probesMin.value.copy(bt.boundingBox.min),Ft.probesMax.value.copy(bt.boundingBox.max),Ft.probesResolution.value.copy(bt.resolution)}So.upload(F,Vo(be),Ft,Z)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(So.upload(F,Vo(be),Ft,Z),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&gt.setValue(F,"center",W.center),gt.setValue(F,"modelViewMatrix",W.modelViewMatrix),gt.setValue(F,"normalMatrix",W.normalMatrix),gt.setValue(F,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let bt=H.uniformsGroups;for(let Ei=0,Ts=bt.length;Ei<Ts;Ei++){let xc=bt[Ei];Q.update(xc,kt),Q.bind(xc,kt)}}return kt}function Cn(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function Wn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(S,O,q){let H=V.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(S.texture).__webglTexture=O,V.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let q=V.get(S);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(S,O=0,q=0){Y=S,U=O,k=q;let H=null,W=!1,xe=!1;if(S){let ge=V.get(S);if(ge.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ge.__webglFramebuffer),ce.copy(S.viewport),ue.copy(S.scissor),Ye=S.scissorTest,v.viewport(ce),v.scissor(ue),v.setScissorTest(Ye),te=-1;return}else if(ge.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(ge.__hasExternalTextures)Z.rebindTextures(S,V.get(S.texture).__webglTexture,V.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ze=S.depthTexture;if(ge.__boundDepthTexture!==Ze){if(Ze!==null&&V.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(xe=!0);let Ne=V.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?H=Ne[O][q]:H=Ne[O],W=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?H=V.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[q]:H=Ne,ce.copy(S.viewport),ue.copy(S.scissor),Ye=S.scissorTest}else ce.copy(Oe).multiplyScalar(ie).floor(),ue.copy(Rt).multiplyScalar(ie).floor(),Ye=nt;if(q!==0&&(H=z),v.bindFramebuffer(F.FRAMEBUFFER,H)&&v.drawBuffers(S,H),v.viewport(ce),v.scissor(ue),v.setScissorTest(Ye),W){let ge=V.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ge.__webglTexture,q)}else if(xe){let ge=O;for(let Ce=0;Ce<S.textures.length;Ce++){let Ne=V.get(S.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,q,ge)}}else if(S!==null&&q!==0){let ge=V.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,q)}te=-1},this.readRenderTargetPixels=function(S,O,q,H,W,xe,ve,ge=0){if(!(S&&S.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce){v.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Ne=S.textures[ge],Ze=Ne.format,He=Ne.type;if(S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Ze)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(He)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-H&&q>=0&&q<=S.height-W&&F.readPixels(O,q,H,W,re.convert(Ze),re.convert(He),xe)}finally{let Ne=Y!==null?V.get(Y).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,O,q,H,W,xe,ve,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=V.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ve!==void 0&&(Ce=Ce[ve]),Ce)if(O>=0&&O<=S.width-H&&q>=0&&q<=S.height-W){v.bindFramebuffer(F.FRAMEBUFFER,Ce);let Ne=S.textures[ge],Ze=Ne.format,He=Ne.type;if(S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,xe.byteLength,F.STREAM_READ),F.readPixels(O,q,H,W,re.convert(Ze),re.convert(He),0);let pt=Y!==null?V.get(Y).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,pt);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Am(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,xe),F.deleteBuffer(Re),F.deleteSync(Ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,q=0){let H=Math.pow(2,-q),W=Math.floor(S.image.width*H),xe=Math.floor(S.image.height*H),ve=O!==null?O.x:0,ge=O!==null?O.y:0;Z.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,ve,ge,W,xe),v.unbindTexture()},this.copyTextureToTexture=function(S,O,q=null,H=null,W=0,xe=0){let ve,ge,Ce,Ne,Ze,He,Re,pt,Ut,zt=S.isCompressedTexture?S.mipmaps[xe]:S.image;if(q!==null)ve=q.max.x-q.min.x,ge=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Ze=q.min.y,He=q.isBox3?q.min.z:0;else{let Ft=Math.pow(2,-W);ve=Math.floor(zt.width*Ft),ge=Math.floor(zt.height*Ft),S.isDataArrayTexture?Ce=zt.depth:S.isData3DTexture?Ce=Math.floor(zt.depth*Ft):Ce=1,Ne=0,Ze=0,He=0}H!==null?(Re=H.x,pt=H.y,Ut=H.z):(Re=0,pt=0,Ut=0);let mt=re.convert(O.format),nn=re.convert(O.type),be;O.isData3DTexture?(Z.setTexture3D(O,0),be=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Z.setTexture2DArray(O,0),be=F.TEXTURE_2D_ARRAY):(Z.setTexture2D(O,0),be=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let Rn=v.getParameter(F.UNPACK_ROW_LENGTH),rt=v.getParameter(F.UNPACK_IMAGE_HEIGHT),kt=v.getParameter(F.UNPACK_SKIP_PIXELS),vn=v.getParameter(F.UNPACK_SKIP_ROWS),wi=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,zt.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,zt.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),v.pixelStorei(F.UNPACK_SKIP_IMAGES,He);let Ai=S.isDataArrayTexture||S.isData3DTexture,gt=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let Ft=V.get(S),Ti=V.get(O),bt=V.get(Ft.__renderTarget),Ei=V.get(Ti.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,bt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ts=0;Ts<Ce;Ts++)Ai&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(S).__webglTexture,W,He+Ts),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,V.get(O).__webglTexture,xe,Ut+Ts)),F.blitFramebuffer(Ne,Ze,ve,ge,Re,pt,ve,ge,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||V.has(S)){let Ft=V.get(S),Ti=V.get(O);v.bindFramebuffer(F.READ_FRAMEBUFFER,X),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let bt=0;bt<Ce;bt++)Ai?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,W,He+bt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,W),gt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ti.__webglTexture,xe,Ut+bt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ti.__webglTexture,xe),W!==0?F.blitFramebuffer(Ne,Ze,ve,ge,Re,pt,ve,ge,F.COLOR_BUFFER_BIT,F.NEAREST):gt?F.copyTexSubImage3D(be,xe,Re,pt,Ut+bt,Ne,Ze,ve,ge):F.copyTexSubImage2D(be,xe,Re,pt,Ne,Ze,ve,ge);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gt?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(be,xe,Re,pt,Ut,ve,ge,Ce,mt,nn,zt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(be,xe,Re,pt,Ut,ve,ge,Ce,mt,zt.data):F.texSubImage3D(be,xe,Re,pt,Ut,ve,ge,Ce,mt,nn,zt):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,xe,Re,pt,ve,ge,mt,nn,zt.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,xe,Re,pt,zt.width,zt.height,mt,zt.data):F.texSubImage2D(F.TEXTURE_2D,xe,Re,pt,ve,ge,mt,nn,zt);v.pixelStorei(F.UNPACK_ROW_LENGTH,Rn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,rt),v.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),v.pixelStorei(F.UNPACK_SKIP_ROWS,vn),v.pixelStorei(F.UNPACK_SKIP_IMAGES,wi),xe===0&&O.generateMipmaps&&F.generateMipmap(be),v.unbindTexture()},this.initRenderTarget=function(S){V.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){U=0,k=0,Y=null,v.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};function An(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Pt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=r0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let g=r0(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function r0(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Jt(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let _=h.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Sd(i,e){if(e===ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Mo||e===Ba){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Mo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function wd(i,e,t){t[0]=i[0]>e[0]?e[0]:i[0],t[1]=i[1]<e[1]?e[1]:i[1],t[2]=i[2]>e[2]?e[2]:i[2],t[3]=i[3]<e[3]?e[3]:i[3],t[4]=i[4]>e[4]?e[4]:i[4],t[5]=i[5]<e[5]?e[5]:i[5]}function aS(i,e,t){let n=!1,s=i[0]>e[0]?e[0]:i[0],r=i[1]<e[1]?e[1]:i[1],o=i[2]>e[2]?e[2]:i[2],a=i[3]<e[3]?e[3]:i[3],c=i[4]>e[4]?e[4]:i[4],l=i[5]<e[5]?e[5]:i[5];return t[0]>s&&(t[0]=s,n=!0),t[1]<r&&(t[1]=r,n=!0),t[2]>o&&(t[2]=o,n=!0),t[3]<a&&(t[3]=a,n=!0),t[4]>c&&(t[4]=c,n=!0),t[5]<l&&(t[5]=l,n=!0),n}function cS(i,e){return!(e[0]>i[0]||e[1]<i[1]||e[2]>i[2]||e[3]<i[3]||e[4]>i[4]||e[5]<i[5])}function lS(i,e){let t=!1;return e[0]>i[0]&&(e[0]=i[0],t=!0),e[1]<i[1]&&(e[1]=i[1],t=!0),e[2]>i[2]&&(e[2]=i[2],t=!0),e[3]<i[3]&&(e[3]=i[3],t=!0),e[4]>i[4]&&(e[4]=i[4],t=!0),e[5]<i[5]&&(e[5]=i[5],t=!0),t}function dh(i,e){i[0]-=e,i[1]+=e,i[2]-=e,i[3]+=e,i[4]-=e,i[5]+=e}function To(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return 2*(e*t+t*n+n*e)}function yr(i,e){let t=i[0]>e[0]?e[0]:i[0],n=i[1]<e[1]?e[1]:i[1],s=i[2]>e[2]?e[2]:i[2],r=i[3]<e[3]?e[3]:i[3],o=i[4]>e[4]?e[4]:i[4],a=i[5]<e[5]?e[5]:i[5],c=n-t,l=r-s,h=a-o;return 2*(c*l+l*h+h*c)}function hS(i){let e=i[1]-i[0],t=i[3]-i[2],n=i[5]-i[4];return e>t?e>n?0:2:t>n?1:2}function Ha(i,e){let t=i[0]-e[0],n=e[0]-i[1],s=t>n?t:n;s<0&&(s=0);let r=i[2]-e[1],o=e[1]-i[3],a=r>o?r:o;a<0&&(a=0);let c=i[4]-e[2],l=e[2]-i[5],h=c>l?c:l;return h<0&&(h=0),s*s+a*a+h*h}function uS(i,e){let t,n,s,r,o,a,c=i[0]-e[0],l=e[0]-i[1];c>l?(t=c,n=l):(t=l,n=c),t<0&&(t=0);let h=i[2]-e[1],u=e[1]-i[3];h>u?(s=h,r=u):(s=u,r=h),s<0&&(s=0);let d=i[4]-e[2],f=e[2]-i[5];return d>f?(o=d,a=f):(o=f,a=d),o<0&&(o=0),{min:t*t+s*s+o*o,max:n*n+r*r+a*a}}var Ad=class{constructor(){this.array=[]}clear(){this.array=[]}push(e){let t=this.array,n=e.inheritedCost,s=t.length>6?t.length-6:0,r;for(r=t.length-1;r>=s&&!(n<=t[r].inheritedCost);r--);r>t.length-7&&t.splice(r+1,0,e)}pop(){return this.array.pop()}},fh=class{constructor(e=!1){this.root=null,this._sortedList=new Ad,this.count=0,this.highPrecision=e,this._typeArray=e?Float64Array:Float32Array}createFromArray(e,t,n,s=0){let r=t.length,o=this._typeArray;o!==(t[0].BYTES_PER_ELEMENT===4?Float32Array:Float64Array)&&console.warn("Different precision.");let a=new o(6),c,l;this.root=h(0,r,null);function h(g,_,p){if(_===1){let x=t[g];s>0&&dh(x,s);let A={box:x,object:e[g],parent:p};return n&&n(A),A}let m=u(g,_);d();let b=f(g,_);(b===g||b===g+_)&&(b=g+(_>>1));let w={box:m,parent:p};return w.left=h(g,b-g,w),w.right=h(b,_-b+g,w),w}function u(g,_){let p=new o(6),m=g+_;p[0]=1/0,p[1]=-1/0,p[2]=1/0,p[3]=-1/0,p[4]=1/0,p[5]=-1/0,a[0]=1/0,a[1]=-1/0,a[2]=1/0,a[3]=-1/0,a[4]=1/0,a[5]=-1/0;for(let b=g;b<m;b++){let w=t[b],x=w[0],A=w[1],M=w[2],E=w[3],y=w[4],T=w[5];p[0]>x&&(p[0]=x),p[1]<A&&(p[1]=A),p[2]>M&&(p[2]=M),p[3]<E&&(p[3]=E),p[4]>y&&(p[4]=y),p[5]<T&&(p[5]=T);let P=(A+x)*.5,I=(E+M)*.5,L=(T+y)*.5;a[0]>P&&(a[0]=P),a[1]<P&&(a[1]=P),a[2]>I&&(a[2]=I),a[3]<I&&(a[3]=I),a[4]>L&&(a[4]=L),a[5]<L&&(a[5]=L)}return p[0]-=s,p[1]+=s,p[2]-=s,p[3]+=s,p[4]-=s,p[5]+=s,p}function d(){c=hS(a)*2,l=(a[c]+a[c+1])*.5}function f(g,_){let p=g,m=g+_-1;for(;p<=m;){let b=t[p];if((b[c+1]+b[c])*.5>=l)for(;;){let w=t[m];if((w[c+1]+w[c])*.5<l){let x=e[p];e[p]=e[m],e[m]=x;let A=t[p];t[p]=t[m],t[m]=A,m--;break}if(m--,m<=p)return p}p++}return p}}insert(e,t,n){n>0&&dh(t,n);let s=this.createLeafNode(e,t);return this.root===null?this.root=s:this.insertLeaf(s),this.count++,s}insertRange(e,t,n,s){console.warn("Method not optimized yet. It just calls 'insert' N times.");let r=e.length,o=n>0?n:n?null:0;for(let a=0;a<r;a++){let c=this.insert(e[a],t[a],o??n[a]);s&&s(c)}}move(e,t){if(!e.parent||cS(e.box,e.parent.box)){t>0&&dh(e.box,t);return}t>0&&dh(e.box,t);let n=this.delete(e);this.insertLeaf(e,n),this.count++}delete(e){let t=e.parent;if(t===null)return this.root=null,null;let n=t.parent,s=t.left===e?t.right:t.left;return s.parent=n,e.parent=null,n===null?(this.root=s,t):(n.left===t?n.left=s:n.right=s,this.refit(n),this.count--,t)}clear(){this.root=null}insertLeaf(e,t){let n=this.findBestSibling(e.box),s=n.parent;t===void 0?t=this.createInternalNode(s,n,e):(t.parent=s,t.left=n,t.right=e),n.parent=t,e.parent=t,s===null?this.root=t:s.left===n?s.left=t:s.right=t,this.refitAndRotate(e,n)}createLeafNode(e,t){return{box:t,object:e,parent:null}}createInternalNode(e,t,n){return{parent:e,left:t,right:n,box:new this._typeArray(6)}}findBestSibling(e){let t=this.root,n=t,s=yr(e,t.box),r=To(e);if(t.object!==void 0)return t;let o=this._sortedList;o.clear();let a={node:t,inheritedCost:s-To(t.box)};do{let{node:c,inheritedCost:l}=a;if(r+l>=s)break;let h=c.left,u=c.right,d=yr(e,h.box)+l,f=d-To(h.box),g=yr(e,u.box)+l,_=g-To(u.box);if(d>g?s>g&&(n=u,s=g):s>d&&(n=h,s=d),_>f){if(r+f>=s||(h.object===void 0&&o.push({node:h,inheritedCost:f}),r+_>=s))continue;u.object===void 0&&o.push({node:u,inheritedCost:_})}else{if(r+_>=s||(u.object===void 0&&o.push({node:u,inheritedCost:_}),r+f>=s))continue;h.object===void 0&&o.push({node:h,inheritedCost:f})}}while(a=o.pop());return n}refit(e){for(wd(e.left.box,e.right.box,e.box);e=e.parent;)if(!aS(e.left.box,e.right.box,e.box))return}refitAndRotate(e,t){let n=e.box;e=e.parent;let s=e.box;for(wd(n,t.box,s);e=e.parent;){let r=e.box;if(!lS(n,r))return;let o=e.left,a=e.right,c=o.box,l=a.box,h=null,u=null,d=0;if(a.object===void 0){let f=a.left,g=a.right,_=To(a.box),p=_-yr(c,f.box),m=_-yr(c,g.box);p>m?p>0&&(h=o,u=g,d=p):m>0&&(h=o,u=f,d=m)}if(o.object===void 0){let f=o.left,g=o.right,_=To(o.box),p=_-yr(l,f.box),m=_-yr(l,g.box);p>m?p>d&&(h=a,u=g):m>d&&(h=a,u=f)}h!==null&&this.swap(h,u)}}swap(e,t){let n=e.parent,s=t.parent,r=s.box;n.left===e?n.left=t:n.right=t,s.left===t?s.left=e:s.right=e,e.parent=s,t.parent=n,wd(s.left.box,s.right.box,r)}},mh=0,dS=1,Td=class{constructor(e,t){this.coordinateSystem=t,this.array=e?new Float64Array(24):new Float32Array(24)}setFromProjectionMatrix(e){if(this.updatePlane(0,e[3]+e[0],e[7]+e[4],e[11]+e[8],e[15]+e[12]),this.updatePlane(1,e[3]-e[0],e[7]-e[4],e[11]-e[8],e[15]-e[12]),this.updatePlane(2,e[3]-e[1],e[7]-e[5],e[11]-e[9],e[15]-e[13]),this.updatePlane(3,e[3]+e[1],e[7]+e[5],e[11]+e[9],e[15]+e[13]),this.updatePlane(4,e[3]-e[2],e[7]-e[6],e[11]-e[10],e[15]-e[14]),this.coordinateSystem===mh)this.updatePlane(5,e[3]+e[2],e[7]+e[6],e[11]+e[10],e[15]+e[14]);else if(this.coordinateSystem===dS)this.updatePlane(5,e[2],e[6],e[10],e[14]);else throw new Error("Invalid coordinate system: "+this.coordinateSystem);return this}updatePlane(e,t,n,s,r){let o=this.array,a=e*4,c=Math.sqrt(t*t+n*n+s*s);o[a+0]=t/c,o[a+1]=n/c,o[a+2]=s/c,o[a+3]=r/c}intersectsBoxMask(e,t){let n=this.array,s,r,o,a,c,l;for(let h=0;h<6;h++){if(!(t&32>>h))continue;let u=h*4,d=n[u+0],f=n[u+1],g=n[u+2],_=n[u+3];if(d>0?(s=e[1],a=e[0]):(s=e[0],a=e[1]),f>0?(r=e[3],c=e[2]):(r=e[2],c=e[3]),g>0?(o=e[5],l=e[4]):(o=e[4],l=e[5]),d*s+f*r+g*o<-_)return-1;d*a+f*c+g*l>-_&&(t^=32>>h)}return t}isIntersected(e,t){let n=this.array;for(let s=0;s<6;s++){if(!(t&32>>s))continue;let r=s*4,o=n[r+0],a=n[r+1],c=n[r+2],l=n[r+3],h=o>0?e[1]:e[0],u=a>0?e[3]:e[2],d=c>0?e[5]:e[4];if(o*h+a*u+c*d<-l)return!1}return!0}isIntersectedMargin(e,t,n){if(t===0)return!0;let s=this.array;for(let r=0;r<6;r++){if(!(t&32>>r))continue;let o=r*4,a=s[o+0],c=s[o+1],l=s[o+2],h=s[o+3],u=a>0?e[1]-n:e[0]+n,d=c>0?e[3]-n:e[2]+n,f=l>0?e[5]-n:e[4]+n;if(a*u+c*d+l*f<-h)return!1}return!0}};function o0(i,e,t,n,s,r){let o=n[0],a=e[0],c=t[0],l=(i[o]-a)*c,h=(i[o^1]-a)*c,u=l>0?l:0,d=h<1/0?h:1/0;return o=n[1],a=e[1],c=t[1],l=(i[o+2]-a)*c,l>d||(h=(i[o^3]-a)*c,u>h)||(u=l>u?l:u,d=h<d?h:d,o=n[2],a=e[2],c=t[2],l=(i[o+4]-a)*c,l>d)||(h=(i[o^5]-a)*c,u>h)?!1:(u=l>u?l:u,d=h<d?h:d,u<=r&&d>=s)}function a0(i,e){return i[1]>=e[0]&&e[1]>=i[0]&&i[3]>=e[2]&&e[3]>=i[2]&&i[5]>=e[4]&&e[5]>=i[4]}function fS(i,e,t){return Ha(t,i)<=e*e}var ph=class{constructor(e,t=mh){this._sign=new Uint8Array(3),this.builder=e;let n=e.highPrecision;this.frustum=new Td(n,t),this._dirInv=n?new Float64Array(3):new Float32Array(3)}get root(){return this.builder.root}createFromArray(e,t,n,s){e?.length>0&&this.builder.createFromArray(e,t,n,s)}insert(e,t,n){return this.builder.insert(e,t,n)}insertRange(e,t,n,s){e?.length>0&&this.builder.insertRange(e,t,n,s)}move(e,t){this.builder.move(e,t)}delete(e){return this.builder.delete(e)}clear(){this.builder.clear()}traverse(e){if(this.root===null)return;t(this.root,0);function t(n,s){if(n.object!==void 0){e(n,s);return}e(n,s)||(t(n.left,s+1),t(n.right,s+1))}}intersectsRay(e,t,n,s=0,r=1/0){if(this.root===null)return!1;let o=this._dirInv,a=this._sign;return o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){return o0(l.box,t,o,a,s,r)?l.object!==void 0?n(l.object):c(l.left)||c(l.right):!1}}intersectsBox(e,t){if(this.root===null)return!1;return n(this.root);function n(s){return a0(e,s.box)?s.object!==void 0?t(s.object):n(s.left)||n(s.right):!1}}intersectsSphere(e,t,n){if(this.root===null)return!1;return s(this.root);function s(r){return fS(e,t,r.box)?r.object!==void 0?n(r.object):s(r.left)||s(r.right):!1}}isNodeIntersected(e,t){let n=e.box,s;for(;s=e.parent;){let o=s.left===e?s.right:s.left;if(r(o))return!0;e=s}return!1;function r(o){return a0(n,o.box)?o.object!==void 0?t(o.object):r(o.left)||r(o.right):!1}}rayIntersections(e,t,n,s=0,r=1/0){if(this.root===null)return;let o=this._dirInv,a=this._sign;o[0]=1/e[0],o[1]=1/e[1],o[2]=1/e[2],a[0]=o[0]<0?1:0,a[1]=o[1]<0?1:0,a[2]=o[2]<0?1:0,c(this.root);function c(l){if(o0(l.box,t,o,a,s,r)){if(l.object!==void 0){n(l.object);return}c(l.left),c(l.right)}}}frustumCulling(e,t){if(this.root===null)return;let n=this.frustum.setFromProjectionMatrix(e);s(this.root,63);function s(o,a){if(o.object!==void 0){n.isIntersected(o.box,a)&&t(o,n,a);return}if(a=n.intersectsBoxMask(o.box,a),!(a<0)){if(a===0){r(o.left),r(o.right);return}s(o.left,a),s(o.right,a)}}function r(o){if(o.object!==void 0){t(o,n,0);return}r(o.left),r(o.right)}}frustumCullingLOD(e,t,n,s){if(this.root===null)return;let r=this.frustum.setFromProjectionMatrix(e);o(this.root,63,null);function o(l,h,u){let d=l.box;if(u===null&&(u=c(d)),l.object!==void 0){r.isIntersected(d,h)&&s(l,u,r,h);return}if(h=r.intersectsBoxMask(d,h),!(h<0)){if(h===0){a(l.left,u),a(l.right,u);return}o(l.left,h,u),o(l.right,h,u)}}function a(l,h){if(h===null&&(h=c(l.box)),l.object!==void 0){s(l,h,r,0);return}a(l.left,h),a(l.right,h)}function c(l){let{min:h,max:u}=uS(l,t);for(let d=n.length-1;d>0;d--)if(u>=n[d])return h>=n[d]?d:null;return 0}}closestPointToPoint(e,t){if(this.root===null)return;let n=1/0;return s(this.root),Math.sqrt(n);function s(r){if(r.object!==void 0){if(t){let c=t(r.object)??Ha(r.box,e);c<n&&(n=c)}else n=Ha(r.box,e);return}let o=Ha(r.left.box,e),a=Ha(r.right.box,e);o<a?o<n&&(s(r.left),a<n&&s(r.right)):a<n&&(s(r.right),o<n&&s(r.left))}}};function Ed(i,e){return e[0]=i.x,e[1]=i.y,e[2]=i.z,e}function Cd(i,e){let t=i.min,n=i.max;return e[0]=t.x,e[1]=n.x,e[2]=t.y,e[3]=n.y,e[4]=t.z,e[5]=n.z,e}var xh=class{constructor(e,t,n){if(this.isInstanceEntity=!0,this.position=new C,this.scale=new C(1,1,1),this.quaternion=new et,this.id=t,this.owner=e,n){let s=this.quaternion,r=this.rotation=new ti;r._onChange(()=>s.setFromEuler(r,!1)),s._onChange(()=>r.setFromQuaternion(s,void 0,!1))}}get visible(){return this.owner.getVisibilityAt(this.id)}set visible(e){this.owner.setVisibilityAt(this.id,e)}get active(){return this.owner.getActiveAt(this.id)}set active(e){this.owner.setActiveAt(this.id,e)}get color(){return this.owner.getColorAt(this.id)}set color(e){this.owner.setColorAt(this.id,e)}get opacity(){return this.owner.getOpacityAt(this.id)}set opacity(e){this.owner.setOpacityAt(this.id,e)}get morph(){return this.owner.getMorphAt(this.id)}set morph(e){this.owner.setMorphAt(this.id,e)}get matrix(){return this.owner.getMatrixAt(this.id)}get matrixWorld(){return this.matrix.premultiply(this.owner.matrixWorld)}setMatrixIdentity(){let e=this.owner,t=e.matricesTexture._data,n=this.id,s=n*16;t[s+0]=1,t[s+1]=0,t[s+2]=0,t[s+3]=0,t[s+4]=0,t[s+5]=1,t[s+6]=0,t[s+7]=0,t[s+8]=0,t[s+9]=0,t[s+10]=1,t[s+11]=0,t[s+12]=0,t[s+13]=0,t[s+14]=0,t[s+15]=1,e.matricesTexture.enqueueUpdate(n)}updateMatrix(){let e=this.owner,t=this.position,n=this.quaternion,s=this.scale,r=e.matricesTexture._data,o=this.id,a=o*16,c=n._x,l=n._y,h=n._z,u=n._w,d=c+c,f=l+l,g=h+h,_=c*d,p=c*f,m=c*g,b=l*f,w=l*g,x=h*g,A=u*d,M=u*f,E=u*g,y=s.x,T=s.y,P=s.z;r[a+0]=(1-(b+x))*y,r[a+1]=(p+E)*y,r[a+2]=(m-M)*y,r[a+3]=0,r[a+4]=(p-E)*T,r[a+5]=(1-(_+x))*T,r[a+6]=(w+A)*T,r[a+7]=0,r[a+8]=(m+M)*P,r[a+9]=(w-A)*P,r[a+10]=(1-(_+b))*P,r[a+11]=0,r[a+12]=t.x,r[a+13]=t.y,r[a+14]=t.z,r[a+15]=1,e.matricesTexture.enqueueUpdate(o),e.bvh&&e.autoUpdateBVH&&e.bvh.move(o)}updateMatrixPosition(){let e=this.owner,t=this.position,n=e.matricesTexture._data,s=this.id,r=s*16;n[r+12]=t.x,n[r+13]=t.y,n[r+14]=t.z,e.matricesTexture.enqueueUpdate(s),e.bvh&&e.autoUpdateBVH&&e.bvh.move(s)}getUniform(e,t){return this.owner.getUniformAt(this.id,e,t)}updateBones(e=!0,t){this.owner.setBonesAt(this.id,e,t)}setUniform(e,t){this.owner.setUniformAt(this.id,e,t)}copyTo(e){e.position.copy(this.position),e.scale.copy(this.scale),e.quaternion.copy(this.quaternion),this.rotation&&e.rotation.copy(this.rotation)}applyMatrix4(e){return this.matrix.premultiply(e).decompose(this.position,this.quaternion,this.scale),this}applyQuaternion(e){return this.quaternion.premultiply(e),this}rotateOnAxis(e,t){return gh.setFromAxisAngle(e,t),this.quaternion.multiply(gh),this}rotateOnWorldAxis(e,t){return gh.setFromAxisAngle(e,t),this.quaternion.premultiply(gh),this}rotateX(e){return this.rotateOnAxis(l0,e)}rotateY(e){return this.rotateOnAxis(h0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return c0.copy(e).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(l0,e)}translateY(e){return this.translateOnAxis(h0,e)}translateZ(e){return this.translateOnAxis(u0,e)}remove(){return this.owner.removeInstances(this.id),this}},gh=new et,c0=new C,l0=new C(1,0,0),h0=new C(0,1,0),u0=new C(0,0,1),Id=class{constructor(e,t=0,n=!1,s=!0){this.nodesMap=new Map,this.LODsMap=new Map,this._geoBoundingSphere=null,this._sphereTarget=null,this.target=e,this.accurateCulling=s,this._margin=t;let r=e._geometry;if(r.boundingBox||r.computeBoundingBox(),this.geoBoundingBox=r.boundingBox,n){r.boundingSphere||r.computeBoundingSphere();let o=r.boundingSphere.center;o.x===0&&o.y===0&&o.z===0?(this._geoBoundingSphere=r.boundingSphere,this._sphereTarget={centerX:0,centerY:0,centerZ:0,maxScale:0}):(console.warn('"getBoxFromSphere" is ignored because geometry is not centered.'),n=!1)}this.bvh=new ph(new fh,mh),this._origin=new Float32Array(3),this._dir=new Float32Array(3),this._cameraPos=new Float32Array(3),this._getBoxFromSphere=n}create(){let e=this.target._instancesCount,t=this.target._instancesArrayCount,n=new Array(e),s=new Uint32Array(e),r=0;this.clear();for(let o=0;o<t;o++)this.target.getActiveAt(o)&&(n[r]=this.getBox(o,new Float32Array(6)),s[r]=o,r++);this.bvh.createFromArray(s,n,o=>{this.nodesMap.set(o.object,o)},this._margin)}insert(e){let t=this.bvh.insert(e,this.getBox(e,new Float32Array(6)),this._margin);this.nodesMap.set(e,t)}insertRange(e){let t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=this.getBox(e[s],new Float32Array(6));this.bvh.insertRange(e,n,this._margin,s=>{this.nodesMap.set(s.object,s)})}move(e){let t=this.nodesMap.get(e);t&&(this.getBox(e,t.box),this.bvh.move(t,this._margin))}delete(e){let t=this.nodesMap.get(e);t&&(this.bvh.delete(t),this.nodesMap.delete(e))}clear(){this.bvh.clear(),this.nodesMap.clear()}frustumCulling(e,t){this._margin>0&&this.accurateCulling?this.bvh.frustumCulling(e.elements,(n,s,r)=>{s.isIntersectedMargin(n.box,r,this._margin)&&t(n)}):this.bvh.frustumCulling(e.elements,t)}frustumCullingLOD(e,t,n,s){this.LODsMap.has(n)||this.LODsMap.set(n,new Float32Array(n.length));let r=this.LODsMap.get(n);for(let a=0;a<n.length;a++)r[a]=n[a].distance;let o=this._cameraPos;o[0]=t.x,o[1]=t.y,o[2]=t.z,this._margin>0&&this.accurateCulling?this.bvh.frustumCullingLOD(e.elements,o,r,(a,c,l,h)=>{l.isIntersectedMargin(a.box,h,this._margin)&&s(a,c)}):this.bvh.frustumCullingLOD(e.elements,o,r,s)}raycast(e,t){let n=e.ray,s=this._origin,r=this._dir;Ed(n.origin,s),Ed(n.direction,r),this.bvh.rayIntersections(r,s,t,e.near,e.far)}intersectBox(e,t){this._boxArray||(this._boxArray=new Float32Array(6));let n=this._boxArray;return Cd(e,n),this.bvh.intersectsBox(n,t)}getBox(e,t){if(this._getBoxFromSphere){let n=this.target.matricesTexture._data,{centerX:s,centerY:r,centerZ:o,maxScale:a}=this.getSphereFromMatrix_centeredGeometry(e,n,this._sphereTarget),c=this._geoBoundingSphere.radius*a;t[0]=s-c,t[1]=s+c,t[2]=r-c,t[3]=r+c,t[4]=o-c,t[5]=o+c}else d0.copy(this.geoBoundingBox).applyMatrix4(this.target.getMatrixAt(e)),Cd(d0,t);return t}getSphereFromMatrix_centeredGeometry(e,t,n){let s=e*16,r=t[s+0],o=t[s+1],a=t[s+2],c=t[s+4],l=t[s+5],h=t[s+6],u=t[s+8],d=t[s+9],f=t[s+10],g=r*r+o*o+a*a,_=c*c+l*l+h*h,p=u*u+d*d+f*f;return n.maxScale=Math.sqrt(Math.max(g,_,p)),n.centerX=t[s+12],n.centerY=t[s+13],n.centerZ=t[s+14],n}},d0=new Kt,Pd=class extends Aa{constructor(e,t,n,s,r,o=1){let a=e.createBuffer();super(a,t,n,s,r.length/n),this.isGLInstancedBufferAttribute=!0,this._needsUpdate=!1,this.isInstancedBufferAttribute=!0,this.meshPerAttribute=o,this.array=r,this._cacheArray=r,e.bindBuffer(e.ARRAY_BUFFER,a),e.bufferData(e.ARRAY_BUFFER,r,e.DYNAMIC_DRAW)}update(e,t){if(!this._needsUpdate||t===0)return;let n=e.getContext();n.bindBuffer(n.ARRAY_BUFFER,this.buffer),this.array===this._cacheArray?n.bufferSubData(n.ARRAY_BUFFER,0,this.array,0,t):(n.bufferData(n.ARRAY_BUFFER,this.array,n.DYNAMIC_DRAW),this._cacheArray=this.array),this._needsUpdate=!1}clone(){return this}},Mh=null,_h=null,f0={};function pS(i){return _h.get(i)?.()??Mh(i)}function mS(i){if(_h.has(i))return;let e={};_h.set(i,()=>{if(i.isMeshDistanceMaterial){let t=Mh(i);e.light=t.light}return e})}function gS(i,e,t){let n=e.properties;Mh=n.get;let s=`${!!i.colorsTexture}_${i._useOpacity}_${!!i.boneTexture}_${!!i.uniformsTexture}`;f0[s]??=new WeakMap,_h=f0[s],n.get=pS,mS(t)}function xS(i){i.properties.get=Mh}function M0(i,e){return Math.max(e,Math.ceil(Math.sqrt(i/e))*e)}function _S(i,e,t,n){e===3&&(console.warn('"channels" cannot be 3. Set to 4. More info: https://github.com/mrdoob/three.js/pull/23228'),e=4);let s=M0(n,t),r=new i(s*s*e),o=i.name.includes("Float"),a=i.name.includes("Uint"),c=o?xn:a?Kn:go,l;switch(e){case 1:l=o?Vs:_o;break;case 2:l=o?Vi:yo;break;case 4:l=o?Dn:vo;break}return{array:r,size:s,type:c,format:l}}var Ro=class extends Di{constructor(e,t,n,s,r,o){t===3&&(t=4);let{array:a,format:c,size:l,type:h}=_S(e,t,n,s);super(a,l,l,c,h),this.partialUpdate=!0,this.maxUpdateCalls=1/0,this._utils=null,this._needsUpdate=!0,this._lastWidth=-1,this._data=a,this._channels=t,this._pixelsPerInstance=n,this._stride=n*t,this._rowToUpdate=new Array(l),this._uniformMap=r,this._fetchUniformsInFragmentShader=o,this.needsUpdate=!0}resize(e){let t=M0(e,this._pixelsPerInstance);if(t===this.image.width)return;let n=this._data,s=this._channels;this._rowToUpdate.length=t;let r=n.constructor,o=new r(t*t*s),a=Math.min(n.length,o.length);o.set(new r(n.buffer,0,a)),this.dispose(),this.image={data:o,height:t,width:t},this._data=o}enqueueUpdate(e){if(this._needsUpdate=!0,!this.partialUpdate)return;let t=this.image.width/this._pixelsPerInstance,n=Math.floor(e/t);this._rowToUpdate[n]=!0}bindToProgram(e,t,n,s,r){if(!s[r])return;s[r].value=this;let o=this.getSlot(n,r);if(o===void 0)return;let a=e.properties.get(this);e.state.bindTexture(t.TEXTURE_2D,a.__webglTexture,t.TEXTURE0+o)}update(e,t,n){let s=e.properties.get(this),r=s.__version!==this.version;if(!this._needsUpdate&&!r)return;let o=this._lastWidth!==this.image.width;if(!s.__webglTexture||o)e.initTexture(this);else{let a=this.getSlot(t,n)??e.capabilities.maxTextures-1;this.partialUpdate?this.updatePartial(s,e,a):this.updateFull(s,e,a),s.__version=this.version}this._lastWidth=this.image.width,this._needsUpdate=!1}getSlot(e,t){return e[t]?.cache[0]}updateFull(e,t,n){this.updateRows(e,t,[{row:0,count:this.image.height}],n)}updatePartial(e,t,n){let s=this.getUpdateRowsInfo();s.length!==0&&(s.length>this.maxUpdateCalls?this.updateFull(e,t,n):this.updateRows(e,t,s,n),this._rowToUpdate.fill(!1))}getUpdateRowsInfo(){let e=this._rowToUpdate,t=[];for(let n=0,s=e.length;n<s;n++)if(e[n]){let r=n;for(;n<s&&e[n];n++);t.push({row:r,count:n-r})}return t}updateRows(e,t,n,s){let r=t.getContext();this._utils??=new bd(r,t.extensions,t.capabilities);let o=this._utils.convert(this.format),a=this._utils.convert(this.type),{data:c,width:l}=this.image,h=this._channels;t.state.activeTexture(r.TEXTURE0+s),t.state.bindTexture(r.TEXTURE_2D,e.__webglTexture,r.TEXTURE0+s);let u=Qe.getPrimaries(Qe.workingColorSpace),d=this.colorSpace===ri?null:Qe.getPrimaries(this.colorSpace),f=this.colorSpace===ri||u===d?r.NONE:r.BROWSER_DEFAULT_WEBGL,g=r.getParameter(r.UNPACK_FLIP_Y_WEBGL),_=r.getParameter(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL),p=r.getParameter(r.UNPACK_ALIGNMENT),m=r.getParameter(r.UNPACK_COLORSPACE_CONVERSION_WEBGL);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,this.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,this.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);for(let{count:b,row:w}of n)r.texSubImage2D(r.TEXTURE_2D,0,0,w,l,b,o,a,c,w*l*h);r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_),r.pixelStorei(r.UNPACK_ALIGNMENT,p),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,m),this.onUpdate?.(this)}setUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;r===1?this._data[e*o+s]=n:n.toArray(this._data,e*o+s)}getUniformAt(e,t,n){let{offset:s,size:r}=this._uniformMap.get(t),o=this._stride;return r===1?this._data[e*o+s]:n.fromArray(this._data,e*o+s)}getUniformsGLSL(e,t,n){let s=this.getUniformsVertexGLSL(e,t,n),r=this.getUniformsFragmentGLSL(e,t,n);return{vertex:s,fragment:r}}getUniformsVertexGLSL(e,t,n){if(this._fetchUniformsInFragmentShader)return`
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
`;return{declareVarying:t,assignVarying:n,getVarying:s}}getUniformComponents(e,t){let n=e%this._channels,s="";for(let r=0;r<t;r++)s+=yS[n+r];return s}copy(e){return super.copy(e),this.partialUpdate=e.partialUpdate,this.maxUpdateCalls=e.maxUpdateCalls,this._channels=e._channels,this._pixelsPerInstance=e._pixelsPerInstance,this._stride=e._stride,this._rowToUpdate=e._rowToUpdate,this._uniformMap=e._uniformMap,this._fetchUniformsInFragmentShader=e._fetchUniformsInFragmentShader,this}},yS=["r","g","b","a"],Ue=class extends Be{constructor(e,t,n={},s){if(!e)throw new Error('"geometry" is mandatory.');if(!t)throw new Error('"material" is mandatory.');let{allowsEuler:r,renderer:o,createEntities:a}=n;super(e,null),this.type="InstancedMesh2",this.isInstancedMesh2=!0,this.instances=null,this.instanceIndex=null,this.colorsTexture=null,this.morphTexture=null,this.boneTexture=null,this.uniformsTexture=null,this.boundingBox=null,this.boundingSphere=null,this.bvh=null,this.customSort=null,this.raycastOnlyFrustum=!1,this.LODinfo=null,this.autoUpdate=!0,this.bindMode=jr,this.bindMatrix=null,this.bindMatrixInverse=null,this.skeleton=null,this.autoUpdateBVH=!0,this.onFrustumEnter=null,this._renderer=null,this._instancesCount=0,this._instancesArrayCount=0,this._perObjectFrustumCulled=!0,this._sortObjects=!1,this._indexArrayNeedsUpdate=!1,this._useOpacity=!1,this._currentMaterial=null,this._customProgramCacheKeyBase=null,this._onBeforeCompileBase=null,this._definesBase=null,this._freeIds=[],this.isInstancedMesh=!0,this.instanceMatrix=new Ui(new Float32Array(0),16),this.instanceColor=null,this._customProgramCacheKey=()=>`ez_${!!this.colorsTexture}_${this._useOpacity}_${!!this.boneTexture}_${!!this.uniformsTexture}_${this._customProgramCacheKeyBase.call(this._currentMaterial)}`,this._onBeforeCompile=(l,h)=>{if(this._onBeforeCompileBase&&this._onBeforeCompileBase.call(this._currentMaterial,l,h),l.defines={...l.defines},l.defines.USE_INSTANCING_INDIRECT="",l.uniforms.matricesTexture={value:this.matricesTexture},this.uniformsTexture){l.uniforms.uniformsTexture={value:this.uniformsTexture};let{vertex:u,fragment:d}=this.uniformsTexture.getUniformsGLSL("uniformsTexture","instanceIndex","uint");l.vertexShader=l.vertexShader.replace("void main() {",u),l.fragmentShader=l.fragmentShader.replace("void main() {",d)}this.colorsTexture&&l.fragmentShader.includes("#include <color_pars_fragment>")&&(l.defines.USE_INSTANCING_COLOR_INDIRECT="",l.uniforms.colorsTexture={value:this.colorsTexture},l.vertexShader=l.vertexShader.replace("<color_vertex>","<instanced_color_vertex>"),l.vertexColors&&(l.defines.USE_VERTEX_COLOR=""),l.defines.USE_COLOR_ALPHA=""),this.boneTexture&&(l.defines.USE_SKINNING="",l.defines.USE_INSTANCING_SKINNING="",l.uniforms.bindMatrix={value:this.bindMatrix},l.uniforms.bindMatrixInverse={value:this.bindMatrixInverse},l.uniforms.bonesPerInstance={value:this.skeleton.bones.length},l.uniforms.boneTexture={value:this.boneTexture})};let c=n.capacity>0?n.capacity:vS;this._renderer=o,this._capacity=c,this._parentLOD=s,this._geometry=e,this.material=t,this._allowsEuler=r??!1,this._tempInstance=new xh(this,-1,r),this.availabilityArray=s?.availabilityArray??new Array(c*2),this._createEntities=a,this.initLastRenderInfo(),this.initIndexAttribute(),this.initMatricesTexture()}get capacity(){return this._capacity}get instancesCount(){return this._instancesCount}get perObjectFrustumCulled(){return this._perObjectFrustumCulled}set perObjectFrustumCulled(e){this._perObjectFrustumCulled=e,this._indexArrayNeedsUpdate=!0}get sortObjects(){return this._sortObjects}set sortObjects(e){this._sortObjects=e,this._indexArrayNeedsUpdate=!0}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.patchGeometry(e)}onBeforeShadow(e,t,n,s,r,o,a){this.patchMaterial(e,o),this.updateTextures(e,o);let c=e.info.render.frame;this.instanceIndex&&this.autoUpdate&&!this.frustumCullingAlreadyPerformed(c,n,s)&&this.performFrustumCulling(s,n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,o))}onBeforeRender(e,t,n,s,r,o){if(this.patchMaterial(e,r),this.updateTextures(e,r),!this.instanceIndex){this._renderer=e;return}let a=e.info.render.frame;this.autoUpdate&&!this.frustumCullingAlreadyPerformed(a,n,null)&&this.performFrustumCulling(n),this.count!==0&&(this.instanceIndex.update(this._renderer,this.count),this.bindTextures(e,r))}onAfterShadow(e,t,n,s,r,o,a){this.unpatchMaterial(e,o)}onAfterRender(e,t,n,s,r,o){this.unpatchMaterial(e,r),!(this.instanceIndex||o&&!this.isLastGroup(o.materialIndex))&&this.initIndexAttribute()}updateTextures(e,t){let n=e.properties.get(t);this.matricesTexture.update(e,n,"matricesTexture"),this.colorsTexture?.update(e,n,"colorsTexture"),this.uniformsTexture?.update(e,n,"uniformsTexture"),this.boneTexture?.update(e,n,"boneTexture")}bindTextures(e,t){let n=e.properties.get(t),s=n.uniforms;if(!s)return;let r=n.currentProgram,o=r?.program;if(!o)return;let a=e.getContext(),c=r.getUniforms().map,l=a.getParameter(a.CURRENT_PROGRAM);e.state.useProgram(o),this.matricesTexture.bindToProgram(e,a,c,s,"matricesTexture"),this.colorsTexture?.bindToProgram(e,a,c,s,"colorsTexture"),this.uniformsTexture?.bindToProgram(e,a,c,s,"uniformsTexture"),this.boneTexture?.bindToProgram(e,a,c,s,"boneTexture"),e.state.useProgram(l)}isLastGroup(e){let t=this.material;for(let n=t.length-1;n>=e;n--)if(t[n].visible)return n===e}initIndexAttribute(){if(!this._renderer){this.count=0;return}let e=this._renderer.getContext(),t=this._capacity,n=new Uint32Array(t);for(let s=0;s<t;s++)n[s]=s;this.instanceIndex=new Pd(e,e.UNSIGNED_INT,1,4,n),this._geometry.setAttribute("instanceIndex",this.instanceIndex)}initLastRenderInfo(){this._parentLOD||(this._lastRenderInfo={frame:-1,camera:null,shadowCamera:null})}initMatricesTexture(){this._parentLOD||(this.matricesTexture=new Ro(Float32Array,4,4,this._capacity))}initColorsTexture(){this._parentLOD||(this.colorsTexture=new Ro(Float32Array,4,1,this._capacity),this.colorsTexture.colorSpace=Qe.workingColorSpace,this.colorsTexture._data.fill(1),this.materialsNeedsUpdate())}materialsNeedsUpdate(){if(this.material.isMaterial){this.material.needsUpdate=!0;return}for(let e of this.material)e.needsUpdate=!0}patchGeometry(e){let t=e.getAttribute("instanceIndex");if(t){if(t===this.instanceIndex)return;console.warn("The geometry has been cloned because it was already used."),e=e.clone(),e.deleteAttribute("instanceIndex")}this.instanceIndex&&e.setAttribute("instanceIndex",this.instanceIndex)}patchMaterial(e,t){this._currentMaterial=t,this._customProgramCacheKeyBase=t.customProgramCacheKey,this._onBeforeCompileBase=t.onBeforeCompile,this._definesBase=t.defines,t.customProgramCacheKey=this._customProgramCacheKey,t.onBeforeCompile=this._onBeforeCompile,gS(this,e,t)}unpatchMaterial(e,t){this._currentMaterial=null,xS(e),t.defines=this._definesBase,t.onBeforeCompile=this._onBeforeCompileBase,t.customProgramCacheKey=this._customProgramCacheKeyBase,this._onBeforeCompileBase=null,this._customProgramCacheKeyBase=null,this._definesBase=null}computeBVH(e={}){this.bvh||(this.bvh=new Id(this,e.margin,e.getBBoxFromBSphere,e.accurateCulling)),this.bvh.clear(),this.bvh.create()}disposeBVH(){this.bvh=null}setMatrixAt(e,t){if(t.toArray(this.matricesTexture._data,e*16),this.instances){let n=this.instances[e];t.decompose(n.position,n.quaternion,n.scale)}this.matricesTexture.enqueueUpdate(e),this.bvh&&this.autoUpdateBVH&&this.bvh.move(e)}getMatrixAt(e,t=MS){return t.fromArray(this.matricesTexture._data,e*16)}getPositionAt(e,t=bS){let n=e*16,s=this.matricesTexture._data;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],t}getPositionAndMaxScaleOnAxisAt(e,t){let n=e*16,s=this.matricesTexture._data,r=s[n+0],o=s[n+1],a=s[n+2],c=r*r+o*o+a*a,l=s[n+4],h=s[n+5],u=s[n+6],d=l*l+h*h+u*u,f=s[n+8],g=s[n+9],_=s[n+10],p=f*f+g*g+_*_;return t.x=s[n+12],t.y=s[n+13],t.z=s[n+14],Math.sqrt(Math.max(c,d,p))}applyMatrixAtToSphere(e,t,n,s){let r=e*16,o=this.matricesTexture._data,a=o[r+0],c=o[r+1],l=o[r+2],h=o[r+3],u=o[r+4],d=o[r+5],f=o[r+6],g=o[r+7],_=o[r+8],p=o[r+9],m=o[r+10],b=o[r+11],w=o[r+12],x=o[r+13],A=o[r+14],M=o[r+15],E=t.center,y=n.x,T=n.y,P=n.z,I=1/(h*y+g*T+b*P+M);E.x=(a*y+u*T+_*P+w)*I,E.y=(c*y+d*T+p*P+x)*I,E.z=(l*y+f*T+m*P+A)*I;let L=a*a+c*c+l*l,z=u*u+d*d+f*f,X=_*_+p*p+m*m;t.radius=s*Math.sqrt(Math.max(L,z,X))}setVisibilityAt(e,t){this.availabilityArray[e*2]=t,this._indexArrayNeedsUpdate=!0}getVisibilityAt(e){return this.availabilityArray[e*2]}setActiveAt(e,t){this.availabilityArray[e*2+1]=t,this._indexArrayNeedsUpdate=!0}getActiveAt(e){return this.availabilityArray[e*2+1]}getActiveAndVisibilityAt(e){let t=e*2,n=this.availabilityArray;return n[t]&&n[t+1]}setActiveAndVisibilityAt(e,t){let n=e*2,s=this.availabilityArray;s[n]=t,s[n+1]=t,this._indexArrayNeedsUpdate=!0}setColorAt(e,t){this.colorsTexture===null&&this.initColorsTexture(),t.isColor?t.toArray(this.colorsTexture._data,e*4):g0.set(t).toArray(this.colorsTexture._data,e*4),this.colorsTexture.enqueueUpdate(e)}getColorAt(e,t=g0){return t.fromArray(this.colorsTexture._data,e*4)}setOpacityAt(e,t){this._useOpacity||(this.colorsTexture===null?this.initColorsTexture():this.materialsNeedsUpdate(),this._useOpacity=!0),this.colorsTexture._data[e*4+3]=t,this.colorsTexture.enqueueUpdate(e)}getOpacityAt(e){return this._useOpacity?this.colorsTexture._data[e*4+3]:1}copyTo(e,t){this.getMatrixAt(e,t.matrix).decompose(t.position,t.quaternion,t.scale)}computeBoundingBox(){let e=this._geometry,t=this._instancesArrayCount;this.boundingBox??=new Kt,e.boundingBox===null&&e.computeBoundingBox();let n=e.boundingBox,s=this.boundingBox;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(p0.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(p0))}computeBoundingSphere(){let e=this._geometry,t=this._instancesArrayCount;this.boundingSphere??=new cn,e.boundingSphere===null&&e.computeBoundingSphere();let n=e.boundingSphere,s=this.boundingSphere;s.makeEmpty();for(let r=0;r<t;r++)this.getActiveAt(r)&&(m0.copy(n).applyMatrix4(this.getMatrixAt(r)),s.union(m0))}clone(e){let t={capacity:this._capacity,renderer:this._renderer,allowsEuler:this._allowsEuler,createEntities:this._createEntities};return new this.constructor(this.geometry,this.material,t).copy(this,e)}copy(e,t){return super.copy(e,t),this.count=e._capacity,this._instancesCount=e._instancesCount,this._instancesArrayCount=e._instancesArrayCount,this._capacity=e._capacity,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this.matricesTexture=e.matricesTexture.clone(),this.matricesTexture.image.data=this.matricesTexture.image.data.slice(),e.colorsTexture!==null&&(this.colorsTexture=e.colorsTexture.clone(),this.colorsTexture.image.data=this.colorsTexture.image.data.slice()),e.uniformsTexture!==null&&(this.uniformsTexture=e.uniformsTexture.clone(),this.uniformsTexture.image.data=this.uniformsTexture.image.data.slice()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone(),this.morphTexture.image.data=this.morphTexture.image.data.slice()),e.boneTexture!==null&&(this.boneTexture=e.boneTexture.clone(),this.boneTexture.image.data=this.boneTexture.image.data.slice()),this}dispose(){this.dispatchEvent({type:"dispose"}),this.matricesTexture.dispose(),this.colorsTexture?.dispose(),this.morphTexture?.dispose(),this.boneTexture?.dispose(),this.uniformsTexture?.dispose()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMatrixInverse&&(this.bindMode===jr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ml?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("Unrecognized bindMode: "+this.bindMode))}},vS=1e3,p0=new Kt,m0=new cn,MS=new Ie,g0=new Me,bS=new C;Ue.prototype.resizeBuffers=function(i){let e=this._capacity;this._capacity=i;let t=Math.min(i,e);if(this.instanceIndex){let n=new Uint32Array(i);n.set(new Uint32Array(this.instanceIndex.array.buffer,0,t)),this.instanceIndex.array=n}if(this.LODinfo){for(let n of this.LODinfo.objects)if(n._capacity=i,n.instanceIndex){let s=new Uint32Array(i);s.set(new Uint32Array(n.instanceIndex.array.buffer,0,t)),n.instanceIndex.array=s}}if(this.availabilityArray.length=i*2,this.matricesTexture.resize(i),this.colorsTexture&&(this.colorsTexture.resize(i),i>e&&this.colorsTexture._data.fill(1,e*4)),this.morphTexture){let n=this.morphTexture.image.data,s=n.length/e;this.morphTexture.dispose(),this.morphTexture=new Di(new Float32Array(s*i),s,i,Vs,xn),this.morphTexture.image.data.set(n)}return this.uniformsTexture?.resize(i),this};Ue.prototype.setInstancesArrayCount=function(i){if(i<this._instancesArrayCount){let t=this.bvh;if(t)for(let n=this._instancesArrayCount-1;n>=i;n--)this.getActiveAt(n)&&t.delete(n);this._instancesArrayCount=i;return}if(i>this._capacity){let t=this._capacity+(this._capacity>>1)+512;for(;t<i;)t+=(t>>1)+512;this.resizeBuffers(t)}let e=this._instancesArrayCount;this._instancesArrayCount=i,this._createEntities&&this.createEntities(e)};function b0(i,e){return i.depth-e.depth}function S0(i,e){return e.depth-i.depth}var Ld=class{constructor(){this.array=[],this.pool=[]}push(e,t){let n=this.pool,s=this.array,r=s.length;r>=n.length&&n.push({depth:null,index:null,depthSort:null});let o=n[r];o.depth=e,o.index=t,s.push(o)}reset(){this.array.length=0}},yh=new Us,Mi=new Ld,vr=new Ie,Eo=new Ie,bh=new C,Wa=new C,Co=new C,SS=new C,vi=new cn;Ue.prototype.performFrustumCulling=function(i,e=i){let t=this._parentLOD??this,n=t.LODinfo,s;if(n){s=i!==e?n.shadowRender??n.render:n.render;for(let r of n.objects)r.count=0}else(t._perObjectFrustumCulled||t._sortObjects)&&(t.count=0);t._instancesArrayCount!==0&&(s?.levels.length>0?t.frustumCullingLOD(s,i,e):t.frustumCulling(i))};Ue.prototype.updateLastRenderInfo=function(i,e,t){let n=this._lastRenderInfo;n.frame=i,n.camera=e,n.shadowCamera=t};Ue.prototype.frustumCullingAlreadyPerformed=function(i,e,t){let n=this._lastRenderInfo;return n.frame===i&&n.camera===e&&n.shadowCamera===t?!0:(this.updateLastRenderInfo(i,e,t),!1)};Ue.prototype.frustumCulling=function(i){let e=this._sortObjects,t=this._perObjectFrustumCulled,n=this.instanceIndex.array;if(this.instanceIndex._needsUpdate=!0,!t&&!e){this.updateIndexArray();return}if(e&&(Eo.copy(this.matrixWorld).invert(),Wa.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Eo),bh.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Eo)),t?(vr.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),this.bvh?this.BVHCulling(i):this.linearCulling(i)):this.updateRenderList(),e){let s=this.customSort;s===null?Mi.array.sort(this.material?.transparent?S0:b0):s(Mi.array);let r=Mi.array,o=r.length;for(let a=0;a<o;a++)n[a]=r[a].index;this.count=o,Mi.reset()}};Ue.prototype.updateIndexArray=function(){if(!this._indexArrayNeedsUpdate)return;let i=this.instanceIndex.array,e=this._instancesArrayCount,t=0;for(let n=0;n<e;n++)this.getActiveAndVisibilityAt(n)&&(i[t++]=n);this.count=t,this._indexArrayNeedsUpdate=!1};Ue.prototype.updateRenderList=function(){let i=this._instancesArrayCount;for(let e=0;e<i;e++)if(this.getActiveAndVisibilityAt(e)){let t=this.getPositionAt(e).sub(Wa).dot(bh);Mi.push(t,e)}};Ue.prototype.BVHCulling=function(i){let e=this.instanceIndex.array,t=this._instancesArrayCount,n=this._sortObjects,s=this.onFrustumEnter,r=0;this.bvh.frustumCulling(vr,o=>{let a=o.object;if(a<t&&this.getVisibilityAt(a)&&(!s||s(a,i)))if(n){let c=this.getPositionAt(a).sub(Wa).dot(bh);Mi.push(c,a)}else e[r++]=a}),this.count=r};Ue.prototype.linearCulling=function(i){let e=this.instanceIndex.array;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let t=this._geometry.boundingSphere,n=t.radius,s=t.center,r=this._instancesArrayCount,o=s.x===0&&s.y===0&&s.z===0,a=this._sortObjects,c=this.onFrustumEnter,l=0;yh.setFromProjectionMatrix(vr);for(let h=0;h<r;h++)if(this.getActiveAndVisibilityAt(h)){if(o){let u=this.getPositionAndMaxScaleOnAxisAt(h,vi.center);vi.radius=n*u}else this.applyMatrixAtToSphere(h,vi,s,n);if(yh.intersectsSphere(vi)&&(!c||c(h,i)))if(a){let u=SS.subVectors(vi.center,Wa).dot(bh);Mi.push(u,h)}else e[l++]=h}this.count=l};Ue.prototype.frustumCullingLOD=function(i,e,t){let{count:n,levels:s}=i;for(let a=0;a<s.length;a++){if(!s[a].object.instanceIndex)return;n[a]=0,s[a].object.instanceIndex._needsUpdate=!0}let r=e===t&&this._sortObjects;vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).multiply(this.matrixWorld),Eo.copy(this.matrixWorld).invert(),Wa.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Eo),Co.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Eo);let o=i.levels.map(a=>a.object.instanceIndex.array);if(this.bvh?this.BVHCullingLOD(i,o,r,e,t):this.linearCullingLOD(i,o,r,e,t),r){let a=this.customSort,c=Mi.array,l=0,h=s[1].distance;a===null?c.sort(s[0].object.material?.transparent?S0:b0):a(c);for(let u=0,d=c.length;u<d;u++){let f=c[u];f.depth>h&&(l++,h=s[l+1]?.distance??1/0),o[l][n[l]++]=f.index}Mi.reset()}for(let a=0;a<s.length;a++){let c=s[a].object;c.count=n[a]}};Ue.prototype.BVHCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i,a=this._instancesArrayCount,c=this.onFrustumEnter;t?this.bvh.frustumCulling(vr,l=>{let h=l.object;if(h<a&&this.getVisibilityAt(h)&&(!c||c(h,n,s))){let u=this.getPositionAt(h).distanceToSquared(Co);Mi.push(u,h)}}):this.bvh.frustumCullingLOD(vr,Co,o,(l,h)=>{let u=l.object;if(u<a&&this.getVisibilityAt(u)){if(h===null){let d=this.getPositionAt(u).distanceToSquared(Co);h=this.getObjectLODIndexForDistance(o,d)}(!c||c(u,n,s,h))&&(e[h][r[h]++]=u)}})};Ue.prototype.linearCullingLOD=function(i,e,t,n,s){let{count:r,levels:o}=i;this.geometry.boundingSphere||this.geometry.computeBoundingSphere();let a=this._geometry.boundingSphere,c=a.radius,l=a.center,h=this._instancesArrayCount,u=l.x===0&&l.y===0&&l.z===0,d=this.onFrustumEnter;yh.setFromProjectionMatrix(vr);for(let f=0;f<h;f++)if(this.getActiveAndVisibilityAt(f)){if(u){let g=this.getPositionAndMaxScaleOnAxisAt(f,vi.center);vi.radius=c*g}else this.applyMatrixAtToSphere(f,vi,l,c);if(yh.intersectsSphere(vi))if(t){if(!d||d(f,n,s)){let g=vi.center.distanceToSquared(Co);Mi.push(g,f)}}else{let g=vi.center.distanceToSquared(Co),_=this.getObjectLODIndexForDistance(o,g);(!d||d(f,n,s,_))&&(e[_][r[_]++]=f)}}};Ue.prototype.clearTempInstance=function(i){let e=this._tempInstance;return e.id=i,this.clearInstance(e)};Ue.prototype.clearTempInstancePosition=function(i){let e=this._tempInstance;return e.id=i,e.position.set(0,0,0),e};Ue.prototype.clearInstance=function(i){return i.position.set(0,0,0),i.scale.set(1,1,1),i.quaternion.identity(),i};Ue.prototype.updateInstances=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstance(n);i(s,n),s.updateMatrix()}return this};Ue.prototype.updateInstancesPosition=function(i){let e=this._instancesArrayCount,t=this.instances;for(let n=0;n<e;n++){if(!this.getActiveAt(n))continue;let s=t?t[n]:this.clearTempInstancePosition(n);i(s,n),s.updateMatrixPosition()}return this};Ue.prototype.createEntities=function(i){let e=this._instancesArrayCount;if(!this.instances)this.instances=new Array(e);else if(this.instances.length<e)this.instances.length=e;else return this;let t=this.instances;for(let n=i;n<e;n++)t[n]||(t[n]=new xh(this,n,this._allowsEuler));return this};Ue.prototype.addInstances=function(i,e){!e&&this.bvh&&console.warn("InstancedMesh2: if `computeBVH()` has already been called, it is better to valorize the instances in the `onCreation` callback for better performance.");let t=this._freeIds;if(t.length>0){let r=-1,o=Math.min(t.length,i),a=t.length-o;for(let c=t.length-1;c>=a;c--){let l=t[c];l>r&&(r=l),this.addInstance(l,e)}t.length-=o,i-=o,this._instancesArrayCount=Math.max(r+1,this._instancesArrayCount)}let n=this._instancesArrayCount,s=n+i;this.setInstancesArrayCount(s);for(let r=n;r<s;r++)this.addInstance(r,e);return this};Ue.prototype.addInstance=function(i,e){this._instancesCount++,this.setActiveAndVisibilityAt(i,!0);let t=this.instances?this.clearInstance(this.instances[i]):this.clearTempInstance(i);e?(e(t,i),t.updateMatrix()):t.setMatrixIdentity(),this.bvh?.insert(i)};Ue.prototype.removeInstances=function(...i){let e=this._freeIds,t=this.bvh;for(let n of i)n<this._instancesArrayCount&&this.getActiveAt(n)&&(this.setActiveAt(n,!1),e.push(n),t?.delete(n),this._instancesCount--);for(let n=this._instancesArrayCount-1;n>=0&&!this.getActiveAt(n);n--)this._instancesArrayCount--;return this};Ue.prototype.clearInstances=function(){if(this._instancesCount=0,this._instancesArrayCount=0,this._freeIds.length=0,this.bvh?.clear(),this.LODinfo)for(let i of this.LODinfo.objects)i.count=0;return this};Ue.prototype.getObjectLODIndexForDistance=function(i,e){for(let t=i.length-1;t>0;t--){let n=i[t],s=n.distance-n.distance*n.hysteresis;if(e>=s)return t}return 0};Ue.prototype.setFirstLODDistance=function(i){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");return this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.render||(this.LODinfo.render={levels:[{distance:i,hysteresis:0,object:this}],count:[0]}),this};Ue.prototype.addLOD=function(i,e,t=0,n=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");if(!this.LODinfo?.render&&t===0)throw new Error('Cannot set distance to 0 for the first LOD. Call "setFirstLODDistance" method before use "addLOD".');return this.setFirstLODDistance(0),this.addLevel(this.LODinfo.render,i,e,t,n),this};Ue.prototype.addShadowLOD=function(i,e=0,t=0){if(this._parentLOD)throw new Error("Cannot create LOD for this InstancedMesh2.");this.LODinfo||(this.LODinfo={render:null,shadowRender:null,objects:[this]}),this.LODinfo.shadowRender||(this.LODinfo.shadowRender={levels:[],count:[]});let n=this.addLevel(this.LODinfo.shadowRender,i,null,e,t);return n.castShadow=!0,this.castShadow=!0,this};Ue.prototype.addLevel=function(i,e,t,n,s){let r=this.LODinfo.objects,o=i.levels,a,c;n=n**2;let l=r.findIndex(h=>h.geometry===e);if(l===-1){let h={capacity:this._capacity,renderer:this._renderer};c=new Ue(e,t??new Nn,h,this),c.frustumCulled=!1,this.patchLevel(c),r.push(c),this.add(c)}else c=r[l],t&&(c.material=t);for(a=0;a<o.length&&!(n<o[a].distance);a++);return o.splice(a,0,{distance:n,hysteresis:s,object:c}),i.count.push(0),c};Ue.prototype.updateLevel=function(i,e,t,n){if(!i)throw new Error("Render list is invalid.");let s=i.levels[e];if(!s)throw new Error("Cannot update an empty LOD.");if(t!=null&&!Number.isNaN(t)){let r=t**2;s.distance=r}return n!=null&&!Number.isNaN(n)&&(s.hysteresis=n),this};Ue.prototype.updateLOD=function(i,e,t){let n=this?.LODinfo?.render;if(i===0)throw new Error("Cannot change distance for LOD0. It is the main mesh and must stay at 0.");return this.updateLevel(n,i,e,t)};Ue.prototype.updateShadowLOD=function(i,e,t){return this.updateLevel(this.LODinfo?.shadowRender,i,e,t)};Ue.prototype.updateAllLevels=function(i,e,t){if(!i?.levels)throw new Error("Invalid LOD list.");let n=i.levels,s=this.LODinfo?.render===i,r=s?1:0;s&&(n[0].distance=0);let o=e?.length>0,a=[];o&&(a=s&&e[0]===0?e.slice(1,Math.min(n.length,e.length)):e.slice(0,Math.min(n.length-r,e.length)),a.every((l,h)=>{if(h>0&&l<=a[h-1])throw new Error(`LOD distances must be strictly increasing: d[${h-1}]=${a[h-1]} < d[${h}]=${l}`);return!0}));let c=o?a.length:n.length-r;for(let l=0;l<c;l++){let h=o?a[l]:void 0,u=Array.isArray(t)?t[l]:t;this.updateLevel(i,r+l,h,u)}return this};Ue.prototype.updateAllLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.render,i,e)};Ue.prototype.updateAllShadowLOD=function(i,e){return this.updateAllLevels(this.LODinfo?.shadowRender,i,e)};Ue.prototype.disposeLOD=function(i){i.geometry.dispose();let e=i.material;if(Array.isArray(e))for(let t of e)t.dispose();else e.dispose()};Ue.prototype.removeLOD=function(i,e=!0){let t=this.LODinfo,n=t?.render;if(!n?.levels)throw new Error("Invalid LOD list.");let s=n.levels.length;if(i<0||i>=s)throw new Error("Level index OOB");if(s>1&&i===0)throw new Error("Cannot remove LOD0 while others exist");let[r]=n.levels.splice(i,1);n.count?.splice?.(i,1),n.levels.length<=1&&(t.render=null);let o=r.object,a=this.LODinfo?.shadowRender;if(a?.levels&&i<a.levels.length&&(a.levels.splice(i,1),a.count?.splice?.(i,1),a.levels.length===0&&(this.LODinfo.shadowRender=null)),e&&o!==this)try{this.remove(o);let c=t.objects?.indexOf(o)??-1;c!==-1&&t.objects.splice(c,1),this.disposeLOD(o)}catch(c){console.error(c)}return this};Ue.prototype.patchLevel=function(i){Object.defineProperty(i,"renderOrder",{get(){return this._parentLOD.renderOrder}}),Object.defineProperty(i,"_lastRenderInfo",{get(){return this._parentLOD._lastRenderInfo}}),Object.defineProperty(i,"matricesTexture",{get(){return this._parentLOD.matricesTexture}}),Object.defineProperty(i,"colorsTexture",{get(){return this._parentLOD.colorsTexture}}),Object.defineProperty(i,"uniformsTexture",{get(){return this._parentLOD.uniformsTexture}}),Object.defineProperty(i,"morphTexture",{get(){return this._parentLOD.morphTexture}}),Object.defineProperty(i,"boneTexture",{get(){return this._parentLOD.boneTexture}}),Object.defineProperty(i,"skeleton",{get(){return this._parentLOD.skeleton}}),Object.defineProperty(i,"bindMatrixInverse",{get(){return this._parentLOD.bindMatrixInverse}}),Object.defineProperty(i,"bindMatrix",{get(){return this._parentLOD.bindMatrix}})};var wS=new Be;Ue.prototype.getMorphAt=function(i,e=wS){let t=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=t.length+1,r=i*s+1;for(let o=0;o<t.length;o++)t[o]=n[r+o];return e};Ue.prototype.setMorphAt=function(i,e){let t=e.morphTargetInfluences,n=t.length+1;this.morphTexture===null&&!this._parentLOD&&(this.morphTexture=new Di(new Float32Array(n*this._capacity),n,this._capacity,Vs,xn));let s=this.morphTexture.source.data.data,r=0;for(let c of t)r+=c;let o=this._geometry.morphTargetsRelative?1:1-r,a=n*i;s[a]=o,s.set(t,a+1),this.morphTexture.needsUpdate=!0};var Rd=[],vh=new Be,AS=new Ni,x0=new C,_0=new C,y0=new Ie,v0=new cn;Ue.prototype.raycast=function(i,e){if(this._parentLOD||!this.material||this._instancesArrayCount===0||!this.instanceIndex)return;vh.geometry=this._geometry,vh.material=this.material;let t=i.ray,n=i.near,s=i.far;y0.copy(this.matrixWorld).invert(),_0.setFromMatrixScale(this.matrixWorld),x0.copy(i.ray.direction).multiply(_0);let r=x0.length();i.ray=AS.copy(i.ray).applyMatrix4(y0),i.near/=r,i.far/=r,this.raycastInstances(i,e),i.ray=t,i.near=n,i.far=s};Ue.prototype.raycastInstances=function(i,e){if(this.bvh)this.bvh.raycast(i,t=>this.checkObjectIntersection(i,t,e));else{if(this.boundingSphere===null&&this.computeBoundingSphere(),v0.copy(this.boundingSphere),!i.ray.intersectsSphere(v0))return;let t=this.instanceIndex.array,n=this.raycastOnlyFrustum&&this._perObjectFrustumCulled?this.count:this._instancesArrayCount;for(let s=0;s<n;s++)this.checkObjectIntersection(i,t[s],e)}};Ue.prototype.checkObjectIntersection=function(i,e,t){if(!(e>this._instancesArrayCount||!this.getActiveAndVisibilityAt(e))){this.getMatrixAt(e,vh.matrixWorld),vh.raycast(i,Rd);for(let n of Rd)n.instanceId=e,n.object=this,t.push(n);Rd.length=0}};Ue.prototype.initSkeleton=function(i,e=!0){if(i&&this.skeleton!==i&&!this._parentLOD){let t=i.bones;if(this.skeleton=i,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boneTexture=new Ro(Float32Array,4,4*t.length,this._capacity),e)for(let n of t)n.matrixAutoUpdate=!1,n.matrixWorldAutoUpdate=!1;this.materialsNeedsUpdate()}};Ue.prototype.setBonesAt=function(i,e=!0,t){let n=this.skeleton;if(!n)throw new Error('"setBonesAt" cannot be called before "initSkeleton"');let s=n.bones,r=n.boneInverses;for(let o=0,a=s.length;o<a;o++){let c=s[o];e&&(t?.has(c.name)||c.updateMatrix(),c.matrixWorld.multiplyMatrices(c.parent.matrixWorld,c.matrix)),this.multiplyBoneMatricesAt(i,o,c.matrixWorld,r[o])}this.boneTexture.enqueueUpdate(i)};Ue.prototype.multiplyBoneMatricesAt=function(i,e,t,n){let s=(i*this.skeleton.bones.length+e)*16,r=t.elements,o=n.elements,a=this.boneTexture._data,c=r[0],l=r[4],h=r[8],u=r[12],d=r[1],f=r[5],g=r[9],_=r[13],p=r[2],m=r[6],b=r[10],w=r[14],x=r[3],A=r[7],M=r[11],E=r[15],y=o[0],T=o[4],P=o[8],I=o[12],L=o[1],z=o[5],X=o[9],B=o[13],U=o[2],k=o[6],Y=o[10],te=o[14],ne=o[3],ce=o[7],ue=o[11],Ye=o[15];a[s+0]=c*y+l*L+h*U+u*ne,a[s+4]=c*T+l*z+h*k+u*ce,a[s+8]=c*P+l*X+h*Y+u*ue,a[s+12]=c*I+l*B+h*te+u*Ye,a[s+1]=d*y+f*L+g*U+_*ne,a[s+5]=d*T+f*z+g*k+_*ce,a[s+9]=d*P+f*X+g*Y+_*ue,a[s+13]=d*I+f*B+g*te+_*Ye,a[s+2]=p*y+m*L+b*U+w*ne,a[s+6]=p*T+m*z+b*k+w*ce,a[s+10]=p*P+m*X+b*Y+w*ue,a[s+14]=p*I+m*B+b*te+w*Ye,a[s+3]=x*y+A*L+M*U+E*ne,a[s+7]=x*T+A*z+M*k+E*ce,a[s+11]=x*P+A*X+M*Y+E*ue,a[s+15]=x*I+A*B+M*te+E*Ye};Ue.prototype.getUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);return this.uniformsTexture.getUniformAt(i,e,t)};Ue.prototype.setUniformAt=function(i,e,t){if(!this.uniformsTexture)throw new Error(`Before get/set uniform, it's necessary to use "initUniformsPerInstance".`);this.uniformsTexture.setUniformAt(i,e,t),this.uniformsTexture.enqueueUpdate(i)};Ue.prototype.initUniformsPerInstance=function(i){if(!this._parentLOD){let{channels:e,pixelsPerInstance:t,uniformMap:n,fetchInFragmentShader:s}=this.getUniformSchemaResult(i);this.uniformsTexture=new Ro(Float32Array,e,t,this._capacity,n,s),this.materialsNeedsUpdate()}};Ue.prototype.getUniformSchemaResult=function(i){let e=0,t=new Map,n=[],s=i.vertex??{},r=i.fragment??{},o=!0;for(let l in s){let h=s[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u}),o=!1}for(let l in r)if(!s[l]){let h=r[l],u=this.getUniformSize(h);e+=u,n.push({name:l,type:h,size:u})}n.sort((l,h)=>h.size-l.size);let a=[];for(let{name:l,size:h,type:u}of n){let d=this.getUniformOffset(h,a);t.set(l,{offset:d,size:h,type:u})}let c=Math.ceil(e/4);return{channels:Math.min(e,4),pixelsPerInstance:c,uniformMap:t,fetchInFragmentShader:o}};Ue.prototype.getUniformOffset=function(i,e){if(i<4){for(let n=0;n<e.length;n++)if(e[n]+i<=4){let s=n*4+e[n];return e[n]+=i,s}}let t=e.length*4;for(;i>0;i-=4)e.push(i);return t};Ue.prototype.getUniformSize=function(i){switch(i){case"float":return 1;case"vec2":return 2;case"vec3":return 3;case"vec4":return 4;case"mat3":return 9;case"mat4":return 16;default:throw new Error(`Invalid uniform type: ${i}`)}};var TS=`#ifdef USE_INSTANCING_INDIRECT\r
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
#endif`,ES=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  uniform highp sampler2D colorsTexture;

  vec4 getColorTexture() {\r
    int size = textureSize( colorsTexture, 0 ).x;\r
    int j = int( instanceIndex );\r
    int x = j % size;\r
    int y = j / size;\r
    return texelFetch( colorsTexture, ivec2( x, y ), 0 );\r
  }\r
#endif`,CS=`#ifdef USE_INSTANCING_INDIRECT\r
  mat4 instanceMatrix = getInstancedMatrix();

  #ifdef USE_INSTANCING_COLOR_INDIRECT\r
    vColor *= getColorTexture();\r
  #endif\r
#endif`,RS=`#ifdef USE_INSTANCING_COLOR_INDIRECT\r
  #ifdef USE_VERTEX_COLOR\r
    vColor = vec4( color );\r
  #else\r
    vColor = vec4( 1.0 );\r
  #endif\r
#endif`,IS=`#ifdef USE_SKINNING\r
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
#endif`;Pe.instanced_pars_vertex=TS;Pe.instanced_color_pars_vertex=ES;Pe.instanced_vertex=CS;Pe.instanced_color_vertex=RS;function Nd(i){return i.replace("#ifdef USE_INSTANCING","#if defined USE_INSTANCING || defined USE_INSTANCING_INDIRECT")}Pe.project_vertex=Nd(Pe.project_vertex);Pe.worldpos_vertex=Nd(Pe.worldpos_vertex);Pe.defaultnormal_vertex=Nd(Pe.defaultnormal_vertex);Pe.batching_pars_vertex=Pe.batching_pars_vertex.concat(`
#include <instanced_pars_vertex>`);Pe.color_pars_vertex=Pe.color_pars_vertex.concat(`
#include <instanced_color_pars_vertex>`);Pe.batching_vertex=Pe.batching_vertex.concat(`
#include <instanced_vertex>`);Pe.skinning_pars_vertex=IS;Pe.morphinstance_vertex&&(Pe.morphinstance_vertex=Pe.morphinstance_vertex.replaceAll("gl_InstanceID","instanceIndex"));function Un(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function w0(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function A0(i){let e=new Map,t=new Map,n=i.clone();return T0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function T0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)T0(i.children[n],e.children[n],t)}var Xs=class extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Sh(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sh(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Qd(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=xs.extractUrlBase(e);o=xs.resolveURL(l,this.path)}else o=xs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new uo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===P0){try{o[st.KHR_BINARY_GLTF]=new ef(e)}catch(u){s&&s(u);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new cf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:o[u]=new Bd;break;case st.KHR_DRACO_MESH_COMPRESSION:o[u]=new tf(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[u]=new nf;break;case st.KHR_MESH_QUANTIZATION:o[u]=new sf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function PS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function en(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Od=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Pn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new si(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ba(h),l.distance=u;break;case"spot":l=new Ma(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Bd=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Pn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}},zd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new qe(r,r)}return Promise.all(s)}},Vd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Gd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Hd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Nt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Wd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Xd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(r[0],r[1],r[2],Pn),Promise.all(s)}},qd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(r[0],r[1],r[2],Pn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Nt)),Promise.all(s)}},Kd=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Zd=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return en(this.parser,e,this.name)!==null?zn:null}extendMaterialParams(e,t){let n=en(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},$d=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Jd=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},jd=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Sh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Qd=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==oi.TRIANGLES&&l.mode!==oi.TRIANGLE_STRIP&&l.mode!==oi.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let _=new Ie,p=new C,m=new et,b=new C(1,1,1),w=new ha(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,x),c.SCALE&&b.fromBufferAttribute(c.SCALE,x),w.setMatrixAt(x,_.compose(p,m,b));for(let x in c)if(x==="_COLOR_0"){let A=c[x];w.instanceColor=new Ui(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Ht.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},P0="glTF",Xa=12,E0={JSON:1313821514,BIN:5130562},ef=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Xa,r=new DataView(e,Xa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===E0.JSON){let l=new Uint8Array(e,Xa+o,a);this.content=n.decode(l)}else if(c===E0.BIN){let l=Xa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=of[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=of[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Io[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},a,l,Pn,d)})})}},nf=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},sf=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},wh=class extends Oi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,b=1-p,w=m-d+u;for(let x=0;x!==a;x++){let A=o[_+x+a],M=o[_+x+c]*h,E=o[g+x+a],y=o[g+x]*h;r[x]=b*A+w*M+p*E+m*y}return r}},LS=new et,rf=class extends wh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return LS.fromArray(r).normalize().toArray(r),r}},oi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Io={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},C0={9728:jt,9729:Qt,9984:wl,9985:po,9986:gr,9987:yi},R0={33071:ei,33648:Qr,10497:Yn},Dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},of={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ws={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NS={CUBICSPLINE:void 0,LINEAR:hr,STEP:lr},Ud={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),i.DefaultMaterial}function Mr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function US(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function FS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OS(i){let e,t=i.extensions&&i.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fd(t.attributes):e=i.indices+":"+Fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Fd(i.targets[n]);return e}function Fd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function af(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function BS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zS=new Ie,cf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new _a(this.options.manager):this.textureLoader=new Sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new uo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Mr(r,a,s),Wi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(xs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Dd[s.type],a=Io[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Jt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Dd[s.type],l=Io[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,p;if(f&&f!==u){let m=Math.floor(d/f),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,w=t.cache.get(b);w||(_=new l(a,m*f,s.count*f/h),w=new oo(_,f/h),t.cache.add(b,w)),p=new ao(w,c,d%f/h,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Jt(_,c,g);if(s.sparse!==void 0){let m=Dd.SCALAR,b=Io[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new b(o[1],w,s.sparse.count*m),M=new l(o[2],x,s.sparse.count*c);a!==null&&(p=new Jt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let E=0,y=A.length;E<y;E++){let T=A[E];if(p.setX(T,M[E*c]),c>=2&&p.setY(T,M[E*c+1]),c>=3&&p.setZ(T,M[E*c+2]),c>=4&&p.setW(T,M[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=C0[d.magFilter]||Qt,h.minFilter=C0[d.minFilter]||yi,h.wrapS=R0[d.wrapS]||Yn,h.wrapT=R0[d.wrapT]||Yn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==jt&&h.minFilter!==Qt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let p=new an(_);p.needsUpdate=!0,d(p)}),t.load(xs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Wi(u,o),u.userData.mimeType=o.mimeType||BS(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fi,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new lo,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){let u=s[st.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Pn),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Nt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Sn);let h=r.alphaMode||Ud.OPAQUE;if(h===Ud.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ud.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new qe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){let u=r.emissiveFactor;a.emissive=new Me().setRGB(u[0],u[1],u[2],Pn)}return r.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(s,u,r),u})}createUniqueName(e){let t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return I0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=OS(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=I0(new Pt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?DS(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],p=o[f],m,b=l[f];if(p.mode===oi.TRIANGLES||p.mode===oi.TRIANGLE_STRIP||p.mode===oi.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new ca(_,b):new Be(_,b),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===oi.TRIANGLE_STRIP?m.geometry=Sd(m.geometry,Ba):p.mode===oi.TRIANGLE_FAN&&(m.geometry=Sd(m.geometry,Mo));else if(p.mode===oi.LINES)m=new ua(_,b);else if(p.mode===oi.LINE_STRIP)m=new dr(_,b);else if(p.mode===oi.LINE_LOOP)m=new da(_,b);else if(p.mode===oi.POINTS)m=new ls(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&FS(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Wi(m,r),p.extensions&&Mr(s,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mr(s,u[0],r),u[0];let d=new ft;r.extensions&&Mr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Xt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Bs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Ie;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new la(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,p=_.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,b=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",b)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let w=0,x=d.length;w<x;w++){let A=d[w],M=f[w],E=g[w],y=_[w],T=p[w];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let P=n._createAnimationTracks(A,M,E,y,T);if(P)for(let I=0;I<P.length;I++)m.push(P[I])}let b=new fr(r,void 0,m);return Wi(b,s),b})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,zS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new C().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new co:l.length>1?h=new ft:l.length===1?h=l[0]:h=new Ht,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Wi(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new Ie;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ft;n.name&&(r.name=s.createUniqueName(n.name)),Wi(r,n),n.extensions&&Mr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(A0(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof Ln||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ws[r.path]===Ws.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Ws[r.path]){case Ws.weights:h=ps;break;case Ws.rotation:h=ms;break;case Ws.translation:case Ws.scale:h=Fs;break;default:n.itemSize===1?h=ps:h=Fs;break}let u=s.interpolation!==void 0?NS[s.interpolation]:hr,d=this._getArrayFromAccessor(n);for(let f=0,g=c.length;f<g;f++){let _=new h(c[f]+"."+Ws[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=af(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ms?rf:wh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kS(i,e,t){let n=e.attributes,s=new Kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let h=af(Io[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=af(Io[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function I0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=of[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==Pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Wi(i,e),kS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?US(i,e.targets,t):i})}var VS=new Xs,GS=new Set(["wheel-back"]);function HS(i){let e=i.image,t=document.createElement("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(e,0,0);let s=n.getImageData(0,0,t.width,t.height).data,r=i.flipY===!0;return(o,a)=>{let c=r?1-a:a,l=Math.min(t.width-1,Math.max(0,Math.round(o*t.width-.5))),u=(Math.min(t.height-1,Math.max(0,Math.round(c*t.height-.5)))*t.width+l)*4;return[s[u],s[u+1],s[u+2]]}}function WS(i){let e=[],t=null,n=[];return i.updateMatrixWorld(!0),i.traverse(s=>{if(!s.isMesh||GS.has(s.name))return;let r=s.geometry.clone();if(r.applyMatrix4(new Ie().copy(s.matrixWorld)),r.index){let a=r.toNonIndexed();r.dispose(),e.push(a)}else e.push(r);n.push(!/wheel/i.test(s.name||""));let o=Array.isArray(s.material)?s.material[0]:s.material;o&&o.map&&!t&&(t=o.map)}),{geos:e,texture:t,bodyRanges:n}}function D0(i,e){let t=i.attributes.position,n=i.attributes.uv,s=t.count/3,r=new Array(s),o=new Float64Array(s),a=new C,c=new C,l=new C;for(let h=0;h<s;h++){let u=h*3,d=(n.getX(u)+n.getX(u+1)+n.getX(u+2))/3,f=(n.getY(u)+n.getY(u+1)+n.getY(u+2))/3;r[h]=e(d,f),a.fromBufferAttribute(t,u),c.fromBufferAttribute(t,u+1),l.fromBufferAttribute(t,u+2),c.sub(a),l.sub(a),o[h]=c.cross(l).length()*.5}return{colors:r,areas:o}}function XS(i){return(i[0]>>3)*1024+(i[1]>>3)*32+(i[2]>>3)}function U0(i,e){let{colors:t,areas:n}=D0(i,e),s=new Map,r=new Map;for(let o=0;o<t.length;o++){let a=XS(t[o]);s.set(a,(s.get(a)||0)+n[o]),r.has(a)||r.set(a,t[o])}return[...s.entries()].map(([o,a])=>({color:r.get(o),area:a})).sort((o,a)=>a.area-o.area)}function F0(i,e,t){return Math.abs(i[0]-e[0])<=t&&Math.abs(i[1]-e[1])<=t&&Math.abs(i[2]-e[2])<=t}function L0(i){let e=Math.max(i[0],i[1],i[2]),t=Math.min(i[0],i[1],i[2]);return e===0?0:(e-t)/e}function qS(i,e){let t=U0(i,e),n=[];for(let c of t){let l=n.find(h=>F0(h.rep,c.color,34));l?(l.area+=c.area,l.members.push(c.color)):n.push({rep:c.color,area:c.area,members:[c.color]})}let s=n.filter(c=>L0(c.rep)>=.22),r=s.length?s:n;r.sort((c,l)=>l.area-c.area);let o=r[0],a=n.filter(c=>c!==o&&c.area>=o.area*.25&&L0(c.rep)<.32).slice(0,1);return[o,...a]}function YS(i,e,t){let n=i.attributes.position,s=i.attributes.normal,{colors:r}=D0(i,e),o={p:[],n:[],c:[]},a={p:[],n:[],c:[]},c=Math.max(...t.map(l=>Math.max(l.rep[0],l.rep[1],l.rep[2])))||255;for(let l=0;l<r.length;l++){let h=r[l],u=t.some(f=>F0(h,f.rep,34)),d=u?o:a;for(let f=0;f<3;f++){let g=l*3+f;if(d.p.push(n.getX(g),n.getY(g),n.getZ(g)),d.n.push(s.getX(g),s.getY(g),s.getZ(g)),u){let _=Math.min(1,Math.max(h[0],h[1],h[2])/c);d.c.push(_,_,_)}else d.c.push((h[0]/255)**2.2,(h[1]/255)**2.2,(h[2]/255)**2.2)}}return{paint:o,trim:a}}function N0(i,e){if(!i.p.length)return null;let t=e.clone();return t.deleteAttribute("uv"),t.attributes.tangent&&t.deleteAttribute("tangent"),t.setAttribute("position",new $e(i.p,3)),t.setAttribute("normal",new $e(i.n,3)),t.setAttribute("color",new $e(i.c,3)),t.setIndex(null),t}async function O0(i,e){let t=await VS.loadAsync(i),{geos:n,texture:s,bodyRanges:r}=WS(t.scene);if(!s)throw new Error("no palette texture in "+i);s.image.width===void 0&&await s.image.decode?.();let o=HS(s),a=n.filter((I,L)=>r[L]),c=An(n,!1),l=An(a,!1),h=qS(l,o),u=h[0].rep,d=U0(l,o).slice(0,6).map(I=>({color:I.color,area:+I.area.toFixed(3)})),{paint:f,trim:g}=YS(c,o,h),_=N0(f,c),p=N0(g,c),m=new Kt().setFromBufferAttribute(c.attributes.position),b=new C;m.getSize(b);let w=b.x>b.z,x=w?b.x:b.z,A=e/x;for(let I of[_,p])I&&(w&&I.rotateY(Math.PI/2),I.scale(A,A,A));let M=new Kt;for(let I of[_,p])I&&(I.computeBoundingBox(),M.union(I.boundingBox));let E=-(M.min.x+M.max.x)/2,y=-M.min.y,T=-(M.min.z+M.max.z)/2;for(let I of[_,p])I&&(I.translate(E,y,T),I.computeBoundingBox());c.dispose(),l.dispose();let P=new C;(_||p).computeBoundingBox(),M.makeEmpty();for(let I of[_,p])I&&M.union(I.boundingBox);M.getSize(P);for(let I of[_,p])I&&(I.userData.shared=!0);return{paintGeo:_,trimGeo:p,width:P.x,height:P.y,length:P.z,paintColor:u,palette:d,triangles:(_?_.attributes.position.count:0)/3+(p?p.attributes.position.count:0)/3}}var Xi=[{name:"sedan",file:"sedan",len:4.55,weight:27},{name:"hatchback",file:"hatchback-sports",len:4.05,weight:21},{name:"suv",file:"suv",len:4.85,weight:19},{name:"crossover",file:"suv-luxury",len:4.7,weight:13},{name:"van",file:"van",len:4.9,weight:12},{name:"delivery",file:"delivery",len:5.25,weight:8}],Ya=[{name:"white",hex:15527664,weight:9},{name:"silver",hex:11712445,weight:7},{name:"black",hex:2303530,weight:8},{name:"grey",hex:7304572,weight:6},{name:"blue",hex:2974648,weight:11},{name:"red",hex:12791595,weight:11},{name:"navy",hex:2241628,weight:6},{name:"green",hex:3115602,weight:8},{name:"orange",hex:14710303,weight:8},{name:"teal",hex:2071208,weight:6},{name:"plum",hex:8207219,weight:4},{name:"beige",hex:14076326,weight:4},{name:"brown",hex:7031344,weight:3},{name:"yellow",hex:15712281,weight:9}],Po=[{name:"dust",label:"dusty",weight:30},{name:"grime",label:"filthy",weight:17},{name:"rust",label:"rusted",weight:14},{name:"leaves",label:"leaf-buried",weight:10},{name:"stripped",label:"stripped",weight:9},{name:"sunken",label:"half-buried",weight:9},{name:"tipped",label:"tipped-over",weight:7},{name:"flipped",label:"overturned",weight:4}],B0={dust:{hex:10984584,lo:.68,hi:.88},grime:{hex:5000261,lo:.64,hi:.84},rust:{hex:8144164,lo:.68,hi:.9},leaves:{hex:7299897,lo:.7,hi:.9},stripped:{hex:7162671,lo:.74,hi:.92},sunken:{hex:7299921,lo:.72,hi:.9},tipped:{hex:9340020,lo:.68,hi:.88},flipped:{hex:8813676,lo:.72,hi:.9}},z0=new Me,k0=new Me;function hf(i,e,t){let n=B0[e]||B0.dust;return z0.setHex(i),k0.setHex(n.hex),z0.lerp(k0,n.lo+t*(n.hi-n.lo)).getHex()}var lf=[1,1,1],KS=[.1,.112,.13],V0=[.05,.05,.055];function G0(i,e){let t=i.index?i.toNonIndexed():i,n=t.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=e[0],s[r*3+1]=e[1],s[r*3+2]=e[2];return t.setAttribute("color",new $e(s,3)),t}function Ka(i){let e=i.reduce((s,r)=>s+r.weight,0),t=[],n=0;for(let s of i)n+=s.weight/e,t.push(n);return{entries:i,cum:t}}function Za(i,e){let{entries:t,cum:n}=i;for(let s=0;s<n.length;s++)if(e<n[s])return s;return t.length-1}function qa(i,e,t,n,s,r,o){let a=new pn(i,e,t);return a.translate(n,s,r),G0(a,o)}function Ah(){let i=new Pt;return i.setAttribute("position",new $e([0,0,0,0,0,0,0,0,0],3)),i.setAttribute("normal",new $e([0,1,0,0,1,0,0,1,0],3)),i.setAttribute("color",new $e([0,0,0,0,0,0,0,0,0],3)),i}function H0(i){let e=i.height*.58,t=i.height-e;return An([qa(i.width*1.02,i.height*.18,i.length*.92,0,i.height*.09,0,V0),qa(i.width,e*.85,i.length,0,i.height*.18+e*.42,0,lf),qa(i.width*.84,t,i.length*.52,0,e+t/2,-i.length*.04,lf)],!1)}function W0(i){let e=i.height*.82;return qa(i.width,e,i.length,0,e/2,0,lf)}function X0(i){let e=i.height*.52,t=[];for(let n of[-1,1])for(let s of[-1,1]){let r=new ni(e*.43,e*.43,e*.5,6);r.rotateZ(Math.PI/2),r.translate(n*(i.width*.5-e*.27),e*.43,s*i.length*.31),t.push(G0(r,V0))}return t.push(qa(i.width*.84,i.height*.22,i.length*.42,0,i.height*.68,-i.length*.03,KS)),An(t,!1)}var Ih=12.5,uf=2.4,df={};function tt(i,e,t){let n=i+":"+(e||0)+":"+(t||0);return df[n]||(df[n]=new Ot({color:i,roughness:e===void 0?.8:e,metalness:t||0})),df[n]}function vt(i,e,t,n,s,r,o){let a=new Be(new pn(i,e,t),o);return a.position.set(n,s,r),a}function Ja(i,e,t,n,s,r,o){let a=new Be(new ni(i,i,e,o||10),r);return a.position.set(t,n,s),a}var J0=10131341,Sr=8223346,q0=2896186,j0=11569700;var Eh=13091767,ZS=4871488;var Ch=8144164,$a=6042393;function $S(i){let e=new ft;for(let o of[-1,1])e.add(vt(1,.62,4.2,o*1.35,.28,0,tt(q0,.95))),e.add(vt(1.06,.22,4.3,o*1.35,.55,0,tt($a,.95)));e.add(Ja(1.05,.34,0,.78,0,tt(Sr,.7,.3),12));let t=vt(2.5,1.9,3.4,-.2,1.9,0,tt(Ch,.9));e.add(t),e.add(vt(2.6,.2,3.5,-.2,2.92,0,tt($a,.9))),e.add(vt(1.2,1.4,1.3,1.15,1.75,1.15,tt(j0,.85))),e.add(vt(.06,1,1,1.76,1.9,1.15,tt(1316893,.9)));let n=vt(.55,.55,6.4,0,4.2,2.6,tt(Ch,.88));n.rotation.x=-.62,e.add(n);let s=vt(.42,.42,3.6,0,6.6,5.4,tt($a,.88));s.rotation.x=.95,e.add(s),e.add(Ja(.035,1.5,0,5.5,6.9,tt(q0,.8),6));let r=vt(.7,.35,.7,0,4.7,6.9,tt(Sr,.7,.35));e.add(r);for(let o=0;o<4;o++){let a=o/4*Math.PI*2+.78,c=vt(.16,1.1,.16,Math.cos(a)*.42,4.15,6.9+Math.sin(a)*.42,tt(Sr,.75,.3));c.rotation.set(Math.sin(a)*.5,0,-Math.cos(a)*.5),e.add(c)}return e.userData.blockers=[{x:0,z:0,r:3}],e.rotation.y=i()*Math.PI*2,e}function JS(i){let e=new ft,t=[Ch,$a,7037266,5919817,8016438],n=.05;for(let s=0;s<4;s++){let r=2+i()*.5,o=.55+i()*.3,a=4.2+i()*.8,c=vt(r,o,a,(i()-.5)*.7,n+o/2,(i()-.5)*.9,tt(t[i()*t.length|0],.92));if(c.rotation.set((i()-.5)*.1,i()*.5,(i()-.5)*.12),e.add(c),s>1){let l=vt(r*.8,o*.5,a*.42,(i()-.5)*.5,n+o+o*.2,(i()-.5)*.5,tt(4143924,.9));l.rotation.copy(c.rotation),e.add(l)}n+=o+.04}for(let s=0;s<2;s++){let r=new Be(new ni(.32,.32,.2,9),tt(3354667,.95));r.rotation.set(Math.PI/2,i()*3,0),r.position.set((i()-.5)*3.4,.1,(i()-.5)*3.4),e.add(r)}return e.userData.blockers=[{x:0,z:0,r:2.4}],e.rotation.y=i()*Math.PI*2,e}function jS(i){let e=new ft,t=.045;for(let a of[-1,1])for(let c of[-1,1])e.add(vt(.5,.34,.5,a*1.5,.17,c*1,tt(J0,.95)));let n=vt(3.8,2.1,2.5,0,1.4,0,tt(9276028,.9));n.rotation.z=t,e.add(n);let s=vt(4,.16,2.7,.05,2.5,0,tt(Ch,.9));s.rotation.z=t,e.add(s),e.add(vt(.06,1.5,.8,1.9,1.1,-.5,tt(1316893,.9)));let r=vt(.08,1.5,.8,1.95,1.1,.45,tt(7036748,.9));r.rotation.y=-.7,e.add(r),e.add(vt(.05,.85,1.2,1.9,1.7,.75,tt(1316893,.9))),e.add(vt(.07,.95,1.3,1.88,1.7,.75,tt(7036748,.9)));for(let a=0;a<2;a++)e.add(Ja(.3,.9,2.6+a*.75,.45,-1.5+a*.4,tt(a?$a:5919817,.93),10));let o=vt(.12,2.4,.12,-2,1.1,.6,tt(Sr,.8,.2));return o.rotation.z=-.38,e.add(o),e.userData.blockers=[{x:0,z:0,r:2.4}],e.rotation.y=i()*Math.PI*2,e}function QS(i){let e=new ft,t=tt(3814702,.95),n=tt(4867128,.93),s=[[0,0,6],[1.15,.3,5],[-.9,.9,4],[.35,-1.15,5],[-1.2,-.7,3]],r=0;for(let[a,c,l]of s)for(let h=0;h<l;h++){let u=new Be(new ho(.42,.17,6,14),r++&1?n:t);u.rotation.x=Math.PI/2,u.rotation.z=i()*1.5,u.position.set(a+(i()-.5)*.06,.19+h*.35,c+(i()-.5)*.06),e.add(u)}let o=new Be(new ho(.42,.17,6,14),t);return o.position.set(1.9,.42,-.7),o.rotation.z=.35,e.add(o),e.add(vt(2.6,.9,.1,0,.45,1.9,tt(5462111,.8))),e.userData.blockers=[{x:0,z:0,r:2.6}],e.rotation.y=i()*Math.PI*2,e}function e1(i){let e=new ft;e.add(Ja(.11,4.2,-1.4,2.1,0,tt(Sr,.45,.5))),e.add(Ja(.11,4.2,1.4,2.1,0,tt(Sr,.45,.5))),e.add(vt(3.3,.14,.14,0,4.15,0,tt(Sr,.45,.5)));let t=vt(3.2,1.5,.09,0,3.3,0,tt(i()>.5?ZS:2379903,.55));e.add(t);for(let n=0;n<3;n++)e.add(vt(2-n*.35,.17,.02,-.3+n*.1,3.75-n*.42,.06,tt(Eh,.5)));return e.add(vt(.5,.5,.02,1.25,3.3,.06,tt(Eh,.5))),e.userData.blockers=[{x:-1.4,z:0,r:.5},{x:1.4,z:0,r:.5}],e.rotation.y=i()*Math.PI*2,e}function t1(i){let e=new ft;e.add(vt(5.4,.05,3.4,0,.025,0,tt(J0,.94)));for(let n of[-1,1])e.add(vt(.24,2.3,3.4,n*2.3,1.15,0,tt(4161454,.6)));e.add(vt(5,.28,3.6,0,2.44,0,tt(Eh,.6))),e.add(vt(5.1,.14,3.7,0,2.16,0,tt(2845335,.55)));for(let n of[-1,1]){let s=new Be(new ni(.42,.42,1.9,12),tt(13660072,.95));s.position.set(n*1.2,1.15,0),e.add(s)}let t=tt(Eh,.42);for(let n=0;n<34;n++){let s=.2+i()*.34,r=new Be(new ii(s,8,6),t);r.position.set((i()-.5)*4.4,.12+i()*.7,(i()-.5)*3.2),r.scale.y=.7,e.add(r)}return e.add(vt(.7,1.1,.5,3,.55,-1.2,tt(j0,.6))),e.userData.blockers=[{x:0,z:0,r:3.1},{x:3,z:-1.2,r:.7}],e.rotation.y=i()*Math.PI*2,e}var Y0=[$S,JS,QS,e1,jS,t1],Q0=new Ot({vertexColors:!0,roughness:.78,metalness:0}),eg=new Ot({vertexColors:!0,roughness:.4,metalness:.5});Q0.userData.shared=!0;eg.userData.shared=!0;var Th=new Me;function n1(i,e){Th.copy(e);let t=i.attributes.position.count,n=new Float32Array(t*3);for(let s=0;s<t;s++)n[s*3]=Th.r,n[s*3+1]=Th.g,n[s*3+2]=Th.b;return i.setAttribute("color",new $e(n,3)),i}function i1(i){i.updateMatrixWorld(!0);let e=[],t=[];i.traverse(s=>{if(!s.isMesh)return;let r=s.geometry.clone();r.applyMatrix4(s.matrixWorld);for(let o of["uv","uv1","uv2","tangent"])r.attributes[o]&&r.deleteAttribute(o);n1(r,s.material.color),(s.material.metalness>.2?t:e).push(r)});let n=new ft;e.length&&n.add(new Be(An(e,!1),Q0)),t.length&&n.add(new Be(An(t,!1),eg));for(let s of e.concat(t))s.dispose();return n}var _E=new C(0,1,0),K0=new C,br=new C,Z0=new Ie,$0=new et;function s1(i,e,t,n){br.set(0,1,0).cross(e),br.lengthSq()<1e-8&&br.set(1,0,0).cross(e),br.normalize(),$0.setFromAxisAngle(e,n),br.applyQuaternion($0).normalize(),K0.crossVectors(e,br),Z0.makeBasis(K0,e,br),i.quaternion.setFromRotationMatrix(Z0),i.position.copy(e).multiplyScalar(t)}function tg(i,e,t){let n=new ft,s=Un(t^4003771),r=[],o=[],a=new C;return i.forEach((c,l)=>{let h=Y0[l%Y0.length],u=new ft,d=h(s),f=i1(d);f.scale.setScalar(uf),u.add(f),s1(u,c.c,e-.35,s()*Math.PI*2),n.add(u),r.push({dir:c.c.clone(),cos:Math.cos(Ih/e)});let g=d.userData.blockers||[{x:0,z:0,r:3}];for(let _ of g){a.set(_.x,0,_.z).applyEuler(d.rotation).multiplyScalar(uf).applyQuaternion(u.quaternion).add(u.position);let p=_.r*uf/e;o.push({dir:a.clone().normalize(),cos:Math.cos(p),sin:Math.sin(p)})}}),{group:n,clearings:r,blockers:o}}function _s(i,e){let t=i.index?i.toNonIndexed():i,n=new Me(e),s=t.attributes.position.count,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=n.r,r[o*3+1]=n.g,r[o*3+2]=n.b;return t.setAttribute("color",new $e(r,3)),t}var ff=[7290658,8144164,5919817,4867132,7037266,3946547];function Rh(i,e){return e[i()*e.length|0]}function r1(i){let e=[];for(let t=0;t<9;t++){let n=.5+i()*1.1,s=.4+i()*.9,r=new pn(n,.05+i()*.07,s);r.rotateX((i()-.5)*1.5),r.rotateY(i()*6.283),r.rotateZ((i()-.5)*1.5),r.translate((i()-.5)*1.1,.08+t*.1+i()*.12,(i()-.5)*1.1),e.push(_s(r,Rh(i,ff)))}for(let t=0;t<2;t++){let n=.9+i()*.8,s=new ni(.045,.045,n,5);s.rotateZ(1.1+i()*.5),s.rotateY(i()*6.283),s.translate((i()-.5)*.8,.35+i()*.4,(i()-.5)*.8),e.push(_s(s,5130048))}return An(e,!1)}function o1(i){let e=[],t=2+(i()*2|0);for(let n=0;n<t;n++){let s=.85+i()*.2,r=new ni(.31,.31,s,10);n>0&&i()<.55?(r.rotateZ(Math.PI/2),r.rotateY(i()*6.283),r.translate((i()-.5)*1.5,.31,(i()-.5)*1.5)):r.translate((i()-.5)*1.3,s/2,(i()-.5)*1.3),e.push(_s(r,Rh(i,[7290658,5919817,4867132,8144164])))}return An(e,!1)}function a1(i){let e=[],t=2+i()*.9,n=.12+i()*.3,s=new pn(.13,t,.13);if(s.rotateZ(n),s.translate(0,t/2,0),e.push(_s(s,6248008)),i()<.75){let r=new pn(1.5+i()*.8,.09,.06);r.rotateZ(-.25-i()*.5),r.rotateY(i()*6.283),r.translate(.35,t*(.5+i()*.3),0),e.push(_s(r,7290658))}return An(e,!1)}function c1(i){let e=[],t=new pn(.9,.06,.62);t.rotateY(i()*6.283),t.rotateX((i()-.5)*.3),t.translate((i()-.5)*.9,.05,(i()-.5)*.9),e.push(_s(t,Rh(i,ff)));let n=new pn(1.15,.09,.14);n.rotateY(i()*6.283),n.translate((i()-.5)*1.2,.06,(i()-.5)*1.2),e.push(_s(n,7037266));let s=new ni(.28,.28,.16,9);s.rotateX(Math.PI/2),s.rotateZ(i()*6.283),s.translate((i()-.5)*1.3,.08,(i()-.5)*1.3),e.push(_s(s,3354667));for(let r=0;r<5;r++){let o=new pn(.1+i()*.18,.05,.1+i()*.16);o.rotateY(i()*6.283),o.rotateX((i()-.5)*.5),o.translate((i()-.5)*2,.04,(i()-.5)*2),e.push(_s(o,Rh(i,ff)))}return An(e,!1)}var l1={heap:r1,drums:o1,post:a1,parts:c1},h1=[{make:"heap",height:1.6,weight:26,road:!1},{make:"parts",height:.5,weight:20,road:!1},{make:"drums",height:1.1,weight:14,road:!1},{make:"post",height:2.6,weight:12,road:!1},{file:"rocks",height:1.3,weight:10,road:!1},{file:"rocks-tall",height:2.1,weight:6,road:!1},{make:"heap",height:2.4,weight:8,road:!0},{file:"lightpost-single",height:3.8,weight:14,road:!0}],Lo=null;async function ng(){if(Lo)return Lo;let i=new Xs,e=Un(6040081);return Lo=await Promise.all(h1.map(async t=>{let n,s=null;if(t.make)n=l1[t.make](e);else{let l=await i.loadAsync("assets/models/props/"+t.file+".glb"),h=[];l.scene.updateMatrixWorld(!0),l.scene.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.index?u.geometry.toNonIndexed():u.geometry.clone();d.applyMatrix4(u.matrixWorld);for(let g of["uv1","uv2","tangent"])d.attributes[g]&&d.deleteAttribute(g);h.push(d);let f=Array.isArray(u.material)?u.material[0]:u.material;f&&f.map&&!s&&(s=f.map)}),n=An(h,!1);for(let u of h)u.dispose()}n.computeBoundingBox();let r=n.boundingBox,o=t.height/Math.max(1e-6,r.max.y-r.min.y);n.scale(o,o,o),n.computeBoundingBox();let a=n.boundingBox;n.translate(-(a.min.x+a.max.x)/2,-a.min.y,-(a.min.z+a.max.z)/2),n.userData.shared=!0,s&&(s.colorSpace=Nt,s.userData.shared=!0);let c=new ds(t.make?{vertexColors:!0}:{map:s,color:9341568});return c.userData.shared=!0,{...t,geo:n,material:c}})),Lo}function ig(){if(!Lo)throw new Error("call loadScatterKit() first");return Lo}var wr=1.15,lg=2.45;function u1(i){return Math.sqrt(i*lg/(4*Math.PI))}var d1=[147,135,99],f1=[156,144,108],sg=[94,95,96],rg=[143,139,129],p1=[168,161,128],og=[[74,68,60],[116,62,32],[46,43,39],[138,132,118],[95,56,30],[58,55,49]],qs=null;async function hg(){return qs||(qs={cars:await Promise.all(Xi.map(e=>O0("assets/models/"+e.file+".glb",wr)))},qs)}function ag(i,e,t){let n=i+.5,s=Math.acos(1-2*n/e),r=Math.PI*(1+Math.sqrt(5))*n;return t.set(Math.cos(r)*Math.sin(s),Math.cos(s),Math.sin(r)*Math.sin(s))}function m1(i,e){let t=Un(i^3119643),n=[];for(let r=0;r<9;r++){let o=new C(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(4+t()*4.4)/e;n.push({n:o,half:Math.sin(a),edge:Math.sin(a*.88),line:Math.sin(a*.06)})}let s=[];for(let r=0;r<9;r++){let o=new C(t()*2-1,t()*2-1,t()*2-1).normalize(),a=(Ih+4.5+t()*8)/e;s.push({c:o,cos:Math.cos(a),rim:Math.cos(a*.94)})}return{roads:n,yards:s}}function g1(i){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d"),s=Un(i),r=(h,u,d)=>{n.fillStyle="#808080",n.fillRect(0,0,256,256),n.globalCompositeOperation="lighter";for(let f=0;f<h;f++){let g=s()*256,_=s()*256,p=u+s()*(d-u),m=s()<.5;for(let b=-1;b<=1;b++)for(let w=-1;w<=1;w++){let x=n.createRadialGradient(g+b*256,_+w*256,0,g+b*256,_+w*256,p),A=m?.34:0;if(x.addColorStop(0,"rgba(255,255,255,"+(m?.34:0)+")"),x.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=x,n.beginPath(),n.arc(g+b*256,_+w*256,p,0,Math.PI*2),n.fill(),!m){n.globalCompositeOperation="multiply";let M=n.createRadialGradient(g+b*256,_+w*256,0,g+b*256,_+w*256,p);M.addColorStop(0,"rgba(90,90,90,0.55)"),M.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=M,n.beginPath(),n.arc(g+b*256,_+w*256,p,0,Math.PI*2),n.fill(),n.globalCompositeOperation="lighter"}}}return n.globalCompositeOperation="source-over",n.getImageData(0,0,256,256)},o=r(26,26,78),a=r(90,7,24),c=n.createImageData(256,256);for(let h=0;h<256*256;h++)c.data[h*4]=o.data[h*4],c.data[h*4+1]=a.data[h*4],c.data[h*4+2]=0,c.data[h*4+3]=255;n.putImageData(c,0,0);let l=new hs(t);return l.wrapS=Yn,l.wrapT=Yn,l}var pf=null,x1=`
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
vec2 ruvB = vec2( rp.x + rp.z, rp.y * 0.45 ) * 2.30;
float nBig = texture2D( rustMap, ruvA ).r;
float nFine = texture2D( rustMap, ruvB ).g;
float mRust = smoothstep( 0.60, 0.95, nBig ) * rustAmt * ( 0.55 + 0.45 * nBig );
float mPale = smoothstep( 0.60, 0.94, nFine ) * rustAmt * 0.45;
vec3 rustCol = vec3( 0.245, 0.100, 0.046 );
vec3 paleCol = diffuseColor.rgb * 1.55 + 0.10;
diffuseColor.rgb = mix( diffuseColor.rgb, rustCol, mRust );
diffuseColor.rgb = mix( diffuseColor.rgb, paleCol, mPale );
diffuseColor.rgb *= 0.90 + 0.20 * nFine;
`;function mf(i,e){return pf||(pf=g1(5955329)),i.onBeforeCompile=t=>{t.uniforms.rustMap={value:pf},t.uniforms.rustAmt={value:e},t.vertexShader=t.vertexShader.replace("#include <common>","#include <common>"+x1).replace("#include <worldpos_vertex>","#include <worldpos_vertex>"+_1),t.fragmentShader=t.fragmentShader.replace("#include <common>","#include <common>"+y1).replace("#include <color_fragment>","#include <color_fragment>"+v1)},i.customProgramCacheKey=()=>"weathered"+e,i}function M1(i){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d"),s=n.createImageData(128,128),r=Un(i),o=new Float32Array(16384);for(let c=0;c<o.length;c++)o[c]=r();for(let c=0;c<128;c++)for(let l=0;l<128;l++){let h=o[c*128+l]*.62;h+=o[c*3%128*128+l*3%128]*.38;let u=Math.round(40+h*215),d=(c*128+l)*4;s.data[d]=u,s.data[d+1]=u,s.data[d+2]=u,s.data[d+3]=255}n.putImageData(s,0,0);let a=new hs(t);return a.wrapS=Yn,a.wrapT=Yn,a}async function b1(i,e){let t=()=>new Promise(p=>setTimeout(p,0)),r=document.createElement("canvas");r.width=4096,r.height=2048;let o=r.getContext("2d"),a=o.createImageData(4096,2048),c=a.data,{roads:l,yards:h}=i,u=Un(e^8133973),d=new Float32Array(4096);for(let p=0;p<d.length;p++)d[p]=u()*2-1;let f=new C,g=0;for(let p=0;p<2048;p++){(p&255)===255&&await t();let m=(p+.5)/2048*Math.PI,b=Math.sin(m),w=Math.cos(m);for(let x=0;x<4096;x++){let A=(x+.5)/4096*Math.PI*2;f.set(-Math.cos(A)*b,w,Math.sin(A)*b);let M=null,E=!1;for(let T=0;T<h.length;T++){let P=f.dot(h[T].c);if(P>h[T].cos){M=P>h[T].rim?sg:rg,E=!0;break}}if(!E)for(let T=0;T<l.length;T++){let P=Math.abs(f.dot(l[T].n));if(P<l[T].half){P>l[T].edge?M=rg:P<l[T].line&&x+p*3>>5&1?M=p1:M=sg,E=!0;break}}if(!M){let T=(x>>3)*73+(p>>3)*151&16383;T<420?M=og[T%og.length]:M=(x>>7)+(p>>7)&1?d1:f1,((x>>5)*197+(p>>5)*419&1023)<52&&(M=[M[0]*.68|0,M[1]*.66|0,M[2]*.63|0])}let y=d[x*31+p*17&4095]*(E?4:5);c[g++]=M[0]+y,c[g++]=M[1]+y,c[g++]=M[2]+y,c[g++]=255}}o.putImageData(a,0,0);let _=new hs(r);return _.colorSpace=Nt,_.anisotropy=16,_}function S1(){let i=document.createElement("canvas");i.width=8,i.height=256;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#3a83c9"),t.addColorStop(.3,"#79aed4"),t.addColorStop(.46,"#b6c8c8"),t.addColorStop(.56,"#d8bd97"),t.addColorStop(.64,"#dcae74"),t.addColorStop(.78,"#c9975e"),t.addColorStop(1,"#b07f4c"),e.fillStyle=t,e.fillRect(0,0,8,256);let n=new hs(i);n.colorSpace=Nt;let s=new Be(new ii(1,32,24),new Wt({map:n,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1}));return s.scale.setScalar(10),s.renderOrder=-20,s.frustumCulled=!1,s}function w1(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.26,"rgba(255,255,250,1)"),t.addColorStop(.3,"rgba(255,248,226,0.60)"),t.addColorStop(.44,"rgba(255,242,208,0.14)"),t.addColorStop(1,"rgba(255,236,192,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new Be(new xi(1,1),new Wt({map:new hs(i),transparent:!0,blending:Ca,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));return n.renderOrder=-19,n.frustumCulled=!1,n}function ug(i,e){if(!qs)throw new Error("call loadToyKit() first");let t=940,n=400,s=qs.cars[0],r=new Li;r.add(new Os(15923455,9411206,1.15));let o=new si(16775406,2.6);o.position.set(2.2,3,3.2),r.add(o);let a=new si(14215416,1);a.position.set(-2.8,1.6,-1.6),r.add(a),e&&(r.environment=e,r.environmentIntensity=1);let c=14173503,l=mf(new Ot({vertexColors:!0,color:hf(c,"dust",.88),metalness:0,roughness:.88,envMapIntensity:.45}),1),h=new Ot({vertexColors:!0,color:7236189,metalness:0,roughness:.9,envMapIntensity:.3}),u=new Ot({vertexColors:!0,color:c,metalness:.55,roughness:.07,envMapIntensity:1.6}),d=new Ot({vertexColors:!0,metalness:.4,roughness:.18,envMapIntensity:1.3}),f=.62;for(let U of[-1,1]){let k=new ft,Y=U>0;k.add(new Be(s.paintGeo,Y?u:l)),s.trimGeo&&k.add(new Be(s.trimGeo,Y?d:h)),k.position.set(U*1.06,0,0),k.rotation.y=f,r.add(k)}let g=new Gt(28,t/n,.1,40);g.position.set(.1,.88,3.95),g.lookAt(0,.17,0),g.updateMatrixWorld();let _=new gn(t,n,{samples:4}),p=i.getRenderTarget(),m=i.getClearColor(new Me),b=i.getClearAlpha(),w=i.toneMappingExposure;i.setRenderTarget(_),i.setClearColor(15988473,1),i.toneMappingExposure=1.25,i.clear(),i.render(r,g);let x=new Uint8Array(t*n*4);i.readRenderTargetPixels(_,0,0,t,n,x),i.setRenderTarget(p),i.setClearColor(m,b),i.toneMappingExposure=w,_.dispose();let A=document.createElement("canvas");A.width=t,A.height=n;let M=A.getContext("2d"),E=M.createImageData(t,n);for(let U=0;U<n;U++){let k=(n-1-U)*t*4;E.data.set(x.subarray(k,k+t*4),U*t*4)}M.putImageData(E,0,0);let y=new C(1.06,s.height*.48,0),T=y.clone().project(g),P=(T.x*.5+.5)*t,I=(-T.y*.5+.5)*n,L=y.clone().add(new C(0,s.height*.62,0)).project(g),z=Math.abs((-L.y*.5+.5)*n-I)*2.4;M.save();let X=M.createRadialGradient(P,I,z*.2,P,I,z*2.1);X.addColorStop(0,"rgba(255, 232, 160, 0.42)"),X.addColorStop(1,"rgba(255, 232, 160, 0)"),M.fillStyle=X,M.beginPath(),M.arc(P,I,z*2.1,0,Math.PI*2),M.fill(),M.restore(),M.save(),M.shadowColor="rgba(232, 163, 12, 0.55)",M.shadowBlur=14,M.strokeStyle="rgba(255, 255, 255, 0.95)",M.lineWidth=9,M.beginPath(),M.arc(P,I,z,0,Math.PI*2),M.stroke(),M.strokeStyle="#e8a30c",M.lineWidth=5,M.beginPath(),M.arc(P,I,z,0,Math.PI*2),M.stroke(),M.restore();let B=(U,k,Y,te)=>{M.fillStyle=te,M.beginPath();for(let ne=0;ne<8;ne++){let ce=ne/8*Math.PI*2,ue=ne%2===0?Y:Y*.34;M[ne===0?"moveTo":"lineTo"](U+Math.cos(ce)*ue,k+Math.sin(ce)*ue)}M.closePath(),M.fill()};return B(P+z*1.05,I-z*1,11,"#ffd94d"),B(P-z*1.25,I-z*.5,7,"#ffffff"),B(P+z*.55,I+z*1.25,6,"#ffd94d"),M.font="800 27px ui-sans-serif, system-ui, sans-serif",M.textAlign="center",M.fillStyle="#5a626c",M.fillText("every car",t*.26,52),M.fillStyle="#1b1e24",M.fillText("one car",t*.74,52),M.font="800 17px ui-sans-serif, system-ui, sans-serif",M.fillStyle="#7b838d",M.fillText("dusty",t*.26,76),M.fillStyle="#b07f05",M.fillText("SPOTLESS",t*.74,76),A.toDataURL("image/jpeg",.93)}var cg=1500;async function dg({renderer:i,count:e,seed:t}){if(!qs)throw new Error("call loadToyKit() first");let n=qs.cars,s=u1(e),r=m1(t,s),o=()=>new Promise(D=>setTimeout(D,0)),a=Math.cos(Ih/s),c=r.yards.slice(0,8),l=new C;function h(D){for(let ee=0;ee<c.length;ee++)if(D.dot(c[ee].c)>a)return!0;return!1}function u(D){let ee=0;for(let ye=0;ye<D;ye++)h(ag(ye,D,l))&&ee++;return D-ee}let d=e+cg,f=d;for(let D=0;D<20;D++){let ee=u(f);if(ee===d)break;f+=d-ee}await o(),f+=90;let g=0,_=new Li,p=new C().setFromSphericalCoords(1,Math.PI*.3,Math.PI*.35),m=S1();_.add(m);let b=w1();_.add(b);let w=Un(t^3262877),x=new ii(1,7,5),A=[],M=new C,E=new C,y=new C,T=new C;for(let D=0;D<7;D++){M.set(w()*2-1,w()*1.6-.8,w()*2-1).normalize();let ee=s+24+w()*12;E.set(0,1,0).cross(M),E.lengthSq()<1e-6&&E.set(1,0,0).cross(M),E.normalize(),y.crossVectors(M,E);let ye=3+(w()*2|0);for(let we=0;we<ye;we++){let ze=x.clone(),Xe=2.4+w()*2.4;ze.scale(Xe,Xe*.5,Xe*.85),T.copy(M).multiplyScalar(ee+(w()-.5)*1.4).addScaledVector(E,(we-(ye-1)/2)*Xe*1.15+(w()-.5)*1.2).addScaledVector(y,(w()-.5)*2.4),ze.translate(T.x,T.y,T.z),A.push(ze)}}let P=new Be(An(A,!1),new ds({color:16777215}));P.frustumCulled=!1,_.add(P),x.dispose();for(let D of A)D.dispose();let I=new ft,L=new Pt;L.setAttribute("position",new $e([0,0,.14,0,0,-.2,1,.12,-.05],3)),L.computeVertexNormals();let z=new Wt({color:3752266,side:Sn}),X=Un(t^7847597),B=[];for(let D=0;D<3;D++){let ee=new ft,ye=new Be(L,z),we=new Be(L,z);we.scale.x=-1,ee.add(ye,we);let ze=new C(X()*2-1,X()*2-1,X()*2-1).normalize(),Xe=new C(0,1,0).cross(ze);Xe.lengthSq()<1e-6&&Xe.set(1,0,0).cross(ze),Xe.normalize();let Tt=new C().crossVectors(ze,Xe);B.push({bird:ee,left:ye,right:we,u:Xe,v:Tt,alt:s+10+X()*6,rate:.028+X()*.02,phase:X()*Math.PI*2,flap:7+X()*3}),I.add(ee)}_.add(I);let U=new C,k=new C,Y=new Ie;function te(D){P.rotation.y=D*.004;for(let ee of B){let ye=D*ee.rate+ee.phase,we=Math.cos(ye),ze=Math.sin(ye);U.copy(ee.u).multiplyScalar(we).addScaledVector(ee.v,ze).multiplyScalar(ee.alt),k.copy(ee.u).multiplyScalar(-ze).addScaledVector(ee.v,we),ee.bird.position.copy(U),Y.lookAt(U,k.add(U),U.clone().normalize()),ee.bird.quaternion.setFromRotationMatrix(Y);let Xe=Math.sin(D*ee.flap+ee.phase)*.65;ee.left.rotation.z=Xe,ee.right.rotation.z=-Xe}}let ne=new Hs(i),ce=new Li,ue=new Be(m.geometry,m.material.clone());ue.material.depthTest=!0,ue.scale.setScalar(10),ce.add(ue);let Ye=ne.fromScene(ce,0,.1,100);_.environment=Ye.texture,_.environmentIntensity=.65,ne.dispose(),ue.material.dispose();let ut=new Os(14478588,8354898,.62);_.add(ut);let je=new si(16767392,1.78);je.position.copy(p).multiplyScalar(s*4),_.add(je);let J=p.clone();function le(D){D?J.copy(D).multiplyScalar(1.45).add(p).normalize():J.copy(p),je.position.copy(J).multiplyScalar(s*4)}await o();let ie=new ds({map:await b1(r,t)}),Ge=M1(t^1175074);ie.detailMap=Ge,ie.onBeforeCompile=D=>{D.uniforms.detailMap={value:Ge},D.uniforms.detailTile={value:new qe(220,110)},D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D detailMap;
uniform vec2 detailTile;`).replace("#include <map_fragment>",`#include <map_fragment>
float dtl = texture2D( detailMap, vMapUv * detailTile ).r;
diffuseColor.rgb *= 0.82 + 0.33 * dtl;`)};let Ke=new Be(new ii(s,96,60),ie);_.add(Ke);let Oe=tg(c,s,t);_.add(Oe.group);let Rt=Un(t),nt=Ka(Xi),Mt=Ka(Ya),ht=Ka(Po),ct=new Me,Yt=new Me(6117452),Dt=255,$t=new Int32Array(Xi.length),tn=new C(0,1,0),it=new C,It=new et,F=new et,yn=Un(t^5352243),dt=0,R=0,v=0,G=[],V=new Float32Array(f*3),Z=t^10300183,ae=new C,de=new C,j=Math.sqrt(lg)*.38;async function fe(D){let ee=Un(Z);V=new Float32Array(D*3);let ye=D;for(let _t=0;_t<ye;_t++){ag(_t,ye,it),ae.set(0,1,0).cross(it),ae.lengthSq()<1e-8&&ae.set(1,0,0).cross(it),ae.normalize(),de.crossVectors(it,ae);let Vt=ee()*Math.PI*2,On=Math.sqrt(ee())*j/s;it.addScaledVector(ae,Math.cos(Vt)*On).addScaledVector(de,Math.sin(Vt)*On).normalize(),V[_t*3]=it.x,V[_t*3+1]=it.y,V[_t*3+2]=it.z}let we=[1,2,3,5,8,13,21,34,55,89,144,233,377,610,987],ze=1.16,Xe=Math.cos(ze/s),Tt=new C,xt=new C,Lt=new C;for(let _t=0;_t<8;_t++){await o();for(let Vt=0;Vt<ye;Vt++){Tt.set(V[Vt*3],V[Vt*3+1],V[Vt*3+2]);for(let On=0;On<we.length;On++){let Bn=Vt+we[On];if(Bn>=ye)continue;xt.set(V[Bn*3],V[Bn*3+1],V[Bn*3+2]);let Wo=Tt.dot(xt);if(Wo<=Xe||(Lt.copy(Tt).addScaledVector(xt,-Wo),Lt.lengthSq()<1e-12))continue;Lt.normalize();let tu=Math.acos(Math.min(1,Wo))*s,sp=(ze-tu)*.52/s;Tt.addScaledVector(Lt,sp).normalize(),xt.addScaledVector(Lt,-sp).normalize(),V[Bn*3]=xt.x,V[Bn*3+1]=xt.y,V[Bn*3+2]=xt.z}V[Vt*3]=Tt.x,V[Vt*3+1]=Tt.y,V[Vt*3+2]=Tt.z}}let sn=0;for(let _t=0;_t<ye;_t++)h(it.set(V[_t*3],V[_t*3+1],V[_t*3+2]))||sn++;return sn}g=await fe(f);for(let D=0;g<d&&D<5;D++)f+=d-g+60,g=await fe(f);let Te=Math.min(cg,Math.max(0,g-e)),me=g-e-Te,se=new Uint8Array(f),Le=new Uint8Array(f),Fe=new Uint8Array(f),We=new Float32Array(f),N=new Int32Array(f),he=new Int32Array(f),K=new Float32Array(f*3),re=new Float32Array(f*4);for(let D=0;D<f;D++){if(it.set(V[D*3],V[D*3+1],V[D*3+2]),It.setFromUnitVectors(tn,it),F.setFromAxisAngle(tn,yn()*Math.PI*2),It.multiply(F),K[D*3]=it.x*s,K[D*3+1]=it.y*s,K[D*3+2]=it.z*s,re[D*4]=It.x,re[D*4+1]=It.y,re[D*4+2]=It.z,re[D*4+3]=It.w,h(it)){se[D]=Dt;continue}if(me>0&&Math.floor(R*me/g)!==Math.floor((R+1)*me/g)){R++,se[D]=Dt;continue}if(R++,Te>0&&Math.floor(v*Te/(e+Te))!==Math.floor((v+1)*Te/(e+Te))){v++,se[D]=Dt,G.push(D);continue}v++;let ee=Za(nt,Rt());se[D]=ee,Le[D]=Za(Mt,Rt()),Fe[D]=Za(ht,Rt()),We[D]=Rt(),N[D]=hf(Ya[Le[D]].hex,Po[Fe[D]].name,We[D]),he[D]=ct.setHex(N[D]).lerp(Yt,.55).getHex(),$t[ee]++,dt++}let oe=-1;for(let D=0;D<4e3&&oe<0;D++){let ee=Rt()*f|0;se[ee]!==Dt&&Math.abs(K[ee*3+1]/s)<.74&&(oe=ee)}if(oe<0){for(let D=0;D<f;D++)if(se[D]!==Dt){oe=D;break}}let Q=new Ot({vertexColors:!0,metalness:0,roughness:.88,envMapIntensity:.45});mf(Q,1);let Ee=new Ot({vertexColors:!0,metalness:.1,roughness:.5,envMapIntensity:.7}),Ae=new Wt({color:2761496,transparent:!0,opacity:.24,depthWrite:!1}),Bt=new Ot({vertexColors:!0,metalness:0,roughness:.95,envMapIntensity:.35}),At=wr*26,Jn=wr*34,jn=wr*44,mc=wr*90,ws=[],Qi=[],es=[],$s=[],ts=new Int32Array(f).fill(-1),Js=new Int32Array(Xi.length);function ai(D,ee,ye){let we=new Ue(D,ee,{capacity:Math.max(1,ye),renderer:i});return we.frustumCulled=!1,we}let Ur=new C(0,0,1),gc=D=>{let ee=Math.imul(D^2654435769,2246822507);return ee^=ee>>>13,(Math.imul(ee,3266489909)>>>0)%1024/1024},Hn=(D,ee)=>{let ye=Math.imul(D+ee*40503^668265263,374761393);return ye^=ye>>>15,ye=Math.imul(ye,625341585),ye^=ye>>>13,(ye>>>0)%4096/4096},Fr=(D,ee,ye)=>{let we=Math.imul(D*374761393+ee*668265263+ye*2147483647,625341585);return we^=we>>>15,we=Math.imul(we^2654435769,2246822507),we^=we>>>13,(we>>>0)%4096/4096},As=new C,js=new C,Vo=new C,ci=new et,Go=new C(1,0,0),Ho=new C(0,0,1),Cn=new C,Wn=new C,S=new et,O=new et;function q(D,ee,ye){Cn.set(K[D*3],K[D*3+1],K[D*3+2]),S.set(re[D*4],re[D*4+1],re[D*4+2],re[D*4+3]);let we=7;Wn.copy(Cn).normalize();let ze=Math.round(Wn.x*we),Xe=Math.round(Wn.y*we),Tt=Math.round(Wn.z*we),xt=Fr(ze,Xe,Tt);if(As.set(ze,Xe,Tt),As.lengthSq()>1e-6){As.normalize().multiplyScalar(s).sub(Cn);let _t=As.length(),Vt=Math.max(-2.6,Math.min(2.6,(xt-.46)*2.1*_t*.16));_t>1e-4&&Cn.addScaledVector(As,Vt/_t)}let Lt=(Hn(D,1)-.5)*1.05,sn=(Hn(D,2)-.5)*1.05;if(js.copy(Go).applyQuaternion(S),Vo.copy(Ho).applyQuaternion(S),Cn.addScaledVector(js,Lt).addScaledVector(Vo,sn),ye){let _t=.74+Hn(D,7)*.42;ee.scale.set(_t,1,_t)}else{let Vt=Hn(D,3)<.14?.3:.085;if(ci.setFromAxisAngle(Go,(Hn(D,4)-.5)*2*Vt),S.multiply(ci),ci.setFromAxisAngle(Ho,(Hn(D,5)-.5)*2*Vt),S.multiply(ci),xt>.62){let Bn=Hn(D,8);if(Bn<.22){let Wo=n[se[D]],tu=Bn<.07?2:1;Wn.copy(Cn).normalize(),Cn.addScaledVector(Wn,Wo.height*(.78*tu)),ci.setFromAxisAngle(Go,(Hn(D,9)-.5)*.44),S.multiply(ci),ci.setFromAxisAngle(Ho,(Hn(D,10)-.5)*.44),S.multiply(ci)}}let On=Hn(D,6);if(On<.2){let Bn=.52+On/.2*.26;ee.scale.set(1+(1-Bn)*.42,Bn,1+(1-Bn)*.22)}else ee.scale.set(1,1,1)}if(!ye){let _t=n[se[D]],Vt=Po[Fe[D]].name;if(Wn.copy(Cn).normalize(),Vt==="tipped")O.setFromAxisAngle(Ur,(We[D]<.5?1:-1)*Math.PI*.5),S.multiply(O),Cn.addScaledVector(Wn,_t.width*.5);else if(Vt==="flipped"){let On=Math.PI*(.8+gc(D)*.12);O.setFromAxisAngle(Ur,We[D]<.5?On:-On),S.multiply(O),Cn.addScaledVector(Wn,_t.height*.86)}else Vt==="sunken"?Cn.addScaledVector(Wn,-_t.height*.2):Vt==="stripped"&&Cn.addScaledVector(Wn,-_t.height*.14)}ee.position.copy(Cn),ee.quaternion.copy(S)}function H(D,ee,ye,we){let ze=Js[D];for(;se[ze]!==D;)ze++;Js[D]=ze+1,q(ze,ee,we==="blot"),we==="paint"?($s[D][ye]=ze,ts[ze]=ye,ee.color=N[ze]):we==="trim"&&(ee.color=he[ze])}for(let D=0;D<Xi.length;D++){await o();let ee=n[D],ye={width:ee.width,height:ee.height,length:ee.length},we=$t[D];$s[D]=new Int32Array(Math.max(1,we));let ze=ai(ee.paintGeo,Q,we);ze.addLOD(H0(ye),Q,Jn),ze.addLOD(W0(ye),Bt,mc),ze.userData.body=D;let Xe=ai(ee.trimGeo,Ee,we);Xe.addLOD(X0(ye),Ee,At),Xe.addLOD(Ah(),Ee,jn),Xe.userData.body=D;let Tt=new xi(ye.width*1.28,ye.length*1.06);Tt.rotateX(-Math.PI/2),Tt.translate(0,.012,0);let xt=ai(Tt,Ae,we);if(xt.addLOD(Ah(),Ae,wr*24),xt.renderOrder=1,_.add(xt,ze,Xe),ws[D]=ze,Qi[D]=Xe,es[D]=xt,!!we){ze.addInstances(we,(Lt,sn)=>H(D,Lt,sn,"paint")),Js[D]=0,Xe.addInstances(we,(Lt,sn)=>H(D,Lt,sn,"trim")),Js[D]=0,xt.addInstances(we,(Lt,sn)=>H(D,Lt,sn,"blot"));for(let Lt=0;Lt<we;Lt++)Po[Fe[$s[D][Lt]]].name==="stripped"&&Xe.setVisibilityAt(Lt,!1);ze.computeBVH({margin:0}),Xe.computeBVH({margin:0})}}let W=n[se[oe]],xe=new et(re[oe*4],re[oe*4+1],re[oe*4+2],re[oe*4+3]),ve=Ya[Le[oe]].hex,ge=((ve>>16&255)*.3+(ve>>8&255)*.6+(ve&255)*.1)/255,Ce=new Me(ve);ge<.44&&Ce.lerp(new Me(16777215),.5);let Ne=new Ot({vertexColors:!0,color:Ce,metalness:.55,roughness:.07,envMapIntensity:1.6,emissive:new Me(16773586),emissiveIntensity:0}),Ze=new Ot({vertexColors:!0,metalness:.4,roughness:.18,envMapIntensity:1.3}),He=new ft;He.add(new Be(W.paintGeo,Ne)),W.trimGeo&&He.add(new Be(W.trimGeo,Ze)),He.position.set(K[oe*3],K[oe*3+1],K[oe*3+2]),He.quaternion.copy(xe),_.add(He),ws[se[oe]].setVisibilityAt(ts[oe],!1),Qi[se[oe]].setVisibilityAt(ts[oe],!1);let Re=ig(),pt=Un(t^6211489),Ut=[];for(let D=0;D<Re.length;D++)Re[D].road||Ut.push(D);let zt=Ka(Ut.map(D=>Re[D])),mt=Re.findIndex(D=>D.road),nn=Re.map(()=>[]),be=new C;for(let D of G){be.set(K[D*3]/s,K[D*3+1]/s,K[D*3+2]/s);let ee=!1;for(let ye of r.roads)if(Math.abs(be.dot(ye.n))<ye.half){ee=!0;break}if(ee){mt>=0&&nn[mt].push(D);continue}nn[Ut[Za(zt,pt())]].push(D)}let Rn=new ds;for(let D=0;D<Re.length;D++){let ee=nn[D];if(!ee.length)continue;let ye=Re[D],we=new Ue(ye.geo,ye.material,{capacity:ee.length,renderer:i});we.frustumCulled=!1,we.addLOD(Ah(),Rn,mc);let ze=(s-.12)/s;we.addInstances(ee.length,(Xe,Tt)=>{let xt=ee[Tt];Xe.position.set(K[xt*3]*ze,K[xt*3+1]*ze,K[xt*3+2]*ze),Xe.quaternion.set(re[xt*4],re[xt*4+1],re[xt*4+2],re[xt*4+3]);let Lt=.85+pt()*.3;Xe.scale.set(Lt,Lt,Lt)}),_.add(we)}let rt=900,kt=22,vn=new Float32Array(rt*3),wi=Un(t^10359283);for(let D=0;D<vn.length;D++)vn[D]=wi()*kt;let Ai=new $e(new Float32Array(rt*3),3),gt=new Pt;gt.setAttribute("position",Ai);let Ft=new ls(gt,new Fi({color:14260058,size:.135,sizeAttenuation:!0,transparent:!0,opacity:.42,depthWrite:!1}));Ft.frustumCulled=!1,Ft.renderOrder=1,_.add(Ft);let Ti=new C,bt=new C;function Ei(D,ee){return(ee||Ti).set(K[D*3],K[D*3+1],K[D*3+2])}let Ts=wr*32,xc=Math.cos(Ts/s),tp=new C(2,0,0);function hx(D){if(!(tp.distanceToSquared(D)<4/s*(4/s))){tp.copy(D);for(let ee=0;ee<Xi.length;ee++){let ye=es[ee],we=$s[ee],ze=ye.instancesCount;for(let Xe=0;Xe<ze;Xe++){let Tt=we[Xe],xt=(K[Tt*3]*D.x+K[Tt*3+1]*D.y+K[Tt*3+2]*D.z)/s;ye.setActiveAt(Xe,xt>xc)}}}}function ux(D,ee){let ye=ts[D];if(ye<0)return;let we=se[D];if(es[we].setVisibilityAt(ye,ee),D===oe){He.visible=ee;return}ws[we].setVisibilityAt(ye,ee),Qi[we].setVisibilityAt(ye,ee)}function dx(D){let ee=se[D],ye=n[ee],we=new ft,ze=D===oe,Xe=new Ot(ze?{vertexColors:!0,color:Ce.clone(),metalness:.55,roughness:.07,envMapIntensity:1.6}:{vertexColors:!0,color:N[D],metalness:0,roughness:.88,envMapIntensity:.45});if(ze||mf(Xe,1),we.add(new Be(ye.paintGeo,Xe)),ye.trimGeo){let Tt=ze?Ze.clone():Ee.clone();ze||(Tt.color=new Me(he[D])),we.add(new Be(ye.trimGeo,Tt))}return q(D,we,ze),we}function fx(D){let ee=null;for(let we=0;we<Xi.length;we++)for(let ze of[ws[we],Qi[we]]){if(!ze||ze.instancesCount===0)continue;let Xe=D.intersectObject(ze,!1);Xe.length&&(!ee||Xe[0].distance<ee.distance)&&(ee={distance:Xe[0].distance,index:$s[we][Xe[0].instanceId]})}let ye=D.intersectObject(He,!0);return ye.length&&(!ee||ye[0].distance<ee.distance)&&(ee={distance:ye[0].distance,index:oe}),ee}function np(D,ee){ts[D]<0||ws[se[D]].setColorAt(ts[D],ee)}function px(D){np(D,N[D])}function mx(D){m.position.copy(D.position);let ee=8;bt.copy(J).multiplyScalar(ee).add(D.position),b.position.copy(bt),b.quaternion.copy(D.quaternion),b.scale.setScalar(ee*.085);let ye=performance.now()*.001,we=ye*.35,ze=D.position.x,Xe=D.position.y,Tt=D.position.z,xt=Ai.array,Lt=kt/2;for(let sn=0;sn<rt;sn++){let _t=vn[sn*3]+we,Vt=vn[sn*3+1]+Math.sin(ye*.6+sn*1.7)*.4,On=vn[sn*3+2];xt[sn*3]=ze+((_t-ze)%kt+kt)%kt-Lt,xt[sn*3+1]=Xe+((Vt-Xe)%kt+kt)%kt-Lt,xt[sn*3+2]=Tt+((On-Tt)%kt+kt)%kt-Lt}Ai.needsUpdate=!0,te(ye)}function gx(D){let ee=D!=="menu";ee||le(null),ut.intensity=ee?.48:.26,je.intensity=ee?1.62:2.35,_.environmentIntensity=ee?.65:.38;for(let ye=0;ye<Xi.length;ye++)Qi[ye].visible=ee,es[ye].visible=ee;ip(ee)}function ip(D){_.fog=new ra(12948057,D?s*.26:s*.5,D?s*1.45:s*2.2);for(let ee of[Q,Ee,ie,Ae])ee.needsUpdate=!0}return{scene:_,globe:Ke,sun:je,sunDir:p,radius:s,target:oe,slots:f,count:dt,envTarget:Ye,paintMeshes:ws,trimMeshes:Qi,blotMeshes:es,hero:He,props:Oe.group,sites:c,blockers:Oe.blockers,setCarShown:ux,carCopy:dx,refreshBlots:hx,positionOf:Ei,pick:fx,setColor:np,restoreColor:px,follow:mx,setFog:ip,setMode:gx,aimSun:le,bodyOf:se,paintOf:Le,infoOf:D=>({body:Xi[se[D]],paint:Ya[Le[D]],decay:Po[Fe[D]],shade:N[D]})}}function fg(i,e,t){let n=(e?e.clone():new C(0,0,1)).normalize(),s=new C,r=new C,o=new C,a=new C,c=new C,l=new et,h=new Ie;s.set(0,1,0).cross(n),s.lengthSq()<1e-8&&s.set(1,0,0).cross(n),s.normalize();function u(){s.addScaledVector(n,-s.dot(n)),s.lengthSq()<1e-10&&(s.set(0,1,0).cross(n),s.lengthSq()<1e-10&&s.set(1,0,0).cross(n)),s.normalize(),r.crossVectors(n,s),o.copy(r).negate()}u();function d(b){l.setFromAxisAngle(n,-b),s.applyQuaternion(l),u()}t&&d(t);function f(b,w,x){c.set(0,0,0).addScaledVector(s,w).addScaledVector(o,b);let A=c.length();return A<1e-6||x===0||(c.divideScalar(A),a.crossVectors(n,c),a.lengthSq()<1e-12)?0:(a.normalize(),l.setFromAxisAngle(a,x/i),n.applyQuaternion(l).normalize(),s.applyQuaternion(l),u(),x)}let g=new C;function _(b){return g.copy(n).multiplyScalar(i+(b||0))}let p=new et;function m(){return h.makeBasis(r,n,s),p.setFromRotationMatrix(h)}return{radius:i,get position(){return n},get forward(){return s},get right(){return o},get up(){return n},turn:d,step:f,surfacePoint:_,orientation:m,teleport(b){n.copy(b).normalize(),u()}}}var bi={dist:16.36,distMin:10,distMax:28,elev:.894,elevMin:.16,elevMax:1.16,aimUp:3.4,aimAhead:7.5,shoulder:0},ja={eye:1.75,pitch:-.16,pitchMin:-1.24,pitchMax:.62};function pg(i){let e="third",t=1,n=bi.elev,s=ja.pitch,r=bi.dist,o=1,a=!0,c=new C,l=new C,h=new et,u=new et,d=new C,f=new C,g=new C,_=new C,p=new Ie;function m(x,A,M){let E=i.aspect<.85,y=E?r*1.26:r,T=E?Math.min(bi.elevMax,n+.11):n;o>.001&&(T=Xt.lerp(T,.3,o),y=Xt.lerp(y,r*1.3,o));let P=f.copy(x.position).multiplyScalar(x.radius);g.copy(x.forward),_.crossVectors(g,x.up).normalize();let I=E?bi.shoulder*.6:bi.shoulder;A.copy(P).addScaledVector(x.up,Math.sin(T)*y).addScaledVector(g,-Math.cos(T)*y).addScaledVector(_,I),d.copy(P).addScaledVector(x.up,bi.aimUp).addScaledVector(g,bi.aimAhead).addScaledVector(_,I),p.lookAt(A,d,x.up),M.setFromRotationMatrix(p)}function b(x,A,M){A.copy(x.position).multiplyScalar(x.radius).addScaledVector(x.up,ja.eye),d.copy(A).addScaledVector(x.forward,Math.cos(s)*4).addScaledVector(x.up,Math.sin(s)*4),p.lookAt(A,d,x.up),M.setFromRotationMatrix(p)}function w(x,A){o=Xt.lerp(o,a?1:0,Math.min(1,A*2));let M=A>0?Math.min(1,A*4.6):1;if(t=Xt.lerp(t,e==="first"?0:1,M),t<.0015&&(t=0),t>.9985&&(t=1),t===0){b(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}if(t===1){m(x,c,h),i.position.copy(c),i.quaternion.copy(h);return}b(x,c,h),m(x,l,u);let E=t*t*(3-2*t);i.position.lerpVectors(c,l,E),i.quaternion.slerpQuaternions(h,u,E)}return{get mode(){return e},get settled(){return t===0||t===1},toggle(){return e=e==="third"?"first":"third",e},set(x){e=x},cinema(x){a=x},look(x){e==="first"?s=Xt.clamp(s-x,ja.pitchMin,ja.pitchMax):n=Xt.clamp(n+x,bi.elevMin,bi.elevMax)},zoom(x){r=Xt.clamp(r*(1+x*.12),bi.distMin,bi.distMax)},get eyeHeight(){return e==="first"?ja.eye:Math.sin(n)*r},update:w}}function mg(i){let e=null,t=null,n=null,s=null,r=0,o=0,a=0;function c(){if(e)return;e=new wo({canvas:i,alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),e.setClearColor(0,0),e.outputColorSpace=Nt,t=new Li,n=new Gt(30,1,.05,20);let p=new Os(15398143,12893606,1.05),m=new si(16773848,2.1);m.position.set(2.2,3.4,2.6);let b=new si(14674431,.7);b.position.set(-2.6,1.2,-2.2),t.add(p,m,b);let w=new Li,x=new Be(new ii(8,12,8),new Wt({color:14675707,side:Zt}));w.add(x);let A=new Be(new ii(7.4,10,6),new Wt({color:11972763,side:Zt}));A.position.y=-7,w.add(A);let M=new Hs(e),E=M.fromScene(w,0,.1,40);t.environment=E.texture,t.environmentIntensity=1.15,M.dispose(),x.geometry.dispose(),x.material.dispose(),A.geometry.dispose(),A.material.dispose()}function l(p){r=requestAnimationFrame(l);let m=Math.min(.05,(p-a)/1e3||.016);a=p,o+=m*.7,s&&(s.rotation.y=o,s.position.y=-.16+Math.sin(o*1.7)*.02);let b=i.clientWidth||300,w=i.clientHeight||180;(i.width!==b*2||i.height!==w*2)&&e.setSize(b*2,w*2,!1),n.aspect=b/w,n.updateProjectionMatrix(),e.render(t,n)}function h(p){c(),u(),p.traverse(m=>{let b=m.material?Array.isArray(m.material)?m.material:[m.material]:[];for(let w of b)w.metalness===void 0||w.metalness<=.25||(w.metalness=.18,w.roughness=Math.max(.22,w.roughness||0),w.needsUpdate=!0)}),s=p,s.position.set(0,-.16,0),s.rotation.set(0,0,0),t.add(s),n.position.set(0,.72,2.35),n.lookAt(new C(0,.06,0)),o=.6,a=0,r=requestAnimationFrame(l)}function u(){cancelAnimationFrame(r),r=0,s&&(t.remove(s),s.traverse(p=>{p.material&&(Array.isArray(p.material)?p.material:[p.material]).forEach(m=>m.dispose())}),s=null)}function d(p){let w=document.createElement("canvas");w.width=1200,w.height=630;let x=w.getContext("2d"),A=x.createLinearGradient(0,0,0,630);A.addColorStop(0,"#6fb1e4"),A.addColorStop(.55,"#a8d2ef"),A.addColorStop(.78,"#e8f4fb"),x.fillStyle=A,x.fillRect(0,0,1200,630),x.fillStyle="rgba(255, 249, 214, 0.95)",x.beginPath(),x.arc(150,118,52,0,Math.PI*2),x.fill(),x.fillStyle="rgba(255, 249, 214, 0.35)",x.beginPath(),x.arc(150,118,78,0,Math.PI*2),x.fill(),f(x,320,96,1),f(x,960,150,.8),f(x,690,70,.62),x.fillStyle="#8b8154",x.beginPath(),x.ellipse(1200/2,950,1200*.9,430,0,0,Math.PI*2),x.fill();for(let z=0;z<46;z++){let X=z*137.5%1200,B=590-z*89.7%150*(.4+z*31%10/16);x.fillStyle=["#8a7a5f","#6d6857","#7d5a3c","#948c73","#5d5c4e"][z%5],x.save(),x.translate(X,B),x.rotate(z*47%180*.02),x.globalAlpha=.85,x.fillRect(-4,-2.4,8,4.8),x.restore()}x.globalAlpha=1;let M=500,E=330,y=1200/2-M/2,T=630/2-E/2+34;if(x.save(),x.shadowColor="rgba(16, 24, 34, 0.30)",x.shadowBlur=26,x.shadowOffsetY=10,x.fillStyle="#ffffff",_(x,y-16,T-16,M+32,E+54,18),x.fill(),x.restore(),e&&s){let z=n.aspect,X=s.rotation.y,B=s.position.y;s.rotation.y=.85,s.position.y=-.16;let U=new gn(M,E,{samples:4}),k=e.getRenderTarget(),Y=e.getClearColor(new Me),te=e.getClearAlpha();e.setRenderTarget(U),e.setClearColor(15595003,1),n.aspect=M/E,n.updateProjectionMatrix(),e.clear(),e.render(t,n);let ne=new Uint8Array(M*E*4);e.readRenderTargetPixels(U,0,0,M,E,ne),e.setRenderTarget(k),e.setClearColor(Y,te),U.dispose();let ce=document.createElement("canvas");ce.width=M,ce.height=E;let ue=ce.getContext("2d"),Ye=ue.createImageData(M,E);for(let ut=0;ut<E;ut++){let je=(E-1-ut)*M*4;Ye.data.set(ne.subarray(je,je+M*4),ut*M*4)}ue.putImageData(Ye,0,0),x.drawImage(ce,y,T,M,E),s.rotation.y=X,s.position.y=B,n.aspect=z,n.updateProjectionMatrix()}x.font='700 24px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.textAlign="center",x.fillStyle="#3c4753",x.fillText("the one somebody still washes",1200/2,T+E+26),x.lineJoin="round",x.textAlign="left",x.font='900 74px ui-sans-serif, system-ui, "Segoe UI", sans-serif';let P=x.measureText("ONE CAR ").width,I=x.measureText("SHINES").width;x.save(),x.translate(1200/2,118),x.rotate(-.026),x.lineWidth=15,x.strokeStyle="rgba(20, 28, 38, 0.62)";let L=-(P+I)/2;return x.strokeText("ONE CAR ",L,0),x.fillStyle="#ffffff",x.fillText("ONE CAR ",L,0),x.strokeText("SHINES",L+P,0),x.fillStyle="#f9c92b",x.fillText("SHINES",L+P,0),x.restore(),x.textAlign="center",x.font='800 28px ui-sans-serif, system-ui, "Segoe UI", sans-serif',x.fillStyle="#17242d",g(x,"I found it in "+p.time+" \xB7 "+p.tries+" cars tried \xB7 "+p.count+" on the planet",1200/2,596),w}function f(p,m,b,w){p.fillStyle="rgba(255, 255, 255, 0.92)",p.beginPath(),p.arc(m,b,26*w,0,Math.PI*2),p.arc(m+30*w,b+6*w,20*w,0,Math.PI*2),p.arc(m-30*w,b+8*w,18*w,0,Math.PI*2),p.fill()}function g(p,m,b,w,x){let A=p.measureText(m).width,M=parseFloat(p.font.match(/(\d+(?:\.\d+)?)px/)[1])*1.7;p.fillStyle=x||"rgba(255, 255, 255, 0.9)",_(p,b-A/2-20,w-M*.72,A+40,M,M/2),p.fill(),p.fillStyle="#17242d",p.fillText(m,b,w)}function _(p,m,b,w,x,A){p.beginPath(),p.moveTo(m+A,b),p.arcTo(m+w,b,m+w,b+x,A),p.arcTo(m+w,b+x,m,b+x,A),p.arcTo(m,b+x,m,b,A),p.arcTo(m,b,m+w,b,A),p.closePath()}return{show:h,stop:u,photo:d}}var Ar=3,qi=null,gf=null;function A1(i,e,t){let n=[];if(i.traverse(p=>{p.isMesh&&/^leg/i.test(p.name)&&n.push(p)}),!n.length)return null;let s=new C,r=new Kt,o=n.map(p=>(p.geometry.computeBoundingBox(),p.geometry.boundingBox));function a(p,m){let b=o[p],w=1/0;for(let x=0;x<8;x++)s.set(x&1?b.max.x:b.min.x,x&2?b.max.y:b.min.y,x&4?b.max.z:b.min.z).applyMatrix4(n[p].matrixWorld),s.y<w&&(w=s.y,m.copy(s));return m}let c=new C,l=1/0,h=-1/0;function u(p,m){p.setEffectiveWeight(1);for(let P of m)P.setEffectiveWeight(0);e.timeScale=1;let b=p.getClip().duration,w=90,x=b*1.15/w,A=n.map(()=>null),M=[],E=1/0,y=0;for(let P=0;P<w;P++){e.update(x),i.updateMatrixWorld(!0),r.setFromObject(i),r.min.y<l&&(l=r.min.y),r.max.y>h&&(h=r.max.y);let I=1/0,L=0;for(let z=0;z<n.length;z++)a(z,c),A[z]!==null&&c.y<I&&(I=c.y,L=(A[z]-c.z)/x),A[z]=c.z;I<1/0&&M.push(L),I<E&&(E=I,y=p.time%b/b)}return M.sort((P,I)=>P-I),{carry:M.length?M[Math.floor(M.length*.75)]:0,span:b,contact:y}}let d=u(t.walk,[t.run,t.idle]),f=u(t.run,[t.walk,t.idle]),g=h-l;if(!(g>1e-6))return null;let _=Ar/g;return{scale:_,lift:-l*_,walkCycle:d.span,runCycle:f.span,walkSpeed:Math.max(.1,d.carry*_),runSpeed:Math.max(.1,f.carry*_),phase:f.contact-d.contact,contact:d.contact}}var gg=new Wt({color:2106410,side:Zt});gg.userData.shared=!0;function xg(i,e){let t=[];i.traverse(n=>{n.isMesh&&!n.userData.outline&&!n.userData.outlined&&t.push(n)});for(let n of t){let s=new Be(n.geometry,gg);s.userData.outline=!0,n.userData.outlined=!0,n.geometry&&(n.geometry.userData.shared=!0),s.scale.setScalar(e),s.frustumCulled=!1,n.add(s)}}function _g(){let i=new ft,e=new Ot({color:15905420,roughness:.9}),t=new Ot({color:5217891,roughness:.9}),n=(r,o,a,c,l,h,u)=>{let d=new Be(new pn(r,o,a),u);return d.position.set(c,l,h),i.add(d),d};n(.66,.18,.62,0,0,.05,e);for(let r=0;r<4;r++){let o=n(.135,.16,.42,-.24+r*.16,.06,-.42,e);o.rotation.x=.55}let s=n(.15,.15,.34,.4,.04,-.1,e);return s.rotation.y=-.6,s.rotation.x=.35,n(.58,.24,.32,0,-.13,.42,t),i.scale.setScalar(.78),xg(i,1.04),i}async function yg(){return qi||(qi=await new Xs().loadAsync("assets/models/props/attendant.glb"),qi)}function vg(i){if(!qi)throw new Error("call loadHero() first");let e=new ft,t=qi.scene;e.add(t),t.scale.setScalar(1),t.position.set(0,0,0),t.updateMatrixWorld(!0);let n=new wa(t),s={};for(let U of qi.animations)s[U.name]=U;let r=n.clipAction(s.idle||qi.animations[0]),o=n.clipAction(s.walk||qi.animations[0]),a=n.clipAction(s.sprint||s.walk||qi.animations[0]);for(let U of[r,o,a])U.setLoop(Oa,1/0),U.enabled=!0,U.play();let c=null;t.traverse(U=>{!c&&U.name==="root"&&(c=U)});let l=c?c.position.clone():null,h=l?()=>{c.position.x=l.x,c.position.z=l.z}:()=>{};gf||(gf=A1(t,n,{idle:r,walk:o,run:a}));let u=gf||{scale:Ar/.9,lift:0,walkSpeed:Ar*.8,runSpeed:Ar*2,phase:0};t.scale.setScalar(u.scale),t.position.set(0,u.lift,0),r.setEffectiveWeight(1),o.setEffectiveWeight(0),a.setEffectiveWeight(0),r.time=0,o.time=0,a.time=0,n.update(0),h(),t.traverse(U=>{if(!U.isMesh)return;U.geometry&&(U.geometry.userData.shared=!0);let k=Array.isArray(U.material)?U.material:[U.material];for(let Y of k){Y.envMapIntensity=1.1,Y.userData.shared=!0;for(let te in Y){let ne=Y[te];ne&&ne.isTexture&&(ne.userData.shared=!0)}Y.needsUpdate=!0}U.frustumCulled=!1,U.castShadow=!1,U.receiveShadow=!1}),xg(t,1.07);let d={};for(let[U,k,Y]of[["pickup",s["pick-up"],!0],["yes",s["emote-yes"],!1],["no",s["emote-no"],!1]]){if(!k)continue;let te=n.clipAction(k);te.clampWhenFinished=!0,d[U]={action:te,hold:Y}}let f=null,g=0,_=!1;n.addEventListener("finished",U=>{f&&U.action===f.action&&!f.hold&&(_=!0)});function p(U,k){let Y=d[U];Y&&(f&&f.action.stop(),f=Y,_=!1,f.action.reset(),f.action.setLoop(k>1?Oa:ih,k||1),f.action.play())}function m(){f&&(_=!0)}let b=new Be(new ma(Ar*.3,20),new Wt({color:1120014,transparent:!0,opacity:.26,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.y=.06,b.renderOrder=2,e.add(b);let w=u.walkSpeed,x=u.runSpeed,A=o.getClip().duration,M=a.getClip().duration,E=Math.max(.001,w*A),y=Math.max(.001,x*M),T=u.phase||0,P=u.contact||0,I=0,L=1,z=0;function X(U,k,Y){return U===k?!1:U<k?U<Y&&Y<=k:Y>U||Y<=k}function B(U,k){let Y=k<.25?1:0;L=Xt.lerp(L,Y,Math.min(1,U*7));let te=Xt.clamp((k-w*1.05)/(x-w*1.05),0,1);I=Xt.lerp(I,te,Math.min(1,U*4)),f&&!_?g=Math.min(1,g+U*8):g>0&&(g=Math.max(0,g-U*5),g===0&&f&&(f.action.stop(),f=null,_=!1)),f&&f.action.setEffectiveWeight(g);let ne=1-g,ce=1-L;r.setEffectiveWeight(L*ne),o.setEffectiveWeight(ce*(1-I)*ne),a.setEffectiveWeight(ce*I*ne);let ue=Xt.lerp(E,y,I),Ye=Xt.clamp(k/ue,.3,3.6);n.timeScale=1,o.timeScale=A*Ye,a.timeScale=M*Ye;let ut=(o.time%A/A+T+1)%1;a.time=ut*M,n.update(U),h();let je=o.time%A/A*Math.PI*2,J=(1-L)*Math.min(1,k/Math.max(1,w));if(t.rotation.set(.1*I*J,.09*Math.sin(je+Math.PI*.5)*J,.11*Math.sin(je)*J),t.position.x=Math.sin(je)*.05*J,i){let le=o.time%A/A;L<.5&&k>1&&(X(z,le,P)||X(z,le,(P+.5)%1))&&i(I>.5),z=le}}return{object:e,radius:Ar*.12,height:Ar,fit:u,get gait(){return o.time%A/A},act:p,release:m,animate:B,get yaw(){return e.rotation.y},set yaw(U){e.rotation.y=U}}}var Af={};rp(Af,{confetti:()=>Nh,group:()=>ec,puff:()=>No,spark:()=>Dh,update:()=>wf});var Ys=420,ec=new ft,ys=new Float32Array(Ys*3),Qa=new Float32Array(Ys),Ph=new Float32Array(Ys),yf=new Float32Array(Ys),xf=0,Lh=new Pt,vf=new $e(new Float32Array(Ys*3),3),Mf=new $e(new Float32Array(Ys*3),3);Lh.setAttribute("position",vf);Lh.setAttribute("color",Mf);var vs=vf.array,_f=Mf.array;Lh.userData.shared=!0;var bg=new Fi({size:.12,vertexColors:!0,transparent:!0,opacity:.92,depthWrite:!1,sizeAttenuation:!0});bg.userData.shared=!0;var bf=new ls(Lh,bg);bf.frustumCulled=!1;bf.renderOrder=2;ec.add(bf);function Sf(i,e,t,n,s,r,o,a,c,l,h,u){let d=xf;xf=(xf+1)%Ys,vs[d*3]=i,vs[d*3+1]=e,vs[d*3+2]=t,ys[d*3]=n,ys[d*3+1]=s,ys[d*3+2]=r,_f[d*3]=o,_f[d*3+1]=a,_f[d*3+2]=c,Qa[d]=l,Ph[d]=h,yf[d]=u}var Mg=[[1,.82,.2],[.9,.3,.3],[.35,.6,1],[.4,.85,.5],[1,.62,.78],[.97,.97,.97]];function Nh(i,e){for(let t=0;t<150;t++){let n=Mg[t%Mg.length],s=Math.random()*Math.PI*2,r=1.4+Math.random()*2.6;Sf(i.x+(Math.random()-.5)*.6,i.y+(Math.random()-.5)*.6,i.z+(Math.random()-.5)*.6,Math.cos(s)*r+e.x*(2.6+Math.random()*2.4),Math.sin(s)*r*.4+e.y*(2.6+Math.random()*2.4),Math.sin(s+1.7)*r+e.z*(2.6+Math.random()*2.4),n[0],n[1],n[2],1.8+Math.random()*.9,4.2,1.1)}}function No(i,e,t){let n=t||5;for(let s=0;s<n;s++){let r=Math.random()*Math.PI*2,o=.3+Math.random()*.7,a=.55+Math.random()*.14;Sf(i.x,i.y,i.z,Math.cos(r)*o+e.x*.5,Math.sin(r*1.3)*o*.4+e.y*.5,Math.sin(r)*o+e.z*.5,a,a*.97,a*.9,.4+Math.random()*.2,-.6,0)}}function Dh(i){for(let e=0;e<2;e++)Sf(i.x+(Math.random()-.5)*.3,i.y+(Math.random()-.5)*.3,i.z+(Math.random()-.5)*.3,(Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8,1,.85+Math.random()*.15,.35,.35+Math.random()*.2,.8,0)}var Sg=6,Zn=20,wg=new xi(.1,.062);wg.userData.shared=!0;var Ag=new Wt({color:7319119,side:Sn,transparent:!0,opacity:.85});Ag.userData.shared=!0;var Tg=[],Eg=[];for(let i=0;i<Sg;i++){let e=new Be(wg,Ag);e.frustumCulled=!1,ec.add(e),Eg.push(e),Tg.push([Math.random()*Zn,Math.random()*Zn,Math.random()*Zn])}var Tr=0;function wf(i,e,t){Tr+=i;for(let n=0;n<Ys;n++){if(Qa[n]<=0)continue;if(Qa[n]-=i,Qa[n]<=0){vs[n*3]=0,vs[n*3+1]=0,vs[n*3+2]=0;continue}e&&(ys[n*3]-=e.x*Ph[n]*i,ys[n*3+1]-=e.y*Ph[n]*i,ys[n*3+2]-=e.z*Ph[n]*i);let s=yf[n]?Math.sin(Qa[n]*11+n*2.3)*yf[n]:0;vs[n*3]+=(ys[n*3]+s)*i,vs[n*3+1]+=ys[n*3+1]*i,vs[n*3+2]+=(ys[n*3+2]+s)*i}if(vf.needsUpdate=!0,Mf.needsUpdate=!0,t){let n=t.position.x,s=t.position.y,r=t.position.z,o=Zn/2,a=Tr*1.6;for(let c=0;c<Sg;c++){let l=Tg[c],h=l[0]+a,u=l[1]+Math.sin(Tr*.9+c*2.1)*1.2,d=l[2]+Math.sin(Tr*.5+c)*2,f=Eg[c];f.position.set(n+((h-n)%Zn+Zn)%Zn-o,s+((u-s)%Zn+Zn)%Zn-o,r+((d-r)%Zn+Zn)%Zn-o),f.rotation.set(Tr*2.3+c,Tr*1.7+c*2,Tr*2.9+c*3)}}}function tc(){let i=Math.random().toString(36).slice(2);return{seed:w0("fw:r:"+i)}}var Uf={};rp(Uf,{attendantPing:()=>sc,audioGraph:()=>T1,deadCar:()=>If,footstep:()=>Nf,isMuted:()=>Uh,liftWreck:()=>Rf,setMuted:()=>Cf,shineWin:()=>Pf,startAmbience:()=>Df,uiTick:()=>Lf,unlockAudio:()=>ic});var mn=null,Yi=null,Tf=null;function nc(){if(!mn){try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}mn=new(window.AudioContext||window.webkitAudioContext),Yi=mn.createGain(),Yi.gain.value=Ks?0:1;let i=mn.createGain();i.gain.value=.16;let e=mn.createDelay(.2);e.delayTime.value=.055;let t=mn.createGain();t.gain.value=.22;let n=mn.createBiquadFilter();n.type="lowpass",n.frequency.value=2600,Yi.connect(mn.destination),Yi.connect(i),i.connect(e),e.connect(t),t.connect(e),e.connect(n),n.connect(mn.destination);let s=Math.floor(mn.sampleRate*.4);Tf=mn.createBuffer(1,s,mn.sampleRate);let r=Tf.getChannelData(0);for(let o=0;o<s;o++)r[o]=Math.random()*2-1}return mn.state==="suspended"&&mn.resume(),mn}function T1(){return nc(),{ctx:mn,bus:Yi}}var Ks=!1;try{Ks=localStorage.getItem("fivewheels.muted")==="1"}catch{Ks=!1}function Uh(){return Ks}function Cf(i){Ks=!!i;try{localStorage.setItem("fivewheels.muted",Ks?"1":"0")}catch{}return Yi&&(Yi.gain.value=Ks?0:1),Ks}function ic(){let i=nc(),e=i.createGain();e.gain.value=1e-4;let t=i.createOscillator();t.connect(e).connect(i.destination),t.start(),t.stop(i.currentTime+.02)}function Ki({at:i=0,dur:e,from:t,to:n,type:s="triangle",gain:r=.1,cutoff:o=0}){let a=nc(),c=a.currentTime+i,l=a.createOscillator(),h=a.createGain();l.type=s,l.frequency.setValueAtTime(t,c),n&&n!==t&&l.frequency.exponentialRampToValueAtTime(n,c+e),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(r,c+.006),h.gain.exponentialRampToValueAtTime(1e-4,c+e);let u=l.connect(h);if(o){let d=a.createBiquadFilter();d.type="lowpass",d.frequency.value=o,h.connect(d),u=d}else u=h;u.connect(Yi),l.start(c),l.stop(c+e+.03)}function Ms({at:i=0,dur:e=.09,cutoff:t=900,gain:n=.22}){let s=nc(),r=s.currentTime+i,o=s.createBufferSource();o.buffer=Tf;let a=s.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(Math.max(120,t*.35),r+e);let c=s.createGain();c.gain.setValueAtTime(n,r),c.gain.exponentialRampToValueAtTime(1e-4,r+e),o.connect(a).connect(c).connect(Yi),o.start(r),o.stop(r+e+.02)}function Rf(){Ms({at:0,dur:.055,cutoff:1100,gain:.44}),Ms({at:.02,dur:.3,cutoff:7200,gain:.11})}function If(){Ms({at:0,dur:.16,cutoff:380,gain:.6}),Ki({at:.015,dur:.42,from:148,to:92,type:"sawtooth",gain:.11,cutoff:620}),Ms({at:.2,dur:.045,cutoff:3200,gain:.2}),Ms({at:.29,dur:.038,cutoff:3900,gain:.14}),Ms({at:.35,dur:.03,cutoff:4400,gain:.09})}function Pf(){Ms({at:0,dur:.55,cutoff:780,gain:.17});let i=(e,t,n)=>{Ki({at:e,dur:.95,from:t,to:t,type:"sine",gain:n,cutoff:7200}),Ki({at:e,dur:.45,from:t*2,to:t*2,type:"sine",gain:n*.38,cutoff:8600})};i(0,784,.24),i(.12,1046,.23),i(.26,1318,.21),i(.44,1568,.19);for(let e=0;e<6;e++)Ki({at:.52+e*.075+Math.random()*.035,dur:.11,from:2500+Math.random()*1700,to:3300+Math.random()*1900,type:"sine",gain:.085,cutoff:9500})}function Lf(i){Ms({at:0,dur:.022,cutoff:i?2600:1900,gain:i?.3:.2}),Ki({at:.004,dur:i?.075:.05,from:i?620:880,to:i?960:760,type:"sine",gain:i?.16:.1,cutoff:4200})}function sc(){Ki({at:0,dur:.13,from:720,to:720,type:"sine",gain:.34,cutoff:2200}),Ki({at:.14,dur:.2,from:960,to:960,type:"sine",gain:.32,cutoff:2200})}function Nf(i){let e=.88+Math.random()*.24;Ms({at:0,dur:i?.05:.042,cutoff:(i?1e3:720)*e,gain:i?.14:.09})}var Ef=null;function E1(){if(!mn||mn.state!=="running")return;let i=2100+Math.random()*1500;Ki({at:0,dur:.07,from:i,to:i*1.3,type:"sine",gain:.05,cutoff:6400}),Ki({at:.11,dur:.09,from:i*1.15,to:i*.85,type:"sine",gain:.04,cutoff:6400}),Math.random()<.4&&Ki({at:.26,dur:.06,from:i*1.05,to:i*1.25,type:"sine",gain:.035,cutoff:6400})}function Cg(){Ef&&setTimeout(()=>{E1(),Cg()},4e3+Math.random()*7e3)}function Df(){if(Ef)return;let i=nc(),e=Math.floor(i.sampleRate*2),t=i.createBuffer(1,e,i.sampleRate),n=t.getChannelData(0);for(let l=0;l<e;l++)n[l]=Math.random()*2-1;let s=i.createBufferSource();s.buffer=t,s.loop=!0;let r=i.createBiquadFilter();r.type="lowpass",r.frequency.value=420,r.Q.value=.6;let o=i.createGain();o.gain.value=.018;let a=i.createOscillator();a.frequency.value=.09;let c=i.createGain();c.gain.value=170,a.connect(c).connect(r.frequency),s.connect(r).connect(o).connect(Yi),s.start(),a.start(),Ef={src:s,lfo:a},Cg()}function Fh(i,e={}){typeof gtag=="function"&&gtag("event",i,e)}var hc=tc(),Rg=10,C1=22,Ig=.0032,Oh=.0058,R1=new URLSearchParams(location.search),Pg=parseInt(R1.get("cars")||"",10),Gh=Number.isFinite(Pg)?Xt.clamp(Pg,4e3,12e4):49e3,I1=["localhost","127.0.0.1",""].includes(location.hostname),En=document.getElementById("scene");function qg(i){console.error(i);let e=document.querySelector("#boot .spin"),t=document.getElementById("boot"),n=document.getElementById("boot-note");e&&(e.hidden=!0),t&&(t.hidden=!1),n&&(n.textContent="This planet will not load. The game needs WebGL \u2014 try another browser, or switch hardware acceleration back on.")}var on;try{on=new wo({canvas:En,antialias:!0,powerPreference:"high-performance"})}catch(i){throw qg(i),i}function Zf(){let i=matchMedia("(pointer: coarse)").matches;return Math.min(devicePixelRatio||1,i?1.25:1.5)}on.setPixelRatio(Zf());on.toneMapping=Ra;on.toneMappingExposure=1.05;var at=new Gt(52,1,.08,400),uc=new Ta;uc.far=170;var Lg=new qe,Ct=i=>document.getElementById(i),pe={boot:Ct("boot"),bootNote:Ct("boot-note"),menu:Ct("menu"),hud:Ct("hud"),win:Ct("win"),help:Ct("help"),clock:Ct("clock"),tries:Ct("tries"),winTime:Ct("win-time"),winTries:Ct("win-tries"),winCount:Ct("win-count"),menuCount:Ct("menu-count"),streak:Ct("streak"),copy:Ct("copy"),photo:Ct("photo"),eye:Ct("eye"),hint:Ct("hint"),brief:Ct("brief"),briefImg:Ct("brief-img"),sr:Ct("sr-status"),lamp:Ct("lamp"),lampN:Ct("lamp-n"),hintNote:Ct("hintnote"),seeker:Ct("seeker"),cheer:Ct("cheer"),stick:Ct("stick"),stickKnob:Ct("stick").firstElementChild},Se=null,ke=null,dn=null,Tn=null,pc=mg(Ct("trophy")),lt="boot",un=0,ji=0,Hh=0,Cr=0,Oo=[],qt=new C,Ji=new C,zo=new et,Ng=new Ie,Yg=new C(0,1,0),Dg=new et,$i=0;function cc(i){i&&(ke.turn(i),$i+=i,$i>Math.PI?$i-=Math.PI*2:$i<-Math.PI&&($i+=Math.PI*2))}function dc(){let i=innerWidth,e=innerHeight;on.setPixelRatio(Zf()),on.setSize(i,e,!1),at.aspect=i/e,at.fov=i/e<.85?62:52,at.updateProjectionMatrix()}addEventListener("resize",dc);dc();function P1(){return new Promise(i=>{let e=!1,t=()=>{e||(e=!0,i())};requestAnimationFrame(()=>requestAnimationFrame(t)),setTimeout(t,150)})}function Zh(i){let e=i.querySelector("button");e&&e.focus()}function ko(i){pe.sr.textContent=i}function Ss(i,e){let t=e?Math.round(i*10)/10:Math.floor(i),n=Math.floor(t/60),s=t-n*60;return e?n+":"+(s<10?"0":"")+s.toFixed(1):n+":"+String(s).padStart(2,"0")}function lc(i){return i.toLocaleString("en-US")}function L1(i){let e=new Set;i.scene.traverse(t=>{t.geometry&&!t.geometry.userData.shared&&t.geometry.dispose(),typeof t.dispose=="function"&&t.isInstancedMesh2&&t.dispose();let n=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(let s of n)if(!(e.has(s)||s.userData.shared)){e.add(s);for(let r in s){let o=s[r];o&&o.isTexture&&!o.userData.shared&&o.dispose()}s.dispose()}}),i.envTarget?i.envTarget.dispose():i.scene.environment&&i.scene.environment.dispose(),on.renderLists.dispose()}var Pr=null;function Kg(){for(let i=0;i<2;i++){let e=!1;for(let t of Se.blockers){let n=ke.position.dot(t.dir);n<=t.cos||(qt.copy(ke.position).addScaledVector(t.dir,-n),!(qt.lengthSq()<1e-10)&&(qt.normalize(),Ji.copy(t.dir).multiplyScalar(t.cos).addScaledVector(qt,t.sin),ke.teleport(Ji),e=!0))}if(!e)return}}function Gf(i,e){let t=document.getElementById("bootbar-fill");t&&(t.style.transitionDuration=(e||400)+"ms",t.style.width=i+"%")}async function Zg(i){if(Se&&Pr===i.seed){Ug();return}pe.boot.hidden=!1,pe.bootNote.textContent="Abandoning "+lc(Gh)+" cars on a planet\u2026",Gf(90,9e3),await P1(),Se&&(L1(Se),Se=null),Se=await dg({renderer:on,count:Gh,seed:i.seed}),Pr=i.seed,Se.setMode("play"),at.near=.08,at.far=Se.radius*2,at.updateProjectionMatrix(),Se.scene.add(ec),ac||Yf(rx),Tn=vg(e=>{Nf(e),No(ke.surfacePoint(.06),ke.up,e?4:2)}),Se.scene.add(Tn.object),Ug(),pe.menuCount.textContent=lc(Se.count),pe.winCount.textContent=lc(Se.count),pe.boot.hidden=!0}function Ug(){let i=Se.positionOf(Se.target,qt).clone().normalize(),e=Se.sites[0].c,t=2;for(let r of Se.sites){let o=r.c.dot(i);o<t&&(t=o,e=r.c)}let n=Ji.set(0,1,0).cross(e);n.lengthSq()<1e-6&&n.set(1,0,0).cross(e),n.normalize();let s=e.clone().addScaledVector(n,.2).normalize();ke=fg(Se.radius,s),qt.copy(e).addScaledVector(s,-e.dot(s)).normalize(),ke.turn(Math.atan2(ke.right.dot(qt),ke.forward.dot(qt))),ke.turn(1.15),dn=pg(at),Rr=0,$i=0}function $h(i,e,t){Tn.object.position.copy(ke.surfacePoint(0)),Dg.setFromAxisAngle(Yg,$i),Tn.object.quaternion.copy(ke.orientation()).multiply(Dg),Tn.animate(i,e);let n=at.position.distanceTo(Tn.object.position)<Tn.height*.95;Tn.object.visible=(t||dn.mode==="third"||!dn.settled)&&!n}var Fn=new Set,Dr=new Map,oc={t:-1e9,x:0,y:0,moved:0},bs=null,$g=matchMedia("(pointer: fine)").matches,$f=0,Jf=0,jf=!1,Do=-1;function N1(i){let e=i>>16&255,t=i>>8&255,n=i&255,s=r=>Math.round(r+(255-r)*.55);return s(e)<<16|s(t)<<8|s(n)}function Fg(i){for(let e of Oo)if(e.index===i)return!0;return!1}function Jh(i){i!==Do&&(Do>=0&&!Fg(Do)&&Se.restoreColor(Do),Do=-1,i>=0&&!Fg(i)&&(Se.setColor(i,N1(Se.infoOf(i).shade)),Do=i))}addEventListener("keydown",i=>{if(i.repeat)return;let e=i.key.toLowerCase();if(lt==="inspect"){(e==="q"||e==="escape")&&O1(),e==="enter"&&(i.preventDefault(),nx());return}if(e===" "&&lt==="play"){i.preventDefault(),dn.toggle(),eu();return}if(e==="h"&&lt==="play"){ix();return}if(e==="enter"&&lt==="play"){i.preventDefault(),tx($g&&jf?fc($f,Jf):fc(innerWidth/2,innerHeight/2));return}Fn.add(e),i.code&&Fn.add(i.code.toLowerCase())});addEventListener("keyup",i=>{Fn.delete(i.key.toLowerCase()),i.code&&Fn.delete(i.code.toLowerCase())});addEventListener("blur",()=>Fn.clear());var Bh=0;addEventListener("visibilitychange",()=>{document.hidden?(Fn.clear(),Bh=performance.now()):Bh&&(ji+=performance.now()-Bh,Bh=0,qf=performance.now())});function Ff(i,e){return(Fn.has(e)?1:0)-(Fn.has(i)?1:0)}function Bo(i){return i.pointerType==="touch"||i.pointerType==="pen"}function Jg(i,e,t){let n=t||7,s=fc(i,e);if(s>=0)return s;for(let[r,o]of[[n,0],[-n,0],[0,n],[0,-n]])if(s=fc(i+r,e+o),s>=0)return s;return-1}var Lr=!1;try{Lr=localStorage.getItem("fivewheels.mousegrab")==="1"}catch{Lr=!1}En.addEventListener("pointerdown",i=>{if(!Bo(i)&&i.button!==0)return;if(lt==="inspect"){nx();return}if(lt!=="play")return;let e=!1;for(let s of Dr.values())s.role==="walk"&&(e=!0);let t=Bo(i)&&i.clientX<innerWidth*.42&&!e,n=!t&&performance.now()-oc.t<250&&Math.hypot(i.clientX-oc.x,i.clientY-oc.y)<48;Dr.set(i.pointerId,{role:t?"walk":"look",x0:i.clientX,y0:i.clientY,x:i.clientX,y:i.clientY,t0:performance.now(),moved:n?oc.moved:0,pick:t||n?-1:Jg(i.clientX,i.clientY,Bo(i)?16:7)}),t&&(bs={x:0,y:0},pe.stick.style.left=i.clientX+"px",pe.stick.style.top=i.clientY+"px",pe.stick.classList.add("on"),pe.stickKnob.style.transform="translate(0px, 0px)");try{En.setPointerCapture(i.pointerId)}catch{}});En.addEventListener("pointermove",i=>{Bo(i)||($f=i.clientX,Jf=i.clientY,jf=!0);let e=Dr.get(i.pointerId);if(!e)return;let t=i.clientX-e.x,n=i.clientY-e.y;e.x=i.clientX,e.y=i.clientY,e.moved+=Math.abs(t)+Math.abs(n),e.role==="look"?Bo(i)?(cc(t*Ig),dn.look(n*Ig)):Lr?(cc(-t*Oh),dn.look(-n*Oh)):(cc(t*Oh),dn.look(n*Oh)):(bs={x:Xt.clamp((i.clientX-e.x0)/62,-1,1),y:Xt.clamp((i.clientY-e.y0)/62,-1,1)},pe.stickKnob.style.transform="translate("+(bs.x*40).toFixed(1)+"px,"+(bs.y*40).toFixed(1)+"px)")});function jg(i){let e=Dr.get(i.pointerId);if(e){if(Dr.delete(i.pointerId),e.role==="walk"){bs=null,pe.stick.classList.remove("on");return}oc={t:performance.now(),x:i.clientX,y:i.clientY,moved:e.moved},e.moved<20&&tx(e.pick>=0?e.pick:Jg(i.clientX,i.clientY,Bo(i)?16:7))}}En.addEventListener("pointerup",jg);En.addEventListener("pointercancel",jg);En.addEventListener("wheel",i=>{lt==="play"&&(i.preventDefault(),dn.zoom(Math.sign(i.deltaY)))},{passive:!1});En.addEventListener("contextmenu",i=>i.preventDefault());function D1(i,e,t){Oo.push({index:i,hex:e,times:t*2,t:0,on:!1})}function Qf(i){for(let e=Oo.length-1;e>=0;e--){let t=Oo[e];t.t-=i,!(t.t>0)&&(t.on=!t.on,t.on?Se.setColor(t.index,t.hex):Se.restoreColor(t.index),t.t=.12,--t.times<=0&&(Se.restoreColor(t.index),Oo.splice(e,1)))}}function fc(i,e){if(!Se)return-1;Lg.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),at.updateMatrixWorld(),uc.setFromCamera(Lg,at);let t=Se.pick(uc);return t?t.index:-1}var U1=new C(0,-.34,-1.5),Og=.55,Hf=1.7,Bg=.6,Ir=-1,_n=null,Nr=null,Zi="lift",Si=0,Wh=0,Qg=new C,ex=new et,zh=new C,Of=new C,Fo=new et,Bf=new C,F1=new et().setFromAxisAngle(new C(1,0,0),-.3);function tx(i){if(lt!=="play"||i<0)return;Jh(-1),Ir=i,Si=0,Wh=0,Zi="lift",lt="inspect",Se.setCarShown(i,!1),_n=Se.carCopy(i),Qg.copy(_n.position),ex.copy(_n.quaternion),Se.scene.add(_n),No(_n.position,ke.up,6),Nr||(Nr=_g()),Se.scene.add(Nr);let e=Se.infoOf(i);Tn.act("pickup");let t=/^[aeiou]/i.test(e.decay.label)?"an ":"a ";ko("Picked up "+t+e.decay.label+" "+e.body.name+"."),Rf()}function Xh(){if(_n){let i=new Set;_n.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose();let t=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let n of t)i.has(n)||n.userData.shared||(i.add(n),n.dispose())}),Se.scene.remove(_n)}Nr&&Se.scene.remove(Nr),Ir>=0&&(Se.setCarShown(Ir,!0),No(Se.positionOf(Ir,qt),ke.up,4)),_n=null,Ir=-1}function O1(){lt!=="inspect"||Zi==="toss"||(Xh(),Tn.release(),lt="play",En.focus())}function nx(){lt!=="inspect"||Zi==="toss"||(Zi="look",Si=Hf)}function zg(i){return zo.setFromUnitVectors(Yg,ke.up),Fo.setFromAxisAngle(ke.up,Wh),i.copy(Fo).multiply(zo)}function B1(i){if(Se.aimSun(ke.up),dn.update(ke,i),$h(i,0),Qf(i),pe.clock.textContent=Ss((performance.now()-ji)/1e3,!0),at.updateMatrixWorld(),zh.copy(U1).applyMatrix4(at.matrixWorld),Si+=i,Zi==="lift"){let t=Math.min(1,Si/Og),n=t*t*(3-2*t);Wh+=i*1.2,_n.position.lerpVectors(Qg,zh,n),_n.quaternion.copy(ex).slerp(zg(Fo),n),t>=1&&(Zi="look",Si=0)}else if(Zi==="look"){if(Wh+=i*(Math.PI*2/Hf),_n.position.copy(zh).addScaledVector(ke.up,Math.sin(Si*5)*.015),_n.quaternion.copy(zg(Fo)),Si>=Hf){if(un++,pe.tries.textContent=un,Ir===Se.target){Xh(),Tn.act("yes",3),z1();return}Zi="toss",Si=0,Tn.act("no"),Bf.set(1,0,0).applyQuaternion(at.quaternion),Of.copy(Bf).multiplyScalar(4.4).addScaledVector(ke.up,3.4),If(),ko("Not the one \u2014 tossed it. "+un+(un===1?" car":" cars")+" tried, "+Ss((performance.now()-ji)/1e3,!1)+" on the clock.")}}else{_n.position.addScaledVector(Of,i),Dh(_n.position),Of.addScaledVector(ke.up,-7*i),Fo.setFromAxisAngle(Bf,i*9),_n.quaternion.premultiply(Fo);let t=Math.max(.05,1-i*1.2);if(_n.scale.multiplyScalar(t),Si>=Bg){let n=Ir,s=Se.positionOf(n,qt).clone();Xh(),D1(n,14241615,2),No(s,Ji.copy(s).normalize(),9),lt="play",En.focus();return}}let e=Zi==="toss"?Math.max(0,1-Si/(Bg*.45)):Math.min(1,Zi==="look"?1:Si/(Og*.85));qt.set(0,0,-1).applyQuaternion(at.quaternion),Nr.position.copy(zh).addScaledVector(ke.up,-.17-(1-e)*1.4).addScaledVector(qt,-.14),Nr.quaternion.copy(at.quaternion).multiply(F1)}function z1(){Jh(-1),lt="won",W1(),Gn=null,Hh=performance.now(),Cr=0,Pf(),Se.positionOf(Se.target,qt),Ji.copy(qt).normalize(),Nh(qt.addScaledVector(Ji,1.8),Ji);for(let e=0;e<26;e++)Dh(qt);pe.hud.hidden=!0,En.style.cursor="";let i=(Hh-ji)/1e3;pe.winTime.textContent=Ss(i,!1),pe.winTries.textContent=un,Q1(i),ko("That is the one \u2014 spotless. Found in "+Ss(i,!1)+" after "+un+(un===1?" car.":" cars.")),Fh("skor_kaydedildi",{time_seconds:Math.round(i),tries:un}),setTimeout(()=>{lt==="won"&&(pe.win.hidden=!1,Zh(pe.win),pc.show(Se.carCopy(Se.target)),kg(pe.winTime,i,900,e=>Ss(e,!1)),kg(pe.winTries,un,900,e=>String(Math.round(e))))},2100)}function kg(i,e,t,n){let s=performance.now();(function r(){let o=Math.min(1,(performance.now()-s)/t),a=1-Math.pow(1-o,3);i.textContent=n(e*a),o<1&&lt==="won"?setTimeout(r,24):i.textContent=n(e)})()}function k1(){let i=(Hh-ji)/1e3;return`ONE CAR SHINES
Found it in `+Ss(i,!1)+", after "+un+(un===1?" car":" cars")+(Zs?" and "+Zs+(Zs===1?" hint":" hints"):"")+`.
`+lc(Se.count)+" to check. Beat me."}var $n=1,Zs=0,qh=0,Vg=0,Er=new C,rc=new C,Gg=new C,Yh=3;function V1(){$n=Yh,Zs=0,qh=0,pe.lampN.textContent=String(Yh),pe.lamp.classList.remove("spent"),pe.lamp.setAttribute("aria-label","Use your hint"),pe.hintNote.classList.remove("on"),pe.seeker.hidden=!0}function ix(){if(lt!=="play"||$n<=0)return;$n-=1,Zs+=1,pe.lampN.textContent=String($n),$n===0?(pe.lamp.classList.add("spent"),pe.lamp.setAttribute("aria-label","No hints left")):pe.lamp.setAttribute("aria-label",$n+" hints left"),pe.lamp.classList.remove("pop"),pe.lamp.offsetWidth,pe.lamp.classList.add("pop"),qh=8;let i=$n===1?"1 left":$n+" left",e=$n>0?"It is that way. Eight seconds \u2014 "+i+".":"It is that way. Eight seconds. That was your last one.";pe.hintNote.textContent="\u{1F4A1} "+e,pe.hintNote.classList.add("on"),clearTimeout(Vg),Vg=setTimeout(()=>pe.hintNote.classList.remove("on"),6500),ko("Hint: the arrow points toward the car for eight seconds."),Tn.act("yes",2),sc(),Qh(),Fh("ipucu_kullanildi")}var Hg={lap:"Around the world! A full lap of the planet \u{1F30D}",t10:"10 wrecks checked. 48,990 to go.",t50:"50 checked \u2014 now it\u2019s personal.",t100:"100 cars, and not one of them washed \u{1FAE1}",m5:"Five minutes in. It\u2019s out there, catching the light.",m15:"Fifteen minutes. Somebody still drives out here. Keep looking."},Kh={lap:!1,t10:!1,t50:!1,t100:!1,m5:!1,m15:!1},Wf=0,Wg=new C,Xf=!1,Xg=0;function G1(){for(let i in Kh)Kh[i]=!1;Wf=0,Xf=!1}function Uo(i){Kh[i]||lt!=="play"||(Kh[i]=!0,pe.cheer.textContent=Hg[i],pe.cheer.classList.remove("on"),pe.cheer.offsetWidth,pe.cheer.classList.add("on"),clearTimeout(Xg),Xg=setTimeout(()=>pe.cheer.classList.remove("on"),4600),ko(Hg[i]),sc(),i==="lap"&&(qt.copy(ke.position).multiplyScalar(Se.radius),Ji.copy(ke.up),Nh(qt.addScaledVector(Ji,2.2),Ji)))}function H1(i){if(Xf){let t=Math.min(1,Math.max(-1,Wg.dot(ke.position)));Wf+=Math.acos(t)}Wg.copy(ke.position),Xf=!0,Wf>=Math.PI*2&&Uo("lap"),un>=100?Uo("t100"):un>=50?Uo("t50"):un>=10&&Uo("t10");let e=(performance.now()-ji)/6e4;e>=15?Uo("m15"):e>=5&&Uo("m5")}var ep="fivewheels.round";function jh(){try{let i=localStorage.getItem(ep);if(!i)return null;let e=JSON.parse(i);return!e||e.done||e.count!==Gh||!Number.isFinite(e.seed)?null:e}catch{return null}}function Qh(){if(!Se||Pr===null||lt==="won")return;let i=lt==="play"||lt==="inspect";if(!i){let e=jh();if(e&&e.seed===Pr)return}try{localStorage.setItem(ep,JSON.stringify({seed:Pr,count:Gh,elapsed:i?Math.max(0,(performance.now()-ji)/1e3):0,tries:un,hintsUsed:Zs,done:!1}))}catch{}}function W1(){try{localStorage.removeItem(ep)}catch{}}var Gn=jh();Gn&&(hc={seed:Gn.seed});addEventListener("pagehide",Qh);function X1(i){if(qh<=0){pe.seeker.hidden||(pe.seeker.hidden=!0);return}if(qh-=i,Se.positionOf(Se.target,Er).normalize(),Er.addScaledVector(ke.up,-Er.dot(ke.up)),Er.lengthSq()<1e-10)return;Er.normalize(),rc.set(0,0,-1).applyQuaternion(at.quaternion),rc.addScaledVector(ke.up,-rc.dot(ke.up)).normalize(),Gg.crossVectors(rc,Er);let e=Math.atan2(Gg.dot(ke.up),rc.dot(Er));pe.seeker.style.transform="rotate("+(-e*180/Math.PI).toFixed(1)+"deg)",pe.seeker.hidden=!1}function eu(){pe.eye.textContent=dn.mode==="first"?"\u{1F52D}":"\u{1F441}",pe.eye.setAttribute("aria-label",dn.mode==="first"?"Stand back up":"Crouch down and look")}function sx(){lt==="inspect"&&Xh(),(lt==="play"||lt==="won")&&Jh(-1),pc.stop(),lt="menu",pe.menu.hidden=!1,pe.hud.hidden=!0,pe.win.hidden=!0,pe.help.hidden=!0,pe.brief.hidden=!0,En.style.cursor="",Zh(pe.menu),Se.setMode("play")}async function Vh(i){if(pc.stop(),lt="menu",pe.menu.hidden=!0,pe.win.hidden=!0,await Zg(i),Oo.length=0,V1(),Gn=jh(),Gn&&Gn.seed===Pr){un=Gn.tries||0;let e=Number.isFinite(Gn.hintsUsed)?Gn.hintsUsed:Gn.hintUsed?1:0;e>0&&(Zs=Math.min(Yh,e),$n=Yh-Zs,pe.lampN.textContent=String($n),$n===0?(pe.lamp.classList.add("spent"),pe.lamp.setAttribute("aria-label","No hints left")):pe.lamp.setAttribute("aria-label",$n+" hints left"))}else Gn=null,un=0;pe.tries.textContent=un,pe.brief.hidden=!1,Zh(pe.brief),ic()}function q1(){pe.brief.hidden=!0,lt="play",ji=performance.now()-(Gn&&Gn.seed===Pr?(Gn.elapsed||0)*1e3:0),Qh(),pe.clock.textContent="0:00.0",G1(),eu(),pe.hud.hidden=!1,pe.hint.classList.remove("gone"),setTimeout(()=>pe.hint.classList.add("gone"),9e3),En.focus(),ko("Round started. One car out there is spotless; the clock is running."),sc(),Df(),Fh("oyun_basladi")}var qf=performance.now(),Rr=0,zf=0,kf=0,Y1=1.15*26,rx=1.15*16,ac=!0,kh=60,Vf=0;function Yf(i){if(Se)for(let e of Se.trimMeshes){let t=e.LODinfo&&e.LODinfo.render&&e.LODinfo.render.levels;t&&t[1]&&(t[1].distance=i*i)}}function K1(i){kh+=(1/Math.max(i,.001)-kh)*.04,Vf+=i,!(Vf<2)&&(Vf=0,ac&&kh<42?(ac=!1,Yf(rx)):!ac&&kh>56&&(ac=!0,Yf(Y1)))}function Z1(i){dn.cinema(!0),cc(i*.021),ke.step(0,1,i*2.1),Kg(),Se.aimSun(ke.up),dn.update(ke,i),$h(i,0,!0),Tn.object.visible=!1}function $1(i){dn.cinema(!1);let e=Ff("keya","keyd"),t=Ff("keys","keyw"),n=Ff("keyq","keye")+(Fn.has("arrowright")?1:0)-(Fn.has("arrowleft")?1:0);Fn.has("arrowup")&&(t+=1),Fn.has("arrowdown")&&(t-=1),bs&&(e+=bs.x,t+=-bs.y),cc(Xt.clamp(n,-1,1)*i*2.1);let s=Math.min(1,Math.hypot(e,t)),r=Fn.has("shift")||!!bs&&s>.92,o=s*(r?C1:Rg);if(Rr=Xt.lerp(Rr,o,Math.min(1,i*9)),Rr>.01&&(ke.step(e,t,Rr*i),Kg()),H1(i),s>.06){let c=Math.atan2(-e,t)-$i;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;$i+=c*Math.min(1,i*9)}Se.aimSun(ke.up),dn.update(ke,i);let a=Math.min(1,Rr/Rg);if(a>.05&&Dr.size===0){let c=Tn.gait*Math.PI*2,l=(dn.mode==="first"?1:.4)*a;at.position.addScaledVector(ke.up,Math.sin(c*2)*.045*l),qt.set(1,0,0).applyQuaternion(at.quaternion),at.position.addScaledVector(qt,Math.sin(c)*.035*l),qt.set(0,0,-1).applyQuaternion(at.quaternion),zo.setFromAxisAngle(qt,Math.sin(c)*.01*l),at.quaternion.premultiply(zo)}$h(i,Rr),Qf(i),pe.clock.textContent=Ss((performance.now()-ji)/1e3,!0),kf+=i,kf>3&&(kf=0,Qh()),X1(i),zf+=i,zf>.12&&(zf=0,$g&&jf&&Dr.size===0&&Jh(fc($f,Jf)))}function J1(i){Cr+=i;let e=Se.hero.children[0].material,t=Math.exp(-Math.pow((Cr-.1)/.13,2)),n=Math.exp(-Math.pow((Cr-.58)/.3,2))*.42;e.emissiveIntensity=(t+n)*2.1,Qf(i),$h(i,0);let s=at.aspect<.85?62:52,r=Math.exp(-Cr*4.2)*Math.sin(Math.min(Math.PI,Cr*6.5));at.fov=s-r*9,at.updateProjectionMatrix();let o=Se.positionOf(Se.target,qt).clone(),a=o.clone().normalize(),c=new C(0,1,0).cross(a);c.lengthSq()<1e-6&&(c=new C(1,0,0).cross(a)),c.normalize();let l=.9+Cr*.45,h=c.clone().multiplyScalar(Math.cos(l)).addScaledVector(c.clone().cross(a).normalize(),Math.sin(l)),u=o.clone().addScaledVector(a,.95).addScaledVector(h,2.6);Ng.lookAt(u,o.clone().addScaledVector(a,.22),a),zo.setFromRotationMatrix(Ng);let d=Math.min(1,i*3.2);at.position.lerp(u,d),at.quaternion.slerp(zo,d)}function Kf(i){Se&&(lt==="menu"||lt==="boot"?Z1(i):lt==="play"?$1(i):lt==="inspect"?B1(i):lt==="won"&&J1(i),ke&&Se.refreshBlots(ke.position),wf(i,ke?ke.up:null,at),Se.follow(at))}function j1(){let i=Zf();(on.getPixelRatio()!==i||En.width!==Math.floor(innerWidth*i)||En.height!==Math.floor(innerHeight*i))&&dc()}function ox(){requestAnimationFrame(ox),j1();let i=performance.now(),e=Math.min((i-qf)/1e3,.1);qf=i,Se&&(K1(e),Kf(e),on.render(Se.scene,at))}function Q1(i){try{let e="fivewheels.best",t=parseFloat(localStorage.getItem(e)||"0");(!t||i<t)&&localStorage.setItem(e,String(i))}catch{}ax()}function ax(){let i=0;try{i=parseFloat(localStorage.getItem("fivewheels.best")||"0")}catch{i=0}pe.streak.textContent=i?"Your best so far: "+Ss(i,!1)+".":"No car found yet. Go and look."}function cx(){let i=document.getElementById("mouseflip");i&&(i.textContent=Lr?"Mouse: grab the world":"Mouse: FPS look")}function lx(){let i=Uh();for(let e of document.querySelectorAll("[data-mute]"))e.textContent=i?"\u{1F507}":"\u{1F50A}",e.classList.toggle("off",i),e.setAttribute("aria-label",i?"Sound is off":"Sound is on")}var ew=new Set(["start","random","go","lamp","photo"]);document.addEventListener("click",i=>{let e=i.target.closest("[data-act]");if(!e)return;let t=e.dataset.act;if(ic(),Lf(ew.has(t)),t==="start"){let n=jh();if(n)Vh({seed:n.seed});else{let s=hc;hc=tc(),Vh(s)}}else if(t==="random")Vh(tc());else if(t==="go")q1();else if(t==="lamp")ix();else if(t==="menu")sx();else if(t==="help")pe.help.hidden=!pe.help.hidden,pe.help.hidden?lt==="play"&&En.focus():Zh(pe.help);else if(t==="mouseflip"){Lr=!Lr;try{localStorage.setItem("fivewheels.mousegrab",Lr?"1":"0")}catch{}cx()}else if(t==="mute")Cf(!Uh()),lx();else if(t==="eye")dn.toggle(),eu();else if(t==="copy"){let n=k1();navigator.clipboard.writeText(n).then(()=>{pe.copy.textContent="Copied",setTimeout(()=>{pe.copy.textContent="Copy result"},1600)},()=>{pe.copy.textContent="Press \u2318C"})}else t==="photo"&&pc.photo({time:Ss((Hh-ji)/1e3,!1),tries:un,count:lc(Se.count)}).toBlob(s=>{if(!s)return;let r=document.createElement("a");r.href=URL.createObjectURL(s),r.download="one-car-shines.png",r.click(),setTimeout(()=>URL.revokeObjectURL(r.href),4e3),navigator.clipboard&&window.ClipboardItem&&navigator.clipboard.write([new ClipboardItem({"image/png":s})]).catch(()=>{});let o=pe.photo.querySelector(".lbl");o.textContent="Saved \u2014 go post it \u2728",setTimeout(()=>{o.textContent="Save the photo"},2200)},"image/png")});(async function(){pe.bootNote.textContent="Unpacking the wrecks\u2026",Gf(14,600),await Promise.all([hg(),ng()]),pe.bootNote.textContent="Letting the dust settle\u2026",Gf(30,400),await yg(),await Zg(hc),pe.briefImg.src=ug(on,Se&&Se.scene?Se.scene.environment:null),document.addEventListener("pointerdown",()=>ic(),{once:!0}),dc(),ax(),lx(),cx(),sx(),ox(),I1&&(window.__five={fx:Af,trophy:pc,get world(){return Se},get walker(){return ke},get view(){return dn},get valet(){return Tn},get faceYaw(){return $i},get state(){return lt},camera:at,renderer:on,audio:Uf,start:e=>Vh(e?hc:tc()),step:Kf,run(e,t){let n=t||.016666666666666666;for(let s=0;s<e;s+=n)Kf(n)},press(e,t){t===!1?Fn.delete(e):Fn.add(e)},turn(e){ke.turn(e)},setView(e){dn.set(e),eu()},goTo(e,t){let n=Se.positionOf(e,new C).clone().normalize(),s=n.clone(),r=new C(0,1,0).cross(s);r.lengthSq()<1e-6&&(r=new C(1,0,0).cross(s)),r.normalize();let o=(t===void 0?2.2:t)/Se.radius;ke.teleport(n.clone().addScaledVector(r,Math.sin(o)).normalize());let a=n.clone().addScaledVector(ke.position,-n.dot(ke.position)).normalize();ke.turn(Math.atan2(ke.right.dot(a),ke.forward.dot(a)))},pickCentre(){at.updateMatrixWorld(),Se.scene.updateMatrixWorld(),uc.setFromCamera(new qe(0,0),at);let e=Se.pick(uc);return e?e.index:null},measure(e){let t=on.getContext(),n=new Uint8Array(4),s=()=>{on.render(Se.scene,at),t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,n)};for(let o=0;o<8;o++)s();let r=[];for(let o=0;o<(e||24);o++){let a=performance.now();s(),r.push(performance.now()-a)}return r.sort((o,a)=>o-a),{fps:+(1e3/r[r.length>>1]).toFixed(1),worst:+(1e3/r[r.length-1]).toFixed(1),tris:on.info.render.triangles,calls:on.info.render.calls}},async shot(e,t,n){let s=t||1280,r=n||720;on.setPixelRatio(1),on.setSize(s,r,!1),at.aspect=s/r,at.updateProjectionMatrix(),on.render(Se.scene,at);let o=on.domElement.toDataURL("image/jpeg",.92);return dc(),(await fetch("/save?dir=shots&name="+e,{method:"POST",body:o})).text()}})})().catch(qg);
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
