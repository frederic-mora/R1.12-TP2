/*  V (la Vue) : l'interface et tout ce qui s'y rapporte */
let V = {}

V.formatOneLegoCard = function( lego ){
    let template = document.querySelector("#lego-template");
    let html = template.innerHTML;

    html = html.replace("{{lego-name}}", lego.name);
    html = html.replace("{{lego-collection}}", lego.collection);
    html = html.replace("{{lego-nbpieces}}", lego.pieces);
    html = html.replace("{{lego-price}}", lego.price);
    html = html.replace("{{lego-description}}", lego.description);
    html = html.replace("{{lego-box-url}}", lego.images.box);
    html = html.replace("{{lego-background-url}}", lego.images.bg);

    return html;
}


V.renderOneLego = function( lego ){
    document.querySelector("#content").innerHTML += V.formatOneLegoCard(lego);
}

let renderOneLego = function(lego){ V.renderOneLego(lego) };