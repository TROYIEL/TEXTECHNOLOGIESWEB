import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter';

const TypingText = () => {
  return (
    <div className="text-center text-4xl font-bold text-blue-600 p-3">
      <span>
        <Typewriter
          words={['TEX TECHNOLOGIES', 'INNOVATIVE MINDS',]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={150}
          deleteSpeed={100}
          delaySpeed={1500}
          onType={(char, count) => handleType(count)}
        />
      </span>
    </div>
  );
};

export default TypingText;
