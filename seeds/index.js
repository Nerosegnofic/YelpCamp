const mongoose = require("mongoose");
const Campground = require("../models/campground")
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = (array) => (array[Math.floor(Math.random() * array.length)]);

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; ++i) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: "66cb12034f744b5729404369",
            location: `${cities[random1000]["city"]}, ${cities[random1000]["state"]}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt deleniti deserunt aperiam accusantium earum libero delectus, asperiores, commodi sunt excepturi provident reiciendis, unde quia mollitia aliquid quae. Alias, dolorum asperiores!",
            price,
            geometry: {
                type: "Point",
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dz0w8ahnb/image/upload/v1724915391/wei-pan-Ta0A1miYZKc-unsplash_csrn4i.jpg',
                    filename: 'YelpCamp/wei-pan-Ta0A1miYZKc-unsplash_csrn4i'
                },
                {
                    url: 'https://res.cloudinary.com/dz0w8ahnb/image/upload/v1724919890/YelpCamp/wlsdmgaxy3pwzdxsobrg.jpg',
                    filename: 'YelpCamp/wlsdmgaxy3pwzdxsobrg'
                }
            ]
        });
        await camp.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});