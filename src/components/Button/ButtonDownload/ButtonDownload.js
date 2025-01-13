import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import styles from './ButtonDownload.module.scss';
import Button from '~/components/Button';
import { CloseIcon, PhoneIcon } from '~/components/Icons';
import AppDownload from '~/components/AppDownload';

const cx = classNames.bind(styles);

function ButtonDownload() {
    const [showDownloadApp, setShowDownloadApp] = useState(false);
    const [showQRDownload, setShowQRDownload] = useState(false);

    const showButton = useRef();

    const handleShowDownloadApp = () => {
        setShowDownloadApp(!showDownloadApp);
    };

    const handleShowQRDownload = () => {
        setShowQRDownload(!showQRDownload);
        setShowDownloadApp(!showDownloadApp);
    };

    return (
        <div className={cx('wrapper')}>
            <div ref={showButton} className={cx('button')}>
                {!showDownloadApp && (
                    <Button download onClick={handleShowDownloadApp}>
                        Tải ứng dụng
                    </Button>
                )}
            </div>
            {showDownloadApp && (
                <div className={cx('download-btn')}>
                    <div className={cx('item')} onClick={handleShowQRDownload}>
                        <PhoneIcon />
                        <p className={cx('text')}>Tải ứng dụng TikTok</p>
                    </div>
                    <button onClick={() => setShowDownloadApp(!showDownloadApp)} className={cx('close')}>
                        <CloseIcon className={cx('icon')} />
                    </button>
                </div>
            )}
            {showQRDownload && (
                <div className={cx('store-download')}>
                    <AppDownload showQRDownload={showQRDownload} setShowQRDownload={setShowQRDownload} />
                </div>
            )}
        </div>
    );
}

export default ButtonDownload;
