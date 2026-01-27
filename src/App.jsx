import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionPanel,
} from "./Components/Accordian/AccordianComponents";

export default function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <div style={{ width: "500px", }}>
        <Accordion collapsible>
          <AccordionItem id="1">
            <AccordionToggle>title 1</AccordionToggle>
            <AccordionPanel>Content 1</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
