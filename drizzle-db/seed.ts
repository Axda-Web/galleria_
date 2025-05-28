// drizzle-db/seed.ts
import { sql } from "drizzle-orm";
import { db } from "./index";
import { paintingsTable, imagesTable } from "./schema";
import { generatePaintingSlug } from "~/lib/generatePaintingSlug";

const paintings = [
  {
    name: "Starry Night",
    artist: "Vincent Van Gogh",
    description:
      'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
    year: 1889,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Starry_Night",
  },
  {
    name: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    description:
      "The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
    year: 1665,
    sourceUrl: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
  },
  {
    name: "Guernica",
    artist: "Pablo Picasso",
    description:
      "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
    year: 1937,
    sourceUrl: "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
  },
  {
    name: "Penitent Magdalene",
    artist: "Artemisia Gentileschi",
    description:
      "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
    year: 1625,
    sourceUrl:
      "https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)",
  },
  {
    name: "The Storm on the Sea of Galilee",
    artist: "Rembrandt",
    description:
      "The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
    year: 1633,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee",
  },
  {
    name: "The Great Wave off Kanagawa",
    artist: "Hokusai",
    description:
      'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai\'s series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.',
    year: 1831,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
  },
  {
    name: "Van Gogh Self-portrait",
    artist: "Vincent Van Gogh",
    description:
      'This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was "absolutely fanatical". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh\'s final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.',
    year: 1889,
    sourceUrl: "https://en.wikipedia.org/wiki/Van_Gogh_self-portrait_(1889)",
  },
  {
    name: "The Sleeping Gypsy",
    artist: "Henri Rousseau",
    description:
      "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.",
    year: 1897,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy",
  },
  {
    name: "Lady with an Ermine",
    artist: "Leonardo da Vinci",
    description:
      "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\"Il Moro\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa",
    year: 1489,
    sourceUrl: "https://en.wikipedia.org/wiki/Lady_with_an_Ermine",
  },
  {
    name: "The Night Café",
    artist: "Vincent Van Gogh",
    description:
      "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
    year: 1888,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9",
  },
  {
    name: "The Basket of Apples",
    artist: "Paul Cézanne",
    description:
      "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.",
    year: 1893,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Basket_of_Apples",
  },
  {
    name: "The Boy in the Red Vest",
    artist: "Paul Cézanne",
    description:
      "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US",
    year: 1889,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest",
  },
  {
    name: "Arnolfini Portrait",
    artist: "Jan van Eyck",
    description:
      "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \"in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\".",
    year: 1434,
    sourceUrl: "https://en.wikipedia.org/wiki/Arnolfini_Portrait",
  },
  {
    name: "Mona Lisa",
    artist: "Leonardo da Vinci",
    description:
      "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
    year: 1503,
    sourceUrl: "https://en.wikipedia.org/wiki/Mona_Lisa",
  },
  {
    name: "The Swing",
    artist: "Jean-Honoré Fragonard",
    description:
      "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where her legs are revealed. The lady is believed to have been a mistress of the Baron de Saint-Julien, the man pushing the swing from the right. According to the memoirs of the dramatist Charles Collé, the painting was commissioned by that wealthy aristocrat for his pleasure house.",
    year: 1767,
    sourceUrl: "https://en.wikipedia.org/wiki/The_Swing_(Fragonard)",
  },
];

// Images configuration - paths for each image type for a painting
const createImagePaths = (paintingName: string) => {
  const folderName = generatePaintingSlug(paintingName);

  return [
    { type: "thumbnail" as const, path: `/assets/${folderName}/thumbnail.jpg` },
    {
      type: "heroSmall" as const,
      path: `/assets/${folderName}/hero-small.jpg`,
    },
    {
      type: "heroLarge" as const,
      path: `/assets/${folderName}/hero-large.jpg`,
    },
    { type: "gallery" as const, path: `/assets/${folderName}/gallery.jpg` },
    { type: "artist" as const, path: `/assets/${folderName}/artist.jpg` },
  ];
};

export async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Clean existing data (optional)
    console.log("Cleaning existing data...");
    await db.delete(imagesTable);
    await db.delete(paintingsTable);
    await db.run(sql`DELETE FROM sqlite_sequence WHERE name = 'paintings'`);

    // Insert paintings
    console.log("Inserting paintings...");
    const insertedPaintings = [];

    for (const painting of paintings) {
      const [result] = await db
        .insert(paintingsTable)
        .values(painting)
        .returning();
      insertedPaintings.push(result);
      console.log(`Inserted painting: ${painting.name}`);
    }

    // Insert images for each painting
    console.log("Inserting images...");
    for (const painting of insertedPaintings) {
      const imagePaths = createImagePaths(painting.name);

      for (const { type, path } of imagePaths) {
        await db.insert(imagesTable).values({
          paintingId: painting.id,
          type,
          url: path,
        });
      }
      console.log(`Inserted images for: ${painting.name}`);
    }

    console.log("✅ Seeding completed successfully!");
  } catch (error) {
    console.error("❌ Seeding failed:", error);
  } finally {
    console.log("🏁 Process finished");
  }
}
