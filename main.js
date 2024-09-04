// pop up search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// pop up sign up
function openForm() {
  document.getElementById("formOverlay").style.display = "block";
}

function closeForm() {
  document.getElementById("formOverlay").style.display = "none";
}

//stars
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

const stars1 = document.querySelectorAll(".stars1 i");

stars1.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars1.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

const stars2 = document.querySelectorAll(".stars2 i");

stars2.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars2.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

//load more latest recipes
var imgRecipe = document.querySelectorAll(".img-recipe");
var currentImg = 8;

function loadMore()
{
  for (var i = currentImg; i < currentImg + 4; i++) {
    if (imgRecipe[i]) {
      imgRecipe[i].style.display = "block";
    }
  }
  currentImg += 4;
  if (currentImg >= imgRecipe.length) {
    event.target.style.display = "none";
  }
}

// sent greeting message

var email = document.getElementById("email2");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
function sendGreeting()
{
  if(email.value == '')
  {
    message2.style.display = "block";
  }
  else
  {
    message.style.display = "block"
  }

  setTimeout(() => {
    message.style.display = "none";
    message2.style.display = "none";
  }, 3000);
  
}

//upload image
function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      document.getElementById("img-view").innerHTML = `
          <img src="${e.target.result}" alt="uploaded image" class="max-w-full max-h-full">
        `;
    };

    reader.readAsDataURL(input.files[0]);
  }
}