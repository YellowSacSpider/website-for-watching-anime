function getPosition( element ) {
    var rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getEpisode(animeEpisodes, specificEpisode)
{
    let episodes;
    for (const [key, _] of Object.entries(animeEpisodes)) {
        if(key == specificEpisode)
        {
            episodes = animeEpisodes[specificEpisode];
            break;
        }
      }
      return episodes;
}

var animeEpisodes = {
    bleachEpisodes: 
    {
        e1: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "Bleach Episode 1",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: "https://ebd.cda.pl/640x406/1027824519"
        },

        e2: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "Bleach Episode 2",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: "https://ebd.cda.pl/640x406/10278248cc"
        },

        e3: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "Bleach Episode 3",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: "https://ebd.cda.pl/640x406/1027825153"
        },

        e4: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "Bleach Episode 4",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: "https://ebd.cda.pl/640x406/102782547b"
        }
    },

    dbEpisodes: 
    {
        e1: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "DragonBall Episode 1",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: ""
        },

        e2: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "DragonBall Episode 2",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: ""
        },

        e3: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "DragonBall Episode 3",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: ""
        },

        e4: 
        {
            langIMG: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
            episodeName: "DragonBall Episode 4",
            videoQuality: "FHD",
            playerIMG: "https://scdn.2cda.pl/v001/img/logotypyv2/favicon/cda-favicon-256.png",
            playerURL: ""
        }
    }
};


var element = document.getElementsByClassName("offert-container");
var element1 = document.getElementById("bleach");
var element2 = document.getElementById("dragonball");
var watchbox = document.getElementById("watch-box");
var oldpos = [getPosition(element1).x, getPosition(element2).x];

var watchButtons = {
    bleach: document.getElementById("watch-bleach"),
    dragonball: document.getElementById("watch-dragonball")
};

document.getElementById("home").addEventListener("click", (event) => {window.location.replace(window.location.href);});
watchButtons.bleach.addEventListener("click", async (event) => {
    if(!element2.classList.contains("hidden") || !element1.classList.contains("hidden")){
        console.log("test");
        element2.style.transform += 'translateX('+ '800' +'px)';
        element2.style.opacity += '0.1';
        element1.style.transform += 'translateX('+ '800' +'px)';
        element1.style.opacity += '0.1';
        await sleep(800);
        element2.classList.add("hidden");
        element1.classList.add("hidden");
        watchbox.classList.remove("hidden");
        let episodes = getEpisode(animeEpisodes,"bleachEpisodes");
        let i = 1;
        Object.keys(episodes).forEach(key => {{
            let watchContent = document.querySelector(".watch-content");
            let episode = document.createElement("div");
            episode.classList.add("episode");
            let imgContent = [document.createElement("img"), document.createElement("img")];
            let textContent = [document.createElement("h4"), document.createElement("h4")];
           
            watchContent.appendChild(episode);

            imgContent[0].src = episodes[key].langIMG;
            textContent[0].innerHTML = episodes[key].episodeName;
            textContent[1].innerHTML = episodes[key].videoQuality;
            imgContent[1].src = episodes[key].playerIMG;
            imgContent[1].id = `episode${i}`;
            
            episode.appendChild(imgContent[0]);
            episode.appendChild(textContent[0]);
            episode.appendChild(textContent[1]);
            episode.appendChild(imgContent[1]);

            document.getElementById(`episode${i}`).addEventListener("click", (event) => {window.open(`${episodes[key].playerURL}`, '_blank').focus();});

            i++;
        }})
    }
},false);


watchButtons.dragonball.addEventListener("click", async (event) => {
    if(!element2.classList.contains("hidden") || !element1.classList.contains("hidden")){
        console.log("test");
        element2.style.transform += 'translateX('+ '800' +'px)';
        element2.style.opacity += '0.1';
        element1.style.transform += 'translateX('+ '800' +'px)';
        element1.style.opacity += '0.1';
        await sleep(800);
        element2.classList.add("hidden");
        element1.classList.add("hidden");
        watchbox.classList.remove("hidden");
        let episodes = getEpisode(animeEpisodes,"dbEpisodes");
        Object.keys(episodes).forEach(key => {{
            let watchContent = document.querySelector(".watch-content");
            let episode = document.createElement("div");
            episode.classList.add("episode");
            let imgContent = [document.createElement("img"), document.createElement("img")];
            let textContent = [document.createElement("h4"), document.createElement("h4")];
           
            watchContent.appendChild(episode);

            imgContent[0].src = episodes[key].langIMG;
            textContent[0].innerHTML = episodes[key].episodeName;
            textContent[1].innerHTML = episodes[key].videoQuality;
            imgContent[1].src = episodes[key].playerIMG;

            episode.appendChild(imgContent[0]);
            episode.appendChild(textContent[0]);
            episode.appendChild(textContent[1]);
            episode.appendChild(imgContent[1]);
        }})
    }
},false);



