var post_on_facebook = document.getElementById('post_on_facebook');
post_on_facebook.onclick = function() {
    var url = 'https://www.facebook.com/dialog/feed?';
    var score = document.getElementById('current_results').value
    language = capitalizeFirstLetter(language)
    var params = {
      app_id: 357365877681280,
      link: location.toString(),
      picture: 'http://mascot.crystalxp.net/png/th_2899-froggy-the-frog.jpg',
      name: ' Conjugator score: ' + score + ' in ' + language,
      caption: document.getElementById('current_results').value,
      description: 'Come conjugate ' + language + ' verbs with me!!!',
      redirect_uri: location.toString()
    };
    this.href = url + paramsToString(params);
};

function paramsToString(param) {
    var result = '';
    for (var key in param) {
        result += key + '=' + param[key] + '&';
    }
    return result.slice(0, -1);
}

function capitalizeFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}