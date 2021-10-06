import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image= 'https://picsum.photos//300/230'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/450'/>
      <PinCard size='large' image= 'https://picsum.photos//300/623'/>
      <PinCard size='small' image= 'https://picsum.photos//300/234'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/470'/>
      <PinCard size='large' image= 'https://picsum.photos//300/683'/>
      <PinCard size='small' image= 'https://picsum.photos//300/235'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/460'/>
      <PinCard size='large' image= 'https://picsum.photos//300/673'/>
      <PinCard size='small' image= 'https://picsum.photos//300/231'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/457'/>
      <PinCard size='large' image= 'https://picsum.photos//300/723'/>
      <PinCard size='small' image= 'https://picsum.photos//300/130'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/440'/>
      <PinCard size='large' image= 'https://picsum.photos//300/627'/>
      <PinCard size='small' image= 'https://picsum.photos//300/260'/>
      <PinCard size='medium' image= 'https://picsum.photos//300/450'/>
      <PinCard size='large' image= 'https://picsum.photos//300/613'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },
};

export default PinterestLayout; 
