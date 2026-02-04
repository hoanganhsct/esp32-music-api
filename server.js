import express from "express";

const app = express();

app.get("/api/music", (req, res) => {
  const query = (req.query.q || "").toLowerCase();

  const musicList = {
    "nhac thieu nhi": {
      title: "Nhạc Thiếu Nhi Vui Nhộn",
      artist: "Kids Music",
      stream_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      thumbnail: "https://picsum.photos/200"
    },
    "son tung": {
      title: "Demo Track",
      artist: "Demo Artist",
      stream_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      thumbnail: "https://picsum.photos/200"
    }
  };

  const result = musicList[query] || musicList["nhac thieu nhi"];

  res.json({
    status: 200,
    title: result.title,
    artist: result.artist,
    stream_url: result.stream_url,
    thumbnail: result.thumbnail
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
