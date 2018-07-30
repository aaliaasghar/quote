let celebrities = [
    {
        id:1,
        name: "Benazir Bhutto",
        title:"Prime Minister of Pakistan",
        readMoreURL:"https://en.wikipedia.org/wiki/Benazir_Bhutto",
        imgURL:"benazir.jpg",
        quote:" 'Democracy is necessary to peace and to undermining the forces of terrorism.' ",
    },
    {
        id:2,
        name:"Dr.Ruth Pfau",
        title:"German-Pakistani physician",
        readMoreURL:"https://en.wikipedia.org/wiki/Ruth_Pfau",
        imgURL:"ruth.jpg",
        quote:" 'It is better to light a candle than to curse the dark.' "

    },

{
        id:3,
        name:"Malala Yousafzai",
        title:"Pakistani Youngest Nobel Prize laureate",
        readMoreURL:"https://en.wikipedia.org/wiki/Malala_Yousafzai",
        imgURL:"malala.jpg",
        quote:" 'One child, one teacher, one book, one pen can change the world.' ",
    },


{
        id:4,
        name:"Minhal Sohail",
        title:"Pakistani sniper shooter",
        readMoreURL:"https://en.wikipedia.org/wiki/Minhal_Sohail",
        imgURL:"minahil.jpg",
        quote:" 'When the whole world is silent, even one voice becomes powerful.' ",
    },
{
        id:5,
        name:"Abdul Sattar Edhi",
        title:" Pakistani philanthropis",
        readMoreURL:"https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
        imgURL:"edhi.jpg",
        quote:" 'People have become educated, but have not yet become human.' ",
    },

{
        id:6,
        name:"Dr.Abdul Qadeer Khan",
        title:"Pakistani Physicist",
        readMoreURL:"https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
        imgURL:"qadir.jpg",
        quote:" 'Nation should be rest assured Pakistan is a safe atomic power. No one can cast an evil eye on it.' ",
    },


];

function initialize() {

       let bodyEl = document.querySelector("#image-display");
        for(let i = 0 ; i < celebrities.length ; i++) {
            bodyEl.innerHTML += `<div onclick="changeCeleb(${i})"
            id='celebrity-div' 
            style="background-image: url('img/${celebrities[i].imgURL}')">
            <p class="celebrity-name">${celebrities[i].name}</p>
       </div>`
      }


    }

    function changeCeleb(celeIndex){
        document.querySelector("#celebrity-name").innerHTML = celebrities[celeIndex].name;
        document.querySelector("#celebrity-title").innerHTML = celebrities[celeIndex].title;
        document.querySelector("#celebrity-img").style["background-image"] = `url(img/${celebrities[celeIndex].imgURL})`;
        document.querySelector("#celebrity-quote").innerHTML = celebrities[celeIndex].quote;
        document.querySelector("#celebrity-link a").href = celebrities[celeIndex].readMoreURL;
    }       