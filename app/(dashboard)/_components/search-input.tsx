'use client';

import qs from "query-string";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";
import { Input } from "@/components/ui/input";

function useDebounce(value: string, delay: number) {
  // State and setter for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear timeout on value change or unmount
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debouncedValue,
      }, 
    }, { skipEmptyString: true, skipNull: true});

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input 
        className="w-full max-w-[516px] pl-9" 
        placeholder="Search Boards"
        onChange={handlerChange}
        value={value}
      />
    </div>
  )
}