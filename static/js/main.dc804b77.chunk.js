(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),i=a.n(r),c=(a(17),a(1)),l=a(2),s=a(4),u=a(3),d=a(5),m=(a(18),function(){return o.a.createElement("div",{id:"welcome"},function(){var e=document.createElement("canvas");e.setAttribute("id","canvas"),e.className="highlight",e.width=window.innerWidth,e.height=window.innerHeight,e.getContext("2d").fillRect(0,0,e.width,e.height),document.body.appendChild(e),window.overlayCanvas=e,e.onclick=p}(),o.a.createElement("button",{className:"xButton",onClick:p,style:{position:"absolute",right:"2%",top:"3%",border:"0px",background:"none",fontFamily:"Quicksand",fontWeight:"600",fontSize:"1.1em"}}," X "),o.a.createElement("div",null,o.a.createElement("p",null,"Welcome to travel destination keeper!"),o.a.createElement("p",null,"Do you like travelling? Exploring new places? Living a life of an adventurer?",o.a.createElement("p",null,"Of course, we all do! :)"),"Unfortunately, with current situation our possibilities for an adventure are usually limited to going out for groceries, or taking a walk to the park, or forest (so rebel!)."),o.a.createElement("p",null,'But all this will eventually end. And until it does - you can use all the time you have to plan your future travels :) This simple app allows you to search for places and add them to your "to visit" list. Feel free to move around and explore!'),o.a.createElement("p",null,"The app uses Google Maps Javascript API as a provider for map, autocomplete and marker functionalities. It is developed using pure React. Decision to not use redux was aimed to enforce a design of parent/children strategy, plan data flow and distribute state adequately.")))});function p(){var e=document.getElementById("welcome"),t=document.getElementById("canvas");window.overlayCanvas.style.opacity=0,delete window.overlayCanvas,t.parentNode.removeChild(t),e.parentNode.removeChild(e)}var f=a(11),h=a(7),v=[{id:1,name:"La Valette, Malta",pos:{lat:35.896166,lng:14.50916}},{id:2,name:"Reykjav\xedk, Iceland",pos:{lat:64.146525,lng:-21.942597}},{id:3,name:"Morijim, Goa, India",pos:{lat:15.620607,lng:73.731076}}],w=function(e){return o.a.createElement("div",{className:"place"},o.a.createElement("p",{style:{cursor:"pointer",width:"100%"},onClick:function(){var t=e.map.getZoom(),a=0;t>8?setTimeout(function(){e.map.setZoom(8)}):a=900,t>4?setTimeout(function(){e.map.setZoom(4)},900-a):a=1600,t>3?setTimeout(function(){e.map.setZoom(2)},1600-a):a=1900,setTimeout(function(){e.map.panTo(e.pos)},2e3-a),setTimeout(function(){e.map.setZoom(4)},2900-a),setTimeout(function(){e.map.setZoom(8)},3200-a),setTimeout(function(){e.map.setZoom(12)},4100-a)}},e.name),o.a.createElement("button",{className:"xButton",onClick:e.handleDelete,style:{position:"relative",border:"0px",background:"none",marginTop:"2%",left:"5%"}},"X"))},g=a(6),y=a.n(g),k=a(8),b=function(e){var t=new window.google.maps.Geocoder,a=window.google.maps.GeocoderStatus.OK;return new Promise(function(n,o){t.geocode({address:e},function(e,t){t!==a&&o(t),n(e)})})},E=function(e){return new Promise(function(t,a){try{t({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}catch(n){a(n)}})},O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({query:t})},a.handleClick=function(){var e={name:a.state.query,pos:a.state.pos};a.props.handleAddPlace(e),a.setState({query:"",pos:{}})},a.getPos=function(){var e=Object(k.a)(y.a.mark(function e(t){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t).then(function(){var e=Object(k.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t[0]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){return e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handlePlaceSelect=Object(k.a)(y.a.mark(function e(){var t,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.autocomplete.getPlace().formatted_address,e.next=3,a.getPos(t);case 3:n=e.sent,t&&a.setState({query:t,pos:n});case 5:case"end":return e.stop()}},e)})),a.state={autocomplete:a.props.autocomplete,query:"",pos:{}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({autocomplete:e.props.autocomplete,query:""}),e.state.autocomplete.addListener("place_changed",e.handlePlaceSelect)},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{id:"searchBarDiv"},o.a.createElement("input",{id:"searchBar",type:"search",name:"query",placeholder:"Search for places to visit...",value:this.state.query,onChange:this.handleChange}),o.a.createElement("button",{id:"addButton",type:"submit",onClick:this.handleClick},"Add"))}}]),t}(o.a.Component),j=function(e){var t=e.places.map(function(t,a){return o.a.createElement(w,{map:e.map,key:t.id,name:t.name,pos:t.pos,handleDelete:e.handleDeletePlace.bind(void 0,a)})});return o.a.createElement("div",null,o.a.createElement(O,{autocomplete:e.autocomplete,handleAddPlace:e.handleAddPlace}),o.a.createElement("div",{className:"places"},o.a.createElement("h1",null,"Places to Visit"),t))},P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={map:a.props.map},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({map:e.props.map})},1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"map"}))}}]),t}(o.a.Component),C=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).initMaps=function(){var t=new window.google.maps.Map(document.getElementById("map"),{center:{lat:46.35355,lng:19.447616},zoom:3});t.setOptions({minZoom:3,maxZoom:15});var a=new window.google.maps.places.Autocomplete(document.getElementById("searchBar"));a.setFields(["address_components","formatted_address"]);var n=e.state.places.map(function(a){return e.addMarker(a,t)});e.setState({map:t,autocomplete:a,markers:n})},e.loadMaps=function(){!function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=e,a.async=!1,a.defer=!1,t.parentNode.insertBefore(a,t)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&language=en&libraries=places&callback=initMaps"),window.initMaps=e.initMaps},e.addMarker=function(t,a){var n={id:t.id,marker:new window.google.maps.Marker({position:t.pos,map:a,title:t.name})};return n.marker.addListener("click",function(){n.infowindow&&n.infowindow.close(),n.infowindow=new window.google.maps.InfoWindow({content:t.name+", lat: ".concat(t.pos.lat,", lon: ").concat(t.pos.lng)}),n.infowindow.open(a,n.marker),a.panTo(t.pos)}),e.setState(function(e){return{markers:[].concat(Object(h.a)(e.markers),[n])}}),n},e.removeMarker=function(t){return console.log(t),Object(h.a)(e.state.markers).filter(function(e){return e.id!==t||(e.marker.setMap(null),!1)})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(f.a)({},n,o))},e.handleAddPlace=function(t){var a={id:e.state.uniquePlaceId,name:t.name,pos:t.pos},n=[].concat(Object(h.a)(e.state.places),[a]);e.setState({uniquePlaceId:e.state.uniquePlaceId+1,places:n},function(){return e.addMarker(a,e.state.map)})},e.handleDeletePlace=function(t){var a=Object(h.a)(e.state.places),n=e.removeMarker(a[t].id);a.splice(t,1),e.setState({places:a,markers:n})},e.state={map:null,autocomplete:null,markers:[],uniquePlaceId:4,places:v},e.loadMaps(),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(j,{map:this.state.map,autocomplete:this.state.autocomplete,places:this.state.places,handleAddPlace:this.handleAddPlace,handleDeletePlace:this.handleDeletePlace}),o.a.createElement(P,{map:this.state.map,places:this.state.places,markers:this.state.markers}))}}]),t}(o.a.Component);var M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m,null),o.a.createElement(C,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.dc804b77.chunk.js.map