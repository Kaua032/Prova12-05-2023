const usuarios = [
    {
        usuario: 'carlos@carlos.com',
        senha:'carlos123456'
    },
    {
        usuario: 'leticia@leticia.com',
        senha:'leticia654321'
    },
    {
        usuario: 'bruno@bruno.com',
        senha:'bruno987654'
    },
]

const fotografia = [
    {
        id: 'foto1',
        nome: 'Foto 1',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto2',
        nome: 'Foto 2',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto3',
        nome: 'Foto 3',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto4',
        nome: 'Foto 4',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto5',
        nome: 'Foto 5',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto6',
        nome: 'Foto 6',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto7',
        nome: 'Foto 7',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto8',
        nome: 'Foto 8',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    {
        id: 'foto9',
        nome: 'Foto 9',
        like: 0,
        deslike: 0,
        likeClicked: false,
        deslikeClicked: false,
        favoriteClicked: false,
        likeFill: "#fff",
        deslikeFill: "#fff",
        favoriteFill: "#fff"
    },
    
]

let fotografias = document.getElementById('fotografias')
let fotografias2 = document.getElementById('fotografias-2')

let loginBtn = document.getElementById("logar")
let nameUser = document.getElementById("user")
let emailInput = document.getElementById("email")
let senhaInput = document.getElementById("senha")

let loginHeader = document.getElementById("login")
let existe = false

function loading(){
    for(let i = 0; i < 6; i++){
        let fotografiaPresent = fotografia[i]
        fotografias.innerHTML +=`
        <div id="${fotografiaPresent.id}">
            <div class="painel">
                <p class="title">${fotografiaPresent.nome}</p>
                <div class="active">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="like(this.id)" id="${fotografiaPresent.id}" class="like-${fotografiaPresent.id}"  d="M12.4242 2.79709C12.5806 1.01282 14.7147 -0.366885 17.0148 0.0872924L17.6428 0.213241C18.7568 0.434604 19.7457 1.08343 20.0777 2.05476C20.607 3.61193 21.3601 6.84652 20.2269 10.6612C20.5812 10.6224 20.9366 10.5899 21.2927 10.5639C23.0082 10.4399 25.3084 10.4265 27.3462 10.9646C28.5926 11.2948 29.7378 12.2642 30.2335 13.3939C30.6762 14.4091 30.6184 15.6114 29.6704 16.701C29.81 16.9281 29.9183 17.1628 30.0025 17.3937C30.1877 17.909 30.2744 18.4757 30.2744 19.0272C30.2744 19.5787 30.1877 20.1455 30.0025 20.6607C29.9086 20.9184 29.7859 21.1817 29.6175 21.4317C30.0241 22.1702 29.875 22.9946 29.6103 23.6224C29.3393 24.2424 28.9428 24.8231 28.4362 25.3418C28.5661 25.6319 28.619 25.9372 28.619 26.2292C28.619 26.8112 28.4049 27.4219 28.0103 27.9696C27.2067 29.0878 25.6115 30 23.3571 30H14.9361C13.4804 30 12.3616 29.8454 11.4088 29.584C10.5896 29.3467 9.80669 29.0369 9.07502 28.6604L8.95953 28.6031C7.7469 28.0173 6.55592 27.441 3.9839 27.2253C2.1409 27.0688 0.5 25.8895 0.5 24.2751V16.6419C0.5 15.0198 2.14812 13.9092 3.76495 13.5599C5.80766 13.1172 7.55201 12.0581 8.89456 10.8692C10.2419 9.67272 11.0937 8.42659 11.3944 7.74151C11.8732 6.64423 12.2509 4.80463 12.4242 2.799V2.79709Z" fill="${fotografiaPresent.likeFill}"/>
                    </svg>
                    <p id="like-${fotografiaPresent.id}">${fotografiaPresent.like}</p>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="deslike(this.id)" id="${fotografiaPresent.id}" class="deslike-${fotografiaPresent.id}"  d="M12.423 27.2021C12.5794 28.9884 14.7133 30.3682 17.0132 29.9121L17.6411 29.788C18.2171 29.6813 18.7467 29.4542 19.1748 29.1304C19.6029 28.8066 19.914 28.3978 20.0758 27.9464C20.605 26.3892 21.358 23.1525 20.2249 19.3396C20.5521 19.3778 20.9106 19.4102 21.2907 19.4369C23.006 19.561 25.3059 19.5724 27.3436 19.0342C28.5898 18.7041 29.7349 17.7365 30.2305 16.6068C30.4786 16.0599 30.557 15.4736 30.459 14.8976C30.361 14.3216 30.0896 13.7728 29.6676 13.2976C29.8071 13.0724 29.9154 12.8358 29.9996 12.6068C30.1848 12.0915 30.2714 11.5228 30.2714 10.9732C30.2714 10.4198 30.1848 9.85491 29.9996 9.33773C29.9051 9.0715 29.7761 8.81376 29.6146 8.56866C30.0212 7.83011 29.8721 7.00378 29.6074 6.37592C29.3363 5.75662 28.9398 5.1765 28.4334 4.65837C28.5633 4.36639 28.6162 4.06105 28.6162 3.77097C28.6059 3.1589 28.3963 2.55934 28.0076 2.03052C27.2041 0.9103 25.609 0 23.3548 0H14.9346C13.4791 0 12.3604 0.152671 11.4078 0.41412C10.5885 0.652067 9.80569 0.962552 9.07417 1.33969L8.95869 1.39503C7.74618 1.98281 6.55532 2.55915 3.98356 2.77479C2.14074 2.92937 0.5 4.11066 0.5 5.72325V13.3568C0.5 14.9808 2.14795 16.0915 3.76463 16.4408C5.80713 16.8835 7.55131 17.9427 8.89373 19.1316C10.241 20.3262 11.0926 21.5743 11.3933 22.2575C11.8721 23.3548 12.2498 25.1964 12.423 27.2021Z" fill="${fotografiaPresent.deslikeFill}"/>
                    </svg>
                    <p id="${fotografiaPresent.id}-deslikes">${fotografiaPresent.deslike}</p>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="favorite(this.id)" id="${fotografiaPresent.id}" id fill-rule="evenodd" clip-rule="evenodd" d="M15.5 2.62809C23.8215 -6.49587 44.627 9.47007 15.5 30C-13.627 9.47207 7.17852 -6.49587 15.5 2.62809Z" fill="${fotografiaPresent.favoriteFill}"/>
                    </svg>

                </div>  
            </div>
        </div>
        `
    }
}
function loading2(){
    for(let i = 6; i < fotografia.length; i++){
        let fotografiaPresent = fotografia[i]
        fotografias2.innerHTML +=`
        <div id="${fotografiaPresent.id}">
            <div class="painel">
                <p class="title">${fotografiaPresent.nome}</p>
                <div class="active">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="like(this.id)" id="${fotografiaPresent.id}" class="like-${fotografiaPresent.id}"  d="M12.4242 2.79709C12.5806 1.01282 14.7147 -0.366885 17.0148 0.0872924L17.6428 0.213241C18.7568 0.434604 19.7457 1.08343 20.0777 2.05476C20.607 3.61193 21.3601 6.84652 20.2269 10.6612C20.5812 10.6224 20.9366 10.5899 21.2927 10.5639C23.0082 10.4399 25.3084 10.4265 27.3462 10.9646C28.5926 11.2948 29.7378 12.2642 30.2335 13.3939C30.6762 14.4091 30.6184 15.6114 29.6704 16.701C29.81 16.9281 29.9183 17.1628 30.0025 17.3937C30.1877 17.909 30.2744 18.4757 30.2744 19.0272C30.2744 19.5787 30.1877 20.1455 30.0025 20.6607C29.9086 20.9184 29.7859 21.1817 29.6175 21.4317C30.0241 22.1702 29.875 22.9946 29.6103 23.6224C29.3393 24.2424 28.9428 24.8231 28.4362 25.3418C28.5661 25.6319 28.619 25.9372 28.619 26.2292C28.619 26.8112 28.4049 27.4219 28.0103 27.9696C27.2067 29.0878 25.6115 30 23.3571 30H14.9361C13.4804 30 12.3616 29.8454 11.4088 29.584C10.5896 29.3467 9.80669 29.0369 9.07502 28.6604L8.95953 28.6031C7.7469 28.0173 6.55592 27.441 3.9839 27.2253C2.1409 27.0688 0.5 25.8895 0.5 24.2751V16.6419C0.5 15.0198 2.14812 13.9092 3.76495 13.5599C5.80766 13.1172 7.55201 12.0581 8.89456 10.8692C10.2419 9.67272 11.0937 8.42659 11.3944 7.74151C11.8732 6.64423 12.2509 4.80463 12.4242 2.799V2.79709Z" fill="${fotografiaPresent.likeFill}"/>
                    </svg>
                    <p id="like-${fotografiaPresent.id}">${fotografiaPresent.like}</p>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="deslike(this.id)" id="${fotografiaPresent.id}" class="deslike-${fotografiaPresent.id}"  d="M12.423 27.2021C12.5794 28.9884 14.7133 30.3682 17.0132 29.9121L17.6411 29.788C18.2171 29.6813 18.7467 29.4542 19.1748 29.1304C19.6029 28.8066 19.914 28.3978 20.0758 27.9464C20.605 26.3892 21.358 23.1525 20.2249 19.3396C20.5521 19.3778 20.9106 19.4102 21.2907 19.4369C23.006 19.561 25.3059 19.5724 27.3436 19.0342C28.5898 18.7041 29.7349 17.7365 30.2305 16.6068C30.4786 16.0599 30.557 15.4736 30.459 14.8976C30.361 14.3216 30.0896 13.7728 29.6676 13.2976C29.8071 13.0724 29.9154 12.8358 29.9996 12.6068C30.1848 12.0915 30.2714 11.5228 30.2714 10.9732C30.2714 10.4198 30.1848 9.85491 29.9996 9.33773C29.9051 9.0715 29.7761 8.81376 29.6146 8.56866C30.0212 7.83011 29.8721 7.00378 29.6074 6.37592C29.3363 5.75662 28.9398 5.1765 28.4334 4.65837C28.5633 4.36639 28.6162 4.06105 28.6162 3.77097C28.6059 3.1589 28.3963 2.55934 28.0076 2.03052C27.2041 0.9103 25.609 0 23.3548 0H14.9346C13.4791 0 12.3604 0.152671 11.4078 0.41412C10.5885 0.652067 9.80569 0.962552 9.07417 1.33969L8.95869 1.39503C7.74618 1.98281 6.55532 2.55915 3.98356 2.77479C2.14074 2.92937 0.5 4.11066 0.5 5.72325V13.3568C0.5 14.9808 2.14795 16.0915 3.76463 16.4408C5.80713 16.8835 7.55131 17.9427 8.89373 19.1316C10.241 20.3262 11.0926 21.5743 11.3933 22.2575C11.8721 23.3548 12.2498 25.1964 12.423 27.2021Z" fill="${fotografiaPresent.deslikeFill}"/>
                    </svg>
                    <p id="${fotografiaPresent.id}-deslikes">${fotografiaPresent.deslike}</p>
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path onclick="favorite(this.id)" id="${fotografiaPresent.id}" id fill-rule="evenodd" clip-rule="evenodd" d="M15.5 2.62809C23.8215 -6.49587 44.627 9.47007 15.5 30C-13.627 9.47207 7.17852 -6.49587 15.5 2.62809Z" fill="${fotografiaPresent.favoriteFill}"/>
                    </svg>

                </div>  
            </div>
        </div>
        `
    }
}
loading()
loading2()

let bgModal = document.getElementById('bg-modal')

function AbrirModal(){
    bgModal.style.display = "flex"
}

function FecharModal(){
    bgModal.style.display = "none"
    emailInput.value = ""
    senhaInput.value = ""
}

window.onclick = function(click){
    if(click.target == bgModal){
        bgModal.style.display = "none"
        emailInput.value = ""
        senhaInput.value = ""
    }
}


loginBtn.addEventListener("click", () =>{
    for(let i = 0; i < usuarios.length; i++){
        if(emailInput.value == usuarios[i].usuario){
            if(senhaInput.value == usuarios[i].senha){
                nameUser.innerHTML = usuarios[i].usuario
                bgModal.style.display = "none"
                existe = true
                loginHeader.innerHTML = ""
            }
        }
    }
    if(existe == false){
        alert("Este usuário não existe!")
    }
})



function like(likeId){
    if(existe == true){
        for(let i = 0; i < fotografia.length; i++){
            if(fotografia[i].id == likeId && fotografia[i].likeClicked == false){
                ++fotografia[i].like 
                fotografia[i].likeClicked = true
                fotografia[i].likeFill ="#ff0000"
                loading()
                loading2()
            }
            else if(fotografia[i].id == likeId && fotografia[i].likeClicked == true){
                --fotografia[i].like 
                fotografia[i].likeClicked = false
                fotografia[i].likeFill ="#fff"
                loading()
                loading2()
            }
        }
    }
    else if(existe == false){
        alert("Você precisa entrar com a sua conta antes!")
    }
}


function deslike(deslikeId){
    if(existe == true){
        for(let i = 0; i < fotografia.length; i++){
            if(fotografia[i].id == deslikeId && fotografia[i].deslikeClicked == false){
                ++fotografia[i].deslike 
                fotografia[i].deslikeClicked = true
                fotografia[i].deslikeFill ="#ff0000"
                loading()
                loading2()
            }
            else if(fotografia[i].id == deslikeId && fotografia[i].deslikeClicked == true){
                --fotografia[i].deslike 
                fotografia[i].deslikeClicked = false
                fotografia[i].deslikeFill ="#fff"
                loading()
                loading2()
            }
        }
    }
    else if(existe == false){
        alert("Você precisa entrar com a sua conta antes!")
    }
}


function favorite(favoriteId){
    if(existe == true){
        for(let i = 0; i < fotografia.length; i++){
            if(fotografia[i].id == favoriteId && fotografia[i].favoriteClicked == false){
                fotografia[i].favoriteClicked = true
                fotografia[i].favoriteFill ="#ff0000"
                loading()
                loading2()
            }
            else if(fotografia[i].id == favoriteId && fotografia[i].favoriteClicked == true){
                fotografia[i].favoriteClicked = false
                fotografia[i].favoriteFill ="#fff"
                loading()
                loading2()
            }
        }
    }
    else if(existe == false){
        alert("Você precisa entrar com a sua conta antes!")
    }
}