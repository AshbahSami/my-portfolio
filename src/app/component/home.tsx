import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
   <>
    <Card className="bg-blue-900 text-white shadow-lg p-8 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Left side - Text content */}
      <div className="flex flex-col justify-start w-full md:w-1/2 space-y-6">
        <h1 className="font-bold text-3xl md:text-4xl px-2 py-5">
          HI, I am ASHBAH SAMI, a FRONTEND DEVELOPER
        </h1>
        <h6 className="px-4 py-4 text-lg md:text-xl">
          Have worked with Dart, Flutter, TypeScript, Next.js, and soon with Python.
        </h6>
        <Button className="bg-white text-blue-800 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition">
          Resume
        </Button>
      </div>

      {/* Right side - Image */}
      <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-8 md:mt-0">
        <img 
          className="w-72 h-auto rounded-lg max-w-full" 
          src="pic.png" 
          alt="Ashbah Sami"
        />
      </div>
    </Card>
   </>
  );
}
