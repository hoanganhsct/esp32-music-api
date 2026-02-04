import express from "express";

const app = express();

app.get("/api/music", async (req, res) => {
  try {
    const query = req.query.q;
    if (!query) {
      return res.json({ status: 400, error: "Missing query" });
    }

    // Dùng API nhạc mở
    const response = await fetch(
      `https://api.sieuthicode.net/music.php?key=${encodeURIComponent(query)}`
    );

    const data = await response.json();

    if (!data || !data.url) {
      return res.json({ status: 404, error: "Not found" });
    }

    res.json({
      status: 200,
      title: data.title,
      artist: data.artist,
      stream_url: data.url,
      thumbnail: data.thumbnail
    });

  } catch (err) {
    res.json({ status: 500, error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running...");
});
