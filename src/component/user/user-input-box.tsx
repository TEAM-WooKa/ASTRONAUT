import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import GradientBorderBox from '@/component/common/GradientBorderBox';
import DateBox from '@/component/user/date-box';

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
          placeholder="우주인님의 닉네임을 알려주세요."
          name="name"
          onChange={onChange}
          value={name}
        />
        <DateBox birth={birth} onChange={onChange} />
        <FileInput>
          <FileInputLabel htmlFor="file" isSelected={isFileSelected}>
            {isFileSelected
              ? '프로필 사진이 등록되었습니다.'
              : '프로필 사진을 등록해주세요.'}
          </FileInputLabel>
          <FileInputButton htmlFor="file">파일찾기</FileInputButton>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="프로필 사진을 등록해주세요."
            onChange={onChange}
          />
        </FileInput>
      </InputBoxInner>
    </GradientBorderBox>
  );
}

const Input = styled.input`
  font-size: 16px;

  width: 100%;

  height: 40px;
  padding: 11px 16px;
  /* Gray/01 */
  background: #f6f6f6;

  /* Gray/02 */
  border: 1px solid #e8e8e8;
  border-radius: 8px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

// NOTE: 참고 자료  : https://velog.io/@sklove96/inputtypefile-%EC%BB%A4%EC%8A%A4%ED%85%80%ED%95%98%EA%B8%B0
const FileInput = styled.div`
  background: #f6f6f6;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  height: 40px;
  font-size: 16px;

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
