import { Button } from "@/components/ui/button";

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>;
}

export default function Nav() {
  return (
    <div className="flex flex-row-reverse mt-4">
      <Button variant="ghost" className="text-lg text-white mr-8">
        About
      </Button>
      <Button variant="ghost" className="text-lg text-white bg-black mr-8">
        Projects
      </Button>
      <Button variant="ghost" className="text-lg text-white bg-black mr-8">
        Skills
      </Button>
      <Button variant="ghost" className="text-lg text-white bg-black mr-8">
        Education
      </Button>
    </div>
  );
}
