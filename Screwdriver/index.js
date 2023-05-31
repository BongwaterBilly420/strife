(function(o,n,a,s,l,b,g,c){"use strict";const m=a.findByStoreName("DeveloperOptionsStore"),u=a.findByProps("setDeveloperOptionSettings"),r=function(e){return u.setDeveloperOptionSettings({bugReporterEnabled:e})};function f(){const e=m.isBugReporterEnabled;r(!n.storage.disableBugReporter);const i=s.before("setDeveloperOptionSettings",u,function(t){!n.storage.disableBugReporter||!t[0]?.bugReporterEnabled||(t[0].bugReporterEnabled=!1)});return function(){i(),r(e)}}const p=a.findByProps("addFiles","popFirstFile");function R(){return s.before("addFiles",p,function(e){n.storage.fixJSONUploads&&e[0]?.files.forEach(function(i){i.mimeType==="application/json"&&(i.mimeType="text/plain")})})}const{FormSection:v,FormRow:h,FormSwitchRow:y,FormDivider:S}=c.Forms,F=[{title:"Quality of Life",items:[{label:"Forcibly disable Bug Reporter",subLabel:"Prevent enabling Discord's Bug Reporter, since the value of built-in toggle does not persist.",icon:"ic_noise_cancellation_disabled",setting:"disableBugReporter",action:function(){return r(!1)}}]},{title:"Fixes",items:[{label:"JSON file uploads",subLabel:"Fix a long-standing Discord bug causing JSON files to be uploaded with their metadata as contents.",icon:"ic_file_upload_24px",setting:"fixJSONUploads"}]},{title:"Forbidden Fruit",disclaimer:"These features grant certain Nitro perks without Nitro, take caution when using them.",items:[{label:"Enable Client Themes",subLabel:"Forcibly enable Discord's themes, regardless of if you have Nitro.",icon:"ic_theme_24px",disabled:!0,setting:"enableClientThemes"}]}];function E(){return b.useProxy(n.storage),React.createElement(l.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},F.map(function(e,i){return React.createElement(v,{title:e.title,titleStyleType:i===0?"no_border":void 0},e.disclaimer&&React.createElement(l.ReactNative.View,{style:{marginHorizontal:10,marginBottom:10}},React.createElement(c.HelpMessage,{messageType:0},e.disclaimer)),e.items.map(function(t,D){return React.createElement(React.Fragment,null,React.createElement(y,{label:t.label,subLabel:t.subLabel,leading:t.icon&&React.createElement(h.Icon,{source:g.getAssetIDByName(t.icon)}),disabled:t.disabled,value:n.storage[t.setting],onValueChange:function(d){t.action?.(d),n.storage[t.setting]=d}}),D!==e.items.length-1&&React.createElement(S,null))}))}))}n.storage.fixJSONUploads??=!0;const B=[f(),R()],N=function(){return B.forEach(function(e){return e()})};return o.onUnload=N,o.settings=E,o})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.metro.common,vendetta.storage,vendetta.ui.assets,vendetta.ui.components);
