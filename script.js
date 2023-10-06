
// for handling the add prescription form 
  const prescriptionForm = document.getElementById("prescriptionForm");
  const prescriptionsContainer = document.getElementById("prescriptions");

  prescriptionForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const disease = document.getElementById("disease-name").value;
    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;

    prescriptionsContainer.innerHTML += `
      <div class="container text-center p-1 ps-5 pe-5 d-flex justify-content-between align-items-center" style="font-size:14px;">
        <div class="d-flex justify-content-center align-items-center">
        <p class="svg rounded d-flex justify-content-center align-items-center  me-3  " style=" background-color: rgb(255, 243, 194);
        color: #9b5f04;
        width: 25px;
        height: 25px; ">
       <svg id="svg-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </p>
        <p > ${disease}</p>
        </div>
        <div>
          ${date}
          </div>
       <div>
       ${duration}
       </div>
    </div>
      `;

    document.getElementById("disease-name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("duration").value = "";

    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.hide();
  });
  


  // for svg icons in menu
  const svgIcons = document.querySelectorAll('.nav-item svg');
  svgIcons.forEach((svgIcon) => {
      svgIcon.addEventListener('click', function () {
          svgIcons.forEach((icon) => {
              icon.parentElement.classList.remove('selected');
          });
          this.parentElement.classList.add('selected');
      });
  });


  //for updating profile image
  const profileImage = document.getElementById('profile-image');
  const imageButton = document.getElementById('image-button');
  
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  
  function handleImageUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
          const reader = new FileReader();
          reader.onload = function (e) {
              profileImage.src = e.target.result;
          };
          reader.readAsDataURL(selectedFile);
      }
      fileInput.value = '';
  }
  
  fileInput.addEventListener('change', handleImageUpload);
  imageButton.addEventListener('click', function () {
      fileInput.click();
  });
  
