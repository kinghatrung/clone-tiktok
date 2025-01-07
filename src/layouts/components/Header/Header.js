import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button/Button';
import Search from '../Search';
import Menu from '~/components/Popper/Menu';
import config from '~/config';
import {
    CoinIcon,
    LogoIcon,
    MessageIcon,
    UserIcon,
    SettingIcon,
    HomeIcon,
    MoonIcon,
    LogoutIcon,
    QuestionIcon,
    LanguageIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <HomeIcon />,
        title: 'Công cụ dành cho nhà sáng tạo',
    },
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Tiếng Anh',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    type: 'language',
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    type: 'language',
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    type: 'language',
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    type: 'language',
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    type: 'language',
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <MoonIcon />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Change language to', menuItem.code);
                break;
            default:
                console.log('Menu item clicked', menuItem);
        }
    };

    const userMenu = [
        {
            icon: <UserIcon />,
            title: 'Xem hồ sơ',
            to: '/@nguyenvana',
        },
        {
            icon: <CoinIcon />,
            title: 'Nhận xu',
            to: '/getcoin',
        },
        {
            icon: <SettingIcon />,
            title: 'Cài đặt',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Đăng xuất',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <LogoIcon />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Tải lên
                            </Button>
                            <Tippy content="Hộp thư" delay={[0, 50]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/ec3d0164ffe39688f830b76da1796d52.jpeg?lk3s=a5d48078&nonce=96206&refresh_token=c8159a8fa50d50e76ccae966a30e69c0&x-expires=1736132400&x-signature=HXysMXf%2BIUo0CpiPK0JTB8mXsfU%3D&shp=a5d48078&shcp=81f88b70"
                                className={cx('user-avatar')}
                                alt="Nguyễn Văn A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
