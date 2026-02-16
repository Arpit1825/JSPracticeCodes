function addlanguage(langname){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild('li')
}addlanguage('JavaScript')
addlanguage('React')