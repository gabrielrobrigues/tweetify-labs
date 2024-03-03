const fontSizes_example = Array.from({ length: 6 }, (_, i) => (i * 2 + 18));
const [selectedFontSize, setSelectedFontSize] = useState(26);

const handleFontSizeChange = (selectedOption) => {
    setSelectedFontSize(selectedOption.value);
};


<div className="flex gap-x-2 rounded-full bg-[#16202A]">
<img style={{ width: `${selectedFontSize * 3}px`, height: `${selectedFontSize * 3}px` }} className="rounded-full p-2" src="/images/profiles/profile-gabriel-pic.jpg" alt="Profile Pic" />
<div className="flex flex-col h-full justify-center">
    <h3 style={{ fontSize: `${selectedFontSize}px` }}>Gabriel Torres</h3>
    <p style={{ fontSize: `${selectedFontSize - 12}px` }}>@gabriel_torresr</p>
</div>
</div>
<div>
<p>Fonte:</p>
<MainSelect
    options={fontSizes_example.map(size => ({ value: size, label: `${size}px` }))}
    value={selectedFontSize}
    onChange={handleFontSizeChange}
/>
</div>