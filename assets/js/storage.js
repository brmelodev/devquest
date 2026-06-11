const STORAGE_KEY = "devquest_user";

function getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveUser(user) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(user)
    );
}
