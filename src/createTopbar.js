import Profile from './profileImage.jpg';

export default function sideTopbar (){
    const userDiv = document.querySelector(".user");
    const userName = document.querySelector(".userName");
    const userNameSpan = document.createElement("span");

    userNameSpan.textContent = "User";
    userNameSpan.classList.add("user");

    const profileIcon = new Image();
    profileIcon.classList.add("profileImg");
    profileIcon.src = Profile;

    userDiv.appendChild(profileIcon);
    userName.appendChild(userNameSpan);
}