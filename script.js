function generateResume() {
    document.getElementById("previewName").innerText =
        document.getElementById("name").value;

    document.getElementById("previewRole").innerText =
        document.getElementById("role").value;

    document.getElementById("previewEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("previewPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("previewAddress").innerText =
        document.getElementById("address").value;

    document.getElementById("previewSummary").innerText =
        document.getElementById("summary").value;

    document.getElementById("previewEducation").innerText =
        document.getElementById("education").value;

    document.getElementById("previewExperience").innerText =
        document.getElementById("experience").value;

    // Skills
    let skills = document.getElementById("skills").value.split(",");
    let skillsList = document.getElementById("previewSkills");
    skillsList.innerHTML = "";

    skills.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillsList.appendChild(li);
    });

    // Photo
    let photo = document.getElementById("photo").files[0];
    if (photo) {
        let reader = new FileReader();
        reader.onload = function () {
            document.getElementById("previewPhoto").src = reader.result;
        };
        reader.readAsDataURL(photo);
    }
}

function printResume() {
    window.print();
}
