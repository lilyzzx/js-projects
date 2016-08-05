
function randomizeSelectedVerbs() {
	document.form.response.value="";
	document.form.response.focus();
 	pronoun=document.form.pronouns.selectedIndex;
    	verb=Math.floor(Math.random()*selectedinfinitive.length);  		document.form.verb.value=selectedinfinitive[verb];
	if (document.form.pronouns.selectedIndex==0) {
		pronoun=Math.floor(Math.random()*20);
	}
	if (pronoun==1 || pronoun==12 || pronoun==14 || pronoun==16) {
		solution=selectedyo[verb];
		document.form.pronoun.value="ich";
		}
	if (pronoun==2 || pronoun==13 || pronoun==15 || pronoun==17) {
		solution=selectedtu[verb];
		document.form.pronoun.value="du";
		}
	if (pronoun==3) {
		solution=selectedella[verb];
		document.form.pronoun.value="er";
		}
	if (pronoun==4 || pronoun==11) {
		solution=selectedella[verb];
		document.form.pronoun.value="sie (singular)";
		}
	if (pronoun==5) {
		solution=selectedella[verb];
		document.form.pronoun.value="es";
		}
	if (pronoun==6 || pronoun==10) {
		solution=selectednosotros[verb];
		document.form.pronoun.value="wir";
		}
	if (pronoun==7 || pronoun==18 || pronoun==0) {
		solution=selectedvosotros[verb];
		document.form.pronoun.value="ihr";
		}
	if (pronoun==8 || pronoun==19) {
		solution=selectedellas[verb];
		document.form.pronoun.value="sie (plural)";
		}
	if (pronoun==9) {
		solution=selectedellas[verb];
		document.form.pronoun.value="Sie";
		}
	
	return;
}
function randomizeSelectedCommands() {
        document.form.response.value="";
       	document.form.response.focus();
        pronoun=document.form.pronouns.selectedIndex;
        verb=Math.floor(Math.random()*selectedinfinitive.length);        	document.form.verb.value=selectedinfinitive[verb];
         if (document.form.pronouns.selectedIndex==0) {
		pronoun=Math.floor(Math.random()*8);
	}
	if (pronoun==1 || pronoun==0) {
		solution=selectedtu[verb];
		document.form.pronoun.value="du";
		}
	if (pronoun==2 || pronoun==6) {
		solution=selectednosotros[verb];
		document.form.pronoun.value="wir";
		}
	if (pronoun==3 || pronoun==7) {
		solution=selectedvosotros[verb];
		document.form.pronoun.value="ihre";
		}
	if (pronoun==4) {
		solution=selectedellas[verb];
		document.form.pronoun.value="Sie";
		}
                	return;
}
function randomizeAllVerbs() {
       	document.form.response.value="";
	document.form.response.focus();
    	pronoun=document.form.pronouns.selectedIndex;
    	verb=Math.floor(Math.random()*infinitive.length);
	document.form.verb.value=infinitive[verb];
	if (document.form.pronouns.selectedIndex==0) {
		pronoun=Math.floor(Math.random()*20);
	}
	if (pronoun==1 || pronoun==12 || pronoun==14 || pronoun==16) {
		solution=yo[verb];
		document.form.pronoun.value="ich";
		}
	if (pronoun==2 || pronoun==13 || pronoun==15 || pronoun==17) {
		solution=tu[verb];
		document.form.pronoun.value="du";
		}
	if (pronoun==3) {
		solution=ella[verb];
		document.form.pronoun.value="er";
		}
	if (pronoun==4 || pronoun==11) {
		solution=ella[verb];
		document.form.pronoun.value="sie (singular)";
		}
	if (pronoun==5) {
		solution=ella[verb];
		document.form.pronoun.value="es";
		}
	if (pronoun==6 || pronoun==10) {
		solution=nosotros[verb];
		document.form.pronoun.value="wir";
		}
	if (pronoun==7 || pronoun==18 || pronoun==0) {
		solution=vosotros[verb];
		document.form.pronoun.value="ihr";
		}
	if (pronoun==8 || pronoun==19) {
		solution=ellas[verb];
		document.form.pronoun.value="sie (plural)";
		}
	if (pronoun==9) {
		solution=ellas[verb];
		document.form.pronoun.value="Sie";
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
		pronoun=Math.floor(Math.random()*8);
	}
	if (pronoun==1 || pronoun==0) {
		solution=tu[verb];
		document.form.pronoun.value="du";
		}
	if (pronoun==2 || pronoun==6) {
		solution=nosotros[verb];
		document.form.pronoun.value="wir";
		}
	if (pronoun==3 || pronoun==7) {
		solution=vosotros[verb];
		document.form.pronoun.value="ihre";
		}
	if (pronoun==4) {
		solution=ellas[verb];
		document.form.pronoun.value="Sie";
		}
                return;
}



function germanConjugation() {
	if (start==0) {
		alert("You must first press START to begin the practice.");
		}
	else {
		conjugations++;
		
		if (commands==1) {
			frenchConjugationCommands();
												return		
		}
		if (allverbs==0) {
			alert("ich: "+yo[verb]+"\n du: "+tu[verb]+"\n er/sie/es: "+ella[verb]+"\n wir: "+nosotros[verb]+"\n ihr: "+vosotros[verb]+"\n sie/Sie: "+ellas[verb]);		
			document.form.response.focus();
		}
		else {
		alert("ich: " + selectedyo[verb]+ "\n du: "+selectedtu[verb]+"\n er/sie/es: "+selectedella[verb]+"\n wir: "+selectednosotros[verb]+"\n ihr: "+selectedvosotros[verb]+"\n sie/Sie: "+selectedellas[verb]);		
		document.form.response.focus();
		}
	}
}
function germanConjugationCommands() {
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

function germanAccent() {
	
	text=document.form.response.value;
	if (text.charAt(text.length-1)=="" || text.charAt(text.length-1)==" ") {
		return	
	}
	if (text.charAt(text.length-1)=="a" || text.charAt(text.length-1)=="o" || text.charAt(text.length-1)=="u" || text.charAt(text.length-1)=="s") {
		if (text.charAt(text.length-1)=="a") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ä";
		document.form.response.focus();
		return		}
		if (text.charAt(text.length-1)=="o") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ö";
		document.form.response.focus();
		return		}
		if (text.charAt(text.length-1)=="u") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ü";
		document.form.response.focus();
		return		}
		if (text.charAt(text.length-1)=="s") {
		text=text.substring(0,text.length-1);
		document.form.response.value=text+"ß";
		document.form.response.focus();
		return		}
		
	}
		else {
		var wrongLetter2=text.charAt(text.length-1);
		var wrongLetter=wrongLetter2.toUpperCase();
		alert("OOPS!\n You tried to put an accent on the letter \""+wrongLetter+"\".");
		document.form.response.focus();
	}
}
	
