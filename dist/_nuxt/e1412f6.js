(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{684:function(e,t,r){"use strict";r.r(t);r(76);var n=r(24),o={layout:"admin",components:{},data:function(){return{dialog:!1,search:"",rols:[{name:"Administrador",code:"2"},{name:"Booster",code:"1"},{name:"Usuario",code:"0"}],headers:[{text:"Usuario",value:"username"},{text:"Email",value:"email"},{text:"Rol",value:"rol"},{text:"Acciones",value:"actions",sortable:!1}],users:[],editedIndex:-1,editedItem:{},defaultItem:{}}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo usuario":"Editar usuario"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{editUser:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var path;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return path="/users/"+e,r.prev=1,r.next=4,t.$axios.put(path,t.editedItem);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(1),t.error=r.t0.response.data.message;case 9:case"end":return r.stop()}}),r,null,[[1,6]])})))()},addUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/users",e.editedItem);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),e.error=t.t0.response.data.message;case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},deleteUser:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var path;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,path="/users/"+e,r.next=4,t.$axios.delete(path);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r.catch(0),t.error=r.t0.response.data.message;case 9:case"end":return r.stop()}}),r,null,[[0,6]])})))()},initialize:function(){var e=this;this.$axios.get("/users").then((function(t){e.users=t.data,e.users.forEach((function(e){switch(e.role){case 0:e.rol="Usuario";break;case 1:e.rol="Booster";break;case 2:e.rol="Administrador"}}))}))},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){if(confirm("¿Estás seguro de que quieres eliminar este usuario?")){var t=this.users.indexOf(e);this.deleteUser(e._id),this.users.splice(t,1)}},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){this.editedIndex>-1?(this.editUser(this.editedItem._id),Object.assign(this.users[this.editedIndex],this.editedItem)):(this.addUser(),this.users.push(this.editedItem)),this.initialize(),this.close()}},head:function(){return{title:"Panel de administración"}}},c=r(21),d=r(27),l=r.n(d),v=r(157),m=r(156),f=r(44),h=r(381),x=r(398),_=r(672),k=r(384),I=r(158),w=r(382),V=r(437),y=r(388),C=r(366),R=r(53),U=r(394),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-data-table",{staticClass:"elevation-1",attrs:{"item-key":"_id",headers:e.headers,items:e.users,search:e.search,"sort-by":"rol"},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:""}},[r("v-card-title",[e._v("Usuarios")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-dialog",{attrs:{"max-height":"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[r("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},n),[r("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("Nuevo usuario\n            ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Nombre de usuario"},model:{value:e.editedItem.username,callback:function(t){e.$set(e.editedItem,"username",t)},expression:"editedItem.username"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{type:"password",label:"Contraseña"},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{items:e.rols,"item-text":"name","item-value":"code",label:"Rol"},model:{value:e.editedItem.role,callback:function(t){e.$set(e.editedItem,"role",t)},expression:"editedItem.role"}})],1)],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,c=t.attrs;return[r("v-icon",e._g(e._b({attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},"v-icon",c,!1),o),[e._v("\n            mdi-pencil\n          ")])]}}],null,!0)},[e._v(" "),r("span",[e._v("Editar este usuario")])]),e._v(" "),r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,c=t.attrs;return[r("v-icon",e._g(e._b({attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},"v-icon",c,!1),o),[e._v("\n            mdi-delete\n          ")])]}}],null,!0)},[e._v(" "),r("span",[e._v("Eliminar este usuario")])])]}},{key:"no-data",fn:function(){return[r("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:h.a,VContainer:x.a,VDataTable:_.a,VDialog:k.a,VIcon:I.a,VRow:w.a,VSelect:V.a,VSpacer:y.a,VTextField:C.a,VToolbar:R.a,VTooltip:U.a})}}]);