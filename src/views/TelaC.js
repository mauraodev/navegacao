import React from 'react';
import TextoCentral from '../components/TextoCentral';

export default props => {
  return (
    <TextoCentral corFundo='#9932cd'>
      Tela C - {props.route.params.numero}
    </TextoCentral>
  )
}

