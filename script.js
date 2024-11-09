// Get references to form and resume display elements
var form = document.getElementById('resume-form');
var personalName = document.getElementById('personal-name');
var personalPhone = document.getElementById('personal-phone');
var personalEmail = document.getElementById('personal-email');
var personalLinkedin = document.getElementById('personal-linkedin');
var personalYoutube = document.getElementById('personal-youtube');
var objectiveText = document.getElementById('objective-text');
var educationText = document.getElementById('education-text');
var skillsText = document.getElementById('skills-text');
var workExpText = document.getElementById('work-exp-text');
var certificationsList = document.getElementById('certifications-list');
var profileImg = document.getElementById('profile-img');
var resumeContainer = document.querySelector('.resume-container');
var formContainer = document.querySelector('.form-container');
// Handle form submission
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Collect form data
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var linkedin = document.getElementById('linkedin').value;
    var youtube = document.getElementById('youtube').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var workExp = document.getElementById('work-exp').value;
    var skills = document.getElementById('skills').value;
    var certifications = document.getElementById('certifications').value;
    // Get the profile picture and set it to the resume
    var profilePicInput = document.getElementById('profile-picture');
    var file = (_a = profilePicInput.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            profileImg.src = reader_1.result;
        };
        reader_1.readAsDataURL(file);
    }
    // Split certifications by commas and create list items
    var certificationItems = certifications.split(',').map(function (cert) {
        var li = document.createElement('li');
        li.textContent = cert.trim();
        return li;
    });
    // Update resume sections with collected data
    personalName.textContent = name;
    personalPhone.textContent = phone;
    personalEmail.setAttribute('href', "mailto:".concat(email));
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
    certificationItems.forEach(function (item) { return certificationsList.appendChild(item); });
    // Hide the form and show the resume
    formContainer.classList.add('hidden');
    resumeContainer.classList.remove('hidden');
});
