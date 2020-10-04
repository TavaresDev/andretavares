const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = ''
    this.wordIndex = 0;
    this.wait = parseInt(wait,10);
    this.type();
    this.isDeleting = false;
}

//type Method
TypeWriter.prototype.type = function() {
    //curent index of word
    const current = this.wordIndex % this.words.length;
    //get full text of current word
    const fulltxt = this.words[current];

    //check if deleting 
    if(this.isDeleting) {
        //remove
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }
    //insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span> `

    //initial type speed
    let typeSpeed = 300;
    if(this.isDeleting) {
        typeSpeed /= 2;
    }
// same?
    // if (this.isDeleting ? typeSpeed : typeSpeed/2)

    //if word is complete
    if(!this.isDeleting && this.txt === fulltxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt ==='') {
        this.isDeleting = false;
        //move next word
        this.wordIndex++;
        typeSpeed = 500;
    }
    setTimeout(() => this.type(),typeSpeed)
}

//init on DOM Load

document.addEventListener('DOMContentLoaded', init);

//init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    //init TypeWriter
    new TypeWriter( txtElement, words, wait)
}


// something else

// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     call2()

// });

function call() {

    fetch("../pepper.html")
    .then(response => {
        console.log(response)
        return response.text()
    })
    .then(data => {
        document.querySelector(".pepperSection").innerHTML = data;
    });
}
function call2() {

    fetch("../NavBar.html")
    .then(response => {
        console.log(response)
        return response.text()
    })
    .then(data => {
        document.querySelector(".nav").insertAdjacentHTML('afterend', data);
    });
}