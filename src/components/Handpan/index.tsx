import * as React from "react";
import styled from "styled-components";
import { Box } from 'grommet';

import { InstrumentNote } from "../../state/useInstrumentsContext";
import handpanSampler from '../../lib/handpanSampler';
import { stringifyNote, getColorForNote } from '../../lib/note';

interface ContainerProps {
    size: number;
  }

const Container = ( { children, size } ) => (
    <Box
        flex
        direction="row"
        background="darkBackground"
        border={{ color: 'blueBright', size: 'large' }}
        width={ `${ size }px` }
        height={ `${ size }px` }
        elevation="medium"
        round="full"
        overflow="hidden"
    >
        { children }
    </Box>
)

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

const Bell = styled.div<BellProps>`
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

    const size = 420;

  return (
    <Container size={ size }>
      <Framer>
        <Bell 
            color={ getColorForNote( rootNote ) } 
            bellSize={ 0.25 * size }
            onClick={ createPlaySoundEvent( rootNote ) }
            style={ { transform: 'translate(-50%, -50%)' } }
        >
          {rootNote.tone}{rootNote.octave}
        </Bell>
        {toneFields.map((note, i) => {
          const numberOfToneFields = toneFields.length;
          const left =
            (size / 3.2) *
            -1 *
            // TODO: 0.79 and 0.63 seem about right at for the examples used,
            // but we could do with proper math here to place the bells at the right place
            Math.cos(
              (numberOfToneFields % 2 ? -0.79 : -0.63) * Math.PI -
                (2 * Math.PI * (i * 1)) / numberOfToneFields
            );
          const top =
          (size / 3.2) *
            Math.sin(
              (numberOfToneFields % 2 ? -0.79 : -0.63) * Math.PI -
                (2 * Math.PI * (i * 1)) / numberOfToneFields
            );

          const bellSize =
            ( ( defaultBellSize / 500 ) * size ) *
            // scale the bell sizes
            (1 + (numberOfToneFields - notes.indexOf(note)) / 20);

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
