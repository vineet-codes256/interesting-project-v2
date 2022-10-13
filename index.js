var lottery = Math.floor(Math.random() * 3) + 1;
if (lottery == 1) {
    document.getElementById("2").innerHTML = "";
    document.getElementById("2").remove();
    document.getElementById("3").innerHTML = "";
    document.getElementById("3").remove();
} else if (lottery == 2) {
    document.getElementById("1").innerHTML = "";
    document.getElementById("1").remove();
    document.getElementById("3").innerHTML = "";
    document.getElementById("3").remove();
} else {
    document.getElementById("1").innerHTML = "";
    document.getElementById("1").remove();
    document.getElementById("2").innerHTML = "";
    document.getElementById("2").remove();
}
let playing = false;
var video = document.querySelector("video");
try {
    if (sessionStorage.getItem("Interacted")) {
        console.log("Interacted", sessionStorage.getItem("Interacted"));
        document.querySelector("video").autoplay = true;
    } else {
        video.autoplay = false;
        playing = false;
    }
} catch (e) {
    video.autoplay = false;
    console.log(e);
}
video.onplaying = () => {
    console.log("Playing");
    playing = true;
};
video.onended = function () {
    playing = false;
    setTimeout(() => {
        location.reload();
    }, 25000);
    document.body.innerHTML = "<img id='rick-rolled-banner' src='./content/Rick-Rolled.webp' alt='Rick Rolled' />";
    document.onmousedown = function () {
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}
let posterImages = [];
document.querySelectorAll(".row-poster").forEach((poster) => {
    posterImages.push(poster.src);
});
document.querySelectorAll(".row-posters").forEach((postersRow) => {
    for (let i = 0; i < 9; i++) {
        let img = document.createElement("img");
        img.src = `./content-images/${Math.floor(Math.random() * 216)}.jpg`;
        for (let i = 0; i < posterImages.length; i++) {
            if (img.src === posterImages[i]) {
                img.src = `./content-images/${Math.floor(Math.random() * 216)}.jpg`;
            }
        }
        for (let i = 0; i < posterImages.length; i++) {
            if (img.src === posterImages[i]) {
                img.src = `./content-images/${Math.floor(Math.random() * 216)}.jpg`;
            }
        }
        for (let i = 0; i < posterImages.length; i++) {
            if (img.src === posterImages[i]) {
                img.src = `./content-images/${Math.floor(Math.random() * 216)}.jpg`;
            }
        }
        posterImages.push(img.src);
        img.classList.add("row-poster");
        if (postersRow.classList.contains("first-row-posters")) {
            img.classList.add("row-posterLarge");
        }
        postersRow.appendChild(img);
    }
});

function openFullscreen(playing) {
    sessionStorage.setItem("Interacted", "true");
    if (!playing) {
        video.autoplay = true;
        playing = true;
        document.body.classList.add('rotate');
        document.querySelector("video").style.display = "";
        try {
            setTimeout(function () {
                document.body.classList.remove('rotate');
                document.querySelector("header").remove();
                document.querySelectorAll("div").forEach((div) => {
                    div.remove();
                });
                document.querySelector("video").classList.add('fullscreen');
                document.querySelector("video").style.display = "";
                playing = true;
                try {
                    video.play();
                    video.muted = false;
                    setTimeout(function () {
                        video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : video.msRequestFullscreen && video.msRequestFullscreen()
                    }, 500);
                } catch (e) {
                    console.log(e);
                    setTimeout(() => {
                        openFullscreen(playing);
                    }, 1000);
                };
            }, 500);
        } catch (e) {
            console.log(e)
        };
    } else {
        if (document.querySelector("header") || document.querySelectorAll("div")) {
            document.querySelector("header").remove();
            document.querySelectorAll("div").forEach((div) => {
                div.remove();
            });
        }
        document.querySelector("video").classList.add('fullscreen');
        document.querySelector("video").style.display = "";
        playing = true;
        video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : video.msRequestFullscreen && video.msRequestFullscreen()
    }
}
document.onkeydown = function (event) {
    if (
        event.ctrlKey ||
        event.metaKey ||
        event.altKey ||
        event.shiftKey ||
        event.keyCode === 20 ||
        event.keyCode === 91 ||
        event.keyCode === 92 ||
        event.keyCode === 93 ||
        event.keyCode === 17 ||
        event.keyCode === 18 ||
        event.keyCode === 27 ||
        event.keyCode === 112 ||
        event.keyCode === 113 ||
        event.keyCode === 114 ||
        event.keyCode === 115 ||
        event.keyCode === 116 ||
        event.keyCode === 117 ||
        event.keyCode === 118 ||
        event.keyCode === 119 ||
        event.keyCode === 120 ||
        event.keyCode === 121 ||
        event.keyCode === 122 ||
        event.keyCode === 123 ||
        event.keyCode === 144 ||
        event.keyCode === 145 ||
        event.keyCode === 19 ||
        event.keyCode === 45
    ) {
        event.preventDefault();
        new KeyboardEvent('keydown', {
            key: 'a'
        });
        return false;
    } else {
        openFullscreen(playing);
    }
};
document.onmousedown = function () {
    openFullscreen(playing);
};
document.oncontextmenu = function (e) {
    e.preventDefault();
    openFullscreen(playing);
};
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav-black');
    } else {
        nav.classList.remove('nav-black');
    }
});
// lazy load more content on scroll to bottom
let lazyLoad = false;
window.addEventListener('scroll', () => {
    if (window.scrollY >= document.body.scrollHeight - window.innerHeight) {
        if (!playing) {
            video.muted = true;
            openFullscreen(playing);
        } else if (document.querySelector("header")) {
            document.querySelector("header").remove();
            document.querySelectorAll("div").forEach((div) => {
                div.remove();
            });
            document.querySelector("video").classList.add('fullscreen');
            document.querySelector("video").style.display = "";
        }
        /*
        if (!lazyLoad && !playing) {
          lazyLoad = true;
          document.body.innerHTML += `
          <div class="row">
            <h2 class="row-title">More Content for you</h2>
            <div class="row-posters">
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
              <img class="row-poster" src="./content-images/${Math.floor(Math.random() * 216)}.jpg" alt="poster" />
            </div>
          </div>`;
          setTimeout(() => {
            lazyLoad = false;
          }, 1000);
          setTimeout(() => {
            window.scrollBy(0, -400);
            window.scrollBy(0, 400);
          }, 1500);
        }*/
    }
});
