import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer, } from './directory-item.styles';
import useSound from 'use-sound';
import buttonHoverSound from '../../assets/audios/hover.mp3';
import buttonClickSound from '../../assets/audios/click.mp3';
import { useState } from "react";


const DirectoryItem = ({ category }) => {
  const [hover] = useSound(buttonHoverSound, { volume: 1 });
  const [click] = useSound(buttonClickSound, { volume: .5 });
  
  const [clickState, setClickState] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);


  const LeagueLogos = require.context('../../assets/images/logos', true);
  let LeagueLogo = LeagueLogos(`./${category}.png`);

  const navigate = useNavigate();

  const handleHover = () => {
    if (!isButtonHovered) {
      hover();
      setIsButtonHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsButtonHovered(false);
  };

  const onNavigateHandler = () => {
    click();
    setClickState(true);
    setTimeout(() => {
      navigate(`bulletin/${category}`)
    }, 400);
  }
  return (
    <DirectoryItemContainer clickState={clickState} onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={LeagueLogo} />
      <Body>
        <h2>{category}</h2>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
