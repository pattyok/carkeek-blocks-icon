!function(){"use strict";var e,t={8:function(){var e=window.wp.element;const t={};t.landingPage=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",x:"0",y:"0",viewBox:"0 0 512 512"},(0,e.createElement)("path",{d:"M472 24H40a24.028 24.028 0 00-24 24v416a24.028 24.028 0 0024 24h432a24.028 24.028 0 0024-24V48a24.028 24.028 0 00-24-24zM40 40h432a8.009 8.009 0 018 8v40H32V48a8.009 8.009 0 018-8zm432 432H40a8.009 8.009 0 01-8-8V104h448v360a8.009 8.009 0 01-8 8z"}),(0,e.createElement)("circle",{cx:"120",cy:"64",r:"8"}),(0,e.createElement)("circle",{cx:"88",cy:"64",r:"8"}),(0,e.createElement)("circle",{cx:"56",cy:"64",r:"8"}),(0,e.createElement)("path",{d:"M96 376a32 32 0 00-24.116 53.031q.174.205.358.4a31.991 31.991 0 0047.516 0q.184-.2.358-.4A32 32 0 0096 376zm12.036 42.54l-.026.029-.089.1a15.992 15.992 0 01-23.842 0c-.028-.032-.058-.064-.087-.1l-.028-.032a16 16 0 1124.072 0zM256 376a32 32 0 00-24.116 53.031q.174.205.358.4a31.991 31.991 0 0047.516 0q.185-.2.358-.4A32 32 0 00256 376zm12.036 42.54l-.026.029-.089.1a15.992 15.992 0 01-23.842 0c-.028-.032-.058-.064-.087-.1l-.028-.032a16 16 0 1124.072 0zM176 376a32 32 0 00-24.116 53.031q.174.205.358.4a31.991 31.991 0 0047.516 0q.184-.2.358-.4A32 32 0 00176 376zm12.036 42.54l-.026.029-.089.1a15.992 15.992 0 01-23.842 0c-.028-.032-.058-.064-.087-.1l-.028-.032a16 16 0 1124.072 0zM336 376a32 32 0 00-24.116 53.031q.174.205.358.4a31.991 31.991 0 0047.516 0q.185-.2.358-.4A32 32 0 00336 376zm12.036 42.54l-.026.029-.089.1a15.992 15.992 0 01-23.842 0c-.028-.032-.058-.064-.087-.1l-.028-.032a16 16 0 1124.072 0zM416 376a32 32 0 00-24.116 53.031q.174.205.358.4a31.991 31.991 0 0047.516 0q.185-.2.358-.4A32 32 0 00416 376zm12.036 42.54l-.026.029-.089.1a15.992 15.992 0 01-23.842 0c-.028-.032-.058-.064-.087-.1l-.028-.032a16 16 0 1124.072 0zM440 136H72a8 8 0 00-8 8v192a8 8 0 008 8h368a8 8 0 008-8V144a8 8 0 00-8-8zm-8 192H80V152h352z"}),(0,e.createElement)("path",{d:"M104 232h16a8 8 0 000-16h-16a8 8 0 000 16zM264 296h144a8 8 0 006.4-12.8l-48-64a8 8 0 00-12.8 0l-14.194 18.926-20.546-34.242a8 8 0 00-13.72 0l-48 80A8 8 0 00264 296zm96-58.667L392 280h-27.47l-16.23-27.059zm-48-13.784L345.87 280h-67.74z"}),(0,e.createElement)("circle",{cx:"352",cy:"192",r:"8"}),(0,e.createElement)("path",{d:"M184 280h-32a8 8 0 000 16h32a8 8 0 000-16zM144 224a8 8 0 008 8h80a8 8 0 000-16h-80a8 8 0 00-8 8zM104 264h80a8 8 0 000-16h-80a8 8 0 000 16zM232 248h-16a8 8 0 000 16h16a8 8 0 000-16zM104 200h48a8 8 0 000-16h-48a8 8 0 000 16z"}));var n=t,l=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/quick-link-icon","version":"0.1.0","title":"Quick Link with Icon","category":"widgets","description":"Set a link with an icon to a page.","supports":{"reusable":false,"html":false},"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"linkTitle":{"type":"string"},"linkUrl":{"type":"string","source":"attribute","selector":"a","attribute":"href"},"newWindow":{"type":"boolean"}}}'),a=window.wp.blocks,c=window.wp.i18n,r=window.wp.blockEditor,i=window.wp.components,o=[{attributes:{linkTitle:{type:"string"},linkUrl:{type:"string",source:"attribute",selector:"a",attribute:"href"}},save:t=>{let{attributes:n}=t;const{linkTitle:l,linkUrl:a}=n,c=r.useBlockProps.save();return(0,e.createElement)("div",c,(0,e.createElement)("a",{className:"ck-quick-link-icon-link",href:a},(0,e.createElement)(r.InnerBlocks.Content,null)),(0,e.createElement)("a",{className:"ck-quick-link",href:a},l))}}];(0,a.registerBlockType)(l,{icon:n.landingPage,parent:["carkeek-blocks/quick-link"],keywords:[(0,c.__)("link","carkeek-blocks"),(0,c.__)("quick","carkeek-blocks"),(0,c.__)("i would like to","carkeek-blocks"),(0,c.__)("icon","carkeek-blocks")],deprecated:o,save:t=>{let{attributes:n}=t;const{linkTitle:l,linkUrl:a,newWindow:c}=n,i=r.useBlockProps.save();return(0,e.createElement)("div",i,a?(0,e.createElement)("a",{className:"ck-quick-link",href:a,target:c&&"_blank",rel:c&&"noopener noreferrer"},(0,e.createElement)(r.InnerBlocks.Content,null),(0,e.createElement)("span",{className:"ck-quick-link-title"},l)):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(r.InnerBlocks.Content,null),(0,e.createElement)("span",{className:"ck-quick-link-title"},l)))},edit:function(t){const{attributes:n,isSelected:l,setAttributes:a}=t,{linkUrl:o,linkTitle:s,newWindow:k}=n,u=o?"is-link":"is-placeholder",m=(0,r.useBlockProps)();return(0,e.createElement)("div",m,(0,e.createElement)(r.InspectorControls,null,(0,e.createElement)(i.PanelBody,{title:(0,c.__)("Link settings","carkeek-blocks")},(0,e.createElement)(i.ToggleControl,{label:k?(0,c.__)("Opening in new tab","carkeek-blocks"):(0,c.__)("Open in new tab","carkeek-blocks"),onChange:e=>a({newWindow:e}),checked:k}))),(0,e.createElement)(r.InnerBlocks,{allowedBlocks:["carkeek-blocks/icon-block"],template:[["carkeek-blocks/icon-block",{className:"is-style-circled"}]],templateLock:!0}),l?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(i.TextControl,{className:"link__title_edit",onChange:e=>a({linkTitle:e}),value:s,label:(0,c.__)("Link Title","carkeek-blocks")}),(0,e.createElement)(r.URLInput,{value:o,onChange:e=>a({linkUrl:e}),label:(0,c.__)("Links To","carkeek-blocks")})):(0,e.createElement)("div",{className:`quick-link ${u} `},s||"Click to Edit"))}})}},n={};function l(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={exports:{}};return t[e](c,c.exports,l),c.exports}l.m=t,e=[],l.O=function(t,n,a,c){if(!n){var r=1/0;for(k=0;k<e.length;k++){n=e[k][0],a=e[k][1],c=e[k][2];for(var i=!0,o=0;o<n.length;o++)(!1&c||r>=c)&&Object.keys(l.O).every((function(e){return l.O[e](n[o])}))?n.splice(o--,1):(i=!1,c<r&&(r=c));if(i){e.splice(k--,1);var s=a();void 0!==s&&(t=s)}}return t}c=c||0;for(var k=e.length;k>0&&e[k-1][2]>c;k--)e[k]=e[k-1];e[k]=[n,a,c]},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={824:0,297:0};l.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,c,r=n[0],i=n[1],o=n[2],s=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)l.o(i,a)&&(l.m[a]=i[a]);if(o)var k=o(l)}for(t&&t(n);s<r.length;s++)c=r[s],l.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return l.O(k)},n=self.webpackChunkcarkeek_blocks_icon=self.webpackChunkcarkeek_blocks_icon||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=l.O(void 0,[297],(function(){return l(8)}));a=l.O(a)}();