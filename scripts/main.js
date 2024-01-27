function anchorShow(linksList)
{
    let linksContainer = document.getElementById("linksContainer")
    for(let i = 0; i < linksList.length; i++)
    {
        let aElement = document.createElement("a");
        aElement.href = "#";
        aElement.classList.add("navLinks");
        aElement.textContent = linksList[i];
        linksContainer.appendChild(aElement);
    }
}

document.addEventListener("DOMContentLoaded", function() {
let linksList = ["Home","Jewellery","Guests","Plans","License","Gifts Registery","Decoration","Food","Invitations","Photoshoot","Venue","Playlist","Wedding Album"];

anchorShow(linksList);
});