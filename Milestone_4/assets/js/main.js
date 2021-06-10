const app = new Vue ({

el:'#app',

data: {
    urlfilms:"https://api.themoviedb.org/3/search/movie?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
    urlserie:"https://api.themoviedb.org/3/search/tv?api_key=f731de4dc238375a909e9a43cf8dd2da&query=",
    query:"",
    films:[],
    series:[],
    show_img:false,
    show_descr:true,
    cover:null
},

methods:{
    searchFilms(){
        this.films=[];
        axios.get(this.urlfilms + this.query)
            .then(resp => {
            console.log(resp.data)
            this.films=resp.data;
            }).catch(e => {
            console.error(e);
            alert("La chiamata all'API non è andata a buon fine, riprova più tardi "+ e)
        })
        this.series=[];
        axios.get(this.urlserie + this.query)
            .then(resp => {
            console.log(resp.data)
            this.series=resp.data;
            }).catch(e => {
            console.error(e);
            alert("La chiamata all'API non è andata a buon fine, riprova più tardi. "+ e)
        })
    },
    
    getFlag(code){
        if(code == "en"){code = 'gb'};
        if(code == "ja"){code = 'jp'};
        if(code == "da"){code = 'dk'};

        return `https:www.countryflags.io/${code}/flat/32.png`
    }
},
mounted(){
     this.cover = document.getElementById("copertina_over").addEventListener("mouseover",function(){
        this.show_img=false;
        this.show_descr=true;
    }
    )
}
})

