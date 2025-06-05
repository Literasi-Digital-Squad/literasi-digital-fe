import {
    LineShareButton,
    LineIcon,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    FacebookShareButton,
    FacebookIcon
} from 'next-share'
export default function PopupShare({ setIsOpen, linkShare }) {
    const copylink = (e) => {
        navigator.clipboard.writeText(linkShare);
        alert("Link berhasil disalin!");
    }
    return (
        <div className="p-5 space-y-7 w-3/4 flex flex-col items-center rounded-xl bg-white">
            <div className="flex justify-between w-full items-center">
                <p className="font-bold">Bagikan</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" onClick={() => setIsOpen(false)}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="grid grid-cols-3 w-full gap-5">
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <LineShareButton
                        url={linkShare}
                        title={'Lihatlah nilai pengetahuan literasi digital saya di CakapDigital!'}
                    >
                        <LineIcon />
                    </LineShareButton>
                    <p>Line</p>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <TelegramShareButton
                        url={linkShare}
                        title={'Lihatlah nilai pengetahuan literasi digital saya di CakapDigital!'}
                    >
                        <TelegramIcon />
                    </TelegramShareButton>
                    <p>Telegram</p>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <WhatsappShareButton
                        url={linkShare}
                        title={'Lihatlah nilai pengetahuan literasi digital saya di CakapDigital!'}
                        separator="\n"
                    >
                        <WhatsappIcon />
                    </WhatsappShareButton>
                    <p>Whatsapp</p>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <FacebookShareButton
                        url={linkShare}
                        quote={'Lihatlah nilai pengetahuan literasi digital saya di CakapDigital!'}
                        hashtag={'#CakapDigital'}
                    >
                        <FacebookIcon />
                    </FacebookShareButton>
                    <p>Facebook</p>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-center">
                    <FacebookMessengerShareButton
                        url={linkShare}
                        appId={''}
                    >
                        <FacebookMessengerIcon />
                    </FacebookMessengerShareButton>
                    <p>Messenger</p>
                </div>
            </div>
            <div className="border w-full border-[#0056D2] rounded-lg flex overflow-hidden">
                <input type="text" className='w-3/4' value={linkShare} disabled />
                <div className="bg-[#0056D2] p-2 w-1/4 font-semibold text-white" onClick={copylink}>Salin</div>
            </div>
        </div>
    )
}