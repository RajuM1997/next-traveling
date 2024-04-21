import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";
import Package from "@/components/package/Package";
import PopularDestinations from "@/components/popularDestination/PopularDestinations";
import WhyChoose from "@/components/whyChooseUs/WhyChoose";

export default function Home() {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <Package />
      </section>
      <section>
        <PopularDestinations />
      </section>
      <section>
        <WhyChoose />
      </section>
      <section>
        <Blog />
      </section>
    </main>
  );
}
