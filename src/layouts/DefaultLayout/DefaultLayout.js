import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import NavigationButton from '~/components/NavigationButton';
import ButtonDownload from '~/components/Button/ButtonDownload';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>
                <div className={cx('box-content')}>
                    <div className={cx('navigation-content')}>
                        <div className={cx('content')}>{children}</div>
                        <NavigationButton />
                    </div>
                    <ButtonDownload />
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
