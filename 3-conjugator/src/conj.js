var activityType = "verbs";
var see_correct;
var responseStr;
var answersStr = ""; //not used in this exercise, but needed for popup.php
var resultArr = new Array();
var resultsAvailable = true;
var usernamePopup;
var usertypePopup;
start=0;
var capitalization = "";
ya=0
conjugations=0
clock=0
commands=0
allverbs=0
solution=0
attempted=0
correct=0
verb=0
tenseNumber=0
pronoun=0
numberpicked=0;
var name="";
var etre=0;
var sent_already="no";
selectedpositive=new Array();
selectednegative=new Array();
selectedinfinitive=new Array();
selectedyo=new Array();
selectedtu=new Array();
selectedella=new Array();
selectednosotros=new Array();
selectedvosotros=new Array();
selectedellas=new Array();
selectedmeaning=new Array();
selectedpart=new Array();
var up
var down;
var qTime = false;
var min
var sec;
stop=0;
running=0;
var printedGrade;
thislist=new Array();
var vs;
var tt;
var ps;
var addendum;
var language;
ns=(navigator.appName.indexOf("Netscape") != -1)?true:false;
ie=(navigator.appName.indexOf("Microsoft") != -1)?true:false;

document.sw = {
	timer: ""
};

function setCookie() {
//document["clockset"].src = "settime.php";
}


function commandsYes(value) {
	if (value=="yes") commands="yes";
	else commands=0;
}

function whichLanguage(value) {
	language=value;
}

function accent() {
	if (language=="spanish") {
		spanishAccent();
		return
	}
	if (language=="french") {
		frenchAccent();
		return
	}

	if (language=="latin") {
		latinAccent();
		return
	}
	if (language=="german") {
		germanAccent();
		return
	}
	if (language=="italian") {
		italianAccent();
		return
	}

	else return false;
}


function completeConjugation() {
	if (language=="spanish") {
		spanishConjugation();
		return
	}
	if (language=="french") {
		frenchConjugation();
		return
	}
	if (language=="latin") {
		latinConjugation();
		return
	}
	if (language=="german") {

		germanConjugation();
		return
	}
	if (language=="italian") {

		italianConjugation();
		return
	}
	if (language == "portuguese") {
		portugueseConjugation();
		return
	}
	else {return false}
}



function whichTenses() {
	
	
	if (document.form.tenselist[0].selected) tenseNumber=Math.floor(Math.random()*tenses.length);
	else {
		var setTense=false;
		tenseNumber=Math.floor(Math.random()*tenses.length+1);
		tenseNumber=tenseNumber-1;
		if (document.form.tenselist[tenseNumber+1].selected) var setTense=true;
		else {
			while(!setTense) {
				tenseNumber=Math.floor(Math.random()*tenses.length+1);
				tenseNumber=tenseNumber-1;
				if (document.form.tenselist[tenseNumber+1].selected) var setTense=true;
			}
		}
	}
	document.form.tense.value=tenses[tenseNumber];
}




function noVerbs() {
	alert('Your teacher has disabled the SELECT VERB feature, so you will have to practice all the verbs in the list.');
}
function noPronouns() {
	alert('Your teacher has disabled the SELECT PRONOUNS feature, so you will have to practice all the pronouns in the list.');
	document.form.pronouns.selectedIndex = 0;
}

function whichVerbs() {

	
	var myVerbs=new Array();
	var mv=0;
	for (i=0;i<=infinitive.length;i++) {
		if (verbs_conj[i].selected && verbs_conj[i].value>=1) {
			myVerbs[mv]=verbs_conj[i].value;
			mv++;

		}

	}

	if (myVerbs.length==1) {
		if (myVerbs[0]==0) allverbs=0;
		else addVerbs(0, myVerbs[0]);
	}
	else {
		for (i=0;i<myVerbs.length;i++) {
		var location=myVerbs[i];
			if (location==0) allverbs=0;
			else 	addVerbs(i, location);
		}


	}
	if (selectVerbs==false) allverbs=0;
}

function addVerbs(i, l) {

	allverbs++;
	if (commands=="yes") {
		selectedinfinitive[i]= infinitive[l-1];
		selectedpositive[i]=positive[l-1];
		selectednegative[i]=negative[l-1];
		selectedmeaning[i]=meaning[l-1];
	}
	else {

		selectedinfinitive[i]= infinitive[l-1];
		selectedyo[i]=yo[l-1];
		selectedtu[i]=tu[l-1];
		selectedella[i]=ella[l-1];
		selectednosotros[i]=nosotros[l-1];
		selectedvosotros[i]=vosotros[l-1];
		selectedellas[i]=ellas[l-1];
		selectedmeaning[i]=meaning[l-1];
			if (language=="latin" && part.length>0) {
				selectedpart[i]=part[l-1];
			}
	}

}


var tsec = -1;
var tmin = 0;
var thour = 0;
function stopwatch(text) {


   tsec++;
  if (tsec == 60) {
   tsec = 0;
   tmin = tmin + 1; }
  else {
   tmin = tmin; }
  if (tmin == 60) {
   tmin = 0;
   thour += 1; }

if (tsec<=9) { tsec = "0" + tsec; }
   document.sw.timer.value = ((tmin<=9) ? "0" + tmin : tmin) + " : " + tsec;

  if (text == "stop") {

	resetIt();
	return
	}
SD=window.setTimeout("stopwatch();", 1000);
}

function resetIt() {
  tsec = -1;
  tmin = 0;
  thour = 0;

  window.clearTimeout(SD);
 }


function changeSettings() {

	if (attempted!=0) {
		alert("WARNING\n\nBy changing settings while you are in the middle of an exercise, you reset your grade!");
		correct=0;
		attempted=0;
		conjugations=0;
		selectedpositive=new Array();
		selectednegative=new Array();
		selectedinfinitive=new Array();
		selectedyo=new Array();
		selectedtu=new Array();
		selectedella=new Array();
		selectednosotros=new Array();
		selectedvosotros=new Array();
		selectedellas=new Array();
		selectedmeaning=new Array();
		selectedpart=new Array();
		
	}
	else return
}
function hideNotice(){
		ns4 = (document.layers) ? true:false 
		ie4 = (document.all) ? true:false 
		ng5 = (document.getElementById) ? true:false 

		if (ng5) document.getElementById("notice").style.visibility = "hidden" 
		else if (ns4) document.notice.visibility = "hide" 
		else if (ie4) notice.style.visibility ="hidden" 

}

function howToSelectVerbs(reset) {
	
	whichVerbs();
	//hideNotice();
	
	if (start==0) {
		correct=0;
		attempted=0;
		conjugations=0;
		resultArr = new Array();
		setCookie();
		sent_already="no";
		tsec = -1;
  		tmin = 0;
  		thour = 0;
		min=5;
		sec=0;
		stopwatch("start");
	}
	if (start!=0 && reset=="yes") {
		alert ("By pressing START in the middle of your practice, you reset your grade.");
		correct=0;
		attempted=0;
		sent_already="no";
		conjugations=0;
		resultArr = new Array();
		setCookie();
		min=5;
		sec=0;
		stopwatch("stop");
		stopwatch("start");
	}
	start++;

	if (commands=="yes") {
		if (allverbs==0) randomizeAllCommands();
		else randomizeSelectedCommands();
		return
	}
	else {
		if (allverbs==0) randomizeAllVerbs();
		else randomizeSelectedVerbs();
	}
}


function verifyAnswer() {
	if (start == 0) alert("You must first press START to begin the practice.");
	else {
		aCharExists=0;
		response = document.form.response.value;
		if (language != "german") {
			solution = solution.toLowerCase();
			response = response.toLowerCase();
		}
		for (i=0; i<response.length; i++) {
			if (response.charAt(i) != " ") aCharExists=1;
		}

		if (!aCharExists) {
			alert("Please type an answer first.");
			document.form.response.focus();
		}
		else {

			attempted++;

			while (response.charAt(0)==" ") response=response.substring(1,response.length);
			while (response.charAt(response.length-1)==" ") response=response.substring(0,response.length-1);
			while (response.match('  ')) response=response.replace('  ',' ');
	//account for special cases: latin and french etre verbs
			if (language=="latin") {
				if (passive == true) {
					writePassive();
					resultsAvailable = false;
					return;
				}
			}
			if (language=="french") {
				if (match == true) {
					writeParticiple();
					resultsAvailable = false;
					return;
				}
			}
	//otherwise, verify answers here for any other type of language/tense combination:
			var storedSolution = solution;
			var storedInfinitive = document.form.verb.value;
			var storedPronoun = document.form.pronoun.value;
			
			if (response==solution) {
				Core.setAnswerCorrect();
				correct++;
				howToSelectVerbs();
				while (solution == "none") howToSelectVerbs();
				
			}
			else {
				if (solution.match(/\u0113/)) addendum=" (accent on first 'e' in ending)";
				else if (solution.match(/\u012b/)) {
					addendum=" (accent on first 'i' in ending)";
				}
				else addendum="";
				if (see_correct == false) var fb = "Your teacher has disabled your viewing the correct answer.";
				else var fb = "<span>The answer is</span>: " + solution +" "+addendum;
				Core.setAnswerWrong(fb);
				//document.form.response.value="";
				document.form.response.focus();
			}
			var thisstr = storedInfinitive+"/"+storedPronoun+"/"+storedSolution+"/"+response;
		}
	}
	if (resultsAvailable) resultArr.push(thisstr);
	var sc = Math.round(correct/attempted*100) + "%";
	document.form.elements["current_results"].value = sc+" ("+correct+"/"+attempted+")";
	return;
	
}

function grade() {

	if (attempted==0) alert("You have 0 attempts, so you have no grade.");

	else {
	alert("You have correctly conjugated " + correct + " verb(s) in " + attempted + " attempt(s). \nYou have checked the COMPLETE CONJUGATION button "+conjugations+" time(s).\n\nYOUR CURRENT SCORE IS " + Math.round(correct/attempted*100) + " %.");
	document.form.response.focus();
	}
}

function getInfo() {


	if (attempted==0) printedGrade="NO GRADE (0 attempts)";
	else printedGrade = Math.round(correct/attempted*100) + " % : "+correct+"/"+attempted;
	if (allverbs==0) vs = "ALL VERBS";
	else vs = selectedinfinitive;
	


thislist[0]=new Array('ALL PRONOUNS', 'ALL but vosotros','yo','tú','él','ella','usted','nosotros','vosotros','ellas','ellos','ustedes');
thislist[1]=new Array('ALL PRONOUNS', 'je', 'tu','il','elle','on','nous','vous','elles','ils');
thislist[2]=new Array('ALL PRONOUNS','ego','tu','is','ea','id','nos','vos','ei','eae','ea');
thislist[3]=new Array('ALL PRONOUNS','ich','du','er','Sie (sing.)','es','wir','ihre','Sie (pl.)');
thislist[4]=new Array('ALL PRONOUNS','io','tu','lui','Lui','?','noi','voi','Loro');
thislist[5]=new Array('ALL PRONOUNS', 'ALL but vós','eu','tu','ele','ela','você','nós','vós','eles','elas','vocês');

	var chosen=document.form.pronouns.selectedIndex;
	tt=document.sw.timer.value;
	if (language=="spanish") {
		ps=thislist[0][chosen];
	}
	if (language=="french") {
		ps=thislist[1][chosen];
	}
	if (language=="latin") {
		ps=thislist[2][chosen];
	}
	if (language=="german") {
		ps=thislist[3][chosen];
	}
	if (language=="italian") {
		ps=thislist[4][chosen];
	}
	if (language=="portuguese") {
	    ps=thislist[5][chosen];
	}
}

function warning() {}


function gradeToTeacher(how,sid) {
	if (attempted ==0) {
		alert("You have 0 attempts, so you have no grade.");
		return
	}
	if (demo) {
		alert("To record or print your grade, you need to be logged in. Please return to the home page to log in.");
		return
	}
	getInfo();
	tt=document.sw.timer.value;
	
	//store string of responses for results print out:
	if (qTime) {
		alert("Stop trying to hack this site. Find something else to do.");
		return false;
	}
	responseStr = resultArr.join(",");
	if (how == "send_current") {
		var confirmsend = confirm("Are you sure you want to record your grade?");
		if (!confirmsend) return;
		if (sent_already=="yes" && how=="send_current") {

			var message="You cannot send the same grade twice. You can still print your grade, however, if you feel the 'send' feature did not work properly.\n\nTo send another grade, press START again to begin another practice.";
		alert(message);
			return 
		}
		
		document.forms['h'].elements['score'].value = printedGrade;
		document.forms['h'].elements['time'].value = tt;
		document.forms['h'].elements['exercise'].value = title_teacher;
		document.forms['h'].elements['grade_function'].value = how;
		document.forms['h'].elements['responses'].value = responseStr;
		document.forms['h'].elements['verbs'].value = vs;
		document.forms['h'].elements['pronouns'].value = ps;
		document.forms['h'].elements['all'].value = alltenses;
		document.forms['h'].elements['cheat'].value = conjugations;
		
		//document.forms['h'].submit();
//		jQuery.ajax('/au.php?x=sr&type='+activityType+'&id='+id+'&language='+document.forms['h'].elements['language'].value,{complete:function(){document.forms['h'].submit();}});
		if (how != "print_current") sent_already="yes";
	}
	else {
		var url="popup.php?type="+sid+"&do="+how;
//		var sent = window.open(url,'sent','menubar=yes,scrollbars=yes,toolbar=yes,height=500,width=600,resizable=yes');
		// jQuery.ajax('/au.php?x=pr&type='+activityType+'&id='+id+'&language='+document.forms['h'].elements['language'].value,{complete:function(){
		// 	var sent = window.open(url,'sent','menubar=yes,scrollbars=yes,toolbar=yes,height=600,width=700,resizable=yes');
		// }});
		return;
	}
	return
}


function openShortcuts() {
	var shrt=window.open('','shrt','menubar=no,scrollbars=yes,toolbar=no,height=300,width=500,resizable=yes');
shrt.document.open();
	shrt.document.write("<html><body bgcolor=yellow><center><font color=blue size=+1>Keyboard shortcuts for CONJUGUEMOS</center></font>");
	shrt.document.write("<table border=0 ><tr><th width=200>&nbsp;</th><th>For PC's</th><th width=15%>&nbsp;</th><th>For Macs</th>");
	shrt.document.write("</tr><tr><td><input type=button value='Am I correct?'></td><td>ENTER<font color=blue>*</font></td><td>&nbsp;</td><td>ENTER<font color=blue>*</font></td>");
	shrt.document.write("</tr><tr><td><input type=button value='Definition of verb'></td><td>Alt+d</td><td>&nbsp;</td><td>Control+d</td>");
	shrt.document.write("</tr><tr><td><input type=button value='Full Conjugation'></td><td>Alt+f</td><td>&nbsp;</td><td>Control+f</td>");
	shrt.document.write("</tr><tr><td><input type=button value='Add Accent'></td><td>Alt+a</td><td>&nbsp;</td><td>Control+a</td>");
	shrt.document.write("</tr><tr><td><input type=button value='My current grade'></td><td>Alt+g</td><td>&nbsp;</td><td>Control+g</td>");
	shrt.document.write("</tr></table><br><font color=blue>*</font>: In Netscape browsers, press Alt+c/Control+c</body></html>");
	shrt.document.close();

}


function latinList(verb_type,number) {
	alert(verb_type);
	lv=window.open('','lv','menubar=no,scrollbar=yes,toolbar=no,height=500,width=500');
	lv.document.open();
	lv.document.write("<html><body>hello.</body></html>");
	lv.document.close();
	return
	latinVerbs.document.write("<html><head><title>List of Latin Verbs</title>");
	latinVerbs.document.write("</head><body bgcolor=\"#ffff66\" onBlur=\"window.close()\"><img src=\"../images/list.gif\" alt=\"Conjuguemos List of Verbs\">");
	latinVerbs.document.write("<font color=\"blue\"><b>Latin Exercise #"+multiple+" <br>");
	latinVerbs.document.write("<font size=\"-1\">"+titles[number]+"</font><br>uses the following verbs:");
	latinVerbs.document.write("</font></b><br><ol>");

	for (i=0; i<infinitive.length; i++) {
			latinVerbs.document.write('<li>'+infinitive[i]);
			}
	latinVerbs.document.write('</ol>');

	latinVerbs.document.write('</body></html>');

	latinVerbs.document.close();
}


function define() {
	if (start==0) alert("You must first press START to begin the practice.");
	else {
		if (allverbs==0) {
			var word=infinitive[verb];
			var fe=word.match(/\u0113/);
				if (fe) {
					word=word.replace('\u0113','e');
				}
			word=word.toUpperCase();
			var translation=meaning[verb].toUpperCase();
			alert(word + " means " + translation + ".");
			document.form.response.focus();
		}
		else {
			var word2=selectedinfinitive[verb];
			var fe=word2.match(/\u0113/);
				if (fe) {
					word2=word2.replace('\u0113','e');
				}
			word2=word2.toUpperCase();
			var translation2=selectedmeaning[verb].toUpperCase();
			alert(word2 + " means " + translation2 + ".");
		document.form.response.focus();
		}
	}
}



	







//COPY FROM HERE AND PATCH ONTO WEB


function Minutes(data) {
	for (var i=0; i<data.length; i++)
	if (data.substring(i,i+1)==":") break;
	return (data.substring(0,i));}

function Seconds(data) {
	for (var i=0; i<data.length; i++)
	if (data.substring(i,i+1)==":") break;
	return (data.substring(i+1,data.length));}

function setvariable() {

	if (running !=0) {
		return
	}
	min=1*Minutes(document.form.clockinput.value);
	sec=0+Seconds(document.form.clockinput.value);
	document.form.time.value=Display(min,sec);
	clock++;
	running++;
	correct=0;
	attempted=0;
	countdown();
	}

function stopClock() {
	if (running!=0) {
	stop=1;
	countdown();
	}
	else {
	return
	}
}

function originalClock() {
	if (!selectClock) {
		alert("Your teacher has requested that you be timed, so you cannot edit the CLOCK feature.");
		document.form.approval.checked = false;
		return;
	}
	running=0;
}

function countdown(){
	if (document.form.approval.checked == false && clock!=0) {
		sec--;
		if (sec==-1) {sec=59; min--}
		document.form.time.value=Display(min,sec);
		if ((min==0)&&(sec==0)||stop==1) {
		    if (attempted == 0) {
		        score = 0
		    }
		    else {
		        score = Math.round(correct/attempted*100)
		    }
		    msg = "You correctly identified " + correct + " word(s) in " + attempted + " attempt(s).<br>You clicked the Complete Conjugation button "+conjugations+" time(s).<br><br>Your score is " + score + "%."
			document.getElementById("scoretext").innerHTML=msg;
		    $("#myModal").modal('show');
			clock=0;
			stopwatch("stop");
			stop=0;
			running=0;
			start=0;
			document.form.time.value="";
		}
		else {
			down=setTimeout("countdown()",1000);
		}
	}
	else {
		return
	}

}

function Display (min,sec) {
	var disp;
	if (min<=9)
		disp=" 0"

	else
		disp=" ";

	disp+=min+":";
	if (sec<=9)
		disp+="0"+sec;
	else
		disp+=sec;

	return(disp);
}


//STOP COPYING HERE



function captureclicks() {
	bName=navigator.appName;
	if (bName=="Netscape") {
	window.captureEvents(Event.KEYPRESS)

	}
}

function netscapeReturn(caughtEvent) {
	return;
}


function proofcheck() {
	if (language=="latin") {
		if (passive==true) {
			proofPassive();
			return
		}
	}

	if (language=="french") {
		if (etre==1) {
			proofEtre();
			return
		}


	}
	for (i=0; i<infinitive.length; i++) {
		lc=new Array(infinitive[i],meaning[i],yo[i],tu[i],ella[i],nosotros[i],vosotros[i],ellas[i]);
		for (j=0;j<lc.length;j++) {
			var fe=lc[j].match(/\u0113/);
			var fi=lc[j].match(/\u012b/);
			if (fe) {
				lc[j]=lc[j].replace('\u0113','e');
			}
			if (fi) {
				lc[j]=lc[j].replace('\u012b','i');
			}
		}
		var testingWord=lc[0].toUpperCase();
		var testingMeaning=lc[1].toUpperCase();
		alert(testingWord+": "+testingMeaning+"\n 1s: "+lc[2]+"\n 2s: "+lc[3]+"\n 3s: "+lc[4]+"\n 1p: "+lc[5]+"\n 2p: "+lc[6]+"\n 3p: "+lc[7]);
	}
}

function proofPassive() {
	for (i=0; i<infinitive.length; i++) {
		lc=new Array(infinitive[i],meaning[i],yo[i],tu[i],ella[i],nosotros[i],vosotros[i],ellas[i]);
		lc_endings=new Array('(us)(a)','(us)(a)','(us)(a)(um)','(i)(ae)','(i)(ae)','(i)(ae)(a)');
		for (j=2;j<lc.length;j++) {
			var h=j-2;
			lc[j]=lc[j].replace('X',lc_endings[h]);
			lc[j]=lc[j]+" "+auxiliary[target][h];
		}
		var testingWord=lc[0].toUpperCase();
		var testingMeaning=lc[1].toUpperCase();
		alert(testingWord+": "+testingMeaning+"\n 1s: "+lc[2]+"\n 2s: "+lc[3]+"\n 3s: "+lc[4]+"\n 1p: "+lc[5]+"\n 2p: "+lc[6]+"\n 3p: "+lc[7]);
	}


}


function proofEtre() {
	for (i=0; i<infinitive.length; i++) {
		for (m=0;m<tobe.length;m++) {
			if (infinitive[i]==tobe[m]) {
				match=true;
			}
		}

		lc=new Array(infinitive[i],meaning[i],yo[i],tu[i],ella[i],nosotros[i],vosotros[i],ellas[i]);
		lc_endings=new Array('(e)','(e)','(e)','(s)(es)','(s)(es)','(s)(es)');
		if (match==true) {
			for (j=2;j<lc.length;j++) {
				var h=j-2;
				lc[j]=lc[j]+" "+lc_endings[h];
			}
		}
		var testingWord=lc[0].toUpperCase();
		var testingMeaning=lc[1].toUpperCase();
		alert(testingWord+": "+testingMeaning+"\n 1s: "+lc[2]+"\n 2s: "+lc[3]+"\n 3s: "+lc[4]+"\n 1p: "+lc[5]+"\n 2p: "+lc[6]+"\n 3p: "+lc[7]);
	}


}


function allVariables() {
attempted=0;
	correct=0;
alert("By pressing this button, you have reset your grade to 0%");
	var heading="Use these variables to check for error: \n";
	var myPronoun="\nPronoun: "+pronoun;
	var myVerb="\nVerb #: "+verb;
	var myInf="\nLength of verb list: "+infinitive.length;
	var myInf2="\nLength of selected verb list: "+selectedinfinitive.length;
	var myVerb2="\nInfinitive: "+infinitive[verb];
	var mySelectedVerb="\nSelected verb: "+selectedinfinitive[verb];
	var mySolution="\nSolution: "+solution;

	alert(heading+myPronoun+myVerb+myInf+myInf2+myVerb2+mySelectedVerb+mySolution);
	
}

function microsoftReturn() {
	return;
}

