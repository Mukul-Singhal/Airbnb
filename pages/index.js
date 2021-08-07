import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import SmallCard from "../Components/SmallCard";
import MediumCard from "../Components/MediumCard";
import LargeCard from "../Components/LargeCard";
import Footer from "../Components/Footer";

export default function Home({ exploreData, cardData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-6 sm:px-12 ">
        <section className="pt-6">
          <h2 className=" text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex overflow-scroll space-x-3 scrollbar-hide">
            {cardData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb"
          buttonText="Got Inspired"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {};
    });

  const cardData = await fetch("https://links.papareact.com/zp1")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return {};
    });
  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
