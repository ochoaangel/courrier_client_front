(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{wHD8:function(i,t,o){"use strict";o.r(t),o.d(t,"ion_img",(function(){return r}));var s=o("Wbmy"),e=o("8XIS");const r=class{constructor(i){Object(s.l)(this,i),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.ionImgWillLoad=Object(s.f)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(s.f)(this,"ionImgDidLoad",7),this.ionError=Object(s.f)(this,"ionError",7)}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return Object(s.j)(s.b,{class:Object(e.b)(this)},Object(s.j)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}get el(){return Object(s.g)(this)}static get watchers(){return{src:["srcChanged"]}}};r.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);