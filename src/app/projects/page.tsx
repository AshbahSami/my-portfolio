import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  githubLink: string;
  altText: string;
}

const ProjectCard = ({ title, description, imageSrc, githubLink, altText }: ProjectCardProps) => (
  <div className="flex px-5 py-5">
    <Card className="text-blue-800 shadow-blue-600 p-8 w-full max-w-2xl mx-auto flex flex-col md:flex-row px-8 py-4">
      <img 
        className="w-full h-auto rounded-lg max-w-full md:w-1/2" 
        src={imageSrc} 
        alt={altText} 
      />
      <div className="flex flex-col justify-center md:justify-center w-full md:w-1/2 mt-4 md:mt-0 px-2 py-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 text-lg text-gray-700">
          {description}
        </p>
        <div className="mt-4 flex justify-start">
          <Link
            className="flex items-center text-blue-600 hover:text-blue-800"
            href={githubLink}
          >
            <img 
              className="w-9 h-7 " 
              src="/github.png" 
              alt="GitHub Repository" 
            />
            <span className="font-semibold">View on GitHub</span>
          </Link>
        </div>
      </div>
    </Card>
  </div>
);

export default function Projects() {
  return (
    <>
      <ProjectCard 
        title="Student Information" 
        description="An amazing app that stores data of students and their courses, built with the power of Dart." 
        imageSrc="project1.png" 
        githubLink="https://github.com/AshbahSami/Student-info.git"
        altText="Screenshot of Student Information App"
      />
      <ProjectCard 
        title="Bank Account" 
        description="A great app for managing bank accounts with users information, built with Dart." 
        imageSrc="project2.png" 
        githubLink="https://github.com/AshbahSami/Bank-Account.git"
        altText="Screenshot of Bank Account App"
      />
      <ProjectCard 
        title="Chess Board" 
        description="A chessboard design created with the help of flutter" 
        imageSrc="project3.png" 
        githubLink="https://github.com/AshbahSami/chessboard.git"
        altText="Screenshot of ChessBoard"
      />
      <ProjectCard 
        title="Ball Shuffle" 
        description="A ball shuffle created with flutter that display random output." 
        imageSrc="project4.png" 
        githubLink="https://github.com/AshbahSami/ball-shuffle.git"
        altText="Screenshot of Ball Shuffle"
      />
       <ProjectCard 
        title="Ball Shuffle" 
        description="A ball shuffle created with flutter that display random output." 
        imageSrc="project4.png" 
        githubLink="https://github.com/AshbahSami/ball-shuffle.git"
        altText="Screenshot of Ball Shuffle"
      />
    </>
  );
}
