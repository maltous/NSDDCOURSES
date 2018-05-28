function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bx54k0Y20J":
        Script1();
        break;
      case "6gCcVq9W8sY":
        Script2();
        break;
      case "5oOXdqFlKGr":
        Script3();
        break;
      case "6hcw5wlRL4R":
        Script4();
        break;
      case "5cLaY9ivdAR":
        Script5();
        break;
      case "6ObwWdQ2tGe":
        Script6();
        break;
      case "6DEru94nCCk":
        Script7();
        break;
      case "680gTNZgIdZ":
        Script8();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script5()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script6()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script7()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script8()
{
  myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
var player=GetPlayer();
var exercisenotes1="This acknowledges that";
var exercisenotes2=player.GetVar("Name");
var exercisenotes3="Completed all the requirements of PRECEPTORSHIP COURSE successfully";
var exercisenotes4="Which was conducted online at King Saud Medical City, Riyadh, Saudi Arabia";
var exercisenotes5="Nurse Educator (sig.):__________________";
var contents = "<html><head><title>Nursing Staff Development Department</title></head><body style='width:650px;padding:20px;'>"
contents+="<div style='font-size:36px;font-weight:bold;text-align:center;margin-top:20px;'>CERTIFICATE OF COMPLETION</div>";
contents+="<div style='font-size:22px;text-align:center;margin-top:30px;word-wrap:break-word'>"+exercisenotes1+"</div>";
contents+="</body></html>"
contents+="<div style='font-size:28px;font-weight:bold;text-align:center;margin-top:30px;word-wrap:break-word'>"+exercisenotes2+"</div>";
contents+="</body></html>"
contents+="<div style='font-size:28px;text-align:center;margin-top:30px;word-wrap:break-word'>"+exercisenotes3+"</div>";
contents+="</body></html>"
contents+="<div style='font-size:18px;text-align:center;margin-top:30px;word-wrap:break-word'>"+exercisenotes4+"</div>";
contents+="</body></html>"
contents+="<div style='font-size:18px;text-align:right;margin-top:150px;word-wrap:break-word'>"+exercisenotes5+"</div>";
contents+="</body></html>"
myWindow.document.write(contents);
myWindow.document.close();
myWindow.focus();
myWindow.print();
}

