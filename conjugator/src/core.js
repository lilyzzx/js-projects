var strMoreInner = "more &raquo;";
var strMoreInnerHide = "&laquo; hide";
var strMore = "<a href='#' class='more'>"+strMoreInner+"</a>";
var tagMore = "<!--more-->";

(function($){


var Core = {
	ondomready: function(){
	// page functions go here
		Core.handleWelcome();
		Core.handleLogin();
		Core.handleRegister();
		Core.handleLogo();
		Core.handleMore();
		Core.handleFormRequired();
		Core.handleTabbedNav();
		Core.handleTableRows();
		Core.handleFlyouts();
		Core.handleActivitySlices();
		Core.handleActivityFunctions();
		Core.handleMessage();

		
	},
	
	handleMessage: function() {
		$(".message").append("<div id='messageFrog'></div><div class='topLeft'></div><div class='topRight'></div><div class='bottomRight'></div><div class='bottomLeft'></div>");
	},

	resetAnswer: function() {
		$("#answerSpace").toggleClass("wrong", false).toggleClass("correct", false);
		$("#answerSpaceText").html("");
	},
	
	setAnswerCorrect: function() {
		$("#answerSpaceText").html("");
		$("#answerSpace").toggleClass("correct", true);
		$("#answerSpace").toggleClass("wrong", false);
		//$("#word").focus();
	},
	
	setAnswerWrong: function(str) {
		$("#answerSpace").toggleClass("wrong", true);
		$("#answerSpace").toggleClass("correct", false);
		$("#answerSpaceText").html(str);
		//$("#word").focus();
	},
	
	handleActivityFunctions: function() {
		$("#startButton").click(function(e) {
			e.preventDefault();
			if (activityType == "vocabulary") {
				// jQuery.ajax('/au.php?x=sa&t='+activityType);
				randomizeList("yes");
				setvariable();
			}
			else if (activityType == "verbs") {
				// jQuery.ajax('/au.php?x=sa&t='+activityType);
				howToSelectVerbs('yes');
				setvariable();
			} else {
				// jQuery.ajax('/au.php?x=sa&t='+activityType);
			}
		});
		
		$("#stopButton").click(function(e) {
			// jQuery.ajax('/au.php?x=ea&t='+activityType);
			e.preventDefault();
			stopClock();
		});
		
		$("#checkButton").click(function(e) {
			e.preventDefault();
			verifyAnswer();
			$("#form").submit();
		});
		
		$("#addAccentButton").click(function(e) {
			e.preventDefault();
			accent();
		});
		
		$("#explainAccent, #hiddenSubmit").click(function(e) {
			openWindow('accent.php?language='+language)
		});
		$("#explainPunctuation, #hiddenSubmit").click(function(e) {
			openWindow('punctuation.php')
		});
		
		$("#printResults").click(function(e) {
			gradeToTeacher('print_current',activityType);
		});
		
		$("#recordSendResults").click(function(e) {
			gradeToTeacher('send_current',activityType);
		});
		
		$("#response").focus(function() {
			Core.resetAnswer();
		}, function() {
		});		
		
		$("#response").click(function() {
			Core.resetAnswer();
		});
		
		$("#response").keypress(function(e) {
			Core.resetAnswer();
		});
		
		$(document).keypress(function(e) {
			
			if (typeof activityType != "undefined") {
				switch(e.which) {
					case 13:
						// enter
						e.preventDefault();
						verifyAnswer();
						return false;
					
						break;
				}
			}
		});	
		
	},	
	
	handleActivitySlices: function() {
		$("#innerContent .slice").first().each(function() {
			$(this).append("<div class='topLeft'></div><div class='topRight'></div>");
		});
		$("#innerContent .slice").last().each(function() {
			$(this).append("<div class='bottomLeft'></div><div class='bottomRight'></div>");
		});
		
		$(".activityNav, .activityNavPrimary").each(function() {
			$(this).append("<div class='topLeft'></div><div class='bottomLeft'></div>");
		});
	},
	
	handleFlyouts: function() {
		$(".flyoutContent").append("<div class='top'></div><div class='bottom'></div>");
		
		$(".flyout").hover(function() {
			$(this).parent().toggleClass("activeChild", true);
			$(this).parent().parent().toggleClass("activeGrandChild", true);
			$(this).find(".flyoutInner").toggleClass("flyoutActive", true);
		}, function() {
			$(this).parent().toggleClass("activeChild", false);
			$(this).parent().parent().toggleClass("activeGrandChild", false);
			$(this).find(".flyoutInner").toggleClass("flyoutActive", false);
		});
	},
	
	handleTableRows: function() {
		$(".alternatingRows tr:even").addClass("altRow");
	},
	
	handleTabbedNav: function() {
		$(".tabNavigation a").each(function() {
			$(this).append("<div class='topLeft'></div><div class='topRight'></div>");
		});
		
		$(".tabNavigation a").click(function(e) {
			
			
			href = $(this).attr("href");
			
			if (href != "" && href != "#") {
				// we have a real URL, allow click
				
			} else {
				// we have a tab click, switch layers
				e.preventDefault();
				id = $(this).attr("id");
				contentId = id + "Content";
				
				$(".tabNavigation a").toggleClass("tabNavActive", false);
				$(this).toggleClass("tabNavActive", true);
				
				$(".tabInner").toggleClass("tabContentActive", false);
				$("#"+contentId).toggleClass("tabContentActive", true);
			}
		});
	},
	
	handleFormRequired: function() {
		$("form input.required, form select.required, form textarea.required").parent().toggleClass("hasRequired");
		$("form input.checkbox.required").parent().parent().toggleClass("hasRequired");
	},
	
	handleMore: function() {
		obj = $("div#instructions");

		if (obj.length > 0 && obj.children().length > 0) {
		
			content = obj.children().html();
			//lert(content);
			
			// clean up the more tag
			content = content.replace("<!--More-->", tagMore);

			arText = content.split(tagMore, 2);
			
			num = arText.length;
			if (num > 1 ) {
				content = content.replace("<!--more-->", strMore);
				obj.html("<div class='morePre'>"+arText[0]+"</div><div class='morePost'>"+arText[1]+"</div>" + strMore );
			}
		}
		
		$(".more").click(function(e) {
			e.preventDefault();
			
			if ($(this).hasClass("activeMore")) {
				$(".morePost").slideUp("fast");
				$(this).html(strMoreInner);
				$(this).toggleClass("activeMore", false);
			} else {
				$(".morePost").slideDown("fast");
				$(this).html(strMoreInnerHide);
				$(this).toggleClass("activeMore", true);
			}
		});
		
	},
	
	handleLogo: function() {
		$("#header h1").click(function(e) {
			e.preventDefault();
			window.location = "/index.php";
		});
	},
	
	handleLogin: function() {
		$("#studentLogin, #teacherLogin, #schoolLogin").click(function(e) {
			e.preventDefault();
			id = $(this).attr("id");
			form = id+"Form";
			
			obj = $("#"+form);
			
			if ($(this).hasClass("activeLogin")) {
				// we are hiding the form
				obj.slideUp("fast");
				$(this).toggleClass("activeLogin", false);
			} else {
				// we are revealing the form
				$(".loginContent").slideUp("fast");
				obj.slideDown("fast");
				$(".loginBtn").toggleClass("activeLogin", false);
				$("#studentLogin, #teacherLogin, #schoolLogin").toggleClass("activeLogin", false);
				$(this).toggleClass("activeLogin", true);
			}
			
		});
	
	}, 
	
	handleRegister: function() {
		$("#studentRegister, #teacherRegister, #schoolRegister").click(function(e) {
			e.preventDefault();
			id = $(this).attr("id");
			form = id+"Form";
			
			obj = $("#"+form);
			
			
			if ($(this).hasClass("activeLogin")) {
				// we are hiding the form
				obj.hide();
				$(this).toggleClass("activeLogin", false);
			} else {
				// we are revealing the form
				$(".loginContent").hide();
				obj.show();
				$(".loginBtn").toggleClass("activeLogin", false);
				$("#studentRegister, #teacherRegister, #schoolRegister").toggleClass("activeLogin", false);
				$(this).toggleClass("activeLogin", true);
			}
		});
		
		$("#linkSchool").click(function(e) {
			e.preventDefault();
			$("#schoolRegister").click();
		});
		$("#linkTeacher").click(function(e) {
			e.preventDefault();
			$("#teacherRegister").click();
		});
	
	}, 
	
	handleWelcome: function() {
		var obj = $("#welcome");
		var height = obj.height();
		
		if (height <= 18) {
			obj.toggleClass("welcomeShort", true);
		}
		
		if (height > 35) {
			obj.toggleClass("welcomeLong", true);
		}
		
	}	
}

window.Core = Core;

$(document).ready(function(){Core.ondomready()});

})(jQuery);


function openWindow(url) {
	window.open(url,"url","width=750,height=450,scrollbars=yes,toolbar=yes,resizable=yes");
}

function toggleAll(obj) {
	var l = document.form.elements.length;
	for (i = 0;i < l; i++) {
		var e = document.form.elements[i];
		if (e.type == "checkbox") {
			if (e.checked == true) e.checked = false;
			else e.checked = true;	
		}
	}
	if(obj.innerHTML == 'Mark All') { obj.innerHTML = 'Unmark All' }
	else { obj.innerHTML = 'Mark All' }
}

	function loginTimeoutWarning(t)
	{
		// jQuery.ajax('/au.php?x=to&t='+t);
		alert("Warning!\n\nYour session is about to be logged out due to inactivity.  Please continue working or save your work!");
	}
