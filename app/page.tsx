import Link from "next/link";
const technologies = [
  {
    title: "HTML",
    description:
      "HTML is the foundation of web development, defining the structure of your content.",
    link: "/html",
  },
  {
    title: "CSS",
    description:
      "CSS adds style and design to your HTML elements, making your site visually appealing.",
    link: "/css",
  },
  {
    title: "JavaScript",
    description:
      "JavaScript is a powerful scripting language used to add interactivity to web pages.",
    link: "/javascript",
  },
  {
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces.",
    link: "/react",
  },
  {
    title: "JavaScript",
    description: "Node.js allows you to run JavaScript on the server side.",
    link: "/nodejs",
  },
  {
    title: "MongoDB",
    description: "MongoDB is a NoSQL database used in many web applications.",
    link: "/mongodb",
  },
  {
    title: "Nextjs",
    description:
      "Next.js is a React framework for building server-side rendered apps.",
    link: "/nextjs",
  },
  {
    title: "DSA/javascript",
    description: "Learn Data Structure and Algorithm in Javascript",
    link: "/dsa",
  },
];

const Home = () => {
  return (
    <div className=" min-h-screen py-8 ">
      <div className="max-w-4xl flex-col px-4 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Fullstack Web Development Learning Hub
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 self-center">
          {technologies.map((tech, index) => (
            <div key={index} className="border p-4 rounded-md  shadow-md">
              <h2 className="text-xl font-semibold mb-2">{tech.title}</h2>
              <p className="text-muted-foreground mb-4">{tech.description}</p>
              <Link href={tech.link} className="text-blue-500 hover:underline">
                Learn {tech.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
