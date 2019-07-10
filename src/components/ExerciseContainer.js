import React from "react";
import PropTypes from "prop-types";

import Snippets from "../components/Snippets";
import Heading from "../components/Heading";
import ReferenceSections from "../components/ReferenceSections";
import Definition from "../components/Definition";
import Notes from "../components/Notes";

function ExcerciseContainer({ textContent }) {
  const itemMap = {
    snippet: Snippets,
    heading: Heading,
    text: Notes,
    definition: Notes,
    referenceLinks: ReferenceSections
  };

  return (
    <div className="excerciseContainer">
      {textContent.map(item => {
        const Component = itemMap[item.type];
        return Component && <Component textContent={item.text} />;
      })}
    </div>
  );
  // const { snippet, title, definition, referenceLinks, notes } = textContent;
  // return (
  //   <div className="excerciseContainer">
  //     <Definition
  //       notes={notes}
  //       title={textContent[0].text}
  //       textContent={definition}
  //     />

  //     {snippet &&
  //       snippet.map(snippetPiece => <Snippets textContent={snippetPiece} />)}

  //     {referenceLinks && <ReferenceSections referenceLinks={referenceLinks} />}
  //   </div>
  // );
}

ExcerciseContainer.propTypes = {
  children: PropTypes.node
};

export default ExcerciseContainer;
