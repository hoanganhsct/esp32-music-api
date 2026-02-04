import express from "express";
import yts from "yt-search";
import ytdl from "ytdl-core";

const app = express();

app.get("/api/music", async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.json({ status: 400, error: "Missing query" });
        }

        const search = await yts(query);
        const video = search.videos[0];

        if (!video) {
            return res.json({ status: 404, error: "Not found" });
        }

        const info = await ytdl.getInfo(video.url);
        const format = ytdl.chooseFormat(info.formats, {
            quality: "highestaudio",
            filter: "audioonly"
        });

        res.json({
            status: 200,
            title: video.title,
            artist: video.author.name,
            duration: video.seconds,
            stream_url: format.url,
            thumbnail: video.thumbnail
        });

    } catch (err) {
        res.json({ status: 500, error: "Server error" });
    }
});

app.listen(3000, () => {
    console.log("Server running...");
});
