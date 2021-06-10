const app = new Vue({

    el: '#app',

    data: {
        urlfilms: "https://api.themoviedb.org/3/search/movie?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
        urlserie: "https://api.themoviedb.org/3/search/tv?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
        query: "",
        films: [],
        series: [],
        errore: false,
        errore_testo:""
    },

    methods: {

        //ripetitivo e brutto da vedere 🤢🤢🤢
        /* searchFilms(){
            this.films=[];
            axios.get(this.urlfilms + this.query)
                .then(resp => {
                console.log(resp.data)
                this.films=resp.data;
                }).catch(e => {
                console.error(e);
                alert("La chiamata all'API non è andata a buon fine, riprova più tardi "+ e)
            })
            
            axios.get(this.urlserie + this.query)
                .then(resp => {
                console.log(resp.data)
                this.series=resp.data;
                }).catch(e => {
                console.error(e);
                alert("La chiamata all'API non è andata a buon fine, riprova più tardi. "+ e)
            })
        },
         */

        /* API CALLS ==> Con documentazione axios: Performing multiple concurrent requests 😎😎 */
        getFilms() {
            this.films = [];
            return axios.get(this.urlfilms + this.query);
        },
        getSerie() {
            this.series = [];
            return axios.get(this.urlserie + this.query);
        },
        searchAll() {
            Promise.all([this.getFilms(), this.getSerie()])
                .then(resp => {
                    this.errore = false;
                    console.log(resp[0].data);
                    console.log(resp[1].data);
                    this.films = resp[0].data;
                    this.series = resp[1].data;
                }).catch(e => {
                    console.error(e);
                    this.errore_testo=`${error(e)}`
                    return this.errore = true;
                })
            
            },
        /* /API CALLS ==> Con documentazione axios: Performing multiple concurrent requests 😎😎 */

        /* Funzione per prendere le bandiere */

        getFlag(code) {
            if (code == "en") code = 'gb';
            if (code == "ja") code = 'jp';
            if (code == "da") code = 'dk';

            return `https:www.countryflags.io/${code}/flat/32.png`
        }
        /* Funzione per prendere le bandiere */
    
}
})

