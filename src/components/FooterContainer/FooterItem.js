import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './FooterContainer.module.scss';

const cx = classNames.bind(styles);

const footerContents = [
    {
        title: 'Công ty',
        links: [
            {
                name: 'Giới thiệu',
                src: 'https://www.tiktok.com/about?lang=vi-VN',
            },
            {
                name: 'Phòng tin tức',
                src: 'https://newsroom.tiktok.com/vi-vn/?lang=vi-VN',
            },
            {
                name: 'Liên hệ',
                src: 'https://www.tiktok.com/about/contact?lang=vi-VN',
            },
            {
                name: 'Nghề nghiệp',
                src: 'https://lifeattiktok.com/',
            },
        ],
    },
    {
        title: 'Chương trình',
        links: [
            {
                name: 'TikTok for Good',
                src: 'https://www.tiktok.com/for-good/',
            },
            {
                name: 'Quảng cáo',
                src: 'https://ads.tiktok.com/business/vi?amp%3Battr_medium=tt_official_site_guidance&amp%3Brefer=tiktok_web&attr_source=tt_official_site&tt4b_lang_redirect=1',
            },
            {
                name: 'Đại lý TikTok LIVE',
                src: 'https://www.tiktok.com/live/creator-networks/vi?enter_from=tiktok_official',
            },
            {
                name: 'Nhà phát triển',
                src: 'https://developers.tiktok.com/',
            },
            {
                name: 'Minh bạch',
                src: 'https://www.tiktok.com/transparency/en',
            },
            {
                name: 'Phần thưởng trên TikTok',
                src: 'https://www.tiktok.com/tiktok-rewards/eligibility/',
            },
            {
                name: 'Nội dung được nhúng từ TikTok',
                src: 'https://www.tiktok.com/embed',
            },
            {
                name: 'SoundOn Music Distribution',
                src: 'https://www.soundon.global/?lang=en',
            },
            {
                name: 'TikTok Live',
                src: '',
            },
            {
                name: 'TikTok Shop',
                src: 'https://shop-vn.tiktok.com/',
            },
            {
                name: 'Tải TikTok về',
                src: 'https://www.tiktok.com/download/vi-VN',
            },
        ],
    },
    {
        title: 'Điều khoản và chính sách',
        links: [
            {
                name: 'Trợ giúp',
                src: 'https://support.tiktok.com/en',
            },
            {
                name: 'An toàn',
                src: 'https://www.tiktok.com/safety/vi-vn',
            },
            {
                name: 'Điều khoản',
                src: 'https://www.tiktok.com/legal/page/row/terms-of-service/vi',
            },
            {
                name: 'Chính sách quyền riêng tư',
                src: 'https://www.tiktok.com/legal/page/row/privacy-policy/vi',
            },
            {
                name: 'Trợ năng',
                src: 'https://www.tiktok.com/accessibility/vi-VN',
            },
            {
                name: 'Trung tâm quyền riêng tư',
                src: 'https://www.tiktok.com/privacy/overview/vi',
            },
            {
                name: 'Học viện cho nhà sáng tạo',
                src: 'https://www.tiktok.com/creator-academy',
            },
            {
                name: 'Nguyên tắc Cộng đồng',
                src: 'https://www.tiktok.com/community-guidelines/vi?lang=vi-VN',
            },
            {
                name: 'Bản quyền',
                src: 'https://www.tiktok.com/legal/page/global/copyright-policy/vi',
            },
            {
                name: 'Nguyên tắc thực thi pháp luật',
                src: 'https://www.tiktok.com/legal/page/global/law-enforcement/vi',
            },
        ],
    },
];

function FooterItem() {
    const [showLink, setShowLink] = useState(false);

    const handleClickShowLink = (id) => {
        setShowLink((prev) => (prev === id ? null : id));
    };

    return (
        <>
            {footerContents.map((footerContent, index) => (
                <div key={index}>
                    <p className={cx('title')} onClick={() => handleClickShowLink(index)}>
                        {footerContent.title}
                    </p>
                    {showLink === index && (
                        <div className={cx('list-link')}>
                            {footerContent.links.map((link, index) => (
                                <a key={index} target="_blank" href={link.src} className={cx('item-link')}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}

export default FooterItem;
