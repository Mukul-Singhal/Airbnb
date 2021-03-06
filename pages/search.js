import { useState } from "react";
import { useRouter } from "next/dist/client/router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Map from "../components/Map";
import InfoCard from "../components/InfoCard.jsx";
import { format } from "date-fns";

function Search({ searchResult }) {
  // const [popupValue, setPopupValue] = useState({});

  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log(startDate, endDate, noOfGuests);

  const formattedStarDate = format(new Date(startDate), "dd MM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MM yyyy");
  const range = `${formattedStarDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  // setpopupvalue={setPopupValue}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz")
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return {
    props: { searchResult },
  };
}
