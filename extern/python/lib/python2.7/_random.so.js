(function(g){function e(a){var b,c=null;for(b=-1;;)switch(b){case -1:var e,d,g;e=a;d=e+8;b=HEAP[e+2504]>623?1:6;break;case 1:g=0;b=2;break;case 2:b=HEAP[d+4*(g+1)]&2147483647|HEAP[d+4*g]&-2147483648;HEAP[d+4*g]=b>>>0>>>1^HEAP[d+4*(g+397)]^HEAP[f+(b&1)*4];g=b=g+1;b=b<=226?2:4;break;case 3:b=HEAP[d+4*(g+1)]&2147483647|HEAP[(c==3?h:j)+4*g]&-2147483648;HEAP[d+4*g]=b>>>0>>>1^HEAP[d+4*(g+-227)]^HEAP[f+(b&1)*4];g=c=g+1;var h=d;c<=622?b=c=3:(c=3,
b=5);break;case 4:var j=d;g<=622?(c=4,b=3):(c=4,b=5);break;case 5:b=HEAP[d]&2147483647|HEAP[(c==4?j:h)+2492]&-2147483648;HEAP[d+2492]=b>>>0>>>1^HEAP[d+1584]^HEAP[f+(b&1)*4];HEAP[e+2504]=0;b=6;break;case 6:return a=HEAP[e+2504],b=HEAP[d+4*a],HEAP[e+2504]=a+1,b^=b>>>0>>>11,b^=b<<7&-1658038656,b^=b<<15&-272236544,b^=b>>>0>>>18,e=b;default:assert(0,"bad label: "+b)}}function b(a,b){var c;for(c=-1;;)switch(c){case -1:var e,d,f;e=a;d=b;f=e+8;HEAP[f]=d;c=d=1;break;case 1:HEAP[f+4*d&4294967295]=((HEAP[f+
4*(d-1&4294967295)&4294967295]>>>0>>>30^HEAP[f+4*(d-1&4294967295)&4294967295])*1812433253&4294967295)+d&4294967295;HEAP[f+4*d]=HEAP[f+4*d];d=c=d+1;c=c<=623?1:2;break;case 2:HEAP[e+2504]=d;return;default:assert(0,"bad label: "+c)}}function a(a,c){var e=STACKTOP;STACKTOP+=8;_memset(e,0,8);var d,f=null;for(d=-1;;)switch(d){case -1:var g,m,n,o,p,q,r,s,u,t,v=e,w=e+4,x,y,z,C,E;g=a;d=c;r=q=p=o=n=0;HEAP[v]=0;d=_PyArg_UnpackTuple(d,h,0,1,allocate([v,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;
break;case 1:m=0;d=44;break;case 2:d=HEAP[v]==0|HEAP[v]==__Py_NoneStruct?3:4;break;case 3:_time(w);b(g,HEAP[w]);HEAP[__Py_NoneStruct]+=1;m=__Py_NoneStruct;d=44;break;case 4:d=(HEAP[HEAP[HEAP[v]+4]+84]&8388608)!=0?6:5;break;case 5:d=(HEAP[HEAP[HEAP[v]+4]+84]&16777216)!=0?6:7;break;case 6:var J=_PyNumber_Absolute(HEAP[v]);q=J;f=6;d=9;break;case 7:x=_PyObject_Hash(HEAP[v]);d=x==-1?34:8;break;case 8:var I=_PyLong_FromUnsignedLong(x);q=I;f=8;d=9;break;case 9:d=(f==8?I:J)==0?34:10;break;case 10:s=8;u=0;
r=_PyMem_Malloc(s*4);d=r==0?34:11;break;case 11:o=_PyLong_FromUnsignedLong(-1);d=o==0?37:12;break;case 12:p=_PyInt_FromLong(32);d=p==0?34:30;break;case 13:d=t==-1?34:14;break;case 14:z=_PyNumber_And(q,o);d=z==0?34:15;break;case 15:C=_PyLong_AsUnsignedLong(z);HEAP[z]-=1;d=HEAP[z]==0?16:17;break;case 16:FUNCTION_TABLE[HEAP[HEAP[z+4]+24]](z);d=17;break;case 17:d=C==-1?18:19;break;case 18:d=_PyErr_Occurred()!=0?34:19;break;case 19:y=d=_PyNumber_Rshift(q,p);d=d==0?34:20;break;case 20:HEAP[q]-=1;d=HEAP[q]==
0?21:22;break;case 21:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);d=22;break;case 22:q=y;d=u>=s?23:27;break;case 23:E=s<<1;d=E>>>1!=s?24:25;break;case 24:_PyErr_NoMemory();d=34;break;case 25:r=_PyMem_Realloc(r,E*4);d=r==0?34:26;break;case 26:s=E;d=27;break;case 27:d=u>=s?28:29;break;case 28:throw ___assert_fail(j,k,296,l),"Reached an unreachable!";case 29:HEAP[r+4*u]=C;u+=1;d=30;break;case 30:t=d=_PyObject_IsTrue(q);d=d!=0?13:31;break;case 31:d=u==0?32:33;break;case 32:HEAP[r+4*u]=0;u+=1;d=33;break;case 33:a:{n=
g;d=r;for(var G=u,A=void 0,D=null,A=-1;;)switch(A){case -1:var M,L,R,Ta,Ea,Ga;M=n;L=d;R=G;Ga=M+8;b(M,19650218);M=1;Ta=0;Ea=A=R>=624?R:624;A=A!=0?1:6;break;case 1:HEAP[Ga+4*M&4294967295]=(Ta+HEAP[L+4*Ta&4294967295]&4294967295)+((HEAP[Ga+4*(M-1&4294967295)&4294967295]>>>0>>>30^HEAP[Ga+4*(M-1&4294967295)&4294967295])*1664525&4294967295^HEAP[Ga+4*M&4294967295])&4294967295;HEAP[Ga+4*M]=HEAP[Ga+4*M];M=A=M+1;Ta+=1;A=A>623?2:3;break;case 2:HEAP[Ga]=HEAP[Ga+2492];M=1;A=3;break;case 3:A=Ta>=R?4:5;break;case 4:Ta=
0;A=5;break;case 5:Ea=A=Ea-1;A=A!=0?1:6;break;case 6:Ea=623;var ka=Ga,D=6,A=7;break;case 7:HEAP[Ga+4*M&4294967295]=((HEAP[Ga+4*(M-1&4294967295)&4294967295]>>>0>>>30^HEAP[Ga+4*(M-1&4294967295)&4294967295])*1566083941&4294967295^HEAP[(D==6?ka:Fa)+4*M&4294967295])-M&4294967295;HEAP[Ga+4*M]=HEAP[Ga+4*M];M=A=M+1;A=A>623?8:9;break;case 8:HEAP[Ga]=HEAP[Ga+2492];M=1;A=9;break;case 9:Ea=D=Ea-1;var Fa=Ga;D!=0?(D=9,A=7):(D=9,A=10);break;case 10:HEAP[Fa]=-2147483648;HEAP[__Py_NoneStruct]+=1;n=__Py_NoneStruct;
break a;default:assert(0,"bad label: "+A)}n=void 0}d=34;break;case 34:d=o!=0?35:37;break;case 35:HEAP[o]-=1;d=HEAP[o]==0?36:37;break;case 36:FUNCTION_TABLE[HEAP[HEAP[o+4]+24]](o);d=37;break;case 37:d=p!=0?38:40;break;case 38:HEAP[p]-=1;d=HEAP[p]==0?39:40;break;case 39:FUNCTION_TABLE[HEAP[HEAP[p+4]+24]](p);d=40;break;case 40:d=q!=0?41:43;break;case 41:HEAP[q]-=1;d=HEAP[q]==0?42:43;break;case 42:FUNCTION_TABLE[HEAP[HEAP[q+4]+24]](q);d=43;break;case 43:_PyMem_Free(r);m=n;d=44;break;case 44:return f=
m,STACKTOP=e,f;default:assert(0,"bad label: "+d)}}function c(){f=allocate([0,0,0,0,-1727483681,0,0,0],["i32",0,0,0,"i32",0,0,0],ALLOC_NORMAL);h=allocate([115,101,101,100,0],"i8",ALLOC_NORMAL);j=allocate([107,101,121,117,115,101,100,32,60,32,107,101,121,109,97,120,0],"i8",ALLOC_NORMAL);k=allocate([46,46,47,99,112,121,116,104,111,110,47,77,111,100,117,108,101,115,47,95,114,97,110,100,111,109,109,111,100,117,108,101,46,99,0],"i8",ALLOC_NORMAL);l=allocate([114,97,110,100,111,109,95,115,101,101,100,0],
"i8",ALLOC_NORMAL);m=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,109,117,115,116,32,98,101,32,97,32,116,117,112,108,101,0],"i8",ALLOC_NORMAL);n=allocate([115,116,97,116,101,32,118,101,99,116,111,114,32,105,115,32,116,104,101,32,119,114,111,110,103,32,115,105,122,101,0],"i8",ALLOC_NORMAL);o=allocate([106,117,109,112,97,104,101,97,100,32,114,101,113,117,105,114,101,115,32,97,110,32,105,110,116,101,103,101,114,44,32,110,111,116,32,39,37,115,39,0],"i8",ALLOC_NORMAL);p=allocate([105,58,103,
101,116,114,97,110,100,98,105,116,115,0],"i8",ALLOC_NORMAL);q=allocate([110,117,109,98,101,114,32,111,102,32,98,105,116,115,32,109,117,115,116,32,98,101,32,103,114,101,97,116,101,114,32,116,104,97,110,32,122,101,114,111,0],"i8",ALLOC_NORMAL);r=allocate([82,97,110,100,111,109,40,41,0],"i8",ALLOC_NORMAL);u=allocate([114,97,110,100,111,109,0],"i8",ALLOC_NORMAL);s=allocate([114,97,110,100,111,109,40,41,32,45,62,32,120,32,105,110,32,116,104,101,32,105,110,116,101,114,118,97,108,32,91,48,44,32,49,41,46,
0],"i8",ALLOC_NORMAL);t=allocate([115,101,101,100,40,91,110,93,41,32,45,62,32,78,111,110,101,46,32,32,68,101,102,97,117,108,116,115,32,116,111,32,99,117,114,114,101,110,116,32,116,105,109,101,46,0],"i8",ALLOC_NORMAL);v=allocate([103,101,116,115,116,97,116,101,0],"i8",ALLOC_NORMAL);w=allocate([103,101,116,115,116,97,116,101,40,41,32,45,62,32,116,117,112,108,101,32,99,111,110,116,97,105,110,105,110,103,32,116,104,101,32,99,117,114,114,101,110,116,32,115,116,97,116,101,46,0],"i8",ALLOC_NORMAL);x=allocate([115,
101,116,115,116,97,116,101,0],"i8",ALLOC_NORMAL);y=allocate([115,101,116,115,116,97,116,101,40,115,116,97,116,101,41,32,45,62,32,78,111,110,101,46,32,32,82,101,115,116,111,114,101,115,32,103,101,110,101,114,97,116,111,114,32,115,116,97,116,101,46,0],"i8",ALLOC_NORMAL);z=allocate([106,117,109,112,97,104,101,97,100,0],"i8",ALLOC_NORMAL);C=allocate([106,117,109,112,97,104,101,97,100,40,105,110,116,41,32,45,62,32,78,111,110,101,46,32,32,67,114,101,97,116,101,32,110,101,119,32,115,116,97,116,101,32,102,
114,111,109,32,101,120,105,115,116,105,110,103,32,115,116,97,116,101,32,97,110,100,32,105,110,116,101,103,101,114,46,0],"i8",ALLOC_NORMAL);A=allocate([103,101,116,114,97,110,100,98,105,116,115,0],"i8",ALLOC_NORMAL);G=allocate([103,101,116,114,97,110,100,98,105,116,115,40,107,41,32,45,62,32,120,46,32,32,71,101,110,101,114,97,116,101,115,32,97,32,108,111,110,103,32,105,110,116,32,119,105,116,104,32,107,32,114,97,110,100,111,109,32,98,105,116,115,46,0],"i8",ALLOC_NORMAL);E=allocate([0,0,0,0,0,0,0,0,
4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,
0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);D=allocate([82,97,110,100,111,109,40,41,32,45,62,
32,99,114,101,97,116,101,32,97,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,32,119,105,116,104,32,105,116,115,32,111,119,110,32,105,110,116,101,114,110,97,108,32,115,116,97,116,101,46,0],"i8",ALLOC_NORMAL);R=allocate([95,114,97,110,100,111,109,46,82,97,110,100,111,109,0],"i8",ALLOC_NORMAL);M=allocate([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2508,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,132587,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);
L=allocate([77,111,100,117,108,101,32,105,109,112,108,101,109,101,110,116,115,32,116,104,101,32,77,101,114,115,101,110,110,101,32,84,119,105,115,116,101,114,32,114,97,110,100,111,109,32,110,117,109,98,101,114,32,103,101,110,101,114,97,116,111,114,46,0],"i8",ALLOC_NORMAL);I=allocate([95,114,97,110,100,111,109,0],"i8",ALLOC_NORMAL);J=allocate([82,97,110,100,111,109,0],"i8",ALLOC_NORMAL);HEAP[E]=u;HEAP[E+4]=g+2;HEAP[E+12]=s;HEAP[E+16]=h;HEAP[E+20]=g+4;HEAP[E+28]=t;HEAP[E+32]=v;HEAP[E+36]=g+6;HEAP[E+
44]=w;HEAP[E+48]=x;HEAP[E+52]=g+8;HEAP[E+60]=y;HEAP[E+64]=z;HEAP[E+68]=g+10;HEAP[E+76]=C;HEAP[E+80]=A;HEAP[E+84]=g+12;HEAP[E+92]=G;HEAP[M+12]=R;HEAP[M+72]=g+14;HEAP[M+88]=D;HEAP[M+116]=E;HEAP[M+156]=g+16;HEAP[M+160]=g+18}var d={arguments:[]},f,h,j,k,l,m,n,o,p,q,r,u,s,t,v,w,x,y,z,C,A,G,E,D,R,M,L,I,J;d._init_random=function(){var a;for(a=-1;;)switch(a){case -1:var b;a=_PyType_Ready(M)<0?3:1;break;case 1:b=_Py_InitModule4(I,0,L,0,1013);a=b==0?3:2;break;case 2:HEAP[M]+=1;_PyModule_AddObject(b,J,M);a=
3;break;case 3:return;default:assert(0,"bad label: "+a)}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,function(a){var b;b=e(a)>>>0>>>5;a=e(a);return _PyFloat_FromDouble((b*67108864+(a>>>0>>>6))*1.1102230246251565E-16)},0,a,0,function(a){var b,c=null;for(b=-1;;)switch(b){case -1:var e,d,f,g,h;e=a;f=_PyTuple_New(625);b=f==0?1:2;break;case 1:d=0;b=11;break;case 2:h=0;c=2;b=5;break;case 3:g=_PyLong_FromUnsignedLong(HEAP[e+8+h*4]);b=g==0?8:4;break;case 4:HEAP[f+12+h*4]=g;var j=h+1;h=j;c=4;b=5;break;case 5:b=
(c==4?j:0)<=623?3:6;break;case 6:g=_PyLong_FromLong(HEAP[e+2504]);b=g==0?8:7;break;case 7:HEAP[f+12+h*4]=g;d=f;b=11;break;case 8:HEAP[f]-=1;b=HEAP[f]==0?9:10;break;case 9:FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f);b=10;break;case 10:d=0;b=11;break;case 11:return a=d;default:assert(0,"bad label: "+b)}},0,function(a,b){var c,e=null;for(c=-1;;)switch(c){case -1:var d,f,g,h,j,k;d=a;f=b;c=(HEAP[HEAP[f+4]+84]&67108864)==0?1:2;break;case 1:_PyErr_SetString(HEAP[_PyExc_TypeError],m);g=0;c=14;break;case 2:c=_PyTuple_Size(f)!=
625?3:4;break;case 3:_PyErr_SetString(HEAP[_PyExc_ValueError],n);g=0;c=14;break;case 4:h=0;e=4;c=9;break;case 5:j=_PyLong_AsUnsignedLong(o);c=j==-1?6:8;break;case 6:c=_PyErr_Occurred()!=0?7:8;break;case 7:g=0;c=14;break;case 8:HEAP[d+8+h*4]=j;var l=h+1;h=l;e=8;c=9;break;case 9:var o=HEAP[f+12+h*4];c=(e==8?l:0)<=623?5:10;break;case 10:k=_PyLong_AsLong(o);c=k==-1?11:13;break;case 11:c=_PyErr_Occurred()!=0?12:13;break;case 12:g=0;c=14;break;case 13:HEAP[d+2504]=k;HEAP[__Py_NoneStruct]+=1;g=__Py_NoneStruct;
c=14;break;case 14:return c=g;default:assert(0,"bad label: "+c)}},0,function(a,b){var c,e=null;for(c=-1;;)switch(c){case -1:var d,f,g,h,j,k,l,m;d=a;f=b;c=(HEAP[HEAP[f+4]+84]&8388608)==0?1:3;break;case 1:c=(HEAP[HEAP[f+4]+84]&16777216)==0?2:3;break;case 2:_PyErr_Format(HEAP[_PyExc_TypeError],o,allocate([HEAP[HEAP[f+4]+12],0,0,0],["i8*",0,0,0],ALLOC_STACK));g=0;c=20;break;case 3:m=d+8;h=623;e=3;c=16;break;case 4:k=_PyInt_FromLong(h);c=k==0?5:6;break;case 5:g=0;c=20;break;case 6:l=_PyNumber_Remainder(f,
k);HEAP[k]-=1;c=HEAP[k]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[k+4]+24]](k);c=8;break;case 8:c=l==0?9:10;break;case 9:g=0;c=20;break;case 10:j=_PyInt_AsLong(l);HEAP[l]-=1;c=HEAP[l]==0?11:12;break;case 11:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);c=12;break;case 12:c=j==-1?13:15;break;case 13:c=_PyErr_Occurred()!=0?14:15;break;case 14:g=0;c=20;break;case 15:e=HEAP[m+4*h];HEAP[m+4*h]=HEAP[m+4*j];HEAP[m+4*j]=e;var n=h-1;h=n;e=15;c=16;break;case 16:c=(e==15?n:623)>1?4:17;break;case 17:h=0;c=18;break;
case 18:HEAP[m+4*h]=HEAP[m+4*h]+1+h;h=c=h+1;c=c<=623?18:19;break;case 19:HEAP[d+2504]=624;HEAP[__Py_NoneStruct]+=1;g=__Py_NoneStruct;c=20;break;case 20:return d=g;default:assert(0,"bad label: "+c)}},0,function(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d;for(d=-1;;)switch(d){case -1:var f,g,h=c,j,k,l,m;f=a;d=_PyArg_ParseTuple(b,p,allocate([h,0,0,0],["i32*",0,0,0],ALLOC_STACK))==0?1:2;break;case 1:g=0;d=11;break;case 2:d=HEAP[h]<=0?3:4;break;case 3:_PyErr_SetString(HEAP[_PyExc_ValueError],
q);g=0;d=11;break;case 4:k=(((HEAP[h]-1)/32|0)+1)*4;m=_PyMem_Malloc(k);d=m==0?5:6;break;case 5:_PyErr_NoMemory();g=0;d=11;break;case 6:j=0;d=j<k?7:10;break;case 7:l=e(f);d=HEAP[h]<=31?8:9;break;case 8:l>>>=32-HEAP[h];d=9;break;case 9:HEAP[m+j]=l&255;HEAP[m+(j+1)]=l>>>8&255;HEAP[m+(j+2)]=l>>>16&255;HEAP[m+(j+3)]=l>>>24&255;j+=4;HEAP[h]-=32;d=j<k?7:10;break;case 10:d=__PyLong_FromByteArray(m,k,1,0);_PyMem_Free(m);g=d;d=11;break;case 11:return f=g,STACKTOP=c,f;default:assert(0,"bad label: "+d)}},0,_PyObject_GenericGetAttr,
0,function(b,c,e){var d;for(d=-1;;)switch(d){case -1:var f,g,h,j,k,l;f=b;g=c;h=e;d=f==M?1:3;break;case 1:d=__PyArg_NoKeywords(r,h)==0?2:3;break;case 2:j=0;d=12;break;case 3:k=d=FUNCTION_TABLE[HEAP[f+152]](f,0);d=d==0?4:5;break;case 4:j=0;d=12;break;case 5:l=a(k,g);d=l==0?6:9;break;case 6:HEAP[k]-=1;d=HEAP[k]==0?7:8;break;case 7:FUNCTION_TABLE[HEAP[HEAP[k+4]+24]](k);d=8;break;case 8:j=0;d=12;break;case 9:HEAP[l]-=1;d=HEAP[l]==0?10:11;break;case 10:FUNCTION_TABLE[HEAP[HEAP[l+4]+24]](l);d=11;break;case 11:j=
k;d=12;break;case 12:return b=j;default:assert(0,"bad label: "+d)}},0,_PyObject_Free,0]);d.run=c;c();return d});