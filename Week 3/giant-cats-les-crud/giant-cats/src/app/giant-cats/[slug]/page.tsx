// pages/giantCats/[name].js
import giantCatsData from "../../../data/giant-cats.json";
import Image from 'next/image'
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const giantCat = giantCatsData.find((giantCat) => giantCat.slug === slug);

  if (!giantCat) {
    return <div>
      <Image src="/images/sad-cat.jpg" width={500} height={500} alt="sad cat" />
      Gaint Cat not found</div>;
  }

  return (
    <form>
      <h1><input type="text" value={giantCat.name}/></h1>
      <p>Scientific Name: <input type="text" value={giantCat.scientificName}/></p>
      <p>Habitat: <input type="text" value={giantCat.habitat}/></p>
      <p>Description: {giantCat.description}</p>
      <Image
      src={giantCat.imageURL}
      width={500}
      height={500}
      alt={giantCat.name}
    />
    </form>
  );
}
