import { Brackets, MapPin } from "lucide-react";

export default function Header() {
  return (
    <div>
      <div>
        <h1 className="hover:text-primary mt-8 mb-3 text-4xl transition-all">
          Pandit Pawar
        </h1>
      </div>
      <div className="flex items-center">
        <MapPin className="mr-2" size={16} /> Chh. Sambhajinagar, India
      </div>
      <div className="flex items-center">
        <Brackets className="mr-2" size={16} /> Full Stack Developer (Backend)
      </div>
    </div>
  );
}
