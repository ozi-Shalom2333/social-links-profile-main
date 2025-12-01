

const Socials = () => {
 
    const socials = ['Github', 'Frontend Mentor', 'LinkedIn', 'Twitter', 'Instagram']


  return (
    <div className="flex flex-col gap-2.5 w-full items-center">
      {
        socials.map(e =>(
            <p className="bg-custom-dark text-center text-custom-white cursor-pointer text-sm w-4/5 py-2 rounded hover:bg-custom-green hover:text-black hover:scale-105 
                       transition-all duration-300">{e}</p>
        ))
      }
    </div>
  )
}

export default Socials
