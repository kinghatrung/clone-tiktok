import classNames from 'classnames/bind';

import styles from './NavigationButton.module.scss';
import { DownArrowIcon, UpArrowIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function NavigationButton() {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('up-arrow')}>
                <UpArrowIcon />
            </button>

            <button className={cx('down-arrow')}>
                <DownArrowIcon />
            </button>
        </div>
    );
}

export default NavigationButton;
