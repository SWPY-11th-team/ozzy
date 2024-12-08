import { Button } from '../components/button/Button'
import { FaTimes  } from 'react-icons/fa';

import styles from './nickname.module.css';

const NickNamePage = (props: any) => {
    
    return (<div className={styles.outGrid}>
            <div className={styles.innerGrid}>
                <div className={styles.mainText}>
                    <h2>
                        어떻게 불러드릴까요? 
                    </h2>
                </div>
                <div className={styles.description}>닉네임은 언제든 변경할 수 있어요!</div>
                <div className={styles.nicknameInputContainer}>
                    <input type="text" className={styles.textBox} />
                    <div className={styles.closeIcon}><FaTimes className={styles.icon} /></div>
                </div>
                <Button label={'완료'} className={styles.nextButton}></Button>
            </div>
          </div>
    );
  };
  
export default NickNamePage;