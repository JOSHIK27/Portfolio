import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>;
}

export default function Nav() {
  const router = useRouter();
  return (
    <div className="flex flex-row-reverse mt-4">
      <Button
        onClick={() => {
          router.push("/");
        }}
        variant="ghost"
        className="text-lg text-white mr-8"
      >
        About
      </Button>
      <Button
        onClick={() => {
          router.push("/achievements");
        }}
        variant="ghost"
        className="text-lg text-white bg-black mr-8"
      >
        Achievements
      </Button>
      <Button
        onClick={() => {
          router.push("/projects");
        }}
        variant="ghost"
        className="text-lg text-white bg-black mr-8"
      >
        Projects
      </Button>
      <Button
        onClick={() => {
          router.push("/skills");
        }}
        variant="ghost"
        className="text-lg text-white bg-black mr-8"
      >
        Skills
      </Button>
      <Button
        onClick={() => {
          router.push("/education");
        }}
        variant="ghost"
        className="text-lg text-white bg-black mr-8"
      >
        Education
      </Button>
    </div>
  );
}
