let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    const logo = document.querySelector(" .personal-logo--light");
    contrastToggle = !contrastToggle;    
    if (contrastToggle) {
        document.body.classList += " dark-theme"
        logo.style.opacity = 0;   
    }
    else {
        document.body.classList.remove("dark-theme")
        logo.style.opacity = 1;        
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading")
    const success = document.querySelector(".modal__overlay--success")
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
        "service_a34bzbl",
        "template_oyden5m",
        event.target,
        "R54J9NMfhG7qiMJoB"    
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert("The email service is temporarily unavailable. Please contact me directly at jeddelich@gmail.com.")
    })
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;        
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;    
    document.body.classList += " modal--open"
}