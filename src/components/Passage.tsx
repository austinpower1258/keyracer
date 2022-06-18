import '../styles/Passage.css';

interface passageProps {
  data: {
    current: string,
    correct: string
  }
}

function renderPassage(current: string, correct: string) {
  let passage = [];
  
  for (let i = 0; i < correct.length; ++i) {
    const currentChar = current[i];
    const correctChar = correct[i];

    if (current.length === i) {
      passage.push(<span className="key-current" key={i}>
        {correctChar}
      </span>);
    } else if (current.length <= i) {
      passage.push(<span className="key-future" key={i}>
        {correctChar}
      </span>);
    } else if (correctChar === currentChar) {
      passage.push(<span className="key-correct" key={i}>
        {correctChar}
      </span>);
    } else {
      passage.push(<span className="key-wrong" key={i}>
        {correctChar}
      </span>);
    }
  }

  return passage;
}

function Passage({data: {current, correct}}: passageProps) {
  return (
    <>
    <div className="passage">
      {renderPassage(current, correct)}
    </div>
    </>
  )
}

export default Passage;