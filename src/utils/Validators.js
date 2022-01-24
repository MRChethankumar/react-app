export const validatePhone = (phone)=>{
    return /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(phone);
}

export const validateEmail = (email)=>{
    return /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(email);
}

export const onlyNumeric = (e)=>{

    let key = e.keyCode;
    let keycodes = [8, 37, 38, 39, 40, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105];
    if(keycodes.indexOf(key) === -1){
        e.preventDefault();
    }

}