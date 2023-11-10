// fetch('https://jsonplaceholder.typicode.com/comments').then((data)=>{
//     return data.jason ();
// }).then((completedata)=>{
//     let data1="";
//     completedata.map((value)=>{
//         data1+= `<div class="card">
//         <h1 class="title">${values.name}</h1>
//         <p>${value.body}</P>
//         <p>${value.email}</p>
//         </div>
//         `;
//     });
//     document.getElementById("card").innerHTML=data1;
// }).catch((err)=>{
//     console.log(err);
// })
//   const listEl =document.querySelector('card');
// fetch('inner.json')
//  .then(res => res.json())
//  .then(data =>{
//     data.forEach(post => {
//         listEl.insertAdjacentHTML('beforeend',`<li>${post.name}</li>`)
//     });
//  });
fetch('https://jsonplaceholder.typicode.com/comments')
 .then(res => {
    return res.json();
 })
 .then(data =>{
    data.forEach(user=> {
        const markup =`<div class="mani">
        <div>
        <h2>${user.name}</h2>
        <p>${user.body}</p>
        <h3>${user.email}</h3></div>
        </div>`;
        document.querySelector('#card').insertAdjacentHTML("beforeend",markup);
        
    });
 })
 .catch(error => console.log(error()));
