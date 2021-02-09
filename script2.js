function Meet(Choice){
// The choice of the first buttons 
    
    if(Choice == "Nishitha" || Choice == "Kruthika"){
        document.getElementById("current").innerHTML = Choice;
        document.getElementById("result").innerHTML = "You : Hey " + Choice + "!<br> " + Choice + " : Good Morning Sir! :(<br>";
        document.getElementById('Nishitha').style.display = 'none';
        document.getElementById("Ali").style.display = 'none';
        document.getElementById("Kruthika").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("studentWhat").innerHTML = 'What are you working on? ' + Choice;
        document.getElementById('studentSad').innerHTML = 'Hey ' + Choice + "! Why do you look sad?";
        document.getElementById('studentSad').style.display = 'inline';
        document.getElementById("studentWhat").style.display = 'inline';
        document.getElementById("studentHappy").style.display = 'none';
    }
    
    if(Choice == "Ali"){
        document.getElementById("current").innerHTML = Choice;
        document.getElementById("result").innerHTML = "You : Hai " + Choice + "!<br> " + Choice + " : Hello Sir!<br>";
        
       //making sure the right buttons are displayed
        document.getElementById('Nishitha').style.display = 'none';
        document.getElementById("Ali").style.display = 'none';
        document.getElementById("Kruthika").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("studentWhat").innerHTML = 'What are you doing ? ' + Choice;
        document.getElementById("studentHappy").innerHTML = 'You look Happy today ' + Choice;
        document.getElementById('studentSad').style.display = 'none';
        document.getElementById("studentWhat").style.display = 'inline';
        document.getElementById("studentHappy").style.display = 'inline';
    }
}

function Meet2(Choice){

    var current = document.getElementById("current").innerHTML;

    if((Choice == "Sad" || Choice == "What") && (current == "Nishitha" || current == "Kruthika"))
    {
        if(Choice == "Sad"){
            document.getElementById("result2").innerHTML = "You : " + current + ", Why do you look sad? <br>" + current + " : I have been stuck with this problem for quite some time. <br> You : What is the question? <br>" + current + " : Which of the following tools will you use to check if the user name is present in the data base.<br>";
        }
        if(Choice == "What"){
            document.getElementById("result2").innerHTML = "You : " + current + ", What are you doing? <br>" + current + " : I have been stuck with this problem for quite some time. <br> You : What is the question? <br>" + current + " : Which of the following tools will you use to check if the user name is present in the data base.<br>";
        }
        document.getElementById('studentSad').style.display = 'none';
        document.getElementById('studentWhat').style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("A").innerHTML = 'Option A) HTML';
        document.getElementById("B").innerHTML = 'Option B) CSS';
        document.getElementById("C").innerHTML = 'Option C) Django';
        document.getElementById("A").style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
    }

    if((Choice == "Happy" || Choice == "What") && (current == "Ali"))
    {
        
        if(Choice == "Happy"){
            document.getElementById("result2").innerHTML = "You : " + current + ", Why do you look Happy and Excited today? <br>" + current + " : Yes Sir, I am very Excited today. Sir I want to ask you a personal question? <br> You : Go ahead ask away. <br>" + current + " : Why did you choose to become a Teacher.<br>";
        }
        if(Choice == "What"){
            document.getElementById("result2").innerHTML = "You : " + current + ", What are you doing you look excited? <br>" + current + " : Yes Sir, I am very Excited today. Sir I want to ask you a personal question? <br> You : Go ahead ask away. <br>" + current + " : Why did you choose to become a Teacher.<br>";
        }
        document.getElementById('studentHappy').style.display = 'none';
        document.getElementById('studentWhat').style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("A").innerHTML = 'I enjoy working as a teacher.';
        document.getElementById("B").innerHTML = 'Being a teacher I can guided students like you.';
        document.getElementById("C").innerHTML = 'It was my ambition to become to a Teacher.';
        document.getElementById("A").style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("C").style.display = 'inline';
    }

}

function Meet3(Choice){
    var current = document.getElementById("current").innerHTML;
    if(current == "Ali")
    {
        document.getElementById("result3").innerHTML = "You : " + document.getElementById(Choice).innerHTML + "<br> Ali : Thanks for Answering it frankly Sir <br> Ali: And Very Happy Teachers day to you Sir.<br><br> Here is a Gift from me sir.";
        document.getElementById("A").style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("greetcard").style.display = 'block';
    }
    else
    {
        document.getElementById("result3").innerHTML = "You : It is " + document.getElementById(Choice).innerHTML + ". <br>" + current + " : Thanks for helping me Sir.<br>" +  current + " : Very Happy Teachers day to you Sir.<br><br> This is for you sir.";
        document.getElementById("A").style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("C").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("greetcard").style.display = 'block';
    }
}