(function(n){"use strict";const{FormText:e}=vendetta.ui.components.Forms;var t=()=>React.createElement(React.Fragment,null,React.createElement(e,null,"Hello, world!"));const{logger:o}=vendetta;function l(){o.log("Hello world!")}function a(){o.log("Goodbye, world.")}return n.onLoad=l,n.onUnload=a,n.settings=t,n})({});