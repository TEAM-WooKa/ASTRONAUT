import AnswerButton from '@/component/question/answer/button';

type HandleAnswerClickType = (answer: string) => void;

export default function SecondChoice({
  handleAnswerClick,
}: {
  handleAnswerClick: HandleAnswerClickType;
}) {
  return (
    <>
      <AnswerButton content="YES" onClick={() => handleAnswerClick('YES')} />
      <AnswerButton content="NO" onClick={() => handleAnswerClick('NO')} />
    </>
  );
}
