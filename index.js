function createmyAppointment() {

  let member = {};

  member.reference = prompt("Please enter the name of the member who referred you to us.")
 member.recipient = prompt("Please input your full name.");
  member.location = prompt("What city are you applying for membership at? ");

  myHeader.innerHTML = `Thanks for confirming ${member.recipient}`;
  myParagraph.innerHTML = ` Hi ${member.recipient} we at Latitude are excited to finally meet you in person. You have been referred to us through member ${member.reference}. Congrats on making it this far.  Our next members meeting near ${member.location} office on Saturday September 19th, 2024 9:00am.`
  myHeader.style.color ="darkgreen";
  myHeader.style.backgroundcolor ="black";
}






myButton.onclick = createmyAppointment;