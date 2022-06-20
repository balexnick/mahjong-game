import { useMemo } from 'react';
import Header from 'components/Header';
import FieldWrapper from 'components/FieldWrapper';
import Card from 'components/Card';

type Props = {}

const App = (props: Props) => {
  const mapArray = useMemo<number[]>(() => {
    const arr = [];
    for(let i = 1; i <= 30; i++){
      arr.push(i);
    }
    return arr;
  }, []);


  return (
    <>
      <Header/>
      <FieldWrapper>
        {mapArray.map((item, i) => (
          <Card key={i} value={item}/>
        ))}
      </FieldWrapper>
    </>
  );
};

export default App;