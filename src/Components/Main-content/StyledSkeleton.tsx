import { SkeletonText, Tbody, Td, Tr } from "@chakra-ui/react";
import { TableHeaderBus } from "../../interfaces/Bus";

type DataSkeleton = {
  title: TableHeaderBus[];
};

export const StyledSkeleton = ({ title }: DataSkeleton) => {
  return (
      <Tbody>
        {title.map((_, index) => (
          <Tr key={index}>
            {title.map((_, ind) => (
              <Td key={ind}>
                <SkeletonText key={ind} noOfLines={1} skeletonHeight="25" />
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
  );
};
