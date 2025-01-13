import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <Image
                className={cx('avatar')}
                alt="Gì cũng được"
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=75088&refresh_token=3de2eaa8a05a99416ebffa92023004f3&x-expires=1736503200&x-signature=fRFD2U%2BKW%2Fx2N87QlAHoAmpCxxE%3D&shp=a5d48078&shcp=81f88b70"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>Hello kitty</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>ninhnam</p>
            </div>
        </div>
    );
}

export default AccountItem;
