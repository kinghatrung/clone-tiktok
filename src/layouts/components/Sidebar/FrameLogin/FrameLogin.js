import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import styles from './FrameLogin.module.scss';

const cx = classNames.bind(styles);

function FrameLogin({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <Button outline extraLarge>
                Đăng nhập
            </Button>
        </div>
    );
}

export default FrameLogin;
