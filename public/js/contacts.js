var contactsModal = document.querySelector(".modal");
var followerEl = document.querySelector(".followers-btn");
var followingEl = document.querySelector(".following-btn");
var friendListEl = document.getElementById("friendList");
var modalTitleEl = document.getElementById("modal-title")
var closeEl = document.querySelector(".close");

followingEl.addEventListener("click", () => {
    console.log("entered following")
    contactsModal.style.display = "block";
    modalTitleEl.innerText = "Following"

})

followerEl.addEventListener("click", () => {
    console.log("entered follower")
    contactsModal.style.display = "block";
    modalTitleEl.innerText = "Followers"
})

// window.onclick = function(event) {
//     if (event.target == modal) {
//       contactsModal.style.display = "none";
//     }
//   }

  closeEl.addEventListener("click", () => {
    contactsModal.style.display = "none";
  })

  window.onclick = function(event) {
    if (event.target == contactsModal) {
      contactsModal.style.display = "none";
    }
  }

    // const response = await fetch(`api/member`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         userID: req.session.userID,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // })

    // if (response.ok) {
    //     modal.style.display = "block";

    //     for (let i = 0; i < response.length; i++) {

    //         var newLi = document.createElement("li");
    //         var friendData = friendListEl.append(response[i])
    //         newLi.append(friendData)
    //         if (i % 2 == 0) {
    //             newLi.style.background = 'white';
    //         }
    //     }
    // }



//})
