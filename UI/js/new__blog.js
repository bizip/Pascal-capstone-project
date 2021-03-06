let new_blog_form = document.getElementById("new_blog");
new_blog_form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.forms["new_blog"]["title"].value;
    let post = document.forms["new_blog"]["textarea"].value;

    if (title === "" || title === null) {
        let errorName = document.getElementById("error__message");
        errorName.innerHTML = "The title of the blog is required";
        errorName.classList.add("error__message");
        return false;
    } else if (post === "" || post === null) {
        let errorEmail = document.getElementById("error__message");
        errorEmail.innerHTML = "Ooops you didn't type the content of your article!";
        errorEmail.classList.add("error__message");
        return false;
    } else {
        let notification = document.querySelector("#error__message");
        notification.classList.add("alert__message");
        notification.textContent = "Your article has been posted thank you.";
        // //save message into fire base
        db.collection("articles").add({

            title: new_blog_form.title.value,
            post: new_blog_form.textarea.value
        }).then(() => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });


    }
});