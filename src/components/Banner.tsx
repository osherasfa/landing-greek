export const Banner = () => {
  return (
    <div className="font-montserrat font-black face w-[134rem]">
      <h1 className="text-8xl">{`THE WORLD IS BRUTAL - ISM < BE READY`}</h1>
      <div className="flex items-center gap-8">
        <h1 className="text-8xl font-light text-center">HELLO<span className="block text-sm text-center font-black tracking-[1.3rem] pl-4">YOUR WORLD</span></h1>
        <h1 className="text-4xl">PRO DESIGN<br/>UNIQUE ONE</h1>
        <div className="flex flex-col text-xs tracking-[.2rem]">
          {Array.from({ length: 5 }).map(() => <span>EASY TO USE</span>)}
        </div>
        <h1 className="text-8xl text-stroke">FXS</h1>
        <div>
          <span className="text-lg flex items-center gap-6">
            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            <h4 className="text-4xl">STYLISH & NEW</h4>
          </span>
          <p className="text-lg">SOCIAL MEDIA SOCIAL MEDIA SOCIAL MEDIA SOCIAL MEDIA SOCIAL MEDIA SOCIAL</p>
          <span className="text-lg flex items-center gap-6">
            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
            <h4 className="text-2xl">2023 2024 2025 2026</h4>
          </span>
        </div>
        <h1 className="text-8xl text-stroke">GLO</h1>
      </div>
    </div>
  )
}

export default Banner