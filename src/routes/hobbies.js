import React, { useEffect, useMemo, useState } from "react";
import japanCity from "../assets/Hobbies/Places/Japan/image.png";
import japanNight from "../assets/Hobbies/Places/Japan/image copy.png";
import vancouverHarbor from "../assets/Hobbies/Places/Vancouver/73B0A8BB-E7A2-413F-81D5-D77527FBDAB5_1_105_c.jpeg";
import vancouverSunset from "../assets/Hobbies/Places/Vancouver/41C822B9-D3EE-452E-A15D-3771631182AF_1_105_c.jpeg";

const Hobbies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const writingLinks = [
    {
      title: "IDIOTS RECOMMENDATION  FOR LOCK DOWN",
      link: "https://samundrawrites.blogspot.com/2020/06/the-uncertainhome-leave-has-sparked-my.html",
    },
    {
      title: "घनटाउकेतन्त्रै  नम:",
      link: "https://samundrawrites.blogspot.com/2020/05/blog-post.html",
    },
    {
      title: "ELECTION-ECONOMY AND DATA",
      link: "https://samundrawrites.blogspot.com/2020/04/election-economy-and-data.html",
    },
    {
      title: "झापा काण्ड : धर्म प्रसादको अधर्म",
      link: "https://samundrawrites.blogspot.com/2020/04/blog-post_2.html",
    },
    {
      title: "QUANTUM LEAP",
      link: "https://samundrawrites.blogspot.com/2020/04/quantum-leap.html",
    },
    {
      title: "Entropy",
      link: "https://samundrawrites.blogspot.com/2020/04/entropy.html",
    },
    {
      title: "SPACETIME",
      link: "https://samundrawrites.blogspot.com/2020/04/spacetime.html",
    },
    {
      title: "आशा",
      link: "https://samundrawrites.blogspot.com/2020/04/blog-post_1.html",
    },
    {
      title: "The Broken",
      link: "https://samundrawrites.blogspot.com/2020/04/the-broken.html",
    },
    {
      title: "झरी",
      link: "https://samundrawrites.blogspot.com/2020/04/blog-post.html",
    },
    {
      title: "Oh! Dear Feynman",
      link: "https://samundrawrites.blogspot.com/2020/04/oh-dear-feynman.html",
    },
  ];

  const places = [
    {
      name: "Japan",
      photos: [
        { src: japanCity, alt: "Japan city street at night" },
        { src: japanNight, alt: "Japan night scene" },
      ],
    },
    {
      name: "Vancouver",
      photos: [
        { src: vancouverHarbor, alt: "Vancouver harbor view" },
        { src: vancouverSunset, alt: "Vancouver sunset skyline" },
      ],
    },
  ];

  const flatPhotos = useMemo(() => {
    return places.flatMap((place) =>
      place.photos.map((photo) => ({ ...photo, place: place.name }))
    );
  }, [places]);

  const handleSlide = (direction) => {
    setActiveIndex((prev) => (prev + direction + flatPhotos.length) % flatPhotos.length);
  };

  useEffect(() => {
    if (flatPhotos.length === 0) {
      return undefined;
    }
    if (isPaused) {
      return undefined;
    }
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % flatPhotos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [flatPhotos.length, isPaused]);

  return (
    <main className="page">
      <div className="container-narrow">
        <section className="section">
          <div className="card-grid">
            <div className="card">
              <h3>{flatPhotos[activeIndex]?.place}</h3>
              <div
                className="photo-carousel"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <button
                  type="button"
                  className="carousel-button"
                  onClick={() => handleSlide(-1)}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <div className="carousel-viewport">
                  <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {flatPhotos.map((photo) => (
                      <div className="carousel-slide" key={photo.src}>
                        <img src={photo.src} alt={photo.alt} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="carousel-button"
                  onClick={() => handleSlide(1)}
                  aria-label="Next photo"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Writing</h2>
          <div className="card-grid">
            <div className="card">
              <h3>Socio-Political Writer (Nepali)</h3>
              <p>
                समुन्द्र कार्की हाल अमेरिकाको Iowa State University मा विद्यावारिधि
                (PhD) अध्ययनरत छन्। उनी कृत्रिम बुद्धिमत्ता (AI), एल्गोरिद्म, प्रविधि
                र समाजबीचको अन्तरसम्बन्ध, तथा प्रविधिले मानव निर्णय, चेतना र राजनीतिक
                संरचनामा पार्ने प्रभावबारे अध्ययन र लेखन गर्छन्। समसामयिक सामाजिक,
                दार्शनिक र राजनीतिक प्रश्नहरूमा उनको लेखन प्रविधि–केन्द्रित युगमा
                विचार र लोकतन्त्रको भविष्यतर्फ केन्द्रित छ।
              </p>
              <div className="inline-links">
                <a
                  className="inline-link"
                  href="https://www.nayapatrikadaily.com/news-details/162337/2025-03-11"
                  target="_blank"
                  rel="noreferrer"
                >
                  Featured article
                </a>
              </div>
            </div>
            <div className="card">
              <h3>Selected posts</h3>
              <div className="inline-links" style={{ flexDirection: "column", gap: "0.5rem" }}>
                {writingLinks.map((item) => (
                  <a
                    className="inline-link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.title}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hobbies;
