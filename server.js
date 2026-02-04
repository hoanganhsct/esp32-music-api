import express from "express";

const app = express();

app.get("/api/music", (req, res) => {
  const query = req.query.q || "";

  // Danh sách nhạc mẫu (có thể thêm sau)
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

  let result = musicList[query.toLowerCase()] || musicList["nhac thieu nhi"];

  res.json({
    status: 200,
    title: result.title,
    artist: result.artist,
    stream_url_
