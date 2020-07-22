import * as React from "react";
import styled from "styled-components";
import * as Tone from "tone";

import InstrumentNote from "../../state/useInstrumentsContext";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  border: 10px solid #359;
  height: 500px;
  width: 500px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

// Responsible for offsetting the circle,
// to see the difference, just commment out the styles
const Framer = styled.div`
  transform: translate(50%, 50%);
  width: 100%;
  height: 100%;
`;

const defaultBellSize = 80; // just an arbitrary number that seems to be the right size

interface BellProps {
  bellSize?: number;
  isActive?: boolean;
}

const Bell = styled.div <BellProps>`
	position: absolute;
	border-radius: 50%;
	border: 2px solid #359;
	width: ${({ bellSize = defaultBellSize }) => bellSize}px;
	height: ${({ bellSize = defaultBellSize }) => bellSize}px;
	color:  ${({ color = "#359" }) => color};
	background-color: ${({ isActive }) => (isActive ? "#359" : "transparent")};
	font-size: 1.4em;
	display: flex;
	align-items: center;
	justify-content: center;
	transform: translate( -50%, -50% );
	cursor: pointer;

	&:hover {
		background-color: rgba( 255, 255, 255, 0.3 );
	}
`;

const Ding = styled(Bell)`
  transform: translate(-50%, -50%);
`;

const OffsetBell = styled(Bell)`
  left: ${(props) => props.offsetX}px;
  top: ${(props) => props.offsetY}px;
`;

// For now, I don't mind the repeatition.
// I doubt this will be the final way of handling the interval colors.
const chromaticColors = [
  "#FF6B6B",
  "#FF8E72",
  "#FFAF87",
  "#FFAB5E",
  "#FFE66D",
  "#DCF799",
  "#ABE188",
  "#67E5D2",
  "#67C5E5",
  "#678FE5",
  "#8267E5",
  "#EE92C2",
];

// given a list of linear notes, return an order that fits the handpan  (Right, left, right left etc.)
const sortForLayout = (collection) =>
  collection.reduce(
    (collection = [], item, i) =>
      i % 2 ? [item, ...collection] : [...collection, item],
    []
  );

interface HandpanProps {
  notes: InstrumentNote[];
};

const Handpan: React.FC<HandpanProps> = ({
  notes = [],
}) => {
  const [rootNote, ...restNotes] = notes;

  // We'll have a set of circles positioned clockwise,
  // but handpan notes are arranged different to that,
  // so we need to sort them to match the layout of the instrument.
  const toneFields = sortForLayout(restNotes);

  return (
    <Container>
      <Framer>
        <Ding color={chromaticColors[0]} bellSize={120}>
          {rootNote.tone}{rootNote.octave}
        </Ding>
        {toneFields.map((note, i) => {
          const itemsSize = defaultBellSize;
          const distance = defaultBellSize;
          const length = toneFields.length;
          const left =
            (itemsSize + distance) *
            -1 *
            // TODO: 0.79 and 0.63 seem about right at for the examples used,
            // but we could do with proper math here to place the bells at the right place
            Math.cos(
              (length % 2 ? -0.79 : -0.63) * Math.PI -
                (2 * Math.PI * (i * 1)) / length
            );
          const top =
            (itemsSize + distance) *
            Math.sin(
              (length % 2 ? -0.79 : -0.63) * Math.PI -
                (2 * Math.PI * (i * 1)) / length
            );

          const bellSize =
            defaultBellSize *
            // scale the bell sizes
            (1 + (length - notes.indexOf(note)) / 20);

          return (
            <OffsetBell
              offsetX={left}
              offsetY={top}
              color={chromaticColors[i + 1]}
              bellSize={bellSize}
              key={`${note.tone}${note.octave}`}
            >
              {note.tone}{note.octave}
            </OffsetBell>
          );
        })}
      </Framer>
    </Container>
  );
};

export default Handpan;
