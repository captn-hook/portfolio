import styles from "./page.module.css";
import Nav from "@/components/nav/nav";
import Carousel from "@/components/carousel/carousel";
import GithubCard from "@/components/card/githubCard";
import Video from "@/components/video/video";

export default function Home() {


  const repos = [
    "captn-hook/api",
    "captn-hook/brigNew",
    "captn-hook/h5n1map",
  ];

  return (
    <main className={styles.main}>
      <Nav refs={['Top', 'Datavis', 'Resume', 'Github']} id="Top" />
      <div className={styles.topSpacer} />
      <h1 className={styles.title}>Hi! I am Tristan H, and welcome to my portfolio site!</h1>
      <p className={styles.description}>
        I am currently a student at Oregon State University studying computer science.
        <br />
        When going to college, there was will doubt about what I would do, as both my
        father and grandfather were computer scientists. Of course, they very much
        forged their own path, before the field was codified into a real degree.
        <br />
        I love learning, and deeply want to continue to learn as long as I live.
        <br /><br />
        To me, that means I love teaching myself new things, and want to go back to school
        at some point after I finish out my CS degree. I have taken coursework that wasn't
        necessary for my degree, such mechanical engineering, physics, and psychology.
        What most excites me about continuing education is the opportunity to bring
        my familiarity with computers to other fields, and drive innovation in them.
        <br /><br />
        Away from my desk, I am a huge fan of the outdoors. Specifcally, my absolute favorite
        feeling in the world is snowboarding. I have been snowboarding for a very long time,
        and it was the decider in moving to Bend, Oregon. I also enjoy a little mountain biking,
        but I am not great at it.
      </p>
      <Carousel
        images={[
          {
            src: "/nice.jpg",
            alt: "Photo of me",
          },
          {
            src: "/school.jpg",
            alt: "Photo of me at school"
          },
          {
            src: "/silly.jpg",
            alt: "Second photo of me",
          },
          {
            src: "/dad.jpg",
            alt: "Photo of me and my dad",
          },
          {
            src: "/dog.jpg",
            alt: "Photo of my dog",
          },
          {
            src: "/fast.jpg",
            alt: "Photo of me going fast",
          },
        ]}
      />
      <p className={styles.description}>
        I have proffesionally working as a website developer aswell as 3D designer for a few years now.
        <br />
        I am profficient in many programming languages and software suites, and have no fear of learning any new ones.
        <br />
        I have become a Blender expert, although I have touched other 3D modeling software. I also know my
        way around Adobe Creative Suite, though I prefer GIMP to Photoshop. Additionally, I have used
        both Unity and Unreal.
        <br />
        As far as languages, I am enamored with Rust, but I always find myself prefering speed, so Javascript
        and Python are what I use to solve most problems. I have also used C, C++, Typescript, Raku, and Assembly
        for school projects.
      </p>
      <p className={styles.description}>
        Here is a sample of some of my work, foremost being a video I made for Gingki Bioworks, a company that
        tracked the spread of COVID-19 in air travel.
      </p>
      <Video src="/covidPlanes.mp4" type="video/mp4 " />
      <p className={styles.description}>
        This is a interactive data visualization I made for Poppy Health, a company that tracks the spread of viral
        particles in the air. The full site is available at <a href="https://view.poppy.com">view.poppy.com</a>.
      </p>
      <iframe className={styles.viewer} src="https://view.poppy.com/embed/" title="3D Viewer" />
      <div className={styles.topSpacer} />
      <iframe className={styles.resume} src="/resume.pdf#toolbar=0#view=Fit" title="Resume" id="Resume" />
      <p className={styles.description} id="Github">
        Below are some of my favorite Github projects:
      </p>
      <ul className={styles.cardList}>
        {repos.map((repo) => (
          <li key={repo}>
            <GithubCard key={repo} repo={repo} />
          </li>
        ))}
      </ul>
      <div className={styles.bottomSpacer} />
    </main>
  );
}
