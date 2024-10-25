import { useState } from "react";

export function useCharacterCount(initialValue = "") {
  const [value, setValue] = useState(initialValue);
  const [characterCount, setCharacterCount] = useState(initialValue.length);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setCharacterCount(newValue.length);
  };

  return { value, characterCount, handleChange };
}
