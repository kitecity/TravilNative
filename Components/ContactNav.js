// Data
const componentData = {
    address: {
        href: "https://www.google.com.eg/maps/place/Kite+fly+school+hurghada/@26.9865734,33.9082233,15z/data=!4m6!3m5!1s0x144d7df45aa2b593:0x4de776de3ce79e8a!8m2!3d26.9865734!4d33.9082233!16s%2Fg%2F11r_y0mr5g?hl=ar-eg&entry=ttu",
        text: "Makadi Bay, Hurghada, Egypt"
    },
    phone: {
        href: "tel:+121212",
        text: "+121212"
    },
    email: {
        href: "mailto:gmail@gmail.com",
        text: "gmail@gmail.com"
    },
    facebook: {
        href: "https://www.facebook.com/www.kiteflyschoohurghada?mibextid=ZbWKwL"
    },
    instagram: {
        href: "https://instagram.com/kite_fly_school_egy?igshid=MzNlNGNkZWQ4Mg=="
    }
};

// Component
function createComponent() {
    const container = document.createElement('div');
    container.classList.add('container-fluid', 'bg-dark', 'px-5', 'd-none', 'd-lg-block');

    container.innerHTML = `
        <div class="row gx-0 ">
            <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a href="${componentData.address.href}">
                        <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>${componentData.address.text}</small>
                    </a>
                    <a href="${componentData.phone.href}">
                        <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>${componentData.phone.text}</small>
                    </a>
                    <a href="${componentData.email.href}">
                        <small class="text-light"><i class="fa fa-envelope-open me-2"></i>${componentData.email.text}</small>
                    </a>
                </div>
            </div>
            <div class="col-lg-4 text-center text-lg-end">
                <div class="d-inline-flex align-items-center" style="height: 45px;">
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="${componentData.facebook.href}">
                        <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="${componentData.instagram.href}">
                        <i class="fab fa-instagram fw-normal"></i>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Append the component to the document
    document.getElementById('myComponent').appendChild(container);
}

// Export the createComponent function
export { createComponent };

