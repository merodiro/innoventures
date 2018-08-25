import styled from 'styled-components'

const Heading = styled.h2`
  text-align: center;
  /* padding-top: 2em; */
  /* margin-bottom: 1em; */
  margin: 1em 0;
  :after {
    content: '';
    display: block;
    width: 65px;
    height: 4px;
    border-radius: 5px;
    background-color: ${props => (props.dark ? 'var(--dark)' : 'var(--light)')};
    margin: 15px auto;
  }
`

export default Heading
