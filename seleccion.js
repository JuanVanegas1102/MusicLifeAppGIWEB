function cambiar(n) {
    if(n===1){
        document.getElementById('pop_content').style.display = "block";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "none";
    }
    if(n===2){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "block";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "none";
    }
    if(n===3){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "block";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "none";
    }
    if(n===4){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "block";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "none";
    }
    if(n===5){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "block";
        document.getElementById('hiphop_content').style.display = "none";
    }
    if(n===6){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "none";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "block";
    }
    
    if(n===7 || n===null){
        document.getElementById('pop_content').style.display = "none";
        document.getElementById('inicio_content').style.display = "block";
        document.getElementById('groove_content').style.display = "none";
        document.getElementById('dancemusic_content').style.display = "none";
        document.getElementById('electronica_content').style.display = "none";
        document.getElementById('rock_content').style.display = "none";
        document.getElementById('hiphop_content').style.display = "none";
    }
}
