import GradientBorderBox from '@/component/common/GradientBorderBox';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface UserInputBoxProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  birth: string;
  file: File | null;
}
export default function UserInputBox({
  onChange,
  name,
  birth,
  file,
}: UserInputBoxProps) {
  const isFileSelected = file !== null;

  return (
    <GradientBorderBox>
      <InputBoxInner>
        <Input
          type="text"
          placeholder="지구별 이름을 적어주세요."
          name="name"
          onChange={onChange}
          value={name}
        />
        <DateInputWrapper>
          <label htmlFor="date">입력하기</label>

          <DateInput
            type="date"
            id="date"
            placeholder="지구별 생일을 알려주세요."
            onChange={onChange}
            value={birth}
            name="birth"
          />
        </DateInputWrapper>
        <FileInput>
          <FileInputLabel htmlFor="file" isSelected={isFileSelected}>
            {isFileSelected ? '사진이 등록되었습니다.' : '사진을 등록해주세요.'}
          </FileInputLabel>
          <FileInputButton htmlFor="file">파일찾기</FileInputButton>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="사진을 등록해주세요."
            onChange={onChange}
          />
        </FileInput>
      </InputBoxInner>
    </GradientBorderBox>
  );
}
const Input = styled.input`
  height: 40px;
  padding: 11px 16px;
  /* Gray/01 */
  background: #f6f6f6;

  /* Gray/02 */
  border: 1px solid #e8e8e8;
  border-radius: 8px;

  &::placeholder {
    color: #bdbdbd;
    font-weight: bold;
  }
`;
const DateInput = styled(Input)`
  width: 100%;
  /* NOTE: text color 변경 https://yoonsidae.tistory.com/80 */
  &::-webkit-datetime-edit-text,
  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field {
    color: #bdbdbd;
  }

  ::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0); //숨긴다
    opacity: 0;
    width: 100px;
    display: block;
    position: relative;
    border-width: thin;
  }
`;

// NOTE: 참고 자료  : https://velog.io/@sklove96/inputtypefile-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0
const FileInput = styled.div`
  background: #f6f6f6;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  height: 40px;

  display: inline-flex;

  .upload-name {
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    flex: 1;
    color: #bdbdbd;
  }

  label {
  }

  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
const FileInputLabelCommon = styled.label`
  display: inline-block;
  padding: 11px 16px;
  cursor: pointer;
`;

const FileInputLabel = styled(FileInputLabelCommon)<{ isSelected: boolean }>`
  flex: 1;
  text-align: left;
  color: ${(props) => (props.isSelected ? props.theme.colors[3] : '#bdbdbd')};
`;

const FileInputButton = styled(FileInputLabelCommon)`
  color: ${(props) => props.theme.colors[3]};
  width: fit-content;
`;

const InputBoxInner = styled.div`
  padding: 26px 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DateInputWrapper = styled.div`
  position: relative;
  label {
    color: ${(props) => props.theme.colors[3]};
    padding: 11px 16px;

    position: absolute;
    top: 0;
    right: 0;
  }
`;
