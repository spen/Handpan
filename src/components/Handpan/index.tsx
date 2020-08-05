import * as React from "react";
import styled from "styled-components";

import { InstrumentNote } from "../../state/useInstrumentsContext";
import handpanSampler from '../../lib/handpanSampler';
import { stringifyNote, getColorForNote } from '../../lib/note';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  border: 10px solid #3c7af6;
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

interface OffsettableProps {
    offsetX: number;
    offsetY: number;
}

const Offsettable = styled.div<OffsettableProps>`
    left: ${(props) => props.offsetX}px;
    top: ${(props) => props.offsetY}px;
    position: absolute;
`;


// given a list of linear notes, return an order that fits the handpan  (Right, left, right left etc.)
const sortForLayout = (collection) =>
  collection.reduce(
    (collection = [], item, i) =>
      i % 2 ? [item, ...collection] : [...collection, item],
    []
  );

const createPlaySoundEvent = ( note: InstrumentNote ) => () => {
    handpanSampler.loaded && handpanSampler.triggerAttack( stringifyNote( note ) );
}

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
        <Bell 
            color={ getColorForNote( rootNote ) } 
            bellSize={120}
            onClick={ createPlaySoundEvent( rootNote ) }
            style={ { transform: 'translate(-50%, -50%)' } }
        >
          {rootNote.tone}{rootNote.octave}
        </Bell>
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
              <Offsettable
                offsetX={left}
                offsetY={top}
              >
                <Bell
                    color={getColorForNote( note )}
                    bellSize={bellSize}
                    key={`${note.tone}${note.octave}`}
                    onClick= { createPlaySoundEvent( note ) }
                >
                    {note.tone}{note.octave}
                </Bell>
              </Offsettable>
          );
        })}
      </Framer>
    </Container>
  );
};

export default Handpan;
