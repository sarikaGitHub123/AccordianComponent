import { useState, useContext } from "react";
import { AccordionContext, AccordionItemContext } from "./AccordianContext";

export const Accordion = ({ collapsible, children }) => {
  const [activePanel, setActivePanel] = useState(null);
  const handleChange = (id) => {
    if (collapsible && activePanel == id) {
      setActivePanel(null);
    } else {
      setActivePanel(id);
    }
  };
  const value = {
    activePanel: activePanel,
    handleChange: handleChange,
  };

  return (
    <AccordionContext.Provider value={value}>
      <div>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ id, children }) => {
  const value = { id: id };
  return (
    <AccordionItemContext.Provider value={value}>
      <div>{children}</div>
    </AccordionItemContext.Provider>
  );
};

export const AccordionToggle = ({ children }) => {
  const { handleChange, activePanel } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  const onToggleClick = () => {
    handleChange(id);
  };
  return (
    <div
      onClick={onToggleClick}
      style={{
        backgroundColor: "green",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%", display: "flex", justifyContent: "center" }}>
        {children}
      </div>
      <div style={{}}>
        <p>{activePanel == id ? "Close" : "Open"}</p>
      </div>
    </div>
  );
};

export const AccordionPanel = ({ children }) => {
  const { activePanel } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  if (id != activePanel) return null;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};
