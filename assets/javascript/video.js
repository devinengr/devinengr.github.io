
const videos = document.getElementsByTagName("video");
for (i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseover", function() {
        this.play();
    });
    videos[i].addEventListener("mouseleave", function() {
        this.pause();
        this.currentTime = 0;
    });
}
