(()=>{var a={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return a.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)a.o(n,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(a,t)=>Object.prototype.hasOwnProperty.call(a,t),r:a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}},t={};(()=>{"use strict";function n(a,t){return n=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},n(a,t)}function e(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,n(a,t)}a.r(t),a.d(t,{components:()=>S,helpers:()=>U,models:()=>l});const s=flarum.core.compat["common/Model"];var o=a.n(s);const i=flarum.core.compat["common/utils/mixin"];var r=function(a){function t(){return a.apply(this,arguments)||this}return e(t,a),t}(a.n(i)()(o(),{points:o().attribute("points"),name:o().attribute("name"),color:o().attribute("color")})),l={Rank:r};const c=flarum.core.compat["admin/app"];var u=a.n(c);const f=flarum.core.compat["admin/components/ExtensionPage"];var d=a.n(f);const p=flarum.core.compat["common/components/Button"];var g=a.n(p);const v=flarum.core.compat["admin/utils/saveSettings"];var h=a.n(v);const k=flarum.core.compat["common/components/Switch"];var b=a.n(k);const y=flarum.core.compat["common/utils/withAttr"];var w=a.n(y);const P=flarum.core.compat["common/utils/Stream"];var N=a.n(P);const _=flarum.core.compat["common/utils/ItemList"];var R=a.n(_);const L=flarum.core.compat["admin/components/UploadImageButton"];var O=function(a){function t(){return a.apply(this,arguments)||this}return e(t,a),t.prototype.resourceUrl=function(){return u().forum.attribute("apiUrl")+"/"+this.attrs.path},t}(a.n(L)()),x=function(a){function t(){return a.apply(this,arguments)||this}e(t,a);var n=t.prototype;return n.oninit=function(t){var n=this;a.prototype.oninit.call(this,t),this.fields=["convertedLikes","amountPerPost","amountPerDiscussion","postStartAmount","rankAmt","iconName","blockedUsers","iconNameAlt"],this.switches=["autoUpvotePosts","customRankingImages","rateLimit","showVotesOnDiscussionPage","useAlternateLayout","altPostVotingUi","upVotesOnly","firstPostOnly"],this.ranks=u().store.all("ranks"),this.values={},this.settingsPrefix="fof-gamification";var e=u().data.settings;this.fields.forEach((function(a){return n.values[a]=N()(e[n.addPrefix(a)])})),this.switches.forEach((function(a){return n.values[a]=N()(!!Number(e[n.addPrefix(a)]))})),this.newRank={points:N()(""),name:N()(""),color:N()("")}},n.content=function(){return m("div",{className:"SettingsPage"},m("div",{className:"container"},m("form",{onsubmit:this.onsubmit.bind(this)},this.settingsItems().toArray())))},n.updateName=function(a,t){a.save({name:t})},n.updatePoints=function(a,t){a.save({points:t})},n.updateColor=function(a,t){a.save({color:t})},n.deleteRank=function(a){var t=this;a.delete(),this.ranks.some((function(n,e){if(n.data.id===a.data.id)return t.ranks.splice(e,1),!0}))},n.addRank=function(){var a=this;u().store.createRecord("ranks").save({points:this.newRank.points(),name:this.newRank.name(),color:this.newRank.color()}).then((function(){a.newRank.color(""),a.newRank.name(""),a.newRank.points(""),m.redraw()}))},n.changed=function(){var a=this,t=this.switches.some((function(t){return a.values[t]()!==("1"==u().data.settings[a.addPrefix(t)])}));return this.fields.some((function(t){return a.values[t]()!==u().data.settings[a.addPrefix(t)]}))||t},n.prepareSubmissionData=function(){var a=this,t={};return this.switches.forEach((function(n){return t[a.addPrefix(n)]=a.values[n]()})),this.fields.forEach((function(n){return t[a.addPrefix(n)]=a.values[n]()})),t},n.onsubmit=function(a){var t=this;a.preventDefault(),this.loading||(this.loading=!0,u().alerts.dismiss(this.successAlert),h()(this.prepareSubmissionData()).then(this.onsaved.bind(this)).then((function(){return window.location.reload()})).catch(console.error).then((function(){t.loading=!1})))},n.addPrefix=function(a){return this.settingsPrefix+"."+a},n.settingsItems=function(){var a=this,t=new(R());return t.add("convertLikesToUpvotes",m("div",null,m("div",{className:"helpText"},u().translator.trans("fof-gamification.admin.page.convert.help")),void 0===this.values.convertedLikes()?m(g(),{type:"button",className:"Button Button--warning Ranks-button","aria-label":u().translator.trans("fof-gamification.admin.page.convert.button"),onclick:function(){u().request({url:u().forum.attribute("apiUrl")+"/fof/gamification/convert",method:"POST"}).then(a.values.convertedLikes("converting"))}},u().translator.trans("fof-gamification.admin.page.convert.button")):"converting"===this.values.convertedLikes()?m("label",null,u().translator.trans("fof-gamification.admin.page.convert.converting")):m("label",null," ",u().translator.trans("fof-gamification.admin.page.convert.converted",{number:this.values.convertedLikes()}))),100),t.add("ranks",m("fieldset",{className:"SettingsPage-ranks"},m("legend",null,u().translator.trans("fof-gamification.admin.page.ranks.title")),m("label",null,u().translator.trans("fof-gamification.admin.page.ranks.ranks")),m("div",{className:"helpText"},u().translator.trans("fof-gamification.admin.page.ranks.help.help")),m("div",{className:"Ranks--Container"},this.ranks.map((function(t){return m("div",null,m("input",{className:"FormControl Ranks-number",type:"number",value:t.points(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.points"),oninput:w()("value",a.updatePoints.bind(a,t))}),m("input",{className:"FormControl Ranks-name",value:t.name(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:w()("value",a.updateName.bind(a,t))}),m("input",{className:"FormControl Ranks-color",value:t.color(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:w()("value",a.updateColor.bind(a,t))}),m(g(),{type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-times",onclick:a.deleteRank.bind(a,t)}))}))),m("div",null,m("input",{className:"FormControl Ranks-number",value:this.newRank.points(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.points"),type:"number",oninput:w()("value",this.newRank.points)}),m("input",{className:"FormControl Ranks-name",value:this.newRank.name(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.name"),oninput:w()("value",this.newRank.name)}),m("input",{className:"FormControl Ranks-color",value:this.newRank.color(),placeholder:u().translator.trans("fof-gamification.admin.page.ranks.help.color"),oninput:w()("value",this.newRank.color)}),m(g(),{type:"button",className:"Button Button--warning Ranks-button",icon:"fa fa-plus","aria-label":"add",onclick:this.addRank.bind(this)})),m("label",null,u().translator.trans("fof-gamification.admin.page.ranks.number_title")),m("input",{className:"FormControl Ranks-default",value:this.values.rankAmt()||"",placeholder:"2",oninput:w()("value",this.values.rankAmt)})),90),t.add("voteSettings",m("[",null,m("legend",null,u().translator.trans("fof-gamification.admin.page.votes.title")),this.voteItems().toArray()),80),t.add("rankingsPage",m("[",null,m("legend",null,u().translator.trans("fof-gamification.admin.page.rankings.title")),this.rankingsItems().toArray()),70),t.add("submit",m(g(),{type:"submit",className:"Button Button--primary Ranks-save",loading:this.loading,disabled:!this.changed()},u().translator.trans("fof-gamification.admin.page.save_settings")),0),t},n.voteItems=function(){var a=new(R());return a.add("icon",m("[",null,m("label",null,u().translator.trans("fof-gamification.admin.page.votes.icon_name")),m("div",{className:"helpText"},u().translator.trans("fof-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconName()||"",placeholder:"thumbs",oninput:w()("value",this.values.iconName)})),100),a.add("altIcon",m("[",null,m("label",null,u().translator.trans("fof-gamification.admin.page.alt_votes.icon_name")),m("div",{className:"helpText"},u().translator.trans("fof-gamification.admin.page.votes.icon_help")),m("input",{className:"FormControl Ranks-default",value:this.values.iconNameAlt()||"",placeholder:"arrow",oninput:w()("value",this.values.iconNameAlt)})),90),a.add("autoUpvote",m(b(),{state:this.values.autoUpvotePosts()||!1,onchange:this.values.autoUpvotePosts,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.auto_upvote")),80),a.add("rateLimit",m(b(),{state:this.values.rateLimit()||!1,onchange:this.values.rateLimit,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.rate_limit")),70),a.add("opVotesOnDiscussionList",m(b(),{state:this.values.showVotesOnDiscussionPage()||!1,onchange:this.values.showVotesOnDiscussionPage,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.discussion_page")),60),a.add("altDiscussionListLayout",m(b(),{state:this.values.useAlternateLayout()||!1,onchange:this.values.useAlternateLayout,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.alternate_layout")),50),a.add("altPostLayout",m(b(),{state:this.values.altPostVotingUi()||!1,onchange:this.values.altPostVotingUi,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.alternate_post_layout")),40),a.add("upvotesOnly",m(b(),{state:this.values.upVotesOnly()||!1,onchange:this.values.upVotesOnly,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.upvotes_only")),30),a.add("firstPostOnly",m(b(),{state:this.values.firstPostOnly()||!1,onchange:this.values.firstPostOnly,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.votes.first_post_only")),20),a},n.rankingsItems=function(){var a=new(R());return a.add("customImages",m(b(),{state:this.values.customRankingImages()||!1,onchange:this.values.customRankingImages,className:"votes-switch"},u().translator.trans("fof-gamification.admin.page.rankings.enable")),100),a.add("ignoredUsers",m("[",null,m("label",null,u().translator.trans("fof-gamification.admin.page.rankings.blocked.title")),m("input",{className:"FormControl Ranks-blocked",placeholder:u().translator.trans("fof-gamification.admin.page.rankings.blocked.placeholder"),value:this.values.blockedUsers()||"",oninput:w()("value",this.values.blockedUsers)})),90),a.add("customImages",m("[",null,m("div",{className:"helpText"},u().translator.trans("fof-gamification.admin.page.rankings.blocked.help")),[1,2,3].map((function(a){return m("[",null,m("label",{className:"Upload-label"},u().translator.trans("fof-gamification.admin.page.rankings.custom_image_"+a)),m(O,{className:"Upload-button",name:"fof-gamification.topimage"+a,path:"fof/gamification/topimage"+a,"aria-label":u().translator.trans("fof-gamification.admin.page.rankings.custom_image_"+a)}),m("br",null))}))),80),a},t}(d()),U={rankLabel:function(a,t){void 0===t&&(t={}),t.style=t.style||{},t.className="rankLabel "+(t.className||"");var n=a.color();return t.style.backgroundColor=t.style.color=n,t.className+=" colored",m("span",t,m("span",{className:"rankLabel-text"},a.name()))}},S={SettingsPage:x,UploadImageButton:O};u().initializers.add("fof-gamification",(function(a){a.store.models.ranks=r,a.extensionData.for("fof-gamification").registerPermission({icon:"fas fa-thumbs-up",label:a.translator.trans("fof-gamification.admin.permissions.vote_label"),permission:"discussion.votePosts"},"reply").registerPermission({icon:"fas fa-thumbs-up",label:a.translator.trans("fof-gamification.admin.permissions.see_votes_label"),permission:"discussion.canSeeVotes",allowGuest:!0},"view").registerPermission({icon:"fas fa-info-circle",label:a.translator.trans("fof-gamification.admin.permissions.see_voters_label"),permission:"discussion.canSeeVoters"},"view").registerPermission({icon:"fas fa-trophy",label:a.translator.trans("fof-gamification.admin.permissions.see_ranking_page"),permission:"fof.gamification.viewRankingPage",allowGuest:!0},"view").registerPermission({icon:"fas fa-bell",label:a.translator.trans("fof-gamification.admin.permissions.upvote_notifications"),permission:"discussion.upvote_notifications"},"view").registerPermission({icon:"fas fa-bell",label:a.translator.trans("fof-gamification.admin.permissions.downvote_notifications"),permission:"discussion.downvote_notifications"},"view").registerPage(x)}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map