import IDCard from '@/component/card';
import withLayout from '@/component/hoc/withLayout';
import Image from 'next/image';

const name = '이름';
const birth = '2000.00.00';
const hobby = '취미';

function IDCardPage() {
  return (
    <div>
      <div>
        <Image
          src="/we-are-The Astronauts.png"
          width={230}
          height={52}
          alt="we-are-The Astronauts"
        />
      </div>
      <div>
        <div>toggle button</div>
      </div>
      <IDCard name={name} birth={birth} hobby={hobby} />
    </div>
  );
}

export default withLayout(
  IDCardPage,
  '우주인 아이디 카드 발급',
  '우주인 아이디 카드 발급',
);
