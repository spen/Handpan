import styled from 'styled-components';

interface StepProps {
    isActive?: boolean;
    isPlaying?: boolean;
    isAtPlayPosition?: boolean;
}

const getBackgroundColor = ( { isActive, isAtPlayPosition, isPlaying }: StepProps ) =>
    isActive ? (
        isAtPlayPosition && isPlaying ? '#58c' : '#359'
    ) : 'transparent';

const Step = styled.div<StepProps>`
    background-color: ${ props => getBackgroundColor( props ) }
    border: 1px solid rgba( 255, 255, 255, ${ props => props.isAtPlayPosition ? 0.6 : 0.2 } );
    flex-grow: 1;
    margin: 2px;
`;

export default Step;
