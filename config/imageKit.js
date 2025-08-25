import ImageKit from "imagekit";



var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : process.env.URLENDPOINT
});

export default imagekit