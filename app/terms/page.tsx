'use client';

import { Button } from '../components/button/Button';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import style from './TermsPage.module.css';
import NavigationBar from '../components/NavigationBar/Nav';

const TermsPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const router = useRouter();

  // 모두 동의 클릭 시
  const handleAllCheck = () => {
    const newState = !allChecked;
    setAllChecked(newState);
    setIndividualChecks(individualChecks.map(() => newState)); // 모두 동일한 상태로 변경
  };

  // '다음' 버튼 활성화 여부
  const isNextButtonEnabled = individualChecks
    .slice(0, 5)
    .every((checked) => checked);

  // 개별 체크박스 클릭 시
  const handleIndividualCheck = (index: number) => {
    const newChecks = [...individualChecks];
    newChecks[index] = !newChecks[index];
    setIndividualChecks(newChecks);

    // 개별 체크 상태에 따라 모두 동의 상태 업데이트
    setAllChecked(newChecks.every((checked) => checked));
  };

  const handleDetailBtn = (index: number) => {
    const detailPages = [
      '/terms/detail1',
      '/terms/detail2',
      '/terms/detail3',
      '/terms/detail4',
      '/terms/detail5',
    ];
    router.push(detailPages[index - 1]);
  };

  // 다음 버튼 클릭 시
  const handleNext = () => {
    if (individualChecks) router.push('/nickname'); // 다음 페이지로 이동
  };

  return (
    <div className={style.outGrid}>
      <NavigationBar />
      <div className={style.mainText}>
        <h2>
          서비스 이용 약관에 <br /> 동의해주세요.
        </h2>
      </div>

      {/* 모두 동의 */}
      <div
        className={style.allCheckBoxGrid}
        onClick={handleAllCheck}
        style={{ color: allChecked ? '#0FE597' : '#FFFFFF' }} // 체크 상태에 따른 색상 변경
      >
        <FaCheck
          className={style.checkMark}
          style={{ color: allChecked ? '#00C851' : '#555555' }}
        />
        네, 모두 동의합니다.
      </div>

      {/* 개별 체크박스 */}
      {[
        '[필수] 만 14세 이상입니다.',
        '[필수] 서비스 이용 약관 동의',
        '[필수] 개인정보 수집 및 이용 동의',
        '[필수] 개인정보 처리 방침 동의',
        '[필수] 네이버 클라우드 플랫폼 CLOVE Studio 서비스 이용약관',
        '[선택] 추가 개인정보 처리 방침 동의',
      ].map((text, index) => (
        <div
          key={index}
          className={style.checkBoxGrid}
          style={{ color: individualChecks[index] ? '#0FE597' : '#FFFFFF' }}
        >
          <FaCheck
            className={style.checkMark}
            onClick={() => handleIndividualCheck(index)}
            style={{ color: individualChecks[index] ? '#0FE597' : '#555555' }}
          />
          <div
            className={style.checkBoxText}
            onClick={() => handleIndividualCheck(index)}
          >
            {text}
          </div>
          <button
            className={index !== 0 ? style.viewButton : style.invisibleButton}
            onClick={() => handleDetailBtn(index)}
          >
            보기
          </button>
        </div>
      ))}

      <div className={style.deviderLine}></div>
      <div className={style.smallDescription}>
        선택 항목에 모두 동의하지 않아도 서비스 이용이 가능합니다. 개인정보 수집
        및 이용에 대한 동의를 거부할 권리가 있으며, 동의 거부 시 회원 서비스
        이용이 제한됩니다.
      </div>

      <Button
        label={'다음'}
        className={style.nextButton}
        onClick={handleNext}
        isActive={isNextButtonEnabled}
      />
    </div>
  );
};

export default TermsPage;
