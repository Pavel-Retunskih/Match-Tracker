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

  return <div className={'relative w-[170px]'}>
    <button onClick={() => setIsOpen(prev => !prev)}
            className={'hover:bg-[#0B0E12] hover:text-[#B4B5B6] w-full rounded-md py-[10px] px-4' +
                ' bg-[#0F1318]'}>{selected.label}</button>
    {isOpen && (<div className={'absolute flex flex-col gap-3 bg-[#0F1318] px-[6px] w-full top-16 rounded-md z-20'}>
          {data.map((item: optionItem) => (
              <div key={item.value} onClick={() => handleChange(item)}
                   className={'text-nowrap py-2 px-3 text-[#B4B5B6] bg-[#0F1318] hover:bg-[#11161D]' +
                       ' hover:text-[#FFFFFF] cursor-pointer '}>{item.label}</div>
          ))}
        </div>

    )}
  </div>
}