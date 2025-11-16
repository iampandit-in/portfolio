import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="mx-auto mt-24 mb-12 max-w-5xl">
      <div>
        <Header />
        <p className="p-4">
          i&apos;m a 20 y/o fullstack developer. i love building things and
          solving problems. i enjoy language design, theoretical computer
          science and i live on the terminal. if i&apos;m not coding, i&apos;m
          probably doing cardistry, watching movies or obsessing over mechanical
          keyboards.
        </p>
        <Experience />
        <Projects />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}
