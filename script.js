// Get the form and inputs
var form = document.getElementById('resume-form');
// Input fields for form
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var degreeInput = document.getElementById('degree');
var schoolInput = document.getElementById('school');
var gradYearInput = document.getElementById('grad-year');
var workExperienceInput = document.getElementById('work-experience');
var skillsInput = document.getElementById('skills');
// Resume display fields
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeDegree = document.getElementById('resume-degree');
var resumeSchool = document.getElementById('resume-school');
var resumeGradYear = document.getElementById('resume-grad-year');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
// Generate resume button
var generateResumeButton = document.getElementById('generate-resume');
// Event listener for the "Generate Resume" button
generateResumeButton.addEventListener('click', function () {
    // Update resume fields with user input
    resumeName.textContent = nameInput.value || 'Not provided';
    resumeEmail.textContent = emailInput.value || 'Not provided';
    resumeDegree.textContent = degreeInput.value || 'Not provided';
    resumeSchool.textContent = schoolInput.value || 'Not provided';
    resumeGradYear.textContent = gradYearInput.value || 'Not provided';
    resumeWorkExperience.textContent = workExperienceInput.value || 'Not provided';
    resumeSkills.textContent = skillsInput.value || 'Not provided';
    // Show the resume section after the button click
    document.getElementById('resume').style.display = 'block';
});
// Optional: Add input event listeners for real-time updating
form.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
        generateResumeButton.click();
    });
});
