//This Website was created from scratch by Pedro Veneziano. All rights reserved.

//////////ABOUT FILLUP

var aboutFillup = document.getElementById('about-fillup');

aboutFillup.innerHTML = "<p>My name is Pedro and I’m a 23-year-old Brazilian Graphic Artist living in São Paulo. I've recently graduated in Graphic Design at São Paulo State University — Unesp, right after a year-long exchange studying Design and Technology at Parsons, in New York City. There I also worked for Shutterstock and Vault49.<br>With every new project I’m motivated to convey as much passion and depth as possible, crafting a new universe in each creation. An evocative, pulsing aspect is priority in everything that I work on. If we're inspired to create, why shouldn’t we create to inspire?</p><h2>Feel free to get in touch at:</h2><p class='about-links-big'><a class='red-links' href='mailto:&#112;&#101;&#100;&#114;&#111;&#064;&#112;&#101;&#100;&#114;&#111;&#118;&#101;&#110;&#101;&#122;&#105;&#097;&#110;&#111;&#046;&#099;&#111;&#109;'>&#112;&#101;&#100;&#114;&#111;&#064;&#112;&#101;&#100;&#114;&#111;&#118;&#101;&#110;&#101;&#122;&#105;&#097;&#110;&#111;&#046;&#099;&#111;&#109;</a></p><h3>Follow:</h3><ul id='follow-fillup'></ul><h4>Recognition:</h4><ul id='press-fillup'></ul><h5>This website was designed and developed by me, as well as all content and imagery.<br>© Pedro Veneziano 2015</h5>";

var followContent = function(a,b){
	var liNode = document.createElement('li');
	liNode.className = 'about-links-big';
	var aNode = document.createElement('a');
	aNode.className = 'red-links';
	aNode.href = b;
	aNode.target = '_blank';
	var textNode = document.createTextNode(a);
	aNode.appendChild(textNode);
	liNode.appendChild(aNode);
	document.getElementById('follow-fillup').appendChild(liNode);
}

var pressContent = function(a,b){
	var liNode = document.createElement('li');
	liNode.className = 'about-links-small';
	var aNode = document.createElement('a');
	aNode.className = 'red-links';
	aNode.href = b;
	aNode.target = '_blank';
	var textNode = document.createTextNode(a);
	aNode.appendChild(textNode);
	liNode.appendChild(aNode);
	document.getElementById('press-fillup').appendChild(liNode);
}

followContent('Behance,','http://be.net/pedroveneziano');
followContent('Instagram,','http://instagram.com/pedroveneziano');
followContent('Facebook,','http://facebook.com/pedroveneziano');
followContent('Linkedin,','http://linkedin.com/in/pedroveneziano');
followContent('Working Not Working,','http://workingnotworking.com/pedroveneziano');
followContent('Soundcloud,','http://soundcloud.com/pedroveneziano');
followContent('Tumblr','http://pedrovene.tumblr.com');

pressContent('Playful Graphics (Book),','http://www.amazon.com/Playful-Graphics-Graphic-Design-Surprises/dp/8415967748');
pressContent('Étapes (FR),','http://etapes.com/new-grids-nous-emmene-au-bresil');
pressContent('Exploring Digital Design,','http://digitaldesign.represent.uk.com/index.php/the-next-generation');
pressContent('Shutterstock,','http://www.shutterstock.com/blog/designer-passport-a-sanity-defying-composition-of-color-and-form');
pressContent('New Grids,','http://newgrids.fr/2013/04/08/festival-de-cinema-de-gramado/');
pressContent('Creative Allies,','https://creativeallies.com/contests/748-design-a-poster-for-calvin-harris');
pressContent('Hypeness,','http://www.hypeness.com.br/2014/09/blog-da-shutterstock-lanca-serie-com-tutoriais-de-artistas-do-mundo-inteiro-explicando-o-passo-a-passo-de-suas-obras/');
pressContent('Print.pm,','http://print.pm/post/131744438439/pedro-veneziano');
pressContent('Hi-Fructose,','http://hifructosemag.tumblr.com/post/96565986770/thewomb-pedro-veneziano');
pressContent('FFFFound!,','http://ffffound.com/image/726a774aab3da68853a9b86784d47a7174b50dc8');
pressContent('Digital Art Served,','http://www.digitalartserved.com/gallery/25647935/Midnight-Studies');
pressContent('Typography Served,','http://www.typographyserved.com/gallery/6368625/Harder-Better-Faster-Stronger');
pressContent('Branding Served,','http://www.brandingserved.com/gallery/Festival-de-Cinema-de-Gramado/6282355');
pressContent('Editorial Design Served,','http://www.editorialdesignserved.co/gallery/Resident-Magazine/23256065');
pressContent('Student Show,','http://www.studentshow.com/gallery/30580707/Genese');
pressContent('Abduzeedo,','http://abduzeedo.com/typography-mania-192');
pressContent('ChocoLa Design,','http://chocoladesign.com/inspiracao-tipografica-141');
pressContent('Type Lover,','http://type-lover.tumblr.com/post/72269739463/creamy-by-pedro-veneziano');
pressContent('The Womb,','http://thewomb.nfnto.com/post/110764340939/pedro-veneziano');
pressContent('From Up North,','http://www.fromupnorth.com/typography-inspiration-680/');
pressContent('Must be Printed,','http://mustbeprinted.com/post/57926763418/escapekit-frankmusik-between-brazil-based');
pressContent('Inspire First,','http://www.inspirefirst.com/2013/03/19/lettering-works-pedro-veneziano/');
pressContent('FuriaMag,','http://www.furiamag.com/inspiracion-diaria-236/');
pressContent('Splashnology','http://mag.splashnology.com/article/40-fresh-examples-of-creative-typography/9596/');



//////////ABOUT TOGGLE

var aboutButton = document.getElementById('about-button');
var aboutWrap = document.getElementById('about-wrap');
var aboutContainer = document.getElementById('about-container');
var aboutExit = document.getElementById('about-exit');
var fora = true;

//SWITCHES

var aboutOn = function(){
	aboutContainer.className = 'about-container-on';
	aboutWrap.className = 'about-on';
	if(window.innerWidth < 770){
		aboutExit.classList.remove('none');
	}else{
		setTimeout(function(){
	    	aboutExit.classList.remove('none');
		}, 500);
	}
}
var aboutOff = function(){
	aboutWrap.className = 'about-off';
	aboutExit.className = 'none';
	if(window.innerWidth < 770){
		aboutContainer.className = 'about-container-off';
	}else{
		setTimeout(function(){
	    	aboutContainer.className = 'about-container-off';
		}, 500);
	}
}

var aboutSwitch = function(){
	fora = false;
	if(aboutWrap.classList == 'about-off'){
		aboutOn();
		document.body.classList.add('firefox-scrollbar');
	}else if(aboutWrap.classList == 'about-on'){
		aboutOff();
		document.body.classList.remove('firefox-scrollbar');
	}
}

aboutButton.addEventListener('click', aboutSwitch);
aboutExit.addEventListener('click', aboutSwitch);

//CLICK OUTSIDE

aboutWrap.addEventListener('click', function(){
	fora = false;
})
document.body.addEventListener('click', function(){
	if(fora == true && aboutWrap.classList == 'about-on'){
		aboutSwitch();
	}else{
		fora = true;
	}
})



//////////SHOW PROJECT NAMES

var thumbs = document.getElementsByClassName('thumb-image');
var pedroButton = document.getElementById('pedro-button').children[0];

if(thumbs[0] !== undefined ){
	for(i = 0; i < thumbs.length; i ++){
		var currentThumb = i;
		thumbs[i].addEventListener('mouseover',function(i){
			if(aboutWrap.className == 'about-off'){
				pedroButton.innerHTML = i.target.alt;
			}
		});
		thumbs[i].addEventListener('mouseout',function(){
			pedroButton.innerHTML = 'Pedro Veneziano';
		})
	}
}



//////////REVEAL DESCRIPTION

var leftWrap = document.getElementById('left-wrap');
var plusSign = document.getElementById('plus-sign');

if(plusSign !== null){
	plusSign.addEventListener('click', function(){
		if(window.innerWidth < 600){
			if(leftWrap.classList == 'description-off'){
				leftWrap.className = 'description-on';
				plusSign.src = '../img/minus.png';
			}else if(leftWrap.classList == 'description-on'){
				leftWrap.className = 'description-off'
				plusSign.src = '../img/plus.png';
			}
		}
	})
}



//X HOVER

var xHover = function(a,b,c){
	a.children[0].addEventListener('mouseover',function(){
		a.children[0].src = b;
	})
	a.children[0].addEventListener('mouseout',function(){
		a.children[0].src = c;
	})
}

if(plusSign !== null){
	xHover(aboutExit,'../img/exit-blue.png','../img/exit.png');
}else if(plusSign == null){
	xHover(aboutExit,'img/exit-blue.png','img/exit.png');
}



//////////SCROLL LINK

var nextProject = document.getElementById('next-project');

window.addEventListener('scroll', function(){
	if(nextProject !== null && $(window).scrollTop()+600 >= $(document).height()-$(window).height() && nextProject.classList == 'next-project-off'){
		nextProject.className = 'next-project-on';
	}
})