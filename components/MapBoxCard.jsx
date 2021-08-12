import Image from "next/image";

function MapBoxCard({ result }) {
  return (
    <div className="flex flex-col relative rounded-lg max-w-[200px] z-10">
      <div className="relative h-40 w-50 p-0 m-0 ">
        <Image
          src={result.img}
          layout="fill"
          object-fit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-black m-0 p-0">
        <h5 className="font-semibold">{result.title}</h5>
        <span>{result.price}</span>
      </div>
    </div>
  );
}
export default MapBoxCard;
