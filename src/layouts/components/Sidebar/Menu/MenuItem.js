import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function MenuItem({ image, title, to, icon, activeIcon }) {
    const renderItemMenu = (activeItem = false) => (
        <>
            {image ? (
                <Image
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/ec3d0164ffe39688f830b76da1796d52.jpeg?lk3s=a5d48078&nonce=96206&refresh_token=c8159a8fa50d50e76ccae966a30e69c0&x-expires=1736132400&x-signature=HXysMXf%2BIUo0CpiPK0JTB8mXsfU%3D&shp=a5d48078&shcp=81f88b70"
                    className={cx('user-avatar')}
                    alt="Nguyễn Văn A"
                />
            ) : (
                <>{activeItem ? activeIcon : icon}</>
            )}
            <span className={cx('title')}>{title}</span>
        </>
    );

    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {({ isActive }) => renderItemMenu(isActive)}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    activeIcon: PropTypes.node,
};

export default MenuItem;
