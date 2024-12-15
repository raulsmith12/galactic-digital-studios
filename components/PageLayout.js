import Image from 'next/image';
import InsidePageHeader from './InsidePageHeader';
import RequestForm from './RequestForm';
import { Suspense, useEffect, useState } from 'react';

const PageLayout = ({ title, images, content, service }) => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const desktopDevice = window.innerWidth;
        if (desktopDevice > 767) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
    }, []);

    return (
        <div className="container-fluid pb-5 mb-5">
            <div className="row pt-5 mt-5">
                <InsidePageHeader title={title} />
            </div>
            <Suspense fallback={<p>Loading...</p>}>
                <div className="row pt-4">
                    <div className="col-md-9 col-sm-10 ps-4 pe-2" dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="col-md-3 col-sm-2">
                        {images.map((item, index) => (
                            <Image key={index} src={item.src} alt={item.alt} width={0} height={0} style={{ width: "100%", height: "auto" }} className="pb-3" />
                        ))}
                    </div>
                </div>
            </Suspense>
            <Suspense fallback={<p>Loading...</p>}>
                {isDesktop && (
                    <div className="row">
                        <div className="col">
                            <RequestForm selectedService={service} />
                        </div>
                    </div>
                )}
            </Suspense>
        </div>
    )
}

export default PageLayout;