function checkAchievements(user){

    if(!user.achievements){
        user.achievements = [];
    }

    if(
        user.xp >= 10 &&
        !user.achievements.includes("Primeiros Passos")
    ){

        user.achievements.push(
            "Primeiros Passos"
        );
    }

    return user;
}
