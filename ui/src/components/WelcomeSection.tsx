import Tango from '@/assets/tangoPhotos/TangoExcitedRight.png'

export function WelcomeSection() {
  return (
    <div className='p-6'>
      <div className="flex items-center space-x-4">
        <div>
          <img src={Tango} alt="Tango the Fox" className="w-full" />
        </div>
        <div className="bg-green-800 rounded-2xl">
          <h2 className="text-white text-xl font-bold mb-2 p-2">Welcome!</h2>
          <p className="text-white text-sm p-2">
        I'm Tango the trail fox, this is my tree leaf game. Explore and select one of the leaves to begin playing.
        All the leaves can be found around the park!
          </p>
        </div>
      </div>
    </div>
  )
}
