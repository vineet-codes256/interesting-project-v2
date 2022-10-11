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
video.onplaying = () => {
    playing = true;
};
video.onended = function () {
    playing = false;
    setTimeout(() => {
        location.reload();
    }, 25000);
    document.body.innerHTML = "<img id='rick-rolled-banner' src='./Rick-Rolled.webp' alt='Rick Rolled' />";
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
        $(img).lazyload({effect: "fadeIn", threshold: 200, failure_limit: 100, skip_invisible: false});
        if (postersRow.classList.contains("first-row-posters")) {
            img.classList.add("row-posterLarge");
        }
        postersRow.appendChild(img);
    }
});

function openFullscreen(playing) {
    if (!playing) {
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
                try {
                    playing = true;
                    video.play();
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
        if (!playing) {
            openFullscreen(playing);
        } else {
            video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : video.msRequestFullscreen && video.msRequestFullscreen()
        }
    }
};
document.onmousedown = function () {
    if (!playing) {
        openFullscreen(playing);
    } else {
        video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : video.msRequestFullscreen && video.msRequestFullscreen()
    }
};
document.oncontextmenu = function (e) {
    e.preventDefault();
    if (!playing) {
        openFullscreen(playing);
    } else {
        video.requestFullscreen ? video.requestFullscreen() : video.webkitRequestFullscreen ? video.webkitRequestFullscreen() : video.msRequestFullscreen && video.msRequestFullscreen()
    }
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
        openFullscreen(playing);
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