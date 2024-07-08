import Image from 'next/image';

const HowItWorkCard = ({ src, title, desc }) => {
  return (
    <div className={'w-full bg-[#374151] flex items-center p-2'}>
      <Image src={src} alt={title} width={130} height={130} className={''} />

      <div className={'p-2 text-white'}>
        <h3 className={'font-bold text-2xl'}>{title}</h3>
        <p className={'text-gray-400 mt-2'}>{desc}</p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
