// template_oyden5m
// service_a34bzbl

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
        "service_a34bzbl",
        "template_oyden5m",
        event.target,
        "R54J9NMfhG7qiMJoB"    
    ).then(() => {
        console.log("this worked!!");
    })
}