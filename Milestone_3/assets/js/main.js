const app = new Vue ({

el:'#app',

data: {
    urlfilms:"https://api.themoviedb.org/3/search/movie?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
    urlserie:"https://api.themoviedb.org/3/search/tv?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
    query:"",
    films:[],
    series:[],
},

methods:{
    searchFilms(){
        this.films=[];
        axios
            .get(this.urlfilms + this.query)
            .then(resp => {
            console.log(resp.data)
            this.films=resp.data;
        }).catch(e => {
            console.error(e);
            alert("La chiamata all'API non è andata a buon fine, riprova più tardi "+ e)
        })
        this.series=[];
        axios
            .get(this.urlserie + this.query)
            .then(resp => {
            console.log(resp.data)
            this.series=resp.data;
        }).catch(e => {
            console.error(e);
            alert("La chiamata all'API non è andata a buon fine, riprova più tardi. "+ e)
        })
    }
}
})