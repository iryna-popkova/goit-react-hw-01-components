import styled from "@emotion/styled";

export const StatisticsWrapper = styled.section`
 margin: auto;
 padding: 12px;
 width: 330px;
 margin: auto;
`
export const StatisticsTitle = styled.h2`
   font-size: 30px;
    margin:0;
    margin-bottom: 20px;
    text-align: center;
    color: grey;
    text-transform: uppercase;
`
export const StatList = styled.ul`
   display: flex;
   gap:10px;
   list-style: none;
   padding: 0;
   margin: 0;
`
export const StatItem = styled.li`
 display:flex;
 flex-direction:column;
 align-items: center;
 gap: 5px;
 width: calc((100% - 20px) / 5);
`
export const ItemLabel = styled.span`
font-weight: 400;
  font-size: 18px;
  color: white;
`
export const ItemPercentage = styled.span`
font-weight: 600;
  font-size: 18px;
`
