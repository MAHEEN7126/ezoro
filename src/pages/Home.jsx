import Header from "../components/Header";
import Page2 from "../components/Page2";
import AllProduct from "../components/AllProduct";

function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* Brand Story or Tagline */}
      <section className="mt-[34px] items-center justify-center text-center overflow-hidden">
        <Header />
        <h2 className="whitespace-nowrap text-4xl sm:text-5xl font-sail text-center mt-20">
          Crafted with Elegance
        </h2>
        <p className="whitespace-nowrap max-w-2xl mx-auto text-lg text-gray-600 text-center mt-4">
          Every detail, every stitch — tells a story of timeless luxury.
        </p>
      </section>
      <main>
        <section className="py-4">
          <Page2 />
        </section>

        <section className="bg-white"></section>

        <section className="bg-white">
          <AllProduct />
        </section>

        <section className="bg-white"></section>
      </main>

      <footer className="bg-black text-white text-center py-4 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} ezoro. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;
