if (typeof tenses=="undefined") {
	var tenses=new Array();
	tenses[tenses.length]="present";
	tenses[tenses.length]="preterit";
	tenses[tenses.length]="imperfect";
	tenses[tenses.length]="future";
	tenses[tenses.length]="conditional";
	tenses[tenses.length]="subjunctive present";
	tenses[tenses.length]="subjunctive past (-ra)";
	tenses[tenses.length]="pres. progressive";
	tenses[tenses.length]="pres. perfect";
}

var entry = "response";
function accent() {
	if (entry == '') {return}
	text=$.trim(document.form.elements[entry].value);
	if (text.charAt(text.length-1)=="" || text.charAt(text.length-1)==" ") {
	return;}
	if (text.charAt(text.length-1)=='a') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'á';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='e') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'é';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='i') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'í';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='o') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'ó';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='u') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'ú';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='n') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'ñ';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='?') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'¿';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='!') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'¡';
		document.form.elements[entry].focus();
		return;
	}
	if (text.charAt(text.length-1)=='ú') {
		text=text.substring(0,text.length-1);
		document.form.elements[entry].value=text+'ü';
		document.form.elements[entry].focus();
		return;
	}
	else {
		var wrongLetter2=text.charAt(text.length-1);
		var wrongLetter=wrongLetter2.toUpperCase();
		alert('OOPS! You tried to put an accent on the letter '+wrongLetter+'.');
		document.form.elements[entry].focus();
	}
}

function randomizeSelectedVerbs() {
	document.form.response.value="";
	document.form.response.focus(); 
	pronoun=document.form.pronouns.selectedIndex;
    	verb=Math.floor(Math.random()*selectedinfinitive.length)
  	document.form.verb.value=selectedinfinitive[verb];
	while (!infinitive[verb]) {
		verb=Math.floor(Math.random()*infinitive.length);
	}

	if (document.form.pronouns.selectedIndex==0) {
			pronoun=Math.floor(Math.random()*20);
			if (approveVosotros=="no") while (pronoun==8 || pronoun==19) pronoun=Math.floor(Math.random()*20);	
	}
	
	if (document.form.pronouns.selectedIndex==1) {
		pronoun=Math.floor(Math.random()*20);
		while (pronoun==8 || pronoun==19) pronoun=Math.floor(Math.random()*20);
	}
	
	
	if (pronoun==2 || pronoun==12 || pronoun==14 || pronoun==16) {
		solution=selectedyo[verb];
		document.form.pronoun.value="yo";
		}
	if (pronoun==3 || pronoun==13 || pronoun==15 || pronoun==17) {
		solution=selectedtu[verb];
		document.form.pronoun.value="tú";
		}
	if (pronoun==0 || pronoun==4) {
		solution=selectedella[verb];
		document.form.pronoun.value="él";
		}
	if (pronoun==5) {
		solution=selectedella[verb];
		document.form.pronoun.value="ella";
		}
	if (pronoun==6) {
		solution=selectedella[verb];
		document.form.pronoun.value="usted";
		}
	if (pronoun==7 || pronoun==18) {
		solution=selectednosotros[verb];
		document.form.pronoun.value="nosotros";
		}
	if (pronoun==8 || pronoun==19) {
		solution=selectedvosotros[verb];
		document.form.pronoun.value="vosotros";
		}
	if (pronoun==1 || pronoun==9) {
		solution=selectedellas[verb];
		document.form.pronoun.value="ellas";
		}
	if (pronoun==10) {
		solution=selectedellas[verb];
		document.form.pronoun.value="ellos";
		}
	if (pronoun==11) {
		solution=selectedellas[verb];
		document.form.pronoun.value="ustedes";
		}
	if (alltenses=="yes") {
		whichTenses();
		solution=solution[tenseNumber];
	}
	return;
}	

function randomizeSelectedCommands() {        

	document.form.response.value="";        
	document.form.response.focus();         
	pronoun=document.form.pronouns.selectedIndex;        
	verb=Math.floor(Math.random()*selectedinfinitive.length)        
	document.form.verb.value=selectedinfinitive[verb];                

	if (document.form.pronouns.selectedIndex==0) {                
		pronoun=Math.floor(Math.random()*2);                
		if (pronoun==0) {                
			solution=selectedpositive[verb];                
			document.form.pronoun.value="positive command";
	                }                

		if (pronoun==1) {                
			solution=selectednegative[verb];                
			document.form.pronoun.value="negative command";
	                }        
	}                

	if (document.form.pronouns.selectedIndex==1){                
		solution=selectedpositive[verb];                
		document.form.pronoun.value="positive command";        
	}        

	if (document.form.pronouns.selectedIndex==2) {                
		solution=selectednegative[verb];                
		document.form.pronoun.value="negative command";        
	}                
	return;
}


function randomizeAllVerbs() {
       	document.form.response.value="";
	document.form.response.focus();
    	pronoun=document.form.pronouns.selectedIndex;
    	verb=Math.floor(Math.random()*infinitive.length);
	while (!infinitive[verb]) {
		verb=Math.floor(Math.random()*infinitive.length);
	}
	document.form.verb.value=infinitive[verb];
	
	if (document.form.pronouns.selectedIndex==0) {
		pronoun=Math.floor(Math.random()*20);
		if (approveVosotros=="no") while (pronoun==8 || pronoun==19) pronoun=Math.floor(Math.random()*20);	
	}
	
	
	if (document.form.pronouns.selectedIndex==1) {
		pronoun=Math.floor(Math.random()*20);
		while (pronoun==8 || pronoun==19) pronoun=Math.floor(Math.random()*20);
	}
	
	if (pronoun==2 || pronoun==12 || pronoun==14 || pronoun==16) {
		solution=yo[verb];
		document.form.pronoun.value="yo";
		}	
	if (pronoun==3 || pronoun==13 || pronoun==15 || pronoun==17) {
		solution=tu[verb];
		document.form.pronoun.value="tú";
		}
	if (pronoun==0 || pronoun==4) {
		solution=ella[verb];
		document.form.pronoun.value="él";
		}
	if (pronoun==5) {
		solution=ella[verb];
		document.form.pronoun.value="ella";
		}
	if (pronoun==6) {
		solution=ella[verb];
		document.form.pronoun.value="usted";
		}
	if (pronoun==7 || pronoun==18) {
		solution=nosotros[verb];
		document.form.pronoun.value="nosotros";
		}
	if (pronoun==8 || pronoun==19) {
		solution=vosotros[verb];
		document.form.pronoun.value="vosotros";
		}
	if (pronoun==1 || pronoun==9) {
		solution=ellas[verb];
		document.form.pronoun.value="ellas";
		}
	if (pronoun==10) {
		solution=ellas[verb];
		document.form.pronoun.value="ellos";
		}
	if (pronoun==11) {
		solution=ellas[verb];
		document.form.pronoun.value="ustedes";
		}
	if (alltenses=="yes") {
		whichTenses();
		solution=solution[tenseNumber];
	}
	return;

}	

function randomizeAllCommands() {        
	document.form.response.value="";        
	document.form.response.focus();         
	pronoun=document.form.pronouns.selectedIndex;        
	verb=Math.floor(Math.random()*infinitive.length);        
	document.form.verb.value=infinitive[verb];                

	if (document.form.pronouns.selectedIndex==0) {                
		pronoun=Math.floor(Math.random()*2);                
		if (pronoun==0) {                
			solution=positive[verb];                
			document.form.pronoun.value="positive command";                
		}                
		if (pronoun==1) {                
			solution=negative[verb];                
			document.form.pronoun.value="negative command";   
	             }        
	}              
	
	if (document.form.pronouns.selectedIndex==1){                
		solution=positive[verb];                
		document.form.pronoun.value="positive command";        
		}        
	if (document.form.pronouns.selectedIndex==2) {                
		solution=negative[verb];                
		document.form.pronoun.value="negative command";        
		}                

	return;

}



function spanishConjugation() {
	if (start==0) {
		alert("You must first press START to begin the practice.");
		}
	else {
		conjugations++;
		if (commands=="yes") {
			spanishConjugationCommands();
			return
		}
		
		if (allverbs==0) {
			if (alltenses=="yes") {
				alert("yo: "+yo[verb][tenseNumber]+"\n tú: "+tu[verb][tenseNumber]+"\n ella: "+ella[verb][tenseNumber]+"\n nosotros: "+nosotros[verb][tenseNumber]+"\n vosotros: "+vosotros[verb][tenseNumber]+"\n ellos: "+ellas[verb][tenseNumber]);
			}
				
			else {
				alert("yo: "+yo[verb]+"\n tú: "+tu[verb]+"\n ella: "+ella[verb]+"\n nosotros: "+nosotros[verb]+"\n vosotros: "+vosotros[verb]+"\n ellos: "+ellas[verb]);
			}
			document.form.response.focus();
		}
		else {
			if (alltenses=="yes") {
				alert("yo: " + selectedyo[verb][tenseNumber]+ "\n tú: "+selectedtu[verb][tenseNumber]+"\n ella: "+selectedella[verb][tenseNumber]+"\n nosotros: "+selectednosotros[verb][tenseNumber]+"\n vosotros: "+selectedvosotros[verb][tenseNumber]+"\n ellos: "+selectedellas[verb][tenseNumber]);

			}

			else {
				alert("yo: " + selectedyo[verb]+ "\n tú: "+selectedtu[verb]+"\n ella: "+selectedella[verb]+"\n nosotros: "+selectednosotros[verb]+"\n vosotros: "+selectedvosotros[verb]+"\n ellos: "+selectedellas[verb]);
			}
			document.form.response.focus();
		}
	}
	
}

function spanishConjugationCommands() {        

	if (start==0) {                
		alert("You must first press START to begin the practice.");                
	}        

	else {                
		if (allverbs==0) {                
			alert("positive: "+positive[verb]+"\n negative: "+negative[verb]);
	               	document.form.response.focus();       
	         }                

		else {                
			alert("positive: "+selectedpositive[verb]+"\n negative: "+selectednegative[verb]);
	                document.form.response.focus();               
			 }        
	}
}        	


function spanishAccent() {
	warning();
	text=document.form.response.value;
	
	
	if (text.charAt(text.length-1)=="" || text.charAt(text.length-1)==" ") {
		return
	}
		


	if (text.charAt(text.length-1)=="a" || text.charAt(text.length-1)=="e" || text.charAt(text.length-1)=="i" || text.charAt(text.length-1)=="o" || text.charAt(text.length-1)=="u") {
		if (text.charAt(text.length-1)=="a") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"á";
		document.form.response.focus();
		return
		}
		if (text.charAt(text.length-1)=="e") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"é";
		document.form.response.focus();
		return
		}

		if (text.charAt(text.length-1)=="i") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"í";
		document.form.response.focus();
		return
		}

		if (text.charAt(text.length-1)=="o") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ó";
		document.form.response.focus();
		return
		}

		if (text.charAt(text.length-1)=="u") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ú";
		document.form.response.focus();
		return
		}
		
	}
	
	else {
		var wrongLetter2=text.charAt(text.length-1);
		var wrongLetter=wrongLetter2.toUpperCase();
		alert("OOPS!\n You tried to put an accent on the letter \""+wrongLetter+"\".");
		document.form.response.focus();
	}

}	
