import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { NewArrivals } from "../components/NewArrivals";

export default function HomePage() {
  return (
    <main>
      <Nav cartCount={0} currentPath="/" transparent={true} />
      <Hero />
      <NewArrivals />
    </main>
  );
}
