(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{217:function(e,a,t){e.exports=t(457)},222:function(e,a,t){},223:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},224:function(e,a,t){},235:function(e,a,t){},455:function(e,a,t){},457:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(4),r=t.n(o),i=(t(222),t(223),t(224),t(225),t(214)),c=(t(231),t(5)),m=t(36),u=t(37),s=t(39),d=t(38),g=t(40),p=(t(205),t(44)),b=(t(233),t(72)),h=(t(235),t(58)),f=t(60),E=(t(204),t(120)),y=(t(63),t(21)),v=(t(124),t(27)),k=(t(98),t(26)),A=t(49),S=t.n(A),j=t(25),w=t.n(j),C=[{title:"Artis Name",dataIndex:"title",key:"title",render:function(e){return l.a.createElement("a",null,e)}},{title:"Jumlah Album",dataIndex:"album",key:"album"},{title:"Jumlah Lagu",dataIndex:"lagu",key:"lagu"}],L=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={data:[]},t.getData=function(){w.a.get("/api/artist").then((function(e){t.setState({data:e.data})})).catch((function(e){S()("Sorry!","error Load Data","error"),console.log(e)}))},t.handleSubmit=function(e){t.state.data;e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,a){e||(w.a.post("/api/artist/",a).then((function(e){t.getData(),S()("Good job!","Artis ".concat(e.data.name," telah ditambahkan!"),"success"),console.log("respon",e)})).catch((function(e){console.log("error update",e)})),console.log("values: ",a))}))},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.data;console.log("ini data baru",a);var t=a.map((function(e,a){return{key:a,title:e.name,album:e.album.length,lagu:e.music.length}}));return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",marginBottom:20}},"Artis Page"),l.a.createElement(v.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),l.a.createElement(v.a.Item,{label:"Artis Name"},e("name")(l.a.createElement(k.a,{placeholder:" Add New Artis"}))),l.a.createElement(v.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},l.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Add New Artis"))),l.a.createElement(E.a,{bordered:!0,columns:C,dataSource:t}))}}]),a}(l.a.Component),O=v.a.create({name:"register"})(L),D=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(O,null))}}]),a}(n.Component),I=(t(448),t(213)),x=(t(201),t(61)),M=(t(202),t(31)),T=(t(97),t(50)),B=(t(203),t(94)),_=(t(458),t(122)),N=(t(453),t(156)),F=(t(455),N.a.Panel);function P(e){console.log(e)}var U=k.a.TextArea,R=_.a.Meta,J=[{title:"Judul Lagu",dataIndex:"judul",key:"judul",render:function(e){return l.a.createElement("a",null,e)}},{title:"Link Lagu",dataIndex:"link",key:"link"},{title:"Lirik Lagu",dataIndex:"lirik",key:"lirik"}],G=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={data:[],ModalText:"Content of the modal",visible:!1,confirmLoading:!1,albumName:"",albumImage:"",title:"",audioUrl:"",lyric:""},t.SubmitLaguBaru=function(){var e=t.state,a=e.data,n=e.title,l=e.audioUrl,o=e.lyric;w.a.post("/api/music/".concat(a._id),{title:n,audioUrl:l,lyric:o}).then((function(e){t.setState({title:"",audioUrl:"",lyric:""}),S()("Good job!","Lagu untuk ".concat(e.data.name," telah ditambahkan!"),"success"),console.log("inininininin",e),t.getDataArtis()})).catch((function(e){return S()("something Wrong!","error menambah kan lagu!, silahkan coba lagi","error")})),t.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0})},t.showModal=function(){t.setState({visible:!0})},t.handleOk=function(){var e=t.state,a=e.data,n=e.albumImage,l=e.albumName;w.a.post("/api/album/".concat(a._id),{albumImage:n,albumName:l}).then((function(e){t.getDataArtis(),S()("Good job!","berhasil menambahkan Album baru","success")})).catch((function(e){return alert("respon error: ",e)})),t.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0}),setTimeout((function(){t.setState({visible:!1,confirmLoading:!1})}),2e3)},t.handleCancel=function(){console.log("Clicked cancel button"),t.setState({visible:!1})},t.getDataArtis=function(){var e=t.props.match.params._id;console.log("ini id terbaru",e),w.a.get("/api/artist/".concat(e)).then((function(e){t.setState({data:e.data})})).catch((function(e){return console.log(e)}))},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getDataArtis()}},{key:"render",value:function(){var e=this,a=this.state,t=a.visible,n=a.confirmLoading,o=(a.ModalText,a.data),r=a.title,i=a.audioUrl,c=a.lyric;console.log("ggagagga",o.music);var m=void 0!==o.music&&o.music.map((function(e,a){return{key:a,judul:e.title,link:""!==e.audioUrl?"true":"url kosong",lirik:""!==e.lyric?"true":"tidak ada lirik"}}));return l.a.createElement("div",null,l.a.createElement(B.a,{style:{paddingTop:10,paddingBottom:10,paddingLeft:15,paddingRight:15},color:"#87d068"},"Detail Page for ",o.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(N.a,{defaultActiveKey:["1"],onChange:P},l.a.createElement(F,{header:"Tambahkan Lagu Baru",key:"1"},l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(k.a,{placeholder:"Judul Lagu",allowClear:!0,value:r,onChange:function(a){return e.setState({title:a.target.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(k.a,{placeholder:"Url Lagu",allowClear:!0,value:i,onChange:function(a){return e.setState({audioUrl:a.target.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(U,{placeholder:"Lyric Lagu",allowClear:!0,value:c,onChange:function(a){return e.setState({lyric:a.target.value})}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(y.a,{onClick:this.SubmitLaguBaru,type:"primary"},"Tambahkan")))),l.a.createElement(F,{header:"List Lagu",key:"2"},l.a.createElement(E.a,{bordered:!0,columns:J,dataSource:m})),l.a.createElement(F,{header:"List Album",key:"3"},l.a.createElement("div",{className:"gutter-example"},void 0!==o.album&&o.album.length<0?l.a.createElement(T.a,{image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original",imageStyle:{height:60},description:l.a.createElement("span",null,"Album Masih Kosong")},l.a.createElement(y.a,{onClick:this.showModal,type:"primary"},"Buat Album Pertama")):l.a.createElement(x.a,{gutter:[{xs:8,sm:16,md:24,lg:32},20]},void 0!==o.album&&o.album.map((function(a,t){return l.a.createElement(M.a,{key:t,className:"gutter-row",span:6,onClick:function(){e.props.history.push("/album_detail/".concat(a._id,"/").concat(o._id))}},l.a.createElement(_.a,{hoverable:!0,style:{width:240},cover:l.a.createElement("img",{alt:"example",src:a.albumImage})},l.a.createElement(R,{title:a.albumName,description:"".concat(a.albumSong.length," of songs")})))})),l.a.createElement(M.a,{className:"gutter-row",span:6},l.a.createElement(_.a,{onClick:this.showModal,hoverable:!0,style:{width:240},cover:l.a.createElement("img",{alt:"example",src:"https://static.thenounproject.com/png/396915-200.png"})},l.a.createElement(R,{title:"add new Album",description:"o of songs"})))),l.a.createElement("div",null,l.a.createElement(I.a,{title:"Add Album",visible:t,onOk:this.handleOk,confirmLoading:n,onCancel:this.handleCancel},l.a.createElement(k.a,{placeholder:"Album Name",value:this.state.albumName,onChange:function(a){return e.setState({albumName:a.target.value})}}),l.a.createElement(k.a,{style:{marginTop:20},placeholder:"Album Image",value:this.state.albumImage,onChange:function(a){return e.setState({albumImage:a.target.value})}})))))))}}]),a}(n.Component),W=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={confirmDirty:!1,edit:!0,data:[]},t.getData=function(){w.a.get("/api/admob").then((function(e){console.log("admob data",e.data[0].admobID),t.setState({data:e.data[0]})})).catch((function(e){console.log(e)}))},t.handleSubmit=function(e){var a=t.state.data;console.log("id",a._id),e.preventDefault(),t.props.form.validateFieldsAndScroll((function(e,n){e||(w.a.put("/api/admob/update/".concat(a._id),n).then((function(e){console.log("succes",e),t.getData()})).catch((function(e){console.log("error update",e)})),console.log("Received values of form: ",n))}))},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a=this.state.data;return l.a.createElement(n.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",marginBottom:20}},"Admob Page"),l.a.createElement(v.a,Object.assign({},{labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},{onSubmit:this.handleSubmit}),l.a.createElement(v.a.Item,{label:"Admob Id"},e("admobID")(l.a.createElement(k.a,{placeholder:a.admobID}))),l.a.createElement(v.a.Item,{label:"Admob Aplikasi"},e("admobAplikasi")(l.a.createElement(k.a,{placeholder:a.admobAplikasi}))),l.a.createElement(v.a.Item,{label:"Admob Banner"},e("admobBanner")(l.a.createElement(k.a,{placeholder:a.admobBanner}))),l.a.createElement(v.a.Item,{label:"Admob Intertial"},e("admobIDIntersial")(l.a.createElement(k.a,{placeholder:a.admobIDIntersial}))),l.a.createElement(v.a.Item,{label:"Admob Reward"},e("admobIDReward")(l.a.createElement(k.a,{placeholder:a.admobIDReward}))),l.a.createElement(v.a.Item,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},l.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Update")))))}}]),a}(l.a.Component),z=v.a.create({name:"register"})(W),H=function(e){function a(){return Object(m.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement(z,null)}}]),a}(n.Component),K=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={dataAlbum:[],dataMusik:[],addSong:"",idSong:""},t.getDataAlbum=function(){var e=t.props.match.params._id;w.a.get("/api/album/".concat(e)).then((function(e){t.setState({dataAlbum:e.data}),console.log("ini album",e.data)})).catch((function(e){return console.log(e)}))},t.getDataArtist=function(){var e=t.props.match.params._album;w.a.get("/api/artist/".concat(e)).then((function(e){t.setState({dataMusik:e.data.music}),console.log("ini artist",e.data.music)})).catch((function(e){return console.log(e)}))},t.addMusikToAlbum=function(){var e=t.state.idSong,a=t.props.match.params._id;w.a.post("/api/album/assign/music/".concat(a,"/").concat(e)).then((function(e){S()("Good job!","berhasil menambahkan lagu","success"),t.getDataAlbum(),t.setState({idSong:"",addSong:""})})).catch((function(e){S()("error!","gagal menambahkan lagu","error"),console.log("ini error menambahkan lagu",e)}))},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getDataArtist(),this.getDataAlbum()}},{key:"render",value:function(){var e=this,a=this.state,t=a.dataAlbum,o=a.dataMusik;return console.log("album song",t.albumSong),console.log("musik",o),l.a.createElement(n.Fragment,null,l.a.createElement(B.a,{style:{paddingTop:5,paddingBottom:5,paddingLeft:25,paddingRight:25,marginBottom:10},color:"magenta"},"album Page Detail"),l.a.createElement("br",null),l.a.createElement("p",null,"Nama Album :"," ",void 0!==t.albumName&&t.albumName),l.a.createElement("p",null,"Jumlah Lagu :"," ",void 0!==t.albumSong&&t.albumSong.length," ","of song"),l.a.createElement(B.a,{style:{paddingTop:5,paddingBottom:5,paddingLeft:25,paddingRight:25,marginBottom:10,marginTop:40},color:"magenta"},"tambahkan Lagu :"),l.a.createElement(k.a,{style:{marginBottom:20},placeholder:"Tambahkan Lagu",value:this.state.addSong}),l.a.createElement(y.a,{style:{marginBottom:20},type:"primary",onClick:this.addMusikToAlbum},"Submit"),l.a.createElement("div",{style:{background:"grey",padding:5,paddingLeft:30}},l.a.createElement("p",{style:{color:"white",fontSize:16,fontWeight:"bold"}},"List Lagu yang Sekarang :")),void 0!==t.albumSong&&t.albumSong.length>=0?t.albumSong.map((function(e,a){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{style:{marginBottom:10,padding:5,paddingLeft:30},key:a},e.title))})):l.a.createElement(T.a,{style:{marginTop:20}}),l.a.createElement("div",{style:{background:"grey",padding:5,paddingLeft:30,marginTop:50}},l.a.createElement("p",{style:{color:"white",fontSize:16,fontWeight:"bold"}},"Daftar List Lagu")),o.map((function(a,t){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{onClick:function(){e.setState({addSong:a.title,idSong:a._id})},style:{marginBottom:10,padding:5,paddingLeft:30},key:t},a.title))})))}}]),a}(n.Component),Q=b.a.Header,Y=b.a.Content,$=b.a.Footer,q=b.a.Sider,V=p.a.SubMenu,X=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={collapsed:!1,data:[]},t.onCollapse=function(e){console.log(e),t.setState({collapsed:e})},t.getData=function(){w.a.get("/api/artist").then((function(e){t.setState({data:e.data})})).catch((function(e){return console.log(e)}))},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement(h.a,{history:f.f},l.a.createElement(b.a,{style:{minHeight:"100vh"}},l.a.createElement(q,{collapsible:!0,collapsed:this.state.collapsed,onCollapse:this.onCollapse},l.a.createElement("div",{className:"logo"}),l.a.createElement(p.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},l.a.createElement(p.a.Item,{key:"-1"},l.a.createElement(h.b,{to:"/"},l.a.createElement(c.a,{type:"android"}),l.a.createElement("span",null,"Admob"))),l.a.createElement(V,{key:"-2",title:l.a.createElement("span",null,l.a.createElement(h.b,{to:"/music"},l.a.createElement(c.a,{type:"user"}),l.a.createElement("span",null,"Artist")))},e.map((function(e,a){return l.a.createElement(p.a.Item,{key:a},l.a.createElement(h.b,{to:"/artis_detail/".concat(e._id)},l.a.createElement(c.a,{type:"bug"}),l.a.createElement("span",null,e.name)))}))))),l.a.createElement(b.a,null,l.a.createElement(Q,{style:{background:"#fff",padding:0}},l.a.createElement("div",{style:{marginLeft:20,textAlign:"center",fontSize:20}},l.a.createElement("h1",null,"ADMIN PAGE of MUSIC APP"))),l.a.createElement(Y,{style:{margin:"0 16px"}},l.a.createElement(i.a,{style:{margin:"16px 0"}}),l.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0},l.a.createElement(H,null)),l.a.createElement(f.a,{path:"/music",component:D}),l.a.createElement(f.a,{path:"/artis_detail/:_id",component:G}),l.a.createElement(f.a,{path:"/album_detail/:_id/:_album",component:K})))),l.a.createElement($,{style:{textAlign:"center"}},"Admin Page Music App \xa92020 Created by Robert Yulisman"))))}}]),a}(n.Component);var Z=function(){return l.a.createElement(X,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[217,1,2]]]);
//# sourceMappingURL=main.87f1fcc1.chunk.js.map