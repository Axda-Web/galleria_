export const mapAssetUrl = (url: string) => {
  const ASSETS_URI_DICTIONNARY = {
    // Starry Night
    "/assets/starry-night/thumbnail.jpg": require("~/assets/starry-night/thumbnail.jpg"),
    "/assets/starry-night/hero-small.jpg": require("~/assets/starry-night/hero-small.jpg"),
    "/assets/starry-night/hero-large.jpg": require("~/assets/starry-night/hero-large.jpg"),
    "/assets/starry-night/gallery.jpg": require("~/assets/starry-night/gallery.jpg"),
    "/assets/starry-night/artist.jpg": require("~/assets/starry-night/artist.jpg"),

    // Arnolfini Portrait
    "/assets/arnolfini-portrait/thumbnail.jpg": require("~/assets/arnolfini-portrait/thumbnail.jpg"),
    "/assets/arnolfini-portrait/hero-small.jpg": require("~/assets/arnolfini-portrait/hero-small.jpg"),
    "/assets/arnolfini-portrait/hero-large.jpg": require("~/assets/arnolfini-portrait/hero-large.jpg"),
    "/assets/arnolfini-portrait/gallery.jpg": require("~/assets/arnolfini-portrait/gallery.jpg"),
    "/assets/arnolfini-portrait/artist.jpg": require("~/assets/arnolfini-portrait/artist.jpg"),

    // Girl with Pearl Earring
    "/assets/girl-with-a-pearl-earring/thumbnail.jpg": require("~/assets/girl-with-a-pearl-earring/thumbnail.jpg"),
    "/assets/girl-with-a-pearl-earring/hero-small.jpg": require("~/assets/girl-with-a-pearl-earring/hero-small.jpg"),
    "/assets/girl-with-a-pearl-earring/hero-large.jpg": require("~/assets/girl-with-a-pearl-earring/hero-large.jpg"),
    "/assets/girl-with-a-pearl-earring/gallery.jpg": require("~/assets/girl-with-a-pearl-earring/gallery.jpg"),
    "/assets/girl-with-a-pearl-earring/artist.jpg": require("~/assets/girl-with-a-pearl-earring/artist.jpg"),

    // Guernica
    "/assets/guernica/thumbnail.jpg": require("~/assets/guernica/thumbnail.jpg"),
    "/assets/guernica/hero-small.jpg": require("~/assets/guernica/hero-small.jpg"),
    "/assets/guernica/hero-large.jpg": require("~/assets/guernica/hero-large.jpg"),
    "/assets/guernica/gallery.jpg": require("~/assets/guernica/gallery.jpg"),
    "/assets/guernica/artist.jpg": require("~/assets/guernica/artist.jpg"),

    // Lady with an Ermine
    "/assets/lady-with-an-ermine/thumbnail.jpg": require("~/assets/lady-with-an-ermine/thumbnail.jpg"),
    "/assets/lady-with-an-ermine/hero-small.jpg": require("~/assets/lady-with-an-ermine/hero-small.jpg"),
    "/assets/lady-with-an-ermine/hero-large.jpg": require("~/assets/lady-with-an-ermine/hero-large.jpg"),
    "/assets/lady-with-an-ermine/gallery.jpg": require("~/assets/lady-with-an-ermine/gallery.jpg"),
    "/assets/lady-with-an-ermine/artist.jpg": require("~/assets/lady-with-an-ermine/artist.jpg"),

    // Mona Lisa
    "/assets/mona-lisa/thumbnail.jpg": require("~/assets/mona-lisa/thumbnail.jpg"),
    "/assets/mona-lisa/hero-small.jpg": require("~/assets/mona-lisa/hero-small.jpg"),
    "/assets/mona-lisa/hero-large.jpg": require("~/assets/mona-lisa/hero-large.jpg"),
    "/assets/mona-lisa/gallery.jpg": require("~/assets/mona-lisa/gallery.jpg"),
    "/assets/mona-lisa/artist.jpg": require("~/assets/mona-lisa/artist.jpg"),

    // Penitent Magdalene
    "/assets/penitent-magdalene/thumbnail.jpg": require("~/assets/penitent-magdalene/thumbnail.jpg"),
    "/assets/penitent-magdalene/hero-small.jpg": require("~/assets/penitent-magdalene/hero-small.jpg"),
    "/assets/penitent-magdalene/hero-large.jpg": require("~/assets/penitent-magdalene/hero-large.jpg"),
    "/assets/penitent-magdalene/gallery.jpg": require("~/assets/penitent-magdalene/gallery.jpg"),
    "/assets/penitent-magdalene/artist.jpg": require("~/assets/penitent-magdalene/artist.jpg"),

    // The Basket of Apples
    "/assets/the-basket-of-apples/thumbnail.jpg": require("~/assets/the-basket-of-apples/thumbnail.jpg"),
    "/assets/the-basket-of-apples/hero-small.jpg": require("~/assets/the-basket-of-apples/hero-small.jpg"),
    "/assets/the-basket-of-apples/hero-large.jpg": require("~/assets/the-basket-of-apples/hero-large.jpg"),
    "/assets/the-basket-of-apples/gallery.jpg": require("~/assets/the-basket-of-apples/gallery.jpg"),
    "/assets/the-basket-of-apples/artist.jpg": require("~/assets/the-basket-of-apples/artist.jpg"),

    // The Boy in the Red Vest
    "/assets/the-boy-in-the-red-vest/thumbnail.jpg": require("~/assets/the-boy-in-the-red-vest/thumbnail.jpg"),
    "/assets/the-boy-in-the-red-vest/hero-small.jpg": require("~/assets/the-boy-in-the-red-vest/hero-small.jpg"),
    "/assets/the-boy-in-the-red-vest/hero-large.jpg": require("~/assets/the-boy-in-the-red-vest/hero-large.jpg"),
    "/assets/the-boy-in-the-red-vest/gallery.jpg": require("~/assets/the-boy-in-the-red-vest/gallery.jpg"),
    "/assets/the-boy-in-the-red-vest/artist.jpg": require("~/assets/the-boy-in-the-red-vest/artist.jpg"),

    // The Great Wave off Kanagawa
    "/assets/the-great-wave-off-kanagawa/thumbnail.jpg": require("~/assets/the-great-wave-off-kanagawa/thumbnail.jpg"),
    "/assets/the-great-wave-off-kanagawa/hero-small.jpg": require("~/assets/the-great-wave-off-kanagawa/hero-small.jpg"),
    "/assets/the-great-wave-off-kanagawa/hero-large.jpg": require("~/assets/the-great-wave-off-kanagawa/hero-large.jpg"),
    "/assets/the-great-wave-off-kanagawa/gallery.jpg": require("~/assets/the-great-wave-off-kanagawa/gallery.jpg"),
    "/assets/the-great-wave-off-kanagawa/artist.jpg": require("~/assets/the-great-wave-off-kanagawa/artist.jpg"),

    // The Night Cafe
    "/assets/the-night-cafe/thumbnail.jpg": require("~/assets/the-night-cafe/thumbnail.jpg"),
    "/assets/the-night-cafe/hero-small.jpg": require("~/assets/the-night-cafe/hero-small.jpg"),
    "/assets/the-night-cafe/hero-large.jpg": require("~/assets/the-night-cafe/hero-large.jpg"),
    "/assets/the-night-cafe/gallery.jpg": require("~/assets/the-night-cafe/gallery.jpg"),
    "/assets/the-night-cafe/artist.jpg": require("~/assets/the-night-cafe/artist.jpg"),

    // The Sleeping Gypsy
    "/assets/the-sleeping-gypsy/thumbnail.jpg": require("~/assets/the-sleeping-gypsy/thumbnail.jpg"),
    "/assets/the-sleeping-gypsy/hero-small.jpg": require("~/assets/the-sleeping-gypsy/hero-small.jpg"),
    "/assets/the-sleeping-gypsy/hero-large.jpg": require("~/assets/the-sleeping-gypsy/hero-large.jpg"),
    "/assets/the-sleeping-gypsy/gallery.jpg": require("~/assets/the-sleeping-gypsy/gallery.jpg"),
    "/assets/the-sleeping-gypsy/artist.jpg": require("~/assets/the-sleeping-gypsy/artist.jpg"),

    // The Storm on the Sea of Galilee
    "/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg": require("~/assets/the-storm-on-the-sea-of-galilee/thumbnail.jpg"),
    "/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg": require("~/assets/the-storm-on-the-sea-of-galilee/hero-small.jpg"),
    "/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg": require("~/assets/the-storm-on-the-sea-of-galilee/hero-large.jpg"),
    "/assets/the-storm-on-the-sea-of-galilee/gallery.jpg": require("~/assets/the-storm-on-the-sea-of-galilee/gallery.jpg"),
    "/assets/the-storm-on-the-sea-of-galilee/artist.jpg": require("~/assets/the-storm-on-the-sea-of-galilee/artist.jpg"),

    // The Swing
    "/assets/the-swing/thumbnail.jpg": require("~/assets/the-swing/thumbnail.jpg"),
    "/assets/the-swing/hero-small.jpg": require("~/assets/the-swing/hero-small.jpg"),
    "/assets/the-swing/hero-large.jpg": require("~/assets/the-swing/hero-large.jpg"),
    "/assets/the-swing/gallery.jpg": require("~/assets/the-swing/gallery.jpg"),
    "/assets/the-swing/artist.jpg": require("~/assets/the-swing/artist.jpg"),

    // Van Gogh Self Portrait
    "/assets/van-gogh-self-portrait/thumbnail.jpg": require("~/assets/van-gogh-self-portrait/thumbnail.jpg"),
    "/assets/van-gogh-self-portrait/hero-small.jpg": require("~/assets/van-gogh-self-portrait/hero-small.jpg"),
    "/assets/van-gogh-self-portrait/hero-large.jpg": require("~/assets/van-gogh-self-portrait/hero-large.jpg"),
    "/assets/van-gogh-self-portrait/gallery.jpg": require("~/assets/van-gogh-self-portrait/gallery.jpg"),
    "/assets/van-gogh-self-portrait/artist.jpg": require("~/assets/van-gogh-self-portrait/artist.jpg"),
  };

  return (
    ASSETS_URI_DICTIONNARY[url as keyof typeof ASSETS_URI_DICTIONNARY] || url
  );
};
