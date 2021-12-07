export let getCurrentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    return yyyy + mm + dd;
}

export let getCurrentDay = () => {
    let today = new Date();
    return String(today.getDate()).padStart(2, '0');
}

export let getCurrentMonth = () => {
    let today = new Date();
    return String(today.getMonth() + 1).padStart(2, '0');
}

export let getCurrentYear = () => {
    let today = new Date();
    return today.getFullYear();
}
