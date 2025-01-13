import classNames from 'classnames/bind';

import styles from './FooterContainer.module.scss';
import Image from '~/components/Image';
import FooterItem from './FooterItem';

const cx = classNames.bind(styles);

function FooterContainer() {
    return (
        <div className={cx('wrapper')}>
            <a href="https://effecthouse.tiktok.com/download" className={cx('brand')}>
                <Image
                    className={cx('image')}
                    alt="Tạo hiệu ứng TikTok"
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/021d2ed936cbb9f7033f.png"
                />
                <p className={cx('text-brand')}>
                    Tạo hiệu ứng TikTok, <br />
                    nhận phần thưởng
                </p>
            </a>
            <FooterItem />
            <span className={cx('tiktok')}>© 2025 TikTok</span>
        </div>
    );
}

export default FooterContainer;
