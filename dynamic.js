var getJson=(file,callback)=>{
var xhr_req=new XMLHttpRequest();
 xhr_req.overrideMimeType("application/json");
 xhr_req.open("GET",file,true);
 xhr_req.onreadystatechange=()=>{
 	if(xhr_req.readyState===4 && xhr_req.status===200){
       callback(xhr_req.responseText);
 	}
 }
 xhr_req.send();
 }


getJson("resumedata.json",function(text){
var d=JSON.parse(text);
console.log(d.education[0]["no"]);
details(d);
strenght(d);
main(d);

})
//dispaly img,name and skills
function details(d){
var main=document.querySelector(".side");
var child=document.createElement("div");
var image=document.createElement("img");
image.src='tajdp.jpeg';
image.alt="profile image";
child.appendChild(image);
var h1=document.createElement("h1");
h1.textContent=d.details["name"];
child.appendChild(h1);
main.appendChild(child);
var h2=document.createElement("h3");
h2.textContent=d.details["edu"];
child.appendChild(h2);
main.appendChild(child);
var h1=document.createElement("h1");
h1.textContent="Professional Skills";
child.appendChild(h1);
main.appendChild(child);
var ul=document.createElement("ul");
child.appendChild(ul);
for(i of d.skills){
	
var li=document.createElement("li");
li.textContent=i;
ul.appendChild(li);	
}
}

//code for stenghts ,hobbies and languages
function strenght(d){
	var main=document.querySelector(".side");
var child=document.createElement("div");
var h=document.createElement("h1");
h.textContent="Strengths";
child.appendChild(h);
var u=document.createElement("ul");
child.appendChild(u);
for(i of d.strenght){
var l=document.createElement("li");
l.textContent=i;
u.appendChild(l);	
}
var h=document.createElement("h1");
h.textContent="Languages Known";
child.appendChild(h);
var u=document.createElement("ul");
child.appendChild(u);
for(i of d.languages){
var l=document.createElement("li");
l.textContent=i;
u.appendChild(l);
}
var h=document.createElement("h1");
h.textContent="Hobbies";
child.appendChild(h);
var u=document.createElement("ul");
child.appendChild(u);
for(i of d.hobbies){
var l=document.createElement("li");
l.textContent=i;
u.appendChild(l);
}
main.appendChild(child);

}


//code for education ,courses and technical skills section
function main(d){
var main=document.querySelector(".main");
var subdiv=document.querySelector(".detail");
var child=document.createElement("div");
var h1=document.createElement("h1");
var span=document.createElement("span");
h1.textContent="Career Objective";
span.textContent=d.career;
child.appendChild(h1);
child.appendChild(span);
subdiv.appendChild(child);

var h=document.createElement("h1");
var hr=document.createElement("hr");
h.textContent="Education";
subdiv.appendChild(h);
subdiv.appendChild(hr);
var table=document.createElement("table");
var tr=document.createElement("tr");
var th=document.createElement("th");
var properties = ["S.No", "Name of the Institute", "Qualification", "Year"]; 
var tr = document.createElement('tr');
 for (var i = 0; i < properties.length; i++) {
                    var th = document.createElement('th');
                    th.appendChild(document.createTextNode(properties[i]));
                    tr.appendChild(th);
                }
table.appendChild(tr);
var data=d.education;
var property= ["no", "clg", "quli", "yop"];
for (var r = 0; r <3; r++) {
	var tr = document.createElement('tr');
	for (var i = 0; i < property.length; i++){
		
		var td = document.createElement('td');
		td.textContent=data[r][property[i]];
		 tr.appendChild(td);;
		 	table.appendChild(tr);

	}
 }
 subdiv.appendChild(table);
 

 var div=document.createElement("div");
 var h=document.createElement("h1");
 h.textContent="Courses";
 div.appendChild(h);
 var ul=document.createElement("ul");
 for(i of d.courses){
	var l=document.createElement("li");
	l.textContent=i;
	ul.appendChild(l);
 }
 div.appendChild(ul);
 subdiv.appendChild(div);
 var div=document.createElement("div");
 var h=document.createElement("h1");
 div.appendChild(h);
 h.textContent="Technical Skills";
 var ul=document.createElement("ul");
 for(i of d.skills){	
	var li=document.createElement("li");
	li.textContent=i;
	ul.appendChild(li);	
	}
	div.appendChild(ul);
	subdiv.appendChild(div);
main.appendChild(subdiv);
}
