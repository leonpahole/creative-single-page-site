import Head from "next/head";
import { Approach } from "../components/Approach";
import { Carousel } from "../components/Carousel";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Presentation } from "../components/Presentation";
import { Strategic } from "../components/Strategic";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Creative single page site</title>
        <meta
          name="description"
          content="We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world."
        />
      </Head>
      <Navbar />
      <main>
        <Presentation />
        <Strategic />
        <Approach />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
