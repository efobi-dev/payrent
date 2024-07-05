import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
export function SearchInput({ defaultValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setValue(input);
  };
  const handleSearch = () => {
    if (value) return router.push(`/properties/?q=${value}&page=1`);
    return router.push("/properties");
  };
  const handleKeyPress = (event: { key: string }) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <form
      className="flex items-center gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <Input
        id="search"
        type="text"
        placeholder="Search here"
        value={value ?? ""}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <Button variant="ghost" size="icon" onClick={handleSearch}>
        <Search className="w-6 h-6" />
      </Button>
    </form>
  );
}
