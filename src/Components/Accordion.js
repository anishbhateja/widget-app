import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = (index) => {
    if (index !== activeIndex) return setActiveIndex(index);
    setActiveIndex(null);
  };

  const renderedItems = items.map((item, index) => {
    let active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          onClick={() => {
            onTitleClicked(index);
          }}
          className={`title ${active}`}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
