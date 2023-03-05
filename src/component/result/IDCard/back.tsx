import CardBottom from '@/component/result/IDCard/card-bottom';
import CardMiddle from '@/component/result/IDCard/card-middle';
import CardTop from '@/component/result/IDCard/card-top';

export default function Back() {
  return (
    <>
      <CardTop />
      <CardMiddle image="/images/romi.png" type="romi">
        <div></div>
      </CardMiddle>
      <CardBottom isBack />
    </>
  );
}
