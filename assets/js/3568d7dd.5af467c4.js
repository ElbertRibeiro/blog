"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"configure-ssh-key",title:"How to configure ssh key on github?",authors:["elbert"],tags:["github","gitlab","code-editor","ssh"]},i=void 0,l={permalink:"/site/blog/configure-ssh-key",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-01-09-configure-ssh-key/index.md",source:"@site/blog/2023-01-09-configure-ssh-key/index.md",title:"How to configure ssh key on github?",description:"Checking Generated Keys",date:"2023-01-09T00:00:00.000Z",formattedDate:"January 9, 2023",tags:[{label:"github",permalink:"/site/blog/tags/github"},{label:"gitlab",permalink:"/site/blog/tags/gitlab"},{label:"code-editor",permalink:"/site/blog/tags/code-editor"},{label:"ssh",permalink:"/site/blog/tags/ssh"}],readingTime:.91,hasTruncateMarker:!1,authors:[{name:"Elbert Ribeiro",title:"Back End Engineer",url:"https://github.com/ElbertRibeiro",imageURL:"https://avatars.githubusercontent.com/u/45343415?v=4",key:"elbert"}],frontMatter:{slug:"configure-ssh-key",title:"How to configure ssh key on github?",authors:["elbert"],tags:["github","gitlab","code-editor","ssh"]},prevItem:{title:"What is Gitpod?",permalink:"/site/blog/what-is-gitpod"}},s={authorsImageUrls:[void 0]},c=[{value:"Checking Generated Keys",id:"checking-generated-keys",level:2},{value:"Generating SSH Key",id:"generating-ssh-key",level:2},{value:"Copying the Generated Key",id:"copying-the-generated-key",level:2},{value:"Adding Key to GitHub",id:"adding-key-to-github",level:2},{value:"Testing Connection",id:"testing-connection",level:2}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"checking-generated-keys"},"Checking Generated Keys"),(0,o.kt)("p",null,"To list the existing keys, execute the command: ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -al ~/.ssh")),(0,o.kt)("h2",{id:"generating-ssh-key"},"Generating SSH Key"),(0,o.kt)("p",null,"Open the ",(0,o.kt)("strong",{parentName:"p"},"git bash")," or your Linux terminal and run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note\xb9: Replace "',(0,o.kt)("a",{parentName:"p",href:"mailto:your_email@example.com"},"your_email@example.com"),'" with your actual email.')),(0,o.kt)("h2",{id:"copying-the-generated-key"},"Copying the Generated Key"),(0,o.kt)("p",null,"To copy the generated key to the clipboard, use the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/.ssh/id_ed25519.pub. \n")),(0,o.kt)("h2",{id:"adding-key-to-github"},"Adding Key to GitHub"),(0,o.kt)("p",null,'Open GitHub and go to the profile icon > Settings in the top right corner. In the user settings sidebar, click on "SSH\nand GPG keys." Click on the "New SSH key" button. In the "Title" field, add a descriptive label for the new key. For\nexample, if you are using your personal computer, you can name this key "Personal Computer." Paste the public key from\nthe clipboard into the "Key" field. Click on "Add SSH key," and you\'re done!'),(0,o.kt)("h2",{id:"testing-connection"},"Testing Connection"),(0,o.kt)("p",null,"Execute the following command in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ssh -T git@github.com\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note\xb2: After executing the previous command, type "yes" in the interactive git bash terminal.')))}g.isMDXComponent=!0}}]);