import { useState, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer, } from './directory-item.styles';
import useSound from 'use-sound';
import buttonHoverSound from '../../assets/audios/hover.mp3';
import buttonClickSound from '../../assets/audios/click.mp3';


const DirectoryItem = ({ category }) => {
  const { setCategoryOpened } = useContext(CategoriesContext);

  const [hover] = useSound(buttonHoverSound, { volume: .8 });
  const [click] = useSound(buttonClickSound, { volume: 1 });

  const [isButtonCliked, setIsButtonCliked] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const LeagueLogos = require.context('../../assets/images/logos', true);
  const LeagueLogo = LeagueLogos(`./${category}.svg`);

  const navigate = useNavigate();

  const onMouseEnterHandler = () => {
    if (!isButtonHovered) {
      hover();
      setIsButtonHovered(true);
    }
  };

  const onMouseLeaveHandler = () => {
    setIsButtonHovered(false);
  };

  const onNavigateHandler = () => {
    setIsButtonCliked(true);
    setCategoryOpened(true);
    click();
    setTimeout(() => {
      navigate(`bulletin/${category}`)
    }, 400);
  }
  return (
    <DirectoryItemContainer isButtonCliked={isButtonCliked} onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler} onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={LeagueLogo} />
      <Body>
        <h2>{category}</h2>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
