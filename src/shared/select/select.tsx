import {useState} from "react";

type optionItem = {
  label: string,
  value: string
}

type Props = {
  data: optionItem[]
  onChange: (value: string) => void;
}

export function Select({data, onChange}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<optionItem>({label: 'Все статусы', value: 'All'});

  const handleChange = (item: optionItem) => {
    setSelected(item)
    onChange(item.value);
    setIsOpen(false)
  }

  return <div>
    <button onClick={() => setIsOpen(prev => !prev)}>{selected.label}</button>
    {isOpen && (
        data.map((item: optionItem) => (
            <div key={item.value} onClick={() => handleChange(item)}>{item.label}</div>
        ))
    )}
  </div>
}