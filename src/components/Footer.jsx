const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0">
    <div className="h-[60px] w-screen bg-[#DD1A1A]"></div>
    <div className="relative h-[40px] w-screen bg-black">
      <div className="absolute h-[90px] aspect-square bg-white border-black border-[10px] left-1/2 -translate-x-1/2 -top-[90%] rounded-full">
      <div className="absolute h-[45px] aspect-square bg-[#212121] border-black border-[10px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full"></div>
      </div>
    </div>
  </footer>
  )
}
export default Footer