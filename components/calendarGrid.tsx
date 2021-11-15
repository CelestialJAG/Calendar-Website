import { Box, Center, Flex } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react";

const Calendar = () => {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var cols = [];
    var count = 0;
    const [currWeek, setCurrWeek] = useState([]);

    for(let i=0; i<24; i++){ //create grid of timeblocks
        cols.push(<Center m="10px 0" bg="red" key={count++}>block</Center>);
    }

    function getWeek(startDate: Date){
        var sunday = new Date(startDate.setDate(startDate.getDate()-startDate.getDay()));
        var result = [new Date(sunday)];
        while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
            result.push(new Date(sunday));
        }
        setCurrWeek(result);
        console.log(currWeek);
    }

    useEffect(()=>{
        getWeek(new Date(Date.now())); //get current week
    }, []);
    
    return(
        <>
        <Flex w="1080px" h="900px" justifyContent="space-around">
            {days.map((day, i)=>{
                return(
                    <>
                    <Box key={day}>
                        <Text>{day}</Text>
                        <Text></Text>
                        {cols}
                    </Box>
                    </>
                );
            })}
        </Flex>
        </>
    );

};

export default Calendar;