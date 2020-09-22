function cargarCatalogo() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "catalogo.xml", true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarXML(this);
        }
    };

    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var tabla = "<thead class=" + "thead-dark" + "><tr><th>Artista</th><th>Titulo</th><th>País</th><th>Compañía</th><th>Precio</th><th>Año</th></tr></thead><tbody>";
    var discos = docXML.getElementsByTagName("CD");
    for (var i = 0; i < discos.length; i++) {
        tabla += "<tr><td>";
        tabla += discos[i].getElementsByTagName("ARTIST")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("TITLE")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("COUNTRY")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("COMPANY")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("PRICE")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("YEAR")[0].textContent;
        tabla += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = tabla + "</tbody>";
}