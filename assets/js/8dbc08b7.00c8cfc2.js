"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={slug:"design-pattern",title:"Spring Boot DDD",authors:["elbert"],tags:["spring-boot","java","ddd","design-pattern"]},o="Why Domain-Driven Design Outperforms Layered Architecture in Spring Boot Projects",s={permalink:"/site/blog/design-pattern",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-11-02-design-pattern/index.md",source:"@site/blog/2023-11-02-design-pattern/index.md",title:"Spring Boot DDD",description:"When developing a Spring Boot application, one of the most critical decisions to make is regarding the project's structure. Traditionally, many projects are organized into layers, such as DTO, Entity, and Service, to facilitate the separation of responsibilities. However, an alternative approach, based on domain-driven design (DDD), has gained prominence in recent years. In this article, we will explore the reasons why domain-based separation (e.g., Person, Car, Payment) is often a superior choice compared to layered separation.",date:"2023-11-02T00:00:00.000Z",formattedDate:"November 2, 2023",tags:[{label:"spring-boot",permalink:"/site/blog/tags/spring-boot"},{label:"java",permalink:"/site/blog/tags/java"},{label:"ddd",permalink:"/site/blog/tags/ddd"},{label:"design-pattern",permalink:"/site/blog/tags/design-pattern"}],readingTime:3.43,hasTruncateMarker:!1,authors:[{name:"Elbert Ribeiro",title:"Back End Engineer",url:"https://github.com/ElbertRibeiro",imageURL:"https://avatars.githubusercontent.com/u/45343415?v=4",key:"elbert"}],frontMatter:{slug:"design-pattern",title:"Spring Boot DDD",authors:["elbert"],tags:["spring-boot","java","ddd","design-pattern"]},prevItem:{title:"Spring Boot DDD Factory",permalink:"/site/blog/design-pattern-factory"},nextItem:{title:"Spring Boot With Weblogic",permalink:"/site/blog/spring-boot-with-weblogic"}},l={authorsImageUrls:[void 0]},c=[{value:"<strong>1. Clarity and Focus on Business Logic</strong>",id:"1-clarity-and-focus-on-business-logic",level:2},{value:"<strong>2. Ease of Maintenance and Evolution</strong>",id:"2-ease-of-maintenance-and-evolution",level:2},{value:"<strong>3. Enhanced Code Reusability</strong>",id:"3-enhanced-code-reusability",level:2},{value:"<strong>4. Improved Testability</strong>",id:"4-improved-testability",level:2},{value:"<strong>5. Scalability and Flexibility</strong>",id:"5-scalability-and-flexibility",level:2},{value:"<strong>Downsides of Layered Organization</strong>",id:"downsides-of-layered-organization",level:2},{value:"<strong>Bibliographic References</strong>",id:"bibliographic-references",level:2},{value:"<strong>Conclusion</strong>",id:"conclusion",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When developing a Spring Boot application, one of the most critical decisions to make is regarding the project's structure. Traditionally, many projects are organized into layers, such as DTO, Entity, and Service, to facilitate the separation of responsibilities. However, an alternative approach, based on domain-driven design (DDD), has gained prominence in recent years. In this article, we will explore the reasons why domain-based separation (e.g., Person, Car, Payment) is often a superior choice compared to layered separation."),(0,i.kt)("h2",{id:"1-clarity-and-focus-on-business-logic"},(0,i.kt)("strong",{parentName:"h2"},"1. Clarity and Focus on Business Logic")),(0,i.kt)("p",null,"The domain-driven design approach places business logic at the heart of the project. Each package or module is associated with a specific domain concept, such as Person, Car, or Payment. This makes the code clearer as the components are closely related to business needs. As a result, developers can concentrate on the specific rules and functionalities of the domain, rather than getting lost in abstract layers."),(0,i.kt)("h2",{id:"2-ease-of-maintenance-and-evolution"},(0,i.kt)("strong",{parentName:"h2"},"2. Ease of Maintenance and Evolution")),(0,i.kt)("p",null,"The domain-based structure simplifies the maintenance of the application. When a change is required in a business rule, you know exactly where to look and make the necessary modifications. In contrast, in a layered structure, changes often involve modifying several parts of the code, making it more error-prone and harder to maintain."),(0,i.kt)("h2",{id:"3-enhanced-code-reusability"},(0,i.kt)("strong",{parentName:"h2"},"3. Enhanced Code Reusability")),(0,i.kt)("p",null,"With domain-based separation, it is easier to reuse components in different parts of the application or even in future projects. For example, if you develop a Payment feature in one project, you can easily reuse it in another project involving Payments, without the need to recreate the entire service and data access layer."),(0,i.kt)("h2",{id:"4-improved-testability"},(0,i.kt)("strong",{parentName:"h2"},"4. Improved Testability")),(0,i.kt)("p",null,"The domain-based structure allows the straightforward creation of domain-specific unit tests. This is crucial for ensuring code quality and application stability. Tests can be written more directly, covering the key domain functionalities."),(0,i.kt)("h2",{id:"5-scalability-and-flexibility"},(0,i.kt)("strong",{parentName:"h2"},"5. Scalability and Flexibility")),(0,i.kt)("p",null,"As the application grows, the domain-based structure naturally adapts. New functionalities can be added within the context of the existing domain, as long as the domain is well defined. This flexibility makes it easier to scale the application as new requirements emerge."),(0,i.kt)("h2",{id:"downsides-of-layered-organization"},(0,i.kt)("strong",{parentName:"h2"},"Downsides of Layered Organization")),(0,i.kt)("p",null,"To provide a comprehensive overview, it's essential to consider the downsides of a layered organization:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Complex Communication"),": A rigid separation into layers can lead to complex communication between the layers, resulting in intricate code to transfer data between different layers, such as DTOs.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Risk of Anemic Domain"),': In projects with a layered organization, the so-called "Anemic Domain" can occur, where entities (Entities) frequently lack behavior (methods), resulting in an excessively burdened service layer.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Increased Boilerplate Code"),": With distinct layers, it often requires writing more boilerplate code to convert data between DTOs and Entities, increasing code complexity.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Difficulty Maintaining Cohesion"),": Maintaining class and component cohesion can be challenging in projects with layered organization, as responsibilities are distributed across different parts of the code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Reduced Clarity of Business Rules"),": In a layered structure, business logic is often diluted, making it difficult to understand specific business rules."))),(0,i.kt)("h2",{id:"bibliographic-references"},(0,i.kt)("strong",{parentName:"h2"},"Bibliographic References")),(0,i.kt)("p",null,"To further your understanding of the domain-driven design approach in Spring Boot projects and the disadvantages of a layered organization, you may consider reading the following books:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'"Domain-Driven Design: Tackling Complexity in the Heart of Software" by Eric Evans'),(0,i.kt)("li",{parentName:"ol"},'"Implementing Domain-Driven Design" by Vaughn Vernon'),(0,i.kt)("li",{parentName:"ol"},'"Patterns, Principles, and Practices of Domain-Driven Design" by Scott Millett and Nick Tune'),(0,i.kt)("li",{parentName:"ol"},'"Clean Code: A Handbook of Agile Software Craftsmanship" by Robert C. Martin'),(0,i.kt)("li",{parentName:"ol"},'"Refactoring: Improving the Design of Existing Code" by Martin Fowler')),(0,i.kt)("p",null,"These references provide valuable insights into code organization and best practices for Spring Boot projects."),(0,i.kt)("h2",{id:"conclusion"},(0,i.kt)("strong",{parentName:"h2"},"Conclusion")),(0,i.kt)("p",null,"The domain-driven design approach offers numerous advantages over layered separation in Spring Boot projects, including greater clarity, ease of maintenance, code reusability, testability, and scalability. However, it's important to note that the choice between these approaches should be based on the specific project's needs and the development team's preferences. In some cases, a combination of both approaches may be the ideal solution, allowing you to leverage the best of each approach to effectively meet project requirements."))}u.isMDXComponent=!0}}]);