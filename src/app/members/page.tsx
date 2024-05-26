import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { randomUUID } from "crypto";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type MemberTyp = {
  flat_no: String;
  floor_no: String;
  name: String;
  role: String;
  area: String;
};

const members: Array<MemberTyp> = [
  {
    flat_no: "F-101",
    floor_no: "0",
    area: "500",
    name: "Suman Senapati",
    role: "Member",
  },
  {
    flat_no: "F-102",
    floor_no: "0",
    area: "300",
    name: "Pradip kumar Manna",
    role: "Member",
  },
  {
    flat_no: "F-201",
    floor_no: "1",
    area: "912",
    name: "Sukanta Neogi",
    role: "Secretary",
  },
  {
    flat_no: "F-202",
    floor_no: "1",
    area: "590",
    name: "Somnath Das",
    role: "Auditor",
  },
  {
    flat_no: "F-203",
    floor_no: "1",
    area: "390",
    name: "Sanjay Shaw",
    role: "Member",
  },
  {
    flat_no: "F-301",
    floor_no: "2",
    area: "990",
    name: "Nimai Biswas",
    role: "Secretary",
  },
  {
    flat_no: "F-302",
    floor_no: "2",
    area: "836",
    name: "Tamal Das",
    role: "Treasurer",
  },
  {
    flat_no: "F-401",
    floor_no: "3",
    area: "1000",
    name: "Chandan Rakshel",
    role: "Member",
  },
  {
    flat_no: "F-402",
    floor_no: "3",
    area: "812",
    name: "Anik Chatterjee",
    role: "Member",
  },
  {
    flat_no: "F-501",
    floor_no: "4",
    area: "836",
    name: "Ranjan Dutta",
    role: "Supervisor",
  },
  {
    flat_no: "F-502",
    floor_no: "4",
    area: "600",
    name: "Sameer Prasad",
    role: "Member",
  },
  {
    flat_no: "F-503",
    floor_no: "4",
    area: "390",
    name: "Tapas Gour",
    role: "Member",
  },
];

export default function TableDemo() {
  return (
    <div className="mt-3">
      <div className="flex flex-col md:flex-row w-5/6 mx-auto my-2 items-center">
        <div className="text-nowrap">Quick Search</div>
        <Input type="text" placeholder="Name" className="m-2" />
        <Input type="text" placeholder="Role" className="m-2" />
      </div>
      <Table className="w-5/6 mx-auto">
        <TableCaption>List of registered members</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-nowrap">SL No</TableHead>
            <TableHead className="text-nowrap">Flat No</TableHead>
            <TableHead>Area(sqft)</TableHead>
            <TableHead>Floor</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {members.map((member, index) => (
            <TableRow key={randomUUID()}>
              <TableCell className="">{index + 1}</TableCell>
              <TableCell className="text-nowrap">{member.flat_no}</TableCell>
              <TableCell className="">{member.area}</TableCell>
              <TableCell>{member.floor_no}</TableCell>
              <TableCell className="text-nowrap">{member.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">{member.role}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
