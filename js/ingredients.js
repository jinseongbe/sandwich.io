function toggleTopping(name) {
    var name_ = name + '_'
    if(document.getElementById(name).style.visibility === 'hidden'){
        document.getElementById(name).style.visibility = 'visible'
        document.getElementById(name_).style.visibility = 'visible'
    } else {
        document.getElementById(name).style.visibility = 'hidden'
        document.getElementById(name_).style.visibility = 'hidden'
    }
}

