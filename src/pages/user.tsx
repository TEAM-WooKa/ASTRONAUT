import withLayout from '@/component/hoc/withLayout';
import UserInputBox from '@/component/user/user-input-box';
import styled from 'styled-components';
import Image from 'next/image';
import { GradientButtonStyled } from '@/assets/styles/gradient';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { setStorage } from '@/utils/storage';

function convertBase64ToUrl(base64: string): string {
  const blob = base64toBlob(base64); // Base64 데이터를 Blob으로 변환
  const imageUrl = URL.createObjectURL(blob); // Blob 데이터를 이미지 URL로 변환

  return imageUrl;
}

function base64toBlob(base64: string): Blob {
  const binary = atob(base64.split(',')[1]);
  const array = [];

  for (let i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }

  return new Blob([new Uint8Array(array)], { type: 'image/png' }); // Blob 타입을 지정해줘야 함
}

function UserPage() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: '',
    birth: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleNextPage = () => {
    // ? name, birth, image가 모두 존재해야 다음 페이지로 넘어감
    if (!input.name || !input.birth || !image) {
      alert('모든 정보를 입력해주세요');

      return;
    }
    //? 1. image를 업로드, image url을 localstorage에 저장
    //? 3. localstorage에 저장된 image url을 서버에 전송
    //? 4. 서버에서 받은 result id를 localstorage에 저장
    //? 5. localstorage에 저장된 result id를 이용해 result 페이지로 이동
    const userData = {
      name: input.name,
      birth: input.birth,
      image: imageUrl,
    };

    setStorage('user', JSON.stringify(userData));

    // TODO : result 계산
    router.push('/loading');
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'file') {
      if (e.target.files) {
        const file = e.target.files[0];
        setImage(file);
        console.log('file: ', file);

        const reader = new FileReader();

        reader.onload = async (event) => {
          if (!event.target) return;
          const base64 = event.target.result as string;
          const img = document.createElement('img');
          img.src = base64;

          const newImageUrl = convertBase64ToUrl(base64); // 이미지 URL로 변환
          setImageUrl(newImageUrl);
        };

        reader.readAsDataURL(file);
      }
    } else {
      const { name, value } = e.target;

      console.log('value: ', value);
      setInput({ ...input, [name]: value });
    }
  };

  return (
    <Wrapper>
      <div>
        <Image
          src="/images/we_are_the_astronauts.png"
          width={255}
          height={75}
          alt="we-are-The Astronauts"
        />
      </div>
      <UserInputBox onChange={handleChange} {...input} file={image} />
      <WarnMessage>
        개인 정보를 저장하거나 다른 목적으로 사용하지 않습니다.
      </WarnMessage>
      <GradientButton onClick={handleNextPage}>&gt; print</GradientButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const WarnMessage = styled.p`
  color: ${(props) => props.theme.colors.main2};
  font-weight: 400;
  font-size: 14px;
`;
const GradientButton = styled(GradientButtonStyled)`
  color: ${(props) => props.theme.colors.main2};
  font-size: 32px;
  border-radius: 40px;
  padding: 2px;
  width: 270px;
`;
export default withLayout(
  UserPage,
  '사용자 입력',
  '우주인 아이디 카드 사용자 입력',
);
