import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionPanel,
} from "./Components/Accordian/AccordianComponents";

const AccordianContent = [
  {id:"1",title:"Accordian 1 Title",content:"This is first Accordian's content"},
  {id:"2",title:"Accordian 2 Title",content:"This is second Accordian's content"},
  {id:"3",title:"Accordian 3 Title",content:"This is third Accordian's content"},
  {id:"4",title:"Accordian 4 Title",content:"This is fourth Accordian's content"},
  {id:"5",title:"Accordian 5 Title",content:"This is fifth Accordian's content"}
]

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        alignItems:'center'
      }}
    >
      <div>
      <div style={{display:'flex',justifyContent:'center'}}>
       <h2>Dynamic Accordian Component</h2>
      </div>
      <div style={{ width: "500px", }}>
        {AccordianContent && AccordianContent.map((item)=>(
        <div style={{marginTop:10}}>
         <Accordion collapsible key={item.id}>
          <AccordionItem id={item.id}>
            <AccordionToggle>{item.title}</AccordionToggle>
            <AccordionPanel>{item.content}</AccordionPanel>
          </AccordionItem>
        </Accordion>
        </div>
        ))}       
      </div>
      </div>
    </div>
  );
}
