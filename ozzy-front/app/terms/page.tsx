import { Button } from '../components/button/Button'
import { FaCheck } from 'react-icons/fa';

import style from './TermsPage.module.css';

const TermsPage = (props: any) => {
    
    return (<div className={style.outGrid}>
                <div className={style.mainText}>
                    <h2>
                        서비스 이용 약관에 <br />
                        동의해주세요.
                    </h2>
                </div>
                <div className={style.allCheckBoxGrid}>
                    <FaCheck className={style.checkMark}/>
                    네, 모두 동의합니다.
                </div>
                <div className={style.checkBoxGrid}>
                <FaCheck className={style.checkMark}/>
                    [필수]만 14세 이상입니다.
                </div>
                <div className={style.checkBoxGrid}>
                <FaCheck className={style.checkMark}/>
                    [필수]서비스 이용 약관 동의
                </div>
                <div className={style.checkBoxGrid}>
                <FaCheck className={style.checkMark}/>
                    [필수]개인정보 수집 및 이용 동의
                </div>
                <div className={style.checkBoxGrid}>
                <FaCheck className={style.checkMark}/>
                    [선택]개인정보 처리 방침 동의
                </div>
                <div className={style.deviderLine}></div>
                <div className={style.smallDescription}>
                선택 항목에 모두 동의하지 않아도 서비스 이용이 가능합니다.
                개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며,
                동의 거부 시 회원 서비스 이용이 제한됩니다.
                </div>
                <Button label={'다음'} className={style.nextButton}></Button>
          </div>
    );
  };
  export default TermsPage;