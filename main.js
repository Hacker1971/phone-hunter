const lodedata = async (searchText) => {
const url= `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
const res = await fetch(url);
const data = await res.json();

displayphones(data.data);

}
const displayphones = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';
    phones = phones.slice(0,10);
     const noFound=document.getElementById('noFound');
     if(phones.length ===0){
        noFound.classList.remove('d-none');
     }else{
        noFound.classList.add('d-none');
     }
    phones.forEach(phone => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');
        colDiv.innerHTML= `
                   <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${phone.phone_name}</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                      </div>
        
        
        `;
        phoneContainer.appendChild(colDiv);
       


    });
    toggle(false);
}

document.getElementById('search-btn').addEventListener('click', function(){
    toggle(true);

    const inputvalue = document.getElementById('text').value;
    lodedata(inputvalue);
});

const toggle = isloder=>{
    const toggleBtn = document.getElementById('loder');
    if(isloder){
        toggleBtn.classList.remove('d-none');
    }
    else{
        toggleBtn.classList.add('d-none');
    }
}

// lodedata()