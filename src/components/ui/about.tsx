import { StickyScroll } from "../ui/sticky-scroll-reveal";
import About from '@/assets/homepage/duck-img.png'
import What from '@/assets/homepage/bulb.svg';
import Why from '@/assets/homepage/puzzle.svg';

const details = [
  {
    title: "About Us",
    description:
      "CS50x Nepal, similar to CS50x Iran, CS50x Iraq, CS50x Tehran, etc., is the first adaptation of the CS50x lecture series tailored for students in Nepal. CS50x is a licensed course under the CC BY-NC-SA 4.0 Legal Code. CS50x Nepal is designed as an event, encompassing the complete set of CS50x activities with native adaptations, including lectures under the same license.",
    image: About, 
  },
  {
    title: "What is CS50x Nepal?",
    description:
      "The world-famous 'CS50x lectures' offered at Harvard and Yale University which is also an OpenWareCourse, is now in Nepal for the good. CS50x Nepal is the first adaptation of the course in Nepal at IOE Purwanchal Campus. The timeline will not only include lectures and classes but the whole set of CS50x activities including Nepal's own version of puzzle day, quiz, hackathon, CS50x Nepal fair, project display, guest lectures, games, fun and foremost group based learning.",
    image: What, 
  },
  {
    title: "Why CS50x Nepal?",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    image: Why,
  },

];

export function StickyScrollRevealDemo() {
  return (
    <div className="mb-8 mt-24">
      <StickyScroll content={details} />
    </div>
  );
}
