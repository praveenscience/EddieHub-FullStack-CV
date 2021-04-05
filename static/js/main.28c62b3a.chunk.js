(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(e,t,i){},12:function(e,t,i){"use strict";i.r(t);var n=i(2),s=i.n(n),c=i(5),a=i.n(c),r=i(1),l={MainDetails:{FullName:"Praveen Kumar",Title:"Full Stack JavaScript Developer",URL:"https://i.imgur.com/5I70Obzm.png",Contacts:{Email:"praveen@praveen.science",WebSite:"https://praveen.science",Phone:"+44 740 570 XXXX"}},MainArea:{ProfileText:"Hey, I am Praveen Kumar. I am a Full Stack Developer and a Cloud Computing Enthusiast. I feel my best priority is to get the word about your brand out in the digital space. As I am also a Full Stack Developer, I am an engineer who can handle all the work of databases, servers, systems engineering, and clients. I am not currently looking for new roles!",Works:[{JobTitle:"Full Stack Developer at Google",Start:"Jan 2021",End:"Present",Description:"A full stack developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients."},{JobTitle:"Front End Developer at Facebook",Start:"Jan 2020",End:"Dec 2020",Description:"A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do."}],Skills:["HTML 5","CSS 3","JavaScript","jQuery","ES6","React JS","Node JS","Express JS","PHP","MySQL","postgreSQL"],Studies:[{Qualification:"Masters in Cloud Computing",College:"University of Leicester, England",Description:"This course focuses on the algorithmic basics and the software engineering principles and techniques underlying cloud computing. It equips students with the understanding and practical skills required by today's market."},{Qualification:"Computer Science & Engineering",College:"Anna University, Chennai",Description:"This course covers the basic theoretical aspects of Computer Software and Engineering with basics of engineering like Mechanical and Electrical Engineering with workshop experience."}]}},o=i(4),d=i(0),j=function(e){var t=e.Qualification,i=e.College,n=e.Description;return Object(d.jsxs)("article",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{className:"subDetails",children:i}),Object(d.jsx)("p",{children:n})]})},u=function(e){var t=e.Studies;return t=t||[],Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"sectionTitle",children:Object(d.jsx)("h1",{children:"Education"})}),Object(d.jsx)("div",{className:"sectionContent",children:t.map((function(e,t){return Object(d.jsx)(j,Object(r.a)({},e),t)}))}),Object(d.jsx)("div",{className:"clear"})]})},h=function(e){var t=e.Skills;return t=t||[],Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"sectionTitle",children:Object(d.jsx)("h1",{children:"Key Skills"})}),Object(d.jsx)("div",{className:"sectionContent",children:Object(d.jsx)("ul",{className:"keySkills",children:t.map((function(e){return Object(d.jsx)("li",{children:e},e)}))})}),Object(d.jsx)("div",{className:"clear"})]})},b=function(e){var t=e.ProfileText;return Object(d.jsxs)("section",{children:[Object(d.jsxs)("article",{children:[Object(d.jsx)("div",{className:"sectionTitle",children:Object(d.jsx)("h1",{children:"Personal Profile"})}),Object(d.jsx)("div",{className:"sectionContent",children:Object(d.jsx)("p",{children:t})})]}),Object(d.jsx)("div",{className:"clear"})]})},p=function(e){var t=e.JobTitle,i=e.Start,n=e.End,s=e.Description;return Object(d.jsxs)("article",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsxs)("p",{className:"subDetails",children:[i," - ",n]}),Object(d.jsx)("p",{children:s})]})},m=function(e){var t=e.Works;return t=t||[],Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{className:"sectionTitle",children:Object(d.jsx)("h1",{children:"Work Experience"})}),Object(d.jsx)("div",{className:"sectionContent",children:t.map((function(e,t){return Object(d.jsx)(p,Object(r.a)({},e),t)}))}),Object(d.jsx)("div",{className:"clear"})]})},x=function(e){var t=e.ProfileText,i=e.Works,n=e.Skills,s=e.Studies;return Object(d.jsxs)("div",{id:"mainArea",className:"quickFade delayFive",children:[Object(d.jsx)(b,{ProfileText:t}),Object(d.jsx)(m,{Works:i}),Object(d.jsx)(h,{Skills:n}),Object(d.jsx)(u,{Studies:s})]})},O=function(e){var t=e.Email,i=e.WebSite,n=e.Phone;return i=i||"",Object(d.jsx)("div",{id:"contactDetails",className:"quickFade delayFour",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["e: ",Object(d.jsx)("a",{href:"mailto:"+t,children:t})]}),Object(d.jsxs)("li",{children:["w: ",Object(d.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",children:i.replace("https://","").replace("http://","")})]}),Object(d.jsxs)("li",{children:["m: ",n]})]})})},v=i.p+"static/media/headshot.9f259502.png",f=function(e){var t=e.FullName,i=e.URL;return Object(d.jsx)("div",{id:"headshot",className:"quickFade",children:Object(d.jsx)("img",{src:i||v,alt:t})})},g=function(e){var t=e.FullName,i=e.Title;return Object(d.jsxs)("div",{id:"name",children:[Object(d.jsx)("h1",{className:"quickFade delayTwo",children:t}),Object(d.jsx)("h2",{className:"quickFade delayThree",children:i})]})},k=function(e){var t=e.FullName,i=e.Title,n=e.URL,s=e.Contacts;return Object(d.jsxs)("div",{className:"mainDetails",children:[Object(d.jsx)(f,{FullName:t,URL:n}),Object(d.jsx)(g,{FullName:t,Title:i}),Object(d.jsx)(O,Object(r.a)({},s)),Object(d.jsx)("div",{className:"clear"})]})},S=function(){var e=o||l;return document.title=e.MainDetails.FullName+" - Curriculum Vitae",Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(k,Object(r.a)({},e.MainDetails)),Object(d.jsx)(x,Object(r.a)({},e.MainArea))]})},N=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,13)).then((function(t){var i=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;i(e),n(e),s(e),c(e),a(e)}))};i(11);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("cv")),N()},4:function(e){e.exports=JSON.parse("null")}},[[12,1,2]]]);
//# sourceMappingURL=main.28c62b3a.chunk.js.map