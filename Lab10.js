var xhr = new XMLHttpRequest();
var ob = [];
$('#img11').css('width', '100px')
$('#img11').css('height', '100px')
$('#img22').css('width', '100px')
$('#img22').css('height', '100px')
$('#img33').css('width', '100px')
$('#img33').css('height', '100px')
$('#img44').css('width', '100px')
$('#img44').css('height', '100px')
$('#img55').css('width', '100px')
$('#img55').css('height', '100px')
$('#img66').css('width', '100px')
$('#img66').css('height', '100px')
$('#img77').css('width', '100px')
$('#img77').css('height', '100px')
$('#img88').css('width', '100px')
$('#img88').css('height', '100px')
$('#img99').css('width', '100px')
$('#img99').css('height', '100px')
$('#img1010').css('width', '100px')
$('#img1010').css('height', '100px')
$('#img1111').css('width', '100px')
$('#img1111').css('height', '100px')
$('#img1212').css('width', '100px')
$('#img1212').css('height', '100px')
$('#imgg').css('width', '410px')
$('#imgg').css('height', '410px')
let a = "https://usersdogs.dmytrominochkin.cloud";
let b = "";


xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        ob = JSON.parse(xhr.responseText);
        a = a + ob[0].dogImage;
        $("#img11").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[1].dogImage;
        $("#img22").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[2].dogImage;
        $("#img33").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[3].dogImage;
        $("#img44").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[4].dogImage;
        $("#img55").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[5].dogImage;
        $("#img66").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[6].dogImage;
        $("#img77").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[7].dogImage;
        $("#img88").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[8].dogImage;
        $("#img99").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[9].dogImage;
        $("#img1010").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[10].dogImage;
        $("#img1111").attr("src", a)
        a = "https://usersdogs.dmytrominochkin.cloud";
        a = a + ob[11].dogImage;
        $("#img1212").attr("src", a)
        b = ob[0].title;
        $("#box1").html(b);
        b = ob[0].sex;
        $("#box2").html(b);
        b = ob[1].title;
        $("#box3").html(b);
        b = ob[1].sex;
        $("#box4").html(b);
        b = ob[2].title;
        $("#box5").html(b);
        b = ob[2].sex;
        $("#box6").html(b);
        b = ob[3].title;
        $("#box7").html(b);
        b = ob[3].sex;
        $("#box8").html(b);
        b = ob[4].title;
        $("#box9").html(b);
        b = ob[4].sex;
        $("#box10").html(b);
        b = ob[5].title;
        $("#box11").html(b);
        b = ob[5].sex;
        $("#box12").html(b);
        b = ob[6].title;
        $("#box13").html(b);
        b = ob[6].sex;
        $("#box14").html(b);
        b = ob[7].title;
        $("#box15").html(b);
        b = ob[7].sex;
        $("#box16").html(b);
        b = ob[8].title;
        $("#box17").html(b);;
        b = ob[8].sex;
        $("#box18").html(b);
        b = ob[9].title;
        $("#box19").html(b);
        b = ob[9].sex;
        $("#box20").html(b);
        b = ob[10].title;
        $("#box21").html(b);
        b = ob[10].sex;
        $("#box22").html(b);
        b = ob[11].title;
        $("#box23").html(b);
        b = ob[11].sex;
        $("#box24").html(b);
    }
}
xhr.open('GET', ' https://usersdogs.dmytrominochkin.cloud/dogs');
xhr.send();

$('.modal').click(function() {
    $('.modal').hide();
});
$('.col-1').click(function() {
    var a = $(this).prop('id');
    if (a == "box cont img1") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[0].dogImage;
        //document.img13.src = a;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[0].title);
        $('#text14').html(ob[0].sex);
        $('#text15').html(ob[0].age);
        $('#text16').html(ob[0].description);
        $('.modal').show();
    } else if (a == "box cont img2") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[1].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[1].title);
        $('#text14').html(ob[1].sex);
        $('#text15').html(ob[1].age);
        $('#text16').html(ob[1].description);
        $('.modal').show();
    } else if (a == "box cont img3") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[2].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[2].title);
        $('#text14').html(ob[2].sex);
        $('#text15').html(ob[2].age);
        $('#text16').html(ob[2].description);
        $('.modal').show();
    } else if (a == "box cont img4") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[3].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[3].title);
        $('#text14').html(ob[3].sex);
        $('#text15').html(ob[3].age);
        $('#text16').html(ob[3].description);
        $('.modal').show();
    } else if (a == "box cont img5") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[4].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[4].title);
        $('#text14').html(ob[4].sex);
        $('#text15').html(ob[4].age);
        $('#text16').html(ob[4].description);
        $('.modal').show();
    } else if (a == "box cont img6") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[5].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[5].title);
        $('#text14').html(ob[5].sex);
        $('#text15').html(ob[5].age);
        $('#text16').html(ob[5].description);
        $('.modal').show();
    } else if (a == "box cont img7") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[6].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[6].title);
        $('#text14').html(ob[6].sex);
        $('#text15').html(ob[6].age);
        $('#text16').html(ob[6].description);
        $('.modal').show();
    } else if (a == "box cont img8") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[7].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[7].title);
        $('#text14').html(ob[7].sex);
        $('#text15').html(ob[7].age);
        $('#text16').html(ob[7].description);
        $('.modal').show();
    } else if (a == "box cont img9") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[8].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[8].title);
        $('#text14').html(ob[8].sex);
        $('#text15').html(ob[8].age);
        $('#text16').html(ob[8].description);
        $('.modal').show();
    } else if (a == "box cont img10") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[9].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[9].title);
        $('#text14').html(ob[9].sex);
        $('#text15').html(ob[9].age);
        $('#text16').html(ob[9].description);
        $('.modal').show();
    } else if (a == "box cont img11") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[10].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[10].title);
        $('#text14').html(ob[10].sex);
        $('#text15').html(ob[10].age);
        $('#text16').html(ob[10].description);
        $('.modal').show();
    } else if (a == "box cont img12") {
        a = "https://usersdogs.dmytrominochkin.cloud"
        a = a + ob[11].dogImage;
        $("#imgg").attr("src", a)
        $('#text13').html(ob[11].title);
        $('#text14').html(ob[11].sex);
        $('#text15').html(ob[11].age);
        $('#text16').html(ob[11].description);
        $('.modal').show();
    }

});