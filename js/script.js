
// todo , make it a abject to help me create new cards

class Element {
    constructor(id, tittle, subTittle, text, url, gitUrl ){
        this.id = id;
        this.tittle = tittle;
        this.subTittle = subTittle;
        this.text = text;
        this.url = url;
        this.gitUrl = gitUrl;


    }

    static createCard(id, tittle, subTittle, text, url, gitUrl){

    }
    
}

let card = `

<div class="card-body d-flex justify-content-end flex-column">
<h4 class="text-center mb-2"><a class="text-dark" href="https://tavaresdev.github.io/BookList/" target="_blank" rel="noopener noreferrer"> Book List</a></h4>
<p class="text-center text-dark small">Simple Responsive page using local memory to save list of books</p>
<p class="text-center text-dark ">HTML5 | CSS3 | Bootstrap </p>
<p class="text-center text-dark mb-0"><a href="https://github.com/TavaresDev/BookList" target="_blank"
rel="noopener noreferrer" class="github-link">GitHub <i class="fa fa-github"></i></a></p>
</div>
`