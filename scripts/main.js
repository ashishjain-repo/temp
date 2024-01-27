function anchorShow(linksList)
{
    let linksContainer = document.getElementById("linksContainer")
    for(let i = 0; i < linksList.length; i++)
    {
        let aElement = document.createElement("a");
        aElement.classList.add("navLinks");
        aElement.value = linksList[i];
        linksContainer.appendChild(aElement);
    }
}

let linksList = ["Home","Jewellery","Guests","Plans","License","Gifts Registery","Decoration","Food","Invitations","Photoshoot","Venue","Playlist","Wedding Album"];

anchorShow(linksList);