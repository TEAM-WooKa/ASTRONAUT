import styled from 'styled-components';

interface DateBoxProps {
  birth: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function DateBox({ birth, onChange }: DateBoxProps) {
  const isEmpty = birth === '';
  return (
    <label htmlFor="date">
      <DateInputWrapper>
        <DateValue isEmpty={isEmpty}>
          {isEmpty ? '지구별 생일을 알려주세요.' : birth}
        </DateValue>
        <DateInput
          type="date"
          id="date"
          onChange={onChange}
          value={birth}
          name="birth"
        />

        <InputTextLabel htmlFor="date">입력하기</InputTextLabel>
      </DateInputWrapper>
    </label>
  );
}

const DateValue = styled.span<{ isEmpty: boolean }>`
  color: ${(props) => (props.isEmpty ? '#bdbdbd' : props.theme.colors.main2)};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 16px;
  line-height: 40px;
  font-size: 16px;
`;

const DateInputWrapper = styled.div`
  width: 100%;
  position: relative;

  /* Gray/02 */
  border: 1px solid ${(props) => props.theme.colors.gray2};
  border-radius: 8px;

  height: 40px;
  padding: 11px 16px;

  background: #f6f6f6;
  display: flex;
`;

const InputTextLabel = styled.label`
  color: ${(props) => props.theme.colors[3]};
  padding: 11px 16px;

  position: absolute;
  top: 0;
  right: 0;
`;

const DateInput = styled.input`
  width: 100%;

  position: relative;
  opacity: 0;
  z-index: 1;

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0); //숨긴다
    width: 90px;
    display: block;
    position: relative;
    border-width: thin;
  }
`;
