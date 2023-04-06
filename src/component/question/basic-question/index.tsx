import styled from 'styled-components';

import GradientBox from '@/component/common/GradientBox';
import Answer from '@/component/question/answer';
import CharacterImage from '@/component/question/basic-question/character-image';
import type {
  AnswerType,
  FourChoiceQuestionType,
  TwoChoiceQuestionType,
} from '@/types/question';

export default function BasicQuestion({
  currentQuestion,
  handleAnswerClick,
}: {
  currentQuestion: TwoChoiceQuestionType | FourChoiceQuestionType;
  handleAnswerClick: (answer: AnswerType) => void;
}) {
  return (
    <>
      <div>
        <ImageBox>
          <CharacterImage
            color={currentQuestion.color}
            character={currentQuestion.character}
          />
        </ImageBox>
        <GradientBox title={`Q${currentQuestion.id}`}>
          <QuestionInnerBox>
            {currentQuestion.content.map((q, index) => (
              <p key={index + q}>{q}</p>
            ))}
          </QuestionInnerBox>
        </GradientBox>
      </div>

      <Answer
        type={currentQuestion.type}
        answers={currentQuestion.answers}
        handleAnswerClick={handleAnswerClick}
      />
    </>
  );
}

const ImageBox = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionInnerBox = styled.div`
  padding: 20px;
  font-size: 16px;
  font-weight: 600;
  width: 330px;

  color: ${(props) => props.theme.colors.bg};
`;
