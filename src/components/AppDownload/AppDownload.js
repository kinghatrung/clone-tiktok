import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './AppDownload.module.scss';
import Image from '~/components/Image';
import { CloseIcon } from '~/components/Icons';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AppDownload({ showQRDownload, setShowQRDownload }) {
    const layoutRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutSide);
        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        };
    }, []);

    const handleClickOutSide = (e) => {
        if (layoutRef.current && !layoutRef.current.contains(e.target)) {
            setShowQRDownload(!showQRDownload);
        }
    };

    return (
        <div ref={layoutRef} className={cx('wrapper')}>
            <div className={cx('box-title')}>
                <div className={cx('button-close')} onClick={() => setShowQRDownload(!showQRDownload)}>
                    <CloseIcon />
                </div>
                <h4 className={cx('title')}>Tải ứng dụng TikTok</h4>
            </div>

            <div className={cx('list-download')}>
                <div className={cx('qr-download')}>
                    <p className={cx('qr-name')}>Hãy quét mã QR để tải TikTok về máy</p>
                    <Image
                        className={cx('qr-image')}
                        src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/47624c235266dedd8e4d.png"
                        alt="QR Download"
                    />
                </div>

                <div className={cx('app-download')}>
                    <p className={cx('app-name')}>Tải về từ cửa hàng ứng dụng</p>
                    <div className={cx('app')}>
                        <a className={cx('store')} href="">
                            <Image
                                className={cx('app-image')}
                                src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop-islands/f1596f39e85631c052c4.png"
                                alt="Microsoft Download"
                            />
                        </a>
                        <a className={cx('store')} href="">
                            <Image
                                className={cx('app-image')}
                                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                alt="AppStore Download"
                            />
                        </a>
                        <a className={cx('store')} href="">
                            <Image
                                className={cx('app-image')}
                                src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png"
                                alt="Amazon Download"
                            />
                        </a>
                        <a className={cx('store')} href="">
                            <Image
                                className={cx('app-image')}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1920px-Google_Play_Store_badge_EN.svg.png"
                                alt="Google Play Download"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

AppDownload.propTypes = {
    showQRDownload: PropTypes.bool,
    setShowQRDownload: PropTypes.func,
};

export default AppDownload;
