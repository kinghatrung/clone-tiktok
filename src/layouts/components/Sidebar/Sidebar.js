import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import Image from '~/components/Image';
import {
    HomeIcon,
    LiveIcon,
    ExploreIcon,
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
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                />
                <MenuItem
                    title="Bạn bè"
                    to={config.routes.friends}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                <MenuItem
                    title="Tin nhắn"
                    to={config.routes.messages}
                    icon={<MessageIcon />}
                    activeIcon={<MessageActiveIcon />}
                />
                <MenuItem title="Hồ sơ" to="/@nguyenvana" icon={<LiveIcon />} image />
            </Menu>
        </aside>
    );
}

export default Sidebar;
