const create_cookie = (name, val, time) => {
    let expire = "";

    if (time) {
        let date = new Date();
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
        expire = "; expire=" + date.toUTCString();
    }

    document.cookie = name + "=" + (val || "") + expire + "; path=/";

    if (name == "popup") {
        document.getElementById("cookie_popup").style.display = "none";
    }
}

const read_cookie = (name) => {
    let name_eq = name + "=";
    let char = document.cookie.split(';');

    for (let i = 0; i < char.length; i++) {
        var char_ = char[i];

        while (char_.charAt(0) == ' ') {
            char_ = char_.substring(1, char_.length); 
        }

        if (char_.indexOf(name_eq) == 0) {
            return char_.substring(name_eq.length, char_.length);
        }
    }

    return null;
}

const delete_cookie = (name) => { 
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (read_cookie("popup") == 1) {
    document.getElementById("cookie_popup").style.display = "none";
}