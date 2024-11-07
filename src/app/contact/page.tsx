import { Card } from "@/components/ui/card";

interface Prop{
    title: string;
    info: any;

}

const ContactInfo =({title,info}:Prop)=>(

   <Card className="bg-white-900 py-8 px-8 text-blue-900 shadow-blue-300  max-w-2xl mx-auto flex-col items-center justify-between">
      <div className="px-2 py-4 justify-center text-blue-900">
        <h1 className="font-bold p-5 justify-center float-left">{title}</h1>
        <h4 className="font-bold p-5 justify-center float-left">{info}</h4>
      </div>
   </Card>
);
export default function Contact(){
    return(
        
       <div className="justify-center px-9 py-9">
        
      < ContactInfo
      title="phone no"
      info="03*********"
      />
      < ContactInfo
      title="email"
      info="*****@gmail.com"
      />
      < ContactInfo
      title="linkedin"
      info="*****.com"
      />
      </div>
        
    )
}