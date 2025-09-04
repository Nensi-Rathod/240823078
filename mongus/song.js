const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://Nensi:dhari123@cluster1.aaqrzee.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const songSchema=new mongoose.Schema({
    title:String,
    artist:String,
    category:String,
    album:String,
    url:String,
    photo:String,
    year:Number,
});
const Song=mongoose.model("Song",songSchema);
console.log("song model created success");

 Song.find()
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

Song.find({ category: "Bollywood" })
  .then((allSongs) => {
    console.log("All songs retrieved successfully:", allSongs);
  })
  .catch((error) => {
    console.error("Error retrieving songs:", error);
  });

const newSong = new Song({
  title: "Vandematram",
  artist: "Arijit Singh",
  category: "Patrotic",
  album: "Patrotic",
  url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
  photo:
    "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
  year: 2022,
});

const newSong1 = new Song({
  title: "Vandematram",
  artist: "Arijit Singh",
  category: "Patrotic",
  album: "Patrotic",
  url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
  photo:
    "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
  year: 2022,
});

const newSong2 = new Song({
  title: "hindi song",
  artist: "Arijit",
  category: "Patrotic",
  album: "Patrotic",
  url: "https://bajaao.pendujatt.com.se/load/128/66780039/2136806/Aavan Jaavan.mp3",
  photo:
    "https://pendujatt.com.se/uploads/album/aavan-jaavan-from-war-2-pritam.webp",
  year: 2022,
});

newSong
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });

newSong1
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });
  newSong2
  .save()
  .then(() => {
    console.log("New song added successfully");
  })
  .catch((error) => {
    console.error("Error adding new song:", error);
  });