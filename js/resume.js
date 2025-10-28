document.getElementById("resume-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  let name = document.getElementById("name").value;
  let location = document.getElementById("location").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let linkedin = document.getElementById("linkedin").value;

  let objective = document.getElementById("objective").value;
  let education = document.getElementById("education").value;
  let skills = document.getElementById("skills").value;
  let experience = document.getElementById("experience").value;
  let projects = document.getElementById("projects").value;
  let certifications = document.getElementById("certifications").value;
  let declaration = document.getElementById("declaration").value || 
    "I solemnly declare that all the above information is correct to the best of my knowledge.";

  // Build Resume Template
  let output = `
    <h2>${name}</h2>
    <div class="contact">
      ${location} | ${phone} | ${email} ${linkedin ? '| <a href="'+linkedin+'" target="_blank">LinkedIn</a>' : ''}
    </div>

    <h3>Objective</h3>
    <p>${objective}</p>

    <h3>Education</h3>
    <p>${education.replace(/\n/g, "<br>")}</p>

    <h3>Technical Skills</h3>
    <ul>${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>

    ${experience ? `<h3>Experience</h3><p>${experience.replace(/\n/g, "<br>")}</p>` : ''}
    ${projects ? `<h3>Projects</h3><p>${projects.replace(/\n/g, "<br>")}</p>` : ''}
    ${certifications ? `<h3>Certifications</h3><p>${certifications.replace(/\n/g, "<br>")}</p>` : ''}

    <h3>Declaration</h3>
    <p>${declaration}</p>
  `;

  document.getElementById("resume-preview").innerHTML = output;
  document.getElementById("resume-output").style.display = "block";
});

// Download PDF
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  let doc = new jsPDF("p", "pt", "a4");

  doc.html(document.getElementById("resume-preview"), {
    callback: function (doc) {
      doc.save("resume.pdf");
    },
    x: 40,
    y: 40,
    width: 500,
    windowWidth: 800
  });
});
