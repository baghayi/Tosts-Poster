function init()
{
    poster = document.getElementById('poster');
    defaultFont = document.getElementById('fontType').value;
    defaultFontSize = window.parseInt(document.getElementById('fontSize').value);
    canvas = poster.getContext('2d');
    canvas.clearRect(0, 0, 616, 500);
    canvas.fillStyle = '#ffffff'
    canvas.fillRect(0, 0, 616, 500);

    rectangle();
    logo();
    titleUnderLogo();
    mainTitleContent();
    contentBelowRectangle();
    saveAsImage();
}
function rectangle()
{
    canvas.save();
    //Rectangle which has to show the main Title of the Poster!
    canvas.shadowOffsetX = 4;
    canvas.shadowOffsetY = 4;
    canvas.shadowBlur = 9;
    canvas.shadowColor = 'black';
    canvas.fillStyle = '#CC99CC';
    canvas.fillRect(30, 30, 365, 155);
    canvas.restore();
}

function logo()
{
    //Image Of the logo is given right here!
    logoObject = new Image();
    logoObject.onload = function(){
        canvas.drawImage(logoObject, 410, 30);
    };
    logoObject.src = './media/image/tosts_logo.png';
}

function titleUnderLogo()
{
//    canvas.save();
    var textBelowLogo = document.getElementById('textBelowLogo').value;
    canvas.textAlign = 'center';
    canvas.fillStyle = '#330099';
    var newFontSize = parseInt(14 + defaultFontSize);
    canvas.font = 'bold ' + newFontSize +'px '+defaultFont;
    canvas.fillText(textBelowLogo, 500, 180);
//    canvas.restore();
}

function mainTitleContent()
{
    canvas.save();
    var titleText = document.getElementById('mainTitle').value;
    var titleText2 = document.getElementById('mainTitle2').value;

    canvas.shadowColor = '#ffffff';
    canvas.shadowOffsetX = 2;
    canvas.shadowOffsetY = 2;
    canvas.shadowBlur = 5;
    canvas.textAlign = 'center';
    canvas.fillStyle = '#660066';
    var newFontSize = parseInt(30 + defaultFontSize);
    canvas.font = 'bold '+ newFontSize + 'px '+defaultFont;
    canvas.fillText(titleText, 210, 100);
    canvas.fillText(titleText2, 210, 150);

    canvas.restore();
}

function contentBelowRectangle()
{
    var docu = document;
    var contentBelowRectangle = docu.getElementById('contentBelowRectangle').value,
        contentBelowRectangle2 = docu.getElementById('contentBelowRectangle2').value,
        contentBelowRectangle3 = docu.getElementById('contentBelowRectangle3').value,
        contentBelowRectangle4 = docu.getElementById('contentBelowRectangle4').value,
        contentBelowRectangle5 = docu.getElementById('contentBelowRectangle5').value,
        contentBelowRectangle6 = docu.getElementById('contentBelowRectangle6').value,
        contentBelowRectangle7 = docu.getElementById('contentBelowRectangle7').value,
        contentBelowRectangle8 = docu.getElementById('contentBelowRectangle8').value,
        contentBelowRectangle9 = docu.getElementById('contentBelowRectangle9').value,
        newFontSize = parseInt(17 + defaultFontSize);

//    canvas.save();
    canvas.textAlign = 'right';
    canvas.fillStyle = 'grey';
    canvas.font = 'bold '+newFontSize +'px '+defaultFont;
    canvas.fillText(contentBelowRectangle, 390, 213);
    canvas.fillText(contentBelowRectangle2, 390, 235);
    canvas.fillText(contentBelowRectangle3, 390, 257);

    canvas.fillStyle = 'black';
    canvas.font = 'bold '+newFontSize +'px '+defaultFont;
    canvas.fillText(contentBelowRectangle4, 390, 301);
    canvas.fillText(contentBelowRectangle5, 390, 323);

    canvas.fillStyle = 'grey';
    canvas.font = 'bold '+newFontSize +'px '+defaultFont;
    canvas.fillText(contentBelowRectangle6, 390, 367);
    canvas.fillText(contentBelowRectangle7, 390, 389);
    canvas.fillText(contentBelowRectangle8, 390, 411);
    canvas.fillText(contentBelowRectangle9, 390, 433);
//    canvas.restore();
}

function saveAsImage()
{
    document.getElementById('posterDownloadLink').href = poster.toDataURL();
}

window.addEventListener('load', init, false);