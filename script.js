// Load previous vote count
let votes = localStorage.getItem("votes") ? parseInt(localStorage.getItem("votes")) : 0;
let voteBox = document.getElementById("votesCount");
voteBox.innerText = votes;

// Images array
const images = [
    "girls/g1.jpg",
    "girls/g2.jpg",
    "girls/g3.jpg",
    "girls/g4.jpg",
    "girls/g5.jpg",
    "girls/g6.jpg",
    "girls/g7.jpg",
    "girls/g8.jpg",
    "girls/g9.jpg",
    "girls/g10.jpg",
    "girls/g11.jpg",
    "girls/g12.jpg",
    "girls/g13.jpg",
    "girls/g14.webp",
    "girls/g15.jpg",
    "girls/g16.jpg",
    "girls/g17.webp",
    "girls/g18.jpg",
    "girls/g19.jpg",
    "girls/g20.jpg",
    "girls/g21.webp",
    "girls/g22.jpg",
    "girls/g23.webp",
    "girls/g24.jpg",
    "girls/g25.jpg",
    "girls/g26.jpg",
    "girls/g27.jpg",
    "girls/g28.jpg",
    "girls/g29.jpg",
    "girls/g30.jpg",
    "girls/g31.jpg",
    "girls/g32.jpg",
    "girls/g33.jpg",
    "girls/g34.png",
    "girls/g35.jpeg",
    "girls/g36.jpg",
];

let imgLeft = document.getElementById("imgLeft");
let imgRight = document.getElementById("imgRight");
let nextBtn = document.getElementById("nextBtn");

// Get random image except the excluded one
function getRandomImage(exclude = null) {
    let filtered = images.filter(img => img !== exclude);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

// Load initial images
function loadImages() {
    let leftImg = getRandomImage();
    let rightImg = getRandomImage(leftImg);
    imgLeft.src = leftImg;
    imgRight.src = rightImg;
}

loadImages();

// Voting Logic
imgLeft.onclick = () => vote(imgLeft, imgRight);
imgRight.onclick = () => vote(imgRight, imgLeft);

function vote(selected, other) {
    // Increase vote count
    votes++;
    localStorage.setItem("votes", votes);

    // Number animation
    voteBox.innerText = votes;
    voteBox.classList.add("vote-animate");
    setTimeout(() => voteBox.classList.remove("vote-animate"), 400);

    // Blur transition for other image
    other.style.filter = "blur(6px)";
    setTimeout(() => {
        other.src = getRandomImage(selected.src);
        other.style.filter = "blur(0)";
    }, 300);
}

// Next Button changes both images
nextBtn.onclick = () => changeBothImages();

// Function to change both with blur animation
function changeBothImages() {
    imgLeft.style.filter = "blur(6px)";
    imgRight.style.filter = "blur(6px)";

    setTimeout(() => {
        let leftImg = getRandomImage();
        let rightImg = getRandomImage(leftImg);

        imgLeft.src = leftImg;
        imgRight.src = rightImg;

        imgLeft.style.filter = "blur(0)";
        imgRight.style.filter = "blur(0)";
    }, 300);
}


