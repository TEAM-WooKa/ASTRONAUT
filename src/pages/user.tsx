import GradientBorderBox from '@/component/common/GradientBorderBox';
import withLayout from '@/component/hoc/withLayout';
import styled from 'styled-components';

function UserPage() {
  return (
    <div>
      <GradientBorderBox>
        <InputBoxInner>
          <Input type="text" placeholder="지구별 이름을 적어주세요." />
          <DateInputWrapper>
            <label htmlFor="date">입력하기</label>

            <DateInput
              type="date"
              id="date"
              placeholder="지구별 생일을 알려주세요."
            />
          </DateInputWrapper>
          <FileInput>
            <input
              className="upload-name"
              value="첨부파일"
              placeholder="첨부파일"
            />
            <label htmlFor="file">파일찾기</label>
            <input type="file" id="file" placeholder="사진을 등록해주세요." />
          </FileInput>
        </InputBoxInner>
      </GradientBorderBox>
    </div>
  );
}

const InputBoxInner = styled.div`
  padding: 26px 15px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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
    display: inline-block;
    padding: 10px 0;
    padding-right: 16px;
    width: fit-content;
    color: ${(props) => props.theme.colors[3]};
    cursor: pointer;
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

export default withLayout(
  UserPage,
  '사용자 입력',
  '우주인 아이디 카드 사용자 입력',
);
