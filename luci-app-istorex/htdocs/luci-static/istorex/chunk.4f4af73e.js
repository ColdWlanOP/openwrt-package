var r=(c,m,i)=>new Promise((w,t)=>{var n=l=>{try{o(i.next(l))}catch(v){t(v)}},s=l=>{try{o(i.throw(l))}catch(v){t(v)}},o=l=>l.done?w(l.value):Promise.resolve(l.value).then(n,s);o((i=i.apply(c,m)).next())});import{_ as V,d as T,u as I,s as f,j as A,v as M,o as E,c as b,a as u,x as _,y as h,z as D,A as k,m as y,l as U,B as q,p as G,q as N,C as B,T as x}from"./index.js?v=5b4be379";const p=c=>(G("data-v-c5783954"),c=c(),N(),c),L=["onSubmit"],O=p(()=>u("p",null,[D(" \u6B22\u8FCE\u4F7F\u7528\u5FEB\u901F\u7F51\u7EDC\u914D\u7F6E\u5411\u5BFC\uFF0C\u8BF7\u9009\u62E9\u4E00\u79CD\u8FDE\u63A5\u65B9\u5F0F\u4EE5\u5F00\u59CB\u8054\u7F51\uFF0C\u6216\u4F7F\u7528\u5DE6\u4FA7\u83DC\u5355\u8FDB\u884C\u8054\u7F51\u914D\u7F6E "),u("br"),D(" \u6CA1\u627E\u5230\u60F3\u8981\u7684\u914D\u7F6E\uFF1F\u8BF7\u4F7F\u7528 "),u("a",{href:"/cgi-bin/luci/admin/network/network",target:"_blank"},"\u9AD8\u7EA7\u6A21\u5F0F")],-1)),j=p(()=>u("div",{class:"label-name"},[u("span",null,"\u8054\u7F51\u65B9\u5F0F")],-1)),z={class:"label-value"},R={class:"label-flex"},H={style:{display:"none"}},J={key:0,class:"ul-container"},K=p(()=>u("div",{class:"ul-container_title"},[u("span",null,"\u62E8\u53F7\u8054\u7F51\u914D\u7F6E")],-1)),Q=p(()=>u("div",{class:"label-value"},null,-1)),W=p(()=>u("div",{class:"label-name"},[u("span",null,"\u8D26\u53F7")],-1)),X={class:"label-value"},Y=p(()=>u("div",{class:"label-name"},[u("span",null,"\u5BC6\u7801")],-1)),Z={class:"label-value"},$={key:1,class:"label-btns"},uu=["disabled"],eu={key:2,class:"label-msg"},au=T({__name:"index",setup(c){return r(this,null,function*(){let m,i;const w=I(),t=f(""),n=f(!1),s=f(""),o=A({account:"",password:""}),l=A({wanProto:"dhcp",dnsProto:"auto",staticIp:"",subnetMask:"",manualDnsIp:[],gateway:""}),v=()=>r(this,null,function*(){n.value=!0;try{const d=yield B.Guide.Pppoe.GET(),{result:e}=d.data;e&&(o.account=e.account||"",o.password=e.password||"")}catch(d){s.value=d}t.value=yield w.getAsyncNetworkProto,n.value=!1});[m,i]=M(()=>v()),yield m,i();const P=()=>r(this,null,function*(){switch(t.value){case"pppoe":yield S();break;case"dhcp":yield g();break;default:s.value="\u627E\u4E0D\u5230\u4F60\u8981\u7684\u914D\u7F6E";break}}),S=()=>r(this,null,function*(){if(o.account==""){s.value="\u8D26\u53F7\u4E0D\u80FD\u4E3A\u7A7A";return}if(o.password==""){s.value="\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A";return}n.value=!0;const d=x.Loading("\u4FDD\u5B58\u4E2D...");try{const e=yield B.Guide.Pppoe.POST({account:o.account,password:o.password});if(e.data){const{error:a,success:F}=e.data;a&&(s.value=a),(F==null||F==0)&&(s.value="\u914D\u7F6E\u5B8C\u6210")}}catch(e){s.value=e}finally{}n.value=!1,d.Close()}),g=()=>r(this,null,function*(){const d={wanProto:l.wanProto,dnsProto:l.dnsProto};n.value=!0;const e=x.Loading("\u4FDD\u5B58\u4E2D...");try{const a=yield B.Guide.ClientModel.POST(d);if(a!=null&&a.data){const{success:F,error:C}=a==null?void 0:a.data;C&&(s.value=C),(F==null||F==0)&&(s.value="\u914D\u7F6E\u5B8C\u6210")}}catch(a){s.value=a}n.value=!1,e.Close()});return(d,e)=>(E(),b("form",{class:"form-container",onSubmit:q(P,["prevent"])},[O,j,u("div",z,[u("div",R,[u("label",null,[_(u("input",{type:"radio",value:"pppoe","onUpdate:modelValue":e[0]||(e[0]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u8D26\u53F7\u5BC6\u7801")]),u("label",null,[_(u("input",{type:"radio",value:"dhcp","onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u81EA\u52A8\u8054\u7F51")]),u("label",H,[_(u("input",{type:"radio",value:"static",hidden:"true","onUpdate:modelValue":e[2]||(e[2]=a=>t.value=a)},null,512),[[h,t.value]]),D("\u7F51\u5173\u8054\u7F51")])])]),t.value=="pppoe"?(E(),b("ul",J,[K,Q,W,u("div",X,[_(u("input",{type:"text",placeholder:"\u5BBD\u5E26\u8D26\u53F7","onUpdate:modelValue":e[3]||(e[3]=a=>o.account=a),required:""},null,512),[[k,o.account,void 0,{trim:!0}]])]),Y,u("div",Z,[_(u("input",{type:"password",placeholder:"\u5BBD\u5E26\u5BC6\u7801","onUpdate:modelValue":e[4]||(e[4]=a=>o.password=a),required:""},null,512),[[k,o.password,void 0,{trim:!0}]])])])):y("",!0),t.value=="pppoe"||t.value=="dhcp"?(E(),b("div",$,[u("button",{class:"sumbit",disabled:n.value},"\u4FDD\u5B58",8,uu)])):y("",!0),s.value?(E(),b("div",eu,[u("span",null,U(s.value),1)])):y("",!0)],40,L))})}});var ou=V(au,[["__scopeId","data-v-c5783954"]]);export{ou as default};