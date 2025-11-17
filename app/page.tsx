import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Header />
      <Experience />
      <Projects />
      <Blog />
      <Footer />
    </div>
  );
}
