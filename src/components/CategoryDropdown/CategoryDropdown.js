import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryDropdown(props) {
    return(

        <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder={props.placeholder} />
    </SelectTrigger>
    <SelectContent>

      {props.dropdownValues.map((data) => (
        <SelectItem value={data._id} key={data._id}>
          {data.title}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
    )
}
