import styled from 'styled-components';

// This is admittedly a bit confusing to the naked eye!
// This is basically a 'ternary within a ternary'.
// See https://www.javascripttutorial.net/javascript-ternary-operator/ for more details
const getIsActiveValue = ( { isActive, isAtPlayPosition, isPlaying }: StepProps ) =>
    isActive ? ( 
        isAtPlayPosition && isPlaying ? '#58c' : '#359'
    ) : 'transparent'

interface StepProps {
    isActive?: boolean;
    isPlaying?: boolean;
    isAtPlayPosition?: boolean;
}

// Note:
// It might be good to color each lane to match the colours of
// the handpan notes - more on that later but I have this thought of
// using color to show which note is which.
const Step = styled.div<StepProps>`
    background-color: ${ props => getIsActiveValue( props ) }
    border: 1px solid rgba( 255, 255, 255, ${ props => props.isAtPlayPosition ? 0.6 : 0.2 } );
    flex-grow: 1;
    margin: 2px;
`;

export default Step;
