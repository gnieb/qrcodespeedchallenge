import qrcode from './image-qr-code.png'

export default function QR () {
    return (
        <div className="p-5 max-w-sm max-h-min bg-white border border-gray-200 rounded-lg shadow">
            <a  href="#">
                <img className="rounded-lg" src={qrcode} alt="" />
            </a>
            <div className="p-5 text-center">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Improve your front-end skills by building projects</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                
            </div>
        </div>
    )
}