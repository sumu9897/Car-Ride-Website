document.addEventListener('DOMContentLoaded', () => {
    
    const greenButton = document.querySelector('.green-button');
    const bannerButton = document.querySelector('.banner-btn');
    const contactButton = document.querySelector('.button-container button');

    
    if (greenButton) {
        greenButton.addEventListener('click', () => {
            alert('Your Explore More button was clicked!');
            console.log('Green button clicked at:', new Date().toLocaleTimeString());
        });
    }

    
    if (bannerButton) {
        bannerButton.addEventListener('click', () => {
            alert('You clicked the Submit button!');
            console.log('Banner button clicked at:', new Date().toLocaleTimeString());
        });
    }

    
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            alert('You clicked the Contact Today button!');
            console.log('Contact button clicked at:', new Date().toLocaleTimeString());
        });
    }

   
    const phoneNumber = document.querySelector('.number h3');
    const emailAddress = document.querySelector('.mail h3');
    const facebookIcon = document.querySelector('.fa-facebook');
    const twitterIcon = document.querySelector('.fa-twitter');
    const linkedinIcon = document.querySelector('.fa-linkedin');

    
    if (phoneNumber) {
        phoneNumber.addEventListener('click', () => {
            alert('You clicked on the phone number!');
        });
    }

   
    if (emailAddress) {
        emailAddress.addEventListener('click', () => {
            alert('You clicked on the email address!');
        });
    }

    
    if (facebookIcon) {
        facebookIcon.addEventListener('click', () => {
            window.open('https://www.facebook.com/', '_blank');
        });
    }

    if (twitterIcon) {
        twitterIcon.addEventListener('click', () => {
            window.open('https://twitter.com/', '_blank');
        });
    }

    if (linkedinIcon) {
        linkedinIcon.addEventListener('click', () => {
            window.open('https://www.linkedin.com/', '_blank');
        });
    }

   
    const footerText = document.querySelector('.footer-text p');
    const footerFacebook = document.querySelector('.footer-social .fa-facebook');
    const footerTwitter = document.querySelector('.footer-social .fa-twitter');
    const footerLinkedin = document.querySelector('.footer-social .fa-linkedin');

    
    if (footerFacebook) {
        footerFacebook.addEventListener('click', () => {
            alert('You clicked the Facebook icon!');
        });
    }

    if (footerTwitter) {
        footerTwitter.addEventListener('click', () => {
            alert('You clicked the Twitter icon!');
        });
    }

    if (footerLinkedin) {
        footerLinkedin.addEventListener('click', () => {
            alert('You clicked the LinkedIn icon!');
        });
    }
    const mobileMenu = document.querySelector('.hamburger-menu-mobile');
    if (mobileMenu) {
        const mobileButton = mobileMenu.querySelector('.hamburger-icon');
        mobileButton.addEventListener('click', () => {
            
            mobileMenu.classList.toggle('active');
        });
    }

    
    const mediumMenu = document.querySelector('.hamburger-menu-medium');
    if (mediumMenu) {
        const mediumButton = mediumMenu.querySelector('.hamburger-icon');
        mediumButton.addEventListener('click', () => {
            
            mediumMenu.classList.toggle('active');
        });
    }
});
