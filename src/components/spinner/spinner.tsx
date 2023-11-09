import { ProgressSpinner } from 'primereact/progressspinner';
import styles from './spinner.module.scss';

const Spinner = () => {
  return(
    <div className={styles.spinnerContainer}>
      <ProgressSpinner />
    </div>
  );
}
export default Spinner;