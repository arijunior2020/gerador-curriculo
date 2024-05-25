function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.className = 'experience-entry';
    newExperienceEntry.innerHTML = `
        <label for="company"><i class="fas fa-building"></i> Empresa:</label>
        <input type="text" id="company" name="company[]" required><br>
        <label for="period"><i class="fas fa-calendar-alt"></i> Período:</label>
        <input type="text" id="period" name="period[]" required><br>
        <label for="activities"><i class="fas fa-tasks"></i> Atividades:</label>
        <textarea id="activities" name="activities[]" required></textarea><br>
    `;
    experienceSection.appendChild(newExperienceEntry);
}

function addEducation() {
    const educationSection = document.getElementById('education-section');
    const newEducationEntry = document.createElement('div');
    newEducationEntry.className = 'education-entry';
    newEducationEntry.innerHTML = `
        <label for="institution"><i class="fas fa-graduation-cap"></i> Instituição:</label>
        <input type="text" id="institution" name="institution[]" required><br>
        <label for="education-period"><i class="fas fa-calendar-alt"></i> Período:</label>
        <input type="text" id="education-period" name="educationPeriod[]" required><br>
    `;
    educationSection.appendChild(newEducationEntry);
}
