export default function WhiteButton({ text, marginY, width, onClick }) {
    return (
        <button style={{
            width: width ? `${width}px` : '100%',
            marginTop: marginY ? `${marginY}px` : '0',
            marginBottom: marginY ? `${marginY}px` : '0',
        }} className="white-button uppercase py-1.5 bg-white rounded-full text-black font-semibold" onClick={onClick}>{text}</button>
    )
}