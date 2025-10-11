// import { Button } from "@/components/ui/button";
// import {
//    DropdownMenu,
//    DropdownMenuContent,
//    DropdownMenuGroup,
//    DropdownMenuItem,
//    DropdownMenuPortal,
//    DropdownMenuSeparator,
//    DropdownMenuShortcut,
//    DropdownMenuSub,
//    DropdownMenuSubContent,
//    DropdownMenuSubTrigger,
//    DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import type { Row } from "@tanstack/react-table";
// import { EllipsisIcon } from "lucide-react";
// import type { Item } from "./UserFiltering";
// import { Link } from "react-router";

// export function RowActions({ row }: { row: Row<Item> }) {
//    console.log(row, "row data, ami asi");
//    return (
//       <DropdownMenu>
//          <DropdownMenuTrigger asChild>
//             <div className="flex justify-end">
//                <Button size="icon" variant="ghost" className="shadow-none" aria-label="Edit item">
//                   <EllipsisIcon size={16} aria-hidden="true" />
//                </Button>
//             </div>
//          </DropdownMenuTrigger>
//          <DropdownMenuContent align="end">
//             <DropdownMenuGroup>
//                <DropdownMenuItem>
//                   <Link to={`/users/${row.id}`}>
//                      {" "}
//                      <span>Edit</span>
//                   </Link>
//                   <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
//                </DropdownMenuItem>
//                <DropdownMenuItem>
//                   <span>Duplicate</span>
//                   <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
//                </DropdownMenuItem>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//                <DropdownMenuItem>
//                   <span>Archive</span>
//                   <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
//                </DropdownMenuItem>
//                <DropdownMenuSub>
//                   <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
//                   <DropdownMenuPortal>
//                      <DropdownMenuSubContent>
//                         <DropdownMenuItem>Move to project</DropdownMenuItem>
//                         <DropdownMenuItem>Move to folder</DropdownMenuItem>
//                         <DropdownMenuSeparator />
//                         <DropdownMenuItem>Advanced options</DropdownMenuItem>
//                      </DropdownMenuSubContent>
//                   </DropdownMenuPortal>
//                </DropdownMenuSub>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//             <DropdownMenuGroup>
//                <DropdownMenuItem>Share</DropdownMenuItem>
//                <DropdownMenuItem>Add to favorites</DropdownMenuItem>
//             </DropdownMenuGroup>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="text-destructive focus:text-destructive">
//                <span>Delete</span>
//                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
//             </DropdownMenuItem>
//          </DropdownMenuContent>
//       </DropdownMenu>
//    );
// }

import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuGroup,
   DropdownMenuItem,
   DropdownMenuPortal,
   DropdownMenuSeparator,
   DropdownMenuShortcut,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Row } from "@tanstack/react-table";
import { EllipsisIcon } from "lucide-react";
import type { Item } from "./UserFiltering";
import { Link } from "react-router";

export function RowActions({ row }: { row: Row<Item> }) {
   const userId = ((row.original as unknown) as { _id: string })._id; // ✅ আসল MongoDB বা backend user id
   console.log(row, "row data, ami asi");

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <div className="flex justify-end">
               <Button size="icon" variant="ghost" className="shadow-none" aria-label="Edit item">
                  <EllipsisIcon size={16} aria-hidden="true" />
               </Button>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
            <DropdownMenuGroup>
               <DropdownMenuItem asChild>
                  <Link to={`/users/${userId}`}>
                     <span>Edit</span>
                     <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
                  </Link>
               </DropdownMenuItem>

               <DropdownMenuItem>
                  <span>Duplicate</span>
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
               </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
               <DropdownMenuItem>
                  <span>Archive</span>
                  <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
               </DropdownMenuItem>

               <DropdownMenuSub>
                  <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                     <DropdownMenuSubContent>
                        <DropdownMenuItem>Move to project</DropdownMenuItem>
                        <DropdownMenuItem>Move to folder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Advanced options</DropdownMenuItem>
                     </DropdownMenuSubContent>
                  </DropdownMenuPortal>
               </DropdownMenuSub>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
               <DropdownMenuItem>Share</DropdownMenuItem>
               <DropdownMenuItem>Add to favorites</DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="text-destructive focus:text-destructive">
               <span>Delete</span>
               <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
