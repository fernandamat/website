// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function changeLan(lan) {
  switch (lan) {
    case 'en':
      $('#spButton').css('display', 'initial');
      $('#enButton').css('display', 'none');
      break;
    case 'sp':
      $('#spButton').css('display', 'none');
      $('#enButton').css('display', 'initial');
      break;
  }

  $('.lanBlock').css('display', 'none');
  $('.' + lan).css('display', 'initial');

  //Modificamos los links para que incluyan la query string del idioma.
  //Sólo los modificamos si no llevan a una sección de la misma página (href="#oils" se queda igual, por ejemplo).
  //Hacemos lo del split para que no se apilen si cambias de idioma varias veces.
  var links = $('a');
  for (var i = 0; i < links.length; i++) {
    if (!(links[i].href.indexOf('#') > -1)) {
      console.log('Link: ' + links[i].href);
      links[i].href = links[i].href.split('?')[0] + '?lan=' + lan;
    }
  }
}

if (getUrlVars().lan) {
  changeLan(getUrlVars().lan);
} else {
  $('#spButton').css('display', 'none');
  $('.lanBlock').css('display', 'none');
  $('.sp').css('display', 'initial');
}
