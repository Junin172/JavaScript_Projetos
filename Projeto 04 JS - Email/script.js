import emailjs from 'emailjs-com';

function EnviarEmail(){
    var params = {
        from_name : document.getElementById('fullname').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_bjxicaa', 'template_eu4cxht', params).then(function(res){
        alert("Sususususususucesso!" + res.status);
    })
}