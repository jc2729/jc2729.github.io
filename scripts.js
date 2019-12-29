//side bar

$('.sidenav').mouseover(function(){
   $(this).find('span').hide();
   $(this).find('ul').show();
   $(this).find('img').show();
});

$('.sidenav').mouseleave(function(){
   $(this).find('span').show();
   $(this).find('ul').hide();
   $(this).find('img').hide();
});

function goHome() {
  window.location.href = "index.html"
}

// function inspire(){
// 	var quotes=['"If you can dream it, <br> you can do it." <br> ~Walt Disney~','"It does not matter <br> how slowly you go <br> as long as you <br> do not stop." <br> ~Confucius~','"Today is a gift; <br> thats why they call it <br> the present." <br> ~Eleanor Roosevelt~'];
// 	var rand=Math.floor(Math.random()*3);
// 	var quote=quotes[rand];
// 	document.getElementsByClassName('description')[0].innerHTML=quote;
// 	document.getElementsByClassName('description')[0].style.marginRight="10%";


// }

// function showdescr(){
// 	document.getElementsByClassName('description')[0].innerHTML="Cornell University <br>  College of Engineering <br> Computer Science Major <br> Class of 2020 <br>" ;
// }

// //proj page
// function collapseProjDescr(element){
// 	element.style.display="none";
// 	element.parentElement.children[0].style.display="inline";
// 	element.parentElement.parentElement.getElementsByClassName('project-descr')[0].style.display="none";
// 	element.parentElement.parentElement.getElementsByClassName('project-img')[0].style.display="none";


// }
// function showProjDescr(element){
// 	element.style.display="none";
// 	element.parentElement.children[1].style.display="inline";
// 	element.parentElement.parentElement.getElementsByClassName('project-descr')[0].style.display="block";
// 	element.parentElement.parentElement.getElementsByClassName('project-img')[0].style.display="block";
// }


// //org page
// function show(myId) {
// 	var images=document.getElementsByClassName("org-img");
// 	for ( i=0;i<images.length;i++){
// 		images[i].style.display="none";
// 	}
// 	document.getElementsByClassName("org-timeline")[0].style.borderStyle="none";
// 	document.getElementById(myId).style.display="block";

// }

// function revert(myId){
// 	document.getElementById(myId).style.display="none";
// 	var images=document.getElementsByClassName("org-img");
// 	for ( i=0;i<images.length;i++){
// 		images[i].style.display="inline";
// 	}
// 	document.getElementsByClassName("org-timeline")[0].style.borderBottom="thin double #FFE4E1";


// }