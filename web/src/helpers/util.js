const getCookie = (cname) => {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const clearCookies = () => {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "user-avatar=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "token-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const getElmById = id => {
    return document.getElementById(id);
}

const getElmByName = name => {
    return document.getElementsByName(name)[0];
}

const elmToOrg = () => {
    dropdown.style.position = dropdownOrgStyle.position;
    dropdown.style.display = dropdownOrgStyle.display;
    dropdown.style.opacity = dropdownOrgStyle.opacity;
    dropdown.style.left = dropdownOrgStyle.left;
    dropdown.style.top = dropdownOrgStyle.top;

    document.removeEventListener("click", elmToOrg);
}

var dropdown, dropdownOrgStyle;

const showDropDownOnElm = (dropdownName, target) => {
    var targetRec = target.getBoundingClientRect();
    dropdown = getElmByName(dropdownName);
    dropdownOrgStyle = {
        position: dropdown.style.position,
        display: dropdown.style.display,
        opacity: dropdown.style.opacity,
        left: dropdown.style.left,
        top: dropdown.style.top
    }
    dropdown.style.position = "absolute";
    dropdown.style.display = "block";
    dropdown.style.opacity = 1;
    var dropdownRec = dropdown.getBoundingClientRect();
    dropdown.style.left = (targetRec.x - (dropdownRec.width - targetRec.width)) + 'px';
    dropdown.style.top = '0px';

    document.addEventListener("click", elmToOrg);
}

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [item] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, item);
    return result;
};

const insertInArray = (list, index, item) => {
    const result = Array.from(list);
    result.splice(index, 0, item);
    return result;
}

const removeFromArray = (list, index) => {
    const result = Array.from(list);
    result.splice(index, 1);
    return result;
}

var loading = 0;

const showLoading = () => {
    loading++;
    var element = document.getElementById("global-progress");
    element.classList.remove("hide");
}

const hideLoading = () => {
    loading--;

    if (loading > 0) return;

    var element = document.getElementById("global-progress");
    element.classList.add("hide");
}

const inArray = (property, value, array) => {
    var found = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i][property] === value) {
            found = true;
            break;
        }
    }
    return found;
}

export default {
    getCookie,
    clearCookies,
    getElmById,
    getElmByName,
    showDropDownOnElm,
    reorder,
    removeFromArray,
    insertInArray,
    showLoading,
    hideLoading,
    inArray
};