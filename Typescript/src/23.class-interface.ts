interface VideoPlayElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  startEvents(): void;
}

class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer;
  private playButton;
  private stopButton;

  constructor(videoPlayerElements: VideoPlayElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  playToggle() {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.textContent = "Pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.textContent = "Play";
    }
  }

  stop() {
    this.videoPlayer.pause();
    this.playButton.textContent = "Play";
  }

  startEvents() {
    this.playButton.addEventListener("click", () => {
      this.playToggle();
    });

    this.stopButton.addEventListener("click", () => {
      this.stop();
      this.videoPlayer.currentTime = 0;
      this.playButton.textContent = "Play";
    });
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".player") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.startEvents();
