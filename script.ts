// Get references to form and resume display elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const personalName = document.getElementById('personal-name') as HTMLElement;
const personalPhone = document.getElementById('personal-phone') as HTMLElement;
const personalEmail = document.getElementById('personal-email') as HTMLAnchorElement;
const personalLinkedin = document.getElementById('personal-linkedin') as HTMLAnchorElement;
const personalYoutube = document.getElementById('personal-youtube') as HTMLAnchorElement;
const objectiveText = document.getElementById('objective-text') as HTMLElement;
const educationText = document.getElementById('education-text') as HTMLElement;
const skillsText = document.getElementById('skills-text') as HTMLElement;
const workExpText = document.getElementById('work-exp-text') as HTMLElement;
const certificationsList = document.getElementById('certifications-list') as HTMLUListElement;
const profileImg = document.getElementById('profile-img') as HTMLImageElement;
const resumeContainer = document.querySelector('.resume-container') as HTMLElement;
const formContainer = document.querySelector('.form-container') as HTMLElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    const youtube = (document.getElementById('youtube') as HTMLInputElement).value;
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExp = (document.getElementById('work-exp') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value;
    
    // Get the profile picture and set it to the resume
    const profilePicInput = document.getElementById('profile-picture') as HTMLInputElement;
    const file = profilePicInput.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            profileImg.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    }

    // Split certifications by commas and create list items
    const certificationItems = certifications.split(',').map(cert => {
        const li = document.createElement('li');
        li.textContent = cert.trim();
        return li;
    });

    // Update resume sections with collected data
    personalName.textContent = name;
    personalPhone.textContent = phone;
    personalEmail.setAttribute('href', `mailto:${email}`);
    personalEmail.textContent = email;
    personalLinkedin.setAttribute('href', linkedin);
    personalLinkedin.textContent = linkedin;
    personalYoutube.setAttribute('href', youtube);
    personalYoutube.textContent = youtube;

    objectiveText.textContent = objective;
    educationText.textContent = education;
    skillsText.textContent = skills;
    workExpText.textContent = workExp;

    // Clear the certifications list and add new items
    certificationsList.innerHTML = '';
    certificationItems.forEach(item => certificationsList.appendChild(item));

    // Hide the form and show the resume
    formContainer.classList.add('hidden');
    resumeContainer.classList.remove('hidden');
});
