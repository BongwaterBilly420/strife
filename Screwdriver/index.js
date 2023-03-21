(function(o,t,s,l,u,g,d,b){"use strict";const R=s.findByStoreName("DeveloperOptionsStore"),i=s.findByProps("setDeveloperOptionSettings"),r=function(e){return i.setDeveloperOptionSettings({bugReporterEnabled:e})};function m(){const e=R.isBugReporterEnabled;r(!t.storage.disableBugReporter);const a=l.before("setDeveloperOptionSettings",i,function(n){!t.storage.disableBugReporter||!n[0]?.bugReporterEnabled||(n[0].bugReporterEnabled=!1)});return function(){a(),r(e)}}const{FormRow:p,FormSwitchRow:f,FormDivider:v}=d.Forms,c=[{label:"Force disable Bug Reporter",subLabel:"Prevent enabling Discord's Bug Reporter, since the value of built-in toggle does not persist.",icon:"ic_badge_bug_hunter_level_1",setting:"disableBugReporter",action:function(){return r(!1)}}];function B(){return g.useProxy(t.storage),React.createElement(u.ReactNative.ScrollView,{style:{flex:1},contentContainerStyle:{paddingBottom:38}},c.map(function(e,a){return React.createElement(React.Fragment,null,React.createElement(f,{label:e.label,subLabel:e.subLabel,leading:e.icon&&React.createElement(p.Icon,{source:b.getAssetIDByName(e.icon)}),value:t.storage[e.setting],onValueChange:function(n){e.action?.(n),t.storage[e.setting]=n}}),a!==c.length-1&&React.createElement(v,null))}))}t.storage.disableBugReporter??=!1;const E=[m()],S=function(){return E.forEach(function(e){return e()})};return o.onUnload=S,o.settings=B,o})({},vendetta.plugin,vendetta.metro,vendetta.patcher,vendetta.metro.common,vendetta.storage,vendetta.ui.components,vendetta.ui.assets);
