import { Tbody, } from "@chakra-ui/react"
import { TableHeaderBus } from "../../interfaces/Bus"
import { TableRow } from "./TableRow"

type DataList={
    dataTitle:TableHeaderBus[],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data:any
}



export const TableBody=({data,dataTitle}:DataList)=>{
    console.log(dataTitle[5])
    return( 
        <Tbody>
              
              {data.map((dataItem: any, index: number) => (
                <TableRow data={dataItem} dataTitle={dataTitle} index={index}/>
                
              ))}
            </Tbody>)
}