(this["webpackJsonpreact-jwt-auth"]=this["webpackJsonpreact-jwt-auth"]||[]).push([[0],{202:function(e,t,a){e.exports=a(503)},208:function(e,t,a){},503:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(198),l=a.n(s),i=a(52),c=a(11),o=a(12),m=a(8),u=a(16),d=a(15),h=a(53),v=(a(207),a(208),a(209),a(41)),p=a.n(v),g="https://jwt-user-tasks.herokuapp.com/api/auth/",f=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getPublicContent",value:function(){return p.a.get(g+"all")}},{key:"login",value:function(e,t){return p.a.post(g+"signin",{username:e,password:t}).then((function(e){return e.data.accessToken&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e,t,a){return p.a.post(g+"signup",{username:e,email:t,password:a})}},{key:"getCurrentUser",value:function(){return JSON.parse(localStorage.getItem("user"))}}]),e}()),E=a(101),b=a.n(E),k=a(61),y=a.n(k),N=a(102),O=a.n(N),j=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLogin=n.handleLogin.bind(Object(m.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(m.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(m.a)(n)),n.state={username:"",password:"",loading:!1,message:""},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleLogin",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",loading:!0}),this.form.validateAll(),0===this.checkBtn.context._errors.length?f.login(this.state.username,this.state.password).then((function(){t.props.history.push("/profile"),window.location.reload()}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({loading:!1,message:a})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(b.a,{onSubmit:this.handleLogin,ref:function(t){e.form=t}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[j]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(y.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[j]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.state.loading},this.state.loading&&r.a.createElement("span",{className:"spinner-border spinner-border-sm"}),r.a.createElement("span",null,"Login"))),this.state.message&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"alert alert-danger",role:"alert"},this.state.message)),r.a.createElement(O.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component),T=a(199),C=function(e){if(!e)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This field is required!")},S=function(e){if(!Object(T.isEmail)(e))return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"This is not a valid email.")},H=function(e){if(e.length<3||e.length>20)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The username must be between 3 and 20 characters.")},D=function(e){if(e.length<6||e.length>40)return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"The password must be between 6 and 40 characters.")},U=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleRegister=n.handleRegister.bind(Object(m.a)(n)),n.onChangeUsername=n.onChangeUsername.bind(Object(m.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(m.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(m.a)(n)),n.state={username:"",email:"",password:"",successful:!1,message:""},n}return Object(o.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault(),this.setState({message:"",successful:!1}),this.form.validateAll(),0===this.checkBtn.context._errors.length&&f.register(this.state.username,this.state.email,this.state.password).then((function(e){t.setState({message:e.data.message,successful:!0})}),(function(e){var a=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();t.setState({successful:!1,message:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"card card-container"},r.a.createElement("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),r.a.createElement(b.a,{onSubmit:this.handleRegister,ref:function(t){e.form=t}},!this.state.successful&&r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Username"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"username",value:this.state.username,onChange:this.onChangeUsername,validations:[C,H]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement(y.a,{type:"text",className:"form-control",name:"email",value:this.state.email,onChange:this.onChangeEmail,validations:[C,S]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement(y.a,{type:"password",className:"form-control",name:"password",value:this.state.password,onChange:this.onChangePassword,validations:[C,D]})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{className:"btn btn-primary btn-block"},"Sign Up"))),this.state.message&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:this.state.successful?"alert alert-success":"alert alert-danger",role:"alert"},this.state.message)),r.a.createElement(O.a,{style:{display:"none"},ref:function(t){e.checkBtn=t}}))))}}]),a}(n.Component),x=a(60),L=a.n(x),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={content:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"jumbotron"},r.a.createElement("h3",null,"HOME PAGE")))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={redirect:null,userReady:!1,currentUser:{username:""}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=f.getCurrentUser();e||this.setState({redirect:"/home"}),this.setState({currentUser:e,userReady:!0})}},{key:"render",value:function(){if(this.state.redirect)return r.a.createElement(h.a,{to:this.state.redirect});var e=this.state.currentUser;return r.a.createElement("div",{align:"center"},this.state.userReady?r.a.createElement("div",null,r.a.createElement("h2",null,"Profile"),r.a.createElement("p",null,r.a.createElement("p",null,"Token:")," ",e.accessToken),r.a.createElement("p",null,r.a.createElement("p",null,"Id:")," ",e.id)):null)}}]),a}(n.Component);n.Component,n.Component,n.Component;function A(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var I="https://jwt-user-tasks.herokuapp.com/api/tasks",_=new(function(){function e(){Object(c.a)(this,e)}return Object(o.a)(e,[{key:"getTasks",value:function(){return p.a.get(I,{headers:A()})}},{key:"getTaskById",value:function(e){return p.a.get(I+"/"+e,{headers:A()})}},{key:"addTask",value:function(e){return p.a.post(I+"/",e,{headers:A()})}},{key:"editTask",value:function(e,t){return p.a.put(I+"/"+t,e,{headers:A()})}},{key:"deleteTask",value:function(e){return p.a.delete(I+"/"+e,{headers:A()})}}]),e}()),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={tasks:[]},n.addTask=n.addTask.bind(Object(m.a)(n)),n.editTask=n.editTask.bind(Object(m.a)(n)),n.deleteTask=n.deleteTask.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"deleteTask",value:function(e){var t=this;_.deleteTask(e).then((function(a){t.setState({tasks:t.state.tasks.filter((function(t){return t.id!==e}))})}))}},{key:"viewTask",value:function(e){this.props.history.push("/view-task/".concat(e))}},{key:"editTask",value:function(e){this.props.history.push("/add-task/".concat(e))}},{key:"componentDidMount",value:function(){var e=this;_.getTasks().then((function(t){e.setState({tasks:t.data})}))}},{key:"addTask",value:function(){this.props.history.push("/add-task/_add")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"}," Tasks List"),r.a.createElement("div",{className:"row"},r.a.createElement("a",{target:"_blank",href:"http://localhost:8080/home"},"Logout"),r.a.createElement("a",{target:"_blank",href:"https://springboot-sam.herokuapp.com"},"Logout From Heroku")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{className:"btn btn-primary",onClick:this.addTask}," Add Task")),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("table",{className:"table table-striped table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null," Task Id"),r.a.createElement("td",null," Task Name"),r.a.createElement("td",null," Task Description"),r.a.createElement("td",null," Task Email"),r.a.createElement("td",null," Task Severity"))),r.a.createElement("tbody",null,this.state.tasks.map((function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.id),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.email),r.a.createElement("td",null,t.severity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.editTask(t.id)},className:"btn btn-info"},"Edit"),r.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.deleteTask(t.id)},className:"btn btn-danger"},"Delete"),r.a.createElement("button",{style:{marginLeft:"10px"},onClick:function(){return e.viewTask(t.id)},className:"btn btn-info"},"View")))}))))))}}]),a}(r.a.Component),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.id,task:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.getTaskById(this.state.id).then((function(t){e.setState({task:t.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"card col-md-6 offset-md-3"},r.a.createElement("h3",{className:"text-center"}," View Task Details"),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},r.a.createElement("label",null," Task Name: "),r.a.createElement("div",null," ",this.state.task.name)),r.a.createElement("div",{className:"row"},r.a.createElement("label",null," Task Description: "),r.a.createElement("div",null," ",this.state.task.description)),r.a.createElement("div",{className:"row"},r.a.createElement("label",null," Task Email: "),r.a.createElement("div",null," ",this.state.task.email)),r.a.createElement("div",{className:"row"},r.a.createElement("label",null," Task Severity: "),r.a.createElement("div",null," ",this.state.task.severity)))))}}]),a}(n.Component),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).saveTask=function(e){e.preventDefault();var t={name:n.state.name,description:n.state.description,email:n.state.email,severity:n.state.severity};console.log("task => "+JSON.stringify(t)),"_add"===n.state.id?_.addTask(t).then((function(e){n.props.history.push("/tasks")})):_.editTask(t,n.state.id).then((function(e){n.props.history.push("/tasks")}))},n.changeNameHandler=function(e){n.setState({name:e.target.value})},n.changeDescriptionHandler=function(e){n.setState({description:e.target.value})},n.changeEmailHandler=function(e){n.setState({email:e.target.value})},n.changeSeverityHandler=function(e){n.setState({severity:e.target.value})},n.state={id:n.props.match.params.id,name:"",description:"",email:"",severity:""},n.changeNameHandler=n.changeNameHandler.bind(Object(m.a)(n)),n.changeDescriptionHandler=n.changeDescriptionHandler.bind(Object(m.a)(n)),n.changeEmailHandler=n.changeEmailHandler.bind(Object(m.a)(n)),n.changeSeverityHandler=n.changeSeverityHandler.bind(Object(m.a)(n)),n.saveTask=n.saveTask.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;"_add"!==this.state.id&&_.getTaskById(this.state.id).then((function(t){var a=t.data;e.setState({name:a.name,description:a.description,email:a.email,severity:a.severity})}))}},{key:"cancel",value:function(){this.props.history.push("/tasks")}},{key:"getTitle",value:function(){return"_add"===this.state.id?r.a.createElement("h3",{className:"text-center"},"Add Task"):r.a.createElement("h3",{className:"text-center"},"Edit")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},this.getTitle(),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{placeholder:"Name",name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Description: "),r.a.createElement("input",{placeholder:"Description",name:"description",className:"form-control",value:this.state.description,onChange:this.changeDescriptionHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Email: "),r.a.createElement("input",{placeholder:"Email Address",name:"email",className:"form-control",value:this.state.email,onChange:this.changeEmailHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Severity: "),r.a.createElement("input",{placeholder:"Severity",name:"severity",className:"form-control",value:this.state.severity,onChange:this.changeSeverityHandler})),r.a.createElement("button",{className:"btn btn-success",onClick:this.saveTask},"Save"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).editTask=function(e){e.preventDefault();var t={name:n.state.name,description:n.state.description,email:n.state.email,severity:n.state.severity};console.log("task => "+JSON.stringify(t)),console.log("id => "+JSON.stringify(n.state.id)),_.editTask(t,n.state.id).then((function(e){n.props.history.push("/tasks")}))},n.changeNameHandler=function(e){n.setState({name:e.target.value})},n.changeDescriptionHandler=function(e){n.setState({description:e.target.value})},n.changeEmailHandler=function(e){n.setState({email:e.target.value})},n.changeSeverityHandler=function(e){n.setState({severity:e.target.value})},n.state={id:n.props.match.params.id,name:"",description:"",email:"",severity:""},n.changeNameHandler=n.changeNameHandler.bind(Object(m.a)(n)),n.changeDescriptionHandler=n.changeDescriptionHandler.bind(Object(m.a)(n)),n.changeEmailHandler=n.changeEmailHandler.bind(Object(m.a)(n)),n.changeSeverityHandler=n.changeSeverityHandler.bind(Object(m.a)(n)),n.editTask=n.editTask.bind(Object(m.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;_.getTaskById(this.state.id).then((function(t){var a=t.data;e.setState({name:a.name,description:a.description,email:a.email,severity:a.severity})}))}},{key:"cancel",value:function(){this.props.history.push("/tasks")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},r.a.createElement("h3",{className:"text-center"},"Update Task"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name: "),r.a.createElement("input",{placeholder:"Name",name:"name",className:"form-control",value:this.state.name,onChange:this.changeNameHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Description: "),r.a.createElement("input",{placeholder:"Description",name:"description",className:"form-control",value:this.state.description,onChange:this.changeDescriptionHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Email: "),r.a.createElement("input",{placeholder:"Email Address",name:"email",className:"form-control",value:this.state.email,onChange:this.changeEmailHandler})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null," Severity: "),r.a.createElement("input",{placeholder:"Severity",name:"severity",className:"form-control",value:this.state.severity,onChange:this.changeSeverityHandler})),r.a.createElement("button",{className:"btn btn-success",onClick:this.editTask},"Save"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"}},"Cancel")))))))}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).logOut=n.logOut.bind(Object(m.a)(n)),n.state={showAdminBoard:!1,currentUser:void 0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=f.getCurrentUser();e&&this.setState({currentUser:e,showAdminBoard:e.roles.includes("ROLE_ADMIN")})}},{key:"logOut",value:function(){f.logout()}},{key:"render",value:function(){var e=this.state,t=e.currentUser,a=e.showAdminBoard;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(i.b,{to:"/"}," Home")),r.a.createElement("div",null,a&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("p",null," You are admin")),t&&r.a.createElement(i.b,{to:"/tasks"},"Tasks")),r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("a",{href:"/login",onClick:this.logOut},"LogOut")):r.a.createElement("div",null,r.a.createElement(i.b,{to:"/login"},"Login"),r.a.createElement(i.b,{to:"/register"},"Sign Up"))),r.a.createElement("div",{className:"container mt-3"},r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:["/","/home"],component:B}),r.a.createElement(h.b,{exact:!0,path:"/login",component:w}),r.a.createElement(h.b,{exact:!0,path:"/register",component:U}),r.a.createElement(h.b,{exact:!0,path:"/profile",component:P}),r.a.createElement(h.b,{path:"/tasks",component:J}),r.a.createElement(h.b,{path:"/tasks/:id",component:F}),r.a.createElement(h.b,{path:"/add-task/:id",component:R}),r.a.createElement(h.b,{path:"/view-task/:id",component:M}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(i.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t){}},[[202,1,2]]]);
//# sourceMappingURL=main.9c55caa3.chunk.js.map