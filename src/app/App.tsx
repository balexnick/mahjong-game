import { useMemo, useEffect, useCallback, useState } from 'react';
import Header from 'components/Header';
import FieldWrapper from 'components/FieldWrapper';
import Card from 'components/Card';
import { getPrimeArray } from 'utils/getPrimeArray';

const App = () => {
  const [hideAllCards, setHideAllCards] = useState<boolean>(false);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [cardsAfterCompare, setCardsAfterCompare] = useState<number[]>([]);
  const numberArray = useMemo(() => getPrimeArray(50), []);

  const evaluate = useCallback(() => {
    const [first, second] = openCards;
    if (numberArray[first] === numberArray[second]) {
      setCardsAfterCompare((prev) => [...prev, numberArray[first]]);
      setOpenCards([]);
      return;
    }

    setTimeout(() => {
      setOpenCards([]);
    }, 500);
  }, [numberArray, openCards]);


  const handleCardClick = (index:number) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
    } else {
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (openCards.length === 2) {
      timer = setTimeout(evaluate, 300);
    }
    return () => clearTimeout(timer);
  }, [evaluate, openCards]);
  
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!hideAllCards) {
      timer = setTimeout(() => setHideAllCards(true), 3000);
    }
    return () => clearTimeout(timer);
  }, [hideAllCards]);

  const checkIsCardActive = (index:number) => openCards.includes(index);

  return (
    <>
      <Header/>
      <FieldWrapper>
        {numberArray.map((item, i) => (
          <Card
            key={i} 
            value={item}
            onClick={() => handleCardClick(i)}
            hideAllClass={hideAllCards}
            isActive={checkIsCardActive(i)}
            visibleCard={cardsAfterCompare.indexOf(item) > -1}
          />
        ))}
      </FieldWrapper>
    </>
  );
};

export default App;