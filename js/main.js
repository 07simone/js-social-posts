const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
     {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            imag: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    } 
];


for(let i =0 ; i < posts.length; i++){
    const myImage = document.getElementById("container");
    myImage.innerHTML += `

    <div class="card post">
    <div class="post__header">
    <div class="post-meta">                    
        <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">               
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author"> ${posts[i].author.name}</div>
            <div class="post-meta__time"> ${posts[i].created}</div>
        </div>                    
    </div>
    </div>
    <div class="post__text"> ${posts[i].content} </div>
    <div class="post__image">
    <img src="${posts[i].media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div>  
    </div>
    </div>
    
    ` 
}

const like=[];                                                                           //mi creo una array vuota dove andrò ad inserire i like che riceverò una volta premuto il tasto like

const likeConteggio = document.querySelectorAll(`.js-likes-counter`);                    
const likeBottone = document.querySelectorAll(`.js-like-button`);

for (let i = 0 ; i < likeBottone.length ; i++){
    const element = likeBottone[i];                                                     //mi prendo il singolo elemento ovvero il likebottone 

    element.addEventListener('click', (event) => {
        event.preventDefault();                                                           // con questa funzione farò in modo di annulare il bottono de default e cosi facendo premendo il bottone del like non tornerà a inizio pagina

        if ( element.classList.contains('like-button--liked') ){                        // se l'elemento contiene la classe like button bene altrimenti verràa rimosso sempre dall stesso bottone ma con la funzionalità remove
            element.classList.remove('like-button--liked');

            
            likeConteggio[i].innerHTML = parseInt(likeConteggio[i].innerHTML) - 1;
            like.splice( like.indexOf(likeBottone[i].getAttribute('data-postid') ));         //splice rimuove 

        } else {
            element.classList.add('like-button--liked');

            
            likeConteggio[i].innerHTML = parseInt(likeConteggio[i].innerHTML) + 1;
            like.push(likeBottone[i].getAttribute('data-postid'));                                      //quando avrò il like da parte del bottone mi verrà pushato all'inetrno della array vuota
        }
    })
}







