function submitForm(){
    let name = document.getElementById('input-name').value; 
    let email = document.getElementById('input-email').value;
    let subject = document.getElementById('input-subject').value;
    let massage = document.getElementById('input-YourMassage').value;


    if (name == '') {
        alert("Nama harus diisi ya");
    } else if (email == '') {
        alert("email harus diisi ya");
    } else if (subject == '') {
        alert("subject harus diisi ya");
    } else if (massage == '') {
        alert("pesan harus diisi ya");
    }

    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(massage);

    let receiveMail = 'jokowi@mail.com';

    let a = document.createElement('a');

    a.href = 'mailto:' + '?subject=' + subject + '&body=Halo nama saya ' + name + ', ' + massage;

    a.click();

}