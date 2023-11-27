import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterForm = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-x-3">
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tahun akademik" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">2019/2020</SelectItem>
          <SelectItem value="dark">2020/2021</SelectItem>
          <SelectItem value="system">2021/2022</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Semester" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ganjil">Ganjil</SelectItem>
          <SelectItem value="genap">Genap</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterForm;
