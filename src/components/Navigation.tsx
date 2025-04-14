import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-purple-600">PS</span>
          <div className="hidden md:flex space-x-4">
            {["education", "experience", "skills", "contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => scrollTo(item)}
                className="capitalize"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
