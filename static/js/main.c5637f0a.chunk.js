(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),s=(a(17),a(1)),i=a(2),l=a(4),u=a(3),p=a(5),m=(a(18),a(11)),d=a(7),f=[{id:1,name:"La Valette, Malta",pos:{lat:35.896166,lng:14.50916}},{id:2,name:"Reykjav\xedk, Iceland",pos:{lat:64.146525,lng:-21.942597}},{id:3,name:"Cape Canaveral, Florida, US",pos:{lat:28.39221,lng:-80.60771}},{id:4,name:"Morijim, Goa, India",pos:{lat:15.620607,lng:73.731076}},{id:5,name:"Costa Rica",pos:{lat:9.74891,lng:-83.753428}}],h=function(e){return o.a.createElement("div",{className:"place"},o.a.createElement("p",{style:{cursor:"pointer",width:"100%"},onClick:function(){var t=e.map.getZoom(),a=0;t>8?setTimeout(function(){e.map.setZoom(8)}):a=900,t>4?setTimeout(function(){e.map.setZoom(4)},900-a):a=1600,setTimeout(function(){e.map.panTo(e.pos)},1700-a),setTimeout(function(){e.map.setZoom(8)},2600-a),setTimeout(function(){e.map.setZoom(12)},3500-a)}},e.name),o.a.createElement("button",{onClick:e.handleDelete,style:{position:"relative",marginTop:"5%",width:"8%",height:"50%"}},"X"))},w=a(6),v=a.n(w),g=a(8),k=function(e){var t=new window.google.maps.Geocoder,a=window.google.maps.GeocoderStatus.OK;return new Promise(function(n,o){t.geocode({address:e},function(e,t){t!==a&&o(t),n(e)})})},b=function(e){return new Promise(function(t,a){try{t({lat:e.geometry.location.lat(),lng:e.geometry.location.lng()})}catch(n){a(n)}})},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({query:t})},a.handleClick=function(){var e={name:a.state.query,pos:a.state.pos};a.props.handleAddPlace(e),a.setState({query:"",pos:{}})},a.getPos=function(){var e=Object(g.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t).then(function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t[0]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){return e});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handlePlaceSelect=Object(g.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.autocomplete.getPlace().formatted_address,e.next=3,a.getPos(t);case 3:n=e.sent,t&&a.setState({query:t,pos:n});case 5:case"end":return e.stop()}},e)})),a.state={autocomplete:a.props.autocomplete,query:"",pos:{}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({autocomplete:e.props.autocomplete,query:""}),e.state.autocomplete.addListener("place_changed",e.handlePlaceSelect)},1e3)}},{key:"render",value:function(){return o.a.createElement("div",{id:"searchBarDiv"},o.a.createElement("input",{id:"searchBar",type:"search",name:"query",placeholder:"Search for places to visit...",value:this.state.query,onChange:this.handleChange}),o.a.createElement("button",{id:"addButton",type:"submit",onClick:this.handleClick},"Add"))}}]),t}(o.a.Component),j=function(e){var t=e.places.map(function(t,a){return o.a.createElement(h,{map:e.map,key:t.id,name:t.name,pos:t.pos,handleDelete:e.handleDeletePlace.bind(void 0,a)})});return o.a.createElement("div",null,o.a.createElement(y,{autocomplete:e.autocomplete,handleAddPlace:e.handleAddPlace}),o.a.createElement("div",{className:"places"},o.a.createElement("h1",null,"Places to Visit"),t))},O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={map:a.props.map},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.setState({map:e.props.map})},1e3)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{id:"map"}))}}]),t}(o.a.Component),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).initMaps=function(){var t=new window.google.maps.Map(document.getElementById("map"),{center:{lat:43.89686,lng:20.447616},zoom:4});t.setOptions({minZoom:3,maxZoom:15});var a=new window.google.maps.places.Autocomplete(document.getElementById("searchBar"));a.setFields(["address_components","formatted_address"]);var n=e.state.places.map(function(a){return e.addMarker(a,t)});e.setState({map:t,autocomplete:a,markers:n})},e.loadMaps=function(){!function(e){var t=window.document.getElementsByTagName("script")[0],a=window.document.createElement("script");a.src=e,a.async=!1,a.defer=!1,t.parentNode.insertBefore(a,t)}("https://maps.googleapis.com/maps/api/js?key=AIzaSyCqg_-lwa3fsOr7a1cDpkr1RJMet2nwXQE&language=en&libraries=places&callback=initMaps"),window.initMaps=e.initMaps},e.addMarker=function(t,a){var n={id:t.id,marker:new window.google.maps.Marker({position:t.pos,map:a,title:t.name})};return n.marker.addListener("click",function(){n.infowindow&&n.infowindow.close(),n.infowindow=new window.google.maps.InfoWindow({content:t.name+", lat: ".concat(t.pos.lat,", lon: ").concat(t.pos.lng)}),n.infowindow.open(a,n.marker),a.panTo(t.pos)}),e.setState(function(e){return{markers:[].concat(Object(d.a)(e.markers),[n])}}),n},e.removeMarker=function(t){return console.log(t),Object(d.a)(e.state.markers).filter(function(e){return e.id!==t||(e.marker.setMap(null),!1)})},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(m.a)({},n,o))},e.handleAddPlace=function(t){var a={id:e.state.uniquePlaceId,name:t.name,pos:t.pos},n=[].concat(Object(d.a)(e.state.places),[a]);e.setState({uniquePlaceId:e.state.uniquePlaceId+1,places:n},function(){return e.addMarker(a,e.state.map)})},e.handleDeletePlace=function(t){var a=Object(d.a)(e.state.places),n=e.removeMarker(a[t].id);a.splice(t,1),e.setState({places:a,markers:n})},e.state={map:null,autocomplete:null,markers:[],uniquePlaceId:4,places:f},e.loadMaps(),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("main",null,o.a.createElement(j,{map:this.state.map,autocomplete:this.state.autocomplete,places:this.state.places,handleAddPlace:this.handleAddPlace,handleDeletePlace:this.handleDeletePlace}),o.a.createElement(O,{map:this.state.map,places:this.state.places,markers:this.state.markers}))}}]),t}(o.a.Component);var P=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(E,null)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.c5637f0a.chunk.js.map