$('#messageForm').submit((e) => {
  e.preventDefault();
  const name = $("#name").val();
  const email = $("#email").val();
  const message = $("#message").val();

  const subjectLine = 'Contact from suchinlin.com';
  const messageBody = `
${name ?  `Name: ${name} %0D%0A` : ''}
${email ?  `Email: ${email} %0D%0A` : ''}
%0D%0A
${message}
  `
  window.open(`mailto:iamsuchinlin@gmail.com?subject=${subjectLine}&body=${messageBody}`, '_blank');
});
