function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperienceEntry = document.createElement('div');
    newExperienceEntry.className = 'experience-entry';
    newExperienceEntry.innerHTML = `
        <label for="company"><i class="fas fa-building"></i> Empresa:</label>
        <input type="text" id="company" name="company[]" required><br>
        <label for="startPeriod"><i class="fas fa-calendar-alt"></i> Período Inicial:</label>
        <input type="date" id="startPeriod" name="startPeriod[]" required><br>
        <label for="endPeriod"><i class="fas fa-calendar-alt"></i> Período Final:</label>
        <input type="date" id="endPeriod" name="endPeriod[]" required><br>
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
        <label for="educationStartPeriod"><i class="fas fa-calendar-alt"></i> Período Inicial:</label>
        <input type="date" id="educationStartPeriod" name="educationStartPeriod[]" required><br>
        <label for="educationEndPeriod"><i class="fas fa-calendar-alt"></i> Período Final:</label>
        <input type="date" id="educationEndPeriod" name="educationEndPeriod[]" required><br>
    `;
    educationSection.appendChild(newEducationEntry);
}
