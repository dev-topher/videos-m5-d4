const VideoPlayerModule = (function() {
    // Función privada
    function setVideoUrl(url, id) {
        document.getElementById(id).setAttribute('src', url);
    }

    // Función pública
    return {
        play: function(url, id) {
            setVideoUrl(url, id);
        }
    };
})();

class Multimedia {
    constructor(url) {
        let _url = url;

        this.getUrl = function() {
            return _url;
        };
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    playMultimedia() {
        VideoPlayerModule.play(this.getUrl(), this.id);
    }

    setInicio(tiempo) {
        let urlConTiempo = `${this.getUrl()}?start=${tiempo}`;
        document.getElementById(this.id).setAttribute('src', urlConTiempo);
    }
}

// URLs de los videos
const urlMusica = "https://www.youtube.com/embed/v4xZUr0BEfE";
const urlPelicula = "https://www.youtube.com/embed/UzFZR2dRsSY";
const urlSerie = "https://www.youtube.com/embed/aZenmeRytEM";

// Instancias de Reproductor
const musica = new Reproductor(urlMusica, 'musica');
const pelicula = new Reproductor(urlPelicula, 'peliculas');
const serie = new Reproductor(urlSerie, 'series');

// Llamada al método playMultimedia
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Modificar el tiempo de inicio de la música a los 30 segundos
musica.setInicio(30);
