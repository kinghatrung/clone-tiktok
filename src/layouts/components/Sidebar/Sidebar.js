import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import FrameLogin from '~/layouts/components/Sidebar/FrameLogin';
import FooterContainer from '~/components/FooterContainer';
import {
    HomeIcon,
    LiveIcon,
    ExploreIcon,
    UserIcon,
    FollowIcon,
    UserGroupIcon,
    MessageIcon,
    HomeActiveIcon,
    ExploreActiveIcon,
    MessageActiveIcon,
    FollowActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={currentUser ? <FollowIcon /> : <UserGroupIcon />}
                    activeIcon={currentUser ? <FollowActiveIcon /> : <UserGroupActiveIcon />}
                />
                {currentUser && (
                    <MenuItem
                        title="Bạn bè"
                        to={config.routes.friends}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                )}
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                {currentUser && (
                    <MenuItem
                        title="Tin nhắn"
                        to={config.routes.messages}
                        icon={<MessageIcon />}
                        activeIcon={<MessageActiveIcon />}
                    />
                )}
                {currentUser ? (
                    <MenuItem title="Hồ sơ" to="/@nguyenvana" image />
                ) : (
                    <MenuItem title="Hồ sơ" to="/khongcogi" activeIcon={<UserIcon />} icon={<UserIcon />} />
                )}
            </Menu>
            {currentUser ? (
                <SuggestedAccounts label="Các tài khoản Đã follow" />
            ) : (
                <FrameLogin label="Đăng nhập để follow các tác giả, thích video và xem bình luận." />
            )}
            <FooterContainer />
        </aside>
    );
}

export default Sidebar;
