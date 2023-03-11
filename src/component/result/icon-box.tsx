import DownloadIcon from '@/assets/icons/DownloadIcon';
import ReplayIcon from '@/assets/icons/ReplayIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

interface IconBoxProps {
  isLoading: boolean;
  onDownloadBtn: () => void;
}

export default function IconBox({ isLoading, onDownloadBtn }: IconBoxProps) {
  const router = useRouter();

  const onDownloadClick = () => {
    // onDownloadBtn()
    alert(`이 기능은 추후에 서비스 예정입니다. ver.2를 기대해주세요!`);
  };
  const onShareClick = async () => {
    // await navigator.clipboard.writeText(window.location.href);
    // alert('클립보드에 복사되었습니다. ');

    alert(`이 기능은 추후에 서비스 예정입니다. ver.2를 기대해주세요!`);
  };

  return (
    <ShareWrapper>
      <span onClick={onDownloadClick}>
        {isLoading ? (
          <Image
            src="/images/pink-loading.svg"
            alt="loading"
            width={38}
            height={38}
          />
        ) : (
          <DownloadIcon />
        )}
      </span>
      <span onClick={onShareClick}>
        <ShareIcon />
      </span>
      <span onClick={() => router.push('/')}>
        <ReplayIcon />
      </span>
    </ShareWrapper>
  );
}
// TODO : icon button 만들기
const ShareWrapper = styled.div`
  display: flex;
  margin: 35px 0 20px;
  gap: 75px;
  justify-content: center;
`;
