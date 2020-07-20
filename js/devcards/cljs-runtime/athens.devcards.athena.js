goog.provide('athens.devcards.athena');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('athens.devcards.db');
goog.require('athens.subs');
goog.require('athens.views.athena');
goog.require('athens.views.buttons');
goog.require('datascript.core');
goog.require('devcards.core');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Create-Page","Create-Page",-1525048441)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Create-Page",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"Press button and then search \"test\" ",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56061 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56061 = (function (meta56062){
this.meta56062 = meta56062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56063,meta56062__$1){
var self__ = this;
var _56063__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56061(meta56062__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56061.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56063){
var self__ = this;
var _56063__$1 = this;
return self__.meta56062;
}));

(athens.devcards.athena.t_athens$devcards$athena56061.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56061.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42483__auto__,devcard_opts__42484__auto__){
var self__ = this;
var this__42483__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42484__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42502__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.buttons.button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var n = (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(athens.db.dsdb)) + (1));
var n_child = (n + (1));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("node","title","node/title",628940777),["Test Page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("block","string","block/string",-2066596447),["Test Block",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join(''),new cljs.core.Keyword("block","uid","block/uid",-1623585167),["uid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_child)].join('')], null)], null)], null)], null));
})], null),"Create Test Pages and Blocks"], null);
if(cljs.core.fn_QMARK_(v__42502__auto__)){
return (function (data_atom__42503__auto__,owner__42504__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42502__auto__,data_atom__42503__auto__,owner__42504__auto__], null));
});
} else {
return reagent.core.as_element(v__42502__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42484__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56061.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56062","meta56062",1776658638,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56061.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56061.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56061");

(athens.devcards.athena.t_athens$devcards$athena56061.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56061");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56061.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56061 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56061(meta56062){
return (new athens.devcards.athena.t_athens$devcards$athena56061(meta56062));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56061(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Load-Real-DB","Load-Real-DB",504458170)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Load-Real-DB",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56064 = (function (meta56065){
this.meta56065 = meta56065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56066,meta56065__$1){
var self__ = this;
var _56066__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56064(meta56065__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56066){
var self__ = this;
var _56066__$1 = this;
return self__.meta56065;
}));

(athens.devcards.athena.t_athens$devcards$athena56064.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56064.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42483__auto__,devcard_opts__42484__auto__){
var self__ = this;
var this__42483__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42484__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42502__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.devcards.db.load_real_db_button], null);
if(cljs.core.fn_QMARK_(v__42502__auto__)){
return (function (data_atom__42503__auto__,owner__42504__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42502__auto__,data_atom__42503__auto__,owner__42504__auto__], null));
});
} else {
return reagent.core.as_element(v__42502__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42484__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56065","meta56065",1227158368,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56064.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56064.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56064");

(athens.devcards.athena.t_athens$devcards$athena56064.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56064");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56064.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56064 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56064(meta56065){
return (new athens.devcards.athena.t_athens$devcards$athena56064(meta56065));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56064(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"athens.devcards.athena","athens.devcards.athena",-1935975160),new cljs.core.Keyword(null,"Athena-Prompt","Athena-Prompt",-1346277474)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Athena-Prompt",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof athens !== 'undefined') && (typeof athens.devcards !== 'undefined') && (typeof athens.devcards.athena !== 'undefined') && (typeof athens.devcards.athena.t_athens$devcards$athena56067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
athens.devcards.athena.t_athens$devcards$athena56067 = (function (meta56068){
this.meta56068 = meta56068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(athens.devcards.athena.t_athens$devcards$athena56067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56069,meta56068__$1){
var self__ = this;
var _56069__$1 = this;
return (new athens.devcards.athena.t_athens$devcards$athena56067(meta56068__$1));
}));

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56069){
var self__ = this;
var _56069__$1 = this;
return self__.meta56068;
}));

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(athens.devcards.athena.t_athens$devcards$athena56067.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__42483__auto__,devcard_opts__42484__auto__){
var self__ = this;
var this__42483__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__42484__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__42502__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_prompt_el], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.athena.athena_component], null)], null);
if(cljs.core.fn_QMARK_(v__42502__auto__)){
return (function (data_atom__42503__auto__,owner__42504__auto__){
return reagent.core.as_element(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__42502__auto__,data_atom__42503__auto__,owner__42504__auto__], null));
});
} else {
return reagent.core.as_element(v__42502__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__42484__auto__))], 0))], 0));
}));

(athens.devcards.athena.t_athens$devcards$athena56067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta56068","meta56068",-1883058859,null)], null);
}));

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$type = true);

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$ctorStr = "athens.devcards.athena/t_athens$devcards$athena56067");

(athens.devcards.athena.t_athens$devcards$athena56067.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"athens.devcards.athena/t_athens$devcards$athena56067");
}));

/**
 * Positional factory function for athens.devcards.athena/t_athens$devcards$athena56067.
 */
athens.devcards.athena.__GT_t_athens$devcards$athena56067 = (function athens$devcards$athena$__GT_t_athens$devcards$athena56067(meta56068){
return (new athens.devcards.athena.t_athens$devcards$athena56067(meta56068));
});

}

return (new athens.devcards.athena.t_athens$devcards$athena56067(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));

//# sourceMappingURL=athens.devcards.athena.js.map